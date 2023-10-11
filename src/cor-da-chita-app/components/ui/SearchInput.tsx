import React, { useContext, useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import getProductDataSearch from "@/database/products/getProductDataSearch";
import { Produto } from "@/lib/interface";
import { useRouter } from "next/navigation";
import { SearchContext } from "@/contexts/ProductContext/SearchContext";

// async function getData(search: string | undefined) {
//   const data = (await getProductDataSearch(search)) as Produto[];
//   console.log(data);
// }

export default function SearchInput({ children, ...props }: any) {
  const [productName, setProductName] = useState<string>("");
  const { setSearch } = useContext(SearchContext);
  const route = useRouter();

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      //console.log(search);
      if (productName !== "") {
        console.log(productName);
        //getData(search);
        setSearch(productName);
        route.push(`/all-products/search?product=${productName}`);
      }
    }
  }

  return (
    <Input
      classNames={{
        base: "max-w-full sm:max-w-[10rem] h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Busca"
      size="sm"
      startContent={<SearchIcon size={18} />}
      type="search"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
}