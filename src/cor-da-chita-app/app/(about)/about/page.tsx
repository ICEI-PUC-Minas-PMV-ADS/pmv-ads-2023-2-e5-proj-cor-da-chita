'use client'
import React from "react";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import { Link } from "@nextui-org/react";


  export default function About({ ...props }: any) {
    const route = useRouter();
  
    const handleReturn = () => {
      route.push("/");
    };
  
    const content = [
      "Bem-vinda e bem-vindo à Cor da Chita, o lugar certo para você que aprecia a alegria das cores e a originalidade deste tecido, que é a cara do Brasil.",
      "A Cor da Chita é uma loja virtual comandada por mim, Madriana Nóbrega, uma professora de História que resolveu se aventurar no mundo da produção artesanal de objetos pessoais e de decoração feitos de forma intuitiva, tendo o tecido chita como uma das principais matérias-primas.",
      "Por aqui, você vai encontrar estandartes da tradição junina, com poesia pintada e com as famosas bonequinhas de pano, representando famílias, amizades, romances...",
      "As ecobags são outra fonte de inspiração para clientes que querem cores, temas, tamanhos e tecidos variados. Qualquer bolsa pode virar um espaço precioso para exercer a criatividade.",
      "As colchas/toalhas/almofadas de retalho são as queridinhas por aqui, provando que o Brasil inteiro tem uma raiz afetiva que gera uma identidade muito forte com a nossa cultura.",
      "Escolhemos a chita de algodão, um dos tecidos mais antigos produzidos no Brasil, como uma das principais fontes para criação de peças originais. Elas vão fazer os seus dias e ambientes mais alegres e coloridos.",
    ];
  
    return (
      <>
        <Link
          size="sm"
          as="button"
          className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
          onClick={handleReturn}
        >
          <ArrowLeft /> Retornar
        </Link>
        <div className="px-20">
          <h1 className="text-2xl  py-5 text-center underline underline-offset-8 decoration-wavy m-10">Pode entrar, a casa é sua</h1>
          {content.map((sentence, index) => (
            <p key={index} className="text-xl  tracking-wide text-justify leading-relaxed py-2">
              {sentence}
            </p>
          ))}
        </div>
      </>
    );
  }
