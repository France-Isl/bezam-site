/*
  Колода «Дурака» в русском стиле (01.11): своя SVG-графика без внешних файлов.
  Кремовая бумага с золотой рамкой, крупные угловые значки (В, Д, К, Т) и масти, двусторонние картинки
  (король в короне со скипетром, дама в кокошнике с цветком, валет в шапке с бердышом), тузы в венке.
  Рубашки: классическая бордовая с золотой сеткой, хохлома, гжель, золотая.
  GlowDurakCards.face(card, letters) / back(style) — data:URL картинки; кэшируются.
*/
(function () {
  "use strict";

  const SUIT = {
    h: "M50 90C22 68 5 52 5 32 5 17 16 7 30 7c9 0 16 5 20 13 4-8 11-13 20-13 14 0 25 10 25 25 0 20-17 36-45 58Z",
    d: "M50 3Q67 30 88 50 67 70 50 97 33 70 12 50 33 30 50 3Z",
    s: "M50 5C41 25 7 39 7 62c0 14 11 22 23 22 7 0 13-4 16-9-1 9-5 15-11 19h30c-6-4-10-10-11-19 3 5 9 9 16 9 12 0 23-8 23-22C93 39 59 25 50 5Z",
    c: "M50 7a19 19 0 1 1-.1 0ZM27 40a19 19 0 1 1-.1 0ZM73 40a19 19 0 1 1-.1 0ZM46 52c1 22-3 33-12 42h32c-9-9-13-20-12-42Z"
  };
  const RED = "#b0142f", BLACK = "#1f1a2e", GOLD = "#c9962f", GOLD_LIGHT = "#f3d587", BLUE = "#21418f";
  const isRed = suit => suit === "h" || suit === "d";
  const cache = new Map();
  const url = svg => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

  const pip = (suit, x, y, size, flip = false) =>
    `<path d="${SUIT[suit]}" fill="${isRed(suit) ? RED : BLACK}" transform="translate(${x - size / 2} ${y - size / 2}) scale(${size / 100})${flip ? ` rotate(180 50 50)` : ""}"/>`;

  // Масти крупные и отодвинуты от угловых значков, чтобы карту было видно даже веером в руке.
  const PIPS = {
    6: [[88, 80], [162, 80], [88, 175], [162, 175], [88, 270], [162, 270]],
    7: [[88, 80], [162, 80], [125, 128], [88, 175], [162, 175], [88, 270], [162, 270]],
    8: [[88, 80], [162, 80], [125, 128], [88, 175], [162, 175], [125, 222], [88, 270], [162, 270]],
    9: [[88, 80], [162, 80], [88, 143], [162, 143], [125, 175], [88, 207], [162, 207], [88, 270], [162, 270]],
    10: [[88, 80], [162, 80], [125, 112], [88, 143], [162, 143], [88, 207], [162, 207], [125, 238], [88, 270], [162, 270]]
  };
  const PIP_SIZE = rank => (rank >= 9 ? 40 : 44);

  function paper(inner) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350">
<defs>
<linearGradient id="p" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffefa"/><stop offset=".6" stop-color="#fcf6e8"/><stop offset="1" stop-color="#f4e8cc"/></linearGradient>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${GOLD_LIGHT}"/><stop offset=".5" stop-color="${GOLD}"/><stop offset="1" stop-color="#9c6d1d"/></linearGradient>
</defs>
<rect width="250" height="350" rx="20" fill="url(#p)"/>
<rect x="7" y="7" width="236" height="336" rx="15" fill="none" stroke="url(#g)" stroke-width="2"/>
${inner}
</svg>`;
  }

  // Угловой значок: крупная буква или цифра и масть под ней (В, Д, К, Т — как на русских картах).
  function index(label, suit, tab = false) {
    const color = isRed(suit) ? RED : BLACK;
    const wide = label.length > 1;
    const text = `<text x="37" y="66" font-family="Georgia,'Noto Serif','Times New Roman',serif" font-weight="700" font-size="${wide ? 50 : 58}" fill="${color}" text-anchor="middle"${wide ? ` textLength="56" lengthAdjust="spacingAndGlyphs"` : ""}>${label}</text>`;
    const back = tab ? `<rect x="11" y="15" width="52" height="102" rx="12" fill="#fffaf0" stroke="url(#g)" stroke-width="1.2"/>` : "";
    const small = `${back}${text}${pip(suit, 37, 94, 34)}`;
    return `<g>${small}</g><g transform="rotate(180 125 175)">${small}</g>`;
  }

  const PALETTE = {
    h: { robe: RED, robe2: BLUE, field: "#fbede2" },
    d: { robe: "#c0392b", robe2: "#2f6b3a", field: "#fcefe0" },
    s: { robe: BLUE, robe2: RED, field: "#e9eef8" },
    c: { robe: "#2f5d3a", robe2: RED, field: "#ebf2e8" }
  };

  // Картинки в духе старой русской колоды: двусторонний портрет в рамке, у короля корона и скипетр,
  // у дамы кокошник и цветок, у валета шапка с мехом и бердыш.
  function figure(kind, suit) {
    const { robe, robe2, field } = PALETTE[suit];
    const ink = "#2e1d18", skin = "#f4dcc2", skinLine = "#c99b74";
    const face = `<rect x="114" y="108" width="22" height="22" fill="${skin}"/>
<ellipse cx="125" cy="92" rx="21" ry="25" fill="${skin}" stroke="${skinLine}" stroke-width="1.2"/>
<path d="M110 90q6-4 11 0q-6 3-11 0ZM129 90q6-4 11 0q-6 3-11 0Z" fill="${ink}"/>
<path d="M109 83q6-3 12 0M129 83q6-3 12 0" stroke="${ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M125 91q-4 9 0 12" stroke="${skinLine}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<path d="M119 109q6 2.5 12 0" stroke="#9b3b35" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
    const robeShape = `<path d="M34 175C38 141 74 128 125 126 176 128 212 141 216 175Z" fill="${robe}"/>
<path d="M34 175C38 141 74 128 125 126 176 128 212 141 216 175" fill="none" stroke="url(#g)" stroke-width="3"/>
<path d="M58 175C62 152 84 142 98 139M192 175C188 152 166 142 152 139" stroke="url(#g)" stroke-width="1.6" fill="none"/>
<rect x="111" y="132" width="28" height="43" fill="url(#g)"/>
${[142, 154, 166].map(y => `<path d="M125 ${y - 5}l5 5-5 5-5-5Z" fill="${robe2}"/>`).join("")}
${[60, 80, 170, 190].map((x, i) => `<circle cx="${x}" cy="${i % 3 ? 160 : 168}" r="3.2" fill="${GOLD_LIGHT}" stroke="#9c6d1d" stroke-width=".8"/>`).join("")}`;
    let head = "", hair = "", collar = "", item = "";
    if (kind === "K") {
      collar = `<path d="M80 133Q125 160 170 133L166 147Q125 172 84 147Z" fill="#fffaf0" stroke="#d8cbb4" stroke-width="1"/>
${[92, 106, 120, 134, 148, 160].map((x, i) => `<path d="M${x} ${145 + (i % 2) * 4}l2 5-2 1-2-1Z" fill="#1b1b1b"/>`).join("")}`;
      hair = `<path d="M103 82Q102 100 106 108 101 96 104 78ZM147 82Q148 100 144 108 149 96 146 78Z" fill="#8a8a8a"/>
<path d="M104 100Q105 131 125 137 145 131 146 100 140 113 125 114 110 113 104 100Z" fill="#9a9a9a" stroke="#6f6f6f" stroke-width="1"/>
<path d="M112 106q13-8 26 0q-13 4-26 0Z" fill="#7a7a7a"/>`;
      head = `<path d="M99 70 95 40l14 13 16-21 16 21 14-13-4 30Z" fill="url(#g)" stroke="#7a5414" stroke-width="1.2"/>
<rect x="98" y="64" width="54" height="10" rx="3" fill="url(#g)" stroke="#7a5414" stroke-width="1"/>
<circle cx="125" cy="69" r="3.6" fill="${robe2}"/><circle cx="109" cy="69" r="2.6" fill="${RED}"/><circle cx="141" cy="69" r="2.6" fill="${RED}"/>
${[[95, 40], [125, 32], [155, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="url(#g)" stroke="#7a5414" stroke-width="1"/>`).join("")}`;
      item = `<path d="M76 175 70 70" stroke="url(#g)" stroke-width="6" stroke-linecap="round"/>
<circle cx="70" cy="64" r="9" fill="url(#g)" stroke="#7a5414" stroke-width="1.2"/><circle cx="70" cy="64" r="3" fill="${robe2}"/>
<ellipse cx="76" cy="150" rx="9" ry="7" fill="${skin}" stroke="${skinLine}"/>`;
    } else if (kind === "Q") {
      collar = Array.from({ length: 9 }, (_, i) => {
        const t = i / 8, x = 92 + t * 66, y = 136 + Math.sin(t * Math.PI) * 12;
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.4" fill="#fffaf0" stroke="${GOLD}" stroke-width="1"/>`;
      }).join("");
      hair = `<path d="M103 80Q100 104 104 118 96 104 100 78ZM147 80Q150 104 146 118 154 104 150 78Z" fill="#5a3418"/>
<path d="M104 116q-4 20 2 40M146 116q4 20-2 40" stroke="#5a3418" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      head = `<path d="M90 78Q88 30 125 24 162 30 160 78Z" fill="${robe2}" stroke="url(#g)" stroke-width="3"/>
<path d="M98 72Q100 40 125 34 150 40 152 72" fill="none" stroke="url(#g)" stroke-width="2"/>
<path d="M125 44c-6 4-6 12 0 16 6-4 6-12 0-16Z" fill="url(#g)"/>
${[[102, 60], [108, 46], [125, 40], [142, 46], [148, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#fffaf0"/>`).join("")}
<path d="M92 78h66" stroke="url(#g)" stroke-width="4"/>
${[96, 106, 116, 126, 136, 146, 154].map(x => `<circle cx="${x}" cy="82" r="2" fill="#fffaf0" stroke="${GOLD}" stroke-width=".6"/>`).join("")}`;
      item = `<path d="M74 175Q70 140 74 104" stroke="#3f7a3a" stroke-width="3.2" fill="none"/>
<path d="M73 140q-12-4-16-14 12 0 16 14ZM74 124q10-6 18-2-8 8-18 2Z" fill="#3f7a3a"/>
<circle cx="74" cy="98" r="11" fill="${RED}"/><path d="M68 96q6-8 12 0q-6 6-12 0Z" fill="#e64b63"/><circle cx="74" cy="97" r="3" fill="#7a0d20"/>
<ellipse cx="74" cy="152" rx="9" ry="7" fill="${skin}" stroke="${skinLine}"/>`;
    } else {
      collar = Array.from({ length: 7 }, (_, i) => `<circle cx="${(96 + i * 9.7).toFixed(1)}" cy="${(136 + Math.sin((i / 6) * Math.PI) * 9).toFixed(1)}" r="6" fill="#fffaf0" stroke="#d8cbb4" stroke-width="1"/>`).join("");
      hair = `<path d="M104 78Q102 96 106 104 100 92 103 76ZM146 78Q148 96 144 104 150 92 147 76Z" fill="#7a4a22"/>
<path d="M112 104q13-7 26 0q-13 3-26 0Z" fill="#6b3a1a"/>`;
      head = `<path d="M100 68Q102 38 125 36 148 38 150 68Z" fill="${robe2}" stroke="url(#g)" stroke-width="1.6"/>
<rect x="96" y="62" width="58" height="15" rx="7" fill="#6b4a2e"/>
<path d="M100 66q5 4 10 0q5 4 10 0q5 4 10 0q5 4 10 0q5 4 10 0" stroke="#8f6a45" stroke-width="2" fill="none"/>
<path d="M146 50q16-16 28-8-12 0-22 14Z" fill="#fffaf0" stroke="#d8cbb4"/><circle cx="146" cy="56" r="3.5" fill="url(#g)"/>`;
      item = `<path d="M76 175 70 46" stroke="#7a4a22" stroke-width="4.5" stroke-linecap="round"/>
<path d="M70 52q-20 6-22 28 12-10 23-10Z" fill="#cfd6e0" stroke="#7d8796" stroke-width="1.2"/>
<path d="M70 44l3-10 3 10Z" fill="#cfd6e0" stroke="#7d8796" stroke-width="1"/>
<ellipse cx="75" cy="150" rx="9" ry="7" fill="${skin}" stroke="${skinLine}"/>`;
    }
    // У дамы косы лежат за лицом, у короля борода и у валета усы — поверх.
    const half = `${robeShape}${collar}${kind === "Q" ? hair : ""}${face}${kind !== "Q" ? hair : ""}${head}${item}${pip(suit, 194, 56, 34)}`;
    return `<defs><pattern id="lat" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 8h16M8 0v16" stroke="${robe}" stroke-width=".7" opacity=".14"/></pattern>
<clipPath id="c"><rect x="22" y="22" width="206" height="306" rx="9"/></clipPath></defs>
<g clip-path="url(#c)">
<rect x="22" y="22" width="206" height="306" fill="${field}"/>
<rect x="22" y="22" width="206" height="306" fill="url(#lat)"/>
<g>${half}</g><g transform="rotate(180 125 175)">${half}</g>
<path d="M22 175h206" stroke="url(#g)" stroke-width="2"/>
</g>
<rect x="22" y="22" width="206" height="306" rx="9" fill="none" stroke="url(#g)" stroke-width="2"/>`;
  }

  function ace(suit) {
    const leaves = Array.from({ length: 12 }, (_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      const x = 125 + Math.cos(a) * 78, y = 175 + Math.sin(a) * 78;
      return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="11" ry="5" transform="rotate(${i * 30 + 90} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${i % 2 ? "#3f7a3a" : GOLD}" opacity=".9"/>`;
    }).join("");
    const berries = Array.from({ length: 12 }, (_, i) => {
      const a = ((i * 30 + 15) * Math.PI) / 180;
      return `<circle cx="${(125 + Math.cos(a) * 86).toFixed(1)}" cy="${(175 + Math.sin(a) * 86).toFixed(1)}" r="4.5" fill="${RED}" stroke="#7a0d20" stroke-width="1"/>`;
    }).join("");
    return `<circle cx="125" cy="175" r="70" fill="none" stroke="url(#g)" stroke-width="3"/>
<circle cx="125" cy="175" r="62" fill="${isRed(suit) ? "#fff1e6" : "#eef2fb"}" stroke="url(#g)" stroke-width="1.2"/>
${leaves}${berries}
${pip(suit, 125, 175, 92)}
<path d="M125 92v-8M125 266v-8M42 175h8M200 175h8" stroke="url(#g)" stroke-width="3" stroke-linecap="round"/>`;
  }

  const LETTERS = {
    ru: { 11: "В", 12: "Д", 13: "К", 14: "Т" },
    latin: { 11: "J", 12: "Q", 13: "K", 14: "A" }
  };

  function face(card, letters = "ru") {
    const key = `${card}|${letters}`;
    if (cache.has(key)) return cache.get(key);
    const rank = parseInt(card, 10), suit = card.slice(-1);
    const set = LETTERS[letters] || LETTERS.latin;
    const label = rank <= 10 ? String(rank) : set[rank];
    let inner;
    if (rank <= 10) inner = PIPS[rank].map(([x, y]) => pip(suit, x, y, PIP_SIZE(rank), y > 175)).join("");
    else if (rank === 14) inner = ace(suit);
    else inner = figure(rank === 13 ? "K" : rank === 12 ? "Q" : "J", suit);
    const value = url(paper(`${inner}${index(label, suit, rank > 10 && rank < 14)}`));
    cache.set(key, value);
    return value;
  }

  const BACKS = {
    back_classic: { base: "#6e1024", base2: "#3e0814", line: GOLD_LIGHT, mid: "#f3d587", motif: "heart" },
    back_khokhloma: { base: "#17110f", base2: "#000", line: "#d9301f", mid: GOLD_LIGHT, motif: "berry" },
    back_gzhel: { base: "#fbfdff", base2: "#dfe9fb", line: "#1f4fb8", mid: "#1f4fb8", motif: "flower" },
    back_gold: { base: "#f2cf73", base2: "#b9832a", line: "#7a1428", mid: "#7a1428", motif: "crown" }
  };

  function back(style = "back_classic") {
    const key = `back|${style}`;
    if (cache.has(key)) return cache.get(key);
    const b = BACKS[style] || BACKS.back_classic;
    const motif = {
      heart: `<path d="${SUIT.h}" transform="translate(95 145) scale(.6)" fill="${b.mid}"/>`,
      berry: `${[[-20, -8], [0, -18], [20, -8], [-10, 12], [10, 12]].map(([x, y]) => `<circle cx="${125 + x}" cy="${175 + y}" r="9" fill="#d9301f" stroke="${GOLD_LIGHT}" stroke-width="2"/>`).join("")}<path d="M90 200q35-30 70 0" stroke="${GOLD_LIGHT}" stroke-width="3" fill="none"/>`,
      flower: `${Array.from({ length: 8 }, (_, i) => `<ellipse cx="125" cy="150" rx="9" ry="22" fill="${b.mid}" transform="rotate(${i * 45} 125 175)"/>`).join("")}<circle cx="125" cy="175" r="10" fill="#fff" stroke="${b.mid}" stroke-width="3"/>`,
      crown: `<path d="M92 196 96 156l14 16 15-26 15 26 14-16 4 40Z" fill="${b.mid}"/><rect x="92" y="196" width="66" height="9" fill="${b.mid}"/>`
    }[b.motif];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350">
<defs>
<linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${b.base}"/><stop offset="1" stop-color="${b.base2}"/></linearGradient>
<pattern id="l" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 11h22M11 0v22" stroke="${b.line}" stroke-width="1.1" opacity=".55"/><circle cx="11" cy="11" r="2" fill="${b.line}" opacity=".8"/></pattern>
</defs>
<rect width="250" height="350" rx="20" fill="#fffaf0"/>
<rect x="8" y="8" width="234" height="334" rx="14" fill="url(#b)"/>
<rect x="8" y="8" width="234" height="334" rx="14" fill="url(#l)"/>
<rect x="18" y="18" width="214" height="314" rx="10" fill="none" stroke="${b.line}" stroke-width="2"/>
<ellipse cx="125" cy="175" rx="62" ry="78" fill="url(#b)" stroke="${b.line}" stroke-width="3"/>
<ellipse cx="125" cy="175" rx="52" ry="68" fill="none" stroke="${b.line}" stroke-width="1" opacity=".8"/>
${motif}
</svg>`;
    const value = url(svg);
    cache.set(key, value);
    return value;
  }

  window.GlowDurakCards = Object.freeze({ face, back, SUIT, isRed, backs: Object.keys(BACKS) });
})();
