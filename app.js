/* =========================================================
   FLORESCE · App principal
   Local-first PWA · ES Module
   ========================================================= */

import { getWeek, getTrimester, TRIMESTERS } from "./data/weeks.js";
import {
  MILESTONES,
  getAchievedMilestones,
  getCurrentWeekMilestones,
  getNextMilestone
} from "./data/milestones.js";
import { validateLicense } from "./data/licenses.js";

const STORAGE_KEY = "floresce-v2";
const GESTATION_DAYS = 280; // 40 semanas exatas

// ============================================================
// STATE
// ============================================================
const defaultState = {
  babyName: "",
  dueDate: "",
  momName: "",
  partnerName: "",
  isPremium: false,
  licenseCode: "",
  licenseOwner: "",
  partnerMessages: [],   // [{ id, week, text, date }]
  journal: [],           // [{ id, mood, text, date, week }]
  createdAt: null
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Floresce: não foi possível salvar.", err);
  }
}

function hasInitialData() {
  return Boolean(state.dueDate && state.babyName);
}

// ============================================================
// LICENSE / PREMIUM
// ============================================================
function tryActivateFromURL() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("activate");
  if (!code) return false;

  const result = validateLicense(code);
  if (result) {
    state.isPremium = true;
    state.licenseCode = result.code;
    state.licenseOwner = result.owner;
    saveState();

    // Limpa o param da URL pra não deixar exposto
    url.searchParams.delete("activate");
    window.history.replaceState({}, "", url.toString());
    return true;
  }
  return false;
}

function activateLicense(rawCode) {
  const result = validateLicense(rawCode);
  if (!result) return false;
  state.isPremium = true;
  state.licenseCode = result.code;
  state.licenseOwner = result.owner;
  saveState();
  return true;
}

function isPremium() {
  return state.isPremium === true;
}

// ============================================================
// COMPUTATION
// ============================================================
function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getDaysFromConception() {
  if (!state.dueDate) return 0;
  const due = startOfDay(state.dueDate);
  const today = startOfDay(new Date());
  const msPerDay = 86400000;
  const daysLeft = Math.ceil((due - today) / msPerDay);
  const elapsed = GESTATION_DAYS - daysLeft;
  return { daysLeft: Math.max(daysLeft, 0), elapsed: Math.min(Math.max(elapsed, 0), GESTATION_DAYS) };
}

function getCurrentWeekNumber() {
  const { elapsed } = getDaysFromConception() || { elapsed: 0 };
  return Math.max(1, Math.min(40, Math.floor(elapsed / 7) + 1));
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = startOfDay(dateStr);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(d);
}

function formatShortDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }).format(d);
}

// ============================================================
// DOM
// ============================================================
const els = {
  onboarding: document.getElementById("onboarding"),
  app: document.getElementById("app"),
  onboardingForm: document.getElementById("onboardingForm"),
  onbBabyName: document.getElementById("onbBabyName"),
  onbDueDate: document.getElementById("onbDueDate"),
  onbMomName: document.getElementById("onbMomName"),
  onbPartnerName: document.getElementById("onbPartnerName"),

  // Hero
  heroGreeting: document.getElementById("heroGreeting"),
  babyNameDisplay: document.getElementById("babyNameDisplay"),
  trimesterLabel: document.getElementById("trimesterLabel"),
  daysLeft: document.getElementById("daysLeft"),
  dueText: document.getElementById("dueText"),

  // Trimester timeline
  trimesterFill: document.getElementById("trimesterFill"),
  triLabels: document.querySelectorAll(".tri-label"),

  // Week card
  weekTitle: document.getElementById("weekTitle"),
  fruitEmoji: document.getElementById("fruitEmoji"),
  fruitLabel: document.getElementById("fruitLabel"),
  weekSize: document.getElementById("weekSize"),
  weekWeight: document.getElementById("weekWeight"),
  trimesterNum: document.getElementById("trimesterNum"),
  weekDescription: document.getElementById("weekDescription"),
  weekTipWrap: document.getElementById("weekTipWrap"),
  weekTip: document.getElementById("weekTip"),

  // Stats
  weeksDone: document.getElementById("weeksDone"),
  percent: document.getElementById("percent"),
  weeksLeft: document.getElementById("weeksLeft"),
  barFill: document.getElementById("barFill"),

  // Tabs
  tabs: document.querySelectorAll(".tab"),
  tabContents: document.querySelectorAll(".tab-content"),

  // Milestones
  milestonesList: document.getElementById("milestonesList"),

  // Partner
  partnerHeading: document.getElementById("partnerHeading"),
  partnerForm: document.getElementById("partnerForm"),
  partnerInput: document.getElementById("partnerInput"),
  partnerCount: document.getElementById("partnerCount"),
  partnerList: document.getElementById("partnerList"),

  // Journal
  journalForm: document.getElementById("journalForm"),
  journalInput: document.getElementById("journalInput"),
  journalCount: document.getElementById("journalCount"),
  journalList: document.getElementById("journalList"),
  moodButtons: document.querySelectorAll(".mood"),

  // Reflection
  reflection: document.getElementById("reflection"),

  // Settings modal
  settingsBtn: document.getElementById("settingsBtn"),
  settingsModal: document.getElementById("settingsModal"),
  setBabyName: document.getElementById("setBabyName"),
  setDueDate: document.getElementById("setDueDate"),
  setMomName: document.getElementById("setMomName"),
  setPartnerName: document.getElementById("setPartnerName"),
  premiumBadge: document.getElementById("premiumBadge"),
  freeBadge: document.getElementById("freeBadge"),
  premiumText: document.getElementById("premiumText"),
  activatePremiumBtn: document.getElementById("activatePremiumBtn"),
  buyPremiumLink: document.getElementById("buyPremiumLink"),
  saveSettingsBtn: document.getElementById("saveSettingsBtn"),
  resetBtn: document.getElementById("resetBtn"),

  // Activate modal
  activateModal: document.getElementById("activateModal"),
  licenseKey: document.getElementById("licenseKey"),
  licenseFeedback: document.getElementById("licenseFeedback"),
  confirmLicenseBtn: document.getElementById("confirmLicenseBtn"),

  // Paywall
  paywallModal: document.getElementById("paywallModal"),
  haveCodeBtn: document.getElementById("haveCodeBtn"),

  // About
  aboutBtn: document.getElementById("aboutBtn"),
  aboutModal: document.getElementById("aboutModal")
};

