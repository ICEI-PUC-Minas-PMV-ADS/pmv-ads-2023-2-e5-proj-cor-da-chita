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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor } from "@mui/material/Alert";
export default function CardCart({ ...props }: any) {
  const { cart, setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<Produto[] | undefined>();
  const [openSnackBar,setOpenSnackBar]= useState<boolean>(false)
  const [ messageAlert,setMessageAlert] = useState<string>("");
 const [ severidadeAlert,setSeveridadeAlert] = useState<AlertColor>()
  useEffect(() => {
    const fetchData = async () => {
      const data = (await getProductDataById(props.id)) as Produto[];

      if (data) setLoading(false);

      setItem(data);

      return data;
    };

    fetchData();
  }, [setItem, cart]);

  function handleRemoveItemCart(id: string): void {
    const arrItens: string[] = JSON.parse(
      localStorage.getItem("cartItens") || "[]"
    );

    const newArrItens: string[] = arrItens.filter(
      (item: string) => item !== id
    );

    setCart(newArrItens);
    setMessageAlert(`${item[0].nome} foi removido do seu carrinho`)
    setSeveridadeAlert("success")
    setOpenSnackBar(true)
    localStorage.setItem("cartItens", JSON.stringify(newArrItens));
  }
  return (
    <>
      {item && (
        <Card className="py-4 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{item[0].nome}</p>
            <p className="text-tiny uppercase font-bold">{item[0]._id}</p>
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
              <div className="ml-3">
                <Button
                  className="py-0.5"
                  color="danger"
                  isIconOnly
                  size="sm"
                  onPress={() => handleRemoveItemCart(item[0]._id)}
                >
                  <IconBagX />
                </Button>
              </div>
            </div>
          </CardBody>
          <QuantityManagerCart />
        </Card>
        
      )}
      

     
       <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={e=>setOpenSnackBar(false)}>
            <MuiAlert onClose={e=>setOpenSnackBar(false)} severity={severidadeAlert} sx={{ width: '100%' }}>
              {messageAlert}
           </MuiAlert>
           </Snackbar>
           
    </>
  );
}
