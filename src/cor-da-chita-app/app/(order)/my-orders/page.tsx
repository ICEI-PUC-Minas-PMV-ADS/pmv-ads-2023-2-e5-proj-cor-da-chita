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

  const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

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
    { name: "Item", uid: "item" },
    { name: "Cliente", uid: "cliente" },
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
                {value != undefined ? (
                  value.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{formatedDate(item.orderDate)}</TableCell>
                      <TableCell>
                        <Accordion>
                          <AccordionItem
                            key="1"
                            aria-label="Produtos"
                            title="Produtos"
                          >
                            {item.items != undefined ? (
                              item.items?.map((item: any) => (
                                <p>{item.productName}</p>
                              ))
                            ) : (
                              <></>
                            )}
                          </AccordionItem>
                        </Accordion>
                      </TableCell>
                      <TableCell>{item.userName}</TableCell>
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
