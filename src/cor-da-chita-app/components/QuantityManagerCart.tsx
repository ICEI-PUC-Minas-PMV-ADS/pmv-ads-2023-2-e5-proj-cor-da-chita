import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

export default function QuantityManagerCart({ onOpen, ...props }: any) {
  const { setSumCartItems } = useContext(CartItemsContext);
  const { cartItems, copyCartItems, setCopyCartItems } =
    useContext(CartItemsContext);

  const [quantidade, setQuantidade] = useState<number>(0);

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    // Acumula soma inicial
    let sum = 0;
    cartItems.forEach((element) => {
      if (item.quantidade != undefined) {
        sum += item.quantidade * element.preco;
        setSumCartItems(sum);
      }
    });

    if (item) {
      setQuantidade(item.quantidade);
    }
  }, [cartItems]);

  // useEffect(() => {
  //   const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
  //   const item = arrItens.find((item: any) => item.id === props.id);

  //   // Calculate the total sum based on the items in the cart
  //   let sum = 0;
  //   cartItems.forEach((cartItem) => {
  //     const localItem = arrItens.find((item: any) => item.id === cartItem._id);
  //     if (localItem) {
  //       sum += localItem.quantidade * cartItem.preco;
  //     }
  //   });
  //   console.log(sum);

  //   setSumCartItems(sum);

  //   if (item) {
  //     setQuantidade(item.quantidade);
  //   }
  // }, [cartItems, setSumCartItems, props.id]);

  // const updateLocalStorageAndSum = (arrItens: any[]) => {
  //   localStorage.setItem("cartItens", JSON.stringify(arrItens));
  // };

  const handleIncreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
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

    // if (indexItem !== -1) {
    //   arrItens[indexItem].quantidade += 1;
    //   updateLocalStorageAndSum(arrItens);
    //   setQuantidade(arrItens[indexItem].quantidade);
    // }
  };

  const handleDecreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    // Diminuiu a quantidade do item no carrinho e altera valor do carrinho

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
    }  else if (indexItem !== -1 && arrItens[indexItem].quantidade === 1) {
         onOpen();
       }

    // if (indexItem !== -1 && arrItens[indexItem].quantidade > 1) {
    //   arrItens[indexItem].quantidade -= 1;
    //   updateLocalStorageAndSum(arrItens);
    //   setQuantidade(arrItens[indexItem].quantidade);
    // } else if (indexItem !== -1 && arrItens[indexItem].quantidade === 1) {
    //   onOpen();
    // }
  };

  return (
    <div className="flex items-center gap-5">
      <Button
        isIconOnly
        variant="ghost"
        color="secondary"
        onClick={handleDecreaseQuantity}
      >
        <IconMinusSquare />
      </Button>

      <span className="">{quantidade}</span>

      <Button
        isIconOnly
        variant="ghost"
        color="success"
        onClick={handleIncreaseQuantity}
      >
        <IconPlusSquare />
      </Button>
    </div>
  );
}
