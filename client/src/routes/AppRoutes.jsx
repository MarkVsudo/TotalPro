import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import DrywallPage from "../pages/DrywallPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layout/MainLayout";
import { CartProvider } from "../context/CartContext";
import MovingServicesPage from "../pages/MovingServicesPage";
import TilingServicesPage from "../pages/TilingServicesPage";
import AirConServicesPage from "../pages/AirConPages/AirConServicesPage";
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
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/air-conditioning",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: <AirConStorePage /> },
      { path: "services", element: <AirConServicesPage /> },
    ],
  },
  {
    path: "/electric-installations",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <ElectricInstallationsPage /> }],
  },
  {
    path: "/moving-services",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <MovingServicesPage /> }],
  },
  {
    path: "/drywall",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <DrywallPage /> }],
  },
  {
    path: "/security-alarm-equipment",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <SecurityAlarmEquipmentPage /> }],
  },
  {
    path: "/plumbing-services",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <PlumbingServicesPage /> }],
  },
  {
    path: "/tiling-services",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: <TilingServicesPage /> }],
  },
  {
    path: "/furniture",
    element: (
      <CartProvider>
        <MainLayout />
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
