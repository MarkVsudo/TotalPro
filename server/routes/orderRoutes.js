import { Router } from "express";
import crypto from "crypto";
import db from "../config/dbConfig.js";

const router = Router();

const PRIVATE_KEY = process.env.MYPOS_PRIVATE_KEY.replace(/\\n/g, "\n");
const MYPOS_PUBLIC_CERT = process.env.MYPOS_PUBLIC_CERT.replace(/\\n/g, "\n");

const MYPOS_URL = "https://www.mypos.com/vmp/checkout-test"; // → /checkout за production
const SID = "000000000000010";
const WALLET = "61938166610";
const KEY_INDEX = "1";
const BASE_URL = "https://totalpro.onrender.com"; // или ngrok URL при тестване
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"; // за redirect на клиента

// ─── Помощна функция за подписване ────────────────────────────────────────────
function signParams(params) {
  // 1. Вземи всички стойности в реда, в който са добавени
  const concatenated = Buffer.from(Object.values(params).join("-")).toString(
    "base64",
  );

  // 2. Подпиши с RSA-SHA256
  const sign = crypto.createSign("SHA256");
  sign.update(concatenated);
  sign.end();

  return sign.sign(PRIVATE_KEY, "base64");
}

// ─── Помощна функция за верификация на Notify ─────────────────────────────────
function verifyNotify(params, signature) {
  const concatenated = Buffer.from(Object.values(params).join("-")).toString(
    "base64",
  );
  const verify = crypto.createVerify("SHA256");
  verify.update(concatenated);
  verify.end();
  return verify.verify(MYPOS_PUBLIC_CERT, signature, "base64");
}

