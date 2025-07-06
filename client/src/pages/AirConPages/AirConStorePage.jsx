import AirConFilters from "../../components/AirConPageComponents/AirConFilters";
import AirConHeader from "../../components/AirConPageComponents/AirConHeader";
import AirConProducts from "../../components/AirConPageComponents/AirConProducts";

const AirConStorePage = () => {
  return (
    <>
      <AirConHeader />
      <div className="flex gap-10">
        <AirConFilters />
        <AirConProducts />
      </div>
    </>
  );
};

export default AirConStorePage;
