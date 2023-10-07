// EM TESTES
// Tela do anúncio individual de um  produto
"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductAdvertisement() {
  return (
    <section>
      <h1>Tela de anúncio do produto aqui</h1>
      <div>
        <p>Foto aqui</p>
      </div>
      <div>
        <p>Nome</p>
        <p>Descrição</p>
        <p>Tamanho</p>
      </div>
      <div>
        <Button color="success" variant="solid">
          Adicionar ao Carrinho
        </Button>
      </div>
    </section>
  );
}
