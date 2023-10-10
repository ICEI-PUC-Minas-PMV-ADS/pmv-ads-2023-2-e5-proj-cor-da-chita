// EM ANDAMENTO
"use client";
import React, { useState } from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import CartCard from "@/components/CartCard";
import { Produto } from "@/lib/interface";

export default function ShopCart(...props: any) {
  const [productData, setProductData] = useState<Produto[] | undefined>([]);

  return (
    <>
      <CartCard />
    </>
  );
}
