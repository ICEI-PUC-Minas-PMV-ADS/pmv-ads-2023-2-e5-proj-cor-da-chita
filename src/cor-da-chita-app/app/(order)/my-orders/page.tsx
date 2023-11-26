"use client";
import { url } from "@/app/api/backend/webApiUrl";
import axios from "axios";
import React, { use, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import { useSession } from "next-auth/react";
import {
  Accordion,
  AccordionItem,
  Link,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

function formatedDate(originalDate: string) {
  const data = new Date(originalDate);

  // padStart garante 2 dígitos
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const hora = String(data.getHours()).padStart(2, "0");
  const minuto = String(data.getMinutes()).padStart(2, "0");
  const segundo = String(data.getSeconds()).padStart(2, "0");

  const dataFormatada = `${dia}/${mes}/${ano}, às ${hora}:${minuto}:${segundo} horas`;

  return dataFormatada;
}

const MyOrders = () => {
  const route = useRouter();
  const { data: session } = useSession();

  const [orders, setOrders] = useState<any>();
  const [value, setValue] = useState<any>();

  const getOrderByEmail = async (activeUserEmail: string) => {
    const data = await axios
      .get(`${url}/Order/OrdersWithEmail/${activeUserEmail}`)
      .then((response) => {
        return response.data;
      });

    setOrders(data);

    console.log(data);
  };

  // Quando atualiza a page ele não reconhece o user
  useEffect(() => {
    const activeUserEmail = session?.user?.email;

    console.log(activeUserEmail);

    if (activeUserEmail) {
      getOrderByEmail(activeUserEmail);
    } else {
      route.push("/shop-cart");
    }
  }, []);

  useEffect(() => {
    const arrayOrders: any = [];

    if (orders != undefined) {
      for (let key in orders) {
        if (Object.prototype.hasOwnProperty.call(orders, key)) {
          // console.log(orders[key]);
          // console.log(orders[key].items);
          arrayOrders.push(orders[key]);
        }
      }
    }

    setValue(arrayOrders);
  }, [orders]);

  const columns = [
    { name: "Número Pedido", uid: "numpedido" },
    { name: "Data", uid: "data" },
    { name: "Itens", uid: "item" },
    { name: "Total", uid: "total" },
  ];

  return (
    <>
      {session && session.user ? (
        <>
          <Link
            size="sm"
            as="button"
            className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
            onClick={() => route.back()}
          >
            <ArrowLeft /> Retornar
          </Link>
          <div className="px-10 mx-auto">

        <div className="font-serif pb-10">
          <h2 className="text-2xl text-center">Meus Pedidos</h2>
        </div>
            <Table
              aria-label="Example table with custom cells"
              removeWrapper
              shadow="none"
              radius="none"
              className="border"
              classNames={{ th: "bg-light border-b-1 font-open text-lg font-thin text-dark text-center py-5" }}
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
                {value != undefined ? (
                  value.map((item: any) => (
                    <TableRow className="text-center" key={item.id}>
                      <TableCell className="py-10">{item.orderNumber}</TableCell>
                      <TableCell className="py-10" >{formatedDate(item.orderDate)}</TableCell>
                      <TableCell className="py-10">
                            {item.items != undefined ? (
                              item.items?.map((item: any) => (
                                  <p>{item.productName}  R${item.productPrice.toFixed(2)
                                    .toString()
                                    .replace(".", ",")}  ({item.productQuantity}x)</p>
                              ))
                            ) : (
                              <></>
                            )}
                      </TableCell>
                      <TableCell className="py-10"><b>R$ {item.totalPriceProducts.toFixed(2).toString().replace('.',',')}</b></TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>
                      <Spinner size="sm" />
                    </TableCell>
                    <TableCell>
                      <Spinner size="sm" />
                    </TableCell>
                    <TableCell>
                      <Spinner size="sm" />
                    </TableCell>
                    <TableCell>
                      <Spinner size="sm" />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MyOrders;
