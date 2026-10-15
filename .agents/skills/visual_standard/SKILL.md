---
name: visual-standard
description: Reference for maintenance, styling, and creation of pages under the Rede Salomão design standard (novo branding out/2026).
---

# Rede Salomão — Padrão Visual e Diretrizes de Design

Referência de design (Skill) para manutenção, reestilização e criação de páginas no site da Rede Salomão. As três frentes atuais são **Residencial Terapêutico (RT)**, **Residência Inclusiva (RI)** e **Marketing Salomão (B2B)**. A frente de Adestramento foi descontinuada.

> Fonte da verdade vigente: `tailwind.config.js` (tokens), `app/globals.css` (CSS vars + tema escuro) e `app/config/seo.config.js` / `app/config/whatsapp.config.js`.

---

## 1. Design Tokens

### 1.1 Paleta oficial (tokens `brand.*`)
Definidos em `tailwind.config.js` → `theme.extend.colors.brand` e espelhados como CSS vars em `globals.css`.

| Token | Hex | Uso |
|---|---|---|
| `brand-green` | `#0F3221` | Verde Salomão — fundo institucional primário |
| `brand-green-dark` | `#0A2418` | Verde profundo — fundos escuros, cards sobre verde |
| `brand-green-light` | `#1B402B` | Verde Floresta — variações/hover |
| `brand-gold` | `#C2A14E` | Dourado Metálico — ação, CTA, destaques |
| `brand-gold-light` | `#E6C880` | Dourado claro — hover, texto sobre verde |
| `brand-gold-dark` | `#9C7E3C` | Dourado escuro — bordas/detalhes |
| `brand-offwhite` | `#F8F8F5` | Off-White — fundo claro / texto sobre verde |
| `brand-ink` | `#0D0D0D` | Tinta — texto sobre superfícies claras |

**Regra de contraste:** texto claro (`brand-offwhite`) sobre verde; texto escuro (`brand-ink`) sobre off-white; dourado para acento. Nunca usar `brand-offwhite` como superfície e texto simultaneamente.

### 1.2 Tokens legados (RT/RI) — retokenizados
As páginas RT/RI usam tokens próprios que foram **remapeados para a paleta nova** (apenas os valores hex mudaram; os nomes de classe foram preservados para não quebrar condicionais em componentes compartilhados — ver §5).

- `rt-primary` → `#C2A14E` (dourado) · `rt-info` → `#E6C880` · `rt-green` → `#0F3221` · `rt-white` → `#F8F8F5`
- `ri-blue` → `#C2A14E` · `ri-primary` → `#0F3221` · `ri-green` → `#0A2418` · `ri-greenest` → `#1B402B` · `ri-bluest` → `#E6C880` · `ri-soft-green` → `#BDF2D9`

### 1.3 Tipografia
- **`font-serif`** — Playfair Display (`--font-serif`, via `next/font`): títulos institucionais, hero, headings de seção.
- **`font-sans`** — Montserrat/Nunito: corpo padrão, navegação, botões.
- **`font-script`** — Lucien Schoenschriftv CAT: destaques decorativos pontuais.
- **`font-cardo`** — Delius: títulos secundários em páginas legadas.
- **`font-nunito` / `font-mont`**: descrições e parágrafos das páginas config-driven.

### 1.4 Tema claro/escuro
- Estratégia `darkMode: "class"`. Toggle em `app/components/layout/ThemeToggle.jsx` (persistência em `localStorage`, respeito a `prefers-color-scheme`, no-flash via `next/script` `beforeInteractive` no `layout.js`).
- Overrides em `globals.css` sob o escopo `.dark`: `bg-brand-offwhite` → verde escuro, `text-brand-green` → dourado claro, `text-brand-ink` → off-white, bordas `slate-*` → dourado translúcido.
- Cards/inputs claros dos componentes da **nova marca** recebem variantes `dark:` (ex.: `dark:bg-brand-green-dark dark:border-brand-gold/20`). Páginas legadas RT/RI mantêm aparência própria no escuro.

---

## 2. Arquitetura de Layout

### 2.1 Hero
- **Altura mínima:** `min-h-screen` (portal) ou `min-h-[50vh]`/`min-h-[60vh]` em subpáginas.
- **Alinhamento:** centralizado (`flex items-center justify-center text-center`).
- **Background:** imagem via `<Image />` (`fill`, `priority`, `object-cover`) + gradiente/overlay para contraste. No portal: `bg-brand-green` com overlay `from-brand-green-dark/95`.
- **Conteúdo:** título em `font-serif text-5xl sm:text-7xl text-white`, slogan em `text-brand-gold uppercase tracking-[0.2em]`, CTA primário dourado + CTA secundário outline (`border-brand-gold/60`).

