import React from "react";
import {Image} from "@nextui-org/react";
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
      </div>
      <div className="absolute bottom-0">
      <div className="bg-white"
          style={{
            width: '900px',
            height: '450px',
          }}
        >
        <Image src="" alt="Banner Image"/>
        </div>
      </div>
    </div>
  );
}
