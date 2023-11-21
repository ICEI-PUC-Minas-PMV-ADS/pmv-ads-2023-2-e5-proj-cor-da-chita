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
import { Box } from "@mui/material";

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

  // Salva itens no productData para renderização
  useEffect(() => {
    setProductData(product.data);
    console.log(productData);
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
        <div key={product._id} className="ml-20">
          {/* Card itens */}
          <Card
            className="flex-wrap font-open bg-light"
            isPressable
            shadow="none"
            onPress={() => handleClick(product)}
            style={{ width: '380px', height: '480px' }}
          >
            <CardBody className="flex flex-col overflow-hidden relative p-0 m-0">
              <div
                className="image-container relative"
                style={{
                  height: '400px',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                      isZoomed
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
              <CardFooter className="">
                <div className={product.estoque>0?"flex justify-between w-full":"flex justify-between w-full flex-col"}>
                  <div>
                    <p className=" w-full">{product.nome}</p>
                    <p className="font-semibold">R$ {product.preco.toFixed(2).toString().replace('.',',')}</p>
                  </div>
                  {product.estoque>0?
                  
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

                 :
                 <div className="text-center mt-2">
                 
                 <p className="text-base "> Estamos sem este produto no estoque no momento</p>
                 
                 </div>
                 }
                 
                </div>
              </CardFooter>
            </CardBody>
          </Card>

        </div>
      ))}
   
          <Box sx={{ display: 'flex', justifyContent: 'center',alignSelf: 'center',textAlign:'center' }}>
            <Snackbar
              open={openSnackBar}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              autoHideDuration={2000}
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
    
          </Box>
    </>
  );
}