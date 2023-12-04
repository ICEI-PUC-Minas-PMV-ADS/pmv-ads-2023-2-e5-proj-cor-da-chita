import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { MyButton } from "./ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";

const images = ["Banner (1).png", "Banner (2).png", "Banner (3).png", "Banner (4).png"];

const preloadImages = (images: string[]) => {
  images.forEach((image) => {
    const img = new Image();
    img.src = `/Chita/${image}`;
  });
};

export default function Banner() {
  const route = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    preloadImages(images);
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
  };

  const springProps = useSpring({
    opacity: isLoading ? 0 : 1,
  });

  return (
    <div className="relative h-screen bg-dark flex flex-col md:flex-row">
      {/* Left column with the image */}
      <div className="md:w-2/3 relative overflow-hidden">
        <animated.img
          src={`/Chita/${images[currentImageIndex]}`}
          alt="Cor da Chita"
          style={{ objectFit: "cover", ...springProps }}
          loading={isLoading ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
        />
        <div className="absolute inset-0 flex flex-row items-center justify-between">
          <div
            className="flex-col text-2xl text-white cursor-pointer z-20 p-5 m-10 rounded-full bg-dark opacity-80"
            onClick={prevImage}
          >
            <ArrowLeft className="hover:scale-125" />
          </div>
          <div
            className="flex-col text-2xl text-white cursor-pointer z-20 p-5 m-10 rounded-full bg-dark opacity-80"
            onClick={nextImage}
          >
            <ArrowRight className="hover:scale-125" />
          </div>
        </div>
      </div>

      {/* Right column with text and buttons */}
      <div className="md:w-1/3 flex flex-col items-center justify-center text-center z-10 p-20">
        <div>
          <h1 className="text-4xl text-white font-serif">
            Arte com Chita & Cia para alegrar a vida o ano todo
          </h1>
          <p
            className="text-tiny text-white p-10 font-semibold"
            onClick={() => route.push("/about")}
          >
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