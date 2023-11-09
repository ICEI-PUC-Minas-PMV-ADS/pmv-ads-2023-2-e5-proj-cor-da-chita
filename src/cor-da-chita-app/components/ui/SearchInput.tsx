// Em ANDAMENTO: Implementar botão na busca
// Pega o event da tecla
import React, { useContext, useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
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

  function handleClickSearch(): void {
    if (productName !== "") {
      setSearch(productName); // Context
      route.push(`/all-products/search?product=${productName}`);
    }
  }

  return (
    <Input
      size="sm"
      label="Busca"
      labelPlacement="inside"
      endContent={
        <Link  onPress={handleClickSearch} color="foreground" isBlock>
          <SearchIcon size={18}/>
        </Link>
      }
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
}
