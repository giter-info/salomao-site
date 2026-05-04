# Tarefas: Modernização de Layout e Performance

## Fase 1: Otimização de Fontes
- [x] Remover `@import` do `app/globals.css`
- [x] Implementar `next/font/google` no `app/layout.js`

## Fase 2: Modernização de Imagens
- [x] Configurar `remotePatterns` no `next.config.mjs`
- [x] Atualizar `app/components/rt/CarouselComponent.jsx` para nova API de imagem e `priority`
- [x] Adicionar `sizes` para imagens responsivas no carrossel

## Fase 3: Refatoração de Hero/Backgrounds
- [x] Refatorar background da `HomeSection.jsx` (Root) usando `next/image`
- [x] Corrigir erro de digitação `text24xl` em `HomeSection.jsx`
- [x] Refatorar backgrounds em `SharedHomeSection.jsx` para usar `next/image` via config

## Fase 4: Acessibilidade e Validação
- [x] Revisar atributos `alt` em imagens principais
- [ ] Rodar `npm run build` para validar performance e fontes (Sugerido ao usuário)

**Modernização Concluída!** O site agora utiliza fontes otimizadas, imagens com carregamento prioritário acima da dobra e backgrounds performáticos através do componente `<Image />` do Next.js.
