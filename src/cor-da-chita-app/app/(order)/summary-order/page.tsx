// EM TESTES
// Dados do pedido na finalização da compra
"use client";
import React, { useContext, useEffect } from "react";

import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { UserContext } from "@/contexts/UserContext/UserContext";

export default function SummaryOrder() {
  const route = useRouter();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);

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
          <p>Dados de Envio</p>
          <p>Frete</p>
          <p>Total com Frete</p>
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
          <p> {address.neighborhood}</p>
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
      </article>
    </section>
  );
}
