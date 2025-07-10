import productImg1 from "../../assets/air-con-product-img-1.jpeg";
import productImg2 from "../../assets/air-con-product-img-2.jpeg";
import productImg3 from "../../assets/air-con-product-img-3.jpeg";
import productImg4 from "../../assets/air-con-product-img-4.jpeg";
import productImg5 from "../../assets/air-con-product-img-5.png";
import productImg6 from "../../assets/air-con-product-img-6.jpeg";
import productImg7 from "../../assets/air-con-product-img-7.jpeg";
import productImg8 from "../../assets/air-con-product-img-8.jpeg";

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
    name: "Универсална стойка за външно тяло",
    image: productImg5,
  },
  {
    name: "Резервен дистанционен контролер",
    image: productImg6,
  },
  {
    name: "Антибактериален филтър",
    image: productImg7,
  },
  {
    name: "Изолираща лента за тръби",
    image: productImg8,
  },
];

const AirConProductPage = () => {
  return (
    <div className="flex flex-col w-full mx-auto gap-12 px-12 py-12">
      {/* Основна информация */}
      <div className="flex gap-12">
        <div className="flex flex-col gap-4 w-[40%]">
          <img
            alt="Main aircon image"
            src={productImg1}
            className="object-contain w-150 h-150 rounded-lg"
          />
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              {productImgs.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="border-2 rounded-lg border-[#002B5B] min-w-[5rem] flex-shrink-0"
                >
                  <img
                    alt="Secondary aircon image"
                    src={img}
                    className="object-contain w-35 h-25 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[60%]">
          <h1 className="text-2xl font-bold">
            Инверторен климатик GREE GWH12AGB-K6DNA1A
          </h1>
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            Насладете се на висока енергийна ефективност и комфорт през всички
            сезони с инверторния климатик GREE. С модерен дизайн, ниски нива на
            шум и икономичен режим, той е перфектен избор за дома или офиса.
            Работи ефективно при ниски външни температури, предлага функции за
            интелигентно обезскрежаване, самопочистване и таймер за пълен
            контрол. Екологичният хладилен агент R32 допринася за по-ниско
            въздействие върху околната среда.
          </p>
        </div>
      </div>
      <div className="flex gap-8 w-full">
        {/* Аксесоари */}
        <div className="w-[70%]">
          <h2 className="text-xl font-semibold mb-4">
            Аксесоари към климатика
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {accessories.map((acc, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="h-28 object-contain mb-3 rounded"
                />
                <p className="text-center font-medium">{acc.name}</p>
                <button className="mt-2 px-3 py-1 text-sm bg-[#002B5B] text-white rounded hover:bg-blue-900">
                  Добави в количката
                </button>
              </div>
            ))}
          </div>
        </div>
        <table className="table-auto w-full mt-6 text-sm border border-gray-300">
          <tbody>
            {[
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
            ].map(([label, value], i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b border-gray-300`}
              >
                <td className="p-2 font-medium">{label}</td>
                <td className="p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Поръчка или запитване */}
      <div className="flex justify-center mt-10">
        <button className="bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-700 transition">
          Поръчай сега
        </button>
      </div>
    </div>
  );
};

export default AirConProductPage;
