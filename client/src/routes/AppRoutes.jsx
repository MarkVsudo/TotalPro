import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { CartProvider } from "../context/CartContext";
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
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
