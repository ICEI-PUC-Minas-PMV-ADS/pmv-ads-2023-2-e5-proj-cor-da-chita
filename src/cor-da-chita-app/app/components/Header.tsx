import React from "react";
import SignInButton from "./SignInButton";

export default function Header(props: any) {
  return (
    <header className="flex justify-between w-full">
      <h1>Cor da Chita</h1>
      <SignInButton />
    </header>
  );
}
