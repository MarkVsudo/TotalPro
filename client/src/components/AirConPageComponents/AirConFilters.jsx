"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

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
    id: "btu",
    name: "Мощност",
    options: [
      { value: "5000", label: "5 000 BTU", checked: false },
      { value: "7000", label: "7 000 BTU", checked: false },
      { value: "9000", label: "9 000 BTU", checked: false },
      { value: "10000", label: "10 000 BTU", checked: false },
      { value: "12000", label: "12 000 BTU", checked: false },
      { value: "13000", label: "13 000 BTU", checked: false },
      { value: "14000", label: "14 000 BTU", checked: false },
      { value: "15000", label: "15 000 BTU", checked: false },
      { value: "16000", label: "16 000 BTU", checked: false },
      { value: "18000", label: "18 000 BTU", checked: false },
      { value: "21000", label: "21 000 BTU", checked: false },
      { value: "22000", label: "22 000 BTU", checked: false },
      { value: "24000", label: "24 000 BTU", checked: false },
      { value: "30000", label: "30 000 BTU", checked: false },
      { value: "36000", label: "36 000 BTU", checked: false },
      { value: "48000", label: "48 000 BTU", checked: false },
      { value: "55000", label: "55 000 BTU", checked: false },
    ],
  },
  {
    id: "roomVolume",
    name: "За помещения (кв.м)",
    options: [
      { value: "10-15", label: "от 10 до 15 кв.м", checked: false },
      { value: "15-20", label: "от 15 до 20 кв.м", checked: false },
      { value: "20-25", label: "от 20 до 25 кв.м", checked: false },
      { value: "25-30", label: "от 25 до 30 кв.м", checked: false },
      { value: "30-35", label: "от 30 до 35 кв.м", checked: false },
      { value: "35-40", label: "от 35 до 40 кв.м", checked: false },
      { value: "40-45", label: "от 40 до 45 кв.м", checked: false },
      { value: "45-50", label: "от 45 до 50 кв.м", checked: false },
      { value: "50-55", label: "от 50 до 55 кв.м", checked: false },
      { value: "55-60", label: "от 55 до 60 кв.м", checked: false },
      { value: "60-65", label: "от 60 до 65 кв.м", checked: false },
      { value: "65-70", label: "от 65 до 70 кв.м", checked: false },
      { value: "70-75", label: "от 70 до 75 кв.м", checked: false },
      { value: "75-80", label: "от 75 до 80 кв.м", checked: false },
      { value: "95-100", label: "от 95 до 100 кв.м", checked: false },
      { value: "105-110", label: "от 105 до 110 кв.м", checked: false },
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

  const [searchParams, setSearchParams] = useSearchParams();

  const getArrayParam = (key) => {
    const value = searchParams.get(key);

    return value ? value.split(",") : [];
  };

  const toggleFilterValue = (key, value) => {
    const values = getArrayParam(key);

    const nextValues = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];

    setSearchParams((prev) => {
      if (nextValues.length === 0) {
        prev.delete(key);
      } else {
        prev.set(key, nextValues.join(","));
      }
      return prev;
    });
  };

  const [currentCategory, setCurrentCategory] = useState(
    getArrayParam("category")
  );

  const toggleCategory = (categoryName) => {
    setSearchParams((prev) => {
      if (getArrayParam("category").includes(categoryName)) {
        prev.delete("category");
        setCurrentCategory(getArrayParam("category"));
      } else {
        prev.set("category", categoryName);
        setCurrentCategory(categoryName);
      }
      return prev;
    });
  };

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
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              {categories.map((category) => (
                <li key={category.category_id}>
                  <button
                    className="block px-2 py-3"
                    onClick={() => toggleCategory(category.category_name)}
                  >
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
                              type="checkbox"
                              checked={getArrayParam(section.id).includes(
                                option.value
                              )}
                              onChange={() =>
                                toggleFilterValue(section.id, option.value)
                              }
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
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
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto">
        <section aria-labelledby="products-heading" className="pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          {/* Filters */}
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
                {currentCategory === category.category_name ? (
                  <div className="w-0.5 h-4 bg-gray-900" />
                ) : (
                  <div className="w-0.5 h-4 bg-gray-400 scale-y-0 group-hover:scale-y-100 group-hover:bg-gray-900 origin-top transition-transform duration-300" />
                )}

                <button
                  className={
                    currentCategory === category.category_name
                      ? `scale-105 text-gray-900 font-semibold`
                      : `transition-all duration-300 group-hover:scale-105 group-hover:text-gray-900 group-hover:font-semibold`
                  }
                  onClick={() => toggleCategory(category.category_name)}
                >
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
                            type="checkbox"
                            checked={getArrayParam(section.id).includes(
                              option.value
                            )}
                            onChange={() =>
                              toggleFilterValue(section.id, option.value)
                            }
                            id={`filter-${section.id}-${optionIdx}`}
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600"
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
        </section>
      </main>
    </div>
  );
}
