import React, { useContext, useState } from "react";
import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";
import { Tooltip } from "@nextui-org/react";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { CartContext } from "@/contexts/CartContext/CartContext";

export default function QuantityManagerCart({ ...props }: any) {
  const [quantidade, setQuantidade] = useState<number>(1);

  // Contexto do Carrinho
  const { cartItems } = useContext(CartItemsContext);

  // Context para uso no LocalStorage
  const { cart, setCart } = useContext(CartContext);

  // TERMINAR
  function handleJson(item: any) {
    const quantidadeString: string = JSON.stringify(item);
    const itemObj: { quantidade: string } = JSON.parse(quantidadeString);
    const quantidadeDoObjeto: string = itemObj.quantidade;
    console.log(quantidadeDoObjeto);

    return quantidadeDoObjeto;
  }

  const handleIncreaseQuantity = () => {
    // Encontra o item
    const item = cartItems.filter((itemId) => itemId._id == props.id);
    //console.log(item);

    // CONTINUAR AQUI - ATUALIZAR O LOCALSTORAGE
    //const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    // Muda a quantidade
    item.forEach(() => {
      item[0].quantidade += 1;
      console.log(item[0].quantidade);
    });

    //Depois definir regra para colocar definir um valor máximo por pedido,ou não deixar escoolher mais que a quantidade disponível
    setQuantidade(quantidade + 1);
  };
  const handleDecreaseQuantity = () => {
    const item = cartItems.filter((itemId) => itemId._id == props.id);
    console.log(item);
    if (quantidade == 1) {
      setQuantidade(1);
    } else {
      item.forEach(() => {
        item[0].quantidade -= 1;
        console.log(item[0].quantidade);
      });
      setQuantidade(quantidade - 1);
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
