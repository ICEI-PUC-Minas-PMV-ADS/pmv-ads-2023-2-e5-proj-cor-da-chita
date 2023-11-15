// Salva o valor do frete para ser usado no Resumo do Pedido
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type FreteContextProps = {
  children: ReactNode;
};

type FreteContextType = {
  freteInContext: any;
  setFreteInContext: Dispatch<SetStateAction<any>>;
  isPac: string;
  setIsPac: Dispatch<SetStateAction<string>>;
  isCombinarFrete: boolean;
  setIsCombinarFrete: Dispatch<SetStateAction<boolean>>;
};

const initialValue = {
  freteInContext: "",
  setFreteInContext: () => {},
  isPac: "PAC",
  setIsPac: () => {},
  isCombinarFrete: false,
  setIsCombinarFrete: () => {},
};

export const FreteContext = createContext<FreteContextType>(initialValue);

export default function FreteContextProvider({ children }: FreteContextProps) {
  const [freteInContext, setFreteInContext] = useState(
    initialValue.freteInContext
  );
  const [isPac, setIsPac] = useState(initialValue.isPac);
  const [isCombinarFrete, setIsCombinarFrete] = useState(
    initialValue.isCombinarFrete
  );

  return (
    <FreteContext.Provider
      value={{
        freteInContext,
        setFreteInContext,
        isPac,
        setIsPac,
        isCombinarFrete,
        setIsCombinarFrete,
      }}
    >
      {children}
    </FreteContext.Provider>
  );
}
