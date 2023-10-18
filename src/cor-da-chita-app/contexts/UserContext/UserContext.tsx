import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  cart: string[];
  setCart: Dispatch<SetStateAction<any>>;
};

const initialValue = {
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  phone: "",
  setPhone: () => {},
  cart: [],
  setCart: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export default function UserContextProvider({ children }: UserContextProps) {
  const [name, setName] = useState(initialValue.name);
  const [email, setEmail] = useState(initialValue.email);
  const [phone, setPhone] = useState(initialValue.phone);
  const [cart,setCart] = useState(initialValue.cart)
  return (
    <UserContext.Provider
      value={{ name, email, phone, setName, setEmail, setPhone,cart,setCart }}
    >
      {children}
    </UserContext.Provider>
  );
}
