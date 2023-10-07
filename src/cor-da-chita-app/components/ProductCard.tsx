// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Image, CardFooter, Link } from "@nextui-org/react";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
import CartPlusIcon from "../assets/icons/CartPlusIcon";

import { Produto } from "../lib/interface";
import getProductData from "../app/api/products/productsQuery";

// REFATORAR AQUI
async function getData(
  setProductData: React.Dispatch<React.SetStateAction<Produto[] | undefined>>
) {
  const data = (await getProductData()) as Produto[];

  setProductData(data);
}

export default function ProductCard(...props: any) {
  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  useEffect(() => {
    getData(setProductData);
  }, []);

  return (
    <>
      <h1>Meus Produtos</h1>
      <article>
        {productData?.map((produto) => (
          <Card
            className="py-4"
            isPressable
            key={produto._id}
            onPress={() => alert("Programar rota para o anúncio do produto")}
          >
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={produto.imagem}
                width={180}
                height={180}
              />
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="font-bold text-medium">{produto.nome}</p>
                <small className="text-500">
                  R$ {produto.preco.toFixed(2)}
                </small>
                {/* Usar o Link para esse botão, pois o HTML da warning ao usar botão dentro de botã (o card é pressionável) */}
                <div>
                  <Link
                    href=""
                    onClick={() => alert("Programar ADD ao carrinho")}
                  >
                    <CartPlusIcon />
                  </Link>
                </div>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </article>
    </>
  );
}
