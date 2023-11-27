// Tela que renderiza os cards de produtos
"use client";

import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Produto } from "@/lib/interface";
import { SearchContext } from "@/contexts/ProductContext/SearchContext";
import ProductCard from "@/components/ProductCard";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import getProductCardData from "../../../../database/products/getProductData";
import getProductDataByCategory from "@/database/products/getProductDataByCategory";
import getProductDataSearch from "@/database/products/getProductDataSearch";

async function getData(
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>,
  setTotalProducts: Dispatch<SetStateAction<number>>,
  categoryNameOrSearch: string,
  search: string
) {
  // categoryNameOrSearch é vazia quando está em "Todos os Produtos"
  if (categoryNameOrSearch.includes("search")) {
    // Consulta feita via SeachInput
    const data = (await getProductDataSearch(search)) as Produto[];
    const totalProducts = data.length;
    console.log(data);
    setProductData(data);
    setTotalProducts(totalProducts);
  } else if (categoryNameOrSearch !== "") {
    // Consulta via click no Menu de Categoria
    const data = (await getProductDataByCategory(
      categoryNameOrSearch
    )) as Produto[];
    const totalProducts = data.length;
    setProductData(data);
    setTotalProducts(totalProducts);
  } else {
    // Todos os produtos
    const data = (await getProductCardData()) as Produto[];
    const totalProducts = data.length;
    console.log(data);
    setProductData(data);
    setTotalProducts(totalProducts);
  }
}

export default function AllProducts() {
  const route = useRouter();
  const pathname = usePathname();
  const [productData, setProductData] = useState<Produto[] | undefined>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const { search } = useContext(SearchContext);

  // Vem o nome da categoria via click no Menu ou o nome "search", quando o user busca via SearchInput
  const categoryNameOrSearch = decodeURIComponent(pathname.slice(14));
  const h2Text =
    search && categoryNameOrSearch !== "search"
      ? `Resultados para: ${search}`
      : categoryNameOrSearch || "Todos os produtos";

  useEffect(() => {
    getData(setProductData, setTotalProducts, categoryNameOrSearch, search);
  }, [search]);

  return (
    <>
      <div className="pb-10">
        <div>
        <Link
          size="sm"
          as="button"
          className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
          onClick={() => route.back()}
        >
        <ArrowLeft /> Retornar
      </Link>
        <div className="flex gap-3 my-5">
        <h2 className="text-2xl underline underline-offset-8 decoration-wavy">
          {h2Text}
        </h2>
        <h2>({totalProducts})</h2>
        </div>

        </div>
      </div>
      <ProductCard data={productData} />
    </>
  );
}
