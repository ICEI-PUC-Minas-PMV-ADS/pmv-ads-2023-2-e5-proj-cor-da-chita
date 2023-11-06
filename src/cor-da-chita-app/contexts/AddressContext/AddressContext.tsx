import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type AddressContextProps = {
  children: ReactNode;
};

type AddressContextType = {
  street: string;
  setStreet: Dispatch<SetStateAction<string>>;
  neighborhood: string;
  setNeighborhood: Dispatch<SetStateAction<string>>;
  num: string;
  setNum: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  uf: string;
  setUf: Dispatch<SetStateAction<string>>;
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  complement: string;
  setComplement: Dispatch<SetStateAction<string>>;
};

const initialValue = {
  street: "",
  setStreet: () => {},
  neighborhood: "",
  setNeighborhood: () => {},
  num: "",
  setNum: () => {},
  city: "",
  setCity: () => {},
  uf: "",
  setUf: () => {},
  cep: "",
  setCep: () => {},
  complement: "",
  setComplement: () => {},
};

export const AddressContext = createContext<AddressContextType>(initialValue);

export default function AddressContextProvider({
  children,
}: AddressContextProps) {
  const [street, setStreet] = useState(initialValue.street);
  const [neighborhood, setNeighborhood] = useState(initialValue.neighborhood);
  const [num, setNum] = useState(initialValue.num);
  const [city, setCity] = useState(initialValue.city);
  const [uf, setUf] = useState(initialValue.uf);
  const [cep, setCep] = useState(initialValue.cep);
  const [complement, setComplement] = useState(initialValue.complement);

  return (
    <AddressContext.Provider
      value={{
        street,
        setStreet,
        neighborhood,
        setNeighborhood,
        num,
        setNum,
        city,
        setCity,
        uf,
        setUf,
        cep,
        setCep,
        complement,
        setComplement,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
