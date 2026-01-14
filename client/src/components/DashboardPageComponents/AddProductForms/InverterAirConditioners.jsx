import { useState } from "react";
import axios from "axios";
import Dropdown from "../../shared/Dropdown";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import ErrorAlert from "./../../shared/ErrorAlert";
import SucessAlert from "./../../shared/SucessAlert";

const InverterAirConditioners = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isSuccess, setIsSuccess] = useState(null);

  const [formData, setFormData] = useState({
    categoryId: 1,
    productCode: "blabla",
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
    discount: null,
    manufacturedDate: null,
    popularity: null,
    slug: "",
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
      // 1️⃣ Insert product first
      const product_code = `${formData.make.substring(0, 2).toUpperCase()}-${
        formData.btu
      }-${formData.productName.replace(/\s+/g, "")}`;
      const slug = `${formData.make.toLowerCase()}-${formData.btu}btu`;

      const payload = {
        category_id: formData.categoryId,
        product_code: product_code,
        product_name: formData.productName,
        price: formData.price,
        overall_class: formData.overallClass,
        make: formData.make,
        btu: formData.btu,
        room_area_min: formData.roomAreaMin,
        room_area_max: formData.roomAreaMax,
        color: formData.color,
        cooling_energy_class: formData.coolingEnergyClass,
        heating_energy_class: formData.heatingEnergyClass,
        spec: formData.spec,
        discount: formData.discount,
        manufactured_date: formData.manufacturedDate,
        popularity: formData.popularity,
        slug: slug,
      };

      const productRes = await axios.post(
        "/api/dashboard/add-product",
        payload
      );

      const productId = productRes.data.id;

      // 2️⃣ Get signed payload for uploads
      const sigRes = await axios.get(`/api/cloudinary/cloudinary-signature`);

      const uploaded = [];

      // 3️⃣ Upload each image directly to Cloudinary
      for (let i = 0; i < uploadedImages.length; i++) {
        const img = uploadedImages[i];
        const data = new FormData();
        data.append("file", img.file);
        data.append("api_key", sigRes.data.api_key);
        data.append("timestamp", sigRes.data.timestamp);
        data.append("signature", sigRes.data.signature);
        data.append("folder", sigRes.data.folder);

        const cloudRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${sigRes.data.cloud_name}/image/upload`,
          data
        );

        uploaded.push({
          publicId: cloudRes.data.public_id,
          position: i,
          isMain: i === 0,
        });
      }

      // 4️⃣ Send uploaded image info to backend
      await axios.post("/api/dashboard/add-product-images", {
        productId,
        images: uploaded,
      });

      setIsSuccess(true);
      setUploadedImages([]); // optionally clear the upload area
    } catch (err) {
      console.error("Error adding product:", err);
      setIsSuccess(false);
    }
  };

  // Dragging functionality
  const [draggingId, setDraggingId] = useState(null);

  const handleDragStart = (id) => {
    setDraggingId(id);
  };

  const handleDragEnter = (id) => {
    if (id === draggingId) return;

    setUploadedImages((prev) => {
      const newArray = [...prev];
      const draggingIndex = newArray.findIndex((i) => i.id === draggingId);
      const targetIndex = newArray.findIndex((i) => i.id === id);

      const [dragged] = newArray.splice(draggingIndex, 1);
      newArray.splice(targetIndex, 0, dragged);

      return newArray;
    });
  };

  const handleDragEnd = () => {
    setDraggingId(null);
  };

  const removeImage = (id) => {
    setUploadedImages((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <section>
      {isSuccess === true && (
        <SucessAlert text="Продуктът е добавен успешно." />
      )}
      {isSuccess === false && (
        <ErrorAlert text="Имаше грешка при добавянето." />
      )}

      <div className="space-y-6 flex gap-6 w-full">
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mt-6 mb-3">
            Главни характеристики
          </h3>
          <div className="mt-1">
            <label
              htmlFor="make"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Марка <span className="text-red-500">*</span>
            </label>
            <input
              id="make"
              name="make"
              type="text"
              required
              value={formData.make || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Модел <span className="text-red-500">*</span>
            </label>
            <input
              id="productName"
              name="productName"
              type="text"
              required
              value={formData.productName || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Цена (EUR) <span className="text-red-500">*</span>
            </label>
            <input
              id="price"
              name="price"
              type="number"
              required
              step="0.1"
              min="0.00"
              value={formData.price || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="discount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Намаление (%) <span className="text-red-500">*</span>
            </label>
            <input
              id="discount"
              name="discount"
              type="number"
              required
              step="1"
              min="0"
              max="100"
              value={formData.discount || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="btu"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              BTU <span className="text-red-500">*</span>
            </label>
            <input
              id="btu"
              name="btu"
              type="number"
              required
              step="1000"
              min="0"
              value={formData.btu || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="roomAreaMin"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              За помещения мин. (кв.м.) <span className="text-red-500">*</span>
            </label>
            <input
              id="roomAreaMin"
              name="roomAreaMin"
              type="number"
              required
              step="5"
              min="0"
              max={formData.roomAreaMax || undefined}
              value={formData.roomAreaMin || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="roomAreaMax"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              За помещения макс. (кв.м.) <span className="text-red-500">*</span>
            </label>
            <input
              id="roomAreaMax"
              name="roomAreaMax"
              type="number"
              required
              step="5"
              min={formData.roomAreaMin || "0"}
              value={formData.roomAreaMax || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Цвят <span className="text-red-500">*</span>
            </label>
            <input
              id="color"
              name="color"
              type="text"
              required
              value={formData.color || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="manufacturedDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Дата на производство <span className="text-red-500">*</span>
            </label>
            <input
              id="manufacturedDate"
              name="manufacturedDate"
              type="date"
              required
              value={formData.manufacturedDate || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="popularity"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Популярност <span className="text-red-500">*</span>
            </label>
            <input
              id="popularity"
              name="popularity"
              type="number"
              min="0"
              max="5"
              step="0.1"
              required
              value={formData.popularity || ""}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
            />
          </div>

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

          <div className="col-span-full mt-1">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Изображение <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-[#002B5B] px-6 py-10">
              <div className="text-center">
                <MdOutlinePhotoSizeSelectActual
                  aria-hidden="true"
                  className="mx-auto size-12 text-gray-600"
                />
                <div className="mt-4 flex text-sm/6 text-gray-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-transparent font-semibold text-[#002B5B] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-900 hover:text-blue-900"
                  >
                    <span>Добавете изображение</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      multiple
                      className="sr-only"
                      onChange={(e) => {
                        const files = Array.from(e.target.files);

                        const mapped = files.map((file) => ({
                          id: crypto.randomUUID(),
                          file,
                          url: URL.createObjectURL(file), // preview URL
                        }));

                        setUploadedImages((prev) => [...prev, ...mapped]);
                      }}
                    />
                  </label>
                  <p className="pl-1">или дръпнете и пуснете</p>
                </div>
                <p className="text-xs/5 text-gray-400">PNG, JPG, GIF</p>
              </div>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {uploadedImages.map((img, index) => (
              <div
                key={img.id}
                draggable
                onDragStart={() => handleDragStart(img.id)}
                onDragEnter={() => handleDragEnter(img.id)}
                onDragEnd={handleDragEnd}
                className="relative border-2 border-[#002B5B] rounded-md w-full h-24 cursor-move bg-white"
              >
                <img
                  src={img.url}
                  className="w-full h-full object-contain rounded-lg"
                />

                <div className="absolute top-0 left-1 bg-white px-1 rounded text-xs">
                  {index + 1}
                </div>

                <button
                  type="button"
                  onClick={() => removeImage(img.id)}
                  className="absolute top-0 right-0"
                >
                  <IoIosRemoveCircle className="text-red-600 text-2xl" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-lg font-semibold mt-6 mb-3">
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
            {
              id: "spec.noiseIndoor",
              label: "Ниво на шум (вътрешно тяло) (dB)",
            },
            {
              id: "spec.noiseOutdoor",
              label: "Ниво на шум (външно тяло) (dB)",
            },
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
            <div key={field.id} className="mt-1">
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
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#002B5B] focus:border-[#002B5B] sm:text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-[#002B5B] text-white py-3 px-6 mt-6 rounded-lg font-medium hover:bg-blue-900 focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
      >
        Добави продукт
      </button>

      <p className="text-xs text-gray-500 text-center">
        * Задължителни полета.
      </p>
    </section>
  );
};

export default InverterAirConditioners;
