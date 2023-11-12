// Página com todas as informações do carrinho
"use client";

import React, { useEffect, useState, useContext } from "react";

import {
  Button,
  RadioGroup,
  Radio,
  Input,
  Divider,
  Tooltip,
  Spinner,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import axios from "axios";
import { CartContext } from "@/contexts/CartContext/CartContext";

import { url } from "@/app/api/backend/webApiUrl";
import CardCart from "@/components/CardCart";
import IconQuestionCircle from "@/assets/icons/IconQuestionCircle";
import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import SpinnerForButton from "@/components/SpinnerButton";
export default function ShopCart() {
  const router = useRouter();

  const { cart, setCart } = useContext(CartContext); // Array IDs produtos
  const { sumCartItems } = useContext(CartItemsContext); // Soma dos preços dos itens

  // Frete e CEP
  const [radioValue, setRadioValue] = useState(false); // RadioButton
  const [radiofreteChoose, setRadioFreteChoose] = useState("PAC"); // RadioButton

  const [cep, setCep] = useState(""); // Input CEP
  const [frete, setFrete] = useState<any>();
  const user = useContext(UserContext);
  const address = useContext(AddressContext);

  const [loading, setLoading] = useState(false);

  // Cálculo do Frete
  const handleCep = async () => {
    const frete = {
      cep: cep,
      totalWidthFreight: 20,
      totalHeightFreight: 20,
      totalLengthFreight: 30,
      totalWeightFreight: 800,
    };

    setLoading(true);

    const data = await axios
      .post(`${url}/Freight/CalcFreight`, frete)
      .then((json) => {
        return json.data;
      })
      .catch((e) => console.log(e));

    console.log(typeof data);

    if (data) {
      setLoading(false);
    }
    console.log(data);
    setFrete(data);
  };

  // Validação "Enter" input / botão calcular
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && cep.length == 8) {
      handleCep();
    }
  };

  // Pega IDs do local storage salva em setCart
  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    setCart(arrItens);
  }, []);

  return (
    <>
      {/* Renderizar itens do carrinho */}
      <div className="flex flex-col items-center">
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

        {/* Radio Group Combinar / Correios */}
        <div className="mt-2">
          <RadioGroup defaultValue={"combinar"}>
            <Radio
              size="sm"
              value="combinar"
              onClick={() => {
                setRadioValue(false), setCep("");
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

        {/* Cep */}
        <div className="flex mt-6">
          <p className={`text-sm mr-2 ${!radioValue ? "text-gray-400" : ""}`}>
            <strong>CEP</strong>
          </p>
          <Tooltip content="Somente números">
            <div>
              <IconQuestionCircle
                className={`${!radioValue ? "text-gray-400" : ""}`}
              />
            </div>
          </Tooltip>

          {/* Input CEP */}
          <Input
            maxLength={8}
            isClearable
            isDisabled={!radioValue}
            className="ml-20 place-self-end"
            size="sm"
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => {
              !/[^0-9]+/g.test(e.target.value) ? setCep(e.target.value) : "";
            }}
            onClear={() => setCep("")}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Botão Calcular Frete */}
        <div className="mt-4 place-self-end">
          <Button
            color="success"
            variant="bordered"
            isDisabled={!radioValue || cep.length != 8}
            onClick={handleCep}
          >
            {loading ? <SpinnerForButton /> : "Calcular"}
          </Button>
        </div>

        <Divider className="mt-5" />

        {/* PAC / SEDEX */}
        <div className="my-6">
          <div className="flex">
            <p
              className={`text-sm mb-2 mr-2 ${
                !frete || !radioValue ? "text-gray-400" : ""
              }`}
            >
              <strong>Selecione o tipo de envio:</strong>
            </p>
            <Tooltip content="É necessário calcular o frete antes de selecionar o tipo de envio">
              {!frete ? (
                <div>
                  <IconQuestionCircle
                    className={`${
                      !radioValue || !frete ? "text-gray-400" : ""
                    }`}
                  />
                </div>
              ) : (
                ""
              )}
            </Tooltip>
          </div>

          <RadioGroup isDisabled={!radioValue} defaultValue={"PAC"}>
            {/* PAC */}
            <div className="flex justify-around">
              <Radio
                isDisabled={!frete || !radioValue}
                size="sm"
                value="PAC"
                onClick={() => {
                  setRadioFreteChoose("PAC");
                }}
              >
                <p className="text-tiny mr-4">PAC</p>
              </Radio>

              {/* Valor Calculado PAC */}
              <div className="flex">
                {frete != undefined ? (
                  <p
                    className={`text-tiny ${
                      !radioValue ? "text-gray-400" : ""
                    }`}
                  >
                    <strong>R$</strong> {frete.valorPac.toFixed(2)} -
                    <strong> Prazo: </strong> {frete.prazoPac}
                    {frete.prazoPac === 1 ? (
                      <span> dia&nbsp;&nbsp;</span>
                    ) : (
                      " dias"
                    )}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            {/* SEDEX */}
            <div className="flex justify-around">
              <Radio
                isDisabled={!frete || !radioValue}
                size="sm"
                value="SEDEX"
                onClick={() => setRadioFreteChoose("SEDEX")}
              >
                <p className="text-tiny">SEDEX</p>
              </Radio>

              {/* Valor Calculado SEDEX */}
              <div className="flex">
                {frete != undefined ? (
                  <p
                    className={`text-tiny ${
                      !radioValue ? "text-gray-400" : ""
                    }`}
                  >
                    <strong>R$</strong> {frete.valorSedex.toFixed(2)} -
                    <strong> Prazo: </strong>
                    {frete.prazoSedex}
                    {frete.prazoSedex === 1 ? (
                      <span> dia&nbsp;&nbsp;</span>
                    ) : (
                      " dias"
                    )}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Valor do Frete e Total */}
        <div className="mt-3 text-sm">
          <div className="flex justify-between">
            <p className="mt-2">
              <strong>Valor do Frete</strong>
            </p>
            <p className="mt-2">
              <strong>
                R${" "}
                {frete != undefined && radioValue ? (
                  radiofreteChoose == "PAC" ? (
                    frete.valorPac.toFixed(2)
                  ) : (
                    frete.valorSedex.toFixed(2)
                  )
                ) : (
                  <>0,00</>
                )}
              </strong>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="mt-2">
              <strong>Total</strong>
            </p>
            <p className="mt-2">
              <strong>
                R${" "}
                {frete != undefined && radioValue ? (
                  radiofreteChoose == "PAC" ? (
                    (frete.valorPac + sumCartItems).toFixed(2)
                  ) : (
                    (frete.valorSedex + sumCartItems).toFixed(2)
                  )
                ) : (
                  <>{sumCartItems.toFixed(2)}</>
                )}
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Ir para Pagamento */}
      <div className="mt-5 place-self-center">
        <Button color="success" onPress={() => router.push("/your-data")}>
          Ir para Pagamento
        </Button>
      </div>
    </>
  );
}
