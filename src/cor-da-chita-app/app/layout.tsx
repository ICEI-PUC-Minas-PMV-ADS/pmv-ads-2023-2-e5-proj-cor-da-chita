"use client";
import "../styles/globals.css";
import Providers from "./api/providers/Providers";
import { NextUIProvider } from "@nextui-org/react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import Section from "../components/Section";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Products from "./products/page";
import ProductCard from "@/components/ProductCard";
import { Main } from "next/document";
// import CustomModal from "./components/CustomModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <NextUIProvider>
          <Providers>
            <Header>
              <NavBar />
              <Menu />
            </Header>

            <main>
              <Section>
                <Products />
              </Section>

              {children}
              <Article />
            </main>

            <Footer />
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
