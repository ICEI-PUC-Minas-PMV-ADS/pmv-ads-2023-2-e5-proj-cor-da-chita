import Image from 'next/image';
import { MyButton } from "./ui/Button.tsx";
import Link from "next/link";

const LPGrid = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-3">
        {/* First row */}
        <div className="grid-box bg-green flex items-center justify-center">
          <div className="grid-img-wrapper bg-white p-4">
            {/* Your content for the first box in the first row */}
          </div>
        </div>
        <div className="grid-box bg-white flex items-center justify-center">
          <div className="elements text-left p-15">
            <p className="uppercase text-lg">Your Title</p>
            <p className="py-8 font-thin">Your description here.</p>
            <Link href="/all-products">
              <MyButton color="transparent" className="py-8">
                Ver produtos
              </MyButton>
            </Link>
          </div>
        </div>
        <div className="grid-box bg-green flex items-center justify-center">
          <div className="grid-img-wrapper bg-white p-4">
            {/* Your content for the third box in the first row */}
          </div>
        </div>

        {/* Second row */}
        <div className="grid-box bg-white flex items-center justify-center">
          <div className="elements text-left p-15">
            <p className="uppercase">Your Title</p>
            <p className="py-8 font-thin">Your description here.</p>
            <Link href="/all-products">
              <MyButton color="transparent" className="py-8">
                Ver produtos
              </MyButton>
            </Link>
          </div>
        </div>
        <div className="grid-box bg-green flex items-center justify-center">
          <div className="grid-img-wrapper bg-white p-4">
            {/* Your content for the second box in the second row */}
          </div>
        </div>
        <div className="grid-box bg-white flex items-center justify-center">
          <div className="elements text-left p-15">
            <p className="uppercase">Your Title</p>
            <p className="py-8 font-thin">Your description here.</p>
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
