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
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
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

  // Salvando no context
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
    productAds.setQuantity(product.quantidade);

    route.push(`/advertisement/${product.slug.current}/${product._id}`);
  }

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
      {productData?.map((product) => (
        <div key={product._id}
        onMouseEnter={() => setHoveredProductId(product._id)}
        onMouseLeave={() => setHoveredProductId(null)}>
          <Card
            className="flex-wrap font-open border bg-light"
            isPressable
            shadow="sm"
            onPress={() => handleClick(product)}
            style={{ width: '380px', height: '440px' }}
          >
            <CardBody className="flex flex-col overflow-hidden p-4 relative">
  <div
    className="image-container relative"
    style={{
      height: '320px',
      width: '100%',
      overflow: 'hidden',
    }}
  >
      <Image
            removeWrapper
            alt="Card background"
            className={`z-0 w-full h-full object-cover transition-transform ${
              hoveredProductId === product._id ? "hover:scale-125 hover:blur" : ""
            }`}
            src={product.imagem}
          />
         {hoveredProductId === product._id && (
            <div className="overlay absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center pointer-events-none">
              <p className="text-small p-4">{`${product.descricao.children.text}`}</p>
              <p className="text-small">{`Peso: ${product.peso} kg`}</p>
              <p className="text-small">{`Dimensões: ${product.comprimento}x${product.largura}x${product.altura} cm`}</p>
            </div>
          )}
  </div>

              <p className="font-semibold px-3 pt-5">{product.nome}</p>
              <CardFooter className="mt-auto">
                <div className="flex justify-between items-end w-full">
                  <p className="">R$ {product.preco.toFixed(2)}</p>
                  <Link
                    className=""
                    onClick={() =>
                      handleStorageProductCart(
                        product._id,
                        product.nome,
                        product.quantidade
                      )
                    }
                  >
                    <div className="bg-green p-3">
                      <CartPlusIcon fill="white" />
                    </div>
                  </Link>
                </div>
              </CardFooter>
            </CardBody>
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