let selectedMood = null;
let reflectionTimer = null;

// ============================================================
// RENDERS
// ============================================================
function renderHero() {
  const greeting = state.momName ? `Olá, ${state.momName}` : "Olá";
  els.heroGreeting.textContent = greeting;

  els.babyNameDisplay.textContent = state.babyName || "Bebê";

  if (!state.dueDate) {
    els.daysLeft.textContent = "--";
    els.dueText.textContent = "Defina a data prevista.";
    els.trimesterLabel.textContent = "";
    return;
  }

  const { daysLeft } = getDaysFromConception();
  els.daysLeft.textContent = daysLeft.toString();
  els.dueText.textContent = `Previsão: ${formatDate(state.dueDate)}`;

  const week = getCurrentWeekNumber();
  const tri = getTrimester(week);
  const triData = TRIMESTERS.find((t) => t.number === tri);
  els.trimesterLabel.textContent = `— ${triData ? triData.theme.toLowerCase() : "em formação"}`;
}

function renderWeekCard() {
  if (!state.dueDate) return;
  const week = getCurrentWeekNumber();
  const data = getWeek(week);
  const tri = getTrimester(week);

  els.weekTitle.textContent = `Semana ${week}`;
  els.fruitEmoji.textContent = data.emoji;
  els.fruitLabel.textContent = data.fruit;
  els.weekSize.textContent = data.sizeCm > 0 ? data.sizeCm.toFixed(1).replace(".0", "") : "—";
  els.weekWeight.textContent = data.weightG > 0 ? formatWeight(data.weightG) : "—";
  els.trimesterNum.textContent = tri.toString();
  els.weekDescription.textContent = data.description;

  if (data.tip) {
    els.weekTip.textContent = data.tip;
    els.weekTipWrap.hidden = false;
  } else {
    els.weekTipWrap.hidden = true;
  }
}

function formatWeight(grams) {
  if (grams < 1000) return Math.round(grams).toString();
  const kg = grams / 1000;
  return kg.toFixed(1).replace(".", ",");
}

function renderStats() {
  if (!state.dueDate) {
    els.weeksDone.textContent = "--";
    els.percent.textContent = "--";
    els.weeksLeft.textContent = "--";
    els.barFill.style.width = "0%";
    return;
  }
  const { daysLeft, elapsed } = getDaysFromConception();
  const percent = Math.round((elapsed / GESTATION_DAYS) * 100);
  const weeksDone = Math.floor(elapsed / 7);
  const weeksLeft = Math.max(Math.ceil(daysLeft / 7), 0);

  els.weeksDone.textContent = weeksDone.toString();
  els.percent.textContent = percent.toString();
  els.weeksLeft.textContent = weeksLeft.toString();
  els.barFill.style.width = `${percent}%`;
}

