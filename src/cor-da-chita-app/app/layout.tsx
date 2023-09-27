import "./globals.css";
import Providers from "./Providers";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  );
}
