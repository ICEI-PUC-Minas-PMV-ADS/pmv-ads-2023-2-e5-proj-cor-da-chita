// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, Image, CardFooter, Link } from "@nextui-org/react";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
import CartPlusIcon from "../assets/icons/CartPlusIcon";

import { Produto } from "../lib/interface";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Produto[] | undefined;
}

export default function ProductCard(product: ProductCardProps, ...props: any) {
  const route = useRouter();
  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  useEffect(() => {
    setProductData(product.data);
  });

  // EM ANDAMENTO
  const handleClick = (product: Produto) => {
    // console.log(product);
    // route.push(`/product-advertisement/${product.slug.current}/${product._id}`);
  };

  return (
    <>
      <h1>Meus Produtos</h1>
      {productData?.map((product) => (
        <article key={product._id}>
          <Card
            className="py-4"
            isPressable
            onPress={() => alert("Programar rota para o anúncio do produto")}
            // onPress={() => handleClick(product)} // EM ANDAMENTO
          >
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={product.imagem}
                width={180}
                height={180}
              />
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="font-bold text-medium">{product.nome}</p>
                <small className="text-500">
                  R$ {product.preco.toFixed(2)}
                </small>
              </CardFooter>
            </CardBody>
            {/* Usar o Link para esse botão, pois o HTML da warning ao usar botão dentro de botão (o card é pressionável). Estilizar para ficar como um botão */}
            <div>
              <Link href="" onClick={() => alert("Programar ADD ao carrinho")}>
                <CartPlusIcon />
              </Link>
            </div>
          </Card>
        </article>
      ))}
    </>
  );
}
