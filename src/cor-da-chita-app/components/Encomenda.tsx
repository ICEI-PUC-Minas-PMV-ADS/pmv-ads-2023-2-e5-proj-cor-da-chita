'use Client' 
import Link from "next/link";
import FlowerIcon2 from "@/assets/icons/FlowerIcon2";

export default function Encomenda() {
 
  return (
    <div className="bg-green  flex flex-col md:flex-row justify-around place-items-center gap-5 px-4 md:px-20 py-5">
      <FlowerIcon2  style={{  color: 'white' }} />
      <FlowerIcon2  style={{  color: 'white' }} />
      <FlowerIcon2  style={{  color: 'white' }} />
      <div>
      <h2 className="text-2xl text-white font-semibold font-open">
        Quer um produto Cor da Chita personalizado?
      </h2>
      <h2 className="text-2xl text-white">
        Faça sua encomenda!
      </h2>
      </div>
        <Link
          className="text-white border rounded-full p-5 hover:scale-105 hover:opacity-80"
          href="https://api.whatsapp.com/send?phone=5583987261972"
        >
        Entrar em contato
        </Link>
      <FlowerIcon2  style={{  color: 'white' }} />
      <FlowerIcon2  style={{  color: 'white' }} />
      <FlowerIcon2  style={{  color: 'white' }} />
  </div>
  );
}
