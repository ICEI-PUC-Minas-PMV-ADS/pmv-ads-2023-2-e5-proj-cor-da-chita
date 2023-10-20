// EM ANDAMENTO
"use client";
import React, {
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import CartCard from "@/components/CardCart";
import { Produto } from "@/lib/interface";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartContext } from "@/contexts/CartContext/CartContext";
import getProductDataCart from "@/database/products/getProductDataCart";

async function getData(
  itemId: string,
  setCart: Dispatch<SetStateAction<Produto[] | undefined>>
) {
  const data = (await getProductDataCart(itemId)) as Produto[];

  setCart(data);
}

export default function ShopCart(...props: any) {
  //const [productData, setProductData] = useState<Produto[] | undefined>([]);
  const { cart, setCart } = useContext(CartContext);

  //const [itensCart, setItensCart] = useState<Produto[] | undefined>([]);
  const arrItemId: any = [];

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("itensCart") || "[]");
    //setCart(itens);
    //setItensCart(itens);

    itens.map((itemId: string) => getData(itemId, setCart));
    //setItensCart(itens);
    console.log(cart);
  }, []);

  //const getCartProducts = async () => {};

  return (
    <>
      {cart == null ? (
        <p>Ops, parece que seu carrinho esta vázio</p>
      ) : (
        cart?.map(() => <CartCard />)
      )}
    </>
    // <section>
    //   <CartCard data={itensCart} />
    // </section>
  );
}
