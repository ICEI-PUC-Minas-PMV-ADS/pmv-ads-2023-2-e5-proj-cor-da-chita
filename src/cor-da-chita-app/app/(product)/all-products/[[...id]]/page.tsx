// Tela pós landing page que mostra todos os produtos ou os produtos baseado nos filtros do Menu
"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Produto } from "@/lib/interface";
import ProductCard from "@/components/ProductCard";
import getProductCardData from "../../../../database/products/getProductCardData";
import getProductByCategory from "@/database/products/getProductByCategory";

async function getData(
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>,
  categoryName: string
) {
  // categoryName é vazia quando está em Todos os Produtos
  if (categoryName != "") {
    //console.log(categoryName);
    const data = (await getProductByCategory(categoryName)) as Produto[];

    setProductData(data);
    return;
  }

  const data = (await getProductCardData()) as Produto[];
  //console.log(data);
  setProductData(data);
}

export default function AllProducts() {
  const pathname = usePathname();
  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  const categoryName = pathname.slice(14);

  useEffect(() => {
    //console.log(categoryName);
    getData(setProductData, categoryName);
  }, []);

  return (
    <section>
      <ProductCard data={productData} />
    </section>
  );
}
