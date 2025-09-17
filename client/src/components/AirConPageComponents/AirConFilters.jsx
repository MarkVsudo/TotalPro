"use client";

import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import AirConProducts from "./AirConProducts";

import { TfiLayoutGrid4 } from "react-icons/tfi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import AirConPagination from "./AirConPagination";
import { useEffect } from "react";

const sortOptions = [
  { name: "Най-популярни", href: "#", current: true },
  { name: "Най-нови", href: "#", current: false },
  { name: "Цена: Възходяща", href: "#", current: false },
  { name: "Цена: Низходяща", href: "#", current: false },
];

const filters = [
  {
    id: "overallClass",
    name: "Клас",
    options: [
      { value: "entryClass", label: "Начален клас", checked: false },
      { value: "midClass", label: "Междинен клас", checked: false },
      { value: "highClass", label: "Висок клас", checked: false },
    ],
  },
  {
    id: "brand",
    name: "Производител",
    options: [
      { value: "gree", label: "Gree", checked: false },
      { value: "daikin", label: "Daikin", checked: false },
      { value: "mitsubishi", label: "Mitsubishi", checked: false },
      { value: "fujitsu", label: "Fujitsu", checked: false },
    ],
  },
  {
    id: "category",
    name: "Мощност",
    options: [
      { value: "5kBTU", label: "5 000 BTU", checked: false },
      { value: "7kBTU", label: "7 000 BTU", checked: false },
      { value: "9kBTU", label: "9 000 BTU", checked: false },
      { value: "10kBTU", label: "10 000 BTU", checked: false },
      { value: "12kBTU", label: "12 000 BTU", checked: false },
      { value: "13kBTU", label: "13 000 BTU", checked: false },
      { value: "14kBTU", label: "14 000 BTU", checked: false },
      { value: "15kBTU", label: "15 000 BTU", checked: false },
      { value: "16kBTU", label: "16 000 BTU", checked: false },
      { value: "18kBTU", label: "18 000 BTU", checked: false },
      { value: "21kBTU", label: "21 000 BTU", checked: false },
      { value: "22kBTU", label: "22 000 BTU", checked: false },
      { value: "24kBTU", label: "24 000 BTU", checked: false },
      { value: "30kBTU", label: "30 000 BTU", checked: false },
      { value: "36kBTU", label: "36 000 BTU", checked: false },
      { value: "48kBTU", label: "48 000 BTU", checked: false },
      { value: "55kBTU", label: "55 000 BTU", checked: false },
    ],
  },
  {
    id: "roomVolume",
    name: "За помещения (кв.м)",
    options: [
      { value: "10-15sqm", label: "от 10 до 15 кв.м", checked: false },
      { value: "15-20sqm", label: "от 15 до 20 кв.м", checked: false },
      { value: "20-25sqm", label: "от 20 до 25 кв.м", checked: false },
      { value: "25-30sqm", label: "от 25 до 30 кв.м", checked: false },
      { value: "30-35sqm", label: "от 30 до 35 кв.м", checked: false },
      { value: "35-40sqm", label: "от 35 до 40 кв.м", checked: false },
      { value: "40-45sqm", label: "от 40 до 45 кв.м", checked: false },
      { value: "45-50sqm", label: "от 45 до 50 кв.м", checked: false },
      { value: "50-55sqm", label: "от 50 до 55 кв.м", checked: false },
      { value: "55-60sqm", label: "от 55 до 60 кв.м", checked: false },
      { value: "60-65sqm", label: "от 60 до 65 кв.м", checked: false },
      { value: "65-70sqm", label: "от 65 до 70 кв.м", checked: false },
      { value: "70-75sqm", label: "от 70 до 75 кв.м", checked: false },
      { value: "75-80sqm", label: "от 75 до 80 кв.м", checked: false },
      { value: "95-100sqm", label: "от 95 до 100 кв.м", checked: false },
      { value: "105-110sqm", label: "от 105 до 110 кв.м", checked: false },
    ],
  },
  {
    id: "color",
    name: "Цвят",
    options: [
      { value: "white", label: "Бял", checked: false },
      { value: "black", label: "Черен", checked: false },
      { value: "silver", label: "Сребрист", checked: false },
    ],
  },
  {
    id: "coolingEnergyClass",
    name: "Енергиен клас охлаждане",
    options: [
      { value: "a", label: "A", checked: false },
      { value: "a+", label: "A+", checked: false },
      { value: "a++", label: "A++", checked: false },
      { value: "a+++", label: "A+++", checked: false },
    ],
  },
  {
    id: "heatingEnergyClass",
    name: "Енергиен клас отопление",
    options: [
      { value: "a", label: "A", checked: false },
      { value: "a+", label: "A+", checked: false },
      { value: "a++", label: "A++", checked: false },
      { value: "a+++", label: "A+++", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AirConFilters() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="bg-white w-full">
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                {categories.map((category) => (
                  <li key={category.category_id}>
                    <button className="block px-2 py-3">
                      {category.category_name}
                    </button>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="size-5 group-data-open:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-5 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="min-w-0 flex-1 text-gray-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto">
        <div className="flex items-baseline justify-between border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Продукти
          </h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Сортиране
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current
                            ? "font-medium text-gray-900"
                            : "text-gray-500",
                          "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <div className="flex gap-7 ml-5 sm:ml-7 mr-2">
              <button
                type="button"
                className="-m-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View grid 2x2</span>
                <TfiLayoutGrid2 aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                className="-m-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View grid 3x3</span>
                <TfiLayoutGrid3 aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                className="-m-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View grid 4x4</span>
                <TfiLayoutGrid4 aria-hidden="true" className="size-5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul
                role="list"
                className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-600"
              >
                {categories.map((category) => (
                  <li
                    key={category.category_id}
                    className="flex items-center gap-3 transition-all group relative"
                  >
                    <div className="w-0.5 h-4 bg-gray-400 scale-y-0 group-hover:scale-y-100 group-hover:bg-gray-900 origin-top transition-transform duration-300" />

                    <button className="transition-all duration-300 group-hover:scale-105 group-hover:text-gray-900 group-hover:font-semibold">
                      {category.category_name}
                    </button>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="size-5 group-data-open:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-5 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <AirConProducts />
              <AirConPagination />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
