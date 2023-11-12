'use client'
import React from "react";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import { Link } from "@nextui-org/react";

export default function About({ ...props }: any) {
  const route = useRouter(); 

  const handleReturn = () => {
    route.push("/"); 
  };

  return (
    <>
      <Link
        size="sm"
        as="button"
        className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={handleReturn}
      >
        <ArrowLeft /> Retornar
      </Link>
    </>
  );
}
