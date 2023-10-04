// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";
import { Button, CardFooter } from "@nextui-org/react";
import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import CartPlusIcon from "../assets/icons/CartPlusIcon";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
//import getDataProduct from "../lib/sanity";
import { Produto } from "../lib/interface";
import { client } from "../lib/sanity";

// AGUARDANDO GABRIEL CONFIGURAR CORS NO SANITY
async function getProductData() {
  try {
    const query = `* [_type == "produto"]{
        _id,
        nome,
        preco,
        'imagem':imagem.asset->url
      }`;

    const data = await client.fetch(query);
    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export default function ProductCard(...props: any) {
  const data = (await getProductData()) as Produto[];
  console.log(data)


  return (
    <>
      <div>
        Meus Produtos
        {data.map((produto) => (
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={produto.imagem}
                width={20}
                height={20}
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
