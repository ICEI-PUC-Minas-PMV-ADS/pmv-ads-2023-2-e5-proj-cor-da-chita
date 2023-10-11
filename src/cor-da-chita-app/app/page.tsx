"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Banner from "../components/Banner";


export default function Home() {
  const route = useRouter();
  return (
    <main>
      <div>
        <Banner />
        <br />
        <Link href="/all-products">Ir para produtos</Link>
        <button
          type="button"
          onClick={() => route.push("/all-products")}
        ></button>
      </div>
    </main>
  );
}
