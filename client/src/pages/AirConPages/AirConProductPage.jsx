import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaTruck,
  FaTools,
} from "react-icons/fa";
import {
  IoBagAddOutline,
  IoHeartOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

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
    imageSrc: accessoryImg2,
    imageAlt: "Вътрешно тяло снимка",
    price: "100.00",
  },
  {
    id: 3,
    name: "Комплект антивибрационни тампони (4 бр.)",
    href: "#",
    imageSrc: accessoryImg3,
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <span>Начало</span> <span className="mx-2">/</span>
          <span>Климатици</span> <span className="mx-2">/</span>
          <span className="text-gray-900">GREE GWH12AGB-K6DNA1A</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={productImgs[selectedImage]}
                alt="Main product"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productImgs.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-blue-600 ring-2 ring-blue-200"
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
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Инверторен климатик GREE GWH12AGB-K6DNA1A
              </h1>
              <p className="text-lg text-gray-600 mb-4">12000BTU, Клас A+++</p>

              <div className="flex items-center gap-4 mb-4">
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

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {totalPrice.toFixed(2)} лв.
                  </span>
                  <span className="text-xl text-gray-500">
                    €{(totalPrice * 0.51).toFixed(2)}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div>
                    Арт. номер:{" "}
                    <span className="font-semibold text-gray-900">8252192</span>
                  </div>
                  <div>
                    Производител:{" "}
                    <span className="font-semibold text-gray-900">
                      Mitsubishi
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-medium">
                      60 месеца гаранция
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeInstallation}
                      onChange={(e) => setIncludeInstallation(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <FaTools className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">С монтаж</span>
                    <span className="text-blue-600 font-semibold ml-auto">
                      + 400 лв.
                    </span>
                  </label>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                      <IoBagAddOutline className="w-5 h-5" />
                      Добави в количката
                    </button>
                    <button className="p-4 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
                      <IoHeartOutline className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-4 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
                      <IoShareSocialOutline className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                <FaTruck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">
                  Безплатна доставка
                </div>
                <div className="text-xs text-gray-600">над 200 лв.</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                <FaShieldAlt className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">
                  Гаранция
                </div>
                <div className="text-xs text-gray-600">60 месеца</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                <FaTools className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Монтаж</div>
                <div className="text-xs text-gray-600">от специалисти</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Описание на продукта
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Насладете се на висока енергийна ефективност и комфорт през всички
            сезони с инверторния климатик GREE. С модерен дизайн, ниски нива на
            шум и икономичен режим, той е перфектен избор за дома или офиса.
            Благодарение на своята A+++ енергийна класа, този климатик осигурява
            максимална ефективност при минимална консумация на електроенергия.
          </p>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Технически характеристики
            </h2>
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              {showSpecs ? "Скрий" : "Покажи всички"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {specifications
              .slice(0, showSpecs ? specifications.length : 8)
              .map(([label, value], i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-600">{label}</span>
                  <span className="font-medium text-gray-900 text-right">
                    {value}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Accessories */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Допълнителни аксесоари
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((accessory) => (
              <div key={accessory.id} className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden mb-4 aspect-square">
                  <img
                    src={accessory.imageSrc}
                    alt={accessory.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-2 text-sm leading-tight">
                  {accessory.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-gray-900">
                    {accessory.price} лв.
                  </span>
                  <span className="text-sm text-gray-500">
                    {convertedPrices[accessory.id]
                      ? `€${convertedPrices[accessory.id]}`
                      : "..."}
                  </span>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  <IoBagAddOutline className="w-4 h-4" />
                  Добави
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