function renderTrimesters() {
  if (!state.dueDate) {
    els.trimesterFill.style.width = "0%";
    return;
  }
  const { elapsed } = getDaysFromConception();
  const percent = (elapsed / GESTATION_DAYS) * 100;
  els.trimesterFill.style.width = `${Math.min(percent, 100)}%`;

  const week = getCurrentWeekNumber();
  const currentTri = getTrimester(week);
  els.triLabels.forEach((label) => {
    const tri = parseInt(label.dataset.tri, 10);
    label.classList.toggle("is-current", tri === currentTri);
  });
}

function renderMilestones() {
  if (!state.dueDate) {
    els.milestonesList.innerHTML =
      '<p class="empty">Defina a data prevista para ver os marcos da gestação.</p>';
    return;
  }

  const week = getCurrentWeekNumber();
  const currentMilestones = getCurrentWeekMilestones(week);

  els.milestonesList.innerHTML = "";
  MILESTONES.forEach((m) => {
    const isDone = m.week < week;
    const isCurrent = currentMilestones.some((cm) => cm === m);
    const div = document.createElement("article");
    div.className = "milestone";
    if (isDone) div.classList.add("milestone--done");
    if (isCurrent) div.classList.add("milestone--current");
    div.innerHTML = `
      <div class="milestone__icon">${m.icon}</div>
      <div class="milestone__body">
        <h3>${m.title}</h3>
        <p>${m.description}</p>
      </div>
      <div class="milestone__week">sem. ${m.week}</div>
    `;
    els.milestonesList.appendChild(div);
  });
}

function renderPartner() {
  const partner = state.partnerName || "Parceiro";
  const mom = state.momName || "você";
  els.partnerHeading.textContent = `${partner} → ${mom}`;

  if (!state.partnerMessages || state.partnerMessages.length === 0) {
    els.partnerList.innerHTML =
      '<p class="empty">Ainda nenhuma mensagem. Salve a primeira acima.</p>';
    return;
  }

  els.partnerList.innerHTML = "";
  const sorted = [...state.partnerMessages].sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach((msg) => {
    const entry = document.createElement("article");
    entry.className = "entry";
    entry.innerHTML = `
      <header class="entry__head">
        <span class="entry__week">Semana ${msg.week}</span>
        <span class="entry__date">${formatShortDate(msg.date)}</span>
      </header>
      <p class="entry__text">${escapeHtml(msg.text)}</p>
      <button class="entry__del" data-id="${msg.id}" data-type="partner" aria-label="Apagar">✕</button>
    `;
    els.partnerList.appendChild(entry);
  });
}

function renderJournal() {
  if (!state.journal || state.journal.length === 0) {
    els.journalList.innerHTML =
      '<p class="empty">Ainda nenhuma entrada. Comece registrando como você está hoje.</p>';
    return;
  }

  els.journalList.innerHTML = "";
  const sorted = [...state.journal].sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach((entry) => {
    const moodLabel = getMoodLabel(entry.mood);
    const div = document.createElement("article");
    div.className = "entry";
    div.innerHTML = `
      <header class="entry__head">
        <span class="entry__week">${moodLabel}${entry.week ? ` · semana ${entry.week}` : ""}</span>
        <span class="entry__date">${formatShortDate(entry.date)}</span>
      </header>
      <p class="entry__text">${escapeHtml(entry.text)}</p>
      <button class="entry__del" data-id="${entry.id}" data-type="journal" aria-label="Apagar">✕</button>
    `;
    els.journalList.appendChild(div);
  });
}

function getMoodLabel(mood) {
  const map = {
    happy: "😊 Feliz",
    tired: "😴 Cansada",
    excited: "🤗 Animada",
    anxious: "😟 Ansiosa",
    grateful: "🙏 Grata",
    emotional: "🥺 Emotiva"
  };
  return map[mood] || "📝 Sem humor";
}

