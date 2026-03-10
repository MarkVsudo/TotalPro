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
import FurnitureServicesPage from "../pages/FurnitureServicesPage";
import SecurityAlarmEquipmentPage from "../pages/SecurityAlarmEquipmentPage";
import AirConProductPage from "../pages/AirConPages/AirConProductPage";
import AnimatedPage from "../pages/AnimatedPage";
import AutoScrollToTop from "../components/shared/AutoScrollToTop";
import ViberButton from "../components/shared/ViberButton";
import LoginPage from "../pages/AuthPages/LoginPage";
import DashboardLayout from "../layout/DashboardLayout";
import AnalyticsPage from "../pages/DashboardPages/AnalyticsPage";
import OrdersPage from "../pages/DashboardPages/OrdersPage";
import MainBoardPage from "../pages/DashboardPages/MainBoardPage";
import CheckoutPage from "../pages/CheckoutPage";
import AdminRoute from "./AdminRoute";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import CheckoutCancelPage from "../pages/CheckoutCancelPage";
import TermsPage from "../pages/LegalPages/TermsPage";
import CookiesPage from "../pages/LegalPages/CookiesPage";
import PrivacyPage from "../pages/LegalPages/PrivacyPage";
import AddProductForm from "../components/DashboardPageComponents/AddProductForm";

const withAnimation = (component) => (
  <>
    <AutoScrollToTop />
    <ViberButton />
    <AnimatedPage>{component}</AnimatedPage>
  </>
);

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
      { path: ":slugAndId", element: withAnimation(<AirConProductPage />) },
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
      { index: true, element: withAnimation(<FurnitureServicesPage />) },
    ],
  },
  {
    path: "/checkout",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [
      { index: true, element: withAnimation(<CheckoutPage />) },
      { path: "success", element: withAnimation(<CheckoutSuccessPage />) },
      { path: "cancel", element: withAnimation(<CheckoutCancelPage />) },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: withAnimation(<MainBoardPage />) },
          { path: "analytics", element: withAnimation(<AnalyticsPage />) },
          {
            path: "products",
            element: withAnimation(<AddProductForm />),
          },
          { path: "orders", element: withAnimation(<OrdersPage />) },
        ],
      },
    ],
  },

  {
    path: "/terms",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: withAnimation(<TermsPage />) }],
  },
  {
    path: "/privacy",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: withAnimation(<PrivacyPage />) }],
  },
  {
    path: "/cookies",
    element: (
      <CartProvider>
        <MainLayout />
      </CartProvider>
    ),
    children: [{ index: true, element: withAnimation(<CookiesPage />) }],
  },

  {
    path: "/login",
    element: withAnimation(<LoginPage />),
  },
  {
    path: "/404",
    element: withAnimation(<NotFoundPage />),
  },
  {
    path: "*",
    element: withAnimation(<NotFoundPage />),
  },
]);

export default router;
