import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import GreeLogo from "../../assets/AirConBrands/gree.png";
import DaikinLogo from "../../assets/AirConBrands/daikin.png";
import MitsubishiElLogo from "../../assets/AirConBrands/mitsubishi-electric.png";
import FujitsuLogo from "../../assets/AirConBrands/fujitsu.png";
import axios from "axios";

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

const decideCompanyLogo = (name) => {
  switch (name) {
    case "Gree":
      return GreeLogo;
    case "Daikin":
      return DaikinLogo;
    case "Mitsubishi Electric":
      return MitsubishiElLogo;
    case "Fujitsu":
      return FujitsuLogo;

    default:
      break;
  }
};

export default function AirConProducts() {
  const [convertedPrices, setConvertedPrices] = useState({});
  const [products, setProducts] = useState([]);

  // Params
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "Най-популярни";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const fetchConversions = async () => {
      const conversions = {};
      for (const product of products) {
        const numericPrice = parseFloat(product.price);
        const converted = await convert("BGN", "EUR", numericPrice);
        conversions[product.product_id] = converted;
      }
      setConvertedPrices(conversions);
    };
    fetchConversions();
  }, [products]);

  const sortProducts = (products, sortOption) => {
    switch (sortOption) {
      case "Най-популярни":
        return products.sort((a, b) => b.popularity - a.popularity);
      case "Най-нови":
        return products.sort(
          (a, b) => new Date(b.date_added) - new Date(a.date_added)
        );
      case "Цена: Възходяща":
        return products.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      case "Цена: Низходяща":
        return products.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products, sort);

  return (
    <div className="bg-white grid gap-x-6 xl:gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {sortedProducts.map((product, index) => (
        <Link to={product.href} key={index}>
          <div className="group relative h-full flex flex-col">
            <div className="relative overflow-hidden ">
              <img
                alt="Product front image"
                src={product.image_url}
                className="aspect-square w-full rounded-md object-contain group-hover:brightness-102
                      group-hover:scale-105 lg:aspect-auto lg:h-80 transition-all"
              />
              <img
                alt="Aircon company"
                src={decideCompanyLogo(product.make)}
                className="absolute top-0 left-0 h-12 w-12 object-contain"
              />
              <div className="absolute top-0 right-0 bg-green-200 text-green-900 px-2 rounded-md">
                -{product.discount}% намаление
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <div>
                <h3 className="text-sm text-gray-700">
                  {product.product_name}
                </h3>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-medium text-gray-900">
                  {product.price}лв.
                </p>
                <p className="text-sm text-gray-500">
                  {convertedPrices[product.product_id]
                    ? `€${convertedPrices[product.product_id]}`
                    : "Loading..."}
                </p>
              </div>
              <button
                type="button"
                className="flex justify-center items-center gap-x-2 w-full bg-[#002B5B] hover:bg-blue-900 text-white py-2 rounded-lg font-medium shadow-md cursor-pointer transition-colors mt-auto"
              >
                <IoBagAddOutline className="h-5 w-5" />
                Добави
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