### 2.2 Seções de conteúdo
- **ID de scroll** para navegação âncora (ex.: `id="frentes"`, `scroll-mt-20`).
- **Fundos alternados:** verde (`bg-brand-green`) ↔ off-white (`bg-brand-offwhite`), criando ritmo. Evitar caixas claras sobre verde.
- **Espaçamento:** `py-24` (padrão), `py-16` (seções compactas).
- **Eyebrow:** `text-brand-gold font-bold uppercase tracking-[0.2em] text-sm` acima do heading.
- **Heading de seção:** `font-serif text-4xl md:text-5xl text-brand-green` (fundo claro) ou `text-white` (fundo verde).

---

## 3. Componentes

### 3.1 Navbar global (`app/components/root/Navbar.jsx`)
- Fundo `bg-brand-green`, logo light à esquerda, 3 frentes + links institucionais (`<a>` focáveis), `ThemeToggle`, CTA WhatsApp dourado (`bg-brand-gold text-brand-green`).
- Menu mobile full-screen com `aria-label`, `focus:ring-2 focus:ring-brand-gold/60`.

### 3.2 Footer global (`app/components/root/Footer.jsx`)
- 4 colunas: Marca + redes, Unidades, Links Úteis, Serviços. Separador `border-brand-gold/25`.
- Links com `role="link"`, `tabIndex`, ativação por Enter.

### 3.3 Cartões claros (Light Cards)
- Base: `bg-white dark:bg-brand-green-dark rounded-3xl border border-slate-100 dark:border-brand-gold/20 shadow-sm`.
- Hover: `hover:shadow-xl` (+ `hover:-translate-y-1.5` ou `whileHover={{ y: -8 }}`).
- Ícone: `bg-brand-gold/15 text-brand-gold` (ou `bg-brand-green/10 text-brand-green dark:bg-brand-gold/15 dark:text-brand-gold-light`).

### 3.4 Cartões de vidro (Glass) — sobre fundo verde
- Base: `bg-brand-green-dark/85 backdrop-blur-md border border-brand-gold/25 rounded-3xl`.
- Títulos `text-white`, textos `text-brand-offwhite/75`.

### 3.5 Botões e CTAs
- Formato `rounded-full`, `transition-all duration-300`.
- **Primário (fundo claro):** `bg-brand-gold text-brand-green hover:bg-brand-gold-light`.
- **Outline (fundo verde):** `border-2 border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10`.
- Estado desabilitado: `disabled:opacity-60 disabled:cursor-not-allowed`.

### 3.6 Badges
- `bg-brand-gold/10 text-brand-gold border border-brand-gold/25 rounded-full`.

### 3.7 Formulários (ex.: captura de leads)
- Inputs: `rounded-xl border border-slate-200 dark:border-brand-gold/20 bg-white dark:bg-brand-green-dark text-brand-ink dark:text-brand-offwhite focus:ring-2 focus:ring-brand-gold`.
- Feedback acessível: erros com `role="alert"`, sucesso com `role="status"`.

---

## 4. WhatsApp e captura de leads

- **Fonte única:** `app/config/whatsapp.config.js` — `WHATSAPP_NUMBER` (`5547988080041`), `WHATSAPP_MESSAGE`, `buildWhatsappUrl(...)`, `buildLeadMessage(...)`. Nunca hardcodar o número.
- **Endpoint:** `POST /api/lead` (`app/api/lead/route.js`) valida o lead (`422`/`400`) e retorna `{ ok, whatsappUrl }`; encaminha opcionalmente para a WhatsApp Cloud API quando `WHATSAPP_CLOUD_TOKEN`/`WHATSAPP_PHONE_NUMBER_ID`/`WHATSAPP_LEAD_TO` existirem.

---

## 5. Acessibilidade

- Controles interativos com `focus:outline-none focus:ring-2 focus:ring-brand-gold/60`.
- Botões só-ícone com `aria-label`; toggles com `aria-pressed`.
- Links-animados (`<a>` + `onClick`) são preferíveis a `<div>` para navegação.
- Contraste alvo: WCAG AA. Verificar combinações dourado/branco (evitar branco sobre dourado) e verde/off-white.

---

## 6. Diretrizes de Ícones
- Biblioteca única: **react-icons** (`react-icons/fa`). Proibido SVG/imagem externa para ícone funcional quando houver equivalente na biblioteca.

---

## 7. SEO e metadados
- `metadata` por rota (`title`, `description`, `keywords`).
- `app/sitemap.js` (rotas estáticas + unidades) e `app/robots.js`.
- JSON-LD: `Organization` global no `layout.js`; `LocalBusiness` por unidade nas páginas de unidades (`app/config/seo.config.js` + `app/components/layout/JsonLd.jsx`).
