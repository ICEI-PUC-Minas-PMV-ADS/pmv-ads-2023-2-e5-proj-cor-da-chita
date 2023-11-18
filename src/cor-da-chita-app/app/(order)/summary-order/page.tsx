// Resumo do pedido
"use client";

import React, { useContext, useEffect, useState } from "react";
import ArrowLeft from "@/assets/icons/ArrowLeft";

import { Button, Divider, Link, Spinner } from "@nextui-org/react";
import { MyButton } from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

import postOrder from "@/database/order/postOrder";

import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { FreteContext } from "@/contexts/FreteContext/FreteContext";
import { CartContext } from "@/contexts/CartContext/CartContext";
import { PixContext } from "@/contexts/PixContext/PixContext";

export default function SummaryOrder() {
  const route = useRouter();
  const path = usePathname();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);

  const { cartItems, sumCartItems, copyCartItems } =
    useContext(CartItemsContext);
  const { cartFlow, setCartFlow } = useContext(CartContext);
  const {setPixId} = useContext(PixContext)
  const { freteInContext, isPac, isCombinarFrete } = useContext(FreteContext);

  const handleRedirectWhatsApp = () => {
    console.log(user);
    //%0a Serve para pular linha no whatsapp
    const typeFrete =
      isPac == "PAC" && !isCombinarFrete
        ? " pela modalidade de envio PAC:"
        : "pela modalidade de envio SEDEX:";
    let typeDelivery = `${
      isCombinarFrete ? "Combinando diretamente com você a entrega" : typeFrete
    }%0a`;

    let message =
      `Olá Cor da Chita,me chamo ${user.name} %0a Gostaria de comprar no cartão de crédito os seguintes produtos ` +
      typeDelivery;

    copyCartItems.map((product) => {
      //Verifica se é o ultimo item da lista para não inserir virgula no final
      message += ` ${product.quantidade} ${
        product.quantidade > 1 ? `Unidades` : `Unidade`
      } de ${product.nome},cada unidade custando R$${product.preco.toFixed(
        2
      )}%0a`;
    });

    message += `Preço Total:R$${sumCartItems.toFixed(2)}`;

    route.push(
      `https://api.whatsapp.com/send?phone=552700000000&text=${message}`
    );
  };

  // Enviar pedido
  async function  handleOrder () {
    // Somando dados da cubagem do pedido

    console.log(freteInContext)
    console.log(isPac)
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

    const freightMethod =
      isPac === "PAC" && !isCombinarFrete
        ? "PAC"
        : isPac === "SEDEX" && !isCombinarFrete
          ? "SEDEX"
          : !isPac && isCombinarFrete
            ? "Combinar com a vendedora"
            : "outro";

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
        freightValue: isPac=="PAC"?freteInContext.valorPac:freteInContext.valorSedex,
        freightMethod: freightMethod,
        
      },
      orderDate: new Date(),
      phoneNumber: user.phone,
      totalPriceProducts: sumCartItems
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

    
      const orderCreated = await postOrder(order);
      setPixId(orderCreated.orderPixId)

      route.push("/qrcode-payment")

    
   
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

  // Limpando path cartFlow
  useEffect(() => {
    setCartFlow("");

    // Caso atualize a página retornar para ao carrinho
    if (address.cep === "" || cartItems.length === 0 || user.email === "") {
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
        <div className="px-10 max-w-screen-lg ml-auto">
          <div className="font-serif pb-10">
            <h2 className="text-2xl">Resumo do Pedido</h2>
          </div>
          {/* Items do pedido */}
          <div className="mx-5">
            <div className="pb-5">
              <div className="my-3">
                {copyCartItems
                  ?.filter((item) => item.nome && item.preco) // Filter out items with empty or undefined properties
                  .map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <p>{item.nome}</p>
                      <p>{item.quantidade}x</p>
                      <p>R$ {item.preco.toFixed(2)}</p>
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
                    <strong>R$ {sumCartItems.toFixed(2)}</strong>
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
                        <strong>R$ {freteInContext.valorPac.toFixed(2)}</strong>
                      </p>
                    ) : (
                      <p>
                        <strong>
                          R$ {freteInContext.valorSedex.toFixed(2)}
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
                          {(freteInContext.valorPac + sumCartItems).toFixed(2)}
                        </strong>
                      </p>
                    ) : (
                      <p>
                        <strong>
                          R${" "}
                          {(freteInContext.valorSedex + sumCartItems).toFixed(
                            2
                          )}
                        </strong>
                      </p>
                    )
                  ) : (
                    <></>
                  )}
                </div>

                <div className="my-3">
                  <Button
                    color="secondary"
                    variant="ghost"
                    onPress={handleRouteEditCartData}
                  >
                    Editar Carrinho
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dados de Envio */}
          <div className="my-10">
            <div className="font-serif py-3">
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

              <div className="my-6">
                <Button
                  color="secondary"
                  variant="ghost"
                  onClick={handleRouteEditAddressData}
                >
                  Editar Endereço
                </Button>
              </div>
            </div>
          </div>

          {/* Dados do Cliente */}
          <div className="my-10">
            <div className="font-serif py-3">
              <h2 className="text-2xl">Seus Dados</h2>
            </div>

            <div className="mx-5">
              <div>
                <p>{user.name}</p>

                <p>{user.phone}</p>
                <p>{user.email}</p>
              </div>

              <div className="my-6">
                <Button
                  color="secondary"
                  variant="ghost"
                  onClick={handleRouteEditUserData}
                >
                  Editar Dados
                </Button>
              </div>
            </div>

            {/* Pagamento */}
            <div className="flex flex-col gap-3 my-5 items-center">
              <MyButton
                color="green"
                variant="flat"
                onClick={handleOrder}
                className="w-[400px]"
              >
                Pagar com PIX
              </MyButton>

              <MyButton
                color="green"
                variant="flat"
                className="w-[400px]"
                onClick={() => handleRedirectWhatsApp()}
              >
                Pagar com Cartão de Crédito
              </MyButton>
            </div>

          
          </div>
        </div>
      ) : (
        <Spinner className="flex" />
      )}
    </>
  );
}
