/* Пока грузятся остальные скрипты (на телефоне — несколько секунд), прежний главный экран не мелькает:
   сразу фон главного экрана с чатами. home-chats.js снимает класс, когда экран готов; если что-то не загрузилось —
   через 12 с класс снимается сам и видно прежнее оформление. Письмо по ссылке (rid/moment/audio) не прячем. */
(() => {
  "use strict";
  // Темы (владелец 02.11): фон и тон всего приложения, кроме звонка — у звонка своя картинка, её не трогаем.
  // Ставим до первой отрисовки, чтобы не мигала прежняя тема. По умолчанию — «Горное озеро» (светлая).
  const THEMES = {
    alps: ["assets/scenes/alpine-lake.webp", "light"],
    morning: ["assets/scenes/sea-morning.webp", "light"],
    sunset: ["assets/scenes/sea-sunset.webp", "dark"],
    mountains: ["assets/scenes/mountain-sunset.webp", "dark"],
    aurora: ["assets/scenes/aurora.webp", "dark"],
    cabin: ["assets/scenes/call-cabin-moon.webp", "dark"]
  };
  const THEME_KEY = "glowletterThemeV1";
  const root = document.documentElement;
  const applyTheme = id => {
    const theme = THEMES[id] ? id : "alps";
    const [picture, look] = THEMES[theme];
    root.dataset.theme = theme;
    root.dataset.look = look;
    root.style.setProperty("--gl-scene", `url("${picture}")`);
    root.style.setProperty("--scene-image", `url("${picture}")`);
    root.style.setProperty("--mobile-scene-image", `url("${picture}")`);
    return theme;
  };
  let saved = "";
  try { saved = localStorage.getItem(THEME_KEY) || ""; } catch { /* storage can be unavailable */ }
  let current = applyTheme(saved);
  window.GlowLetterTheme = Object.freeze({
    list: Object.keys(THEMES),
    picture: id => (THEMES[id] || THEMES.alps)[0],
    look: id => (THEMES[id] || THEMES.alps)[1],
    get: () => current,
    set(id) {
      current = applyTheme(id);
      try { localStorage.setItem(THEME_KEY, current); } catch { /* storage can be unavailable */ }
      window.dispatchEvent(new CustomEvent("glowletter-theme", { detail: { theme: current } }));
      return current;
    }
  });

  try {
    const params = new URLSearchParams(location.search);
    if (["rid", "moment", "audio"].some(key => params.has(key)) && !sessionStorage.getItem("glhTab")) return;
  } catch { /* storage can be unavailable */ }
  root.classList.add("glh-pending");
  setTimeout(() => root.classList.remove("glh-pending"), 12000);
})();
