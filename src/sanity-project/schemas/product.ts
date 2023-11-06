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
        Rule.min(3)
          .max(30)
          .error('O nome do produto não pode ter menos de 3 ou mais de 30 caracteres'),
    },
    {
      name: 'descricao',
      type: 'array',
      title: 'Descrição',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule: any) =>
        Rule.required()
          .max(120)
          .error('A descrição é obrigatória e não pode passar de 120 caracteres'),
    },
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoria do produto',
      options: {
        list: ['Estandartes', 'Cama e Mesa', 'Ecobags e Carteiras', 'Natalinos', 'Outros'],
      },
      validation: (Rule: any) => Rule.required().error('A Categoria é obrigatória'),
    },
    {
      name: 'estoque',
      type: 'number',
      title: 'Estoque',
      validation: (Rule: any) =>
        Rule.positive().error('A quantidade em estoque precisa ser maior ou igual a zero'),
    },
    {
      name: 'preco',
      type: 'number',
      title: 'Preço (R$)',
      validation: (Rule: any) => Rule.greaterThan(0).error('O preço precisa ser maior do que zero'),
    },
    {
      name: 'peso',
      type: 'number',
      title: 'Peso (g)',
      validation: (Rule: any) => Rule.greaterThan(0).error('O peso precisa ser maior do que zero'),
    },
    {
      name: 'comprimento',
      type: 'number',
      title: 'Comprimento do Produto (cm)',
      validation: (Rule: any) =>
        Rule.greaterThan(0).error('O comprimento precisa ser maior do que zero'),
    },
    {
      name: 'largura',
      type: 'number',
      title: 'Largura do Produto (cm)',
      validation: (Rule: any) =>
        Rule.greaterThan(0).error('A largura precisa ser maior do que zero'),
    },
    {
      name: 'altura',
      type: 'number',
      title: 'Altura do Produto (cm)',
      validation: (Rule: any) =>
        Rule.greaterThan(0).error('A altura precisa ser maior do que zero'),
    },
    {
      name: 'imagem',
      type: 'image',
      title: 'imagem',
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
    // Não está funcionando - rever
    {
      // Para gerar URL amigável
      name: 'slug',
      type: 'slug',
      title: 'Gerar Link',
      options: {
        source: 'nome',
      },
      validation: (Rule: any) => Rule.required().error('Necessário gerar o link'),
    },
  ],
}
