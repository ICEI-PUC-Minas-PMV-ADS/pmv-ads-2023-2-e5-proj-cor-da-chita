// Dados do usuário na tela na finalização da compra
"use client";
import React, { useContext, useState } from "react";
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

  // Seta Nome e Email de acordo com o login
  const isName = isDisabled ? session?.user?.name ?? "" : user.name;
  const isEmail = isDisabled ? session?.user?.email ?? "" : user.email;

  // Validação de email
  const [value, setValue] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const handleClick = () => {
    alert("Programar Dados do Usuário");
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
            value={isName}
            isRequired
            isDisabled={isDisabled}
            isClearable
            onClear={() => user.setName("")}
            onChange={(e) => user.setName(e.target.value)}
            startContent={
              <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="email"
            label="Email"
            size="sm"
            value={isEmail}
            isRequired
            isDisabled={isDisabled}
            isClearable
            color={isInvalid ? "danger" : undefined}
            errorMessage={isInvalid && "Favor entrar com um e-mail válido"}
            onValueChange={setValue}
            onClear={() => user.setEmail("")}
            onChange={(e) => user.setEmail(e.target.value)}
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="tel"
            label="Telefone"
            size="sm"
            value={user.phone}
            isRequired
            isClearable
            onClear={() => user.setPhone("")}
            onChange={(e) => user.setPhone(e.target.value)}
            startContent={
              <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Button
            color="success"
            size="md"
            onClick={() => route.push("/shipping-data")}
          >
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
