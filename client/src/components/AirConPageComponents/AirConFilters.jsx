import { useEffect, useMemo, useCallback, useState } from "react";
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
import { XMarkIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const filters = [
  {
    id: "overallClass",
    name: "Клас",
    options: [
      { value: "entryClass", label: "Начален клас" },
      { value: "midClass", label: "Междинен клас" },
      { value: "highClass", label: "Висок клас" },
    ],
  },
  {
    id: "brand",
    name: "Производител",
    options: [
      { value: "gree", label: "Gree" },
      { value: "daikin", label: "Daikin" },
      { value: "mitsubishi_electric", label: "Mitsubishi Electric" },
      { value: "fujitsu", label: "Fujitsu" },
    ],
  },
  {
    id: "btu",
    name: "Мощност",
    options: [
      { value: "5000", label: "5 000 BTU" },
      { value: "7000", label: "7 000 BTU" },
      { value: "9000", label: "9 000 BTU" },
      { value: "10000", label: "10 000 BTU" },
      { value: "12000", label: "12 000 BTU" },
      { value: "13000", label: "13 000 BTU" },
      { value: "14000", label: "14 000 BTU" },
      { value: "15000", label: "15 000 BTU" },
      { value: "16000", label: "16 000 BTU" },
      { value: "18000", label: "18 000 BTU" },
      { value: "21000", label: "21 000 BTU" },
      { value: "22000", label: "22 000 BTU" },
      { value: "24000", label: "24 000 BTU" },
      { value: "30000", label: "30 000 BTU" },
      { value: "36000", label: "36 000 BTU" },
      { value: "48000", label: "48 000 BTU" },
      { value: "55000", label: "55 000 BTU" },
    ],
  },
  {
    id: "roomVolume",
    name: "За помещения (кв.м)",
    options: [
      { value: "10-15", label: "от 10 до 15 кв.м" },
      { value: "15-20", label: "от 15 до 20 кв.м" },
      { value: "20-25", label: "от 20 до 25 кв.м" },
      { value: "25-30", label: "от 25 до 30 кв.м" },
      { value: "30-35", label: "от 30 до 35 кв.м" },
      { value: "35-40", label: "от 35 до 40 кв.м" },
      { value: "40-45", label: "от 40 до 45 кв.м" },
      { value: "45-50", label: "от 45 до 50 кв.м" },
      { value: "50-55", label: "от 50 до 55 кв.м" },
      { value: "55-60", label: "от 55 до 60 кв.м" },
      { value: "60-65", label: "от 60 до 65 кв.м" },
      { value: "65-70", label: "от 65 до 70 кв.м" },
      { value: "70-75", label: "от 70 до 75 кв.м" },
      { value: "75-80", label: "от 75 до 80 кв.м" },
      { value: "95-100", label: "от 95 до 100 кв.м" },
      { value: "105-110", label: "от 105 до 110 кв.м" },
    ],
  },
  {
    id: "color",
    name: "Цвят",
    options: [
      { value: "white", label: "Бял" },
      { value: "black", label: "Черен" },
      { value: "silver", label: "Сребрист" },
    ],
  },
  {
    id: "coolingEnergyClass",
    name: "Енергиен клас охлаждане",
    options: [
      { value: "a", label: "A" },
      { value: "a+", label: "A+" },
      { value: "a++", label: "A++" },
      { value: "a+++", label: "A+++" },
    ],
  },
  {
    id: "heatingEnergyClass",
    name: "Енергиен клас отопление",
    options: [
      { value: "a", label: "A" },
      { value: "a+", label: "A+" },
      { value: "a++", label: "A++" },
      { value: "a+++", label: "A+++" },
    ],
  },
];

function CheckboxRow({ id, label, checked, onChange }) {
  return (
    <div className="flex gap-3">
      <div className="flex h-5 shrink-0 items-center">
        <div className="group grid size-4 grid-cols-1">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 forced-colors:appearance-auto"
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
      <label htmlFor={id} className="min-w-0 flex-1 text-sm text-gray-600">
        {label}
      </label>
    </div>
  );
}

export default function AirConFilters() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await axios.get("/api/categories");
        if (!cancelled) setCategories(res.data ?? []);
      } catch (err) {
        console.error(err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const getArrayParam = useCallback(
    (key) => {
      const value = searchParams.get(key);
      return value ? value.split(",").filter(Boolean) : [];
    },
    [searchParams],
  );

  const currentCategory = searchParams.get("category") || "";

  const toggleFilterValue = useCallback(
    (key, value) => {
      const values = getArrayParam(key);
      const nextValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];

      setSearchParams((prev) => {
        if (nextValues.length === 0) prev.delete(key);
        else prev.set(key, nextValues.join(","));
        return prev;
      });
    },
    [getArrayParam, setSearchParams],
  );

  const toggleCategory = useCallback(
    (categoryValue) => {
      setSearchParams((prev) => {
        if ((prev.get("category") || "") === categoryValue)
          prev.delete("category");
        else prev.set("category", categoryValue);
        return prev;
      });
    },
    [setSearchParams],
  );

  const activeFiltersCount = useMemo(() => {
    const filtersCount = filters.reduce(
      (count, section) => count + getArrayParam(section.id).length,
      0,
    );
    const categoryCount = currentCategory ? 1 : 0;
    return filtersCount + categoryCount;
  }, [currentCategory, getArrayParam]);

  const FilterSections = ({ mode }) => (
    <>
      {filters.map((section) => (
        <Disclosure
          key={section.id}
          as="div"
          className={
            mode === "mobile"
              ? "border-b border-gray-200 px-4 py-4"
              : "border-b border-gray-200 py-6"
          }
        >
          <h3
            className={
              mode === "mobile" ? "-mx-2 -my-3 flow-root" : "-my-3 flow-root"
            }
          >
            <DisclosureButton
              className={
                mode === "mobile"
                  ? "group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                  : "group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              }
            >
              <span
                className={
                  mode === "mobile"
                    ? "font-medium text-gray-900 text-sm"
                    : "font-medium text-gray-900"
                }
              >
                {section.name}
                {getArrayParam(section.id).length > 0 && (
                  <span className="ml-2 text-xs text-blue-600 font-semibold">
                    ({getArrayParam(section.id).length})
                  </span>
                )}
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

          <DisclosurePanel className={mode === "mobile" ? "pt-4" : "pt-6"}>
            <div
              className={
                mode === "mobile"
                  ? "space-y-3 max-h-60 overflow-y-auto"
                  : "space-y-4"
              }
            >
              {section.options.map((option, idx) => {
                const id = `${mode}-${section.id}-${idx}`;
                const checked = getArrayParam(section.id).includes(
                  option.value,
                );

                return (
                  <CheckboxRow
                    key={option.value}
                    id={id}
                    label={option.label}
                    checked={checked}
                    onChange={() => toggleFilterValue(section.id, option.value)}
                  />
                );
              })}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </>
  );

  return (
    <div className="bg-white w-full pb-24 lg:pb-0">
      {/* Mobile button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 p-4 shadow-lg">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-[#002B5B] hover:bg-blue-900 text-white px-4 py-3 rounded-lg font-medium shadow-md transition-colors"
        >
          <FunnelIcon className="h-5 w-5" />
          <span>Филтри</span>
          {activeFiltersCount > 0 && (
            <span className="ml-1 bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-bold">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-1000 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs sm:max-w-md transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Филтри</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-4 border-b border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Категории
                </h4>
                <ul role="list" className="space-y-2">
                  {categories.map((category) => {
                    const active = currentCategory === category.category_value;
                    return (
                      <li key={category.category_id}>
                        <button
                          type="button"
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            active
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            toggleCategory(category.category_value);
                            setMobileFiltersOpen(false);
                          }}
                        >
                          {category.category_name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <FilterSections mode="mobile" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-6">
          <section aria-labelledby="filters-heading" className="pb-6">
            <h2 id="filters-heading" className="sr-only">
              Filters
            </h2>

            <ul
              role="list"
              className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-600"
            >
              {categories.map((category) => {
                const active = currentCategory === category.category_value;
                return (
                  <li
                    key={category.category_id}
                    className="flex items-center gap-3 transition-all group relative"
                  >
                    <div
                      className={
                        active
                          ? "w-0.5 h-4 bg-gray-900"
                          : "w-0.5 h-4 bg-gray-400 scale-y-0 group-hover:scale-y-100 group-hover:bg-gray-900 origin-top transition-transform duration-300"
                      }
                    />

                    <button
                      type="button"
                      className={
                        active
                          ? "scale-105 text-gray-900 font-semibold"
                          : "transition-all duration-300 group-hover:scale-105 group-hover:text-gray-900 group-hover:font-semibold"
                      }
                      onClick={() => toggleCategory(category.category_value)}
                    >
                      {category.category_name}
                    </button>
                  </li>
                );
              })}
            </ul>

            <FilterSections mode="desktop" />
          </section>
        </div>
      </aside>
    </div>
  );
}
