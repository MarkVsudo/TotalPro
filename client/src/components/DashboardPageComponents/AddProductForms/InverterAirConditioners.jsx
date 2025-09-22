import React from "react";
import { useState, useEffect } from "react";

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
    spec: {},
    discount: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <section className="">
      {isSuccess === true && <SucessAlert text="Имейлът е изпратен успешно." />}
      {isSuccess === false && (
        <ErrorAlert text="Имаше грешка при изпращането на имейл." />
      )}

      <div className="">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="make"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Марка<span className="text-red-500">*</span>
            </label>
            <input
              id="make"
              name="make"
              type="text"
              required
              value={formData.make}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Модел<span className="text-red-500">*</span>
            </label>
            <input
              id="productName"
              name="productName"
              type="text"
              required
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Цена (лв.)<span className="text-red-500">*</span>
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0.00"
              step="0.1"
              required
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="translate-y-2">от</span>
            <div>
              <label
                htmlFor="roomAreaMin"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                За помещения мин. (кв.м.)<span className="text-red-500">*</span>
              </label>
              <input
                id="roomAreaMin"
                name="roomAreaMin"
                type="number"
                min="0"
                step="5"
                max={formData.roomAreaMax}
                required
                value={formData.roomAreaMin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
              />
            </div>
            <span className="translate-y-2">до</span>
            <div>
              <label
                htmlFor="roomAreaMax"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                За помещения макс. (кв.м.)
                <span className="text-red-500">*</span>
              </label>
              <input
                id="roomAreaMax"
                name="roomAreaMax"
                type="number"
                min={formData.roomAreaMin}
                step="5"
                required
                value={formData.roomAreaMax}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="btu"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              BTU<span className="text-red-500">*</span>
            </label>
            <input
              id="btu"
              name="btu"
              type="number"
              min="0"
              step="1000"
              required
              value={formData.btu}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Цвят<span className="text-red-500">*</span>
            </label>
            <input
              id="color"
              name="color"
              type="text"
              required
              value={formData.color}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="overallClass"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Общ клас<span className="text-red-500">*</span>
            </label>
            <select
              id="overallClass"
              name="overallClass"
              required
              value={formData.overallClass}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            >
              <option value="">-- Избери клас --</option>
              <option value="Начален клас">Начален клас</option>
              <option value="Междинен клас">Междинен клас</option>
              <option value="Висок клас">Висок клас</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="coolingEnergyClass"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Енергиен клас охлаждане<span className="text-red-500">*</span>
            </label>
            <select
              id="coolingEnergyClass"
              name="coolingEnergyClass"
              required
              value={formData.coolingEnergyClass}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            >
              <option value="">-- Избери клас --</option>
              <option value="A+++">A+++</option>
              <option value="A++">A++</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="heatingEnergyClass"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Енергиен клас отопление<span className="text-red-500">*</span>
            </label>
            <select
              id="heatingEnergyClass"
              name="heatingEnergyClass"
              required
              value={formData.heatingEnergyClass}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
            >
              <option value="">-- Избери клас --</option>
              <option value="A+++">A+++</option>
              <option value="A++">A++</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          {/* Submit Button */}
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
      </div>
    </section>
  );
};

export default InverterAirConditioners;
