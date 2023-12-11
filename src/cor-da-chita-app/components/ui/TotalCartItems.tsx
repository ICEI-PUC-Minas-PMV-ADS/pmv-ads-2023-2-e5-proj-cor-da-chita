import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { useRouter } from "next/navigation";
import CartIcon from "@/assets/icons/CartIcon";

const TotalCartItems = () => {
  const route = useRouter();
  const { cartItems } = useContext(CartItemsContext);
  let [totalQuantity,setTotalQuantity] = useState<number>()

 
  
useEffect(()=>{
  const arrItens:string[] = JSON.parse(localStorage.getItem("cartItens") || "[]");
  console.log(arrItens.length)
  if(arrItens.length == 0){
    setTotalQuantity(0)
  }

  else if (arrItens.length>0){
    setTotalQuantity(arrItens.length)
  }
else{

  let  valor = cartItems.reduce(
    (total, item) => 
    
     total + item.quantidade,
    0
  );

  setTotalQuantity(valor)
}
},[cartItems])


  return (
    <Button
    className="bg-light shadow-sm text-grey hover:scale-105  hover:bg-default-200/70"
      isIconOnly
      onClick={() => route.push("/shop-cart")}
    >
      <div className="flex items-center relative pl-1">
        <CartIcon className="w-4 h-4" />
        <div className="rounded-full text-xs">
          <div className="w-4 h-4 flex items-center pb-2 justify-center">
            { totalQuantity==undefined ||totalQuantity > 0  ? totalQuantity : 0}
          </div>
        </div>
      </div>
    </Button>
  );
};

export default TotalCartItems;