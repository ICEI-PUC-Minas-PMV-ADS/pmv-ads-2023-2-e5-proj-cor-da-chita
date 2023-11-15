import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type CartContextProps = {
  children: ReactNode;
};

type CartContextType = {
  cart: string[];
  setCart: Dispatch<SetStateAction<any>>;
  cartFlow: string;
  setCartFlow: Dispatch<SetStateAction<string>>;
};

const initialValue = {
  cart: [],
  setCart: () => {},
  cartFlow: "",
  setCartFlow: () => {},
};

export const CartContext = createContext<CartContextType>(initialValue);

export default function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState(initialValue.cart);
  const [cartFlow, setCartFlow] = useState(initialValue.cartFlow);

  return (
    <CartContext.Provider value={{ cart, setCart, cartFlow, setCartFlow }}>
      {children}
    </CartContext.Provider>
  );
}
