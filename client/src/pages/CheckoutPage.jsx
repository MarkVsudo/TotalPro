import React from "react";
import { useCart } from "../context/CartContext";
import ImageNotFound from "../assets/image-not-found.png";
import { Link } from "react-router";
const CheckoutPage = () => {
  const { removeFromCart, cartItems } = useCart();

  return (
    <section
      id="checkout"
      className="bg-white text-[#002B5B] my-24 px-4 max-w-7xl mx-auto "
    >
      <h1 className="text-3xl font-bold mb-6">Завършване на поръчка</h1>

      <div className="flex gap-12 w-full">
        <div className=" w-[60%]">
          <ul role="list" className="divide-y divide-gray-300">
            {cartItems.map((item, index) => (
              <li key={index} className="flex py-6">
                <div className="overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={`${item.product.slug} cover image`}
                    src={
                      item.mainImg?.public_id
                        ? `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${item.mainImg.public_id}`
                        : ImageNotFound
                    }
                    className="size-48 object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link
                          to={`/${item.product.slug}-${item.product.product_id}`}
                        >
                          {item.product.product_name}
                        </Link>
                      </h3>
                      <p className="ml-4">{item.product.price}€</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.product.color}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Количество: {item.quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.product_id)}
                        className="font-medium text-[#002B5B] hover:text-blue-900 cursor-pointer"
                      >
                        Премахни
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-6 px-6 bg-gray-100 rounded-lg w-[40%] h-fit">
          <h2 className="text-lg font-semibold mb-4 text-[#002B5B]">
            Обобщение на поръчката
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Междинна сума</span>
              <span className="font-medium">99.00 €</span>
            </div>

            <div className="flex justify-between border-t border-gray-300 pt-3">
              <span className="text-gray-700 flex items-center gap-1">
                Доставка
              </span>
              <span className="font-medium">5.00 €</span>
            </div>

            <div className="flex justify-between border-t border-gray-300 pt-3">
              <span className="text-gray-700 flex items-center gap-1">
                ДДС (включено в цената)
              </span>
              <span className="font-medium">8.32 €</span>
            </div>
          </div>

          <div className="flex justify-between border-t border-gray-300 mt-4 pt-4 text-base font-semibold">
            <span>Общо</span>
            <span>112.32 €</span>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-lg bg-[#4F46E5] py-3 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Финализирай поръчката
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
