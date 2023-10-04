// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
import CartPlusIcon from "../assets/icons/CartPlusIcon";

import { Produto } from "../lib/interface";
import getProductData from "../app/api/products/productsQuery";

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
      <div>
        Meus Produtos
        {productData?.map((produto) => (
          <Card className="py-4" key={produto._id}>
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
                <ButtonOnlyIcon isIconOnly color="success">
                  <CartPlusIcon />
                </ButtonOnlyIcon>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
