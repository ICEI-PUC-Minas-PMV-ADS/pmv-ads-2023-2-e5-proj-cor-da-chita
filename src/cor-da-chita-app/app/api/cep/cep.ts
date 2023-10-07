// API: Buscar o Cep
export default async function Cep(cep: string) {
  const cepData: string[] = [];

  if (cep.length == 8) {
    const myCep = cep;

    const value = myCep.replace(/[^0-9]+/, myCep);
    const url = `https://viacep.com.br/ws/${value}/json/`;

    await fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          cepData.push(json);
        }
      })
      .catch((e) => console.error(e));
  }
  return cepData;
}