function renderReflection() {
  if (reflectionTimer) clearInterval(reflectionTimer);

  let messages = [];
  if (!state.dueDate) {
    messages = ["Cada jornada começa com um passo. Comece definindo a data prevista."];
  } else {
    const week = getCurrentWeekNumber();
    const { daysLeft } = getDaysFromConception();
    const name = state.babyName || "seu bebê";

    if (daysLeft <= 0) {
      messages = [
        `${name} chegou. Um novo capítulo começa.`,
        "O fim da espera. O início de tudo."
      ];
    } else if (daysLeft <= 30) {
      messages = [
        `Faltam ${daysLeft} dias para conhecer ${name}.`,
        "Reta final. Cada dia importa.",
        "Quase lá. Seu corpo sabe o que faz."
      ];
    } else if (week <= 13) {
      messages = [
        "Cada célula em formação. Cada dia uma descoberta.",
        "O começo silencioso é o mais transformador.",
        `${name} está se formando neste exato momento.`
      ];
    } else if (week <= 27) {
      messages = [
        "Trimestre dourado. Aproveite cada movimento.",
        `${name} já te ouve. Conversem.`,
        "A barriga conta uma história. Documente."
      ];
    } else {
      messages = [
        `${name} está quase pronto. Você também está.`,
        "Reta final. Confie no que seu corpo sabe.",
        "Cada chute é uma promessa cumprida."
      ];
    }
  }

  let idx = 0;
  els.reflection.textContent = messages[idx];
  if (messages.length > 1) {
    reflectionTimer = setInterval(() => {
      idx = (idx + 1) % messages.length;
      els.reflection.style.opacity = "0.3";
      setTimeout(() => {
        els.reflection.textContent = messages[idx];
        els.reflection.style.opacity = "1";
      }, 200);
    }, 5500);
  }
}

function renderPremiumUI() {
  // Tab locks (mostra cadeado em parceiro/journal se não premium)
  document.querySelectorAll("[data-premium-lock]").forEach((el) => {
    el.hidden = isPremium();
  });

  // Settings premium status
  if (isPremium()) {
    els.premiumBadge.hidden = false;
    els.freeBadge.hidden = true;
    els.premiumText.textContent = state.licenseOwner
      ? `Ativo para: ${state.licenseOwner}. Obrigado por apoiar.`
      : "Premium ativo. Obrigado por apoiar.";
    els.activatePremiumBtn.hidden = true;
    els.buyPremiumLink.hidden = true;
  } else {
    els.premiumBadge.hidden = true;
    els.freeBadge.hidden = false;
    els.premiumText.textContent =
      "Recursos exclusivos: Mensagens do parceiro, diário ilimitado, marcos detalhados e ebook completo.";
    els.activatePremiumBtn.hidden = false;
    els.buyPremiumLink.hidden = false;
    els.buyPremiumLink.href = "https://pay.kiwify.com.br/RiHKVCp";
  }
}

function renderAll() {
  renderHero();
  renderWeekCard();
  renderStats();
  renderTrimesters();
  renderMilestones();
  renderPartner();
  renderJournal();
  renderReflection();
  renderPremiumUI();
}

// ============================================================
// HTML escape
// ============================================================
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================
// SCREEN MANAGEMENT
// ============================================================
function showOnboarding() {
  els.onboarding.hidden = false;
  els.app.hidden = true;
}

function showApp() {
  els.onboarding.hidden = true;
  els.app.hidden = false;
  initRevealObserver();
}

// ============================================================
// EVENTS
// ============================================================
function bindOnboarding() {
  els.onboardingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.babyName = els.onbBabyName.value.trim() || "Bebê";
    state.dueDate = els.onbDueDate.value;
    state.momName = els.onbMomName.value.trim();
    state.partnerName = els.onbPartnerName.value.trim();
    state.createdAt = new Date().toISOString();
    saveState();
    showApp();
    renderAll();
  });
}

function bindTabs() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // Premium gate for partner/journal
      const needsPremium = target === "partner" || target === "journal";
      if (needsPremium && !isPremium()) {
        openModal(els.paywallModal);
        return;
      }

      els.tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      els.tabContents.forEach((c) =>
        c.classList.toggle("is-active", c.dataset.tabContent === target)
      );
    });
  });
}

function bindPartner() {
  els.partnerInput.addEventListener("input", () => {
    els.partnerCount.textContent = els.partnerInput.value.length;
  });
  els.partnerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = els.partnerInput.value.trim();
    if (!text) return;
    if (!isPremium()) {
      openModal(els.paywallModal);
      return;
    }
    const week = getCurrentWeekNumber();
    state.partnerMessages.push({
      id: Date.now().toString(),
      week,
      text,
      date: new Date().toISOString()
    });
    saveState();
    els.partnerInput.value = "";
    els.partnerCount.textContent = "0";
    renderPartner();
  });
}

