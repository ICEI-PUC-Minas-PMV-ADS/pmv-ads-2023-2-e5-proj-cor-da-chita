// Controla a quantidade do item no carrinho dentro da page Shop-Cart
import React, { useContext, useEffect, useState } from "react";

import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

export default function QuantityManagerCart({ ...props }: any) {
  const { setQuantityCart } = useContext(CartItemsContext);
  const [quantidade, setQuantidade] = useState<number>(0);

  // Atualiza a quantidade com os dados vindo do local storage
  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    const item = arrItens.find((item: any) => item.id === props.id);

    if (item) {
      setQuantidade(item.quantidade);
    }
  }, [props.id]);

  // Soma quantidade do item no carrinho
  const handleIncreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    // Index no local storage
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    // Se o item está no carrinho
    if (indexItem !== -1) {
      arrItens[indexItem].quantidade += 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // Pega a mudança de quantidade para mudar a soma do total no CardCart
      setQuantityCart(arrItens[indexItem].quantidade);

      setQuantidade(arrItens[indexItem].quantidade);
    }
  };

  // Diminuiu a quantidade do item no carrinho
  const handleDecreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    // Index no local storage
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    // Se o item está no carrinho e a quantidade é maior que 1
    if (indexItem !== -1 && arrItens[indexItem].quantidade > 1) {
      arrItens[indexItem].quantidade -= 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // Pega a mudança de quantidade para mudar a soma do total no CardCart
      setQuantityCart(arrItens[indexItem].quantidade);

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
