// Dados do usuário na tela na finalização da compra
"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

export default function SearchPage(props: any) {
    const [produtos,setProdutos] = useState<any>();
  const [nomeProduto, setNomeProduto] = useState<string>();
    const categorias = [
        {label: "Estandartes", value: "estandartes"},
        {label: "Cama e Mesa", value: "cama e mesa"},
        {label: "EcoBags e Carteiras", value: "ecobags e carteiras"},
        {label: "Natalinos", value: "natalinos"},
        {label: "Outros", value: "outros",}]




const searchByName = async()=>{
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
 }`


 const data = await client.fetch(query).then().catch()

 setProdutos(data)
}
const searchByCategory = async()=>{
//Pega as 2 primeiras letras da categoria e realiza a busca
    const query = ` * [type == "produto" && nome match "${categorias[0]}${categorias[1]}*"]{
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
    }`
   
   
    const data = await client.fetch(query).then().catch()
   
    setProdutos(data)
   }
  return (
    <>
     <div>


     <Select
     isRequired
      label="Favorite Animal"
      placeholder="Select an animal"

      className="max-w-xs"
    >
      {categorias.map((categoria) => (
        <SelectItem key={categoria.value} value={categoria.value}>
          {categoria.label}
        </SelectItem>
      ))}
    </Select>
        <Input  value={nomeProduto} onChange={e=>setNomeProduto(e.target.value)}  />
<Button color="success" onClick={searchByName}>Buscar</Button>
        <ul>
          {produtos.map((produto) => {
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
