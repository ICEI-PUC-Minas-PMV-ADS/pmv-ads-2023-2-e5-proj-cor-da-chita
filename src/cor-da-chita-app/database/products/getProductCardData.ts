// Query usada na renderização dos Cards de produtos (products)
import { client } from "../../lib/sanity";

export default async function getProductCardData() {
  try {
    const query = `* [_type == "produto"]{
        _id,
        nome,            
        preco,        
        'imagem':imagem.asset->url,
        slug 
      }`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    console.log(e);
  }
}
