import React, { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { useRouter } from "next/navigation";
import CartIcon from "@/assets/icons/CartIcon";

const TotalCartItems = () => {
  const route = useRouter();
  const { setCartItems,cartItems } = useContext(CartItemsContext);
  const [totalQuantity,setTotalQuantity] = useState<number>()
 
  useEffect(()=>{
   
  
    if(cartItems.length==0){
      setTotalQuantity(0)
    }
  setTotalQuantity(cartItems.length)
    // const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");
    // console.log(arrItens)
    // const value = cartItems.reduce(
    //   (total, item) => total + item.quantidade,
    //   0)
    // console.log(value)
    // setTotalQuantity(value)

  },[cartItems])

useEffect(()=>{
  const carrinho = JSON.parse(localStorage.getItem("cartItens") || "[]");
     setCartItems(carrinho)

},[setCartItems])
  return (
    <Button
      isIconOnly
      variant="ghost"
      color="success"
      onClick={() => route.push("/shop-cart")}
    >
      <div className="flex items-center relative pl-1">
        <CartIcon className="w-4 h-4" />
        <div className="rounded-full text-xs">
          <div className="w-4 h-4 flex items-center pb-2 justify-center">
            { totalQuantity}
          </div>
        </div>
      </div>
    </Button>
  );
};

export default TotalCartItems;
