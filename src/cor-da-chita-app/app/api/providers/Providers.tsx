"use client";

import { SessionProvider } from "next-auth/react";

// Login with Google
export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
