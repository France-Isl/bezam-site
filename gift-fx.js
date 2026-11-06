/* Роскошные подарки на весь экран (владелец 31.10): «Букет роз» — букет появляется в центре, во все стороны
   разлетаются сердечки, лепестки и искры, букет растёт, покачивается и улетает вверх, лепестки ещё падают;
   «Мишка с шариками» — мишка опускается на шариках-сердечках и улетает на них; «Волшебная шкатулка» —
   шкатулка дрожит, крышка слетает, из лучей поднимается сияющее сердце. Касание закрывает эффект. */
(() => {
  "use strict";

  const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = list => list[Math.floor(Math.random() * list.length)];
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const shopText = (key, values) => window.GlowLetterShop?.text?.(key, values) || "";

  const HEART_PATH = "M0 34C-12 24-44 6-44-16c0-16 12-26 24-26 10 0 17 6 20 14 3-8 10-14 20-14 12 0 24 10 24 26 0 22-32 40-44 50Z";
  const heart = color => `<svg viewBox="-46 -44 92 82" aria-hidden="true"><path d="${HEART_PATH}" fill="${color}"/><ellipse cx="-20" cy="-20" rx="9" ry="5" transform="rotate(-35 -20 -20)" fill="#fff" opacity=".45"/></svg>`;
  const glowHeart = `<svg viewBox="-50 -48 100 90" aria-hidden="true"><path d="${HEART_PATH}" fill="rgba(255,90,130,.18)" stroke="#ffd0dc" stroke-width="5"/></svg>`;
  const star = color => `<svg viewBox="-20 -20 40 40" aria-hidden="true"><path d="M0-19C2-5 5-2 19 0 5 2 2 5 0 19-2 5-5 2-19 0-5-2-2-5 0-19Z" fill="${color}"/></svg>`;

  const PARTICLES = {
    heart: () => ({ html: heart(pick(["#e3203f", "#ff4d6d", "#ff7aa2", "#ffb3c7", "#c9133a"])), size: rand(18, 38), cls: "is-heart" }),
    glowHeart: () => ({ html: glowHeart, size: rand(26, 44), cls: "is-heart is-glow" }),
    petal: () => ({ html: "", size: rand(14, 26), cls: `is-petal${Math.random() < .3 ? " is-pink" : ""}` }),
    spark: () => ({ html: "", size: rand(4, 9), cls: "is-spark" }),
    star: () => ({ html: star(pick(["#ffe39a", "#f2c96f", "#fff6d8"])), size: rand(14, 28), cls: "is-star" }),
    confetti: () => ({ html: "", size: rand(7, 12), cls: `is-confetti is-c${Math.floor(rand(0, 4))}` })
  };

  // ——— Картинки подарков ———
  const BEAR = `<svg class="gfx-bear-art" viewBox="0 0 320 460" aria-hidden="true">
    <defs>
      <radialGradient id="gfxFur" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#d9a066"/><stop offset=".6" stop-color="#b07440"/><stop offset="1" stop-color="#7a4a22"/></radialGradient>
      <radialGradient id="gfxFurLight" cx=".45" cy=".35"><stop offset="0" stop-color="#fbe3bd"/><stop offset="1" stop-color="#e2b783"/></radialGradient>
      <radialGradient id="gfxBalloonRed" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ff7d93"/><stop offset=".55" stop-color="#e3203f"/><stop offset="1" stop-color="#8e0b25"/></radialGradient>
      <radialGradient id="gfxBalloonPink" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffd1de"/><stop offset=".55" stop-color="#ff7aa2"/><stop offset="1" stop-color="#c23c69"/></radialGradient>
      <radialGradient id="gfxBalloonGold" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff6d8"/><stop offset=".55" stop-color="#f2c96f"/><stop offset="1" stop-color="#a8701f"/></radialGradient>
    </defs>
    <g fill="none" stroke="#f7e6c6" stroke-width="1.6" opacity=".9">
      <path d="M96 150C110 210 190 250 222 296"/><path d="M166 112C170 190 200 250 222 296"/><path d="M238 158C228 210 226 250 222 296"/>
    </g>
    <g class="gfx-balloon" style="--d:0s"><g transform="translate(96 110)"><path d="${HEART_PATH}" fill="url(#gfxBalloonRed)"/><ellipse cx="-22" cy="-22" rx="11" ry="6" transform="rotate(-35 -22 -22)" fill="#fff" opacity=".55"/><path d="M0 34l-5 8h10Z" fill="#8e0b25"/></g></g>
    <g class="gfx-balloon" style="--d:-.8s"><g transform="translate(166 70) scale(1.08)"><path d="${HEART_PATH}" fill="url(#gfxBalloonGold)"/><ellipse cx="-22" cy="-22" rx="11" ry="6" transform="rotate(-35 -22 -22)" fill="#fff" opacity=".6"/><path d="M0 34l-5 8h10Z" fill="#a8701f"/></g></g>
    <g class="gfx-balloon" style="--d:-1.5s"><g transform="translate(238 118) scale(.94)"><path d="${HEART_PATH}" fill="url(#gfxBalloonPink)"/><ellipse cx="-22" cy="-22" rx="11" ry="6" transform="rotate(-35 -22 -22)" fill="#fff" opacity=".6"/><path d="M0 34l-5 8h10Z" fill="#c23c69"/></g></g>
    <g stroke="#5e3517" stroke-opacity=".55" stroke-width="2.2">
    <ellipse cx="118" cy="430" rx="32" ry="23" fill="url(#gfxFur)"/><ellipse cx="202" cy="430" rx="32" ry="23" fill="url(#gfxFur)"/>
    <ellipse cx="116" cy="434" rx="17" ry="12" fill="url(#gfxFurLight)"/><ellipse cx="204" cy="434" rx="17" ry="12" fill="url(#gfxFurLight)"/>
    <ellipse cx="160" cy="372" rx="72" ry="74" fill="url(#gfxFur)"/>
    <ellipse cx="160" cy="388" rx="44" ry="46" fill="url(#gfxFurLight)"/>
    <path d="M160 408c-4-4-17-11-17-20 0-5 4-8 8-8 4 0 7 3 9 6 2-3 5-6 9-6 4 0 8 3 8 8 0 9-13 16-17 20Z" fill="#e3203f"/>
    <ellipse cx="100" cy="356" rx="20" ry="35" transform="rotate(28 100 356)" fill="url(#gfxFur)"/>
    <ellipse cx="214" cy="322" rx="19" ry="36" transform="rotate(-38 214 322)" fill="url(#gfxFur)"/>
    <circle cx="224" cy="298" r="16" fill="url(#gfxFurLight)"/>
    <circle cx="110" cy="212" r="23" fill="url(#gfxFur)"/><circle cx="210" cy="212" r="23" fill="url(#gfxFur)"/>
    <circle cx="111" cy="214" r="12" fill="url(#gfxFurLight)"/><circle cx="209" cy="214" r="12" fill="url(#gfxFurLight)"/>
    <circle cx="160" cy="262" r="63" fill="url(#gfxFur)"/>
    </g>
    <ellipse cx="138" cy="226" rx="26" ry="13" transform="rotate(-20 138 226)" fill="#fff" opacity=".16"/>
    <ellipse cx="132" cy="340" rx="18" ry="30" transform="rotate(20 132 340)" fill="#fff" opacity=".1"/>
    <ellipse cx="160" cy="284" rx="31" ry="23" fill="url(#gfxFurLight)"/>
    <ellipse cx="160" cy="272" rx="11" ry="8" fill="#3a2416"/><ellipse cx="157" cy="269" rx="4" ry="2.4" fill="#fff" opacity=".6"/>
    <path d="M160 280v8M150 291c4 4 16 4 20 0" stroke="#3a2416" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="136" cy="250" r="7.5" fill="#24150c"/><circle cx="184" cy="250" r="7.5" fill="#24150c"/>
    <circle cx="138.5" cy="247.5" r="2.6" fill="#fff"/><circle cx="186.5" cy="247.5" r="2.6" fill="#fff"/>
    <ellipse cx="122" cy="278" rx="11" ry="6.5" fill="#ff7a8c" opacity=".45"/><ellipse cx="198" cy="278" rx="11" ry="6.5" fill="#ff7a8c" opacity=".45"/>
    <path d="M160 322l-28-14v28Zm0 0l28-14v28Z" fill="#c9133a"/><circle cx="160" cy="322" r="7" fill="#e3203f"/>
  </svg>`;

  const BOX_BODY = `<svg viewBox="0 0 300 300" aria-hidden="true">
    <defs>
      <linearGradient id="gfxBoxRed" x1="0" x2="1"><stop offset="0" stop-color="#7d0d24"/><stop offset=".35" stop-color="#c2183a"/><stop offset=".7" stop-color="#d42a4a"/><stop offset="1" stop-color="#8e0f29"/></linearGradient>
      <linearGradient id="gfxBoxShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".08"/><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>
      <linearGradient id="gfxGold" x1="0" x2="1"><stop offset="0" stop-color="#a8701f"/><stop offset=".45" stop-color="#ffe39a"/><stop offset=".6" stop-color="#f2c96f"/><stop offset="1" stop-color="#a8701f"/></linearGradient>
    </defs>
    <ellipse cx="150" cy="150" rx="96" ry="26" fill="#ffe7a8" opacity=".55"/>
    <rect x="62" y="146" width="176" height="128" rx="10" fill="url(#gfxBoxRed)"/>
    <g fill="#ffd36e" opacity=".2">
      <path d="M88 190c-3-3-9-6-9-11 0-3 2-4 4-4s4 2 5 3c1-1 3-3 5-3s4 1 4 4c0 5-6 8-9 11Z"/><path d="M212 196c-3-3-9-6-9-11 0-3 2-4 4-4s4 2 5 3c1-1 3-3 5-3s4 1 4 4c0 5-6 8-9 11Z"/>
      <path d="M104 244c-3-3-9-6-9-11 0-3 2-4 4-4s4 2 5 3c1-1 3-3 5-3s4 1 4 4c0 5-6 8-9 11Z"/><path d="M196 250c-3-3-9-6-9-11 0-3 2-4 4-4s4 2 5 3c1-1 3-3 5-3s4 1 4 4c0 5-6 8-9 11Z"/>
      <path d="M118 210c-2-2-6-4-6-7 0-2 1-3 3-3 1 0 2 1 3 2 1-1 2-2 3-2 2 0 3 1 3 3 0 3-4 5-6 7Z"/><path d="M182 226c-2-2-6-4-6-7 0-2 1-3 3-3 1 0 2 1 3 2 1-1 2-2 3-2 2 0 3 1 3 3 0 3-4 5-6 7Z"/>
    </g>
    <rect x="62" y="146" width="176" height="128" rx="10" fill="url(#gfxBoxShade)"/>
    <rect x="62" y="146" width="176" height="16" fill="#000" opacity=".22"/>
    <rect x="137" y="146" width="26" height="128" fill="url(#gfxGold)"/>
    <rect x="63.5" y="147.5" width="173" height="125" rx="9" fill="none" stroke="url(#gfxGold)" stroke-width="3"/>
    <rect x="70" y="150" width="8" height="118" rx="4" fill="#fff" opacity=".12"/>
  </svg>`;
  const BOX_LID = `<svg viewBox="0 0 300 300" aria-hidden="true">
    <rect x="50" y="112" width="200" height="40" rx="8" fill="url(#gfxBoxRed)"/>
    <rect x="50" y="112" width="200" height="10" rx="5" fill="#fff" opacity=".14"/>
    <rect x="51.5" y="113.5" width="197" height="37" rx="7" fill="none" stroke="url(#gfxGold)" stroke-width="3"/>
    <rect x="135" y="112" width="30" height="40" fill="url(#gfxGold)"/>
    <ellipse cx="122" cy="96" rx="30" ry="16" transform="rotate(-24 122 96)" fill="none" stroke="url(#gfxGold)" stroke-width="11"/>
    <ellipse cx="178" cy="96" rx="30" ry="16" transform="rotate(24 178 96)" fill="none" stroke="url(#gfxGold)" stroke-width="11"/>
    <circle cx="150" cy="108" r="12" fill="url(#gfxGold)"/>
  </svg>`;
  const BOX_HEART = `<svg viewBox="-50 -48 100 90" aria-hidden="true">
    <defs><radialGradient id="gfxHeartGlow" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="#ffc2d2"/><stop offset=".75" stop-color="#ff4d6d"/><stop offset="1" stop-color="#c9133a"/></radialGradient></defs>
    <path d="${HEART_PATH}" fill="url(#gfxHeartGlow)"/>
  </svg>`;

  // У каждой копии рисунка свои id градиентов: иначе спрятанная карточка магазина «съедает» цвета эффекта.
  let seq = 0;
  const uniq = html => { const n = ++seq; return html.replace(/(id="|url\(#)(gfx\w+)/g, (all, head, id) => `${head}${id}${n}`); };

  const ROSES_SRC = "assets/gifts/roses.webp?v=131";
  // Картинка для карточек магазина и чата (без анимации).
  const THUMB = {
    lux_roses: `<img class="gfx-thumb" src="${ROSES_SRC}" alt="" decoding="async" loading="lazy">`,
    lux_bear: `<span class="gfx-thumb">${BEAR}</span>`,
    lux_box: `<span class="gfx-thumb is-box"><span class="gfx-box-body">${BOX_BODY}</span><span class="gfx-box-lid">${BOX_LID}</span></span>`
  };

  // ——— Слой и частицы ———
  let current = null;
  const queue = [];

  function spawn(root, kind, keyframes, timing) {
    const spec = PARTICLES[kind]();
    const el = document.createElement("i");
    el.className = `gfx-p ${spec.cls}`;
    el.style.width = el.style.height = `${spec.size}px`;
    el.innerHTML = spec.html;
    root.append(el);
    const animation = el.animate(keyframes, { fill: "both", ...timing });
    animation.onfinish = () => el.remove();
    return animation;
  }

  // Взрыв из точки: частицы летят во все стороны, чуть оседают и гаснут.
  function burst(root, kinds, count, cx, cy, power = 1, delay = 0) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rand(-.25, .25);
      const dist = rand(120, Math.max(innerWidth, innerHeight) * .62) * power;
      const x = Math.cos(angle) * dist, y = Math.sin(angle) * dist;
      const spin = rand(-260, 260);
      spawn(root, pick(kinds), [
        { transform: `translate(${cx}px, ${cy}px) translate(-50%, -50%) scale(.2) rotate(0deg)`, opacity: 0 },
        { transform: `translate(${cx + x * .55}px, ${cy + y * .55}px) translate(-50%, -50%) scale(1.1) rotate(${spin * .5}deg)`, opacity: 1, offset: .35 },
        { transform: `translate(${cx + x}px, ${cy + y + rand(40, 120)}px) translate(-50%, -50%) scale(.8) rotate(${spin}deg)`, opacity: 0 }
      ], { duration: rand(1500, 2500), delay: delay + rand(0, 140), easing: "cubic-bezier(.12,.75,.3,1)" });
    }
  }

  // Дождь сверху: лепестки и сердечки кружатся и падают через весь экран.
  function fall(root, kinds, count, delay, spread = 2600) {
    for (let i = 0; i < count; i++) {
      const x = rand(-.05, 1.05) * innerWidth, drift = rand(-90, 90), spin = rand(-540, 540);
      spawn(root, pick(kinds), [
        { transform: `translate(${x}px, -40px) rotate(0deg)`, opacity: 0 },
        { transform: `translate(${x + drift * .5}px, ${innerHeight * .35}px) rotate(${spin * .4}deg)`, opacity: 1, offset: .25 },
        { transform: `translate(${x - drift * .3}px, ${innerHeight * .7}px) rotate(${spin * .75}deg)`, opacity: 1, offset: .7 },
        { transform: `translate(${x + drift}px, ${innerHeight + 60}px) rotate(${spin}deg)`, opacity: 0 }
      ], { duration: rand(3200, 5200), delay: delay + rand(0, spread), easing: "linear" });
    }
  }

  // Подъём снизу: сердечки-пузырьки покачиваются и улетают вверх.
  function rise(root, kinds, count, delay, spread = 2400) {
    for (let i = 0; i < count; i++) {
      const x = rand(.04, .96) * innerWidth, sway = rand(20, 50);
      spawn(root, pick(kinds), [
        { transform: `translate(${x}px, ${innerHeight + 40}px) scale(.6)`, opacity: 0 },
        { transform: `translate(${x + sway}px, ${innerHeight * .7}px) scale(1)`, opacity: 1, offset: .25 },
        { transform: `translate(${x - sway}px, ${innerHeight * .35}px) scale(1)`, opacity: 1, offset: .6 },
        { transform: `translate(${x + sway * .5}px, -60px) scale(.9)`, opacity: 0 }
      ], { duration: rand(3000, 4600), delay: delay + rand(0, spread), easing: "ease-in-out" });
    }
  }

  function flash(root, delay, color) {
    const ring = document.createElement("i");
    ring.className = "gfx-flash";
    ring.style.setProperty("--c", color);
    root.append(ring);
    ring.animate([{ transform: "translate(-50%, -50%) scale(.1)", opacity: .95 }, { transform: "translate(-50%, -50%) scale(3.2)", opacity: 0 }],
      { duration: 1100, delay, easing: "cubic-bezier(.2,.7,.3,1)", fill: "both" });
  }

  function caption(root, id, options, delay, until) {
    if (options.silent) return;
    const name = shopText(id);
    const line = options.line || (options.from != null ? shopText("giftFromName", { name: options.from || "GlowLetter" }) : "");
    const box = document.createElement("div");
    box.className = "gfx-caption";
    box.innerHTML = `<b>${esc(name)}</b>${line ? `<span>${esc(line)}</span>` : ""}`;
    root.append(box);
    box.animate([{ opacity: 0, transform: "translate(-50%, 16px)" }, { opacity: 1, transform: "translate(-50%, 0)", offset: .1 }, { opacity: 1, transform: "translate(-50%, 0)", offset: .9 }, { opacity: 0, transform: "translate(-50%, -8px)" }],
      { duration: until - delay, delay, fill: "both", easing: "ease-out" });
  }

  // ——— Сцены ———
  const SCENES = {
    lux_roses(root, stage, options) {
      stage.innerHTML = `<img class="gfx-roses" src="${ROSES_SRC}" alt="" decoding="async">`;
      const img = stage.firstChild;
      img.animate([
        { transform: "translateY(30px) scale(.2)", opacity: 0 },
        { transform: "translateY(0) scale(1.06)", opacity: 1, offset: .1 },
        { transform: "translateY(0) scale(1) rotate(0deg)", offset: .16 },
        { transform: "translateY(0) scale(1.04) rotate(-3deg)", offset: .32 },
        { transform: "translateY(0) scale(1.08) rotate(3deg)", offset: .48 },
        { transform: "translateY(0) scale(1.11) rotate(-2deg)", offset: .62 },
        { transform: "translateY(0) scale(1.12) rotate(0deg)", opacity: 1, offset: .74, easing: "cubic-bezier(.55,0,.8,.3)" },
        { transform: "translateY(-115vh) scale(.92) rotate(2deg)", opacity: 0 }
      ], { duration: 5000, fill: "both" });
      const { cx, cy } = center(stage);
      flash(root, 250, "rgba(255, 120, 150, .55)");
      burst(root, ["heart", "heart", "petal", "petal", "spark", "glowHeart"], 46, cx, cy, 1, 260);
      burst(root, ["petal", "spark", "heart"], 22, cx, cy, .7, 700);
      fall(root, ["petal", "petal", "petal", "heart", "spark"], 40, 1300, 3200);
      rise(root, ["heart", "glowHeart"], 10, 2600, 2200);
      caption(root, "lux_roses", options, 700, 6000);
      return 7600;
    },
    lux_bear(root, stage, options) {
      stage.innerHTML = uniq(`<div class="gfx-bear">${BEAR}</div>`);
      stage.firstChild.animate([
        { transform: "translateY(-95vh) rotate(-4deg)", opacity: 1 },
        { transform: "translateY(0) scale(1.04, .94) rotate(0deg)", offset: .17, easing: "ease-out" },
        { transform: "translateY(-22px) scale(.98, 1.03)", offset: .22 },
        { transform: "translateY(0) scale(1)", offset: .27 },
        { transform: "translateY(-6px) rotate(-3deg)", offset: .4 },
        { transform: "translateY(0) rotate(3deg)", offset: .54 },
        { transform: "translateY(-6px) rotate(-2deg)", offset: .66 },
        { transform: "translateY(0) rotate(0deg)", opacity: 1, offset: .76, easing: "cubic-bezier(.5,0,.8,.4)" },
        { transform: "translateY(-120vh) rotate(4deg)", opacity: 1 }
      ], { duration: 5600, fill: "both" });
      const { cx, cy } = center(stage);
      flash(root, 900, "rgba(255, 210, 140, .5)");
      burst(root, ["heart", "confetti", "confetti", "spark", "star"], 44, cx, cy + 40, 1, 920);
      rise(root, ["heart", "glowHeart", "heart"], 26, 1500, 3000);
      fall(root, ["confetti", "confetti", "star"], 26, 1100, 2800);
      caption(root, "lux_bear", options, 1000, 6200);
      return 7600;
    },
    lux_box(root, stage, options) {
      stage.innerHTML = uniq(`<div class="gfx-box"><i class="gfx-rays"></i><span class="gfx-box-heart">${BOX_HEART}</span><span class="gfx-box-body">${BOX_BODY}</span><span class="gfx-box-lid">${BOX_LID}</span></div>`);
      const box = stage.firstChild;
      const [rays, heartEl, , lid] = box.children;
      box.animate([
        { transform: "scale(.3)", opacity: 0 }, { transform: "scale(1.06)", opacity: 1, offset: .08 }, { transform: "scale(1)", offset: .12 },
        { transform: "rotate(-5deg)", offset: .15 }, { transform: "rotate(5deg)", offset: .18 }, { transform: "rotate(-6deg)", offset: .21 },
        { transform: "rotate(6deg)", offset: .24 }, { transform: "rotate(0deg) scale(1)", offset: .27 },
        { transform: "translateY(0) scale(1)", opacity: 1, offset: .74, easing: "cubic-bezier(.5,0,.8,.4)" },
        { transform: "translateY(-110vh) scale(.9)", opacity: 0 }
      ], { duration: 5400, fill: "both" });
      lid.animate([{ transform: "translate(0, 0) rotate(0deg)", opacity: 1 }, { transform: "translate(70px, -260px) rotate(38deg)", opacity: 0 }],
        { duration: 900, delay: 1480, easing: "cubic-bezier(.2,.8,.4,1)", fill: "both" });
      rays.animate([{ transform: "translate(-50%, -50%) scale(.2) rotate(0deg)", opacity: 0 }, { transform: "translate(-50%, -50%) scale(1.3) rotate(60deg)", opacity: .95, offset: .3 }, { transform: "translate(-50%, -50%) scale(1.5) rotate(180deg)", opacity: 0 }],
        { duration: 3600, delay: 1450, easing: "ease-out", fill: "both" });
      heartEl.animate([
        { transform: "translate(-50%, 0) scale(.2)", opacity: 0 },
        { transform: "translate(-50%, -150px) scale(1.15)", opacity: 1, offset: .3, easing: "ease-out" },
        { transform: "translate(-50%, -150px) scale(1.28)", offset: .45 }, { transform: "translate(-50%, -150px) scale(1.12)", offset: .6 },
        { transform: "translate(-50%, -150px) scale(1.28)", offset: .75 }, { transform: "translate(-50%, -150px) scale(1.15)", opacity: 1 }
      ], { duration: 2600, delay: 1500, fill: "both" });
      const { cx, cy } = center(stage);
      flash(root, 1450, "rgba(255, 220, 150, .6)");
      burst(root, ["star", "star", "spark", "spark", "heart"], 48, cx, cy - 40, 1, 1480);
      fall(root, ["star", "spark", "spark", "heart"], 34, 2000, 3000);
      caption(root, "lux_box", options, 1600, 6200);
      return 7600;
    }
  };

  // ——— Холст для салюта и большого сердца: сотни светящихся частиц без тормозов (владелец 01.11: «ещё цветнее, ещё качественнее») ———
  const light = () => (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 3;
  const sprites = new Map();
  function sprite(key, size, draw) {
    if (sprites.has(key)) return sprites.get(key);
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    draw(canvas.getContext("2d"), size);
    sprites.set(key, canvas);
    return canvas;
  }
  const glowSprite = color => sprite(`glow${color}`, 64, (g, s) => {
    const r = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    r.addColorStop(0, "#fff"); r.addColorStop(.18, color); r.addColorStop(.45, `${color}66`); r.addColorStop(1, `${color}00`);
    g.fillStyle = r; g.fillRect(0, 0, s, s);
  });
  const heartSprite = color => sprite(`heart${color}`, 96, (g, s) => {
    g.translate(s / 2, s / 2 + 4); g.scale(s / 100, s / 100);
    const path = new Path2D(HEART_PATH);
    g.shadowColor = color; g.shadowBlur = 10;
    const r = g.createRadialGradient(-14, -18, 4, 0, 0, 52);
    r.addColorStop(0, "#fff"); r.addColorStop(.25, color); r.addColorStop(1, "#7a0a22");
    g.fillStyle = r; g.fill(path);
    g.shadowBlur = 0; g.globalAlpha = .5; g.fillStyle = "#fff";
    g.beginPath(); g.ellipse(-20, -20, 9, 5, -.6, 0, Math.PI * 2); g.fill();
  });
  const heartPoint = t => ({ x: 16 * Math.sin(t) ** 3, y: -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) });

  function canvasLayer(root) {
    const canvas = document.createElement("canvas");
    canvas.className = "gfx-canvas";
    const ratio = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(innerWidth * ratio);
    canvas.height = Math.round(innerHeight * ratio);
    root.append(canvas);
    const ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);
    const parts = [];
    const timers = [];
    let last = performance.now(), start = last, alive = true;
    const api = {
      W: innerWidth, H: innerHeight, parts, ctx,
      at: (ms, fn) => timers.push({ ms, fn }),
      add: part => { parts.push({ age: 0, alpha: 1, rot: 0, vr: 0, drag: 0, gx: 0, gy: 0, blend: "lighter", ...part }); },
      stop: () => { alive = false; }
    };
    const frame = now => {
      if (!alive || !canvas.isConnected) return;
      const dt = Math.min(.05, (now - last) / 1000);
      last = now;
      const t = now - start;
      for (let i = timers.length - 1; i >= 0; i--) if (t >= timers[i].ms) { timers[i].fn(); timers.splice(i, 1); }
      ctx.clearRect(0, 0, api.W, api.H);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.age += dt;
        if (p.age >= p.life) { parts.splice(i, 1); continue; }
        if (p.update) p.update(p, dt, t);
        else {
          const k = Math.exp(-p.drag * dt);
          p.vx = p.vx * k + p.gx * dt; p.vy = p.vy * k + p.gy * dt;
          p.x += p.vx * dt; p.y += p.vy * dt;
        }
        p.rot += p.vr * dt;
        if (p.trail && Math.random() < p.trail) api.add({ x: p.x, y: p.y, vx: 0, vy: 20, life: .35, size: p.size * .55, img: p.img, fade: 1 });
        const fade = p.fade ? 1 - p.age / p.life : Math.min(1, (p.life - p.age) / .5);
        const flicker = p.flicker ? .65 + Math.random() * .35 : 1;
        ctx.globalCompositeOperation = p.blend;
        ctx.globalAlpha = Math.max(0, p.alpha * fade * flicker);
        const s = p.size * (p.scale || 1);
        if (p.rot) { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.drawImage(p.img, -s / 2, -s / 2, s, s); ctx.restore(); }
        else ctx.drawImage(p.img, p.x - s / 2, p.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    return api;
  }

  const FIRE = ["#ffd36e", "#ff5c8a", "#ff3b3b", "#c77dff", "#7ad7ff", "#fff1c1", "#ff9f43"];

  function rocket(fx, x, y, color, count) {
    const startY = fx.H + 10, time = .55;
    fx.add({ x, y: startY, vx: (x - x) / time, vy: (y - startY) / time, life: time, size: 14, img: glowSprite("#ffe39a"), trail: .9, fade: 0 });
    fx.at(fx.now + time * 1000, () => explode(fx, x, y, color, count));
  }

  function explode(fx, x, y, color, count) {
    const second = pick(FIRE);
    fx.add({ x, y, vx: 0, vy: 0, life: .35, size: 220, img: glowSprite(color), alpha: .55, fade: 1 });
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rand(-.05, .05), speed = rand(180, 420);
      fx.add({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, drag: 1.6, gy: 120, life: rand(1.2, 1.9), size: rand(9, 15), img: glowSprite(Math.random() < .25 ? second : color), flicker: true, trail: .35 });
    }
  }

  function heartFirework(fx, x, y, count, scale) {
    fx.add({ x, y, vx: 0, vy: 0, life: .45, size: 300, img: glowSprite("#ff5c8a"), alpha: .6, fade: 1 });
    for (let i = 0; i < count; i++) {
      const p = heartPoint((i / count) * Math.PI * 2);
      fx.add({ x, y, vx: p.x * scale * 1.7, vy: p.y * scale * 1.7, drag: 1.7, gy: 26, life: rand(2, 2.5), size: rand(11, 16), img: glowSprite(i % 5 === 0 ? "#ffd36e" : "#ff5c8a"), flicker: true });
    }
  }

  SCENES.fireworks = (root, stage, options) => {
    root.classList.add("is-night");
    const fx = canvasLayer(root);
    fx.now = 0;
    const count = light() ? 46 : 72;
    const plan = [[0, .22, .3], [450, .76, .24], [900, .5, .18], [1350, .3, .42], [1800, .7, .4], [2250, .18, .2], [2600, .84, .3]];
    plan.forEach(([ms, px, py]) => fx.at(ms, () => { fx.now = ms; rocket(fx, px * fx.W, py * fx.H, pick(FIRE), count); }));
    fx.at(3300, () => heartFirework(fx, fx.W / 2, fx.H * .36, light() ? 70 : 110, Math.min(fx.W, fx.H) / 70));
    fx.at(3500, () => { for (let i = 0; i < 4; i++) explode(fx, rand(.15, .85) * fx.W, rand(.15, .5) * fx.H, pick(FIRE), count >> 1); });
    caption(root, "fireworks", options, 600, 5600);
    return 6600;
  };

  SCENES.bigheart = (root, stage, options) => {
    const fx = canvasLayer(root);
    const n = light() ? 90 : 150;
    const cx = fx.W / 2, cy = fx.H * .45, R = Math.min(fx.W, fx.H) * .028;
    const colors = ["#ff2d55", "#ff4d6d", "#ff7aa2", "#e3203f", "#ffb3c7"];
    const targets = [];
    while (targets.length < n) {
      const x = rand(-1.25, 1.25), y = rand(-1.1, 1.35);
      const a = x * x + y * y - 1;
      if (a * a * a - x * x * y * y * y <= 0) targets.push({ x: x * R * 12, y: -y * R * 12 + R * 2 });
    }
    const glow = { x: cx, y: cy, vx: 0, vy: 0, life: 3.1, size: 10, img: glowSprite("#ff4d6d"), alpha: .7,
      update: (p, dt, t) => { p.size = Math.min(1, t / 1500) * R * 30 * (1 + .08 * Math.sin(t / 130)); } };
    fx.add(glow);
    let exploded = false;
    targets.forEach((target, i) => {
      const side = Math.floor(rand(0, 4));
      const sx = side === 0 ? -60 : side === 1 ? fx.W + 60 : rand(0, fx.W);
      const sy = side === 2 ? -60 : side === 3 ? fx.H + 60 : rand(0, fx.H);
      const delay = rand(0, .5), size = rand(R * 1.6, R * 2.6);
      fx.add({ x: sx, y: sy, vx: 0, vy: 0, life: 5.2, size, img: heartSprite(pick(colors)), blend: "source-over", rot: rand(-.6, .6), vr: 0,
        update: (p, dt, t) => {
          const s = t / 1000;
          if (!p.free) {
            const k = Math.min(1, Math.max(0, (s - delay) / 1.1));
            const e = 1 - Math.pow(1 - k, 3);
            const beat = s > 1.6 ? 1 + .1 * Math.max(0, Math.sin((s - 1.6) * Math.PI * 2.4)) : 1;
            p.x = sx + (cx + target.x * beat - sx) * e;
            p.y = sy + (cy + target.y * beat - sy) * e;
            p.rot *= .96;
            if (exploded) {
              const dx = p.x - cx, dy = p.y - cy, len = Math.hypot(dx, dy) || 1, speed = rand(380, 900);
              p.free = true; p.vx = dx / len * speed; p.vy = dy / len * speed - 120; p.vr = rand(-5, 5);
              p.life = p.age + rand(1.4, 2.1); p.fade = 1;
            }
          } else {
            p.vx *= Math.exp(-1.2 * dt); p.vy = p.vy * Math.exp(-1.2 * dt) + 420 * dt;
            p.x += p.vx * dt; p.y += p.vy * dt;
          }
        } });
    });
    fx.at(2900, () => {
      exploded = true;
      fx.add({ x: cx, y: cy, vx: 0, vy: 0, life: .5, size: R * 40, img: glowSprite("#ffd1dc"), alpha: .85, fade: 1 });
      for (let i = 0; i < (light() ? 40 : 70); i++) {
        const angle = rand(0, Math.PI * 2), speed = rand(200, 520);
        fx.add({ x: cx, y: cy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, drag: 1.4, gy: 140, life: rand(1, 1.7), size: rand(8, 14), img: glowSprite(pick(["#ffd36e", "#fff1c1", "#ff7aa2"])), flicker: true });
      }
    });
    rise(root, ["heart", "glowHeart"], 14, 3300, 1600);
    caption(root, "bigheart", options, 500, 5400);
    return 6200;
  };

  // ——— Бабочки: стая вылетает из золотой вспышки и разлетается по экрану ———
  const BUTTERFLY = (a, b, c) => `<svg viewBox="-50 -40 100 80" aria-hidden="true">
    <defs><linearGradient id="gfxWing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient></defs>
    <g class="gfx-wing is-l"><path d="M-2-4C-14-30-46-38-46-16c0 14 18 20 42 14Z" fill="url(#gfxWing)"/><path d="M-3 2C-26 6-38 20-30 32c8 10 22 0 27-20Z" fill="url(#gfxWing)" opacity=".92"/><circle cx="-30" cy="-18" r="5" fill="#fff" opacity=".55"/><circle cx="-20" cy="20" r="3.5" fill="#fff" opacity=".45"/></g>
    <g class="gfx-wing is-r"><path d="M2-4C14-30 46-38 46-16c0 14-18 20-42 14Z" fill="url(#gfxWing)"/><path d="M3 2C26 6 38 20 30 32c-8 10-22 0-27-20Z" fill="url(#gfxWing)" opacity=".92"/><circle cx="30" cy="-18" r="5" fill="#fff" opacity=".55"/><circle cx="20" cy="20" r="3.5" fill="#fff" opacity=".45"/></g>
    <ellipse cx="0" cy="2" rx="3.2" ry="17" fill="#3a1f2c"/><path d="M-1-14c-4-8-8-12-12-13M1-14c4-8 8-12 12-13" stroke="#3a1f2c" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </svg>`;
  const WINGS = [["#ffd1e8", "#ff6fa8", "#c2186b"], ["#fff3c4", "#ffb84d", "#e0661a"], ["#d7e8ff", "#8f7dff", "#5b2bd6"], ["#ffe1ec", "#ff9ec0", "#ff4d6d"], ["#e9fff6", "#62d6c4", "#1d8f9c"]];

  SCENES.butterflies = (root, stage, options) => {
    const { cx, cy } = center(stage);
    flash(root, 0, "rgba(255, 214, 150, .65)");
    burst(root, ["spark", "spark", "star"], 30, cx, cy, .8, 60);
    const n = light() ? 12 : 18;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("i");
      el.className = "gfx-p gfx-butterfly";
      const size = rand(46, 84);
      el.style.width = `${size}px`; el.style.height = `${size * .8}px`;
      el.style.setProperty("--flap", `${rand(.16, .26)}s`);
      el.innerHTML = uniq(BUTTERFLY(...pick(WINGS)));
      root.append(el);
      const angle = rand(-Math.PI * .95, -Math.PI * .05) + (i % 2 ? .3 : -.3);
      const far = Math.max(innerWidth, innerHeight) * rand(.7, 1);
      const wob = rand(40, 110) * (Math.random() < .5 ? -1 : 1);
      const path = [0, .25, .5, .75, 1].map(k => {
        const d = far * k;
        const x = cx + Math.cos(angle) * d + Math.sin(k * Math.PI * 2) * wob;
        const y = cy + Math.sin(angle) * d * .9 + Math.cos(k * Math.PI * 1.6) * wob * .4;
        const tilt = Math.cos(angle) * 40 + Math.sin(k * 6) * 14;
        return { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${tilt}deg) scale(${k === 0 ? .2 : 1})`, opacity: k === 0 ? 0 : k === 1 ? 0 : 1 };
      });
      path[1].offset = .2;
      const animation = el.animate(path, { duration: rand(3600, 5200), delay: rand(0, 900), easing: "ease-in-out", fill: "both" });
      animation.onfinish = () => el.remove();
    }
    fall(root, ["spark", "star", "spark"], 26, 900, 3000);
    caption(root, "butterflies", options, 600, 5400);
    return 6400;
  };

  THUMB.fireworks = `<span class="gfx-thumb is-icon"><svg viewBox="-50 -50 100 100" aria-hidden="true">${Array.from({ length: 16 }, (_, i) => { const a = i / 16 * Math.PI * 2, c = FIRE[i % FIRE.length]; return `<line x1="${(Math.cos(a) * 12).toFixed(1)}" y1="${(Math.sin(a) * 12).toFixed(1)}" x2="${(Math.cos(a) * 40).toFixed(1)}" y2="${(Math.sin(a) * 40).toFixed(1)}" stroke="${c}" stroke-width="4" stroke-linecap="round"/><circle cx="${(Math.cos(a) * 44).toFixed(1)}" cy="${(Math.sin(a) * 44).toFixed(1)}" r="3.5" fill="${c}"/>`; }).join("")}<circle r="9" fill="#fff6d8"/></svg></span>`;
  THUMB.bigheart = `<span class="gfx-thumb is-icon"><svg viewBox="-50 -48 100 90" aria-hidden="true"><defs><radialGradient id="gfxBigHeart" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#ffd1dc"/><stop offset=".5" stop-color="#ff4d6d"/><stop offset="1" stop-color="#a3102e"/></radialGradient></defs><path d="${HEART_PATH}" fill="url(#gfxBigHeart)"/>${[[-22, -14], [18, -18], [-6, 6], [22, 4], [-26, 6], [4, -22], [6, 22]].map(([x, y]) => `<path d="${HEART_PATH}" transform="translate(${x} ${y}) scale(.16)" fill="#fff" opacity=".75"/>`).join("")}</svg></span>`;
  THUMB.butterflies = `<span class="gfx-thumb is-icon">${BUTTERFLY(...WINGS[0])}</span>`;

  // ——— Подарки и большие реакции с настоящими картинками (владелец 01.11: «лев, цветы, корона… как в TikTok»).
  // Картинка прилетает своим движением (лев рычит, машина проезжает, ракета взлетает, корона опускается),
  // вокруг — частицы своей темы. Без затемнения и размытия, касание закрывает. ———
  const PIC_V = 157;
  const picSrc = id => `assets/gifts/${id}.webp?v=${PIC_V}`;
  const picThumb = id => `assets/gifts/t/${id}.webp?v=${PIC_V}`;
  // id: [движение, тема частиц]
  const LOOKS = {
    lux_letter: ["pop", "love"], lux_hballoons: ["float", "love"], lux_choco: ["pop", "love"], lux_goldrose: ["pop", "gold"],
    lux_star: ["spin", "gold"], lux_butterfly: ["flutter", "gold"], lux_cake: ["pop", "party"], lux_fireworks: ["fireworks", "party"],
    lux_flowers: ["bloom", "love"], lux_fireheart: ["beat", "fire"], lux_perfume: ["pop", "love"], lux_swans: ["pop", "love"],
    lux_bag: ["pop", "gold"], lux_watch: ["spin", "gold"], lux_necklace: ["pop", "gold"], lux_ring: ["pop", "gold"],
    lux_rocket: ["rocket", "fire"], lux_roseheart: ["beat", "love"], lux_balloon: ["float", "love"], lux_diamond: ["spin", "gold"],
    lux_crown: ["crown", "gold"], lux_unicorn: ["leap", "rainbow"], lux_chest: ["pop", "gold"], lux_car: ["drive", "gold"],
    lux_phoenix: ["rise", "fire"], lux_galaxy: ["spin", "cosmic"], lux_lion: ["roar", "gold"], lux_yacht: ["drive", "gold"],
    lux_jet: ["fly", "gold"], lux_castle: ["rise", "rainbow"]
  };
  // Простые подарки — только картинка в магазине и в чате, без эффекта на весь экран.
  const SIMPLE_PICS = new Set(["rose", "tulips", "sunflower", "lily", "bouquet", "bear", "big_bear", "bear_rose", "heart_box", "candy", "cake", "cupcake"]);
  // Владелец-админ шлёт их и как «большую реакцию»: картинка поменьше — у простых подарков она только 200 px.
  Object.assign(LOOKS, {
    rose: ["bloom", "love"], tulips: ["bloom", "love"], sunflower: ["bloom", "gold"], lily: ["bloom", "love"], bouquet: ["bloom", "love"],
    bear: ["pop", "love"], big_bear: ["pop", "love"], bear_rose: ["beat", "love"], heart_box: ["beat", "love"],
    candy: ["pop", "party"], cake: ["pop", "party"], cupcake: ["pop", "party"]
  });
  const fullPic = id => SIMPLE_PICS.has(id) ? picThumb(id) : picSrc(id);
  const THEMES = {
    love: { glow: "255, 96, 128", burst: ["heart", "heart", "petal", "petal", "spark", "glowHeart"], fall: ["petal", "petal", "heart", "spark"], rise: ["heart", "glowHeart"] },
    gold: { glow: "255, 200, 110", burst: ["star", "spark", "spark", "star", "glowHeart"], fall: ["star", "spark", "spark"], rise: ["glowHeart", "star"], rays: true },
    fire: { glow: "255, 120, 60", burst: ["ember", "ember", "spark", "heart"], fall: ["ember", "spark", "ember"], rise: ["ember", "ember", "spark"] },
    party: { glow: "255, 170, 120", burst: ["confetti", "confetti", "star", "heart", "spark"], fall: ["confetti", "confetti", "star"], rise: ["heart", "glowHeart"] },
    rainbow: { glow: "230, 150, 255", burst: ["glint", "star", "confetti", "spark", "heart"], fall: ["glint", "star", "confetti"], rise: ["glowHeart", "glint"] },
    cosmic: { glow: "160, 110, 255", burst: ["glint", "glint", "star", "spark"], fall: ["glint", "star", "spark"], rise: ["glint", "star"], rays: true }
  };
  PARTICLES.ember = () => ({ html: "", size: rand(6, 14), cls: "is-ember" });
  PARTICLES.glint = () => ({ html: "", size: rand(5, 11), cls: `is-glint is-g${Math.floor(rand(0, 3))}` });

  // Движение картинки: ключевые кадры, длительность и момент, когда она в центре (тогда взрыв частиц).
  const UP_AWAY = { transform: "translateY(-120vh) scale(.92)", opacity: 0 };
  const MOTIONS = {
    pop: { ms: 5200, at: 280, frames: [
      { transform: "translateY(30px) scale(.2)", opacity: 0 }, { transform: "scale(1.08)", opacity: 1, offset: .1 }, { transform: "scale(1)", offset: .16 },
      { transform: "scale(1.04) rotate(-3deg)", offset: .32 }, { transform: "scale(1.08) rotate(3deg)", offset: .48 }, { transform: "scale(1.1) rotate(-2deg)", offset: .62 },
      { transform: "scale(1.12) rotate(0deg)", opacity: 1, offset: .76, easing: "cubic-bezier(.55,0,.8,.3)" }, UP_AWAY] },
    beat: { ms: 5200, at: 300, frames: [
      { transform: "scale(.2)", opacity: 0 }, { transform: "scale(1)", opacity: 1, offset: .1 }, { transform: "scale(1.18)", offset: .18 }, { transform: "scale(1)", offset: .26 },
      { transform: "scale(1.2)", offset: .34 }, { transform: "scale(1)", offset: .42 }, { transform: "scale(1.22)", offset: .52 }, { transform: "scale(1.02)", offset: .62 },
      { transform: "scale(1.1)", opacity: 1, offset: .76, easing: "cubic-bezier(.55,0,.8,.3)" }, UP_AWAY] },
    spin: { ms: 5400, at: 900, frames: [
      { transform: "perspective(900px) rotateY(-540deg) scale(.2)", opacity: 0 }, { transform: "perspective(900px) rotateY(0deg) scale(1.08)", opacity: 1, offset: .2, easing: "ease-out" },
      { transform: "perspective(900px) rotateY(0deg) scale(1)", offset: .26 }, { transform: "perspective(900px) rotateY(20deg) scale(1.05)", offset: .44 },
      { transform: "perspective(900px) rotateY(-20deg) scale(1.08)", offset: .6 }, { transform: "perspective(900px) rotateY(0deg) scale(1.1)", opacity: 1, offset: .76, easing: "cubic-bezier(.55,0,.8,.3)" },
      { transform: "perspective(900px) rotateY(0deg) translateY(-120vh) scale(.9)", opacity: 0 }] },
    float: { ms: 6000, at: 1500, frames: [
      { transform: "translateY(85vh) rotate(-4deg)", opacity: 1 }, { transform: "translateY(0) rotate(2deg)", offset: .26, easing: "ease-out" },
      { transform: "translateY(-12px) rotate(-2deg)", offset: .42 }, { transform: "translateY(4px) rotate(2deg)", offset: .58 },
      { transform: "translateY(-8px) rotate(0deg)", opacity: 1, offset: .74, easing: "cubic-bezier(.5,0,.8,.4)" }, { transform: "translateY(-125vh) rotate(3deg)", opacity: 1 }] },
    drive: { ms: 5200, at: 1150, frames: [
      { transform: "translateX(-125vw) skewX(-8deg)", opacity: 1 }, { transform: "translateX(6vw) skewX(-4deg)", offset: .2, easing: "cubic-bezier(.2,.8,.3,1)" },
      { transform: "translateX(0) skewX(0deg)", offset: .27 }, { transform: "translateX(0) scale(1.06)", offset: .5 },
      { transform: "translateX(0) scale(1.04)", opacity: 1, offset: .72, easing: "cubic-bezier(.6,0,.9,.4)" }, { transform: "translateX(135vw) skewX(-10deg)", opacity: 1 }] },
    fly: { ms: 5000, at: 1200, frames: [
      { transform: "translate(-120vw, 55vh) rotate(-10deg) scale(.6)", opacity: 1 }, { transform: "translate(0, 0) rotate(-4deg) scale(1)", offset: .26, easing: "ease-out" },
      { transform: "translate(0, -10px) rotate(-6deg) scale(1.04)", offset: .5 }, { transform: "translate(0, 0) rotate(-4deg) scale(1.06)", opacity: 1, offset: .7, easing: "ease-in" },
      { transform: "translate(130vw, -75vh) rotate(-14deg) scale(.7)", opacity: 1 }] },
    rocket: { ms: 4800, at: 950, frames: [
      { transform: "translateY(90vh)", opacity: 1 }, { transform: "translateY(0)", offset: .22, easing: "ease-out" },
      { transform: "translate(-3px, 2px)", offset: .3 }, { transform: "translate(3px, -2px)", offset: .36 }, { transform: "translate(-3px, 1px)", offset: .42 },
      { transform: "translate(2px, -1px)", offset: .5 }, { transform: "translate(0, 0) scale(1.04)", opacity: 1, offset: .62, easing: "cubic-bezier(.6,0,1,.5)" },
      { transform: "translateY(-140vh) scale(.9)", opacity: 1 }] },
    rise: { ms: 5600, at: 900, frames: [
      { transform: "translateY(50vh) scale(.55)", opacity: 0 }, { transform: "translateY(0) scale(1.06)", opacity: 1, offset: .2, easing: "ease-out" },
      { transform: "scale(1)", offset: .28 }, { transform: "scale(1.07)", offset: .42 }, { transform: "scale(1.02)", offset: .56 },
      { transform: "scale(1.1)", opacity: 1, offset: .74, easing: "cubic-bezier(.55,0,.8,.3)" }, UP_AWAY] },
    leap: { ms: 5200, at: 1150, frames: [
      { transform: "translate(-110vw, 30vh) rotate(-14deg)", opacity: 1 }, { transform: "translate(0, -40px) rotate(-4deg)", offset: .2, easing: "ease-out" },
      { transform: "translate(0, 0) rotate(0deg)", offset: .28 }, { transform: "translate(0, -14px) rotate(2deg)", offset: .44 }, { transform: "translate(0, 0) rotate(-1deg)", offset: .58 },
      { transform: "translate(0, -10px) rotate(0deg)", opacity: 1, offset: .72, easing: "ease-in" }, { transform: "translate(120vw, -45vh) rotate(12deg)", opacity: 1 }] },
    roar: { ms: 5400, at: 420, frames: [
      { transform: "scale(.1)", opacity: 0 }, { transform: "scale(1.28)", opacity: 1, offset: .1, easing: "cubic-bezier(.2,.9,.3,1.3)" },
      { transform: "scale(1.18) translateX(-9px)", offset: .14 }, { transform: "scale(1.2) translateX(9px)", offset: .17 }, { transform: "scale(1.18) translateX(-7px)", offset: .2 },
      { transform: "scale(1.16) translateX(5px)", offset: .23 }, { transform: "scale(1)", offset: .3 }, { transform: "scale(1.05)", offset: .5 },
      { transform: "scale(1.08)", opacity: 1, offset: .76 }, { transform: "scale(1.5)", opacity: 0 }] },
    crown: { ms: 5400, at: 1000, frames: [
      { transform: "translateY(-90vh) rotate(-12deg)", opacity: 1 }, { transform: "translateY(0) rotate(0deg) scale(1.06, .94)", offset: .2, easing: "cubic-bezier(.5,0,.75,1)" },
      { transform: "translateY(-26px) scale(.98, 1.03)", offset: .26 }, { transform: "translateY(0) scale(1)", offset: .32 },
      { transform: "rotate(-3deg) scale(1.04)", offset: .46 }, { transform: "rotate(3deg) scale(1.07)", offset: .6 },
      { transform: "rotate(0deg) scale(1.1)", opacity: 1, offset: .76, easing: "cubic-bezier(.55,0,.8,.3)" }, UP_AWAY] },
    bloom: { ms: 5000, at: 380, frames: [
      { transform: "scale(0) rotate(-120deg)", opacity: 0 }, { transform: "scale(1.12) rotate(6deg)", opacity: 1, offset: .14, easing: "cubic-bezier(.2,.9,.3,1.2)" },
      { transform: "scale(1) rotate(0deg)", offset: .22 }, { transform: "scale(1.06) rotate(8deg)", offset: .48 },
      { transform: "scale(1.1) rotate(14deg)", opacity: 1, offset: .76 }, { transform: "scale(1.6) rotate(30deg)", opacity: 0 }] },
    flutter: { ms: 5400, at: 600, frames: [
      { transform: "translate(-40vw, 30vh) scale(.3, .3) rotate(-20deg)", opacity: 0 }, { transform: "translate(-10vw, 6vh) scale(.7, 1) rotate(-12deg)", opacity: 1, offset: .1 },
      { transform: "translate(0, 0) scale(1, 1) rotate(0deg)", offset: .18 }, { transform: "translate(4vw, -3vh) scale(.62, 1) rotate(6deg)", offset: .26 },
      { transform: "translate(0, -1vh) scale(1, 1) rotate(0deg)", offset: .34 }, { transform: "translate(-4vw, 1vh) scale(.64, 1) rotate(-6deg)", offset: .42 },
      { transform: "translate(0, 0) scale(1, 1) rotate(0deg)", offset: .5 }, { transform: "translate(3vw, -2vh) scale(.66, 1) rotate(4deg)", offset: .6 },
      { transform: "translate(0, 0) scale(1, 1)", opacity: 1, offset: .7 }, { transform: "translate(50vw, -80vh) scale(.6, .8) rotate(20deg)", opacity: 0 }] }
  };
  // Владелец 01.11: «анимация должна быть ещё чуть дольше, хоть на одну секунду» — каждое движение длиннее на 1 с.
  Object.values(MOTIONS).forEach(motion => { motion.at = Math.round(motion.at * (motion.ms + 1000) / motion.ms); motion.ms += 1000; });
  MOTIONS.fireworks = MOTIONS.pop;

  function picScene(id) {
    return (root, stage, options) => {
      const [motionName, themeName] = LOOKS[id];
      const motion = MOTIONS[motionName];
      const theme = THEMES[themeName];
      root.querySelector(".gfx-glow").style.background = `radial-gradient(circle at 50% 46%, rgba(${theme.glow}, .3), rgba(${theme.glow}, .08) 40%, rgba(${theme.glow}, 0) 66%)`;
      if (motionName === "fireworks" && SCENES.fireworks) SCENES.fireworks(root, stage, { ...options, silent: true });
      stage.innerHTML = `${theme.rays || motionName === "roar" ? `<i class="gfx-rays is-pic"></i>` : ""}<img class="gfx-pic is-${motionName}${SIMPLE_PICS.has(id) ? " is-small" : ""}" src="${fullPic(id)}" alt="" decoding="async" draggable="false">`;
      const img = stage.querySelector(".gfx-pic");
      img.animate(motion.frames, { duration: motion.ms, fill: "both" });
      const rays = stage.querySelector(".gfx-rays");
      if (rays) rays.animate([{ transform: "translate(-50%, -50%) scale(.2) rotate(0deg)", opacity: 0 }, { transform: "translate(-50%, -50%) scale(1.25) rotate(50deg)", opacity: .9, offset: .25 }, { transform: "translate(-50%, -50%) scale(1.4) rotate(160deg)", opacity: 0 }],
        { duration: motion.ms * .8, delay: motion.at - 150, easing: "ease-out", fill: "both" });
      const { cx, cy } = center(stage);
      const big = motionName === "roar" || motionName === "crown" ? 1.25 : 1;
      flash(root, motion.at - 40, `rgba(${theme.glow}, .6)`);
      burst(root, theme.burst, Math.round(44 * big), cx, cy, big, motion.at);
      burst(root, theme.burst, 20, cx, cy, .7, motion.at + 450);
      fall(root, theme.fall, 34, motion.at + 900, 3000);
      rise(root, theme.rise, 12, motion.at + 1600, 2200);
      if (motionName === "roar") { flash(root, motion.at + 700, `rgba(${theme.glow}, .5)`); burst(root, ["star", "spark"], 30, cx, cy, 1.3, motion.at + 700); }
      if (motionName === "rocket") for (let i = 0; i < 4; i++) burst(root, ["ember", "spark", "ember"], 14, cx, cy + 90, .45, motion.at + 900 + i * 220);
      caption(root, id, options, motion.at + 300, motion.ms + 900);
      return motion.ms + 1600;
    };
  }

  Object.keys(LOOKS).forEach(id => {
    SCENES[id] = picScene(id);
    THUMB[id] = `<img class="gfx-thumb" src="${picThumb(id)}" alt="" decoding="async" loading="lazy">`;
  });

  // Картинку докачиваем заранее (не дольше 1,5 с), чтобы эффект не начался с пустого места.
  function decodePic(id) {
    if (!LOOKS[id]) return Promise.resolve();
    const image = new Image();
    image.decoding = "async";
    image.src = fullPic(id);
    const ready = image.decode ? image.decode().catch(() => {}) : Promise.resolve();
    return Promise.race([ready, new Promise(done => setTimeout(done, 1500))]);
  }

  function center(stage) {
    const rect = stage.getBoundingClientRect();
    return { cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 };
  }

  function play(id, options = {}) {
    if (!SCENES[id]) return Promise.resolve(false);
    // Реакции в звонке не копятся в очередь: пока идёт один большой эффект, следующий пропускаем.
    if (options.passive && (current || queue.length)) return Promise.resolve(false);
    return new Promise(resolve => {
      queue.push({ id, options, resolve });
      if (!current) next();
    });
  }

  function next() {
    const job = queue.shift();
    if (!job) { current = null; return; }
    const root = document.createElement("div");
    root.className = `gfx is-${job.id.replace("lux_", "")}`;
    root.setAttribute("role", "img");
    root.setAttribute("aria-label", shopText(job.id) || "GlowLetter");
    root.innerHTML = `<div class="gfx-glow"></div><div class="gfx-stage"></div>`;
    document.body.append(root);
    const stage = root.querySelector(".gfx-stage");
    let done = false;
    let timer = 0;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      root.classList.add("is-out");
      setTimeout(() => { root.remove(); job.resolve(true); next(); }, 360);
    };
    current = { root, finish };
    if (job.options.passive) { root.classList.add("is-passive"); job.options.silent = true; }
    if (reduced()) {
      stage.innerHTML = uniq(THUMB[job.id].replace("loading=\"lazy\"", ""));
      caption(root, job.id, job.options, 0, 2600);
      timer = setTimeout(finish, 2800);
    } else if (LOOKS[job.id]) {
      decodePic(job.id).then(() => { if (!done) timer = setTimeout(finish, SCENES[job.id](root, stage, job.options)); });
    } else {
      timer = setTimeout(finish, SCENES[job.id](root, stage, job.options) + 1000);
    }
    if (!job.options.passive) {
      try { navigator.vibrate?.([40, 70, 40]); } catch {}
      root.addEventListener("click", finish);
    }
  }

  window.GlowLetterGiftFx = Object.freeze({
    play,
    has: id => Boolean(SCENES[id]) && id.startsWith("lux_"),
    hasScene: id => Boolean(SCENES[id]),
    busy: () => Boolean(current),
    art: id => Object.hasOwn(THUMB, id) ? uniq(THUMB[id]) : SIMPLE_PICS.has(id) ? `<img class="gfx-thumb" src="${picThumb(id)}" alt="" decoding="async" loading="lazy">` : "",
    thumb: id => Object.hasOwn(LOOKS, id) || SIMPLE_PICS.has(id) ? picThumb(id) : "",
    preload: () => { const img = new Image(); img.decoding = "async"; img.src = ROSES_SRC; }
  });
})();
