import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";

import { TfiLayoutGrid4 } from "react-icons/tfi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutGrid2 } from "react-icons/tfi";

const sortOptions = [
  { name: "Най-популярни", value: "most_popular", current: true },
  { name: "Най-нови", value: "newest", current: false },
  { name: "Цена: Възходяща", value: "price_asc", current: false },
  { name: "Цена: Низходяща", value: "price_desc", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AirConSort = () => {
  const [setMobileFiltersOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get("sort") || "most_popular";

  const updateSorting = (sort) => {
    setSearchParams((prev) => {
      prev.set("sort", sort);
      return prev;
    });
  };

  const updateGrid = (cols) => {
    setSearchParams((prev) => {
      prev.set("grid", cols);
      return prev;
    });
  };

  return (
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
            <div>
              {sortOptions.map((option) => (
                <MenuItem key={option.value}>
                  <button
                    onClick={() => updateSorting(option.value)}
                    className={classNames(
                      option.value === currentSort
                        ? "font-medium text-gray-900"
                        : "text-gray-500",
                      "block w-full px-4 py-2 text-sm"
                    )}
                  >
                    {option.name}
                  </button>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>

        <div className="flex gap-7 ml-5 sm:ml-7 mr-2">
          <button onClick={() => updateGrid(2)}>
            <TfiLayoutGrid2 className="size-5" />
          </button>

          <button onClick={() => updateGrid(3)}>
            <TfiLayoutGrid3 className="size-5" />
          </button>

          <button onClick={() => updateGrid(4)}>
            <TfiLayoutGrid4 className="size-5" />
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
  );
};

export default AirConSort;
