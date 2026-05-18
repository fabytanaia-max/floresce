# CONTINUAR — Floresce 🌸

> Handoff de contexto pra próximas sessões. Estado atual + decisões + próximos passos estratégicos.

## ✅ Estado atual

- **Live:** https://fabytanaia-max.github.io/floresce/
- **Repo:** https://github.com/fabytanaia-max/floresce (público)
- **Branch:** `main` · GitHub Pages ativado
- **Versão:** 2.0
- **Última build:** funcionando em 2026-05-18

### Acessos pessoais ativos

| Pessoa | Código | URL |
|---|---|---|
| Eva (namorada) | `EVA-2026` | https://fabytanaia-max.github.io/floresce/?activate=EVA-2026 |
| Fabrício | `FAB-MASTER-2026` | https://fabytanaia-max.github.io/floresce/?activate=FAB-MASTER-2026 |
| Demo público | `FLORESCE-DEMO` | https://fabytanaia-max.github.io/floresce/?activate=FLORESCE-DEMO |

> **Como funciona:** ao acessar com `?activate=CODIGO`, o app valida contra a lista em `data/licenses.js` e ativa premium permanente nesse dispositivo (localStorage).

## 🎯 Decisões estratégicas

### Posicionamento
- **Nome:** Floresce (escolhido sobre "Trimestre", "Aguardo", "Gestar")
- **Tagline:** "Cada semana, uma descoberta."
- **Público:** mães de primeira viagem (mesmo público do ebook)
- **Diferencial vs concorrentes (BabyCenter, What to Expect):**
  1. Visual luxuoso, não infantil
  2. Mensagens do parceiro (único)
  3. Local-first, sem rastreamento
  4. Português PT-BR de verdade

### Modelo de monetização
- **Freemium:** core gratuito (timer, fruta, marcos, reflexão)
- **Premium gates:** mensagens do parceiro + diário ilimitado
- **Preço sugerido:** incluir no preço do ebook R$37 (cliente paga ebook, recebe código premium do app)
- **Alternativa:** vender app standalone R$27 ou R$47 separadamente

### Frameworks billion-dollar aplicados
- **Hormozi (value stack):** premium oferece stack claro (4 features extras + ebook incluso)
- **Godin (purple cow):** mensagens do parceiro é único no mercado de PT-BR
- **Belfort (3 certezas):** about modal endereça quem é o autor (mãe + pai)
- **Kennedy (specific promise):** "21 marcos detalhados", "40 semanas mapeadas"
- **Cardone (multiple asks):** paywall aparece em 2 momentos (parceiro + diário)

## 🔌 Integração com ebook

### Site `guia-mae-vendas`
Hoje a stack value lista 3 bônus ainda **fictícios**:
- Plano de 30 Dias (R$47)
- Toolkit Anti-ansiedade (R$37)
- Manual do Parceiro (R$27)

**Próxima evolução:** trocar um deles pelo Floresce que **existe de verdade**:
> Bônus #4: **Acesso ao app Floresce Premium** (R$67) — aplicativo que acompanha cada semana da gestação com fruta, marcos, diário e mensagens do parceiro.

Isso aumenta credibilidade e stack value real.

### Fluxo de venda futuro
1. Cliente compra ebook via Kiwify (R$37)
2. Email automático com:
   - Link de download do PDF
   - Código premium único do Floresce (ex: `FLOR-XYZW-1234`)
   - Link: `https://fabytanaia-max.github.io/floresce/?activate=FLOR-XYZW-1234`
3. Cliente acessa, app ativa premium, dados ficam locais

**Geração de códigos:** hoje é manual (adicionar em `data/licenses.js` + push). Pode ser automatizada com:
- Script Python que gera códigos e atualiza o JS
- GitHub Actions que recebe webhook do Kiwify e gera código

## 📋 Próximos passos sugeridos

### Curto prazo (semanas)
- [ ] Você + Eva começam a usar com códigos pessoais (já ativo)
- [ ] Coletar feedback real de uso (você é o usuário-zero)
- [ ] Pequenos polimentos visuais conforme percebem coisas
- [ ] Adicionar foto do Fabrício real no "Sobre"

### Médio prazo (1-2 meses)
- [ ] Integrar Floresce como bônus #4 do ebook
- [ ] Atualizar `guia-mae-vendas/index.html` value stack
- [ ] Criar fluxo de geração de códigos pra cada compra Kiwify
- [ ] Adicionar **notificações push** (semana virou, marco alcançado)
- [ ] Adicionar foto da barriga semanal (upload local + timeline)

### Longo prazo (3-6 meses)
- [ ] Sincronização entre dispositivos (Eva no celular dela, Fabrício no dele, ambos veem)
  - Opções: Supabase free tier, Firebase, ou IPFS
- [ ] Export do diário/parceiro em PDF (memória pra entregar pro filho/a)
- [ ] Versão em inglês pra mercado internacional
- [ ] App store nativo (Capacitor wrap)

## 🐛 Limitações conhecidas

1. **Sem sync:** cada dispositivo tem seus próprios dados (localStorage)
   - Workaround: Eva e Fabrício mantêm cada um seu próprio diário/mensagens
   - Solução futura: backend pequeno (Supabase) ou export/import JSON

2. **Códigos premium em texto plano:** quem inspecionar `data/licenses.js` vê todos
   - Risco baixo: público-alvo são mães grávidas, não hackers
   - Mitigação futura: SHA-256 hash dos códigos no front + lista hardcoded só de hashes

3. **Sem backend = sem analytics:** não dá pra saber quantos usam
   - Trade-off escolhido: privacidade > métricas
   - Adicionar futuramente: Plausible (privacy-first analytics)

## 📂 Arquivos críticos pra editar

```
data/licenses.js         ← adicionar códigos novos quando vender
data/weeks.js            ← editar dicas/descrições semanais
data/milestones.js       ← adicionar/editar marcos
index.html               ← estrutura
styles.css               ← visual (paleta no :root)
app.js                   ← lógica de tudo
```

## 🎨 Sistema de design

```css
/* Paleta — sempre voltar pra cá */
--bg-1:     #1a1424;   /* midnight purple */
--rose-500: #d49aaa;   /* rose gold accent */
--gold-500: #d4a96e;   /* champagne primary */
--gold-300: #e8cc94;   /* champagne light */
--ink-0:    #fbf6ee;   /* texto principal */
```

**Tipografia:**
- Display (h1, h2): `Fraunces` italic 500
- Body: `Plus Jakarta Sans` 400/500/600

## 📞 Contatos no footer

- Site Fabrício: https://fabytanaia-max.github.io/fabricio-tanaia-site/
- Instagram: @fabriciotanaia

---

**Última atualização:** 2026-05-18 · Sessão Kiro CLI
