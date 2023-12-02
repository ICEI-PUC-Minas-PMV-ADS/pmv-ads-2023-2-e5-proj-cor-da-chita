"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Banner from "../components/Banner";
import LPGrid from "../components/LPGrid";
import QuotesTabs from "../components/Tabs";
import InstagramComponent from "../components/InstagramComponent";
import FlowerIcon2 from '@/assets/icons/FlowerIcon2';


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
      <div className="bg-green flex flex-col md:flex-row justify-around gap-5 px-4 md:px-20 py-5">
      <div className='flex flex-row justify-between gap-20'>
        <FlowerIcon2 style={{ color: 'white' }} />
        <FlowerIcon2 style={{ color: 'white' }} />
        <FlowerIcon2 style={{ color: 'white' }} />
      </div>
      <div className=''>
        <h2 className="text-xl text-white font-open">
          Quer um produto Cor da Chita personalizado?
        </h2>
        <h2 className="text-xl text-white">Faça sua encomenda!</h2>
      </div>
      <Link
        className="text-white border rounded-full p-5 hover:scale-105 hover:opacity-80"
        href="https://api.whatsapp.com/send?phone=5583987261972"
      >
        Entrar em contato
      </Link>

      <div className='flex flex-row justify-between gap-20'>
        <FlowerIcon2 style={{ color: 'white' }} />
        <FlowerIcon2 style={{ color: 'white' }} />
        <FlowerIcon2 style={{ color: 'white' }} />
      </div>
    </div>
      <InstagramComponent />
    </main>
  );
}
