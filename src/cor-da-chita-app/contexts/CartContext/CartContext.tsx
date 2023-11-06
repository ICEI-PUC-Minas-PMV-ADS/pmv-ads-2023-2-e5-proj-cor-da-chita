import { Produto } from "@/lib/interface";
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
};

const initialValue = {
  cart: [],
  setCart: () => {},
};

export const CartContext = createContext<CartContextType>(initialValue);

export default function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState(initialValue.cart);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
