# Pet World

O **Pet World** é uma página web desenvolvida como parte da avaliação prática de Desenvolvimento de Sistemas. O projeto apresenta uma loja fictícia voltada ao universo dos animais de estimação, com informações sobre a empresa e uma calculadora de alimentação para cães e gatos.

## Objetivo

Desenvolver uma página temática utilizando HTML, CSS e JavaScript, aplicando conceitos de estruturação, estilização, responsividade, manipulação de formulários, validação de dados e tratamento de erros.

## Funcionalidades

- **Página inicial:** apresentação da Pet World.
- **Sobre nós:** apresentação da proposta da empresa e disponibilização de contato.
- **Calculadora Pet:** estima a quantidade diária de ração para cães e gatos.
- **Validação de dados:** verifica se os campos foram preenchidos corretamente e se os valores numéricos são válidos.
- **Tratamento de erros:** apresenta mensagens informativas quando os dados não atendem aos critérios estabelecidos.
- **Resultado dinâmico:** exibe a estimativa diária de ração, consumo mensal e peso informado.
- **Design responsivo:** adapta a apresentação dos elementos para diferentes tamanhos de tela.

## Funcionamento da calculadora

A calculadora recebe cinco informações:

| Campo | Descrição |
|---|---|
| Espécie | Cachorro ou gato |
| Nome | Nome do animal |
| Peso | Peso em quilogramas |
| Idade | Idade em meses |
| Castração | Indica se o animal é castrado |

O cálculo é realizado em duas etapas:

1. **Necessidade energética:** utiliza o peso metabólico do animal, calculado por meio da fórmula \(70 \times peso^{0,75}\), multiplicado por um fator definido conforme a espécie, idade e condição de castração.
2. **Quantidade de ração:** converte a necessidade energética em gramas, considerando uma referência de 3.800 kcal por quilograma de ração.

Ao final, o resultado é arredondado e apresentado na página.

**Observação:** os valores apresentados são estimativas para fins demonstrativos e não substituem uma avaliação nutricional veterinária.

## Tecnologias utilizadas

- **HTML5:** estruturação e organização do conteúdo.
- **CSS3:** estilização, Flexbox e adaptação para diferentes telas.
- **JavaScript:** cálculos, validação de formulários e manipulação dinâmica do conteúdo.
- **Font Awesome:** biblioteca de ícones.
- **Google Fonts:** fontes utilizadas na identidade visual.

## Estrutura do projeto

```text
avaliacao-pratica/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── img/
    ├── imagem-banner.png
    └── carinho.png
```

## Validação e testes

Foram estabelecidas regras para impedir o processamento de informações inválidas.

| Campo | Regra de validação |
|---|---|
| Espécie | Deve ser selecionada |
| Nome | Não pode estar vazio |
| Peso | Deve estar entre 0 e 200 kg |
| Idade | Deve estar entre 0 e 5.000 meses |

Quando uma informação inválida é identificada, o processamento é interrompido e uma mensagem correspondente é apresentada ao usuário.

Os testes devem contemplar:
- Envio com campos obrigatórios vazios.
- Envio com peso negativo.
- Envio com peso acima do limite.
- Envio com idade negativa.
- Envio com idade acima do limite.
- Envio com todos os dados válidos.

## Organização e desenvolvimento

O projeto foi organizado em arquivos separados para facilitar a manutenção e a compreensão do código:

- `index.html`: estrutura e conteúdo da página.
- `style.css`: identidade visual e responsividade.
- `script.js`: lógica de funcionamento da calculadora e validação dos dados.

O desenvolvimento foi realizado utilizando versionamento com Git e hospedagem do código-fonte no GitHub.


## Como executar

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo `index.html` em um navegador.
4. Acesse a seção Calculadora Pet para testar o formulário.

Não é necessária a instalação de dependências ou configuração de servidor.

---

**Projeto desenvolvido individualmente como atividade avaliativa do curso Técnico em Desenvolvimento de Sistemas.**