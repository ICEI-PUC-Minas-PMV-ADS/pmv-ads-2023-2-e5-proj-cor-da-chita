// Query usada na renderização dos Cards de produtos de acordo com o click do user na categoria do  MENU
import { client } from "../../lib/sanity";

export default async function getProductByCategory(categoryName: string) {
  function replaceCategoryName(categoryName: string) {
    return decodeURIComponent(categoryName.replace(/\+/g, " "));
  }

  const formatCategoryName = replaceCategoryName(categoryName);
  console.log(typeof formatCategoryName);
  console.log(formatCategoryName);

  try {
    const query = `*[_type == "produto" && categoria == "${formatCategoryName}"]{
      _id,
      nome,
      categoria,
      descricao[0]{
        children[0]{
          text
        }
      }, 
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
    //console.log(data.descricao);

    return data;
  } catch (e) {
    console.log(e);
  }
}
