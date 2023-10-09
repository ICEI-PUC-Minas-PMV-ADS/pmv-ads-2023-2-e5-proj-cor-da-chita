import React from "react";
import Link from "next/link";

export default function Products(...props: any) {
  return (
    <>
      <div>
        <h3>Meus Produtos</h3>
        <Link href={"/"}></Link>
      </div>
    </>
  );
}
