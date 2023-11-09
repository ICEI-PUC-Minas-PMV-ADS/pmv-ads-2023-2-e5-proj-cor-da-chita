import { MyButton } from "./ui/Button.tsx";
import { Image, Link } from '@nextui-org/react';

const LPGrid = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-4">
        {/* First row */}
        <div className="grid-box bg-green flex items-center justify-center">
          <div className="grid-img-wrapper bg-white">
            <div
              style={{
                width: '300px', 
                height: '300px', 
                overflow: 'hidden',
              }}
            >
              <Image
                src="/Chita/IMG_6812 (1).png"
                width="300"
                height="300"
                layout="responsive"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
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
          <div className="grid-img-wrapper bg-white">
            <div
              style={{
                width: '300px', 
                height: '300px', 
                overflow: 'hidden',
              }}
            >
              <Image
                src="/Chita/IMG_6813 (1).png"
                width="300"
                height="300"
                layout="responsive"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
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
          <div className="grid-img-wrapper bg-white">
            <div
              style={{
                width: '300px', 
                height: '300px', 
                overflow: 'hidden',
              }}
            >
              <Image
                src="/Chita/IMG_6814 (1).png"
                width="300"
                height="300"
                layout="responsive"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
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
          <div className="grid-img-wrapper bg-white">
            <div
              style={{
                width: '300px', 
                height: '300px', 
                overflow: 'hidden',
              }}
            >
              <Image
                src="/Chita/IMG_6811 (1).png"
                width="300"
                height="300"
                layout="responsive"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LPGrid;
