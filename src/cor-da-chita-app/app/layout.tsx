import "./globals.css";
import Providers from "./Providers";
import Header from "./components/Header";
import UserData from "./components/UserData";

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
          <UserData />
          
          {/* {children} */}
        </Providers>
      </body>
    </html>
  );
}
