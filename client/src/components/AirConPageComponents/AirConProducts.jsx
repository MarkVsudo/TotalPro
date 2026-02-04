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
      {products.map((product) => {
        const mainImg = findMainImg(product);

        return (
          <div
            key={product.product_id}
            className="group relative h-full flex flex-col"
          >
            <Link
              to={`/air-conditioning/${product.slug}-${product.product_id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  alt="Product front image"
                  src={
                    mainImg
                      ? `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${mainImg.public_id}`
                      : ImageNotFound
                  }
                  className="aspect-square w-full rounded-md object-contain group-hover:brightness-102 group-hover:scale-105 lg:aspect-auto lg:h-80 transition-all"
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
            </Link>

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
                onClick={() => addToCart(product, mainImg)}
                className="flex justify-center items-center gap-x-2 w-full bg-[#002B5B] hover:bg-blue-900 text-white py-2 rounded-lg font-medium shadow-md cursor-pointer transition-colors mt-auto"
              >
                <IoBagAddOutline className="h-5 w-5" />
                Добави
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
