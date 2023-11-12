// Query usada na renderização do Carrinho
import { client } from "../../lib/sanity";

export default async function getProductDataById(itemId: string) {
  // Alteração feita no LocalStorage para passar mais informações. Sendo assim, foi feita o parse para pegar o valor do ID
  const itemIdString: string = JSON.stringify(itemId);
  const itemObj: { id: string } = JSON.parse(itemIdString);
  const idDoObjeto: string = itemObj.id;

  try {
    const query = `*[_type == "produto" && _id == "${idDoObjeto}"]{
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
      quantidade,      
    }`;

    const data = await client.fetch(query);

    return data.concat(data);
  } catch (e) {
    console.log(e);
  }
}
