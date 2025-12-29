import AirConFilters from "../../components/AirConPageComponents/AirConFilters";
import AirConHeader from "../../components/AirConPageComponents/AirConHeader";
import AirConPagination from "../../components/AirConPageComponents/AirConPagination";
import AirConProducts from "../../components/AirConPageComponents/AirConProducts";
import AirConSort from "../../components/AirConPageComponents/AirConSort";
const AirConStorePage = () => {
  return (
    <>
      <AirConHeader />
      <div className="w-full flex flex-col gap-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
        <AirConSort />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <AirConFilters />
          <div className="lg:col-span-3">
            <AirConProducts />
            <AirConPagination />
          </div>
        </div>
      </div>
    </>
  );
};

<div>
  <div className="1" />
  <div className="2" />
</div>;

export default AirConStorePage;
