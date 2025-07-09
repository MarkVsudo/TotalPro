import AirConHeader from "../../components/AirConPageComponents/AirConHeader";
import AirConInstallation from "../../components/AirConPageComponents/AirConInstallation";
import AirConMaintenance from "../../components/AirConPageComponents/AirConMaintenance";
import AirConExtraServices from "../../components/AirConPageComponents/AirConExtraServices";

const AirConServicesPage = () => {
  return (
    <>
      <AirConHeader />
      <AirConMaintenance />
      <AirConInstallation />
      <AirConExtraServices />
    </>
  );
};

export default AirConServicesPage;
