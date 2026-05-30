# UI Kit — Landing (Daniele Summit)

Recriação em React/JSX dos componentes da landing page do evento.

## Arquivos
- `index.html` — demonstração interativa de todos os componentes (hero, cards de
  público, agenda, palestrantes, formulário com estado de sucesso).
- `Components.jsx` — componentes reutilizáveis, exportados para `window`.

## Componentes disponíveis
| Componente | Uso |
|---|---|
| `Eyebrow` | Label de seção em MAIÚSCULAS, azul |
| `GradientText` | Palavra-chave com fill em gradiente de marca |
| `NeonDivider` | Separador 1px com gradiente neon |
| `Button` | `variant="primary"` (gradiente+glow) ou `"secondary"` |
| `Card` | Card glass com ícone, título e descrição (hover lift) |
| `Badge` | Tag de agenda — `tone="blue"` ou `"purple"` |
| `Chip` | Chip de informação (local, infra) |
| `SpeakerCard` | Card de palestrante com avatar de iniciais |
| `ScheduleItem` | Linha de programação (horário + tag + título) |
| `Field` | Campo de formulário com estado de foco |

## Como rodar
Abra `index.html`. Carrega React 18 + Babel via CDN e `Components.jsx`.
O objeto de tokens `T` também é exportado para `window` para uso rápido.

## Observações
- Os componentes priorizam fidelidade visual, não lógica de produção.
- Tokens espelham `../../colors_and_type.css`. Mantenha-os em sincronia.
