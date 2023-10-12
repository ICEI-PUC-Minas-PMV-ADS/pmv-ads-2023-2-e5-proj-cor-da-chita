import React from "react";
import Image from 'next/image';
import { MyButton } from "./ui/Button.tsx";


export default function Banner() {
  return (
    <div className="relative h-screen flex justify-center bg-black">
      <div className="text-center z-10 pt-20">
        <h1 className="text-4xl font-bold text-white">Arte com Chita & Cia para alegrar a vida o ano todo</h1>
        <div>
      <div className="pt-20">
      <MyButton>
        Ver todos os produtos
      </MyButton>
      </div>
        </div>
      </div>
      <div className="absolute bottom-0">
      <div className="banner-img-wrapper"
          style={{
            width: '600px',
            height: '300px',
            overflow: 'hidden',
          }}
        >
        <Image src="/imgs/chita.jpeg" alt="Banner Image" width={600} height={300} />
        </div>
      </div>
    </div>
  );
}
