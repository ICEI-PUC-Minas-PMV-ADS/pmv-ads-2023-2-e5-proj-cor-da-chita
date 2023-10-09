// Query para todos os dados
import { client } from "../../lib/sanity";

export default async function getAllProductData() {
  try {
    const query = `* [_type == "produto"]{
        _id,
        nome,
        categoria,
        descricao,
        estoque,
        preco,
        peso,
        comprimento,
        largura,
        altura,        
        'imagem':imagem.asset->url,
        _createdAt,
        slug
      }`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    console.log(e);
  }
}
