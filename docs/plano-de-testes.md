# Plano de testes da segunda etapa

Use este roteiro após integrar as funcionalidades. Todos os casos estão **pendentes de execução**.

## Preparação

1. Registre o commit em teste, o endereço da versão, a data, o navegador e seu responsável.
2. Use um perfil de navegador dedicado aos testes, com LocalStorage disponível. Use os dados fictícios abaixo.
3. Cadastre os dois animais pelos fluxos da aplicação quando disponíveis. Para validar o cadastro do zero, comece com a lista vazia. Reponha os dados necessários entre os casos.

| Nome | Espécie | Raça | Idade | Porte | Descrição | Saúde | Status inicial |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Luna | Cachorro | Sem raça definida | 2 anos | Médio | Dócil e sociável | Vacinada | Disponível |
| Nino | Gato | Sem raça definida | 1 ano | Pequeno | Brincalhão | Vacinado | Disponível |

## Casos de teste

| Caso | Cobertura | Procedimento | Resultado esperado | Resultado observado e evidência |
| --- | --- | --- | --- | --- |
| CT01 | RF01 | Preencha os campos de Luna e envie o formulário. | Luna é salva uma única vez e aparece na listagem. | Pendente |
| CT02 | RF01 | Preencha o formulário deixando o nome em branco e tente salvar. | O campo obrigatório é indicado e nenhum registro é incluído. | Pendente |
| CT03 | RF02 | Consulte a lista após cadastrar Luna e Nino. | A lista mostra os dois registros com seus nomes, espécies e situações. | Pendente |
| CT04 | RF03 | Altere a idade de Luna para 3 anos e salve. | A lista mostra a nova idade e mantém um único registro de Luna. Os dados de Nino permanecem iguais. | Pendente |
| CT05 | RF04 | Exclua Nino, confirmando se a interface solicitar. | Nino sai da lista e Luna permanece. | Pendente |
| CT06 | RF05 | Com Luna e Nino cadastrados, pesquise por Luna e depois por um nome ausente. | A primeira pesquisa mostra apenas Luna. A segunda indica que não há resultados. | Pendente |
| CT07 | RF05 | Com os dois animais cadastrados, aplique o filtro de espécie Gato e depois limpe o filtro. | O filtro mostra apenas Nino. Ao limpar, ambos voltam à lista. | Pendente |
| CT08 | RF06 | Altere a situação de Luna para Em processo de adoção e depois para Adotado. | A interface exibe a situação correspondente após cada alteração. | Pendente |
| CT09 | Persistência | Cadastre Luna e Nino, edite Luna, altere sua situação, exclua Nino e recarregue a página no mesmo navegador. | Luna reaparece com os dados e a situação atualizados. Nino continua ausente. | Pendente |
| CT10 | Responsividade | Em uma janela de 360 px e depois em tela ampla, use o formulário e a listagem. | Campos, botões e conteúdo ficam acessíveis sem rolagem horizontal da página. | Pendente |

Após cada execução, registre **Passou**, **Falhou** ou **Bloqueado**, descreva o resultado observado e inclua o link ou nome da evidência. Em caso de falha, anote os passos para reproduzir, o efeito observado e o commit usado no reteste.
