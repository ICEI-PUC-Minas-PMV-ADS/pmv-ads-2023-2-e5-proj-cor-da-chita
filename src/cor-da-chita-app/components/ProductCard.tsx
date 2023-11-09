// Para renderizar os cards dos produtos ao clicar em categoria ou usar o menu de busca
"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardBody, Image, CardFooter, Link } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

import { Produto } from "../lib/interface";
import CartPlusIcon from "../assets/icons/CartPlusIcon";
import { ProductContext } from "@/contexts/ProductContext/ProductContext";

interface ProductCardProps {
  data: Produto[] | undefined;
}

export default function ProductCard(product: ProductCardProps, ...props: any) {
  const route = useRouter();

  // Snack Bar: Adicionar no carrinho
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();

  // Pegar os dados do produto que foi clicado pelo usuário (exibido no anúncio)
  const productAds = useContext(ProductContext);
  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  useEffect(() => {
    setProductData(product.data);
    console.log(productData);
    // handleSeeLc();
  });

  function handleClick(product: Produto) {
    console.log(product);

    productAds.setId(product._id);
    productAds.setName(product.nome);
    productAds.setCategory(product.categoria);
    productAds.setStock(product.estoque);
    productAds.setDescription(product.descricao.children.text);
    productAds.setPrice(product.preco);
    productAds.setWeight(product.peso);
    productAds.setLength(product.comprimento);
    productAds.setWidth(product.largura);
    productAds.setHeight(product.altura);
    productAds.setImage(product.imagem);
    productAds.setSlug(product.slug.current);

    route.push(`/advertisement/${product.slug.current}/${product._id}`);
  }

  const handleStorageProductCart = (id: string, nome: string) => {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    if (arrItens.includes(id)) {
      setMessageAlert("Este item já está no seu carrinho");
      setSeveridadeAlert("warning");
      setOpenSnackBar(true);
    } else {
      arrItens.push(id);

      localStorage.setItem("cartItens", JSON.stringify(arrItens));
      setSeveridadeAlert("success");

      setMessageAlert("O item " + nome + " foi adicionado no seu carrinho com sucesso!");

      setOpenSnackBar(true);
    }
  };

  return (
    <>
      {productData?.map((product) => (
        <div key={product._id} className="ml-20">
          <Card
            className="ml-5  flex-wrap m-5 w-60  "
            isPressable
            onPress={() => handleClick(product)}
          >
            <CardBody className="overflow-visible p-4">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-52 h-48  "
                src={product.imagem}
              />
              <CardFooter className="pb-0 pt-2 flex-col items-start">
                <p className="font-bold text-medium">{product.nome}</p>
              </CardFooter>
            </CardBody>
            <div className="flex flex-row mb-3  ">
              <p className="mt-4 ml-7 text-medium">
                R$ {product.preco.toFixed(2)}
              </p>

              <Link
                className=" ml-24 mb-4 "
                onClick={() =>
                  handleStorageProductCart(product._id, product.nome)
                }
              >
                <div className="bg-green p-1 rounded-md ">
                  <CartPlusIcon fill="white" />
                </div>
              </Link>
            </div>
          </Card>

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
        </div>
      ))}
    </>
  );
}
