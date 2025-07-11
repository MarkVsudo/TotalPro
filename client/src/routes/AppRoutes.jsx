// router.jsx
import { createBrowserRouter } from "react-router-dom";
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
import AirConProductPage from "../pages/AirConPages/AirConProductPage";
import AnimatedPage from "../pages/AnimatedPage";

const withAnimation = (component) => <AnimatedPage>{component}</AnimatedPage>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: withAnimation(<HomePage />) }],
  },
  {
    path: "/air-conditioning",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: withAnimation(<AirConStorePage />) },
      { path: "services", element: withAnimation(<AirConServicesPage />) },
      { path: ":id", element: withAnimation(<AirConProductPage />) },
    ],
  },
  {
    path: "/electric-installations",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: withAnimation(<ElectricInstallationsPage />) },
    ],
  },
  {
    path: "/moving-services",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: withAnimation(<MovingServicesPage />) }],
  },
  {
    path: "/drywall",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: withAnimation(<DrywallPage />) }],
  },
  {
    path: "/security-alarm-equipment",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: withAnimation(<SecurityAlarmEquipmentPage />) },
    ],
  },
  {
    path: "/plumbing-services",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: withAnimation(<PlumbingServicesPage />) },
    ],
  },
  {
    path: "/tiling-services",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: withAnimation(<TilingServicesPage />) }],
  },
  {
    path: "/furniture",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: withAnimation(<FurnitureInstallationPage />) },
    ],
  },
  {
    path: "*",
    element: withAnimation(<NotFoundPage />),
  },
]);

export default router;
