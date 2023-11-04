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

// async function getData(
//   itemId: string,
//   setCart: Dispatch<SetStateAction<Produto[] | undefined>>
// ) {
//   const data = (await getProductDataCart(itemId)) as Produto[];

//   setCart(data);
// }

export default function ShopCart(...props: any) {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  //const [itemCart, setItemCart] = useState<Produto[] | undefined>();

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    console.log(arrItens);
    setCart(arrItens)
    //setItemCart(arrItens);
  }, []);

  return (
    <>
      {!cart.length ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        cart?.map((idItem :string) => <CardCart id={idItem} />)
      )}
      <div>
        <Button color="success" onPress={() => router.push("/your-data")}>
          Finalizar Pedido
        </Button>
      </div>
    </>
  );
}
