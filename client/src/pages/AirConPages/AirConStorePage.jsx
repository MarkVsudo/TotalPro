import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import AirConFilters from "../../components/AirConPageComponents/AirConFilters";
import AirConHeader from "../../components/AirConPageComponents/AirConHeader";
import AirConPagination from "../../components/AirConPageComponents/AirConPagination";
import AirConProducts from "../../components/AirConPageComponents/AirConProducts";
import AirConSort from "../../components/AirConPageComponents/AirConSort";
import API from "../../api/api";

const AirConStorePage = () => {
  const [products, setProducts] = useState([]);
  const [productImgs, setProductImgs] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sort = searchParams.get("sort") || "most_popular";
        const category = searchParams.get("category");
        const overallClass = searchParams.get("overallClass");
        const brand = searchParams.get("brand");
        const btu = searchParams.get("btu");
        const roomVolume = searchParams.get("roomVolume");
        const color = searchParams.get("color");
        const coolingEnergyClass = searchParams.get("coolingEnergyClass");
        const heatingEnergyClass = searchParams.get("heatingEnergyClass");
        const priceMin = searchParams.get("priceMin");
        const priceMax = searchParams.get("priceMax");
        const search = searchParams.get("search");

        const page = Number(searchParams.get("page")) || 1;

        const res = await API.get("/api/products", {
          params: {
            page,
            limit: 12,
            sort,
            category,
            overallClass,
            brand,
            btu,
            roomVolume,
            color,
            coolingEnergyClass,
            heatingEnergyClass,
            priceMin,
            priceMax,
            search,
          },
        });
        setProducts(res.data.products);
        setTotal(res.data.total);
        setProductImgs(res.data.productImgs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [searchParams]);

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const gridParam = Number(searchParams.get("grid")) || (isMobile ? 2 : 4);

  const effectiveGrid = isMobile ? (gridParam === 1 ? 1 : 2) : gridParam;

  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className="min-h-screen">
      <AirConHeader />
      <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12 pb-24 lg:pb-6">
        <AirConSort />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters sidebar - hidden on mobile */}
          <div className="hidden lg:block">
            <AirConFilters />
          </div>

          {/* Products section */}
          <div className="lg:col-span-3">
            <div
              className={
                products.length === 0
                  ? "bg-white flex items-center justify-center min-h-[400px]"
                  : `bg-white grid gap-x-4 sm:gap-x-6 xl:gap-x-8 gap-y-8 sm:gap-y-10 ${gridClasses[effectiveGrid]}`
              }
            >
              <AirConProducts products={products} productImgs={productImgs} />
            </div>

            <AirConPagination total={total} />
          </div>
        </div>
      </div>

      {/* Mobile filters component with fixed button - only visible on mobile */}
      <div className="lg:hidden">
        <AirConFilters />
      </div>
    </div>
  );
};

export default AirConStorePage;
