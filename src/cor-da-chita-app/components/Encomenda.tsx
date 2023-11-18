import { Link } from "@nextui-org/react";
import { MyButton } from "@/components/ui/Button";

export default function Encomenda() {
  const handleContactButtonClick = () => {
    const emailAddress = 'your-email@example.com';
    
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="bg-green  flex flex-col md:flex-row justify-between px-4 md:px-20 py-5">
    <div className="mb-4 md:mb-0">
      <h2 className="text-2xl text-white font-serif text-semibold py-2">
        Quer um produto Cor da Chita personalizado?
      </h2>
      <h3 className="text-xl text-light text-white">
        Faça sua encomenda!
      </h3>
    </div>

    <div className="flex flex-col md:flex-row md:place-self-center h-full">
      <MyButton
        color="transparent"
        className="px-10 text-light mb-4 md:mb-0 md:mr-4"
      >
        <Link
          isExternal
          className="text-white"
          href="https://api.whatsapp.com/send?phone=5583987261972"
        >
          Entre em contato aqui
        </Link>
      </MyButton>
    </div>
  </div>
  );
}
