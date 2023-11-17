import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

export default function QuantityManagerCart({
  onOpen,
  ...props
}: any) {
  const { setSumCartItems } = useContext(CartItemsContext);
  const { cartItems } = useContext(CartItemsContext);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const item = arrItens.find((item: any) => item.id === props.id);

    let sum = 0;
    if (item && item.quantidade != undefined) {
      const cartItem = cartItems.find((ci) => ci?._id === item?.id);
      if (cartItem) {
        sum += item.quantidade * (cartItem.preco || 0);
        setSumCartItems(sum);
      }
    }

    if (item) {
      setQuantidade(item.quantidade);
    }
  }, [cartItems, setSumCartItems, props.id, forceUpdate]);

  const updateLocalStorageAndSum = (arrItens: any[]) => {
    localStorage.setItem("cartItens", JSON.stringify(arrItens));
    setForceUpdate((prev) => !prev); // Toggle forceUpdate to trigger a re-render
  };

  const handleIncreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    if (indexItem !== -1) {
      arrItens[indexItem].quantidade += 1;
      updateLocalStorageAndSum(arrItens);
      setQuantidade(arrItens[indexItem].quantidade);
    }
  };

  const handleDecreaseQuantity = () => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    const indexItem = arrItens.findIndex((item: any) => item.id === props.id);

    if (indexItem !== -1 && arrItens[indexItem].quantidade > 1) {
      arrItens[indexItem].quantidade -= 1;
      updateLocalStorageAndSum(arrItens);
      setQuantidade(arrItens[indexItem].quantidade);
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