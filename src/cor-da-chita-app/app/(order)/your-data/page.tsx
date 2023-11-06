// Dados do usuário na tela na finalização da compra
"use client";
import React, { useContext, useState, useMemo, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import Form from "../../../components/ui/Form";

import MailIcon from "../../../assets/icons/MailIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import GoogleIcon from "@/assets/icons/GoogleIcon";

import { UserContext } from "@/contexts/UserContext/UserContext";

export default function UserData() {
  const { data: session } = useSession();

  const user = useContext(UserContext);
  const route = useRouter();

  // Habilita / Desabilita input de acordo com login
  const isDisabled = session && session.user ? true : false;

  // Controla mensagem de erro
  const [missInfo, setMissInfo] = useState(false);
  const validadeData = !user.name || !user.email || !user.phone;

  // Validação de email
  const [value, setValue] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  useEffect(() => {
    if (session) {
      user.setName(session?.user?.name ?? "");
      user.setEmail(session?.user?.email ?? "");
    }
  });

  return (
    <section>
      <h2>Seus Dados</h2>
      <article>
        <Form method="post">
          <div>
            <Input // Nome Completo
              type="text"
              label="Nome Completo"
              size="sm"
              value={user.name}
              autoFocus
              isRequired
              isDisabled={isDisabled}
              isClearable
              color={
                !isDisabled && missInfo && !user.name ? "danger" : undefined
              }
              errorMessage={
                !isDisabled &&
                missInfo &&
                !user.name &&
                "Favor preencher seu nome completo"
              }
              onClear={() => user.setName("")}
              onChange={(e) => {
                user.setName(e.target.value);
              }}
              startContent={
                <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input // Email
              type="email"
              label="Email"
              size="sm"
              value={user.email}
              isRequired
              isDisabled={isDisabled}
              isClearable
              color={
                isInvalid || (!isDisabled && missInfo && !user.email)
                  ? "danger"
                  : undefined
              }
              errorMessage={
                isInvalid || (!isDisabled && missInfo && !user.email)
                  ? "Favor entrar com um e-mail válido"
                  : ""
              }
              onValueChange={setValue}
              onClear={() => user.setEmail("")}
              onChange={(e) => user.setEmail(e.target.value)}
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input // Telefone
              type="tel"
              label="Telefone"
              size="sm"
              value={user.phone}
              isRequired
              isClearable
              color={missInfo && !user.phone ? "danger" : undefined}
              errorMessage={
                missInfo && !user.phone && "Favor preencher seu telefone"
              }
              onClear={() => user.setPhone("")}
              onChange={(e) => user.setPhone(e.target.value)}
              startContent={
                <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <div>
            <Button // Confirmar Dados
              color="success"
              size="md"
              onClick={() =>
                validadeData ? setMissInfo(true) : route.push("/shipping-data")
              }
            >
              Confirmar Dados
            </Button>
          </div>
        </Form>
      </article>

      <article>
        {session && session.user ? (
          <></>
        ) : (
          <div>
            <p>________________ ou ________________</p>
            <Button // Continuar com Google
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
      </article>
    </section>
  );
}
