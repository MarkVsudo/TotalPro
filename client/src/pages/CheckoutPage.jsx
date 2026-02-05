import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import TbiBankLogo from "../assets/tbi-bank.png";
import CartItem from "../components/shared/CartItem";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CheckoutPage = () => {
  const { cartItems } = useCart();

  // Примерни стойности (можеш да ги направиш динамични)
  const SHIPPING = 0.0;

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item?.product?.price ?? 0);
      return acc + price * (item?.quantity ?? 1);
    }, 0);
  }, [cartItems]);

  // Ако цените са с включено ДДС, можеш да показваш "ДДС (включено)" без да добавяш към total.
  // Ако искаш да смяташ ДДС отделно (примерно 20%), ползвай това:
  const vat = useMemo(() => subtotal * 0.2, [subtotal]); // пример: 20% ДДС
  const total = useMemo(() => subtotal + SHIPPING + vat, [subtotal, vat]);

  // Формата е UI-only (за визията като снимката)
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "България",
    state: "",
    postal: "",
    phone: "",
  });

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const [paymentType, setPaymentType] = useState("on-delivery");

  const paymentTypeText = (paymentType) => {
    switch (paymentType) {
      case "on-delivery":
        return (
          <p className="mt-3 text-sm text-gray-600">
            Плащане при доставка (наложен платеж).
          </p>
        );
      case "with-card":
        return <p className="mt-3 text-sm text-gray-600">Плащане с карта.</p>;
      case "bank-transfer":
        return (
          <p className="mt-3 text-sm text-gray-600">Плащане по банков път.</p>
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

  // Show empty state if cart is empty
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
        {/* LEFT: form */}
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-bold mb-8">Завършване на поръчка</h1>

          {/* Contact information */}
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
                placeholder=""
              />
            </div>
          </div>

          {/* Shipping information */}
          <div className="pb-8 border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Данни за доставка
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
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700">
                  Фирма (по избор)
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
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
                  Област
                </label>
                <input
                  name="state"
                  value={form.state}
                  onChange={onChange}
                  type="text"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
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
              </div>
            </div>
          </div>

          {/* Payment information */}
          <div className=" border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Начин на плащане
            </h2>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setPaymentType("on-delivery")}
                className="mt-5 w-full rounded-md bg-[#002B5B] py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                Наложен платеж
              </button>

              <button
                type="button"
                onClick={() => setPaymentType("with-card")}
                className="mt-5 w-full rounded-md bg-[#002B5B] py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                С карта
              </button>

              <button
                type="button"
                onClick={() => setPaymentType("bank-transfer")}
                className="mt-5 w-full rounded-md bg-[#002B5B] py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                Банков трансфер
              </button>

              <button
                type="button"
                onClick={() => setPaymentType("on-lease")}
                className="mt-5 w-full flex justify-center items-center rounded-md bg-[#FF6600] py-3 text-white text-sm font-semibold hover:brightness-95 transition-colors"
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
        </div>

        {/* RIGHT: Order summary card */}
        <aside className="lg:col-span-5 sticky top-6 self-start">
          <h2 className="text-sm font-semibold tracking-wide text-gray-900 mb-4">
            Обобщение на поръчката
          </h2>

          <div className="rounded-lg border border-gray-200 bg-white">
            {/* Items */}
            <ul className="divide-y divide-gray-200 px-5">
              {cartItems.map((item, index) => (
                <CartItem
                  key={item.product.product_id}
                  item={item}
                  index={index}
                />
              ))}
            </ul>

            {/* Totals */}
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
                  <span className="font-medium text-gray-900">
                    {SHIPPING.toFixed(2)} €
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">ДДС (включено)</span>
                  <span className="font-medium text-gray-900">
                    {vat.toFixed(2)} €
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm font-semibold">
                <span className="text-gray-900">Общо</span>
                <span className="text-gray-900">{total.toFixed(2)} €</span>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-md bg-[#002B5B] py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
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
