# Boas práticas da segunda etapa

O ponto de partida verificado na `main` é uma página em português com estrutura semântica em HTML, folha de estilo separada e configuração de viewport. Os demais itens deste guia são critérios propostos para a implementação e a revisão.

## Interface e comportamento

- Use rótulos associados aos campos do formulário, preserve a navegação por teclado e deixe o foco visível.
- Informe os erros junto aos campos e indique quando uma lista ou pesquisa estiver vazia. Mostre a situação da adoção em texto.
- Mantenha em HTML a estrutura, em CSS a apresentação e em JavaScript o comportamento. Revise formulário e listagem em telas estreitas e amplas.
- Valide os campos obrigatórios antes de gravar e mostre as informações digitadas como texto ao montar os cards.
- Use dados fictícios em testes e demonstrações. LocalStorage mantém os registros no navegador e na origem em uso. A limpeza dos dados do site pode apagá-los.

## Modelo de dados proposto

Samuel, Pedro e Oiama devem alinhar os nomes dos campos e a forma de armazenamento antes de integrar formulário, listagem e filtros.

| Campo | Exemplo ou regra |
| --- | --- |
| ID | Identificador único e estável, gerado pela aplicação. |
| Nome | Luna |
| Espécie | Cachorro |
| Raça | Sem raça definida |
| Idade | 2 anos. Combine o formato e a unidade com o grupo. |
| Porte | Médio |
| Descrição | Dócil e sociável |
| Saúde | Vacinada |
| Status | Disponível, Em processo de adoção ou Adotado. |

## Revisão e integração

1. Trabalhe em uma branch dedicada à sua contribuição e use mensagens de commit que descrevam a mudança.
2. Abra um pull request com um resumo, o requisito atendido e os passos para verificar a alteração.
3. Revise os trechos afetados e execute os casos correspondentes do [plano de testes](plano-de-testes.md). Guarde evidências das verificações.
4. Após integrar, faça uma nova verificação na versão publicada no GitHub Pages.

## PDF e apresentação

Inclua as funcionalidades implementadas, exemplos de boas práticas aplicadas, capturas da aplicação funcionando, a tabela com os resultados dos testes e uma conclusão com as limitações observadas. Na demonstração, use dados fictícios para percorrer cadastro, consulta, edição, exclusão, pesquisa, filtros e atualização de status. Recarregue a página para demonstrar a persistência. Um vídeo curto é opcional.
