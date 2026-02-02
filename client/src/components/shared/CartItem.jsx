import React from "react";
import ImageNotFound from "../../assets/image-not-found.png";
import { RxTrash } from "react-icons/rx";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

const CartItem = ({ item, index }) => {
  const { removeFromCart, increaseItemQty, decreaseItemQty } = useCart();

  return (
    <li key={item?.product?.product_id ?? index} className="py-5">
      <div className="flex gap-4">
        <div className="size-20 rounded-md bg-gray-50 border border-gray-200 overflow-hidden shrink-0 self-center">
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
              </div>
            </div>

            <button
              type="button"
              onClick={() => removeFromCart(item.product.product_id)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Премахни"
              title="Премахни"
            >
              {/* минимална иконка кошче */}
              <RxTrash className="size-5.5 text-[#002B5B] hover:text-blue-900 transition-colors" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm font-medium text-gray-900">
              {Number(item.product.price).toFixed(2)} €
            </div>

            <div className="flex rounded-md border-1 border-gray-300">
              <button
                className="w-6 text-lg cursor-pointer"
                onClick={() => decreaseItemQty(item.product.product_id)}
              >
                -
              </button>
              <span className="px-2 py-1">{item.quantity}</span>
              <button
                className={`w-6 text-lg ${item.quantity === 10 ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={item.quantity === 10}
                onClick={() => increaseItemQty(item.product.product_id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
