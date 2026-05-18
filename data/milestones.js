/* =========================================================
   Marcos importantes da gestação
   Eventos significativos, organizados por semana.
   ========================================================= */

export const MILESTONES = [
  {
    week: 6,
    title: "Coração começa a bater",
    description: "Primeiro batimento detectável (~110 bpm). Marca início da vida cardíaca.",
    icon: "💓",
    type: "physiological"
  },
  {
    week: 8,
    title: "Primeira ultrassonografia",
    description: "Geralmente a primeira imagem do bebê. Confirma idade gestacional e batimentos.",
    icon: "🩺",
    type: "exam"
  },
  {
    week: 10,
    title: "Risco de aborto cai",
    description: "A partir desta semana, o risco de perda gestacional reduz significativamente.",
    icon: "🛡️",
    type: "physiological"
  },
  {
    week: 12,
    title: "Fim do 1º trimestre",
    description: "Marco simbólico: enjoos diminuem, energia volta, barriga começa a aparecer.",
    icon: "🌸",
    type: "trimester"
  },
  {
    week: 13,
    title: "Translucência nucal",
    description: "Exame de rastreamento para anomalias cromossômicas (até semana 14).",
    icon: "🔍",
    type: "exam"
  },
  {
    week: 16,
    title: "Bebê pode chupar o dedo",
    description: "Reflexos faciais funcionam. Bebê faz caretas, boceja, chupa o dedo.",
    icon: "👶",
    type: "physiological"
  },
  {
    week: 18,
    title: "Primeiros movimentos sentidos",
    description: "Janela típica em que a mãe começa a sentir movimentos. Sensação de borboletas.",
    icon: "🦋",
    type: "physiological"
  },
  {
    week: 20,
    title: "Metade do caminho",
    description: "20 semanas: você está exatamente na metade da gestação. Comemore.",
    icon: "✨",
    type: "trimester"
  },
  {
    week: 20,
    title: "Ultrassom morfológico",
    description: "Exame detalhado de órgãos. Pode revelar sexo do bebê (entre 18–22 semanas).",
    icon: "🔬",
    type: "exam"
  },
  {
    week: 23,
    title: "Bebê reconhece sua voz",
    description: "Audição madura. Padrões de sono se formam. Música e leitura têm efeito.",
    icon: "🎶",
    type: "physiological"
  },
  {
    week: 24,
    title: "Marco de viabilidade",
    description: "A partir daqui, em UTI neonatal, há chance real de sobrevivência fora do útero.",
    icon: "🌟",
    type: "physiological"
  },
  {
    week: 26,
    title: "Olhos se abrem",
    description: "Bebê pisca pela primeira vez. Pálpebras descolam.",
    icon: "👁️",
    type: "physiological"
  },
  {
    week: 27,
    title: "Fim do 2º trimestre",
    description: "Hora de pensar em curso de gestantes, plano de parto, enxoval.",
    icon: "🌷",
    type: "trimester"
  },
  {
    week: 28,
    title: "Consultas quinzenais",
    description: "Rotina obstétrica intensifica. Acompanhamento mais próximo.",
    icon: "📅",
    type: "exam"
  },
  {
    week: 28,
    title: "Bebê sonha",
    description: "Padrões REM detectados. Cérebro tem bilhões de neurônios.",
    icon: "💭",
    type: "physiological"
  },
  {
    week: 32,
    title: "Encaixe começa",
    description: "Maioria dos bebês posiciona-se de cabeça pra baixo a partir desta semana.",
    icon: "👇",
    type: "physiological"
  },
  {
    week: 34,
    title: "Mala da maternidade",
    description: "Hora de preparar mala. Pulmões do bebê quase prontos.",
    icon: "🧳",
    type: "preparation"
  },
  {
    week: 36,
    title: "Quase termo",
    description: "Parto a partir daqui é seguro. Bebê faz encaixe definitivo.",
    icon: "🎯",
    type: "trimester"
  },
  {
    week: 37,
    title: "Termo precoce",
    description: "Bebê é considerado pronto pra nascer. Parto pode acontecer a qualquer momento.",
    icon: "✅",
    type: "physiological"
  },
  {
    week: 39,
    title: "Termo completo",
    description: "Idade gestacional ideal pra nascimento. Bebê totalmente preparado.",
    icon: "🌟",
    type: "physiological"
  },
  {
    week: 40,
    title: "DPP (data prevista)",
    description: "Apenas 5% nascem na data exata. Maioria nasce entre 38 e 42 semanas.",
    icon: "🎉",
    type: "trimester"
  }
];

/**
 * Retorna marcos já alcançados (semana <= currentWeek).
 */
export function getAchievedMilestones(currentWeek) {
  return MILESTONES.filter((m) => m.week <= currentWeek);
}

/**
 * Retorna o próximo marco a alcançar.
 */
export function getNextMilestone(currentWeek) {
  return MILESTONES.find((m) => m.week > currentWeek) || null;
}

/**
 * Retorna marcos da semana atual (acontecem agora).
 */
export function getCurrentWeekMilestones(currentWeek) {
  return MILESTONES.filter((m) => m.week === currentWeek);
}
