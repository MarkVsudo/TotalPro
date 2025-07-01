import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import DrywallPage from "../pages/DrywallPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesLayout from "../layout/ServicesLayout";
import { CartProvider } from "../context/CartContext";
import MovingServicesPage from "../pages/MovingServicesPage";
import TilingServicesPage from "../pages/TilingServicesPage";
import AirConInfoPage from "../pages/AirConPages/AirConInfoPage";
import PlumbingServicesPage from "../pages/PlumbingServicesPage";
import AirConStorePage from "../pages/AirConPages/AirConStorePage";
import ElectricInstallationsPage from "../pages/ElectricInstallationsPage";
import FurnitureInstallationPage from "../pages/FurnitureInstallationPage";
import SecurityAlarmEquipmentPage from "../pages/SecurityAlarmEquipmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <HomePage />
      </CartProvider>
    ),
  },
  {
    path: "/air-conditioning",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [
      { path: "store", element: <AirConStorePage /> },
      { path: "info", element: <AirConInfoPage /> },
    ],
  },
  {
    path: "/electric-installations",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <ElectricInstallationsPage /> }],
  },
  {
    path: "/moving-services",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <MovingServicesPage /> }],
  },
  {
    path: "/drywall",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <DrywallPage /> }],
  },
  {
    path: "/security-alarm-equipment",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <SecurityAlarmEquipmentPage /> }],
  },
  {
    path: "/plumbing-services",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <PlumbingServicesPage /> }],
  },
  {
    path: "/tiling-services",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <TilingServicesPage /> }],
  },
  {
    path: "/furniture",
    element: (
      <CartProvider>
        <ServicesLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <FurnitureInstallationPage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
