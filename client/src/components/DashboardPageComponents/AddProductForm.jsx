import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../shared/Dropdown";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import ErrorAlert from "../shared/ErrorAlert";
import SucessAlert from "../shared/SucessAlert";

const productTypeConfig = {
  invertorni_klimatici: {
    name: "Инверторни климатици",
    defaults: { categoryId: 1 },
    hiddenFields: [],
  },
  hiperinvertorni_klimatici: {
    name: "Хиперинверторни климатици",
    defaults: { categoryId: 2 },
    hiddenFields: [],
  },
  podovi_klimatici: {
    name: "Подови климатици",
    defaults: { categoryId: 3 },
    hiddenFields: [],
  },
  multisplit_sistemi: {
    name: "Мултисплит системи",
    defaults: { categoryId: 4 },
    hiddenFields: [],
  },
  kolonni_klimatici: {
    name: "Колонни климатици",
    defaults: { categoryId: 5 },
    hiddenFields: [],
  },
  kasetachni_klimatici: {
    name: "Касетъчни климатици",
    defaults: { categoryId: 6 },
    hiddenFields: [],
  },
  aksesoari_za_montazh: {
    name: "Аксесоари за монтаж",
    defaults: { categoryId: 7 },
    hiddenFields: [
      "btu",
      "spec",
      "color",
      "roomAreaMin",
      "roomAreaMax",
      "overallClass",
      "coolingEnergyClass",
      "heatingEnergyClass",
    ],
  },
};

const baseFormData = {
  productCode: "",
  productModel: "",
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
  manufacturedYear: null,
  popularity: null,
  slug: "",
  description: null,
};

const makes = ["Gree", "Daikin", "Mitsubishi Electric", "Fujitsu"];
const classes = ["Начален клас", "Междинен клас", "Висок клас"];
const energyClasses = ["A+++", "A++", "A+", "A", "B", "C", "D"];

const specFields = [
  { id: "spec.coolingVolume", label: "Препоръчителен обем охлаждане (м³)" },
  { id: "spec.heatingVolume", label: "Препоръчителен обем отопление (м³)" },
  { id: "spec.coolingPower", label: "Мощност охлаждане (kW)" },
  { id: "spec.heatingPower", label: "Мощност отопление (kW)" },
  { id: "spec.coolingConsumption", label: "Консумация охлаждане (kW)" },
  { id: "spec.heatingConsumption", label: "Консумация отопление (kW)" },
  { id: "spec.voltage", label: "Захранващо напрежение (V)" },
  { id: "spec.seer", label: "SEER" },
  { id: "spec.scop", label: "SCOP" },
  { id: "spec.noiseIndoor", label: "Шум вътрешно тяло (dB)" },
  { id: "spec.noiseOutdoor", label: "Шум външно тяло (dB)" },
  { id: "spec.sizeIndoor", label: "Размери вътрешно тяло (мм)" },
  { id: "spec.sizeOutdoor", label: "Размери външно тяло (мм)" },
  { id: "spec.weightIndoor", label: "Тегло вътрешно тяло (кг)" },
  { id: "spec.weightOutdoor", label: "Тегло външно тяло (кг)" },
  { id: "spec.workingRangeCooling", label: "Работен диапазон охлаждане (°C)" },
  { id: "spec.workingRangeHeating", label: "Работен диапазон отопление (°C)" },
  { id: "spec.refrigerant", label: "Хладилен агент" },
  { id: "spec.origin", label: "Произход" },
  { id: "spec.pipeDiameter", label: "Диаметър тръба (мм)" },
  { id: "spec.maxDifference", label: "Денивелация (м)" },
  { id: "spec.powerSupply", label: "Захранване" },
  { id: "spec.maxPipeLength", label: "Макс. дължина тръбен път (м)" },
];

const inputCls =
  "block w-full rounded-lg border border-gray-200 bg-white py-2.5 px-3.5 text-sm text-gray-800 shadow-sm transition placeholder:text-gray-300 focus:border-[#002B5B] focus:outline-none focus:ring-2 focus:ring-[#002B5B]/10";

