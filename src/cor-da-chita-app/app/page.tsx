"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MyButton } from "@/components/ui/Button";
import Banner from "../components/Banner";
import LPGrid from "../components/LPGrid";
import QuotesTabs from "../components/Tabs";
import InstagramComponent from "../components/InstagramComponent";
import Encomenda from "@/components/Encomenda";


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
      <Encomenda />
      <InstagramComponent />
    </main>
  );
}
