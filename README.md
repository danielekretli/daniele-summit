# Daniele Summit — Design System

Sistema de design extraído da landing page do **Daniele Summit**, um evento presencial
sobre **Inteligência Artificial & Inovação** para profissionais e empreendedores.
Estética futurista/tech inspirada no SXSW: fundo escuro profundo, neon azul→roxo,
tipografia moderna e movimento sutil (partículas, glow, reveals por scroll).

> **Fonte:** `Daniele Summit.html` (na raiz do projeto). Toda a documentação abaixo
> foi derivada desse arquivo. Use este pacote como skill no Claude Code para gerar
> novas páginas, e-mails, peças e telas com a mesma identidade.

---

## Índice de arquivos

| Arquivo | Conteúdo |
|---|---|
| `README.md` | Este documento — fundamentos de conteúdo, visual e iconografia |
| `colors_and_type.css` | Tokens (CSS vars) de cor, tipografia, espaçamento, raio, sombra |
| `preview/` | Cards visuais do Design System (cores, tipo, componentes) |
| `ui_kits/landing/` | Recriação em React/JSX dos componentes da landing (hero, cards, agenda, form…) |
| `SKILL.md` | Manifesto para uso como Agent Skill no Claude Code |
| `assets/` | Imagens de marca (ilustração isométrica, banner editorial) |

---

## Contexto do produto

- **Marca:** Daniele Summit (organização: **DKs Tech** / Daniele Kretli)
- **Produto:** landing page estática de evento (sem backend). Jornada: chegada via
  redes/e-mail → entender o evento → conferir programação/palestrantes/local →
  preencher formulário → confirmação manual.
- **Público:** empreendedores, gestores, founders e profissionais que querem
  **aplicar IA** nos negócios. Buscam clareza, praticidade e inspiração.
- **Idioma:** Português (Brasil).

---

## CONTENT FUNDAMENTALS — como escrevemos

**Tom:** direto, provocativo e confiante, sem ser corporativo. Fala com o leitor em
**segunda pessoa ("você")**. Vende perspectiva e repertório, não hype.

**Vibe:** "tech com pé no chão". A IA é poderosa, mas o diferencial é humano —
estratégia e repertório acima de ferramenta. Frase-manifesto do evento:

> "IA não resolve sua falta de repertório."

**Padrões de copy:**
- **Headlines curtas e contrastantes**, frequentemente em 2–3 linhas com quebra
  manual e uma palavra-chave em destaque (gradiente). Ex.: *"O futuro é **inteligente**. O presente, também."*
- **Subtítulos** de 1–2 frases, explicativos e calorosos.
- **Antíteses / comparações** como recurso recorrente: `Estratégia > Ferramenta`,
  `Repertório > Hype`, `Aplicação > Teoria`.
- **CTAs com verbo + benefício**: "Garantir minha vaga", "Inscreva-se grátis",
  "Ver programação". Setas `→` ao final de botões primários.
- **Casing:** Sentence case em quase tudo. Eyebrows/labels em MAIÚSCULAS com
  `letter-spacing` (ex.: "PARA QUEM É", "PROGRAMAÇÃO").
- **Números** escritos de forma enxuta: `4h`, `40'`, `5`, `0` (sem "data slop").
- **Emoji:** usado com parcimônia, só em ícones de cards/meta (💼 👩‍💻 🚀 🎯 📅 📍 🎟️).
  Nunca no corpo de texto. Pode ser trocado por ícones SVG sem perda.

**Exemplos reais do site:**
- Eyebrow: `Para quem é` → Título: `Este evento foi feito para você?`
- Seção editorial: `Enquanto os gigantes disputam o futuro, você constrói o seu.`
- Nota de formulário: `Seus dados estão seguros. A confirmação será enviada por e-mail.`

---

## VISUAL FOUNDATIONS

### Cor
- **Fundo base:** `#050818` (azul-noite quase preto). Variante de seção `#080c1f`.
  Rodapé mais profundo `#020510`.
- **Acentos neon:** azul `oklch(0.72 0.22 220)` e roxo `oklch(0.72 0.22 290)`,
  quase sempre aplicados como **gradiente 135°/90° azul→roxo** (e ocasionalmente
  estendido até magenta `#ff6af0` em headlines).
- **Texto:** primário `#f0f4ff` (quase branco azulado), secundário/muted `#7a85a8`.
- **Bordas:** `rgba(120,140,255,0.15)` — sempre frias e translúcidas.
- **Vibe das imagens:** dramáticas, cinematográficas, contraste alto, paleta
  azul/vermelho-quente. Ilustrações isométricas tech em azul.

### Tipografia
- **Display/headings:** **Space Grotesk** (700/600). Compacta, geométrica, técnica.
  `letter-spacing: -0.03em a -0.04em`, `line-height` 1.0–1.1.
