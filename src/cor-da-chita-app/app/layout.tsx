"use client";
import "./globals.css";
import Providers from "./Providers";
import Header from "./components/Header";
// import UserData from "./pages/userData";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";

import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

import SignInButton from "./components/SignInButton";
import Menu from "./components/Menu";
import CustomModal from "./components/CustomModal";
import UserData from "./pages/userData/page";

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
            <NavBar />
            {/* <Header>
              <NavBar />
              <Menu />
            </Header> */}

            {/* <ProductCard /> */}
            
            
            {children}
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
