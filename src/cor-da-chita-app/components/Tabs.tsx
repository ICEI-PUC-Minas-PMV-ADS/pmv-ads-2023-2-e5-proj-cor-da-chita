import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

const quotes = [
  {
    quote: "Norte. A poesia é uma estrela que, farol, me guia e dessa vida-labirinto me abduz pela luz que irradia.",
    author: "Marineuma de Oliveira",
  },
  {
    quote: "O quintal de minha infância vem como que se desdobrando em outros.",
    author: "Paulo Coelho",
  },
  {
    quote: "O correr da vida embrulha tudo, a vida é assim: esquenta e esfria, aperta e daí afrouxa, sossega e depois desinquieta. O que ela quer da gente é coragem.",
    author: "Guimarães Rosa",
  },
  {
    quote: "Sabiá de setembro tem orvalho na voz. De manhã ele recita o sol.",
    author: "Manoel de Barros",
  },
  {
    quote: " Como dois e dois são quatro, sei que a vida vale a pena, embora o pão seja caro e a liberdade pequena.",
    author: "Ferreira Gullar",
  },
  
];

export default function QuotesTabs() {
  return (
    <div className="flex flex-col bg-light p-10 items-center">
      <Tabs aria-label="Options" radius="none" size="lg" variant="underlined" color="default" classNames={{ tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider" }}>
        {quotes.map((quoteData, index) => (
          <Tab key={index + 1} title={<SquareIcon />} className="flex flex-col items-center">
            <div className="flex-1 text-center p-2">
              <blockquote className="text-2xl font-light tracking-wide italic p-4 ">
                {quoteData.quote}
              </blockquote>
              <p className="text-medium font-medium text-gray-500 p-2">— {quoteData.author}</p>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

const SquareIcon = () => (
  <div className="m-3 w-10 h-2"></div>
);
