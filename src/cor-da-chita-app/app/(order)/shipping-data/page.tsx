// Dados de envio na finalização da compra
"use client";
import React, { useContext, useEffect, useState } from "react";

import {
  Button,
  Input,
  Link,
  Spinner,
  Divider,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { MyButton } from "@/components/ui/Button";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";

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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [textModal, setTextModal] = useState("");
  // Controla mensagem de erro
  const [missInfo, setMissInfo] = useState(false);
  const validadeData =
    !address.street ||
    !address.neighborhood ||
    !address.num ||
    !address.city ||
    !address.uf ||
    !address.cep
    

  // Controla preenchimento dos campos de endereço
  const handleCep = async (cep: string) => {
    const cepData: any[] = await Cep(cep);

    //Se vier mensagem de error então,provalvemete o cep não existe ou foi digitado errado
    if (cepData[0].erro) {
      onOpen();
      setTextModal("CEP inválido, por favor verifique");
    } else {
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
    }
  };

  // Valida 'Enter'em Buscar Cep
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCep(address.cep);
  };
  const [waitingData, setWaitingData] = useState(false);

  // Carrega dados do usuário e se for envio via correios, também carrega endereço
  useEffect(() => {

    

    if (session && session.user) {
      user.setName(session.user.name ?? "");
      user.setEmail(session.user.email ?? "");
      user.setPhone(user.phone);
    }

    if (!session && user.email == "") {
      setWaitingData(true);
      route.push("/shop-cart");
    }

    if (saveCepContext.length !== 0) {
      // Se frete correios
      handleCep(saveCepContext);
    }
  }, []);

  if (waitingData) {
    return <Spinner className="flex" />;
  }

  return (
    <section>
      <Link
        size="sm"
        as="button"
        className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
        onClick={() => route.back()}
      >
        <ArrowLeft /> Retornar
      </Link>

      <div className=" pb-5">
          <h1 className="text-2xl text-center underline underline-offset-8 decoration-wavy">Checkout</h1>
        </div>

      {(session && session.user) || user.email != "" ? (
        <div className="px-10">
          <div className="flex flex-row justify-around">
            <div className="flex-col items-center">
              <div className="">
                <h2 className="text-2xl text-center m-10">Dados do Cliente</h2>
              </div>
              <div className="mx-5">
              {/* Dados do Usuário */}
              <div className="py-3 pl-3">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <br />
                <div className="flex">
                  <Button
                    color="secondary"
                    variant="ghost"
                    className="shadow-sm hover:opacity-80"
                    onPress={() => route.back()}
                  >
                    Editar Dados
                  </Button>

                </div>
              </div>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className="flex-col items-center">
            

          <div className="">
            <h2 className="text-2xl text-center m-10">Dados de Envio</h2>
          </div>
          <div className="mx-5">
            <div>
              <Form method="post" className="max-w-[600px]">
                <div className="flex flex-col gap-3 py-5">
                  <div className="flex flex-row gap-3">
                    <Input // CEP
                      maxLength={8}
                      variant="bordered"
                      classNames={{
                        innerWrapper: "bg-transparent",
                        inputWrapper: ["shadow-none"],
                      }}
                      type="text"
                      label="CEP"
                      size="sm"
                      autoFocus
                      value={address.cep}
                      isRequired
                      isClearable
                      color={missInfo && !address.cep ? "danger" : undefined}
                      errorMessage={missInfo && !address.cep && "Insira o CEP"}
                      onClear={() => address.setCep("")}
                      onChange={(e) => {
                        !/[^0-9]+/g.test(e.target.value)
                          ? address.setCep(e.target.value)
                          : "";
                      }}
                      onKeyDown={handleKeyDown}
                    />

                    <Button // Buscar CEP
                      isDisabled={address.cep.length < 8}
                      color="success"
                      variant="ghost"
                      className="shadow-sm hover:opacity-80"
                      size="lg" 
                      onClick={() => handleCep(address.cep)}
                    >
                      Buscar
                    </Button>
                  </div>

                  <Input // Rua
                    variant="bordered"
                    classNames={{
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["shadow-none"],
                    }}
                    isDisabled={saveCepContext.length > 0}
                    type="text"
                    label="Rua"
                    size="sm"
                    value={address.street}
                    isRequired
                    isClearable
                    color={missInfo && !address.street ? "danger" : undefined}
                    errorMessage={
                      missInfo && !address.street && "Insira o nome da rua"
                    }
                    onClear={() => address.setStreet("")}
                    onChange={(e) => address.setStreet(e.target.value)}
                  />

                  <Input // Bairro
                    variant="bordered"
                    classNames={{
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["shadow-none"],
                    }}
                    isDisabled={saveCepContext.length > 0}
                    type="text"
                    label="Bairro"
                    size="sm"
                    value={address.neighborhood}
                    isRequired
                    isClearable
                    color={
                      missInfo && !address.neighborhood ? "danger" : undefined
                    }
                    errorMessage={
                      missInfo &&
                      !address.neighborhood &&
                      "Insira o nome do bairro"
                    }
                    onClear={() => address.setNeighborhood("")}
                    onChange={(e) => address.setNeighborhood(e.target.value)}
                  />

                  <Input // Número
                    variant="bordered"
                    classNames={{
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["shadow-none"],
                    }}
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
                      "Insira o número da residência"
                    }
                    onClear={() => address.setNum("")}
                    onChange={(e) => {
                      !/[^0-9]+/g.test(e.target.value)
                        ? address.setNum(e.target.value)
                        : "";
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter") {
                        validadeData
                          ? setMissInfo(true)
                          : route.push("/summary-order");
                      }
                    }}
                  />

                  <Input // Cidade
                    variant="bordered"
                    classNames={{
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["shadow-none"],
                    }}
                    isDisabled={saveCepContext.length > 0}
                    type="text"
                    label="Cidade"
                    size="sm"
                    value={address.city}
                    isRequired
                    isClearable
                    color={missInfo && !address.city ? "danger" : undefined}
                    errorMessage={
                      missInfo && !address.city && "Insira o nome da cidade"
                    }
                    onClear={() => address.setCity("")}
                    onChange={(e) => address.setCity(e.target.value)}
                  />

                  <Input // UF
                    variant="bordered"
                    classNames={{
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["shadow-none"],
                    }}
                    isDisabled={saveCepContext.length > 0}
                    type="text"
                    label="UF"
                    size="sm"
                    value={address.uf}
                    isRequired
                    isClearable
                    color={missInfo && !address.uf ? "danger" : undefined}
                    errorMessage={missInfo && !address.uf && "Insira o estado"}
                    onClear={() => address.setUf("")}
                    onChange={(e) => address.setUf(e.target.value)}
                  />

                  <Input //
                    variant="bordered"
                    classNames={{
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["shadow-none"],
                    }}
                    type="text"
                    label="Complemento"
                    size="sm"
                    value={address.complement}
                    isClearable
                    onClear={() => address.setComplement("")}
                    onChange={(e) => address.setComplement(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter") {
                        validadeData
                          ? setMissInfo(true)
                          : route.push("/summary-order");
                      }
                    }}
                  />
                </div>
              </Form>
            </div>
            <div className="mt-5 flex justify-center">
                <Link
                  size="sm"
                  as="button"
                  className="p-4 my-3 gap-2 tracking-wide text-dark hover:text-success border border-transparent hover:border-success transition-all duration-200"
                  onClick={() =>
                    validadeData && session!= null
                      ? setMissInfo(true)
                      : route.push("/summary-order")
                  }
                >
                  Confirmar Dados <ArrowRight />
                </Link>
              </div>
          </div>
          </div>
          </div>
          
        </div>

      ) : (
        <Spinner className="flex" />
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-4">
          {(onClose) => (
            <>
              <ModalBody>
                <p>{textModal}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Voltar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
