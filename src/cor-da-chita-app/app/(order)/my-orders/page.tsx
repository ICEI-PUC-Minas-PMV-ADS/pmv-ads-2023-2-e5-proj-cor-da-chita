"use client";
import { url } from "@/app/api/backend/webApiUrl";
import axios from "axios";
import React, { use, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import { useSession } from "next-auth/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import MyOrders from "../my-orders/page";

const TestOrders = () => {
  const route = useRouter();
  const { data: session } = useSession(); // REQUIRED DEFINIR

  const [orders, setOrders] = useState<any>();
  const [value, setValue] = useState<any>();

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
    const arrayOrders: any = [];

    if (orders != undefined) {
      console.log(orders[0]);

      for (let key in orders) {
        if (Object.prototype.hasOwnProperty.call(orders, key)) {
          console.log(orders[key]);
          arrayOrders.push(orders[key]);
        }
      }
    }
    setValue(arrayOrders);

    if (orders != undefined) console.log(orders);
    console.log(value);
    // setValue(orders.length);
  }, [orders]);

  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <>
      {/* <Link
        size="sm"
        as="button"
        className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={() => route.back()}
      >
        <ArrowLeft /> Retornar
      </Link> */}

      <div className="px-20">
        {/* <Table
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
            {value != undefined
              ? value.map((item: any) => (
                  <>
                    <TableRow key={item.id}>
                      <TableCell>T{item.userName}</TableCell>
                      <TableCell>CEO</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                  </>
                ))
              : "Não foi"}
          </TableBody>
        </Table> */}

        {value != undefined ? (
          value.map((item: any) => (
            <>
              <p>Número do Pedido: {item.id}</p>
              <p>Cliente: {item.userName}</p>
              <br />
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default TestOrders;
