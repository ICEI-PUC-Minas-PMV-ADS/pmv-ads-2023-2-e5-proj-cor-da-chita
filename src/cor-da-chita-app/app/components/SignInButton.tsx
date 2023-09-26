"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton() {
  // O hook vai usar todas os dados da sessão
  const { data: session } = useSession();
  
  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
}
