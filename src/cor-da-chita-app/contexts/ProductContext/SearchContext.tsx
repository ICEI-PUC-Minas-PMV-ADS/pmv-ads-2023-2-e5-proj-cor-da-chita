// Usado para salvar no contexto a busca no SearchInput
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type SearchContextProps = {
  children: ReactNode;
};

type SearchContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const initialValue = {
  search: "",
  setSearch: () => {},
};

export const SearchContext = createContext<SearchContextType>(initialValue);

export default function SearchContextProvider({
  children,
}: SearchContextProps) {
  const [search, setSearch] = useState(initialValue.search);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
