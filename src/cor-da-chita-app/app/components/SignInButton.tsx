"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

// Login with Google
export default function SignInButton() {
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
