/* Настройки как в WhatsApp (владелец 01.11): светлый фон, сверху карточка профиля,
   ниже короткий список разделов. Нажал раздел — открывается его страница со стрелкой «назад».
   Разделы — те же <details class="settings-section"> из index.html: модуль только
   переставляет их и показывает по одному, вся логика внутри разделов остаётся в app.js. */
(() => {
  "use strict";

  const TEXT = {
    ru: { title: "Настройки", lang: "Язык", sub: "Подписка", help: "Помощь и правила", signIn: "Войти или зарегистрироваться", letterSub: "От кого и для кого", notifySub: "Звонки и сообщения", helpSub: "Поддержка, правила, поделиться", back: "Назад" , theme: "Тема", light: "Светлая", dark: "Тёмная", th_alps: "Горное озеро", th_morning: "Утро у моря", th_sunset: "Закат у моря", th_mountains: "Закат в горах", th_aurora: "Северное сияние", th_cabin: "Ночной домик" },
    en: { title: "Settings", lang: "Language", sub: "Subscription", help: "Help and terms", signIn: "Sign in or create an account", letterSub: "From whom and to whom", notifySub: "Calls and messages", helpSub: "Support, terms, share", back: "Back" , theme: "Theme", light: "Light", dark: "Dark", th_alps: "Mountain lake", th_morning: "Morning by the sea", th_sunset: "Sunset by the sea", th_mountains: "Mountain sunset", th_aurora: "Northern lights", th_cabin: "Night cabin" },
    fr: { title: "Réglages", lang: "Langue", sub: "Abonnement", help: "Aide et conditions", signIn: "Se connecter ou créer un compte", letterSub: "De qui et pour qui", notifySub: "Appels et messages", helpSub: "Assistance, conditions, partager", back: "Retour" , theme: "Thème", light: "Clair", dark: "Sombre", th_alps: "Lac de montagne", th_morning: "Matin au bord de la mer", th_sunset: "Coucher de soleil sur la mer", th_mountains: "Coucher de soleil en montagne", th_aurora: "Aurore boréale", th_cabin: "Chalet de nuit" },
    de: { title: "Einstellungen", lang: "Sprache", sub: "Abo", help: "Hilfe und Bedingungen", signIn: "Anmelden oder registrieren", letterSub: "Von wem und für wen", notifySub: "Anrufe und Nachrichten", helpSub: "Support, Bedingungen, teilen", back: "Zurück" , theme: "Design", light: "Hell", dark: "Dunkel", th_alps: "Bergsee", th_morning: "Morgen am Meer", th_sunset: "Sonnenuntergang am Meer", th_mountains: "Sonnenuntergang in den Bergen", th_aurora: "Nordlichter", th_cabin: "Hütte bei Nacht" },
    es: { title: "Ajustes", lang: "Idioma", sub: "Suscripción", help: "Ayuda y condiciones", signIn: "Inicia sesión o regístrate", letterSub: "De quién y para quién", notifySub: "Llamadas y mensajes", helpSub: "Soporte, condiciones, compartir", back: "Atrás" , theme: "Tema", light: "Claro", dark: "Oscuro", th_alps: "Lago de montaña", th_morning: "Mañana junto al mar", th_sunset: "Atardecer junto al mar", th_mountains: "Atardecer en la montaña", th_aurora: "Aurora boreal", th_cabin: "Cabaña de noche" },
    it: { title: "Impostazioni", lang: "Lingua", sub: "Abbonamento", help: "Aiuto e condizioni", signIn: "Accedi o registrati", letterSub: "Da chi e per chi", notifySub: "Chiamate e messaggi", helpSub: "Assistenza, condizioni, condividi", back: "Indietro" , theme: "Tema", light: "Chiaro", dark: "Scuro", th_alps: "Lago di montagna", th_morning: "Mattina al mare", th_sunset: "Tramonto sul mare", th_mountains: "Tramonto in montagna", th_aurora: "Aurora boreale", th_cabin: "Baita di notte" },
    pl: { title: "Ustawienia", lang: "Język", sub: "Subskrypcja", help: "Pomoc i zasady", signIn: "Zaloguj się lub zarejestruj", letterSub: "Od kogo i dla kogo", notifySub: "Połączenia i wiadomości", helpSub: "Pomoc, zasady, udostępnij", back: "Wstecz" , theme: "Motyw", light: "Jasny", dark: "Ciemny", th_alps: "Górskie jezioro", th_morning: "Poranek nad morzem", th_sunset: "Zachód słońca nad morzem", th_mountains: "Zachód słońca w górach", th_aurora: "Zorza polarna", th_cabin: "Chatka nocą" },
    uk: { title: "Налаштування", lang: "Мова", sub: "Підписка", help: "Допомога й правила", signIn: "Увійти або зареєструватися", letterSub: "Від кого і для кого", notifySub: "Дзвінки й повідомлення", helpSub: "Підтримка, правила, поділитися", back: "Назад" , theme: "Тема", light: "Світла", dark: "Темна", th_alps: "Гірське озеро", th_morning: "Ранок біля моря", th_sunset: "Захід сонця біля моря", th_mountains: "Захід сонця в горах", th_aurora: "Північне сяйво", th_cabin: "Нічний будиночок" },
    pt: { title: "Definições", lang: "Idioma", sub: "Assinatura", help: "Ajuda e termos", signIn: "Entrar ou criar conta", letterSub: "De quem e para quem", notifySub: "Chamadas e mensagens", helpSub: "Suporte, termos, partilhar", back: "Voltar" , theme: "Tema", light: "Claro", dark: "Escuro", th_alps: "Lago na montanha", th_morning: "Manhã à beira-mar", th_sunset: "Pôr do sol no mar", th_mountains: "Pôr do sol nas montanhas", th_aurora: "Aurora boreal", th_cabin: "Cabana à noite" },
    tr: { title: "Ayarlar", lang: "Dil", sub: "Abonelik", help: "Yardım ve koşullar", signIn: "Giriş yap veya kaydol", letterSub: "Kimden ve kime", notifySub: "Aramalar ve mesajlar", helpSub: "Destek, koşullar, paylaş", back: "Geri" , theme: "Tema", light: "Açık", dark: "Koyu", th_alps: "Dağ gölü", th_morning: "Deniz kenarında sabah", th_sunset: "Deniz kenarında gün batımı", th_mountains: "Dağlarda gün batımı", th_aurora: "Kuzey ışıkları", th_cabin: "Gece kulübesi" },
    ja: { title: "設定", lang: "言語", sub: "サブスクリプション", help: "ヘルプと規約", signIn: "ログインまたは登録", letterSub: "差出人と宛先", notifySub: "通話とメッセージ", helpSub: "サポート・規約・共有", back: "戻る" , theme: "テーマ", light: "ライト", dark: "ダーク", th_alps: "山の湖", th_morning: "海辺の朝", th_sunset: "海辺の夕日", th_mountains: "山の夕焼け", th_aurora: "オーロラ", th_cabin: "夜の山小屋" },
    ko: { title: "설정", lang: "언어", sub: "구독", help: "도움말 및 약관", signIn: "로그인 또는 가입", letterSub: "보내는 사람과 받는 사람", notifySub: "통화 및 메시지", helpSub: "지원, 약관, 공유", back: "뒤로" , theme: "테마", light: "라이트", dark: "다크", th_alps: "산속 호수", th_morning: "바닷가의 아침", th_sunset: "바닷가의 노을", th_mountains: "산의 노을", th_aurora: "오로라", th_cabin: "밤의 오두막" },
    zh: { title: "設定", lang: "語言", sub: "訂閱", help: "說明與條款", signIn: "登入或註冊", letterSub: "寄件人與收件人", notifySub: "通話與訊息", helpSub: "支援、條款、分享", back: "返回" , theme: "主題", light: "淺色", dark: "深色", th_alps: "山間湖泊", th_morning: "海邊的早晨", th_sunset: "海邊的夕陽", th_mountains: "山間夕陽", th_aurora: "北極光", th_cabin: "夜晚小屋" },
    ar: { title: "الإعدادات", lang: "اللغة", sub: "الاشتراك", help: "المساعدة والشروط", signIn: "سجّل الدخول أو أنشئ حسابًا", letterSub: "من وإلى من", notifySub: "المكالمات والرسائل", helpSub: "الدعم، الشروط، المشاركة", back: "رجوع" , theme: "السمة", light: "فاتحة", dark: "داكنة", th_alps: "بحيرة جبلية", th_morning: "صباح على البحر", th_sunset: "غروب على البحر", th_mountains: "غروب في الجبال", th_aurora: "الشفق القطبي", th_cabin: "كوخ ليلي" },
    id: { title: "Pengaturan", lang: "Bahasa", sub: "Langganan", help: "Bantuan dan ketentuan", signIn: "Masuk atau daftar", letterSub: "Dari siapa dan untuk siapa", notifySub: "Panggilan dan pesan", helpSub: "Bantuan, ketentuan, bagikan", back: "Kembali" , theme: "Tema", light: "Terang", dark: "Gelap", th_alps: "Danau gunung", th_morning: "Pagi di tepi laut", th_sunset: "Senja di tepi laut", th_mountains: "Senja di pegunungan", th_aurora: "Cahaya utara", th_cabin: "Pondok malam" }
  };
  const tr = key => {
    const code = (document.documentElement.lang || "ru").toLowerCase().split("-")[0];
    return (TEXT[code] || TEXT.en)[key] || TEXT.ru[key];
  };

  // Линейные значки в стиле остальных (stroke, 24×24); у каждого раздела свой цвет плитки.
  const ICONS = {
    lang: '<circle cx="12" cy="12" r="8.4"/><path d="M3.8 12h16.4M12 3.6c2.4 2.4 3.4 5.2 3.4 8.4s-1 6-3.4 8.4c-2.4-2.4-3.4-5.2-3.4-8.4s1-6 3.4-8.4Z"/>',
    letter: '<rect x="3.6" y="5.4" width="16.8" height="13.2" rx="2.2"/><path d="m4.4 7.4 7.6 5.4 7.6-5.4"/>',
    sound: '<path d="M4.6 9.6h3.2L12.4 5.6v12.8L7.8 14.4H4.6Z"/><path d="M15.6 9.2a4 4 0 0 1 0 5.6M18 6.8a7.4 7.4 0 0 1 0 10.4"/>',
    look: '<rect x="3.8" y="5" width="16.4" height="14" rx="2.2"/><circle cx="8.8" cy="10" r="1.6"/><path d="m4.6 17 4.8-4.4 4 3.4 2.8-2.2 3.2 2.8"/>',
    notify: '<path d="M6.6 17.2V11a5.4 5.4 0 1 1 10.8 0v6.2Zm0 0h10.8M10.4 20h3.2"/>',
    wallet: '<path d="M12 3.6 13.8 9l5.4 1.8-5.4 1.8L12 18l-1.8-5.4L4.8 10.8 10.2 9Z"/>',
    sub: '<path d="M7 4.6h10l3.4 4.6L12 19.6 3.6 9.2Z"/><path d="M3.6 9.2h16.8M9.4 4.6 8 9.2l4 10.4 4-10.4-1.4-4.6"/>',
    help: '<circle cx="12" cy="12" r="8.4"/><path d="M9.6 9.6a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.5v.6"/><circle cx="12" cy="16.8" r=".5"/>',
    account: '<circle cx="12" cy="8.4" r="3.8"/><path d="M4.8 20c.7-3.7 3.7-5.6 7.2-5.6s6.5 1.9 7.2 5.6"/>'
  };
  const icon = key => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[key] || ""}</svg>`;
  const esc = value => String(value ?? "").replace(/[&<>"']/gu, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const textOf = selector => (document.querySelector(selector)?.textContent || "").replace(/\s+/gu, " ").trim();
  // Заголовок раздела без эмодзи в начале («🔔 Уведомления» → «Уведомления»).
  const plain = value => String(value || "").replace(/^[^\p{L}\p{N}]+/u, "").trim();

  // Страницы, где видна кнопка «Сохранить настройки», и где — «Создать QR-код».
  const SAVE_PAGES = new Set(["letter", "sound"]);
  const QR_PAGES = new Set(["letter"]);

  const state = { panel: null, current: null, quiet: false };

  function section(key) { return state.panel?.querySelector(`.settings-section[data-gls="${key}"]`) || null; }

  function makeSection(key, after) {
    const box = document.createElement("details");
    box.className = "settings-section";
    box.dataset.gls = key;
    box.innerHTML = `<summary></summary><div class="settings-section-body"></div>`;
    after.after(box);
    return box;
  }

  // Раскладываем разделы: «Язык» отдельно от «Письма», «Приложение» делим на «Подписку» и «Помощь».
  function arrange() {
    const panel = state.panel;
    const mark = (titleId, key) => { const box = document.getElementById(titleId)?.closest("details"); if (box) box.dataset.gls = key; return box; };
    const letter = mark("settingsLetterTitle", "letter");
    mark("settingsLookTitle", "look");
    mark("settingsSoundTitle", "sound");
    mark("settingsAccountTitle", "account");
    const app = mark("settingsAppTitle", "sub");
    const wallet = document.getElementById("settingsWallet");
    if (wallet) wallet.dataset.gls = "wallet";

    const picker = panel.querySelector(".language-picker");
    if (letter && picker && !section("lang")) makeSection("lang", letter).querySelector(".settings-section-body").append(picker);

    if (app && !section("help")) {
      const help = makeSection("help", app).querySelector(".settings-section-body");
      ["#shareAppButton", "#installButton", "#installHint", "#contactLink", ".legal-links"].forEach(selector => {
        const node = app.querySelector(selector);
        if (node) help.append(node);
      });
    }

    const header = panel.querySelector(".panel-header");
    if (header && !header.querySelector(".gls-back")) {
      const back = document.createElement("button");
      back.className = "gls-back";
      back.type = "button";
      back.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5 8 12l7 7"/></svg>`;
      back.addEventListener("click", showMenu);
      const title = document.createElement("h2");
      title.className = "gls-title";
      title.id = "glsTitle";
      const lead = header.firstElementChild;
      lead.prepend(back, title);
      panel.setAttribute("aria-labelledby", "glsTitle");
    }

    if (!panel.querySelector(".gls-nav")) {
      const nav = document.createElement("nav");
      nav.className = "gls-nav";
      header.after(nav);
      nav.addEventListener("click", event => {
        const key = event.target.closest("[data-open]")?.dataset.open;
        const box = key && section(key);
        if (box) showPage(box);
      });
    }
  }

  function label(key) {
    if (key === "lang") return tr("lang");
    if (key === "sub") return tr("sub");
    if (key === "help") return tr("help");
    return plain(section(key)?.querySelector("summary")?.textContent) || tr("title");
  }

  function subtitle(key) {
    switch (key) {
      case "lang": return textOf(".language-picker button.is-active span");
      case "letter": {
        const from = document.getElementById("settingsSenderName")?.value.trim();
        const to = document.getElementById("settingsRecipientName")?.value.trim();
        return from && to ? `${from} → ${to}` : tr("letterSub");
      }
      case "look": return textOf('.scene-grid button[aria-checked="true"] span');
      case "sound": return textOf(".track-picker legend");
      case "notify": return tr("notifySub");
      case "sub": return textOf("#subscriptionStatus");
      case "help": return tr("helpSub");
      default: return "";
    }
  }

  function row(key) {
    if (!section(key)) return "";
    const sub = subtitle(key);
    return `<button class="gls-row" type="button" data-open="${key}"><i class="gls-tile" data-tile="${key}">${icon(key)}</i>
      <span class="gls-copy"><b>${esc(label(key))}</b>${sub ? `<small>${esc(sub)}</small>` : ""}</span><em class="gls-chev" aria-hidden="true"></em></button>`;
  }

  function profileCard() {
    if (!section("account")) return "";
    const signedIn = document.getElementById("accountCard")?.dataset.signedIn === "true";
    const photo = document.getElementById("accountAvatarImage");
    const avatar = signedIn && photo && !photo.hidden && photo.getAttribute("src")
      ? `<img src="${esc(photo.getAttribute("src"))}" alt="" />`
      : signedIn ? esc(textOf("#accountAvatar") || "G") : icon("account");
    const name = signedIn ? textOf("#accountUserName") : label("account");
    const line = signedIn ? textOf("#accountUserEmail") : tr("signIn");
    const plan = signedIn ? textOf("#accountPlanBadge") : "";
    return `<button class="gls-profile" type="button" data-open="account"><span class="gls-avatar">${avatar}</span>
      <span class="gls-copy"><b>${esc(name)}</b><small>${esc(line)}</small></span>${plan && plan !== "…" ? `<em class="gls-plan">${esc(plan)}</em>` : ""}<em class="gls-chev" aria-hidden="true"></em></button>`;
  }

  function renderMenu() {
    const nav = state.panel?.querySelector(".gls-nav");
    if (!nav) return;
    const group = keys => { const rows = keys.map(row).join(""); return rows ? `<div class="gls-group">${rows}</div>` : ""; };
    nav.innerHTML = profileCard() + group(["lang", "letter", "sound", "look"]) + group(["notify", "wallet", "sub"]) + group(["help"]);
  }

  function setTitle(text) {
    const title = state.panel?.querySelector(".gls-title");
    if (title) title.textContent = text;
  }

  function closeAll(except) {
    state.quiet = true;
    state.panel.querySelectorAll(".settings-section").forEach(box => { if (box !== except && box.open) box.open = false; });
    state.quiet = false;
  }

  function showMenu() {
    if (!state.panel) return;
    state.current = null;
    closeAll(null);
    state.panel.querySelectorAll(".settings-section.gls-current").forEach(box => box.classList.remove("gls-current"));
    state.panel.classList.add("gls-menu");
    state.panel.removeAttribute("data-gls-page");
    setTitle(tr("title"));
    renderMenu();
    state.panel.scrollTop = 0;
  }

  function showPage(box) {
    if (!state.panel || !box) return;
    const key = box.dataset.gls || (box.id === "settingsNotify" ? "notify" : "");
    if (box.id === "settingsNotify") box.dataset.gls = "notify";
    state.current = box;
    closeAll(box);
    state.panel.querySelectorAll(".settings-section.gls-current").forEach(other => other.classList.remove("gls-current"));
    box.classList.add("gls-current");
    state.quiet = true;
    if (!box.open) box.open = true;
    state.quiet = false;
    state.panel.classList.remove("gls-menu");
    state.panel.dataset.glsPage = key;
    state.panel.classList.toggle("gls-has-save", SAVE_PAGES.has(key));
    state.panel.classList.toggle("gls-has-qr", QR_PAGES.has(key));
    setTitle(label(key));
    state.panel.scrollTop = 0;
  }

  // ——— Тема (02.11): фон и тон приложения, кроме звонка. Само применение — в home-boot.js (GlowLetterTheme). ———
  function syncThemes() {
    const theme = window.GlowLetterTheme;
    const current = theme?.get?.() || "alps";
    const legend = document.getElementById("scenePickerTitle");
    if (legend) legend.textContent = tr("theme");
    document.querySelectorAll(".theme-grid [data-theme-id]").forEach(button => {
      const id = button.dataset.themeId;
      const on = id === current;
      button.classList.toggle("is-active", on);
      button.setAttribute("aria-checked", String(on));
      const name = button.querySelector("span");
      const tag = button.querySelector("em");
      if (name) name.textContent = tr(`th_${id}`);
      if (tag) tag.textContent = tr(button.dataset.look === "light" ? "light" : "dark");
    });
  }

  function init() {
    const layer = document.getElementById("settingsLayer");
    const panel = layer?.querySelector(".settings-panel");
    if (!panel || state.panel) return;
    state.panel = panel;
    panel.classList.add("gls");
    syncThemes();
    panel.addEventListener("click", event => {
      const button = event.target.closest(".theme-grid [data-theme-id]");
      if (!button) return;
      window.GlowLetterTheme?.set?.(button.dataset.themeId);
      try { navigator.vibrate?.(8); } catch {}
    });
    addEventListener("glowletter-theme", () => { syncThemes(); if (!state.current) renderMenu(); });
    arrange();
    showMenu();

    // Каждое открытие настроек начинается со списка разделов.
    document.getElementById("settingsButton")?.addEventListener("click", showMenu);
    // Код, который сам раскрывает раздел (например «Войти» → «Аккаунт»), сразу ведёт на его страницу.
    panel.addEventListener("toggle", event => {
      const box = event.target;
      if (state.quiet || !(box instanceof HTMLDetailsElement) || !box.classList.contains("settings-section") || !box.open || box === state.current) return;
      showPage(box);
    }, true);
    // Системная кнопка «назад» на странице раздела возвращает к списку, а не закрывает настройки.
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && state.current && layer.classList.contains("is-open")) { event.stopImmediatePropagation(); showMenu(); }
    }, true);
    // Подписи (имя, язык, план) меняются — список обновляется, пока он на экране.
    const refresh = () => { syncThemes(); if (!state.current) { setTitle(tr("title")); renderMenu(); } else setTitle(label(state.current.dataset.gls)); };
    new MutationObserver(refresh).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    ["#accountCard", "#accountUserName", "#accountPlanBadge", "#subscriptionStatus"].forEach(selector => {
      const node = document.querySelector(selector);
      if (node) new MutationObserver(() => { if (!state.current) renderMenu(); }).observe(node, { attributes: true, childList: true, characterData: true, subtree: true });
    });
    // «Уведомления» добавляются позже (только в Android) — подхватываем, когда появятся.
    new MutationObserver(() => { const notify = document.getElementById("settingsNotify"); if (notify && !notify.dataset.gls) { notify.dataset.gls = "notify"; if (!state.current) renderMenu(); } })
      .observe(panel, { childList: true });
  }

  window.GlowLetterSettingsMenu = Object.freeze({ showMenu, open: key => { const box = section(key); if (box) showPage(box); } });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
