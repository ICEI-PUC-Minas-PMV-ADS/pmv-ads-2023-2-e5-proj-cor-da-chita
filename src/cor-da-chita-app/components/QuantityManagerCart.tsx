// Controla a quantidade do item no carrinho dentro da page Shop-Cart
import React, { useContext, useEffect, useState } from "react";

import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

export default function QuantityManagerCart({ ...props }: any) {
  const { setSumCartItems } = useContext(CartItemsContext);
  const { cartItems } = useContext(CartItemsContext);
  const [quantidade, setQuantidade] = useState<number>(0);

  // Atualiza a quantidade com os itens vindo do local storage e preço vindo do banco
  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    // Acumula soma inicial
    let sum = 0;
    cartItems.forEach((element) => {
      const item = arrItens.find((item: any) => item.id === element._id);
      sum += item.quantidade * element.preco;
      setSumCartItems(sum);
    });

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
        const cartItem = cartItems.find((cartItem) => cartItem._id === item.id);
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
        const cartItem = cartItems.find((cartItem) => cartItem._id === item.id);
        return acc + (cartItem?.preco || 0) * item.quantidade;
      }, 0);

      setSumCartItems(updatedSum);

      setQuantidade(quantidade - 1);
    } else {
      setQuantidade(1);
    }
  };

  return (
    <div className="flex items-center">
      <div>
        <IconMinusSquare
          className="cursor-pointer hover:bg-rose-100"
          onClick={() => handleDecreaseQuantity()}
        />
      </div>

      <span className="text-tiny m-2">{quantidade}</span>

      <div>
        <IconPlusSquare
          className="cursor-pointer hover:bg-emerald-100"
          onClick={() => handleIncreaseQuantity()}
        />
      </div>
    </div>
  );
}
