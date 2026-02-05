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

  const gridParam = Number(searchParams.get("grid")) || 4;

  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  const effectiveGrid = isMobile ? Math.min(gridParam, 2) : gridParam;

  const gridClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <>
      <AirConHeader />
      <div className="w-full flex flex-col gap-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
        <AirConSort />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <AirConFilters />
          <div className="lg:col-span-3">
            <div
              className={`bg-white grid gap-x-6 xl:gap-x-8 gap-y-10 ${gridClasses[effectiveGrid]}`}
            >
              <AirConProducts products={products} productImgs={productImgs} />
            </div>
            <AirConPagination total={total} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AirConStorePage;
