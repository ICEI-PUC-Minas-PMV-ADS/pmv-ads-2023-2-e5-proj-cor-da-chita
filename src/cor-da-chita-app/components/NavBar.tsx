import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {Input} from "@nextui-org/react";


import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";

import { CorChitaFlor } from "./logo/CorChitaFlor";
import { CorChitaTexto } from "@/components/logo/CorChitaTexto";
import SearchInput from "./ui/SearchInput";
import { useRouter } from "next/navigation";
import { MyButton } from "./ui/Button";

export default function NavBar() {
  const { data: session } = useSession();
  const route = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

    route.push("/");
  };

  return (
    <Navbar isBordered className="w-full bg-light">
      <NavbarContent>
        <NavbarBrand>
          <div
            className={"flex cursor-pointer }"}
            onClick={handleClick}
          >
            <CorChitaFlor />
            <CorChitaTexto />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div">
        {/* Funcionando - Programar a renderização da busca */}
        <SearchInput />

        {session && session.user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="success"
                name={session.user.name ?? ""}
                size="sm"
                radius="full"
                src={session.user.image ?? ""}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{session.user.name}</p>
              </DropdownItem>
              <DropdownItem key="my_orders">Meus Pedidos</DropdownItem>
              <DropdownItem key="help">Ajuda</DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => signOut()}
              >
                Sair
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <MyButton size="md" color="transparent" onClick={() => signIn("google")}>
            Entrar
          </MyButton>
        )}
      </NavbarContent>
    </Navbar>
  );
}
