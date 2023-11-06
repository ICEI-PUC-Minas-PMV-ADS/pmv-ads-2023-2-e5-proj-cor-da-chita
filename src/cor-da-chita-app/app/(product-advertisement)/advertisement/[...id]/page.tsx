// EM TESTES
// Tela do anúncio individual de um  produto
"use client";
import React, { useContext, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Produto } from "@/lib/interface";
import { ProductContext } from "@/contexts/ProductContext/ProductContext";
import Link from "next/link";

interface ProductCart {
  id: string;
  name: string;
  description: string;
  category: string;
  stock: number;
  weightProduct: number;
  price: number;
  lengthProduct: number;
  widthProduct: number;
  heightProduct: number;
  imageProduct: any;
  slug: string;
}

export default function ProductAdvertisement() {
  const route = useRouter();
  const product = useContext(ProductContext);

  useEffect(() => {
    console.log(product.id);
    console.log(product.name);
    console.log(product.category);
    // const a = JSON.parse(localStorage.getItem("cartItens"));
  }, []);

  // Pega todos os dados do produto usando a interface
  // const handleCartAdd = (product: ProductCart) => {
  //   console.log(product);

  //   const itens = JSON.parse(localStorage.getItem("itensCart") || "[]");

  //   itens.push(product);

  //   localStorage.setItem("itensCart", JSON.stringify(itens));

  //   console.log(itens);

  //   // console.log(productId);
  //   // itensCart.push(productId);
  //   // // console.log(itensCart)
  //   // localStorage.setItem("cartItens", JSON.stringify(itensCart));
  //   // const a = JSON.parse(localStorage.getItem("cartItens"));

  //   // console.log(a.includes(productId));
  //   //route.push("/shop-cart");
  // };

  // Pega só o ID
  const handleCartAdd = (productId: string) => {
    console.log(productId);

    const itens = JSON.parse(localStorage.getItem("itensCart") || "[]");

    itens.push(productId);

    localStorage.setItem("itensCart", JSON.stringify(itens));

    console.log(itens);
  };

  return (
    <section>
      <h1>Tela de anúncio do produto aqui</h1>
      <button type="button" onClick={() => route.back()}>
        Retornar para produtos
      </button>
      <div>
        <Image
          isZoomed
          alt="Foto do Produto"
          className="object-cover rounded-xl"
          src={product.imageProduct}
          width={300}
          height={300}
        />
      </div>
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>
          {product.lengthProduct} cm x {product.widthProduct} cm
        </p>
      </div>
      <div>
        <Button
          color="success"
          variant="solid"
          //onClick={() => handleCartAdd(product)}
          onClick={() => handleCartAdd(product.id)}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </section>
  );
}
