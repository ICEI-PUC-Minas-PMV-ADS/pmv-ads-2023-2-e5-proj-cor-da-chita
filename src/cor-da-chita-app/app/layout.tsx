'use client';
import "./globals.css";
import Providers from "./Providers";
import Header from "./components/Header";
// import UserData from "./pages/userData";
import {NextUIProvider} from "@nextui-org/react";

import ProductCard from "./components/ProductCard";

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
            <Header />
            <ProductCard />
            {/* {children} */}
          </Providers>
        </NextUIProvider>
      
      </body>
    </html>
  );
}
