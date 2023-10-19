// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, Image, CardFooter, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { Produto } from "../lib/interface";
import { ProductContext } from "@/contexts/ProductContext/ProductContext";
import CartPlusIcon from "../assets/icons/CartPlusIcon";

interface ProductCardProps {
  data: Produto[] | undefined;
}

export default function ProductCard(product: ProductCardProps, ...props: any) {
  const route = useRouter();
  let itensCart: string[] = [];
  // Pegar os dados do produto que foi clicado pelo usuário (exibido no anúncio)
  const productAds = useContext(ProductContext);

  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  useEffect(() => {
    setProductData(product.data);
    // handleSeeLc();
  });

  // EM TESTES
  function handleClick(product: Produto) {
    console.log(product);

    productAds.setId(product._id);
    productAds.setName(product.nome);
    productAds.setCategory(product.categoria);
    productAds.setStock(product.estoque);
    productAds.setDescription(product.descricao.children.text);
    productAds.setPrice(product.preco);
    productAds.setWeight(product.peso);
    productAds.setLength(product.comprimento);
    productAds.setWidth(product.largura);
    productAds.setHeight(product.altura);
    productAds.setImage(product.imagem);
    productAds.setSlug(product.slug.current);

    route.push(`/advertisement/${product.slug.current}/${product._id}`);
  }

  const handleStorageProductCart = (id: string) => {
    //Estudar gestão do carrinho,pois tem lojas que permitem que o mesmo produto seja adicionado no carrinho,acrescentando na quantidade do produto
    itensCart.push(id);

    localStorage.setItem("cartItens", JSON.stringify(itensCart));

    //const b = JSON.parse(localStorage.getItem("cartItens"));
    //console.log(b);
  };
  const handleSeeLc = () => {
   // const a = JSON.parse(localStorage.getItem(`cartItens`));
   // itensCart = [];
  //  console.log(a);
  };

  return (
    <>
      <h1>Todos Produtos</h1>

      {productData?.map((product) => (
        <article key={product._id}>
          <Card
            className="py-4"
            isPressable
            onPress={() => handleClick(product)}
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
            <Link href="" onClick={() => handleStorageProductCart(product._id)}>
              <CartPlusIcon />
            </Link>

            {/* <div>
              {product.estoque == 0 ? (
                <p>Não há estoque deste Produto no momento</p>
              ) : (
                <CartPlusIcon
                  onClick={() => handleStorageProductCart(product._id)}
                />
              )}
            </div> */}
          </Card>
        </article>
      ))}
      {/* <Button onClick={(x) => handleSeeLc()}>See</Button>
      <Button onClick={(x) => localStorage.clear()}>Delete</Button> */}
    </>
  );
}
