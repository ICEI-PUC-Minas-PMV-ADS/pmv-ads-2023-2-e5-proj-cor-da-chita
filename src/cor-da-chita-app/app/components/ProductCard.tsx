// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
import { Button } from "@nextui-org/react";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import CartPlusIcon from "../icons/CartPlusIcon";
import ButtonOnlyIcon from "./ButtonOnlyIcon";

export default function ProductCard(props: any) {
  return (
    <>
      <Card className="py-4">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://beagaembalagem.com.br/wp-content/uploads/2020/06/caixa-branca.jpg"
            width={200}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold text-medium">Nome do Produto</p>
            <small className="text-500">Preço</small>
            {/* <CartPlusIcon className="w-24 pointer-events-none flex-shrink-0" /> */}
            <ButtonOnlyIcon isIconOnly color="danger" aria-label="Like">
              <CartPlusIcon />
            </ButtonOnlyIcon>
          </CardHeader>
        </CardBody>
      </Card>
    </>
  );
}
