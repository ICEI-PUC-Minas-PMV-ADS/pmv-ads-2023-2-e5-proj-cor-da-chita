import React, { useEffect, useState } from "react";
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

export default function CardCart({ ...props }: any) {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<Produto[] | undefined>();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("entrou");
    const fetchData = async () => {
      const data = (await getProductDataById(props.id)) as Produto[];

      if (data) setLoading(false);

      setItem(data);
      setRefresh(false);

      return data;
    };

    fetchData();
  }, [setItem, refresh, setRefresh]);

  function handleRemoveItemCart(id: string): void {
    const arrItens = JSON.parse(localStorage.getItem("cartItens") || "[]");

    const newArrItens: string = arrItens.filter((item: string) => item !== id);
    localStorage.setItem("cartItens", JSON.stringify(newArrItens));

    setRefresh(true);

    console.log(newArrItens);
  }

  return (
    <>
      {item && (
        <Card className="py-4">
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
              <div className="ml-3">
                <Button
                  className="p-1"
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
    </>
  );
}
