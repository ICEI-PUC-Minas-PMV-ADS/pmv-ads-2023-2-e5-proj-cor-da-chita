import "../styles/globals.css";

import NavBar from "@/components/NavBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import { Providers } from "./api/providers/Providers";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <Providers>
        <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-19VJCQS2H4`}
      />

      <Script strategy="lazyOnload">
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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
