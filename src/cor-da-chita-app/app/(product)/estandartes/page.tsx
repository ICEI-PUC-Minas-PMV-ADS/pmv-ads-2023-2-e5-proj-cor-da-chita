// REVER NECESSIDADE DESSA TELA

"use client";
import React, { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { client } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { Produto } from "@/lib/interface";

export default function Estandartes(props: any) {
  const [produtos, setProdutos] = useState<Produto[]>();
  const [nomeProduto, setNomeProduto] = useState<string>();

  const searchByCategory = async () => {
   
    const query = ` *[_type == "produto" &&  categoria == 'Estandartes']{
      _id,
      nome,
      categoria,
      descricao,      
      estoque,
      preco,
      peso,
      comprimento,
      largura,
      altura,
      data,
      'imagem':imagem.asset->url, 
   }`;
    const data = await client.fetch(query).then().catch();
    console.log(data);
    return data;
  };

  const getThisData = async () => {
    console.log("foiiii");
    const data = (await searchByCategory()) as Produto[];
    setProdutos(data)
    console.log(produtos)
  };

  useEffect(() => {
    getThisData();
  }, []);

  return (
    <>
      <div>
       
        
        <ul>
          { produtos!=undefined && produtos.map((produto: any) => {
            return (
              <li key={produto._id}>
                <article>
                  <p>Nome: {produto.nome}</p>
                  <p>Categoria: {produto.categoria}</p>
                  <div>
                    Descrição:
                    <PortableText value={produto.descricao} />
                  </div>
                  <p>Estoque: {produto.estoque} un</p>
                  <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                  <p>Peso: {produto.peso}g</p>
                  <p>Comprimento: {produto.comprimento}cm</p>
                  <p>Largura: {produto.largura}cm</p>
                  <p>Altura: {produto.altura}cm</p>

                  <img className="w-44 pb-8" src={produto.imagem} />
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
