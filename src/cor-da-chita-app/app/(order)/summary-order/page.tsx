// EM TESTES
// Dados do pedido na finalização da compra
"use client";
import React, { useContext, useEffect } from "react";

import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { UserContext } from "@/contexts/UserContext/UserContext";
import postOrder from "@/database/order/postOrder";

export default function SummaryOrder() {
  const route = useRouter();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);

  {
    /* <p>{user.name}</p>
          <p>
            {address.street}, {address.num}
          </p>
          <p>{address.neighborhood}</p>
          <p>{address.complement ? address.complement : ""}</p>
          <p>{address.cep}</p>
          <p>
            {address.city} - {address.uf}
          </p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div> */
  }

  function handleOrder() {
    const order = {
      items: [
        {
          productId: "6542a425fd304a865bb986f0",
          productName: "TESTE 1",
          productPrice: 29
        }
      ],
      userName: user.name,      
      userEmail: user.email,
      street: address.street,
      neighborhood: address.neighborhood,
      num: address.num,
      city: address.city,
      uf: address.uf,
      cep: address.cep,
      complement: address.complement,
      freight: {
        totalWithFreight: 10,
        freightValue: 10,
      },
      orderPixId: 5555513245,
      orderDate: "2023-11-04T14:13:00.684Z",
      phoneNumber: user.phone,
    };
    
    const fetchData = async () => {
      const data = await postOrder(order);
      console.log(data);

      return data;
    };
    fetchData();
  }

  //useEffect(() => {}, []);

  return (
    <section>
      <article>
        <h2>Resumo do Pedido</h2>

        <div>
          <p>Produto 1</p>
          <p>preço</p>
          <p>Produto 2</p>
          <p>preço</p>
          <p>Produto 3</p>
          <p>preço</p>

          <Divider />
          <div>
            <p>Dados de Envio</p>
            <p>Frete</p>
            <p>Total com Frete</p>
          </div>
        </div>

        <div>
          <Button color="success" variant="ghost">
            Editar Carrinho
          </Button>
        </div>
      </article>

      <Divider />

      <article>
        <h2>Seus Dados</h2>

        <div>
          <p>{user.name}</p>
          <p>
            {address.street}, {address.num}
          </p>
          <p>{address.neighborhood}</p>
          <p>{address.complement ? address.complement : ""}</p>
          <p>{address.cep}</p>
          <p>
            {address.city} - {address.uf}
          </p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>

        <div>
          <Button color="success" variant="ghost" onClick={() => route.back()}>
            Editar Dados
          </Button>
        </div>
      </article>

      <Divider />

      <article>
        <h2>Modo de Pagamento</h2>

        <div>
          <Button
            color="success"
            variant="solid"
            onClick={() => alert("Programar PIX")}
          >
            Pagar com <strong>PIX</strong>
          </Button>
          <Button
            color="success"
            variant="solid"
            onClick={() => alert("Programar Cartão")}
          >
            Pagar com <strong>Cartão de Crédito</strong>
          </Button>
        </div>
        <Button color="primary" onClick={handleOrder}>
          Botao para Teste API
        </Button>
      </article>
    </section>
  );
}
