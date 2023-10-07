// API: Buscar o Cep
export default async function Cep(cep: string) {
  const cepData: string[] = [];

  if (cep.length == 8) {
    const meuCep = String(cep);

    const value = meuCep.replace(/[^0-9]+/, meuCep);
    const url = `https://viacep.com.br/ws/${value}/json/`;

    await fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          cepData.push(json);
        }
        //console.log(cepData);
      });
  }
  return cepData;
}
