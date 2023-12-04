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

* Hardware: Computador com capacidade de processamento adequada para execução de aplicações web.
* Ferramentas de Desenvolvimento: Node.js (versão LTS mais recente), npm (versão mais recente).

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

* Sanity.io

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

 
# Evidências de Testes de Software

| CT-01. FUNCIONALIDADE: AUTENTICAÇÃO | Autenticação |
|:---:|:---:|
| RF-1 | Sistema deve autenticar usuário |

| #ID | Nome | RESULTADO DA TAREFA | AUTENTICAÇÃO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | Carlos Camuzzi | DIFICULDADE | Erro autenticação | Usuário Logado | Problema na credentials do google |
| 2 | Carlos Camuzzi | SUCESSO | Login com Google | OAuth | - |
| 3 | Carlos Camuzzi | SUCESSO | Logout | Usuário desconectado | - |
| 4 | Carlos Camuzzi | SUCESSO | Login/Logout | Redirecionamento da página caso o usuário não esteja logado com o Google ou que não tenha informado seus dados para realização de pedido | - |

| CT-02. CADASTRO DE PRODUTOS | Cadastrar produto no sistema |
|---|---|
| RF-2 | Artesã deve poder cadastrar produtos no sistema |

| #ID | Nome | RESULTADO DA TAREFA | CADASTRO DE PRODUTO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Gabriel Antônio | SUCESSO | O cadastro de produto | A criação do produto com todas as propriedades definidas | - |
| 2 | Carlos Camuzzi | SUCESSO | Validação de campos de formulário | Validações corretas | - |

| CT-03. BUSCA POR PRODUTO | Buscar produto |
|---|---|
| RF-3 | A aplicação deve a busca de produtos pelo cliente |

| #ID | Nome | RESULTADO DA TAREFA | BUSCAR PRODUTO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Carlos Camuzzi | DIFICULDADE | Busca por nome do produto | Objeto retornando com erro | Query incorreta |
| 2 | Carlos Camuzzi | SUCESSO | Buscar por ID | Objeto retornado do banco de dados | - |
| 3 | Carlos Camuzzi | SUCESSO | Busca por nome do produto | Objeto retornado do banco de dados | - |

| CT-04. CARRINHO | Montar carrinho |
|---|---|
| RF-4 | A aplicação deve permitir ao usuário montar um carrinho com produtos do site |

| #ID | Nome | RESULTADO DA TAREFA | MONTAR CARRINHO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Ila Nóbrega | SUCESSO | Montagem de carrinho com itens do site | Carrinho com itens adicionados | - |
| 2 | Carlos Camuzzi | SUCESSO | Atualização quantidade | Item com a quantidade modificada | - |
| 3 | Carlos Camuzzi | SUCESSO | Atualização valores | Item com o valor atualizado | - |
| 4 | Carlos Camuzzi | SUCESSO | Atualização de valor + frete | Item com o valor atualizado | - |
| 5 | Carlos Camuzzi | SUCESSO | Renderização de vários itens | Itens renderizados corretamente | - |

| CT-05. CÁLCULO DE FRETE | Calcular frete |
|---|---|
| RF-5 | Deve haver cálculo de frete para as compras |

| #ID | Nome | RESULTADO DA TAREFA | CALCULAR FRETE | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Ila Nóbrega | SUCESSO | Após adição de itens em carrinho, no check-out, o frete foi calculado com base no CEP do comprador e tendo como base o CEP da artesã | Valores para fretes PAC e SEDEX | - |
| 2 | Gabriel Antônio | SUCESSO | Integração com a API Cep certo | Obtenção dos valores de Preço em PAC e SEDEX como também o prazo de entrega dos mesmos | Dados vindo da API vindo formatados incorretamente e em formato XML |
| 3 | Carlos Camuzzi | SUCESSO | Busca CEP API Via Cep | Busca de endereço | - |

| CT-06. PAGAMENTO | Realizar pagamento |
|---|---|
| RF-6 | A aplicação deve poder fornecer os meios de pagamento para a compra |

| #ID | Nome | RESULTADO DA TAREFA | REALIZAR PAGAMENTO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Ila Nóbrega | SUCESSO | Teste feito usando o QR Code do Mercado Pago | Dinheiro transferido entre as contas | - |
| - | Gabriel Antônio | SUCESSO | Integrar a API de pagamentos do Mercado Pago | Geração do código de pix em cada pagamento como também criação do QRCode para facilitar o pagamento do cliente | Valores de frete para realização de soma com o valor dos produtos vindo null do front caso o usuário opte por combinar o frete diretamente com a vendedora, onde este erro causava de o pagamento não ser criado |

