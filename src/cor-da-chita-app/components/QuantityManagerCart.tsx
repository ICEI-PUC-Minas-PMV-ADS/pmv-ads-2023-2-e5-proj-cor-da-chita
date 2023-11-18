// Controla a quantidade do item no carrinho dentro da page Shop-Cart
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

export default function QuantityManagerCart({
  handleRemoveItemCart,
  onOpen,
  ...props
}: any) {
  const { setSumCartItems } = useContext(CartItemsContext);
  const { cartItems, copyCartItems, setCopyCartItems } =
    useContext(CartItemsContext);

  const [quantidade, setQuantidade] = useState<number>(0);

  // Atualiza a quantidade com os itens vindo do local storage e preço vindo do banco

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    // const localCopy: any = [];

    // // Push no array local
    // cartItems.forEach((element: any) => {
    //   localCopy.push(element);
    // });

    // setCopyCartItems(localCopy); // Salva no context

    // console.log(copyCartItems);
    // console.log(cartItems);

    // // Percorre o context para manter sempre a quantidade atualizada do item no copyCartItems
    // copyCartItems.find((copyItem) => {
    //   if (item.id === copyItem._id) {
    //     copyItem.quantidade += item.quantidade - 1;
    //     setCopyCartItems(copyItem); // Atualiza
    //   }
    //   console.log(copyCartItems);
    // });

    // console.log(localCopy);
    // console.log(copyCartItems);

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

    // const test = { ...copyCartItems };

    // console.log(typeof copyCartItems);
    // console.log(typeof cartItems);
    // console.log(typeof test);

    // console.log(copyCartItems);
    // console.log(cartItems);
    // console.log(copyCartItems[0]);

    // Se o item está no carrinho
    if (indexItem !== -1) {
      arrItens[indexItem].quantidade += 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      const updatedSum = arrItens.reduce((acc: number, item: any) => {
        const cartItem = cartItems.find(
          (cartItem) => cartItem && cartItem._id === item.id
        );
        return acc + (cartItem?.preco || 0) * item.quantidade;
      }, 0);

      setSumCartItems(updatedSum);

      setQuantidade(arrItens[indexItem].quantidade);
    }
  };

  // Diminuiu a quantidade do item no carrinho e altera valor do carrinho
  const handleDecreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    // Index in local storage
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    // If the item is in the cart and the quantity is greater than 1
    if (indexItem !== -1 && arrItens[indexItem].quantidade > 1) {
      arrItens[indexItem].quantidade -= 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // Recalculate the total sum of the cart
      const updatedSum = arrItens.reduce((acc: number, item: any) => {
        const cartItem = cartItems.find(
          (cartItem) => cartItem && cartItem._id === item.id
        );
        return acc + (cartItem?.preco || 0) * item.quantidade;
      }, 0);

      setSumCartItems(updatedSum);

      setQuantidade(quantidade - 1);
    } else if (indexItem !== -1 && arrItens[indexItem].quantidade === 1) {
      // If the quantity is 1, open the confirmation modal
      onOpen();
    }
    // Optionally, reset the quantity to 0
    // setQuantidade(0);
  };

  return (
    <div className="flex items-center gap-5">
      <Button
        isIconOnly
        className="text-white"
        color="secondary"
        onClick={() => handleDecreaseQuantity()}
      >
        <IconMinusSquare />
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
