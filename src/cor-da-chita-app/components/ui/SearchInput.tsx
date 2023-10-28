// Em ANDAMENTO: Implementar botão na busca
// Pega o event da tecla
import React, { useContext, useState } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { useRouter } from "next/navigation";
import { SearchContext } from "@/contexts/ProductContext/SearchContext";

export default function SearchInput({ children, ...props }: any) {
  const [productName, setProductName] = useState<string>("");
  const { setSearch } = useContext(SearchContext);
  const route = useRouter();

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      if (productName !== "") {
        setSearch(productName); // Context
        route.push(`/all-products/search?product=${productName}`);
      }
    }
  }

  return (
    <Input
      classNames={{
        base: "max-w-full  h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper: "h-full",
      }}
      placeholder="Busca"
      size="sm"
      variant="underlined"
      startContent={<SearchIcon size={18} />}
      type="search"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
}
