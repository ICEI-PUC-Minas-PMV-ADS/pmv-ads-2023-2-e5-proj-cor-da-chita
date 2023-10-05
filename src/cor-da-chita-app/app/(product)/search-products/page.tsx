// Dados do usuário na tela na finalização da compra
"use client";
import React, { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { client } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { Produto } from "@/lib/interface";

export default function SearchProducts(props: any) {
  const [produtos, setProdutos] = useState<Produto[]>();
  const [nomeProduto, setNomeProduto] = useState<string>();

  const searchByName = async () => {
    //Analisar este metodo,pois o match pega somente as duas primeiras letras
    const query = ` * [type == "produto" && nome match "${nomeProduto}*"]{
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

    setProdutos(data);
  };
  const searchByCategory = async () => {
    //Pega as 2 primeiras letras da categoria e realiza a busca
    //   const query = ` * [type == "produto" && categoria match "${categorias[0]}${categorias[1]}*"]{
    //     _id,
    //     nome,
    //     categoria,
    //     descricao,
    //     estoque,
    //     preco,
    //     peso,
    //     comprimento,
    //     largura,
    //     altura,
    //     data,
    //     'imagem':imagem.asset->url,
    //  }`;
    const query = ` * [type == "produto"]{
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
    console.log(data);
  };

  useEffect(() => {
    getThisData();
  }, []);

  return (
    <>
      <div>
        <Input
          value={nomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
        />
        <Button color="success" onClick={() => console.log("oiiiiii")}>
          Buscar
        </Button>
        {/* <ul>
          {produtos.map((produto: any) => {
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
        </ul> */}
      </div>
    </>
  );
}
