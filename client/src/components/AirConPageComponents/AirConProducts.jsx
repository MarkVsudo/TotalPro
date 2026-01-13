import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import GreeLogo from "../../assets/AirConBrands/gree.png";
import DaikinLogo from "../../assets/AirConBrands/daikin.png";
import MitsubishiElLogo from "../../assets/AirConBrands/mitsubishi-electric.png";
import FujitsuLogo from "../../assets/AirConBrands/fujitsu.png";

const decideCompanyLogo = (name) => {
  switch (name) {
    case "gree":
      return GreeLogo;
    case "daikin":
      return DaikinLogo;
    case "mitsubishi_electric":
      return MitsubishiElLogo;
    case "fujitsu":
      return FujitsuLogo;

    default:
      break;
  }
};

export default function AirConProducts({ products }) {
  const [searchParams] = useSearchParams();

  const gridParam = Number(searchParams.get("grid")) || 4;

  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  const effectiveGrid = isMobile ? Math.min(gridParam, 2) : gridParam;

  const gridClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={`bg-white grid gap-x-6 xl:gap-x-8 gap-y-10 ${gridClasses[effectiveGrid]}`}
    >
      {products.map((product, index) => (
        <Link to={`/${product.slug}-${product.product_id}`} key={index}>
          <div className="group relative h-full flex flex-col">
            <div className="relative overflow-hidden">
              <img
                alt="Product front image"
                src="https://res.cloudinary.com/dh1arjjjy/image/upload/v1767629392/ac1_fw4rmi.webp"
                className="aspect-square w-full rounded-md object-contain group-hover:brightness-102
                      group-hover:scale-105 lg:aspect-auto lg:h-80 transition-all"
              />
              <img
                alt="Aircon company"
                src={decideCompanyLogo(product.make)}
                className="absolute top-0 left-0 h-12 w-12 object-contain"
              />
              {product.discount && (
                <div className="absolute top-0 right-0 bg-green-200 text-green-900 px-2 rounded-md">
                  -{product.discount}% намаление
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <div>
                <h3 className="text-sm text-gray-700">
                  {product.product_name}
                </h3>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-medium text-gray-900">
                  {product.discount
                    ? (
                        Number(product.price) *
                        (1 - Number(product.discount) / 100)
                      ).toFixed(2)
                    : product.price}
                  €
                </p>
                <p
                  className={`text-sm text-gray-500 ${
                    product.discount ? "line-through" : "hidden"
                  }`}
                >
                  {product.price}€
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
