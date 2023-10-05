"use client";
import React from "react";
import Link from "next/link";
import IconBagX from "@/assets/icons/IconBagX";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import CartCard from "@/components/CartCard";

export default function ShopCart(...props: any) {
  return (
    <>
      <CartCard />
    </>
  );
}
