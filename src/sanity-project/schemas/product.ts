export default {
  name: 'produto',
  type: 'document',
  title: 'Produto',
  fields: [
    {
      name: 'nome',
      type: 'string',
      title: 'Nome do Produto',
      validation: (Rule: any) =>
        Rule.min(3).max(30).error('O nome do produto não pode ter mais de 30 caracteres'),
    },
    {
      name: 'descricao',
      type: 'string',
      title: 'Descrição',
      validation: (Rule: any) =>
        Rule.min(3).max(80).error('A descrição do produto não pode ter mais de 80 caracteres'),
    },
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoria do produto',
      options: {
        list: ['Estandartes', 'Cama e Mesa', 'EcoBags e Carteiras', 'Natalinos', 'Outros'],
      },
      validation: (Rule: any) => Rule.min(3).required().error('A Categoria é obrigatória'),
    },
    {
      // ????? verificar estoque: Incluir manual? Talvez não faça sentido
      name: 'estoque',
      type: 'number',
      title: 'Estoque',
      validation: (Rule: any) =>
        Rule.positive().error('A quantidade em estoque precisa ser maior ou igual a zero'),
    },
    {
      name: 'preco',
      type: 'number',
      title: 'Preço',
      validation: (Rule: any) =>
        Rule.positive().greaterThan(0).error('O preço precisa ser maior do que zero'),
    },
    {
      name: 'peso',
      type: 'number',
      title: 'Peso (kg)',
      validation: (Rule: any) =>
        Rule.positive().greaterThan(0).error('O peso precisa ser maior do que zero'),
    },
    {
      name: 'comprimento',
      type: 'number',
      title: 'Comprimento do Produto (cm)',
      validation: (Rule: any) =>
        Rule.positive().greaterThan(0).error('O comprimento precisa ser maior do que zero'),
    },
    {
      name: 'largura',
      type: 'number',
      title: 'Largura do Produto (cm)',
      validation: (Rule: any) =>
        Rule.positive().greaterThan(0).error('A largura precisa ser maior do que zero'),
    },
    {
      name: 'altura',
      type: 'number',
      title: 'Altura do Produto (cm)',
      validation: (Rule: any) =>
        Rule.positive().greaterThan(0).error('A altura precisa ser maior do que zero'),
    },
    {
      title: 'imagem',
      name: 'imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'legenda',
          type: 'string',
          title: 'Legenda',
        },
      ],
    },
    {
      // Data ficará oculta
      name: 'data',
      type: 'date',
      title: 'Data',
      description: 'Data',
      default: () => new Date().toISOString(),
      hidden: true,
    },
    {
      // Para gerar URL amigável
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
  ],
}
