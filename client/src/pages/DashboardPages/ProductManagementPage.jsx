import React from "react";
import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
const productTypes = [
  {
    id: 1,
    name: "Инверторни климатици",
  },
  {
    id: 2,
    name: "Хиперинверторни климатици",
  },
  {
    id: 3,
    name: "Подови климатици",
  },
  {
    id: 4,
    name: "Мултисплит системи",
  },
  {
    id: 5,
    name: "Колонни системи",
  },
  {
    id: 6,
    name: "Касетъчни климатици",
  },
  {
    id: 7,
    name: "Аксесоари за монтаж",
  },
];
const ProductManagementPage = () => {
  const [selected, setSelected] = useState(productTypes[0]);

  return (
    <div>
      {/* Add Product Form */}
      <div className="flex flex-col px-5 py-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-xl font-semibold">Добавяне на продукт</h1>

        {/* Product type selection dropdown */}
        <Listbox value={selected} onChange={setSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Вид продукт
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{selected.name}</span>
              </span>
              <ChevronUpDownIcon
                aria-hidden="true"
                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
            >
              {productTypes.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                >
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                    {person.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>

        {/* Add product form */}
        {(() => {
          switch (selected.id) {
            case 1:
              return <>1</>;
            case 2:
              return <>2</>;
            default:
              return <span>Невалидна селекция</span>;
          }
        })()}
      </div>
    </div>
  );
};

// В базата данни ще се сложат всички нужни таблици като не са задължителни всички полета. Различните климатици имат различни колони
export default ProductManagementPage;
