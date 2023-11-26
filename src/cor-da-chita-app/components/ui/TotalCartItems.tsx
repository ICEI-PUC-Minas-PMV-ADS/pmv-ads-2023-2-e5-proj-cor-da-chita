import React, { useContext, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { useRouter } from "next/navigation";
import CartIcon from "@/assets/icons/CartIcon";

const TotalCartItems = () => {
  const route = useRouter();
  const { cartItems } = useContext(CartItemsContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <Button
      className="bg-gradient-to-tr from-emerald-300 to-fuchsia-200 text-white shadow-sm hover:opacity-80"
      isIconOnly
      onClick={() => route.push("/shop-cart")}
    >
      <div className="flex items-center relative pl-1">
        <CartIcon className="w-4 h-4" />
        <div className="rounded-full text-xs">
          <div className="w-4 h-4 flex items-center pb-2 justify-center">
            {totalQuantity > 0 ? totalQuantity : 0}
          </div>
        </div>
      </div>
    </Button>
  );
};

export default TotalCartItems;