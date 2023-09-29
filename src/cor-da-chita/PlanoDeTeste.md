# 📋 Plano de Teste

**Cor da Chita**

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
20/09/2023 |  1.0   | Release incial | Cor da Chita


## 1 - Introdução

### 1.1 - Propósito do Sistema

No universo da arte e da criatividade, a materialização de ideias é um ato de singular importância. É com essa convicção que surge a Vitrine Virtual da talentosa artesã, um projeto concebido com o propósito de estreitar laços entre a arte e aqueles que a admiram, elevando a experiência de adquirir peças únicas e feitas com amor.

A essência desse projeto reside na democratização do acesso aos tesouros meticulosamente elaborados pela artesã. A plataforma proporciona aos clientes uma jornada fluida e intuitiva, onde podem explorar um catálogo repleto de criações, cada uma contando sua própria história e emanando o cuidado e a dedicação empregados em sua confecção. Aqui, os produtos transcenderam a condição de meros objetos, tornando-se veículos de expressão e manifestações tangíveis de criatividade.

A interatividade é um pilar fundamental dessa experiência. O cliente, ao explorar a vitrine, não é mero observador, mas sim parte integrante do processo. Através de um simples clique, é possível selecionar e adquirir a peça que mais ressoa com seu coração. Essa troca digital, longe de ser fria, é um elo de união entre o artesão e aqueles que apreciam seu talento.

Todavia, a verdadeira magia acontece quando o cliente opta pela personalização. O projeto proporciona um canal direto e instantâneo, facilitando o diálogo entre o admirador e a artesã. Através do WhatsApp, o cliente tem a oportunidade de expressar suas visões e desejos, guiando a criação de uma peça verdadeiramente única. É aqui que a arte transcende o conceito de objeto e se transforma em uma extensão da alma do cliente, fundindo-se com o expertise e sensibilidade da artesã.

Para a artesã, este projeto representa mais do que uma vitrine virtual; é uma ponte que liga o seu universo criativo ao mundo, permitindo que suas criações alcancem novos horizontes e corações. A visualização dos pedidos recebidos é um momento de celebração e gratidão, pois cada solicitação é uma manifestação de confiança, um convite para materializar sonhos e compartilhar emoções.

Em última análise, o propósito da Vitrine Cor da Chita é transcendental. É a confluência de paixão, habilidade e tecnologia, unindo mentes criativas e apreciadores de arte em uma jornada de autenticidade e conexão. É um convite para celebrar a singularidade de cada peça e a história que ela carrega consigo. É um testemunho do poder da arte em encurtar distâncias e criar laços duradouros.

### 1.2 Documentação do Projeto
Documento                    | Irá fazer parte do projeto | Observações
-----------------------------|----------------------------|-----------------------------
Especificação de Requisitos  |       Sim                  | Irá definir as funcionalidades e o ambiente que o sistema deve possuir
Especificação de Casos de Uso|       Sim                  | Descreverá de forma detalhada as funcionalidades do sistema

## 2 - Abordagens de testes

### 2.2 Requisitos funcionais:

Identificador do requisito  | Tipo do requisito                          | Descrição
----------------------------|--------------------------------------------|---------------------
RF-1                        |      Funcionalidade: Autenticação          | O sistema suportará autenticação de usuários
RF-2                        |      Funcionalidade: Cadastro de Produtos  | A artesã pode cadastrar novos produtos, definindo suas descrições, preços, gerar estoque, assim como excluir os produtos já cadastrados. 
RF-3                        |       Funcionalidade: Busca por Produtos   | O cliente pode realizar buscas por produtos por nome, categoria e preço 
RF-4                        |       Funcionalidade: Carrinho             | O cliente pode adicionar ou excluir produtos no carrinho 
RF-5                        |       Funcionalidade: Cálculo de frete     | O sistema se integra à API dos Correios para calcular o frete com base no endereço do cliente.
RF-6                        |       Funcionalidade: Pagamento            | Os clientes podem escolher opções de pagamento, PIX ou cartão via contato de WhatsApp, e concluir a compra. 
RF-7                        |       Funcionalidade: Confirmação de compra| Os clientes devem receber um e-mail de confirmação após a conclusão da compra. 
RF-8                        |       Funcionalidade: Contato com a Artesã | Os clientes podem entrar em contato com a artesã via WhatsApp ou Instagram em caso de dúvidas. 
RF-9                        |       Funcionalidade: Notificação de pedido| A artesã deverá receber notificações de novos pedidos no site. 
RF-10                       |       Funcionalidade: Relatórios de Vendas | O sistema pode gerar relatórios que mostram o período do mês com mais vendas e as regiões do Brasil com mais compras.


