import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import ImageNotFound from "../assets/image-not-found.png";
import { Link } from "react-router-dom";
import TbiBankLogo from "../assets/tbi-bank.png";
const CheckoutPage = () => {
  const { removeFromCart, cartItems } = useCart();

  // Примерни стойности (можеш да ги направиш динамични)
  const SHIPPING = 5;

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
          <div className="pt-8 border-b border-gray-200">
            <h2 className="text-sm font-semibold tracking-wide text-gray-900">
              Начин на плащане
            </h2>

            <div className="mt-4 flex gap-4">
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
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item, idx) => (
                <li key={item?.product?.product_id ?? idx} className="p-5">
                  <div className="flex gap-4">
                    <div className="h-16 w-16 rounded-md bg-gray-50 border border-gray-200 overflow-hidden shrink-0">
                      <img
                        alt={`${item?.product?.slug ?? "product"} cover`}
                        src={
                          item?.mainImg?.public_id
                            ? `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${item.mainImg.public_id}`
                            : ImageNotFound
                        }
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/${item.product.slug}-${item.product.product_id}`}
                            className="text-sm font-semibold text-gray-900 hover:underline"
                          >
                            {item.product.product_name}
                          </Link>

                          <div className="mt-1 text-xs text-gray-500">
                            <div>{item.product.color}</div>
                            {/* Ако имаш размер в item/product, покажи го тук */}
                            {/* <div>Размер: {item.product.size}</div> */}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.product.product_id)
                          }
                          className="text-gray-400 hover:text-gray-600"
                          aria-label="Премахни"
                          title="Премахни"
                        >
                          {/* минимална иконка кошче */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M9 3a1 1 0 00-1 1v1H5a1 1 0 100 2h1v14a2 2 0 002 2h8a2 2 0 002-2V7h1a1 1 0 100-2h-3V4a1 1 0 00-1-1H9zm2 2h2v0h-2zM8 7h8v14H8V7z" />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">
                          {Number(item.product.price).toFixed(2)} €
                        </div>

                        {/* само визия като снимката: dropdown с количество */}
                        <select
                          value={item.quantity}
                          disabled
                          className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm text-gray-900"
                          title="Количество"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </li>
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
                  <span className="text-gray-600">ДДС</span>
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
