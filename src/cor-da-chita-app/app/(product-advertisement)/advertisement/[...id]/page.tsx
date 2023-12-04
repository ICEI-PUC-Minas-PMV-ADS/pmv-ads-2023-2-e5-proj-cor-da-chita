// Tela do anúncio individual de um produto
"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MyButton } from "@/components/ui/Button";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";


import { Button, Image, Link } from "@nextui-org/react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

import { ProductContext } from "@/contexts/ProductContext/ProductContext";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";

export default function ProductAdvertisement() {
  const route = useRouter();
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const product = useContext(ProductContext);

  // Snack Bar: Adicionar no carrinho
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();

  // Salva produto no local storage
  const handleStorageProductCart = (
    id: string,
    nome: string,
    quantidade: number
  ) => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    // Verifica se o item já está no carrinho
    const itemExistente = arrItens.find((item: any) => item.id === id);

    if (itemExistente) {
      setMessageAlert("Este item já está no seu carrinho");
      setSeveridadeAlert("warning");
      setOpenSnackBar(true);
    } else {
      const novoItem = {
        id: id,
        nome: nome,
        quantidade: quantidade,
      };

      arrItens.push(novoItem);
      localStorage.setItem("cartItens", JSON.stringify(arrItens));

      // Update cart items in context
      setCartItems(arrItens);

      setSeveridadeAlert("success");
      setMessageAlert(
        `O item ${nome} foi adicionado no seu carrinho com sucesso!`
      );

      setOpenSnackBar(true);
    }
  };

  return (
    <div className="min-w-full">
    <Link
        size="sm"
        as="button"
        className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={() => route.back()}
      >
        <ArrowLeft /> Retornar
      </Link>

      {/* Item */}
    
      <div className="px-10 my-20 max-w-[1200px] mx-auto">
  <div className="flex flex-col sm:flex-row justify-around items-center">
    <div
      className="bg-dark max-w-full"
      style={{
        height: "500px",
        width: "500px",
        overflow: "hidden",
      }}
    >
      <Image
        isZoomed
        removeWrapper
        alt="Foto do Produto"
        className="object-cover w-full h-full cover-fit"
        src={product.imageProduct}
      />
    </div>

    <div className="px-5 md:px-20 bg-light flex flex-col max-w-[400px]">
      <p className="text-2xl pb-4 underline underline-offset-4 decoration-wavy my-5">
        {product.name}
      </p>
      <p className="">{product.description}</p>
      <p className="">
        {product.lengthProduct}x{product.widthProduct}cm
      </p>
      <p className="py-4">
        <strong>R$ {product.price.toFixed(2).toString().replace(".", ",")}</strong>
      </p>
      <div className="py-5 flex flex-col gap-3">
        {product.stock > 0 ? (
          <MyButton
            color="green"
            size="sm"
            className="shadow-md"
            onClick={() =>
              handleStorageProductCart(
                product.id,
                product.name,
                product.quantity
              )
            }
          >
            Adicionar ao Carrinho
          </MyButton>
        ) : (
          <p className="text-base">
            Estamos sem este produto no estoque no momento
          </p>
        )}

        <Link
          size="sm"
          as="button"
          className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
          onClick={() => route.push("/shop-cart")}
        >
          Ir para Carrinho <ArrowRight />
        </Link>
      </div>
    </div>
  </div>
</div>

      {/* Snack Bar */}
      <div className="m-auto">
        <Snackbar
          open={openSnackBar}
          autoHideDuration={30000}
          onClose={() => setOpenSnackBar(false)}
        >
          <MuiAlert
            onClose={() => setOpenSnackBar(false)}
            severity={severidadeAlert}
            sx={{ width: "100%" }}
          >
            {messageAlert}
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
}
