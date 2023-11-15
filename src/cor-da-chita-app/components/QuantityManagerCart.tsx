// Controla a quantidade do item no carrinho dentro da page Shop-Cart
import React, { useContext, useEffect, useState } from "react";
import { Button } from  "@nextui-org/react"

import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

export default function QuantityManagerCart({ handleRemoveItemCart, ...props }: any) {
  const { setSumCartItems } = useContext(CartItemsContext);
  const { cartItems } = useContext(CartItemsContext);
  const [quantidade, setQuantidade] = useState<number>(0);

  // Atualiza a quantidade com os itens vindo do local storage e preço vindo do banco
  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    // Acumula soma inicial
    let sum = 0;
    if (item && item.quantidade != undefined) {
      const cartItem = cartItems.find((ci) => ci?._id === item?.id);
      if (cartItem) {
        sum += item.quantidade * cartItem.preco || 0;
        setSumCartItems(sum);
      }
    }
    
    if (item) {
      setQuantidade(item.quantidade);
    }
  }, [cartItems]);

// Soma quantidade do item no carrinho e altera valor do carrinho
const handleIncreaseQuantity = () => {
  const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

  // Index no local storage
  const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

  // Se o item está no carrinho
  if (indexItem !== -1) {
    arrItens[indexItem].quantidade += 1;

    localStorage.setItem("cartItens", JSON.stringify(arrItens));

    const updatedSum = arrItens.reduce((acc: number, item: any) => {
      const cartItem = cartItems.find((cartItem) => cartItem && cartItem._id === item.id);
      return acc + (cartItem?.preco || 0) * item.quantidade;
    }, 0);

    setSumCartItems(updatedSum);

    setQuantidade(arrItens[indexItem].quantidade);
  }
};

// Diminuiu a quantidade do item no carrinho e altera valor do carrinho
const handleDecreaseQuantity = () => {
  const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

  // Index no local storage
  const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

  // Se o item está no carrinho e a quantidade é maior que 1
  if (indexItem !== -1 && arrItens[indexItem].quantidade > 1) {
    arrItens[indexItem].quantidade -= 1;

    localStorage.setItem("cartItens", JSON.stringify(arrItens));

    // Recalcule a soma total do carrinho
    const updatedSum = arrItens.reduce((acc: number, item: any) => {
      const cartItem = cartItems.find((cartItem) => cartItem && cartItem._id === item.id);
      return acc + (cartItem?.preco || 0) * item.quantidade;
    }, 0);

    setSumCartItems(updatedSum);

    setQuantidade(quantidade - 1);
  } else {
    // If the quantity is 1, remove the item from the cart
    const itemName = cartItems.find((cartItem) => cartItem._id === props.id)?.nome || "";
    handleRemoveItemCart(props.id, itemName);

    // Optionally, reset the quantity to 0
    setQuantidade(0);
  }
};



return (
  <div className="flex items-center gap-5">
    <Button
      isIconOnly
      className="text-white"
      color="secondary"
      onClick={() => handleDecreaseQuantity()}
    >
      <IconMinusSquare  />
    </Button>

    <span className="">{quantidade}</span>

    <Button
      isIconOnly
      className="text-white"
      color="success"
      onClick={() => handleIncreaseQuantity()}
    >
      <IconPlusSquare />
    </Button>
  </div>
);
}