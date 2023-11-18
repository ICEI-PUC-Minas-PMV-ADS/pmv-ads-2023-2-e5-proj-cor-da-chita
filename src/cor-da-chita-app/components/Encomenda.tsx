import Link from "next/link";
import { MyButton } from "@/components/ui/Button";

export default function Encomenda() {
    return (
        <div className="bg-green  flex justify-around p-20 px-20">
        <Link href="/all-products">
          <h2 className="text-3xl text-white font-serif text-semibold py-2 ">
            Quer um produto Cor da Chita personalizado?
          </h2>
          <h3 className="text-2xl text-light text-white">
            Faça sua encomenda aqui
          </h3>
        </Link>
        <MyButton color="transparent" className="px-10 text-light">
          Entre em contato aqui
        </MyButton>
      </div>
    );
  }
  