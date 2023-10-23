// Tela pós landing page que mostra todos os produtos ou os produtos baseado nos filtros do Menu
"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Produto } from "@/lib/interface";
import ProductCard from "@/components/ProductCard";
import getProductCardData from "../../../../database/products/getProductData";
import getProductDataByCategory from "@/database/products/getProductDataByCategory";
import getProductDataSearch from "@/database/products/getProductDataSearch";

async function getData(
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>,
  categoryName: string
) {
  // categoryName é vazia quando está em "Todos os Produtos"
  if (categoryName != "") {
    const data = (await getProductDataByCategory(categoryName)) as Produto[];
    //console.log(data);

    setProductData(data);
    return;
  } 

  const data = (await getProductCardData()) as Produto[];
  console.log(data);

  setProductData(data);
}

export default function AllProducts() {
  const pathname = usePathname();
  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  const categoryName = pathname.slice(14);
  console.log(categoryName);

  useEffect(() => {
    getData(setProductData, categoryName);
  }, []);

  return (
    <section>
      <ProductCard data={productData} />
    </section>
  );
}
