/* =========================================================
   Licenças válidas do Floresce Premium
   Adicione códigos novos aqui sempre que vender uma licença.
   Formato: { code: "FLOR-XXXX", owner: "Nome", note: "contexto" }
   ========================================================= */

export const VALID_LICENSES = [
  // Acessos pessoais (Fabrício + namorada)
  { code: "EVA-2026", owner: "Eva", note: "namorada do Fabrício, premium vitalício" },
  { code: "FAB-MASTER-2026", owner: "Fabrício", note: "criador, premium vitalício" },

  // Códigos demo / dev
  { code: "FLORESCE-DEMO", owner: "Demo", note: "código público para teste" },

  // ⬇ Adicione códigos vendidos aqui ⬇
  // { code: "FLOR-AB12-CD34", owner: "Cliente Maria Silva", note: "Kiwify #12345" },
];

/**
 * Verifica se um código é válido. Retorna o owner se for, null caso contrário.
 */
export function validateLicense(rawCode) {
  if (!rawCode) return null;
  const normalized = rawCode.trim().toUpperCase();
  const match = VALID_LICENSES.find((l) => l.code.toUpperCase() === normalized);
  return match || null;
}
