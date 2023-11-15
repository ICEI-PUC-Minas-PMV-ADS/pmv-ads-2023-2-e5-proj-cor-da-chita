// Dados de envio na finalização da compra
"use client";
import React, { useContext, useEffect, useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import Form from "@/components/ui/Form";

import { UserContext } from "@/contexts/UserContext/UserContext";
import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { useRouter } from "next/navigation";
import Cep from "@/app/api/cep/cep";
import { CepContext } from "@/contexts/CepContext/CepContext";

export default function ShippingData() {
  const { data: session } = useSession();
  const route = useRouter();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);
  const { saveCepContext } = useContext(CepContext); // Se envio por correios

  // Controla mensagem de erro
  const [missInfo, setMissInfo] = useState(false);
  const validadeData =
    !address.street ||
    !address.neighborhood ||
    !address.num ||
    !address.city ||
    !address.uf ||
    !address.cep;

  // Controla preenchimento dos campos de endereço
  const handleCep = async (cep: string) => {
    const cepData: any[] = await Cep(cep);

    if (cepData.length == 0) {
      setMissInfo(true);
    } else {
      address.setStreet(cepData[0].logradouro ?? "");
      address.setNeighborhood(cepData[0].bairro ?? "");
      address.setCity(cepData[0].localidade ?? "");
      address.setUf(cepData[0].uf ?? "");

      // Se frete correios
      if (saveCepContext) address.setCep(cepData[0].cep ?? "");
    }
    // console.log(cepData);
  };

  // Valida 'Enter'em Buscar Cep
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCep(address.cep);
  };

  // Carrega dados do usuário e se for envio via correios, também carrega endereço
  useEffect(() => {
    if (session && session.user) {
      user.setName(session.user.name ?? "");
      user.setEmail(session.user.email ?? "");
      user.setPhone(user.phone);
    }

    if (saveCepContext.length !== 0) {
      // Se frete correios
      handleCep(saveCepContext);
    }
  }, []);

  return (
    <section>
      <h1>
        <strong>Dados de Envio</strong>
      </h1>

      {/* Dados do Usuário */}
      <article>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <Button color="success" variant="ghost" onPress={() => route.back()}>
          Editar Dados
        </Button>
      </article>

      {/* Endereço */}
      <article>
        <Form method="post">
          <div>
            <Input // CEP
              maxLength={8}
              
              type="text"
              label="CEP"
              size="sm"
              autoFocus
              value={address.cep}
              isRequired
              isClearable
              color={missInfo && !address.cep ? "danger" : undefined}
              errorMessage={missInfo && !address.cep && "Favor preencher o CEP"}
              onClear={() => address.setCep("")}
              onChange={(e) => {
                !/[^0-9]+/g.test(e.target.value)
                  ? address.setCep(e.target.value)
                  : "";
              }}
              onKeyDown={handleKeyDown}
            />

            <Button // Buscar CEP
           
              color="success"
              size="md"
              onClick={() => handleCep(address.cep)}
            >
              Buscar CEP
            </Button>
          </div>

          <Input // Rua
            isDisabled={saveCepContext.length > 0}
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
            isDisabled={saveCepContext.length > 0}
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
            type="text"
            label="Número"
            size="sm"
            value={address.num}
            isRequired
            isClearable
            color={missInfo && !address.num ? "danger" : undefined}
            errorMessage={
              missInfo &&
              !address.num &&
              "Favor preencher o número da residência"
            }
            onClear={() => address.setNum("")}
            onChange={(e) => {
              !/[^0-9]+/g.test(e.target.value)
                ? address.setNum(e.target.value)
                : "";
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                validadeData ? setMissInfo(true) : route.push("/summary-order");
              }
            }}
          />

          <Input // Cidade
            isDisabled={saveCepContext.length > 0}
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
            isDisabled={saveCepContext.length > 0}
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
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                validadeData ? setMissInfo(true) : route.push("/summary-order");
              }
            }}
          />

          <Button // Confirmar Dados
            color="success"
            size="md"
            onClick={() =>
              validadeData ? setMissInfo(true) : route.push("/summary-order")
            }
          >
            Confirmar Dados
          </Button>
        </Form>
      </article>
    </section>
  );
}
