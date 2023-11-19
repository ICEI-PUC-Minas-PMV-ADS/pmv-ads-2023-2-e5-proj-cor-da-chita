// Dados de envio na finalização da compra
"use client";
import React, { useContext, useEffect, useState } from "react";

import { Button, Input, Link, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { MyButton } from "@/components/ui/Button";
import ArrowLeft from "@/assets/icons/ArrowLeft";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
} from "@nextui-org/react";

import { url } from "@/app/api/backend/webApiUrl";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { useRouter } from "next/navigation";
import Cep from "@/app/api/cep/cep";
import { CepContext } from "@/contexts/CepContext/CepContext";
import axios from "axios";

interface Order {
  id: string;
  items: [
    {
      productId: string;
      productName: string;
      productPrice: number;
      productQuantity: number;
    }
  ];
  userName: string;
  userEmail: string;
  street: string;
  neighborhood: string;
  num: string;
  city: string;
  uf: string;
  cep: string;
  complement: string;
  freight: {
    totalWidthFreight: number;
    totalHeightFreight: number;
    totalLengthFreight: number;
    totalWeightFreight: number;
    freightValue: number;
    freightMethod: string;
  };
  orderPixId: number;
  orderDate: string;
  phoneNumber: string;
  totalPriceProducts: number;
}

export default function MyOrders({ ...props }: any) {
  const { data: session } = useSession();
  const route = useRouter();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);
  const { saveCepContext } = useContext(CepContext); // Se envio por correios
  const [orders, setOrders] = useState(); // Database
  const [value, setValue] = useState<any>();

  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const getOrderByEmail = async () => {
    const data = await axios
      .get(`${url}/Order/OrdersWithEmail/gabrielpuneco@gmail.com`)
      .then((response) => {
        return response.data;
      });

    setOrders(data);
    console.log(data);
  };

  useEffect(() => {
    getOrderByEmail();
  }, []);

  useEffect(() => {
    console.log(orders);

    if (orders != undefined) {
      console.log(orders);

      const values: any = Object.values(orders);
      setValue(values);

      values.map((x: any) => console.log(x));
    }
  }, [orders]);

  useEffect(() => {
    console.log(value);
  }, [value]);

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
      <div className="px-20">
        <Table
          aria-label="Example table with custom cells"
          removeWrapper
          shadow="none"
          radius="none"
          className="border"
          classNames={{ th: "bg-light border-b-1 text-dark" }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody>
          
          </TableBody>
          {/* {orders == undefined ? (
            <TableBody emptyContent={"Você não possui pedidos no momento"}>
              {[]}
            </TableBody>
          ) : (
          
          +
            <TableBody>
              {orders.}
            </TableBody>
          )} */}
        </Table>
        <div>
          {value ? (
            value?.map((item: any) => {
              <p>AQUI:: {item[0]} </p>;
            })
          ) : (
            <>Necas</>
          )}
        </div>
      </div>
    </>
  );
}
