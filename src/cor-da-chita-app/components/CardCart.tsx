// Card dos produtos dentro do carrinho
import React, { useContext, useEffect, useState } from "react";

import {
  Image,
  Button,
  Modal,
  useDisclosure,
  ModalContent,
  ModalBody,
  ModalFooter,
  Tooltip,
  Spinner,
} from "@nextui-org/react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

import { Produto } from "@/lib/interface";
import { CartContext } from "@/contexts/CartContext/CartContext";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

import getProductDataById from "@/database/products/getProductDataById";

import IconCartX from "@/assets/icons/IconCartX";
import QuantityManagerCart from "./QuantityManagerCart";
import { compress } from "@/next.config";
import { COMPILER_NAMES } from "next/dist/shared/lib/constants";

export default function CardCart({ ...props }: any) {
  // Pegar os Ids dos itens do carrinho da page
  const { cart, setCart } = useContext(CartContext);

  // Salvar no context todos itens do carrinho
  const {
    setCartItems,
    setSumCartItems,
    cartItems,
    setCopyCartItems,
    copyCartItems,
  } = useContext(CartItemsContext);

  // Render itens
  const [item, setItem] = useState<Produto[] | undefined>();

  // Snack
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();

  // Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Renderiza os cards do carrinho
  useEffect(() => {
    const fetchData = async () => {
      const data = (await getProductDataById(props.id)) as Produto[];
      setItem(data);

      return data;
    };

    fetchData();
  }, [setItem, cart]);

  // Salvando no context do carrinho
  useEffect(() => {
    if (cart != null) {
      const fetchData = async () => {
        const products = [];
        for (let id of cart) {
          const produto = (await getProductDataById(id)) as Produto[];
          products.push(produto[0]);
        }

        setCartItems(products);
        setCopyCartItems(products);
      };
      fetchData();
    }
  }, [setCartItems, cart]);

  // Pegar o ID do item a ser excluído do carrinho
  function handleJson(item: any) {
    const itemIdString: string = JSON.stringify(item);
    const itemObj: { id: string } = JSON.parse(itemIdString);
    const idDoObjeto: string = itemObj.id;

    return idDoObjeto;
  }

  // Remove item e atualiza LocalStorage
  function handleRemoveItemCart(id: string, nome: string): void {
    const arrItens: string[] = JSON.parse(
      localStorage.getItem("cartItens") || "[]"
    );

    const newArrItens: string[] = arrItens.filter((item: string) => {
      const idDoObjeto = handleJson(item);
      if (idDoObjeto != id) {
        return item;
      }
    });

    // Para zerar a soma quando carrinho está vazio
    if (newArrItens.length === 0) setSumCartItems(0);

    setCart(newArrItens);

    setCartItems(newArrItens)

    setMessageAlert(`O item ${nome} foi removido do seu carrinho`);
    setSeveridadeAlert("success");
    setOpenSnackBar(true);

    localStorage.setItem("cartItens", JSON.stringify(newArrItens));
  }

  return (
    <>
      {/* Principal */}
      {item &&
      item[0]?.imagem &&
      item[0]?._id &&
      item[0]?.nome &&
      item[0]?.preco ? (
        <>
          <div className="flex flex-col md:flex-row justify-between w-full my-1 gap-3">
            <div>
              <div
                className="image-container relative"
                style={{
                  height: "150px",
                  width: "200px",
                  overflow: "hidden",
                }}
              >
                <Image
                  removeWrapper
                  alt="Card background"
                  className={`z-0 w-full h-full object-cover`}
                  src={item[0].imagem}
                />
              </div>
            </div>

            <div
              className="flex flex-col place-content-evenly justify-left h
            w-24"
            >
              <h2 className="my-2">{item[0].nome}</h2>
              <p className="my-2">R$ {item[0].preco.toFixed(2).toString().replace('.',',')}</p>
            </div>

            <div className="flex flex-col place-content-evenly">
              <div className="my-2">
                <QuantityManagerCart
                  id={item[0]._id}
                  quantidade={item[0].quantidade}
                  className="py-3 items-center"
                  onOpen={onOpen}
                  handleRemoveItemCart={handleRemoveItemCart}
                />
              </div>
              <div className="my-2">
                <Button
                  color="secondary"
                  variant="ghost"
                  onClick={() => onOpen()}
                >
                  <IconCartX />
                  Excluir item
                </Button>
              </div>
            </div>
          </div>

          {/* Confirmação de excluir item */}
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="sm"
            className="p-4"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <p>
                      Tem certeza que deseja excluir o item do seu carrinho?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={() => {
                        {
                          handleRemoveItemCart(item[0]._id, item[0].nome),
                            onClose();
                        }
                      }}
                    >
                      Sim
                    </Button>
                    <Button color="success" variant="light" onPress={onClose}>
                      Não
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Spinner className="py-6" />
      )}

      {/* Snack com aviso de item removido */}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={2000}
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
    </>
  );
}
