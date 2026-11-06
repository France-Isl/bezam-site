/* Главный экран как в WhatsApp (владелец 01.11): вкладки «Чаты», «Звонки», «Магазин», «Ещё».
   Фон и стиль — с экрана звонка (домик, луна, озеро, тёмное стекло с золотым краем): «такой фон всем по душе».
   Без названия приложения, сердечка, писем и игр на главном — письма и игры переехали во вкладку «Ещё».
   С 01.11 — у всех, и у новых (владелец: «смени это для всех»); «Старый главный экран» в «Ещё» возвращает прежний. */
(() => {
  "use strict";
  if (window.GlowLetterHome) return;

  // Для всех и всегда (владелец 01.11: «почему у меня всё ещё старый экран?»): прежний выбор «Старый главный экран»
  // больше не действует — новый ключ флага, а кнопки возврата нет.
  const FOR_ALL = true;
  const FLAG = "glHome3";
  // Пришли по ссылке на письмо или момент — сначала показываем само письмо, «← Чаты» ведёт на главный.
  // Приложение само пишет from/to/quote в адрес, поэтому признак — rid (он есть только в отправленной ссылке),
  // и после обновления страницы письмо не открываем повторно:
  // только при первом открытии вкладки (sessionStorage).
  const LETTER_LINK = (() => {
    try {
      const params = new URLSearchParams(location.search);
      const seen = sessionStorage.getItem("glhTab");
      sessionStorage.setItem("glhTab", "1");
      return !seen && ["rid", "moment", "audio"].some(key => params.has(key));
    } catch { return false; }
  })();

  const TEXT = {
    ru: { games: "Игры", chats: "Чаты", calls: "Звонки", shop: "Магазин", more: "Ещё", search: "Поиск", noChats: "Здесь будут ваши чаты. Добавьте первого друга по нику или коду.", addFriend: "Добавить друга", newLetter: "Новое письмо", requests: "Заявки в друзья: {n}", you: "Вы:", photo: "Фото", voice: "Голосовое", call: "Звонок", gift: "Подарок", game: "Приглашение в игру", effect: "Эффект", yesterday: "Вчера", callIn: "Входящий", callOut: "Исходящий", noCalls: "Звонков пока не было", letters: "Письма", ranking: "Рейтинг", settings: "Настройки", classic: "Старый главный экран", signIn: "Войдите, чтобы видеть чаты и звонки", signInBtn: "Войти", online: "в сети", noFound: "Никого не нашли", callTo: "Позвонить", newChat: "Новый чат", home: "На главную", allLetters: "Все письма", writeOwn: "Написать своё" },
    en: { games: "Games", chats: "Chats", calls: "Calls", shop: "Shop", more: "More", search: "Search", noChats: "Your chats will appear here. Add your first friend by nickname or code.", addFriend: "Add a friend", newLetter: "New letter", requests: "Friend requests: {n}", you: "You:", photo: "Photo", voice: "Voice message", call: "Call", gift: "Gift", game: "Game invite", effect: "Effect", yesterday: "Yesterday", callIn: "Incoming", callOut: "Outgoing", noCalls: "No calls yet", letters: "Letters", ranking: "Ranking", settings: "Settings", classic: "Classic home screen", signIn: "Sign in to see your chats and calls", signInBtn: "Sign in", online: "online", noFound: "Nobody found", callTo: "Call", newChat: "New chat", home: "Home", allLetters: "All letters", writeOwn: "Write your own" },
    fr: { games: "Jeux", chats: "Discussions", calls: "Appels", shop: "Boutique", more: "Plus", search: "Rechercher", noChats: "Vos discussions apparaîtront ici. Ajoutez votre premier ami par pseudo ou code.", addFriend: "Ajouter un ami", newLetter: "Nouvelle lettre", requests: "Demandes d’amis : {n}", you: "Vous :", photo: "Photo", voice: "Message vocal", call: "Appel", gift: "Cadeau", game: "Invitation à jouer", effect: "Effet", yesterday: "Hier", callIn: "Entrant", callOut: "Sortant", noCalls: "Pas encore d’appels", letters: "Lettres", ranking: "Classement", settings: "Réglages", classic: "Ancien écran d’accueil", signIn: "Connectez-vous pour voir vos discussions et appels", signInBtn: "Se connecter", online: "en ligne", noFound: "Personne trouvé", callTo: "Appeler", newChat: "Nouvelle discussion", home: "Accueil", allLetters: "Toutes les lettres", writeOwn: "Écrire la vôtre" },
    de: { games: "Spiele", chats: "Chats", calls: "Anrufe", shop: "Shop", more: "Mehr", search: "Suchen", noChats: "Hier erscheinen deine Chats. Füge deinen ersten Freund per Nickname oder Code hinzu.", addFriend: "Freund hinzufügen", newLetter: "Neuer Brief", requests: "Freundschaftsanfragen: {n}", you: "Du:", photo: "Foto", voice: "Sprachnachricht", call: "Anruf", gift: "Geschenk", game: "Spieleinladung", effect: "Effekt", yesterday: "Gestern", callIn: "Eingehend", callOut: "Ausgehend", noCalls: "Noch keine Anrufe", letters: "Briefe", ranking: "Rangliste", settings: "Einstellungen", classic: "Alter Startbildschirm", signIn: "Melde dich an, um Chats und Anrufe zu sehen", signInBtn: "Anmelden", online: "online", noFound: "Niemand gefunden", callTo: "Anrufen", newChat: "Neuer Chat", home: "Startseite", allLetters: "Alle Briefe", writeOwn: "Eigenen schreiben" },
    es: { games: "Juegos", chats: "Chats", calls: "Llamadas", shop: "Tienda", more: "Más", search: "Buscar", noChats: "Aquí aparecerán tus chats. Añade a tu primer amigo por apodo o código.", addFriend: "Añadir amigo", newLetter: "Nueva carta", requests: "Solicitudes de amistad: {n}", you: "Tú:", photo: "Foto", voice: "Mensaje de voz", call: "Llamada", gift: "Regalo", game: "Invitación a jugar", effect: "Efecto", yesterday: "Ayer", callIn: "Entrante", callOut: "Saliente", noCalls: "Aún no hay llamadas", letters: "Cartas", ranking: "Ranking", settings: "Ajustes", classic: "Pantalla de inicio clásica", signIn: "Inicia sesión para ver tus chats y llamadas", signInBtn: "Iniciar sesión", online: "en línea", noFound: "No se encontró a nadie", callTo: "Llamar", newChat: "Nuevo chat", home: "Inicio", allLetters: "Todas las cartas", writeOwn: "Escribir la tuya" },
    it: { games: "Giochi", chats: "Chat", calls: "Chiamate", shop: "Negozio", more: "Altro", search: "Cerca", noChats: "Qui compariranno le tue chat. Aggiungi il primo amico con nickname o codice.", addFriend: "Aggiungi un amico", newLetter: "Nuova lettera", requests: "Richieste di amicizia: {n}", you: "Tu:", photo: "Foto", voice: "Messaggio vocale", call: "Chiamata", gift: "Regalo", game: "Invito a giocare", effect: "Effetto", yesterday: "Ieri", callIn: "In arrivo", callOut: "In uscita", noCalls: "Nessuna chiamata", letters: "Lettere", ranking: "Classifica", settings: "Impostazioni", classic: "Schermata iniziale classica", signIn: "Accedi per vedere chat e chiamate", signInBtn: "Accedi", online: "online", noFound: "Nessuno trovato", callTo: "Chiama", newChat: "Nuova chat", home: "Home", allLetters: "Tutte le lettere", writeOwn: "Scrivi la tua" },
    pl: { games: "Gry", chats: "Czaty", calls: "Połączenia", shop: "Sklep", more: "Więcej", search: "Szukaj", noChats: "Tu pojawią się twoje czaty. Dodaj pierwszego znajomego po nicku lub kodzie.", addFriend: "Dodaj znajomego", newLetter: "Nowy list", requests: "Zaproszenia: {n}", you: "Ty:", photo: "Zdjęcie", voice: "Wiadomość głosowa", call: "Połączenie", gift: "Prezent", game: "Zaproszenie do gry", effect: "Efekt", yesterday: "Wczoraj", callIn: "Przychodzące", callOut: "Wychodzące", noCalls: "Jeszcze nie było połączeń", letters: "Listy", ranking: "Ranking", settings: "Ustawienia", classic: "Stary ekran główny", signIn: "Zaloguj się, aby zobaczyć czaty i połączenia", signInBtn: "Zaloguj się", online: "online", noFound: "Nikogo nie znaleziono", callTo: "Zadzwoń", newChat: "Nowy czat", home: "Strona główna", allLetters: "Wszystkie listy", writeOwn: "Napisz własny" },
    uk: { games: "Ігри", chats: "Чати", calls: "Дзвінки", shop: "Магазин", more: "Ще", search: "Пошук", noChats: "Тут будуть ваші чати. Додайте першого друга за ніком або кодом.", addFriend: "Додати друга", newLetter: "Новий лист", requests: "Запити в друзі: {n}", you: "Ви:", photo: "Фото", voice: "Голосове", call: "Дзвінок", gift: "Подарунок", game: "Запрошення в гру", effect: "Ефект", yesterday: "Учора", callIn: "Вхідний", callOut: "Вихідний", noCalls: "Дзвінків ще не було", letters: "Листи", ranking: "Рейтинг", settings: "Налаштування", classic: "Старий головний екран", signIn: "Увійдіть, щоб бачити чати й дзвінки", signInBtn: "Увійти", online: "у мережі", noFound: "Нікого не знайдено", callTo: "Подзвонити", newChat: "Новий чат", home: "На головну", allLetters: "Усі листи", writeOwn: "Написати свій" },
    pt: { games: "Jogos", chats: "Conversas", calls: "Chamadas", shop: "Loja", more: "Mais", search: "Pesquisar", noChats: "Suas conversas aparecerão aqui. Adicione o primeiro amigo pelo apelido ou código.", addFriend: "Adicionar amigo", newLetter: "Nova carta", requests: "Pedidos de amizade: {n}", you: "Você:", photo: "Foto", voice: "Mensagem de voz", call: "Chamada", gift: "Presente", game: "Convite para jogar", effect: "Efeito", yesterday: "Ontem", callIn: "Recebida", callOut: "Efetuada", noCalls: "Ainda não há chamadas", letters: "Cartas", ranking: "Ranking", settings: "Definições", classic: "Ecrã inicial clássico", signIn: "Entre para ver conversas e chamadas", signInBtn: "Entrar", online: "online", noFound: "Ninguém encontrado", callTo: "Ligar", newChat: "Nova conversa", home: "Início", allLetters: "Todas as cartas", writeOwn: "Escrever a sua" },
    tr: { games: "Oyunlar", chats: "Sohbetler", calls: "Aramalar", shop: "Mağaza", more: "Daha fazla", search: "Ara", noChats: "Sohbetlerin burada görünecek. İlk arkadaşını takma ad ya da kodla ekle.", addFriend: "Arkadaş ekle", newLetter: "Yeni mektup", requests: "Arkadaşlık istekleri: {n}", you: "Sen:", photo: "Fotoğraf", voice: "Sesli mesaj", call: "Arama", gift: "Hediye", game: "Oyun daveti", effect: "Efekt", yesterday: "Dün", callIn: "Gelen", callOut: "Giden", noCalls: "Henüz arama yok", letters: "Mektuplar", ranking: "Sıralama", settings: "Ayarlar", classic: "Eski ana ekran", signIn: "Sohbetleri ve aramaları görmek için giriş yap", signInBtn: "Giriş yap", online: "çevrimiçi", noFound: "Kimse bulunamadı", callTo: "Ara", newChat: "Yeni sohbet", home: "Ana sayfa", allLetters: "Tüm mektuplar", writeOwn: "Kendin yaz" },
    ja: { games: "ゲーム", chats: "チャット", calls: "通話", shop: "ショップ", more: "その他", search: "検索", noChats: "ここにチャットが表示されます。ニックネームかコードで最初の友達を追加しましょう。", addFriend: "友達を追加", newLetter: "新しい手紙", requests: "友達リクエスト：{n}", you: "あなた：", photo: "写真", voice: "ボイスメッセージ", call: "通話", gift: "ギフト", game: "ゲームの招待", effect: "エフェクト", yesterday: "昨日", callIn: "着信", callOut: "発信", noCalls: "まだ通話はありません", letters: "手紙", ranking: "ランキング", settings: "設定", classic: "以前のホーム画面", signIn: "ログインするとチャットと通話が見られます", signInBtn: "ログイン", online: "オンライン", noFound: "見つかりません", callTo: "電話する", newChat: "新しいチャット", home: "ホーム", allLetters: "すべての手紙", writeOwn: "自分で書く" },
    ko: { games: "게임", chats: "채팅", calls: "통화", shop: "상점", more: "더보기", search: "검색", noChats: "여기에 채팅이 표시돼요. 닉네임이나 코드로 첫 친구를 추가하세요.", addFriend: "친구 추가", newLetter: "새 편지", requests: "친구 요청: {n}", you: "나:", photo: "사진", voice: "음성 메시지", call: "통화", gift: "선물", game: "게임 초대", effect: "효과", yesterday: "어제", callIn: "수신", callOut: "발신", noCalls: "아직 통화가 없어요", letters: "편지", ranking: "랭킹", settings: "설정", classic: "이전 홈 화면", signIn: "로그인하면 채팅과 통화를 볼 수 있어요", signInBtn: "로그인", online: "온라인", noFound: "찾지 못했어요", callTo: "전화하기", newChat: "새 채팅", home: "홈", allLetters: "모든 편지", writeOwn: "직접 쓰기" },
    zh: { games: "遊戲", chats: "聊天", calls: "通話", shop: "商店", more: "更多", search: "搜尋", noChats: "你的聊天會顯示在這裡。用暱稱或代碼加入第一位朋友吧。", addFriend: "加好友", newLetter: "新信件", requests: "好友邀請：{n}", you: "你：", photo: "照片", voice: "語音訊息", call: "通話", gift: "禮物", game: "遊戲邀請", effect: "特效", yesterday: "昨天", callIn: "來電", callOut: "去電", noCalls: "還沒有通話", letters: "信件", ranking: "排行榜", settings: "設定", classic: "舊版主畫面", signIn: "登入後即可查看聊天與通話", signInBtn: "登入", online: "線上", noFound: "找不到人", callTo: "撥打", newChat: "新聊天", home: "首頁", allLetters: "所有信件", writeOwn: "自己寫" },
    ar: { games: "الألعاب", chats: "الدردشات", calls: "المكالمات", shop: "المتجر", more: "المزيد", search: "بحث", noChats: "ستظهر دردشاتك هنا. أضف صديقك الأول بالاسم المستعار أو الرمز.", addFriend: "إضافة صديق", newLetter: "رسالة جديدة", requests: "طلبات الصداقة: {n}", you: "أنت:", photo: "صورة", voice: "رسالة صوتية", call: "مكالمة", gift: "هدية", game: "دعوة للعب", effect: "تأثير", yesterday: "أمس", callIn: "واردة", callOut: "صادرة", noCalls: "لا مكالمات بعد", letters: "الرسائل", ranking: "الترتيب", settings: "الإعدادات", classic: "الشاشة الرئيسية القديمة", signIn: "سجّل الدخول لترى الدردشات والمكالمات", signInBtn: "تسجيل الدخول", online: "متصل", noFound: "لم يُعثر على أحد", callTo: "اتصال", newChat: "دردشة جديدة", home: "الرئيسية", allLetters: "كل الرسائل", writeOwn: "اكتب رسالتك" },
    id: { games: "Permainan", chats: "Chat", calls: "Panggilan", shop: "Toko", more: "Lainnya", search: "Cari", noChats: "Chatmu akan muncul di sini. Tambahkan teman pertama dengan nama panggilan atau kode.", addFriend: "Tambah teman", newLetter: "Surat baru", requests: "Permintaan teman: {n}", you: "Kamu:", photo: "Foto", voice: "Pesan suara", call: "Panggilan", gift: "Hadiah", game: "Undangan bermain", effect: "Efek", yesterday: "Kemarin", callIn: "Masuk", callOut: "Keluar", noCalls: "Belum ada panggilan", letters: "Surat", ranking: "Peringkat", settings: "Pengaturan", classic: "Layar utama lama", signIn: "Masuk untuk melihat chat dan panggilan", signInBtn: "Masuk", online: "online", noFound: "Tidak ada yang ditemukan", callTo: "Telepon", newChat: "Chat baru", home: "Beranda", allLetters: "Semua surat", writeOwn: "Tulis sendiri" }
  };
  const code = () => (document.documentElement.lang || "ru").toLowerCase().split("-")[0];
  const tr = (key, values = {}) => String((TEXT[code()] || TEXT.en)[key] ?? TEXT.ru[key] ?? key).replace(/\{(\w+)\}/gu, (all, name) => values[name] ?? "");
  const esc = value => String(value ?? "").replace(/[&<>"']/gu, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const cloud = () => window.GlowLetterCloud || null;
  const db = () => cloud()?.getClient?.() || null;
  const signedIn = () => Boolean(cloud()?.getState?.().signedIn);
  const isAdmin = () => Boolean(cloud()?.getState?.().isAdmin);
  // Вход ещё проверяется (после запуска Supabase восстанавливает сессию не сразу) — не показываем «Войдите».
  // Признак — первое событие glowletter-cloud-session (app.js шлёт его и для гостя); на всякий случай не дольше 6 с.
  let sessionKnown = false;
  const checking = () => !signedIn() && !sessionKnown && !cloud()?.getState?.().sessionChecked;

  // Последний список чатов хранится на телефоне: при запуске он виден сразу, а сервер потом его обновляет
  // (владелец 02.11: «начальный экран долго грузится»). При выходе из аккаунта стираем.
  const CACHE = "glhChats1";
  const readCache = () => {
    try {
      const data = JSON.parse(localStorage.getItem(CACHE) || "null");
      return data && typeof data.uid === "string" && Array.isArray(data.rows) && Array.isArray(data.previews) ? data : null;
    } catch { return null; }
  };
  const writeCache = (uid, rows, previews) => { try { localStorage.setItem(CACHE, JSON.stringify({ uid, rows, previews })); } catch {} };
  const dropCache = () => { try { localStorage.removeItem(CACHE); } catch {} };
  const flag = () => { try { return localStorage.getItem(FLAG) || ""; } catch { return ""; } };
  const setFlag = value => { try { localStorage.setItem(FLAG, value); } catch {} };
  const wanted = () => flag() === "chats" || (flag() !== "classic" && (FOR_ALL || isAdmin()));

  // Линейные значки, как на экране звонка.
  const SVG = {
    chats: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20.4l1.3-4.2A8 8 0 1 1 20 12Z"/>',
    calls: '<path d="M6.6 3.8h3l1.4 4-2 1.3a11 11 0 0 0 5.9 5.9l1.3-2 4 1.4v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 6a2 2 0 0 1 2-2.2Z"/>',
    shop: '<path d="M4.6 9.4h14.8l-1.3 10H5.9Z"/><path d="M8.6 9.4V7.6a3.4 3.4 0 0 1 6.8 0v1.8"/>',
    more: '<rect x="4.2" y="4.2" width="6.4" height="6.4" rx="1.8"/><rect x="13.4" y="4.2" width="6.4" height="6.4" rx="1.8"/><rect x="4.2" y="13.4" width="6.4" height="6.4" rx="1.8"/><rect x="13.4" y="13.4" width="6.4" height="6.4" rx="1.8"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.2"/><path d="m15.4 15.4 4.4 4.4"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.5-2-3.4-2.3 1a7.6 7.6 0 0 0-2.6-1.5L14.2 2.6h-4.4L9.5 5.1a7.6 7.6 0 0 0-2.6 1.5l-2.3-1-2 3.4 2 1.5a7.6 7.6 0 0 0 0 3l-2 1.5 2 3.4 2.3-1a7.6 7.6 0 0 0 2.6 1.5l.3 2.5h4.4l.3-2.5a7.6 7.6 0 0 0 2.6-1.5l2.3 1 2-3.4Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    phone: '<path d="M6.6 3.8h3l1.4 4-2 1.3a11 11 0 0 0 5.9 5.9l1.3-2 4 1.4v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 6a2 2 0 0 1 2-2.2Z"/>',
    photo: '<rect x="3.8" y="5" width="16.4" height="14" rx="2.2"/><circle cx="8.8" cy="10" r="1.6"/><path d="m4.6 17 4.8-4.4 4 3.4 2.8-2.2 3.2 2.8"/>',
    voice: '<rect x="9" y="3.6" width="6" height="10.8" rx="3"/><path d="M5.6 11.4a6.4 6.4 0 0 0 12.8 0M12 17.8v2.6"/>',
    gift: '<rect x="4" y="9" width="16" height="11" rx="1.6"/><path d="M3.4 9h17.2M12 9v11M12 9c-1.6-3.6-5.6-3.6-5.6-1.4 0 1.4 2.6 1.4 5.6 1.4Zm0 0c1.6-3.6 5.6-3.6 5.6-1.4 0 1.4-2.6 1.4-5.6 1.4Z"/>',
    game: '<rect x="4.4" y="4.4" width="15.2" height="15.2" rx="3.6"/><circle cx="9" cy="9" r=".9"/><circle cx="15" cy="15" r=".9"/><circle cx="12" cy="12" r=".9"/>',
    spark: '<path d="M12 3.6 13.8 9l5.4 1.8-5.4 1.8L12 18l-1.8-5.4L4.8 10.8 10.2 9Z"/>',
    letter: '<rect x="3.6" y="5.4" width="16.8" height="13.2" rx="2.2"/><path d="m4.4 7.4 7.6 5.4 7.6-5.4"/>',
    friend: '<circle cx="10" cy="8.4" r="3.6"/><path d="M3.6 19.6c.6-3.4 3.2-5.2 6.4-5.2s5.8 1.8 6.4 5.2M18.4 8v6M15.4 11h6"/>',
    inArrow: '<path d="M17 7 7 17m0-8v8h8"/>',
    outArrow: '<path d="M7 17 17 7m0 8V7H9"/>',
    back: '<path d="M15 5 8 12l7 7"/>',
    world: '<circle cx="12" cy="12" r="8.4"/><path d="M3.8 12h16.4M12 3.6c2.4 2.4 3.4 5.2 3.4 8.4s-1 6-3.4 8.4c-2.4-2.4-3.4-5.2-3.4-8.4s1-6 3.4-8.4Z"/>',
    heart: '<path d="M12 20 4.9 12.9a4.3 4.3 0 0 1 6.1-6.1l1 1 1-1a4.3 4.3 0 0 1 6.1 6.1Z"/>',
    clock: '<circle cx="12" cy="12" r="8.2"/><path d="M12 7.4V12l3.2 2"/>',
    trophy: '<path d="M8 4.6h8v4.6a4 4 0 0 1-8 0Z"/><path d="M8 6.4H5.2a2.6 2.6 0 0 0 2.8 3.4M16 6.4h2.8a2.6 2.6 0 0 1-2.8 3.4M12 13.4v3.4m-3.4 2.6h6.8"/>',
    cards: '<rect x="3.6" y="6" width="10" height="13.6" rx="1.8" transform="rotate(-8 8.6 12.8)"/><rect x="10.4" y="4.4" width="10" height="13.6" rx="1.8" transform="rotate(8 15.4 11.2)"/>',
    checkers: '<circle cx="12" cy="12" r="7.6"/><circle cx="12" cy="12" r="4.2"/>',
    classic: '<path d="M4 10.6 12 4l8 6.6V19a1.4 1.4 0 0 1-1.4 1.4h-3.2v-5.6H10.6v5.6H7.4A1.4 1.4 0 0 1 6 19v-8.4Z"/>'
  };
  const svg = key => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SVG[key] || ""}</svg>`;

  const state = { root: null, on: false, tab: "chats", rows: [], previews: new Map(), calls: [], query: "", searching: false, fab: false, timer: 0, loading: false, letters: false, cachedUid: "" };
  {
    const now = cloud()?.getState?.() || {};
    let cached = readCache();
    if (cached && now.sessionChecked && cached.uid !== now.userId) { cached = null; if (!now.userId) dropCache(); }
    if (cached) {
      state.rows = cached.rows;
      state.previews = new Map(cached.previews.map(item => [item.user_id, item]));
      state.cachedUid = cached.uid;
    }
  }

  function bearPicture(id) {
    const couple = window.GlowLetterCouple;
    const outfit = couple?.bearFor?.(id);
    const picture = couple?.outfits?.find(item => item.id === outfit)?.picture || "s28d";
    return `assets/loves/${picture}.webp`;
  }
  const nameHtml = (name, id) => window.GlowLetterFriends?.nameHtml ? window.GlowLetterFriends.nameHtml(name, id) : esc(name);
  const isOnline = row => row?.last_seen && Date.now() - Date.parse(row.last_seen) < 3 * 60 * 1000;

  function when(value) {
    const time = Date.parse(value || "");
    if (!time) return "";
    const date = new Date(time);
    const now = new Date();
    const day = d => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const diff = Math.round((day(now) - day(date)) / 86400000);
    const lang = document.documentElement.lang || "ru";
    try {
      if (diff === 0) return new Intl.DateTimeFormat(lang, { hour: "2-digit", minute: "2-digit" }).format(date);
      if (diff === 1) return tr("yesterday");
      if (diff < 7) return new Intl.DateTimeFormat(lang, { weekday: "short" }).format(date);
      return new Intl.DateTimeFormat(lang, { day: "numeric", month: "short" }).format(date);
    } catch { return date.toLocaleDateString(); }
  }

  // Подпись последнего сообщения: служебные [[...]] — понятным словом со значком.
  function preview(item) {
    if (!item?.body) return "";
    const body = String(item.body);
    const special = body.match(/^\[\[(\w+):/u)?.[1] || "";
    const kinds = { call: ["phone", "call"], gift: ["gift", "gift"], item: ["gift", "gift"], voice: ["voice", "voice"], photo: ["photo", "photo"], image: ["photo", "photo"], durak: ["game", "game"], play: ["game", "game"], draw: ["game", "game"], game: ["game", "game"] };
    const you = item.mine ? `<em>${esc(tr("you"))}</em> ` : "";
    if (special) {
      const [ic, key] = kinds[special] || ["spark", "effect"];
      return `${you}<i class="glh-pv-ic">${svg(ic)}</i>${esc(tr(key))}`;
    }
    return `${you}${esc(body.replace(/\s+/gu, " "))}`;
  }

  async function rpc(name, args = {}) {
    const client = db();
    if (!client) throw new Error("offline");
    const { data, error } = await client.rpc(name, args);
    if (error) throw error;
    return data;
  }

  async function load() {
    if (!signedIn() || state.loading) return;
    state.loading = true;
    try {
      const uid = cloud()?.getState?.().userId || "";
      const [rows, previews] = await Promise.all([rpc("glowletter_friends_list"), rpc("glowletter_chat_previews").catch(() => [])]);
      state.rows = rows || [];
      state.previews = new Map((previews || []).map(item => [item.user_id, item]));
      state.cachedUid = "";
      if (uid && uid === cloud()?.getState?.().userId) writeCache(uid, state.rows, previews || []);
      if (state.tab === "calls") state.calls = (await rpc("glowletter_call_log", { p_limit: 60 }).catch(() => state.calls)) || [];
      window.GlowLetterFriends?.loadStaff?.();
    } catch {} finally {
      state.loading = false;
      if (state.on) render();
    }
  }

  function friendRows() {
    const q = state.query.trim().toLowerCase();
    return state.rows.filter(row => row.status === "friend" && (!q || String(row.display_name || "").toLowerCase().includes(q)))
      .sort((a, b) => String(state.previews.get(b.user_id)?.created_at || b.last_message_at || "").localeCompare(String(state.previews.get(a.user_id)?.created_at || a.last_message_at || "")) || (isOnline(b) - isOnline(a)));
  }

  function avatar(id, online) {
    return `<span class="glh-av${online ? " is-online" : ""}"><img src="${esc(bearPicture(id))}" alt="" loading="lazy" decoding="async"></span>`;
  }

  function chatsView() {
    if (checking() && !state.cachedUid) return `<ul class="glh-list glh-skeleton" aria-hidden="true">${"<li><i></i><span><b></b><em></em></span></li>".repeat(4)}</ul>`;
    if (!signedIn() && !checking()) return `<div class="glh-empty"><p>${esc(tr("signIn"))}</p><button class="glh-primary" type="button" data-glh="signin">${esc(tr("signInBtn"))}</button></div>`;
    const incoming = state.rows.filter(row => row.status === "incoming").length;
    const rows = friendRows();
    const list = rows.map(row => {
      const last = state.previews.get(row.user_id);
      const unread = Number(row.unread || 0);
      return `<li class="glh-chat${unread ? " has-unread" : ""}">
        <button class="glh-chat-open" type="button" data-glh="chat" data-id="${esc(row.user_id)}">${avatar(row.user_id, isOnline(row))}
          <span class="glh-chat-main"><span class="glh-chat-top"><b class="glh-name">${nameHtml(row.display_name || "—", row.user_id)}</b><time>${esc(when(last?.created_at || row.last_message_at))}</time></span>
          <span class="glh-chat-bottom"><span class="glh-pv">${last ? preview(last) : isOnline(row) ? `<span class="glh-on">${esc(tr("online"))}</span>` : ""}</span>${unread ? `<b class="glh-badge">${unread > 99 ? "99+" : unread}</b>` : ""}</span></span>
        </button>
        <button class="glh-chat-call" type="button" data-glh="call" data-id="${esc(row.user_id)}" aria-label="${esc(tr("callTo"))}">${svg("phone")}</button>
      </li>`;
    }).join("");
    return `${incoming ? `<button class="glh-requests" type="button" data-glh="friends">${svg("friend")}<span>${esc(tr("requests", { n: incoming }))}</span><em class="glh-chev"></em></button>` : ""}
      ${rows.length ? `<ul class="glh-list">${list}</ul>` : state.query ? `<p class="glh-note">${esc(tr("noFound"))}</p>` : `<div class="glh-empty"><p>${esc(tr("noChats"))}</p><button class="glh-primary" type="button" data-glh="friends">${svg("friend")} ${esc(tr("addFriend"))}</button></div>`}`;
  }

  function callsView() {
    if (!signedIn()) return chatsView();
    const names = new Map(state.rows.map(row => [row.user_id, row]));
    const list = state.calls.filter(item => names.has(item.user_id)).map(item => {
      const row = names.get(item.user_id);
      return `<li class="glh-chat">
        <button class="glh-chat-open" type="button" data-glh="chat" data-id="${esc(item.user_id)}">${avatar(item.user_id, isOnline(row))}
          <span class="glh-chat-main"><span class="glh-chat-top"><b class="glh-name">${nameHtml(row.display_name || "—", item.user_id)}</b><time>${esc(when(item.created_at))}</time></span>
          <span class="glh-chat-bottom"><span class="glh-pv glh-dir${item.outgoing ? " is-out" : " is-in"}"><i class="glh-pv-ic">${svg(item.outgoing ? "outArrow" : "inArrow")}</i>${esc(tr(item.outgoing ? "callOut" : "callIn"))}</span></span></span>
        </button>
        <button class="glh-chat-call" type="button" data-glh="call" data-id="${esc(item.user_id)}" aria-label="${esc(tr("callTo"))}">${svg("phone")}</button>
      </li>`;
    }).join("");
    return list ? `<ul class="glh-list">${list}</ul>` : `<p class="glh-note">${esc(tr("noCalls"))}</p>`;
  }

  // «Ещё»: всё, что раньше было на главном. Подписи берём у прежних кнопок — они уже переведены приложением.
  const label = (selector, fallback) => {
    const node = document.querySelector(selector);
    const text = (node?.querySelector("span:not([aria-hidden]):not(.home-quick-ic)")?.textContent || node?.getAttribute("aria-label") || node?.textContent || "").replace(/\s+/gu, " ").replace(/\s*\d+$/u, "").trim();
    return text || fallback;
  };
  function gamesView() {
    const tiles = [
      ["games", "game", label("#gamesOpenHome", "Игры")],
      ["durak", "cards", label("[data-open-durak]", "Дурак")],
      ["checkers", "checkers", label("[data-open-checkers]", "Шашки")],
      ["couple", "heart", label("#coupleOpenHome", "Мы вдвоём")],
      ["world", "world", label("#worldOpenHome", "Наш мир")],
      ["ranking", "trophy", tr("ranking")]
    ];
    return `<div class="glh-grid is-games">${tiles.map(([key, ic, text]) => `<button class="glh-tile" type="button" data-glh="go" data-go="${key}"><i class="glh-tile-ic">${svg(ic)}</i><span>${esc(text)}</span></button>`).join("")}</div>`;
  }

  function moreView() {
    const rows = [
      ["letters", "letter", tr("letters")],
      ["moments", "clock", label("#momentsOpenHome", "Мои моменты")],
      ["friends", "friend", label("#friendsOpenHome", "Друзья")],
      ["settings", "gear", tr("settings")]
    ];
    return `<ul class="glh-menu">${rows.map(([key, ic, text]) => `<li><button type="button" data-glh="go" data-go="${key}"><i class="glh-tile-ic">${svg(ic)}</i><span>${esc(text)}</span><em class="glh-chev"></em></button></li>`).join("")}</ul>`;
  }

  function render() {
    const root = state.root;
    if (!root) return;
    const title = { chats: tr("chats"), games: tr("games"), calls: tr("calls"), more: tr("more") }[state.tab] || tr("chats");
    const keep = root.querySelector(".glh-search input");
    const typing = keep && document.activeElement === keep;
    const html = `
      <div class="glh-bg" aria-hidden="true"></div>
      <header class="glh-head">
        <h1 elementtiming="glh-head">${esc(title)}</h1>
        <div class="glh-head-actions">
          ${state.tab === "chats" ? `<button class="glh-round${state.searching ? " is-on" : ""}" type="button" data-glh="search" aria-label="${esc(tr("search"))}">${svg("search")}</button>` : ""}
          <button class="glh-round" type="button" data-glh="go" data-go="settings" aria-label="${esc(tr("settings"))}">${svg("gear")}</button>
        </div>
      </header>
      ${state.tab === "chats" && state.searching ? `<label class="glh-search">${svg("search")}<input type="search" dir="auto" maxlength="40" placeholder="${esc(tr("search"))}" value="${esc(state.query)}" autocomplete="off"></label>` : ""}
      <section class="glh-body">${state.tab === "calls" ? callsView() : state.tab === "games" ? gamesView() : state.tab === "more" ? moreView() : chatsView()}</section>
      ${state.tab === "chats" && signedIn() ? `<div class="glh-fab-wrap${state.fab ? " is-open" : ""}">
        ${state.fab ? `<div class="glh-fab-menu"><button type="button" data-glh="friends">${svg("friend")}<span>${esc(tr("addFriend"))}</span></button><button type="button" data-glh="letter">${svg("letter")}<span>${esc(tr("newLetter"))}</span></button></div>` : ""}
        <button class="glh-fab" type="button" data-glh="fab" aria-expanded="${state.fab}" aria-label="${esc(tr("newChat"))}">${svg("plus")}</button></div>` : ""}
      <nav class="glh-tabs">${[["chats", "chats"], ["games", "game"], ["calls", "calls"], ["shop", "shop"], ["more", "more"]].map(([key, ic]) => {
        const unread = key === "chats" ? state.rows.reduce((sum, row) => sum + (row.status === "friend" ? Number(row.unread || 0) : row.status === "incoming" ? 1 : 0), 0) : 0;
        return `<button type="button" class="${state.tab === key ? "is-active" : ""}" data-glh="tab" data-tab="${key}"><i>${svg(ic)}${unread ? `<b>${unread > 99 ? "99+" : unread}</b>` : ""}</i><span>${esc(tr(key))}</span></button>`;
      }).join("")}</nav>`;
    if (html === state.html && root.firstElementChild) return;
    state.html = html;
    root.innerHTML = html;
    if (typing) {
      const input = root.querySelector(".glh-search input");
      if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
    }
  }

  function go(key) {
    const click = selector => document.querySelector(selector)?.click();
    switch (key) {
      case "letters": showLetters(true); return;
      case "games": click("#gamesOpenHome"); return;
      case "durak": click("[data-open-durak]"); return;
      case "checkers": click("[data-open-checkers]"); return;
      case "couple": click("#coupleOpenHome"); return;
      case "world": click("#worldOpenHome"); return;
      case "moments": click("#momentsOpenHome"); return;
      case "ranking": click("#rankingButton"); return;
      case "friends": window.GlowLetterFriends?.open?.(); return;
      case "settings": click("#settingsButton"); return;
      default:
    }
  }

  // «Письма» — прежний главный экран с письмами, со стрелкой назад к чатам.
  // Внутри .app (там isolation): окна приложения — настройки, язык, письмо, оплата — открываются поверх главного.
  const host = () => document.querySelector(".app") || document.body;

  function showLetters(on) {
    state.letters = on;
    document.body.classList.toggle("glh-letters", on);
    if (state.root) state.root.hidden = on;
    let back = document.getElementById("glhBack");
    if (on && !back) {
      back = document.createElement("button");
      back.id = "glhBack";
      back.className = "glh-back-pill";
      back.type = "button";
      back.addEventListener("click", () => showLetters(false));
      host().append(back);
    }
    if (back) { back.hidden = !on; back.innerHTML = `${svg("back")}<span>${esc(tr("home"))}</span>`; }
    // Вместо значков сверху (язык, ♡, «…») — две понятные кнопки под «Открыть письмо» (владелец 02.11).
    const hero = document.querySelector("#homeScreen .home-hero");
    let actions = document.getElementById("glhLetterActions");
    if (on && hero && !actions) {
      actions = document.createElement("div");
      actions.id = "glhLetterActions";
      actions.className = "glh-letter-actions";
      actions.addEventListener("click", event => {
        const act = event.target.closest("[data-letters]")?.dataset.letters;
        if (act === "all") document.getElementById("libraryButton")?.click();
        if (act === "write") document.querySelector('[data-home-quick="write"]')?.click();
      });
      hero.append(actions);
    }
    if (actions) {
      actions.hidden = !on;
      actions.innerHTML = `<button type="button" data-letters="all">${svg("heart")}<span>${esc(tr("allLetters"))}</span></button><button type="button" data-letters="write">${svg("letter")}<span>${esc(tr("writeOwn"))}</span></button>`;
    }
    if (!on) load();
  }

  function onClick(event) {
    const button = event.target.closest("[data-glh]");
    if (!button) { if (state.fab) { state.fab = false; render(); } return; }
    const act = button.dataset.glh;
    if (act !== "fab" && state.fab) state.fab = false;
    switch (act) {
      case "tab": {
        const tab = button.dataset.tab;
        if (tab === "shop") { window.GlowLetterShop?.open?.(); return; }
        state.tab = tab;
        render();
        if (tab === "calls") load();
        return;
      }
      case "chat": window.GlowLetterFriends?.chat?.(button.dataset.id, state.rows.find(row => row.user_id === button.dataset.id)); return;
      case "call": {
        const row = state.rows.find(item => item.user_id === button.dataset.id);
        if (row) window.GlowLetterCall?.start?.({ user_id: row.user_id, name: row.display_name || "" });
        return;
      }
      case "search": state.searching = !state.searching; if (!state.searching) state.query = ""; render(); state.root.querySelector(".glh-search input")?.focus(); return;
      case "fab": state.fab = !state.fab; render(); return;
      case "friends": render(); window.GlowLetterFriends?.open?.(); return;
      case "letter": render(); document.querySelector('[data-home-quick="write"]')?.click(); return;
      case "signin": window.GlowLetterApp?.requestSignIn?.("home"); return;
      case "go": go(button.dataset.go); return;
      default:
    }
  }

  function enable() {
    if (state.on) return;
    state.on = true;
    if (!state.root) {
      state.root = document.createElement("div");
      state.root.className = "glh";
      state.root.id = "glHome";
      state.root.addEventListener("click", onClick);
      state.root.addEventListener("input", event => {
        if (!event.target.matches(".glh-search input")) return;
        state.query = event.target.value;
        const body = state.root.querySelector(".glh-body");
        if (body) body.innerHTML = chatsView();
      });
      host().append(state.root);
    }
    state.root.hidden = false;
    document.body.classList.add("glh-on");
    document.documentElement.classList.remove("glh-pending");
    render();
    load();
    clearInterval(state.timer);
    state.timer = setInterval(() => { if (state.on && !state.letters && !document.hidden && !document.body.classList.contains("panel-open")) load(); }, 8000);
    if (LETTER_LINK && !state.linkShown) { state.linkShown = true; showLetters(true); }
  }

  function disable() {
    state.on = false;
    clearInterval(state.timer);
    showLetters(false);
    document.body.classList.remove("glh-on");
    if (state.root) state.root.hidden = true;
  }

  function sync() {
    if (wanted()) enable();
    else if (state.on) disable();
  }

  // Вернулись в приложение — список обновляется сразу, без ожидания опроса.
  addEventListener("focus", () => { if (state.on) load(); });
  document.addEventListener("visibilitychange", () => { if (state.on && !document.hidden) load(); });
  new MutationObserver(() => { if (state.on) render(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  window.GlowLetterHome = Object.freeze({
    sync,
    // Включить новый экран себе («chats») или вернуть прежний («classic»).
    use: value => { setFlag(value === "classic" ? "classic" : "chats"); sync(); },
    active: () => state.on
  });

  // Админ определяется после входа — проверяем несколько раз, пока облако загружается.
  let tries = 0;
  const boot = () => { sync(); if (!state.on && ++tries < 20) setTimeout(boot, 1500); };
  // Скрипт стоит сразу после app.js, остальные — defer: экран с чатами показывается, не дожидаясь игр и переводов.
  if (document.querySelector(".app")) boot();
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
  // Вход восстановился — чаты грузим сразу (раньше ждали следующего опроса через 8 с); вышли — стираем список.
  setTimeout(() => { if (!sessionKnown) { sessionKnown = true; if (state.on) render(); } }, 6000);
  addEventListener("glowletter-cloud-session", event => {
    const uid = event.detail?.userId || "";
    sessionKnown = true;
    if (!uid) dropCache();
    if ((state.cachedUid && state.cachedUid !== uid) || !uid) { state.rows = []; state.previews = new Map(); state.cachedUid = ""; }
    if (state.on) { render(); if (uid) load(); }
    setTimeout(sync, 400);
  });
  addEventListener("glowletter-access-change", sync);
})();
