# Cadastro de Animais para Adoção

Projeto Integrador de Boas Práticas de Desenvolvimento de Software. A aplicação web foi planejada para organizar os cadastros de animais e facilitar a consulta e o acompanhamento das adoções.

[Abrir a aplicação no GitHub Pages](https://dapievejukio.github.io/cadastro-animais-adocao/animais/)

## Situação da segunda etapa

Em 23/11/2026, a aplicação em `animais/` foi verificada na versão publicada. O formulário, a listagem, a edição, a exclusão, a pesquisa por texto e a mudança de status funcionaram nos cenários executados. A página inicial do repositório ainda é a interface estática.

Julio criou o repositório, configurou o GitHub Pages e publicou a estrutura inicial em HTML e CSS. Em 19/11/2026, preparou a documentação da etapa com o status do projeto, a proposta de divisão, o plano de testes e o guia de boas práticas.

## Requisitos funcionais

A numeração abaixo organiza os requisitos da segunda etapa para acompanhamento e testes. A situação reflete o teste da versão publicada em 23/11/2026.

| ID | Requisito | Situação |
| --- | --- | --- |
| RF01 | Cadastrar um animal e validar os campos obrigatórios. | Implementado. O formulário bloqueia nome vazio, mas aceita apenas espaços. |
| RF02 | Consultar os animais em uma listagem dinâmica. | Validado |
| RF03 | Editar os dados de um animal cadastrado. | Validado |
| RF04 | Excluir um animal cadastrado. | Validado |
| RF05 | Pesquisar e filtrar os animais cadastrados. | Pesquisa por texto validada, inclusive por espécie. Filtro dedicado a confirmar com o grupo. |
| RF06 | Atualizar a situação de adoção de um animal. | Validado |

A persistência via LocalStorage foi validada ao recarregar a página no mesmo navegador, inclusive após editar e excluir registros.

## Integrantes e divisão proposta

Julio fica com a coordenação e a integração. Cada colega pode escolher uma das seis tarefas disponíveis e confirmar a escolha com o grupo. A tabela registra a divisão proposta para a etapa. Consulte os resultados e ajustes pendentes no plano de testes.

| Integrante | Responsabilidade | Situação e próximos passos |
| --- | --- | --- |
| Julio Cesar da Pieve | Coordenação e integração | Repositório, GitHub Pages e interface inicial montados. Documentação de planejamento preparada. Revisão e integração das próximas entregas pendentes. |
| Oima | HTML | Montar o formulário e a estrutura da listagem. |
| Oiama | CSS | Estilizar formulário, botões e cards e ajustar o layout para celular. |
| Oiama | JavaScript | Implementar cadastro, listagem, edição e exclusão. |
| Colega 04 | Persistência, pesquisa e status | Implementar LocalStorage, pesquisa, filtros e atualização da situação de adoção. |
| Julio | Testes e correções | Executar os cenários, registrar evidências e coordenar a correção e o reteste das falhas. |
| Colega 06 | Documentação e apresentação | Reunir capturas de tela, resultados de testes e boas práticas aplicadas no PDF final. |

## Documentação

- [Plano de testes](docs/plano-de-testes.md)
- [Boas práticas e preparação da entrega](docs/boas-praticas.md)
