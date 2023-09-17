
'use client';
import { Produto } from "./lib/interface";
import { client } from "./lib/sanity";


const getData =  async()=> {
 
 //AQUI REALIZA UM QUERY SIMPLES E PEGA OS PRODUTOS CRIADOS,AONDE
  try{
    const query = `*[_type == "produto"]{
      _id,
      nome,
      categoria,
      descricao,
      estoque,
      'imagem':imagem.asset->url
    }`;

    const data = await client.fetch(query);
return data
  } 
  catch(e)
{
  console.log(e)

}
  
}
   
export default async  function Home() {
  
  const data = (await getData()) as Produto[];
  
  console.log(data)
  return (
    <div>
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-blue-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
       Todos meus produtos
      </h1>
    </div>

    <ul>
      {data.map((produto) => (
        <li key={produto._id} className="py-4">
          <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <div>
              <p className="text-base  font-bold ml-2 leading-6 text-black">
                Nome: {produto.nome}
              </p>
            </div>

              <div>
                <h3 className="text-2xl font-bold leading-8 tracking-tight text-black ">
                  Categoria: {produto.categoria}
                </h3>
              </div>
              <p className="prose max-w-none font-bold text-black0 line-clamp-2 text-black">
                Descrição :{produto.descricao}
              </p>

              <p className="prose max-w-none font-bold line-clamp-2 text-black">
                Estoque do Produto :{produto.estoque}
              </p>
             
              <img className="w-44 "src={produto.imagem}/>

   
           
          </article>
        </li>
      ))}
    </ul>
  </div>
  )

}
