import "../styles/globals.css";

import NavBar from "@/components/NavBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import { Providers } from "./api/providers/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <Providers>
          <NavBar />
          <Menu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
