import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { MyButton } from "./ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";

const images = [
  "Banner (1).png",   "Banner (2).png", "Banner (3).png", "Banner (4).png"
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
        <Image
          src={`/Chita/${images[currentImageIndex]}`}
          alt="Cor da Chita"
          style={{ objectFit: "cover" }}
        />
    <div className="absolute inset-0 flex flex-row items-center justify-between">
      <div className="flex-col text-2xl text-white cursor-pointer z-20 p-10 bg-dark" onClick={prevImage}>
        <ArrowLeft className="hover:scale-125" />
      </div>
      <div className="flex-col text-2xl text-white cursor-pointer z-20 p-10 bg-dark " onClick={nextImage}>
      <ArrowRight className="hover:scale-125" />
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
