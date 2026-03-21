import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IoBagAddOutline, IoShareSocialOutline } from "react-icons/io5";
import { FaCheckCircle, FaShieldAlt, FaStar, FaTruck } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { useCart } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ImageNotFound from "../../assets/image-not-found.png";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import API from "../../api/api";

const AirConProductPage = () => {
  const { slugAndId } = useParams();
  const [product, setProduct] = useState(null);
  const [productOptions, setProductOptions] = useState({ installation: false });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showSpecs, setShowSpecs] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const productId = slugAndId.split("-").pop();
      const res = await API.get(`/api/products/${productId}`);
      setProduct(res.data);
    } catch (err) {
      console.error("Server error:", err);
      navigate("/404", { replace: true });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [slugAndId]);

  const getInstallationPrice = () => {
    if (product.product.btu < 14000) {
      return 180;
    } else if (product.product.btu >= 14000 && product.product.btu < 18000) {
      return 205;
    } else if (product.product.btu >= 18000 && product.product.btu < 24000) {
      return 230;
    } else if (product.product.btu >= 24000 && product.product.btu < 30000) {
      return 255;
    } else {
      return 280;
    }
  };

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

  const productImgs = product?.productImgs.map(
    (img) =>
      `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${img.public_id}`,
  );

  const [accessories, setAccessories] = useState([]);
  const [accessoryImgs, setAccessoryImgs] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      const res = await API.get("/api/accessories");
      setAccessories(res.data.accessories);
      setAccessoryImgs(res.data.accessoryImgs);
    };
    fetchAccessories();
  }, []);

  const getMainAccessoryImg = (productId) =>
    accessoryImgs.find((img) => img.product_id === productId && img.is_main);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  const mainImg = product.productImgs?.find(
    (img) => img.product_id === product.product.product_id && img.is_main,
  );

  const currentProductId = product?.product?.product_id;

  const filteredAccessories = (accessories ?? [])
    .filter((a) => a?.product_id !== currentProductId)
    .filter(
      (a, idx, arr) =>
        idx === arr.findIndex((x) => x.product_id === a.product_id),
    );

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
              {product.product.product_name.toUpperCase()}
            </span>
          </div>
        </nav>

        {/* Main Product Section */}
        <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-12 mb-8 lg:mb-16">
          {/* Product Images with Swiper */}
          <div className="w-full lg:w-[55%] flex flex-col space-y-3 lg:space-y-4">
            {/* Main Swiper */}
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden bg-white shadow-md border border-gray-200 aspect-square lg:aspect-auto lg:h-auto">
              {product.product.discount != null &&
                Number(product.product.discount) > 0 && (
                  <div className="absolute z-10 top-2 right-2 bg-green-200 text-green-900 px-2 rounded-md">
                    -{product.product.discount}% намаление
                  </div>
                )}
              {product.productImgs.length > 1 ? (
                <Swiper
                  className="product-swiper w-full max-h-[600px]"
                  spaceBetween={10}
                  loop={true}
                  navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                  }}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {productImgs.map((img, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex justify-center items-center p-4"
                    >
                      <img
                        src={img}
                        alt={`Product view ${index + 1}`}
                        className="w-full max-h-[550px] object-contain"
                      />
                    </SwiperSlide>
                  ))}
                  {/* Custom Navigation Buttons */}
                  <button className="custom-prev cursor-pointer absolute left-2 top-1/2 -trangray-y-1/2 z-10 text-[#002B5B] p-4 rounded-full hover:scale-125 transition-all">
                    <MdOutlineArrowBackIos size={24} />
                  </button>
                  <button className="custom-next cursor-pointer absolute right-2 top-1/2 -trangray-y-1/2 z-10 text-[#002B5B] p-4 rounded-full hover:scale-125 transition-all">
                    <MdOutlineArrowForwardIos size={24} />
                  </button>
                </Swiper>
              ) : (
                <img
                  alt="Product front image"
                  src={
                    mainImg
                      ? `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${mainImg.public_id}`
                      : ImageNotFound
                  }
                  className="w-full max-h-[600px] object-contain p-4"
                />
              )}
            </div>

            {/* Thumbnail Swiper */}
            {product.productImgs.length > 1 && (
              <div className="px-2">
                <Swiper
                  className="thumbs-swiper"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  breakpoints={{
                    640: {
                      slidesPerView: 5,
                    },
                    768: {
                      slidesPerView: 6,
                    },
                    1024: {
                      slidesPerView: 8,
                    },
                  }}
                >
                  {productImgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-16 lg:h-20">
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-[45%] space-y-4 lg:space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#002B5B] mb-2">
                {product.product.product_name}
              </h1>
              {product.product.category_value !== "aksesoari_za_montazh" && (
                <p className="text-base lg:text-lg text-gray-600 mb-4">
                  {product.product.btu} BTU, Клас{" "}
                  {product.product.cooling_energy_class}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <FaCheckCircle className="w-4 h-4" />В наличност
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002B5B]">
                    {productOptions.installation
                      ? (
                          (product.product.discount != null &&
                          Number(product.product.discount) > 0
                            ? Number(product.product.price) *
                              (1 - Number(product.product.discount) / 100)
                            : Number(product.product.price)) +
                          getInstallationPrice()
                        ).toFixed(2)
                      : product.product.discount != null &&
                          Number(product.product.discount) > 0
                        ? (
                            Number(product.product.price) *
                            (1 - Number(product.product.discount) / 100)
                          ).toFixed(2)
                        : Number(product.product.price).toFixed(2)}{" "}
                    €
                  </span>
                  <span
                    className={`text-lg sm:text-xl text-gray-500 ${
                      product.product.discount != null &&
                      Number(product.product.discount) > 0
                        ? "line-through"
                        : "hidden"
                    }`}
                  >
                    {productOptions.installation
                      ? Number(product.product.price) + getInstallationPrice()
                      : product.product.price}{" "}
                    €
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3 text-sm text-gray-600 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span>Арт. номер:</span>
                    <span className="font-semibold text-[#002B5B]">
                      {product.product.product_code}
                    </span>
                  </div>
                  {product.product.make && (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                      <span>Производител:</span>
                      <span className="font-semibold text-[#002B5B]">
                        {product.product.make}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="w-4 h-4 text-[#002B5B]" />
                    <span className="text-[#002B5B] font-medium">
                      60 месеца гаранция
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {product.product.category_value !==
                    "aksesoari_za_montazh" && (
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#002B5B] transition-colors cursor-pointer">
                      <div className="group grid size-4 grid-cols-1 flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={productOptions.installation}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setProductOptions((prev) => ({
                              ...prev,
                              installation: checked,
                            }));
                          }}
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
                      <FaTools className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="font-medium text-[#002B5B] flex-1">
                        С монтаж (3 л.м. тръбен път)
                      </span>
                      <span className="text-[#002B5B] font-semibold">
                        +{getInstallationPrice()}€.
                      </span>
                    </label>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        addToCart(product.product, mainImg, {
                          installation: productOptions.installation,
                        })
                      }
                      className="flex justify-center items-center gap-x-2 flex-1 bg-[#002B5B] hover:bg-blue-900 text-white py-2 sm:py-3 px-4 rounded-lg font-medium shadow-md cursor-pointer transition-colors text-sm sm:text-base"
                    >
                      <IoBagAddOutline className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">
                        Добави в количката
                      </span>
                      <span className="sm:hidden">Добави</span>
                    </button>
                    <button className="p-2 sm:p-4 border border-gray-300 rounded-xl hover:border-gray-400 shadow-md transition-colors cursor-pointer">
                      <IoShareSocialOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {" "}
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md border border-gray-200 text-center">
                <FaTruck className="w-6 h-6 sm:w-8 sm:h-8 text-[#002B5B] mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-gray-900">
                  Безплатна доставка
                </div>
                <div className="text-xs text-gray-600">за София</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md border border-gray-200 text-center">
                <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8 text-[#002B5B] mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-gray-900">
                  Гаранция
                </div>
                <div className="text-xs text-gray-600">60 месеца</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md border border-gray-200 text-center">
                <FaTools className="w-6 h-6 sm:w-8 sm:h-8 text-[#002B5B] mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-gray-900">
                  Монтаж
                </div>
                <div className="text-xs text-gray-600">от специалисти</div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessories */}
        <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md border border-gray-200 mb-8 lg:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
            Допълнителни аксесоари
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredAccessories.map((accessory) => {
              const mainAccessoryImg = getMainAccessoryImg(
                accessory.product_id,
              );
              const imgSrc = mainAccessoryImg?.public_id
                ? `https://res.cloudinary.com/dh1arjjjy/image/upload/v1768349183/${mainAccessoryImg.public_id}`
                : ImageNotFound;

              const discountedPrice =
                accessory.discount != null && Number(accessory.discount) > 0
                  ? (
                      Number(accessory.price) *
                      (1 - Number(accessory.discount) / 100)
                    ).toFixed(2)
                  : null;

              return (
                <article
                  key={accessory.product_id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-trangray-y-1 hover:shadow-xl hover:shadow-gray-200/80"
                >
                  {/* Image area */}
                  <Link
                    to={`/air-conditioning/${accessory.slug}-${accessory.product_id}`}
                    className="relative block overflow-hidden  h-30 md:h-50"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      alt={accessory.product_name}
                      src={imgSrc}
                      className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                    />

                    {/* Discount badge */}
                    {accessory.discount != null &&
                      Number(accessory.discount) > 0 && (
                        <div className="absolute right-3 top-3 z-20 rounded-xl bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                          −{accessory.discount}%
                        </div>
                      )}

                    {/* Hover shimmer */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>

                  {/* Accent line */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#002B5B]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <Link
                      to={`/air-conditioning/${accessory.slug}-${accessory.product_id}`}
                      className="block"
                    >
                      <h3 className="line-clamp-2 text-sm font-medium leading-snug text-gray-700 transition-colors group-hover:text-[#002B5B]">
                        {accessory.product_name}
                      </h3>
                    </Link>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold tracking-tight text-[#002B5B]">
                        {discountedPrice ?? Number(accessory.price).toFixed(2)}€
                      </span>
                      {accessory.discount != null &&
                        Number(accessory.discount) > 0 && (
                          <span className="text-xs font-medium text-gray-400 line-through">
                            {Number(accessory.price).toFixed(2)}€
                          </span>
                        )}
                    </div>

                    {/* Add to cart */}
                    <button
                      type="button"
                      onClick={() =>
                        addToCart(accessory, mainAccessoryImg, {
                          installation: false,
                        })
                      }
                      className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#002B5B] bg-[#002B5B] py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#003a7a] active:scale-[0.97]"
                    >
                      <IoBagAddOutline className="h-4 w-4" />
                      <span className="block md:hidden">Добави</span>
                      <span className="hidden md:block">
                        Добави в количката
                      </span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Product Description */}
        {product.product.description !== null && (
          <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md border border-gray-200 mb-8 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Описание на продукта
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
              {product.product.description}
            </p>
          </div>
        )}

        {/* Specifications */}
        {product.product.category_value !== "aksesoari_za_montazh" && (
          <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md border border-gray-200 mb-8 lg:mb-16">
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
        )}
      </div>
    </div>
  );
};

export default AirConProductPage;
