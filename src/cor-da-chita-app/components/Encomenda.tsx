import { Link } from "@nextui-org/react";
import { MyButton } from "@/components/ui/Button";
import FlowerIcon2 from "@/assets/icons/FlowerIcon2";

export default function Encomenda() {
  const handleContactButtonClick = () => {
    const emailAddress = 'your-email@example.com';
    
    window.location.href = `mailto:${emailAddress}`;
  };

 
  return (
    <div className="bg-green  flex flex-col md:flex-row justify-around place-items-center gap-5 px-4 md:px-20 py-5">
      {/* <FlowerIcon2  style={{  color: 'white' }} /> */}
      <div>
      <h2 className="text-2xl text-white font-semibold font-open">
        Quer um produto Cor da Chita personalizado?
      </h2>
      <h2 className="text-2xl text-white">
        Faça sua encomenda!
      </h2>
      </div>
      <MyButton
        color="transparent"
        className="px-10 text-light mb-4 md:mb-0 md:mr-4 rounded-full border-2"
      >
        <Link
          isExternal
          className="text-white"
          href="https://api.whatsapp.com/send?phone=5583987261972"
          onClick={handleContactButtonClick}
        >
        Entrar em contato
        </Link>
      </MyButton>
      {/* <FlowerIcon2 style={{  color: 'white', strokeWidth: '0.5' }} /> */}
  </div>
  );
}
