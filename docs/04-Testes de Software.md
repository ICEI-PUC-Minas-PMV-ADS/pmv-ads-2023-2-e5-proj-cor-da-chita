# Planos de Testes de Software

## 1 - Introdução

### 1.1 - Propósito do Sistema

No universo da arte e da criatividade, a materialização de ideias é um ato de singular importância. É com essa convicção que surge a Vitrine Virtual da talentosa artesã, um projeto concebido com o propósito de estreitar laços entre a arte e aqueles que a admiram, elevando a experiência de adquirir peças únicas e feitas com amor.

A essência desse projeto reside na democratização do acesso aos tesouros meticulosamente elaborados pela artesã. A plataforma proporciona aos clientes uma jornada fluida e intuitiva, onde podem explorar um catálogo repleto de criações, cada uma contando sua própria história e emanando o cuidado e a dedicação empregados em sua confecção. Aqui, os produtos transcenderam a condição de meros objetos, tornando-se veículos de expressão e manifestações tangíveis de criatividade.

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
RNF-4                        |       Autenticação   | A autenticação será baseada em OAuth, com opções de login via Google ou Microsoft. 


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de cadastro de pessoas quanto à criação de dados, na base de dados 
| Requisitos que motivaram esse teste | RF-1 


### 3.1 Ferramentas utilizadas
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


| Tipo de Teste                       | Funcional                                                                                  
|-------------------------------------|:--------------------------------------------------------------------------------------------:
| Subtipo de Teste                    | Requisitos                                                                                 
| Objetivo de Teste                   | Testar a funcionalidade de geração dos relatórios de pedidos para o cliente
| Requisitos que motivaram esse teste | RF-11


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

* Hardware:

    Computador com capacidade de processamento adequada para execução de aplicações web.

* Ferramentas de Desenvolvimento: 
Node.js (versão LTS mais recente), npm (versão mais recente).

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
 
# Evidências de Testes de Software

Apresente imagens e/ou vídeos que comprovam que um determinado teste foi executado, e o resultado esperado foi obtido. Normalmente são screenshots de telas, ou vídeos do software em funcionamento.
