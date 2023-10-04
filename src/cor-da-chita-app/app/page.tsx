import { PortableText } from "@portabletext/react";
import Header from "../components/Header";
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { Produto } from "../lib/interface";
import { client } from "../lib/sanity";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

// const getData = async () => {
//   //AQUI REALIZA UM QUERY SIMPLES E PEGA OS PRODUTOS CRIADOS,AONDE
//   try {
//     // const query = ` {
//     //   _id,
//     //   nome,
//     //   categoria,
//     //   descricao,
//     //   estoque,
//     //   'imagem':imagem.asset->url
//     // }`;

//     const query = `* [_type == "produto"]{
//       _id,
//       nome,
//       categoria,
//       descricao,
//       estoque,
//       preco,
//       peso,
//       comprimento,
//       largura,
//       altura,
//       data,
//       'imagem':imagem.asset->url,
//     }`;

//     const data = await client.fetch(query);

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
//AINDA PRECISANDO RESOLVER,POIS NÃO ESTA RETORANDDO O QRCODE BASE 64,PARA SER MOSTRADO NA TELA
//const renderMp = () => {
//   var mercadopago = require('mercadopago');
//   mercadopago.configure({
//     access_token:"TEST-1074535318686097-092619-545cf67bb565d300b36dfe7e46f5eae4-238459047"
//   })
//   // mercadopago.configurations.setAccessToken("TEST-1074535318686097-092619-545cf67bb565d300b36dfe7e46f5eae4-238459047");
//   var payment_data = {
//     transaction_amount: 1000,
//     description: 'Título do produto',
//     payment_method_id: 'pix',
//     payer: {
//       email: 'bielpuneco@gmail.com',
//       first_name: 'Test',
//       last_name: 'User',
//       identification: {
//           type: 'CPF',
//           number: '19119119100'
//       },
//       address:  {
//           zip_code: '06233200',
//           street_name: 'Av. das Nações Unidas',
//           street_number: '3003',
//           neighborhood: 'Bonfim',
//           city: 'Osasco',
//           federal_unit: 'SP'
//       }
//     }
//   };
// //  mercadopago.payment.create(payment_data).then(x=>console.log(x)).catch(e=>console.log(e))
// var mercadopago = require("mercadopago");
// mercadopago.configure({
//   access_token:
//     "TEST-1074535318686097-092619-545cf67bb565d300b36dfe7e46f5eae4-238459047",
// });
// var payment_data = {
//   transaction_amount: 100,
//   description: "Título do produto",
//   payment_method_id: "pix",
//   payer: {
//     email: "bielpuneco@gmail.com",
//     first_name: "Gabriel",
//     last_name: "costa",
//     identification: {
//       type: "CPF",
//       number: "19119119100",
//     },
//     address: {
//       zip_code: "06233200",
//       street_name: "Av. das Nações Unidas",
//       street_number: "3003",
//       neighborhood: "Bonfim",
//       city: "Osasco",
//       federal_unit: "SP",
//     },
//   },
// };
// mercadopago.payment
//   .create(payment_data)
//   .then((x) => console.log(x))
//   .catch((e) => console.log(e));
//};

export default function Page() {
  //const data = (await getData()) as Produto[];
  //console.log(data);
  return (
    <>
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold  tracking-tight text-blue-600 md:leading-14 text-center">
            {/* Todos produtos */}
          </h1>
        </div>
        {/* <Link href="/user-data">User Data</Link> */}
        {/* <ul>
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
        </ul> */}
      </div>
    </>
  );
}
