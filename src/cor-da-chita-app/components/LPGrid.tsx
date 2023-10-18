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
          <p className="text-white mb-4">Coluna 2</p>
          <MyButton color="transparent">
            Ver produtos
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default LPGrid;
