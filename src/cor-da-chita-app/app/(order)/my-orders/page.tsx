// Dados de envio na finalização da compra
"use client";
import React, { useContext, useEffect, useState } from "react";

import { Button, Input, Link, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { MyButton } from "@/components/ui/Button";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";

import { url } from "@/app/api/backend/webApiUrl";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { useRouter } from "next/navigation";
import Cep from "@/app/api/cep/cep";
import { CepContext } from "@/contexts/CepContext/CepContext";
import axios from "axios";

export default function MyOrders({ ...props }: any) {
  const { data: session } = useSession();
  const route = useRouter();


  const user = useContext(UserContext);
  const address = useContext(AddressContext);
  const { saveCepContext } = useContext(CepContext); // Se envio por correios
  const [orders,setOrders] = useState()
  const columns = [
    {name: "NAME", uid: "name"},
    {name: "ROLE", uid: "role"},
    {name: "STATUS", uid: "status"},
    {name: "ACTIONS", uid: "actions"},
  ];

  const getOrderByEmail = async()=>{

const res = await axios.get(`${url}/Order/OrdersWithEmail/gabrielpuneco@gmail.com`).then(r=>{
  return r.data
})
     
console.log(res)

  }

useEffect(()=>{

getOrderByEmail()

},[])

  return (
    <>
    
      <div className="px-20">
      
      <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      {orders==undefined ?
       <TableBody emptyContent={"Você não possui pedidos no momento"}>{[]}</TableBody>
      
      :
      <TableBody emptyContent={"Você não possui pedidos no momento"}>{[]}</TableBody>
    }
    </Table>
      </div>
    </>
  );
}
