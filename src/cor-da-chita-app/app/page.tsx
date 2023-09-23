
'use client';
import { useEffect } from "react";
import { Produto } from "./lib/interface";
import { client } from "./lib/sanity";
import Card from "./components/Card";
import Header from "./components/Header";

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
  


const createProduct =  async ()=>{
  const product= {
    _type:'produto',
    nome: 'orange',
    descricao: 'none',
    categoria:'test',
    estoque: 2,
    peso:2,
    preço:2 ,
    comprimento:2,
    largura:2,
    altura:2,
    imagem:null,

       }
       console.log("oii")
  const created =  await client.create(product).then(x=>console.log(x))



}
  useEffect(()=>{

   
    createProduct().then()



  },[])


  const data = (await getData()) as Produto[];
  
  console.log(data)
  return (
    <>
  <Header/>
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold  text-blue-600  text-center">
       Todos meus produtos
      </h1>
      {/* {data.map((produto)=>(
    <Card props={produto}/>

    ))} */}
    </div>
    
   
    </>
  )

}
