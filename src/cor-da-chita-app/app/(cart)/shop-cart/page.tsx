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
  const { cart, setCart } = useContext(CartContext); // Array Ids
  const { sumCartItems } = useContext(CartItemsContext); // Soma dos preços dos itens

  // Frete e CEP
  const [radioValue, setRadioValue] = useState(false); // Ativa/ Inativa campo
  const [cep, setCep] = useState(""); // Input CEP

  // Terminar
  const [missInfo, setMissInfo] = useState(false); // Controla erros no campo

  function handleCep() {
    const formattedCep = cep.replace(/[^0-9]+/g, "");

    if (formattedCep.length != 8) {
      setMissInfo(true);
    }

    alert("Calcular frete e somar no campo VALOR DO FRETE");
  }

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    setCart(arrItens);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3">
        {!cart.length ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          cart?.map((idItem: string, index) => (
            <CardCart key={index} id={idItem} />
          ))
        )}
      </div>

      <Divider className="mt-10" />

      <div className="flex flex-col mt-5">
        <h2>
          <strong>Modo de Envio</strong>
        </h2>

        <div className="mt-2">
          <RadioGroup defaultValue={"combinar"}>
            <Radio
              size="sm"
              value="combinar"
              onClick={() => {
                setRadioValue(false), setMissInfo(false), setCep("");
              }}
            >
              <p className="text-sm ml-2">Combinar com a vendedora</p>
            </Radio>
            <Radio
              size="sm"
              value="correios"
              onClick={() => setRadioValue(true)}
            >
              <p className="text-sm ml-2">Correios</p>
            </Radio>
          </RadioGroup>
        </div>

        <div className="flex mt-3">
          <p className="text-sm">
            <strong>Frete</strong>
          </p>
          <Input
            isClearable
            isDisabled={!radioValue}
            className="ml-20 place-self-end"
            size="sm"
            type="text"
            label=""
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
            onClear={() => setCep("")}
            color={
              missInfo && cep.length != 8 && radioValue ? "danger" : undefined
            }
            errorMessage={missInfo && "Favor preencher o CEP"}
          />
        </div>

        <div className="mt-2 place-self-end">
          <Button
            color="success"
            variant="bordered"
            isDisabled={!radioValue}
            onPress={handleCep}
            onKeyDown={handleCep}
          >
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
              <strong>R$ {sumCartItems.toFixed(2)}</strong>
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
