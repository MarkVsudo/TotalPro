import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import GreeLogo from "../../assets/AirConBrands/gree.png";
import DaikinLogo from "../../assets/AirConBrands/daikin.png";
import MitsubishiElLogo from "../../assets/AirConBrands/mitsubishi-electric.png";
import FujitsuLogo from "../../assets/AirConBrands/fujitsu.png";
import { useCart } from "../../context/CartContext";
import ImageNotFound from "../../assets/image-not-found.png";

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

export default function AirConProducts({ products, productImgs }) {
  const { addToCart } = useCart();

  const findMainImg = (product) =>
    productImgs.find(
      (img) => img.product_id === product.product_id && img.is_main,
    );

  return (
    <>
      {products.length === 0 ? (
        <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center text-center py-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Няма намерени продукти
          </h2>

          <p className="text-gray-500 mt-2 max-w-md">
            Нито един продукт не отговаря на избраните критерии. Опитайте да
            промените филтрите или разгледайте всички продукти.
          </p>

          <Link
            to="/air-conditioning"
            type="button"
            className="mt-6 px-6 py-2.5 bg-[#002B5B] hover:bg-blue-900 text-white rounded-lg font-medium shadow-md transition-colors"
          >
            Изчисти филтрите
          </Link>
        </div>
      ) : (
        products.map((product) => {
          const mainImg = findMainImg(product);

          return (
            <div
              key={product.product_id}
              className="group relative h-full flex flex-col bg-white rounded-lg sm:rounded-none sm:bg-transparent"
            >
              <Link
                to={`/air-conditioning/${product.slug}-${product.product_id}`}
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-md">
                  <img
                    alt="Product front image"
                    src={
                      mainImg
                        ? `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${mainImg.public_id}`
                        : ImageNotFound
                    }
                    className="aspect-square w-full object-contain group-hover:brightness-102 group-hover:scale-105 lg:aspect-auto lg:h-80 transition-all"
                  />

                  <img
                    alt="Aircon company"
                    src={decideCompanyLogo(product.make)}
                    className="absolute top-1 left-1 sm:top-2 sm:left-2 h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  />

                  {product.discount && (
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-green-200 text-green-900 px-2 py-1 rounded-md text-xs sm:text-sm font-medium shadow-sm">
                      -{product.discount}%
                    </div>
                  )}
                </div>
              </Link>

              <div className="flex flex-col gap-2 sm:gap-2.5 flex-grow pt-3 sm:pt-4">
                <div>
                  <h3 className="text-sm sm:text-base text-gray-700 line-clamp-2 group-hover:text-gray-900 transition-colors">
                    {product.product_name}
                  </h3>
                </div>

                <div className="flex gap-2 items-center flex-wrap">
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    {product.discount
                      ? (
                          Number(product.price) *
                          (1 - Number(product.discount) / 100)
                        ).toFixed(2)
                      : product.price}
                    €
                  </p>

                  {product.discount && (
                    <p className="text-sm text-gray-500 line-through">
                      {product.price}€
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product, mainImg)}
                  className="flex justify-center items-center gap-x-2 w-full bg-[#002B5B] hover:bg-blue-900 active:bg-blue-950 text-white py-2.5 sm:py-2 rounded-lg font-medium shadow-md cursor-pointer transition-colors mt-auto text-sm sm:text-base"
                >
                  <IoBagAddOutline className="h-5 w-5" />
                  <span>Добави</span>
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
