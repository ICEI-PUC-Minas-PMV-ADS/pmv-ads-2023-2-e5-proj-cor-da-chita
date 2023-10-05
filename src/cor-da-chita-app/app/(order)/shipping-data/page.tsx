// Página com os dados de envio
"use client";
import React, { useContext, useEffect, useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import Form from "@/components/ui/Form";

import { UserContext } from "@/contexts/UserContext/UserContext";
import { AddressContext } from "@/contexts/AddressContext/AddressContext";

export default function ShippingData() {
  const { data: session } = useSession();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);

  // VERIFICAR AQUI ERRO
  useEffect(() => {
    if (session && session.user) {
      user.setName(session.user.name ?? "");
      user.setEmail(session.user.email ?? "");
      user.setPhone(user.phone);
    }
    // user.setName(user.name);
    // user.setEmail(user.email);
    // user.setPhone(user.phone);
  }, []);

  const handleClick = () => {
    alert("Programar Dados de Envio");
  };

  return (
    <>
      <h2>Dados de Envio</h2>
      {/* {session && session.user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ) : ( */}
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
      {/* ) } */}

      <div>
        <Form method="post">
          <Input
            type="text"
            label="Rua"
            size="sm"
            value={address.street}
            isRequired
            isClearable
            onClear={() => address.setStreet("")}
            onChange={(e) => address.setStreet(e.target.value)}
          />
          <Input
            type="text"
            label="Bairro"
            size="sm"
            value={address.neighborhood}
            isRequired
            isClearable
            onClear={() => address.setNeighborhood("")}
            onChange={(e) => address.setNeighborhood(e.target.value)}
          />
          <Input
            type="number"
            label="Número"
            size="sm"
            value={address.num}
            isRequired
            isClearable
            onClear={() => address.setNum("")}
            onChange={(e) => address.setNum(e.target.value)}
          />
          <Input
            type="text"
            label="Cidade"
            size="sm"
            value={address.city}
            isRequired
            isClearable
            onClear={() => address.setCity("")}
            onChange={(e) => address.setCity(e.target.value)}
          />
          <Input
            type="text"
            label="UF"
            size="sm"
            value={address.uf}
            isRequired
            isClearable
            onClear={() => address.setUf("")}
            onChange={(e) => address.setUf(e.target.value)}
          />
          <Input
            type="text"
            label="CEP"
            size="sm"
            value={address.cep}
            isRequired
            isClearable
            onClear={() => address.setCep("")}
            onChange={(e) => address.setCep(e.target.value)}
          />
          <Input
            type="text"
            label="País"
            size="sm"
            value={address.country}
            isRequired
            isClearable
            onClear={() => address.setCountry("")}
            onChange={(e) => address.setCountry(e.target.value)}
          />
          <Input
            type="text"
            label="Complemento"
            size="sm"
            value={address.complement}
            isRequired
            isClearable
            onClear={() => address.setComplement("")}
            onChange={(e) => address.setComplement(e.target.value)}
          />
          <Button color="success" size="md" onClick={handleClick}>
            Confirmar Dados
          </Button>
        </Form>
      </div>
    </>
  );
}
