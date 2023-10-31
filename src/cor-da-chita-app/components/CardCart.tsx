// EM ANDAMENTO

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import { Produto } from "@/lib/interface";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
import { client } from "../lib/sanity";
import { CartContext } from "@/contexts/CartContext/CartContext";
import QuantityManagerCart from "./QuantityManagerCart";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import ProductContext from "@/contexts/ProductContext/ProductContext";

interface ItensCartProps {
  item: Produto[] | undefined;
}

export default function CardCartTest({ ...props }) {
  const { cart, setCart } = useContext(CartContext);

  const [itemData, setItemData] = useState({});

  useEffect(() => {
    // const carrinho = JSON.parse(localStorage.getItem('cartItens'))
    getProduct(props.id);

    console.log(cart);
  }, []);

  const getProduct = async (idProduto: string) => {
    try {
      const query = `*[_type == "produto" && _id == $id]{
        _id,
        nome,
        categoria,        
      }`;
      // Esta é á forma correta de concatenar o parametro de id com a query pois utilizando a interpolação com ${} não funciona
      const params = { id: idProduto };

      const data = await client.fetch(query, params);
      console.log(data[0]._id);
      setCart(data);
      console.log(cart);

      console.log(itemData);

      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <article className="bg-zinc-600 ">
        <Card isBlurred className="w-11" shadow="md">
          <CardBody>
            <div className="flex flex-col w-full">
              <div className="flex items-start w-full mt-4 ">
                <Image
                  alt="Album cover"
                  className="h-20"
                  height={150}
                  width={150}
                  shadow="md"
                  src={""}
                />

                <div className="flex flex-col">
                  <p className="font-semibold font-sans mt-2 ml-2  ">
                    {"nome"}
                  </p>
                  <p className="font-semibold font-sans mt-2 ml-2 ">
                    {"categoria"}
                  </p>
                  <p className="font-semibold font-sans mt-2  ml-2">
                    R$ {"preco?.toFixed(2)"}
                  </p>
                  <QuantityManagerCart />
                </div>
                <ButtonOnlyIcon
                  className="h-9 mt-2 ml-2 bg-red-500"
                  isIconOnly
                  // onClick={() => handleRemoveItemCart(id)}
                >
                  <IconBagX />
                </ButtonOnlyIcon>

                {/* <Button onClick={(x) => handleSeeLc()}>seeee</Button> */}
              </div>
            </div>
          </CardBody>
        </Card>
      </article>
      <div>
        {/* <Button onClick={(x) => handleSeeLc()}>See</Button>
        <Button onClick={(x) => localStorage.clear()}>Delete</Button>
        <IconPlusSquare /> */}
      </div>
    </>
  );
}
