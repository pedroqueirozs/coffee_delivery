import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { FormData as CustomFormData } from "../pages/cart";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imgUrl: string;
}

interface CartContextData {
  cartItems: CartItem[];
  formData: CustomFormData | null;
  addToCart: (item: CartItem, quantity: number) => void;
  removeToCart: (itemId: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  receiveFormData: (dados: CustomFormData) => void;
  updatePaymentMethod: (payment: string) => void;
  paymentMethod: string;
  resetToCart: () => void;
}

function getCartFromLocalStorage(): CartItem[] {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCartToLocalStorage(cartItems: CartItem[]): void {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

export const CartContext = createContext<CartContextData | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    getCartFromLocalStorage()
  );
  const [formData, setFormData] = useState<CustomFormData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  const resetToCart = () => {
    setCartItems([]);
  };

  const removeToCart = (itemId: number) => {
    setCartItems((state) => state.filter((cartItem) => cartItem.id !== itemId));
  };

  const addToCart = (item: CartItem, quantity: number) => {
    setCartItems((state) => {
      const existingCartItem = state.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        return state.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...state, { ...item, quantity }];
      }
    });
  };

  const receiveFormData = (dados: CustomFormData) => {
    setFormData(dados);
    console.log(formData);
  };

  const updatePaymentMethod = (payment: string) => {
    setPaymentMethod(payment);
  };

  const incrementItem = (id: number) => {
    setCartItems((state) =>
      state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (id: number) => {
    setCartItems((state) =>
      state.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        removeToCart,
        updatePaymentMethod,
        paymentMethod,
        decrementItem,
        incrementItem,
        addToCart,
        receiveFormData,
        formData,
        resetToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
