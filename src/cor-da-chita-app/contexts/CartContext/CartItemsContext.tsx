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
  cartItems: string[];
  setCartItems: Dispatch<SetStateAction<any>>;
};

const initialValue = {
  cartItems: [],
  setCartItems: () => {},
};

export const CartItemsContext =
  createContext<CartItemsContextType>(initialValue);

export default function CartIdContextProvider({
  children,
}: CartItemsContextProps) {
  const [cartItems, setCartItems] = useState(initialValue.cartItems);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
}
