// Navbar com busca e Login Google
"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
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
    <Navbar shouldHideOnScroll className="bg-light">
      <NavbarBrand onClick={handleClick}>
        <CorChitaFlor />
        <CorChitaTexto />
      </NavbarBrand>

      <NavbarContent>
        <SearchInput />

        {session && session.user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform"
                name={session.user.name ?? ""}
                radius="full"
                src={session.user.image ?? ""}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{session.user.name}</p>
              </DropdownItem>
              <DropdownItem
                key="my_Cart"
                onClick={() => route.push("/shop-cart")}
              >
                Carrinho
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
          <Button size="md" color="secondary" onClick={() => signIn("google")}>
            Entrar
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
