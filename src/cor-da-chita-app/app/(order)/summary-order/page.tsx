// Resumo do pedido
"use client";

import React, { useContext, useEffect, useState } from "react";
import ArrowLeft from "@/assets/icons/ArrowLeft";

import {
  Button,
  Divider,
  Link,
  Spinner,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { MyButton } from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import { RadioGroup, Radio } from "@nextui-org/react";

import postOrder from "@/database/order/postOrder";

import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { FreteContext } from "@/contexts/FreteContext/FreteContext";
import { CartContext } from "@/contexts/CartContext/CartContext";
import { PixContext } from "@/contexts/PixContext/PixContext";
import SpinnerForButton from "@/components/SpinnerButton";

export default function SummaryOrder() {
  const route = useRouter();
  const path = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [textModal, setTextModal] = useState("");
  const user = useContext(UserContext);
  const address = useContext(AddressContext);
  const { street, setStreet, neighborhood, setNeighborhood, num, setNum, city, setCity, uf, setUf, cep, setCep, complement, setComplement } = useContext(AddressContext);
  const [loading, setLoading] = useState(false); // Spinner Botão Calcular

  const { cartItems, sumCartItems, copyCartItems, setCartItems,setSumCartItems } =
    useContext(CartItemsContext);
  const { cartFlow, setCartFlow } = useContext(CartContext);
  const { setPixId } = useContext(PixContext);
  const [selectedOption, setSelectedOption] = useState("pix");

  const { freteInContext, isPac, isCombinarFrete } = useContext(FreteContext);

  const handleRedirectWhatsApp = () => {
    console.log(user);
    console.log(street);
    console.log(neighborhood);
    console.log(num);
    console.log(city);
    console.log(uf);
    console.log(cep);
    console.log(complement);
    //%0a Serve para pular linha no whatsapp

    let typeFrete = "";
    console.log(isCombinarFrete);

    if (isCombinarFrete) {
      // correios
      typeFrete =
        isPac == "PAC"
          ? " via PAC."
          : " via SEDEX.";
    } else {
      typeFrete = " combinando diretamente com você a entrega.";
    }

    // const typeFrete =
    //   isPac == "PAC" && !isCombinarFrete
    //     ? " Pela modalidade de envio PAC:"
    //     : " Pela modalidade de envio SEDEX:";
    let typeDelivery = `${
      isCombinarFrete ? "Combinando diretamente com você a entrega" : typeFrete
    }%0a`;

    let message =
      `Olá! Gostaria de fazer um pedido para pagamento no crédito. Os itens de interesse são:%0a `;

    copyCartItems.map((product) => {
      //Verifica se é o ultimo item da lista para não inserir virgula no final
      message += ` %0a- ${product.quantidade} ${
        product.quantidade > 1 ? `Unidades` : `Unidade`
      } de ${product.nome}, cada unidade custando R$ ${product.preco
        .toFixed(2)
        .toString()
        .replace(".", ",")}.`;
    });


    message += `%0a%0aA modalidade escolhida de frete é` + typeFrete ;

    message += `%0a%0a- Informações de envio:%0a${user.name}%0a${street}, ${num}%0a${neighborhood}, ${city}, ${uf}%0aCEP: ${cep}%0aComplemento: ${complement}`;

    message += `%0a%0aPreço Total: R$ ${sumCartItems
      .toFixed(2)
      .toString()
      .replace(".", ",")}.`;

    message += ` %0a%0aPodemos combinar o pagamento e a entrega? Obrigado(a)!`;

    route.push(
      `https://api.whatsapp.com/send?phone=553198772756&text=${message}`
    );
  };

  // Enviar pedido
  async function handleOrder() {
    // Somando dados da cubagem do pedido

    console.log(freteInContext);
    console.log(isPac);
    const totalWidthFreightSum = cartItems.reduce(
      (sum, item) => sum + item.largura,
      0
    );

    const totalHeightFreight = cartItems.reduce(
      (sum, item) => sum + item.altura,
      0
    );

    const totalLengthFreight = cartItems.reduce(
      (sum, item) => sum + item.comprimento,
      0
    );

    const totalWeightFreight = cartItems.reduce(
      (sum, item) => sum + item.peso,
      0
    );
      console.log(isPac)
      console.log(isCombinarFrete)

      //A variável isCombinarFrete esta invertida,quando está false é quando esta combinando o frete e true quando é pelos correios
      const tipoCorreios = isPac==="PAC"?"PAC":"SEDEX"

      const freightMethod = !isCombinarFrete?"Combinado diretamente com a vendedora":tipoCorreios
       

    console.log("freightMethod:", freightMethod);

    const order = {
      items: [] as Array<{
        productId: string;
        productName: string;
        productPrice: number;
      }>,
      userName: user.name.trim(),
      userEmail: user.email.trim(),
      street: address.street.trim(),
      neighborhood: address.neighborhood.trim(),
      num: address.num.trim(),
      city: address.city.trim(),
      uf: address.uf.trim(),
      cep: address.cep.trim(),
      complement: address.complement.trim(),
      freight: {
        totalWidthFreight: totalWidthFreightSum,
        totalHeightFreight: totalHeightFreight,
        totalLengthFreight: totalLengthFreight,
        totalWeightFreight: totalWeightFreight,
        freightValue:
          isPac == "PAC" ? freteInContext.valorPac : freteInContext.valorSedex,
        freightMethod: freightMethod,
      },
      orderPixId: 0,
      orderDate: new Date(),
      phoneNumber: user.phone,
      totalPriceProducts: sumCartItems,
    };

    // Itens do Pedido
    copyCartItems.forEach((item) => {
      const newItem = {
        productId: item._id.trim(),
        productName: item.nome.trim(),
        productPrice: item.preco,
        productQuantity: item.quantidade,
      };

      order.items.push(newItem);
    });

    setLoading(true);

    const orderCreated = await postOrder(order);
    console.log(orderCreated);
    //Se criou Pagamento então seta na variavel de context o id do pix para pegar posterirmente o codigo do pix e gerar o qrcode na tela
    if (orderCreated) {
      setPixId(orderCreated.orderPixId);
      setLoading(false);
      //Caso o pedido tenha sido criado,então limpara o carrinho
      localStorage.clear();
      setCartItems([]);
      route.push("/qrcode-payment");
    } else {
      setLoading(false);
      onOpen();
      setTextModal("Erro ao criar pagamento, tente novamente mais tarde");
    }
  }

  // Lidar com rotas dos botões de edição
  function handleRouteEditUserData(): void {
    setCartFlow(path);
    route.push("/your-data");
  }

  function handleRouteEditAddressData(): void {
    setCartFlow(path);
    route.push("/shipping-data");
  }

  function handleRouteEditCartData(): void {
    setCartFlow(path);
    route.push("/shop-cart");
  }

  const totalCart=()=> {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    console.log(cartItems)
    const updatedSum = arrItens.reduce((acc: number, item: any) => {
      const cartItem = cartItems.find((cartItem) => cartItem._id === item.id);
      return acc + (cartItem?.preco || 0) * item.quantidade;
    }, 0);
    console.log(updatedSum)
    setSumCartItems(updatedSum);
  }

  // Limpando path cartFlow
  useEffect(() => {

    totalCart()

    const carrinho : string[] = JSON.parse(localStorage.getItem("cartItens") || "[]");

    setCartFlow("");
    console.log(user.email)
    console.log(address.cep)
    console.log(carrinho)
    // Caso atualize a página retornar para ao carrinho
    if (address.cep === "" || carrinho.length === 0 || user.email === "") {
      route.push("/shop-cart");
    }
  }, []);

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

      {address.cep !== "" || cartItems.length !== 0 || user.email !== "" ? (
        <div className="px-10 max-w-[1200px] mx-auto">
          <div className=" pb-10">
            <h1 className="text-2xl text-center m-10 underline underline-offset-8 decoration-wavy">Resumo do Pedido</h1>
          </div>
          <div className="py-3">
            <h2 className="text-2xl">Pedido</h2>
          </div>
          {/* Items do pedido */}
          <div className="mx-5">
            <div className="pb-5">
              <div className="my-3">
                {copyCartItems
                  ?.filter((item) => item.nome && item.preco) // Filter out items with empty or undefined properties
                  .map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex gap-2 justify-between">
                        <p>{item.nome}</p>
                        <p>{item.quantidade}x</p>
                    
                      
                      </div>
                      <p>
                        R$ {item.preco.toFixed(2).toString().replace(".", ",")}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Totais */}
              <div className="my-3">
                <div className="flex justify-between ">
                  <p>
                    <strong>Total dos Itens</strong>
                  </p>
                  <p>
                    <strong>
                      R$ {sumCartItems.toFixed(2).toString().replace(".", ",")}
                    
                    </strong>
                  </p>
                </div>

                {/* Frete */}
                {/* Total com ou sem frete */}
                <div className="flex justify-between my-3">
                  {/* Label */}
                  {freteInContext != undefined && isCombinarFrete ? (
                    <p>
                      <strong>Frete {isPac === "PAC" ? "PAC" : "SEDEX"}</strong>
                    </p>
                  ) : (
                    <p>
                      <strong>Frete a combinar</strong>
                    </p>
                  )}

                  {/* Valores Se tem frete via correios */}
                  {freteInContext != undefined && isCombinarFrete ? (
                    isPac == "PAC" ? (
                      <p>
                        <strong>
                          R${" "}
                          {freteInContext!=undefined && freteInContext.valorPac
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}
                        </strong>
                      </p>
                    ) : (
                      <p>
                        <strong>
                          R${" "}
                          {freteInContext.valorSedex
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}
                        </strong>
                      </p>
                    )
                  ) : (
                    <></>
                  )}
                </div>

                {/* Total carrinho com ou sem frete */}
                <div className="flex justify-between my-3">
                  {/* Label */}
                  {freteInContext != undefined && isCombinarFrete ? (
                    <p>
                      <strong>Total com frete</strong>
                    </p>
                  ) : (
                    <p></p>
                  )}

                  {/* Valores: Se frete é correios, PAC ou SEDEX */}
                  {freteInContext != undefined && isCombinarFrete ? (
                    isPac == "PAC" ? (
                      <p>
                        <strong>
                          R${" "}
                          {(freteInContext.valorPac + sumCartItems)
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}
                        </strong>
                      </p>
                    ) : (
                      <p>
                        <strong>
                          R${" "}
                          {(freteInContext.valorSedex + sumCartItems)
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}
                        </strong>
                      </p>
                    )
                  ) : (
                    <></>
                  )}
                </div>

                <div className="my-3 flex">
                  <Button
                    color="secondary"
                    variant="ghost"
                            className="shadow-sm hover:opacity-80"
                    onPress={handleRouteEditCartData}
                  >
                    Editar Carrinho
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {/* Dados de Envio */}
            <div className="my-10 flex flex-col gap-5">
              <div className="py-3">
                <h2 className="text-2xl">Dados de Envio</h2>
              </div>

              <div className="mx-5">
                <p>
                  {address.street}, {address.num}
                </p>
                <p>{address.neighborhood}</p>
                <p>{address.complement ? address.complement : ""}</p>
                <p>{address.cep}</p>
                <p>
                  {address.city} - {address.uf}
                </p>

                <div className="flex pt-10">
                  <Button
                    color="secondary"
                    variant="ghost"
                            className="shadow-sm hover:opacity-80"
                    onClick={handleRouteEditAddressData}
                  >
                    Editar Endereço
                  </Button>
                </div>
              </div>
            </div>

            {/* Dados do Cliente */}
            <div className="my-10 flex flex-col gap-5">
              <div className="py-3">
                <h2 className="text-2xl">Dados do Cliente</h2>
              </div>

              <div className="mx-5">
                <div>
                  <p>{user.name}</p>

                  <p>{user.phone}</p>
                  <p>{user.email}</p>
                </div>

                <div className="flex py-10">
                  <Button
                    color="secondary"
                    variant="ghost"
                    className="shadow-sm hover:opacity-80"
                    onClick={handleRouteEditUserData}
                  >
                    Editar Dados
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Pagamento */}
          {/* <Divider className="mb-20"/> */}
          <div className="py-3 pb-10">
            <h2 className="text-2xl">Forma de Pagamento</h2>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <RadioGroup defaultValue="pix" className="ml-3">
                <Radio
                  value="pix"
                  onClick={() => {
                    setSelectedOption("pix");
                  }}
                >
                  Pix
                </Radio>
                <Radio
                  value="creditCard"
                  onClick={() => {
                    setSelectedOption("creditCard");
                  }}
                >
                  Cartão de Crédito (via Whatsapp)
                </Radio>
              </RadioGroup>
            </div>
           
            <div className="">
              {selectedOption === "pix" && (
                <MyButton
                  color="green"
                  className="p-10 hover:opacity-80"
                  onClick={handleOrder}
                >
                  {loading ? <SpinnerForButton /> : "Prosseguir com PIX"}
                </MyButton>
              )}

              {selectedOption === "creditCard" && (
                <MyButton
                  color="green"
                  variant="ghost"
                  className="p-10 hover:opacity-80"
                  onClick={handleRedirectWhatsApp}
                >
                  Prosseguir com Cartão de Crédito
                </MyButton>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Spinner className="flex" />
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-4">
          {(onClose) => (
            <>
              <ModalBody>
                <p>{textModal}</p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>
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
