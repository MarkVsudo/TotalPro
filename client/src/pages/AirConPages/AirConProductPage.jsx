import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscTools } from "react-icons/vsc";
import { IoBagAddOutline, IoShareSocialOutline } from "react-icons/io5";
import { FaCheckCircle, FaShieldAlt, FaStar, FaTruck } from "react-icons/fa";

import productImg5 from "../../assets/air-con-product-img-5.png";
import productImg1 from "../../assets/air-con-product-img-1.jpeg";
import productImg2 from "../../assets/air-con-product-img-2.jpeg";
import productImg3 from "../../assets/air-con-product-img-3.jpeg";
import productImg4 from "../../assets/air-con-product-img-4.jpeg";
import productImg6 from "../../assets/air-con-product-img-6.jpeg";
import productImg7 from "../../assets/air-con-product-img-7.jpeg";
import productImg8 from "../../assets/air-con-product-img-8.jpeg";
import accessoryImg1 from "../../assets/air-con-accessory-img-1.jpg";
import accessoryImg2 from "../../assets/air-con-accessory-img-2.jpg";
import accessoryImg3 from "../../assets/air-con-accessory-img-3.jpg";
import accessoryImg4 from "../../assets/air-con-accessory-img-4.jpg";
import accessoryImg5 from "../../assets/air-con-accessory-img-5.jpg";

const productImgs = [
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  productImg7,
  productImg8,
];

const accessories = [
  {
    id: 1,
    name: "PVC кондензна вана",
    href: "/air-conditioning/1",
    imageSrc: accessoryImg1,
    imageAlt: "Вътрешно тяло снимка",
    price: "55.00",
  },
  {
    id: 2,
    name: "Комплект PVC кондензна вана + нагревател",
    href: "#",
    imageSrc: accessoryImg3,
    imageAlt: "Вътрешно тяло снимка",
    price: "100.00",
  },
  {
    id: 3,
    name: "Комплект антивибрационни тампони (4 бр.)",
    href: "#",
    imageSrc: accessoryImg2,
    imageAlt: "Вътрешно тяло снимка",
    price: "30.00",
  },
  {
    id: 4,
    name: "Желязна кондензна вана",
    href: "#",
    imageSrc: accessoryImg4,
    imageAlt: "Вътрешно тяло снимка",
    price: "70.00",
  },
  {
    id: 5,
    name: "Комплект желязна кондензна вана + нагревател",
    href: "#",
    imageSrc: accessoryImg5,
    imageAlt: "Вътрешно тяло снимка",
    price: "115.00",
  },
];

