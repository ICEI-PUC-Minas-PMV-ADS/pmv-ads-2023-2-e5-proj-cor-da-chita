// Tela do anúncio individual de um  produto
"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Image, Link } from "@nextui-org/react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

import { ProductContext } from "@/contexts/ProductContext/ProductContext";
import ArrowLeft from "@/assets/icons/ArrowLeft";

export default function ProductAdvertisement() {
  const route = useRouter();
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

      setSeveridadeAlert("success");
      setMessageAlert(
        "O item " + nome + " foi adicionado no seu carrinho com sucesso!"
      );

      setOpenSnackBar(true);
    }
  };

  return (
    <>
      <Link
        size="sm"
        as="button"
        className="p-4 m-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={() => route.back()}
      >
        <ArrowLeft /> Retornar
      </Link>

      {/* Item */}
      <div className="flex gap-1 justify-center items-center p-4">
        <Image
          isZoomed
          alt="Foto do Produto"
          className="object-cover rounded-xl mr-"
          src={product.imageProduct}
          width={300}
          height={300}
        />
        <div className="p-10">
          <p className="text-lg">{product.name}</p>
          <p className="text-sm">{product.description}</p>
          <p className="text-tiny mt-4 text-gray-500">
            {product.lengthProduct} cm x {product.widthProduct} cm
          </p>

          <Button
            className="mt-8 "
            color="success"
            size="md"
            onClick={() =>
              handleStorageProductCart(
                product.id,
                product.name,
                product.quantity
              )
            }
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>

      {/* Snack Bar */}
      <div className=" m-auto ">
        <Snackbar
          open={openSnackBar}
          autoHideDuration={30000}
          onClose={(e) => setOpenSnackBar(false)}
        >
          <MuiAlert
            onClose={(e) => setOpenSnackBar(false)}
            severity={severidadeAlert}
            sx={{ width: "100%" }}
          >
            {messageAlert}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
}
