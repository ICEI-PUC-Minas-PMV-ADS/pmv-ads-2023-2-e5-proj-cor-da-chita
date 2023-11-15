// Resumo do pedido
"use client";

import React, { useContext, useEffect } from "react";

import { Button, Divider } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

import postOrder from "@/database/order/postOrder";

import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { FreteContext } from "@/contexts/FreteContext/FreteContext";

export default function SummaryOrder() {
  const route = useRouter();
  const path = usePathname();
  console.log(path);

  const user = useContext(UserContext);
  const address = useContext(AddressContext);
  const { cartItems, sumCartItems } = useContext(CartItemsContext);
  
  const { freteInContext, isPac, isCombinarFrete } = useContext(FreteContext);




const handleRedirectWhatsApp = ()=>{


  const typeFrete = isPac=="PAC" && !isCombinarFrete ?"pela modalidade de envio PAC:":"pela modalidade de envio SEDEX:"
  let typeDelivery = `${isCombinarFrete?"Combinando diretamente com você a entrega":typeFrete}`

  let message = `Olá Cor da Chita, gostaria de comprar no cartão de crédito os seguintes produtos `+ typeDelivery

cartItems.map((product)=>{
  //Verifica se é o ultimo item da lista para não inserir virgula no final
  if(product==cartItems[cartItems.length-1]){
    message+=` ${product.quantidade} ${product.quantidade>1?`Unidades`:`Unidade`} de ${product.nome}.`
  }
  else{

    message+=` ${product.quantidade} ${product.quantidade>1?`Unidades`:`Unidade`} de ${product.nome},`
  }
})

console.log(message)

//  route.push(`https://api.whatsapp.com/send?phone=5583987261972&text=${message}`)
  
}

  // Enviar pedido
  function handleOrder() {
    // Somando dados da cubagem do pedido
    const totalWithFreightSum = cartItems.reduce(
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

    const totalWheightFreight = cartItems.reduce(
      (sum, item) => sum + item.peso,
      0
    );

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
        totalWithFreight: totalWithFreightSum,
        totalHeightFreight: totalHeightFreight,
        totalLengthFreight: totalLengthFreight,
        totalWheightFreight: totalWheightFreight,
        freightValue: 0,
      },
      orderPixId: 5555513245,
      orderDate: new Date(),
      phoneNumber: user.phone,
    };

    // Itens do Pedido
    cartItems.forEach((item) => {
      const newItem = {
        productId: item._id.trim(),
        productName: item.nome.trim(),
        productPrice: item.preco,
      };

      order.items.push(newItem);
    });

    const fetchData = async () => {
      const data = await postOrder(order);
      console.log(data);

      return data;
    };
    fetchData();
  }

  return (
    <section className="flex flex-col">
      <h2 className="place-self-center">
        <strong>Resumo do Pedido</strong>
      </h2>

      {/* Items do pedido */}
      <div className="my-5">
        {cartItems?.map((item, index) => (
          <div key={index} className="flex justify-between">
            <p>{item.nome}</p>
            <p>
              <strong>R$</strong> {item.preco.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Totais */}
      <div className="mb-5">
        <div>
          <div className="flex justify-between ">
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>R$</strong> {sumCartItems.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <p>
            <strong>Frete</strong>
          </p>
          <p>
            <strong>R$ </strong>
            {freteInContext != undefined && isCombinarFrete ? (
              isPac == "PAC" ? (
                freteInContext.valorPac.toFixed(2)
              ) : (
                freteInContext.valorSedex.toFixed(2)
              )
            ) : (
              <>0,00</>
            )}
          </p>
        </div>

        <div className="flex justify-between mt-2">
          <p>
            <strong>Total com Frete</strong>
          </p>
          <p>
            <strong>R$ </strong>
            {freteInContext != undefined && isCombinarFrete ? (
              isPac == "PAC" ? (
                (freteInContext.valorPac + sumCartItems).toFixed(2)
              ) : (
                (freteInContext.valorSedex + sumCartItems).toFixed(2)
              )
            ) : (
              <>0,00</>
            )}
          </p>
        </div>

        <div className="mt-2">
          {/* Revisar Fluxo aqui */}
          <Button
            color="success"
            variant="ghost"
            onPress={() => route.push("/shop-cart")}
          >
            Editar Carrinho
          </Button>
        </div>
      </div>

      <Divider />

      {/* Dados de Envio */}
      <div className="my-5">
        <h2 className="mb-2">
          <strong>Dados de Envio</strong>
        </h2>
        <p>
          {address.street}, {address.num}
        </p>
        <p>{address.neighborhood}</p>
        <p>{address.complement ? address.complement : ""}</p>
        <p>{address.cep}</p>
        <p>
          {address.city} - {address.uf}
        </p>

        <div className="mt-2">
          <Button color="success" variant="ghost" onClick={() => route.back()}>
            Editar Endereço
          </Button>
        </div>
      </div>

      <Divider />

      {/* Dados do Cliente */}
      <div className="my-5">
        <h2 className="mb-2">
          <strong>Seus Dados</strong>
        </h2>

        <div>
          <p>{user.name}</p>

          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>

        <div className="mt-2">
          <Button
            color="success"
            variant="ghost"
            onClick={() => route.push("/your-data")}
          >
            Editar Dados
          </Button>
        </div>
      </div>

      <Divider />

      {/* Pagamento */}
      <div className="flex flex-col gap-3 my-5">
        <h2 className="mb-2">
          <strong>Modo de Pagamento</strong>
        </h2>

        <Button
          className="mx-20"
          color="success"
          variant="solid"
          onClick={() => alert("Programar PIX")}
        >
          Pagar com <strong>PIX</strong>
        </Button>

        <Button
          className="mx-12"
          color="success"
          variant="solid"
          onClick={() => handleRedirectWhatsApp()}
        >
          Pagar com <strong>Cartão de Crédito</strong>
        </Button>
      </div>

      <Button color="primary" onClick={handleOrder}>
        Botao para Teste API
      </Button>
    </section>
  );
}