const convert = async (from, to, amount) => {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?base=${from}&symbols=${to}`
    );
    const data = await res.json();
    return (amount * data.rates[to]).toFixed(2);
  } catch (error) {
    console.error("Conversion failed:", error);
    return null;
  }
};

const AirConProductPage = () => {
  const [convertedPrices, setConvertedPrices] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);
  const [includeInstallation, setIncludeInstallation] = useState(false);

  const basePrice = 1249.0;
  const installationPrice = 400.0;
  const totalPrice = includeInstallation
    ? basePrice + installationPrice
    : basePrice;

  useEffect(() => {
    const fetchConversions = async () => {
      const conversions = {};
      for (const accessory of accessories) {
        const numericPrice = parseFloat(accessory.price);
        const converted = await convert("BGN", "EUR", numericPrice);
        conversions[accessory.id] = converted;
      }
      setConvertedPrices(conversions);
    };

    fetchConversions();
  }, []);

  const specifications = [
    ["За помещения (кв.м.)", "от 10 до 15 кв.м."],
    ["Енергиен клас охлаждане", "A++"],
    ["Енергиен клас отопление", "A+"],
    ["Мощност BTU", "9 000 BTU"],
    ["Препоръчителен обем (охлаждане)", "40 куб. м."],
    ["Препоръчителен обем (отопление)", "35 куб. м."],
    ["Отдавана мощност (охлаждане)", "0.90-2.60-3.40 kW"],
    ["Отдавана мощност (отопление)", "0.80-2.90-3.40 kW"],
    ["Консумирана мощност (охлаждане)", "0.10-0.732-1.24 kW"],
    ["Консумирана мощност (отопление)", "0.120-0.733-1.20 kW"],
    ["Захранващо напрежение", "220-240 V"],
    ["SEER (ефективност при охлаждане)", "6.20 - клас A++"],
    ["SCOP (ефективност при отопление)", "4.00 - клас A+"],
    ["Ниво на шум (вътрешно тяло)", "25/32/38.5 dB"],
    ["Ниво на шум (външно тяло)", "55.5 dB"],
    ["Размери вътрешно тяло (ШxВxД)", "805 x 285 x 194 mm"],
    ["Размери външно тяло (ШxВxД)", "720 x 495 x 270 mm"],
    ["Тегло (вътрешно тяло)", "7.6 кг"],
    ["Тегло (външно тяло)", "23.2 кг"],
    ["Работен диапазон при охлаждане", "-15 до +50 °C"],
    ["Работен диапазон при отопление", "-15 до +30 °C"],
    ["Хладилен агент", "R32"],
    ["Цвят", "Бял"],
    ["Произход", "Китай"],
    ["Диаметър на тръбата течност/газ", "6.35/9.52 mm"],
    ["Денивелация вътрешно/външно тяло", "10 m"],
    ["Захранване", "Външно"],
    ["Максимална дължина на тръбния път", "25 m"],
  ];

  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm text-[#002B5B]/85">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <Link to="/">
              <span>Начало</span>
            </Link>
            <span className="mx-1 sm:mx-2">/</span>
            <Link to="/air-conditioning">
              <span>Климатици</span>
            </Link>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-[#002B5B] break-all">
              GREE PULAR GWH12AGB-K6DNA1A
            </span>
          </div>
        </nav>

        {/* Main Product Section */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8 lg:mb-16">
          {/* Product Images */}
          <div className="w-full lg:w-[55%] space-y-3 lg:space-y-4">
            <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-white shadow-lg flex justify-center items-center aspect-square lg:aspect-auto lg:h-auto">
              <img
                src={productImgs[selectedImage]}
                alt="Main product"
                className="w-full h-full lg:w-150 lg:h-150 object-contain p-4"
              />
            </div>
            <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2">
              {productImgs.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-blue-900"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-[45%] space-y-4 lg:space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#002B5B] mb-2">
                Инверторен климатик GREE PULAR GWH12AGB-K6DNA1A
              </h1>
              <p className="text-base lg:text-lg text-gray-600 mb-4">
                12000BTU, Клас A+++
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    (24 отзива)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <FaCheckCircle className="w-4 h-4" />В наличност
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002B5B]">
                    {totalPrice.toFixed(2)} лв.
                  </span>
                  <span className="text-lg sm:text-xl text-gray-500">
                    €{(totalPrice * 0.51).toFixed(2)}
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3 text-sm text-gray-600 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span>Арт. номер:</span>
                    <span className="font-semibold text-[#002B5B]">
                      8252192
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span>Производител:</span>
                    <span className="font-semibold text-[#002B5B]">
                      Mitsubishi
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-4 h-4 text-[#002B5B]" />
                    <span className="text-[#002B5B] font-medium">
                      60 месеца гаранция
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#002B5B] transition-colors cursor-pointer">
                    <div className="group grid size-4 grid-cols-1 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={includeInstallation}
                        onChange={(e) =>
                          setIncludeInstallation(e.target.checked)
                        }
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-[#002B5B] bg-white checked:border-[#002B5B] checked:bg-[#002B5B] indeterminate:border-[#002B5B] indeterminate:bg-[#002B5B] focus:ring-[#002B5B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002B5B] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                    <VscTools className="w-4 h-4 text-gray-600 flex-shrink-0" />
                    <span className="font-medium text-[#002B5B] flex-1">
                      С монтаж
                    </span>
                    <span className="text-[#002B5B] font-semibold">
                      + 400 лв.
                    </span>
                  </label>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="flex justify-center items-center gap-x-2 flex-1 bg-[#002B5B] hover:bg-blue-900 text-white py-2 sm:py-3 px-4 rounded-lg font-medium shadow-md cursor-pointer transition-colors text-sm sm:text-base"
                    >
                      <IoBagAddOutline className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">
                        Добави в количката
                      </span>
                      <span className="sm:hidden">Добави</span>
                    </button>
                    <button className="p-2 sm:p-4 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
                      <IoShareSocialOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-[#002B5B] text-center">
                <FaTruck className="w-6 h-6 sm:w-8 sm:h-8 text-[#002B5B] mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-gray-900">
                  Безплатна доставка
                </div>
                <div className="text-xs text-gray-600">над 1200 лв.</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-[#002B5B] text-center">
                <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8 text-[#002B5B] mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-gray-900">
                  Гаранция
                </div>
                <div className="text-xs text-gray-600">60 месеца</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-[#002B5B] text-center">
                <VscTools className="w-6 h-6 sm:w-8 sm:h-8 text-[#002B5B] mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-gray-900">
                  Монтаж
                </div>
                <div className="text-xs text-gray-600">от специалисти</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200 mb-8 lg:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Описание на продукта
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
            Насладете се на висока енергийна ефективност и комфорт през всички
            сезони с инверторния климатик GREE. С модерен дизайн, ниски нива на
            шум и икономичен режим, той е перфектен избор за дома или офиса.
            Благодарение на своята A+++ енергийна класа, този климатик осигурява
            максимална ефективност при минимална консумация на електроенергия.
          </p>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200 mb-8 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Технически характеристики
            </h2>
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="px-4 py-2 text-[#002B5B] hover:text-blue-900 font-medium text-sm sm:text-base self-start sm:self-auto"
            >
              {showSpecs ? "Скрий" : "Покажи всички"}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-x-4 lg:gap-x-8">
            {specifications
              .slice(0, showSpecs ? specifications.length : 6)
              .map(([label, value], i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-600 text-sm sm:text-base">
                    {label}
                  </span>
                  <span className="font-medium text-gray-900 text-sm sm:text-base sm:text-right">
                    {value}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Accessories */}
        <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
            Допълнителни аксесоари
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {accessories.map((accessory) => (
              <div key={accessory.id} className="group flex flex-col">
                <div className="bg-gray-50 rounded-xl overflow-hidden mb-3 sm:mb-4 aspect-square">
                  <img
                    src={accessory.imageSrc}
                    alt={accessory.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-2 text-xs sm:text-sm leading-tight">
                  {accessory.name}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    {accessory.price} лв.
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {convertedPrices[accessory.id]
                      ? `€${convertedPrices[accessory.id]}`
                      : "..."}
                  </span>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center mt-auto gap-x-1 sm:gap-x-2 w-full bg-[#002B5B] hover:bg-blue-900 text-white py-2 rounded-lg font-medium shadow-md cursor-pointer transition-colors text-xs sm:text-sm"
                >
                  <IoBagAddOutline className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Добави</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConProductPage;
