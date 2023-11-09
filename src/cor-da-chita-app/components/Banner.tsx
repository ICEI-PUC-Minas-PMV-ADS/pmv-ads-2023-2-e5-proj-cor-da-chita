import React from "react";
import { Image } from "@nextui-org/react";
import { MyButton } from "./ui/Button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative h-screen bg-dark">
      <div style={{ position: 'relative', height: '100%', overflow: 'hidden'}}>
        <Image
          src="/Chita/IMG_6811 (1).png"
          alt="Cor da Chita"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-20">
          <h1 className="text-4xl text-white">
            Arte com Chita & Cia para alegrar a vida o ano todo
          </h1>
          <p className="text-tiny text-white p-10">Por Madriana Nóbrega</p>
          <Link href="/all-products">
            <MyButton color="green">Ver todos os produtos</MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
