// EM TESTES
// Tela do anúncio individual de um  produto
"use client";
import React, { useContext, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Produto } from "@/lib/interface";
import { ProductContext } from "@/contexts/ProductContext/ProductContext";

export default function ProductAdvertisement() {
  const product = useContext(ProductContext);

  useEffect(() => {
    console.log(product.id);
    console.log(product.name);
    console.log(product.category);
  }, []);

  return (
    <section>
      <h1>Tela de anúncio do produto aqui</h1>
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
        <Button color="success" variant="solid">
          Adicionar ao Carrinho
        </Button>
      </div>
    </section>
  );
}