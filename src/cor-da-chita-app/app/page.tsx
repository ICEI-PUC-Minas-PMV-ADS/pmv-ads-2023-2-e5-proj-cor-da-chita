"use client";
import { PortableText } from "@portabletext/react";
import Header from "./components/Header";
import { Produto } from "./lib/interface";
import { client } from "./lib/sanity";

const getData = async () => {
  //AQUI REALIZA UM QUERY SIMPLES E PEGA OS PRODUTOS CRIADOS,AONDE
  try {
    // const query = ` {
    //   _id,
    //   nome,
    //   categoria,
    //   descricao,
    //   estoque,
    //   'imagem':imagem.asset->url
    // }`;

    const query = `* [_type == "produto"]{           
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

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export default async function Home() {
  const data = (await getData()) as Produto[];
  console.log(data);

  return (
    <>
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold  tracking-tight text-blue-600 md:leading-14 text-center">
            Todos produtos
          </h1>
        </div>

        <ul>
          {data.map((produto) => {
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
