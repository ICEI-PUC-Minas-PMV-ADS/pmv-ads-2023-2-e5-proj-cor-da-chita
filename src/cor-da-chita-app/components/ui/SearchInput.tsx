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
      variant="bordered"
      labelPlacement="outside"
      label="Busca"
      classNames={{
        input: [
          "bg-light",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-light",
          "hover:bg-default-200/70",
          "hover:scale-105",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      endContent={
        <Link  onPress={handleClickSearch} color="foreground" isBlock className="cursor-pointer">
          <SearchIcon size={14} />
        </Link> 
      }
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
}