| CT-07. CONFIRMAÇÃO DE COMPRA | Confirmar compra |
|---|---|
| RF-7 | A aplicação deve notificar a parceira sobre uma compra para que haja confirmação, tanto para ela quanto para o cliente |

| #ID | Nome | RESULTADO DA TAREFA | CONFIRMAÇÃO DE COMPRA | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Ila Nóbrega | DIFICULDADE | O e-mail chegou para cliente, mas não para artesã. O método de envio não estava aparecendo. | E-mails chegando na caixa de entrada de ambas as partes | - |
| 2 | Ila Nóbrega | SUCESSO | Confirmação enviada via e-mail, tanto para a artesã quanto para o cliente | E-mails chegando na caixa de entrada de ambas as partes | - |
| 3 | Ana Paula Buchholz | SUCESSO | Confirmação enviada via e-mail, tanto para a artesã quanto para o cliente | E-mails chegando na caixa de entrada de ambas as partes, com dados das compras | - |

| CT-08. CONTATO COM A ARTESÃ | Contatar artesã |
|---|---|
| RF-8 | O site deverá dar opções de contato com a artesã |

| #ID | Nome | RESULTADO DA TAREFA | CONTATO COM ARTESÃ | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Gabriel Antônio | SUCESSO | Possibilidade de realizar contato diretamente com a artesã | Redirecionamento para o WhatsApp, opção avulsa e quando for realizar uma compra | - |

| CT-09. NOTIFICAÇÃO DE PEDIDO | Notificar pedido |
|---|---|
| RF-9 | Ambas as partes, vendedor e comprador, devem ser notificados quando um pedido for realizado |

| #ID | Nome | RESULTADO DA TAREFA | NOTIFICAÇÃO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Ila Nóbrega | SUCESSO | Confirmação enviada via e-mail, tanto para a artesã quanto para o cliente | E-mails chegando na caixa de entrada de ambas as partes | - |

| CT-10. RELATÓRIOS DE VENDAS | Fornecer insights (Google Analytics) |
|---|---|
| RF-10 | Deve ser fornecido uma ferramenta para insights e relatórios para a vendedora |

| #ID | Nome | RESULTADO DA TAREFA | RELATÓRIO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Ila Nóbrega | SUCESSO | Uso da ferramenta Google Analytics para geração de relatórios com insights para expansão do negócio | Possibilidade de consultar diferentes métricas para o site | - |
| 2 | Ana Paula Buchholz | SUCESSO | Uso da ferramenta Google Analytics para geração de relatórios com insights para expansão do negócio | Possibilidade de consultar diferentes métricas para o site | - |

| CT-11. RELATÓRIOS DE PEDIDOS | Fornecer insights (Google Analytics) |
|---|---|
| RF-11 | O sistema deve disponibilizar aos clientes um relatório com os pedidos realizados |

| #ID | Nome | RESULTADO DA TAREFA | RELATÓRIO | SAÍDA ESPERADA | REGISTRO RESOLUÇÃO DE PROBLEMAS - Devs |
|---|---|---|---|---|---|
| 1 | Carlos Camuzzi | DIFICULDADE | Gerar relatório com a lista de pedidos | Erros de renderização | Avaliação do problema e consulta na documentação de componentes utilizada NextUi |
| 2 | Carlos Camuzzi | SUCESSO | Gerar relatório com a lista de pedidos | Renderização realizada | - |

### 5.1 - Testes de usabilidade

Após desenvolvido todo o front-end da aplicação Cor da Chita, foram aplicados testes de usabilidade com voluntários que se encaixam nas categorias de público-alvo. Neles, foi desenvolvido um formulário que, após análise do site, deveria ser respondido com notas e impressões sobre aspectos de usabilidade como estética, responsividade, facilidade de uso e navegação, nível de suporte e navegação, entre outros. Para alguns testes, houve a presença de um inspetor, membro da equipe, para guiar o usuário nas tarefas de teste. O formulário aplicado com os participantes pode ser consultado via link: https://forms.gle/fNoVSLzmjkWy5eBk7. Abaixo, registros na planilha de testes, que também pode ser acessada no link https://sgapucminasbr-my.sharepoint.com/:x:/g/personal/1366209_sga_pucminas_br/EQ3WF6ks9tBKrtCBpv-JDmUBL_wn3FT2AboSExRUhMUrRg?e=JGbCkM.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-cor-da-chita/blob/main/docs/img/testes_de_usabilidade" width="500" />


