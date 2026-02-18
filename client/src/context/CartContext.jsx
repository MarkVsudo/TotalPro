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
        (item) =>
          item.product.product_id === action.payload.product.product_id &&
          JSON.stringify(item.options) ===
            JSON.stringify(action.payload.options),
      );

      if (existing) {
        return state.map((item) =>
          item.product.product_id === action.payload.product.product_id &&
          JSON.stringify(item.options) ===
            JSON.stringify(action.payload.options)
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM":
      return state.filter(
        (item) =>
          !(
            item.product.product_id === action.payload.id &&
            JSON.stringify(item.options) ===
              JSON.stringify(action.payload.options)
          ),
      );

    case "INCREASE_ITEM_QTY":
      return state.map((item) =>
        item.product.product_id === action.payload.id &&
        JSON.stringify(item.options) === JSON.stringify(action.payload.options)
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "DECREASE_ITEM_QTY":
      return state
        .map((item) =>
          item.product.product_id === action.payload.id &&
          JSON.stringify(item.options) ===
            JSON.stringify(action.payload.options)
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);

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
    const parsed = storedCart ? JSON.parse(storedCart) : [];
    return parsed.map((item) => ({
      ...item,
      options: item.options ?? { installation: false },
    }));
  });

  const addToCart = (product, options, mainImg) => {
    dispatch({ type: "ADD_ITEM", payload: { product, options, mainImg } });
    openCart();
  };

  const removeFromCart = (id, options) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id, options } });
  };

  const increaseItemQty = (id, options) => {
    dispatch({ type: "INCREASE_ITEM_QTY", payload: { id, options } });
  };

  const decreaseItemQty = (id, options) => {
    dispatch({ type: "DECREASE_ITEM_QTY", payload: { id, options } });
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
        increaseItemQty,
        decreaseItemQty,
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