### 2.3 Requisitos não-funcionais:

Identificador do requisito   | Tipo do requisito    | Descrição
-----------------------------|----------------------|---------------------
RNF-1                        |      Segurança       | Dados sensíveis devem ser protegidos com medidas de segurança adequadas. 
RNF-2                        |      Disponibilidade | O sistema deve ser capaz de lidar com um grande número de usuários de diferentes regiões do Brasil. 
RNF-3                        |       Desempenho     | O tempo de resposta devem ser razoáveis para garantir uma boa experiência do usuário. 
RNF-4                        |       Autenticação   | A autenticação será baseada em OAuth, com opções de login via Google ou Microsoft. 


## 2.4 - Detalhamento das abordagens de teste

| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de cadastro de pessoas quanto à criação de dados, na base de dados 
| Requisitos que motivaram esse teste | RF-1 


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de cadastro de produtos na base de dados 
| Requisitos que motivaram esse teste | RF-2


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de recuperar dados de produtos cadastrados na base
| Requisitos que motivaram esse teste | RF-3


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de adicionar e remover produtos do carrinho 
| Requisitos que motivaram esse teste | RF-4


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar o funcionamento do cálculo do frete ao inserir o CEP do cliente
| Requisitos que motivaram esse teste | RF-5 


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de pagamento, via PIX/WhatsApp 
| Requisitos que motivaram esse teste | RF-6


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Teste do recebimento de e-mail após a compra, a fim de confirmar que o pedido foi recebido
| Requisitos que motivaram esse teste | RF-7


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar que os usuários conseguem se comunicar com a vendedora, via WhatsApp
| Requisitos que motivaram esse teste | RF-8


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Teste do recebimento de notificações à artesã quando novos pedidos forem realizados 
| Requisitos que motivaram esse teste | RF-9 


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de extrair dados da base, a fim de concluir métricas de vendas
| Requisitos que motivaram esse teste | RF-10


| Tipo de Teste                       | Não Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a capacidade do sistema de lidar com inúmeras requisições concomitantemente
| Requisitos que motivaram esse teste | RNF-02 


| Tipo de Teste                       | Não Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar o tempo de carregamento dos elementos na página
| Requisitos que motivaram esse teste | RNF-03


| Tipo de Teste                       | Não Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar o login, que poderá ser feito via Google ou Microsoft
| Requisitos que motivaram esse teste | RNF-04


### 2.5 Ferramentas utilizadas

Ferramenta                  | Fabricante            | Versão
----------------------------|-----------------------|---------------------
Sanity.io                   |     Sanity            | ^5.5.3
API Correios                |     Correios ©        | x
Next.js                     |     Vercel            | 18.2.0
OAuth                       |     Google            | x

## 3 - Ambiente de Testes - Hardware e Software
* Hardware:

    Computador com capacidade de processamento adequada para execução de aplicações web.

    Conexão à internet estável para acesso à aplicação e comunicação com o servidor.

* Software:

    Sistema Operacional: Windows 10 ou superior / macOS 10.14 ou superior / Ubuntu 18.04 LTS ou superior.

    Navegadores: Google Chrome (versão mais recente), Mozilla Firefox (versão mais recente), Safari (versão mais recente).

    Aplicativo de Mensagens: WhatsApp instalado e configurado (para testes de comunicação com o dono da loja).

    Ferramentas de Desenvolvimento: Node.js (versão LTS mais recente), npm (versão mais recente).


