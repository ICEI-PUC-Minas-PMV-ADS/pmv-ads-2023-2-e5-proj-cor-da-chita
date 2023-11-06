// EM ANDAMENTO
"use client";
import React, {
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import {
  Card,
  CardBody,
  Image,
  Button,
  Progress,
  RadioGroup,
  Radio,
  Input,
  Divider,
} from "@nextui-org/react";

import CardCart from "@/components/CardCart";
import { Produto } from "@/lib/interface";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartContext } from "@/contexts/CartContext/CartContext";
import getProductDataCart from "@/database/products/getProductDataById";
import { useRouter } from "next/navigation";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

export default function ShopCart(...props: any) {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    console.log(arrItens);
    setCart(arrItens);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3">
        {!cart.length ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          cart?.map((idItem: string) => <CardCart id={idItem} />)
        )}
      </div>

      <Divider className="mt-10" />

      <div className="flex flex-col mt-5">
        <h2>
          <strong>Modo de Envio</strong>
        </h2>

        <div className="mt-2">
          <RadioGroup defaultValue={"combinar"}>
            <Radio size="sm" value="combinar">
              <p className="text-sm ml-2">Combinar com a vendedora</p>
            </Radio>
            <Radio size="sm" value="correios">
              <p className="text-sm ml-2">Correios</p>
            </Radio>
          </RadioGroup>
        </div>

        <div className="flex mt-3">
          <p className="text-sm">
            <strong>Frete</strong>
          </p>
          <Input
            className="ml-20 place-self-end"
            size="sm"
            type="email"
            label=""
            placeholder="Digite seu CEP"
          />
        </div>

        <div className="mt-2 place-self-end">
          <Button color="success" variant="bordered">
            Calcular
          </Button>
        </div>

        <Divider className="mt-5" />

        <div className="mt-3 text-sm">
          <div className="flex justify-between">
            <p className="mt-2">
              <strong>Valor do Frete</strong>
            </p>
            <p className="mt-2">
              <strong>R$ 0,00</strong>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="mt-2">
              <strong>Total</strong>
            </p>
            <p className="mt-2">
              <strong>R$ 0,00</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 place-self-center">
        <Button color="success" onPress={() => router.push("/your-data")}>
          Ir para Pagamento
        </Button>
      </div>
    </>
  );
}
