import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Spinner,
  Button,
} from "@nextui-org/react";
import QuantityManagerCart from "./QuantityManagerCart";
import { Produto } from "@/lib/interface";
import getProductDataById from "@/database/products/getProductDataById";
import IconBagX from "@/assets/icons/IconBagX";
import { CartContext } from "@/contexts/CartContext/CartContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { fetchData } from "next-auth/client/_utils";
import { get } from "http";

export default function CardCart({ ...props }: any) {
  // Usado para passar os Ids dos itens do carrinho da page pra cá
  const { cart, setCart } = useContext(CartContext);

  // Salvar no context todos itens do carrinho
  const { cartItems, setCartItems, setSumCartItems } =
    useContext(CartItemsContext);

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<Produto[] | undefined>();
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [severidadeAlert, setSeveridadeAlert] = useState<AlertColor>();

  // Renderiza os cards do carrinho
  useEffect(() => {
    const fetchData = async () => {
      const data = (await getProductDataById(props.id)) as Produto[];

      if (data) setLoading(false);

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
        console.log(products);
        setCartItems(products);
      };
      fetchData();
    }
  }, [setCartItems, cart]);

  useEffect(() => {
    cartItems?.map((x) => console.log(x));
    const sum = cartItems.reduce((total, item) => total + item.preco, 0);
    //console.log(sum);
    setSumCartItems(sum);
  });

  // Chama essa função pelo botao de teste
  // const saveCartItemsInContext = async () => {
  //   const products: Produto[] = [];

  //   if (cart != null) {
  //     for (let id of cart) {
  //       const produto = (await getProductDataById(id)) as Produto[];
  //       products.push(produto[0]);
  //     }
  //   }
  //   setCartItems(products);
  //   console.log(cartItems);
  // };

  function handleRemoveItemCart(id: string, nome: string): void {
    const arrItens: string[] = JSON.parse(
      localStorage.getItem("cartItens") || "[]"
    );

    const newArrItens: string[] = arrItens.filter(
      (item: string) => item !== id
    );

    setCart(newArrItens);
    //setMessageAlert(`${item[0].nome} foi removido do seu carrinho`);
    setMessageAlert(`${nome} foi removido do seu carrinho`);
    setSeveridadeAlert("success");
    setOpenSnackBar(true);
    localStorage.setItem("cartItens", JSON.stringify(newArrItens));
  }
  return (
    <>
      {item && (
        <Card className="py-4 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{item[0].nome}</p>
            <small className="text-default-500">
              R$ {item[0].preco.toFixed(2)}
            </small>
          </CardHeader>

          <CardBody className="overflow-visible py-2">
            <div className="flex">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={item[0].imagem}
                width={150}
              />
              <div className="ml-3 ">
                <Button
                  className="py-0.5"
                  color="danger"
                  isIconOnly
                  size="sm"
                  onPress={() =>
                    handleRemoveItemCart(item[0]._id, item[0].nome)
                  }
                >
                  <IconBagX />
                </Button>
              </div>
            </div>
          </CardBody>
          <QuantityManagerCart />
        </Card>
      )}

      <Snackbar
        open={openSnackBar}
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
    </>
  );
}
