import React from "react";
import Image from 'next/image';
import { MyButton } from "./ui/Button.tsx";
import Link from "next/link";


export default function Banner() {
  return (
    <div className="relative h-screen flex justify-center bg-dark">
      <div className="text-center z-10 p-20">
        <h1 className="text-4xl text-white">Arte com Chita & Cia para alegrar a vida o ano todo</h1>
        <p className="text-tiny text-white p-10">Por Madriana Nóbrega</p>
        <Link href="/all-products">
        <MyButton color="green">
          Ver todos os produtos
        </MyButton>
        </Link>
        <div>
        </div>
      </div>
      <div className="absolute bottom-0">
      <div className="banner-img-wrapper bg-white"
          style={{
            width: '900px',
            height: '450px',
            overflow: 'hidden',
          }}
        >
        {/* <Image src="/imgs/chita.jpeg" alt="Banner Image" layout="fill" objectFit="cover" /> */}
        </div>
      </div>
    </div>
  );
}
