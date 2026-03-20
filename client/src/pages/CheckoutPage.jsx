import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import TbiBankLogo from "../assets/tbi-bank.png";
import CartItem from "../components/shared/CartItem";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import API from "../api/api";
import SucessAlert from "../components/shared/SucessAlert";
import ErrorAlert from "../components/shared/ErrorAlert";

const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);

  let navigate = useNavigate();
  const { cartItems } = useCart();

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item?.unitPrice ?? 0);
      return acc + price * (item?.quantity ?? 1);
    }, 0);
  }, [cartItems]);

  const PRICES_INCLUDE_VAT = true;
  const vatRate = 0.2;

  const vat = useMemo(() => {
    if (PRICES_INCLUDE_VAT) {
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
    city: "",
    country: "България",
    postal: "",
    phone: "",

    orderNote: "",

    invoiceRequested: false,
    invoiceType: "person", // "person" | "company"
    invoiceName: "", // за физическо лице
    invoiceCompanyName: "",
    invoiceEik: "",
    invoiceMol: "",
    invoiceAddressSameAsShipping: true,
    invoiceAddress: "",
    invoiceCity: "",
    invoicePostal: "",
    invoiceCountry: "България",

    termsAccepted: false,
    privacyAccepted: false,
    marketingOptIn: false,
  });

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 9);
    setForm((prev) => ({ ...prev, phone: digitsOnly }));
  };

  const phoneDisplay = (digits) => {
    const d = digits || "";
    const a = d.slice(0, 2);
    const b = d.slice(2, 5);
    const c = d.slice(5, 9);
    return [a, b, c].filter(Boolean).join(" ");
  };

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
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p>
              Плащането с карта се извършва сигурно чрез <strong>myPos</strong>.
            </p>
            <p>
              Приемаме всички основни дебитни и кредитни карти (Visa,
              Mastercard).
            </p>
          </div>
        );
      case "bank-transfer":
        return (
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p className="font-semibold text-gray-800">
              Моля, преведете цялата сума по следната банкова сметка:
            </p>
            <div className="mt-2 space-y-1">
              <p>
                <span className="font-medium">Получател:</span> ТОТАЛ ПРО ЕООД
              </p>
              <p>
                <span className="font-medium">Банка:</span> Пощенска банка АД
              </p>
              <p>
                <span className="font-medium">IBAN:</span>{" "}
                BG00BPBI00000000000000
              </p>
              <p>
                <span className="font-medium">BIC:</span> BPBIBGSF
              </p>
              <p>За основание напишете номера на поръчката.</p>
            </div>
            <p className="mt-2">
              След като потвърдите поръчката ще получите имейл, който може да
              принтирате и използвате като проформа фактура.
            </p>
            <p>
              Банковите такси (включително на изпращача и получателя) трябва да
              се заплатят от клиента.
            </p>
            <p className="font-medium">
              Поръчката Ви ще бъде изпратена само при получено плащане.
            </p>
          </div>
        );
      case "on-lease":
        return (
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p>
              Покупка на изплащане чрез <strong>tbi bank</strong>.
            </p>
            <p>
              След потвърждение на поръчката ще получите линк за кандидатстване.
              Одобрението отнема до няколко минути.
            </p>
          </div>
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
        // ако искаме задължително име за фактура:
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
    setIsLoading(true);
    setSubmitStatus(null);

    const payload = {
      contact: { email: form.email },
      shipping: {
        firstName: form.firstName,
        lastName: form.lastName,
        address: form.address,
        city: form.city,
        country: form.country,
        postal: form.postal,
        phone: `+359${form.phone}`,
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
            mol: form.invoiceType === "company" ? form.invoiceMol : null,
            address: form.invoiceAddressSameAsShipping
              ? {
                  address: form.address,
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
      paymentType,
      note: form.orderNote,
      total: Math.round(total * 100) / 100,
      items: cartItems.map((ci) => ({
        product_id: parseInt(ci?.product?.product_id, 10),
        options: ci?.options,
        qty: ci?.quantity ?? 1,
        unit_price: parseFloat(ci?.product?.price ?? 0),
      })),
      consents: {
        termsAccepted: form.termsAccepted,
        privacyAccepted: form.privacyAccepted,
        marketingOptIn: form.marketingOptIn,
      },
    };

    try {
      const response = await API.post("/api/order", payload);
      const { order } = response.data;

      if (paymentType === "with-card") {
        window.location.href = `/api/order/${order.id}/pay`;
      } else {
        navigate(`/checkout/success?order=${order.order_number}`);
      }
      setSubmitStatus("success");
      setSubmitCount((c) => c + 1);
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitStatus("error");
      setSubmitCount((c) => c + 1);
    } finally {
      setIsLoading(false);
    }
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
          <div className="py-8 border-b border-gray-200">
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
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-slate-700 font-semibold text-sm">
                      +359
                    </span>
                  </div>
                  <input
                    name="phone"
                    value={phoneDisplay(form.phone)}
                    onChange={handlePhoneChange}
                    type="tel"
                    className="w-full rounded-md border border-gray-300 bg-white pl-16 pr-4 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    inputMode="numeric"
                    placeholder="88 123 4567"
                    autoComplete="tel"
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Въведете 9-цифрен номер без кода +359.
                </p>
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

            <div className="mt-4 space-y-3">
              <label className="flex items-center gap-3 p-4 border rounded-md cursor-pointer hover:border-blue-600">
                <input
                  type="radio"
                  name="payment"
                  value="on-delivery"
                  checked={paymentType === "on-delivery"}
                  onChange={() => setPaymentType("on-delivery")}
                />
                <span className="font-medium">Наложен платеж</span>
              </label>

              <label className="flex items-center gap-3 p-4 border  rounded-md cursor-pointer hover:border-blue-600">
                <input
                  type="radio"
                  name="payment"
                  value="with-card"
                  checked={paymentType === "with-card"}
                  onChange={() => setPaymentType("with-card")}
                />
                <span className="font-medium">С карта</span>
              </label>

              <label className="flex items-center gap-3 p-4 border rounded-md cursor-pointer hover:border-blue-600">
                <input
                  type="radio"
                  name="payment"
                  value="bank-transfer"
                  checked={paymentType === "bank-transfer"}
                  onChange={() => setPaymentType("bank-transfer")}
                />
                <span className="font-medium">Банков трансфер</span>
              </label>

              <label className="flex items-center gap-3 p-4 border rounded-md cursor-pointer hover:border-orange-500">
                <input
                  type="radio"
                  name="payment"
                  value="on-lease"
                  checked={paymentType === "on-lease"}
                  onChange={() => setPaymentType("on-lease")}
                />

                <span className="flex items-center">
                  Купи с
                  <img src={TbiBankLogo} className="size-8 mx-2 rounded" />
                  bank
                </span>
              </label>
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
                disabled={!canSubmit || isLoading}
                onClick={submitOrder}
                className={`mt-5 w-full rounded-md py-3 text-white text-sm font-semibold transition-colors ${
                  canSubmit && !isLoading
                    ? "bg-[#002B5B] hover:bg-blue-900"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Изпращане...
                  </span>
                ) : (
                  "Потвърди поръчката"
                )}
              </button>
            </div>
          </div>
        </aside>
      </div>
      {submitStatus === "success" && (
        <SucessAlert
          key={submitCount}
          text="Поръчката е изпратена за обработване!"
        />
      )}
      {submitStatus === "error" && (
        <ErrorAlert
          key={submitCount}
          text="Имаше грешка при изпращането на поръчката. Опитайте отново."
        />
      )}
    </section>
  );
};

export default CheckoutPage;
