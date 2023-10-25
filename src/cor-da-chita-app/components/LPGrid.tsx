import Image from 'next/image';
import { MyButton } from "./ui/Button.tsx";


const LPGrid = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-2">
        <div className="grid-box bg-green flex items-center justify-center">
          <div className="grid-img-wrapper bg-white p-4">
            <Image src="/imgs/chita.jpeg" alt="Banner Image" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="grid-box bg-light flex flex-col items-center justify-center">
          <div className="elements text-left p-15">
          <p className="uppercase">Estandartes</p>
          <p className="py-8 font-thin">Com santos, bonequinhos e até poesia para alegrar seu ambiente! </p>
          <MyButton color="transparent" className="py-8">
            Ver produtos
          </MyButton>
          </div>
        </div>
        <div className="grid-box bg-light flex flex-col items-center justify-center">
          <div className="elements text-left p-20">
            <p className="uppercase">Cama e Mesa</p>
            <p className="py-8 font-thin">Toalhas, passadeiras, colchas e jogo americano dupla face em retalhos. Tudo feito de chita 100% algodão. </p>
            <MyButton color="transparent" className="py-8">
              Ver produtos
            </MyButton>
          </div>
        </div>
        <div className="grid-box bg-green flex items-center justify-center">
          <div className="grid-img-wrapper bg-white p-4">
            <Image src="/imgs/chita.jpeg" alt="Banner Image" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="grid-box bg-green flex items-center justify-center">
          <div className="grid-img-wrapper bg-white p-4">
            <Image src="/imgs/chita.jpeg" alt="Banner Image" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="grid-box bg-light flex flex-col items-center justify-center">
          <div className="elements text-left p-15">
          <p className="uppercase">Ecobags e Carteiras</p>
          <p className="py-8 font-thin">Com tamanho pra todo agrado, com zíper e bolsos interno e externo. </p>
          <MyButton color="transparent" className="py-8">
            Ver produtos
          </MyButton>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LPGrid;
