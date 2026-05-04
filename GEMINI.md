# Salomão Site (Rede Salomão)

Este é um projeto Next.js (App Router) que serve como o site institucional da **Rede Salomão**, abrangendo serviços de Residencial Terapêutico, Residência Inclusiva e Adestramento.

## Visão Geral do Projeto

- **Tecnologias Principais:** Next.js, React 18, Tailwind CSS, Framer Motion, FontAwesome.
- **Arquitetura:** Utiliza o Next.js App Router com uma **arquitetura baseada em configuração**. Os dados (textos, imagens, links) são isolados em objetos de configuração para maximizar o reaproveitamento de componentes.
- **Módulos e Configurações:**
  - `app/config/`: Contém arquivos `.config.js` para cada serviço (`rt`, `ri`, `as`).
  - `app/components/shared/`: Componentes genéricos que consomem os arquivos de configuração (ex: `SharedNavbar`, `SharedFooter`).

## Comandos de Desenvolvimento

- **Ambiente de Desenvolvimento:** `npm run dev`
- **Build de Produção:** `npm run build`
- **Iniciar Servidor de Produção:** `npm run start`
- **Linting:** `npm run lint`

## Convenções de Desenvolvimento

### Estilização (Tailwind CSS)
O projeto utiliza um tema Tailwind altamente personalizado (`tailwind.config.js`). Sempre verifique as cores e backgrounds estendidos. Os componentes compartilhados aplicam esses temas dinamicamente via propriedades de configuração.

### Adicionando ou Alterando Conteúdo
- Para alterar textos, links ou imagens de um serviço, edite o respectivo arquivo em `app/config/`.
- Evite criar novos componentes duplicados. Se uma nova seção for necessária em múltiplos serviços, crie um componente genérico em `app/components/shared/` e adicione os dados correspondentes nos arquivos de configuração.

### Organização de Componentes
- `app/components/shared/`: Componentes reutilizáveis orientados por configuração.
- `app/components/layout/`: Componentes de layout global (Signature, WhatsAppButton).
- `app/components/[módulo]/`: Componentes específicos de um serviço (ex: grids de imagens, componentes de FAQ).

## Estrutura de Diretórios Relevante

- `app/`: Contém as rotas e o layout raiz.
  - `config/`: Objetos de configuração por serviço.
  - `components/shared/`: Componentes reutilizáveis.
  - `components/[rt|ri|as]/`: Componentes específicos remanescentes.
  - `images/`: Imagens do projeto organizadas por módulo.
- `public/`: Assets estáticos, principalmente backgrounds.
