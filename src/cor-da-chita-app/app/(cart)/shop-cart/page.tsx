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

import CardCart from "@/components/CardCart";
import { Produto } from "@/lib/interface";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartContext } from "@/contexts/CartContext/CartContext";
import getProductDataCart from "@/database/products/getProductDataById";
import { useRouter } from "next/navigation";

export default function ShopCart(...props: any) {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    console.log(arrItens);
    setCart(arrItens);
  }, []);

  //  function handleOrder() {
  //   item?.map((item) => console.log(item));
  //   if (item != null) {
  //     item.map((item) => setCartItems(item));
  //   }
  // }
  //}

  return (
    <>
      {!cart.length ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        cart?.map((idItem: string) => <CardCart id={idItem} />)
      )}
      <div>
        <Button color="success" onPress={() => router.push("/your-data")}>
          Finalizar Pedido
        </Button>
      </div>
    </>
  );
}
