import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { MyButton } from "./ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const images = [
  "Chita (1).png",   "Chita (2).png", "Chita (3).png", 
];

export default function Banner() {
  const route = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex: number) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex: number) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative h-screen bg-dark flex">
   <div className="flex-1/2 relative overflow-hidden">
  <div className="relative">
    <Image
      src={`/Chita/${images[currentImageIndex]}`}
      alt="Cor da Chita"
      style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
      className="responsive-image"
    />
    <div className="absolute inset-0 flex items-center justify-between">
  <div className="arrow left text-2xl text-white cursor-pointer z-20" onClick={prevImage}>
    {"<"}
  </div>
  <div className="arrow right text-2xl text-white cursor-pointer z-20" onClick={nextImage}>
    {">"}
  </div>
</div>

  </div>
</div>

      <div className="flex flex-col items-center justify-center text-center z-10 p-20">
        <div >
          <h1 className="text-4xl text-white font-serif">
            Arte com Chita & Cia para alegrar a vida o ano todo
          </h1>
          <p className="text-tiny text-white p-10 font-semibold" onClick={() => route.push("/about")}>
            Por Madriana Nóbrega
          </p>
          <Link href="/all-products">
            <MyButton color="green">Ver todos os produtos</MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
