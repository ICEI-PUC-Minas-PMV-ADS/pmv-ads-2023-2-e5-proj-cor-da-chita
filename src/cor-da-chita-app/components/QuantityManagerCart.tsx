import React, { useState } from "react";

import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";

export default function QuantityManagerCart({ props }: any) {
  const [quantidade, setQuantidade] = useState<number>(1);

  const handleIncreaseQuantity = () => {
    // Falta definir apenas a quantidade máx do estoque
    setQuantidade(quantidade + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantidade == 1) {
      setQuantidade(1);
    } else {
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
