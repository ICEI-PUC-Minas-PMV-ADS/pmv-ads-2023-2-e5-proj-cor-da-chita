// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, Image, CardFooter, Link } from "@nextui-org/react";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
import CartPlusIcon from "../assets/icons/CartPlusIcon";
import { Produto } from "../lib/interface";
import { useRouter } from "next/navigation";
import { ProductContext } from "@/contexts/ProductContext/ProductContext";

interface ProductCardProps {
  data: Produto[] | undefined;
}

export default function ProductCard(product: ProductCardProps, ...props: any) {
  const route = useRouter();
  const itensCart :string[] = []
  // Pegar os dados do produto que foi clicado pelo usuário (exibido no anúncio)
  const productAds = useContext(ProductContext);

  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  useEffect(() => {
    setProductData(product.data);
  });

  // EM TESTES
  function handleClick(product: Produto) {
    console.log(product);

    productAds.setId(product._id);
    productAds.setName(product.nome);
    productAds.setCategory(product.categoria);
    //productAds.setDescription(product.descricao); // ERRO AQUI
    productAds.setPrice(product.preco);
    productAds.setWeight(product.peso);
    productAds.setLength(product.comprimento);
    productAds.setWidth(product.largura);
    productAds.setHeight(product.altura);
    productAds.setImage(product.imagem);
    productAds.setSlug(product.slug.current);

    // Vazio
    //console.log(productAds);

    route.push(`/advertisement/${product.slug.current}/${product._id}`);
  }

  const handleStorageProductCart= (id:string)=>
  {


    console.log(id)
itensCart.push(id)
localStorage.setItem('cartItens',JSON.stringify(itensCart))


  }
const handleSee = ()=>{

const itens = JSON.parse(localStorage.getItem('CartItens'))
console.log(itens)
}
  return (
    <>
      <h1>Todos Produtos</h1>
      <button onClick={()=>handleSee()}>aaaaaaaaaa</button>
      {productData?.map((product) => (
        <article key={product._id}>
          <Card
            className="py-4"
            isPressable
            onPress={() => {
              handleClick(product);
            }}
          >
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={product.imagem}
                width={180}
                height={180}
              />
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="font-bold text-medium">{product.nome}</p>
                <small className="text-500">
                  R$ {product.preco.toFixed(2)}
                </small>
              </CardFooter>
            </CardBody>
            {/* Usar o Link para esse botão, pois o HTML da warning ao usar botão dentro de botão (o card é pressionável). Estilizar para ficar como um botão */}
            <div>
              
                <CartPlusIcon onClick={() =>handleStorageProductCart(product._id)}/>
              
            </div>
          </Card>
        </article>
      ))}
    </>
  );
}
