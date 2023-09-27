import Header from "./components/Header";
import { Produto } from "./lib/interface";
import { client } from "./lib/sanity";

const getData = async () => {
  //AQUI REALIZA UM QUERY SIMPLES E PEGA OS PRODUTOS CRIADOS,AONDE
  try {
    const query = `*[_type == "produto"]{
      _id,
      nome,
      categoria,
      descricao,
      estoque,
      'imagem':imagem.asset->url
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default async function Home() {
  const data = (await getData()) as Produto[];

  return (
    <>
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold  tracking-tight text-blue-600 md:leading-14 text-center">
            Todos meus produtos
          </h1>
        </div>

        <ul>
          {data.map((produto) => (
            <li key={produto._id}>
              <article>
                <p>Nome: {produto.nome}</p>
                <p>Categoria: {produto.categoria}</p>
                <p>Descrição: {produto.descricao}</p>
                <p>Estoque do Produto: {produto.estoque}</p>

                <img className="w-44 pb-8" src={produto.imagem} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
