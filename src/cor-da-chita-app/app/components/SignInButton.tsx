"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";

// Login with Google
export default function SignInButton({ ...props }) {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        {/* <p>{session.user.email}</p>  */}
        <Button color="secondary" size="sm" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Button color="secondary" size={props.size} onClick={() => signIn()}>
        {props.text}
      </Button>
    </div>
  );
}
