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
        base: "max-w-full sm:max-w-[14rem] h-10",
        mainWrapper: "h-full",
        input: "text-small text-light",
        inputWrapper:
          "h-full",
      }}
      placeholder="Busca"
      size="sm"
      variant="underlined"
      startContent={<SearchIcon size={18} />}
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
