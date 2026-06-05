# LimbusArchives

## 📚 Descrição

LimbusArchives é uma aplicação web em React criada com Vite que apresenta um catálogo estilizado de personagens inspirados em **Limbus Company**. O projeto permite navegar por um catálogo de Pecadores, visualizar detalhes individuais e explorar a lore da corporação distópica.

## 🚀 Tecnologias

- React
- Vite
- React Router DOM
- Styled Components
- Axios
- ESLint

## 📁 Estrutura do projeto

- `public/data/api-limbus.json` - API local em formato JSON usada para carregar os personagens.
- `public/images/` - Pastas de imagens de cada personagem.
- `src/App.jsx` - Componente principal que configura o roteamento.
- `src/main.jsx` - Ponto de entrada da aplicação.
- `src/routes/index.jsx` - Rotas principais do projeto.
- `src/pages/Home/` - Página inicial com apresentação e CTA para o catálogo.
- `src/pages/Catalogo/` - Página que lista os personagens.
- `src/pages/Detalhes/` - Página de detalhes de cada personagem.
- `src/components/` - Componentes reutilizáveis como `Card`, `Header`, `Layout` e `Footer`.
- `src/config/constants.jsx` - Constantes de configuração, incluindo URL da API e caminho base de imagens.

## ✨ Funcionalidades

- Listagem de personagens com cards visuais.
- Navegação por rotas entre `Início`, `Catálogo` e páginas de detalhes.
- Carregamento de dados do JSON local usando `axios`.
- Visão detalhada com banner, ícone, símbolo, facção, raridade e descrição.
- Indicação de erro 404 para rotas não encontradas.

## ⚙️ Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse o projeto no navegador:

```bash
http://localhost:5173
```

## 💡 Observações

- Os dados são servidos localmente pelo arquivo JSON em `public/data/api-limbus.json`.
- As imagens dos personagens são carregadas dinamicamente a partir de `public/images/<nome_da_pasta>/{Banner,Icon,Symbol}.webp`.
- O aplicativo usa `BrowserRouter` para navegação de páginas.
