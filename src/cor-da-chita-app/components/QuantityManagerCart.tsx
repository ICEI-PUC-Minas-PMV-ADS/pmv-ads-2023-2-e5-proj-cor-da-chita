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

  // Soma total carrinho
  function totalCart() {
    
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    console.log(cartItems)
    const updatedSum = arrItens.reduce((acc: number, item: any) => {
      const cartItem = cartItems.find((cartItem) => cartItem._id === item.id);
      return acc + (cartItem?.preco || 0) * item.quantidade;
    }, 0);
    
    setSumCartItems(updatedSum);
  }

  const handleIncreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    const item = arrItens.find((item: any) => item.id === props.id);

    // Se o item está no carrinho
    if (indexItem !== -1) {
      arrItens[indexItem].quantidade += 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // Para atualizar a quantidade do copyCartItems no context. Usado no summary-orer
      const cartProducts: any = [];

      copyCartItems?.map((copyItem: any, index: number) => {
        if (copyItem._id === item.id) {
          copyItem.quantidade = arrItens[indexItem].quantidade;
          console.log(copyCartItems);
          cartProducts.push(copyItem);
        }
      });

      setCopyCartItems(cartProducts);

      totalCart(); // Recalcula soma

      setQuantidade(arrItens[indexItem].quantidade);
    }
  };

  const handleDecreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);
    const item = arrItens.find((item: any) => item.id === props.id);

    // Se o item está no carrinho e a quantidade é maior que 1
    if (indexItem !== -1 && arrItens[indexItem].quantidade > 1) {
      arrItens[indexItem].quantidade -= 1;

      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // Para atualizar a quantidade do copyCartItems no context. Usado no summary-orer
      const cartProducts: any = [];

      copyCartItems?.map((copyItem: any, index: number) => {
        if (copyItem._id === item.id) {
          copyItem.quantidade = arrItens[indexItem].quantidade;
          console.log(copyCartItems);
          cartProducts.push(copyItem);
        }
      });

      setCopyCartItems(cartProducts);

      totalCart(); // Recalcula soma

      setQuantidade(quantidade - 1);
    } else if (indexItem !== -1 && arrItens[indexItem].quantidade === 1) {
      onOpen();
    }
  };

  // Sempre atualiza a quantidade dos itens igual está no local storage
  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    setLocalCopy(cartItems);

    const cartProducts: any = [];
    localCopy?.map((copyItem: any, index: number) => {
      if (copyItem._id === item.id) {
        copyItem.quantidade = item.quantidade;
        cartProducts.push(copyItem);
      }
    });
    setCopyCartItems(localCopy); // Salva no context
  }, [copyCartItems]);

  // Acumula soma inicial do carrinho
  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    totalCart();

    if (item) {
      setQuantidade(item.quantidade);
    }
  }, [cartItems]);

  return (
    <div className="flex items-center gap-5">
      <Button
        isIconOnly
        className="shadow-sm hover:opacity-80 hover:scale-105"
        variant="flat"
        color="secondary"
        onClick={handleDecreaseQuantity}
      >
        <IconMinusSquare />
      </Button>

      <span className="">{quantidade}</span>

      <Button
        isIconOnly
        variant="flat"
        className="shadow-sm hover:opacity-80 hover:scale-105 "
        color="success"
        onClick={handleIncreaseQuantity}
      >
        <IconPlusSquare />
      </Button>
    </div>
  );
}
