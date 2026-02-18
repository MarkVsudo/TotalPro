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

const getInstallationPrice = (product) => {
  const btu = Number(product.btu);

  if (btu < 14000) return 180;
  if (btu < 18000) return 205;
  if (btu < 24000) return 230;
  if (btu < 30000) return 255;
  return 280;
};

const calcUnitPrice = (product, options) => {
  const base = Number(product.price);
  const discount = Number(product.discount ?? 0);

  const discounted = discount ? base * (1 - discount / 100) : base;

  const installationPrice = options?.installation
    ? getInstallationPrice(product)
    : 0;

  return discounted + installationPrice;
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

    return parsed.map((item) => {
      const normalizedOptions = {
        installation: Boolean(item.options?.installation),
      };

      return {
        ...item,
        options: normalizedOptions,
        unitPrice:
          typeof item.unitPrice === "number"
            ? item.unitPrice
            : calcUnitPrice(item.product, normalizedOptions),
      };
    });
  });

  const addToCart = (product, mainImg, options = { installation: false }) => {
    const normalizedOptions = {
      installation: Boolean(options.installation),
    };

    const unitPrice = calcUnitPrice(product, normalizedOptions);

    dispatch({
      type: "ADD_ITEM",
      payload: { product, options: normalizedOptions, mainImg, unitPrice },
    });

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
        getInstallationPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
