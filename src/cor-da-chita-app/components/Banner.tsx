import React from "react";
import { Image } from "@nextui-org/react";
import { MyButton } from "./ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Banner() {
  const route = useRouter();
  return (
    <div className="relative h-screen bg-dark flex">
      <div className="flex-1/2 relative overflow-hidden">
        <Image
          src="/Chita/IMG_6811 (1).png"
          alt="Cor da Chita"
          style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
          className="responsive-image"
        />
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
      <style jsx>{`
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
        }

        .responsive-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 640px) {
          .flex {
            flex-direction: column;
          }
          .responsive-image {
            height: 100%;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
