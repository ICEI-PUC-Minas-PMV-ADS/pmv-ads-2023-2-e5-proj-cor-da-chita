//Interface para definir os tipos que virão do content leaker, do produto
export interface Produto {
  _id: string;
  nome: string;
  descricao: string[];
  categoria: string;
  estoque: number;
  peso: number;
  preco: number;
  comprimento: number;
  largura: number;
  altura: number;
  imagem: any;
  _createdAt: string;
  slug: {
    current: string;
  };
}
