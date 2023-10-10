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
  setProductData: Dispatch<SetStateAction<Produto[] | undefined>>,
  categoryName: string
) {
  //  console.log(category);
  console.log(categoryName);

  // EM ANDAMENTO
  if (categoryName != "Todos os Produtos") {
    const data = (await getProductByCategory(categoryName)) as Produto[];
    console.log(data);
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

  //console.log(pathname);
  const categoryName = pathname.slice(14);

  console.log(categoryName);

  useEffect(() => {
    category.filter((category) => {
      if (categoryName == "") {
        getData(setProductData, "Todos os Produtos");
        return;
      }
    });

    getData(setProductData, categoryName);
  }, []);

  return (
    <section>
      <ProductCard data={productData} />
    </section>
  );
}
