// Query para todos os dados
import { client } from "../../lib/sanity";

export default async function getAllProductData() {
  try {
    const query = `* [_type == "produto"]{
        _id,
        nome,
        categoria,
        descricao[0]{
          children[0]{
            text
          }
        }, 
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
    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }
}
