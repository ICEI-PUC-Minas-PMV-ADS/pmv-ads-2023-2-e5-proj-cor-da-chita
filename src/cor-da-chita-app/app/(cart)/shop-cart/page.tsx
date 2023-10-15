// EM ANDAMENTO
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import CartCard from "@/components/CardCart";
import { Produto } from "@/lib/interface";


export default function ShopCart(...props: any) {
  const [productData, setProductData] = useState<Produto[] | undefined>([]);
  const[itensCart,setItensCart] = useState<string[]| undefined>([])
  useEffect(()=>{
    const carrinho = JSON.parse(localStorage.getItem('cartItens'))
    console.log(carrinho)
    setItensCart(carrinho)
    console.log(itensCart)
  },[])

  const  getCartProducts = async()=>{



  }



  return (
    <>
      {itensCart?.map((idProduto)=>(

        <CartCard id= {idProduto} />
      ))} 
   
      </>
  ) 
  }