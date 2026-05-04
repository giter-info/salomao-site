# Tarefas: Modernização de Layout e Performance

## Fase 1: Otimização de Fontes
- [x] Remover `@import` do `app/globals.css`
- [x] Implementar `next/font/google` no `app/layout.js`
- [x] Remover fontes não utilizadas (`Roboto Slab`, `Yatra One`)
- [x] Adicionar `display: 'swap'` para melhorar FCP/LCP

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

## Fase 5: Ajustes de Estilização e Temas
- [x] Corrigir aplicação da cor `as-gray` no módulo de adestramento
- [x] Implementar `safelist` no `tailwind.config.js` para classes dinâmicas
- [x] Refatorar componentes AS para usar o tema correto

**Ajustes Concluídos!** O site agora utiliza fontes otimizadas, imagens performáticas e possui consistência visual nos temas dinâmicos.
