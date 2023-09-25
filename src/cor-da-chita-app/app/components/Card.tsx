


const Card = ({props})=>{

    return(

        <div className="flex flex-row flex-wrap w-15 bg-orange-200 h-10 m-5   ">
                <img className="" src={props.imagem}/>
                <h1 className="h-6">{props.nome}</h1>
       
                
        </div>




    )
}



export default Card