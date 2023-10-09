// Query usada na renderização dos Cards de produtos (products)
import { client } from "../../lib/sanity";

export default async function getProductCardData() {
  try {
    const query = `*[_type == "produto"]{
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
    //console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }
}
