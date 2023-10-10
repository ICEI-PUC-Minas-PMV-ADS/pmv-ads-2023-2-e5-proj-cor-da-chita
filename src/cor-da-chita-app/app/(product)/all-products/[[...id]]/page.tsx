// EM TESTES
// Tela pós landing page que mostra todos os produtos ou os produtos baseado nos filtros do Menu
"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Produto } from "@/lib/interface";
import ProductCard from "@/components/ProductCard";
import getProductCardData from "../../../../database/products/getProductCardData";
import getProductByCategory from "@/database/products/getProductByCategory";

async function getData(
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>,
  categoryName: string
) {
  if (categoryName != "") {
    const data = (await getProductByCategory(categoryName)) as Produto[];
    setProductData(data);
    console.log(categoryName);
    console.log(typeof categoryName);

    console.log(data);
    return data;
  }

  const data = (await getProductCardData()) as Produto[];
  console.log(data);
  setProductData(data);
}

export default function AllProducts(categoryId: string) {
  const [productData, setProductData] = useState<Produto[] | undefined>([]);
  // console.log(productData);

  useEffect(() => {
    getData(setProductData, categoryId);
  }, []);

  return (
    <section>
      <ProductCard data={productData} />
    </section>
  );
}
