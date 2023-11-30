'use client'
import React from "react";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import { Link } from "@nextui-org/react";

export default function Faq({ ...props }: any) {
  const route = useRouter();

  const handleReturn = () => {
    route.push("/");
  };

  const qaPairs = [
    {
      question: "Quais são os materiais usados na fabricação dos produtos?",
      answer:
        "Privilegiamos o uso de tecidos de algodão, que são molhados anteriormente à confecção dos produtos. Também usamos aviamentos e acessórios de boa qualidade para evitar o desgaste das peças.",
    },
    {
      question: "Como rastrear meu pedido?",
      answer: "Você pode rastrear seu pedido com o código de rastreamento gerado pelos Correios no momento do envio.",
    },
    {
      question: "Posso devolver ou trocar um produto?",
      answer:
        "De acordo com o Código de Defesa do Consumidor, você tem até 7 (sete) dias para desistir das compras feitas pela Internet. Para devolução, é só entrar em contato através dos nossos canais (WhatsApp, e-mail e Direct do Instagram).",
    },
    {
      question: "Quais as formas de pagamentos aceitas?",
      answer: "Aceitamos Pix e Cartão de crédito",
    },
    {
      question: "Qual é o prazo de entrega?",
      answer: "O prazo de entrega do seu produto varia de acordo com os prazos estabelecidos pelos Correios. No momento do envio, você saberá o dia em que seu produto chegará em sua casa.",
    },
    {
      question: "Como cancelar um pedido?",
      answer: "É fácil: só entrar em contato através dos nossos canais de relacionamento (WhatsApp, e-mail e Direct do Instagram)",
    },
    {
      question: "Como é feito o envio do meu pedido?",
      answer: "Utilizamos os serviços dos Correios para enviar seu produto.",
    },
    {
      question: "Posso alterar o meu endereço de entrega após feito o pedido?",
      answer: "Pode sim. É só entrar em contato e informar o novo endereço. Mas fique tranquila e tranquilo: antes de enviar, entramos em contato para confirmar o endereço de entrega.",
    },    
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
        <h1 className="text-2xl text-center py-20  underline underline-offset-8 decoration-wavy">Perguntas Frequentes</h1>
        {qaPairs.map(({ question, answer }, index) => (
          <div key={index} className="py-4">
            <h2 className="text-2xl my-5">{question}</h2>
            <p className="text-lg tracking-wide text-justify leading-relaxed">{answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
