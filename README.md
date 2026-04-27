# Landing Page Tattoo Management

Landing page tatuadores, criada a partir de referências mobile e desktop. O projeto usa Vite, React, Tailwind CSS e Tailwind Variants para construir uma interface responsiva com menu lateral, seções navegáveis, tema claro/escuro e portfólio interativo.

## Tecnologias

- Vite
- React
- TypeScript
- Tailwind CSS
- Tailwind Variants
- Lucide React

## Funcionalidades

- Layout responsivo para mobile e desktop.
- Sidebar fixa no desktop, com opção de recolher e expandir.
- Drawer lateral no mobile.
- Conteúdo com scroll independente da sidebar.
- Navegação por âncoras para as seções:
  - Portifólio
  - Artes Autorais
  - Orçamento
  - Cuidados Tattoo
  - Reporting
- Alternância entre tema claro e escuro.
- Carrossel funcional no portfólio usando `tattoo-1.png` e `tattoo-2.png`.
- Cards de informações, cuidados, orçamento e indicadores.

## Como Rodar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173/
```

## Build

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Estrutura Principal

```text
src/
  assets/
    artist.png
    logo.png
    map.png
    tattoo-1.png
    tattoo-2.png
  App.tsx
  main.tsx
  styles.css
```

## Observações

Os assets em `src/assets` foram usados para compor a identidade visual da landing page e alimentar o carrossel do portfólio.