## 4 - Programação dos Testes

Esta seção descreve os recursos necessários para a execução dos testes no projeto de vitrine de produtos artesanais.

### 4.1 Objetivos e prioridades

O sistema deve possibilitar ao usuário a realização da compra de produtos exibidos.
O sistema deve prover o gerenciamento de produtos presentes no carrinho de compras.
O sistema deve possibilitar ao comprador a comunicação com o vendedor, por meio de botão que redirecionará ao WhatsApp.
O sistema deverá gerenciar os produtos exibidos e seus respectivos detalhes.
O sistema deve gerar relatórios das regiões do país em que a loja mais recebeu pedidos.
O sistema deve gerar relatórios das regiões das épocas do ano em que a loja mais recebeu pedidos.

### 4.2 - Ferramenta de Teste

→ Sanity.io

Descrição: Sanity.io é uma plataforma de gerenciamento de conteúdo (CMS) que será utilizada para gerenciar o conteúdo exibido na vitrine de produtos. Ela oferece uma interface amigável e flexível para criação e edição de conteúdo.
Site Oficial: https://www.sanity.io/
Ferramentas Adicionais (Opcionais):
Jest (para testes unitários)
Selenium (para testes de integração)

Com estes recursos de software e hardware, juntamente com as ferramentas específicas de teste, a equipe terá o ambiente necessário para conduzir os testes de forma eficaz no projeto da vitrine de produtos artesanais.

## 5 - Casos de Testes

Caso de Uso         | Id       | Passos                                                      | Resultado Esperado
--------------------|----------|-------------------------------------------------------------|-----------------
Listar produtos     |    1     | Acessar página home do site                                 | Página inicial com os produtos será exibida
&nbsp;              |    2      | Escolher uma das categorias disponíveis no menu superior   | Lista de produtos da categoria serão exibidos


Caso de Uso         | Id       | Passos                                                      | Resultado Esperado
--------------------|----------|-------------------------------------------------------------|-----------------
Cadastrar produtos  |    1     | Acessar página home do site                                 | Página inicial com os produtos será exibida
&nbsp;              |    2     | Escolher opção de adicionar produtos                        | Deve ser exibido modal com toda descrição do produto, título, valor e demais informações


Caso de Uso         | Id       | Passos                                                      | Resultado Esperado
--------------------|----------|-------------------------------------------------------------|-----------------
Comunicar com artesã|    1     | Acessar página home do site                                 | Página inicial com os produtos será exibida
&nbsp;              |    2     | Clicar no botão que redireciona ao WhatsApp   | Deve realizar, com sucesso, redirecionamento


Caso de Uso         | Id       | Passos                                                      | Resultado Esperado
--------------------|----------|-------------------------------------------------------------|-----------------
Adicionar produtos no carrinho  |    1     | Acessar página home do site                                 | Página inicial com os produtos será exibida
&nbsp;              |    2     | Escolher produto desejado   | O produto deve ser exibido no carrinho


Caso de Uso         | Id       | Passos                                                      | Resultado Esperado
--------------------|----------|-------------------------------------------------------------|-----------------
Realizar pagamento  |    1     | Clicar na opção de comprar                                 | Página de pagamento será exibida
&nbsp;  |    2     | Escolher opção de pagamento desejada  | Se PIX, deve ser exibido QR Code, se pagamento for via WhatsApp, a artesã deverá enviar dados para que seja finalizado o pagamento


## 6 - Cronograma

Tipo de teste      | Duração | data de início | data de término
-------------------|---------|----------------|-----------------
planejar teste     |         | dd/mm/aaaa     | dd/mm/aaaa
projetar teste     |         | dd/mm/aaaa     | dd/mm/aaaa
implementar teste  |         | dd/mm/aaaa     | dd/mm/aaaa
executar teste     |         | dd/mm/aaaa     | dd/mm/aaaa
avaliar teste      |         | dd/mm/aaaa     | dd/mm/aaaa