import { useEffect, useState } from "react";
import GreeImg from "../../assets/gree.png";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
  },
  {
    id: 2,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
  },
  {
    id: 3,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
  },
  {
    id: 4,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
  },
  {
    id: 5,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
  },
  {
    id: 6,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
  },
  {
    id: 7,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
  },
  {
    id: 8,
    name: "Инверторен климатик GREE GWH12AGB-K6DNA1A",
    href: "#",
    imageSrc:
      "https://s13emagst.akamaized.net/products/51341/51340887/images/res_3e66bc9d6cc52e08893e83a35a3a34c6.jpg?width=720&height=720&hash=27943222B1A3109C842327FF1C6C6645",
    imageAlt: "Вътрешно тяло снимка",
    price: "1079.00",
    color: "Бял",
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

export default function AirConProducts() {
  const [convertedPrices, setConvertedPrices] = useState({});

  useEffect(() => {
    const fetchConversions = async () => {
      const conversions = {};
      for (const product of products) {
        const numericPrice = parseFloat(product.price);
        const converted = await convert("BGN", "EUR", numericPrice);
        conversions[product.id] = converted;
      }
      setConvertedPrices(conversions);
    };

    fetchConversions();
  }, []);

  return (
    <div className="bg-white grid gap-x-6 xl:gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link to={product.href} key={product.id}>
          <div className="group relative">
            <div className="relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <img
                alt="Aircon company"
                src={GreeImg}
                className="absolute top-0 left-0 h-12 w-12 object-contain"
              />
              {/* <button
                type="button"
                className="absolute bottom-0 flex justify-center items-center gap-x-2 w-full bg-[#002B5B] hover:bg-blue-900 text-white py-2 rounded-lg font-medium shadow-md cursor-pointer transition-colors"
              >
                <IoBagAddOutline className="h-5 w-5" />
                Купи
              </button> */}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-medium text-gray-900">
                  {product.price}лв.
                </p>
                <p className="text-sm text-gray-500">
                  {convertedPrices[product.id]
                    ? `€${convertedPrices[product.id]}`
                    : "Loading..."}
                </p>
              </div>
              {/* <button
                type="button"
                className="flex items-center gap-x-2 w-fit bg-[#002B5B] hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-medium shadow-md cursor-pointer transition-colors"
              >
                <IoBagAddOutline className="h-5 w-5" />
                Купи
              </button> */}
              <button
                type="button"
                className="flex justify-center items-center gap-x-2 w-full bg-[#002B5B] hover:bg-blue-900 text-white py-2 rounded-lg font-medium shadow-md cursor-pointer transition-colors"
              >
                <IoBagAddOutline className="h-5 w-5" />
                Купи
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
