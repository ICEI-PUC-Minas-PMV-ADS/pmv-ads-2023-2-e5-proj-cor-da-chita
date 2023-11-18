// Tela do anúncio individual de um  produto
"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MyButton } from "@/components/ui/Button";

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
        className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={() => route.back()}
      >
        <ArrowLeft /> Retornar
      </Link>

      {/* Item */}
      <div className="mx-20 max-w-screen-lg ml-auto">
        <div className="flex flex-col md:flex-row justify-between font-open border">
          <div className="bg-dark md:flex-1 mb-5 md:mb-0"
            style={{
              height: '500px',
              width: '500px',
              overflow: 'hidden',
            }}
          >
            <Image
              isZoomed
              removeWrapper
              alt="Foto do Produto"
              className="object-cover h-full w-full"
              src={product.imageProduct}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

  <div className="border px-5 md:px-20 pt-5 md:pt-20 bg-light flex-0">
    <div>
      <p className="text-xl py-5 font-serif">{product.name}</p>
      <p className="">{product.description}</p>
      <p className="py-2">
        {product.lengthProduct}x{product.widthProduct}cm
      </p>
      <p className="py-2">R$ {product.price}</p>
    </div>
    <div className="py-5 flex flex-col gap-3 place-content-evenly">
      <MyButton
        color="green"
        className="w-[400px]"
        size="sm"
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

      <Button
        color="success"
        variant="ghost"
        size="lg"
        className="hover:text-white text-small w-[400px]"
        onClick={() =>
          route.push("/shop-cart")
        }
      >
        Ir para Carrinho
      </Button>
    </div>
  </div>
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
