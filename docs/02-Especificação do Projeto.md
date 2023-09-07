# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto, assim como suas prioridades.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|:------:|:-----------------------------------------:|:----:|
|RF-001| O sistema suportará autenticação de usuários | ALTA | 
|RF-002| A artesã pode cadastrar novos produtos, definindo suas descrições, preços, gerar estoque, assim como excluir os produtos já cadastrados. | ALTA |
|RF-003| O cliente pode realizar buscas por produtos por nome, categoria e preço  | MÉDIA |
|RF-004| O cliente pode adicionar ou excluir produtos no carrinho  | ALTA |
|RF-005| O sistema se integra à API dos Correios para calcular o frete com base no endereço do cliente. | MÉDIA |
|RF-006| Os clientes podem escolher opções de pagamento, PIX ou cartão via contato de WhatsApp, e concluir a compra. | MÉDIA |
|RF-007| Os clientes devem receber um e-mail de confirmação após a conclusão da compra.  | BAIXA |
|RF-008| Os clientes podem entrar em contato com a artesã via WhatsApp ou Instagram em caso de dúvidas. | BAIXA |
|RF-009| A artesã deverá receber notificações de novos pedidos no site. | BAIXA |
|RF-010|  O sistema pode gerar relatórios que mostram o período do mês com mais vendas e as regiões do Brasil com mais compras. | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|:-------:|:-------------------------:|:----:|
|RNF-001| Dados sensíveis devem ser protegidos com medidas de segurança adequadas. | ALTA | 
|RNF-002| O sistema deve ser capaz de lidar com um grande número de usuários de diferentes regiões do Brasil. | BAIXA | 
|RNF-003| O tempo de resposta devem ser razoáveis para garantir uma boa experiência do usuário.  | MÉDIA | 
|RNF-004| A autenticação será baseada em OAuth, com opções de login via Google ou Microsoft.  | ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|:--:|:-------------------------------------------------------:|
|01| O sistema será oferecido apenas em português. |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Sugestão de ferramentas para geração deste artefato: LucidChart e Draw.io.

A referência abaixo irá auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