// ─── POST /api/order — създава поръчката ──────────────────────────────────────
router.post("/order", async (req, res) => {
  try {
    const {
      contact,
      shipping,
      invoice,
      paymentType,
      note,
      total,
      items,
      consents,
    } = req.body;

    if (!contact?.email) {
      return res.status(400).json({ error: "Email is required." });
    }

    if (!shipping?.firstName || !shipping?.lastName) {
      return res.status(400).json({ error: "Name is required." });
    }

    if (
      !shipping?.address ||
      !shipping?.city ||
      !shipping?.postal ||
      !shipping?.phone
    ) {
      return res.status(400).json({ error: "Shipping fields are required." });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Order must contain items." });
    }

    if (!consents?.termsAccepted || !consents?.privacyAccepted) {
      return res
        .status(400)
        .json({ error: "Terms and privacy must be accepted." });
    }

    const email = contact.email;

    const firstName = shipping.firstName;
    const lastName = shipping.lastName;
    const address = shipping.address;
    const city = shipping.city;
    const country = shipping.country;
    const postal = shipping.postal;
    const phone = shipping.phone;

    const invoiceRequested = !!invoice && Object.keys(invoice).length > 0;

    const invoiceType = invoiceRequested ? (invoice.type ?? null) : null;
    const invoiceName = invoiceRequested ? (invoice.name ?? null) : null;
    const invoiceCompanyName = invoiceRequested
      ? (invoice.companyName ?? null)
      : null;
    const invoiceEik = invoiceRequested ? (invoice.eik ?? null) : null;
    const invoiceMol = invoiceRequested ? (invoice.mol ?? null) : null;

    const invoiceAddress = invoiceRequested
      ? (invoice?.address?.address ?? null)
      : null;
    const invoiceCity = invoiceRequested
      ? (invoice?.address?.city ?? null)
      : null;
    const invoicePostal = invoiceRequested
      ? (invoice?.address?.postal ?? null)
      : null;
    const invoiceCountry = invoiceRequested
      ? (invoice?.address?.country ?? null)
      : null;

    const invoiceAddressSameAsShipping = invoiceRequested
      ? invoiceAddress === address &&
        invoiceCity === city &&
        invoicePostal === postal &&
        invoiceCountry === country
      : true;

    const createdOrder = await db.tx(async (t) => {
      const order = await t.one(
        `INSERT INTO orders (
          email, first_name, last_name, address, city, country, postal, phone,
          order_note, invoice_requested, invoice_type, invoice_name,
          invoice_company_name, invoice_eik, invoice_mol,
          invoice_address_same_as_shipping, invoice_address, invoice_city,
          invoice_postal, invoice_country, payment_type, total,
          terms_accepted, privacy_accepted, marketing_opt_in, status
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,
          $16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26
        ) RETURNING id, order_number, status, created_at`,
        [
          contact.email,
          shipping.firstName,
          shipping.lastName,
          shipping.address,
          shipping.city,
          shipping.country,
          shipping.postal,
          shipping.phone,
          note ?? null,
          !!invoice,
          invoice?.type ?? null,
          invoice?.name ?? null,
          invoice?.companyName ?? null,
          invoice?.eik ?? null,
          invoice?.mol ?? null,
          true,
          invoice?.address?.address ?? null,
          invoice?.address?.city ?? null,
          invoice?.address?.postal ?? null,
          invoice?.address?.country ?? null,
          paymentType,
          total,
          consents.termsAccepted,
          consents.privacyAccepted,
          consents.marketingOptIn ?? false,
          "pending", // <-- статус при създаване
        ],
      );

      const itemQueries = items.map((item) =>
        t.none(
          `INSERT INTO order_items (order_id, product_id, qty, unit_price, options)
           VALUES ($1,$2,$3,$4,$5)`,
          [
            order.id,
            parseInt(item.product_id, 10),
            item.qty,
            item.unit_price,
            item.options ?? {},
          ],
        ),
      );
      await t.batch(itemQueries);

      return order;
    });

    res.status(201).json({ order: createdOrder });
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ─── GET /api/order/:id/pay — build + sign → redirect към myPOS ───────────────
router.get("/order/:id/pay", async (req, res) => {
  try {
    const order = await db.oneOrNone(
      `SELECT o.*, 
  array_agg(json_build_object(
    'name', p.product_name,  
    'qty', oi.qty,
    'unit_price', oi.unit_price,
    'image_url', 'https://res.cloudinary.com/dh1arjjjy/image/upload/' || pi.public_id
  )) as cart_items
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.product_id = oi.product_id
LEFT JOIN product_images pi ON pi.product_id = p.product_id AND pi.is_main = true
WHERE o.id = $1
GROUP BY o.id`,
      [req.params.id],
    );

    if (!order) return res.status(404).send("Order not found");
    if (order.status === "paid")
      return res.redirect(
        `${BASE_URL}/checkout/success?order=${order.order_number}`,
      );

    // Уникален OrderID — комбинираме order_number + timestamp за сигурност
    const myposOrderId = `${order.order_number}-${Date.now()}`;

    // Запиши myposOrderId за да можеш да match-неш при Notify
    await db.none("UPDATE orders SET mypos_order_id = $1 WHERE id = $2", [
      myposOrderId,
      order.id,
    ]);

    // Изграждаме cart параметрите
    const cartItems = order.cart_items;
    const cartParams = {};
    cartItems.forEach((item, i) => {
      console.log("order item ", item);

      const n = i + 1;
      cartParams[`Article_${n}`] = item.name;
      cartParams[`Quantity_${n}`] = String(item.qty);
      cartParams[`Price_${n}`] = parseFloat(item.unit_price).toFixed(2);
      cartParams[`Amount_${n}`] = (
        item.qty * parseFloat(item.unit_price)
      ).toFixed(2);
      cartParams[`Currency_${n}`] = "EUR";
    });

    const cartTotal = order.cart_items.reduce((sum, item) => {
      return sum + item.qty * parseFloat(item.unit_price);
    }, 0);

    // ВАЖНО: редът на параметрите влияе върху подписа!
    const params = {
      IPCmethod: "IPCPurchase",
      IPCVersion: "1.4",
      IPCLanguage: "BG",
      SID,
      WalletNumber: WALLET,
      Amount: cartTotal.toFixed(2),
      Currency: "EUR",
      OrderID: myposOrderId,
      KeyIndex: KEY_INDEX,
      PaymentMethod: "1",
      PaymentParametersRequired: "0",
      CardTokenRequest: "0",
      // Данни на клиента
      CustomerEmail: order.email,
      CustomerPhone: order.phone,
      CustomerFirstNames: order.first_name,
      CustomerFamilyName: order.last_name,
      CustomerAddress: order.address,
      CustomerCity: order.city,
      CustomerZIPCode: order.postal,
      CustomerCountry: "BGR", // ISO3 код — "BGR"
      URL_OK: `${BASE_URL}/api/order/success/${order.order_number}`,
      URL_Cancel: `${BASE_URL}/api/order/cancel/${order.order_number}`,
      URL_Notify: `${BASE_URL}/api/order/notify`,
      CartItems: String(cartItems.length),
      ...cartParams,
    };

    console.log("URL_Notify:", `${BASE_URL}/api/order/notify`);

    params.Signature = signParams(params);

    // Auto-submit HTML форма
    const hiddenFields = Object.entries(params)
      .map(
        ([k, v]) =>
          `<input type="hidden" name="${k}" value="${v.replace(/"/g, "&quot;")}" />`,
      )
      .join("\n");

    res.send(`<!DOCTYPE html>
<html>
  <head><title>Пренасочване към плащане...</title></head>
  <body>
    <p>Пренасочване към страница за плащане...</p>
    <form id="payform" method="POST" action="${MYPOS_URL}">
      ${hiddenFields}
    </form>
    <script>document.getElementById('payform').submit();</script>
  </body>
</html>`);
  } catch (err) {
    console.error("Pay redirect error:", err);
    res.status(500).send("Грешка при пренасочване");
  }
});

// ─── POST /api/order/notify — myPOS webhook ───────────────────────────────────
router.post("/order/notify", async (req, res) => {
  try {
    const body = req.body;
    const { Signature, ...params } = body;

    const isValid = verifyNotify(params, Signature);
    if (!isValid) {
      console.error("Invalid myPOS signature!");
      return res.status(400).send("Invalid signature");
    }

    const { OrderID, Amount, Currency, IPC_Trnref } = params;

    await db.none(
      `UPDATE orders 
       SET status = 'paid', paid_at = NOW(), mypos_trnref = $1
       WHERE mypos_order_id = $2`,
      [IPC_Trnref, OrderID],
    );

    console.log(
      `✅ Order ${OrderID} платена — ${Amount} ${Currency}, Trnref: ${IPC_Trnref}`,
    );

    res.status(200).send("OK");
  } catch (err) {
    console.error("Notify error:", err);
    res.status(200).send("OK");
  }
});

router.post("/order/success/:orderNumber", (req, res) => {
  const { orderNumber } = req.params;
  res.redirect(`${FRONTEND_URL}/checkout/success/${orderNumber}`);
});

router.post("/order/cancel/:orderNumber", (req, res) => {
  const { orderNumber } = req.params;
  res.redirect(`${FRONTEND_URL}/checkout/cancel/${orderNumber}`);
});

export default router;
