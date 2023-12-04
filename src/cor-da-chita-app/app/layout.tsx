
import "../styles/globals.css";
import React, { useContext, useEffect, useState } from "react";

import NavBar from "@/components/NavBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Encomenda from "@/components/Encomenda";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";


import { Providers } from "./api/providers/Providers";
import Script from "next/script";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cor da Chita",
  description: "Arte com Chita",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 


 

 
 
  return (
    <html lang="pt-br">
      <body className="bg-light min-h-screen" suppressHydrationWarning={true}>
        <Providers>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-19VJCQS2H4`}
          />

          <Script strategy="lazyOnload" id="gtag-script">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-19VJCQS2H4', {
                    page_path: window.location.pathname,
                    });
                `}
          </Script>
          <NavBar />
          <Menu />
          <div className="min-h-screen">
            {children}
          </div>
          <Encomenda />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
