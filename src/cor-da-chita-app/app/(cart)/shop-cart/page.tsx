// EM ANDAMENTO
"use client";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import CartCard from "@/components/CardCart";
import { Produto } from "@/lib/interface";
import { UserContext } from "@/contexts/UserContext/UserContext";

export default function ShopCart(...props: any) {
  const [productData, setProductData] = useState<Produto[] | undefined>([]);
  const { cart, setCart } = useContext(UserContext);

  const [itensCart, setItensCart] = useState<string[] | undefined>([]);
  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("cartItens"));
    setCart(carrinho);
  }, []);

  const getCartProducts = async () => {};

  return (
    <>
      {cart == null ? (
        <p>Ops,parece que seu carrinho esta vázio</p>
      ) : (
        cart?.map((idProduto) => <CartCard id={idProduto} />)
      )}
    </>
  );
}
