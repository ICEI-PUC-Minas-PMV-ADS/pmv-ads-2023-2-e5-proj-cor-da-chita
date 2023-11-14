// Salva o cep caso o cliente calcule no carrinho, caso não calcule, salve o cep na tela de shipping data
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type CepContextProps = {
  children: ReactNode;
};

type CepContextType = {
  saveCepContext: string;
  setSaveCepContext: Dispatch<SetStateAction<string>>;
};

const initialValue = {
  saveCepContext: "",
  setSaveCepContext: () => {},
};

export const CepContext = createContext<CepContextType>(initialValue);

export default function CepContextProvider({ children }: CepContextProps) {
  const [saveCepContext, setSaveCepContext] = useState(
    initialValue.saveCepContext
  );

  return (
    <CepContext.Provider value={{ saveCepContext, setSaveCepContext }}>
      {children}
    </CepContext.Provider>
  );
}
