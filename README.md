# ConnectFlight - Página Inicial em React

Projeto desenvolvido para a Atividade Avaliativa de Programação para Web II, com o objetivo de reproduzir um protótipo disponibilizado no Figma utilizando React.

## Sobre o projeto

A ConnectFlight é uma página de viagens que apresenta informações sobre destinos, ofertas e formas de contato, com uma interface organizada, responsiva e inspirada no protótipo proposto pelo professor.

## Tecnologias utilizadas

- React
- JavaScript
- HTML e JSX
- CSS
- Vite
- React Router DOM
- ESLint

## Funcionalidades

### Página inicial
- Ilustração temática de viagens.
- Apresentação da proposta da ConnectFlight.
- Destaques em cores e textos.

### Destinos
- Rio de Janeiro.
- Gramado.
- Paris.
- Fotografias ilustrativas de cada destino.

### Ofertas
- Viagens nacionais.
- Viagens internacionais.
- Pacotes completos.
- Ilustrações vetoriais personalizadas.

### Contato
- Informações de contato por e-mail.
- Apresentação do atendimento.
- Informações para planejamento de viagens.
- Ilustrações relacionadas a cada tópico.

## Navegação

A aplicação utiliza React Router DOM para permitir a navegação entre as quatro páginas:

- `/` — Página inicial.
- `/destinos` — Destinos.
- `/ofertas` — Ofertas.
- `/contato` — Contato.

O rodapé possui destaque visual para identificar a página atualmente selecionada.

## Organização do projeto

```text
src/
├── assets/
├── components/
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── InfoPage.jsx
│   ├── InfoPage.css
│   └── OfferIllustration.jsx
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Destinos.jsx
│   ├── Ofertas.jsx
│   └── Contato.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Como executar o projeto

Clone o repositório:
```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:
```bash
cd NOME_DO_PROJETO
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Para verificar possíveis problemas no código:
```bash
npm run lint
```

Para gerar a versão de produção:
```bash
npm run build
```

### Protótipo de referência

Projeto desenvolvido com base no protótipo disponibilizado pelo professor no Figma:

https://www.figma.com/file/U9czFYiF7DVGINZWMeMUGx/Aula-01---React