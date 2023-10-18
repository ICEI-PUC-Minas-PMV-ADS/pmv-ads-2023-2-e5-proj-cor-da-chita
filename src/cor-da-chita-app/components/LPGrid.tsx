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
      </div>
    </div>
  );
};

export default LPGrid;
