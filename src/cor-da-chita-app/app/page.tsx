import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <p className="text-2xl font-extrabold  tracking-tight md:leading-14 text-center">
        LANDING PAGE AQUI
        <br />
        <Link href="/all-products">Ir para produtos</Link>
      </p>
    </main>
  );
}
