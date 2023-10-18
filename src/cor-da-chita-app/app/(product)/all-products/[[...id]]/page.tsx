// EM ANDAMENTO
// Tela pós landing page que mostra todos os produtos ou os produtos baseado nos filtros do Menu
"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Produto } from "@/lib/interface";
import ProductCard from "@/components/ProductCard";
import getProductCardData from "../../../../database/products/getProductCardData";
import getProductByCategory from "@/database/products/getProductByCategory";
import { category } from "@/components/Menu";
import { usePathname } from "next/navigation";

async function getData(
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>
  //categoryName: string
) {
  // EM TESTES
  // if (categoryName != "Todos os Produtos") {
  //   const data = (await getProductByCategory(categoryName)) as Produto[];

  //   setProductData(data);
  //   return;
  // }

  const data = (await getProductCardData()) as Produto[];
  console.log(data);
  setProductData(data);
}

export default function AllProducts() {
  const pathname = usePathname();
  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  //const categoryName = pathname.slice(14);

  useEffect(() => {
    // EM TESTES
    // category.filter((category) => {
    //   if (category.name == "Todos os Produtos") {
    //     getData(setProductData, "Todos os Produtos");
    //     return;
    //   }
    // });

    //getData(setProductData, categoryName);

    getData(setProductData);

    console.log("entrou");
  }, []);

  // console.log(productData);

  return (
    <section>
      <ProductCard data={productData} />
    
    </section>
  );
}
