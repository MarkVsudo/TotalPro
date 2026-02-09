"use client";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Cart() {
  const { isCartOpen, closeCart, cartItems } = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (acc, curr) => acc + parseFloat(curr.product.price) * curr.quantity,
        0,
      ),
    );
  }, [cartItems]);

  return (
    <Dialog open={isCartOpen} onClose={closeCart} className="relative z-100">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Количка
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={closeCart}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-48 text-center">
                          <div className="flex size-20 items-center justify-center rounded-full bg-gray-100">
                            <ShoppingCartIcon className="size-10 text-gray-400" />
                          </div>

                          <h3 className="mt-6 text-md font-semibold text-gray-900">
                            Количката ти е празна
                          </h3>

                          <p className="mt-2 text-sm text-gray-500 max-w-xs">
                            Изглежда все още не си добавил продукти. Разгледай
                            каталога и избери нещо за себе си.
                          </p>

                          <Link
                            to={"/air-conditioning"}
                            onClick={closeCart}
                            className="mt-6 inline-flex items-center rounded-md bg-[#002B5B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900 transition-colors"
                          >
                            Започни пазаруване
                          </Link>
                        </div>
                      ) : (
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cartItems.map((item, index) => (
                            <CartItem
                              key={item.product.product_id}
                              item={item}
                              index={index}
                            />
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {cartItems.length !== 0 && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Междинна сума</p>
                      <span>{totalPrice.toFixed(2)}€</span>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Доставката и данъците се изчисляват при финализиране на
                      поръчката.
                    </p>
                    <div className="mt-6">
                      <Link
                        to={"/checkout"}
                        className="flex items-center justify-center rounded-lg border border-transparent bg-[#002B5B]  px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-blue-900 transition-colors duration-200"
                      >
                        Завърши поръчката
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        или{" "}
                        <button
                          type="button"
                          onClick={closeCart}
                          className="font-medium text-[#002B5B] hover:text-blue-900 cursor-pointer"
                        >
                          Продължи с пазаруването
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
