// EM TESTES
// Tela pós landing page que mostra todos os produtos ou os produtos baseado nos filtros do Menu
"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Produto } from "@/lib/interface";
import ProductCard from "@/components/ProductCard";
import getProductCardData from "../../../database/products/getProductCardData";

async function getData(
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>
) {
  const data = (await getProductCardData()) as Produto[];

  setProductData(data);
}

export default function AllProducts() {
  const [productData, setProductData] = useState<Produto[] | undefined>([]);
  // console.log(productData);

  useEffect(() => {
    getData(setProductData);
  }, []);

  return (
    <section>
      <ProductCard data={productData} />
    </section>
  );
}
