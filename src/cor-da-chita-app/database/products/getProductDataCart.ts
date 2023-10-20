// Query usada na renderização do Carrinho
import { client } from "../../lib/sanity";

export default async function getProductDataCart(itemId: string) {
  console.log(itemId);
  try {
    const query = `*[_type == "produto" && _id == "${itemId}"]{
      _id,
      nome,
      categoria,
      estoque,      
      preco,
      peso,
      comprimento,
      largura,
      altura,
      'imagem':imagem.asset->url,      
    }`;

    const data = await client.fetch(query);

    console.log(data);

    return data.concat(data);
  } catch (e) {
    console.log(e);
  }
}