function bindJournal() {
  els.journalInput.addEventListener("input", () => {
    els.journalCount.textContent = els.journalInput.value.length;
  });

  els.moodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.moodButtons.forEach((b) => b.classList.toggle("is-selected", b === btn));
      selectedMood = btn.dataset.mood;
    });
  });

  els.journalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = els.journalInput.value.trim();
    if (!text) return;
    if (!isPremium()) {
      openModal(els.paywallModal);
      return;
    }
    const week = state.dueDate ? getCurrentWeekNumber() : null;
    state.journal.push({
      id: Date.now().toString(),
      mood: selectedMood,
      text,
      week,
      date: new Date().toISOString()
    });
    saveState();
    els.journalInput.value = "";
    els.journalCount.textContent = "0";
    selectedMood = null;
    els.moodButtons.forEach((b) => b.classList.remove("is-selected"));
    renderJournal();
  });
}

function bindEntryDeletion() {
  // Delegação no document
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".entry__del")) return;
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;
    if (!confirm("Apagar esta entrada?")) return;

    if (type === "partner") {
      state.partnerMessages = state.partnerMessages.filter((m) => m.id !== id);
      saveState();
      renderPartner();
    } else if (type === "journal") {
      state.journal = state.journal.filter((j) => j.id !== id);
      saveState();
      renderJournal();
    }
  });
}

function bindModals() {
  // Settings
  els.settingsBtn.addEventListener("click", () => {
    els.setBabyName.value = state.babyName || "";
    els.setDueDate.value = state.dueDate || "";
    els.setMomName.value = state.momName || "";
    els.setPartnerName.value = state.partnerName || "";
    openModal(els.settingsModal);
  });

  els.saveSettingsBtn.addEventListener("click", () => {
    state.babyName = els.setBabyName.value.trim() || "Bebê";
    state.dueDate = els.setDueDate.value || state.dueDate;
    state.momName = els.setMomName.value.trim();
    state.partnerName = els.setPartnerName.value.trim();
    saveState();
    closeAllModals();
    renderAll();
  });

  els.resetBtn.addEventListener("click", () => {
    if (!confirm("Apagar TODOS os dados? Isto não pode ser desfeito.")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = { ...defaultState };
    closeAllModals();
    showOnboarding();
  });

  // Activate
  els.activatePremiumBtn.addEventListener("click", () => {
    closeAllModals();
    setTimeout(() => openModal(els.activateModal), 200);
  });
  els.confirmLicenseBtn.addEventListener("click", () => {
    const code = els.licenseKey.value.trim();
    const ok = activateLicense(code);
    showFeedback(ok);
    if (ok) {
      setTimeout(() => {
        closeAllModals();
        renderAll();
      }, 1200);
    }
  });
  els.haveCodeBtn.addEventListener("click", () => {
    closeAllModals();
    setTimeout(() => openModal(els.activateModal), 200);
  });

  // About
  els.aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(els.aboutModal);
  });

  // Close handlers
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => closeAllModals());
  });

  // Close on backdrop click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  });
}

function showFeedback(ok) {
  els.licenseFeedback.hidden = false;
  els.licenseFeedback.textContent = ok
    ? `✓ Premium ativado! Bem-vindo${state.licenseOwner ? `, ${state.licenseOwner}` : ""}.`
    : "✕ Código inválido. Verifique e tente novamente.";
  els.licenseFeedback.className = "feedback " + (ok ? "feedback--ok" : "feedback--err");
}

function openModal(modal) {
  if (!modal) return;
  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "");
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((m) => {
    if (typeof m.close === "function") m.close();
    else m.removeAttribute("open");
  });
  if (els.licenseFeedback) {
    els.licenseFeedback.hidden = true;
    els.licenseFeedback.textContent = "";
  }
}

function bindTrimesterClick() {
  els.triLabels.forEach((label) => {
    label.addEventListener("click", () => {
      const tri = parseInt(label.dataset.tri, 10);
      const target = TRIMESTERS.find((t) => t.number === tri);
      if (target) {
        alert(`${target.label}: ${target.theme}\nSemanas ${target.from}–${target.to}`);
      }
    });
  });
}

// ============================================================
// REVEAL OBSERVER
// ============================================================
function initRevealObserver() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reveals.length === 0) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || "0", 10);
          setTimeout(() => entry.target.classList.add("is-visible"), delay);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
}

// ============================================================
// INIT
// ============================================================
function init() {
  // Tenta ativar via URL antes de tudo
  tryActivateFromURL();

  if (!hasInitialData()) {
    showOnboarding();
  } else {
    showApp();
    renderAll();
  }

  bindOnboarding();
  bindTabs();
  bindPartner();
  bindJournal();
  bindEntryDeletion();
  bindModals();
  bindTrimesterClick();

  // Update once per minute (in case day rolls over while app open)
  setInterval(() => {
    if (!els.app.hidden) renderAll();
  }, 60_000);
}

document.addEventListener("DOMContentLoaded", init);
