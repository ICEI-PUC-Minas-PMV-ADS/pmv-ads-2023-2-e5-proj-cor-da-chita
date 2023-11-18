"use client";
import React from "react";
import LinkWhatsApp from "./links/LinkWhatsApp";
import LinkInstagram from "./links/LinkInstagram";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function Footer({ children, ...props }: any) {
  const route = useRouter();
  return (
    <footer {...props}>
      <div className="grid grid-cols-2  p-5 bg-dark text-light text-tiny">
        <div className="p-5">
          <h3>
            <strong>COR DA CHITA</strong>
          </h3>
          <br />
          <p className="py-1">Feito em João Pessoa, Paraíba</p>
          <p className="py-1">Por Madriana Nóbrega</p>
          <p className="py-1">&copy; 2020-2023</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="place-content-center p-5">
            <h4>
              <strong>INFORMAÇÃO</strong>
            </h4>
            <br />
            <Link href="/about">
              <p className="text-tiny py-1">Sobre Cor da Chita</p>
            </Link>   
            <Link href="/questions">
              <p className="text-tiny py-1">Perguntas Frequentes</p>
            </Link>   
          </div>
          <div className="place-content-center p-5">
            <h4>
              <strong>CONTATO</strong>
            </h4>
            <br />
            <div className="flex flex-col">
              <LinkInstagram />
              <LinkWhatsApp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
