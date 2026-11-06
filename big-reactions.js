/* «Большие реакции» (владелец 01.11: «лев, цветы, корона… все в восторге от этих реакций»).
   Картинка на весь экран у друга — в звонке и в чате. С подпиской GlowLetter или «Навсегда» — бесплатно,
   без неё — за светлячки. Цену и право решает только сервер (glowletter_fx_send); здесь — плитки и отправка. */
(() => {
  "use strict";
  if (window.GlowLetterBigFx) return;

  // Запасной список на случай, если сервер ещё не ответил; цены всё равно проверяет сервер.
  const FALLBACK = [["lux_lion", 199], ["lux_crown", 149], ["lux_flowers", 49], ["lux_phoenix", 199], ["lux_unicorn", 149], ["lux_galaxy", 199],
    ["lux_rocket", 99], ["lux_fireheart", 49], ["lux_roseheart", 99], ["lux_diamond", 149], ["lux_goldrose", 79], ["lux_butterfly", 49],
    ["lux_fireworks", 79], ["lux_swans", 99], ["lux_roses", 79], ["lux_hballoons", 49]].map(([id, price]) => ({ id, price, free: false }));
  const state = { list: FALLBACK, loadedAt: 0, loading: null, sending: false };

  const cloud = () => window.GlowLetterCloud || null;
  const fx = () => window.GlowLetterGiftFx || null;
  const shop = () => window.GlowLetterShop || null;
  const language = () => String(window.GlowLetterApp?.getState?.().language || document.documentElement.lang || "ru").toLowerCase();
  const TEXT = () => window.GLOWLETTER_BIGFX_TEXT || {};
  const tr = (key, values = {}) => String(TEXT()[language()]?.[key] ?? TEXT().en?.[key] ?? TEXT().ru?.[key] ?? key).replace(/\{(\w+)\}/g, (all, name) => values[name] ?? "");
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const itemName = id => shop()?.text?.(id) || id;
  const num = value => shop()?.number?.(value) || String(value);
  const notify = (text, ms = 3200) => window.GlowLetterApp?.notify?.(text, ms);
  const coin = `<svg class="gbx-coin" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#f2c96f" stroke="#a8741f" stroke-width="1.2"/><path d="M12 17.2s-4.3-2.6-5.5-5.2c-.8-1.9.4-4.1 2.5-4.1 1.2 0 2.1.7 3 1.8.9-1.1 1.8-1.8 3-1.8 2.1 0 3.3 2.2 2.5 4.1-1.2 2.6-5.5 5.2-5.5 5.2Z" fill="#a3213a"/></svg>`;

  async function load() {
    if (Date.now() - state.loadedAt < 120_000) return state.list;
    if (state.loading) return state.loading;
    const db = cloud()?.getClient?.();
    if (!db || !cloud()?.getState?.().signedIn) return state.list;
    state.loading = db.rpc("glowletter_fx_reactions").then(({ data, error }) => {
      if (!error && Array.isArray(data) && data.length) { state.list = data.filter(row => fx()?.hasScene?.(row.id)); state.loadedAt = Date.now(); }
      return state.list;
    }).catch(() => state.list).finally(() => { state.loading = null; });
    return state.loading;
  }

  // Плитки для листа реакций: картинка, внизу цена или «Бесплатно». attrs(id) — атрибуты кнопки у вызывающего.
  function grid(attrs) {
    const free = state.list.some(row => row.free);
    return `<p class="gbx-note">${esc(free ? tr("freeNote") : tr("sub"))}</p>
      <div class="gbx-grid">${state.list.map(row => `<button class="gbx-tile" type="button" ${attrs(row.id)} aria-label="${esc(itemName(row.id))}"><span class="gbx-pic">${fx()?.art?.(row.id) || ""}</span><span class="gbx-price${row.free ? " is-free" : ""}">${row.free ? esc(tr("free")) : `${coin}${esc(num(row.price))}`}</span></button>`).join("")}</div>
      ${free ? "" : `<p class="gbx-note is-small">${esc(tr("freeNote"))}</p>`}`;
  }

  // Отправка: сервер списывает светлячки (или пропускает по подписке), затем эффект у себя.
  // to — id друга для чата (сервер сам пишет сообщение), пусто — реакция в звонке.
  async function send(id, to = null) {
    if (state.sending) return null;
    const db = cloud()?.getClient?.();
    if (!db || !cloud()?.getState?.().signedIn) { notify(shop()?.text?.("signIn") || tr("error")); return null; }
    state.sending = true;
    try {
      const { data, error } = await db.rpc("glowletter_fx_send", { p_kind: id, p_to: to });
      if (error) throw new Error(error.message || "error");
      shop()?.refresh?.();
      return data || {};
    } catch (error) {
      const code = String(error?.message || "");
      if (code === "not_enough_coins") { notify(shop()?.text?.("not_enough_coins") || code, 3600); setTimeout(() => shop()?.open?.("coins"), 600); }
      else if (code === "rate_limited") notify(tr("rate"));
      else notify(tr("error"));
      return null;
    } finally { state.sending = false; }
  }

  const has = id => state.list.some(row => row.id === id) || FALLBACK.some(row => row.id === id);
  // Пришло от друга: админ шлёт любой подарок магазина — показываем всё, для чего есть эффект.
  const playable = id => has(id) || (/^[a-z_]{2,24}$/.test(String(id || "")) && Boolean(fx()?.hasScene?.(id)));
  addEventListener("glowletter-cloud-session", () => { state.loadedAt = 0; });
  addEventListener("glowletter-access-change", () => { state.loadedAt = 0; });

  window.GlowLetterBigFx = Object.freeze({ load, grid, send, has, playable, text: tr, name: itemName });
})();
