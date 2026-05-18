# Floresce 🌸

> App premium de gestação. Acompanhe cada semana com elegância — local-first, sem conta, sem servidor.

🔗 **Live:** https://fabytanaia-max.github.io/floresce/

## ✨ Features

### Free
- ⏱ **Contagem regressiva** até a DPP (data prevista de parto)
- 📈 **Progresso da gestação** em % e semanas
- 🍇 **Tamanho do bebê** semana a semana (40 semanas com fruta + cm + g)
- 🎯 **Marcos da gestação** (21 eventos importantes mapeados)
- 🌗 **Trimestre atual** com timeline visual
- 💭 **Reflexões diárias** rotativas, contextuais por fase
- 📱 **PWA instalável** offline (funciona sem internet após primeiro carregamento)

### Premium ★
- 💌 **Mensagens do parceiro** — espaço pra ele deixar palavras semana a semana
- 📔 **Diário pessoal** ilimitado com seletor de humor
- 🔓 **Sem propaganda, nunca**
- 📚 **Acesso ao ebook** "Guia da Mãe de Primeira Viagem" incluso

## 🚀 Como usar

### Para você (utilização local)

Acesse **https://fabytanaia-max.github.io/floresce/** no celular ou desktop.

**No primeiro acesso:**
1. Preencha onboarding: nome do bebê + DPP + (opcional) seu nome + nome do parceiro
2. Pronto, dados ficam salvos no dispositivo

**Pra instalar como app:**
- **Android (Chrome):** menu → "Instalar app"
- **iPhone (Safari):** compartilhar → "Adicionar à Tela Inicial"
- **Desktop:** ícone de instalação na barra de endereços

### Para ativar Premium

URL com parâmetro: `?activate=CODIGO`

Códigos pessoais já válidos (ver `data/licenses.js`):
- `EVA-2026` — namorada do criador
- `FAB-MASTER-2026` — criador
- `FLORESCE-DEMO` — código público pra teste

**Exemplo:** https://fabytanaia-max.github.io/floresce/?activate=EVA-2026

Após ativação, o código é salvo no `localStorage` e premium persiste.

## 🛠️ Desenvolvimento

```bash
# Local server (estático, sem build)
node server.mjs
# Abre em http://localhost:4173
```

### Estrutura

```
floresce/
├── index.html              # Estrutura principal
├── styles.css              # Premium dark + rose gold + champagne
├── app.js                  # Lógica principal (ES module)
├── service-worker.js       # PWA offline cache
├── manifest.webmanifest    # PWA manifest
├── data/
│   ├── weeks.js            # 40 semanas (fruta, tamanho, peso, descrição, dica)
│   ├── milestones.js       # 21 marcos (heartbeat, ultrassom, viabilidade, etc.)
│   └── licenses.js         # Códigos premium aceitos ⚠️ atualizar quando vender
├── icons/
│   ├── icon-192.svg
│   └── icon-512.svg
└── server.mjs              # Static server local pra dev
```

### Adicionar código premium novo

Edite `data/licenses.js`:

```js
export const VALID_LICENSES = [
  // ...existentes...
  { code: "FLOR-AB12-CD34", owner: "Cliente Maria Silva", note: "Kiwify #12345" },
];
```

Commit + push → GitHub Pages republica em 60–90s. Cliente acessa `?activate=FLOR-AB12-CD34`.

### Stack

- **Vanilla HTML/CSS/JS** (zero build)
- **ES Modules** nativos
- **localStorage** pra persistência
- **Service Worker** pra offline
- **Fontes:** Fraunces (display) + Plus Jakarta Sans (body)

## 🎨 Design

- **Paleta:** midnight purple (`#1a1424`) + rose gold (`#d49aaa`) + champagne (`#d4a96e`)
- **Filosofia:** luxo feminino, calma, sem infantil. Premium signal.
- **Mobile-first:** todas as decisões priorizam tela pequena.

## 📦 Roadmap

- [ ] Notificações push (semana mudou, marco alcançado)
- [ ] Foto da barriga semanal (timeline visual)
- [ ] Export do diário em PDF
- [ ] Sincronização entre 2 dispositivos (parceiro vê mensagens em outro celular)
- [ ] Multi-idioma (PT-PT + EN)

## 📄 Licença

Código MIT. Conteúdo (textos, dicas, design) © Fabrício Tanaia.

---

Feito com amor por [Fabrício Tanaia](https://fabytanaia-max.github.io/fabricio-tanaia-site/)
