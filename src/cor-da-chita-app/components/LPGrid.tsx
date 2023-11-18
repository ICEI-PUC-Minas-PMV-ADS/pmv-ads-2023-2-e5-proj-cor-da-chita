import { MyButton } from "./ui/Button.tsx";
import { Image, Link } from "@nextui-org/react";

const LPGrid = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* First row */}
        <div
          className="grid-box bg-white flex items-center justify-center order-1"
          style={{ height: "250px" }}
        >
          <div className="elements text-left p-20">
            <p className="uppercase sm:text-base lg:text-lg">Estandartes</p>
            <p className="2xl:py-8 lg:py-4 md:py-4 font-light">Enfeitados com santos, bonequinhos, poesia e muito mais pra alegrar seu ambiente.</p>
            <Link href="/all-products/Estandartes">
              <MyButton color="transparent" className="py-8">
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
            className="grid-img-wrapper bg-white"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/Chita/IMG_6812 (1).png"
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
          <p className="2xl:py-8 lg:py-4 md:py-5 font-light">Toalhas, passadeiras, colchas e jogo americano, etc.</p>
            <Link href="/all-products/Cama e Mesa">
              <MyButton color="transparent" className="py-8">
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
            className="grid-img-wrapper bg-white"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/Chita/IMG_6813 (1).png"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: 'cover' }}
            />
          </div>
        </div>
       
        <div
          className="grid-box bg-green flex items-center justify-center order-5"
          style={{ height: "250px" }}
        >
          <div
            className="grid-img-wrapper bg-white"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/Chita/IMG_6814 (1).png"
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
            <p className="2xl:py-8 lg:py-4 md:py-5 font-light">Com tamanho para todo agrado, com zíper e bolsos internos e externos</p>
            <Link href="/all-products/Ecobags e Carteiras">
              <MyButton color="transparent" className="py-8">
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
            className="grid-img-wrapper bg-white"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/Chita/IMG_6811 (1).png"
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
            <p className="2xl:py-8 lg:py-4 md:py-5 font-light">Vem olhar nossa seleção, tem Chita para todo gosto!</p>
            <Link href="/all-products">
              <MyButton color="transparent" className="py-8">
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
