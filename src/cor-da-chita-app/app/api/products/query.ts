import { client } from "../../../lib/sanity";

export default async function getProductData() {
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
        data,
        'imagem':imagem.asset->url,
      }`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    console.log(e);
  }
}
