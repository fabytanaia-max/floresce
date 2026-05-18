/* =========================================================
   Dados das 40 semanas de gestação
   Referência: BabyCenter, What to Expect, ACOG.
   Comparações com frutas/objetos populares no Brasil/Portugal.
   ========================================================= */

export const WEEKS = [
  // 1º TRIMESTRE — semanas 1 a 13
  {
    week: 1,
    fruit: "semente de papoila",
    emoji: "·",
    sizeCm: 0,
    weightG: 0,
    description: "Início da contagem. A gestação ainda não foi confirmada — é a janela onde o corpo se prepara.",
    tip: "Comece o ácido fólico se ainda não toma. Reduz risco de defeitos do tubo neural em até 70%."
  },
  {
    week: 2,
    fruit: "semente de papoila",
    emoji: "·",
    sizeCm: 0,
    weightG: 0,
    description: "A ovulação acontece nesta semana. Se houver fecundação, o embrião começa a se formar.",
    tip: "Se está tentando, esta é a janela fértil. Hidratação e descanso são mais importantes que parece."
  },
  {
    week: 3,
    fruit: "ponto",
    emoji: "·",
    sizeCm: 0.01,
    weightG: 0,
    description: "Fecundação ocorre. O blastocisto viaja pela trompa e implanta no útero.",
    tip: "Você ainda não sabe que está grávida. Continue cuidando como se estivesse."
  },
  {
    week: 4,
    fruit: "semente de gergelim",
    emoji: "🌱",
    sizeCm: 0.1,
    weightG: 0,
    description: "O embrião se fixa no útero. A placenta começa a se desenvolver.",
    tip: "Primeiros sintomas podem aparecer: cansaço, sensibilidade nos seios, ausência de menstruação."
  },
  {
    week: 5,
    fruit: "semente de laranja",
    emoji: "🌱",
    sizeCm: 0.2,
    weightG: 0,
    description: "Sistema cardiovascular começa a se formar. O coração já é um tubo que pulsa.",
    tip: "Hora de marcar a primeira consulta com obstetra. Trazer histórico médico ajuda."
  },
  {
    week: 6,
    fruit: "lentilha",
    emoji: "🫘",
    sizeCm: 0.4,
    weightG: 0.1,
    description: "Coração já bate (cerca de 110 bpm). Olhos, narinas e ouvidos começam a aparecer.",
    tip: "Enjoos podem começar. Comer pouco e com frequência ajuda. Gengibre é aliado natural."
  },
  {
    week: 7,
    fruit: "mirtilo",
    emoji: "🫐",
    sizeCm: 1,
    weightG: 0.5,
    description: "Bracinhos e perninhas surgem como pequenos botões. Cérebro se desenvolve rapidamente.",
    tip: "Sono inexplicável é normal — o corpo está produzindo a placenta inteira. Descanse sem culpa."
  },
  {
    week: 8,
    fruit: "framboesa",
    emoji: "🍓",
    sizeCm: 1.6,
    weightG: 1,
    description: "Dedinhos das mãos e pés começam a se separar. Movimentos espontâneos já existem.",
    tip: "Primeira ultrassonografia geralmente acontece agora. Você pode ouvir o coração."
  },
  {
    week: 9,
    fruit: "cereja",
    emoji: "🍒",
    sizeCm: 2.3,
    weightG: 2,
    description: "Caudazinha embrionária desaparece. Já é oficialmente um feto.",
    tip: "Roupas começam a apertar mesmo sem barriga visível — é normal, é inchaço hormonal."
  },
  {
    week: 10,
    fruit: "morango",
    emoji: "🍓",
    sizeCm: 3.1,
    weightG: 4,
    description: "Órgãos vitais já estão formados e começam a funcionar. Ossos endurecem.",
    tip: "Risco de aborto cai significativamente após esta semana. Pode respirar mais fundo."
  },
  {
    week: 11,
    fruit: "limão",
    emoji: "🍋",
    sizeCm: 4.1,
    weightG: 7,
    description: "Bebê pode bocejar, esticar, dar pequenos chutes. Você ainda não sente.",
    tip: "Translucência nucal é feita entre 11–14 semanas. Exame importante de rastreio."
  },
  {
    week: 12,
    fruit: "ameixa",
    emoji: "🟣",
    sizeCm: 5.4,
    weightG: 14,
    description: "Reflexos funcionam. Se você cutucar a barriga, o bebê reage (mesmo que você não sinta).",
    tip: "Fim do 1º trimestre. Energia volta gradualmente. Enjoos tendem a diminuir."
  },
  {
    week: 13,
    fruit: "vagem",
    emoji: "🫛",
    sizeCm: 7.4,
    weightG: 23,
    description: "Cordão umbilical conectado e funcional. Impressões digitais começam a se formar.",
    tip: "Última semana do 1º trimestre. Boa hora pra contar pras pessoas próximas."
  },

  // 2º TRIMESTRE — semanas 14 a 27
  {
    week: 14,
    fruit: "limão siciliano",
    emoji: "🍋",
    sizeCm: 8.7,
    weightG: 43,
    description: "Pelinhos finos (lanugo) cobrem o corpo. Bebê começa a fazer caretas.",
    tip: "Você entrou no trimestre dourado. Maioria das mulheres relata mais energia e menos enjoo."
  },
  {
    week: 15,
    fruit: "maçã",
    emoji: "🍎",
    sizeCm: 10.1,
    weightG: 70,
    description: "Bebê já enxerga luz através da pele da barriga. Pode reagir a luz forte.",
    tip: "Ouvido começa a captar sons externos. Falar e cantar pra barriga começa a fazer sentido."
  },
  {
    week: 16,
    fruit: "abacate",
    emoji: "🥑",
    sizeCm: 11.6,
    weightG: 100,
    description: "Bebê pode chupar o dedo. Músculos faciais se exercitam.",
    tip: "Algumas mulheres começam a sentir os primeiros movimentos sutis nesta fase."
  },
  {
    week: 17,
    fruit: "nabo",
    emoji: "🥬",
    sizeCm: 13,
    weightG: 140,
    description: "Esqueleto endurece. Gordura começa a se formar sob a pele.",
    tip: "Ultrassom morfológico (18–22 sem) revela órgãos detalhadamente. Marque com antecedência."
  },
  {
    week: 18,
    fruit: "pimentão",
    emoji: "🫑",
    sizeCm: 14.2,
    weightG: 190,
    description: "Bebê ouve sua voz e sons internos do seu corpo. Reconhecerá depois do nascimento.",
    tip: "Sexo do bebê pode ser identificado em ultrassom — se quiser saber."
  },
  {
    week: 19,
    fruit: "manga",
    emoji: "🥭",
    sizeCm: 15.3,
    weightG: 240,
    description: "Vernix caseoso (camada protetora cremosa) começa a cobrir a pele.",
    tip: "Dor no ligamento redondo é comum. Movimentos mais lentos ajudam."
  },
  {
    week: 20,
    fruit: "banana",
    emoji: "🍌",
    sizeCm: 16.4,
    weightG: 300,
    description: "Metade da gestação. Bebê tem cabelos, sobrancelhas e cílios em formação.",
    tip: "Marco simbólico: você está na metade do caminho. Comemore."
  },
  {
    week: 21,
    fruit: "cenoura",
    emoji: "🥕",
    sizeCm: 26.7,
    weightG: 360,
    description: "A partir daqui medimos da cabeça aos pés (não mais cabeça-bumbum).",
    tip: "Bebê engole líquido amniótico — está praticando a digestão."
  },
  {
    week: 22,
    fruit: "abóbora pequena",
    emoji: "🎃",
    sizeCm: 27.8,
    weightG: 430,
    description: "Olhos formados, mas íris ainda sem cor. Pálpebras ainda fundidas.",
    tip: "Movimentos ficam mais frequentes e fortes. Hora de começar a contar."
  },
  {
    week: 23,
    fruit: "berinjela",
    emoji: "🍆",
    sizeCm: 28.9,
    weightG: 501,
    description: "Bebê reconhece sua voz. Padrões de sono começam a se formar.",
    tip: "Audição madura. Música, leitura, conversa — tudo é absorvido."
  },
  {
    week: 24,
    fruit: "milho",
    emoji: "🌽",
    sizeCm: 30,
    weightG: 600,
    description: "Marco de viabilidade: a partir daqui, em UTI neonatal, há chance real de sobrevivência.",
    tip: "Teste de tolerância à glicose (rastreio diabetes gestacional) é feito entre 24–28 sem."
  },
  {
    week: 25,
    fruit: "rabanete",
    emoji: "🥬",
    sizeCm: 34.6,
    weightG: 660,
    description: "Cabelo começa a ter cor. Pulmões produzem surfactante (essencial pra respirar).",
    tip: "Inchaço nos pés é comum. Elevar as pernas ao deitar ajuda muito."
  },
  {
    week: 26,
    fruit: "pepino",
    emoji: "🥒",
    sizeCm: 35.6,
    weightG: 760,
    description: "Pálpebras se abrem pela primeira vez. Bebê pisca.",
    tip: "Babyletter (sangue do cordão) é coletado no parto — vale conversar com obstetra."
  },
  {
    week: 27,
    fruit: "couve-flor",
    emoji: "🥦",
    sizeCm: 36.6,
    weightG: 875,
    description: "Cérebro acelera desenvolvimento. Padrões de REM aparecem — bebê sonha.",
    tip: "Fim do 2º trimestre. Hora de pensar em curso de gestantes e plano de parto."
  },

  // 3º TRIMESTRE — semanas 28 a 40
  {
    week: 28,
    fruit: "abóbora grande",
    emoji: "🎃",
    sizeCm: 37.6,
    weightG: 1005,
    description: "Cérebro tem bilhões de neurônios. Sistema nervoso central amadurece rápido.",
    tip: "Início do 3º trimestre. Consultas passam a ser quinzenais."
  },
  {
    week: 29,
    fruit: "abóbora butternut",
    emoji: "🎃",
    sizeCm: 38.6,
    weightG: 1153,
    description: "Bebê pode distinguir luz e escuro através da pele da barriga.",
    tip: "Azia constante? Refeições pequenas e dormir com travesseiros altos ajudam muito."
  },
  {
    week: 30,
    fruit: "repolho",
    emoji: "🥬",
    sizeCm: 39.9,
    weightG: 1319,
    description: "Lanugo começa a desaparecer. Cérebro forma sulcos e dobras complexas.",
    tip: "Síndrome do ninho começa: vontade de organizar tudo é hormonal e normal."
  },
  {
    week: 31,
    fruit: "coco",
    emoji: "🥥",
    sizeCm: 41.1,
    weightG: 1502,
    description: "Pulmões praticam movimentos respiratórios. Membros se enchem de gordura.",
    tip: "Falta de ar é comum — útero comprime o diafragma. Vai melhorar quando o bebê encaixar."
  },
  {
    week: 32,
    fruit: "jicama",
    emoji: "🥔",
    sizeCm: 42.4,
    weightG: 1702,
    description: "Unhas dos dedos das mãos chegam à ponta. Maioria dos bebês está de cabeça pra baixo.",
    tip: "Movimentos diários: 10 ou mais em 2h é o esperado. Se diminuir, ligue pro obstetra."
  },
  {
    week: 33,
    fruit: "abacaxi",
    emoji: "🍍",
    sizeCm: 43.7,
    weightG: 1918,
    description: "Sistema imunológico começa a funcionar. Anticorpos passam pela placenta.",
    tip: "Insônia é frequente. Banhos mornos antes de dormir ajudam a relaxar."
  },
  {
    week: 34,
    fruit: "melão",
    emoji: "🍈",
    sizeCm: 45,
    weightG: 2146,
    description: "Sistema nervoso central maduro. Pulmões quase prontos.",
    tip: "Hora de fazer mala da maternidade. Pesquise a rota até o hospital em horário de pico."
  },
  {
    week: 35,
    fruit: "melão honeydew",
    emoji: "🍈",
    sizeCm: 46.2,
    weightG: 2383,
    description: "Maioria dos órgãos prontos pra vida fora. Só pulmões e cérebro continuam amadurecendo.",
    tip: "Streptococcus B é testado entre 35–37 sem. Exame importante."
  },
  {
    week: 36,
    fruit: "alface romana",
    emoji: "🥬",
    sizeCm: 47.4,
    weightG: 2622,
    description: "Bebê começa a descer (encaixe). Movimentos diminuem por falta de espaço — não por problema.",
    tip: "A partir desta semana é considerado quase termo. Parto é seguro."
  },
  {
    week: 37,
    fruit: "acelga",
    emoji: "🥬",
    sizeCm: 48.6,
    weightG: 2859,
    description: "Considerado termo precoce. Bebê pronto pra nascer.",
    tip: "Mucosa, dilatação, contrações irregulares — tudo pode começar agora ou só nas próximas semanas."
  },
  {
    week: 38,
    fruit: "alho-poró",
    emoji: "🌿",
    sizeCm: 49.8,
    weightG: 3083,
    description: "Bebê continua engordando e fortalecendo músculos. Lanugo praticamente sumiu.",
    tip: "Cada movimento ainda importa. Continue contando diariamente."
  },
  {
    week: 39,
    fruit: "melancia pequena",
    emoji: "🍉",
    sizeCm: 50.7,
    weightG: 3288,
    description: "Termo completo. Bebê está totalmente pronto.",
    tip: "Sinais de trabalho de parto: contrações regulares, ruptura da bolsa, perda de tampão mucoso."
  },
  {
    week: 40,
    fruit: "abóbora",
    emoji: "🎃",
    sizeCm: 51.2,
    weightG: 3462,
    description: "DPP. Apenas 5% nascem na data exata. Maioria nasce entre 38 e 42.",
    tip: "Caminhar, descansar, hidratar. O corpo sabe a hora. Confie."
  }
];

/**
 * Retorna dados da semana atual (clamp entre 1 e 40).
 * Se passou de 40 semanas, retorna a semana 40.
 */
export function getWeek(weekNumber) {
  if (weekNumber < 1) return WEEKS[0];
  if (weekNumber > 40) return WEEKS[39];
  return WEEKS[weekNumber - 1];
}

/**
 * Retorna o trimestre (1, 2 ou 3) baseado na semana.
 * 1: 1-13, 2: 14-27, 3: 28-40
 */
export function getTrimester(weekNumber) {
  if (weekNumber <= 13) return 1;
  if (weekNumber <= 27) return 2;
  return 3;
}

/** Range de cada trimestre (pra timeline visual) */
export const TRIMESTERS = [
  { number: 1, label: "1º trimestre", from: 1, to: 13, theme: "Formação", color: "rose" },
  { number: 2, label: "2º trimestre", from: 14, to: 27, theme: "Desenvolvimento", color: "champagne" },
  { number: 3, label: "3º trimestre", from: 28, to: 40, theme: "Preparação", color: "gold" }
];
