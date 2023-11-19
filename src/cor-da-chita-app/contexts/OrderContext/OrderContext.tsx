import { Order } from "@/lib/interface-order";

import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type OrderContextProps = {
  children: ReactNode;
};

type OrderContextType = {
  order: Array<string>;
  setOrder: Dispatch<SetStateAction<any>>;
};

const initialValue = {
  order: [],
  setOrder: () => {},
};

export const OrderContext = createContext<OrderContextType>(initialValue);

export default function OrderContextProvider({ children }: OrderContextProps) {
  const [order, setOrder] = useState(initialValue.order);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
