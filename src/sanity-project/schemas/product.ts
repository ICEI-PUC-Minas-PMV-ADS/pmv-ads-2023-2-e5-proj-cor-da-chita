export default{
    name:'produto',
    type:'document',
    title:'Produto',
    fields:
    [
        {

            name:'nome',
            type:'string',
            title:'Nome do Produto',
            validation :Rule =>Rule.min(3).max(30).error("O nome do produto precisa possuir pelo menos 30 caracteres")
        },
    {

        name:'descricao',
        type:'string',
        title:'Descrição',
        validation :Rule =>Rule.min(3).max(50).error("A descrição do produto não pode possuir mais de 50 caracteres")
    },
    {
        name: 'categoria',
        type: 'string',
        title:'Categoria do produto',
        options :{
            list:['Estandartes','Cama','EcoBags E Carteiras','Outros']
        },
        validation :Rule =>Rule.min(3).required().error("A Categoria é Obrigatória")
    },
    {
        name: 'estoque',
        type: 'number',
        title:'Estoque disponível',
        validation :Rule =>Rule.positive().error("A quantidade em estoque necessária precisa ser maior ou igual a 0")
    },
    {
        name: 'peso',
        type: 'number',
        title:'Peso do Produto',
        validation :(Rule) =>Rule.positive().greaterThan(0).error("O peso do produto precisar ser maior 0 que e precisa ter valor positivo")
    },
    {
        name: 'preco',
        type: 'number',
        title:'Preço do Produto',
        validation :Rule =>Rule.positive().greaterThan(0).error("O preço do produto precisar ser maior 0 que e precisa ter valor positivo")
    },
    {
        name: 'comprimento',
        type: 'number',
        title:'Comprimento do Produto',
        validation :Rule =>Rule.positive().greaterThan(0).error("O comprimento do produto precisar ser maior 0 que e precisa ter valor positivo")
    },
    {
        name: 'largura',
        type: 'number',
        title:'Largura do Produto',
        validation :Rule =>Rule.positive().greaterThan(0).error("A largura do produto precisar ser maior 0 que e precisa ter valor positivo")
    },
    {
        name: 'altura',
        type: 'number',
        title:'Altura do produto',
        validation :Rule =>Rule.positive().greaterThan(0).error("A altura do produto precisar ser maior 0 que e precisa ter valor positivo")
    },
    //Data cadastro será pego automáticamente

    {
        title: 'imagem',
        name: 'imagem',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'legenda',
            type: 'string',
            title: 'Legenda da Imagem do Produto',
          },
         
        ]
      },

   

]
 



}