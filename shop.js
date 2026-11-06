/*
  Магазин и кошелёк (01.11). Две валюты живут только на сервере:
    «Светлячки» — покупаются в Google Play (300 / 1000 / 2200 / 6000 / 30000), 100 в подарок каждому;
    «Доллары» — валюта стола «Дурака», покупаются за светлячки и обратно не меняются.
  Здесь: подарки (цветы, мишки, сладости) для себя и друзей, рубашки колоды, сукно стола,
  усиления, обмен на доллары, отправка светлячков другу (до 1000 в день) и пин-коды.
  В «Настройках» — раздел «Светлячки и пин-код»; админ там же создаёт пин-коды.
*/
(() => {
  "use strict";
  if (window.GlowLetterShop) return;

  const COIN_PACKS = [
    // Каждый следующий пакет выгоднее (владелец 02.11); bonus — на сколько больше светлячков за тот же евро,
    // чем в стартовом пакете (300 за 0,99 €), округлено вниз.
    { id: "glowletter_coins_300", coins: 300, price: "0,99 €" },
    { id: "glowletter_coins_1000", coins: 1000, price: "2,99 €", bonus: "+10%" },
    { id: "glowletter_coins_2200", coins: 2200, price: "5,99 €", bonus: "+20%" },
    { id: "glowletter_coins_6000", coins: 6000, price: "14,99 €", bonus: "+30%" },
    { id: "glowletter_coins_30000", coins: 30000, price: "49,99 €", bonus: "+98%" }
  ];
  // Покупка светлячков за деньги (02.11): кнопки работают в приложении из Google Play
  // (NurBilling.buyCoins), сервер google-play-coins начисляет и расходует покупку.
  // Тексты покупки — здесь, на всех 15 языках приложения.
  const COIN_BUY_TEXT = {
    ru: { starter: "Старт", best: "Выгоднее всего", webNote: "Светлячки покупаются только в приложении GlowLetter из Google Play. Светлячки одни и те же на сайте и в приложении.", opening: "Открываем Google Play…", added: "+{n} светлячков!", pending: "Оплата ещё идёт. Светлячки придут, как только Google Play её подтвердит.", delayed: "Оплата прошла. Светлячки придут через несколько минут.", failed: "Покупка не прошла. Попробуйте ещё раз." },
    en: { starter: "Starter", best: "Best value", webNote: "Fireflies can be bought only in the GlowLetter app from Google Play. Your Fireflies are the same on the website and in the app.", opening: "Opening Google Play…", added: "+{n} Fireflies!", pending: "The payment is still processing. Fireflies will arrive as soon as Google Play confirms it.", delayed: "Payment received. Fireflies will arrive in a few minutes.", failed: "The purchase didn't go through. Please try again." },
    fr: { starter: "Découverte", best: "Meilleure offre", webNote: "Les lucioles s'achètent uniquement dans l'appli GlowLetter sur Google Play. Vos lucioles sont les mêmes sur le site et dans l'appli.", opening: "Ouverture de Google Play…", added: "+{n} lucioles !", pending: "Le paiement est en cours. Les lucioles arriveront dès que Google Play l'aura confirmé.", delayed: "Paiement reçu. Les lucioles arrivent dans quelques minutes.", failed: "L'achat n'a pas abouti. Réessayez." },
    de: { starter: "Start", best: "Bester Wert", webNote: "Glühwürmchen kannst du nur in der GlowLetter-App aus Google Play kaufen. Deine Glühwürmchen sind auf der Website und in der App dieselben.", opening: "Google Play wird geöffnet…", added: "+{n} Glühwürmchen!", pending: "Die Zahlung läuft noch. Die Glühwürmchen kommen, sobald Google Play sie bestätigt.", delayed: "Zahlung erhalten. Die Glühwürmchen kommen in wenigen Minuten.", failed: "Der Kauf hat nicht geklappt. Bitte versuch es noch einmal." },
    es: { starter: "Inicio", best: "Mejor oferta", webNote: "Las luciérnagas solo se compran en la app GlowLetter de Google Play. Tus luciérnagas son las mismas en la web y en la app.", opening: "Abriendo Google Play…", added: "¡+{n} luciérnagas!", pending: "El pago aún se está procesando. Las luciérnagas llegarán en cuanto Google Play lo confirme.", delayed: "Pago recibido. Las luciérnagas llegarán en unos minutos.", failed: "La compra no se completó. Inténtalo de nuevo." },
    it: { starter: "Inizio", best: "Più conveniente", webNote: "Le lucciole si comprano solo nell'app GlowLetter da Google Play. Le tue lucciole sono le stesse sul sito e nell'app.", opening: "Apertura di Google Play…", added: "+{n} lucciole!", pending: "Il pagamento è ancora in corso. Le lucciole arriveranno appena Google Play lo conferma.", delayed: "Pagamento ricevuto. Le lucciole arriveranno tra pochi minuti.", failed: "L'acquisto non è andato a buon fine. Riprova." },
    pt: { starter: "Início", best: "Melhor oferta", webNote: "Os vaga-lumes só podem ser comprados no app GlowLetter do Google Play. Seus vaga-lumes são os mesmos no site e no app.", opening: "Abrindo o Google Play…", added: "+{n} vaga-lumes!", pending: "O pagamento ainda está em processamento. Os vaga-lumes chegam assim que o Google Play confirmar.", delayed: "Pagamento recebido. Os vaga-lumes chegam em alguns minutos.", failed: "A compra não foi concluída. Tente de novo." },
    pl: { starter: "Na start", best: "Najlepsza oferta", webNote: "Świetliki można kupić tylko w aplikacji GlowLetter z Google Play. Twoje świetliki są te same na stronie i w aplikacji.", opening: "Otwieramy Google Play…", added: "+{n} świetlików!", pending: "Płatność jest w toku. Świetliki pojawią się, gdy Google Play ją potwierdzi.", delayed: "Płatność przyjęta. Świetliki pojawią się za kilka minut.", failed: "Zakup się nie udał. Spróbuj ponownie." },
    uk: { starter: "Старт", best: "Найвигідніше", webNote: "Світлячки можна купити лише в застосунку GlowLetter з Google Play. Світлячки ті самі на сайті й у застосунку.", opening: "Відкриваємо Google Play…", added: "+{n} світлячків!", pending: "Оплата ще триває. Світлячки надійдуть, щойно Google Play її підтвердить.", delayed: "Оплату отримано. Світлячки надійдуть за кілька хвилин.", failed: "Покупка не вдалася. Спробуйте ще раз." },
    tr: { starter: "Başlangıç", best: "En avantajlı", webNote: "Ateş böcekleri yalnızca Google Play'deki GlowLetter uygulamasından satın alınır. Ateş böceklerin sitede ve uygulamada aynıdır.", opening: "Google Play açılıyor…", added: "+{n} ateş böceği!", pending: "Ödeme hâlâ işleniyor. Google Play onaylar onaylamaz ateş böcekleri gelecek.", delayed: "Ödeme alındı. Ateş böcekleri birkaç dakika içinde gelecek.", failed: "Satın alma tamamlanamadı. Lütfen tekrar deneyin." },
    ar: { starter: "البداية", best: "الأفضل قيمة", webNote: "لا تُشترى اليراعات إلا في تطبيق GlowLetter من Google Play. يراعاتك هي نفسها في الموقع والتطبيق.", opening: "جارٍ فتح Google Play…", added: "+{n} يراعة!", pending: "الدفع ما زال قيد المعالجة. ستصل اليراعات فور تأكيد Google Play له.", delayed: "تم استلام الدفع. ستصل اليراعات خلال دقائق.", failed: "لم تكتمل عملية الشراء. حاول مرة أخرى." },
    ind: { starter: "Awal", best: "Paling hemat", webNote: "Kunang-kunang hanya bisa dibeli di aplikasi GlowLetter dari Google Play. Kunang-kunangmu sama di situs dan di aplikasi.", opening: "Membuka Google Play…", added: "+{n} kunang-kunang!", pending: "Pembayaran masih diproses. Kunang-kunang akan masuk begitu Google Play mengonfirmasinya.", delayed: "Pembayaran diterima. Kunang-kunang akan masuk dalam beberapa menit.", failed: "Pembelian tidak berhasil. Coba lagi." },
    ja: { starter: "お試し", best: "いちばんお得", webNote: "ホタルはGoogle PlayのGlowLetterアプリでのみ購入できます。ホタルはサイトとアプリで共通です。", opening: "Google Playを開いています…", added: "ホタル+{n}!", pending: "支払いを処理中です。Google Playで確認され次第、ホタルが届きます。", delayed: "支払いを受け付けました。数分以内にホタルが届きます。", failed: "購入できませんでした。もう一度お試しください。" },
    ko: { starter: "스타터", best: "가장 이득", webNote: "반딧불이는 Google Play의 GlowLetter 앱에서만 구매할 수 있어요. 반딧불이는 웹사이트와 앱에서 똑같이 사용돼요.", opening: "Google Play를 여는 중…", added: "반딧불이 +{n}!", pending: "결제가 아직 처리 중이에요. Google Play에서 확인되면 바로 반딧불이가 들어와요.", delayed: "결제가 완료됐어요. 몇 분 안에 반딧불이가 들어와요.", failed: "구매가 완료되지 않았어요. 다시 시도해 주세요." },
    zh: { starter: "入門", best: "最划算", webNote: "螢火蟲只能在 Google Play 的 GlowLetter 應用程式中購買。網站和應用程式中的螢火蟲是同一份。", opening: "正在開啟 Google Play…", added: "螢火蟲 +{n}！", pending: "付款仍在處理中。Google Play 確認後，螢火蟲就會到帳。", delayed: "已收到付款。螢火蟲將在幾分鐘內到帳。", failed: "購買未完成，請再試一次。" }
  };
  // Пин-коды на светлячки или доллары (владелец 02.11): админ выбирает валюту, сумма до 1 000 000 000 000.
  // Тексты — здесь, на всех 15 языках приложения; «Светлячки», «Доллары», «Сколько» берутся из TEXT.
  const PIN_MAX = 1000000000000;
  const PIN_TEXT = {
    ru: { currency: "Что даёт код", note: "Введите код, который вам дали, — светлячки или доллары придут сразу", okDollars: "+{n} $!" },
    en: { currency: "The code gives", note: "Enter the code you were given — fireflies or dollars arrive at once", okDollars: "+${n}!" },
    fr: { currency: "Le code donne", note: "Saisissez le code reçu — les lucioles ou les dollars arrivent aussitôt", okDollars: "+{n} $ !" },
    de: { currency: "Der Code gibt", note: "Gib den Code ein, den du bekommen hast — Glühwürmchen oder Dollar kommen sofort", okDollars: "+{n} $!" },
    es: { currency: "El código da", note: "Introduce el código que te dieron — las luciérnagas o los dólares llegan al momento", okDollars: "¡+{n} $!" },
    it: { currency: "Il codice dà", note: "Inserisci il codice ricevuto — lucciole o dollari arrivano subito", okDollars: "+{n} $!" },
    pt: { currency: "O código dá", note: "Digite o código que você recebeu — os vaga-lumes ou dólares chegam na hora", okDollars: "+{n} $!" },
    pl: { currency: "Kod daje", note: "Wpisz otrzymany kod — świetliki lub dolary przyjdą od razu", okDollars: "+{n} $!" },
    uk: { currency: "Що дає код", note: "Введіть код, який вам дали, — світлячки або долари прийдуть одразу", okDollars: "+{n} $!" },
    tr: { currency: "Kod ne verir", note: "Size verilen kodu girin — ateş böcekleri ya da dolarlar hemen gelir", okDollars: "+{n} $!" },
    ar: { currency: "ما يمنحه الرمز", note: "أدخل الرمز الذي حصلت عليه — ستصل اليراعات أو الدولارات فورًا", okDollars: "+{n} $!" },
    ind: { currency: "Kode memberi", note: "Masukkan kode yang Anda terima — kunang-kunang atau dolar langsung masuk", okDollars: "+{n} $!" },
    ja: { currency: "コードの中身", note: "もらったコードを入力すると、すぐにホタルまたはドルが届きます", okDollars: "+{n} ドル!" },
    ko: { currency: "코드로 받는 것", note: "받은 코드를 입력하면 반딧불이나 달러가 바로 들어와요", okDollars: "+{n}달러!" },
    zh: { currency: "代碼內容", note: "輸入你拿到的代碼 — 螢火蟲或美元會立即送達", okDollars: "+{n} 美元！" }
  };
  const ART = {
    rose: "🌹", tulips: "🌷", sunflower: "🌻", lily: "🪷", bouquet: "💐", bear: "🧸", big_bear: "🧸", bear_rose: "🧸",
    heart_box: "💝", candy: "🍬", cake: "🎂", cupcake: "🧁", boost_x2: "⚡", hint: "💡", shield: "🛡️", insurance: "☂️",
    xp_x2: "⭐", xp_x3: "🌟", xp_x5: "🚀",
    lux_roses: "🌹", lux_bear: "🧸", lux_box: "🎁"
  };
  const SCENE = { bear_rose: "🌹", big_bear: "❤️" };

  const TEXT = {
    ru: {
      giftTitle: "Вам подарок!", giftFromGlow: "От GlowLetter с теплом", giftFromName: "От {name}", giftTake: "Забрать",
      xp_x2: "×2 опыта на час", xp_x3: "×3 опыта на час", xp_x5: "×5 опыта на час", xp_x2Note: "Опыт за «Дурака» и «Шашки» удваивается на час", xp_x3Note: "Опыт за игры ×3 целый час", xp_x5Note: "Опыт за игры ×5 целый час — самый быстрый путь к 100 уровню", xpOn: "Опыт ×{n} включён", achTitle: "Достижение получено!", achSuper: "Супер-достижение!",
      lux_roses: "Роскошный букет роз", lux_rosesNote: "Огромный букет: сердечки и лепестки разлетаются по всему экрану", lux_bear: "Мишка с шариками", lux_bearNote: "Мишка прилетает на шариках-сердечках и улетает на них", lux_box: "Волшебная шкатулка", lux_boxNote: "Шкатулка открывается, и из неё поднимается сияющее сердце", giftPreview: "Посмотреть", giftPreviewLine: "Так подарок увидит ваш друг", giftReplay: "Посмотреть ещё раз",
      title: "Магазин", coins: "Светлячки", dollars: "Доллары", tabGifts: "Подарки", tabStyle: "Колода и стол", tabBoost: "Усиления", tabDollars: "Доллары", tabCoins: "Светлячки", tabPin: "Пин-код",
      buy: "Купить", owned: "Есть: {n}", equip: "Выбрать", equipped: "Выбрано", give: "Подарить", use: "Включить", free: "Своё",
      rose: "Роза", tulips: "Тюльпаны", sunflower: "Подсолнух", lily: "Лилия", bouquet: "Букет", bear: "Мишка", big_bear: "Большой мишка", bear_rose: "Мишка с розой",
      heart_box: "Сердце-шкатулка", candy: "Конфеты", cake: "Торт", cupcake: "Пирожное",
      back_classic: "Бордовая классика", back_khokhloma: "Хохлома", back_gzhel: "Гжель", back_gold: "Золотая",
      cloth_green: "Зелёное сукно", cloth_burgundy: "Бордовое сукно", cloth_wood: "Дубовый стол", cloth_night: "Ночное сукно",
      boost_x2: "×2 к выигрышу на час", hint: "Подсказка хода", shield: "Щит серии", insurance: "Страховка от проигрыша",
      boost_x2Note: "Выигрыш в «Дураке» удваивается целый час", hintNote: "Покажет лучший ход в игре с ботами", shieldNote: "Пропуск дня не сбросит награду дня", insuranceNote: "Проигрыш вернёт половину ставки один раз",
      exchange: "{c} светлячков → {d} $", exchangeNote: "Доллары — для ставок в «Дураке». Обратно на светлячки не меняются.",
      coinsNote: "Светлячки покупаются в приложении GlowLetter из Google Play.", buyInApp: "Купить в приложении", soon: "Покупка светлячков откроется с новой версией приложения",
      sendTitle: "Отправить светлячки другу", sendNote: "Не больше 1000 в день. Сегодня отправлено: {n}", sendTo: "Кому", amount: "Сколько", send: "Отправить", sent: "Отправлено: {n}",
      pinTitle: "Пин-код", pinNote: "Введите код, который вам дали, — светлячки придут сразу", pinPlaceholder: "Например, GLOW2026", activate: "Активировать", pinOk: "+{n} светлячков!",
      code_invalid: "Такого кода нет", code_used_up: "Код уже использован полностью", code_already: "Вы уже активировали этот код", code_expired: "Срок кода закончился", rate_limited: "Слишком много попыток. Попробуйте через час",
      not_enough_coins: "Не хватает светлячков", not_enough_dollars: "Не хватает долларов", already_owned: "Уже куплено", locked: "Сначала купите", send_limit: "Лимит 1000 в день", not_friends: "Можно только друзьям",
      signIn: "Войдите в аккаунт", error: "Не получилось. Проверьте интернет", bought: "Куплено: {name}", gifted: "Подарок отправлен: {name}", chooseFriend: "Кому подарить?", noFriends: "Сначала добавьте друзей",
      boostOn: "Включено", balance: "{c} светлячков · {d} $", settingsTitle: "Светлячки и пин-код", openShop: "Открыть магазин",
      adminTitle: "Пин-коды (админ)", adminCoins: "Светлячков", adminUses: "Активаций", adminDays: "Дней (0 — без срока)", adminCode: "Свой код (можно пусто)", adminNote2: "Заметка", create: "Создать код", created: "Код {code} создан", uses: "{u} из {m}", off: "Выключить", on: "Включить", copy: "Копировать", copied: "Скопировано",
      wall: "Мои подарки", wallEmpty: "Пока подарков нет", homeDurak: "Дурак", homeShop: "Магазин",
      chatDurakFrom: "{name} зовёт сыграть в «Дурака»", chatDurakYou: "Вы позвали за стол «Дурака»", chatDurakJoin: "Сесть за стол", chatGiftFrom: "Подарок от {name}: {item}", chatGiftYou: "Вы подарили: {item}", chatCoinsFrom: "От {name}: {n} светлячков", chatCoinsYou: "Вы отправили {n} светлячков", chatThanks: "Спасибо!"
    },
    en: {
      giftTitle: "A gift for you!", giftFromGlow: "With warmth from GlowLetter", giftFromName: "From {name}", giftTake: "Collect",
      xp_x2: "×2 XP for an hour", xp_x3: "×3 XP for an hour", xp_x5: "×5 XP for an hour", xp_x2Note: "XP from Durak and Checkers is doubled for an hour", xp_x3Note: "×3 XP from games for a whole hour", xp_x5Note: "×5 XP from games for a whole hour — the fastest way to level 100", xpOn: "XP ×{n} is on", achTitle: "Achievement unlocked!", achSuper: "Super achievement!",
      lux_roses: "Luxury rose bouquet", lux_rosesNote: "A huge bouquet: hearts and petals fly across the whole screen", lux_bear: "Teddy with balloons", lux_bearNote: "A teddy floats down on heart balloons and flies away on them", lux_box: "Magic gift box", lux_boxNote: "The box opens and a glowing heart rises out of it", giftPreview: "Preview", giftPreviewLine: "This is how your friend will see the gift", giftReplay: "Watch again",
      title: "Shop", coins: "Fireflies", dollars: "Dollars", tabGifts: "Gifts", tabStyle: "Deck & table", tabBoost: "Boosts", tabDollars: "Dollars", tabCoins: "Fireflies", tabPin: "PIN code",
      buy: "Buy", owned: "Owned: {n}", equip: "Choose", equipped: "Selected", give: "Give", use: "Turn on", free: "Default",
      rose: "Rose", tulips: "Tulips", sunflower: "Sunflower", lily: "Lily", bouquet: "Bouquet", bear: "Teddy", big_bear: "Big teddy", bear_rose: "Teddy with a rose",
      heart_box: "Heart box", candy: "Candy", cake: "Cake", cupcake: "Cupcake",
      back_classic: "Burgundy classic", back_khokhloma: "Khokhloma", back_gzhel: "Gzhel", back_gold: "Gold",
      cloth_green: "Green felt", cloth_burgundy: "Burgundy felt", cloth_wood: "Oak table", cloth_night: "Night felt",
      boost_x2: "×2 winnings for an hour", hint: "Move hint", shield: "Streak shield", insurance: "Loss insurance",
      boost_x2Note: "Durak winnings are doubled for an hour", hintNote: "Shows the best move in games with bots", shieldNote: "Missing a day won't reset the daily reward", insuranceNote: "A loss returns half the stake once",
      exchange: "{c} fireflies → ${d}", exchangeNote: "Dollars are for Durak stakes. They can't be changed back into fireflies.",
      coinsNote: "Fireflies are bought in the GlowLetter app from Google Play.", buyInApp: "Buy in the app", soon: "Buying fireflies opens with the new app version",
      sendTitle: "Send fireflies to a friend", sendNote: "Up to 1000 a day. Sent today: {n}", sendTo: "To", amount: "Amount", send: "Send", sent: "Sent: {n}",
      pinTitle: "PIN code", pinNote: "Enter the code you were given — fireflies arrive at once", pinPlaceholder: "For example, GLOW2026", activate: "Activate", pinOk: "+{n} fireflies!",
      code_invalid: "No such code", code_used_up: "This code is fully used", code_already: "You have already used this code", code_expired: "This code has expired", rate_limited: "Too many attempts. Try again in an hour",
      not_enough_coins: "Not enough fireflies", not_enough_dollars: "Not enough dollars", already_owned: "Already bought", locked: "Buy it first", send_limit: "Limit is 1000 a day", not_friends: "Friends only",
      signIn: "Sign in to your account", error: "Something went wrong. Check the connection", bought: "Bought: {name}", gifted: "Gift sent: {name}", chooseFriend: "Who gets the gift?", noFriends: "Add friends first",
      boostOn: "On", balance: "{c} fireflies · ${d}", settingsTitle: "Fireflies & PIN code", openShop: "Open the shop",
      adminTitle: "PIN codes (admin)", adminCoins: "Fireflies", adminUses: "Activations", adminDays: "Days (0 — no limit)", adminCode: "Own code (optional)", adminNote2: "Note", create: "Create code", created: "Code {code} created", uses: "{u} of {m}", off: "Turn off", on: "Turn on", copy: "Copy", copied: "Copied",
      wall: "My gifts", wallEmpty: "No gifts yet", homeDurak: "Durak", homeShop: "Shop",
      chatDurakFrom: "{name} invites you to play Durak", chatDurakYou: "You invited them to a Durak table", chatDurakJoin: "Take a seat", chatGiftFrom: "A gift from {name}: {item}", chatGiftYou: "You gave: {item}", chatCoinsFrom: "From {name}: {n} fireflies", chatCoinsYou: "You sent {n} fireflies", chatThanks: "Thank you!"
    }
  };
  Object.entries(window.GLOWLETTER_SHOP_I18N || {}).forEach(([lang, values]) => { TEXT[lang] = { ...(TEXT[lang] || {}), ...values }; });

  const state = { root: null, tab: "gifts", shelf: "all", wallet: null, items: [], busy: false, giving: null, wall: null, admin: null, pending: new Set(), pendingStale: false, shownTab: "" };
  const app = () => window.GlowLetterApp || null;
  const cloud = () => window.GlowLetterCloud || null;
  const client = () => cloud()?.getClient?.() || null;
  const signedIn = () => Boolean(cloud()?.getState?.().signedIn);
  const isAdmin = () => Boolean(cloud()?.getState?.().isAdmin);
  const language = () => String(app()?.getState?.().language || document.documentElement.lang || "ru").toLowerCase();
  const tr = (key, values = {}) => String(TEXT[language()]?.[key] ?? TEXT.en[key] ?? TEXT.ru[key] ?? key).replace(/\{(\w+)\}/g, (all, name) => values[name] ?? "");
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const num = value => { try { return new Intl.NumberFormat(language() === "ind" ? "id" : language()).format(value || 0); } catch { return String(value || 0); } };
  const notify = (text, ms = 3600) => app()?.notify?.(text, ms);
  const errorText = error => { const code = String(error?.message || error?.code || ""); return TEXT.ru[code] ? tr(code) : tr("error"); };
  const buyText = (key, values = {}) => { const lang = language() === "id" ? "ind" : language(); return String(COIN_BUY_TEXT[lang]?.[key] ?? COIN_BUY_TEXT.en[key] ?? key).replace(/\{(\w+)\}/g, (all, name) => values[name] ?? ""); };
  const pinText = (key, values = {}) => { const lang = language() === "id" ? "ind" : language(); return String(PIN_TEXT[lang]?.[key] ?? PIN_TEXT.en[key] ?? key).replace(/\{(\w+)\}/g, (all, name) => values[name] ?? ""); };
  const pinCurrency = value => value === "dollars" ? "dollars" : "coins";
  // Цены пакетов из Google Play (с налогом страны); пока магазин не ответил — запасные € из COIN_PACKS.
  const coinPrices = () => { try { const parsed = JSON.parse(window.NurBilling?.coinPrices?.() || "{}"); return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {}; } catch { return {}; } };
  const coinBuy = { busy: false, timer: 0 };

  async function rpc(name, args = {}) {
    const db = client();
    if (!db) throw new Error("offline");
    const { data, error } = await db.rpc(name, args);
    if (error) throw new Error(error.message || "error");
    return data;
  }

  async function refresh() {
    if (!signedIn()) return;
    try {
      const [wallet, items] = await Promise.all([rpc("glowletter_wallet"), state.items.length ? state.items : rpc("glowletter_shop_items")]);
      state.wallet = wallet;
      state.items = items || [];
      dispatchEvent(new CustomEvent("glowletter-wallet-change", { detail: { coins: wallet.coins, dollars: wallet.dollars } }));
    } catch { render(); }
    renderSettings();
  }

  // Покупка видна сразу (владелец 31.10: «чуть лагает, когда покупаешь»): кошелёк меняется на экране
  // в момент нажатия, сервер подтверждает своими числами; ошибка — свежий кошелёк с сервера.
  // Хранится всё только на сервере: светлячки, доллары, вещи, выбранные колода и сукно.
  function patchWallet(patch) {
    if (!state.wallet) return;
    state.wallet = { ...state.wallet, ...patch };
    dispatchEvent(new CustomEvent("glowletter-wallet-change", { detail: { coins: state.wallet.coins, dollars: state.wallet.dollars } }));
  }

  async function buy(id) {
    const item = state.items.find(entry => entry.id === id);
    const wallet = state.wallet;
    if (!item || !wallet || state.pending.has(id)) return;
    if (Number(wallet.coins) < Number(item.price)) { notify(tr("not_enough_coins")); return; }
    state.pending.add(id);
    patchWallet({ coins: wallet.coins - item.price, inventory: { ...wallet.inventory, [id]: owned(id) + 1 } });
    try { navigator.vibrate?.(20); } catch {}
    let got = null;
    try {
      got = await rpc("glowletter_shop_buy", { p_item: id, p_qty: 1 });
      notify(tr("bought", { name: tr(id) }));
    } catch (error) {
      notify(errorText(error));
    }
    state.pending.delete(id);
    // Пока идут другие покупки, их ответы ещё не пришли — тогда числа сервера возьмём после последней.
    if (state.pending.size) { if (got) state.pendingStale = true; else refresh(); render(); }
    else if (!got || state.pendingStale) { state.pendingStale = false; refresh(); }
    else patchWallet({ coins: got.coins, inventory: { ...state.wallet.inventory, [id]: got.qty } });
  }

  async function equip(id) {
    const field = id.startsWith("back_") ? "card_back" : "cloth";
    const before = state.wallet?.[field];
    patchWallet({ [field]: id });
    try { await rpc("glowletter_shop_equip", { p_item: id }); }
    catch (error) { notify(errorText(error)); patchWallet({ [field]: before }); }
  }

  const coinSvg = `<svg class="gs-coin" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#f2c96f" stroke="#a8741f" stroke-width="1.2"/><circle cx="12" cy="12" r="7.4" fill="none" stroke="#fff3c4" stroke-width=".9" opacity=".8"/><path d="M12 17.2s-4.3-2.6-5.5-5.2c-.8-1.9.4-4.1 2.5-4.1 1.2 0 2.1.7 3 1.8.9-1.1 1.8-1.8 3-1.8 2.1 0 3.3 2.2 2.5 4.1-1.2 2.6-5.5 5.2-5.5 5.2Z" fill="#a3213a"/></svg>`;

  function ensureRoot() {
    if (state.root) return state.root;
    const root = document.createElement("section");
    root.className = "gs-root";
    root.hidden = true;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.addEventListener("click", onClick);
    root.addEventListener("submit", onSubmit);
    root.addEventListener("keydown", event => { if (event.key === "Escape") { if (state.giving) { state.giving = null; render(); } else close(); } });
    document.body.append(root);
    state.root = root;
    return root;
  }

  function open(tab = "gifts") {
    ensureRoot();
    state.tab = ["gifts", "style", "boost", "dollars", "coins", "pin"].includes(tab) ? tab : "gifts";
    state.root.hidden = false;
    state.shownTab = "";
    document.body.classList.add("gs-open");
    render();
    requestAnimationFrame(() => state.root.classList.add("is-open"));
    refresh();
  }

  function close() {
    if (!state.root) return;
    state.root.classList.remove("is-open");
    document.body.classList.remove("gs-open");
    setTimeout(() => { if (!state.root.classList.contains("is-open")) state.root.hidden = true; }, 240);
  }

  const owned = id => Number(state.wallet?.inventory?.[id] || 0);

  function giftArt(id) {
    const thumb = window.GlowLetterGiftFx?.thumb?.(id);
    if (thumb) return `<span class="gs-art is-pic" aria-hidden="true"><span class="gs-art-glow"></span><img src="${thumb}" alt="" decoding="async" loading="lazy" draggable="false"></span>`;
    return `<span class="gs-art" aria-hidden="true"><span class="gs-art-glow"></span><b>${(Object.hasOwn(ART, id) && ART[id]) || "🎁"}</b>${Object.hasOwn(SCENE, id) ? `<i>${SCENE[id]}</i>` : ""}</span>`;
  }

  // Подарки по полкам (владелец 01.11: «в магазин добавь много товара»): милые — простые, романтика — эффект
  // на весь экран до 1500, роскошь — от 1500. Метки «Хит» и «Топ» — на самых заметных.
  const GIFT_SHELVES = ["cute", "romance", "luxury"];
  const shelfOf = item => !item.id.startsWith("lux_") ? "cute" : Number(item.price) < 1500 ? "romance" : "luxury";
  const BADGE = { lux_roses: "hit", lux_roseheart: "hit", lux_crown: "hit", lux_lion: "hit", lux_car: "hit", lux_castle: "top", lux_jet: "top", lux_yacht: "top" };

  function itemCard(item) {
    const n = owned(item.id);
    const priceBtn = `<button class="gs-buy" type="button" data-act="buy" data-id="${item.id}"${state.busy || state.pending.has(item.id) ? " disabled" : ""}>${coinSvg}${esc(num(item.price))}</button>`;
    const fx = window.GlowLetterGiftFx;
    if (item.kind === "gift" && fx?.has(item.id)) {
      const badge = BADGE[item.id];
      return `<article class="gs-item is-lux-tile${shelfOf(item) === "luxury" ? " is-top" : ""}">${badge ? `<span class="gs-badge is-${badge}">${esc(tr(badge === "hit" ? "badgeHit" : "badgeTop"))}</span>` : ""}<button class="gs-pic" type="button" data-act="preview" data-id="${item.id}" aria-label="${esc(`${tr("giftPreview")}: ${tr(item.id)}`)}">${fx.thumb?.(item.id) ? giftArt(item.id) : `<span class="gs-art is-lux" aria-hidden="true"><span class="gs-art-glow"></span>${fx.art(item.id)}</span>`}<span class="gs-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 6.5v11l9-5.5Z" fill="currentColor"/></svg></span></button><h4>${esc(tr(item.id))}</h4>${n ? `<small>${esc(tr("owned", { n }))}</small>` : "<small>&nbsp;</small>"}<div class="gs-row">${priceBtn}${n ? `<button class="gs-give" type="button" data-act="give" data-id="${item.id}">${esc(tr("give"))}</button>` : ""}</div></article>`;
    }
    if (item.kind === "gift") {
      return `<article class="gs-item">${giftArt(item.id)}<h4>${esc(tr(item.id))}</h4>${n ? `<small>${esc(tr("owned", { n }))}</small>` : "<small>&nbsp;</small>"}<div class="gs-row">${priceBtn}${n ? `<button class="gs-give" type="button" data-act="give" data-id="${item.id}">${esc(tr("give"))}</button>` : ""}</div></article>`;
    }
    if (item.kind === "boost") {
      const on = item.id === "boost_x2" && state.wallet?.boost_until;
      const xpMult = Date.parse(state.wallet?.xp_boost_until || "") > Date.now() ? Number(state.wallet.xp_boost_mult) || 0 : 0;
      const xpOn = item.id.startsWith("xp_x") && xpMult === Number(item.id.slice(4));
      return `<article class="gs-item is-wide">${giftArt(item.id)}<div class="gs-text"><h4>${esc(tr(item.id))}</h4><p>${esc(tr(`${item.id}Note`))}</p>${n ? `<small>${esc(tr("owned", { n }))}</small>` : ""}${on ? `<small class="gs-on">⚡ ${esc(tr("boostOn"))}</small>` : ""}${xpOn ? `<small class="gs-on">⭐ ${esc(tr("xpOn", { n: xpMult }))}</small>` : ""}</div><div class="gs-col">${priceBtn}${n && item.id !== "hint" ? `<button class="gs-give" type="button" data-act="use" data-id="${item.id}">${esc(tr("use"))}</button>` : ""}</div></article>`;
    }
    return "";
  }

  function styleCard(id, kind, price) {
    const mine = kind === "back" ? state.wallet?.card_back : state.wallet?.cloth;
    const has = price === 0 || owned(id) > 0;
    const preview = kind === "back"
      ? `<span class="gs-back"><img src="${window.GlowDurakCards?.back(id) || ""}" alt=""></span>`
      : `<span class="gs-cloth" data-cloth="${id}"></span>`;
    const action = mine === id
      ? `<span class="gs-equipped">✓ ${esc(tr("equipped"))}</span>`
      : has ? `<button class="gs-give" type="button" data-act="equip" data-id="${id}">${esc(tr("equip"))}</button>`
        : `<button class="gs-buy" type="button" data-act="buy" data-id="${id}">${coinSvg}${esc(num(price))}</button>`;
    return `<article class="gs-item">${preview}<h4>${esc(tr(id))}</h4><small>${price === 0 ? esc(tr("free")) : "&nbsp;"}</small><div class="gs-row">${action}</div></article>`;
  }

  function tabBody() {
    const w = state.wallet;
    const items = state.items;
    if (state.tab === "gifts") {
      const wall = state.wall ? Object.entries(state.wall) : [];
      const gifts = items.filter(i => i.kind === "gift");
      const shelves = GIFT_SHELVES.filter(shelf => state.shelf === "all" || state.shelf === shelf);
      const chips = ["all", ...GIFT_SHELVES].map(shelf => `<button type="button" class="${state.shelf === shelf ? "is-on" : ""}" data-shelf="${shelf}" aria-pressed="${state.shelf === shelf}">${esc(tr(`shelf_${shelf}`))}</button>`).join("");
      return `<nav class="gs-shelves" aria-label="${esc(tr("tabGifts"))}">${chips}</nav>
        ${shelves.map(shelf => {
          const list = gifts.filter(i => shelfOf(i) === shelf).sort((a, b) => a.price - b.price);
          return list.length ? `<section class="gs-shelf is-${shelf}"><h3>${esc(tr(`shelf_${shelf}`))}</h3><p class="gs-note">${esc(tr(`shelf_${shelf}Note`))}</p><div class="gs-grid">${list.map(itemCard).join("")}</div></section>` : "";
        }).join("")}
        <section class="gs-panel"><h3>${esc(tr("wall"))}</h3>${state.wall == null ? "…" : wall.length ? `<div class="gs-wall">${wall.map(([id, n]) => `<span>${window.GlowLetterGiftFx?.thumb?.(id) ? `<img src="${window.GlowLetterGiftFx.thumb(id)}" alt="" loading="lazy" decoding="async">` : (Object.hasOwn(ART, id) && ART[id]) || "🎁"}<b>×${n}</b></span>`).join("")}</div>` : `<p class="gs-note">${esc(tr("wallEmpty"))}</p>`}</section>`;
    }
    if (state.tab === "style") {
      const price = id => items.find(i => i.id === id)?.price || 0;
      return `<div class="gs-grid">${["back_classic", "back_khokhloma", "back_gzhel", "back_gold"].map(id => styleCard(id, "back", id === "back_classic" ? 0 : price(id))).join("")}</div>
        <div class="gs-grid">${["cloth_green", "cloth_burgundy", "cloth_wood", "cloth_night"].map(id => styleCard(id, "cloth", id === "cloth_green" ? 0 : price(id))).join("")}</div>`;
    }
    if (state.tab === "boost") return `<div class="gs-list">${items.filter(i => i.kind === "boost").map(itemCard).join("")}</div>`;
    if (state.tab === "dollars") {
      const rates = w?.exchange || [];
      return `<p class="gs-note">${esc(tr("exchangeNote"))}</p><div class="gs-list">${rates.map((rate, i) => `<article class="gs-item is-wide gs-rate"><span class="gs-art" aria-hidden="true"><span class="gs-art-glow"></span><b>${["💵", "💰", "💰", "🏦", "👑"][i] || "💵"}</b></span><div class="gs-text"><h4>${esc(num(rate.dollars))} $</h4>${i ? `<small class="gs-on">+${Math.round((rate.dollars / rate.coins / 50 - 1) * 100)}%</small>` : ""}</div><button class="gs-buy" type="button" data-act="exchange" data-coins="${rate.coins}"${state.busy ? " disabled" : ""}>${coinSvg}${esc(num(rate.coins))}</button></article>`).join("")}</div>`;
    }
    if (state.tab === "coins") {
      const native = Boolean(window.NurBilling?.buyCoins);
      // Старая версия приложения: NurBilling есть, покупки светлячков ещё нет.
      const oldApp = !native && Boolean(window.NurBilling);
      const prices = native ? coinPrices() : {};
      const friends = window.GlowLetterFriends?.friends?.() || [];
      return `<p class="gs-note">${esc(native ? "" : oldApp ? tr("soon") : buyText("webNote"))}</p>
        <div class="gs-list">${COIN_PACKS.map((pack, i) => `<article class="gs-item is-wide gs-pack${i === COIN_PACKS.length - 1 ? " is-best" : ""}"><span class="gs-art" aria-hidden="true"><span class="gs-art-glow"></span>${coinSvg.replace("gs-coin", "gs-coin is-big")}</span><div class="gs-text"><h4>${esc(num(pack.coins))}</h4><small>${esc(tr("coins"))}</small><span class="gs-tags">${pack.bonus ? `<em class="gs-bonus">${esc(pack.bonus)}</em>` : `<em class="gs-bonus is-start">${esc(buyText("starter"))}</em>`}${i === COIN_PACKS.length - 1 ? `<em class="gs-bonus is-best">${esc(buyText("best"))}</em>` : ""}</span></div><button class="gs-buy is-money" type="button" data-act="coins" data-id="${pack.id}"${native && !coinBuy.busy ? "" : " disabled"}>${esc(typeof prices[pack.id] === "string" && prices[pack.id] ? prices[pack.id] : pack.price)}</button></article>`).join("")}</div>
        <section class="gs-panel"><h3>${esc(tr("sendTitle"))}</h3><p class="gs-note">${esc(tr("sendNote", { n: num(w?.sent_today || 0) }))}</p>
          ${friends.length ? `<form class="gs-form" data-form="send"><label>${esc(tr("sendTo"))}<select name="to">${friends.map(f => `<option value="${esc(f.user_id)}">${esc(f.name)}</option>`).join("")}</select></label><label>${esc(tr("amount"))}<input name="amount" type="number" inputmode="numeric" min="1" max="1000" value="50"></label><button class="gs-primary" type="submit">${esc(tr("send"))}</button></form>` : `<p class="gs-note">${esc(tr("noFriends"))}</p>`}
        </section>`;
    }
    return pinForm();
  }

  function pinForm() {
    return `<section class="gs-panel gs-pin"><h3>${esc(tr("pinTitle"))}</h3><p class="gs-note">${esc(pinText("note"))}</p>
      <form class="gs-form is-inline" data-form="pin"><input name="code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="24" placeholder="${esc(tr("pinPlaceholder"))}" required><button class="gs-primary" type="submit">${esc(tr("activate"))}</button></form></section>`;
  }

  function render() {
    if (!state.root || state.root.hidden) return;
    const w = state.wallet;
    const keep = state.root.querySelector(".gs-scroll")?.scrollTop || 0;
    const sameTab = state.shownTab === state.tab;
    const tabs = [["gifts", "tabGifts"], ["style", "tabStyle"], ["boost", "tabBoost"], ["dollars", "tabDollars"], ["coins", "tabCoins"], ["pin", "tabPin"]];
    state.root.innerHTML = `
      <header class="gs-top">
        <button class="gs-round" type="button" data-act="close" aria-label="×"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <h2>${esc(tr("title"))}</h2>
      </header>
      <div class="gs-balance">
        <div class="gs-bal is-coins">${coinSvg.replace("gs-coin", "gs-coin is-big")}<span><small>${esc(tr("coins"))}</small><b>${w ? esc(num(w.coins)) : "…"}</b></span></div>
        <div class="gs-bal is-dollars"><i>$</i><span><small>${esc(tr("dollars"))}</small><b>${w ? esc(num(w.dollars)) : "…"}</b></span></div>
      </div>
      <nav class="gs-tabs" role="tablist">${tabs.map(([id, key]) => `<button type="button" role="tab" aria-selected="${state.tab === id}" class="${state.tab === id ? "is-on" : ""}" data-tab="${id}">${esc(tr(key))}</button>`).join("")}</nav>
      <div class="gs-scroll">${signedIn() ? tabBody() : `<p class="gs-note">${esc(tr("signIn"))}</p>`}</div>
      ${state.giving ? givePicker() : ""}`;
    if (sameTab) { const scroller = state.root.querySelector(".gs-scroll"); if (scroller) scroller.scrollTop = keep; }
    else state.root.querySelector(".gs-tabs .is-on")?.scrollIntoView({ block: "nearest", inline: "center" });
    state.shownTab = state.tab;
  }

  function givePicker() {
    const friends = window.GlowLetterFriends?.friends?.() || [];
    return `<div class="gs-sheet" role="dialog" aria-modal="true"><div class="gs-sheet-card">${giftArt(state.giving)}<h3>${esc(tr("chooseFriend"))}</h3>
      ${friends.length ? friends.map(f => `<button class="gs-friend" type="button" data-act="give-to" data-id="${esc(f.user_id)}" data-name="${esc(f.name)}">${f.online ? "🟢" : "⚪"} ${esc(f.name)}</button>`).join("") : `<p class="gs-note">${esc(tr("noFriends"))}</p>`}
      <button class="gs-link" type="button" data-act="give-cancel">×</button></div></div>`;
  }

  async function guarded(task) {
    if (state.busy) return;
    state.busy = true;
    render();
    try { await task(); } catch (error) { notify(errorText(error)); }
    finally { state.busy = false; await refresh(); }
  }

  async function onClick(event) {
    const shelf = event.target.closest("[data-shelf]");
    if (shelf) { state.shelf = shelf.dataset.shelf; state.shownTab = ""; render(); state.root.querySelector(".gs-scroll")?.scrollTo({ top: 0 }); return; }
    const tab = event.target.closest("[data-tab]");
    if (tab) {
      state.tab = tab.dataset.tab;
      render();
      if (state.tab === "gifts" && state.wall == null) rpc("glowletter_gift_wall", { p_user: null }).then(wall => { state.wall = wall || {}; render(); }).catch(() => { state.wall = {}; });
      return;
    }
    const button = event.target.closest("[data-act]");
    if (!button) return;
    const id = button.dataset.id;
    switch (button.dataset.act) {
      case "close": close(); return;
      case "buy": return buy(id);
      case "equip": return equip(id);
      case "use": return guarded(() => rpc("glowletter_boost_use", { p_item: id }));
      case "exchange": return guarded(async () => { const got = await rpc("glowletter_exchange", { p_coins: Number(button.dataset.coins) }); notify(`+${num(got.dollars_added)} $`); });
      case "give": state.giving = id; render(); return;
      case "preview": window.GlowLetterGiftFx?.play(id, { line: tr("giftPreviewLine") }); return;
      case "give-cancel": state.giving = null; render(); return;
      case "give-to": { const item = state.giving; state.giving = null; return guarded(async () => { await rpc("glowletter_gift_send", { p_item: item, p_to: id }); notify(tr("gifted", { name: button.dataset.name || "" })); window.GlowLetterGiftFx?.play(item, { line: tr("gifted", { name: button.dataset.name || "" }) }); }); }
      case "coins": return buyCoinPack(id);
      default:
    }
  }

  // Пакет светлячков: открывается окно Google Play, итог приходит событием glowletter-coins-purchased.
  function buyCoinPack(id) {
    if (!window.NurBilling?.buyCoins || coinBuy.busy || !COIN_PACKS.some(pack => pack.id === id)) return;
    if (!signedIn()) { notify(tr("signIn")); return; }
    coinBuy.busy = true;
    clearTimeout(coinBuy.timer);
    // Если приложение не ответило (окно закрыли без события), кнопки снова оживают.
    coinBuy.timer = setTimeout(() => { coinBuy.busy = false; render(); }, 90_000);
    notify(buyText("opening"), 2200);
    render();
    try { window.NurBilling.buyCoins(id); }
    catch { clearTimeout(coinBuy.timer); coinBuy.busy = false; render(); notify(buyText("failed")); }
  }

  addEventListener("glowletter-coins-purchased", event => {
    const detail = event.detail || {};
    clearTimeout(coinBuy.timer);
    coinBuy.busy = false;
    if (detail.ok) {
      const credited = Number(detail.credited) || 0;
      if (credited > 0) {
        notify(buyText("added", { n: num(credited) }), 4200);
        try { navigator.vibrate?.([20, 40, 20]); } catch {}
      }
      const balance = Number(detail.balance);
      if (Number.isFinite(balance) && balance >= 0) patchWallet({ coins: balance });
      refresh();
    } else if (detail.pending) notify(buyText("pending"), 5200);
    else if (detail.delayed) notify(buyText("delayed"), 5200);
    else if (detail.error === "authentication_required") notify(tr("signIn"));
    else if (detail.error && detail.error !== "purchase_canceled") notify(buyText("failed"));
    render();
  });

  async function redeem(code) {
    const got = await rpc("glowletter_promo_redeem", { p_code: code });
    // Сервер говорит, в какой валюте начислил; старый ответ без currency — это светлячки.
    const dollars = pinCurrency(got?.currency) === "dollars";
    notify(dollars ? pinText("okDollars", { n: num(got.amount) }) : tr("pinOk", { n: num(got.amount) }), 4200);
    const patch = {};
    if (got?.coins != null) patch.coins = Number(got.coins);
    if (got?.dollars != null) patch.dollars = Number(got.dollars);
    patchWallet(patch);
    try { navigator.vibrate?.([20, 40, 20]); } catch {}
  }

  async function onSubmit(event) {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    const data = new FormData(form);
    if (form.dataset.form === "pin") return guarded(async () => { await redeem(String(data.get("code") || "")); form.reset(); });
    if (form.dataset.form === "send") return guarded(async () => {
      const amount = Math.round(Number(data.get("amount")) || 0);
      await rpc("glowletter_coins_send", { p_to: String(data.get("to") || ""), p_amount: amount });
      notify(tr("sent", { n: num(amount) }));
    });
  }

  // ——— «Настройки»: раздел «Светлячки и пин-код» ———
  async function renderSettings() {
    const host = document.querySelector("[data-shop-settings]");
    if (!host) return;
    const title = document.querySelector("#settingsWalletTitle");
    if (title) title.textContent = tr("settingsTitle");
    const w = state.wallet;
    host.innerHTML = `
      <div class="gs-set-balance">${coinSvg}<b>${w ? esc(tr("balance", { c: num(w.coins), d: num(w.dollars) })) : esc(signedIn() ? "…" : tr("signIn"))}</b><button type="button" class="gs-set-open" data-shop-open>${esc(tr("openShop"))}</button></div>
      <form class="gs-form is-inline" data-settings-pin><input name="code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="24" placeholder="${esc(tr("pinPlaceholder"))}" aria-label="${esc(tr("pinTitle"))}" required><button class="gs-primary" type="submit">${esc(tr("activate"))}</button></form>
      <p class="gs-note">${esc(pinText("note"))}</p>
      ${isAdmin() ? adminBlock() : ""}`;
  }

  function adminBlock() {
    const list = state.admin || [];
    return `<section class="gs-admin"><h4>${esc(tr("adminTitle"))}</h4>
      <form class="gs-form" data-admin-pin>
        <label>${esc(pinText("currency"))}<select name="currency"><option value="coins">${esc(tr("coins"))}</option><option value="dollars">${esc(tr("dollars"))}</option></select></label>
        <label>${esc(tr("amount"))}<input name="coins" type="number" inputmode="numeric" min="1" max="${PIN_MAX}" step="1" value="1000" required></label>
        <label>${esc(tr("adminUses"))}<input name="uses" type="number" min="1" max="100000" value="20" required></label>
        <label>${esc(tr("adminDays"))}<input name="days" type="number" min="0" max="3650" value="0"></label>
        <label>${esc(tr("adminCode"))}<input name="code" minlength="8" maxlength="24" autocapitalize="characters" spellcheck="false"></label>
        <label>${esc(tr("adminNote2"))}<input name="note" maxlength="120"></label>
        <button class="gs-primary" type="submit">${esc(tr("create"))}</button>
      </form>
      <div class="gs-codes">${list.map(code => `<div class="gs-code${code.active ? "" : " is-off"}"><b>${esc(code.code)}</b><span>${pinCurrency(code.currency) === "dollars" ? `<i class="gs-code-dollar" aria-label="${esc(tr("dollars"))}">$</i>` : coinSvg}${esc(num(code.amount ?? code.coins))} · ${esc(tr("uses", { u: code.uses, m: code.max_uses }))}${code.note ? ` · ${esc(code.note)}` : ""}</span><button type="button" data-admin-copy="${esc(code.code)}">${esc(tr("copy"))}</button><button type="button" data-admin-toggle="${esc(code.code)}" data-on="${code.active ? "0" : "1"}">${esc(code.active ? tr("off") : tr("on"))}</button></div>`).join("")}</div>
    </section>`;
  }

  async function loadAdmin() {
    if (!isAdmin()) return;
    try { state.admin = await rpc("glowletter_admin_promo_list"); } catch { state.admin = []; }
    renderSettings();
  }

  document.addEventListener("submit", async event => {
    const pin = event.target.closest("[data-settings-pin]");
    const admin = event.target.closest("[data-admin-pin]");
    if (!pin && !admin) return;
    event.preventDefault();
    const data = new FormData(event.target);
    try {
      if (pin) { await redeem(String(data.get("code") || "")); pin.reset(); await refresh(); }
      else {
        const amount = Math.round(Number(data.get("coins")) || 0);
        if (amount < 1 || amount > PIN_MAX) { notify(tr("error")); return; }
        const made = await rpc("glowletter_admin_promo_create", { p_code: String(data.get("code") || ""), p_coins: amount, p_currency: pinCurrency(String(data.get("currency") || "")), p_max_uses: Number(data.get("uses")), p_note: String(data.get("note") || ""), p_days: Number(data.get("days") || 0) });
        notify(tr("created", { code: made.code }), 6000);
        admin.reset();
        await loadAdmin();
      }
    } catch (error) { notify(errorText(error)); }
  });
  document.addEventListener("click", async event => {
    if (event.target.closest("[data-shop-open]")) { open("gifts"); return; }
    if (event.target.closest("[data-open-shop]")) { event.preventDefault(); open("gifts"); return; }
    const copy = event.target.closest("[data-admin-copy]");
    if (copy) { try { await navigator.clipboard.writeText(copy.dataset.adminCopy); notify(tr("copied")); } catch {} return; }
    const toggle = event.target.closest("[data-admin-toggle]");
    if (toggle) { try { await rpc("glowletter_admin_promo_toggle", { p_code: toggle.dataset.adminToggle, p_active: toggle.dataset.on === "1" }); } catch (error) { notify(errorText(error)); } loadAdmin(); }
  });
  // Раздел в настройках обновляется, когда настройки открывают.
  document.addEventListener("toggle", event => { if (event.target?.id === "settingsWallet" && event.target.open) { refresh(); loadAdmin(); } }, true);
  addEventListener("glowletter-wallet-change", () => { if (state.root && !state.root.hidden) render(); });
  function localizeHome() {
    const durak = document.getElementById("homeQuickDurak");
    const shop = document.getElementById("homeQuickShop");
    if (durak) durak.textContent = tr("homeDurak");
    if (shop) shop.textContent = tr("homeShop");
    const homeShop = document.getElementById("shopOpenHomeLabel");
    if (homeShop) homeShop.textContent = tr("homeShop");
    const checkers = document.getElementById("homeQuickCheckers");
    if (checkers && window.GlowLetterDurak?.text) checkers.textContent = window.GlowLetterDurak.text("gameCheckers");
    renderSettings();
  }
  addEventListener("glowletter-language-changed", () => setTimeout(() => { localizeHome(); render(); }, 0));
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", localizeHome, { once: true }); else localizeHome();

  // ——— Окно «Вам подарок!» (владелец 31.10: «когда я даю светлячки или доллары, никакого уведомления нет») ———
  // Сервер записывает подарок (админ или друг), страница показывает его при заходе и раз в минуту.
  const gifts = { queue: [], open: false, checking: false, timer: 0 };
  const COIN_ART = `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><defs><radialGradient id="gsGiftCoin" cx=".36" cy=".3"><stop offset="0" stop-color="#fff8d6"/><stop offset=".48" stop-color="#f2c96f"/><stop offset="1" stop-color="#9c6418"/></radialGradient></defs><circle cx="60" cy="60" r="54" fill="url(#gsGiftCoin)"/><circle cx="60" cy="60" r="44" fill="none" stroke="#fff3c4" stroke-opacity=".55" stroke-width="3"/><path d="M60 86S38 73 32 60c-4-9 2-20 12-20 6 0 11 3 16 9 5-6 10-9 16-9 10 0 16 11 12 20-6 13-28 26-28 26Z" fill="#a3213a"/></svg>`;
  const DOLLAR_ART = `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><defs><radialGradient id="gsGiftDollar" cx=".36" cy=".3"><stop offset="0" stop-color="#eaffe0"/><stop offset=".5" stop-color="#6fcf7f"/><stop offset="1" stop-color="#1f6b3d"/></radialGradient></defs><circle cx="60" cy="60" r="54" fill="url(#gsGiftDollar)"/><circle cx="60" cy="60" r="44" fill="none" stroke="#f2c96f" stroke-width="4"/><text x="60" y="80" text-anchor="middle" font-family="Georgia, serif" font-size="58" font-weight="700" fill="#fff8e1">$</text></svg>`;

  function busyNow() {
    const durak = document.querySelector(".dk-root");
    if (durak && !durak.hidden && ["table", "lobby"].includes(durak.dataset.view)) return true;
    return Boolean(document.querySelector(".glt-layer:not([hidden]), .glo-draw:not([hidden]), #gamesLayer.is-play:not([hidden]), .glf-invite-pop"));
  }

  async function checkGifts() {
    if (gifts.checking || !signedIn() || document.hidden) return;
    gifts.checking = true;
    try {
      const [rows, achievements] = await Promise.all([
        rpc("glowletter_gift_notices_pending"),
        rpc("glowletter_achievements_pending").catch(() => [])
      ]);
      const known = new Set(gifts.queue.map(row => row.id));
      (rows || []).forEach(row => { if (!known.has(row.id) && row.id !== gifts.current) gifts.queue.push(row); });
      (achievements || []).forEach(row => {
        const id = `ach:${row.code}`;
        if (!known.has(id) && id !== gifts.current) gifts.queue.push({ id, kind: "achievement", code: row.code });
      });
    } catch {} finally { gifts.checking = false; }
    showGift();
  }

  function showGift() {
    if (gifts.open || !gifts.queue.length) return;
    if (busyNow()) { setTimeout(showGift, 4000); return; }
    const row = gifts.queue.shift();
    gifts.open = true;
    gifts.current = row.id;
    if (row.kind === "achievement") { showAchievement(row); return; }
    if (row.kind === "item") {
      // Роскошный подарок от друга — эффект на весь экран, затем отметка «увидел».
      const fx = window.GlowLetterGiftFx;
      const finish = () => { rpc("glowletter_gift_notices_seen", { p_ids: [row.id] }).catch(() => {}); refresh(); gifts.open = false; setTimeout(showGift, 400); };
      if (fx?.has(row.item_id)) fx.play(row.item_id, { from: row.from_name || "" }).then(finish); else finish();
      return;
    }
    const coins = row.kind === "coins";
    const from = row.from_name === null || row.from_name === undefined ? tr("giftFromGlow") : tr("giftFromName", { name: row.from_name || "GlowLetter" });
    const pop = document.createElement("div");
    pop.className = `gs-gift is-${coins ? "coins" : "dollars"}`;
    pop.setAttribute("role", "alertdialog");
    pop.setAttribute("aria-modal", "true");
    pop.setAttribute("aria-labelledby", "gsGiftTitle");
    pop.innerHTML = `
      <div class="gs-gift-card">
        <div class="gs-gift-rays" aria-hidden="true"></div>
        <div class="gs-gift-sparks" aria-hidden="true">${"<i></i>".repeat(10)}</div>
        <div class="gs-gift-coin">${coins ? COIN_ART : DOLLAR_ART}</div>
        <p class="gs-gift-eyebrow" id="gsGiftTitle">${esc(tr("giftTitle"))}</p>
        <p class="gs-gift-amount">+<b data-count="${Number(row.amount) || 0}">0</b>${coins ? "" : " $"}</p>
        <p class="gs-gift-what">${esc(tr(coins ? "coins" : "dollars"))}</p>
        <p class="gs-gift-from">${esc(from)}</p>
        <button class="gs-gift-take" type="button">${esc(tr("giftTake"))}</button>
      </div>`;
    document.body.append(pop);
    requestAnimationFrame(() => pop.classList.add("is-open"));
    try { navigator.vibrate?.([30, 60, 30]); } catch {}
    const counter = pop.querySelector("[data-count]");
    const target = Number(counter.dataset.count);
    const started = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - started - 350) / 900);
      counter.textContent = num(Math.round(target * (t <= 0 ? 0 : 1 - Math.pow(1 - t, 3))));
      if (t < 1 && pop.isConnected) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    const button = pop.querySelector(".gs-gift-take");
    button.focus({ preventScroll: true });
    button.addEventListener("click", () => {
      counter.textContent = num(target);
      pop.classList.add("is-taken");
      rpc("glowletter_gift_notices_seen", { p_ids: [row.id] }).catch(() => {});
      refresh();
      setTimeout(() => { pop.remove(); gifts.open = false; showGift(); }, 650);
    }, { once: true });
  }

  // ——— Окно «Достижение получено!» (владелец 31.10: выиграть 100к / 1 млн, серии побед, накопить до 1 млрд, 100 уровень) ———
  const SUPER = new Set(["bank_1b", "level_100"]);
  const MEDAL_ART = `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><defs><radialGradient id="gsAchMedal" cx=".36" cy=".3"><stop offset="0" stop-color="#fff8d6"/><stop offset=".5" stop-color="#f2c96f"/><stop offset="1" stop-color="#9c6418"/></radialGradient></defs><path d="M38 4h18l10 30H48ZM82 4H64L54 34h18Z" fill="#a3213a"/><circle cx="60" cy="72" r="42" fill="url(#gsAchMedal)"/><circle cx="60" cy="72" r="33" fill="none" stroke="#fff3c4" stroke-opacity=".6" stroke-width="3"/><path d="m60 50 6.5 13.3 14.6 2.1-10.6 10.3 2.5 14.6L60 83.4l-13 6.9 2.5-14.6-10.6-10.3 14.6-2.1Z" fill="#fff8e1"/></svg>`;
  const rankText = (key, values) => window.GlowLetterRanking?.text?.(key, values) || key;

  function showAchievement(row) {
    const superOne = SUPER.has(row.code);
    const pop = document.createElement("div");
    pop.className = `gs-gift is-ach${superOne ? " is-super" : ""}`;
    pop.setAttribute("role", "alertdialog");
    pop.setAttribute("aria-modal", "true");
    pop.setAttribute("aria-labelledby", "gsAchTitle");
    pop.innerHTML = `
      <div class="gs-gift-card">
        <div class="gs-gift-rays" aria-hidden="true"></div>
        <div class="gs-gift-sparks" aria-hidden="true">${"<i></i>".repeat(10)}</div>
        <div class="gs-gift-coin">${MEDAL_ART}</div>
        <p class="gs-gift-eyebrow" id="gsAchTitle">${esc(tr(superOne ? "achSuper" : "achTitle"))}</p>
        <p class="gs-ach-name">${esc(rankText(`ach_${row.code}`))}</p>
        <p class="gs-gift-from">${esc(rankText(`ach_${row.code}Note`))}</p>
        <button class="gs-gift-take" type="button">${esc(tr("giftTake"))}</button>
      </div>`;
    document.body.append(pop);
    requestAnimationFrame(() => pop.classList.add("is-open"));
    try { navigator.vibrate?.([30, 60, 30, 60, 60]); } catch {}
    const button = pop.querySelector(".gs-gift-take");
    button.focus({ preventScroll: true });
    button.addEventListener("click", () => {
      pop.classList.add("is-taken");
      rpc("glowletter_achievements_seen", { p_codes: [row.code] }).catch(() => {});
      setTimeout(() => { pop.remove(); gifts.open = false; showGift(); }, 650);
    }, { once: true });
  }

  function watchGifts() {
    clearInterval(gifts.timer);
    if (!signedIn()) return;
    setTimeout(checkGifts, 3500);
    gifts.timer = setInterval(checkGifts, 60_000);
  }
  addEventListener("glowletter-cloud-session", event => { if (event.detail?.signedIn) watchGifts(); else clearInterval(gifts.timer); });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) checkGifts(); });
  setTimeout(() => { if (signedIn()) watchGifts(); }, 4000);

  window.GlowLetterShop = Object.freeze({ open, refresh, text: tr, wallet: () => state.wallet, art: id => (Object.hasOwn(ART, id) && ART[id]) || "🎁", artHtml: id => window.GlowLetterGiftFx?.art(id) || (Object.hasOwn(ART, id) && ART[id]) || "🎁", number: num, checkGifts: () => checkGifts() });
})();
