import { Produto } from "@/lib/interface";
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type CartItemsContextProps = {
  children: ReactNode;
};

type CartItemsContextType = {
  cartItems: Produto[];
  setCartItems: Dispatch<SetStateAction<any>>;
  sumCartItems: number;
  setSumCartItems: Dispatch<SetStateAction<number>>;
};

const initialValue = {
  cartItems: [],
  setCartItems: () => {},
  sumCartItems: 0,
  setSumCartItems: () => {},
};

export const CartItemsContext =
  createContext<CartItemsContextType>(initialValue);

export default function CartIdContextProvider({
  children,
}: CartItemsContextProps) {
  const [cartItems, setCartItems] = useState(initialValue.cartItems);
  const [sumCartItems, setSumCartItems] = useState(initialValue.sumCartItems);

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        sumCartItems,
        setSumCartItems,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
