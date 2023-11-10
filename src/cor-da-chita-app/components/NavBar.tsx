// Navbar com busca e Login Google
"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import CartIcon from "@/assets/icons/CartIcon";
import OrdersIcon from "@/assets/icons/OrdersIcon";
import HelpIcon from "@/assets/icons/HelpIcon";


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
  const iconClasses = "h-4";

  const handleClick = () => {
    setIsClicked(!isClicked);

    route.push("/");
  };

  return (
    <Navbar shouldHideOnScroll className="bg-light px-0 w-full">
      <NavbarBrand onClick={handleClick} className="bg-light p-0">
        <CorChitaFlor />
        {/* <CorChitaTexto /> */}
      </NavbarBrand>

      <NavbarContent>
        <SearchInput />

        {session && session.user ? (
          <Dropdown placement="bottom-end" className="p-0 rounded-md shadow-none">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform"
                name={session.user.name ?? ""}
                src={session.user.image ?? ""}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="bordered"  className="bg-light" color="success" disabledKeys={[""]}>
              <DropdownItem key="profile" className="text-end" color="default">
                <p className="font-semibold text-tiny">{session.user.name}</p>
              </DropdownItem>
              <DropdownItem
                key="my_Cart"
                onClick={() => route.push("/shop-cart")}
                endContent={<CartIcon className={iconClasses} />}
              ><p className="text-tiny p-4">
                Carrinho
                </p>
              </DropdownItem>
              <DropdownItem key="my_orders" endContent={<OrdersIcon className={iconClasses} />}><p className="text-tiny p-4">Meus Pedidos</p></DropdownItem>
              <DropdownItem key="help" endContent={<HelpIcon className={iconClasses}/>}><p className="text-tiny p-4">Ajuda</p></DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => signOut()}
              ><p className="text-tiny p-1">
                Sair</p>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button variant="ghost" onClick={() => signIn("google")}>
            Entrar
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}



