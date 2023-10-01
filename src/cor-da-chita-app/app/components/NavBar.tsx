"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";

import { CorChitaIcon } from "../icons/CorChitaIcon";
import { SearchIcon } from "../icons/SearchIcon";
import GoogleIcon from "../icons/GoogleIcon";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" color="foreground">
            <CorChitaIcon />
            <p className="sm:block font-bold text-inherit">Cor da Chita</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Busca"
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />

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
              <DropdownItem key="about">Sobre</DropdownItem>
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
          <Button color="secondary" size="sm" onClick={() => signIn("google")}>
            Entrar
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
