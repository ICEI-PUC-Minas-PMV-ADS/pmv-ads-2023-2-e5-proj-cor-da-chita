# Plano de Teste

**Cor da Chita**

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
20/09/2023 |  1.0   | Release incial | Cor da Chita


## 1 - Introdução

No universo da arte e da criatividade, a materialização de ideias é um ato de singular importância. É com essa convicção que surge a Vitrine Virtual da talentosa artesã, um projeto concebido com o propósito de estreitar laços entre a arte e aqueles que a admiram, elevando a experiência de adquirir peças únicas e feitas com amor.

A essência desse projeto reside na democratização do acesso aos tesouros meticulosamente elaborados pela artesã. A plataforma proporciona aos clientes uma jornada fluida e intuitiva, onde podem explorar um catálogo repleto de criações, cada uma contando sua própria história e emanando o cuidado e a dedicação empregados em sua confecção. Aqui, os produtos transcenderam a condição de meros objetos, tornando-se veículos de expressão e manifestações tangíveis de criatividade.

A interatividade é um pilar fundamental dessa experiência. O cliente, ao explorar a vitrine, não é mero observador, mas sim parte integrante do processo. Através de um simples clique, é possível selecionar e adquirir a peça que mais ressoa com seu coração. Essa troca digital, longe de ser fria, é um elo de união entre o artesão e aqueles que apreciam seu talento.

Todavia, a verdadeira magia acontece quando o cliente opta pela personalização. O projeto proporciona um canal direto e instantâneo, facilitando o diálogo entre o admirador e a artesã. Através do WhatsApp, o cliente tem a oportunidade de expressar suas visões e desejos, guiando a criação de uma peça verdadeiramente única. É aqui que a arte transcende o conceito de objeto e se transforma em uma extensão da alma do cliente, fundindo-se com o expertise e sensibilidade da artesã.

Para a artesã, este projeto representa mais do que uma vitrine virtual; é uma ponte que liga o seu universo criativo ao mundo, permitindo que suas criações alcancem novos horizontes e corações. A visualização dos pedidos recebidos é um momento de celebração e gratidão, pois cada solicitação é uma manifestação de confiança, um convite para materializar sonhos e compartilhar emoções.

Em última análise, o propósito da Vitrine Cor da Chita é transcendental. É a confluência de paixão, habilidade e tecnologia, unindo mentes criativas e apreciadores de arte em uma jornada de autenticidade e conexão. É um convite para celebrar a singularidade de cada peça e a história que ela carrega consigo. É um testemunho do poder da arte em encurtar distâncias e criar laços duradouros.

## 2 - Referências

### 2.1 Documentação do Projeto
Documento | Irá fazer parte do projeto | Observações
-----------------------------|---------------------|-----------------------------
Especificação de Requisitos                      |       Sim    | Irá definir as funcionalidades e o ambiente que o sistema deve possuir
Especificação de Casos de Uso                      |       Sim  | Descreverá de forma detalhada as funcionalidades do sistema


### 2.2 Requisitos funcionais:

Identificador do requisito  | Tipo do requisito     | Descrição
----------------------------|-----------------------|---------------------
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


## 3 - Detalhamento das abordagens de teste

----------------------------|-----------------------|---------------------
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

- Teste de interface de usuário;
- Teste de performance;
- Teste de segurança e controle de acesso;
- Teste de instalação;

### 3.1 Ferramentas utilizadas

Ferramenta                  | Fabricante            | Versão
----------------------------|-----------------------|---------------------
Sanity.io                   |     Sanity            | ^5.5.3
API Correios                |     Correios ©        | x
Next.js                     |      Vercel           | 18.2.0
OAuth                       |       Google          | x

### 3.1 - Métodos da Classe 

Para teste de funcionalidade.
Aqui deve-se verificar se cada classe retorna o esperado.
Se possível usar teste automatizado.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            descreva aqui o objetivo
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade (x)
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>   
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) ou equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.2 - Persistência de Dados

Para teste de integridade de dados e do banco de dados.
Aqui deve-se verificar se os dados não se perdem ao desligar o programa. Se o programa consegue se recuperar em caso de falha ou fechamento repentino.
Se possível usar teste automatizado.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se dados são mantidos após súbito desligamento do programa .
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) ou equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.3 - Integração dos Componentes

Para teste de funcionalidade.
Aqui deve-se verificar se as classes e métodos conseguem fazer a integração entre elas para uma sequência de ações do programa.
Se possível usar teste automatizado.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            descreva aqui o objetivo
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) ou equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.4 - Tempo de Resposta

Para teste de funcionalidade.
Aqui deve-se verificar se o tempo de respostas das ações do programa são consideradas aceitáveis.
Se possível usar teste automatizado.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            descreva aqui o objetivo
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            ( ) manual
        </th>
        <th colspan="2">
            ( ) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta ( )
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programadores e equipe de testes
        </th>
    </tr>
</table>
<br/>

## 4 - Recursos

Esta seção deve descrever os recursos humanos, de ambiente de teste (hardware e software) e de ferramentas de automatização de testes necessários para execução dos testes que devem ser descritos nas subseções que seguem.

### 4.1 - Ambiente de teste - Software e Hardware

Descreva aqui o hardware e sua configuração, e o software. Por exemplo, o sistema operacional, browsers, servidor web, etc.

### 4.2 - Ferramenta de teste

Descreva aqui as ferramentas específicas de teste usadas no projeto.


## 5 - Cronograma

Tipo de teste      | Duração | data de início | data de término
-------------------|---------|----------------|-----------------
planejar teste     |         | dd/mm/aaaa     | dd/mm/aaaa
projetar teste     |         | dd/mm/aaaa     | dd/mm/aaaa
implementar teste  |         | dd/mm/aaaa     | dd/mm/aaaa
executar teste     |         | dd/mm/aaaa     | dd/mm/aaaa
avaliar teste      |         | dd/mm/aaaa     | dd/mm/aaaa