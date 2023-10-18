// Query usada na renderização dos Cards de produtos (products)
import { client } from "../../lib/sanity";

export default async function getProductCardData() {
  try {
    const query = `*[_type == "produto"]{
      _id,
      nome,
      categoria,
      estoque,
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

    return data;
  } catch (e) {
    console.log(e);
  }
}
