// Dados do usuário na tela na finalização da compra
"use client";
import React, { useState } from "react";
import Input from "./Input";
import Form from "./Form";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";

export default function UserData(props: any) {
  const { data: session } = useSession();

  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [telefone, setTelefone] = useState<string>();

  return (
    <>
      <h2>Seus Dados</h2>
      <div>
        <Form method="post">
          <Input
            type="text"
            id="usuarioNome"
            placeholder="Nome"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
          />
          <Input
            type="text"
            id="usuarioEmail"
            placeholder="Email"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            type="tel"
            id="usuarioTelefone"
            placeholder="Telefone"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTelefone(e.target.value)
            }
          />
          <Input type="submit" value="Confirmar Dados" />
        </Form>
      </div>
      {session && session.user ? (
        <></>
      ) : (
        <div>
          <p>________________ ou ________________</p>
          <SignInButton text="continuar com Google" />
        </div>
      )}
    </>
  );
}
