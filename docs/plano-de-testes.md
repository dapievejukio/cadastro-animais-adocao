# Plano de testes da segunda etapa

Execução em 23/11/2026 no navegador integrado ao ChatGPT, na [versão publicada em GitHub Pages](https://dapievejukio.github.io/cadastro-animais-adocao/animais/). Referência da revisão na `main`: `841b6fa`. Os registros fictícios foram removidos, e a tabela voltou ao estado vazio após recarregar. As observações abaixo são evidências textuais da execução.

## Preparação

1. Registre o commit em teste, o endereço da versão, a data, o navegador e seu responsável.
2. Use um perfil de navegador dedicado aos testes, com LocalStorage disponível. Use os dados fictícios abaixo.
3. Cadastre os dois animais pelos fluxos da aplicação quando disponíveis. Para validar o cadastro do zero, comece com a lista vazia. Reponha os dados necessários entre os casos.

| Nome | Espécie | Raça | Idade | Porte | Descrição | Saúde | Status inicial |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Luna QA 1123 | Cachorro | Sem raça definida | 2 anos | Médio | Dócil e sociável | Saudável | Disponível |
| Nino QA 1123 | Gato | Sem raça definida | 1 ano | Pequeno | Brincalhão | Saudável | Disponível |

## Casos de teste

| Caso | Cobertura | Procedimento | Resultado esperado | Resultado observado e evidência |
| --- | --- | --- | --- | --- |
| CT01 | RF01 | Preencha os campos de Luna e envie o formulário. | Luna é salva uma única vez e aparece na listagem. | Passou. Luna apareceu uma vez após salvar. |
| CT02 | RF01 | Preencha o formulário deixando o nome em branco e tente salvar. | O campo obrigatório é indicado e nenhum registro é incluído. | Passou com o campo vazio. Ver teste adicional abaixo para nome com espaços. |
| CT03 | RF02 | Consulte a lista após cadastrar Luna e Nino. | A lista mostra os dois registros com seus nomes, espécies e situações. | Passou. Luna e Nino apareceram com espécie e situação. |
| CT04 | RF03 | Altere a idade de Luna para 3 anos e salve. | A lista mostra a nova idade e mantém um único registro de Luna. Os dados de Nino permanecem iguais. | Passou. Luna apareceu com 3 anos e Nino continuou na lista. |
| CT05 | RF04 | Exclua Nino, confirmando se a interface solicitar. | Nino sai da lista e Luna permanece. | Passou. Após confirmar, a lista exibiu só Luna. |
| CT06 | RF05 | Com Luna e Nino cadastrados, pesquise por Luna e depois por um nome ausente. | A primeira pesquisa mostra apenas Luna. A segunda indica que não há resultados. | Passou. A busca por Luna retornou um registro e o termo ausente mostrou a mensagem de lista vazia. |
| CT07 | RF05 | Com os dois animais cadastrados, digite Gato no campo de pesquisa e depois limpe a busca. | A consulta por espécie mostra apenas Nino. Ao limpar, ambos voltam à lista. | Passou na busca por texto. Gato retornou apenas Nino, e limpar restaurou os dois registros. |
| CT08 | RF06 | Altere a situação de Luna para Em adoção e depois para Adotado. | A interface exibe a situação correspondente após cada alteração. | Passou. A tabela exibiu Em adoção e depois Adotado. |
| CT09 | Persistência | Cadastre Luna e Nino, edite Luna, altere sua situação, exclua Nino e recarregue a página no mesmo navegador. | Luna reaparece com os dados e a situação atualizados. Nino continua ausente. | Passou. Após recarregar, Luna apareceu com 3 anos e status Adotado. Nino continuou ausente. |
| CT10 | Responsividade | Em uma janela de 360 px e depois em tela ampla, use o formulário e a listagem. | Campos, botões e conteúdo ficam acessíveis sem rolagem horizontal da página. | Verificação parcial. A página não teve rolagem horizontal a 360 px nem a 591 px. A tabela rolou dentro do próprio contêiner. Falta repetir o fluxo completo com registros em tela estreita e ampla. |

Após cada execução, registre **Passou**, **Falhou** ou **Bloqueado**, descreva o resultado observado e inclua o link ou nome da evidência. Em caso de falha, anote os passos para reproduzir, o efeito observado e o commit usado no reteste.

## Ajustes pendentes

- **Falhou — nome com apenas espaços.** Com os demais campos obrigatórios preenchidos, três espaços no nome foram aceitos e a tabela mostrou uma linha sem nome. Rejeitar o nome após remover espaços nas extremidades e repetir o teste.
- Confirmar se a busca por espécie atende ao requisito ou se o grupo precisa oferecer um filtro dedicado. O CT07 foi executado com a busca disponível.
- Completar o CT10 com o formulário e registros em tela estreita e ampla e reunir capturas para o PDF.
