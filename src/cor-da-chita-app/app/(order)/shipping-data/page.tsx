// Página com os dados de envio
"use client";
import React, { useContext, useEffect, useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import Form from "@/components/ui/Form";

import { UserContext } from "@/contexts/UserContext/UserContext";
import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { useRouter } from "next/navigation";
import Cep from "@/app/api/cep/cep";

export default function ShippingData() {
  const { data: session } = useSession();
  const route = useRouter();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);

  // Controla mensagem de erro
  const [missInfo, setMissInfo] = useState(false);
  const validadeData =
    !address.street ||
    !address.neighborhood ||
    !address.num ||
    !address.city ||
    !address.uf ||
    !address.cep ||
    !address.complement;

  useEffect(() => {
    if (session && session.user) {
      user.setName(session.user.name ?? "");
      user.setEmail(session.user.email ?? "");
      user.setPhone(user.phone);
    }
  }, []);

  return (
    <>
      <h2>Dados de Envio</h2>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>

      <div>
        <Form method="post">
          <div>
            <Input // CEP
              type="text"
              label="CEP"
              size="sm"
              value={address.cep}
              isRequired
              isClearable
              color={missInfo && !address.cep ? "danger" : undefined}
              errorMessage={missInfo && !address.cep && "Favor preencher o CEP"}
              onClear={() => address.setCep("")}
              onChange={(e) => address.setCep(e.target.value)}
            />
            <Button
              color="success"
              size="md"
              onClick={() => alert("programar busca cep")}
            >
              Buscar CEP
            </Button>
          </div>
          <Input // Rua
            type="text"
            label="Rua"
            size="sm"
            value={address.street}
            isRequired
            isClearable
            color={missInfo && !address.street ? "danger" : undefined}
            errorMessage={
              missInfo && !address.street && "Favor preencher o nome da rua"
            }
            onClear={() => address.setStreet("")}
            onChange={(e) => address.setStreet(e.target.value)}
          />
          <Input // Bairro
            type="text"
            label="Bairro"
            size="sm"
            value={address.neighborhood}
            isRequired
            isClearable
            color={missInfo && !address.neighborhood ? "danger" : undefined}
            errorMessage={
              missInfo &&
              !address.neighborhood &&
              "Favor preencher o nome do bairro"
            }
            onClear={() => address.setNeighborhood("")}
            onChange={(e) => address.setNeighborhood(e.target.value)}
          />
          <Input // Número
            type="number"
            label="Número"
            size="sm"
            value={address.num}
            isRequired
            isClearable
            color={missInfo && !address.num ? "danger" : undefined}
            errorMessage={
              missInfo && !address.num && "Favor preencher o número casa"
            }
            onClear={() => address.setNum("")}
            onChange={(e) => address.setNum(e.target.value)}
          />
          <Input // Cidade
            type="text"
            label="Cidade"
            size="sm"
            value={address.city}
            isRequired
            isClearable
            color={missInfo && !address.city ? "danger" : undefined}
            errorMessage={
              missInfo && !address.city && "Favor preencher o nome da cidade"
            }
            onClear={() => address.setCity("")}
            onChange={(e) => address.setCity(e.target.value)}
          />
          <Input // UF
            type="text"
            label="UF"
            size="sm"
            value={address.uf}
            isRequired
            isClearable
            color={missInfo && !address.uf ? "danger" : undefined}
            errorMessage={missInfo && !address.uf && "Favor preencher o estado"}
            onClear={() => address.setUf("")}
            onChange={(e) => address.setUf(e.target.value)}
          />
          <Input // Complemento
            type="text"
            label="Complemento"
            size="sm"
            value={address.complement}
            isClearable
            onClear={() => address.setComplement("")}
            onChange={(e) => address.setComplement(e.target.value)}
          />
          <Button
            color="success"
            size="md"
            onClick={() =>
              validadeData ? setMissInfo(true) : route.push("/summary-order")
            }
          >
            Confirmar Dados
          </Button>
        </Form>
      </div>
    </>
  );
}
