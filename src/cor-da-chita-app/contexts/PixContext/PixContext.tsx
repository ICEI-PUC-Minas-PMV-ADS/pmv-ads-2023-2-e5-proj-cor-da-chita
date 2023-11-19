import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type PixContextProps = {
  children: ReactNode;
};

type PixContextType = {
  pixId: number;
  setPixId: Dispatch<SetStateAction<number>>;

};

const initialValue = {
  pixId: 0,
  setPixId: () => {},

};

export const PixContext = createContext<PixContextType>(initialValue);

export default function PixContextProvider({ children }: PixContextProps) {
  const [pixId,setPixId] = useState(initialValue.pixId);


  return (
    <PixContext.Provider value={{pixId,setPixId}}>
      {children}
    </PixContext.Provider>
  );
}
