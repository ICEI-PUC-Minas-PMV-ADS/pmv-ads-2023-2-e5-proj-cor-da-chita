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

export default function ProductAdvertisement() {
  const route = useRouter();
  const product = useContext(ProductContext);
  const itensCart :string[] = []

  useEffect(() => {
    console.log(product.id);
    console.log(product.name);
    console.log(product.category);
  }, []);

  const handleCartAdd = (productId: string) => {
    // route.push("/shop-cart");
    console.log(productId)
    itensCart.push(productId)
    console.log(itensCart)
    localStorage.setItem('cartItens',JSON.stringify(itensCart))
    const a = JSON.parse(localStorage.getItem('cartItens'))

    console.log(a)




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
        {/* <p>{Number(product.lengthProduct) / 100}</p> */}
      </div>
      <div>
        <Button
          color="success"
          variant="solid"
          onClick={() => handleCartAdd(product.id)}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </section>
  );
}
