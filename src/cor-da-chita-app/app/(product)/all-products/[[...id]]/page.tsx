// Tela pós landing page que mostra todos os produtos, os produtos baseado nos filtros do Menu ou na barra de busca
"use client";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import { Produto } from "@/lib/interface";
import { SearchContext } from "@/contexts/ProductContext/SearchContext";
import ProductCard from "@/components/ProductCard";
import getProductCardData from "../../../../database/products/getProductData";
import getProductDataByCategory from "@/database/products/getProductDataByCategory";
import getProductDataSearch from "@/database/products/getProductDataSearch";

async function getData(
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>,
  categoryNameOrSearch: string,
  search: string
) {
  // categoryNameOrSearch é vazia quando está em "Todos os Produtos"
  if (categoryNameOrSearch.includes("search")) {
    // Consulta feita via SeachInput
    const data = (await getProductDataSearch(search)) as Produto[];
    //console.log(data);

    setProductData(data);
  } else if (categoryNameOrSearch != "") {
    // Consulta via click no Menu de Categoria
    const data = (await getProductDataByCategory(
      categoryNameOrSearch
    )) as Produto[];
    // console.log(data);

    setProductData(data);
  } else {
    // Todos os produtos
    const data = (await getProductCardData()) as Produto[];
    //console.log(data);

    setProductData(data);
  }
}

export default function AllProducts() {
  const pathname = usePathname();
  const [productData, setProductData] = useState<Produto[] | undefined>([]);
  const { search } = useContext(SearchContext);

  // Vem o nome da categoria via click no Menu ou o nome "search", quando o user busca via SearchInput
  const categoryNameOrSearch = pathname.slice(14);

  useEffect(() => {
    getData(setProductData, categoryNameOrSearch, search);
  }, [search]);

  return (
    <section>
      <ProductCard data={productData} />
    </section>
  );
}
