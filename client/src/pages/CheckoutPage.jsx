import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import TbiBankLogo from "../assets/tbi-bank.png";
import CartItem from "../components/shared/CartItem";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item?.unitPrice ?? 0);
      return acc + price * (item?.quantity ?? 1);
    }, 0);
  }, [cartItems]);

  /**
   * ДДС логика (Важно):
   * Ако цените са с включено ДДС (B2C най-често):
   *  - total НЕ добавя vat
   *  - vat се показва като "част от" subtotal
   */
  const PRICES_INCLUDE_VAT = true;
  const vatRate = 0.2;

  const vat = useMemo(() => {
    if (PRICES_INCLUDE_VAT) {
      // 20% включено ДДС => 20/120 от крайната цена
      return subtotal * (vatRate / (1 + vatRate));
    }
    return subtotal * vatRate;
  }, [subtotal]);

  const total = useMemo(() => {
    return PRICES_INCLUDE_VAT ? subtotal : subtotal + vat;
  }, [subtotal, vat]);

  // Form state
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "България",
    postal: "",
    phone: "",

    // Допълнителни неща:
    orderNote: "",

    // Фактура:
    invoiceRequested: false,
    invoiceType: "person", // "person" | "company"
    invoiceName: "", // за физическо лице (ако искаш отделно от first/last)
    invoiceCompanyName: "",
    invoiceEik: "",
    invoiceVatNumber: "",
    invoiceMol: "",
    invoiceAddressSameAsShipping: true,
    invoiceAddress: "",
    invoiceCity: "",
    invoicePostal: "",
    invoiceCountry: "България",

    // Съгласия:
    termsAccepted: false,
    privacyAccepted: false,
    marketingOptIn: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [paymentType, setPaymentType] = useState("on-delivery");

  const paymentTypeText = (paymentType) => {
    switch (paymentType) {
      case "on-delivery":
        return (
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p>Плащане при доставка (наложен платеж).</p>
          </div>
        );
      case "with-card":
        return (
          <p className="mt-3 text-sm text-gray-600">
            Плащане с карта. (Тук по-късно вържи реален payment gateway.)
          </p>
        );
      case "bank-transfer":
        return (
          <p className="mt-3 text-sm text-gray-600">
            Плащане по банков път. (След създаване на поръчка покажи IBAN и
            основание.)
          </p>
        );
      case "on-lease":
        return (
          <p className="mt-3 text-sm text-gray-600">
            Покупка на изплащане чрез tbi bank.
          </p>
        );
      default:
        return (
          <p className="mt-3 text-sm text-red-600">
            Избрали сте невалиден начин за плащане! Моля, изберете друга опция.
          </p>
        );
    }
  };

  // Минимални валидации
  const errors = useMemo(() => {
    const e = {};
    const emailOk =
      typeof form.email === "string" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

    if (!emailOk) e.email = "Моля, въведи валиден имейл.";
    if (!form.firstName.trim()) e.firstName = "Името е задължително.";
    if (!form.lastName.trim()) e.lastName = "Фамилията е задължителна.";
    if (!form.address.trim()) e.address = "Адресът е задължителен.";
    if (!form.city.trim()) e.city = "Градът е задължителен.";
    if (!form.postal.trim()) e.postal = "Пощенският код е задължителен.";
    if (!form.phone.trim()) e.phone = "Телефонът е задължителен.";

    // Фактура (ако е поискана)
    if (form.invoiceRequested) {
      if (form.invoiceType === "person") {
        // по избор — може да ползваш first/last без отделно поле
        // ако искаш задължително име за фактура:
        // if (!form.invoiceName.trim()) e.invoiceName = "Име за фактура е задължително.";
      } else {
        if (!form.invoiceCompanyName.trim())
          e.invoiceCompanyName = "Име на фирма е задължително.";
        if (!form.invoiceEik.trim())
          e.invoiceEik = "ЕИК/Булстат е задължителен.";
      }

      if (!form.invoiceAddressSameAsShipping) {
        if (!form.invoiceAddress.trim())
          e.invoiceAddress = "Адрес за фактура е задължителен.";
        if (!form.invoiceCity.trim())
          e.invoiceCity = "Град за фактура е задължителен.";
        if (!form.invoicePostal.trim())
          e.invoicePostal = "Пощенски код за фактура е задължителен.";
      }
    }

    // Съгласия
    if (!form.termsAccepted)
      e.termsAccepted = "Трябва да приемеш Общите условия.";
    if (!form.privacyAccepted)
      e.privacyAccepted = "Трябва да приемеш Политиката за поверителност.";

    return e;
  }, [form]);

  const canSubmit = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const submitOrder = async () => {
    // Тук пращаш payload към backend
    const payload = {
      contact: { email: form.email },
      shipping: {
        firstName: form.firstName,
        lastName: form.lastName,
        address: form.address,
        apartment: form.apartment,
        city: form.city,
        country: form.country,
        postal: form.postal,
        phone: form.phone,
      },
      invoice: form.invoiceRequested
        ? {
            type: form.invoiceType,
            name:
              form.invoiceType === "person"
                ? form.invoiceName?.trim() || null
                : null,
            companyName:
              form.invoiceType === "company" ? form.invoiceCompanyName : null,
            eik: form.invoiceType === "company" ? form.invoiceEik : null,
            vatNumber:
              form.invoiceType === "company" ? form.invoiceVatNumber : null,
            mol: form.invoiceType === "company" ? form.invoiceMol : null,
            address: form.invoiceAddressSameAsShipping
              ? {
                  address: form.address,
                  apartment: form.apartment,
                  city: form.city,
                  postal: form.postal,
                  country: form.country,
                }
              : {
                  address: form.invoiceAddress,
                  city: form.invoiceCity,
                  postal: form.invoicePostal,
                  country: form.invoiceCountry,
                },
          }
        : null,
      payment: {
        type: paymentType,
      },
      note: form.orderNote,
      totals: {
        subtotal,
        vat,
        total,
        pricesIncludeVat: PRICES_INCLUDE_VAT,
        vatRate,
      },
      items: cartItems.map((ci) => ({
        product_id: ci?.product?.product_id,
        qty: ci?.quantity ?? 1,
        unit_price: parseFloat(ci?.product?.price ?? 0),
      })),
      consents: {
        termsAccepted: form.termsAccepted,
        privacyAccepted: form.privacyAccepted,
        marketingOptIn: form.marketingOptIn,
      },
    };

    console.log("ORDER PAYLOAD", payload);

    // пример:
    // await api.post("/orders", payload)
  };

  // Empty state
  if (cartItems.length === 0) {
    return (
      <section
        id="checkout"
        className="bg-white text-[#002B5B] my-24 px-4 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="flex size-24 items-center justify-center rounded-full bg-gray-100">
            <ShoppingCartIcon className="size-12 text-gray-400" />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-gray-900">
            Количката ти е празна
          </h1>

          <p className="mt-3 text-base text-gray-500 max-w-md">
            Не можеш да завършиш поръчка без продукти в количката. Разгледай
            каталога и избери нещо за себе си.
          </p>

          <Link
            to="/air-conditioning"
            className="mt-8 inline-flex items-center rounded-md bg-[#002B5B] px-6 py-3 text-base font-semibold text-white hover:bg-blue-900 transition-colors"
          >
            Започни пазаруване
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      id="checkout"
      className="bg-white text-[#002B5B] my-24 px-4 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-bold mb-8">Завършване на поръчка</h1>

          {/* Contact */}
          <div className="pb-8 border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Информация за контакт
            </h2>

            <div className="mt-4">
              <label className="block text-xs font-medium text-gray-700">
                Имейл адрес
              </label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                type="email"
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Shipping */}
          <div className="pb-8 border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Данни за доставка (само до адрес)
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Име
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Фамилия
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700">
                  Адрес
                </label>
                <input
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-red-600">{errors.address}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700">
                  Апартамент, вход, етаж и др. (по избор)
                </label>
                <input
                  name="apartment"
                  value={form.apartment}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Град
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.city && (
                  <p className="mt-1 text-xs text-red-600">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Държава
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={onChange}
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                >
                  <option>България</option>
                  <option>Румъния</option>
                  <option>Гърция</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Пощенски код
                </label>
                <input
                  name="postal"
                  value={form.postal}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.postal && (
                  <p className="mt-1 text-xs text-red-600">{errors.postal}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700">
                  Телефон
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  type="tel"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Invoice */}
          <div className="py-8 border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Фактура
            </h2>

            <div className="flex gap-2 mt-4">
              <div className="flex h-5 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    type="checkbox"
                    id="invoiceRequested"
                    name="invoiceRequested"
                    checked={form.invoiceRequested}
                    onChange={onChange}
                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-[#002b5b] checked:bg-[#002b5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002b5b] forced-colors:appearance-auto"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-checked:opacity-100"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="invoiceRequested"
                className="min-w-0 flex-1 text-sm text-gray-600"
              >
                Искам фактура
              </label>
            </div>

            {form.invoiceRequested && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Тип клиент
                    </label>
                    <select
                      name="invoiceType"
                      value={form.invoiceType}
                      onChange={onChange}
                      className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    >
                      <option value="person">Физическо лице</option>
                      <option value="company">Фирма</option>
                    </select>
                  </div>

                  {form.invoiceType === "person" ? (
                    <div>
                      <label className="block text-xs font-medium text-gray-700">
                        Име за фактура (по избор)
                      </label>
                      <input
                        name="invoiceName"
                        value={form.invoiceName}
                        onChange={onChange}
                        type="text"
                        placeholder="Ако е различно от името за доставка"
                        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                      {errors.invoiceName && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.invoiceName}
                        </p>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-gray-700">
                          Име на фирма
                        </label>
                        <input
                          name="invoiceCompanyName"
                          value={form.invoiceCompanyName}
                          onChange={onChange}
                          type="text"
                          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        {errors.invoiceCompanyName && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.invoiceCompanyName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          ЕИК / Булстат
                        </label>
                        <input
                          name="invoiceEik"
                          value={form.invoiceEik}
                          onChange={onChange}
                          type="text"
                          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        {errors.invoiceEik && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.invoiceEik}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          ДДС № (по избор)
                        </label>
                        <input
                          name="invoiceVatNumber"
                          value={form.invoiceVatNumber}
                          onChange={onChange}
                          type="text"
                          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-gray-700">
                          МОЛ (по избор)
                        </label>
                        <input
                          name="invoiceMol"
                          value={form.invoiceMol}
                          onChange={onChange}
                          type="text"
                          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="flex h-5 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        type="checkbox"
                        id="invoiceAddressSameAsShipping"
                        name="invoiceAddressSameAsShipping"
                        checked={form.invoiceAddressSameAsShipping}
                        onChange={onChange}
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-[#002b5b] checked:bg-[#002b5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002b5b] forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <label
                    htmlFor="invoiceAddressSameAsShipping"
                    className="min-w-0 flex-1 text-sm text-gray-600"
                  >
                    Адресът за фактура е същият като за доставка
                  </label>
                </div>

                {!form.invoiceAddressSameAsShipping && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-gray-700">
                        Адрес за фактура
                      </label>
                      <input
                        name="invoiceAddress"
                        value={form.invoiceAddress}
                        onChange={onChange}
                        type="text"
                        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                      {errors.invoiceAddress && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.invoiceAddress}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700">
                        Град
                      </label>
                      <input
                        name="invoiceCity"
                        value={form.invoiceCity}
                        onChange={onChange}
                        type="text"
                        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                      {errors.invoiceCity && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.invoiceCity}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700">
                        Държава
                      </label>
                      <select
                        name="invoiceCountry"
                        value={form.invoiceCountry}
                        onChange={onChange}
                        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      >
                        <option>България</option>
                        <option>Румъния</option>
                        <option>Гърция</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700">
                        Пощенски код
                      </label>
                      <input
                        name="invoicePostal"
                        value={form.invoicePostal}
                        onChange={onChange}
                        type="text"
                        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                      {errors.invoicePostal && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.invoicePostal}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Payment */}
          <div className="py-8 border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Начин на плащане
            </h2>

            <div className="flex gap-4 mt-4 flex-wrap">
              <button
                type="button"
                onClick={() => setPaymentType("on-delivery")}
                className="flex-1 min-w-[180px] rounded-md bg-[#002B5B] py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                Наложен платеж
              </button>

              <button
                type="button"
                onClick={() => setPaymentType("with-card")}
                className="flex-1 min-w-[180px] rounded-md bg-[#002B5B] py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                С карта
              </button>

              <button
                type="button"
                onClick={() => setPaymentType("bank-transfer")}
                className="flex-1 min-w-[180px] rounded-md bg-[#002B5B] py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                Банков трансфер
              </button>

              <button
                type="button"
                onClick={() => setPaymentType("on-lease")}
                className="flex-1 min-w-[180px] flex justify-center items-center rounded-md bg-[#FF6600] py-3 text-white text-sm font-semibold hover:brightness-95 transition-colors"
              >
                <span>Купи с</span>
                <img
                  alt="TbiBank Logo"
                  src={TbiBankLogo}
                  className="size-8 rounded-lg mx-1.5"
                />
                <span>bank</span>
              </button>
            </div>

            {paymentTypeText(paymentType)}
          </div>

          {/* Note */}
          <div className="py-8 border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Бележка към поръчката (по избор)
            </h2>
            <textarea
              name="orderNote"
              value={form.orderNote}
              onChange={onChange}
              rows={4}
              className="mt-3 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Напр. доставка след 17:00, звънете преди доставка и т.н."
            />
          </div>

          {/* Consents */}
          <div className="py-8">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Съгласия
            </h2>

            <div className="mt-4 space-y-3">
              <div className="flex gap-2">
                <div className="flex h-5 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      type="checkbox"
                      id="termsAccepted"
                      name="termsAccepted"
                      checked={form.termsAccepted}
                      onChange={onChange}
                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-[#002b5b] checked:bg-[#002b5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002b5b] forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="termsAccepted"
                  className="min-w-0 flex-1 text-sm text-gray-600"
                >
                  Съгласен съм с{" "}
                  <Link
                    to="/terms"
                    className="text-[#002b5b] font-semibold underline"
                  >
                    Общите условия
                  </Link>
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-xs text-red-600">{errors.termsAccepted}</p>
              )}
              <div className="flex gap-2">
                <div className="flex h-5 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      name="privacyAccepted"
                      checked={form.privacyAccepted}
                      onChange={onChange}
                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-[#002b5b] checked:bg-[#002b5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002b5b] forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="privacyAccepted"
                  className="min-w-0 flex-1 text-sm text-gray-600"
                >
                  Запознат съм с{" "}
                  <Link
                    to="/privacy"
                    className="text-[#002b5b] font-semibold underline"
                  >
                    Политиката за поверителност
                  </Link>
                </label>
              </div>
              {errors.privacyAccepted && (
                <p className="text-xs text-red-600">{errors.privacyAccepted}</p>
              )}

              <div className="flex gap-2">
                <div className="flex h-5 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      type="checkbox"
                      id="marketingOptIn"
                      name="marketingOptIn"
                      checked={form.marketingOptIn}
                      onChange={onChange}
                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-[#002b5b] checked:bg-[#002b5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002b5b] forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="marketingOptIn"
                  className="min-w-0 flex-1 text-sm text-gray-600"
                >
                  Искам да получавам промоции и новини
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="lg:col-span-5 sticky top-6 self-start">
          <h2 className="text-sm font-semibold tracking-wide text-gray-900 mb-4">
            Обобщение на поръчката
          </h2>

          <div className="rounded-lg border border-gray-200 bg-white">
            <ul className="divide-y divide-gray-200 px-5">
              {cartItems.map((item, index) => (
                <CartItem
                  key={`${item.product.product_id}-${JSON.stringify(item.options ?? {})}`}
                  item={item}
                  index={index}
                />
              ))}
            </ul>

            <div className="p-5 border-t border-gray-200">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Междинна сума</span>
                  <span className="font-medium text-gray-900">
                    {subtotal.toFixed(2)} €
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка</span>
                  <span className="font-medium text-gray-900">Безплатна</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    ДДС ({PRICES_INCLUDE_VAT ? "включено" : "добавено"})
                  </span>
                  <span className="font-medium text-gray-900">
                    {vat.toFixed(2)} €
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm font-semibold">
                <span className="text-gray-900">Общо</span>
                <span className="text-gray-900">{total.toFixed(2)} €</span>
              </div>

              {!canSubmit && (
                <div className="mt-3 rounded-md bg-red-50 p-3 text-xs text-red-700">
                  <p className="font-semibold">Провери формата:</p>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    {Object.values(errors)
                      .slice(0, 5)
                      .map((msg, i) => (
                        <li key={i}>{msg}</li>
                      ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                disabled={!canSubmit}
                onClick={submitOrder}
                className={`mt-5 w-full rounded-md py-3 text-white text-sm font-semibold transition-colors ${
                  canSubmit
                    ? "bg-[#002B5B] hover:bg-blue-900"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Потвърди поръчката
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CheckoutPage;
