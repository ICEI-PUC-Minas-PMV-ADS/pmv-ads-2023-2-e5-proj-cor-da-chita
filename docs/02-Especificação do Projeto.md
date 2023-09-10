# Especificações do Projeto

## Personas
| NOME | INTERESSE | PERSONALIDADE | MOTIVAÇÃO |
|:----:|:----:|:----:|:----:|
| ![Gabriela](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/persona-gabriela.png)<br>**Gabriela Fernandes**| Ela se encanta por bonecas e objetos de decoração feitos de tecido chita, que muitas vezes contam histórias culturais e tradicionais. | Gabriela é introspectiva e que encontra significado e conexão nas narrativas por trás dos objetos. | Para Gabriela, cada peça de chita é uma janela para a história e a criatividade humana. Ela encontra satisfação em aprender sobre as origens e os significados por trás de cada artefato. |
|![Gustavo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/persona-gustavo.png)<br>**Gustavo Soeiro** | Ele compra toalhas de mesa decorativas e estandartes de chita para presentear amigos e familiares. Acredita que esses presentes únicos carregam um pedaço genuíno do Nordeste. | Gustavo é criativo e apaixonado por apoiar o trabalho manual de artesãos locais. | Gustavo valoriza a autenticidade e o esforço por trás de cada peça de chita. Ele vê esses artesanatos como presentes que transcendem o material e compartilham a cultura nordestina de maneira significativa. |
| ![Larissa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/persona-larissa.png)<br>**Larissa Medeiros** | Ela adora artesanatos de chita, como bolsas e acessórios. | Larissa é uma mulher moderna e consciente, que prefere fazer suas compras de forma prática e sustentável. |  Larissa valoriza a conveniência das compras online, mas também se preocupa com a origem ética dos produtos que adquire. Ela acredita que comprar de pequenos artesãos pela internet é uma maneira de apoiar talentos locais.  |
| ![Paula](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/persona-paula.png)<br>**Paula Santana** | Ela gosta de explorar plataformas de venda online e redes sociais em busca de peças de chita únicas, como toalhas de mesa e decorações. | Paula é curiosa e entusiasta da tecnologia, sempre em busca de itens únicos e interessantes online. | Paula vê a internet como uma vasta galeria de arte e artesanato, onde ele pode encontrar peças exclusivas de chita que muitas vezes não estariam disponíveis em lojas físicas locais. |

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`|
|:----:|:----:|:----:|
| Gabriela Fernandes | Comprar artesanatos online | Decorar minha casa |
| Gabriela Fernandes | Email de confirmação na compra | Segurança dos meus dados |
| Gabriela Fernandes | História da artista e das peças | Para conhecer as inspirações e técnicas dos trabalhos |
| Gustavo Soeiro | Comprar artesanatos online | Presentear meus amigos e familiares |
| Gustavo Soeiro | Opção de frete no site | Calcular os custos finais da peça |
| Gustavo Soeiro | Comprar artesanatos online  | Conhecer a cultura da região Nordeste do Brasil |
| Larissa Medeiros | Facilidade no pagamento | Economizar meu tempo |
| Larissa Medeiros | Catálogo de produtos com fotos e descrição | Para avaliar as artes e escolher a que melhor me agrada |
| Larissa Medeiros | Comprar artesanatos online | Apoiar talentos de várias partes do país |
| Paula Santana | Comprar artesanatos online | Obter peças exclusivas |
| Paula Santana | Pagamento em PIX | Para ter um controle maior dos gastos com as peças |

## Arquitetura e Tecnologias

A arquitetura levantada para atender os requisitos funcionais e não funcionais do Cor da Chita, foi definida conforme o seguinte diagrama 

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/arquitetura.png" alt="arquitetura de solução" />


### Tecnologias e Integrações

Sanity.io: 
Para o gerenciamento de conteúdo do site, será usado um Headless Content Management System. Foi optado pelo Sanity.io, que disponibiliza interface do admin e banco de dados. 

API do Correios: 
Para cálculo do frete dos produtos de acordo com seu tamanho ,largura,altura e comprimento,calculo de prazo,. 

Next.js: 
Para integrar os serviços, e desenvolvimento da interface de usuário 

## Project Model Canvas
O Project Model Canvas foi desenvolvido levando-se em consideração as reuniões feitas e as dúvidas esclarecidas com a 'parceira de negócios' Madriana, proprietária da empresa Cor da Chita.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/PM-Canvas-Cor-da-Chita-PNG.png?raw=true" alt="Project Model Canvas" />


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
|RF-008| Os clientes podem entrar em contato com a artesã via WhatsApp ou Instagram em caso de dúvidas. | MÉDIA |
|RF-009| A artesã deverá receber notificações de novos pedidos no site. | ALTA |
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

## Diagrama de Casos de Uso

De acordo com a elicitação de requisitos, foram elencados os seguintes casos de uso:

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/diagrama-caso-uso-cor-da-chita.png" alt="diagrama de caso de uso" width="500" />

## Modelo ER (Projeto Conceitual) e Projeto da Base de Dados

Após levantamento dos requisitos e elaboração do diagrama de casos de uso, pôde-se estabelecer as entidades envolvidas no processo do produto Cor da Chita, bem como seus atributos e como se relacionam entre si. Abaixo, está o Modelo Entidade-Relacionamento que ilustra bem todo esse contexto.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/Cor_da_chita_ER.png" alt="diagrama de caso de uso" width="500" />

