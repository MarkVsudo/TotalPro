import AirConFilters from "../../components/AirConPageComponents/AirConFilters";
import AirConHeader from "../../components/AirConPageComponents/AirConHeader";
import AirConProducts from "../../components/AirConPageComponents/AirConProducts";

const AirConStorePage = () => {
  return (
    <>
      <AirConHeader />
      <div className="w-full flex gap-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
        <AirConFilters />
      </div>
    </>
  );
};

export default AirConStorePage;
