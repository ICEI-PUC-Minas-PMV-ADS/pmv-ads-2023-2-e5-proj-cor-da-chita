import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import getProductDataSearch from "@/database/products/getProductDataSearch";
import { Produto } from "@/lib/interface";
import { useRouter } from "next/navigation";

async function getData(search: string | undefined) {
  const data = (await getProductDataSearch(search)) as Produto[];
  console.log(data);
}

export default function SearchInput({ children, ...props }: any) {
  const [search, setSearch] = useState<string>("");
  const route = useRouter();

  // Em andamento
  useEffect(() => {
    console.log(search);
    if (search !== "") {
      console.log(search);
      getData(search);
      // route.push(`/all-products/search?product=${search}`);
    }
  }, [search]);

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
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