const FormField = ({ id, label, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
    >
      {label}
      {required && <span className="ml-1 text-red-400">*</span>}
    </label>
    {children}
  </div>
);

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#002B5B] text-white text-base">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-bold text-gray-800">{title}</h3>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const productTypes = [
  {
    name: "Инверторни климатици",
    value: "invertorni_klimatici",
    singularName: "Инверторен климатик",
    singularNameEn: "invertoren klimatik",
  },
  {
    name: "Хиперинверторни климатици",
    value: "hiperinvertorni_klimatici",
    singularName: "Хиперинверторен климатик",
    singularNameEn: "hiperinvertoren klimatik",
  },
  {
    name: "Подови климатици",
    value: "podovi_klimatici",
    singularName: "Подов климатик",
    singularNameEn: "podov klimatik",
  },
  {
    name: "Мултисплит системи",
    value: "multisplit_sistemi",
    singularName: "Мултисплит система",
    singularNameEn: "multisplit sistema",
  },
  {
    name: "Колонни климатици",
    value: "kolonni_klimatici",
    singularName: "Колонен климатик",
    singularNameEn: "kolonen klimatik",
  },
  {
    name: "Касетъчни климатици",
    value: "kasetachni_klimatici",
    singularName: "Касетъчен климатик",
    singularValue: "kasetachen klimatik",
  },
  {
    name: "Аксесоари за монтаж",
    value: "aksesoari_za_montazh",
    singularName: "",
    singularNameEn: "",
  },
];
const AddProductForm = () => {
  const [selected, setSelected] = useState(productTypes[0]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isSuccess, setIsSuccess] = useState(null);
  const [draggingId, setDraggingId] = useState(null);

  const cfg = productTypeConfig[selected.value] ?? {
    defaults: {},
    hiddenFields: [],
  };
  const isHidden = (field) => cfg.hiddenFields.includes(field);

  const buildInitialFormData = (cfg) => ({
    ...baseFormData,
    ...cfg.defaults,
    spec: { ...baseFormData.spec, ...(cfg.defaults?.spec ?? {}) },
  });

  const [formData, setFormData] = useState(() => buildInitialFormData(cfg));

  useEffect(() => {
    setFormData(buildInitialFormData(cfg));
  }, [selected.value, cfg]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("spec.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        spec: { ...prev.spec, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalizedProductName = `${productTypes[formData.categoryId].singularName} ${formData.make} ${formData.productModel} ${formData.btu} BTU`;
      const product_code = `${formData.make.substring(0, 2).toUpperCase()}-${formData.btu}-${formData.productModel.replace(/\s+/g, "")}`;
      const slug = `${productTypes[formData.categoryId].singularNameEn.split(" ").join("-")}-${formData.make.toLowerCase()}-${formData.productModel.toLowerCase()}-${formData.btu}btu`;
      const payload = {
        category_id: formData.categoryId,
        product_code,
        product_name: finalizedProductName,
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
        manufactured_year: formData.manufacturedYear,
        popularity: formData.popularity,
        slug,
        description: formData.description,
      };
      const productRes = await axios.post(
        "/api/dashboard/add-product",
        payload,
      );
      const productId = productRes.data.id;
      const sigRes = await axios.get(`/api/cloudinary/cloudinary-signature`);
      const uploaded = [];
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
          data,
        );
        uploaded.push({
          publicId: cloudRes.data.public_id,
          position: i,
          isMain: i === 0,
        });
      }
      await axios.post("/api/dashboard/add-product-images", {
        productId,
        images: uploaded,
      });
      setIsSuccess(true);
      setUploadedImages([]);
    } catch (err) {
      console.error("Error adding product:", err);
      setIsSuccess(false);
    }
  };

  const handleDragStart = (id) => setDraggingId(id);
  const handleDragEnter = (id) => {
    if (id === draggingId) return;
    setUploadedImages((prev) => {
      const arr = [...prev];
      const from = arr.findIndex((i) => i.id === draggingId);
      const to = arr.findIndex((i) => i.id === id);
      const [dragged] = arr.splice(from, 1);
      arr.splice(to, 0, dragged);
      return arr;
    });
  };
  const handleDragEnd = () => setDraggingId(null);
  const removeImage = (id) =>
    setUploadedImages((prev) => prev.filter((i) => i.id !== id));

  return (
    <section className="bg-gray-50">
      {/* Page header */}
      <div className="bg-[#002B5B] py-8">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Добавяне на продукт
          </h1>
          {cfg.name && (
            <span className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-white/80">
              {cfg.name}
            </span>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
        {/* Alerts */}
        {isSuccess === true && (
          <div className="mb-4">
            <SucessAlert text="Продуктът е добавен успешно." />
          </div>
        )}
        {isSuccess === false && (
          <div className="mb-4">
            <ErrorAlert text="Имаше грешка при добавянето." />
          </div>
        )}

        <Dropdown
          label="Вид продукт"
          options={productTypes.map((p) => p.name)}
          value={selected.name}
          onChange={(name) => {
            const matched = productTypes.find((p) => p.name === name);
            setSelected(matched);
          }}
          required
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-5">
            {/* Basic info */}
            <Card>
              <SectionHeader
                icon="📋"
                title="Основна информация"
                subtitle="Марка, модел и категория"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {!isHidden("make") && (
                  <div className="flex flex-col gap-1.5">
                    <Dropdown
                      label="Марка"
                      options={makes}
                      value={formData.make}
                      onChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          make: value,
                        }))
                      }
                      required
                    />
                  </div>
                )}
                {!isHidden("productModel") && (
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="productModel"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Модел <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="productModel"
                      name="productModel"
                      type="text"
                      required
                      value={formData.productModel || ""}
                      onChange={handleInputChange}
                      placeholder="напр. MSZ-HR25VF"
                      className={inputCls}
                    />
                  </div>
                )}
                {!isHidden("color") && (
                  <FormField id="color" label="Цвят" required>
                    <input
                      id="color"
                      name="color"
                      type="text"
                      required
                      value={formData.color || ""}
                      onChange={handleInputChange}
                      placeholder="напр. Бял"
                      className={inputCls}
                    />
                  </FormField>
                )}
                {!isHidden("manufacturedYear") && (
                  <FormField
                    id="manufacturedYear"
                    label="Година на производство"
                    required
                  >
                    <input
                      id="manufacturedYear"
                      name="manufacturedYear"
                      type="number"
                      required
                      min="1980"
                      max={new Date().getFullYear()}
                      step="1"
                      value={formData.manufacturedYear || ""}
                      onChange={handleInputChange}
                      className={inputCls}
                    />
                  </FormField>
                )}
              </div>
            </Card>

            {/* Pricing */}
            <Card>
              <SectionHeader
                icon="💶"
                title="Цена и наличност"
                subtitle="Цена, намаление и популярност"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {!isHidden("price") && (
                  <FormField id="price" label="Цена (EUR)" required>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      required
                      step="0.1"
                      min="0"
                      value={formData.price || ""}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      className={inputCls}
                    />
                  </FormField>
                )}
                {!isHidden("discount") && (
                  <FormField id="discount" label="Намаление (%)" required>
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
                      placeholder="0"
                      className={inputCls}
                    />
                  </FormField>
                )}
                {!isHidden("popularity") && (
                  <FormField id="popularity" label="Популярност (0–5)" required>
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
                      placeholder="0.0"
                      className={inputCls}
                    />
                  </FormField>
                )}
              </div>
            </Card>

            {/* Technical */}
            {(!isHidden("btu") ||
              !isHidden("roomAreaMin") ||
              !isHidden("roomAreaMax")) && (
              <Card>
                <SectionHeader
                  icon="❄️"
                  title="Технически параметри"
                  subtitle="BTU и площ на помещението"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {!isHidden("btu") && (
                    <FormField id="btu" label="BTU" required>
                      <input
                        id="btu"
                        name="btu"
                        type="number"
                        required
                        step="1000"
                        min="0"
                        value={formData.btu || ""}
                        onChange={handleInputChange}
                        placeholder="9000"
                        className={inputCls}
                      />
                    </FormField>
                  )}
                  {!isHidden("roomAreaMin") && (
                    <FormField id="roomAreaMin" label="Площ мин. (м²)" required>
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
                        placeholder="20"
                        className={inputCls}
                      />
                    </FormField>
                  )}
                  {!isHidden("roomAreaMax") && (
                    <FormField
                      id="roomAreaMax"
                      label="Площ макс. (м²)"
                      required
                    >
                      <input
                        id="roomAreaMax"
                        name="roomAreaMax"
                        type="number"
                        required
                        step="5"
                        min={formData.roomAreaMin || "0"}
                        value={formData.roomAreaMax || ""}
                        onChange={handleInputChange}
                        placeholder="35"
                        className={inputCls}
                      />
                    </FormField>
                  )}
                </div>
              </Card>
            )}

            {/* Energy classes */}
            {(!isHidden("overallClass") ||
              !isHidden("coolingEnergyClass") ||
              !isHidden("heatingEnergyClass")) && (
              <Card>
                <SectionHeader
                  icon="⚡"
                  title="Енергийни класове"
                  subtitle="Общ клас и класове на охлаждане/отопление"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {!isHidden("overallClass") && (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Общ клас <span className="text-red-400">*</span>
                      </span>
                      <Dropdown
                        label=""
                        options={classes}
                        value={formData.overallClass}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            overallClass: value,
                          }))
                        }
                        required
                      />
                    </div>
                  )}
                  {!isHidden("coolingEnergyClass") && (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Охлаждане <span className="text-red-400">*</span>
                      </span>
                      <Dropdown
                        label=""
                        options={energyClasses}
                        value={formData.coolingEnergyClass}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            coolingEnergyClass: value,
                          }))
                        }
                        required
                      />
                    </div>
                  )}
                  {!isHidden("heatingEnergyClass") && (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Отопление <span className="text-red-400">*</span>
                      </span>
                      <Dropdown
                        label=""
                        options={energyClasses}
                        value={formData.heatingEnergyClass}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            heatingEnergyClass: value,
                          }))
                        }
                        required
                      />
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Description */}
            {!isHidden("description") && (
              <Card>
                <SectionHeader
                  icon="📝"
                  title="Описание"
                  subtitle="Текстово описание на продукта"
                />
                <FormField id="description" label="Описание" required>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description || ""}
                    onChange={handleInputChange}
                    placeholder="Въведете описание на продукта..."
                    className={`${inputCls} resize-none`}
                  />
                </FormField>
              </Card>
            )}

            {/* Images */}
            {!isHidden("image") && (
              <Card>
                <SectionHeader
                  icon="🖼️"
                  title="Изображения"
                  subtitle="Качете и наредете снимките с drag & drop"
                />

                {/* Drop zone */}
                <label
                  htmlFor="file-upload"
                  className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 py-10 text-center transition hover:border-[#002B5B] hover:bg-[#002B5B]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-400 transition group-hover:bg-[#002B5B]/10 group-hover:text-[#002B5B]">
                    <MdOutlinePhotoSizeSelectActual className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#002B5B]">
                      Добавете изображения
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      или дръпнете и пуснете тук · PNG, JPG, GIF
                    </p>
                  </div>
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
                        url: URL.createObjectURL(file),
                      }));
                      setUploadedImages((prev) => [...prev, ...mapped]);
                    }}
                  />
                </label>

                {/* Image grid */}
                {uploadedImages.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {uploadedImages.map((img, index) => (
                      <div
                        key={img.id}
                        draggable
                        onDragStart={() => handleDragStart(img.id)}
                        onDragEnter={() => handleDragEnter(img.id)}
                        onDragEnd={handleDragEnd}
                        className={`group relative cursor-move overflow-hidden rounded-xl border-2 transition ${
                          draggingId === img.id
                            ? "scale-95 border-[#002B5B] opacity-60"
                            : index === 0
                              ? "border-[#002B5B]"
                              : "border-gray-200 hover:border-gray-300"
                        }`}
                        style={{ aspectRatio: "1" }}
                      >
                        <img
                          src={img.url}
                          className="h-full w-full object-cover"
                          alt=""
                        />

                        {/* Main badge */}
                        {index === 0 && (
                          <span className="absolute bottom-1 left-1 rounded-md bg-[#002B5B] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                            Главна
                          </span>
                        )}

                        {/* Position number */}
                        <span className="absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-md bg-white/90 text-[10px] font-bold text-gray-600 shadow-sm">
                          {index + 1}
                        </span>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => removeImage(img.id)}
                          className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-red-500 opacity-0 shadow-sm transition group-hover:opacity-100 hover:bg-red-500 hover:text-white"
                        >
                          <IoIosRemoveCircle className="text-base" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}
          </div>

          {/* ── RIGHT COLUMN — Specs ── */}
          {!isHidden("spec") && (
            <div>
              <Card className="sticky top-6">
                <SectionHeader
                  icon="🔧"
                  title="Допълнителни характеристики"
                  subtitle="Технически спецификации на продукта"
                />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {specFields
                    .filter((field) => !isHidden(field.id))
                    .map((field) => (
                      <FormField
                        key={field.id}
                        id={field.id}
                        label={field.label}
                      >
                        <input
                          id={field.id}
                          name={field.id}
                          type="text"
                          value={formData.spec[field.id.split(".")[1]] ?? ""}
                          onChange={handleInputChange}
                          placeholder="—"
                          className={inputCls}
                        />
                      </FormField>
                    ))}
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full max-w-md rounded-xl bg-[#002B5B] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#003a7a] focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2 active:scale-[0.98] lg:w-auto"
          >
            Добави продукт
          </button>
          <p className="text-xs text-gray-400">
            <span className="text-red-400">*</span> Задължителни полета
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddProductForm;
