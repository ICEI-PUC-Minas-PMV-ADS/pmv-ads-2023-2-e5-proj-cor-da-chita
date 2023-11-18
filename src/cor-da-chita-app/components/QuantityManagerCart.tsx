import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { Produto } from "@/lib/interface";
import { checkPrimeSync } from "crypto";

export default function QuantityManagerCart({ onOpen, ...props }: any) {
  const { setSumCartItems } = useContext(CartItemsContext);
  const { cartItems, copyCartItems, setCopyCartItems } =
    useContext(CartItemsContext);

  const [quantidade, setQuantidade] = useState<number>(0);
  const [localCopy, setLocalCopy] = useState<Produto[] | undefined>();

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    // Sempre atualiza a quantidade igual está no local storage
    setLocalCopy(cartItems);

    const cartProducts: any = [];
    localCopy?.map((copyItem: any, index: number) => {
      if (copyItem._id === item.id) {
        copyItem.quantidade = item.quantidade;
        cartProducts.push(copyItem);
      }
    });
    setCopyCartItems(localCopy); // Salva no context

    console.log(copyCartItems);
    console.log(localCopy);

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

  const handleIncreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    const item = arrItens.find((item: any) => item.id === props.id);

    // Se o item está no carrinho
    if (indexItem !== -1) {
      arrItens[indexItem].quantidade += 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // EM ANDAMENTO ------------------------------------
      // Criar uma função a parte
      // Usada no map abaixo
      const cartProducts: any = [];

      // Para atualizar a quantidade do copyCartItems no context. Usado no summary-orer
      copyCartItems?.map((copyItem: any, index: number) => {
        if (copyItem._id === item.id) {
          copyItem.quantidade = arrItens[indexItem].quantidade;
          console.log(copyCartItems);
          cartProducts.push(copyItem);
        }
      });
      setCopyCartItems(cartProducts);

      console.log(copyCartItems);

      // EM ANDAMENTO ------------------------------------

      const updatedSum = arrItens.reduce((acc: number, item: any) => {
        const cartItem = cartItems.find((cartItem) => cartItem._id === item.id);
        return acc + (cartItem?.preco || 0) * item.quantidade;
      }, 0);

      setSumCartItems(updatedSum);

      setQuantidade(arrItens[indexItem].quantidade);
    }
  };

  const handleDecreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);
    const item = arrItens.find((item: any) => item.id === props.id);

    // Diminuiu a quantidade do item no carrinho e altera valor do carrinho
    // Se o item está no carrinho e a quantidade é maior que 1
    if (indexItem !== -1 && arrItens[indexItem].quantidade > 1) {
      arrItens[indexItem].quantidade -= 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // EM ANDAMENTO ------------------------------------
      const cartProducts: any = [];
      copyCartItems?.map((copyItem: any, index: number) => {
        if (copyItem._id === item.id) {
          copyItem.quantidade = arrItens[indexItem].quantidade;
          console.log(copyItem.quantidade);
          console.log(arrItens[indexItem].quantidade);
          cartProducts.push(copyItem);
        }
        setCopyCartItems(cartProducts);
      });
      console.log(copyCartItems);
      // EM ANDAMENTO ------------------------------------

      // Recalcule a soma total do carrinho
      const updatedSum = arrItens.reduce((acc: number, item: any) => {
        const cartItem = cartItems.find((cartItem) => cartItem._id === item.id);
        return acc + (cartItem?.preco || 0) * item.quantidade;
      }, 0);

      setSumCartItems(updatedSum);

      setQuantidade(quantidade - 1);
    } else if (indexItem !== -1 && arrItens[indexItem].quantidade === 1) {
      onOpen();
    }
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
