# Lies of P Wiki

![Status](https://img.shields.io/badge/status-live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

Uma wiki interativa e responsiva sobre **Lies of P**, criada para reunir informacoes de gameplay, personagens, equipamentos, chefes e conteudo da expansao **Overture** em uma experiencia visual inspirada na Krat sombria, elegante e steampunk do jogo.

**Site:** [lies-of-p-wiki.vercel.app](https://lies-of-p-wiki.vercel.app)  
**Documentacao tecnica:** [DeepWiki](https://deepwiki.com/Vitallzin/lies-of-P-wiki)

---

## Sobre o Projeto

O **Lies of P Wiki** foi desenvolvido como um projeto de portfolio tecnico e fan-made, combinando organizacao de dados, navegacao SPA, filtros de conteudo e uma interface tematica para apresentar informacoes do jogo de forma clara e imersiva.

A aplicacao utiliza um tema base em tons escuros e dourados para o jogo principal, enquanto todo conteudo relacionado a DLC recebe destaque em azul, criando uma separacao visual consistente entre a jornada principal e a expansao **Overture**.

## Funcionalidades

- **Home imersiva:** apresentacao do jogo, recursos principais, informacoes do desenvolvimento e links de compra.
- **Equipamentos:** hub para armas, amuletos e bracos legionarios.
- **Armas:** categorias, detalhes, imagens, escalas, atributos e conteudo DLC destacado.
- **Amuletos:** listagem, filtros e paginas de detalhes para itens do jogo base e da DLC.
- **Bracos legionarios:** informacoes de uso, upgrades e equipamentos especiais.
- **Classes:** apresentacao das classes iniciais com estatisticas e detalhes individuais.
- **Chefes:** catalogo com dados de combate, fraquezas, resistencias, drops, categorias e paginas detalhadas.
- **NPCs:** perfis de personagens, localizacoes, quests, falas, curiosidades e inventarios de mercantes.
- **DLC Overture:** secao dedicada com identidade visual propria e conteudo marcado em azul.
- **Busca e filtros:** experiencia de navegacao pensada para encontrar rapidamente personagens, equipamentos e ameacas.
- **Design responsivo:** layout adaptado para desktop e dispositivos moveis.

## Stack

- **React 19** para construcao da interface.
- **TypeScript** para tipagem dos dados e componentes.
- **Vite 7** como ferramenta de desenvolvimento e build.
- **React Router DOM 7** para rotas e paginas de detalhes.
- **CSS modular por componente/pagina** para controle visual fino e identidade customizada.
- **ESLint** para padronizacao e qualidade de codigo.
- **Vercel** para hospedagem e deploy.

## Estrutura do Projeto

```text
src/
  assets/       Imagens, videos e recursos visuais do site
  components/   Componentes reutilizaveis da interface
  data/         Bases de dados tipadas usadas pelas paginas
  hooks/        Hooks compartilhados de comportamento e estado
  pages/        Paginas principais e telas de detalhes
  styles/       Estilos globais, variaveis e animacoes
```

## Como Executar Localmente

### Pre-requisitos

- Node.js instalado
- npm instalado

### Instalacao

```bash
git clone https://github.com/Vitallzin/lies-of-P-wiki.git
cd lies-of-P-wiki
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O projeto ficara disponivel em `http://localhost:5173`.

### Build de Producao

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

### Analise de Codigo

```bash
npm run lint
```

## Scripts Disponiveis

| Script | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com Vite. |
| `npm run build` | Compila TypeScript e gera o build de producao. |
| `npm run preview` | Executa uma previa local do build gerado. |
| `npm run lint` | Executa a analise de codigo com ESLint. |

## Design e Experiencia

O projeto prioriza uma interface escura, ornamentada e legivel, com composicao inspirada no clima de Belle Epoque decadente de **Lies of P**. A separacao visual por tema ajuda o usuario a identificar rapidamente quando esta navegando por conteudo da DLC, mantendo a regra do site: conteudo relacionado a expansao recebe destaque azul.

## Autor

Desenvolvido por **VITALLZIN**.

[![GitHub](https://img.shields.io/badge/GitHub-Vitallzin-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Vitallzin)

## Aviso Legal

Este e um projeto fan-made, sem fins comerciais, criado para fins educacionais, informativos e de portfolio. **Lies of P**, suas imagens, nomes, personagens e demais propriedades pertencem a **NEOWIZ** e **Round8 Studio**.

---

> "A aparencia engana mais do que a propria mentira."
