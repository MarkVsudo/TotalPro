import { useSearchParams } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import {
  TfiLayoutGrid4,
  TfiLayoutGrid3,
  TfiLayoutGrid2,
} from "react-icons/tfi";
import { TfiLayoutWidthFull } from "react-icons/tfi";

const sortOptions = [
  { name: "Най-популярни", value: "most_popular" },
  { name: "Най-нови", value: "newest" },
  { name: "Цена: Възходяща", value: "price_asc" },
  { name: "Цена: Низходяща", value: "price_desc" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AirConSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "most_popular";

  const updateGrid = (cols) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("grid", String(cols));
      return next;
    });
  };

  const updateSorting = (sort) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("sort", sort);
      return next;
    });
  };

  return (
    <div className="w-full border-b border-gray-200 pb-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h1 className="min-w-0 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Продукти
        </h1>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <Menu as="div" className="relative inline-block text-left shrink-0">
            <MenuButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Сортиране
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute left-0 sm:left-auto sm:right-0 z-10 mt-2 w-44 origin-top-left sm:origin-top-right
             rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-hidden
             data-closed:scale-95 data-closed:transform data-closed:opacity-0
             data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div>
                {sortOptions.map((option) => (
                  <MenuItem key={option.value}>
                    <button
                      type="button"
                      onClick={() => updateSorting(option.value)}
                      className={classNames(
                        option.value === currentSort
                          ? "font-medium text-gray-900"
                          : "text-gray-500",
                        "block w-full px-4 py-2 text-sm text-left",
                      )}
                    >
                      {option.name}
                    </button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          <div className="flex items-center gap-3 sm:gap-7 shrink-0">
            {/* Mobile: only 1 and 2 */}
            <button
              type="button"
              onClick={() => updateGrid(1)}
              aria-label="1 column"
              className="sm:hidden inline-flex items-center justify-center"
            >
              <TfiLayoutWidthFull className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => updateGrid(2)}
              aria-label="2 columns"
            >
              <TfiLayoutGrid2 className="size-5" />
            </button>

            {/* Desktop only: 3 and 4 */}
            <button
              type="button"
              onClick={() => updateGrid(3)}
              aria-label="3 columns"
              className="hidden sm:inline-flex"
            >
              <TfiLayoutGrid3 className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => updateGrid(4)}
              aria-label="4 columns"
              className="hidden sm:inline-flex"
            >
              <TfiLayoutGrid4 className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConSort;
