// Dados do usuário na tela na finalização da compra
"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";

import Form from "../../components/ui/Form";

import MailIcon from "../../assets/icons/MailIcon";
import UserIcon from "../../assets/icons/UserIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import GoogleIcon from "@/assets/icons/GoogleIcon";

export default function UserData() {
  const { data: session } = useSession();

  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [telefone, setTelefone] = useState<string>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("hello");
    return "";
  };

  return (
    <>
      <h2>Seus Dados</h2>
      <div>
        <Form method="post">
          <Input
            type="text"
            label="Nome"
            size="sm"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            startContent={
              <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="email"
            label="Email"
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="tel"
            label="Telefone"
            size="sm"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            startContent={
              <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Button color="success" size="md" onClick={handleClick}>
            Confirmar Dados
          </Button>
        </Form>
      </div>
      {session && session.user ? (
        <></>
      ) : (
        <div>
          <p>________________ ou ________________</p>
          <Button
            color="secondary"
            size="sm"
            onClick={() => signIn("google")}
            startContent={
              <GoogleIcon className="text-2xl  pointer-events-none flex-shrink-0" />
            }
          >
            Continuar com Google
          </Button>
        </div>
      )}
    </>
  );
}
