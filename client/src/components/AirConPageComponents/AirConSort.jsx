import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";

import { TfiLayoutGrid4 } from "react-icons/tfi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutGrid2 } from "react-icons/tfi";

const sortOptions = [
  { name: "Най-популярни", href: "#", current: true },
  { name: "Най-нови", href: "#", current: false },
  { name: "Цена: Възходяща", href: "#", current: false },
  { name: "Цена: Низходяща", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AirConSort = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortingOption, setSortingOption] = useState("Най-популярни");
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSorting = (sort) => {
    setSearchParams((prev) => {
      prev.set("sort", sort);
      return prev;
    });
  };

  useEffect(() => {
    updateSorting(sortingOption);
  }, [sortingOption]);

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
            <div className="py-1">
              {sortOptions.map((option) => (
                <MenuItem
                  key={option.name}
                  onClick={() => updateSorting(option.name)}
                >
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
  );
};

export default AirConSort;
