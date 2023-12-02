// Query para todos os dados
import { client } from "../../lib/sanity";

export default async function getProductDataSearch(search: string | undefined) {
  console.log(search);
  try {
    const query = `* [_type == "produto" && nome match "*${search}*"] {
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
        slug,
        quantidade,
      }`;

    const data = await client.fetch(query);
    console.log(data);

    return data;
  } catch (e) {
    console.error(e);
  }
}
