import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import GreeLogo from "../../assets/AirConBrands/gree.png";
import DaikinLogo from "../../assets/AirConBrands/daikin.png";
import MitsubishiElLogo from "../../assets/AirConBrands/mitsubishi-electric.png";
import FujitsuLogo from "../../assets/AirConBrands/fujitsu.png";
import { useCart } from "../../context/CartContext";
import ImageNotFound from "../../assets/image-not-found.png";

const decideCompanyLogo = (name) => {
  if (!name || typeof name !== "string") return null;

  const normalizedName = name.trim().replace(/\s+/g, "_").toLowerCase();

  switch (normalizedName) {
    case "gree":
      return GreeLogo;
    case "daikin":
      return DaikinLogo;
    case "mitsubishi_electric":
      return MitsubishiElLogo;
    case "fujitsu":
      return FujitsuLogo;
    default:
      return null;
  }
};

export default function AirConProducts({ products, productImgs }) {
  const { addToCart } = useCart();

  const findMainImg = (product) =>
    productImgs.find(
      (img) => img.product_id === product.product_id && img.is_main,
    );

  if (products.length === 0) {
    return (
      <div className="col-span-full flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 text-4xl">
          🌬️
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Няма намерени продукти
          </h2>
          <p className="mt-1.5 max-w-sm text-sm text-gray-400">
            Нито един продукт не отговаря на избраните критерии. Опитайте да
            промените филтрите.
          </p>
        </div>
        <Link
          to="/air-conditioning"
          className="mt-2 rounded-xl bg-[#002B5B] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#003a7a] active:scale-95"
        >
          Изчисти филтрите
        </Link>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => {
        const mainImg = findMainImg(product);
        const imgSrc = mainImg
          ? `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${mainImg.public_id}`
          : ImageNotFound;
        const logo = decideCompanyLogo(product.make);

        const discountedPrice =
          product.discount != null
            ? (
                Number(product.price) *
                (1 - Number(product.discount) / 100)
              ).toFixed(2)
            : null;

        return (
          <article
            key={product.product_id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-trangray-y-1 hover:shadow-xl hover:shadow-gray-200/80"
          >
            {/* Image area */}
            <Link
              to={`/air-conditioning/${product.slug}-${product.product_id}`}
              className="relative block overflow-hidden "
              style={{ aspectRatio: "4/3" }}
            >
              <img
                alt={product.product_name}
                src={imgSrc}
                className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]"
              />

              {/* Brand logo */}
              {logo && product.category_value !== "aksesoari_za_montazh" && (
                <div className="absolute left-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 p-1.5 shadow-sm backdrop-blur-sm">
                  <img
                    alt={product.make}
                    src={logo}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              {/* Discount badge */}
              {product.discount && (
                <div className="absolute right-3 top-3 z-20 rounded-xl bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                  −{product.discount}%
                </div>
              )}

              {/* Hover shimmer overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            {/* Thin accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#002B5B]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-4">
              <Link
                to={`/air-conditioning/${product.slug}-${product.product_id}`}
                className="block"
              >
                <h3 className="line-clamp-2 text-sm font-medium leading-snug text-gray-700 transition-colors group-hover:text-[#002B5B]">
                  {product.product_name}
                </h3>
              </Link>

              {/* Price row */}
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight text-[#002B5B]">
                  {discountedPrice ?? product.price}€
                </span>
                {product.discount && (
                  <span className="text-xs font-medium text-gray-400 line-through">
                    {product.price}€
                  </span>
                )}
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={() =>
                  addToCart(product, mainImg, { installation: false })
                }
                className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#002B5B] bg-[#002B5B] py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#003a7a] active:scale-[0.97]"
              >
                <IoBagAddOutline className="h-4 w-4" />
                <span className="block md:hidden">Добави</span>
                <span className="hidden md:block">Добави в количката</span>
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
