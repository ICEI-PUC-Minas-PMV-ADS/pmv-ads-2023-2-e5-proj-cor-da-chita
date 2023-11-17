// Página com todas as informações do carrinho
"use client";

import React, { useEffect, useState, useContext } from "react";
import {} from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  RadioGroup,
  Radio,
  Input,
  Divider,
  Tooltip,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import axios from "axios";

import { url } from "@/app/api/backend/webApiUrl";

import { CartContext } from "@/contexts/CartContext/CartContext";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

import CardCart from "@/components/CardCart";
import IconQuestionCircle from "@/assets/icons/IconQuestionCircle";
import SpinnerForButton from "@/components/SpinnerButton";
import { CepContext } from "@/contexts/CepContext/CepContext";
import { FreteContext } from "@/contexts/FreteContext/FreteContext";

export default function ShopCart() {
  const route = useRouter();

  const { cart, setCart, cartFlow } = useContext(CartContext); // Array IDs produtos
  const { sumCartItems, setCopyCartItems, cartItems } =
    useContext(CartItemsContext); // Soma preços itens

  // Usar em shipping data
  const { saveCepContext, setSaveCepContext } = useContext(CepContext);
  const {
    setIsPac,
    isPac,
    freteInContext,
    setFreteInContext,
    isCombinarFrete,
    setIsCombinarFrete,
  } = useContext(FreteContext);

  // Modal CEP errado e Erro conexão API
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [textModal, setTextModal] = useState("");

  const [cep, setCep] = useState("12903834"); // Input CEP
  //const [frete, setFrete] = useState<any>(); // HandleCep - Frete

  const [loading, setLoading] = useState(false); // Spinner Botão Calcular

  // Cálculo do Frete
  const handleCep = async () => {
    setSaveCepContext(cep); // Recebe a entrada do user e salva

    const frete = {
      cep: cep,
      totalWidthFreight: 20,
      totalHeightFreight: 20,
      totalLengthFreight: 30,
      totalWeightFreight: 800,
    };

    setLoading(true); // Para spinner botão

    const data = await axios
      .post(`${url}/Freight/CalcFreight`, frete)
      .then((response) => {
        console.log(response.status);
        if (response.data.cepDestino == null) {
          setTextModal("O CEP está incorreto, verifique");
          onOpen();
          setLoading(false);

          return;
        }
        console.log(response.data);

        return response.data;
      })
      .catch((e) => {
        console.log(e);
        setTextModal(
          "Erro de conexão com servidor, tente novamente mais tarde"
        );
        console.log(e);
        onOpen();
        setLoading(false);
      });

    if (data) {
      setLoading(false); // Para spinner botão
      setFreteInContext(data);
    }
  };

  // Validação "Enter" input / botão calcular
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && cep.length == 8) {
      handleCep();
    }
  };

  // Lidar com a rota vinda do summary-order ou não. Chamada no botão "Ir para o Pagamento"
  function handleConfirmCartData(): void {
    if (cartFlow == "/summary-order") {
      route.push("/summary-order");
    } else {
      route.push("/your-data");
    }
  }

  // Pega IDs do local storage salva em setCart
  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    setCart(arrItens);

    setIsPac("PAC");
  }, []);

  // Ocultando campo de frete se o carrinho estiver vazio e o frete já ter sido calculado. Exceto quando o flow vem do editar carrinho em summary order
  useEffect(() => {
    if (cart.length === 0) {
      setIsCombinarFrete(false);
    }
    if (cartFlow === "/summary-order" && freteInContext != "") {
      setIsCombinarFrete(true);
      setCep(saveCepContext);
    }
  }, [cart]);

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

      {/* Modo de envio: Título e tooltip */}
      <div className="flex flex-col mt-5">
        <div className="flex items-center">
          <h2 className="mr-2">
            <strong>Modo de Envio</strong>
          </h2>

          <Tooltip content="Adicione produtos no seu carrinho para selecionar o modo de envio">
            <div>
              <IconQuestionCircle />
            </div>
          </Tooltip>
        </div>

        {/* Radio Group Combinar / Correios */}
        <div className="mt-2">
          <RadioGroup
            defaultValue={freteInContext == "" ? "combinar" : "correios"}
          >
            <Radio
              isDisabled={cart.length === 0}
              size="sm"
              value="combinar"
              onClick={() => {
                setIsCombinarFrete(false), setCep(""), setIsPac("PAC");
              }}
            >
              <p className="text-sm ml-2">Combinar com a vendedora</p>
            </Radio>
            <Radio
              isDisabled={cart.length === 0}
              size="sm"
              value="correios"
              onClick={() => {
                setIsCombinarFrete(true);
              }}
            >
              <p className="text-sm ml-2">Correios</p>
            </Radio>
          </RadioGroup>
        </div>

        {/* Cep / Input Cep / Botão Calcular */}
        {isCombinarFrete && (
          <>
            {/* CEP: Título e Tooltip */}
            <div className="flex mt-6 items-center ">
              <p
                className={`text-sm mr-2 ${
                  !isCombinarFrete ? "text-gray-400" : ""
                }`}
              >
                <strong>CEP</strong>
              </p>
              <Tooltip content="Somente números">
                <div>
                  <IconQuestionCircle
                    className={`${!isCombinarFrete ? "text-gray-400" : ""}`}
                  />
                </div>
              </Tooltip>

              {/* Input CEP */}
              <Input
                maxLength={8}
                isClearable
                isDisabled={!isCombinarFrete}
                className="ml-20 place-self-end"
                size="sm"
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(e) => {
                  !/[^0-9]+/g.test(e.target.value)
                    ? setCep(e.target.value)
                    : "";
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
                isDisabled={!isCombinarFrete || cep.length != 8}
                onClick={handleCep}
              >
                {loading ? <SpinnerForButton /> : "Calcular"}
              </Button>
            </div>
          </>
        )}

        <Divider className="mt-5" />

        {/* PAC / SEDEX */}
        {isCombinarFrete && (
          <>
            <div className="my-5">
              {/*Tipo de Envio> Título e Tooltip */}
              <div className="flex  items-center">
                <h2 className="mr-2">
                  <strong>Selecione o tipo de envio:</strong>
                </h2>
                <Tooltip content="É necessário calcular o frete antes de selecionar o tipo de envio">
                  {freteInContext == "" ? (
                    <div>
                      <IconQuestionCircle />
                    </div>
                  ) : (
                    ""
                  )}
                </Tooltip>
              </div>

              {/* PAC / SEDEX / Valores calculados*/}
              <RadioGroup
                className="mt-4"
                isDisabled={!isCombinarFrete}
                defaultValue={"PAC"}
              >
                {/* PAC */}
                <div className="flex justify-around">
                  <Radio
                    isDisabled={freteInContext == "" || !isCombinarFrete}
                    size="sm"
                    value="PAC"
                    onClick={() => {
                      //setChooseTypeFrete("PAC"),
                      setIsPac("PAC");
                    }}
                  >
                    <p className="text-tiny mr-4">PAC</p>
                  </Radio>

                  {/* Valor Calculado PAC */}
                  <div className="flex">
                    {freteInContext != "" ? (
                      <p
                        className={`text-tiny ${
                          !isCombinarFrete ? "text-gray-400" : ""
                        }`}
                      >
                        <strong>R$</strong> {freteInContext.valorPac.toFixed(2)}{" "}
                        -<strong> Prazo: </strong> {freteInContext.prazoPac}
                        {freteInContext.prazoPac === 1 ? (
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
                    isDisabled={freteInContext == "" || !isCombinarFrete}
                    size="sm"
                    value="SEDEX"
                    onClick={() => {
                      //setChooseTypeFrete("SEDEX"),
                      setIsPac("SEDEX");
                    }}
                  >
                    <p className="text-tiny">SEDEX</p>
                  </Radio>

                  {/* Valor Calculado SEDEX */}
                  <div className="flex">
                    {freteInContext != "" ? (
                      <p
                        className={`text-tiny ${
                          !isCombinarFrete ? "text-gray-400" : ""
                        }`}
                      >
                        <strong>R$</strong>{" "}
                        {freteInContext.valorSedex.toFixed(2)} -
                        <strong> Prazo: </strong>
                        {freteInContext.prazoSedex}
                        {freteInContext.prazoSedex === 1 ? (
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
          </>
        )}

        {/* Valor do Frete e Total */}
        <div className="mt-3 text-sm">
          <div className="flex justify-between">
            <p className="mt-2">
              <strong>Valor do Frete</strong>
            </p>
            <p className="mt-2">
              <strong>
                R${" "}
                {freteInContext != "" && isCombinarFrete ? (
                  isPac == "PAC" ? (
                    freteInContext.valorPac.toFixed(2)
                  ) : (
                    freteInContext.valorSedex.toFixed(2)
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
                {freteInContext != "" && isCombinarFrete ? (
                  isPac == "PAC" ? (
                    (freteInContext.valorPac + sumCartItems).toFixed(2)
                  ) : (
                    (freteInContext.valorSedex + sumCartItems).toFixed(2)
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
        <Button
          isDisabled={
            cart.length === 0 || (isCombinarFrete && freteInContext == "")
          }
          color="success"
          onPress={handleConfirmCartData}
        >
          Ir para Pagamento
        </Button>
      </div>

      {/* Modal CEP errado e Erro conexão */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-4">
          {(onClose) => (
            <>
              <ModalBody>
                <p>{textModal}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Voltar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
