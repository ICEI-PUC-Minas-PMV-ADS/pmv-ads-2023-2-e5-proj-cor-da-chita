// API: Buscar o Cep
// Em construção
import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { useContext } from "react";

export default async function Cep(cep: string) {
  const address = useContext(AddressContext);

  if (String(cep).length == 8) {
    const meuCep = String(cep);

    const value = meuCep.replace(/[^0-9]+/, meuCep);
    const url = `https://viacep.com.br/ws/${value}/json/`;

    await fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.localidade) {
          address.setStreet(json.logradouro);
          address.setNeighborhood(json.bairro);
          address.setCity(json.localidade);
          address.setUf(json.uf);
        }
        console.log(json.localidade);
      });
  }
}
