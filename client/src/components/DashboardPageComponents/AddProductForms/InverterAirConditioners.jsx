import React, { useState } from "react";
import axios from "axios";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const InverterAirConditioners = () => {
  const [isSuccess, setIsSuccess] = useState(null);

  const [formData, setFormData] = useState({
    categoryId: 1,
    productCode: "",
    productName: "",
    price: null,
    overallClass: "",
    make: "",
    btu: null,
    roomAreaMin: null,
    roomAreaMax: null,
    color: "",
    coolingEnergyClass: "",
    heatingEnergyClass: "",
    discount: null,
    spec: {
      coolingVolume: null,
      heatingVolume: null,
      coolingPower: "",
      heatingPower: "",
      coolingConsumption: "",
      heatingConsumption: "",
      voltage: "",
      seer: "",
      scop: "",
      noiseIndoor: "",
      noiseOutdoor: "",
      sizeIndoor: "",
      sizeOutdoor: "",
      weightIndoor: "",
      weightOutdoor: "",
      workingRangeCooling: "",
      workingRangeHeating: "",
      refrigerant: "",
      origin: "",
      pipeDiameter: "",
      maxDifference: "",
      powerSupply: "",
      maxPipeLength: "",
    },
  });

  const classes = ["Начален клас", "Междинен клас", "Висок клас"];
  const energyClasses = ["A+++", "A++", "A+", "A", "B", "C", "D"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("spec.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        spec: {
          ...prev.spec,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/product", formData);
      setIsSuccess(true);
    } catch (err) {
      console.error("Error adding product:", err);
      setIsSuccess(false);
    }
  };

  return (
    <section>
      {isSuccess === true && (
        <SucessAlert text="Продуктът е добавен успешно." />
      )}
      {isSuccess === false && (
        <ErrorAlert text="Имаше грешка при добавянето." />
      )}

      <div className="space-y-6">
        {/* --- Basic fields (use plain HTML <label> for inputs) --- */}
        {[
          { id: "make", label: "Марка", required: true },
          { id: "productName", label: "Модел", required: true },
          {
            id: "price",
            label: "Цена (лв.)",
            required: true,
            type: "number",
            step: "0.1",
            min: "0.00",
          },
          {
            id: "roomAreaMin",
            label: "За помещения мин. (кв.м.)",
            required: true,
            type: "number",
            step: "5",
            min: "0",
            max: formData.roomAreaMax || undefined, // ✅ dynamic max
          },
          {
            id: "roomAreaMax",
            label: "За помещения макс. (кв.м.)",
            required: true,
            type: "number",
            step: "5",
            min: formData.roomAreaMin || "0", // ✅ dynamic min
          },
          {
            id: "btu",
            label: "BTU",
            required: true,
            type: "number",
            step: "1000",
            min: "0",
          },
          { id: "color", label: "Цвят", required: true },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {field.label}
              {field.required && <span className="text-red-500"> *</span>}
            </label>

            <input
              id={field.id}
              name={field.id}
              type={field.type || "text"} // ✅ respects number type
              required={field.required}
              value={formData[field.id] ?? ""}
              onChange={handleInputChange}
              step={field.step}
              min={field.min}
              max={field.max}
              className="mt-2 block w-full rounded-md border border-[#002B5B] py-1.5 px-3 text-gray-900 outline-1 outline-gray-300 focus-visible:outline-2 focus-visible:outline-[#002B5B] sm:text-sm"
            />
          </div>
        ))}

        {/* --- Headless UI dropdowns (use Listbox.Label inside the Listbox) --- */}
        <Dropdown
          label="Общ клас"
          options={classes}
          value={formData.overallClass}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, overallClass: value }))
          }
          required
        />

        <Dropdown
          label="Енергиен клас охлаждане"
          options={energyClasses}
          value={formData.coolingEnergyClass}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, coolingEnergyClass: value }))
          }
          required
        />

        <Dropdown
          label="Енергиен клас отопление"
          options={energyClasses}
          value={formData.heatingEnergyClass}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, heatingEnergyClass: value }))
          }
          required
        />

        {/* --- Additional specs --- */}
        <h3 className="text-lg font-semibold mt-6">
          Допълнителни характеристики
        </h3>

        {[
          {
            id: "spec.coolingVolume",
            label: "Препоръчителен обем (охлаждане) (м³)",
          },
          {
            id: "spec.heatingVolume",
            label: "Препоръчителен обем (отопление) (м³)",
          },
          {
            id: "spec.coolingPower",
            label: "Отдавана мощност (охлаждане) (kW)",
          },
          {
            id: "spec.heatingPower",
            label: "Отдавана мощност (отопление) (kW)",
          },
          {
            id: "spec.coolingConsumption",
            label: "Консумирана мощност (охлаждане) (kW)",
          },
          {
            id: "spec.heatingConsumption",
            label: "Консумирана мощност (отопление) (kW)",
          },
          { id: "spec.voltage", label: "Захранващо напрежение (V)" },
          { id: "spec.seer", label: "SEER" },
          { id: "spec.scop", label: "SCOP" },
          { id: "spec.noiseIndoor", label: "Ниво на шум (вътрешно тяло) (dB)" },
          { id: "spec.noiseOutdoor", label: "Ниво на шум (външно тяло) (dB)" },
          { id: "spec.sizeIndoor", label: "Размери (вътрешно тяло) (мм)" },
          { id: "spec.sizeOutdoor", label: "Размери (външно тяло) (мм)" },
          { id: "spec.weightIndoor", label: "Тегло (вътрешно тяло) (кг)" },
          { id: "spec.weightOutdoor", label: "Тегло (външно тяло) (кг)" },
          {
            id: "spec.workingRangeCooling",
            label: "Работен диапазон при охлаждане (°C)",
          },
          {
            id: "spec.workingRangeHeating",
            label: "Работен диапазон при отопление (°C)",
          },
          { id: "spec.refrigerant", label: "Хладилен агент" },
          { id: "spec.origin", label: "Произход" },
          {
            id: "spec.pipeDiameter",
            label: "Диаметър на тръбата течност/газ (мм)",
          },
          {
            id: "spec.maxDifference",
            label: "Денивелация вътрешно/външно тяло (м)",
          },
          { id: "spec.powerSupply", label: "Захранване" },
          {
            id: "spec.maxPipeLength",
            label: "Максимална дължина на тръбния път (м)",
          },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type="text"
              value={formData.spec[field.id.split(".")[1]] ?? ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-[#002B5B] py-1.5 px-3 text-gray-900 outline-1 outline-gray-300 focus-visible:outline-2 focus-visible:outline-[#002B5B] sm:text-sm"
            />
          </div>
        ))}

        {/* --- Submit --- */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#002B5B] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-900 focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
        >
          Добави продукт
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Задължителни полета.
        </p>
      </div>
    </section>
  );
};

/* Dropdown uses Listbox.Label (correct Headless UI pattern) */
const Dropdown = ({ label, options, value, onChange, required = false }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div>
        <Listbox.Label className="block text-sm/6 font-medium text-gray-900">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </Listbox.Label>

        <div className="relative mt-2">
          <Listbox.Button className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#002B5B] sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <span className="block truncate">
                {value || `-- Избери ${label.toLowerCase()} --`}
              </span>
            </span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 h-5 w-5 self-center justify-self-end text-gray-500 sm:h-4 sm:w-4"
            />
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 sm:text-sm">
            {options.map((opt, idx) => (
              <Listbox.Option
                key={idx}
                value={opt}
                className={({ active }) =>
                  `relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none ${
                    active ? "bg-[#002B5B] text-white" : ""
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`ml-3 block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {opt}
                    </span>

                    {selected ? (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#002B5B]">
                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    ) : null}
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

export default InverterAirConditioners;
