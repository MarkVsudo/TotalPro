import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Dropdown = ({ label, options, value, onChange, required = false }) => {
  return (
    <Listbox value={value} onChange={onChange} className="mt-1">
      <div>
        <Listbox.Label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </Listbox.Label>

        <div className="relative">
          <Listbox.Button
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm
                       focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
          >
            <span className="block truncate">
              {value || `-- Избери ${label.toLowerCase()} --`}
            </span>

            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          <Listbox.Options
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base 
                       shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            {options.map((opt, idx) => (
              <Listbox.Option
                key={idx}
                value={opt}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-3 pr-10 ${
                    active ? "bg-[#002B5B] text-white" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {opt}
                    </span>

                    {selected && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#002B5B]">
                        <CheckIcon className="h-5 w-5" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </div>
    </Listbox>
  );
};

export default Dropdown;
