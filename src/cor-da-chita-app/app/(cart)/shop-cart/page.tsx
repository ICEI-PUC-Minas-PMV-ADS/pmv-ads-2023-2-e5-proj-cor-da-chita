// Página com todas as informações do carrinho
"use client";

import React, { useEffect, useState, useContext } from "react";
import {} from "@nextui-org/react";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";

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
  Link,
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
  const { sumCartItems } = useContext(CartItemsContext); // Soma total

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

  const [cep, setCep] = useState(""); // Input CEP
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

  useEffect(() => {
    if (cart.length === 0 || freteInContext == "") setIsCombinarFrete(false);

    if (cartFlow === "/summary-order" && freteInContext != "") {
      setIsCombinarFrete(true);
      setCep(saveCepContext);
    }
  }, [cart]);
  return (
    <>
      <Link
        size="sm"
        as="button"
        className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={() => route.back()}
      >
        <ArrowLeft /> Retornar
      </Link>

      <div className="px-10 mx-auto">
        <div className="font-serif pb-5">
          <h2 className="text-2xl text-center">Checkout</h2>
        </div>
        <h2 className="py-3 text-2xl font-serif">Carrinho</h2>


        <div className="mx-5">
          {/* Renderizar itens do carrinho */}
          <div className="flex flex-col items-center my-5">
            {!cart.length ? (
              <div className="flex flex-col items-center gap-5">
                <p>Seu carrinho está vazio</p>
                <Button
                  variant="ghost"
                  size="lg"
                  color="success"
                  onClick={() => route.push("/all-products")}
                >
                  Ver todos os produtos
                </Button>
              </div>
            ) : (
              cart?.map((idItem: string, index) => (
                <CardCart key={index} id={idItem} />
              ))
            )}
          </div>
        </div>

        {/* <Divider className="mt-10" /> */}

          {/* Modo de envio: Título e tooltip */}
          <div className="flex flex-col my-5">
            <div className="flex items-center">
              <h2 className="py-3 text-2xl font-serif">Envio</h2>

              <Tooltip content="Adicione produtos no seu carrinho para selecionar o modo de envio">
                <div className="ml-3 p-3">
                  <IconQuestionCircle />
                </div>
              </Tooltip>
            </div>

            {/* Radio Group Combinar / Correios */}
            <div className="ml-3">
              <RadioGroup defaultValue={"combinar"}>
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
                <div className="flex mt-6  gap-3">
                    <div className="flex">
                    {/* Input CEP */}
                    <Input
                      maxLength={8}
                      variant="bordered"
                      classNames={{
                        innerWrapper: "bg-transparent",
                        inputWrapper: ["shadow-none"],
                      }}
                      isClearable
                      isDisabled={!isCombinarFrete}
                      className="place-self-end"
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
                  <div className="place-self-end">
                    <Button
                      color="success"
                      variant="ghost"
                      isDisabled={!isCombinarFrete || cep.length != 8}
                      onClick={handleCep}
                    >
                      {loading ? <SpinnerForButton /> : "Calcular"}
                    </Button>
                  </div>
              </div>
                {/* Botão Calcular Frete */}
              </>
            )}


            {/* PAC / SEDEX */}
            {isCombinarFrete && (
              <>
                <div className="my-5">
                  {/*Tipo de Envio> Título e Tooltip */}
                  <div className="flex  items-center">
                    <h2 className="mr-2">Selecione o tipo de envio:</h2>
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
                            <strong>R$</strong>{" "}
                            {freteInContext.valorPac.toFixed(2).toString().replace('.',',')} -
                            <strong> Prazo: </strong> {freteInContext.prazoPac}
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
                            {freteInContext.valorSedex.toFixed(2).toString().replace('.',',')} -
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
                <h2 className="py-3">Valor do Frete</h2>
                <p className="mt-2">
                  <strong>
                    R${" "}
                    {freteInContext != "" && isCombinarFrete ? (
                      isPac == "PAC" ? (
                        freteInContext.valorPac.toFixed(2).toString().replace('.',',')
                      ) : (
                        freteInContext.valorSedex.toFixed(2).toString().replace('.',',')
                      )
                    ) : (
                      <>0,00</>
                    )}
                  </strong>
                </p>
              </div>

              <div className="flex justify-between">
                <h2 className="py-3">
                  <strong>Total</strong>
                </h2>
                <p className="mt-2">
                  <strong>
                    R${" "}
                    {freteInContext != "" && isCombinarFrete ? (
                      isPac == "PAC" ? (
                        (freteInContext.valorPac + sumCartItems).toFixed(2).toString().replace('.',',')
                      ) : (
                        (freteInContext.valorSedex + sumCartItems).toFixed(2).toString().replace('.',',')
                      )
                    ) : (
                      <>{sumCartItems.toFixed(2).toString().replace('.',',')}</>
                    )}
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* Ir para Pagamento */}
          <div className="mt-5 flex justify-center">
            <Link
              size="sm"
              as="button"
              isDisabled={
                cart.length === 0 || (isCombinarFrete && freteInContext == "")
              }
              className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
              onClick={handleConfirmCartData}
            >
              Ir para Pagamento <ArrowRight />
            </Link>
          </div>
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
