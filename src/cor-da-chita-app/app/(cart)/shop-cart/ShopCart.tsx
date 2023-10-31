// EM ANDAMENTO
"use client";
import React, { useEffect, useState, useContext } from "react";
import CartCard from "@/components/CardCart-origi";
import { Produto } from "@/lib/interface";
import { CartContext } from "@/contexts/CartContext/CartContext";

export default function ShopCart(...props: any) {
  //const [productData, setProductData] = useState<Produto[] | undefined>([]);
  const { cart, setCart } = useContext(CartContext);

  const [itensCart, setItensCart] = useState<Produto[] | undefined>([]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    console.log(itens);
    setCart(itens);
    //setItensCart(itens);
    getData(itens);

    console.log(itens);
  }, []);

  //const getCartProducts = async () => {};
  return (
    <>
      {cart == null ? (
        <p>Ops, parece que seu carrinho esta vázio</p>
      ) : (
        cart?.map((idProduto) => <CartCard id={idProduto} />)
      )}

      {/* <section>
      <CartCard data={itensCart} />
    </section> */}
    </>
  );
}
