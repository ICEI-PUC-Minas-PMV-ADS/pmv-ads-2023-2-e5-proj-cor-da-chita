// Query usada na renderização dos Cards de produtos de acordo com o MENU
// EM ANDAMENTO

import { client } from "../../lib/sanity";

interface CategoryProps {
  name: string;
}

export default async function getProductByCategory(categoryName: string) {
  function replaceCategoryName(categoryName: string) {
    return decodeURIComponent(categoryName.replace(/\+/g, " "));
  }

  const isString = JSON.stringify(categoryName);
  console.log(categoryName);
  console.log(typeof categoryName);
  console.log(isString);
  console.log(typeof isString);

  const formatCategoryName = replaceCategoryName(isString);
  console.log(typeof formatCategoryName);
  console.log(formatCategoryName);

  // function replaceCategoryName(categoryNam: object) {
  //   if (typeof categoryName === "string") {
  //     return decodeURIComponent(categoryName.replace(/\+/g, " "));
  //   } else if (typeof categoryName === "object") {
  //     // Se categoryName for um objeto, converta-o para uma string
  //     return JSON.stringify(categoryName);
  //   } else {
  //     // Lidar com outros tipos de entrada, se necessário
  //     return "";
  //   }
  // }

  // // Exemplo de uso:
  // const categoryNameObject = { name: "Todos%20os%20Produtos" };
  // const categoryNameString = replaceCategoryName(categoryNameObject);

  // // Saída: '{"name":"Todos os Produtos"}'
  // console.log(categoryNameString);

  try {
    const query = `*[_type == "produto" ]{
      _id,
      nome,
      categoria,
      descricao,
      preco,
      peso,
      comprimento,
      largura,
      altura,
      'imagem':imagem.asset->url,
      slug   
    }`;

    const data = await client.fetch(query);
    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }
}
