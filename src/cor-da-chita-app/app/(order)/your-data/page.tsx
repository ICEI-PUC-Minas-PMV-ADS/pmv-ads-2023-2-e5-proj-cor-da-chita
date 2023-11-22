// Dados do usuário na tela na finalização da compra
"use client";

import React, { useContext, useState, useMemo, useEffect } from "react";

import { signIn, useSession } from "next-auth/react";
import { Link, Button, Input, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";
import { MyButton } from "@/components/ui/Button";

import Form from "../../../components/ui/Form";

import MailIcon from "../../../assets/icons/MailIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import GoogleIcon from "@/assets/icons/GoogleIcon";

import { UserContext } from "@/contexts/UserContext/UserContext";
import { CartContext } from "@/contexts/CartContext/CartContext";

export default function UserData() {
  const { data: session } = useSession();
  const route = useRouter();

  const user = useContext(UserContext);
  // Verificar se o fluxo vem do carrinho
  const { cartFlow } = useContext(CartContext);

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

  // Se usuário logado pega os dados da session
  useEffect(() => {
    if (session) {
      user.setName(session?.user?.name ?? "");
      user.setEmail(session?.user?.email ?? "");
    }
  });

  // Lidar com botão Enter. Chamado no no input Tel ou Complemento
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleConfirmUserData();
  };

  // Lidar com a rota vinda do summary-order ou não. Chamada no botão "Confirmar Dados"
  function handleConfirmUserData(): void {
    console.log(session?.user);
    console.log(user.email);
    console.log(validadeData);
    console.log(cartFlow);
    
    if (cartFlow == "/summary-order") {
      validadeData ? setMissInfo(true) : route.push("/summary-order");
    } else {
      validadeData ? setMissInfo(true) : route.push("/shipping-data");
    }
  }

  return (
    <section>
      <Link
        size="sm"
        as="button"
        className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={() => route.back()}
      >
        <ArrowLeft /> Retornar
      </Link>
      <div className="px-10 max-w-screen-lg ml-auto">
        <div className="font-serif pb-5">
          <h1 className="text-2xl">Seus Dados</h1>
        </div>
        <div className="px-5">
          <Form method="post">
            <div className="flex flex-col gap-3 py-5">
              <Input // Nome Completo
                variant="bordered"
                type="text"
                label="Nome Completo"
                size="sm"
                value={user.name}
                autoFocus
                isRequired
                isDisabled={isDisabled}
                isClearable
                classNames={{
                  innerWrapper: "bg-transparent",
                  inputWrapper: ["shadow-none"],
                }}
                color={
                  !isDisabled && missInfo && !user.name ? "danger" : undefined
                }
                errorMessage={
                  !isDisabled &&
                  missInfo &&
                  !user.name &&
                  "Insira seu nome completo"
                }
                onClear={() => user.setName("")}
                onChange={(e) => {
                  user.setName(e.target.value);
                }}
                endContent={<UserIcon />}
              />
              <Input // Email
                variant="bordered"
                classNames={{
                  innerWrapper: "bg-transparent",
                  inputWrapper: ["shadow-none"],
                }}
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
                    ? "Insira um e-mail válido"
                    : ""
                }
                onValueChange={setValue}
                onClear={() => user.setEmail("")}
                onChange={(e) => user.setEmail(e.target.value)}
                endContent={<MailIcon />}
              />
              <Input // Telefone
                variant="bordered"
                type="tel"
                label="Telefone"
                placeholder="DDD e Número"
                size="sm"
                value={user.phone}
                isRequired
                isClearable
                color={missInfo && !user.phone ? "danger" : undefined}
                classNames={{
                  innerWrapper: "bg-transparent",
                  inputWrapper: ["shadow-none"],
                }}
                errorMessage={
                  missInfo && !user.phone && "Insira seu número de telefone"
                }
                onClear={() => user.setPhone("")}
                //onChange={(e) => user.setPhone(e.target.value)}
                onChange={(e) => {
                  !/[^0-9]+/g.test(e.target.value)
                    ? user.setPhone(e.target.value)
                    : "";
                }}
                onKeyDown={handleKeyDown}
                endContent={<PhoneIcon className="mb-3" />}
              />
            </div>

            <div className="mt-5 flex justify-end">
              <Link
                size="sm"
                as="button"
                className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
                onClick={handleConfirmUserData}
              >
                Confirmar Dados <ArrowRight />
              </Link>
            </div>
          </Form>
          {/* Continuar ou não com o Google */}
          <div>
            {session && session.user ? (
              <></>
            ) : (
              <div className="flex flex-col gap-3 items-center">
                <h3 className="font-serif mb-1">ou</h3>
                <MyButton // Continuar com Google
                  color="secondary"
                  size="xl"
                  className="w-[400px]"
                  onClick={() => signIn("google")}
                  startContent={<GoogleIcon className="text-2xl" />}
                >
                  Continuar com Google
                </MyButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
