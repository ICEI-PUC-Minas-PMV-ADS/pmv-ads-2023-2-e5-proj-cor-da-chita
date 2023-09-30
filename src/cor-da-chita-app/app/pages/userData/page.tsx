// Dados do usuário na tela na finalização da compra
"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

import Form from "../../components/Form";
import SignInButton from "../../components/SignInButton";

import { MailIcon } from "../../icons/MailIcon";
import { UserIcon } from "../../icons/UserIcon";
import InputField from "../../components/InputField";
import Btn from "../../components/Btn";

export default function UserData(props: any) {
  const { data: session } = useSession();

  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [telefone, setTelefone] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    console.log(newValue);

    setNome(newValue);
  };

  return (
    <>
      <h2>Seus Dados</h2>
      <div className="bg-sky-950">
        <Form method="post">
          <InputField
            type="text"
            label="Nome"
            size="sm"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
            startContent={
              <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <InputField
            type="email"
            label="Email"
            size="sm"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <InputField
            type="tel"
            label="Telefone"
            size="sm"
            value={telefone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTelefone(e.target.value)
            }
          />
          <Btn color="success" size="md" onClick={handleChange}>
            Confirmar Dados
          </Btn>
        </Form>
      </div>
      {session && session.user ? (
        <></>
      ) : (
        <div>
          <p>________________ ou ________________</p>
          <SignInButton size="md" text="continuar com Google" />
        </div>
      )}

      <div>{nome}</div>
    </>
  );
}
