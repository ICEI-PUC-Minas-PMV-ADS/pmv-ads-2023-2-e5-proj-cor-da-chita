import React from "react";
import Image from 'next/image';


export default function Banner() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-4">Cor da Chita</h1>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
        <Image src="/imgs/chita.jpeg" alt="Banner Image" width={600} height={300} />
      </div>
    </div>
  );
}
