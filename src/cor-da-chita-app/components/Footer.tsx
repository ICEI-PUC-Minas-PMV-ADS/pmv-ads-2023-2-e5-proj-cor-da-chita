import IconInstagram from "@/assets/icons/InstagramIcons";
import IconWhatsapp from "@/assets/icons/WhatsappIcon";
import React from "react";

export default function Footer({ children, ...props }: any) {
  return (
    <footer {...props}>
      <div>
        <h3>
          <strong>COR DA CHITA</strong>
        </h3>
        <p>Feito em João Pessoa, Paraíba</p>
        <p>Por Madriana Nóbrega</p>
        <p>&copy; 2020-2023</p>
      </div>
      <div>
        <h4>
          <strong>INFORMAÇÃO</strong>
          <p>Sobre Cor da Chita</p>
          <p>Perguntas Frequentes</p>
        </h4>
        <div>
          <h4>
            <strong>CONTATO</strong>
            <p>Instagram</p>
            <p>
              <IconInstagram />
            </p>
            <p>WhatsApp</p>
            <p>
              <IconWhatsapp />
            </p>
          </h4>
        </div>
      </div>
    </footer>
  );
}
