import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { MyButton } from "./ui/Button.tsx";
import Link from "next/link";

const images = [
  "Grid (1).png",
  "Grid (2).png",
  "Grid (3).png",
  "Grid (4).png",
  "Grid (5).png",
  "Grid (6).png",
  "Grid (7).png",
];

const LPGrid = () => {
  const [randomImage1, setRandomImage1] = useState("");
  const [randomImage2, setRandomImage2] = useState("");
  const [randomImage3, setRandomImage3] = useState("");
  const [randomImage4, setRandomImage4] = useState("");

  useEffect(() => {
    const generateRandomImage = () => {
      const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      };

      let image1, image2, image3, image4;

      // Ensure that the images are different
      do {
        image1 = getRandomImage();
        image2 = getRandomImage();
        image3 = getRandomImage();
        image4 = getRandomImage();
      } while (image1 === image2 || image1 === image3 || image1 === image4 || image2 === image3 || image2 === image4 || image3 === image4);

      setRandomImage1(image1);
      setRandomImage2(image2);
      setRandomImage3(image3);
      setRandomImage4(image4);
    };

    generateRandomImage();
  }, []); 
  
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
        {/* First row */}
        <div
          className="grid-box bg-white flex items-center justify-center order-1"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20">
            <p className="uppercase sm:text-base lg:text-lg">Estandartes</p>
            <p className="2xl:py-8 font-light">Enfeitados com santos, bonequinhos, poesia e muito mais pra alegrar seu ambiente.</p>
            <Link href="/all-products/Estandartes">
              <MyButton color="transparent" className="py-8 my-2">
                Ver produtos
              </MyButton>
            </Link>
          </div>
        </div>
        <div
          className="grid-box bg-green flex items-center justify-center  order-2"
          style={{ height: "250px" }}
        >
          <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={`/Chita/${randomImage1}`}
              className={`z-0 w-full h-full object-cover`}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: 'cover' }}
            />
          </div>
        </div>
        <div
          className="grid-box bg-white flex items-center justify-center order-3"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20">
          <p className="uppercase text-lg">Cama e Mesa</p>
          <p className="2xl:py-8 font-light">Toalhas, passadeiras, colchas e jogo americano, etc.</p>
            <Link href="/all-products/Cama e Mesa">
              <MyButton color="transparent" className="py-8 my-2">
                Ver produtos
              </MyButton>
            </Link>
          </div>
        </div>

        <div
          className="grid-box bg-green flex items-center justify-center order-4"
          style={{ height: "250px" }}
        >
          <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={`/Chita/${randomImage2}`}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: 'cover' }}
            />
          </div>
        </div>
       
        <div
          className="grid-box bg-green flex items-center justify-center order-5 hidden sm:inline-block"
          style={{ height: "250px" }}
        >
          <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={`/Chita/${randomImage3}`}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: 'cover' }}
            />
          </div>
        </div>

        <div
          className="grid-box bg-white flex items-center justify-center order-6"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20 ">
          <p className="uppercase text-lg">Ecobags e Carteiras</p>
            <p className="2xl:py-8 font-light">De tamanho para todo agrado, zíper e bolsos internos e externos</p>
            <Link href="/all-products/Ecobags e Carteiras">
              <MyButton color="transparent" className="py-8 my-2">
                Ver produtos
              </MyButton>
            </Link>
          </div>
        </div>

        <div
          className="grid-box bg-green flex items-center justify-center order-7"
          style={{ height: "250px" }}
        >
          <div
            className="grid-img-wrapper bg-white bg-center"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={`/Chita/${randomImage4}`}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: 'cover' }}
            />
          </div>
        </div>

        <div
          className="grid-box bg-white flex items-center justify-center order-8"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20">
            <p className="uppercase text-lg">E muito mais</p>
            <p className="2xl:py-8 font-light">Vem olhar nossa seleção, tem Chita para todo gosto!</p>
            <Link href="/all-products">
              <MyButton color="transparent" className="py-8 my-2">
                Ver produtos
              </MyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LPGrid;
