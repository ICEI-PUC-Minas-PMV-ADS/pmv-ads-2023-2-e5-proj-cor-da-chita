"use client";
import "./globals.css";
import Providers from "./Providers";
import Header from "./components/Header";
// import UserData from "./pages/userData";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";

import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import UserData from "./components/UserData";
import SignInButton from "./components/SignInButton";
import Menu from "./components/Menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <NextUIProvider>
          <Providers>
            <Header>
              <NavBar />
              <Menu />
            </Header>

            {/* <Header className="flex justify-between w-full">
              <h1>Cor da Chita</h1>
              <SignInButton size="sm" text="Entrar com Google" />
            </Header> */}
            <ProductCard />
            <UserData />
            {/* {children} */}
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
