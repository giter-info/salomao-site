# Rede Salomão - Padrão Visual e Diretrizes de Design

Este documento serve como referência de design (Skill) para a manutenção, reestilização e criação de novas páginas no site da Rede Salomão (Residencial Terapêutico, Residência Inclusiva e Adestramento).

---

## 1. Arquitetura de Layout das Páginas

Cada subpágina ou página de detalhe deve seguir uma estrutura de duas seções principais:

### 1.1 Seção Hero (Cabeçalho de Entrada)
- **Altura Mínima:** `min-h-[50vh]` ou `min-h-[60vh]`.
- **Alinhamento:** Centralizado horizontal e verticalmente (`flex items-center justify-center text-center`).
- **Background:** 
  - Usar a imagem de fundo definida no tema (ex: `/bg-rt.png` para RT) otimizada com o componente Next.js `<Image />` (`fill`, `priority` e `object-cover`).
  - Aplicar uma leve sobreposição para garantir contraste (`bg-white/10` ou gradiente de escurecimento).
  - Incluir animação de entrada com Framer Motion (ex: aumento de escala de `1.1` para `1.0` e fade in da imagem de fundo).
- **Conteúdo Interno:**
  - Logo do respectivo módulo (`home.logo` da configuração).
  - Título da página principal (`h2` ou `h1`) em tamanho grande (`text-4xl md:text-6xl font-bold`).
  - Botão de rolagem suave contendo um ícone indicativo (`FaChevronDown`).

### 1.2 Seção de Conteúdo Principal
- **Identificador de Scroll:** Deve conter um `id` para recepção do scroll suave vindo da Hero (ex: `id="doencas-content"`).
- **Cor de Fundo:**
  - Para páginas informativas com fundo claro: utilizar `bg-slate-50` ou `bg-white` para maximizar a legibilidade.
  - Para seções temáticas integradas na página principal (ex: `/residencial-terapeutico`): usar o fundo escuro nativo do tema (`bg-rt-green` ou `bg-ri-primary`) diretamente, dispensando caixas ou containers sólidos de cores claras (`bg-rt-info`) para um layout mais enxuto e refinado.
- **Espaçamento Vertical:** Padrão de padding `py-24` ou `py-16`.

---

## 2. Tipografia e Cores

### 2.1 Famílias de Fonte
- **font-script:** Lucien Schoenschriftv CAT (utilizada para títulos decorativos / destaques de FAQ e chamadas).
- **font-cardo:** Delius (utilizada para títulos de cartões e cabeçalhos secundários).
- **font-nunito / font-mont:** Fontes de texto padrão (Nunito e Montserrat) para descrições e parágrafos de fácil leitura.

### 2.2 Temas de Cores Principais (RT)
- **Primária:** `rt-primary` (`#85F2CA` - Verde Menta Claro)
- **Info:** `rt-info` (`#BDF2D9` - Verde Claro Suave)
- **Fundo Escuro:** `rt-green` (`#1B402B` - Verde Floresta Escuro)
- **Texto Claro:** `rt-white` (`#F2F0EB` - Branco Areia)

---

## 3. Elementos e Componentes UI

### 3.1 Cartões Claros (Light Cards)
- **Estilo Base:** Fundo branco (`bg-white`), bordas arredondadas generosas (`rounded-3xl`), borda muito sutil (`border border-slate-100`) e sombra leve (`shadow-sm`).
- **Hover:** Efeito de elevação sutil no eixo Y (`whileHover={{ y: -6 }}` ou transições de Tailwind `hover:shadow-xl hover:border-rt-primary/50 transition-all duration-300`).
- **Conteúdo:** Títulos em `text-rt-green` com `font-cardo` e textos descritivos em tonalidades de cinza escuro (`text-slate-600` ou `text-slate-700`).

### 3.2 Cartões de Vidro (Glassmorphism Cards)
- **Estilo Base:** Fundo translúcido branco (`bg-white/5`), desfoque de fundo (`backdrop-blur-md`), borda fina semitransparente (`border border-white/10` ou `border-rt-primary/20`), bordas arredondadas generosas (`rounded-3xl`) e sombra ampla (`shadow-2xl`).
- **Títulos:** Cor clara (`text-white` ou `text-rt-info`) com `font-cardo`.
- **Textos:** Cor cinza claro / branco areia (`text-slate-300` ou `text-rt-white/80`).
- **Ícones:** Envolvidos em contêineres circulares ou quadrados arredondados com fundo leve (`bg-rt-primary/10 text-rt-primary` ou `bg-white/10 text-white`).

### 3.3 Botões e CTAs
- **Formato:** Totalmente arredondado (`rounded-full`).
- **Estilo em Fundo Escuro:** Solid fill com cores contrastantes claras (ex: `bg-rt-primary text-rt-green` ou `bg-white text-slate-900`) e hover dinâmico (`hover:bg-rt-info`).
- **Estilo em Fundo Claro:** Solid fill com a cor de tema escura (`bg-rt-green text-white`) e hover (`hover:bg-green-950`).
- **Transição:** `transition-all duration-300 shadow-md hover:shadow-rt-green/20`.

### 3.4 Badges (Tags)
- **Estilo:** Translucidez com cor primária de fundo e bordas (`bg-rt-primary/10 text-rt-primary border border-rt-primary/25 rounded-full shadow-lg backdrop-blur-md`).
- **Hover:** Mudança rápida de cor (`hover:bg-rt-primary hover:text-rt-dark hover:border-rt-primary transition-all duration-300`).

---

## 4. Diretrizes de Ícones
- **Biblioteca Única:** Utilizar exclusivamente **React Icons (FontAwesome / `react-icons/fa`)**.
- **Proibido:** Utilizar SVGs ou imagens externas para ícones funcionais quando disponíveis na biblioteca.
