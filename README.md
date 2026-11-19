# Cadastro de Animais para Adoção

Projeto Integrador de Boas Práticas de Desenvolvimento de Software. A aplicação web foi planejada para organizar os cadastros de animais e facilitar a consulta e o acompanhamento das adoções.

[Abrir a página inicial no GitHub Pages](https://dapievejukio.github.io/cadastro-animais-adocao/)

## Situação da segunda etapa

Na revisão de 19/11/2026, a branch `main` continha a página inicial em HTML e CSS, com as seções **Animais disponíveis** e **Gerenciamento**. Essa interface é estática. Formulário de cadastro, listagem dinâmica e persistência no navegador seguem pendentes de integração à `main`. JavaScript e LocalStorage estão previstos para a etapa.

Julio criou o repositório, configurou o GitHub Pages e publicou a estrutura inicial em HTML e CSS. Em 19/11/2026, preparou a documentação da etapa com o status do projeto, a proposta de divisão, o plano de testes e o guia de boas práticas.

## Requisitos funcionais

A numeração abaixo organiza os requisitos da segunda etapa para acompanhamento e testes. A situação se refere ao código revisado na `main`.

| ID | Requisito | Situação |
| --- | --- | --- |
| RF01 | Cadastrar um animal e validar os campos obrigatórios. | Pendente |
| RF02 | Consultar os animais em uma listagem dinâmica. | Pendente |
| RF03 | Editar os dados de um animal cadastrado. | Pendente |
| RF04 | Excluir um animal cadastrado. | Pendente |
| RF05 | Pesquisar e filtrar os animais cadastrados. | Pendente |
| RF06 | Atualizar a situação de adoção de um animal. | Pendente |

Os registros deverão ser preservados via LocalStorage ao recarregar a página no mesmo navegador.

## Integrantes e divisão proposta

Julio fica com a coordenação e a integração. Cada colega pode escolher uma das seis tarefas disponíveis e confirmar a escolha com o grupo. As pendências indicam entregas ainda aguardadas na `main`.

| Integrante | Responsabilidade | Situação e próximos passos |
| --- | --- | --- |
| Julio Cesar da Pieve | Coordenação e integração | Repositório, GitHub Pages e interface inicial montados. Documentação de planejamento preparada. Revisão e integração das próximas entregas pendentes. |
| Colega 01 | HTML | Montar o formulário e a estrutura da listagem. |
| Colega 02 | CSS | Estilizar formulário, botões e cards e ajustar o layout para celular. |
| Colega 03 | JavaScript | Implementar cadastro, listagem, edição e exclusão. |
| Colega 04 | Persistência, pesquisa e status | Implementar LocalStorage, pesquisa, filtros e atualização da situação de adoção. |
| Colega 05 | Testes e correções | Executar os cenários, registrar evidências e coordenar a correção e o reteste das falhas. |
| Colega 06 | Documentação e apresentação | Reunir capturas de tela, resultados de testes e boas práticas aplicadas no PDF final. |

## Documentação

- [Plano de testes](docs/plano-de-testes.md)
- [Boas práticas e preparação da entrega](docs/boas-praticas.md)
