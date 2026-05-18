# Baby Countdown (PWA Offline)

App local e leve para acompanhar o tempo restante ate o nascimento.

## Uso rapido no computador
1. Execute: `node standalone/baby-countdown/server.mjs`
2. Abra `http://localhost:4173`
3. Preencha nome do bebe e data prevista

## Instalar no Android (sem internet depois)
1. No mesmo Wi-Fi, inicie o servidor no PC:
`node standalone/baby-countdown/server.mjs`
2. No Android, abra no Chrome o endereco `http://SEU_IP:4173` mostrado no terminal.
3. Toque em `Instalar app` (ou `Adicionar a tela inicial`).
4. Abra o app instalado uma vez com internet local.
5. Depois disso ele funciona offline (service worker + localStorage).

## Observacoes
- Sem backend.
- Sem conta.
- Dados salvos localmente no dispositivo.
