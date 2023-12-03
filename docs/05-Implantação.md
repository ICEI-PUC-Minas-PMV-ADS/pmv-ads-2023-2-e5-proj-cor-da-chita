# Implantação do Software

## Planejamento de Implantação:

**1. Análise de Requisitos e Escopo do Projeto**
* Entender completamente os requisitos do software e as necessidades dos usuários.
* Identificar funcionalidades-chave e recursos necessários para o projeto.

**3. Arquitetura de Software**
* Projetar a estrutura geral do software.
* Decidir sobre a arquitetura frontend (Next.js, React.js, TypeScript) e design de interface do usuário.
* Projetar a arquitetura do backend usando C# .NET (hospedada no Azure) para a API, incluindo endpoints para interagir com o frontend e a integração com a API do Mercado Pago.

**5. Desenvolvimento**
**a.** Frontend (Next.js, React.js, TypeScript)
* Configurar o ambiente de desenvolvimento.
* Desenvolver componentes e interfaces de usuário usando React.js e TypeScript.
* Implementar rotas, gerenciamento de estado e integração com a API backend.
* Testar e iterar no desenvolvimento do frontend.

**b.** Backend (C# .NET no Azure)
* Configurar e criar o projeto C# .NET no ambiente Azure.
* Implementar endpoints da API conforme necessário para suportar as funcionalidades do frontend.
* Integrar a API do Mercado Pago para processamento de pagamentos PIX.
* Implementar segurança e autorização, se aplicável.
* Testar a funcionalidade da API.

**7.** Integração e Testes
* Integrar o frontend e o backend para garantir que se comuniquem corretamente.
* Realizar testes de unidade, integração e teste de sistema para verificar o funcionamento correto do software.
* Corrigir e resolver quaisquer problemas identificados durante os testes.

**8.** Implantação
* Preparar o ambiente de produção (Vercel para frontend, Azure para backend).
* Realizar a implantação do frontend (Next.js, React.js) na Vercel.
* Implantar o backend (C# .NET) no Azure.
* Configurar e testar a infraestrutura de hospedagem.

**9.** Monitoramento e Manutenção
* Configurar ferramentas de monitoramento para acompanhar o desempenho e identificar problemas.
* Estabelecer procedimentos de manutenção contínua e suporte técnico conforme necessário.

## Implantação

| Etapa | Descrição |
|-------|-----------|
| Escolha de Hospedagem do Site | O site foi hospedado no Vercel devido à facilidade de integração com o NextJS, oferecendo escalabilidade, CDN global e integração contínua/distribuição contínua (CI/CD). |
| Publicação do Frontend | Deploy automático do site no Vercel a partir do repositório Git, garantindo atualizações contínuas com base no código-fonte. |
| Publicação da API | A API foi implantada no Microsoft Azure, aproveitando a infraestrutura da nuvem, seus serviços escaláveis e a possibilidade de gerenciamento e monitoramento robusto. |
| Integração entre Frontend e Backend | Comunicação entre o site hospedado no Vercel e a API no Azure, utilizando endpoints definidos para garantir a troca segura e eficiente de dados. |
| Integração PIX | PIX direto no app, utilizando o serviço do Mercado Pago. |



