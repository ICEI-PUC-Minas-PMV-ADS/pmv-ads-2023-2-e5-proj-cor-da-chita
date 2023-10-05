// EM TESTES

import React from "react";
import { Produto } from "@/lib/interface";
import getProductData from "../../api/products/productsQuery";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  //  const data = (await getProductData()) as Produto[];
  //  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  //useEffect(() => {
  // setProductData(data);
  //}, []);
  return (
    <>
      <ProductCard />
    </>
  );
}
