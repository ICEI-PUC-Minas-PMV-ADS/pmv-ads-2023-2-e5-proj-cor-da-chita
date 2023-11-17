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
  copyCartItems: Produto[];
  setCopyCartItems: Dispatch<SetStateAction<any>>;
};

const initialValue = {
  cartItems: [],
  setCartItems: () => {},
  sumCartItems: 0,
  setSumCartItems: () => {},
  copyCartItems: [],
  setCopyCartItems: () => {},
};

export const CartItemsContext =
  createContext<CartItemsContextType>(initialValue);

export default function CartIdContextProvider({
  children,
}: CartItemsContextProps) {
  const [cartItems, setCartItems] = useState(initialValue.cartItems);
  const [sumCartItems, setSumCartItems] = useState(initialValue.sumCartItems);
  const [copyCartItems, setCopyCartItems] = useState(
    initialValue.copyCartItems
  );

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        sumCartItems,
        setSumCartItems,
        copyCartItems,
        setCopyCartItems,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
