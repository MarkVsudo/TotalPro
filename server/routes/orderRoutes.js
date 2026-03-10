import { Router } from "express";
import db from "../config/dbConfig.js";

const router = Router();

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

    const termsAccepted = consents.termsAccepted;
    const privacyAccepted = consents.privacyAccepted;
    const marketingOptIn = consents.marketingOptIn ?? false;

    const createdOrder = await db.tx(async (t) => {
      const order = await t.one(
        `
        INSERT INTO orders (
          email,
          first_name,
          last_name,
          address,
          city,
          country,
          postal,
          phone,
          order_note,
          invoice_requested,
          invoice_type,
          invoice_name,
          invoice_company_name,
          invoice_eik,
          invoice_mol,
          invoice_address_same_as_shipping,
          invoice_address,
          invoice_city,
          invoice_postal,
          invoice_country,
          payment_type,
          total,
          terms_accepted,
          privacy_accepted,
          marketing_opt_in
        )
        VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
          $11,$12,$13,$14,$15,$16,$17,$18,$19,$20,
          $21,$22,$23,$24,$25
        )
        RETURNING id, order_number, status, created_at
        `,
        [
          email,
          firstName,
          lastName,
          address,
          city,
          country,
          postal,
          phone,
          note ?? null,
          invoiceRequested,
          invoiceType,
          invoiceName,
          invoiceCompanyName,
          invoiceEik,
          invoiceMol,
          invoiceAddressSameAsShipping,
          invoiceAddress,
          invoiceCity,
          invoicePostal,
          invoiceCountry,
          paymentType,
          total,
          termsAccepted,
          privacyAccepted,
          marketingOptIn,
        ],
      );

      const itemQueries = items.map((item) =>
        t.none(
          `
          INSERT INTO order_items (
            order_id,
            product_id,
            qty,
            unit_price,
            options
          )
          VALUES ($1, $2, $3, $4, $5)
          `,
          [
            order.id,
            item.product_id,
            item.qty,
            item.unit_price,
            item.options ?? {},
          ],
        ),
      );

      await t.batch(itemQueries);

      return order;
    });

    res.status(201).json({
      message: "Order created successfully",
      order: createdOrder,
    });
  } catch (err) {
    console.error("An error occurred while creating an order:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/orders", async (req, res) => {
  try {
    const orders = await db.any(
      "SELECT * FROM orders ORDER BY created_at DESC",
    );
    res.json(orders);
  } catch (err) {
    console.error("An error occurred while fetching orders:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