- **Corpo/UI:** **Inter** (300–600). `line-height` 1.6–1.7.
- **Hero:** `clamp(2.8rem, 8vw, 7rem)`. Títulos de seção `clamp(2rem, 5vw, 3.2rem)`.
- **Eyebrow/label:** 0.75rem, 600, `letter-spacing: 0.15em`, UPPERCASE, cor azul.
- Palavra-chave em headline recebe gradiente via `background-clip: text`.

### Espaçamento & layout
- Seções: `padding: 100px 6vw`; container `max-width: 1200px` centralizado.
- Grids fluidos com `repeat(auto-fit, minmax(...))` e `gap` (1.5rem típico).
- Margens laterais respiram (`6vw`). Mobile colapsa para 1 coluna em ≤768px.
- **Separadores neon:** linha 1px com gradiente horizontal transparente→azul→roxo→transparente, `opacity: 0.4`.

### Cards
- Fundo translúcido `rgba(10,14,40,0.7)` + `backdrop-filter: blur(12px)`.
- Borda fria `rgba(120,140,255,0.15)`, **raio 16–24px**.
- **Hover:** borda mais brilhante (`rgba(100,140,255,0.35–0.4)`) + `translateY(-4 a -5px)`.

### Botões
- **Primário:** gradiente 135° azul→roxo, texto branco, **raio 50px (pílula)**,
  `box-shadow: 0 0 40px rgba(100,100,255,0.3)` (glow). Hover: `translateY(-2px)` +
  glow mais forte. Sempre com `→`.
- **Secundário:** transparente, borda fria, texto muted. Hover: borda azul + texto branco.

### Raio de canto
- Pílulas (botões, chips, badges, toggles): `50px`.
- Cards: `16px` (pequenos) / `20–24px` (grandes). Inputs: `10px`.

### Sombra & elevação
- Não há sombras "drop" tradicionais escuras; a elevação vem de **glow neon**
  (`box-shadow` colorido com blur alto) e de bordas mais claras.
- Sombras de texto sutis em cima de imagens (`text-shadow: 0 2–4px 20–40px rgba(0,0,0,.6)`).

### Movimento & animação
- **Partículas** em `<canvas>` no fundo (pontos azul/roxo subindo + linhas de conexão).
- **Reveal por scroll:** `.reveal` entra com `opacity 0→1` + `translateY(30px→0)`,
  `transition: 0.7s ease`, disparado por IntersectionObserver.
- **Entrada do hero:** `fadeUp` escalonado (delays 0.1–0.4s).
- **Pulse** em "dot" de badge; **bounce** no indicador de scroll.
- Transições de hover sempre suaves (0.2–0.3s ease). Sem bounces exagerados.

### Transparência & blur
- Nav e cards usam `backdrop-filter: blur(12–18px)` sobre fundos translúcidos.
- Imagens editoriais full-bleed recebem **overlay** com gradiente escuro
  (`linear-gradient` vertical + `radial-gradient` central) para legibilidade do texto.

---

## ICONOGRAPHY

- **Abordagem atual:** ícones de interface são **SVG inline com `stroke` 2px**
  no estilo **Feather/Lucide** (ex.: Instagram, envelope no rodapé). Use
  [Lucide](https://lucide.dev) via CDN para qualquer ícone novo — mesmo traço,
  cantos arredondados, sem preenchimento.
- **Emoji** aparece como ícone ilustrativo dentro de cards de público e do hero-meta
  (💼 👩‍💻 🚀 🎯 📅 📍 🎟️). É aceitável, mas **prefira substituir por Lucide**
  em contextos mais sóbrios. Nunca usar emoji no corpo do texto.
- **Caracteres unicode como ornamento:** seta `→` em botões, `↓` no scroll,
  `·` como separador, `>` em comparações (`Estratégia > Ferramenta`).
- **Sem icon-font proprietária.** Logo é **tipográfico** (wordmark "Daniele Summit"
  em Space Grotesk com fill em gradiente azul→roxo).

### Assets de marca (`assets/`)
- `iso-ai.png` — ilustração isométrica de IA/dados (azul), uso decorativo sutil.
- `versus.png` — banner editorial cinematográfico (face-off vermelho×azul), uso
  full-bleed com overlay escuro em seções de impacto.

---

## Como usar no Claude Code

1. Coloque esta pasta como uma skill (veja `SKILL.md`).
2. Importe os tokens: `@import "colors_and_type.css";` ou copie as CSS vars.
3. Reaproveite os componentes de `ui_kits/landing/` como referência de marcação/estilo.
4. Mantenha as regras: fundo escuro, gradiente azul→roxo nos acentos, Space Grotesk
   nos títulos, Inter no corpo, pílulas com glow, reveals suaves.

> **Lembrete:** no menu *Share*, defina o tipo do arquivo como **Design System**
> para que outras pessoas da sua org consigam visualizar este sistema.
