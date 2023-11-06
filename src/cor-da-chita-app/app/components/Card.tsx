interface CardProps {
    imagem: string;
    nome: string;
  }
  
  const Card = ({ imagem, nome }: CardProps) => {
    return (
      <div className="flex flex-row flex-wrap w-15 bg-orange-200 h-10 m-5">
        <img className="" src={imagem} alt={nome} />
        <h1 className="h-6">{nome}</h1>
      </div>
    );
  };
  
  export default Card;
  