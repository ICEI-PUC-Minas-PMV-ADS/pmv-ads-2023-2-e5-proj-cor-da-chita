"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MyButton } from "@/components/ui/Button";
import Banner from "../components/Banner";
import LPGrid from "../components/LPGrid";
import QuotesTabs from "../components/Tabs";
import InstagramComponent from "../components/InstagramComponent";

export default function Home() {
  const route = useRouter();
  return (
    <main className="bg-light">
      <Banner />
      <QuotesTabs />
      {/* <div className="bg-dark  text-center">
        <Link href="/all-products">
          <h2 className="text-3xl text-white p-20 ">Ver todos os produtos</h2>
        </Link>
      </div> */}
      <LPGrid />
      <div className="bg-green  flex justify-around p-20 px-20">
        <Link href="/all-products">
          <h2 className="text-3xl text-white font-serif text-semibold py-2 ">Quer um produto Cor da Chita personalizado?</h2>
          <h3  className="text-2xl text-light text-white">Faça sua encomenda aqui</h3>
        </Link>
        <MyButton color="transparent" className="px-10 text-light">Entre em contato aqui</MyButton>
      </div>
      <InstagramComponent />
    </main>
  );
}
