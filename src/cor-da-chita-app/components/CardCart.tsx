// EM ANDAMENTO

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import { Produto } from "@/lib/interface";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
import { client } from "../lib/sanity";
import { UserContext } from "@/contexts/UserContext/UserContext";
export default function CardCart(id: string) {
  const produto: any = [];

  const { cart, setCart } = useContext(UserContext);
  const [nome, setNome] = useState<string>();
  const [categoria, setCategoria] = useState<string>();
  const [preco, setPreco] = useState<number>();
  const [imagemProduto, setImagemProduto] = useState<any>();

  const handleRemoveItemCart = (idProduto: string) => {
    const carrinho = JSON.parse(localStorage.getItem("cartItens"));
    setCart(carrinho);
    //Precisa pegar a propriedade id  pois o id do produto esta vindo como objecto com uma propriedade id
    //Realiza um filtro para remover somente o id do produto que o usuário excluiu do carrinho

    if (cart.length == 1) {
      setCart(null);
    }
    const newListCart = cart.filter((x) => !(x == idProduto.id));

    setCart(newListCart);

    localStorage.setItem("cartItens", JSON.stringify(cart));
  };
  const handleSeeLc = () => {
    const a = JSON.parse(localStorage.getItem(`cartItens`));
    console.log(a);
  };
  useEffect(() => {
    // const carrinho = JSON.parse(localStorage.getItem('cartItens'))
    // console.log(carrinho)
    getProduct(id);
  }, []);

  const getProduct = async (idProduto: string) => {
    try {
      const query = `*[_type == "produto" && _id == $id]{
        _id,
        nome,
        categoria,
        descricao,
        preco,
        peso,
        comprimento,
        largura,
        altura,
        'imagem':imagem.asset->url,
        slug   
      }`;
      //Esta é á forma correta de concatenar o parametro de id com a query pois utilizando a interpolação com ${} não funciona
      const params = { id: idProduto.id };

      const data = await client.fetch(query, params);
      console.log(data[0].imagem);
      setImagemProduto(data[0].imagem);
      setNome(data[0].nome);
      setCategoria(data[0].categoria);
      setPreco(data[0].preco);

      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-zinc-600 ">
      <Card isBlurred className="w-11" shadow="md">
        <CardBody>
          <div className="flex flex-col w-full">
            <div className="flex  items-start w-full mt-4 ">
              <Image
                alt="Album cover"
                className="h-20"
                height={200}
                shadow="md"
                src={imagemProduto}
                width="20%"
              />

              <div className="flex flex-col">
                <p className="font-semibold font-sans mt-2 ml-2  ">{nome}</p>
                <p className="font-semibold font-sans mt-2 ml-2 ">
                  {categoria}
                </p>
                <p className="font-semibold font-sans mt-2  ml-2">
                  R$ {preco?.toFixed(2)}
                </p>
              </div>
              <ButtonOnlyIcon
                className="h-9 mt-2"
                isIconOnly
                color="danger"
                onClick={() => handleRemoveItemCart(id)}
              >
                <IconBagX />
              </ButtonOnlyIcon>
              <Button onClick={(x) => handleSeeLc()}>seeee</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
