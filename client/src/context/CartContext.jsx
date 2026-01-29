import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.product.product_id === action.payload.product.product_id,
      );

      if (existing) {
        return state.map((item) =>
          item.product.product_id === action.payload.product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM":
      return state.filter((item) => item.product.product_id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const location = useLocation();

  useEffect(() => {
    closeCart();
  }, [location.pathname]);

  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product, mainImg) => {
    dispatch({ type: "ADD_ITEM", payload: { product, mainImg } });
    openCart();
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
