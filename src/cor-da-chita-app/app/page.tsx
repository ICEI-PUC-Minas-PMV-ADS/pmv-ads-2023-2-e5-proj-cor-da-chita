"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const route = useRouter();
  return (
    <main>
      <p className="text-2xl font-extrabold  tracking-tight md:leading-14 text-center">
        LANDING PAGE AQUI
        <br />
        <Link href="/all-products">Ir para produtos</Link>        
        <button
          type="button"
          onClick={() => route.push("/all-products")}
        ></button>
      </p>
    </main>
  );
}
