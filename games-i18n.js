// Игры для двоих на двадцати двух языках сверх ru/en/fr: тексты экрана
// (text), вопросы теста (questions), карточки «Да или нет» (yesNo), темы «Что мы любим» (loves),
// вопросы «Кто из нас?» (who) начала фраз «Закончи фразу» (phrases) факты «Правды или лжи» (truth), загадки «Угадай по подсказкам» (hints) и вопросы «Мечты и планы» (dreams). Порядок вариантов совпадает с
// games.js — номер верного варианта хранится на сервере, поэтому варианты
// нельзя переставлять.
window.GLOWLETTER_GAMES_I18N = Object.freeze({
  "de": {
    "text": {
      "homeLink": "Spiele zu zweit",
      "eyebrow": "GLOWLETTER · SPIELE ZU ZWEIT",
      "title": "Gemeinsam spielen",
      "close": "Schließen",
      "lead": "Schicke einem lieben Menschen ein Spiel. Über den Link spielt man kostenlos und ohne Konto.",
      "quizTitle": "Wie gut kennst du mich?",
      "quizNote": "Beantworte Fragen über dich, und ein lieber Mensch versucht zu raten. Das Ergebnis kommt zu dir zurück.",
      "create": "Quiz erstellen",
      "soon": "Bald",
      "soonTitle": "Weitere Spiele folgen",
      "duel": "Duell „Wer ist schneller“",
      "loves": "Was wir lieben",
      "cards": "Memory-Karten zu zweit",
      "who": "Wer von uns?",
      "phrase": "Beende den Satz",
      "myQuizzes": "Meine Quiz",
      "noQuizzes": "Noch keine Quiz. Das erste ist in zwei Minuten erstellt.",
      "forWhom": "Für {name}",
      "noRecipient": "Quiz",
      "resultsCount": "Ergebnisse: {count}",
      "newResults": "Neu: {count}",
      "noResults": "Noch hat niemand gespielt.",
      "anonymous": "Ohne Namen",
      "results": "Ergebnisse",
      "copyLink": "Link kopieren",
      "share": "Senden",
      "deleteQuiz": "Quiz löschen",
      "deleteConfirm": "Dieses Quiz und seine Ergebnisse löschen? Der Link funktioniert dann nicht mehr.",
      "deleted": "Quiz gelöscht",
      "linkCopied": "Link kopiert",
      "back": "Zurück",
      "next": "Weiter",
      "stepNames": "Schritt 1 von 2 · Namen",
      "yourName": "Dein Name",
      "yourNamePlaceholder": "Wie heißt du",
      "recipient": "Für wen · optional",
      "recipientPlaceholder": "Name des lieben Menschen",
      "nameRequired": "Gib deinen Namen ein.",
      "forbiddenName": "Gib einen gewöhnlichen Namen ein.",
      "stepAnswers": "Schritt 2 von 2 · Deine Antworten",
      "answersLead": "Markiere, was auf dich zutrifft. Jede Frage lässt sich austauschen.",
      "swap": "Andere Frage",
      "progress": "{done} von {total} beantwortet",
      "answerAll": "Wähle bei jeder Frage eine Antwort.",
      "finish": "Link erhalten",
      "creating": "Quiz wird erstellt…",
      "createdTitle": "Dein Quiz ist fertig!",
      "createdLead": "Sende den Link. Sobald geantwortet wurde, erscheint das Ergebnis unter „Meine Quiz“.",
      "shareText": "{name} lädt dich zum Spiel „Wie gut kennst du mich?“ ein",
      "signInTitle": "Anmeldung erforderlich",
      "signInNote": "Das Quiz wird in deinem Konto gespeichert, damit die Ergebnisse bei dir ankommen.",
      "signIn": "Anmelden",
      "premiumNote": "Spiele erstellen gehört zum Vollzugang. Über einen Link spielen alle kostenlos.",
      "failed": "Das hat nicht geklappt. Prüfe die Verbindung und versuche es erneut.",
      "rateLimited": "Zu viele Versuche. Bitte später erneut versuchen.",
      "playEyebrow": "EIN SPIEL ZU ZWEIT",
      "playInvite": "{name} lädt dich zum Spielen ein",
      "playLead": "Fragen: {count}. Rate die Antworten — am Ende siehst du, wie viele übereinstimmen.",
      "playName": "Dein Name · optional",
      "playNamePlaceholder": "Damit man dich erkennt",
      "start": "Los geht’s",
      "playLoading": "Spiel wird geladen…",
      "playMissing": "Dieses Spiel ist nicht verfügbar: Der Link wurde gelöscht oder ist abgelaufen.",
      "playOffline": "Für das Spiel ist eine Internetverbindung nötig.",
      "retry": "Erneut versuchen",
      "questionOf": "Frage {n} von {total}",
      "asks": "{name} fragt",
      "counting": "Übereinstimmungen werden gezählt…",
      "scoreOf": "{score} von {total}",
      "tierAll": "Perfekt! Ihr kennt euch besser als alle anderen",
      "tierHigh": "Ihr kennt euch richtig gut",
      "tierMid": "Nicht schlecht! Es gibt noch einiges zu entdecken",
      "tierLow": "Viele schöne Entdeckungen liegen vor euch",
      "sentTo": "{name} sieht dein Ergebnis",
      "review": "Deine Antworten",
      "rightAnswer": "Richtige Antwort",
      "makeOwn": "Eigenes Quiz erstellen",
      "home": "Zur Startseite",
      "resultToast": "{name}: {score} von {total} bei „Wie gut kennst du mich?“",
      "ownerAnswers": "Antworten des Erstellers",
      "playerAnswers": "Antworten von {name}",
      "paywallTitle": "Spiele, Spaß<br><em>und Briefe</em>",
      "groupGames": "Spiele",
      "groupFun": "Spaß",
      "groupLetters": "Briefe",
      "featQuiz": "„Wie gut kennst du mich?“ — das Ergebnis kommt zu dir",
      "featGamesSoon": "Duell „Wer ist schneller“, „Was wir lieben“, Memory-Karten mit Bärchen",
      "featFunSoon": "„Wer von uns?“ und „Beende den Satz“ mit dem Buch eures Paares",
      "featCollection": "Die ganze Sammlung an Briefen und Gedichten in 15 Sprachen",
      "featMoments": "Momente, Erinnerungen und ein QR-Brief, der sich am richtigen Tag öffnet",
      "featAudio": "Eigenes Audio im Brief und Antworten des Empfängers",
      "groupTalk": "Freunde und Anrufe",
      "featCall": "Anrufe mit Freunden: Stimme, Lautsprecher und lebendige Reaktionen",
      "ynTitle": "Ja oder Nein",
      "ynNote": "Ein Live-Spiel zu zweit: 5 Sekunden pro Karte. Wer rechtzeitig antwortet, sieht die Antwort des anderen.",
      "ynCreate": "Raum erstellen",
      "ynWaiting": "Wir warten, bis {name} den Link öffnet…",
      "ynWaitingAny": "Wir warten auf deine Begleitung…",
      "ynShareText": "{name} lädt dich zum Live-Spiel „Ja oder Nein“ ein",
      "ynPartnerHere": "{name} ist da!",
      "ynStart": "Spiel starten",
      "ynWaitHost": "{name} startet gleich das Spiel",
      "ynYes": "Ja",
      "ynNo": "Nein",
      "ynMissed": "Zu spät — diese Karte bleibt zu",
      "ynMatch": "Gleiche Antwort!",
      "ynRound": "Karte {n} von {total}",
      "ynAnswered": "Antwort gesendet, wir warten auf die andere Antwort…",
      "ynFinal": "{score} von {total} gleich",
      "ynFinalHigh": "Ihr versteht euch ohne Worte",
      "ynFinalMid": "So verschieden — und so nah",
      "ynAgain": "Noch einmal spielen",
      "ynLeft": "Die Verbindung zum anderen ist weg. Wir warten…",
      "ynYou": "Du",
      "ynOffline": "Keine Verbindung zum Spiel. Prüfe das Internet und öffne den Link erneut.",
      "ynJoin": "Mitspielen",
      "ynJoinLead": "{name} wartet auf dich. 5 Sekunden pro Antwort!",
      "ynStepNames": "Dein Name und der Name deiner Begleitung",
      "ynRoomReady": "Der Raum ist bereit — sende den Link",
      "ynStayHere": "Lass diesen Bildschirm offen: Das Spiel beginnt, sobald der Link geöffnet wird.",
      "featYesNo": "Live-Spiel „Ja oder Nein“ — 5 Sekunden pro Antwort",
      "ynPartnerMissed": "Keine Antwort — die Zeit ist um",
      "lvTitle": "Was wir lieben",
      "lvNote": "Ein Live-Spiel zu zweit: 4 Bilder, je 10 Sekunden, um zu wählen, was ihr am liebsten mögt. Ihr dürft auch dasselbe wählen!",
      "lvShareText": "{name} lädt dich zum Live-Spiel „Was wir lieben“ ein",
      "lvJoinLead": "{name} wartet auf dich. Wähle das Bild, das du am liebsten magst!",
      "lvRound": "Thema {n} von {total}",
      "lvPick": "Wähle, was du am liebsten magst",
      "lvBoth": "Ihr habt beide gewählt: {item}",
      "lvCommon": "Ihr liebt beide",
      "lvDiff": "Verschiedene Geschmäcker — umso spannender!",
      "lvFinalHigh": "Ihr habt so viel gemeinsam!",
      "lvFinalMid": "So verschieden — und ihr ergänzt euch",
      "featLoves": "Live-Spiel „Was wir lieben“ — 4 Bilder, gemeinsam wählen",
      "featGamesSoon2": "Duell „Wer ist schneller“ und Memory-Karten mit Bärchen",
      "mcTitle": "Memory-Karten mit Bärchen",
      "mcNote": "Ein Live-Memory zu zweit: Deckt abwechselnd zwei Karten auf und findet die Paare. Drei Level, von 8 bis 16 Karten.",
      "mcShareText": "{name} lädt dich zum Live-Spiel „Memory-Karten mit Bärchen“ ein",
      "mcJoinLead": "{name} wartet auf dich. Findet die Paare abwechselnd!",
      "mcLevel": "Level {n} von {total}",
      "mcTurnYou": "Du bist dran — deck zwei Karten auf",
      "mcTurnThem": "{name} ist dran",
      "mcPairs": "Gefundene Paare: {found} von {total}",
      "mcLevelDone": "Alle Paare gefunden!",
      "mcTimeUp": "Die Zeit für dieses Level ist um",
      "mcNext": "Weiter: Level {n}",
      "mcFinal": "Gefundene Paare: {found} von {total}",
      "mcFinalHigh": "Ein tolles Team!",
      "mcFinalMid": "Schönes Spiel — noch eine Runde?",
      "featCards": "Live-Spiel „Memory-Karten mit Bärchen“ — findet Paare zu zweit",
      "featGamesSoon3": "Duell „Wer ist schneller“",
      "duTitle": "Wer ist schneller",
      "duNote": "Ein Live-Duell: ein Wort und vier Bilder. Tippe als Erstes auf das richtige Bild — ein falscher Tipp kostet die Runde.",
      "duShareText": "{name} fordert dich zum Live-Duell „Wer ist schneller“ heraus",
      "duJoinLead": "{name} wartet auf dich. Finde das richtige Bild schneller!",
      "duRound": "Runde {n} von {total}",
      "duFind": "Finde: {item}",
      "duYouWon": "Du warst schneller!",
      "duTheyWon": "Schneller: {name}",
      "duWrong": "Falsches Bild — diese Runde ist verloren",
      "duNobody": "Niemand hat es rechtzeitig gefunden",
      "duScore": "Du {you} : {them} {name}",
      "duFinalWin": "Gewonnen! Heute mit scharfem Blick.",
      "duFinalLose": "Diesmal gewinnt {name} — Revanche?",
      "duFinalDraw": "Unentschieden — ihr seid gleich stark!",
      "duSeconds": "{s} s",
      "featDuel": "Live-Duell „Wer ist schneller“ — finde das Bild als Erstes",
      "whoTitle": "Wer von uns?",
      "whoNote": "Ein Live-Spiel zu zweit: eine Frage — tippe auf „Ich“ oder auf den Namen deiner Begleitung. Seht, ob ihr euch einig seid.",
      "whoShareText": "{name} lädt dich zum Live-Spiel „Wer von uns?“ ein",
      "whoJoinLead": "{name} wartet auf dich. Antworte ehrlich — dann vergleicht ihr!",
      "whoRound": "Frage {n} von {total}",
      "whoMe": "Ich",
      "whoAgree": "Ihr seid euch einig: {name}",
      "whoDiffer": "Verschiedene Meinungen — sprecht darüber!",
      "whoFinal": "{score} von {total} Mal einig",
      "whoFinalHigh": "Ihr kennt einander so gut!",
      "whoFinalMid": "Viel Gesprächsstoff — und das ist schön",
      "featWho": "Live-Spiel „Wer von uns?“ — seid ihr euch einig?",
      "phTitle": "Beende den Satz",
      "phNote": "Ein Live-Spiel zu zweit: Ihr beendet beide denselben warmen Satz mit euren eigenen Worten und lest dann eure Antworten.",
      "phShareText": "{name} lädt dich zum Live-Spiel „Beende den Satz“ ein",
      "phJoinLead": "{name} wartet auf dich. Beende jeden Satz mit deinen eigenen Worten!",
      "phRound": "Satz {n} von {total}",
      "phPlaceholder": "Deine Fortsetzung…",
      "phDone": "Fertig",
      "phWaiting": "Wir warten auf {name}…",
      "phSkipped": "Keine Antwort",
      "phSave": "Im Buch eures Paares speichern",
      "phSaved": "Im Buch eures Paares gespeichert",
      "phForbidden": "Bitte schreib ohne Links und grobe Wörter.",
      "phNext": "Nächster Satz",
      "phFinal": "Gemeinsam beendete Sätze: {count}",
      "phFinalLead": "Speichert eure liebsten Antworten im Buch eures Paares.",
      "featPhrase": "Live-Spiel „Beende den Satz“ mit dem Buch eures Paares",
      "bookTitle": "Buch eures Paares",
      "bookNote": "Die wärmsten Antworten aus „Beende den Satz“, gespeichert in deinem Konto.",
      "bookOpen": "Buch öffnen",
      "bookEmpty": "Das Buch ist noch leer. Spielt „Beende den Satz“ und speichert die Antworten, die euch gefallen.",
      "bookDelete": "Löschen",
      "bookDeleteConfirm": "Diese Seite aus dem Buch löschen?",
      "bookYou": "Du",
      "inviteTitle": "Freunde einladen",
      "inviteNote": "Die Einladung kommt als Nachricht mit dem Spiel an.",
      "invite": "Einladen",
      "invited": "Eingeladen",
      "inviteNone": "Füge im Bereich „Freunde“ Menschen hinzu, um sie mit einem Tippen einzuladen.",
      "inviteSent": "Einladung an {name} gesendet",
      "truth": "Wahr oder falsch",
      "tfTitle": "Wahr oder falsch",
      "tfNote": "Ein Live-Spiel zu zweit: erstaunliche Fakten über die Welt. 12 Sekunden — wahr oder falsch? Für jede richtige Antwort gibt es einen Punkt.",
      "tfShareText": "{name} lädt dich zum Live-Spiel „Wahr oder falsch“ ein",
      "tfJoinLead": "{name} wartet auf dich. Wahr oder falsch — entscheide schnell!",
      "tfRound": "Fakt {n} von {total}",
      "tfTrue": "Wahr",
      "tfFalse": "Falsch",
      "tfIsTrue": "Das stimmt!",
      "tfIsFalse": "Das stimmt nicht!",
      "tfFirstYou": "Du lagst als Erstes richtig!",
      "tfFirstThem": "{name} lag als Erstes richtig",
      "tfFinalWin": "Sieg! Du weißt mehr über die Welt.",
      "tfFinalLose": "Diesmal weiß {name} mehr — Revanche?",
      "tfFinalDraw": "Unentschieden — ihr wisst genau gleich viel!",
      "featTruth": "Live-Spiel „Wahr oder falsch“ — erstaunliche Fakten über die Welt",
      "countries": "Errate das Land",
      "coTitle": "Errate das Land",
      "coNote": "Ein Live-Spiel zu zweit: Der Bär reist um die Welt. 10 Sekunden — errate, in welchem Land er ist! Für jede richtige Antwort gibt es einen Punkt.",
      "coShareText": "{name} lädt dich zum Live-Spiel „Errate das Land“ ein",
      "coJoinLead": "{name} wartet auf dich. Errate das Land anhand des Bildes!",
      "coRound": "Land {n} von {total}",
      "coAsk": "Welches Land ist das?",
      "coFinalWin": "Sieg! Du kennst dich in der Welt bestens aus.",
      "coFinalLose": "Diesmal kennt {name} die Welt besser — Revanche?",
      "coFinalDraw": "Unentschieden — ihr kennt beide die Welt gut!",
      "featCountries": "Live-Spiel „Errate das Land“ — 40 Länder",
      "hints": "Rate mit Hinweisen",
      "dreams": "Träume und Pläne",
      "hiTitle": "Rate mit Hinweisen",
      "hiNote": "Ein Live-Spiel zu zweit: Drei Hinweise erscheinen nacheinander. Errätst du es beim ersten — 3 Punkte, beim zweiten — 2, beim dritten — 1.",
      "hiShareText": "{name} lädt dich zum Live-Spiel „Rate mit Hinweisen“ ein",
      "hiJoinLead": "{name} wartet auf dich. Rate so früh wie möglich!",
      "hiRound": "Rätsel {n} von {total}",
      "hiAsk": "Was ist das?",
      "hiClue": "Hinweis {n}",
      "hiPoints": "Punkte: +{n}",
      "hiNoPoints": "Diesmal keine Punkte",
      "hiFinalWin": "Gewonnen! Du rätst großartig.",
      "hiFinalLose": "Diesmal hat {name} besser geraten — Revanche?",
      "hiFinalDraw": "Unentschieden — ihr ratet beide großartig!",
      "featHints": "Live-Spiel „Rate mit Hinweisen“ — 3, 2 oder 1 Punkt",
      "drTitle": "Träume und Pläne",
      "drNote": "Ein Live-Spiel zu zweit: Zuhause, Reisen, Lernen und Hobbys. Wähle, was du dir wünschst, und seht, ob eure Träume übereinstimmen.",
      "drShareText": "{name} lädt dich zum Live-Spiel „Träume und Pläne“ ein",
      "drJoinLead": "{name} wartet auf dich. Wähle, was du dir wirklich wünschst!",
      "drRound": "Frage {n} von {total}",
      "drPick": "Wähle, was du dir wünschst",
      "drBoth": "Gemeinsam: {item}",
      "drDiff": "Verschiedene Träume — erzählt einander, warum!",
      "drFinalHigh": "Ihr habt so viele gemeinsame Träume!",
      "drFinalMid": "Verschiedene Träume — viel Gesprächsstoff",
      "drCommon": "Eure gemeinsamen Träume",
      "featDreams": "Live-Spiel „Träume und Pläne“ — passen eure Träume zusammen?",
      "modestTitle": "Zurückhaltender Modus",
      "modestNote": "Keine Fragen zu Gefühlen, Umarmungen oder Dates – nur freundliche"
    },
    "questions": {
      "q01": [
        "Meine Lieblingsjahreszeit?",
        "Frühling",
        "Sommer",
        "Herbst",
        "Winter"
      ],
      "q02": [
        "Was wähle ich zum Frühstück?",
        "Kaffee und Croissant",
        "Haferbrei",
        "Eier",
        "Nur Tee"
      ],
      "q03": [
        "Mein perfekter freier Tag?",
        "Zu Hause unter der Decke",
        "Ein Spaziergang im Park",
        "Ein Ausflug ins Grüne",
        "Zeit mit Freunden"
      ],
      "q04": [
        "Wohin träume ich zu reisen?",
        "Ans Meer",
        "In die Berge",
        "In eine große Stadt",
        "In ein gemütliches Landhaus"
      ],
      "q05": [
        "Mein Lieblingseis?",
        "Vanille",
        "Schokolade",
        "Erdbeere",
        "Pistazie"
      ],
      "q06": [
        "Was muntert mich am schnellsten auf?",
        "Eine Umarmung",
        "Eine Überraschung",
        "Liebe Worte",
        "Etwas Leckeres"
      ],
      "q07": [
        "Ich bin eher…",
        "Frühaufsteher",
        "Nachteule",
        "Ich schlafe, wann immer es geht",
        "Fan vom Mittagsschlaf"
      ],
      "q08": [
        "Welchen Film wähle ich heute Abend?",
        "Eine Komödie",
        "Eine romantische Geschichte",
        "Einen Krimi",
        "Einen Zeichentrickfilm"
      ],
      "q09": [
        "Meine Lieblingsfarbe?",
        "Rot",
        "Blau",
        "Grün",
        "Rosa"
      ],
      "q10": [
        "Wovor habe ich am meisten Angst?",
        "Vor Spinnen",
        "Vor der Höhe",
        "Vor der Dunkelheit",
        "Vor dem Zuspätkommen"
      ],
      "q11": [
        "Welche Blumen liebe ich?",
        "Rosen",
        "Tulpen",
        "Pfingstrosen",
        "Gänseblümchen"
      ],
      "q12": [
        "Was mache ich, wenn ich traurig bin?",
        "Einen lieben Menschen anrufen",
        "Etwas Süßes essen",
        "Spazieren gehen",
        "Schlafen gehen"
      ],
      "q13": [
        "Welches Tier steht mir am nächsten?",
        "Ein Kätzchen",
        "Ein Hund",
        "Ein Bärenjunges",
        "Ein kleiner Fuchs"
      ],
      "q14": [
        "Das schönste Geschenk für mich?",
        "Etwas Selbstgemachtes",
        "Eine Reise",
        "Schmuck",
        "Ein Buch"
      ],
      "q15": [
        "Mein Lieblingsgetränk?",
        "Schwarzer Tee",
        "Grüner Tee",
        "Kaffee",
        "Heiße Schokolade"
      ],
      "q16": [
        "Mein Lieblingssnack?",
        "Schokolade",
        "Chips",
        "Obst",
        "Ein Gebäck"
      ],
      "q17": [
        "Was wähle ich auf Reisen?",
        "Museen",
        "Den Strand",
        "Das örtliche Essen",
        "Ziellos umherschlendern"
      ],
      "q18": [
        "Wie verbringe ich am liebsten den Abend?",
        "Mit einem Buch",
        "Mit einer Serie",
        "Mit Gesprächen",
        "Bei einem Spaziergang"
      ],
      "q19": [
        "Welches Wetter mag ich am liebsten?",
        "Sonnenschein",
        "Warmen Regen",
        "Schneefall",
        "Eine leichte Brise"
      ],
      "q20": [
        "Welche Superkraft würde zu mir passen?",
        "Fliegen",
        "Gedanken lesen",
        "Die Zeit anhalten",
        "Teleportieren"
      ],
      "q21": [
        "Was ist mir bei lieben Menschen am wichtigsten?",
        "Vertrauen",
        "Fürsorge",
        "Humor",
        "Unterstützung"
      ],
      "q22": [
        "Auf welches Fest freue ich mich am meisten?",
        "Silvester",
        "Meinen Geburtstag",
        "Die Sommerferien",
        "Den Valentinstag"
      ],
      "q23": [
        "Wie sage ich meistens „Ich hab dich lieb“?",
        "Mit Worten",
        "Mit Taten",
        "Mit Umarmungen",
        "Mit Geschenken"
      ],
      "q24": [
        "Was bestelle ich im Café?",
        "Pasta",
        "Sushi",
        "Einen Salat",
        "Ein Dessert"
      ],
      "q25": [
        "Meine Lieblingstageszeit?",
        "Morgen",
        "Nachmittag",
        "Abend",
        "Nacht"
      ],
      "q26": [
        "Welche Küche wähle ich?",
        "Italienisch",
        "Japanisch",
        "Hausmannskost",
        "Mexikanisch"
      ],
      "q27": [
        "Wo kann ich am besten nachdenken?",
        "Unter der Dusche",
        "Beim Spazierengehen",
        "Unterwegs",
        "Vor dem Einschlafen"
      ],
      "q28": [
        "Was mache ich morgens als Erstes?",
        "Aufs Handy schauen",
        "Wasser trinken",
        "Kaffee kochen",
        "Noch etwas liegen bleiben"
      ],
      "q29": [
        "Mein Lieblingsobst?",
        "Apfel",
        "Banane",
        "Mango",
        "Wassermelone"
      ],
      "q30": [
        "Welches Hobby passt am besten zu mir?",
        "Zeichnen",
        "Kochen",
        "Sport",
        "Lesen"
      ],
      "q31": [
        "Wie möchte ich meinen Geburtstag feiern?",
        "Mit einer großen Party",
        "Mit einem Abendessen zu zweit",
        "Mit einer Reise",
        "Mit einem ruhigen Abend zu Hause"
      ],
      "q32": [
        "Wie stehe ich zu Überraschungen?",
        "Ich liebe sie",
        "Sie machen mich etwas nervös",
        "Ich bereite sie gern für andere vor",
        "Ich weiß lieber vorher Bescheid"
      ],
      "q33": [
        "Welche Süßigkeit mag ich am liebsten?",
        "Kuchen",
        "Eis",
        "Kekse",
        "Bonbons"
      ],
      "q34": [
        "Was nehme ich auf eine einsame Insel mit?",
        "Ein Buch",
        "Mein Handy",
        "Eine Decke",
        "Eine Kamera"
      ],
      "q35": [
        "Wie entspanne ich nach einem harten Tag?",
        "Ein warmes Bad",
        "Eine Serie",
        "Ein Spaziergang",
        "Ein Gespräch mit einem lieben Menschen"
      ],
      "q36": [
        "Wie reise ich am liebsten?",
        "Mit dem Zug",
        "Mit dem Flugzeug",
        "Mit dem Auto",
        "Mit dem Fahrrad"
      ],
      "q37": [
        "Mein liebstes Kinderspiel?",
        "Verstecken",
        "Fangen",
        "Bauklötze",
        "Malen"
      ],
      "q38": [
        "Welches Märchen steht mir am nächsten?",
        "Aschenputtel",
        "Der kleine Prinz",
        "Pu der Bär",
        "Alice im Wunderland"
      ],
      "q39": [
        "Womit würde ich einem lieben Menschen eher eine Freude machen?",
        "Mit einer Überraschung",
        "Mit einer Karte",
        "Mit einer Reise",
        "Mit einem Abendessen"
      ],
      "q40": [
        "Was fotografiere ich am häufigsten?",
        "Mich selbst",
        "Die Natur",
        "Essen",
        "Ich fotografiere kaum"
      ],
      "q41": [
        "Mein Lieblingsplatz zu Hause?",
        "Das Bett",
        "Die Küche",
        "Das Sofa",
        "Der Balkon"
      ],
      "q42": [
        "Was fällt mir an einem Menschen zuerst auf?",
        "Das Lächeln",
        "Die Augen",
        "Die Stimme",
        "Der Humor"
      ],
      "q43": [
        "Was bringt mich am schnellsten zum Lachen?",
        "Lustige Videos",
        "Witze von lieben Menschen",
        "Peinliche Momente",
        "Tiere"
      ],
      "q44": [
        "Was trinke ich an einem heißen Sommertag?",
        "Limonade",
        "Eistee",
        "Saft",
        "Wasser mit Eis"
      ],
      "q45": [
        "Welches Element steht mir am nächsten?",
        "Wasser",
        "Feuer",
        "Erde",
        "Luft"
      ],
      "q46": [
        "Welche Geschichten liebe ich?",
        "Abenteuer",
        "Liebesgeschichten",
        "Science-Fiction",
        "Wahre Geschichten"
      ],
      "q47": [
        "Wie verbringe ich einen Regentag?",
        "Mit Lesen",
        "Mit Schlafen",
        "Mit einem Film",
        "Mit einem Spaziergang unterm Schirm"
      ],
      "q48": [
        "Was schätze ich an einem Geschenk am meisten?",
        "Die Aufmerksamkeit",
        "Den Nutzen",
        "Die Schönheit",
        "Die Überraschung"
      ],
      "q49": [
        "Welche Kartoffeln wähle ich?",
        "Püree",
        "Pommes",
        "Ofenkartoffeln",
        "Chips"
      ],
      "q50": [
        "Wohin gehe ich in einer neuen Stadt zuerst?",
        "In ein Café",
        "In ein Museum",
        "In einen Park",
        "Shoppen"
      ],
      "q51": [
        "Was mache ich, wenn ich nicht schlafen kann?",
        "Lesen",
        "Am Handy scrollen",
        "Schäfchen zählen",
        "Warme Milch trinken"
      ],
      "q52": [
        "Wie bereite ich mich auf einen wichtigen Tag vor?",
        "Ich plane alles im Voraus",
        "Ich mache alles in letzter Minute",
        "Ich bitte um Hilfe",
        "Ich bin aufgeregt und schlafe schlecht"
      ],
      "q53": [
        "Welchen Sport schaue ich am liebsten?",
        "Fußball",
        "Tennis",
        "Eiskunstlauf",
        "Ich schaue keinen Sport"
      ],
      "q54": [
        "Welches Haustier passt zu mir?",
        "Eine Katze",
        "Ein Hund",
        "Ein Papagei",
        "Ein Hamster"
      ],
      "q55": [
        "Was für Nachrichten schreibe ich?",
        "Lange",
        "Kurze",
        "Voller Emojis",
        "Sprachnachrichten"
      ],
      "q56": [
        "Welches Geschenk bewahre ich am längsten auf?",
        "Einen Brief",
        "Ein Spielzeug",
        "Ein Foto",
        "Ein Schmuckstück"
      ],
      "q57": [
        "Was würde ich eher wählen?",
        "Tee am Kamin",
        "Ein Picknick im Gras",
        "Einen Spaziergang am Meer",
        "Einen Kinobesuch"
      ],
      "q58": [
        "Welches Kompliment freut mich am meisten?",
        "Über mein Aussehen",
        "Über meinen Verstand",
        "Über meine Herzlichkeit",
        "Über meinen Humor"
      ],
      "q59": [
        "Mein perfekter Morgen?",
        "Frühstück im Bett",
        "Früh joggen gehen",
        "Lange ausschlafen",
        "Kaffee auf dem Balkon"
      ],
      "q60": [
        "Was möchte ich lernen?",
        "Tanzen",
        "Kochen",
        "Eine neue Sprache",
        "Zeichnen"
      ],
      "q61": [
        "Welches Gericht gelingt mir am besten?",
        "Suppe",
        "Plov",
        "Gebäck",
        "Salat"
      ],
      "q62": [
        "Welches Land möchte ich als Erstes sehen?",
        "Türkei",
        "Japan",
        "Marokko",
        "Norwegen"
      ],
      "q63": [
        "Welchen Sport würde ich lieber anfangen?",
        "Schwimmen",
        "Laufen",
        "Radfahren",
        "Fußball"
      ],
      "q64": [
        "Welches Buch würde ich wählen?",
        "Ein Abenteuer",
        "Ein Geschichtsbuch",
        "Märchen",
        "Ein Lexikon"
      ],
      "q65": [
        "Zu welchen Tieren würde ich im Zoo zuerst gehen?",
        "Zu den Elefanten",
        "Zu den Affen",
        "Zu den Pinguinen",
        "Zu den Giraffen"
      ],
      "q66": [
        "Wie stehe ich zu scharfem Essen?",
        "Je schärfer, desto besser",
        "Ein bisschen ist gut",
        "Nur ganz wenig",
        "Ich esse es gar nicht"
      ],
      "q67": [
        "Welches Schulfach mochte ich am liebsten?",
        "Mathe",
        "Literatur",
        "Erdkunde",
        "Sport"
      ],
      "q68": [
        "Mein Traumberuf als Kind?",
        "Arzt oder Ärztin",
        "Lehrer oder Lehrerin",
        "Astronaut oder Astronautin",
        "Koch oder Köchin"
      ],
      "q69": [
        "Wie stehe ich zu Wanderungen?",
        "Ich träume von einer langen",
        "Nur für einen Tag",
        "Nur mit Komfort",
        "Zu Hause ist es schöner"
      ],
      "q70": [
        "Meine Stimmung am Morgen?",
        "Voller Energie",
        "Noch verschlafen",
        "Ruhig",
        "Gesprächig"
      ],
      "q71": [
        "Welche Nuss mag ich am liebsten?",
        "Haselnuss",
        "Walnuss",
        "Cashew",
        "Mandel"
      ],
      "q72": [
        "Was würde ich mit einer unerwarteten freien Stunde machen?",
        "Lesen",
        "Spazieren gehen",
        "Die Familie anrufen",
        "Etwas kochen"
      ],
      "q73": [
        "Welches Wetter mag ich nicht?",
        "Hitze",
        "Wind",
        "Matsch",
        "Strengen Frost"
      ],
      "q74": [
        "In welcher Farbe würde ich mein Zimmer streichen?",
        "Weiß",
        "Beige",
        "Grün",
        "Hellblau"
      ],
      "q75": [
        "Was würde ich lieber spielen?",
        "Schach",
        "Dame",
        "Ein Puzzle",
        "Ein Wortspiel"
      ],
      "q76": [
        "Was würde ich für Gäste kochen?",
        "Plov",
        "Einen Kuchen",
        "Salate",
        "Ich bestelle Essen"
      ],
      "q77": [
        "Was würde ich auf keinen Fall essen?",
        "Pilze",
        "Fisch",
        "Oliven",
        "Gekochte Zwiebeln"
      ],
      "q78": [
        "Wie trinke ich meinen Tee?",
        "Stark",
        "Schwach",
        "Süß",
        "Mit Kräutern"
      ],
      "q79": [
        "Was ist mir in einem Zuhause am wichtigsten?",
        "Sauberkeit",
        "Gemütlichkeit",
        "Viel Licht",
        "Ruhe"
      ],
      "q80": [
        "Wie lerne ich Neues?",
        "Durch Lesen",
        "Mit Videokursen",
        "Durch Ausprobieren",
        "Durch Fragen"
      ],
      "q81": [
        "Welches Wildtier fasziniert mich am meisten?",
        "Tiger",
        "Bär",
        "Adler",
        "Delfin"
      ],
      "q82": [
        "Was würde ich meiner Mutter schenken?",
        "Blumen",
        "Etwas Selbstgemachtes",
        "Eine Reise",
        "Eine warme Decke"
      ],
      "q83": [
        "Was mache ich auf einer Reise?",
        "Aus dem Fenster schauen",
        "Lesen",
        "Mich unterhalten",
        "Naschen"
      ],
      "q84": [
        "Mein liebstes Hühnchengericht?",
        "Hähnchenspieße",
        "Hähnchen mit Reis",
        "Hähnchenfrikadellen",
        "Nuggets"
      ],
      "q85": [
        "Welchen Platz wähle ich im Zug?",
        "Am Fenster",
        "Am Gang",
        "Gegen die Fahrtrichtung",
        "Ist mir egal"
      ],
      "q86": [
        "Was mache ich, wenn etwas schiefgeht?",
        "Sofort handeln",
        "Erst nachdenken",
        "Um Rat fragen",
        "Mir ein wenig Sorgen machen"
      ],
      "q87": [
        "Was ist meine wichtigste Eigenschaft?",
        "Güte",
        "Ehrlichkeit",
        "Ausdauer",
        "Fröhlichkeit"
      ],
      "q88": [
        "Wo würde ich mich am besten erholen?",
        "Bei Verwandten auf dem Land",
        "In einem Hotel am Meer",
        "Im Zelt",
        "Zu Hause"
      ],
      "q89": [
        "Welches Gebäck würde ich wählen?",
        "Samsa",
        "Chatschapuri",
        "Tschak-Tschak",
        "Ein Éclair"
      ],
      "q90": [
        "Welche Sprache würde ich am liebsten lernen?",
        "Arabisch",
        "Englisch",
        "Türkisch",
        "Japanisch"
      ],
      "q91": [
        "Wie lange käme ich ohne Süßes aus?",
        "Einen Tag",
        "Eine Woche",
        "Einen Monat",
        "So lange wie nötig"
      ],
      "q92": [
        "Was mache ich, wenn ich spät dran bin?",
        "So schnell wie möglich laufen",
        "Vorher anrufen",
        "Ein Taxi nehmen",
        "Ich bin nie zu spät"
      ],
      "q93": [
        "Was mache ich, wenn ein Gerät kaputtgeht?",
        "Selbst reparieren",
        "Die Anleitung lesen",
        "Hilfe holen",
        "Alle Knöpfe drücken"
      ],
      "q94": [
        "Was kommt zuerst in meinen Koffer?",
        "Ein Erste-Hilfe-Set",
        "Ein Buch",
        "Ein Ladegerät",
        "Ein Snack"
      ],
      "q95": [
        "Welche Beschäftigung beruhigt mich?",
        "Kochen",
        "Aufräumen",
        "Malen",
        "Ein Spaziergang"
      ],
      "q96": [
        "Was möchte ich im Ruhestand machen?",
        "Gärtnern",
        "Reisen",
        "Lesen",
        "Zeit mit den Enkelkindern verbringen"
      ],
      "q97": [
        "Was ärgert mich am meisten?",
        "Lärm",
        "Unordnung",
        "Unpünktlichkeit",
        "Unhöflichkeit"
      ],
      "q98": [
        "Welchen Duft mag ich am meisten?",
        "Frisches Brot",
        "Regen",
        "Blumen",
        "Das Meer"
      ],
      "q99": [
        "Was würde ich als Nachtisch wählen?",
        "Obst",
        "Eis",
        "Kuchen",
        "Einfach Tee"
      ]
    },
    "yesNo": {
      "c01": [
        "Vermisst du mich gerade?",
        "vermisst dich sehr",
        "hält durch, denkt aber an dich"
      ],
      "c02": [
        "Lächelst du, wenn du meine Nachricht siehst?",
        "lächelt immer",
        "lächelt still in sich hinein"
      ],
      "c03": [
        "Erinnerst du dich an unser erstes Treffen?",
        "erinnert sich an jede Minute",
        "erinnert sich an das Wichtigste — dich"
      ],
      "c04": [
        "Möchtest du heute eine Umarmung?",
        "wartet auf deine Umarmung",
        "spart Umarmungen für später auf"
      ],
      "c05": [
        "Fahren wir zusammen ans Meer?",
        "packt schon den Koffer",
        "träumt von den Bergen"
      ],
      "c06": [
        "Bringe ich dich zum Lachen?",
        "lacht von Herzen",
        "versteckt ein Lächeln"
      ],
      "c07": [
        "Fühlst du dich bei mir ruhig?",
        "fühlt sich bei dir geborgen",
        "hat mit dir viel Spaß"
      ],
      "c08": [
        "Denkst du tagsüber an mich?",
        "denkt sehr oft an dich",
        "denkt gerade jetzt an dich"
      ],
      "c09": [
        "Liebst du meine Überraschungen?",
        "liebt deine Überraschungen",
        "mag es, wenn du einfach da bist"
      ],
      "c10": [
        "Backen wir zusammen einen Kuchen?",
        "bindet schon die Schürze um",
        "kauft lieber einen Kuchen"
      ],
      "c11": [
        "Schauen wir heute Abend einen Film?",
        "sucht schon einen Film aus",
        "möchte lieber einfach reden"
      ],
      "c12": [
        "Magst du meine Stimme?",
        "könnte ewig zuhören",
        "mag dein Lachen noch mehr"
      ],
      "c13": [
        "Machen wir am Wochenende ein Picknick?",
        "legt die Decke bereit",
        "lädt dich in ein gemütliches Café ein"
      ],
      "c14": [
        "Möchtest du einen Brief von mir?",
        "wartet auf deinen Brief",
        "möchte alles persönlich hören"
      ],
      "c15": [
        "Bin ich dir sehr wichtig?",
        "du bist unglaublich wichtig",
        "wichtiger, als du denkst"
      ],
      "c16": [
        "Gehen wir im Regen spazieren?",
        "nimmt einen Schirm für zwei",
        "kocht lieber Tee zu Hause"
      ],
      "c17": [
        "Sind wir uns ähnlich?",
        "ihr seid wie zwei Hälften",
        "ihr ergänzt euch perfekt"
      ],
      "c18": [
        "Magst du, wie ich koche?",
        "will noch einen Nachschlag",
        "kocht am liebsten mit dir zusammen"
      ],
      "c19": [
        "Holen wir uns zusammen ein Haustier?",
        "sucht schon einen Namen aus",
        "ein Teddybär reicht vorerst"
      ],
      "c20": [
        "Weißt du, was ich liebe?",
        "kennt es auswendig",
        "möchte noch mehr erfahren"
      ],
      "c21": [
        "Tanzen wir?",
        "reicht dir schon die Hand",
        "klatscht begeistert mit"
      ],
      "c22": [
        "Inspiriere ich dich?",
        "du inspirierst jeden Tag",
        "bei dir ist es einfach warm"
      ],
      "c23": [
        "Bewahrst du unsere Fotos auf?",
        "hütet jedes einzelne",
        "wartet auf neue, noch schönere"
      ],
      "c24": [
        "Sehen wir uns zusammen den Sonnenaufgang an?",
        "stellt schon den Wecker",
        "schaut lieber den Sonnenuntergang"
      ],
      "c25": [
        "Verrätst du mir ein Geheimnis?",
        "flüstert es dir ins Ohr",
        "es bleibt ein Rätsel"
      ],
      "c26": [
        "Glaubst du an mich?",
        "glaubt fest an dich",
        "feuert dich jeden Tag an"
      ],
      "c27": [
        "Verreisen wir nur zu zweit?",
        "träumt davon",
        "nimmt alle Lieben mit"
      ],
      "c28": [
        "Wartest du auf meinen Anruf?",
        "wartet mit einem Lächeln",
        "möchte lieber, dass du vorbeikommst"
      ],
      "c29": [
        "Magst du meine Umarmungen?",
        "die wärmsten der Welt",
        "hält am liebsten Händchen"
      ],
      "c30": [
        "Lesen wir uns gegenseitig vor?",
        "sucht schon ein Buch aus",
        "hört dir lieber zu"
      ],
      "c31": [
        "Machen wir heute ein gemeinsames Foto?",
        "sucht schon einen schönen Hintergrund",
        "erst wird geredet"
      ],
      "c32": [
        "Hebe ich deine Laune?",
        "das tust du immer",
        "mit dir ist sogar Traurigkeit leichter"
      ],
      "c33": [
        "Frühstücken wir morgen zusammen?",
        "kocht schon Kakao",
        "möchte lieber ausschlafen"
      ],
      "c34": [
        "Erinnerst du dich an meinen Geburtstag?",
        "auch ohne Erinnerung",
        "plant heimlich eine Überraschung"
      ],
      "c35": [
        "Gehen wir Schlittschuh laufen?",
        "holt schon die Schlittschuhe",
        "feuert dich vom Rand aus an"
      ],
      "c36": [
        "Ist heute ein guter Tag für dich?",
        "ein toller Tag",
        "wird besser, wenn du da bist"
      ],
      "c37": [
        "Zeichnest du mein Porträt?",
        "nimmt schon den Bleistift",
        "malt ein kleines Herz"
      ],
      "c38": [
        "Pflanzen wir zusammen einen Baum?",
        "sucht schon den Platz aus",
        "fängt mit einer Blume am Fenster an"
      ],
      "c39": [
        "Möchtest du ein Kompliment hören?",
        "kann es kaum erwarten",
        "ist schüchtern, möchte aber sehr"
      ],
      "c40": [
        "Spielen wir später noch einmal?",
        "will noch eine Runde",
        "umarmt lieber, statt zu spielen"
      ],
      "c41": [
        "Magst du scharfes Essen?",
        "je schärfer, desto besser",
        "nimmt lieber etwas Milderes"
      ],
      "c42": [
        "Kannst du schwimmen?",
        "schwimmt wie ein Fisch",
        "bleibt vorerst nah am Ufer"
      ],
      "c43": [
        "Hättest du gern eine Katze?",
        "überlegt schon einen Namen",
        "mag Hunde lieber"
      ],
      "c44": [
        "Möchtest du einmal Istanbul besuchen?",
        "träumt schon vom Bosporus",
        "würde eine andere Stadt wählen"
      ],
      "c45": [
        "Kochst du gern?",
        "kocht mit Freude",
        "spült lieber das Geschirr"
      ],
      "c46": [
        "Möchtest du lernen, Plov zu kochen?",
        "sucht schon ein Rezept",
        "probiert lieber den Plov von anderen"
      ],
      "c47": [
        "Liest du gern Bücher?",
        "hat immer ein Buch dabei",
        "hört lieber Geschichten zu"
      ],
      "c48": [
        "Kannst du Fahrrad fahren?",
        "könnte sofort losfahren",
        "verspricht, es zu lernen"
      ],
      "c49": [
        "Sind dir die Berge lieber als das Meer?",
        "wählt die Berge",
        "wählt das Meer"
      ],
      "c50": [
        "Möchtest du einmal eine Wüste sehen?",
        "träumt von Sanddünen",
        "wählt lieber einen Wald"
      ],
      "c51": [
        "Magst du den Winter?",
        "wartet auf den ersten Schnee",
        "wartet auf den Sommer"
      ],
      "c52": [
        "Trinkst du Tee ohne Zucker?",
        "mag den reinen Teegeschmack",
        "kommt nicht ohne einen Löffel Zucker aus"
      ],
      "c53": [
        "Hast du Angst vor Spinnen?",
        "hält großen Abstand",
        "trägt sie ruhig nach draußen"
      ],
      "c54": [
        "Malst du gern?",
        "greift schon zum Pinsel",
        "betrachtet lieber die Bilder anderer"
      ],
      "c55": [
        "Möchtest du einmal Polarlichter sehen?",
        "sucht schon, wo man sie sehen kann",
        "schaut lieber in die Sterne"
      ],
      "c56": [
        "Magst du Regenwetter?",
        "liebt das Rauschen des Regens vor dem Fenster",
        "wartet auf die Sonne"
      ],
      "c57": [
        "Kannst du reiten?",
        "sitzt sicher im Sattel",
        "träumt vorerst nur davon"
      ],
      "c58": [
        "Hättest du gern einen Hund?",
        "träumt von einem treuen Freund",
        "hat vorerst genug zu versorgen"
      ],
      "c59": [
        "Ist dir Süßes lieber als Herzhaftes?",
        "kann ohne Süßes nicht leben",
        "wählt Herzhaftes"
      ],
      "c60": [
        "Fährst du gern mit dem Zug?",
        "liebt das Rattern der Räder",
        "wählt das Flugzeug"
      ],
      "c61": [
        "Fällt es dir leicht, früh in den Tag zu starten?",
        "startet voller Energie in den Tag",
        "kommt erst bis Mittag in Schwung"
      ],
      "c62": [
        "Zeltest du gern?",
        "packt schon den Rucksack",
        "wählt ein gemütliches Hotel"
      ],
      "c63": [
        "Möchtest du am Meer wohnen?",
        "träumt vom Rauschen der Wellen",
        "wählt die Stadt"
      ],
      "c64": [
        "Isst du im Winter Eis?",
        "isst es sogar bei Frost",
        "nur im Sommer"
      ],
      "c65": [
        "Magst du Schokolade?",
        "kennt jede Sorte",
        "geht gelassen daran vorbei"
      ],
      "c66": [
        "Kannst du Kuchen backen?",
        "backt wie eine Großmutter",
        "verspricht, es zu lernen"
      ],
      "c67": [
        "Schaust du gern in die Sterne?",
        "kennt die Sternbilder",
        "mag lieber einen sonnigen Tag"
      ],
      "c68": [
        "Möchtest du einmal einen eigenen Garten anlegen?",
        "sucht schon Setzlinge aus",
        "fängt mit einer Blume im Topf an"
      ],
      "c69": [
        "Magst du Wildblumen?",
        "liebt Gänseblümchen und Kornblumen",
        "mag Gartenblumen lieber"
      ],
      "c70": [
        "Trinkst du Kaffee?",
        "ohne Kaffee beginnt der Tag nicht",
        "wählt Tee"
      ],
      "c71": [
        "Magst du selbst gemachte Limonade?",
        "schneidet schon Zitronen",
        "trinkt lieber Wasser"
      ],
      "c72": [
        "Möchtest du einmal nach Japan reisen?",
        "träumt von der Kirschblüte",
        "würde ein anderes Land wählen"
      ],
      "c73": [
        "Magst du den Herbst?",
        "liebt es, durchs Laub zu rascheln",
        "wartet auf den Frühling"
      ],
      "c74": [
        "Magst du den Duft von Lavendel?",
        "liebt diesen Duft",
        "mag andere Düfte lieber"
      ],
      "c75": [
        "Magst du Brettspiele?",
        "baut schon das Spielbrett auf",
        "geht lieber spazieren"
      ],
      "c76": [
        "Kannst du Auto fahren?",
        "fährt sicher",
        "fährt vorerst nur mit"
      ],
      "c77": [
        "Möchtest du einmal den Ozean sehen?",
        "träumt von einer großen Welle",
        "das Meer reicht völlig"
      ],
      "c78": [
        "Möchtest du eine Weile auf einem Bauernhof leben?",
        "füttert schon die Hühner",
        "bleibt in der Stadt"
      ],
      "c79": [
        "Magst du große Städte?",
        "liebt die Lichter der Stadt",
        "wählt Ruhe und Stille"
      ],
      "c80": [
        "Ist dir Obst lieber als Süßigkeiten?",
        "wählt Obst",
        "wählt Süßigkeiten"
      ],
      "c81": [
        "Möchtest du Delfine im Meer sehen?",
        "würde sie sehr gern sehen",
        "liest lieber über sie"
      ],
      "c82": [
        "Magst du den Sommer?",
        "wartet auf die heißen Tage",
        "mag es lieber kühl"
      ],
      "c83": [
        "Gehst du gern im Park spazieren?",
        "geht bei jedem Wetter",
        "bleibt lieber zu Hause"
      ],
      "c84": [
        "Schreibst du gern mit der Hand?",
        "hat eine schöne Handschrift",
        "tippt auf dem Handy"
      ],
      "c85": [
        "Machst du gern Bootsfahrten?",
        "greift schon nach den Rudern",
        "bleibt am Ufer"
      ],
      "c86": [
        "Möchtest du um die Welt reisen?",
        "zeichnet schon die Route",
        "ein paar Länder reichen"
      ],
      "c87": [
        "Kannst du einen Schneemann bauen?",
        "baut den größten",
        "macht lieber eine Schneeballschlacht"
      ],
      "c88": [
        "Möchtest du dieses Jahr etwas Neues lernen?",
        "wählt schon einen Kurs aus",
        "hat schon genug zu tun"
      ],
      "c89": [
        "Magst du Stille?",
        "schätzt die Ruhe",
        "mag es, wenn etwas los ist"
      ],
      "c90": [
        "Machst du deiner Familie gern Geschenke?",
        "macht der Familie einfach so eine Freude",
        "hilft lieber ganz praktisch"
      ]
    },
    "loves": {
      "s01": [
        "Wo Urlaub machen?",
        "Strand",
        "Berge",
        "Reisen",
        "Ruhe für mich"
      ],
      "s02": [
        "Der perfekte Abend?",
        "Film zu Hause",
        "Spaziergang",
        "Restaurant",
        "Brettspiele"
      ],
      "s03": [
        "Lieblingswetter?",
        "Sonne",
        "Regen",
        "Schnee",
        "Sternennacht"
      ],
      "s04": [
        "Lieblingstier?",
        "Kätzchen",
        "Welpe",
        "Pferd",
        "Delfin"
      ],
      "s05": [
        "Was gibt’s zum Abendessen?",
        "Pizza",
        "Sushi",
        "Gebäck",
        "Grillen"
      ],
      "s06": [
        "Lieblingsgetränk?",
        "Kaffee",
        "Tee",
        "Kakao",
        "Limonade"
      ],
      "s07": [
        "Lieblingsjahreszeit?",
        "Frühling",
        "Sommer",
        "Herbst",
        "Winter"
      ],
      "s08": [
        "Lieblingsblumen?",
        "Rosen",
        "Tulpen",
        "Sonnenblumen",
        "Lavendel"
      ],
      "s09": [
        "Wie entspannen?",
        "Mit einem Buch",
        "Malen",
        "Radfahren",
        "Schlafen in der Hängematte"
      ],
      "s10": [
        "Wie reisen?",
        "Mit dem Zug",
        "Mit dem Flugzeug",
        "Mit dem Auto",
        "Mit dem Schiff"
      ],
      "s11": [
        "Traumhaus?",
        "Stadtwohnung",
        "Haus am Meer",
        "Hütte in den Bergen",
        "Bauernhof"
      ],
      "s12": [
        "Etwas Süßes?",
        "Eis",
        "Schokolade",
        "Torte",
        "Obst"
      ],
      "s13": [
        "Der perfekte Morgen?",
        "Frühstück im Bett",
        "Joggen",
        "Ausschlafen",
        "Kaffee auf dem Balkon"
      ],
      "s14": [
        "Traum-Date?",
        "Picknick",
        "Eisbahn",
        "Freizeitpark",
        "Sterne auf dem Dach"
      ],
      "s15": [
        "Das schönste Geschenk?",
        "Ein Blumenstrauß",
        "Ein Brief",
        "Eine Reise",
        "Eine Geschenkbox"
      ],
      "s16": [
        "Lieblingsnatur?",
        "Meer",
        "Wald",
        "Wüste",
        "Nordlicht"
      ],
      "s17": [
        "Lieblingsobst?",
        "Apfel",
        "Erdbeere",
        "Wassermelone",
        "Weintrauben"
      ],
      "s18": [
        "Was tun am freien Tag?",
        "Wandern in den Bergen",
        "Zu Hause kochen",
        "Ein Museum",
        "Angeln"
      ],
      "s19": [
        "Lieblingsfrühstück?",
        "Pfannkuchen",
        "Omelett",
        "Brei mit Beeren",
        "Croissant"
      ],
      "s20": [
        "Lieblingsvogel?",
        "Eule",
        "Papagei",
        "Schwan",
        "Pfau"
      ],
      "s21": [
        "Welche Stadt besuchen?",
        "Istanbul",
        "Paris",
        "Tokio",
        "Dubai"
      ],
      "s22": [
        "Lieblingssport?",
        "Fußball",
        "Schwimmen",
        "Tennis",
        "Reiten"
      ],
      "s23": [
        "Was im Garten pflanzen?",
        "Einen Apfelbaum",
        "Rosen",
        "Gemüse",
        "Erdbeeren"
      ],
      "s24": [
        "Lieblingsgebäck?",
        "Kleine Teigtaschen",
        "Krapfen",
        "Kekse",
        "Baklava"
      ],
      "s25": [
        "Wo wohnen?",
        "An einem Fluss",
        "Im Wald",
        "In einer Großstadt",
        "Auf einer Insel"
      ],
      "s26": [
        "Liebstes Meerestier?",
        "Schildkröte",
        "Wal",
        "Oktopus",
        "Seepferdchen"
      ],
      "s27": [
        "Womit fahren?",
        "Fahrrad",
        "Roller",
        "Heißluftballon",
        "Boot"
      ],
      "s28": [
        "Liebste Beschäftigung?",
        "Stricken",
        "Naturfotografie",
        "Gärtnern",
        "Kalligrafie"
      ],
      "s29": [
        "Lieblingssuppe?",
        "Borschtsch",
        "Hühnersuppe",
        "Kürbissuppe",
        "Linsensuppe"
      ],
      "s30": [
        "Waldtier?",
        "Igel",
        "Eichhörnchen",
        "Fuchs",
        "Reh"
      ],
      "s31": [
        "Etwas zum Knabbern?",
        "Datteln",
        "Mandeln",
        "Pistazien",
        "Getrocknete Aprikosen"
      ],
      "s32": [
        "Was auf die Wanderung mitnehmen?",
        "Ein Zelt",
        "Eine Thermoskanne",
        "Eine Karte",
        "Eine Taschenlampe"
      ],
      "s33": [
        "Lieblingsnachtisch?",
        "Pudding",
        "Käsekuchen",
        "Pfannkuchen mit Honig",
        "Obstsalat"
      ],
      "s34": [
        "Was im Winter tun?",
        "Einen Schneemann bauen",
        "Schlitten fahren",
        "Tee am Fenster",
        "Ski fahren"
      ],
      "s35": [
        "Was im Sommer tun?",
        "Schwimmen",
        "Beeren pflücken",
        "Boot fahren",
        "Eine Sandburg bauen"
      ],
      "s36": [
        "Womit malen?",
        "Aquarellfarben",
        "Buntstifte",
        "Wachsmalstifte",
        "Farben auf Leinwand"
      ],
      "s37": [
        "Lieblingsgemüse?",
        "Karotte",
        "Tomate",
        "Mais",
        "Kürbis"
      ],
      "s38": [
        "Was macht ein Zuhause gemütlich?",
        "Ein Kamin",
        "Eine weiche Decke",
        "Zimmerpflanzen",
        "Ein Bücherregal"
      ],
      "s39": [
        "Was spielen?",
        "Schach",
        "Puzzles",
        "Brettspiele",
        "Ballspiele"
      ],
      "s40": [
        "Wer lebt auf dem Bauernhof?",
        "Kuh",
        "Lamm",
        "Huhn",
        "Zicklein"
      ],
      "s41": [
        "Tee mit was?",
        "Honig",
        "Zitrone",
        "Marmelade",
        "Minze"
      ],
      "s42": [
        "Was gibt es am Meer?",
        "Einen Leuchtturm",
        "Muscheln",
        "Ein Segelboot",
        "Möwen"
      ],
      "s43": [
        "Wie den Morgen beginnen?",
        "Mit Gymnastik",
        "Mit einer Tasse Tee",
        "Mit einem Spaziergang",
        "Mit einem Buch"
      ],
      "s44": [
        "Lieblingsbeere?",
        "Himbeere",
        "Heidelbeere",
        "Kirsche",
        "Brombeere"
      ]
    },
    "who": [
      "Wer von uns kommt öfter zu spät?",
      "Wer von uns versöhnt sich zuerst?",
      "Wer von uns kocht besser?",
      "Wer von uns lacht öfter?",
      "Wer von uns braucht länger zum Fertigmachen?",
      "Wer von uns verliert öfter die Schlüssel?",
      "Wer von uns merkt sich wichtige Daten besser?",
      "Wer von uns nascht lieber Süßes?",
      "Wer von uns schläft zuerst ein?",
      "Wer von uns steht früher auf?",
      "Wer von uns sagt öfter „Ich vermisse dich“?",
      "Wer von uns sucht die besseren Geschenke aus?",
      "Wer von uns macht öfter Witze?",
      "Wer von uns fährt besser Auto?",
      "Wer von uns telefoniert länger?",
      "Wer von uns reist lieber?",
      "Wer von uns ist schneller gekränkt?",
      "Wer von uns verzeiht schneller?",
      "Wer von uns macht mehr Fotos?",
      "Wer von uns kann besser mit Geld umgehen?",
      "Wer von uns kauft öfter Dinge, die wir nicht brauchen?",
      "Wer von uns kann besser trösten?",
      "Wer von uns bleibt in schweren Momenten ruhiger?",
      "Wer von uns sucht ständig das Handy?",
      "Wer von uns hat lieber Gäste?",
      "Wer von uns macht öfter das Frühstück?",
      "Wer von uns findet sich in einer fremden Stadt besser zurecht?",
      "Wer von uns schreibt längere Nachrichten?",
      "Wer von uns schlägt zuerst einen Spaziergang vor?",
      "Wer von uns mag Tiere mehr?",
      "Wer von uns kann Geheimnisse besser bewahren?",
      "Wer von uns braucht länger, um etwas von der Speisekarte zu wählen?",
      "Wer von uns sorgt sich mehr um die Liebsten?",
      "Wer von uns macht mehr Überraschungen?",
      "Wer von uns hält besser Ordnung?",
      "Wer von uns bemerkt eine neue Frisur zuerst?",
      "Wer von uns erinnert sich öfter an lustige Geschichten?",
      "Wer von uns hat mehr Geduld?",
      "Wer von uns sagt öfter „Danke“?",
      "Wer von uns bietet zuerst Hilfe an?",
      "Wer von uns rechnet besser im Kopf?",
      "Wer von uns liest mehr?",
      "Wer von uns tippt schneller?",
      "Wer von uns ruft öfter bei den Eltern an?",
      "Wer von uns erzählt besser Geschichten?",
      "Wer von uns hat die schönere Handschrift?",
      "Wer von uns mag scharfes Essen mehr?",
      "Wer von uns vergisst öfter etwas zu Hause?",
      "Wer von uns kennt sich besser mit Technik aus?",
      "Wer von uns lernt lieber Neues?",
      "Wer von uns plant besser?",
      "Wer von uns handelt auf dem Markt besser?",
      "Wer von uns liebt die Natur mehr?",
      "Wer von uns isst schneller?",
      "Wer von uns trinkt mehr Tee?",
      "Wer von uns pflegt Pflanzen besser?",
      "Wer von uns kennt sich besser in Geografie aus?",
      "Wer von uns spielt besser Schach?",
      "Wer von uns sucht auf dem Markt das bessere Obst aus?",
      "Wer von uns schaut öfter in den Wetterbericht?",
      "Wer von uns hat mehr Angst vor Spinnen?",
      "Wer von uns ist mutiger?",
      "Wer von uns ist neugieriger?",
      "Wer von uns löst Rätsel schneller?",
      "Wer von uns malt besser?",
      "Wer von uns hilft öfter den Nachbarn?",
      "Wer von uns kommt besser mit Kindern zurecht?",
      "Wer von uns geht lieber spazieren?",
      "Wer von uns liest öfter die Anleitung?",
      "Wer von uns merkt sich Namen besser?",
      "Wer von uns lernt schneller Wörter in einer anderen Sprache?",
      "Wer von uns backt besser?",
      "Wer von uns gibt bessere Ratschläge?",
      "Wer von uns mag kaltes Wetter mehr?",
      "Wer von uns käme auf einer Wanderung besser zurecht?",
      "Wer von uns liest öfter Nachrichten?",
      "Wer von uns probiert öfter neue Gerichte?",
      "Wer von uns packt schneller den Koffer?",
      "Wer von uns repariert Dinge besser?",
      "Wer von uns spricht öfter mit Tieren?",
      "Wer von uns spült öfter das Geschirr?",
      "Wer von uns kennt sich besser in Geschichte aus?",
      "Wer von uns schiebt Dinge öfter auf?",
      "Wer von uns findet schneller Anschluss an neue Leute?",
      "Wer von uns achtet mehr auf die Gesundheit?"
    ],
    "phrases": [
      "Ich lächle, wenn du…",
      "Mein liebster Tag mit dir ist…",
      "Danke dir für…",
      "Wenn ich traurig bin, hilft mir…",
      "Eines Tages möchte ich, dass wir zusammen…",
      "Die wärmste Erinnerung an uns ist…",
      "Niemand kann so gut wie du…",
      "Ich fühle mich ruhig, wenn…",
      "Wenn wir einen ganzen freien Tag hätten, würden wir…",
      "Ich bin stolz auf dich, weil…",
      "Unser perfekter Abend ist…",
      "Ich werde nie vergessen, wie du…",
      "Ich mag es, wenn du sagst…",
      "Nächstes Jahr möchte ich, dass wir…",
      "Für mich bist du wie…",
      "Das schönste Geschenk von dir ist…",
      "Ich vermisse dich, wenn…",
      "Am lustigsten sind wir, wenn…",
      "Schon lange möchte ich dir sagen…",
      "Unser Ort ist…",
      "Wenn ich an dich denke, …",
      "Du machst meinen Tag schöner, wenn…",
      "Ich mag unsere Gewohnheit, …",
      "Mein Wunsch für uns: …",
      "Das Lustigste, was uns passiert ist, war…",
      "Ich spüre deine Fürsorge, wenn du…",
      "Ein Morgen mit dir ist…",
      "Wenn wir ein einziges Wort wären, wäre es…",
      "Ich möchte von dir lernen, wie man…",
      "Danke, dass du immer…",
      "Mein Lieblingsessen als Kind war…",
      "Hätte ich einen Tag in einem beliebigen Land, würde ich…",
      "Der beste Rat, den ich je bekommen habe, ist…",
      "Ich muss immer lachen, wenn…",
      "Mein liebster Ort in meiner Heimatstadt ist…",
      "Hätte ich einen eigenen kleinen Laden, gäbe es dort…",
      "Das Gericht, das mir am besten gelingt, ist…",
      "Ein Kindheitstraum, an den ich mich noch erinnere, ist…",
      "Mir eine Freude zu machen ist leicht, wenn…",
      "Der erstaunlichste Ort, an dem ich je war, ist…",
      "Ich möchte lernen…",
      "Mein perfekter freier Tag beginnt mit…",
      "Könnte ich jedes beliebige Tier haben, wäre es…",
      "In meiner Familie sagt man immer, dass ich…",
      "Ich kann mich einfach nicht gewöhnen an…",
      "Meine nützlichste Gewohnheit ist…",
      "Das beste Buch, das ich je gelesen habe, ist…",
      "In zehn Jahren möchte ich…",
      "Mein Traumhaus ist…",
      "Das Lustigste, was mir als Kind passiert ist, ist…",
      "Glück ist für mich…",
      "Es fällt mir schwer, zu verzichten auf…",
      "Hätte ich eine Superkraft, würde sie…",
      "Am meisten schätze ich an Menschen…",
      "Wenn ich einen freien Abend habe, …",
      "Mein liebster Duft ist…",
      "Was ich niemals essen würde, ist…",
      "Ohne das gehe ich nie aus dem Haus:…",
      "Ich würde gern … besuchen, weil…",
      "Das schönste Geschenk, das ich je bekommen habe, ist…",
      "Meine ungewöhnlichste Gewohnheit ist…",
      "Hätte ich jeden Tag eine Stunde mehr, würde ich…",
      "Jemand, von dem ich viel lerne, ist…",
      "An einem schweren Tag hilft mir…",
      "Das Leckerste, was ich auf einer Reise probiert habe, ist…",
      "Könnte ich für einen Tag den Beruf wechseln, würde ich wählen…",
      "Die Jahreszeit, die mir am nächsten ist, ist…",
      "Meine Freunde sagen, dass ich…",
      "Eines Tages möchte ich jemandem beibringen…",
      "Eine kleine Freude in meinem Tag ist…"
    ],
    "truth": {
      "t01": [
        "Ein Oktopus hat drei Herzen.",
        true,
        "Zwei Herzen pumpen Blut durch die Kiemen, das dritte durch den Körper."
      ],
      "t02": [
        "Die Chinesische Mauer ist vom Mond aus mit bloßem Auge zu sehen.",
        false,
        "Nein: Die Mauer ist viel zu schmal. Selbst aus der Umlaufbahn ist sie kaum zu erkennen."
      ],
      "t03": [
        "Honig kann Tausende Jahre halten, ohne zu verderben.",
        true,
        "In altägyptischen Gräbern fand man Tausende Jahre alten Honig, der noch erhalten war."
      ],
      "t04": [
        "Bananen wachsen auf Bäumen.",
        false,
        "Die Bananenpflanze ist ein riesiges Kraut: Ihr „Stamm“ besteht aus fest eingerollten Blättern."
      ],
      "t05": [
        "Die Venus ist der heißeste Planet im Sonnensystem.",
        true,
        "Ihre dichte Atmosphäre heizt die Venus auf etwa 460 °C auf — heißer als Merkur."
      ],
      "t06": [
        "Fledermäuse sind blind.",
        false,
        "Fledermäuse können sehen und orientieren sich im Dunkeln zusätzlich per Echoortung."
      ],
      "t07": [
        "Ein Wal ist ein Fisch.",
        false,
        "Wale sind Säugetiere: Sie atmen Luft und säugen ihre Jungen mit Milch."
      ],
      "t08": [
        "Die Sahara ist die größte Wüste der Welt.",
        false,
        "Die größte Wüste ist die Antarktis. Die Sahara ist die größte heiße Wüste."
      ],
      "t09": [
        "Eine Giraffe hat genauso viele Halswirbel wie ein Mensch.",
        true,
        "Beide haben sieben Halswirbel — die der Giraffe sind nur sehr lang."
      ],
      "t10": [
        "Botanisch gesehen ist die Tomate eine Beere.",
        true,
        "Botaniker zählen die Tomate zu den Beeren: eine fleischige Frucht mit Samen im Inneren."
      ],
      "t11": [
        "Botanisch gesehen ist die Erdbeere eine Beere.",
        false,
        "Sie ist eine Scheinfrucht: Die echten Früchte sind die winzigen „Kerne“ außen."
      ],
      "t12": [
        "Im Weltall kann man eine Explosion hören.",
        false,
        "Im Weltall gibt es fast keine Luft, also kann sich der Schall nicht ausbreiten."
      ],
      "t13": [
        "Hoch in den Bergen kocht Wasser bei niedrigerer Temperatur.",
        true,
        "Dort ist der Luftdruck geringer, deshalb kocht Wasser schon unter 100 °C."
      ],
      "t14": [
        "Pinguine leben am Nordpol.",
        false,
        "Wilde Pinguine leben nur auf der Südhalbkugel, nicht im hohen Norden."
      ],
      "t15": [
        "Der Everest ist der höchste Berg über dem Meeresspiegel.",
        true,
        "Der Everest ragt etwa 8.849 Meter über den Meeresspiegel."
      ],
      "t16": [
        "Menschen nutzen nur 10 % ihres Gehirns.",
        false,
        "Das ist ein Mythos: Im Laufe eines Tages ist fast jeder Teil des Gehirns aktiv."
      ],
      "t17": [
        "Ein menschliches Herz schlägt etwa 100.000 Mal am Tag.",
        true,
        "Bei etwa 70 Schlägen pro Minute kommen rund 100.000 Schläge am Tag zusammen."
      ],
      "t18": [
        "Ein Goldfisch hat ein Gedächtnis von nur drei Sekunden.",
        false,
        "Experimente zeigen, dass Goldfische sich Gelerntes monatelang merken können."
      ],
      "t19": [
        "Australien ist zugleich ein Land und ein Kontinent.",
        true,
        "Australien ist das einzige Land, das einen ganzen Kontinent einnimmt."
      ],
      "t20": [
        "Der Blitz schlägt nie zweimal an derselben Stelle ein.",
        false,
        "Doch: In hohe Gebäude schlägt der Blitz viele Male im Jahr ein."
      ],
      "t21": [
        "Ein Strauß steckt bei Angst den Kopf in den Sand.",
        false,
        "Ein Mythos: Ein erschrockener Strauß rennt weg oder legt sich flach auf den Boden."
      ],
      "t22": [
        "Der kleinste Vogel der Welt ist ein Kolibri.",
        true,
        "Die Bienenelfe aus Kuba wiegt etwa 2 Gramm — weniger als jeder andere Vogel."
      ],
      "t23": [
        "Eine Wassermelone besteht zu etwa 90 % aus Wasser.",
        true,
        "Wassermelone besteht zu rund 92 % aus Wasser — deshalb ist sie so erfrischend."
      ],
      "t24": [
        "Eine Spinne hat sechs Beine.",
        false,
        "Eine Spinne hat acht Beine. Insekten haben sechs, und Spinnen sind keine Insekten."
      ],
      "t25": [
        "Der Mond leuchtet aus eigener Kraft.",
        false,
        "Der Mond hat kein eigenes Licht: Er reflektiert das Sonnenlicht."
      ],
      "t26": [
        "Der Elefant ist das größte Landtier.",
        true,
        "Ein Afrikanischer Elefant kann mehr als 6 Tonnen wiegen."
      ],
      "t27": [
        "Der Blauwal ist das größte Tier, das die Wissenschaft kennt.",
        true,
        "Blauwale können über 30 Meter lang werden — größer als jeder bekannte Dinosaurier."
      ],
      "t28": [
        "Ein Chamäleon wechselt die Farbe nur zur Tarnung.",
        false,
        "Seine Farbe hängt eher von Stimmung, Temperatur und Signalen an andere Chamäleons ab."
      ],
      "t29": [
        "Das Telefon wurde von Thomas Edison erfunden.",
        false,
        "Das Patent auf das Telefon erhielt Alexander Graham Bell im Jahr 1876."
      ],
      "t30": [
        "Penicillin wurde von Alexander Fleming entdeckt.",
        true,
        "Fleming entdeckte Penicillin 1928 — das erste Antibiotikum."
      ],
      "t31": [
        "Der höchste Vulkan im Sonnensystem steht auf dem Mars.",
        true,
        "Der Olympus Mons auf dem Mars ist etwa 22 km hoch — fast 2,5-mal so hoch wie der Everest."
      ],
      "t32": [
        "Das Blut in unseren Venen ist blau.",
        false,
        "Blut ist immer rot; Venen wirken nur blau, weil Licht auf besondere Weise durch die Haut dringt."
      ],
      "t33": [
        "Der Atlantik ist der größte Ozean der Erde.",
        false,
        "Der größte ist der Pazifik: Er ist größer als alle Landflächen der Erde zusammen."
      ],
      "t34": [
        "Russland ist flächenmäßig das größte Land der Welt.",
        true,
        "Russland umfasst mehr als 17 Millionen Quadratkilometer."
      ],
      "t35": [
        "Kanada hat die längste Küstenlinie der Welt.",
        true,
        "Kanadas Küste ist über 200.000 km lang — länger als die jedes anderen Landes."
      ],
      "t36": [
        "Der Magen einer Kuh hat vier Abschnitte.",
        true,
        "Eine Kuh hat einen Magen mit vier Kammern — so verdaut sie Gras."
      ],
      "t37": [
        "Der Löwe ist die größte Katze der Welt.",
        false,
        "Die größte Katze ist der Tiger, besonders der Sibirische Tiger."
      ],
      "t38": [
        "Die Erde ist der Sonne am nächsten.",
        false,
        "Am nächsten ist Merkur, dann Venus; die Erde ist der dritte Planet."
      ],
      "t39": [
        "Sonnenlicht braucht etwa 8 Minuten bis zur Erde.",
        true,
        "Das Licht legt die 150 Millionen km von der Sonne in etwa 8 Minuten und 20 Sekunden zurück."
      ],
      "t40": [
        "Delfine schlafen jeweils mit einer Gehirnhälfte.",
        true,
        "Eine Hälfte ruht, während die andere wach bleibt und ans Atmen denkt."
      ],
      "t41": [
        "Kartoffeln stammen aus Irland.",
        false,
        "Kartoffeln stammen aus Südamerika: In den Anden wurden sie schon vor Tausenden Jahren angebaut."
      ],
      "t42": [
        "Schokolade wird aus den Samen des Kakaobaums hergestellt.",
        true,
        "Kakaofrüchte wachsen direkt am Stamm, und aus den Samen darin wird Schokolade."
      ],
      "t43": [
        "Ein Hai ist ein Säugetier.",
        false,
        "Ein Hai ist ein Fisch: Er atmet durch Kiemen. Wale und Delfine sind die Säugetiere des Meeres."
      ],
      "t44": [
        "Manche Bambusarten wachsen fast einen Meter am Tag.",
        true,
        "Bambus gehört zu den am schnellsten wachsenden Pflanzen der Erde."
      ],
      "t45": [
        "Eine Eule kann ihren Kopf volle 360 Grad drehen.",
        false,
        "Eine Eule kann ihren Kopf etwa 270 Grad drehen — viel, aber kein voller Kreis."
      ],
      "t46": [
        "Ein Diamant und Bleistiftgraphit bestehen aus demselben Stoff.",
        true,
        "Beide sind reiner Kohlenstoff — nur die Atome sind anders angeordnet."
      ],
      "t47": [
        "Ein Kamel speichert Wasser in seinem Höcker.",
        false,
        "Im Höcker speichert das Kamel Fett, kein Wasser — es liefert Energie auf langen Wegen."
      ],
      "t48": [
        "Der kleinste Knochen des Menschen sitzt im Ohr.",
        true,
        "Der Steigbügel im Mittelohr ist nur etwa 3 Millimeter lang."
      ],
      "t49": [
        "Große Papageien können über 50 Jahre alt werden.",
        true,
        "Gut versorgte Aras und Kakadus leben oft 50 Jahre oder länger."
      ],
      "t50": [
        "Die Brüder Wright schafften den ersten Motorflug.",
        true,
        "Sie flogen 1903; der allererste Flug dauerte 12 Sekunden."
      ],
      "t51": [
        "Das Rad wurde im Mittelalter erfunden.",
        false,
        "Das Rad ist über 5.000 Jahre alt: In Mesopotamien nutzte man es schon um 3500 v. Chr."
      ],
      "t52": [
        "Ein Seepferdchen ist ein Fisch.",
        true,
        "Ein Seepferdchen atmet durch Kiemen und schwimmt mit einer Flosse, wie andere Fische."
      ],
      "t53": [
        "Ein Kolibri kann rückwärts fliegen.",
        true,
        "Kolibris sind die einzigen Vögel, die wirklich rückwärts fliegen können."
      ],
      "t54": [
        "Der Eiffelturm wird im Sommer ein wenig höher.",
        true,
        "Durch die Wärme dehnt sich das Metall aus, und der Turm wächst um etwa 15 Zentimeter."
      ],
      "t55": [
        "Die Haut ist das größte Organ des menschlichen Körpers.",
        true,
        "Die Haut eines Erwachsenen wiegt mehrere Kilogramm und schützt den ganzen Körper."
      ],
      "t56": [
        "Die Farbe Rot macht einen Stier wütend.",
        false,
        "Stiere können Rot kaum unterscheiden: Sie reagieren auf die Bewegung, nicht auf die Farbe."
      ],
      "t57": [
        "Eine Stubenfliege lebt nur einen Tag.",
        false,
        "Eine Stubenfliege lebt etwa einen Monat. Nur erwachsene Eintagsfliegen leben ein, zwei Tage."
      ],
      "t58": [
        "Ananas wachsen auf Bäumen.",
        false,
        "Eine Ananas wächst an einer niedrigen Blattpflanze, direkt aus deren Mitte."
      ],
      "t59": [
        "Die Erdnuss ist eine Nuss.",
        false,
        "Die Erdnuss ist eine Hülsenfrucht, verwandt mit Erbsen und Bohnen. Ihre Hülsen reifen unter der Erde."
      ],
      "t60": [
        "Nord- und Südpol sind gleich kalt.",
        false,
        "Der Südpol ist viel kälter: Er liegt auf einem hohen, vereisten Kontinent, der Nordpol auf einem Ozean."
      ]
    },
    "hints": {
      "h01": [
        "Pinguin",
        "Ich bin ein Vogel, kann aber nicht fliegen",
        "Ich lebe dort, wo es sehr kalt ist",
        "Ich trage immer einen Frack",
        "Strauß",
        "Robbe",
        "Möwe"
      ],
      "h02": [
        "Elefant",
        "Ich fresse fast den ganzen Tag",
        "Meine Ohren sehen aus wie große Fächer",
        "Ich habe einen langen Rüssel",
        "Nashorn",
        "Nilpferd",
        "Giraffe"
      ],
      "h03": [
        "Giraffe",
        "Ich schlafe sehr wenig, oft im Stehen",
        "Ich fresse Blätter von den höchsten Bäumen",
        "Ich habe den längsten Hals",
        "Zebra",
        "Kamel",
        "Elch"
      ],
      "h04": [
        "Kamel",
        "Ich komme lange ohne Wasser aus",
        "Man nennt mich das Schiff der Wüste",
        "Ich habe einen oder zwei Höcker auf dem Rücken",
        "Pferd",
        "Esel",
        "Lama"
      ],
      "h05": [
        "Biene",
        "Ich kann anderen den Weg zu den Blumen zeigen",
        "Ich arbeite von früh bis spät auf der Wiese",
        "Ich mache Honig",
        "Wespe",
        "Fliege",
        "Schmetterling"
      ],
      "h06": [
        "Schildkröte",
        "Ich kann über hundert Jahre alt werden",
        "Ich habe es nie eilig",
        "Ich trage mein Haus auf dem Rücken",
        "Schnecke",
        "Eidechse",
        "Igel"
      ],
      "h07": [
        "Känguru",
        "Mein Schwanz hilft mir, das Gleichgewicht zu halten",
        "Ich lebe in Australien",
        "Ich trage mein Junges in einem Beutel",
        "Koala",
        "Hase",
        "Eichhörnchen"
      ],
      "h08": [
        "Eule",
        "Ich kann den Kopf fast ganz nach hinten drehen",
        "Ich jage nachts",
        "Mein Ruf klingt durch den dunklen Wald",
        "Krähe",
        "Adler",
        "Taube"
      ],
      "h09": [
        "Delfin",
        "Ich atme Luft, obwohl ich im Meer lebe",
        "Ich helfe Menschen und spreche mit Pfiffen",
        "Ich springe gern über die Wellen",
        "Hai",
        "Wal",
        "Robbe"
      ],
      "h10": [
        "Eichhörnchen",
        "Ich verstecke Futter und vergesse manchmal, wo",
        "Ich wohne in einer Baumhöhle",
        "Ich knabbere Nüsse und Zapfen",
        "Igel",
        "Hase",
        "Maus"
      ],
      "h11": [
        "Spinne",
        "Ich bin kein Insekt, auch wenn viele das denken",
        "Ich habe acht Beine",
        "Ich webe ein Netz",
        "Ameise",
        "Käfer",
        "Mücke"
      ],
      "h12": [
        "Katze",
        "Ich sehe im Dunkeln besser als Menschen",
        "Ich liebe eine warme Fensterbank",
        "Ich schnurre und fange Mäuse",
        "Kaninchen",
        "Hamster",
        "Papagei"
      ],
      "h13": [
        "Wassermelone",
        "Wissenschaftler nennen mich eine Beere",
        "Man wartet auf mich am Ende des Sommers",
        "Außen grün, innen rot",
        "Honigmelone",
        "Kürbis",
        "Ananas"
      ],
      "h14": [
        "Brot",
        "Man backt mich in fast jedem Land",
        "Man schneidet mich in Scheiben",
        "Ich bin hell oder aus Roggen, mit Kruste",
        "Pfannkuchen",
        "Kuchen",
        "Keks"
      ],
      "h15": [
        "Honig",
        "Ich halte mich Tausende von Jahren",
        "Bei Erkältung gibt man mich in warmen Tee",
        "Bienen machen mich",
        "Marmelade",
        "Zucker",
        "Milch"
      ],
      "h16": [
        "Zitrone",
        "Ich stecke voller Vitamin C",
        "Man gibt mich in den Tee",
        "Ich bin gelb und sehr sauer",
        "Orange",
        "Grapefruit",
        "Limette"
      ],
      "h17": [
        "Karotte",
        "Ich wachse unter der Erde, nur mein Kraut schaut heraus",
        "Man sagt, ich sei gut für die Augen",
        "Ich bin orange, und Hasen mögen mich sehr",
        "Rote Bete",
        "Radieschen",
        "Kartoffel"
      ],
      "h18": [
        "Apfel",
        "Es gibt mich als Sommer- und als Wintersorte",
        "Aus mir macht man Kuchen und Saft",
        "Ich wachse am Baum, rot oder grün",
        "Birne",
        "Pfirsich",
        "Pflaume"
      ],
      "h19": [
        "Banane",
        "Ich wachse in Büscheln an einer hohen Pflanze",
        "Affen mögen mich sehr",
        "Ich bin gelb, und man muss mich schälen",
        "Mango",
        "Kiwi",
        "Ananas"
      ],
      "h20": [
        "Tee",
        "In China trinkt man mich seit Jahrtausenden",
        "Ich kann schwarz, grün oder aus Kräutern sein",
        "Man brüht mich in einer Kanne auf",
        "Kaffee",
        "Kakao",
        "Saft"
      ],
      "h21": [
        "Ei",
        "Ohne mich lässt sich kaum ein Kuchen backen",
        "Aus mir macht man ein Omelett",
        "Ein Huhn legt mich",
        "Käse",
        "Nuss",
        "Kartoffel"
      ],
      "h22": [
        "Regenschirm",
        "Meistens bin ich zusammengeklappt",
        "Man nimmt mich mit, wenn der Himmel grau wird",
        "Ich halte dich im Regen trocken",
        "Regenmantel",
        "Hut",
        "Stiefel"
      ],
      "h23": [
        "Uhr",
        "Ich kann mit Sand oder mit Sonnenlicht funktionieren",
        "Ich hänge an Wänden und stehe in Türmen",
        "Ich zeige die Zeit mit meinen Zeigern",
        "Kompass",
        "Kalender",
        "Thermometer"
      ],
      "h24": [
        "Schlüssel",
        "Ohne mich lässt dich die Tür nicht hinein",
        "Man trägt mich oft an einem Ring",
        "Ich öffne ein Schloss",
        "Schere",
        "Schraubenzieher",
        "Büroklammer"
      ],
      "h25": [
        "Kerze",
        "Je länger ich arbeite, desto kleiner werde ich",
        "Man zündet mich an, wenn der Strom ausfällt",
        "Ich bin aus Wachs und habe einen Docht",
        "Taschenlampe",
        "Lampe",
        "Streichhölzer"
      ],
      "h26": [
        "Schere",
        "Ich habe zwei Ringe und zwei scharfe Enden",
        "Ich schneide Formen aus Papier aus",
        "Ich schneide Stoff und Papier",
        "Messer",
        "Nadel",
        "Lineal"
      ],
      "h27": [
        "Zahnbürste",
        "Ich habe viele Borsten",
        "Man ersetzt mich alle drei Monate",
        "Ich putze morgens und abends die Zähne",
        "Seife",
        "Handtuch",
        "Schwamm"
      ],
      "h28": [
        "Kühlschrank",
        "In mir ist immer Winter",
        "Wenn man mich öffnet, geht ein Licht an",
        "Ich halte Essen kalt",
        "Herd",
        "Backofen",
        "Schrank"
      ],
      "h29": [
        "Fahrrad",
        "Ich fahre ohne Benzin und ohne Strom",
        "Ich habe einen Lenker, eine Klingel und eine Kette",
        "Ich habe zwei Räder und Pedale",
        "Roller",
        "Motorrad",
        "Skateboard"
      ],
      "h30": [
        "Flugzeug",
        "Ich habe Flügel, bin aber kein Vogel",
        "Man wartet auf mich am Flughafen",
        "Ich fliege mit Passagieren über den Wolken",
        "Hubschrauber",
        "Rakete",
        "Heißluftballon"
      ],
      "h31": [
        "Zug",
        "Ich fahre nur auf meinem eigenen Weg",
        "Ich habe viele Wagen",
        "Ich fahre auf Schienen von Bahnhof zu Bahnhof",
        "Straßenbahn",
        "Bus",
        "U-Bahn"
      ],
      "h32": [
        "Brücke",
        "Man baut mich aus Stein, Holz oder Stahl",
        "Schiffe können unter mir hindurchfahren",
        "Ich verbinde die zwei Ufer eines Flusses",
        "Tunnel",
        "Straße",
        "Damm"
      ],
      "h33": [
        "Bleistift",
        "In mir steckt Graphit",
        "Man spitzt mich, wenn ich stumpf werde",
        "Ich schreibe und male; ein Radiergummi entfernt meine Spuren",
        "Kugelschreiber",
        "Kreide",
        "Filzstift"
      ],
      "h34": [
        "Buch",
        "Ich schweige, lehre aber viel",
        "Ich habe einen Einband und Seiten",
        "Man liest mich und leiht mich in Bibliotheken aus",
        "Zeitschrift",
        "Zeitung",
        "Heft"
      ],
      "h35": [
        "Koffer",
        "Ich reise viel, aber immer in jemandes Hand",
        "Man packt mich vor einer Reise",
        "Ich habe Griff und Rollen und trage Kleidung",
        "Rucksack",
        "Tasche",
        "Kiste"
      ],
      "h36": [
        "Bibliothek",
        "Hier bittet man, leise zu sprechen",
        "Hier bekommt man einen Leseausweis",
        "Tausende Bücher zum Mitnehmen nach Hause",
        "Schule",
        "Buchhandlung",
        "Archiv"
      ],
      "h37": [
        "Flughafen",
        "Hier gibt es eine Passkontrolle",
        "Hier wird das Boarding für Flüge angesagt",
        "Von hier starten Flugzeuge",
        "Bahnhof",
        "Hafen",
        "Busbahnhof"
      ],
      "h38": [
        "Wüste",
        "Tagsüber heiß, nachts manchmal sehr kalt",
        "Hier findet man Oasen",
        "Viel Sand und sehr wenig Wasser",
        "Steppe",
        "Savanne",
        "Strand"
      ],
      "h39": [
        "Vulkan",
        "Ich kann Hunderte von Jahren schlafen",
        "Aus meiner Spitze steigt Rauch",
        "Ich breche mit Lava aus",
        "Berg",
        "Geysir",
        "Insel"
      ],
      "h40": [
        "Regenbogen",
        "Man sieht mich nur mit der Sonne im Rücken",
        "Ich erscheine oft nach dem Regen",
        "Sieben Farben im Bogen am Himmel",
        "Blitz",
        "Wolke",
        "Polarlicht"
      ],
      "h41": [
        "Mond",
        "Ich zeige der Erde immer dieselbe Seite",
        "Ich kann voll sein oder eine schmale Sichel",
        "Ich leuchte am Nachthimmel",
        "Sonne",
        "Stern",
        "Komet"
      ],
      "h42": [
        "Schnee",
        "Jede meiner Flocken ist einzigartig",
        "Aus mir baut man Burgen",
        "Weiß und kalt falle ich im Winter",
        "Regen",
        "Hagel",
        "Raureif"
      ],
      "h43": [
        "Fluss",
        "Ich habe eine Quelle und eine Mündung",
        "Boote fahren auf mir",
        "Ich fließe von den Bergen ins Meer",
        "See",
        "Meer",
        "Bach"
      ],
      "h44": [
        "Kaktus",
        "Ich kann lange ohne Wasser leben",
        "Ich wachse in Wüsten und auf Fensterbänken",
        "Ich bin mit Stacheln bedeckt",
        "Aloe",
        "Palme",
        "Gänseblümchen"
      ],
      "h45": [
        "Sonnenblume",
        "Aus meinen Kernen macht man Öl",
        "Ich drehe mich nach der Sonne",
        "Eine große gelbe Blume voller Kerne",
        "Gänseblümchen",
        "Tulpe",
        "Löwenzahn"
      ],
      "h46": [
        "Eiche",
        "Ich kann über tausend Jahre alt werden",
        "Ich gelte als Symbol der Stärke",
        "Meine Früchte tragen kleine Hütchen",
        "Birke",
        "Kiefer",
        "Ahorn"
      ],
      "h47": [
        "Insel",
        "Auf mir hat ein ganzes Land Platz",
        "Man erreicht mich per Boot oder Flugzeug",
        "Ich bin ringsum von Wasser umgeben",
        "Halbinsel",
        "Riff",
        "Kap"
      ],
      "h48": [
        "Wasserfall",
        "Man hört mich schon von Weitem",
        "Der höchste von uns ist in Venezuela",
        "Hier stürzt ein Fluss über eine Klippe",
        "Springbrunnen",
        "Geysir",
        "Quelle"
      ],
      "h49": [
        "Arzt",
        "Ich studiere viele Jahre, bevor ich arbeite",
        "Ich trage einen weißen Kittel",
        "Ich behandle kranke Menschen",
        "Krankenpfleger",
        "Apotheker",
        "Tierarzt"
      ],
      "h50": [
        "Feuerwehrmann",
        "Ich habe Tag und Nacht Bereitschaft",
        "Ich arbeite mit Wasser und Leitern",
        "Ich lösche Brände",
        "Polizist",
        "Sanitäter",
        "Bauarbeiter"
      ],
      "h51": [
        "Koch",
        "Ich probiere alles, was ich zubereite",
        "Ich arbeite an einem heißen Herd",
        "Ich bereite im Restaurant Speisen zu",
        "Bäcker",
        "Kellner",
        "Konditor"
      ],
      "h52": [
        "Lehrer",
        "Abends korrigiere ich Hefte",
        "Ich stehe an der Tafel",
        "Ich unterrichte Kinder in der Schule",
        "Schulleiter",
        "Bibliothekar",
        "Erzieher"
      ],
      "h53": [
        "Pilot",
        "Mein Arbeitsplatz ist ein Cockpit",
        "Ich spreche über Lautsprecher zu den Passagieren",
        "Ich fliege ein Flugzeug",
        "Kapitän",
        "Fahrer",
        "Astronaut"
      ],
      "h54": [
        "Briefträger",
        "Ich kenne jede Adresse in meinem Bezirk",
        "Ich trage eine große Tasche",
        "Ich bringe Briefe und Pakete",
        "Kurier",
        "Taxifahrer",
        "Verkäufer"
      ],
      "h55": [
        "Gärtner",
        "Ich weiß, wann man was pflanzt",
        "Meine Werkzeuge sind Gießkanne und Schere",
        "Ich pflege Blumen und Bäume",
        "Bauer",
        "Förster",
        "Florist"
      ],
      "h56": [
        "Fotograf",
        "Ich fange Augenblicke ein",
        "Ich bitte alle, still zu halten",
        "Ich arbeite mit Kamera und Bildern",
        "Maler",
        "Journalist",
        "Kameramann"
      ],
      "h57": [
        "Fischer",
        "Ich stehe vor Sonnenaufgang auf und warte lange",
        "Ich brauche eine Angel und Geduld",
        "Ich fange Fische",
        "Bauer",
        "Seemann",
        "Hirte"
      ],
      "h58": [
        "Astronaut",
        "Ich trainiere lange auf der Erde",
        "Ich trage einen Raumanzug",
        "Ich fliege ins All",
        "Pilot",
        "Astronom",
        "Ingenieur"
      ],
      "h59": [
        "Architekt",
        "Meine Arbeit sieht man überall in der Stadt",
        "Ich zeichne Pläne",
        "Ich entwerfe Häuser",
        "Bauarbeiter",
        "Designer",
        "Ingenieur"
      ],
      "h60": [
        "Zahnarzt",
        "Viele haben Angst vor meinem Stuhl",
        "Ich arbeite mit einem Bohrer",
        "Ich behandle Zähne",
        "Chirurg",
        "Augenarzt",
        "Kinderarzt"
      ]
    },
    "dreams": {
      "d01": [
        "Wo möchtest du in zehn Jahren leben?",
        "Am Meer",
        "In den Bergen",
        "In einer großen Stadt",
        "In einem ruhigen Dorf"
      ],
      "d02": [
        "Was für ein Zuhause möchtest du eines Tages?",
        "Eine gemütliche Wohnung",
        "Ein Haus mit Garten",
        "Ein Häuschen am See",
        "Ein altes Haus mit Geschichte"
      ],
      "d03": [
        "Was möchtest du im Garten anbauen?",
        "Apfelbäume",
        "Rosen",
        "Gemüse und Kräuter",
        "Erdbeeren"
      ],
      "d04": [
        "Welches Haustier möchtest du haben?",
        "Eine Katze",
        "Einen Papagei",
        "Aquarienfische",
        "Eine Schildkröte"
      ],
      "d05": [
        "Wohin möchtest du zuerst reisen?",
        "Japan",
        "Marokko",
        "Island",
        "Neuseeland"
      ],
      "d06": [
        "Wie möchtest du reisen?",
        "Mit dem Zug",
        "Mit dem Auto",
        "Mit dem Flugzeug",
        "Mit dem Schiff"
      ],
      "d07": [
        "Welche Sprache möchtest du lernen?",
        "Arabisch",
        "Japanisch",
        "Spanisch",
        "Chinesisch"
      ],
      "d08": [
        "Was möchtest du lernen?",
        "Zeichnen",
        "Nähen",
        "Schwimmen",
        "Programmieren"
      ],
      "d09": [
        "Welches Gericht möchtest du meistern?",
        "Pilaw",
        "Selbst gebackenes Brot",
        "Sushi",
        "Baklava"
      ],
      "d10": [
        "Wie möchtest du die Wochenenden verbringen?",
        "In der Natur",
        "Zu Hause mit einem Buch",
        "Bei der Familie",
        "In einer neuen Stadt"
      ],
      "d11": [
        "Wie sähe ein perfekter Wochenendmorgen aus?",
        "Ein früher Spaziergang",
        "Ein langes Frühstück",
        "Sport an der frischen Luft",
        "Tee auf dem Balkon"
      ],
      "d12": [
        "Wofür möchtest du sparen?",
        "Ein eigenes Zuhause",
        "Eine große Reise",
        "Ein Auto",
        "Ein Studium"
      ],
      "d13": [
        "Welche Arbeit möchtest du machen?",
        "Ein eigenes Geschäft",
        "In einer großen Firma",
        "Von zu Hause aus",
        "Menschen helfen"
      ],
      "d14": [
        "Wie möchtest du anderen helfen?",
        "Ehrenamt",
        "Tieren helfen",
        "Kinder unterrichten",
        "Bäume pflanzen"
      ],
      "d15": [
        "Welche Familientradition hättest du gern?",
        "Gemeinsames Sonntagsessen",
        "Spieleabende",
        "Wochenendspaziergänge",
        "Ein Familienfotoalbum"
      ],
      "d16": [
        "Was für eine Küche hättest du gern?",
        "Eine große Familienküche",
        "Hell und gemütlich",
        "Mit Blick in den Garten",
        "Klein, aber praktisch"
      ],
      "d17": [
        "Was möchtest du mit eigenen Augen sehen?",
        "Das Polarlicht",
        "Die Pyramiden von Gizeh",
        "Die Victoriafälle",
        "Den Himalaya"
      ],
      "d18": [
        "Was möchtest du abends machen?",
        "Lesen",
        "Etwas Neues kochen",
        "Sprachen lernen",
        "Im Park spazieren"
      ],
      "d19": [
        "Welches Hobby möchtest du anfangen?",
        "Fotografie",
        "Töpfern",
        "Sticken",
        "Gärtnern"
      ],
      "d20": [
        "Wohin möchtest du übers Wochenende?",
        "In den Wald",
        "An einen See",
        "In eine Stadt in der Nähe",
        "In die Berge"
      ],
      "d21": [
        "Wie sähe dein idealer Arbeitsplatz aus?",
        "Am Fenster",
        "Mit Bücherregalen",
        "Voller Grünpflanzen",
        "Fast leer"
      ],
      "d22": [
        "Was möchtest du als Nächstes studieren?",
        "Medizin",
        "Geschichte",
        "Wirtschaft",
        "Design"
      ],
      "d23": [
        "Welchen Baum möchtest du pflanzen?",
        "Eine Eiche",
        "Einen Apfelbaum",
        "Einen Olivenbaum",
        "Eine Dattelpalme"
      ],
      "d24": [
        "Was möchtest du für Gäste kochen?",
        "Einen selbst gebackenen Kuchen",
        "Einen großen Pilaw",
        "Die Suppe nach Familienrezept",
        "Frische Salate"
      ],
      "d25": [
        "Welche Stadt möchtest du besuchen?",
        "Istanbul",
        "Paris",
        "Tokio",
        "Kairo"
      ],
      "d26": [
        "Wie möchtest du den Sommer verbringen?",
        "Am Meer",
        "In den Bergen",
        "Im Landhaus",
        "Reisen im eigenen Land"
      ],
      "d27": [
        "Welchen Vogel möchtest du halten?",
        "Einen Kanarienvogel",
        "Einen Wellensittich",
        "Tauben",
        "Zebrafinken"
      ],
      "d28": [
        "Welchen Sport möchtest du ausprobieren?",
        "Schwimmen",
        "Reiten",
        "Bogenschießen",
        "Klettern"
      ],
      "d29": [
        "Welche Bücher möchtest du sammeln?",
        "Lexika",
        "Klassiker",
        "Reisebücher",
        "Kochbücher"
      ],
      "d30": [
        "Was möchtest du selbst machen?",
        "Möbel",
        "Eigenes Geschirr",
        "Eine gestrickte Decke",
        "Ein Vogelhäuschen"
      ],
      "d31": [
        "Wo möchtest du ein Picknick machen?",
        "Am Flussufer",
        "In einem Garten",
        "Auf einer Waldlichtung",
        "In den Bergen"
      ],
      "d32": [
        "Wie möchtest du dich eines Tages fortbewegen?",
        "Mit einem E-Auto",
        "Mit dem Fahrrad",
        "Mit einem großen Familienauto",
        "Ganz ohne Auto"
      ],
      "d33": [
        "Was möchtest du im Ruhestand machen?",
        "Gärtnern",
        "Reisen",
        "Zeit mit den Enkeln",
        "Neues lernen"
      ],
      "d34": [
        "Welche gute Tat möchtest du vollbringen?",
        "Einen Brunnen bauen",
        "Einem Katzenheim helfen",
        "Bücher für eine Schule sammeln",
        "Eine Baumreihe pflanzen"
      ],
      "d35": [
        "Was möchtest du am Wochenende frühstücken?",
        "Pfannkuchen",
        "Ein Omelett",
        "Haferbrei mit Obst",
        "Quarkpfannkuchen"
      ],
      "d36": [
        "Wo möchtest du Gäste empfangen?",
        "In der Küche",
        "Im Wohnzimmer",
        "Auf der Terrasse",
        "Im Garten"
      ],
      "d37": [
        "Welches Naturwunder möchtest du sehen?",
        "Den Grand Canyon",
        "Die Niagarafälle",
        "Den Baikalsee",
        "Die Sahara"
      ],
      "d38": [
        "Welche Fertigkeit fürs Zuhause möchtest du lernen?",
        "Selbst renovieren",
        "Nähen",
        "Brot backen",
        "Einen Garten pflegen"
      ],
      "d39": [
        "Wie viele Sprachen möchtest du sprechen?",
        "Zwei",
        "Drei",
        "Fünf",
        "So viele wie möglich"
      ],
      "d40": [
        "Welche Wandfarbe möchtest du zu Hause?",
        "Weiß",
        "Beige",
        "Hellgrün",
        "Hellblau"
      ],
      "d41": [
        "Welchen Fisch möchtest du im Aquarium?",
        "Einen Goldfisch",
        "Guppys",
        "Einen Wels",
        "Einen Skalar"
      ],
      "d42": [
        "Welche Reise möchtest du deinen Eltern schenken?",
        "Urlaub am Meer",
        "Eine Städtereise",
        "Eine Reise in die Berge",
        "Eine Zugreise"
      ],
      "d43": [
        "Was möchtest du in deiner Freizeit machen?",
        "Zeichnen",
        "Lesen",
        "Sport",
        "Handarbeiten"
      ],
      "d44": [
        "In welcher Jahreszeit möchtest du reisen?",
        "Frühling",
        "Sommer",
        "Herbst",
        "Winter"
      ],
      "d45": [
        "Was möchtest du für den Winter einmachen?",
        "Marmelade",
        "Eingelegtes Gemüse",
        "Trockenobst",
        "Kompott"
      ],
      "d46": [
        "Welchen anderen Beruf möchtest du ausprobieren?",
        "Koch",
        "Programmierer",
        "Übersetzer",
        "Tischler"
      ],
      "d47": [
        "Welches Land möchtest du kennenlernen?",
        "Malaysia",
        "Italien",
        "Kanada",
        "Indonesien"
      ],
      "d48": [
        "Was hättest du gern im Hof?",
        "Einen kleinen Brunnen",
        "Ein Gemüsebeet",
        "Eine Laube",
        "Eine Schaukel"
      ],
      "d49": [
        "Wie möchtest du Erfolge feiern?",
        "Ein Familienessen",
        "Ein Ausflug in die Natur",
        "Ein neues Buch",
        "Eine gute Tat für andere"
      ],
      "d50": [
        "Was möchtest du an Kinder weitergeben?",
        "Die Liebe zu Büchern",
        "Kochkünste",
        "Die Muttersprache",
        "Achtsamkeit für die Natur"
      ]
    }
  },
  "es": {
    "text": {
      "homeLink": "Juegos para dos",
      "eyebrow": "GLOWLETTER · JUEGOS PARA DOS",
      "title": "Jugad juntos",
      "close": "Cerrar",
      "lead": "Envía un juego a alguien querido. Jugar desde un enlace es gratis y no requiere cuenta.",
      "quizTitle": "¿Cuánto me conoces?",
      "quizNote": "Responde preguntas sobre ti y deja que alguien cercano intente adivinar. El resultado te llega a ti.",
      "create": "Crear un test",
      "soon": "Pronto",
      "soonTitle": "Más juegos en camino",
      "duel": "Duelo «¿Quién es más rápido?»",
      "loves": "Lo que nos gusta",
      "cards": "Cartas de memoria para dos",
      "who": "¿Quién de los dos?",
      "phrase": "Completa la frase",
      "myQuizzes": "Mis tests",
      "noQuizzes": "Aún no hay tests. Crear el primero lleva un par de minutos.",
      "forWhom": "Para {name}",
      "noRecipient": "Test",
      "resultsCount": "Resultados: {count}",
      "newResults": "Nuevos: {count}",
      "noResults": "Todavía nadie ha jugado.",
      "anonymous": "Sin nombre",
      "results": "Resultados",
      "copyLink": "Copiar enlace",
      "share": "Enviar",
      "deleteQuiz": "Eliminar test",
      "deleteConfirm": "¿Eliminar este test y sus resultados? El enlace dejará de funcionar.",
      "deleted": "Test eliminado",
      "linkCopied": "Enlace copiado",
      "back": "Atrás",
      "next": "Siguiente",
      "stepNames": "Paso 1 de 2 · Nombres",
      "yourName": "Tu nombre",
      "yourNamePlaceholder": "¿Cómo te llamas?",
      "recipient": "Para quién · opcional",
      "recipientPlaceholder": "Su nombre",
      "nameRequired": "Escribe tu nombre.",
      "forbiddenName": "Escribe un nombre normal.",
      "stepAnswers": "Paso 2 de 2 · Tus respuestas",
      "answersLead": "Marca lo que es cierto sobre ti. Puedes cambiar cualquier pregunta.",
      "swap": "Otra pregunta",
      "progress": "{done} de {total} respondidas",
      "answerAll": "Elige una respuesta en cada pregunta.",
      "finish": "Obtener el enlace",
      "creating": "Creando el test…",
      "createdTitle": "¡Tu test está listo!",
      "createdLead": "Envía el enlace. Cuando respondan, el resultado aparecerá en «Mis tests».",
      "shareText": "{name} te invita a jugar a «¿Cuánto me conoces?»",
      "signInTitle": "Inicia sesión para continuar",
      "signInNote": "El test se guarda en tu cuenta para que los resultados te lleguen a ti.",
      "signIn": "Iniciar sesión",
      "premiumNote": "Crear juegos forma parte del acceso completo. Jugar desde un enlace es gratis para todos.",
      "failed": "Algo ha fallado. Revisa la conexión e inténtalo de nuevo.",
      "rateLimited": "Demasiados intentos. Inténtalo más tarde.",
      "playEyebrow": "UN JUEGO PARA DOS",
      "playInvite": "{name} te invita a jugar",
      "playLead": "Preguntas: {count}. Adivina las respuestas: al final verás cuántas coinciden.",
      "playName": "Tu nombre · opcional",
      "playNamePlaceholder": "Para que sepan que eres tú",
      "start": "Empezar",
      "playLoading": "Cargando el juego…",
      "playMissing": "Este juego no está disponible: el enlace se eliminó o ha caducado.",
      "playOffline": "El juego necesita conexión a internet.",
      "retry": "Reintentar",
      "questionOf": "Pregunta {n} de {total}",
      "asks": "{name} pregunta",
      "counting": "Contando coincidencias…",
      "scoreOf": "{score} de {total}",
      "tierAll": "¡Perfecto! Os conocéis mejor que nadie",
      "tierHigh": "Os conocéis muy bien",
      "tierMid": "¡No está mal! Aún queda mucho por descubrir",
      "tierLow": "Os esperan muchos descubrimientos bonitos",
      "sentTo": "{name} verá tu resultado",
      "review": "Tus respuestas",
      "rightAnswer": "Respuesta correcta",
      "makeOwn": "Crear mi propio test",
      "home": "Inicio",
      "resultToast": "{name}: {score} de {total} en «¿Cuánto me conoces?»",
      "ownerAnswers": "Respuestas del autor",
      "playerAnswers": "Respuestas de {name}",
      "paywallTitle": "Juegos, diversión<br><em>y cartas</em>",
      "groupGames": "Juegos",
      "groupFun": "Diversión",
      "groupLetters": "Cartas",
      "featQuiz": "«¿Cuánto me conoces?»: el resultado te llega a ti",
      "featGamesSoon": "Duelo «¿Quién es más rápido?», «Lo que nos gusta», cartas con ositos",
      "featFunSoon": "«¿Quién de los dos?» y «Completa la frase» con el libro de la pareja",
      "featCollection": "Toda la colección de cartas y poemas en 15 idiomas",
      "featMoments": "Momentos, recordatorios y una carta QR que se abre el día indicado",
      "featAudio": "Tu propio audio en la carta y respuestas del destinatario",
      "groupTalk": "Amigos y llamadas",
      "featCall": "Llamadas con amigos: voz, altavoz y reacciones animadas",
      "ynTitle": "Sí o no",
      "ynNote": "Un juego en directo para dos: 5 segundos por tarjeta. Si respondes a tiempo, verás la respuesta de la otra persona.",
      "ynCreate": "Crear sala",
      "ynWaiting": "Esperamos a que {name} abra el enlace…",
      "ynWaitingAny": "Esperando a la otra persona…",
      "ynShareText": "{name} te invita al juego en directo «Sí o no»",
      "ynPartnerHere": "¡{name} ya está aquí!",
      "ynStart": "Empezar el juego",
      "ynWaitHost": "{name} va a empezar el juego",
      "ynYes": "Sí",
      "ynNo": "No",
      "ynMissed": "Demasiado tarde: esta tarjeta queda cerrada",
      "ynMatch": "¡Coincidís!",
      "ynRound": "Tarjeta {n} de {total}",
      "ynAnswered": "Respuesta enviada, esperando a la otra persona…",
      "ynFinal": "{score} de {total} coincidencias",
      "ynFinalHigh": "Os entendéis sin palabras",
      "ynFinalMid": "Tan distintos y tan cerca",
      "ynAgain": "Jugar otra vez",
      "ynLeft": "La otra persona se ha desconectado. Esperamos su vuelta…",
      "ynYou": "Tú",
      "ynOffline": "No se puede conectar al juego. Revisa internet y abre el enlace de nuevo.",
      "ynJoin": "Entrar al juego",
      "ynJoinLead": "{name} te espera. ¡5 segundos por respuesta!",
      "ynStepNames": "Tu nombre y el de la otra persona",
      "ynRoomReady": "La sala está lista: envía el enlace",
      "ynStayHere": "No cierres esta pantalla: el juego empieza cuando se abra el enlace.",
      "featYesNo": "Juego en directo «Sí o no»: 5 segundos por respuesta",
      "ynPartnerMissed": "Sin respuesta: se acabó el tiempo",
      "lvTitle": "Lo que nos gusta",
      "lvNote": "Un juego en directo para dos: 4 imágenes, 10 segundos para elegir lo que más te gusta. ¡Podéis elegir lo mismo!",
      "lvShareText": "{name} te invita al juego en directo «Lo que nos gusta»",
      "lvJoinLead": "{name} te espera. ¡Elige la imagen que más te guste!",
      "lvRound": "Tema {n} de {total}",
      "lvPick": "Elige lo que más te gusta",
      "lvBoth": "Los dos habéis elegido: {item}",
      "lvCommon": "A los dos os encanta",
      "lvDiff": "Gustos distintos: ¡aún más interesante!",
      "lvFinalHigh": "¡Tenéis muchísimo en común!",
      "lvFinalMid": "Tan distintos, y os complementáis",
      "featLoves": "Juego en directo «Lo que nos gusta»: 4 imágenes, elegid juntos",
      "featGamesSoon2": "Duelo «¿Quién es más rápido?» y cartas de memoria con ositos",
      "mcTitle": "Cartas de memoria con ositos",
      "mcNote": "Un juego de memoria en directo para dos: por turnos, dad la vuelta a dos cartas y encontrad las parejas. Tres niveles, de 8 a 16 cartas.",
      "mcShareText": "{name} te invita al juego en directo «Cartas de memoria con ositos»",
      "mcJoinLead": "{name} te espera. ¡Encontrad las parejas por turnos!",
      "mcLevel": "Nivel {n} de {total}",
      "mcTurnYou": "Tu turno: da la vuelta a dos cartas",
      "mcTurnThem": "Turno de {name}",
      "mcPairs": "Parejas encontradas: {found} de {total}",
      "mcLevelDone": "¡Todas las parejas encontradas!",
      "mcTimeUp": "Se acabó el tiempo del nivel",
      "mcNext": "Siguiente: nivel {n}",
      "mcFinal": "Parejas encontradas: {found} de {total}",
      "mcFinalHigh": "¡Un equipo estupendo!",
      "mcFinalMid": "Buena partida: ¿otra?",
      "featCards": "Juego en directo «Cartas de memoria con ositos»: buscad parejas juntos",
      "featGamesSoon3": "Duelo «¿Quién es más rápido?»",
      "duTitle": "¿Quién es más rápido?",
      "duNote": "Un duelo en directo: una palabra y cuatro imágenes. Toca primero la imagen correcta; si fallas, pierdes la ronda.",
      "duShareText": "{name} te reta al duelo en directo «¿Quién es más rápido?»",
      "duJoinLead": "{name} te espera. ¡Encuentra antes la imagen correcta!",
      "duRound": "Ronda {n} de {total}",
      "duFind": "Encuentra: {item}",
      "duYouWon": "¡Has llegado antes!",
      "duTheyWon": "Más rapidez: {name}",
      "duWrong": "Imagen equivocada: ronda perdida",
      "duNobody": "Nadie la encontró a tiempo",
      "duScore": "Tú {you} : {them} {name}",
      "duFinalWin": "¡Victoria! Hoy tienes buen ojo.",
      "duFinalLose": "Esta vez gana {name}. ¿Revancha?",
      "duFinalDraw": "Empate: ¡estáis a la par!",
      "duSeconds": "{s} s",
      "featDuel": "Duelo en directo «¿Quién es más rápido?»: encuentra la imagen antes",
      "whoTitle": "¿Quién de los dos?",
      "whoNote": "Un juego en directo para dos: una pregunta, toca «Yo» o el nombre de la otra persona. Descubrid si estáis de acuerdo.",
      "whoShareText": "{name} te invita al juego en directo «¿Quién de los dos?»",
      "whoJoinLead": "{name} te espera. Responde con sinceridad y luego comparad.",
      "whoRound": "Pregunta {n} de {total}",
      "whoMe": "Yo",
      "whoAgree": "Coincidís: {name}",
      "whoDiffer": "Opiniones distintas: ¡habladlo!",
      "whoFinal": "Coincidisteis {score} de {total} veces",
      "whoFinalHigh": "¡Os conocéis muy bien!",
      "whoFinalMid": "Mucho de qué hablar, y eso es precioso",
      "featWho": "Juego en directo «¿Quién de los dos?»: ¿coincidís?",
      "phTitle": "Completa la frase",
      "phNote": "Un juego en directo para dos: cada quien completa la misma frase tierna con sus palabras y luego leéis las respuestas.",
      "phShareText": "{name} te invita al juego en directo «Completa la frase»",
      "phJoinLead": "{name} te espera. ¡Completa cada frase con tus palabras!",
      "phRound": "Frase {n} de {total}",
      "phPlaceholder": "Tu final…",
      "phDone": "Listo",
      "phWaiting": "Esperando a {name}…",
      "phSkipped": "Sin respuesta",
      "phSave": "Guardar en el libro de la pareja",
      "phSaved": "Guardado en el libro de la pareja",
      "phForbidden": "Escríbelo sin enlaces ni palabras groseras.",
      "phNext": "Siguiente frase",
      "phFinal": "Frases completadas a dúo: {count}",
      "phFinalLead": "Guardad vuestras respuestas favoritas en el libro de la pareja.",
      "featPhrase": "Juego en directo «Completa la frase» con el libro de la pareja",
      "bookTitle": "Libro de la pareja",
      "bookNote": "Las respuestas más tiernas de «Completa la frase», guardadas en tu cuenta.",
      "bookOpen": "Abrir el libro",
      "bookEmpty": "Por ahora el libro está vacío. Jugad a «Completa la frase» y guardad las respuestas que os gusten.",
      "bookDelete": "Eliminar",
      "bookDeleteConfirm": "¿Eliminar esta página del libro?",
      "bookYou": "Tú",
      "inviteTitle": "Invitar a alguien",
      "inviteNote": "Recibirá un mensaje con el juego.",
      "invite": "Invitar",
      "invited": "Invitación enviada",
      "inviteNone": "Añade amigos en la sección «Amigos» para invitarlos con un toque.",
      "inviteSent": "Invitación enviada a {name}",
      "truth": "Verdadero o falso",
      "tfTitle": "Verdadero o falso",
      "tfNote": "Un juego en directo para dos: datos asombrosos sobre el mundo. 12 segundos: ¿verdadero o falso? Un punto por cada acierto.",
      "tfShareText": "{name} te invita al juego en directo «Verdadero o falso»",
      "tfJoinLead": "{name} te espera. Verdadero o falso: ¡decide rápido!",
      "tfRound": "Dato {n} de {total}",
      "tfTrue": "Verdadero",
      "tfFalse": "Falso",
      "tfIsTrue": "¡Es verdad!",
      "tfIsFalse": "¡Es falso!",
      "tfFirstYou": "¡Acertaste antes!",
      "tfFirstThem": "{name} acertó antes",
      "tfFinalWin": "¡Victoria! Sabes más sobre el mundo.",
      "tfFinalLose": "Esta vez {name} sabe más. ¿Revancha?",
      "tfFinalDraw": "Empate: ¡sabéis exactamente lo mismo!",
      "featTruth": "Juego en directo «Verdadero o falso»: datos asombrosos sobre el mundo",
      "countries": "Adivina el país",
      "coTitle": "Adivina el país",
      "coNote": "Un juego en directo para dos: el oso viaja por el mundo. 10 segundos: ¡adivina en qué país está! Un punto por cada acierto.",
      "coShareText": "{name} te invita al juego en directo «Adivina el país»",
      "coJoinLead": "{name} te está esperando. ¡Adivina el país por la imagen!",
      "coRound": "País {n} de {total}",
      "coAsk": "¿Qué país es este?",
      "coFinalWin": "¡Victoria! Conoces el mundo de verdad.",
      "coFinalLose": "Esta vez {name} conoce mejor el mundo. ¿Revancha?",
      "coFinalDraw": "¡Empate! Conocéis muy bien el mundo.",
      "featCountries": "Juego en directo «Adivina el país»: 40 países",
      "hints": "Adivina con pistas",
      "dreams": "Sueños y planes",
      "hiTitle": "Adivina con pistas",
      "hiNote": "Un juego en directo para dos: tres pistas se abren una a una. Si aciertas con la primera, 3 puntos; con la segunda, 2; con la tercera, 1.",
      "hiShareText": "{name} te invita al juego en directo «Adivina con pistas»",
      "hiJoinLead": "{name} te espera. ¡Adivina lo antes posible!",
      "hiRound": "Acertijo {n} de {total}",
      "hiAsk": "¿Qué es?",
      "hiClue": "Pista {n}",
      "hiPoints": "Puntos: +{n}",
      "hiNoPoints": "Esta vez, sin puntos",
      "hiFinalWin": "¡Victoria! Se te da genial adivinar.",
      "hiFinalLose": "Esta vez {name} adivinó mejor. ¿Revancha?",
      "hiFinalDraw": "¡Empate! A los dos se os da genial adivinar.",
      "featHints": "Juego en directo «Adivina con pistas»: 3, 2 o 1 punto",
      "drTitle": "Sueños y planes",
      "drNote": "Un juego en directo para dos: hogar, viajes, estudios y aficiones. Elige lo que te gustaría y descubrid si vuestros sueños coinciden.",
      "drShareText": "{name} te invita al juego en directo «Sueños y planes»",
      "drJoinLead": "{name} te espera. ¡Elige lo que de verdad te gustaría!",
      "drRound": "Pregunta {n} de {total}",
      "drPick": "Elige lo que te gustaría",
      "drBoth": "Coincidís: {item}",
      "drDiff": "Sueños distintos: ¡contaos por qué!",
      "drFinalHigh": "¡Compartís muchísimos sueños!",
      "drFinalMid": "Sueños distintos: mucho de qué hablar",
      "drCommon": "Vuestros sueños en común",
      "featDreams": "Juego en directo «Sueños y planes»: ¿coinciden vuestros sueños?",
      "modestTitle": "Modo discreto",
      "modestNote": "Sin preguntas sobre sentimientos, abrazos o citas: solo amistosas"
    },
    "questions": {
      "q01": [
        "¿Mi estación favorita?",
        "Primavera",
        "Verano",
        "Otoño",
        "Invierno"
      ],
      "q02": [
        "¿Qué elegiría para desayunar?",
        "Café y cruasán",
        "Gachas de avena",
        "Huevos",
        "Solo té"
      ],
      "q03": [
        "¿Mi día libre perfecto?",
        "En casa bajo una manta",
        "Un paseo por el parque",
        "Una escapada fuera de la ciudad",
        "Tiempo con amigos"
      ],
      "q04": [
        "¿Adónde sueño con viajar?",
        "Al mar",
        "A la montaña",
        "A una gran ciudad",
        "A una casita acogedora en el campo"
      ],
      "q05": [
        "¿Mi helado favorito?",
        "Vainilla",
        "Chocolate",
        "Fresa",
        "Pistacho"
      ],
      "q06": [
        "¿Qué me anima más rápido?",
        "Un abrazo",
        "Una sorpresa",
        "Palabras bonitas",
        "Algo rico"
      ],
      "q07": [
        "Yo soy más bien…",
        "De madrugar",
        "De trasnochar",
        "De dormir cuando se puede",
        "Fan de la siesta"
      ],
      "q08": [
        "¿Qué película elegiría esta noche?",
        "Una comedia",
        "Una historia romántica",
        "Una de misterio",
        "Una de animación"
      ],
      "q09": [
        "¿Mi color favorito?",
        "Rojo",
        "Azul",
        "Verde",
        "Rosa"
      ],
      "q10": [
        "¿Qué es lo que más miedo me da?",
        "Las arañas",
        "Las alturas",
        "La oscuridad",
        "Llegar tarde"
      ],
      "q11": [
        "¿Qué flores me encantan?",
        "Rosas",
        "Tulipanes",
        "Peonías",
        "Margaritas"
      ],
      "q12": [
        "¿Qué hago cuando estoy triste?",
        "Llamo a alguien cercano",
        "Como algo dulce",
        "Salgo a caminar",
        "Me voy a dormir"
      ],
      "q13": [
        "¿Qué animal se parece más a mí?",
        "Un gatito",
        "Un perro",
        "Un osezno",
        "Un zorrito"
      ],
      "q14": [
        "¿El mejor regalo para mí?",
        "Algo hecho a mano",
        "Un viaje",
        "Una joya",
        "Un libro"
      ],
      "q15": [
        "¿Mi bebida favorita?",
        "Té negro",
        "Té verde",
        "Café",
        "Chocolate caliente"
      ],
      "q16": [
        "¿Mi tentempié favorito?",
        "Chocolate",
        "Patatas fritas",
        "Fruta",
        "Un pastelito"
      ],
      "q17": [
        "¿Qué elijo cuando viajo?",
        "Museos",
        "La playa",
        "La comida local",
        "Pasear sin plan"
      ],
      "q18": [
        "¿Cómo me gusta pasar la tarde?",
        "Con un libro",
        "Con una serie",
        "Charlando",
        "Dando un paseo"
      ],
      "q19": [
        "¿Qué tiempo me gusta más?",
        "Sol",
        "Lluvia templada",
        "Nevada",
        "Una brisa suave"
      ],
      "q20": [
        "¿Qué superpoder me iría bien?",
        "Volar",
        "Leer mentes",
        "Detener el tiempo",
        "Teletransportarme"
      ],
      "q21": [
        "¿Qué es lo que más valoro en mis seres queridos?",
        "La confianza",
        "El cariño",
        "El sentido del humor",
        "El apoyo"
      ],
      "q22": [
        "¿Qué celebración espero con más ganas?",
        "Año Nuevo",
        "Mi cumpleaños",
        "Las vacaciones de verano",
        "San Valentín"
      ],
      "q23": [
        "¿Cómo suelo decir «te quiero»?",
        "Con palabras",
        "Con hechos",
        "Con abrazos",
        "Con regalos"
      ],
      "q24": [
        "¿Qué pediría en una cafetería?",
        "Pasta",
        "Sushi",
        "Una ensalada",
        "Un postre"
      ],
      "q25": [
        "¿Mi momento favorito del día?",
        "La mañana",
        "La tarde",
        "El atardecer",
        "La noche"
      ],
      "q26": [
        "¿Qué cocina elegiría?",
        "Italiana",
        "Japonesa",
        "Casera",
        "Mexicana"
      ],
      "q27": [
        "¿Dónde pienso mejor?",
        "En la ducha",
        "Paseando",
        "De viaje",
        "Antes de dormir"
      ],
      "q28": [
        "¿Qué hago nada más levantarme?",
        "Mirar el móvil",
        "Beber agua",
        "Preparar café",
        "Quedarme un rato más en la cama"
      ],
      "q29": [
        "¿Mi fruta favorita?",
        "Manzana",
        "Plátano",
        "Mango",
        "Sandía"
      ],
      "q30": [
        "¿Qué afición va más conmigo?",
        "Dibujar",
        "Cocinar",
        "Hacer deporte",
        "Leer"
      ],
      "q31": [
        "¿Cómo quiero celebrar mi cumpleaños?",
        "Con una gran fiesta",
        "Con una cena para dos",
        "Con un viaje",
        "Con una tarde tranquila en casa"
      ],
      "q32": [
        "¿Qué me parecen las sorpresas?",
        "Me encantan",
        "Me ponen un poco de los nervios",
        "Me encanta prepararlas para otros",
        "Prefiero saberlo de antemano"
      ],
      "q33": [
        "¿Qué dulce prefiero?",
        "Tarta",
        "Helado",
        "Galletas",
        "Caramelos"
      ],
      "q34": [
        "¿Qué me llevaría a una isla desierta?",
        "Un libro",
        "Mi móvil",
        "Una manta",
        "Una cámara"
      ],
      "q35": [
        "¿Cómo descanso después de un día duro?",
        "Un baño caliente",
        "Una serie",
        "Un paseo",
        "Una charla con alguien cercano"
      ],
      "q36": [
        "¿Qué medio de transporte me gusta más?",
        "El tren",
        "El avión",
        "El coche",
        "La bicicleta"
      ],
      "q37": [
        "¿Mi juego favorito de la infancia?",
        "El escondite",
        "El pilla-pilla",
        "Las construcciones",
        "Dibujar"
      ],
      "q38": [
        "¿Qué cuento se parece más a mí?",
        "Cenicienta",
        "El Principito",
        "Winnie the Pooh",
        "Alicia en el país de las maravillas"
      ],
      "q39": [
        "¿Cómo alegraría antes a un ser querido?",
        "Con una sorpresa",
        "Con una tarjeta",
        "Con un viaje",
        "Con una cena"
      ],
      "q40": [
        "¿Qué fotografío más?",
        "A mí",
        "La naturaleza",
        "La comida",
        "Casi no hago fotos"
      ],
      "q41": [
        "¿Mi rincón favorito de casa?",
        "La cama",
        "La cocina",
        "El sofá",
        "El balcón"
      ],
      "q42": [
        "¿Qué es lo primero que noto en una persona?",
        "La sonrisa",
        "Los ojos",
        "La voz",
        "El sentido del humor"
      ],
      "q43": [
        "¿Qué me hace reír más rápido?",
        "Vídeos graciosos",
        "Las bromas de mis seres queridos",
        "Situaciones incómodas",
        "Los animales"
      ],
      "q44": [
        "¿Qué bebo en un día caluroso?",
        "Limonada",
        "Té helado",
        "Zumo",
        "Agua con hielo"
      ],
      "q45": [
        "¿Qué elemento se parece más a mí?",
        "El agua",
        "El fuego",
        "La tierra",
        "El aire"
      ],
      "q46": [
        "¿Qué historias me encantan?",
        "De aventuras",
        "De amor",
        "De ciencia ficción",
        "Reales"
      ],
      "q47": [
        "¿Cómo paso un día de lluvia?",
        "Leyendo",
        "Durmiendo",
        "Viendo una película",
        "Paseando con paraguas"
      ],
      "q48": [
        "¿Qué valoro más de un regalo?",
        "El detalle",
        "Que sea útil",
        "Que sea bonito",
        "La sorpresa"
      ],
      "q49": [
        "¿Qué patatas elegiría?",
        "Puré",
        "Fritas",
        "Al horno",
        "De bolsa"
      ],
      "q50": [
        "¿Adónde voy primero en una ciudad nueva?",
        "A un café",
        "A un museo",
        "A un parque",
        "De tiendas"
      ],
      "q51": [
        "¿Qué hago cuando no puedo dormir?",
        "Leo",
        "Miro el móvil",
        "Cuento ovejas",
        "Tomo leche caliente"
      ],
      "q52": [
        "¿Cómo me preparo para un día importante?",
        "Lo planeo todo antes",
        "Lo dejo para el último momento",
        "Pido ayuda",
        "Me entran los nervios y no duermo"
      ],
      "q53": [
        "¿Qué deporte me gusta más ver?",
        "Fútbol",
        "Tenis",
        "Patinaje artístico",
        "No veo deporte"
      ],
      "q54": [
        "¿Qué mascota va conmigo?",
        "Un gato",
        "Un perro",
        "Un loro",
        "Un hámster"
      ],
      "q55": [
        "¿Qué tipo de mensajes escribo?",
        "Largos",
        "Cortos",
        "Llenos de emojis",
        "Notas de voz"
      ],
      "q56": [
        "¿Qué regalo he guardado más tiempo?",
        "Una carta",
        "Un juguete",
        "Una foto",
        "Una joya"
      ],
      "q57": [
        "¿Qué elegiría antes?",
        "Té junto a la chimenea",
        "Un pícnic en la hierba",
        "Un paseo junto al mar",
        "Ir al cine"
      ],
      "q58": [
        "¿Qué cumplido me haría más ilusión?",
        "Sobre mi aspecto",
        "Sobre mi inteligencia",
        "Sobre mi bondad",
        "Sobre mi sentido del humor"
      ],
      "q59": [
        "¿Mi mañana perfecta?",
        "Desayuno en la cama",
        "Correr temprano",
        "Dormir hasta tarde",
        "Café en el balcón"
      ],
      "q60": [
        "¿Qué quiero aprender?",
        "A bailar",
        "A cocinar",
        "Un idioma nuevo",
        "A dibujar"
      ],
      "q61": [
        "¿Qué plato me sale mejor?",
        "Sopa",
        "Pilaf",
        "Repostería",
        "Ensalada"
      ],
      "q62": [
        "¿Qué país quiero ver primero?",
        "Turquía",
        "Japón",
        "Marruecos",
        "Noruega"
      ],
      "q63": [
        "¿Qué deporte preferiría practicar?",
        "Natación",
        "Correr",
        "Ciclismo",
        "Fútbol"
      ],
      "q64": [
        "¿Qué libro elegiría?",
        "Uno de aventuras",
        "Uno de historia",
        "Cuentos",
        "Una enciclopedia"
      ],
      "q65": [
        "¿Qué animales visitaría primero en el zoo?",
        "Los elefantes",
        "Los monos",
        "Los pingüinos",
        "Las jirafas"
      ],
      "q66": [
        "¿Qué opino de la comida picante?",
        "Cuanto más picante, mejor",
        "Un poco está bien",
        "Solo una pizca",
        "No la como nunca"
      ],
      "q67": [
        "¿Qué asignatura me gustaba más en el colegio?",
        "Matemáticas",
        "Literatura",
        "Geografía",
        "Educación física"
      ],
      "q68": [
        "¿Mi trabajo soñado en la infancia?",
        "Medicina",
        "Enseñanza",
        "Viajar al espacio",
        "Cocina"
      ],
      "q69": [
        "¿Qué opino de las excursiones a pie?",
        "Sueño con una larga",
        "Solo de un día",
        "Solo con comodidades",
        "Mejor en casa"
      ],
      "q70": [
        "¿Mi estado de ánimo por la mañana?",
        "Con mucha energía",
        "Con sueño",
        "En silencio",
        "Con ganas de hablar"
      ],
      "q71": [
        "¿Qué fruto seco me gusta más?",
        "Avellana",
        "Nuez",
        "Anacardo",
        "Almendra"
      ],
      "q72": [
        "¿Qué haría con una hora libre inesperada?",
        "Leer",
        "Salir a pasear",
        "Llamar a la familia",
        "Cocinar algo"
      ],
      "q73": [
        "¿Qué tiempo no me gusta?",
        "El calor",
        "El viento",
        "La nieve derretida",
        "Las heladas fuertes"
      ],
      "q74": [
        "¿De qué color pintaría mi habitación?",
        "Blanco",
        "Beis",
        "Verde",
        "Azul claro"
      ],
      "q75": [
        "¿A qué preferiría jugar?",
        "Ajedrez",
        "Damas",
        "Un puzle",
        "Un juego de palabras"
      ],
      "q76": [
        "¿Qué cocinaría para los invitados?",
        "Pilaf",
        "Una tarta",
        "Ensaladas",
        "Pediría comida"
      ],
      "q77": [
        "¿Qué no comería por nada del mundo?",
        "Setas",
        "Pescado",
        "Aceitunas",
        "Cebolla cocida"
      ],
      "q78": [
        "¿Cómo tomo el té?",
        "Fuerte",
        "Suave",
        "Dulce",
        "Con hierbas"
      ],
      "q79": [
        "¿Qué es lo más importante para mí en una casa?",
        "La limpieza",
        "Que sea acogedora",
        "Mucha luz",
        "La tranquilidad"
      ],
      "q80": [
        "¿Cómo aprendo cosas nuevas?",
        "Leyendo",
        "Con vídeos",
        "Probando en la práctica",
        "Preguntando"
      ],
      "q81": [
        "¿Qué animal salvaje me fascina más?",
        "El tigre",
        "El oso",
        "El águila",
        "El delfín"
      ],
      "q82": [
        "¿Qué le regalaría a mi madre?",
        "Flores",
        "Algo hecho a mano",
        "Un viaje",
        "Una manta calentita"
      ],
      "q83": [
        "¿Qué hago en un viaje?",
        "Mirar por la ventana",
        "Leer",
        "Charlar",
        "Picar algo"
      ],
      "q84": [
        "¿Mi plato de pollo favorito?",
        "Brochetas de pollo",
        "Pollo con arroz",
        "Hamburguesitas de pollo",
        "Nuggets"
      ],
      "q85": [
        "¿Qué asiento elijo en el tren?",
        "Ventanilla",
        "Pasillo",
        "De espaldas a la marcha",
        "Me da igual"
      ],
      "q86": [
        "¿Qué hago cuando algo sale mal?",
        "Actúo enseguida",
        "Primero pienso",
        "Pido consejo",
        "Me preocupo un poco"
      ],
      "q87": [
        "¿Cuál es mi principal cualidad?",
        "La bondad",
        "La honestidad",
        "La constancia",
        "La alegría"
      ],
      "q88": [
        "¿Dónde descansaría mejor?",
        "Con la familia en el pueblo",
        "En un hotel junto al mar",
        "En una tienda de campaña",
        "En casa"
      ],
      "q89": [
        "¿Qué pieza de bollería elegiría?",
        "Samsa",
        "Jachapuri",
        "Chak-chak",
        "Un éclair"
      ],
      "q90": [
        "¿Qué idioma me gustaría más aprender?",
        "Árabe",
        "Inglés",
        "Turco",
        "Japonés"
      ],
      "q91": [
        "¿Cuánto tiempo aguantaría sin dulces?",
        "Un día",
        "Una semana",
        "Un mes",
        "Lo que haga falta"
      ],
      "q92": [
        "¿Qué hago cuando llego tarde?",
        "Corro todo lo que puedo",
        "Llamo para avisar",
        "Cojo un taxi",
        "Nunca llego tarde"
      ],
      "q93": [
        "¿Qué hago cuando se estropea un aparato?",
        "Lo arreglo yo",
        "Leo el manual",
        "Pido ayuda",
        "Pulso todos los botones"
      ],
      "q94": [
        "¿Qué meto primero en la maleta?",
        "Un botiquín",
        "Un libro",
        "Un cargador",
        "Algo para picar"
      ],
      "q95": [
        "¿Qué actividad me calma?",
        "Cocinar",
        "Ordenar",
        "Dibujar",
        "Un paseo"
      ],
      "q96": [
        "¿Qué quiero hacer cuando me jubile?",
        "Cuidar el huerto",
        "Viajar",
        "Leer",
        "Pasar tiempo con los nietos"
      ],
      "q97": [
        "¿Qué es lo que más me molesta?",
        "El ruido",
        "El desorden",
        "La impuntualidad",
        "La mala educación"
      ],
      "q98": [
        "¿Qué olor me gusta más?",
        "Pan recién hecho",
        "La lluvia",
        "Las flores",
        "El mar"
      ],
      "q99": [
        "¿Qué elegiría de postre?",
        "Fruta",
        "Helado",
        "Tarta",
        "Solo un té"
      ]
    },
    "yesNo": {
      "c01": [
        "¿Me echas de menos ahora mismo?",
        "te echa mucho de menos",
        "aguanta, pero piensa en ti"
      ],
      "c02": [
        "¿Sonríes cuando ves mi mensaje?",
        "siempre sonríe",
        "sonríe por dentro"
      ],
      "c03": [
        "¿Recuerdas nuestro primer encuentro?",
        "recuerda cada minuto",
        "recuerda lo esencial: a ti"
      ],
      "c04": [
        "¿Quieres un abrazo hoy?",
        "espera tu abrazo",
        "guarda los abrazos para luego"
      ],
      "c05": [
        "¿Vamos juntos al mar?",
        "ya está haciendo la maleta",
        "sueña con la montaña"
      ],
      "c06": [
        "¿Te hago reír?",
        "se ríe de corazón",
        "esconde una sonrisa"
      ],
      "c07": [
        "¿Estás en calma conmigo?",
        "siente paz a tu lado",
        "se divierte contigo"
      ],
      "c08": [
        "¿Piensas en mí durante el día?",
        "piensa en ti muy a menudo",
        "piensa en ti justo ahora"
      ],
      "c09": [
        "¿Te encantan mis sorpresas?",
        "le encantan tus sorpresas",
        "prefiere tenerte simplemente cerca"
      ],
      "c10": [
        "¿Hacemos juntos un pastel?",
        "ya se está poniendo el delantal",
        "prefiere comprar una tarta"
      ],
      "c11": [
        "¿Vemos una película esta noche?",
        "ya está eligiendo la película",
        "prefiere simplemente charlar"
      ],
      "c12": [
        "¿Te gusta mi voz?",
        "podría escucharla sin fin",
        "le gusta aún más tu risa"
      ],
      "c13": [
        "¿Hacemos un pícnic el fin de semana?",
        "prepara la manta",
        "te invita a un café acogedor"
      ],
      "c14": [
        "¿Quieres recibir una carta mía?",
        "espera tu carta",
        "quiere oírlo todo en persona"
      ],
      "c15": [
        "¿Soy muy importante para ti?",
        "importas muchísimo",
        "más de lo que crees"
      ],
      "c16": [
        "¿Paseamos bajo la lluvia?",
        "coge un paraguas para dos",
        "prefiere hacer té en casa"
      ],
      "c17": [
        "¿Nos parecemos?",
        "sois como dos mitades",
        "os complementáis de maravilla"
      ],
      "c18": [
        "¿Te gusta cómo cocino?",
        "pide repetir",
        "le encanta cocinar contigo"
      ],
      "c19": [
        "¿Tenemos una mascota juntos?",
        "ya está eligiendo el nombre",
        "de momento basta con un osito de peluche"
      ],
      "c20": [
        "¿Sabes lo que me encanta?",
        "lo sabe de memoria",
        "quiere saber todavía más"
      ],
      "c21": [
        "¿Bailamos?",
        "ya te tiende la mano",
        "aplaudirá con ganas"
      ],
      "c22": [
        "¿Te inspiro?",
        "le inspiras cada día",
        "a tu lado simplemente hay calidez"
      ],
      "c23": [
        "¿Guardas nuestras fotos?",
        "las guarda todas con cariño",
        "espera otras nuevas, aún mejores"
      ],
      "c24": [
        "¿Vemos juntos el amanecer?",
        "ya pone el despertador",
        "prefiere ver la puesta de sol"
      ],
      "c25": [
        "¿Me cuentas un secreto?",
        "te lo susurrará al oído",
        "que siga siendo un misterio"
      ],
      "c26": [
        "¿Crees en mí?",
        "cree en ti muchísimo",
        "te anima cada día"
      ],
      "c27": [
        "¿Viajamos solos tú y yo?",
        "sueña con ello",
        "se llevará a toda la familia"
      ],
      "c28": [
        "¿Esperas mi llamada?",
        "la espera con una sonrisa",
        "prefiere verte en persona"
      ],
      "c29": [
        "¿Te gustan mis abrazos?",
        "los más cálidos del mundo",
        "le encanta ir de la mano"
      ],
      "c30": [
        "¿Nos leemos en voz alta?",
        "ya está eligiendo un libro",
        "prefiere escucharte"
      ],
      "c31": [
        "¿Nos hacemos una foto juntos hoy?",
        "ya busca un fondo bonito",
        "primero, charlar"
      ],
      "c32": [
        "¿Te levanto el ánimo?",
        "siempre",
        "contigo hasta la tristeza pesa menos"
      ],
      "c33": [
        "¿Desayunamos juntos mañana?",
        "ya prepara el cacao",
        "sueña con dormir hasta tarde"
      ],
      "c34": [
        "¿Recuerdas mi cumpleaños?",
        "sin necesidad de recordatorio",
        "prepara una sorpresa en secreto"
      ],
      "c35": [
        "¿Vamos a patinar sobre hielo?",
        "saca ya los patines",
        "te animará desde la barandilla"
      ],
      "c36": [
        "¿Es un buen día para ti?",
        "un día genial",
        "será mejor contigo cerca"
      ],
      "c37": [
        "¿Dibujas mi retrato?",
        "ya coge el lápiz",
        "dibujará un corazoncito"
      ],
      "c38": [
        "¿Plantamos juntos un árbol?",
        "elige el lugar",
        "empezará con una flor en la ventana"
      ],
      "c39": [
        "¿Quieres oír un cumplido?",
        "lo espera con ilusión",
        "le da vergüenza, pero lo desea mucho"
      ],
      "c40": [
        "¿Jugamos otra vez luego?",
        "quiere otra ronda",
        "prefiere un abrazo a jugar"
      ],
      "c41": [
        "¿Te gusta la comida picante?",
        "cuanto más picante, mejor",
        "elige algo más suave"
      ],
      "c42": [
        "¿Sabes nadar?",
        "nada como un pez",
        "de momento no se aleja de la orilla"
      ],
      "c43": [
        "¿Te gustaría tener un gato?",
        "ya está pensando un nombre",
        "prefiere los perros"
      ],
      "c44": [
        "¿Te gustaría visitar Estambul algún día?",
        "ya sueña con el Bósforo",
        "elegiría otra ciudad"
      ],
      "c45": [
        "¿Te gusta cocinar?",
        "cocina con gusto",
        "prefiere fregar los platos"
      ],
      "c46": [
        "¿Te gustaría aprender a cocinar pilaf?",
        "ya está buscando una receta",
        "prefiere probar el de otra persona"
      ],
      "c47": [
        "¿Te gusta leer libros?",
        "siempre tiene un libro a mano",
        "prefiere escuchar historias"
      ],
      "c48": [
        "¿Sabes montar en bici?",
        "podría salir ahora mismo",
        "promete aprender"
      ],
      "c49": [
        "¿Prefieres la montaña al mar?",
        "elige la montaña",
        "elige el mar"
      ],
      "c50": [
        "¿Te gustaría ver un desierto?",
        "sueña con dunas de arena",
        "prefiere un bosque"
      ],
      "c51": [
        "¿Te gusta el invierno?",
        "espera la primera nevada",
        "espera el verano"
      ],
      "c52": [
        "¿Tomas el té sin azúcar?",
        "le gusta el sabor puro del té",
        "no puede pasar sin una cucharadita de azúcar"
      ],
      "c53": [
        "¿Te dan miedo las arañas?",
        "se mantiene bien lejos",
        "las saca fuera con calma"
      ],
      "c54": [
        "¿Te gusta dibujar?",
        "ya está cogiendo el pincel",
        "prefiere mirar los cuadros de otros"
      ],
      "c55": [
        "¿Te gustaría ver la aurora boreal?",
        "ya está mirando dónde verla",
        "prefiere contemplar las estrellas"
      ],
      "c56": [
        "¿Te gusta el tiempo lluvioso?",
        "disfruta del sonido de la lluvia tras la ventana",
        "espera el sol"
      ],
      "c57": [
        "¿Sabes montar a caballo?",
        "va con seguridad en la silla",
        "de momento solo lo sueña"
      ],
      "c58": [
        "¿Te gustaría tener un perro?",
        "sueña con un amigo fiel",
        "de momento ya tiene bastante que cuidar"
      ],
      "c59": [
        "¿Prefieres lo dulce a lo salado?",
        "no puede vivir sin dulces",
        "elige lo salado"
      ],
      "c60": [
        "¿Te gusta viajar en tren?",
        "disfruta del traqueteo de las ruedas",
        "elige el avión"
      ],
      "c61": [
        "¿Te resulta fácil empezar el día temprano?",
        "empieza el día con mucha energía",
        "no arranca hasta la hora de comer"
      ],
      "c62": [
        "¿Te gusta acampar en tienda de campaña?",
        "ya está haciendo la mochila",
        "elige un hotel acogedor"
      ],
      "c63": [
        "¿Te gustaría vivir junto al mar?",
        "sueña con el rumor de las olas",
        "elige la ciudad"
      ],
      "c64": [
        "¿Comes helado en invierno?",
        "lo come incluso con helada",
        "solo en verano"
      ],
      "c65": [
        "¿Te gusta el chocolate?",
        "conoce todas sus variedades",
        "pasa de largo con calma"
      ],
      "c66": [
        "¿Sabes hacer empanadas al horno?",
        "hornea como una abuela",
        "promete aprender"
      ],
      "c67": [
        "¿Te gusta mirar las estrellas?",
        "conoce las constelaciones",
        "prefiere un día soleado"
      ],
      "c68": [
        "¿Te gustaría plantar tu propio huerto algún día?",
        "ya está eligiendo plantones",
        "empezará con una flor en una maceta"
      ],
      "c69": [
        "¿Te gustan las flores silvestres?",
        "le encantan las margaritas y los acianos",
        "prefiere las flores de jardín"
      ],
      "c70": [
        "¿Tomas café?",
        "sin café el día no empieza",
        "elige el té"
      ],
      "c71": [
        "¿Te gusta la limonada casera?",
        "ya está cortando limones",
        "prefiere agua"
      ],
      "c72": [
        "¿Te gustaría visitar Japón algún día?",
        "sueña con ver los cerezos en flor",
        "elegiría otro país"
      ],
      "c73": [
        "¿Te gusta el otoño?",
        "disfruta pisando las hojas secas",
        "espera la primavera"
      ],
      "c74": [
        "¿Te gusta el olor a lavanda?",
        "le encanta ese aroma",
        "prefiere otros aromas"
      ],
      "c75": [
        "¿Te gustan los juegos de mesa?",
        "ya está preparando el tablero",
        "prefiere dar un paseo"
      ],
      "c76": [
        "¿Sabes conducir?",
        "conduce con seguridad",
        "de momento solo acompaña"
      ],
      "c77": [
        "¿Te gustaría ver el océano algún día?",
        "sueña con una gran ola",
        "con el mar le basta"
      ],
      "c78": [
        "¿Te gustaría vivir un tiempo en una granja?",
        "ya está dando de comer a las gallinas",
        "se queda en la ciudad"
      ],
      "c79": [
        "¿Te gustan las grandes ciudades?",
        "disfruta de las luces de la ciudad",
        "elige la paz y la tranquilidad"
      ],
      "c80": [
        "¿Prefieres la fruta a los dulces?",
        "elige la fruta",
        "elige los dulces"
      ],
      "c81": [
        "¿Te gustaría ver delfines en el mar?",
        "le encantaría verlos",
        "prefiere leer sobre ellos"
      ],
      "c82": [
        "¿Te gusta el verano?",
        "espera los días de calor",
        "prefiere el fresco"
      ],
      "c83": [
        "¿Te gusta pasear por el parque?",
        "pasea haga el tiempo que haga",
        "prefiere quedarse en casa"
      ],
      "c84": [
        "¿Te gusta escribir a mano?",
        "tiene una letra bonita",
        "escribe en el móvil"
      ],
      "c85": [
        "¿Te gustan los paseos en barca?",
        "ya está cogiendo los remos",
        "se queda en la orilla"
      ],
      "c86": [
        "¿Te gustaría dar la vuelta al mundo?",
        "ya está trazando la ruta",
        "con un par de países basta"
      ],
      "c87": [
        "¿Sabes hacer un muñeco de nieve?",
        "hará el más grande",
        "prefiere una guerra de bolas de nieve"
      ],
      "c88": [
        "¿Te gustaría aprender algo nuevo este año?",
        "ya está eligiendo un curso",
        "ya tiene bastante que hacer"
      ],
      "c89": [
        "¿Te gusta el silencio?",
        "valora la calma",
        "prefiere cuando hay ambiente"
      ],
      "c90": [
        "¿Te gusta hacer regalos a tu familia?",
        "alegra a la familia sin ningún motivo",
        "prefiere ayudar de forma práctica"
      ]
    },
    "loves": {
      "s01": [
        "¿Dónde pasar las vacaciones?",
        "Playa",
        "Montaña",
        "Viajar",
        "Tiempo a solas"
      ],
      "s02": [
        "¿La tarde perfecta?",
        "Cine en casa",
        "Un paseo",
        "Restaurante",
        "Juegos de mesa"
      ],
      "s03": [
        "¿Tiempo favorito?",
        "Sol",
        "Lluvia",
        "Nieve",
        "Noche estrellada"
      ],
      "s04": [
        "¿Animal favorito?",
        "Gatito",
        "Cachorro",
        "Caballo",
        "Delfín"
      ],
      "s05": [
        "¿Qué cenamos?",
        "Pizza",
        "Sushi",
        "Pasteles",
        "Barbacoa"
      ],
      "s06": [
        "¿Bebida favorita?",
        "Café",
        "Té",
        "Chocolate caliente",
        "Limonada"
      ],
      "s07": [
        "¿Estación favorita?",
        "Primavera",
        "Verano",
        "Otoño",
        "Invierno"
      ],
      "s08": [
        "¿Flores favoritas?",
        "Rosas",
        "Tulipanes",
        "Girasoles",
        "Lavanda"
      ],
      "s09": [
        "¿Cómo descansar?",
        "Con un libro",
        "Dibujando",
        "En bici",
        "Siesta en la hamaca"
      ],
      "s10": [
        "¿Cómo viajar?",
        "En tren",
        "En avión",
        "En coche",
        "En barco"
      ],
      "s11": [
        "¿Casa de ensueño?",
        "Piso en la ciudad",
        "Casa junto al mar",
        "Cabaña en la montaña",
        "Granja"
      ],
      "s12": [
        "¿Algo dulce?",
        "Helado",
        "Chocolate",
        "Tarta",
        "Fruta"
      ],
      "s13": [
        "¿La mañana perfecta?",
        "Desayuno en la cama",
        "Correr",
        "Dormir hasta tarde",
        "Café en el balcón"
      ],
      "s14": [
        "¿Cita de ensueño?",
        "Pícnic",
        "Pista de hielo",
        "Parque de atracciones",
        "Estrellas en la azotea"
      ],
      "s15": [
        "¿El mejor regalo?",
        "Un ramo de flores",
        "Una carta",
        "Un viaje",
        "Una caja regalo"
      ],
      "s16": [
        "¿Naturaleza favorita?",
        "Mar",
        "Bosque",
        "Desierto",
        "Aurora boreal"
      ],
      "s17": [
        "¿Fruta favorita?",
        "Manzana",
        "Fresa",
        "Sandía",
        "Uvas"
      ],
      "s18": [
        "¿Qué hacer en un día libre?",
        "Senderismo por la montaña",
        "Cocinar en casa",
        "Un museo",
        "Pescar"
      ],
      "s19": [
        "¿Desayuno favorito?",
        "Tortitas",
        "Tortilla",
        "Gachas con frutos rojos",
        "Cruasán"
      ],
      "s20": [
        "¿Ave favorita?",
        "Búho",
        "Loro",
        "Cisne",
        "Pavo real"
      ],
      "s21": [
        "¿Qué ciudad visitar?",
        "Estambul",
        "París",
        "Tokio",
        "Dubái"
      ],
      "s22": [
        "¿Deporte favorito?",
        "Fútbol",
        "Natación",
        "Tenis",
        "Equitación"
      ],
      "s23": [
        "¿Qué plantar en el jardín?",
        "Un manzano",
        "Rosas",
        "Verduras",
        "Fresas"
      ],
      "s24": [
        "¿Dulce horneado favorito?",
        "Empanadillas",
        "Rosquillas",
        "Galletas",
        "Baklava"
      ],
      "s25": [
        "¿Dónde vivir?",
        "Junto a un río",
        "En un bosque",
        "En una gran ciudad",
        "En una isla"
      ],
      "s26": [
        "¿Animal marino favorito?",
        "Tortuga",
        "Ballena",
        "Pulpo",
        "Caballito de mar"
      ],
      "s27": [
        "¿En qué viajar?",
        "Bicicleta",
        "Patinete",
        "Globo aerostático",
        "Barca"
      ],
      "s28": [
        "¿Afición favorita?",
        "Tejer",
        "Fotografía de naturaleza",
        "Jardinería",
        "Caligrafía"
      ],
      "s29": [
        "¿Sopa favorita?",
        "Borsch",
        "Sopa de pollo",
        "Crema de calabaza",
        "Sopa de lentejas"
      ],
      "s30": [
        "¿Animal del bosque?",
        "Erizo",
        "Ardilla",
        "Zorro",
        "Ciervo"
      ],
      "s31": [
        "¿Algo para picar?",
        "Dátiles",
        "Almendras",
        "Pistachos",
        "Orejones"
      ],
      "s32": [
        "¿Qué llevar de excursión?",
        "Una tienda de campaña",
        "Un termo",
        "Un mapa",
        "Una linterna"
      ],
      "s33": [
        "¿Postre favorito?",
        "Pudin",
        "Tarta de queso",
        "Tortitas con miel",
        "Macedonia"
      ],
      "s34": [
        "¿Qué hacer en invierno?",
        "Hacer un muñeco de nieve",
        "Montar en trineo",
        "Té junto a la ventana",
        "Esquiar"
      ],
      "s35": [
        "¿Qué hacer en verano?",
        "Nadar",
        "Recoger frutos rojos",
        "Pasear en barca",
        "Hacer un castillo de arena"
      ],
      "s36": [
        "¿Con qué pintar?",
        "Acuarelas",
        "Lápices de colores",
        "Ceras",
        "Óleo sobre lienzo"
      ],
      "s37": [
        "¿Verdura favorita?",
        "Zanahoria",
        "Tomate",
        "Maíz",
        "Calabaza"
      ],
      "s38": [
        "¿Qué hace acogedor un hogar?",
        "Una chimenea",
        "Una manta suave",
        "Plantas de interior",
        "Una estantería de libros"
      ],
      "s39": [
        "¿A qué jugar?",
        "Ajedrez",
        "Puzles",
        "Juegos de mesa",
        "Juegos de pelota"
      ],
      "s40": [
        "¿Quién vive en la granja?",
        "Vaca",
        "Corderito",
        "Gallina",
        "Cabritillo"
      ],
      "s41": [
        "¿Té con qué?",
        "Miel",
        "Limón",
        "Mermelada",
        "Menta"
      ],
      "s42": [
        "¿Qué hay junto al mar?",
        "Un faro",
        "Conchas",
        "Un velero",
        "Gaviotas"
      ],
      "s43": [
        "¿Cómo empezar la mañana?",
        "Con ejercicio",
        "Con una taza de té",
        "Con un paseo",
        "Con un libro"
      ],
      "s44": [
        "¿Baya favorita?",
        "Frambuesa",
        "Arándano",
        "Cereza",
        "Mora"
      ]
    },
    "who": [
      "¿Quién de los dos llega tarde más a menudo?",
      "¿Quién de los dos hace las paces primero?",
      "¿Quién de los dos cocina mejor?",
      "¿Quién de los dos se ríe más a menudo?",
      "¿Quién de los dos tarda más en arreglarse?",
      "¿Quién de los dos pierde las llaves más a menudo?",
      "¿Quién de los dos recuerda mejor las fechas importantes?",
      "¿Quién de los dos tiene más debilidad por lo dulce?",
      "¿Quién de los dos se duerme primero?",
      "¿Quién de los dos se levanta más temprano?",
      "¿Quién de los dos dice «te echo de menos» más a menudo?",
      "¿Quién de los dos elige mejores regalos?",
      "¿Quién de los dos bromea más a menudo?",
      "¿Quién de los dos conduce mejor?",
      "¿Quién de los dos habla más tiempo por teléfono?",
      "¿Quién de los dos disfruta más de viajar?",
      "¿Quién de los dos se ofende más fácilmente?",
      "¿Quién de los dos perdona más rápido?",
      "¿Quién de los dos hace más fotos?",
      "¿Quién de los dos administra mejor el dinero?",
      "¿Quién de los dos compra más a menudo cosas que no necesitamos?",
      "¿Quién de los dos consuela mejor?",
      "¿Quién de los dos mantiene más la calma en los momentos difíciles?",
      "¿Quién de los dos siempre está buscando su móvil?",
      "¿Quién de los dos disfruta más recibiendo invitados?",
      "¿Quién de los dos prepara el desayuno más a menudo?",
      "¿Quién de los dos se orienta mejor en una ciudad nueva?",
      "¿Quién de los dos escribe mensajes más largos?",
      "¿Quién de los dos propone primero dar un paseo?",
      "¿Quién de los dos quiere más a los animales?",
      "¿Quién de los dos guarda mejor los secretos?",
      "¿Quién de los dos tarda más en elegir de la carta?",
      "¿Quién de los dos se preocupa más por sus seres queridos?",
      "¿Quién de los dos da más sorpresas?",
      "¿Quién de los dos mantiene mejor el orden?",
      "¿Quién de los dos nota primero un corte de pelo nuevo?",
      "¿Quién de los dos recuerda historias divertidas más a menudo?",
      "¿Quién de los dos tiene más paciencia?",
      "¿Quién de los dos dice «gracias» más a menudo?",
      "¿Quién de los dos ofrece ayuda primero?",
      "¿Quién de los dos calcula mejor de cabeza?",
      "¿Quién de los dos lee más?",
      "¿Quién de los dos escribe más rápido en el teclado?",
      "¿Quién de los dos llama más a menudo a sus padres?",
      "¿Quién de los dos cuenta mejor las historias?",
      "¿Quién de los dos tiene la letra más bonita?",
      "¿A quién de los dos le gusta más la comida picante?",
      "¿Quién de los dos se olvida cosas en casa más a menudo?",
      "¿Quién de los dos se maneja mejor con los aparatos?",
      "¿A quién de los dos le gusta más aprender cosas nuevas?",
      "¿Quién de los dos planifica mejor?",
      "¿Quién de los dos regatea mejor en el mercado?",
      "¿A quién de los dos le gusta más la naturaleza?",
      "¿Quién de los dos come más rápido?",
      "¿Quién de los dos toma más té?",
      "¿Quién de los dos cuida mejor las plantas?",
      "¿Quién de los dos sabe más geografía?",
      "¿Quién de los dos juega mejor al ajedrez?",
      "¿Quién de los dos elige mejor la fruta en el mercado?",
      "¿Quién de los dos mira el pronóstico del tiempo más a menudo?",
      "¿A quién de los dos le dan más miedo las arañas?",
      "¿Quién de los dos tiene más valor?",
      "¿Quién de los dos tiene más curiosidad?",
      "¿Quién de los dos resuelve acertijos más rápido?",
      "¿Quién de los dos dibuja mejor?",
      "¿Quién de los dos ayuda más a menudo a los vecinos?",
      "¿Quién de los dos se lleva mejor con los niños?",
      "¿A quién de los dos le gusta más pasear?",
      "¿Quién de los dos lee las instrucciones más a menudo?",
      "¿Quién de los dos recuerda mejor los nombres?",
      "¿Quién de los dos aprende antes palabras en otro idioma?",
      "¿A quién de los dos le sale mejor la repostería?",
      "¿Quién de los dos da mejores consejos?",
      "¿A quién de los dos le gusta más el frío?",
      "¿Quién de los dos se las arreglaría mejor en una excursión?",
      "¿Quién de los dos lee las noticias más a menudo?",
      "¿Quién de los dos prueba platos nuevos más a menudo?",
      "¿Quién de los dos hace la maleta más rápido?",
      "¿Quién de los dos arregla mejor las cosas?",
      "¿Quién de los dos habla con los animales más a menudo?",
      "¿Quién de los dos friega los platos más a menudo?",
      "¿Quién de los dos sabe más historia?",
      "¿Quién de los dos deja las cosas para más tarde más a menudo?",
      "¿Quién de los dos conecta antes con gente nueva?",
      "¿Quién de los dos cuida más su salud?"
    ],
    "phrases": [
      "Sonrío cuando tú…",
      "Mi día favorito contigo es…",
      "Gracias por…",
      "Cuando estoy triste, lo que me ayuda es…",
      "Algún día quiero que hagamos…",
      "El recuerdo más tierno de nosotros es…",
      "Nadie sabe mejor que tú…",
      "Siento calma cuando…",
      "Si tuviéramos un día entero libre, nosotros…",
      "Siento orgullo de ti porque…",
      "Nuestra tarde perfecta es…",
      "Nunca olvidaré cómo tú…",
      "Me gusta cuando dices…",
      "El año que viene quiero que…",
      "Para mí, eres como…",
      "El mejor regalo que me has hecho es…",
      "Te echo de menos cuando…",
      "Nos reímos más cuando…",
      "Hace tiempo que quiero decirte…",
      "Nuestro lugar es…",
      "Cuando pienso en ti, yo…",
      "Haces mi día mejor cuando…",
      "Me gusta nuestra costumbre de…",
      "Mi deseo para nosotros: …",
      "Lo más divertido que nos ha pasado es…",
      "Siento tu cariño cuando tú…",
      "Una mañana contigo es…",
      "Si fuéramos una sola palabra, sería…",
      "Quiero aprender de ti a…",
      "Gracias por estar siempre…",
      "En mi infancia, mi comida favorita era…",
      "Si tuviera un día en cualquier país, yo…",
      "El mejor consejo que me han dado es…",
      "Siempre me río cuando…",
      "Mi lugar favorito de mi ciudad natal es…",
      "Si tuviera mi propia tiendecita, vendería…",
      "El plato que mejor me sale es…",
      "Un sueño de la infancia que todavía recuerdo es…",
      "Es fácil hacerme feliz si…",
      "El lugar más asombroso en el que he estado es…",
      "Quiero aprender…",
      "Mi día libre perfecto empieza con…",
      "Si pudiera tener cualquier animal, sería…",
      "En mi familia siempre dicen que yo…",
      "No consigo acostumbrarme a…",
      "Mi costumbre más útil es…",
      "El mejor libro que he leído es…",
      "Dentro de diez años me gustaría…",
      "La casa de mis sueños es…",
      "Lo más divertido que me pasó en la infancia es…",
      "Para mí, la felicidad es…",
      "Me cuesta renunciar a…",
      "Si tuviera un superpoder, me permitiría…",
      "Lo que más valoro en las personas es…",
      "Cuando tengo una tarde libre, yo…",
      "Mi olor favorito es…",
      "La comida que nunca probaría es…",
      "Lo único sin lo que nunca salgo de casa es…",
      "Me gustaría visitar… porque…",
      "El mejor regalo que he recibido es…",
      "Mi costumbre más curiosa es…",
      "Si tuviera una hora más cada día, yo…",
      "Una persona de la que aprendo mucho es…",
      "En un día difícil, lo que me ayuda es…",
      "Lo más rico que he probado en un viaje es…",
      "Si pudiera cambiar de trabajo por un día, elegiría…",
      "La estación del año más cercana a mi corazón es…",
      "Mis amistades dicen que yo…",
      "Algún día me gustaría enseñar a alguien…",
      "Una pequeña alegría de mi día es…"
    ],
    "truth": {
      "t01": [
        "El pulpo tiene tres corazones.",
        true,
        "Dos corazones bombean sangre a las branquias y el tercero, al resto del cuerpo."
      ],
      "t02": [
        "La Gran Muralla china se ve a simple vista desde la Luna.",
        false,
        "No: la muralla es demasiado estrecha. Incluso desde la órbita cuesta mucho distinguirla."
      ],
      "t03": [
        "La miel puede conservarse miles de años sin estropearse.",
        true,
        "En tumbas del antiguo Egipto se ha encontrado miel de miles de años todavía conservada."
      ],
      "t04": [
        "Los plátanos crecen en árboles.",
        false,
        "La platanera es una hierba gigante: su «tronco» está formado por hojas muy enrolladas."
      ],
      "t05": [
        "Venus es el planeta más caliente del sistema solar.",
        true,
        "Su densa atmósfera calienta Venus hasta unos 460 °C, más que Mercurio."
      ],
      "t06": [
        "Los murciélagos son ciegos.",
        false,
        "Los murciélagos ven, y en la oscuridad además se orientan por ecolocalización."
      ],
      "t07": [
        "La ballena es un pez.",
        false,
        "Las ballenas son mamíferos: respiran aire y alimentan a sus crías con leche."
      ],
      "t08": [
        "El Sáhara es el desierto más grande del mundo.",
        false,
        "El desierto más grande es la Antártida. El Sáhara es el mayor desierto cálido."
      ],
      "t09": [
        "La jirafa tiene el mismo número de vértebras en el cuello que una persona.",
        true,
        "Ambas tienen siete vértebras cervicales; las de la jirafa son simplemente muy largas."
      ],
      "t10": [
        "Desde el punto de vista botánico, el tomate es una baya.",
        true,
        "La botánica clasifica el tomate como baya: un fruto carnoso con semillas dentro."
      ],
      "t11": [
        "Desde el punto de vista botánico, la fresa es una baya.",
        false,
        "Es un falso fruto: los verdaderos frutos son las diminutas «semillas» de fuera."
      ],
      "t12": [
        "En el espacio se puede oír una explosión.",
        false,
        "En el espacio casi no hay aire, así que el sonido no tiene por dónde viajar."
      ],
      "t13": [
        "En lo alto de la montaña, el agua hierve a menor temperatura.",
        true,
        "Allí la presión del aire es menor, por eso el agua hierve antes de llegar a 100 °C."
      ],
      "t14": [
        "Los pingüinos viven en el Polo Norte.",
        false,
        "Los pingüinos salvajes viven solo en el hemisferio sur, no en el extremo norte."
      ],
      "t15": [
        "El Everest es la montaña más alta sobre el nivel del mar.",
        true,
        "El Everest se alza unos 8849 metros sobre el nivel del mar."
      ],
      "t16": [
        "Las personas usan solo el 10 % de su cerebro.",
        false,
        "Es un mito: a lo largo del día casi todas las partes del cerebro están activas."
      ],
      "t17": [
        "El corazón humano late unas 100 000 veces al día.",
        true,
        "A unos 70 latidos por minuto, salen aproximadamente 100 000 latidos al día."
      ],
      "t18": [
        "Un pez de colores solo tiene tres segundos de memoria.",
        false,
        "Los experimentos muestran que los peces de colores recuerdan lo aprendido durante meses."
      ],
      "t19": [
        "Australia es a la vez un país y un continente.",
        true,
        "Australia es el único país que ocupa todo un continente."
      ],
      "t20": [
        "Un rayo nunca cae dos veces en el mismo sitio.",
        false,
        "Sí que cae: los edificios altos reciben rayos muchas veces al año."
      ],
      "t21": [
        "El avestruz esconde la cabeza en la arena cuando tiene miedo.",
        false,
        "Es un mito: un avestruz asustado huye o se tumba pegado al suelo para esconderse."
      ],
      "t22": [
        "El ave más pequeña del mundo es un colibrí.",
        true,
        "El colibrí zunzuncito de Cuba pesa unos 2 gramos, menos que cualquier otra ave."
      ],
      "t23": [
        "La sandía tiene alrededor de un 90 % de agua.",
        true,
        "La sandía tiene cerca de un 92 % de agua; por eso es tan refrescante."
      ],
      "t24": [
        "La araña tiene seis patas.",
        false,
        "La araña tiene ocho patas. Los insectos tienen seis, y las arañas no son insectos."
      ],
      "t25": [
        "La Luna produce su propia luz.",
        false,
        "La Luna no tiene luz propia: refleja la luz del Sol."
      ],
      "t26": [
        "El elefante es el animal terrestre más grande.",
        true,
        "Un elefante africano de sabana puede pesar más de 6 toneladas."
      ],
      "t27": [
        "La ballena azul es el animal más grande que conoce la ciencia.",
        true,
        "La ballena azul puede superar los 30 metros, más que cualquier dinosaurio conocido."
      ],
      "t28": [
        "El camaleón cambia de color solo para camuflarse.",
        false,
        "Su color depende más del estado de ánimo, la temperatura y las señales a otros camaleones."
      ],
      "t29": [
        "El teléfono lo inventó Thomas Edison.",
        false,
        "La patente del teléfono la obtuvo Alexander Graham Bell en 1876."
      ],
      "t30": [
        "La penicilina la descubrió Alexander Fleming.",
        true,
        "Fleming descubrió la penicilina en 1928: el primer antibiótico."
      ],
      "t31": [
        "El volcán más alto del sistema solar está en Marte.",
        true,
        "El monte Olimpo de Marte mide unos 22 km: casi 2,5 veces más que el Everest."
      ],
      "t32": [
        "La sangre de nuestras venas es azul.",
        false,
        "La sangre siempre es roja; las venas solo parecen azules por cómo atraviesa la luz la piel."
      ],
      "t33": [
        "El Atlántico es el océano más grande de la Tierra.",
        false,
        "El más grande es el Pacífico: es mayor que todas las tierras emergidas juntas."
      ],
      "t34": [
        "Rusia es el país más grande del mundo por superficie.",
        true,
        "Rusia ocupa más de 17 millones de kilómetros cuadrados."
      ],
      "t35": [
        "Canadá tiene la costa más larga del mundo.",
        true,
        "La costa de Canadá mide más de 200 000 km, más que la de cualquier otro país."
      ],
      "t36": [
        "El estómago de la vaca tiene cuatro compartimentos.",
        true,
        "La vaca tiene un estómago con cuatro cámaras: así digiere la hierba."
      ],
      "t37": [
        "El león es el felino más grande del mundo.",
        false,
        "El felino más grande es el tigre, sobre todo el tigre siberiano."
      ],
      "t38": [
        "La Tierra es el planeta más cercano al Sol.",
        false,
        "El más cercano es Mercurio, luego Venus; la Tierra es el tercer planeta."
      ],
      "t39": [
        "La luz del Sol tarda unos 8 minutos en llegar a la Tierra.",
        true,
        "La luz recorre los 150 millones de km desde el Sol en unos 8 minutos y 20 segundos."
      ],
      "t40": [
        "Los delfines duermen con una mitad del cerebro cada vez.",
        true,
        "Una mitad descansa mientras la otra vigila y se acuerda de respirar."
      ],
      "t41": [
        "La patata es originaria de Irlanda.",
        false,
        "La patata viene de Sudamérica: se cultivaba en los Andes hace miles de años."
      ],
      "t42": [
        "El chocolate se hace con las semillas del cacao.",
        true,
        "Las mazorcas de cacao crecen directamente en el tronco, y sus semillas se convierten en chocolate."
      ],
      "t43": [
        "El tiburón es un mamífero.",
        false,
        "El tiburón es un pez: respira por branquias. Los mamíferos del mar son las ballenas y los delfines."
      ],
      "t44": [
        "Algunos tipos de bambú pueden crecer casi un metro al día.",
        true,
        "El bambú es una de las plantas que más rápido crecen en la Tierra."
      ],
      "t45": [
        "El búho puede girar la cabeza 360 grados completos.",
        false,
        "El búho gira la cabeza unos 270 grados: mucho, pero no una vuelta completa."
      ],
      "t46": [
        "El diamante y el grafito del lápiz son la misma sustancia.",
        true,
        "Ambos son carbono puro; solo cambia cómo se ordenan los átomos."
      ],
      "t47": [
        "El camello guarda agua en la joroba.",
        false,
        "La joroba del camello guarda grasa, no agua: le da energía en los viajes largos."
      ],
      "t48": [
        "El hueso más pequeño del cuerpo humano está en el oído.",
        true,
        "El estribo, en el oído medio, mide solo unos 3 milímetros."
      ],
      "t49": [
        "Los loros grandes pueden vivir más de 50 años.",
        true,
        "Los guacamayos y las cacatúas bien cuidados suelen vivir 50 años o más."
      ],
      "t50": [
        "Los hermanos Wright hicieron el primer vuelo en avión a motor.",
        true,
        "Volaron en 1903; el primerísimo vuelo duró 12 segundos."
      ],
      "t51": [
        "La rueda se inventó en la Edad Media.",
        false,
        "La rueda tiene más de 5000 años: se usaba en Mesopotamia hacia el 3500 a. C."
      ],
      "t52": [
        "El caballito de mar es un pez.",
        true,
        "El caballito de mar respira por branquias y nada con una aleta, como otros peces."
      ],
      "t53": [
        "El colibrí puede volar hacia atrás.",
        true,
        "Los colibríes son las únicas aves que pueden volar de verdad hacia atrás."
      ],
      "t54": [
        "La torre Eiffel crece un poco en verano.",
        true,
        "El calor dilata el metal y la torre gana unos 15 centímetros."
      ],
      "t55": [
        "La piel es el órgano más grande del cuerpo humano.",
        true,
        "La piel de una persona adulta pesa varios kilos y protege todo el cuerpo."
      ],
      "t56": [
        "El color rojo enfurece al toro.",
        false,
        "El toro apenas distingue el rojo: lo que le provoca es el movimiento, no el color."
      ],
      "t57": [
        "La mosca común vive solo un día.",
        false,
        "La mosca común vive alrededor de un mes. Son las efímeras adultas las que viven uno o dos días."
      ],
      "t58": [
        "La piña crece en los árboles.",
        false,
        "La piña crece en una planta baja y frondosa, justo en el centro."
      ],
      "t59": [
        "El cacahuete es un fruto seco.",
        false,
        "El cacahuete es una legumbre, pariente de los guisantes y las judías. Sus vainas maduran bajo tierra."
      ],
      "t60": [
        "El Polo Norte y el Polo Sur son igual de fríos.",
        false,
        "El Polo Sur es mucho más frío: está sobre un continente alto y helado; el Polo Norte, sobre un océano."
      ]
    },
    "hints": {
      "h01": [
        "Pingüino",
        "Soy un ave, pero no puedo volar",
        "Vivo donde hace mucho frío",
        "Siempre llevo frac",
        "Avestruz",
        "Foca",
        "Gaviota"
      ],
      "h02": [
        "Elefante",
        "Como casi todo el día",
        "Mis orejas parecen grandes abanicos",
        "Tengo una trompa larga",
        "Rinoceronte",
        "Hipopótamo",
        "Jirafa"
      ],
      "h03": [
        "Jirafa",
        "Duermo muy poco, a menudo de pie",
        "Como hojas de los árboles más altos",
        "Tengo el cuello más largo",
        "Cebra",
        "Camello",
        "Alce"
      ],
      "h04": [
        "Camello",
        "Aguanto mucho tiempo sin agua",
        "Me llaman el barco del desierto",
        "Tengo una o dos jorobas en el lomo",
        "Caballo",
        "Burro",
        "Llama"
      ],
      "h05": [
        "Abeja",
        "Sé enseñar a otras el camino a las flores",
        "Trabajo en el prado de sol a sol",
        "Hago miel",
        "Avispa",
        "Mosca",
        "Mariposa"
      ],
      "h06": [
        "Tortuga",
        "Puedo vivir más de cien años",
        "Nunca tengo prisa",
        "Llevo mi casa a cuestas",
        "Caracol",
        "Lagartija",
        "Erizo"
      ],
      "h07": [
        "Canguro",
        "Mi cola me ayuda a mantener el equilibrio",
        "Vivo en Australia",
        "Llevo a mi cría en una bolsa",
        "Koala",
        "Liebre",
        "Ardilla"
      ],
      "h08": [
        "Búho",
        "Puedo girar la cabeza casi del todo hacia atrás",
        "Cazo de noche",
        "Ululo en el bosque oscuro",
        "Cuervo",
        "Águila",
        "Paloma"
      ],
      "h09": [
        "Delfín",
        "Respiro aire, aunque vivo en el mar",
        "Ayudo a la gente y hablo con silbidos",
        "Me encanta saltar sobre las olas",
        "Tiburón",
        "Ballena",
        "Foca"
      ],
      "h10": [
        "Ardilla",
        "Escondo comida y a veces olvido dónde",
        "Vivo en el hueco de un árbol",
        "Roo nueces y piñas",
        "Erizo",
        "Liebre",
        "Ratón"
      ],
      "h11": [
        "Araña",
        "No soy un insecto, aunque muchos lo creen",
        "Tengo ocho patas",
        "Tejo una red",
        "Hormiga",
        "Escarabajo",
        "Mosquito"
      ],
      "h12": [
        "Gato",
        "Veo en la oscuridad mejor que las personas",
        "Me encanta un alféizar calentito",
        "Ronroneo y cazo ratones",
        "Conejo",
        "Hámster",
        "Loro"
      ],
      "h13": [
        "Sandía",
        "Los científicos me llaman baya",
        "Me esperan a finales del verano",
        "Verde por fuera, roja por dentro",
        "Melón",
        "Calabaza",
        "Piña"
      ],
      "h14": [
        "Pan",
        "Me hornean en casi todos los países",
        "Me cortan en rebanadas",
        "Puedo ser blanco o de centeno, con corteza",
        "Tortita",
        "Empanada",
        "Galleta"
      ],
      "h15": [
        "Miel",
        "Puedo conservarme miles de años",
        "Me añaden al té caliente cuando hay resfriado",
        "Me hacen las abejas",
        "Mermelada",
        "Azúcar",
        "Leche"
      ],
      "h16": [
        "Limón",
        "Estoy lleno de vitamina C",
        "Me ponen en el té",
        "Soy amarillo y muy ácido",
        "Naranja",
        "Pomelo",
        "Lima"
      ],
      "h17": [
        "Zanahoria",
        "Crezco bajo tierra, solo asoman mis hojas",
        "Dicen que soy buena para la vista",
        "Soy naranja y a los conejos les encanto",
        "Remolacha",
        "Rábano",
        "Patata"
      ],
      "h18": [
        "Manzana",
        "Tengo variedades de verano y de invierno",
        "Me usan para tartas y zumos",
        "Crezco en un árbol, roja o verde",
        "Pera",
        "Melocotón",
        "Ciruela"
      ],
      "h19": [
        "Plátano",
        "Crezco en racimos en una planta alta",
        "A los monos les encanto",
        "Soy amarillo y hay que pelarme",
        "Mango",
        "Kiwi",
        "Piña"
      ],
      "h20": [
        "Té",
        "En China me beben desde hace milenios",
        "Puedo ser negro, verde o de hierbas",
        "Me preparan en una tetera",
        "Café",
        "Cacao",
        "Zumo"
      ],
      "h21": [
        "Huevo",
        "Sin mí cuesta hacer un bizcocho",
        "Conmigo se hace la tortilla",
        "Me pone una gallina",
        "Queso",
        "Nuez",
        "Patata"
      ],
      "h22": [
        "Paraguas",
        "Paso casi todo el tiempo plegado",
        "Me llevas cuando el cielo se pone gris",
        "Te mantengo seco bajo la lluvia",
        "Impermeable",
        "Sombrero",
        "Botas"
      ],
      "h23": [
        "Reloj",
        "Puedo funcionar con arena o con luz del sol",
        "Cuelgo en paredes y estoy en torres",
        "Marco la hora con mis agujas",
        "Brújula",
        "Calendario",
        "Termómetro"
      ],
      "h24": [
        "Llave",
        "Sin mí, la puerta no te deja entrar",
        "A menudo me llevan en una anilla",
        "Abro una cerradura",
        "Tijeras",
        "Destornillador",
        "Clip"
      ],
      "h25": [
        "Vela",
        "Cuanto más trabajo, más pequeña me hago",
        "Me encienden cuando se va la luz",
        "Soy de cera y tengo mecha",
        "Linterna",
        "Lámpara",
        "Cerillas"
      ],
      "h26": [
        "Tijeras",
        "Tengo dos anillas y dos puntas afiladas",
        "Recorto figuras de papel",
        "Corto tela y papel",
        "Cuchillo",
        "Aguja",
        "Regla"
      ],
      "h27": [
        "Cepillo de dientes",
        "Tengo muchas cerdas",
        "Me cambian cada tres meses",
        "Limpio los dientes mañana y noche",
        "Jabón",
        "Toalla",
        "Esponja"
      ],
      "h28": [
        "Nevera",
        "Dentro de mí siempre es invierno",
        "Al abrirme se enciende una luz",
        "Mantengo la comida fría",
        "Cocina",
        "Horno",
        "Armario"
      ],
      "h29": [
        "Bicicleta",
        "Me muevo sin combustible ni electricidad",
        "Tengo manillar, timbre y cadena",
        "Tengo dos ruedas y pedales",
        "Patinete",
        "Moto",
        "Monopatín"
      ],
      "h30": [
        "Avión",
        "Tengo alas, pero no soy un pájaro",
        "Me esperan en el aeropuerto",
        "Vuelo sobre las nubes con pasajeros",
        "Helicóptero",
        "Cohete",
        "Globo aerostático"
      ],
      "h31": [
        "Tren",
        "Solo viajo por mi propio camino",
        "Tengo muchos vagones",
        "Voy sobre raíles de estación en estación",
        "Tranvía",
        "Autobús",
        "Metro"
      ],
      "h32": [
        "Puente",
        "Me construyen de piedra, madera o acero",
        "Los barcos pueden pasar por debajo de mí",
        "Uno las dos orillas de un río",
        "Túnel",
        "Carretera",
        "Presa"
      ],
      "h33": [
        "Lápiz",
        "Llevo grafito dentro",
        "Me sacan punta cuando me desgasto",
        "Escribo y dibujo; la goma borra mis trazos",
        "Bolígrafo",
        "Tiza",
        "Rotulador"
      ],
      "h34": [
        "Libro",
        "Soy silencioso, pero enseño mucho",
        "Tengo tapa y páginas",
        "Me leen y me prestan en las bibliotecas",
        "Revista",
        "Periódico",
        "Cuaderno"
      ],
      "h35": [
        "Maleta",
        "Viajo mucho, pero siempre en la mano de alguien",
        "Me preparan antes de un viaje",
        "Tengo asa y ruedas, y guardo ropa",
        "Mochila",
        "Bolso",
        "Caja"
      ],
      "h36": [
        "Biblioteca",
        "Aquí piden hablar en voz baja",
        "Aquí te hacen un carné de lector",
        "Miles de libros para llevar a casa",
        "Colegio",
        "Librería",
        "Archivo"
      ],
      "h37": [
        "Aeropuerto",
        "Aquí hay control de pasaportes",
        "Aquí anuncian el embarque de los vuelos",
        "De aquí despegan los aviones",
        "Estación de tren",
        "Puerto",
        "Estación de autobuses"
      ],
      "h38": [
        "Desierto",
        "De día hace calor, pero las noches pueden ser muy frías",
        "Aquí se encuentran oasis",
        "Mucha arena y muy poca agua",
        "Estepa",
        "Sabana",
        "Playa"
      ],
      "h39": [
        "Volcán",
        "Puedo dormir cientos de años",
        "De mi cima sale humo",
        "Entro en erupción con lava",
        "Montaña",
        "Géiser",
        "Isla"
      ],
      "h40": [
        "Arcoíris",
        "Solo me ves con el sol a tu espalda",
        "Aparezco a menudo después de la lluvia",
        "Siete colores en un arco en el cielo",
        "Rayo",
        "Nube",
        "Aurora boreal"
      ],
      "h41": [
        "Luna",
        "Siempre muestro a la Tierra la misma cara",
        "Puedo estar llena o ser un fino creciente",
        "Brillo en el cielo nocturno",
        "Sol",
        "Estrella",
        "Cometa"
      ],
      "h42": [
        "Nieve",
        "Cada uno de mis copos es único",
        "Conmigo se construyen fuertes",
        "Blanca y fría, caigo en invierno",
        "Lluvia",
        "Granizo",
        "Escarcha"
      ],
      "h43": [
        "Río",
        "Tengo nacimiento y desembocadura",
        "Los barcos navegan por mí",
        "Fluyo de las montañas al mar",
        "Lago",
        "Mar",
        "Arroyo"
      ],
      "h44": [
        "Cactus",
        "Puedo vivir mucho tiempo sin agua",
        "Crezco en desiertos y en alféizares",
        "Estoy cubierto de espinas",
        "Aloe",
        "Palmera",
        "Margarita"
      ],
      "h45": [
        "Girasol",
        "De mis semillas se hace aceite",
        "Giro siguiendo al sol",
        "Una gran flor amarilla llena de pipas",
        "Margarita",
        "Tulipán",
        "Diente de león"
      ],
      "h46": [
        "Roble",
        "Puedo vivir más de mil años",
        "Me consideran símbolo de fuerza",
        "En mí crecen bellotas",
        "Abedul",
        "Pino",
        "Arce"
      ],
      "h47": [
        "Isla",
        "En mí cabe un país entero",
        "Llegas a mí en barco o en avión",
        "Estoy rodeada de agua por todas partes",
        "Península",
        "Arrecife",
        "Cabo"
      ],
      "h48": [
        "Cascada",
        "Se me oye desde lejos",
        "La más alta de nosotras está en Venezuela",
        "Aquí un río cae por un precipicio",
        "Fuente",
        "Géiser",
        "Manantial"
      ],
      "h49": [
        "Médico",
        "Estudio muchos años antes de empezar a trabajar",
        "Llevo bata blanca",
        "Curo a las personas enfermas",
        "Enfermero",
        "Farmacéutico",
        "Veterinario"
      ],
      "h50": [
        "Bombero",
        "Estoy de guardia día y noche",
        "Trabajo con agua y escaleras",
        "Apago incendios",
        "Policía",
        "Socorrista",
        "Albañil"
      ],
      "h51": [
        "Cocinero",
        "Pruebo todo lo que preparo",
        "Trabajo junto a un fogón caliente",
        "Preparo comida en un restaurante",
        "Panadero",
        "Camarero",
        "Pastelero"
      ],
      "h52": [
        "Profesor",
        "Por la tarde corrijo cuadernos",
        "Me pongo junto a la pizarra",
        "Enseño a niños en el colegio",
        "Director de colegio",
        "Bibliotecario",
        "Educador infantil"
      ],
      "h53": [
        "Piloto",
        "Mi lugar de trabajo es la cabina",
        "Hablo a los pasajeros por megafonía",
        "Llevo un avión por el cielo",
        "Capitán",
        "Conductor",
        "Astronauta"
      ],
      "h54": [
        "Cartero",
        "Conozco todas las direcciones de mi zona",
        "Llevo una bolsa grande",
        "Reparto cartas y paquetes",
        "Mensajero",
        "Taxista",
        "Dependiente"
      ],
      "h55": [
        "Jardinero",
        "Sé cuándo plantar cada cosa",
        "Mis herramientas son la regadera y las tijeras",
        "Cuido flores y árboles",
        "Agricultor",
        "Guardabosques",
        "Florista"
      ],
      "h56": [
        "Fotógrafo",
        "Atrapo momentos",
        "Pido a todos que no se muevan",
        "Trabajo con una cámara y fotos",
        "Pintor",
        "Periodista",
        "Camarógrafo"
      ],
      "h57": [
        "Pescador",
        "Me levanto antes del amanecer y espero mucho",
        "Necesito una caña y paciencia",
        "Saco peces del agua",
        "Agricultor",
        "Marinero",
        "Pastor"
      ],
      "h58": [
        "Astronauta",
        "Me entreno mucho tiempo en la Tierra",
        "Llevo un traje espacial",
        "Vuelo al espacio",
        "Piloto",
        "Astrónomo",
        "Ingeniero"
      ],
      "h59": [
        "Arquitecto",
        "Mi trabajo se ve por toda la ciudad",
        "Dibujo planos",
        "Diseño casas",
        "Albañil",
        "Diseñador",
        "Ingeniero"
      ],
      "h60": [
        "Dentista",
        "Mucha gente teme mi sillón",
        "Trabajo con un torno",
        "Trato los dientes",
        "Cirujano",
        "Oftalmólogo",
        "Pediatra"
      ]
    },
    "dreams": {
      "d01": [
        "¿Dónde te gustaría vivir dentro de diez años?",
        "Junto al mar",
        "En la montaña",
        "En una gran ciudad",
        "En un pueblo tranquilo"
      ],
      "d02": [
        "¿Qué hogar te gustaría tener algún día?",
        "Un piso acogedor",
        "Una casa con jardín",
        "Una casita junto a un lago",
        "Una casa antigua con historia"
      ],
      "d03": [
        "¿Qué te gustaría cultivar en tu jardín?",
        "Manzanos",
        "Rosas",
        "Verduras y hierbas",
        "Fresas"
      ],
      "d04": [
        "¿Qué mascota te gustaría tener?",
        "Un gato",
        "Un loro",
        "Peces de acuario",
        "Una tortuga"
      ],
      "d05": [
        "¿Adónde te gustaría ir primero?",
        "Japón",
        "Marruecos",
        "Islandia",
        "Nueva Zelanda"
      ],
      "d06": [
        "¿Cómo te gustaría viajar?",
        "En tren",
        "En coche",
        "En avión",
        "En barco"
      ],
      "d07": [
        "¿Qué idioma te gustaría aprender?",
        "Árabe",
        "Japonés",
        "Turco",
        "Chino"
      ],
      "d08": [
        "¿Qué te gustaría aprender a hacer?",
        "Dibujar",
        "Coser",
        "Nadar",
        "Programar"
      ],
      "d09": [
        "¿Qué plato te gustaría dominar?",
        "Pilaf",
        "Pan casero",
        "Sushi",
        "Baklava"
      ],
      "d10": [
        "¿Cómo te gustaría pasar los fines de semana?",
        "En la naturaleza",
        "En casa con un libro",
        "Visitando a la familia",
        "En una ciudad nueva"
      ],
      "d11": [
        "¿Cómo sería una mañana de fin de semana perfecta?",
        "Un paseo temprano",
        "Un desayuno sin prisas",
        "Ejercicio al aire libre",
        "Té en el balcón"
      ],
      "d12": [
        "¿Para qué te gustaría ahorrar?",
        "Una casa propia",
        "Un gran viaje",
        "Un coche",
        "Los estudios"
      ],
      "d13": [
        "¿En qué te gustaría trabajar?",
        "En un negocio propio",
        "En una gran empresa",
        "Desde casa",
        "Ayudando a la gente"
      ],
      "d14": [
        "¿Cómo te gustaría ayudar a los demás?",
        "Voluntariado",
        "Ayudando a animales",
        "Enseñando a niños",
        "Plantando árboles"
      ],
      "d15": [
        "¿Qué tradición familiar te gustaría tener?",
        "Comida del domingo juntos",
        "Tardes de juegos de mesa",
        "Paseos de fin de semana",
        "Un álbum de fotos familiar"
      ],
      "d16": [
        "¿Qué cocina te gustaría tener?",
        "Una gran cocina familiar",
        "Luminosa y acogedora",
        "Con vistas al jardín",
        "Pequeña pero práctica"
      ],
      "d17": [
        "¿Qué te gustaría ver con tus propios ojos?",
        "La aurora boreal",
        "Las pirámides de Guiza",
        "Las cataratas Victoria",
        "El Himalaya"
      ],
      "d18": [
        "¿Qué te gustaría hacer por las tardes?",
        "Leer",
        "Cocinar algo nuevo",
        "Aprender idiomas",
        "Pasear por el parque"
      ],
      "d19": [
        "¿Qué afición te gustaría empezar?",
        "Fotografía",
        "Cerámica",
        "Bordado",
        "Jardinería"
      ],
      "d20": [
        "¿Adónde te gustaría ir un fin de semana?",
        "Al bosque",
        "A un lago",
        "A un pueblo cercano",
        "A la montaña"
      ],
      "d21": [
        "¿Cómo sería tu espacio de trabajo ideal?",
        "Junto a una ventana",
        "Con estanterías de libros",
        "Lleno de plantas",
        "Casi vacío"
      ],
      "d22": [
        "¿Qué te gustaría estudiar después?",
        "Medicina",
        "Historia",
        "Economía",
        "Diseño"
      ],
      "d23": [
        "¿Qué árbol te gustaría plantar?",
        "Un roble",
        "Un manzano",
        "Un olivo",
        "Una palmera datilera"
      ],
      "d24": [
        "¿Qué te gustaría cocinar para los invitados?",
        "Una tarta casera",
        "Un gran pilaf",
        "La sopa de la familia",
        "Ensaladas frescas"
      ],
      "d25": [
        "¿Qué ciudad te gustaría visitar?",
        "Estambul",
        "París",
        "Tokio",
        "El Cairo"
      ],
      "d26": [
        "¿Cómo te gustaría pasar el verano?",
        "Junto al mar",
        "En la montaña",
        "En una casa de campo",
        "Recorriendo nuestro país"
      ],
      "d27": [
        "¿Qué pájaro te gustaría tener?",
        "Un canario",
        "Un periquito",
        "Palomas",
        "Diamantes mandarín"
      ],
      "d28": [
        "¿Qué deporte te gustaría probar?",
        "Natación",
        "Equitación",
        "Tiro con arco",
        "Escalada"
      ],
      "d29": [
        "¿Qué libros te gustaría coleccionar?",
        "Enciclopedias",
        "Clásicos",
        "Libros de viajes",
        "Libros de cocina"
      ],
      "d30": [
        "¿Qué te gustaría hacer con tus propias manos?",
        "Muebles",
        "Tu propia vajilla",
        "Una manta de punto",
        "Una casita para pájaros"
      ],
      "d31": [
        "¿Dónde te gustaría hacer un pícnic?",
        "A la orilla de un río",
        "En un jardín",
        "En un claro del bosque",
        "En la montaña"
      ],
      "d32": [
        "¿Cómo te gustaría desplazarte algún día?",
        "En coche eléctrico",
        "En bicicleta",
        "En un gran coche familiar",
        "Sin coche"
      ],
      "d33": [
        "¿Qué te gustaría hacer al jubilarte?",
        "Cuidar el jardín",
        "Viajar",
        "Estar con los nietos",
        "Aprender cosas nuevas"
      ],
      "d34": [
        "¿Qué buena obra te gustaría hacer?",
        "Construir un pozo de agua",
        "Ayudar a un refugio de gatos",
        "Reunir libros para una escuela",
        "Plantar una hilera de árboles"
      ],
      "d35": [
        "¿Qué te gustaría desayunar el fin de semana?",
        "Tortitas",
        "Una tortilla",
        "Gachas con fruta",
        "Tortitas de requesón"
      ],
      "d36": [
        "¿Dónde te gustaría recibir a los invitados?",
        "En la cocina",
        "En el salón",
        "En la terraza",
        "En el jardín"
      ],
      "d37": [
        "¿Qué maravilla natural te gustaría ver?",
        "El Gran Cañón",
        "Las cataratas del Niágara",
        "El lago Baikal",
        "El desierto del Sáhara"
      ],
      "d38": [
        "¿Qué habilidad doméstica te gustaría aprender?",
        "Hacer reparaciones",
        "Coser",
        "Hacer pan",
        "Cuidar un jardín"
      ],
      "d39": [
        "¿Cuántos idiomas te gustaría hablar?",
        "Dos",
        "Tres",
        "Cinco",
        "Todos los posibles"
      ],
      "d40": [
        "¿De qué color te gustarían las paredes de casa?",
        "Blanco",
        "Beige",
        "Verde claro",
        "Azul claro"
      ],
      "d41": [
        "¿Qué pez te gustaría tener en un acuario?",
        "Un pez dorado",
        "Guppis",
        "Un pez gato",
        "Un pez ángel"
      ],
      "d42": [
        "¿Qué viaje te gustaría regalar a tus padres?",
        "Vacaciones en la playa",
        "Una ruta por ciudades",
        "Un viaje a la montaña",
        "Un viaje en tren"
      ],
      "d43": [
        "¿Qué te gustaría hacer en tu tiempo libre?",
        "Dibujar",
        "Leer",
        "Deporte",
        "Manualidades"
      ],
      "d44": [
        "¿En qué estación te gustaría viajar?",
        "Primavera",
        "Verano",
        "Otoño",
        "Invierno"
      ],
      "d45": [
        "¿Qué te gustaría preparar en conserva para el invierno?",
        "Mermelada",
        "Encurtidos",
        "Fruta deshidratada",
        "Compota de fruta"
      ],
      "d46": [
        "¿Qué otro oficio te gustaría probar?",
        "Cocinero",
        "Programador",
        "Traductor",
        "Carpintero"
      ],
      "d47": [
        "¿Qué país te gustaría conocer?",
        "Malasia",
        "Italia",
        "Canadá",
        "Indonesia"
      ],
      "d48": [
        "¿Qué te gustaría tener en el patio?",
        "Una fuentecita",
        "Un huerto",
        "Un cenador",
        "Un columpio"
      ],
      "d49": [
        "¿Cómo te gustaría celebrar los logros?",
        "Una cena en familia",
        "Una salida a la naturaleza",
        "Un libro nuevo",
        "Una buena obra por los demás"
      ],
      "d50": [
        "¿Qué te gustaría transmitir a los hijos?",
        "El amor por los libros",
        "Saber cocinar",
        "La lengua materna",
        "El cuidado de la naturaleza"
      ]
    }
  },
  "it": {
    "text": {
      "homeLink": "Giochi in due",
      "eyebrow": "GLOWLETTER · GIOCHI IN DUE",
      "title": "Giocate insieme",
      "close": "Chiudi",
      "lead": "Invia un gioco a una persona cara. Giocare da un link è gratis e non serve un account.",
      "quizTitle": "Quanto mi conosci?",
      "quizNote": "Rispondi a domande su di te e lascia che una persona vicina provi a indovinare. Il risultato torna a te.",
      "create": "Crea un quiz",
      "soon": "Presto",
      "soonTitle": "Altri giochi in arrivo",
      "duel": "Sfida «Chi è più veloce»",
      "loves": "Ciò che amiamo",
      "cards": "Carte memory in due",
      "who": "Chi di noi?",
      "phrase": "Completa la frase",
      "myQuizzes": "I miei quiz",
      "noQuizzes": "Ancora nessun quiz. Il primo si crea in un paio di minuti.",
      "forWhom": "Per {name}",
      "noRecipient": "Quiz",
      "resultsCount": "Risultati: {count}",
      "newResults": "Nuovi: {count}",
      "noResults": "Nessuno ha ancora giocato.",
      "anonymous": "Senza nome",
      "results": "Risultati",
      "copyLink": "Copia il link",
      "share": "Invia",
      "deleteQuiz": "Elimina il quiz",
      "deleteConfirm": "Eliminare questo quiz e i suoi risultati? Il link smetterà di funzionare.",
      "deleted": "Quiz eliminato",
      "linkCopied": "Link copiato",
      "back": "Indietro",
      "next": "Avanti",
      "stepNames": "Passo 1 di 2 · Nomi",
      "yourName": "Il tuo nome",
      "yourNamePlaceholder": "Come ti chiami",
      "recipient": "Per chi · facoltativo",
      "recipientPlaceholder": "Il suo nome",
      "nameRequired": "Inserisci il tuo nome.",
      "forbiddenName": "Inserisci un nome normale.",
      "stepAnswers": "Passo 2 di 2 · Le tue risposte",
      "answersLead": "Segna ciò che è vero per te. Ogni domanda si può cambiare.",
      "swap": "Un’altra domanda",
      "progress": "{done} su {total} risposte",
      "answerAll": "Scegli una risposta per ogni domanda.",
      "finish": "Ottieni il link",
      "creating": "Creo il quiz…",
      "createdTitle": "Il tuo quiz è pronto!",
      "createdLead": "Invia il link. Quando risponderanno, il risultato apparirà in «I miei quiz».",
      "shareText": "{name} ti invita a giocare a «Quanto mi conosci?»",
      "signInTitle": "Accedi per continuare",
      "signInNote": "Il quiz resta nel tuo account, così i risultati arrivano a te.",
      "signIn": "Accedi",
      "premiumNote": "Creare giochi fa parte dell’accesso completo. Giocare da un link è gratis per tutti.",
      "failed": "Qualcosa è andato storto. Controlla la connessione e riprova.",
      "rateLimited": "Troppi tentativi. Riprova più tardi.",
      "playEyebrow": "UN GIOCO IN DUE",
      "playInvite": "{name} ti invita a giocare",
      "playLead": "Domande: {count}. Indovina le risposte: alla fine vedrai quante coincidono.",
      "playName": "Il tuo nome · facoltativo",
      "playNamePlaceholder": "Per farti riconoscere",
      "start": "Inizia",
      "playLoading": "Carico il gioco…",
      "playMissing": "Questo gioco non è disponibile: il link è stato eliminato o è scaduto.",
      "playOffline": "Per giocare serve una connessione a internet.",
      "retry": "Riprova",
      "questionOf": "Domanda {n} di {total}",
      "asks": "{name} chiede",
      "counting": "Conto le risposte uguali…",
      "scoreOf": "{score} su {total}",
      "tierAll": "Perfetto! Vi conoscete meglio di chiunque altro",
      "tierHigh": "Vi conoscete davvero bene",
      "tierMid": "Niente male! C’è ancora tanto da scoprire",
      "tierLow": "Vi aspettano tante belle scoperte",
      "sentTo": "{name} vedrà il tuo risultato",
      "review": "Le tue risposte",
      "rightAnswer": "Risposta giusta",
      "makeOwn": "Crea il mio quiz",
      "home": "Home",
      "resultToast": "{name}: {score} su {total} a «Quanto mi conosci?»",
      "ownerAnswers": "Risposte dell’autore",
      "playerAnswers": "Risposte di {name}",
      "paywallTitle": "Giochi, svago<br><em>e lettere</em>",
      "groupGames": "Giochi",
      "groupFun": "Svago",
      "groupLetters": "Lettere",
      "featQuiz": "«Quanto mi conosci?»: il risultato torna a te",
      "featGamesSoon": "Sfida «Chi è più veloce», «Ciò che amiamo», carte con gli orsetti",
      "featFunSoon": "«Chi di noi?» e «Completa la frase» con il libro della coppia",
      "featCollection": "L’intera raccolta di lettere e poesie in 15 lingue",
      "featMoments": "Momenti, promemoria e una lettera QR che si apre nel giorno giusto",
      "featAudio": "Il tuo audio nella lettera e le risposte del destinatario",
      "groupTalk": "Amici e chiamate",
      "featCall": "Chiamate con gli amici: voce, vivavoce e reazioni animate",
      "ynTitle": "Sì o no",
      "ynNote": "Un gioco dal vivo in due: 5 secondi per carta. Chi risponde in tempo vede la risposta dell’altro.",
      "ynCreate": "Crea una stanza",
      "ynWaiting": "Aspettiamo che {name} apra il link…",
      "ynWaitingAny": "In attesa dell’altra persona…",
      "ynShareText": "{name} ti invita al gioco dal vivo «Sì o no»",
      "ynPartnerHere": "{name} è qui!",
      "ynStart": "Inizia il gioco",
      "ynWaitHost": "{name} sta per iniziare il gioco",
      "ynYes": "Sì",
      "ynNo": "No",
      "ynMissed": "Troppo tardi: questa carta resta chiusa",
      "ynMatch": "Stessa risposta!",
      "ynRound": "Carta {n} di {total}",
      "ynAnswered": "Risposta inviata, in attesa dell’altra persona…",
      "ynFinal": "{score} su {total} in comune",
      "ynFinalHigh": "Vi capite senza parole",
      "ynFinalMid": "Così diversi, e così vicini",
      "ynAgain": "Gioca ancora",
      "ynLeft": "L’altra persona si è disconnessa. Aspettiamo che torni…",
      "ynYou": "Tu",
      "ynOffline": "Impossibile collegarsi al gioco. Controlla internet e riapri il link.",
      "ynJoin": "Entra nel gioco",
      "ynJoinLead": "{name} ti aspetta. 5 secondi per ogni risposta!",
      "ynStepNames": "Il tuo nome e quello dell’altra persona",
      "ynRoomReady": "La stanza è pronta: invia il link",
      "ynStayHere": "Tieni aperta questa schermata: il gioco inizia quando il link viene aperto.",
      "featYesNo": "Gioco dal vivo «Sì o no»: 5 secondi per risposta",
      "ynPartnerMissed": "Nessuna risposta: tempo scaduto",
      "lvTitle": "Ciò che amiamo",
      "lvNote": "Un gioco dal vivo in due: 4 immagini, 10 secondi per scegliere ciò che preferisci. Potete scegliere la stessa!",
      "lvShareText": "{name} ti invita al gioco dal vivo «Ciò che amiamo»",
      "lvJoinLead": "{name} ti aspetta. Scegli l’immagine che preferisci!",
      "lvRound": "Tema {n} di {total}",
      "lvPick": "Scegli ciò che preferisci",
      "lvBoth": "Avete scelto entrambi: {item}",
      "lvCommon": "Amate entrambi",
      "lvDiff": "Gusti diversi: ancora più interessante!",
      "lvFinalHigh": "Avete così tanto in comune!",
      "lvFinalMid": "Così diversi, e vi completate",
      "featLoves": "Gioco dal vivo «Ciò che amiamo»: 4 immagini, scegliete insieme",
      "featGamesSoon2": "Sfida «Chi è più veloce» e carte memory con gli orsetti",
      "mcTitle": "Carte memory con gli orsetti",
      "mcNote": "Un memory dal vivo in due: a turno girate due carte e trovate le coppie. Tre livelli, da 8 a 16 carte.",
      "mcShareText": "{name} ti invita al gioco dal vivo «Carte memory con gli orsetti»",
      "mcJoinLead": "{name} ti aspetta. Trovate le coppie a turno!",
      "mcLevel": "Livello {n} di {total}",
      "mcTurnYou": "Tocca a te: gira due carte",
      "mcTurnThem": "Tocca a {name}",
      "mcPairs": "Coppie trovate: {found} su {total}",
      "mcLevelDone": "Tutte le coppie trovate!",
      "mcTimeUp": "Il tempo del livello è finito",
      "mcNext": "Poi: livello {n}",
      "mcFinal": "Coppie trovate: {found} su {total}",
      "mcFinalHigh": "Una squadra fantastica!",
      "mcFinalMid": "Bella partita: un’altra?",
      "featCards": "Gioco dal vivo «Carte memory con gli orsetti»: trovate le coppie insieme",
      "featGamesSoon3": "Sfida «Chi è più veloce»",
      "duTitle": "Chi è più veloce",
      "duNote": "Una sfida dal vivo: una parola e quattro immagini. Tocca prima tu l’immagine giusta: un tocco sbagliato fa perdere il round.",
      "duShareText": "{name} ti sfida dal vivo a «Chi è più veloce»",
      "duJoinLead": "{name} ti aspetta. Trova prima l’immagine giusta!",
      "duRound": "Round {n} di {total}",
      "duFind": "Trova: {item}",
      "duYouWon": "Hai fatto prima tu!",
      "duTheyWon": "Ha fatto prima {name}",
      "duWrong": "Immagine sbagliata: round perso",
      "duNobody": "Nessuno l’ha trovata in tempo",
      "duScore": "Tu {you} : {them} {name}",
      "duFinalWin": "Vittoria! Che occhio oggi.",
      "duFinalLose": "Questa volta vince {name}: rivincita?",
      "duFinalDraw": "Pareggio: siete alla pari!",
      "duSeconds": "{s} s",
      "featDuel": "Sfida dal vivo «Chi è più veloce»: trova prima tu l’immagine",
      "whoTitle": "Chi di noi?",
      "whoNote": "Un gioco dal vivo per due: una domanda, tocca «Io» o il nome dell’altra persona. Scoprite se la pensate allo stesso modo.",
      "whoShareText": "{name} ti invita al gioco dal vivo «Chi di noi?»",
      "whoJoinLead": "{name} ti aspetta. Rispondi con sincerità, poi confrontate!",
      "whoRound": "Domanda {n} di {total}",
      "whoMe": "Io",
      "whoAgree": "Siete d’accordo: {name}",
      "whoDiffer": "Opinioni diverse: parlatene!",
      "whoFinal": "D’accordo {score} volte su {total}",
      "whoFinalHigh": "Vi conoscete davvero bene!",
      "whoFinalMid": "Tanto di cui parlare, ed è bellissimo",
      "featWho": "Gioco dal vivo «Chi di noi?»: siete d’accordo?",
      "phTitle": "Completa la frase",
      "phNote": "Un gioco dal vivo per due: completate la stessa frase affettuosa con parole vostre, poi leggete le vostre risposte.",
      "phShareText": "{name} ti invita al gioco dal vivo «Completa la frase»",
      "phJoinLead": "{name} ti aspetta. Completa ogni frase con parole tue!",
      "phRound": "Frase {n} di {total}",
      "phPlaceholder": "Il tuo finale…",
      "phDone": "Fatto",
      "phWaiting": "In attesa di {name}…",
      "phSkipped": "Nessuna risposta",
      "phSave": "Salva nel libro della coppia",
      "phSaved": "Salvato nel libro della coppia",
      "phForbidden": "Scrivi senza link né parole volgari.",
      "phNext": "Frase successiva",
      "phFinal": "Frasi completate insieme: {count}",
      "phFinalLead": "Salvate le risposte che vi piacciono di più nel libro della coppia.",
      "featPhrase": "Gioco dal vivo «Completa la frase» con il libro della coppia",
      "bookTitle": "Libro della coppia",
      "bookNote": "Le risposte più affettuose di «Completa la frase», conservate nel tuo account.",
      "bookOpen": "Apri il libro",
      "bookEmpty": "Per ora il libro è vuoto. Giocate a «Completa la frase» e salvate le risposte che vi piacciono.",
      "bookDelete": "Elimina",
      "bookDeleteConfirm": "Eliminare questa pagina dal libro?",
      "bookYou": "Tu",
      "inviteTitle": "Invita qualcuno",
      "inviteNote": "Riceverà un messaggio con il gioco.",
      "invite": "Invita",
      "invited": "Invito inviato",
      "inviteNone": "Aggiungi persone nella sezione «Amici» per invitarle con un tocco.",
      "inviteSent": "Invito inviato a {name}",
      "truth": "Vero o falso",
      "tfTitle": "Vero o falso",
      "tfNote": "Un gioco dal vivo in due: fatti sorprendenti sul mondo. 12 secondi: vero o falso? Un punto per ogni risposta giusta.",
      "tfShareText": "{name} ti invita al gioco dal vivo «Vero o falso»",
      "tfJoinLead": "{name} ti aspetta. Vero o falso: decidi in fretta!",
      "tfRound": "Fatto {n} di {total}",
      "tfTrue": "Vero",
      "tfFalse": "Falso",
      "tfIsTrue": "È vero!",
      "tfIsFalse": "È falso!",
      "tfFirstYou": "Hai indovinato prima tu!",
      "tfFirstThem": "{name} ha indovinato prima",
      "tfFinalWin": "Vittoria! Sai più cose sul mondo.",
      "tfFinalLose": "Questa volta {name} ne sa di più: rivincita?",
      "tfFinalDraw": "Pareggio: ne sapete proprio lo stesso!",
      "featTruth": "Gioco dal vivo «Vero o falso»: fatti sorprendenti sul mondo",
      "countries": "Indovina il paese",
      "coTitle": "Indovina il paese",
      "coNote": "Un gioco dal vivo per due: l’orso viaggia per il mondo. 10 secondi: indovina in quale paese si trova! Un punto per ogni risposta giusta.",
      "coShareText": "{name} ti invita al gioco dal vivo «Indovina il paese»",
      "coJoinLead": "{name} ti sta aspettando. Indovina il paese dall’immagine!",
      "coRound": "Paese {n} di {total}",
      "coAsk": "Che paese è questo?",
      "coFinalWin": "Vittoria! Conosci davvero il mondo.",
      "coFinalLose": "Questa volta {name} conosce meglio il mondo: rivincita?",
      "coFinalDraw": "Pareggio: il mondo lo conoscete bene!",
      "featCountries": "Gioco dal vivo «Indovina il paese»: 40 paesi",
      "hints": "Indovina dagli indizi",
      "dreams": "Sogni e progetti",
      "hiTitle": "Indovina dagli indizi",
      "hiNote": "Un gioco dal vivo in due: tre indizi si aprono uno alla volta. Indovina al primo: 3 punti; al secondo: 2; al terzo: 1.",
      "hiShareText": "{name} ti invita al gioco dal vivo «Indovina dagli indizi»",
      "hiJoinLead": "{name} ti aspetta. Indovina il prima possibile!",
      "hiRound": "Indovinello {n} di {total}",
      "hiAsk": "Che cos’è?",
      "hiClue": "Indizio {n}",
      "hiPoints": "Punti: +{n}",
      "hiNoPoints": "Niente punti questa volta",
      "hiFinalWin": "Vittoria! Hai un vero talento per indovinare.",
      "hiFinalLose": "Questa volta {name} ha indovinato meglio: rivincita?",
      "hiFinalDraw": "Pareggio: indovinate benissimo tutti e due!",
      "featHints": "Gioco dal vivo «Indovina dagli indizi»: 3, 2 o 1 punto",
      "drTitle": "Sogni e progetti",
      "drNote": "Un gioco dal vivo in due: casa, viaggi, studio e passioni. Scegli ciò che ti piacerebbe e scoprite se i vostri sogni coincidono.",
      "drShareText": "{name} ti invita al gioco dal vivo «Sogni e progetti»",
      "drJoinLead": "{name} ti aspetta. Scegli ciò che ti piacerebbe davvero!",
      "drRound": "Domanda {n} di {total}",
      "drPick": "Scegli ciò che ti piacerebbe",
      "drBoth": "Sogno comune: {item}",
      "drDiff": "Sogni diversi: raccontatevi il perché!",
      "drFinalHigh": "Avete così tanti sogni in comune!",
      "drFinalMid": "Sogni diversi: tanto di cui parlare",
      "drCommon": "I vostri sogni in comune",
      "featDreams": "Gioco dal vivo «Sogni e progetti»: i vostri sogni coincidono?",
      "modestTitle": "Modalità discreta",
      "modestNote": "Niente domande su sentimenti, abbracci o appuntamenti: solo amichevoli"
    },
    "questions": {
      "q01": [
        "La mia stagione preferita?",
        "Primavera",
        "Estate",
        "Autunno",
        "Inverno"
      ],
      "q02": [
        "Cosa sceglierei a colazione?",
        "Caffè e cornetto",
        "Porridge",
        "Uova",
        "Solo tè"
      ],
      "q03": [
        "Il mio giorno libero ideale?",
        "A casa sotto una coperta",
        "Una passeggiata al parco",
        "Una gita fuori città",
        "Tempo con gli amici"
      ],
      "q04": [
        "Dove sogno di andare?",
        "Al mare",
        "In montagna",
        "In una grande città",
        "In una casetta accogliente in campagna"
      ],
      "q05": [
        "Il mio gelato preferito?",
        "Vaniglia",
        "Cioccolato",
        "Fragola",
        "Pistacchio"
      ],
      "q06": [
        "Cosa mi tira su più in fretta?",
        "Un abbraccio",
        "Una sorpresa",
        "Parole dolci",
        "Qualcosa di buono"
      ],
      "q07": [
        "Sono più…",
        "Una persona mattiniera",
        "Una persona nottambula",
        "Una persona che dorme quando può",
        "Amante del pisolino"
      ],
      "q08": [
        "Che film sceglierei stasera?",
        "Una commedia",
        "Una storia romantica",
        "Un giallo",
        "Un film d’animazione"
      ],
      "q09": [
        "Il mio colore preferito?",
        "Rosso",
        "Blu",
        "Verde",
        "Rosa"
      ],
      "q10": [
        "Di cosa ho più paura?",
        "Dei ragni",
        "Dell’altezza",
        "Del buio",
        "Di arrivare tardi"
      ],
      "q11": [
        "Quali fiori amo?",
        "Rose",
        "Tulipani",
        "Peonie",
        "Margherite"
      ],
      "q12": [
        "Cosa faccio quando sono triste?",
        "Chiamo una persona cara",
        "Mangio qualcosa di dolce",
        "Vado a camminare",
        "Vado a dormire"
      ],
      "q13": [
        "Quale animale mi somiglia di più?",
        "Un gattino",
        "Un cane",
        "Un orsetto",
        "Una volpacchiotta"
      ],
      "q14": [
        "Il regalo più bello per me?",
        "Qualcosa fatto a mano",
        "Un viaggio",
        "Un gioiello",
        "Un libro"
      ],
      "q15": [
        "La mia bevanda preferita?",
        "Tè nero",
        "Tè verde",
        "Caffè",
        "Cioccolata calda"
      ],
      "q16": [
        "Il mio spuntino preferito?",
        "Cioccolato",
        "Patatine",
        "Frutta",
        "Un pasticcino"
      ],
      "q17": [
        "Cosa scelgo in viaggio?",
        "I musei",
        "La spiaggia",
        "La cucina locale",
        "Passeggiare senza meta"
      ],
      "q18": [
        "Come amo passare la serata?",
        "Con un libro",
        "Con una serie",
        "Chiacchierando",
        "Passeggiando"
      ],
      "q19": [
        "Che tempo mi piace di più?",
        "Il sole",
        "Una pioggia tiepida",
        "La neve che cade",
        "Una brezza leggera"
      ],
      "q20": [
        "Quale superpotere mi starebbe bene?",
        "Volare",
        "Leggere nel pensiero",
        "Fermare il tempo",
        "Teletrasportarmi"
      ],
      "q21": [
        "Cosa conta di più per me nelle persone care?",
        "La fiducia",
        "La premura",
        "Il senso dell’umorismo",
        "Il sostegno"
      ],
      "q22": [
        "Quale festa aspetto di più?",
        "Capodanno",
        "Il mio compleanno",
        "Le vacanze estive",
        "San Valentino"
      ],
      "q23": [
        "Come dico più spesso «ti voglio bene»?",
        "Con le parole",
        "Con i gesti",
        "Con gli abbracci",
        "Con i regali"
      ],
      "q24": [
        "Cosa ordinerei al bar?",
        "Pasta",
        "Sushi",
        "Un’insalata",
        "Un dolce"
      ],
      "q25": [
        "Il mio momento preferito della giornata?",
        "La mattina",
        "Il pomeriggio",
        "La sera",
        "La notte"
      ],
      "q26": [
        "Quale cucina sceglierei?",
        "Italiana",
        "Giapponese",
        "Casalinga",
        "Messicana"
      ],
      "q27": [
        "Dove penso meglio?",
        "Sotto la doccia",
        "Passeggiando",
        "In viaggio",
        "Prima di dormire"
      ],
      "q28": [
        "Cosa faccio per prima cosa al mattino?",
        "Guardo il telefono",
        "Bevo acqua",
        "Preparo il caffè",
        "Resto ancora un po’ a letto"
      ],
      "q29": [
        "Il mio frutto preferito?",
        "Mela",
        "Banana",
        "Mango",
        "Anguria"
      ],
      "q30": [
        "Quale hobby mi somiglia di più?",
        "Disegnare",
        "Cucinare",
        "Fare sport",
        "Leggere"
      ],
      "q31": [
        "Come voglio festeggiare il compleanno?",
        "Con una grande festa",
        "Con una cena a due",
        "Con un viaggio",
        "Con una serata tranquilla a casa"
      ],
      "q32": [
        "Cosa penso delle sorprese?",
        "Mi piacciono tanto",
        "Mi agitano un po’",
        "Mi piace farle agli altri",
        "Preferisco saperlo prima"
      ],
      "q33": [
        "Quale dolce preferisco?",
        "La torta",
        "Il gelato",
        "I biscotti",
        "Le caramelle"
      ],
      "q34": [
        "Cosa porterei su un’isola deserta?",
        "Un libro",
        "Il telefono",
        "Una coperta",
        "Una macchina fotografica"
      ],
      "q35": [
        "Come mi rilasso dopo una giornata pesante?",
        "Un bagno caldo",
        "Una serie",
        "Una passeggiata",
        "Una chiacchierata con una persona cara"
      ],
      "q36": [
        "Quale mezzo di trasporto preferisco?",
        "Il treno",
        "L’aereo",
        "L’auto",
        "La bicicletta"
      ],
      "q37": [
        "Il mio gioco preferito dell’infanzia?",
        "Nascondino",
        "Acchiapparella",
        "Le costruzioni",
        "Disegnare"
      ],
      "q38": [
        "Quale fiaba mi somiglia di più?",
        "Cenerentola",
        "Il Piccolo Principe",
        "Winnie the Pooh",
        "Alice nel Paese delle Meraviglie"
      ],
      "q39": [
        "Come farei felice una persona cara?",
        "Con una sorpresa",
        "Con un biglietto",
        "Con un viaggio",
        "Con una cena"
      ],
      "q40": [
        "Cosa fotografo più spesso?",
        "Me",
        "La natura",
        "Il cibo",
        "Non faccio quasi foto"
      ],
      "q41": [
        "Il mio angolo preferito di casa?",
        "Il letto",
        "La cucina",
        "Il divano",
        "Il balcone"
      ],
      "q42": [
        "Cosa noto per primo in una persona?",
        "Il sorriso",
        "Gli occhi",
        "La voce",
        "Il senso dell’umorismo"
      ],
      "q43": [
        "Cosa mi fa ridere più in fretta?",
        "I video divertenti",
        "Le battute delle persone care",
        "Le situazioni imbarazzanti",
        "Gli animali"
      ],
      "q44": [
        "Cosa bevo in una giornata calda?",
        "Limonata",
        "Tè freddo",
        "Succo",
        "Acqua con ghiaccio"
      ],
      "q45": [
        "Quale elemento mi somiglia di più?",
        "L’acqua",
        "Il fuoco",
        "La terra",
        "L’aria"
      ],
      "q46": [
        "Quali storie amo?",
        "Di avventura",
        "D’amore",
        "Di fantascienza",
        "Vere"
      ],
      "q47": [
        "Come passo una giornata di pioggia?",
        "Leggendo",
        "Dormendo",
        "Guardando un film",
        "Passeggiando con l’ombrello"
      ],
      "q48": [
        "Cosa apprezzo di più in un regalo?",
        "Il pensiero",
        "L’utilità",
        "La bellezza",
        "La sorpresa"
      ],
      "q49": [
        "Quali patate sceglierei?",
        "Purè",
        "Patatine fritte",
        "Al forno",
        "Patatine in busta"
      ],
      "q50": [
        "Dove vado per primo in una città nuova?",
        "In un caffè",
        "In un museo",
        "In un parco",
        "Per negozi"
      ],
      "q51": [
        "Cosa faccio quando non riesco a dormire?",
        "Leggo",
        "Scorro il telefono",
        "Conto le pecore",
        "Bevo latte caldo"
      ],
      "q52": [
        "Come mi preparo a un giorno importante?",
        "Pianifico tutto prima",
        "Faccio tutto all’ultimo momento",
        "Chiedo aiuto",
        "Mi agito e non dormo"
      ],
      "q53": [
        "Quale sport mi piace di più guardare?",
        "Calcio",
        "Tennis",
        "Pattinaggio artistico",
        "Non guardo lo sport"
      ],
      "q54": [
        "Quale animale domestico fa per me?",
        "Un gatto",
        "Un cane",
        "Un pappagallo",
        "Un criceto"
      ],
      "q55": [
        "Che tipo di messaggi scrivo?",
        "Lunghi",
        "Brevi",
        "Pieni di emoji",
        "Vocali"
      ],
      "q56": [
        "Quale regalo conservo da più tempo?",
        "Una lettera",
        "Un giocattolo",
        "Una foto",
        "Un gioiello"
      ],
      "q57": [
        "Cosa sceglierei piuttosto?",
        "Un tè davanti al camino",
        "Un picnic sul prato",
        "Una passeggiata al mare",
        "Una serata al cinema"
      ],
      "q58": [
        "Quale complimento mi farebbe più piacere?",
        "Sul mio aspetto",
        "Sulla mia intelligenza",
        "Sulla mia gentilezza",
        "Sul mio umorismo"
      ],
      "q59": [
        "La mia mattina perfetta?",
        "Colazione a letto",
        "Una corsa all’alba",
        "Dormire a lungo",
        "Caffè sul balcone"
      ],
      "q60": [
        "Cosa voglio imparare?",
        "A ballare",
        "A cucinare",
        "Una nuova lingua",
        "A disegnare"
      ],
      "q61": [
        "Quale piatto mi riesce meglio?",
        "La zuppa",
        "Il pilaf",
        "I dolci al forno",
        "L’insalata"
      ],
      "q62": [
        "Quale paese voglio vedere per primo?",
        "Turchia",
        "Giappone",
        "Marocco",
        "Norvegia"
      ],
      "q63": [
        "Quale sport preferirei praticare?",
        "Nuoto",
        "Corsa",
        "Ciclismo",
        "Calcio"
      ],
      "q64": [
        "Quale libro sceglierei?",
        "Un romanzo d’avventura",
        "Un libro di storia",
        "Le fiabe",
        "Un’enciclopedia"
      ],
      "q65": [
        "Quali animali andrei a vedere per primi allo zoo?",
        "Gli elefanti",
        "Le scimmie",
        "I pinguini",
        "Le giraffe"
      ],
      "q66": [
        "Come mi trovo con il cibo piccante?",
        "Più è piccante, meglio è",
        "Un po’ va bene",
        "Solo un pizzico",
        "Non lo mangio proprio"
      ],
      "q67": [
        "Quale materia scolastica mi piaceva di più?",
        "Matematica",
        "Letteratura",
        "Geografia",
        "Educazione fisica"
      ],
      "q68": [
        "Il lavoro dei miei sogni nell’infanzia?",
        "Medicina",
        "Insegnamento",
        "Viaggiare nello spazio",
        "Cucina"
      ],
      "q69": [
        "Come mi trovo con le escursioni a piedi?",
        "Ne sogno una lunga",
        "Solo per un giorno",
        "Solo con le comodità",
        "Meglio a casa"
      ],
      "q70": [
        "Il mio umore al mattino?",
        "Tanta energia",
        "Ancora sonno",
        "Silenzio",
        "Voglia di chiacchierare"
      ],
      "q71": [
        "Quale frutta secca preferisco?",
        "Nocciola",
        "Noce",
        "Anacardo",
        "Mandorla"
      ],
      "q72": [
        "Cosa farei con un’ora libera inaspettata?",
        "Leggerei",
        "Andrei a passeggio",
        "Chiamerei la famiglia",
        "Cucinerei qualcosa"
      ],
      "q73": [
        "Che tempo non mi piace?",
        "Il caldo",
        "Il vento",
        "La neve sciolta",
        "Il gelo intenso"
      ],
      "q74": [
        "Di che colore dipingerei la mia stanza?",
        "Bianco",
        "Beige",
        "Verde",
        "Azzurro"
      ],
      "q75": [
        "A cosa preferirei giocare?",
        "Scacchi",
        "Dama",
        "Un puzzle",
        "Un gioco di parole"
      ],
      "q76": [
        "Cosa cucinerei per gli ospiti?",
        "Il pilaf",
        "Una torta",
        "Delle insalate",
        "Ordinerei da mangiare"
      ],
      "q77": [
        "Cosa non mangerei mai?",
        "Funghi",
        "Pesce",
        "Olive",
        "Cipolla bollita"
      ],
      "q78": [
        "Come preparo il tè?",
        "Forte",
        "Leggero",
        "Dolce",
        "Con le erbe"
      ],
      "q79": [
        "Cosa conta di più per me in una casa?",
        "La pulizia",
        "L’atmosfera accogliente",
        "Tanta luce",
        "La quiete"
      ],
      "q80": [
        "Come imparo le cose nuove?",
        "Leggendo",
        "Con le videolezioni",
        "Provando in pratica",
        "Chiedendo agli altri"
      ],
      "q81": [
        "Quale animale selvatico mi affascina di più?",
        "La tigre",
        "L’orso",
        "L’aquila",
        "Il delfino"
      ],
      "q82": [
        "Cosa regalerei alla mia mamma?",
        "Dei fiori",
        "Qualcosa fatto a mano",
        "Un viaggio",
        "Una coperta calda"
      ],
      "q83": [
        "Cosa faccio durante un viaggio?",
        "Guardo fuori dal finestrino",
        "Leggo",
        "Chiacchiero",
        "Sgranocchio qualcosa"
      ],
      "q84": [
        "Il mio piatto di pollo preferito?",
        "Spiedini di pollo",
        "Pollo con riso",
        "Polpette di pollo",
        "Nuggets"
      ],
      "q85": [
        "Quale posto scelgo in treno?",
        "Al finestrino",
        "Lato corridoio",
        "Contro il senso di marcia",
        "Per me è uguale"
      ],
      "q86": [
        "Cosa faccio quando qualcosa va storto?",
        "Agisco subito",
        "Prima rifletto",
        "Chiedo un consiglio",
        "Mi preoccupo un po’"
      ],
      "q87": [
        "Qual è la mia qualità principale?",
        "La gentilezza",
        "L’onestà",
        "La tenacia",
        "L’allegria"
      ],
      "q88": [
        "Dove mi riposerei meglio?",
        "Dai parenti in campagna",
        "In un hotel al mare",
        "In tenda",
        "A casa"
      ],
      "q89": [
        "Quale prodotto da forno sceglierei?",
        "Samsa",
        "Khachapuri",
        "Chak-chak",
        "Un éclair"
      ],
      "q90": [
        "Quale lingua vorrei imparare di più?",
        "Arabo",
        "Inglese",
        "Turco",
        "Giapponese"
      ],
      "q91": [
        "Quanto resisterei senza dolci?",
        "Un giorno",
        "Una settimana",
        "Un mese",
        "Quanto serve"
      ],
      "q92": [
        "Cosa faccio quando sono in ritardo?",
        "Corro più che posso",
        "Chiamo per avvisare",
        "Prendo un taxi",
        "Non sono mai in ritardo"
      ],
      "q93": [
        "Cosa faccio quando si rompe un apparecchio?",
        "Lo aggiusto io",
        "Leggo il manuale",
        "Chiedo aiuto",
        "Premo tutti i pulsanti"
      ],
      "q94": [
        "Cosa metto per primo in valigia?",
        "Un kit di pronto soccorso",
        "Un libro",
        "Un caricabatterie",
        "Uno spuntino"
      ],
      "q95": [
        "Quale attività mi calma?",
        "Cucinare",
        "Mettere in ordine",
        "Disegnare",
        "Una passeggiata"
      ],
      "q96": [
        "Cosa voglio fare quando andrò in pensione?",
        "Curare l’orto",
        "Viaggiare",
        "Leggere",
        "Passare il tempo con i nipoti"
      ],
      "q97": [
        "Cosa mi dà più fastidio?",
        "Il rumore",
        "Il disordine",
        "I ritardi",
        "La maleducazione"
      ],
      "q98": [
        "Quale profumo mi piace di più?",
        "Il pane appena sfornato",
        "La pioggia",
        "I fiori",
        "Il mare"
      ],
      "q99": [
        "Cosa sceglierei come dessert?",
        "Frutta",
        "Gelato",
        "Una torta",
        "Solo un tè"
      ]
    },
    "yesNo": {
      "c01": [
        "Ti manco in questo momento?",
        "sente tanto la tua mancanza",
        "resiste, ma pensa a te"
      ],
      "c02": [
        "Sorridi quando vedi un mio messaggio?",
        "sorride sempre",
        "sorride dentro di sé"
      ],
      "c03": [
        "Ricordi il nostro primo incontro?",
        "ricorda ogni minuto",
        "ricorda l’essenziale: te"
      ],
      "c04": [
        "Vuoi un abbraccio oggi?",
        "aspetta il tuo abbraccio",
        "tiene gli abbracci per dopo"
      ],
      "c05": [
        "Andiamo insieme al mare?",
        "sta già facendo la valigia",
        "sogna la montagna"
      ],
      "c06": [
        "Ti faccio ridere?",
        "ride di cuore",
        "nasconde un sorriso"
      ],
      "c07": [
        "Ti senti in pace con me?",
        "accanto a te sente pace",
        "si diverte con te"
      ],
      "c08": [
        "Pensi a me durante il giorno?",
        "pensa a te molto spesso",
        "pensa a te proprio ora"
      ],
      "c09": [
        "Ami le mie sorprese?",
        "ama tanto le tue sorprese",
        "ama soprattutto averti vicino"
      ],
      "c10": [
        "Facciamo una torta insieme?",
        "sta già mettendo il grembiule",
        "preferisce comprarla"
      ],
      "c11": [
        "Guardiamo un film stasera?",
        "sta già scegliendo il film",
        "preferisce chiacchierare"
      ],
      "c12": [
        "Ti piace la mia voce?",
        "potrebbe ascoltarla all’infinito",
        "ama ancora di più la tua risata"
      ],
      "c13": [
        "Facciamo un picnic nel weekend?",
        "prepara la coperta",
        "ti invita in un caffè accogliente"
      ],
      "c14": [
        "Vuoi ricevere una mia lettera?",
        "aspetta la tua lettera",
        "vuole sentire tutto di persona"
      ],
      "c15": [
        "Conto molto per te?",
        "conti tantissimo",
        "più di quanto immagini"
      ],
      "c16": [
        "Passeggiamo sotto la pioggia?",
        "prende un ombrello per due",
        "preferisce fare un tè a casa"
      ],
      "c17": [
        "Ci somigliamo?",
        "siete come due metà",
        "vi completate alla perfezione"
      ],
      "c18": [
        "Ti piace come cucino?",
        "chiede il bis",
        "ama cucinare insieme a te"
      ],
      "c19": [
        "Prendiamo un animale insieme?",
        "sta già scegliendo il nome",
        "per ora basta un orsetto di peluche"
      ],
      "c20": [
        "Sai cosa amo?",
        "lo sa a memoria",
        "vuole scoprirne ancora di più"
      ],
      "c21": [
        "Balliamo?",
        "ti porge già la mano",
        "applaudirà con gioia"
      ],
      "c22": [
        "Ti ispiro?",
        "sei d’ispirazione ogni giorno",
        "accanto a te c’è semplicemente calore"
      ],
      "c23": [
        "Conservi le nostre foto?",
        "le custodisce tutte",
        "ne aspetta di nuove, ancora più belle"
      ],
      "c24": [
        "Guardiamo l’alba insieme?",
        "sta mettendo la sveglia",
        "preferisce il tramonto"
      ],
      "c25": [
        "Mi racconti un segreto?",
        "te lo sussurrerà all’orecchio",
        "che resti un mistero"
      ],
      "c26": [
        "Credi in me?",
        "crede fortemente in te",
        "ti incoraggia ogni giorno"
      ],
      "c27": [
        "Partiamo in viaggio, solo noi due?",
        "lo sogna",
        "porterà tutte le persone care"
      ],
      "c28": [
        "Aspetti una mia chiamata?",
        "la aspetta con un sorriso",
        "preferisce vederti di persona"
      ],
      "c29": [
        "Ti piacciono i miei abbracci?",
        "i più caldi del mondo",
        "ama tenersi per mano"
      ],
      "c30": [
        "Ci leggiamo qualcosa ad alta voce?",
        "sta già scegliendo un libro",
        "preferisce ascoltarti"
      ],
      "c31": [
        "Facciamo una foto insieme oggi?",
        "cerca già uno sfondo carino",
        "prima, quattro chiacchiere"
      ],
      "c32": [
        "Ti tiro su il morale?",
        "sempre",
        "con te anche la tristezza è più leggera"
      ],
      "c33": [
        "Facciamo colazione insieme domani?",
        "sta già preparando la cioccolata",
        "sogna di dormire a lungo"
      ],
      "c34": [
        "Ricordi il mio compleanno?",
        "senza bisogno di promemoria",
        "prepara una sorpresa in segreto"
      ],
      "c35": [
        "Andiamo a pattinare?",
        "tira fuori i pattini",
        "farà il tifo per te dal bordo"
      ],
      "c36": [
        "Oggi è una bella giornata per te?",
        "una giornata splendida",
        "sarà migliore con te vicino"
      ],
      "c37": [
        "Mi fai un ritratto?",
        "prende già la matita",
        "disegnerà un cuoricino"
      ],
      "c38": [
        "Piantiamo un albero insieme?",
        "sceglie il posto",
        "comincerà con un fiore sul davanzale"
      ],
      "c39": [
        "Vuoi un complimento?",
        "non vede l’ora",
        "è timidezza, ma lo desidera tanto"
      ],
      "c40": [
        "Rigiochiamo più tardi?",
        "vuole un altro round",
        "preferisce un abbraccio al gioco"
      ],
      "c41": [
        "Ti piace il cibo piccante?",
        "più è piccante, meglio è",
        "sceglie qualcosa di più delicato"
      ],
      "c42": [
        "Sai nuotare?",
        "nuota come un pesce",
        "per ora resta vicino alla riva"
      ],
      "c43": [
        "Ti piacerebbe avere un gatto?",
        "sta già pensando a un nome",
        "preferisce i cani"
      ],
      "c44": [
        "Ti piacerebbe visitare Istanbul un giorno?",
        "sogna già il Bosforo",
        "sceglierebbe un’altra città"
      ],
      "c45": [
        "Ti piace cucinare?",
        "cucina con piacere",
        "preferisce lavare i piatti"
      ],
      "c46": [
        "Ti piacerebbe imparare a cucinare il pilaf?",
        "sta già cercando una ricetta",
        "preferisce assaggiare quello di qualcun altro"
      ],
      "c47": [
        "Ti piace leggere libri?",
        "ha sempre un libro a portata di mano",
        "preferisce ascoltare storie"
      ],
      "c48": [
        "Sai andare in bicicletta?",
        "potrebbe partire subito",
        "promette di imparare"
      ],
      "c49": [
        "Preferisci la montagna al mare?",
        "sceglie la montagna",
        "sceglie il mare"
      ],
      "c50": [
        "Ti piacerebbe vedere un deserto?",
        "sogna le dune di sabbia",
        "sceglierebbe piuttosto un bosco"
      ],
      "c51": [
        "Ti piace l’inverno?",
        "aspetta la prima neve",
        "aspetta l’estate"
      ],
      "c52": [
        "Bevi il tè senza zucchero?",
        "ama il gusto puro del tè",
        "non rinuncia a un cucchiaino di zucchero"
      ],
      "c53": [
        "Hai paura dei ragni?",
        "ne sta ben alla larga",
        "li porta fuori con calma"
      ],
      "c54": [
        "Ti piace disegnare?",
        "sta già prendendo il pennello",
        "preferisce guardare i quadri degli altri"
      ],
      "c55": [
        "Ti piacerebbe vedere l’aurora boreale?",
        "sta già cercando dove vederla",
        "preferisce guardare le stelle"
      ],
      "c56": [
        "Ti piace il tempo piovoso?",
        "ama il rumore della pioggia fuori dalla finestra",
        "aspetta il sole"
      ],
      "c57": [
        "Sai andare a cavallo?",
        "sta in sella con sicurezza",
        "per ora lo sogna soltanto"
      ],
      "c58": [
        "Ti piacerebbe avere un cane?",
        "sogna un amico fedele",
        "per ora ha già abbastanza di cui occuparsi"
      ],
      "c59": [
        "Preferisci il dolce al salato?",
        "non può vivere senza dolci",
        "sceglie il salato"
      ],
      "c60": [
        "Ti piace viaggiare in treno?",
        "ama il ritmo delle ruote sui binari",
        "sceglie l’aereo"
      ],
      "c61": [
        "Ti è facile iniziare la giornata presto?",
        "inizia la giornata con tanta energia",
        "ingrana solo verso pranzo"
      ],
      "c62": [
        "Ti piace campeggiare in tenda?",
        "sta già preparando lo zaino",
        "sceglie un hotel accogliente"
      ],
      "c63": [
        "Ti piacerebbe vivere al mare?",
        "sogna il rumore delle onde",
        "sceglie la città"
      ],
      "c64": [
        "Mangi il gelato d’inverno?",
        "lo mangia anche col gelo",
        "solo d’estate"
      ],
      "c65": [
        "Ti piace il cioccolato?",
        "ne conosce ogni varietà",
        "ci passa davanti con calma"
      ],
      "c66": [
        "Sai fare le torte al forno?",
        "sforna come una nonna",
        "promette di imparare"
      ],
      "c67": [
        "Ti piace guardare le stelle?",
        "conosce le costellazioni",
        "preferisce una giornata di sole"
      ],
      "c68": [
        "Ti piacerebbe un giorno coltivare un orto tutto tuo?",
        "sta già scegliendo le piantine",
        "comincerà con un fiore in vaso"
      ],
      "c69": [
        "Ti piacciono i fiori di campo?",
        "ama margherite e fiordalisi",
        "preferisce i fiori da giardino"
      ],
      "c70": [
        "Bevi il caffè?",
        "senza caffè la giornata non comincia",
        "sceglie il tè"
      ],
      "c71": [
        "Ti piace la limonata fatta in casa?",
        "sta già tagliando i limoni",
        "preferisce l’acqua"
      ],
      "c72": [
        "Ti piacerebbe visitare il Giappone un giorno?",
        "sogna di vedere i ciliegi in fiore",
        "sceglierebbe un altro paese"
      ],
      "c73": [
        "Ti piace l’autunno?",
        "ama camminare tra le foglie che scricchiolano",
        "aspetta la primavera"
      ],
      "c74": [
        "Ti piace il profumo della lavanda?",
        "ama quel profumo",
        "preferisce altri profumi"
      ],
      "c75": [
        "Ti piacciono i giochi da tavolo?",
        "sta già preparando il tabellone",
        "preferisce una passeggiata"
      ],
      "c76": [
        "Sai guidare l’auto?",
        "guida con sicurezza",
        "per ora viaggia sul sedile accanto"
      ],
      "c77": [
        "Ti piacerebbe vedere l’oceano un giorno?",
        "sogna una grande onda",
        "il mare basta e avanza"
      ],
      "c78": [
        "Ti piacerebbe vivere per un po’ in una fattoria?",
        "sta già dando da mangiare alle galline",
        "resta in città"
      ],
      "c79": [
        "Ti piacciono le grandi città?",
        "ama le luci della città",
        "sceglie pace e tranquillità"
      ],
      "c80": [
        "Preferisci la frutta ai dolci?",
        "sceglie la frutta",
        "sceglie i dolci"
      ],
      "c81": [
        "Ti piacerebbe vedere i delfini in mare?",
        "vorrebbe tanto vederli",
        "preferisce leggere di loro"
      ],
      "c82": [
        "Ti piace l’estate?",
        "aspetta le giornate calde",
        "ama il fresco"
      ],
      "c83": [
        "Ti piace passeggiare nel parco?",
        "passeggia con qualsiasi tempo",
        "preferisce restare a casa"
      ],
      "c84": [
        "Ti piace scrivere a mano?",
        "ha una calligrafia ordinata",
        "scrive al telefono"
      ],
      "c85": [
        "Ti piacciono le gite in barca?",
        "sta già prendendo i remi",
        "resta sulla riva"
      ],
      "c86": [
        "Ti piacerebbe fare il giro del mondo?",
        "sta già tracciando il percorso",
        "un paio di paesi bastano"
      ],
      "c87": [
        "Sai fare un pupazzo di neve?",
        "farà il più grande di tutti",
        "preferisce una battaglia a palle di neve"
      ],
      "c88": [
        "Ti piacerebbe imparare qualcosa di nuovo quest’anno?",
        "sta già scegliendo un corso",
        "ha già abbastanza da fare"
      ],
      "c89": [
        "Ti piace il silenzio?",
        "apprezza la quiete",
        "preferisce quando c’è movimento"
      ],
      "c90": [
        "Ti piace fare regali alla tua famiglia?",
        "rallegra la famiglia anche senza motivo",
        "preferisce aiutare in modo concreto"
      ]
    },
    "loves": {
      "s01": [
        "Dove andare in vacanza?",
        "Spiaggia",
        "Montagna",
        "Viaggiare",
        "Un po’ di solitudine"
      ],
      "s02": [
        "La serata perfetta?",
        "Film a casa",
        "Una passeggiata",
        "Ristorante",
        "Giochi da tavolo"
      ],
      "s03": [
        "Il tempo preferito?",
        "Sole",
        "Pioggia",
        "Neve",
        "Notte stellata"
      ],
      "s04": [
        "L’animale preferito?",
        "Gattino",
        "Cucciolo",
        "Cavallo",
        "Delfino"
      ],
      "s05": [
        "Cosa si mangia stasera?",
        "Pizza",
        "Sushi",
        "Pasticcini",
        "Grigliata"
      ],
      "s06": [
        "La bevanda preferita?",
        "Caffè",
        "Tè",
        "Cioccolata calda",
        "Limonata"
      ],
      "s07": [
        "La stagione preferita?",
        "Primavera",
        "Estate",
        "Autunno",
        "Inverno"
      ],
      "s08": [
        "I fiori preferiti?",
        "Rose",
        "Tulipani",
        "Girasoli",
        "Lavanda"
      ],
      "s09": [
        "Come rilassarsi?",
        "Con un libro",
        "Disegnando",
        "In bicicletta",
        "Pisolino in amaca"
      ],
      "s10": [
        "Come viaggiare?",
        "In treno",
        "In aereo",
        "In auto",
        "In nave"
      ],
      "s11": [
        "La casa dei sogni?",
        "Appartamento in città",
        "Casa al mare",
        "Baita in montagna",
        "Fattoria"
      ],
      "s12": [
        "Qualcosa di dolce?",
        "Gelato",
        "Cioccolato",
        "Torta",
        "Frutta"
      ],
      "s13": [
        "La mattina perfetta?",
        "Colazione a letto",
        "Corsa",
        "Dormire a lungo",
        "Caffè sul balcone"
      ],
      "s14": [
        "L’appuntamento dei sogni?",
        "Picnic",
        "Pista di pattinaggio",
        "Luna park",
        "Stelle sul tetto"
      ],
      "s15": [
        "Il regalo più bello?",
        "Un mazzo di fiori",
        "Una lettera",
        "Un viaggio",
        "Una scatola regalo"
      ],
      "s16": [
        "La natura preferita?",
        "Mare",
        "Bosco",
        "Deserto",
        "Aurora boreale"
      ],
      "s17": [
        "Frutto preferito?",
        "Mela",
        "Fragola",
        "Anguria",
        "Uva"
      ],
      "s18": [
        "Cosa fare nel giorno libero?",
        "Escursione in montagna",
        "Cucinare a casa",
        "Un museo",
        "Pescare"
      ],
      "s19": [
        "Colazione preferita?",
        "Pancake",
        "Omelette",
        "Porridge con frutti di bosco",
        "Cornetto"
      ],
      "s20": [
        "Uccello preferito?",
        "Gufo",
        "Pappagallo",
        "Cigno",
        "Pavone"
      ],
      "s21": [
        "Quale città visitare?",
        "Istanbul",
        "Parigi",
        "Tokyo",
        "Dubai"
      ],
      "s22": [
        "Sport preferito?",
        "Calcio",
        "Nuoto",
        "Tennis",
        "Equitazione"
      ],
      "s23": [
        "Cosa piantare in giardino?",
        "Un melo",
        "Rose",
        "Ortaggi",
        "Fragole"
      ],
      "s24": [
        "Dolce da forno preferito?",
        "Fagottini",
        "Ciambelle",
        "Biscotti",
        "Baklava"
      ],
      "s25": [
        "Dove vivere?",
        "Vicino a un fiume",
        "In un bosco",
        "In una grande città",
        "Su un’isola"
      ],
      "s26": [
        "Creatura marina preferita?",
        "Tartaruga",
        "Balena",
        "Polpo",
        "Cavalluccio marino"
      ],
      "s27": [
        "Su cosa viaggiare?",
        "Bicicletta",
        "Monopattino",
        "Mongolfiera",
        "Barca"
      ],
      "s28": [
        "Passatempo preferito?",
        "Lavoro a maglia",
        "Fotografia naturalistica",
        "Giardinaggio",
        "Calligrafia"
      ],
      "s29": [
        "Zuppa preferita?",
        "Boršč",
        "Brodo di pollo",
        "Vellutata di zucca",
        "Zuppa di lenticchie"
      ],
      "s30": [
        "Animale del bosco?",
        "Riccio",
        "Scoiattolo",
        "Volpe",
        "Cervo"
      ],
      "s31": [
        "Qualcosa da sgranocchiare?",
        "Datteri",
        "Mandorle",
        "Pistacchi",
        "Albicocche secche"
      ],
      "s32": [
        "Cosa portare in escursione?",
        "Una tenda",
        "Un thermos",
        "Una mappa",
        "Una torcia"
      ],
      "s33": [
        "Dessert preferito?",
        "Budino",
        "Cheesecake",
        "Pancake con il miele",
        "Macedonia"
      ],
      "s34": [
        "Cosa fare d’inverno?",
        "Fare un pupazzo di neve",
        "Andare in slitta",
        "Tè alla finestra",
        "Sciare"
      ],
      "s35": [
        "Cosa fare d’estate?",
        "Nuotare",
        "Raccogliere frutti di bosco",
        "Andare in barca",
        "Fare un castello di sabbia"
      ],
      "s36": [
        "Con cosa dipingere?",
        "Acquerelli",
        "Matite colorate",
        "Pastelli a cera",
        "Colori su tela"
      ],
      "s37": [
        "Verdura preferita?",
        "Carota",
        "Pomodoro",
        "Mais",
        "Zucca"
      ],
      "s38": [
        "Cosa rende accogliente una casa?",
        "Un camino",
        "Una coperta morbida",
        "Le piante",
        "Uno scaffale di libri"
      ],
      "s39": [
        "A cosa giocare?",
        "Scacchi",
        "Puzzle",
        "Giochi da tavolo",
        "Giochi con la palla"
      ],
      "s40": [
        "Chi vive in fattoria?",
        "Mucca",
        "Agnellino",
        "Gallina",
        "Capretto"
      ],
      "s41": [
        "Tè con cosa?",
        "Miele",
        "Limone",
        "Marmellata",
        "Menta"
      ],
      "s42": [
        "Cosa c’è al mare?",
        "Un faro",
        "Le conchiglie",
        "Una barca a vela",
        "I gabbiani"
      ],
      "s43": [
        "Come iniziare la mattina?",
        "Con la ginnastica",
        "Con una tazza di tè",
        "Con una passeggiata",
        "Con un libro"
      ],
      "s44": [
        "Bacca preferita?",
        "Lampone",
        "Mirtillo",
        "Ciliegia",
        "Mora"
      ]
    },
    "who": [
      "Chi di noi arriva più spesso in ritardo?",
      "Chi di noi fa pace prima?",
      "Chi di noi cucina meglio?",
      "Chi di noi ride più spesso?",
      "Chi di noi ci mette di più a prepararsi?",
      "Chi di noi perde più spesso le chiavi?",
      "Chi di noi ricorda meglio le date importanti?",
      "Chi di noi ha più voglia di dolci?",
      "Chi di noi si addormenta prima?",
      "Chi di noi si alza prima la mattina?",
      "Chi di noi dice più spesso «mi manchi»?",
      "Chi di noi sceglie regali migliori?",
      "Chi di noi scherza più spesso?",
      "Chi di noi guida meglio?",
      "Chi di noi parla più a lungo al telefono?",
      "Chi di noi ama di più viaggiare?",
      "Chi di noi se la prende più facilmente?",
      "Chi di noi perdona più in fretta?",
      "Chi di noi scatta più foto?",
      "Chi di noi gestisce meglio i soldi?",
      "Chi di noi compra più spesso cose che non servono?",
      "Chi di noi sa consolare meglio?",
      "Chi di noi mantiene più la calma nei momenti difficili?",
      "Chi di noi cerca sempre il telefono?",
      "Chi di noi ama di più avere ospiti?",
      "Chi di noi prepara più spesso la colazione?",
      "Chi di noi si orienta meglio in una città nuova?",
      "Chi di noi scrive messaggi più lunghi?",
      "Chi di noi propone prima una passeggiata?",
      "Chi di noi ama di più gli animali?",
      "Chi di noi sa mantenere meglio i segreti?",
      "Chi di noi ci mette di più a scegliere dal menù?",
      "Chi di noi si preoccupa di più per le persone care?",
      "Chi di noi fa più sorprese?",
      "Chi di noi tiene più in ordine le cose?",
      "Chi di noi nota prima un nuovo taglio di capelli?",
      "Chi di noi ricorda più spesso storie divertenti?",
      "Chi di noi è più paziente?",
      "Chi di noi dice più spesso «grazie»?",
      "Chi di noi offre aiuto prima?",
      "Chi di noi fa meglio i calcoli a mente?",
      "Chi di noi legge di più?",
      "Chi di noi scrive più veloce sulla tastiera?",
      "Chi di noi chiama più spesso i genitori?",
      "Chi di noi racconta meglio le storie?",
      "Chi di noi ha la calligrafia più ordinata?",
      "A chi di noi piace di più il cibo piccante?",
      "Chi di noi dimentica più spesso le cose a casa?",
      "Chi di noi se la cava meglio con la tecnologia?",
      "A chi di noi piace di più imparare cose nuove?",
      "Chi di noi organizza meglio?",
      "Chi di noi contratta meglio al mercato?",
      "Chi di noi ama di più la natura?",
      "Chi di noi mangia più in fretta?",
      "Chi di noi beve più tè?",
      "Chi di noi si prende più cura delle piante?",
      "Chi di noi conosce meglio la geografia?",
      "Chi di noi gioca meglio a scacchi?",
      "Chi di noi sceglie la frutta migliore al mercato?",
      "Chi di noi controlla più spesso le previsioni del tempo?",
      "Chi di noi ha più paura dei ragni?",
      "Chi di noi ha più coraggio?",
      "Chi di noi ha più curiosità?",
      "Chi di noi risolve gli indovinelli più in fretta?",
      "Chi di noi disegna meglio?",
      "Chi di noi aiuta più spesso i vicini?",
      "Chi di noi va più d’accordo con i bambini?",
      "A chi di noi piace di più passeggiare?",
      "Chi di noi legge più spesso le istruzioni?",
      "Chi di noi ricorda meglio i nomi?",
      "Chi di noi impara più in fretta le parole di un’altra lingua?",
      "Chi di noi riesce meglio con i dolci al forno?",
      "Chi di noi dà consigli migliori?",
      "A chi di noi piace di più il freddo?",
      "Chi di noi se la caverebbe meglio in un’escursione?",
      "Chi di noi legge più spesso le notizie?",
      "Chi di noi assaggia più spesso piatti nuovi?",
      "Chi di noi fa la valigia più in fretta?",
      "Chi di noi aggiusta meglio le cose?",
      "Chi di noi parla più spesso con gli animali?",
      "Chi di noi lava i piatti più spesso?",
      "Chi di noi conosce meglio la storia?",
      "Chi di noi rimanda più spesso le cose?",
      "Chi di noi fa amicizia più in fretta con le persone nuove?",
      "Chi di noi si prende più cura della propria salute?"
    ],
    "phrases": [
      "Sorrido quando tu…",
      "Il mio giorno preferito con te è…",
      "Grazie per…",
      "Quando sono triste, mi aiuta…",
      "Un giorno voglio che insieme…",
      "Il ricordo più tenero di noi è…",
      "La cosa che sai fare meglio è…",
      "Mi sento in pace quando…",
      "Se avessimo un’intera giornata libera, noi…",
      "Ti ammiro perché…",
      "La nostra serata perfetta è…",
      "Non dimenticherò mai come tu…",
      "Mi piace quando dici…",
      "L’anno prossimo voglio che noi…",
      "Per me sei come…",
      "Il regalo più bello da parte tua è…",
      "Mi manchi quando…",
      "Ridiamo di più quando…",
      "Da tanto voglio dirti…",
      "Il nostro posto è…",
      "Quando penso a te, io…",
      "Rendi la mia giornata migliore quando…",
      "Mi piace la nostra abitudine di…",
      "Il mio desiderio per noi: …",
      "La cosa più divertente che ci è successa è…",
      "Sento che ti prendi cura di me quando…",
      "Una mattina con te è…",
      "Se fossimo una sola parola, sarebbe…",
      "Voglio imparare da te a…",
      "Grazie perché ogni volta tu…",
      "Nell’infanzia il mio cibo preferito era…",
      "Se avessi un giorno in un paese qualsiasi, io…",
      "Il consiglio migliore che abbia mai ricevuto è…",
      "Rido sempre quando…",
      "Il mio posto preferito nella mia città natale è…",
      "Se avessi un mio negozietto, venderei…",
      "Il piatto che mi riesce meglio è…",
      "Un sogno d’infanzia che ricordo ancora è…",
      "È facile rendermi felice se…",
      "Il posto più straordinario che abbia mai visto è…",
      "Voglio imparare…",
      "La mia giornata libera perfetta inizia con…",
      "Se potessi avere un animale qualsiasi, sarebbe…",
      "In famiglia dicono sempre che io…",
      "Proprio non riesco ad abituarmi a…",
      "La mia abitudine più utile è…",
      "Il libro più bello che abbia mai letto è…",
      "Tra dieci anni vorrei…",
      "La casa dei miei sogni è…",
      "La cosa più buffa che mi sia successa nell’infanzia è…",
      "Per me la felicità è…",
      "Mi è difficile rinunciare a…",
      "Se avessi un superpotere, mi permetterebbe di…",
      "Ciò che apprezzo di più nelle persone è…",
      "Quando ho una serata libera, io…",
      "Il mio profumo preferito è…",
      "Il cibo che non mangerei mai è…",
      "L’unica cosa senza cui non esco mai di casa è…",
      "Vorrei visitare… perché…",
      "Il regalo più bello che abbia mai ricevuto è…",
      "La mia abitudine più insolita è…",
      "Se avessi un’ora in più ogni giorno, io…",
      "Una persona da cui imparo molto è…",
      "In una giornata difficile, mi aiuta…",
      "La cosa più buona che abbia assaggiato in viaggio è…",
      "Se potessi cambiare lavoro per un giorno, sceglierei…",
      "La stagione più vicina al mio cuore è…",
      "I miei amici dicono che io…",
      "Un giorno vorrei insegnare a qualcuno…",
      "Una piccola gioia della mia giornata è…"
    ],
    "truth": {
      "t01": [
        "Il polpo ha tre cuori.",
        true,
        "Due cuori pompano il sangue nelle branchie, il terzo in tutto il corpo."
      ],
      "t02": [
        "La Grande Muraglia cinese si vede a occhio nudo dalla Luna.",
        false,
        "No: la muraglia è troppo stretta. Anche dall’orbita è difficilissimo distinguerla."
      ],
      "t03": [
        "Il miele può conservarsi per migliaia di anni senza andare a male.",
        true,
        "Nelle tombe dell’antico Egitto è stato trovato miele di migliaia di anni ancora conservato."
      ],
      "t04": [
        "Le banane crescono sugli alberi.",
        false,
        "Il banano è un’erba gigante: il suo «tronco» è fatto di foglie strettamente arrotolate."
      ],
      "t05": [
        "Venere è il pianeta più caldo del Sistema solare.",
        true,
        "La sua densa atmosfera scalda Venere fino a circa 460 °C, più di Mercurio."
      ],
      "t06": [
        "I pipistrelli sono ciechi.",
        false,
        "I pipistrelli ci vedono, e al buio si orientano anche con l’ecolocalizzazione."
      ],
      "t07": [
        "La balena è un pesce.",
        false,
        "Le balene sono mammiferi: respirano aria e allattano i piccoli."
      ],
      "t08": [
        "Il Sahara è il deserto più grande del mondo.",
        false,
        "Il deserto più grande è l’Antartide. Il Sahara è il deserto caldo più grande."
      ],
      "t09": [
        "La giraffa ha lo stesso numero di vertebre del collo di una persona.",
        true,
        "Entrambe ne hanno sette: quelle della giraffa sono solo molto lunghe."
      ],
      "t10": [
        "Dal punto di vista botanico, il pomodoro è una bacca.",
        true,
        "I botanici classificano il pomodoro come bacca: un frutto carnoso con i semi all’interno."
      ],
      "t11": [
        "Dal punto di vista botanico, la fragola è una bacca.",
        false,
        "È un falso frutto: i veri frutti sono i minuscoli «semini» all’esterno."
      ],
      "t12": [
        "Nello spazio si può sentire un’esplosione.",
        false,
        "Nello spazio non c’è quasi aria, quindi il suono non ha nulla attraverso cui viaggiare."
      ],
      "t13": [
        "In alta montagna l’acqua bolle a una temperatura più bassa.",
        true,
        "Lassù la pressione dell’aria è più bassa, quindi l’acqua bolle prima dei 100 °C."
      ],
      "t14": [
        "I pinguini vivono al Polo Nord.",
        false,
        "I pinguini selvatici vivono solo nell’emisfero australe, non nell’estremo nord."
      ],
      "t15": [
        "L’Everest è la montagna più alta sul livello del mare.",
        true,
        "L’Everest si innalza per circa 8.849 metri sul livello del mare."
      ],
      "t16": [
        "Le persone usano solo il 10% del cervello.",
        false,
        "È un mito: nel corso della giornata quasi ogni parte del cervello è attiva."
      ],
      "t17": [
        "Il cuore umano batte circa 100.000 volte al giorno.",
        true,
        "Con circa 70 battiti al minuto, si arriva a circa 100.000 battiti al giorno."
      ],
      "t18": [
        "Un pesce rosso ha una memoria di soli tre secondi.",
        false,
        "Gli esperimenti dimostrano che i pesci rossi ricordano ciò che hanno imparato per mesi."
      ],
      "t19": [
        "L’Australia è sia un paese sia un continente.",
        true,
        "L’Australia è l’unico paese che occupa un intero continente."
      ],
      "t20": [
        "Un fulmine non cade mai due volte nello stesso punto.",
        false,
        "Invece sì: gli edifici alti vengono colpiti dai fulmini molte volte all’anno."
      ],
      "t21": [
        "Lo struzzo nasconde la testa sotto la sabbia quando ha paura.",
        false,
        "È un mito: uno struzzo spaventato scappa o si appiattisce a terra per nascondersi."
      ],
      "t22": [
        "L’uccello più piccolo del mondo è un colibrì.",
        true,
        "Il colibrì ape di Cuba pesa circa 2 grammi, meno di qualsiasi altro uccello."
      ],
      "t23": [
        "L’anguria è composta per circa il 90% d’acqua.",
        true,
        "L’anguria contiene circa il 92% d’acqua: ecco perché è così rinfrescante."
      ],
      "t24": [
        "Il ragno ha sei zampe.",
        false,
        "Il ragno ha otto zampe. Gli insetti ne hanno sei, e i ragni non sono insetti."
      ],
      "t25": [
        "La Luna produce luce propria.",
        false,
        "La Luna non ha luce propria: riflette la luce del Sole."
      ],
      "t26": [
        "L’elefante è l’animale terrestre più grande.",
        true,
        "Un elefante africano di savana può pesare più di 6 tonnellate."
      ],
      "t27": [
        "La balenottera azzurra è l’animale più grande conosciuto dalla scienza.",
        true,
        "Può superare i 30 metri di lunghezza: più di qualsiasi dinosauro conosciuto."
      ],
      "t28": [
        "Il camaleonte cambia colore solo per mimetizzarsi.",
        false,
        "Il suo colore dipende più dall’umore, dalla temperatura e dai segnali agli altri camaleonti."
      ],
      "t29": [
        "Il telefono è stato inventato da Thomas Edison.",
        false,
        "Il brevetto del telefono fu ottenuto da Alexander Graham Bell nel 1876."
      ],
      "t30": [
        "La penicillina è stata scoperta da Alexander Fleming.",
        true,
        "Fleming scoprì la penicillina nel 1928: il primo antibiotico."
      ],
      "t31": [
        "Il vulcano più alto del Sistema solare si trova su Marte.",
        true,
        "L’Olympus Mons su Marte è alto circa 22 km: quasi 2,5 volte l’Everest."
      ],
      "t32": [
        "Il sangue nelle nostre vene è blu.",
        false,
        "Il sangue è sempre rosso: le vene sembrano blu solo per come la luce attraversa la pelle."
      ],
      "t33": [
        "L’Atlantico è l’oceano più grande della Terra.",
        false,
        "Il più grande è il Pacifico: è più vasto di tutte le terre emerse messe insieme."
      ],
      "t34": [
        "La Russia è il paese più grande del mondo per superficie.",
        true,
        "La Russia si estende per oltre 17 milioni di chilometri quadrati."
      ],
      "t35": [
        "Il Canada ha la costa più lunga del mondo.",
        true,
        "La costa del Canada supera i 200.000 km: più di quella di qualsiasi altro paese."
      ],
      "t36": [
        "Lo stomaco della mucca ha quattro compartimenti.",
        true,
        "La mucca ha un solo stomaco con quattro camere: è così che digerisce l’erba."
      ],
      "t37": [
        "Il leone è il felino più grande del mondo.",
        false,
        "Il felino più grande è la tigre, soprattutto la tigre siberiana."
      ],
      "t38": [
        "La Terra è il pianeta più vicino al Sole.",
        false,
        "Il più vicino è Mercurio, poi Venere; la Terra è il terzo pianeta."
      ],
      "t39": [
        "La luce del Sole impiega circa 8 minuti per arrivare sulla Terra.",
        true,
        "La luce percorre i 150 milioni di km dal Sole in circa 8 minuti e 20 secondi."
      ],
      "t40": [
        "I delfini dormono con una metà del cervello alla volta.",
        true,
        "Una metà riposa mentre l’altra resta vigile e si ricorda di respirare."
      ],
      "t41": [
        "Le patate vengono dall’Irlanda.",
        false,
        "Le patate vengono dal Sud America: sulle Ande si coltivavano migliaia di anni fa."
      ],
      "t42": [
        "Il cioccolato si fa con i semi dell’albero del cacao.",
        true,
        "I frutti del cacao crescono direttamente sul tronco, e i semi all’interno diventano cioccolato."
      ],
      "t43": [
        "Lo squalo è un mammifero.",
        false,
        "Lo squalo è un pesce: respira con le branchie. I mammiferi del mare sono balene e delfini."
      ],
      "t44": [
        "Alcuni tipi di bambù possono crescere quasi un metro al giorno.",
        true,
        "Il bambù è tra le piante che crescono più in fretta sulla Terra."
      ],
      "t45": [
        "Il gufo può girare la testa di ben 360 gradi.",
        false,
        "Il gufo gira la testa di circa 270 gradi: tanto, ma non un giro completo."
      ],
      "t46": [
        "Il diamante e la grafite della matita sono fatti della stessa sostanza.",
        true,
        "Entrambi sono carbonio puro: cambia solo come sono disposti gli atomi."
      ],
      "t47": [
        "Il cammello conserva l’acqua nella gobba.",
        false,
        "La gobba del cammello contiene grasso, non acqua: gli dà energia nei lunghi viaggi."
      ],
      "t48": [
        "L’osso più piccolo del corpo umano si trova nell’orecchio.",
        true,
        "La staffa, nell’orecchio medio, è lunga solo circa 3 millimetri."
      ],
      "t49": [
        "I pappagalli grandi possono vivere più di 50 anni.",
        true,
        "Ara e cacatua ben accuditi vivono spesso 50 anni o più."
      ],
      "t50": [
        "I fratelli Wright compirono il primo volo con un aereo a motore.",
        true,
        "Volarono nel 1903; il primissimo volo durò 12 secondi."
      ],
      "t51": [
        "La ruota fu inventata nel Medioevo.",
        false,
        "La ruota ha più di 5.000 anni: in Mesopotamia si usava già intorno al 3500 a.C."
      ],
      "t52": [
        "Il cavalluccio marino è un pesce.",
        true,
        "Il cavalluccio marino respira con le branchie e nuota con una pinna, come gli altri pesci."
      ],
      "t53": [
        "Il colibrì sa volare all’indietro.",
        true,
        "I colibrì sono gli unici uccelli capaci di volare davvero all’indietro."
      ],
      "t54": [
        "La Torre Eiffel d’estate diventa un po’ più alta.",
        true,
        "Il caldo dilata il metallo e la torre cresce di circa 15 centimetri."
      ],
      "t55": [
        "La pelle è l’organo più grande del corpo umano.",
        true,
        "La pelle di una persona adulta pesa diversi chili e protegge tutto il corpo."
      ],
      "t56": [
        "Il colore rosso fa arrabbiare il toro.",
        false,
        "Il toro distingue a malapena il rosso: a provocarlo è il movimento, non il colore."
      ],
      "t57": [
        "La mosca domestica vive un solo giorno.",
        false,
        "La mosca domestica vive circa un mese. Sono le effimere adulte a vivere solo un giorno o due."
      ],
      "t58": [
        "Gli ananas crescono sugli alberi.",
        false,
        "L’ananas cresce su una pianta bassa e frondosa, proprio al centro."
      ],
      "t59": [
        "L’arachide è una noce.",
        false,
        "L’arachide è un legume, parente di piselli e fagioli. I suoi baccelli maturano sottoterra."
      ],
      "t60": [
        "Il Polo Nord e il Polo Sud sono ugualmente freddi.",
        false,
        "Il Polo Sud è molto più freddo: si trova su un alto continente ghiacciato, il Polo Nord su un oceano."
      ]
    },
    "hints": {
      "h01": [
        "Pinguino",
        "Sono un uccello, ma non so volare",
        "Vivo dove fa molto freddo",
        "Indosso sempre il frac",
        "Struzzo",
        "Foca",
        "Gabbiano"
      ],
      "h02": [
        "Elefante",
        "Mangio quasi tutto il giorno",
        "Le mie orecchie sembrano grandi ventagli",
        "Ho una lunga proboscide",
        "Rinoceronte",
        "Ippopotamo",
        "Giraffa"
      ],
      "h03": [
        "Giraffa",
        "Dormo pochissimo, spesso in piedi",
        "Mangio le foglie degli alberi più alti",
        "Ho il collo più lungo di tutti",
        "Zebra",
        "Cammello",
        "Alce"
      ],
      "h04": [
        "Cammello",
        "Resisto a lungo senza acqua",
        "Mi chiamano la nave del deserto",
        "Ho una o due gobbe sulla schiena",
        "Cavallo",
        "Asino",
        "Lama"
      ],
      "h05": [
        "Ape",
        "So indicare alle altre la strada per i fiori",
        "Lavoro nel prato dall’alba al tramonto",
        "Produco il miele",
        "Vespa",
        "Mosca",
        "Farfalla"
      ],
      "h06": [
        "Tartaruga",
        "Posso vivere più di cent’anni",
        "Non ho mai fretta",
        "Porto la casa sulla schiena",
        "Lumaca",
        "Lucertola",
        "Riccio"
      ],
      "h07": [
        "Canguro",
        "La coda mi aiuta a stare in equilibrio",
        "Vivo in Australia",
        "Porto il piccolo in una tasca",
        "Koala",
        "Lepre",
        "Scoiattolo"
      ],
      "h08": [
        "Gufo",
        "Posso girare la testa quasi del tutto all’indietro",
        "Caccio di notte",
        "Il mio verso risuona nel bosco buio",
        "Corvo",
        "Aquila",
        "Piccione"
      ],
      "h09": [
        "Delfino",
        "Respiro aria, anche se vivo nel mare",
        "Aiuto le persone e parlo con fischi",
        "Mi piace tanto saltare tra le onde",
        "Squalo",
        "Balena",
        "Foca"
      ],
      "h10": [
        "Scoiattolo",
        "Nascondo il cibo e a volte dimentico dove",
        "Vivo nel cavo di un albero",
        "Rosicchio noci e pigne",
        "Riccio",
        "Lepre",
        "Topo"
      ],
      "h11": [
        "Ragno",
        "Non sono un insetto, anche se molti lo pensano",
        "Ho otto zampe",
        "Tesso una tela",
        "Formica",
        "Scarabeo",
        "Zanzara"
      ],
      "h12": [
        "Gatto",
        "Vedo al buio meglio delle persone",
        "Mi piace un davanzale caldo",
        "Faccio le fusa e caccio i topi",
        "Coniglio",
        "Criceto",
        "Pappagallo"
      ],
      "h13": [
        "Anguria",
        "Gli scienziati mi chiamano bacca",
        "Mi aspettano a fine estate",
        "Verde fuori, rossa dentro",
        "Melone",
        "Zucca",
        "Ananas"
      ],
      "h14": [
        "Pane",
        "Mi sfornano in quasi ogni paese",
        "Mi tagliano a fette",
        "Posso essere bianco o di segale, con la crosta",
        "Frittella",
        "Torta",
        "Biscotto"
      ],
      "h15": [
        "Miele",
        "Posso conservarmi per migliaia di anni",
        "Mi aggiungono al tè caldo col raffreddore",
        "Mi fanno le api",
        "Marmellata",
        "Zucchero",
        "Latte"
      ],
      "h16": [
        "Limone",
        "Sono pieno di vitamina C",
        "Mi mettono nel tè",
        "Sono giallo e molto aspro",
        "Arancia",
        "Pompelmo",
        "Lime"
      ],
      "h17": [
        "Carota",
        "Cresco sottoterra, si vede solo il ciuffo",
        "Dicono che faccio bene alla vista",
        "Sono arancione e piaccio tanto ai conigli",
        "Barbabietola",
        "Ravanello",
        "Patata"
      ],
      "h18": [
        "Mela",
        "Ho varietà estive e invernali",
        "Finisco in torte e succhi",
        "Cresco su un albero, rossa o verde",
        "Pera",
        "Pesca",
        "Prugna"
      ],
      "h19": [
        "Banana",
        "Cresco a caschi su una pianta alta",
        "Piaccio tanto alle scimmie",
        "Sono gialla e bisogna sbucciarmi",
        "Mango",
        "Kiwi",
        "Ananas"
      ],
      "h20": [
        "Tè",
        "In Cina mi bevono da millenni",
        "Posso essere nero, verde o alle erbe",
        "Mi preparano in una teiera",
        "Caffè",
        "Cacao",
        "Succo"
      ],
      "h21": [
        "Uovo",
        "Senza di me è difficile fare una torta",
        "Con me si fa la frittata",
        "Mi depone una gallina",
        "Formaggio",
        "Noce",
        "Patata"
      ],
      "h22": [
        "Ombrello",
        "Passo quasi tutto il tempo chiuso",
        "Mi prendi quando il cielo si fa grigio",
        "Ti tengo asciutto sotto la pioggia",
        "Impermeabile",
        "Cappello",
        "Stivali"
      ],
      "h23": [
        "Orologio",
        "Posso funzionare con la sabbia o con il sole",
        "Sto appeso ai muri e sulle torri",
        "Segno l’ora con le lancette",
        "Bussola",
        "Calendario",
        "Termometro"
      ],
      "h24": [
        "Chiave",
        "Senza di me la porta non ti fa entrare",
        "Spesso mi portano su un anello",
        "Apro una serratura",
        "Forbici",
        "Cacciavite",
        "Graffetta"
      ],
      "h25": [
        "Candela",
        "Più lavoro, più divento piccola",
        "Mi accendono quando manca la corrente",
        "Sono di cera e ho uno stoppino",
        "Torcia",
        "Lampada",
        "Fiammiferi"
      ],
      "h26": [
        "Forbici",
        "Ho due anelli e due punte affilate",
        "Ritaglio forme di carta",
        "Taglio stoffa e carta",
        "Coltello",
        "Ago",
        "Righello"
      ],
      "h27": [
        "Spazzolino",
        "Ho tante setole",
        "Mi cambiano ogni tre mesi",
        "Pulisco i denti mattina e sera",
        "Sapone",
        "Asciugamano",
        "Spugna"
      ],
      "h28": [
        "Frigorifero",
        "Dentro di me è sempre inverno",
        "Quando mi apri si accende una luce",
        "Tengo il cibo al fresco",
        "Fornello",
        "Forno",
        "Credenza"
      ],
      "h29": [
        "Bicicletta",
        "Vado senza carburante né elettricità",
        "Ho manubrio, campanello e catena",
        "Ho due ruote e i pedali",
        "Monopattino",
        "Moto",
        "Skateboard"
      ],
      "h30": [
        "Aereo",
        "Ho le ali, ma non sono un uccello",
        "Mi aspettano all’aeroporto",
        "Volo sopra le nuvole con i passeggeri",
        "Elicottero",
        "Razzo",
        "Mongolfiera"
      ],
      "h31": [
        "Treno",
        "Viaggio solo sulla mia strada",
        "Ho molte carrozze",
        "Corro sui binari di stazione in stazione",
        "Tram",
        "Autobus",
        "Metropolitana"
      ],
      "h32": [
        "Ponte",
        "Mi costruiscono in pietra, legno o acciaio",
        "Le navi possono passarmi sotto",
        "Unisco le due rive di un fiume",
        "Galleria",
        "Strada",
        "Diga"
      ],
      "h33": [
        "Matita",
        "Dentro di me c’è la grafite",
        "Mi temperano quando perdo la punta",
        "Scrivo e disegno; la gomma cancella i miei segni",
        "Penna",
        "Gesso",
        "Pennarello"
      ],
      "h34": [
        "Libro",
        "Sto in silenzio, ma insegno molto",
        "Ho una copertina e delle pagine",
        "Mi leggono e mi prendono in prestito in biblioteca",
        "Rivista",
        "Giornale",
        "Quaderno"
      ],
      "h35": [
        "Valigia",
        "Viaggio tanto, ma sempre in mano a qualcuno",
        "Mi preparano prima di un viaggio",
        "Ho manico e ruote, e contengo vestiti",
        "Zaino",
        "Borsa",
        "Scatola"
      ],
      "h36": [
        "Biblioteca",
        "Qui chiedono di parlare piano",
        "Qui ti fanno la tessera da lettore",
        "Migliaia di libri da portare a casa",
        "Scuola",
        "Libreria",
        "Archivio"
      ],
      "h37": [
        "Aeroporto",
        "Qui c’è il controllo passaporti",
        "Qui annunciano l’imbarco dei voli",
        "Da qui decollano gli aerei",
        "Stazione",
        "Porto",
        "Autostazione"
      ],
      "h38": [
        "Deserto",
        "Caldo di giorno, ma la notte può fare molto freddo",
        "Qui si trovano le oasi",
        "Tanta sabbia e pochissima acqua",
        "Steppa",
        "Savana",
        "Spiaggia"
      ],
      "h39": [
        "Vulcano",
        "Posso dormire per centinaia di anni",
        "Dalla mia cima sale fumo",
        "Erutto lava",
        "Montagna",
        "Geyser",
        "Isola"
      ],
      "h40": [
        "Arcobaleno",
        "Mi vedi solo con il sole alle spalle",
        "Compaio spesso dopo la pioggia",
        "Sette colori ad arco nel cielo",
        "Fulmine",
        "Nuvola",
        "Aurora boreale"
      ],
      "h41": [
        "Luna",
        "Mostro alla Terra sempre la stessa faccia",
        "Posso essere piena o una sottile falce",
        "Brillo nel cielo notturno",
        "Sole",
        "Stella",
        "Cometa"
      ],
      "h42": [
        "Neve",
        "Ognuno dei miei fiocchi è unico",
        "Con me si costruiscono fortini",
        "Bianca e fredda, cado d’inverno",
        "Pioggia",
        "Grandine",
        "Brina"
      ],
      "h43": [
        "Fiume",
        "Ho una sorgente e una foce",
        "Le barche navigano su di me",
        "Scorro dai monti al mare",
        "Lago",
        "Mare",
        "Ruscello"
      ],
      "h44": [
        "Cactus",
        "Posso vivere a lungo senz’acqua",
        "Cresco nei deserti e sui davanzali",
        "Sono coperto di spine",
        "Aloe",
        "Palma",
        "Margherita"
      ],
      "h45": [
        "Girasole",
        "Dai miei semi si fa l’olio",
        "Mi giro seguendo il sole",
        "Un grande fiore giallo pieno di semi",
        "Margherita",
        "Tulipano",
        "Tarassaco"
      ],
      "h46": [
        "Quercia",
        "Posso vivere più di mille anni",
        "Sono un simbolo di forza",
        "Su di me crescono le ghiande",
        "Betulla",
        "Pino",
        "Acero"
      ],
      "h47": [
        "Isola",
        "Su di me può stare un intero paese",
        "Mi raggiungi in barca o in aereo",
        "Sono circondata dall’acqua da ogni lato",
        "Penisola",
        "Barriera corallina",
        "Capo"
      ],
      "h48": [
        "Cascata",
        "Mi senti da lontano",
        "La più alta di noi è in Venezuela",
        "Qui un fiume precipita da una rupe",
        "Fontana",
        "Geyser",
        "Sorgente"
      ],
      "h49": [
        "Medico",
        "Studio molti anni prima di lavorare",
        "Indosso un camice bianco",
        "Curo le persone malate",
        "Infermiere",
        "Farmacista",
        "Veterinario"
      ],
      "h50": [
        "Vigile del fuoco",
        "Sono di turno giorno e notte",
        "Lavoro con acqua e scale",
        "Spengo gli incendi",
        "Poliziotto",
        "Soccorritore",
        "Muratore"
      ],
      "h51": [
        "Cuoco",
        "Assaggio tutto ciò che preparo",
        "Lavoro davanti a un fornello caldo",
        "Preparo piatti in un ristorante",
        "Fornaio",
        "Cameriere",
        "Pasticciere"
      ],
      "h52": [
        "Insegnante",
        "La sera correggo i quaderni",
        "Sto davanti alla lavagna",
        "Faccio lezione ai bambini a scuola",
        "Preside",
        "Bibliotecario",
        "Educatore d’asilo"
      ],
      "h53": [
        "Pilota",
        "Il mio posto di lavoro è la cabina di comando",
        "Parlo ai passeggeri dall’altoparlante",
        "Guido un aereo",
        "Capitano",
        "Autista",
        "Astronauta"
      ],
      "h54": [
        "Postino",
        "Conosco ogni indirizzo della mia zona",
        "Porto una grande borsa",
        "Consegno lettere e pacchi",
        "Corriere",
        "Tassista",
        "Commesso"
      ],
      "h55": [
        "Giardiniere",
        "So quando piantare ogni cosa",
        "I miei attrezzi sono annaffiatoio e cesoie",
        "Mi prendo cura di fiori e alberi",
        "Contadino",
        "Guardia forestale",
        "Fioraio"
      ],
      "h56": [
        "Fotografo",
        "Catturo gli attimi",
        "Chiedo a tutti di stare fermi",
        "Lavoro con macchina fotografica e immagini",
        "Pittore",
        "Giornalista",
        "Cameraman"
      ],
      "h57": [
        "Pescatore",
        "Mi alzo prima dell’alba e aspetto a lungo",
        "Mi servono una canna e pazienza",
        "Prendo i pesci",
        "Contadino",
        "Marinaio",
        "Pastore"
      ],
      "h58": [
        "Astronauta",
        "Mi alleno a lungo sulla Terra",
        "Indosso una tuta spaziale",
        "Volo nello spazio",
        "Pilota",
        "Astronomo",
        "Ingegnere"
      ],
      "h59": [
        "Architetto",
        "Il mio lavoro si vede in tutta la città",
        "Disegno progetti",
        "Progetto case",
        "Muratore",
        "Designer",
        "Ingegnere"
      ],
      "h60": [
        "Dentista",
        "Molti hanno paura della mia poltrona",
        "Lavoro con il trapano",
        "Curo i denti",
        "Chirurgo",
        "Oculista",
        "Pediatra"
      ]
    },
    "dreams": {
      "d01": [
        "Dove ti piacerebbe vivere tra dieci anni?",
        "Al mare",
        "In montagna",
        "In una grande città",
        "In un paese tranquillo"
      ],
      "d02": [
        "Che casa ti piacerebbe avere un giorno?",
        "Un appartamento accogliente",
        "Una casa con giardino",
        "Una casetta sul lago",
        "Una casa antica con storia"
      ],
      "d03": [
        "Cosa ti piacerebbe coltivare in giardino?",
        "Meli",
        "Rose",
        "Ortaggi ed erbe aromatiche",
        "Fragole"
      ],
      "d04": [
        "Quale animale ti piacerebbe avere?",
        "Un gatto",
        "Un pappagallo",
        "Pesci d’acquario",
        "Una tartaruga"
      ],
      "d05": [
        "Dove ti piacerebbe andare prima di tutto?",
        "Giappone",
        "Marocco",
        "Islanda",
        "Nuova Zelanda"
      ],
      "d06": [
        "Come ti piacerebbe viaggiare?",
        "In treno",
        "In auto",
        "In aereo",
        "In nave"
      ],
      "d07": [
        "Quale lingua ti piacerebbe imparare?",
        "Arabo",
        "Giapponese",
        "Spagnolo",
        "Cinese"
      ],
      "d08": [
        "Cosa ti piacerebbe imparare a fare?",
        "Disegnare",
        "Cucire",
        "Nuotare",
        "Programmare"
      ],
      "d09": [
        "Quale piatto ti piacerebbe saper preparare?",
        "Pilaf",
        "Pane fatto in casa",
        "Sushi",
        "Baklava"
      ],
      "d10": [
        "Come ti piacerebbe passare i fine settimana?",
        "Nella natura",
        "A casa con un libro",
        "Dalla famiglia",
        "In una città nuova"
      ],
      "d11": [
        "Come sarebbe un mattino perfetto nel weekend?",
        "Una passeggiata presto",
        "Una colazione con calma",
        "Ginnastica all’aria aperta",
        "Tè sul balcone"
      ],
      "d12": [
        "Per cosa ti piacerebbe risparmiare?",
        "Una casa nostra",
        "Un grande viaggio",
        "Un’auto",
        "Gli studi"
      ],
      "d13": [
        "Che lavoro ti piacerebbe fare?",
        "Un’attività tutta mia",
        "In una grande azienda",
        "Da casa",
        "Aiutare le persone"
      ],
      "d14": [
        "Come ti piacerebbe aiutare gli altri?",
        "Volontariato",
        "Aiutare gli animali",
        "Insegnare ai bambini",
        "Piantare alberi"
      ],
      "d15": [
        "Quale tradizione di famiglia ti piacerebbe?",
        "Il pranzo della domenica",
        "Serate di giochi da tavolo",
        "Passeggiate nel weekend",
        "Un album di foto di famiglia"
      ],
      "d16": [
        "Che cucina ti piacerebbe avere?",
        "Una grande cucina di famiglia",
        "Luminosa e accogliente",
        "Con vista sul giardino",
        "Piccola ma pratica"
      ],
      "d17": [
        "Cosa ti piacerebbe vedere con i tuoi occhi?",
        "L’aurora boreale",
        "Le piramidi di Giza",
        "Le cascate Vittoria",
        "L’Himalaya"
      ],
      "d18": [
        "Cosa ti piacerebbe fare la sera?",
        "Leggere",
        "Cucinare qualcosa di nuovo",
        "Studiare le lingue",
        "Passeggiare nel parco"
      ],
      "d19": [
        "Quale passatempo ti piacerebbe iniziare?",
        "Fotografia",
        "Ceramica",
        "Ricamo",
        "Giardinaggio"
      ],
      "d20": [
        "Dove ti piacerebbe andare per un weekend?",
        "Nel bosco",
        "Al lago",
        "In una città vicina",
        "In montagna"
      ],
      "d21": [
        "Come sarebbe il tuo posto di lavoro ideale?",
        "Vicino alla finestra",
        "Con scaffali di libri",
        "Pieno di piante verdi",
        "Quasi vuoto"
      ],
      "d22": [
        "Cosa ti piacerebbe studiare in futuro?",
        "Medicina",
        "Storia",
        "Economia",
        "Design"
      ],
      "d23": [
        "Quale albero ti piacerebbe piantare?",
        "Una quercia",
        "Un melo",
        "Un ulivo",
        "Una palma da datteri"
      ],
      "d24": [
        "Cosa ti piacerebbe cucinare per gli ospiti?",
        "Una torta fatta in casa",
        "Un grande pilaf",
        "La zuppa di famiglia",
        "Insalate fresche"
      ],
      "d25": [
        "Quale città ti piacerebbe visitare?",
        "Istanbul",
        "Parigi",
        "Tokyo",
        "Il Cairo"
      ],
      "d26": [
        "Come ti piacerebbe passare l’estate?",
        "Al mare",
        "In montagna",
        "In una casa di campagna",
        "Girando il nostro paese"
      ],
      "d27": [
        "Quale uccellino ti piacerebbe tenere?",
        "Un canarino",
        "Un pappagallino",
        "Dei piccioni",
        "Dei diamanti mandarini"
      ],
      "d28": [
        "Quale sport ti piacerebbe provare?",
        "Nuoto",
        "Equitazione",
        "Tiro con l’arco",
        "Arrampicata"
      ],
      "d29": [
        "Quali libri ti piacerebbe collezionare?",
        "Enciclopedie",
        "Classici",
        "Libri di viaggio",
        "Libri di cucina"
      ],
      "d30": [
        "Cosa ti piacerebbe fare con le tue mani?",
        "Mobili",
        "Le tue stoviglie",
        "Una coperta a maglia",
        "Una casetta per uccelli"
      ],
      "d31": [
        "Dove ti piacerebbe fare un picnic?",
        "In riva al fiume",
        "In giardino",
        "In una radura nel bosco",
        "In montagna"
      ],
      "d32": [
        "Come ti piacerebbe spostarti un giorno?",
        "In auto elettrica",
        "In bicicletta",
        "Con una grande auto familiare",
        "Senza auto"
      ],
      "d33": [
        "Cosa ti piacerebbe fare in pensione?",
        "Giardinaggio",
        "Viaggiare",
        "Stare con i nipoti",
        "Imparare cose nuove"
      ],
      "d34": [
        "Quale buona azione ti piacerebbe fare?",
        "Costruire un pozzo d’acqua",
        "Aiutare un rifugio per gatti",
        "Raccogliere libri per una scuola",
        "Piantare un filare di alberi"
      ],
      "d35": [
        "Cosa ti piacerebbe a colazione nel weekend?",
        "Pancake",
        "Una frittata",
        "Porridge con frutta",
        "Frittelle di ricotta"
      ],
      "d36": [
        "Dove ti piacerebbe accogliere gli ospiti?",
        "In cucina",
        "In soggiorno",
        "In terrazza",
        "In giardino"
      ],
      "d37": [
        "Quale meraviglia naturale ti piacerebbe vedere?",
        "Il Grand Canyon",
        "Le cascate del Niagara",
        "Il lago Bajkal",
        "Il deserto del Sahara"
      ],
      "d38": [
        "Quale abilità di casa ti piacerebbe imparare?",
        "Fare le riparazioni",
        "Cucire",
        "Fare il pane",
        "Curare un giardino"
      ],
      "d39": [
        "Quante lingue ti piacerebbe parlare?",
        "Due",
        "Tre",
        "Cinque",
        "Più possibile"
      ],
      "d40": [
        "Di che colore vorresti le pareti di casa?",
        "Bianco",
        "Beige",
        "Verde chiaro",
        "Azzurro"
      ],
      "d41": [
        "Quale pesce ti piacerebbe nell’acquario?",
        "Un pesce rosso",
        "Dei guppy",
        "Un pesce gatto",
        "Uno scalare"
      ],
      "d42": [
        "Quale viaggio ti piacerebbe regalare ai tuoi genitori?",
        "Una vacanza al mare",
        "Un giro in città",
        "Un viaggio in montagna",
        "Un viaggio in treno"
      ],
      "d43": [
        "Cosa ti piacerebbe fare nel tempo libero?",
        "Disegnare",
        "Leggere",
        "Sport",
        "Lavori manuali"
      ],
      "d44": [
        "In quale stagione ti piacerebbe viaggiare?",
        "Primavera",
        "Estate",
        "Autunno",
        "Inverno"
      ],
      "d45": [
        "Cosa ti piacerebbe conservare per l’inverno?",
        "Marmellata",
        "Sottaceti",
        "Frutta essiccata",
        "Composta di frutta"
      ],
      "d46": [
        "Quale altro mestiere ti piacerebbe provare?",
        "Cuoco",
        "Programmatore",
        "Traduttore",
        "Falegname"
      ],
      "d47": [
        "Quale paese ti piacerebbe conoscere?",
        "Malesia",
        "Grecia",
        "Canada",
        "Indonesia"
      ],
      "d48": [
        "Cosa ti piacerebbe avere in cortile?",
        "Una piccola fontana",
        "Un orto",
        "Un gazebo",
        "Un’altalena"
      ],
      "d49": [
        "Come ti piacerebbe festeggiare i successi?",
        "Una cena in famiglia",
        "Una gita nella natura",
        "Un libro nuovo",
        "Una buona azione per altri"
      ],
      "d50": [
        "Cosa ti piacerebbe trasmettere ai figli?",
        "L’amore per i libri",
        "Saper cucinare",
        "La lingua madre",
        "La cura della natura"
      ]
    }
  },
  "pl": {
    "text": {
      "homeLink": "Gry we dwoje",
      "eyebrow": "GLOWLETTER · GRY WE DWOJE",
      "title": "Grajcie razem",
      "close": "Zamknij",
      "lead": "Wyślij grę komuś bliskiemu. Gra z linku jest darmowa i nie wymaga konta.",
      "quizTitle": "Jak dobrze mnie znasz?",
      "quizNote": "Odpowiedz na pytania o sobie, a bliska osoba spróbuje zgadnąć. Wynik wróci do ciebie.",
      "create": "Utwórz quiz",
      "soon": "Wkrótce",
      "soonTitle": "Kolejne gry w drodze",
      "duel": "Pojedynek „Kto szybszy”",
      "loves": "Co kochamy",
      "cards": "Karty pamięci we dwoje",
      "who": "Kto z nas?",
      "phrase": "Dokończ zdanie",
      "myQuizzes": "Moje quizy",
      "noQuizzes": "Nie ma jeszcze quizów. Pierwszy utworzysz w dwie minuty.",
      "forWhom": "Dla: {name}",
      "noRecipient": "Quiz",
      "resultsCount": "Wyniki: {count}",
      "newResults": "Nowe: {count}",
      "noResults": "Nikt jeszcze nie zagrał.",
      "anonymous": "Bez imienia",
      "results": "Wyniki",
      "copyLink": "Kopiuj link",
      "share": "Wyślij",
      "deleteQuiz": "Usuń quiz",
      "deleteConfirm": "Usunąć ten quiz i jego wyniki? Link przestanie działać.",
      "deleted": "Quiz usunięty",
      "linkCopied": "Link skopiowany",
      "back": "Wstecz",
      "next": "Dalej",
      "stepNames": "Krok 1 z 2 · Imiona",
      "yourName": "Twoje imię",
      "yourNamePlaceholder": "Jak masz na imię",
      "recipient": "Dla kogo · opcjonalnie",
      "recipientPlaceholder": "Imię bliskiej osoby",
      "nameRequired": "Wpisz swoje imię.",
      "forbiddenName": "Wpisz zwykłe imię.",
      "stepAnswers": "Krok 2 z 2 · Twoje odpowiedzi",
      "answersLead": "Zaznacz, co jest o tobie prawdą. Każde pytanie można wymienić.",
      "swap": "Inne pytanie",
      "progress": "Zaznaczono {done} z {total}",
      "answerAll": "Wybierz odpowiedź w każdym pytaniu.",
      "finish": "Pobierz link",
      "creating": "Tworzę quiz…",
      "createdTitle": "Quiz gotowy!",
      "createdLead": "Wyślij link. Gdy ktoś odpowie, wynik pojawi się w „Moich quizach”.",
      "shareText": "{name} zaprasza cię do gry „Jak dobrze mnie znasz?”",
      "signInTitle": "Wymagane logowanie",
      "signInNote": "Quiz jest zapisany na twoim koncie, aby wyniki trafiły do ciebie.",
      "signIn": "Zaloguj się",
      "premiumNote": "Tworzenie gier wchodzi w skład pełnego dostępu. Gra z linku jest darmowa dla wszystkich.",
      "failed": "Nie udało się. Sprawdź połączenie i spróbuj ponownie.",
      "rateLimited": "Zbyt wiele prób. Spróbuj później.",
      "playEyebrow": "GRA WE DWOJE",
      "playInvite": "{name} zaprasza cię do gry",
      "playLead": "Pytań: {count}. Zgadnij odpowiedzi — na końcu zobaczysz, ile się zgadza.",
      "playName": "Twoje imię · opcjonalnie",
      "playNamePlaceholder": "Żeby wiedzieli, że to ty",
      "start": "Zaczynamy",
      "playLoading": "Ładuję grę…",
      "playMissing": "Ta gra jest niedostępna: link usunięto lub wygasł.",
      "playOffline": "Do gry potrzebny jest internet.",
      "retry": "Spróbuj ponownie",
      "questionOf": "Pytanie {n} z {total}",
      "asks": "{name} pyta",
      "counting": "Liczę zgodne odpowiedzi…",
      "scoreOf": "{score} z {total}",
      "tierAll": "Idealnie! Znacie się najlepiej na świecie",
      "tierHigh": "Znacie się naprawdę dobrze",
      "tierMid": "Nieźle! Jest jeszcze co odkrywać",
      "tierLow": "Przed wami wiele miłych odkryć",
      "sentTo": "{name} zobaczy twój wynik",
      "review": "Twoje odpowiedzi",
      "rightAnswer": "Właściwa odpowiedź",
      "makeOwn": "Utwórz własny quiz",
      "home": "Strona główna",
      "resultToast": "{name}: {score} z {total} w quizie „Jak dobrze mnie znasz?”",
      "ownerAnswers": "Odpowiedzi autora",
      "playerAnswers": "Odpowiedzi: {name}",
      "paywallTitle": "Gry, rozrywka<br><em>i listy</em>",
      "groupGames": "Gry",
      "groupFun": "Rozrywka",
      "groupLetters": "Listy",
      "featQuiz": "„Jak dobrze mnie znasz?” — wynik wraca do ciebie",
      "featGamesSoon": "Pojedynek „Kto szybszy”, „Co kochamy”, karty z misiami",
      "featFunSoon": "„Kto z nas?” i „Dokończ zdanie” z księgą pary",
      "featCollection": "Cała kolekcja listów i wierszy w 15 językach",
      "featMoments": "Chwile, przypomnienia i list QR, który otworzy się we właściwy dzień",
      "featAudio": "Własne audio w liście i odpowiedzi odbiorcy",
      "groupTalk": "Znajomi i połączenia",
      "featCall": "Połączenia ze znajomymi: głos, głośnik i żywe reakcje",
      "ynTitle": "Tak czy nie",
      "ynNote": "Gra na żywo we dwoje: 5 sekund na każdą kartę. Kto odpowie na czas, zobaczy odpowiedź drugiej osoby.",
      "ynCreate": "Utwórz pokój",
      "ynWaiting": "Czekamy, aż {name} otworzy link…",
      "ynWaitingAny": "Czekamy na drugą osobę…",
      "ynShareText": "{name} zaprasza cię do gry na żywo „Tak czy nie”",
      "ynPartnerHere": "{name} już jest!",
      "ynStart": "Zacznij grę",
      "ynWaitHost": "{name} za chwilę zacznie grę",
      "ynYes": "Tak",
      "ynNo": "Nie",
      "ynMissed": "Za późno — ta karta pozostaje zakryta",
      "ynMatch": "Zgodność!",
      "ynRound": "Karta {n} z {total}",
      "ynAnswered": "Odpowiedź wysłana, czekamy na drugą osobę…",
      "ynFinal": "Zgodnie: {score} z {total}",
      "ynFinalHigh": "Rozumiecie się bez słów",
      "ynFinalMid": "Tacy różni — i tacy bliscy",
      "ynAgain": "Zagraj jeszcze raz",
      "ynLeft": "Druga osoba się rozłączyła. Czekamy na powrót…",
      "ynYou": "Ty",
      "ynOffline": "Nie można połączyć się z grą. Sprawdź internet i otwórz link ponownie.",
      "ynJoin": "Dołącz do gry",
      "ynJoinLead": "{name} czeka na ciebie. 5 sekund na każdą odpowiedź!",
      "ynStepNames": "Twoje imię i imię drugiej osoby",
      "ynRoomReady": "Pokój gotowy — wyślij link",
      "ynStayHere": "Nie zamykaj tego ekranu: gra zacznie się, gdy link zostanie otwarty.",
      "featYesNo": "Gra na żywo „Tak czy nie” — 5 sekund na odpowiedź",
      "ynPartnerMissed": "Brak odpowiedzi — czas minął",
      "lvTitle": "Co kochamy",
      "lvNote": "Gra na żywo we dwoje: 4 obrazki i 10 sekund, by wybrać, co lubisz najbardziej. Możecie wybrać to samo!",
      "lvShareText": "{name} zaprasza cię do gry na żywo „Co kochamy”",
      "lvJoinLead": "{name} czeka na ciebie. Wybierz obrazek, który lubisz najbardziej!",
      "lvRound": "Temat {n} z {total}",
      "lvPick": "Wybierz, co lubisz najbardziej",
      "lvBoth": "Oboje wybraliście: {item}",
      "lvCommon": "Oboje kochacie",
      "lvDiff": "Różne gusta — tym ciekawiej!",
      "lvFinalHigh": "Macie tak wiele wspólnego!",
      "lvFinalMid": "Tacy różni — i świetnie się uzupełniacie",
      "featLoves": "Gra na żywo „Co kochamy” — 4 obrazki, wybierajcie razem",
      "featGamesSoon2": "Pojedynek „Kto szybszy” i karty pamięci z misiami",
      "mcTitle": "Karty pamięci z misiami",
      "mcNote": "Memory na żywo we dwoje: na zmianę odkrywajcie po dwie karty i szukajcie par. Trzy poziomy, od 8 do 16 kart.",
      "mcShareText": "{name} zaprasza cię do gry na żywo „Karty pamięci z misiami”",
      "mcJoinLead": "{name} czeka na ciebie. Szukajcie par na zmianę!",
      "mcLevel": "Poziom {n} z {total}",
      "mcTurnYou": "Twój ruch — odkryj dwie karty",
      "mcTurnThem": "Ruch: {name}",
      "mcPairs": "Znalezione pary: {found} z {total}",
      "mcLevelDone": "Wszystkie pary znalezione!",
      "mcTimeUp": "Czas poziomu minął",
      "mcNext": "Dalej: poziom {n}",
      "mcFinal": "Znalezione pary: {found} z {total}",
      "mcFinalHigh": "Świetna drużyna!",
      "mcFinalMid": "Dobra gra — jeszcze raz?",
      "featCards": "Gra na żywo „Karty pamięci z misiami” — szukajcie par razem",
      "featGamesSoon3": "Pojedynek „Kto szybszy”",
      "duTitle": "Kto szybszy",
      "duNote": "Pojedynek na żywo: jedno słowo i cztery obrazki. Dotknij właściwego obrazka szybciej — pomyłka oznacza przegraną rundę.",
      "duShareText": "{name} wyzywa cię na pojedynek na żywo „Kto szybszy”",
      "duJoinLead": "{name} czeka na ciebie. Znajdź właściwy obrazek szybciej!",
      "duRound": "Runda {n} z {total}",
      "duFind": "Znajdź: {item}",
      "duYouWon": "Masz szybszy refleks!",
      "duTheyWon": "Szybciej: {name}",
      "duWrong": "Nie ten obrazek — runda przegrana",
      "duNobody": "Nikt nie zdążył znaleźć",
      "duScore": "Ty {you} : {them} {name}",
      "duFinalWin": "Wygrana! Dziś masz bystre oko.",
      "duFinalLose": "Tym razem wygrywa {name} — rewanż?",
      "duFinalDraw": "Remis — siły wyrównane!",
      "duSeconds": "{s} s",
      "featDuel": "Pojedynek na żywo „Kto szybszy” — znajdź obrazek najszybciej",
      "whoTitle": "Kto z nas?",
      "whoNote": "Gra na żywo we dwoje: jedno pytanie — dotknij „Ja” albo imienia drugiej osoby. Sprawdźcie, czy się zgadzacie.",
      "whoShareText": "{name} zaprasza cię do gry na żywo „Kto z nas?”",
      "whoJoinLead": "{name} czeka na ciebie. Odpowiadaj szczerze — potem porównajcie!",
      "whoRound": "Pytanie {n} z {total}",
      "whoMe": "Ja",
      "whoAgree": "Zgadzacie się: {name}",
      "whoDiffer": "Różne zdania — porozmawiajcie o tym!",
      "whoFinal": "Zgodność: {score} z {total}",
      "whoFinalHigh": "Tak dobrze się znacie!",
      "whoFinalMid": "Jest o czym rozmawiać — i to jest piękne",
      "featWho": "Gra na żywo „Kto z nas?” — czy się zgadzacie?",
      "phTitle": "Dokończ zdanie",
      "phNote": "Gra na żywo we dwoje: każda osoba kończy to samo ciepłe zdanie własnymi słowami, a potem czytacie swoje odpowiedzi.",
      "phShareText": "{name} zaprasza cię do gry na żywo „Dokończ zdanie”",
      "phJoinLead": "{name} czeka na ciebie. Dokończ każde zdanie własnymi słowami!",
      "phRound": "Zdanie {n} z {total}",
      "phPlaceholder": "Twoje zakończenie…",
      "phDone": "Gotowe",
      "phWaiting": "{name} jeszcze pisze…",
      "phSkipped": "Brak odpowiedzi",
      "phSave": "Zapisz w księdze pary",
      "phSaved": "Zapisano w księdze pary",
      "phForbidden": "Napisz to bez linków i niegrzecznych słów.",
      "phNext": "Następne zdanie",
      "phFinal": "Zdania dokończone razem: {count}",
      "phFinalLead": "Zapiszcie najcieplejsze odpowiedzi w księdze pary.",
      "featPhrase": "Gra na żywo „Dokończ zdanie” z księgą pary",
      "bookTitle": "Księga pary",
      "bookNote": "Najcieplejsze odpowiedzi z „Dokończ zdanie”, zapisane na twoim koncie.",
      "bookOpen": "Otwórz księgę",
      "bookEmpty": "Księga jest na razie pusta. Zagrajcie w „Dokończ zdanie” i zapiszcie odpowiedzi, które wam się podobają.",
      "bookDelete": "Usuń",
      "bookDeleteConfirm": "Usunąć tę stronę z księgi?",
      "bookYou": "Ty",
      "inviteTitle": "Zaproś kogoś",
      "inviteNote": "Ta osoba dostanie wiadomość z grą.",
      "invite": "Zaproś",
      "invited": "Zaproszono",
      "inviteNone": "Dodaj znajomych w sekcji „Znajomi”, aby zapraszać ich jednym dotknięciem.",
      "inviteSent": "Zaproszenie wysłane: {name}",
      "truth": "Prawda czy fałsz",
      "tfTitle": "Prawda czy fałsz",
      "tfNote": "Gra na żywo we dwoje: niezwykłe fakty o świecie. 12 sekund — prawda czy fałsz? Punkt za każdą dobrą odpowiedź.",
      "tfShareText": "{name} zaprasza cię do gry na żywo „Prawda czy fałsz”",
      "tfJoinLead": "{name} czeka na ciebie. Prawda czy fałsz — decyduj szybko!",
      "tfRound": "Fakt {n} z {total}",
      "tfTrue": "Prawda",
      "tfFalse": "Fałsz",
      "tfIsTrue": "To prawda!",
      "tfIsFalse": "To fałsz!",
      "tfFirstYou": "Pierwsza dobra odpowiedź — twoja!",
      "tfFirstThem": "Pierwsza dobra odpowiedź: {name}",
      "tfFinalWin": "Wygrana! Wiesz więcej o świecie.",
      "tfFinalLose": "Tym razem {name} wie więcej — rewanż?",
      "tfFinalDraw": "Remis — wiecie dokładnie tyle samo!",
      "featTruth": "Gra na żywo „Prawda czy fałsz” — niezwykłe fakty o świecie",
      "countries": "Zgadnij kraj",
      "coTitle": "Zgadnij kraj",
      "coNote": "Gra na żywo we dwoje: miś podróżuje po świecie. 10 sekund — zgadnij, w jakim jest kraju! Punkt za każdą dobrą odpowiedź.",
      "coShareText": "{name} zaprasza cię do gry na żywo „Zgadnij kraj”",
      "coJoinLead": "{name} czeka na ciebie. Zgadnij kraj po obrazku!",
      "coRound": "Kraj {n} z {total}",
      "coAsk": "Jaki to kraj?",
      "coFinalWin": "Wygrana! Świat nie ma przed tobą tajemnic.",
      "coFinalLose": "Tym razem {name} lepiej zna świat — rewanż?",
      "coFinalDraw": "Remis — świat znacie świetnie!",
      "featCountries": "Gra na żywo „Zgadnij kraj” — 40 krajów",
      "hints": "Zgadnij po podpowiedziach",
      "dreams": "Marzenia i plany",
      "hiTitle": "Zgadnij po podpowiedziach",
      "hiNote": "Gra na żywo we dwoje: trzy podpowiedzi odsłaniają się po kolei. Zgadniesz po pierwszej — 3 punkty, po drugiej — 2, po trzeciej — 1.",
      "hiShareText": "{name} zaprasza cię do gry na żywo „Zgadnij po podpowiedziach”",
      "hiJoinLead": "{name} czeka na ciebie. Zgaduj jak najwcześniej!",
      "hiRound": "Zagadka {n} z {total}",
      "hiAsk": "Co to jest?",
      "hiClue": "Podpowiedź {n}",
      "hiPoints": "Punkty: +{n}",
      "hiNoPoints": "Tym razem bez punktów",
      "hiFinalWin": "Zwycięstwo! Świetnie zgadujesz.",
      "hiFinalLose": "Tym razem lepiej zgaduje {name} — rewanż?",
      "hiFinalDraw": "Remis — oboje świetnie zgadujecie!",
      "featHints": "Gra na żywo „Zgadnij po podpowiedziach” — 3, 2 lub 1 punkt",
      "drTitle": "Marzenia i plany",
      "drNote": "Gra na żywo we dwoje: dom, podróże, nauka i pasje. Wybierz, czego chcesz, i sprawdźcie, czy wasze marzenia się pokrywają.",
      "drShareText": "{name} zaprasza cię do gry na żywo „Marzenia i plany”",
      "drJoinLead": "{name} czeka na ciebie. Wybierz to, czego naprawdę chcesz!",
      "drRound": "Pytanie {n} z {total}",
      "drPick": "Wybierz, czego chcesz",
      "drBoth": "Wspólne marzenie: {item}",
      "drDiff": "Różne marzenia — opowiedzcie sobie dlaczego!",
      "drFinalHigh": "Macie tyle wspólnych marzeń!",
      "drFinalMid": "Różne marzenia — jest o czym rozmawiać",
      "drCommon": "Wasze wspólne marzenia",
      "featDreams": "Gra na żywo „Marzenia i plany” — czy wasze marzenia się pokrywają?",
      "modestTitle": "Tryb skromny",
      "modestNote": "Bez pytań o uczucia, przytulanie i randki — tylko przyjacielskie"
    },
    "questions": {
      "q01": [
        "Moja ulubiona pora roku?",
        "Wiosna",
        "Lato",
        "Jesień",
        "Zima"
      ],
      "q02": [
        "Co wybiorę na śniadanie?",
        "Kawę i rogalika",
        "Owsiankę",
        "Jajka",
        "Tylko herbatę"
      ],
      "q03": [
        "Mój idealny dzień wolny?",
        "W domu pod kocem",
        "Spacer po parku",
        "Wypad za miasto",
        "Spotkanie z przyjaciółmi"
      ],
      "q04": [
        "Dokąd marzę pojechać?",
        "Nad morze",
        "W góry",
        "Do dużego miasta",
        "Do przytulnego domku na wsi"
      ],
      "q05": [
        "Moje ulubione lody?",
        "Waniliowe",
        "Czekoladowe",
        "Truskawkowe",
        "Pistacjowe"
      ],
      "q06": [
        "Co najszybciej poprawia mi humor?",
        "Przytulenie",
        "Niespodzianka",
        "Ciepłe słowa",
        "Coś pysznego"
      ],
      "q07": [
        "Jestem raczej…",
        "Rannym ptaszkiem",
        "Nocnym markiem",
        "Śpiochem, gdy tylko się da",
        "Fanem drzemek"
      ],
      "q08": [
        "Jaki film wybiorę na wieczór?",
        "Komedię",
        "Romantyczną historię",
        "Kryminał",
        "Animację"
      ],
      "q09": [
        "Mój ulubiony kolor?",
        "Czerwony",
        "Niebieski",
        "Zielony",
        "Różowy"
      ],
      "q10": [
        "Czego boję się najbardziej?",
        "Pająków",
        "Wysokości",
        "Ciemności",
        "Spóźnienia"
      ],
      "q11": [
        "Jakie kwiaty kocham?",
        "Róże",
        "Tulipany",
        "Piwonie",
        "Stokrotki"
      ],
      "q12": [
        "Co robię, gdy jest mi smutno?",
        "Dzwonię do bliskich",
        "Jem coś słodkiego",
        "Idę na spacer",
        "Kładę się spać"
      ],
      "q13": [
        "Które zwierzę jest mi najbliższe?",
        "Kotek",
        "Pies",
        "Miś",
        "Liska"
      ],
      "q14": [
        "Najlepszy prezent dla mnie?",
        "Coś zrobionego własnoręcznie",
        "Podróż",
        "Biżuteria",
        "Książka"
      ],
      "q15": [
        "Mój ulubiony napój?",
        "Czarna herbata",
        "Zielona herbata",
        "Kawa",
        "Kakao"
      ],
      "q16": [
        "Moja ulubiona przekąska?",
        "Czekolada",
        "Chipsy",
        "Owoce",
        "Ciastko"
      ],
      "q17": [
        "Co wybieram w podróży?",
        "Muzea",
        "Plażę",
        "Lokalną kuchnię",
        "Spacery bez planu"
      ],
      "q18": [
        "Jak lubię spędzać wieczór?",
        "Z książką",
        "Z serialem",
        "Na rozmowach",
        "Na spacerze"
      ],
      "q19": [
        "Jaka pogoda najbardziej mi odpowiada?",
        "Słońce",
        "Ciepły deszcz",
        "Padający śnieg",
        "Lekki wiatr"
      ],
      "q20": [
        "Jaka supermoc by do mnie pasowała?",
        "Latanie",
        "Czytanie w myślach",
        "Zatrzymywanie czasu",
        "Teleportacja"
      ],
      "q21": [
        "Co jest dla mnie najważniejsze w bliskich?",
        "Zaufanie",
        "Troska",
        "Poczucie humoru",
        "Wsparcie"
      ],
      "q22": [
        "Na jakie święto czekam najbardziej?",
        "Nowy Rok",
        "Moje urodziny",
        "Wakacje",
        "Walentynki"
      ],
      "q23": [
        "Jak najczęściej mówię „kocham”?",
        "Słowami",
        "Czynami",
        "Przytuleniem",
        "Prezentami"
      ],
      "q24": [
        "Co zamówię w kawiarni?",
        "Makaron",
        "Sushi",
        "Sałatkę",
        "Deser"
      ],
      "q25": [
        "Moja ulubiona pora dnia?",
        "Rano",
        "Popołudnie",
        "Wieczór",
        "Noc"
      ],
      "q26": [
        "Jaką kuchnię wybiorę?",
        "Włoską",
        "Japońską",
        "Domową",
        "Meksykańską"
      ],
      "q27": [
        "Gdzie najlepiej mi się myśli?",
        "Pod prysznicem",
        "Na spacerze",
        "W podróży",
        "Przed snem"
      ],
      "q28": [
        "Co robię rano w pierwszej kolejności?",
        "Patrzę w telefon",
        "Piję wodę",
        "Robię kawę",
        "Leżę jeszcze chwilę"
      ],
      "q29": [
        "Mój ulubiony owoc?",
        "Jabłko",
        "Banan",
        "Mango",
        "Arbuz"
      ],
      "q30": [
        "Które hobby jest mi najbliższe?",
        "Rysowanie",
        "Gotowanie",
        "Sport",
        "Czytanie"
      ],
      "q31": [
        "Jak chcę świętować urodziny?",
        "Głośną imprezą",
        "Kolacją we dwoje",
        "Wyjazdem",
        "Spokojnym wieczorem w domu"
      ],
      "q32": [
        "Co sądzę o niespodziankach?",
        "Uwielbiam je",
        "Trochę mnie stresują",
        "Lubię przygotowywać je innym",
        "Wolę wiedzieć wcześniej"
      ],
      "q33": [
        "Jaki słodycz lubię najbardziej?",
        "Tort",
        "Lody",
        "Ciastka",
        "Cukierki"
      ],
      "q34": [
        "Co zabiorę na bezludną wyspę?",
        "Książkę",
        "Telefon",
        "Koc",
        "Aparat"
      ],
      "q35": [
        "Jak odpoczywam po trudnym dniu?",
        "Ciepła kąpiel",
        "Serial",
        "Spacer",
        "Rozmowa z bliską osobą"
      ],
      "q36": [
        "Jaki środek transportu lubię najbardziej?",
        "Pociąg",
        "Samolot",
        "Samochód",
        "Rower"
      ],
      "q37": [
        "Moja ulubiona zabawa z dzieciństwa?",
        "Chowanego",
        "Berek",
        "Klocki",
        "Rysowanie"
      ],
      "q38": [
        "Która baśń jest mi najbliższa?",
        "Kopciuszek",
        "Mały Książę",
        "Kubuś Puchatek",
        "Alicja w Krainie Czarów"
      ],
      "q39": [
        "Czym chętniej ucieszę bliską osobę?",
        "Niespodzianką",
        "Kartką",
        "Wyjazdem",
        "Kolacją"
      ],
      "q40": [
        "Co najczęściej fotografuję?",
        "Siebie",
        "Przyrodę",
        "Jedzenie",
        "Prawie nie robię zdjęć"
      ],
      "q41": [
        "Moje ulubione miejsce w domu?",
        "Łóżko",
        "Kuchnia",
        "Kanapa",
        "Balkon"
      ],
      "q42": [
        "Co zauważam w człowieku najpierw?",
        "Uśmiech",
        "Oczy",
        "Głos",
        "Poczucie humoru"
      ],
      "q43": [
        "Co najszybciej mnie rozśmiesza?",
        "Zabawne filmiki",
        "Żarty bliskich",
        "Niezręczne sytuacje",
        "Zwierzęta"
      ],
      "q44": [
        "Co piję w upalny dzień?",
        "Lemoniadę",
        "Mrożoną herbatę",
        "Sok",
        "Wodę z lodem"
      ],
      "q45": [
        "Który żywioł jest mi najbliższy?",
        "Woda",
        "Ogień",
        "Ziemia",
        "Powietrze"
      ],
      "q46": [
        "Jakie historie kocham?",
        "Przygodowe",
        "O miłości",
        "Fantastykę",
        "Prawdziwe"
      ],
      "q47": [
        "Jak spędzam deszczowy dzień?",
        "Czytam",
        "Śpię",
        "Oglądam film",
        "Spaceruję pod parasolem"
      ],
      "q48": [
        "Co najbardziej cenię w prezencie?",
        "Pamięć",
        "Przydatność",
        "Piękno",
        "Zaskoczenie"
      ],
      "q49": [
        "Jakie ziemniaki wybiorę?",
        "Purée",
        "Frytki",
        "Pieczone",
        "Chipsy"
      ],
      "q50": [
        "Dokąd idę najpierw w nowym mieście?",
        "Do kawiarni",
        "Do muzeum",
        "Do parku",
        "Na zakupy"
      ],
      "q51": [
        "Co robię, gdy nie mogę zasnąć?",
        "Czytam",
        "Przeglądam telefon",
        "Liczę owce",
        "Piję ciepłe mleko"
      ],
      "q52": [
        "Jak przygotowuję się do ważnego dnia?",
        "Wszystko planuję wcześniej",
        "Robię wszystko na ostatnią chwilę",
        "Proszę o pomoc",
        "Denerwuję się i nie śpię"
      ],
      "q53": [
        "Jaki sport lubię oglądać najbardziej?",
        "Piłkę nożną",
        "Tenis",
        "Łyżwiarstwo figurowe",
        "Nie oglądam sportu"
      ],
      "q54": [
        "Jaki zwierzak do mnie pasuje?",
        "Kot",
        "Pies",
        "Papuga",
        "Chomik"
      ],
      "q55": [
        "Jakie wiadomości piszę?",
        "Długie",
        "Krótkie",
        "Pełne emotek",
        "Głosowe"
      ],
      "q56": [
        "Jaki prezent przechowuję najdłużej?",
        "List",
        "Zabawkę",
        "Zdjęcie",
        "Biżuterię"
      ],
      "q57": [
        "Co raczej wybiorę?",
        "Herbatę przy kominku",
        "Piknik na trawie",
        "Spacer nad morzem",
        "Wyjście do kina"
      ],
      "q58": [
        "Który komplement ucieszy mnie najbardziej?",
        "O wyglądzie",
        "O inteligencji",
        "O dobroci",
        "O poczuciu humoru"
      ],
      "q59": [
        "Mój idealny poranek?",
        "Śniadanie do łóżka",
        "Poranny bieg",
        "Długie spanie",
        "Kawa na balkonie"
      ],
      "q60": [
        "Czego chcę się nauczyć?",
        "Tańczyć",
        "Gotować",
        "Nowego języka",
        "Rysować"
      ],
      "q61": [
        "Jakie danie wychodzi mi najlepiej?",
        "Zupa",
        "Pilaw",
        "Wypieki",
        "Sałatka"
      ],
      "q62": [
        "Jaki kraj chcę zobaczyć najpierw?",
        "Turcja",
        "Japonia",
        "Maroko",
        "Norwegia"
      ],
      "q63": [
        "Jaki sport chętniej uprawiam?",
        "Pływanie",
        "Bieganie",
        "Jazda na rowerze",
        "Piłka nożna"
      ],
      "q64": [
        "Jaką książkę wybieram?",
        "Przygodową",
        "Historyczną",
        "Baśnie",
        "Encyklopedię"
      ],
      "q65": [
        "Do których zwierząt idę najpierw w zoo?",
        "Do słoni",
        "Do małp",
        "Do pingwinów",
        "Do żyraf"
      ],
      "q66": [
        "Jak podchodzę do ostrego jedzenia?",
        "Im ostrzej, tym lepiej",
        "Trochę może być",
        "Tylko odrobinę",
        "W ogóle go nie jem"
      ],
      "q67": [
        "Jaki przedmiot w szkole był moim ulubionym?",
        "Matematyka",
        "Język polski",
        "Geografia",
        "WF"
      ],
      "q68": [
        "Mój wymarzony zawód z dzieciństwa?",
        "Leczenie ludzi",
        "Uczenie dzieci",
        "Lot w kosmos",
        "Gotowanie"
      ],
      "q69": [
        "Jak podchodzę do pieszych wędrówek?",
        "Marzę o długiej",
        "Tylko na jeden dzień",
        "Tylko z wygodami",
        "Lepiej w domu"
      ],
      "q70": [
        "Mój nastrój rano?",
        "Mnóstwo energii",
        "Jeszcze chce mi się spać",
        "Cisza",
        "Ochota na rozmowę"
      ],
      "q71": [
        "Jakie orzechy lubię najbardziej?",
        "Laskowe",
        "Włoskie",
        "Nerkowce",
        "Migdały"
      ],
      "q72": [
        "Co robię z niespodziewaną wolną godziną?",
        "Czytam",
        "Idę na spacer",
        "Dzwonię do rodziny",
        "Gotuję coś"
      ],
      "q73": [
        "Jakiej pogody nie lubię?",
        "Upału",
        "Wiatru",
        "Pluchy",
        "Siarczystego mrozu"
      ],
      "q74": [
        "Na jaki kolor chcę pomalować swój pokój?",
        "Biały",
        "Beżowy",
        "Zielony",
        "Błękitny"
      ],
      "q75": [
        "W co wolę zagrać?",
        "W szachy",
        "W warcaby",
        "W puzzle",
        "W grę słowną"
      ],
      "q76": [
        "Co ugotuję dla gości?",
        "Pilaw",
        "Ciasto",
        "Sałatki",
        "Zamówię jedzenie"
      ],
      "q77": [
        "Czego na pewno nie zjem?",
        "Grzybów",
        "Ryby",
        "Oliwek",
        "Gotowanej cebuli"
      ],
      "q78": [
        "Jaką herbatę piję?",
        "Mocną",
        "Słabą",
        "Słodką",
        "Z ziołami"
      ],
      "q79": [
        "Co jest dla mnie najważniejsze w domu?",
        "Czystość",
        "Przytulność",
        "Dużo światła",
        "Cisza"
      ],
      "q80": [
        "Jak uczę się nowych rzeczy?",
        "Czytam",
        "Oglądam lekcje wideo",
        "Próbuję w praktyce",
        "Pytam innych"
      ],
      "q81": [
        "Które dzikie zwierzę fascynuje mnie najbardziej?",
        "Tygrys",
        "Niedźwiedź",
        "Orzeł",
        "Delfin"
      ],
      "q82": [
        "Co daję mamie w prezencie?",
        "Kwiaty",
        "Coś zrobionego ręcznie",
        "Wycieczkę",
        "Ciepły koc"
      ],
      "q83": [
        "Co robię w podróży?",
        "Patrzę przez okno",
        "Czytam",
        "Rozmawiam",
        "Podjadam"
      ],
      "q84": [
        "Moje ulubione danie z kurczaka?",
        "Szaszłyki z kurczaka",
        "Kurczak z ryżem",
        "Kotlety z kurczaka",
        "Nuggetsy"
      ],
      "q85": [
        "Jakie miejsce wybieram w pociągu?",
        "Przy oknie",
        "Przy przejściu",
        "Tyłem do kierunku jazdy",
        "Wszystko jedno"
      ],
      "q86": [
        "Co robię, gdy coś idzie nie tak?",
        "Od razu działam",
        "Najpierw myślę",
        "Proszę o radę",
        "Trochę się martwię"
      ],
      "q87": [
        "Jaka jest moja główna cecha?",
        "Dobroć",
        "Szczerość",
        "Wytrwałość",
        "Pogoda ducha"
      ],
      "q88": [
        "Gdzie najlepiej odpoczywam?",
        "U krewnych na wsi",
        "W hotelu nad morzem",
        "Pod namiotem",
        "W domu"
      ],
      "q89": [
        "Jaki wypiek wybieram?",
        "Samsa",
        "Chaczapuri",
        "Czak-czak",
        "Ekler"
      ],
      "q90": [
        "Jakiego języka najbardziej chcę się nauczyć?",
        "Arabskiego",
        "Angielskiego",
        "Tureckiego",
        "Japońskiego"
      ],
      "q91": [
        "Jak długo wytrzymam bez słodyczy?",
        "Dzień",
        "Tydzień",
        "Miesiąc",
        "Ile trzeba"
      ],
      "q92": [
        "Co robię, gdy się spóźniam?",
        "Biegnę, ile sił",
        "Dzwonię, żeby uprzedzić",
        "Biorę taksówkę",
        "Nigdy się nie spóźniam"
      ],
      "q93": [
        "Co robię, gdy psuje się sprzęt?",
        "Naprawiam bez pomocy",
        "Czytam instrukcję",
        "Wołam o pomoc",
        "Wciskam wszystkie przyciski"
      ],
      "q94": [
        "Co trafia do walizki najpierw?",
        "Apteczka",
        "Książka",
        "Ładowarka",
        "Przekąska"
      ],
      "q95": [
        "Jakie zajęcie mnie uspokaja?",
        "Gotowanie",
        "Sprzątanie",
        "Rysowanie",
        "Spacer"
      ],
      "q96": [
        "Czym chcę się zająć na emeryturze?",
        "Ogrodem",
        "Podróżami",
        "Czytaniem",
        "Wnukami"
      ],
      "q97": [
        "Co mnie najbardziej denerwuje?",
        "Hałas",
        "Bałagan",
        "Spóźnianie się",
        "Niegrzeczność"
      ],
      "q98": [
        "Jaki zapach lubię najbardziej?",
        "Świeżego chleba",
        "Deszczu",
        "Kwiatów",
        "Morza"
      ],
      "q99": [
        "Co wybieram na deser?",
        "Owoce",
        "Lody",
        "Ciasto",
        "Samą herbatę"
      ]
    },
    "yesNo": {
      "c01": [
        "Tęsknisz za mną w tej chwili?",
        "bardzo tęskni",
        "trzyma się, ale myśli o tobie"
      ],
      "c02": [
        "Uśmiechasz się, gdy widzisz moją wiadomość?",
        "zawsze się uśmiecha",
        "uśmiecha się w duchu"
      ],
      "c03": [
        "Pamiętasz nasze pierwsze spotkanie?",
        "pamięta każdą minutę",
        "pamięta najważniejsze — ciebie"
      ],
      "c04": [
        "Chcesz się dziś przytulić?",
        "czeka na twoje przytulenie",
        "zostawia przytulasy na później"
      ],
      "c05": [
        "Pojedziemy razem nad morze?",
        "już pakuje walizkę",
        "marzy o górach"
      ],
      "c06": [
        "Rozśmieszam cię?",
        "śmieje się od serca",
        "ukrywa uśmiech"
      ],
      "c07": [
        "Czujesz się przy mnie spokojnie?",
        "przy tobie czuje spokój",
        "dobrze się z tobą bawi"
      ],
      "c08": [
        "Myślisz o mnie w ciągu dnia?",
        "myśli o tobie bardzo często",
        "myśli o tobie właśnie teraz"
      ],
      "c09": [
        "Lubisz moje niespodzianki?",
        "uwielbia twoje niespodzianki",
        "najbardziej lubi, gdy jesteś obok"
      ],
      "c10": [
        "Upieczemy razem ciasto?",
        "już zakłada fartuch",
        "woli kupić tort"
      ],
      "c11": [
        "Obejrzymy wieczorem film?",
        "już wybiera film",
        "woli po prostu pogadać"
      ],
      "c12": [
        "Lubisz mój głos?",
        "może słuchać bez końca",
        "jeszcze bardziej kocha twój śmiech"
      ],
      "c13": [
        "Zrobimy piknik w weekend?",
        "szykuje koc",
        "zaprasza do przytulnej kawiarni"
      ],
      "c14": [
        "Chcesz dostać ode mnie list?",
        "czeka na twój list",
        "chce usłyszeć wszystko osobiście"
      ],
      "c15": [
        "Jestem dla ciebie ważny/a?",
        "jesteś bardzo ważny/a",
        "ważniejszy/a, niż myślisz"
      ],
      "c16": [
        "Pospacerujemy w deszczu?",
        "bierze parasol dla dwojga",
        "zaparzy herbatę w domu"
      ],
      "c17": [
        "Jesteśmy do siebie podobni?",
        "jesteście jak dwie połówki",
        "świetnie się uzupełniacie"
      ],
      "c18": [
        "Smakuje ci, jak gotuję?",
        "prosi o dokładkę",
        "uwielbia gotować razem z tobą"
      ],
      "c19": [
        "Weźmiemy razem zwierzaka?",
        "już wybiera imię",
        "na razie wystarczy pluszowy miś"
      ],
      "c20": [
        "Wiesz, co kocham?",
        "zna na pamięć",
        "chce wiedzieć jeszcze więcej"
      ],
      "c21": [
        "Zatańczymy?",
        "już podaje ci rękę",
        "będzie klaskać"
      ],
      "c22": [
        "Inspiruję cię?",
        "inspirujesz każdego dnia",
        "przy tobie jest po prostu ciepło"
      ],
      "c23": [
        "Przechowujesz nasze zdjęcia?",
        "strzeże każdego",
        "czeka na nowe, jeszcze piękniejsze"
      ],
      "c24": [
        "Powitamy razem wschód słońca?",
        "nastawia budzik",
        "woli pożegnać zachód"
      ],
      "c25": [
        "Zdradzisz mi sekret?",
        "szepnie ci do ucha",
        "niech zostanie tajemnicą"
      ],
      "c26": [
        "Wierzysz we mnie?",
        "bardzo w ciebie wierzy",
        "dopinguje cię każdego dnia"
      ],
      "c27": [
        "Pojedziemy w podróż tylko we dwoje?",
        "marzy o tym",
        "zabierze wszystkich bliskich"
      ],
      "c28": [
        "Czekasz na mój telefon?",
        "czeka z uśmiechem",
        "woli, żebyś wpadł/a w odwiedziny"
      ],
      "c29": [
        "Lubisz moje przytulasy?",
        "najcieplejsze na świecie",
        "lubi trzymać się za ręce"
      ],
      "c30": [
        "Poczytamy sobie na głos?",
        "już wybiera książkę",
        "woli posłuchać ciebie"
      ],
      "c31": [
        "Zrobimy dziś wspólne zdjęcie?",
        "już szuka ładnego tła",
        "najpierw rozmowa"
      ],
      "c32": [
        "Poprawiam ci humor?",
        "zawsze",
        "z tobą nawet smutek jest lżejszy"
      ],
      "c33": [
        "Zjemy jutro razem śniadanie?",
        "już robi kakao",
        "marzy, by dłużej pospać"
      ],
      "c34": [
        "Pamiętasz moje urodziny?",
        "pamięta bez przypominania",
        "w tajemnicy szykuje niespodziankę"
      ],
      "c35": [
        "Pójdziemy na łyżwy?",
        "wyciąga łyżwy",
        "będzie kibicować przy bandzie"
      ],
      "c36": [
        "Czy to dla ciebie dobry dzień?",
        "świetny dzień",
        "będzie lepszy, gdy będziesz obok"
      ],
      "c37": [
        "Narysujesz mój portret?",
        "już bierze ołówek",
        "narysuje serduszko"
      ],
      "c38": [
        "Posadzimy razem drzewo?",
        "wybiera miejsce",
        "zacznie od kwiatka na parapecie"
      ],
      "c39": [
        "Chcesz usłyszeć komplement?",
        "nie może się doczekać",
        "wstydzi się, ale bardzo chce"
      ],
      "c40": [
        "Zagramy później jeszcze raz?",
        "chce jeszcze jedną rundę",
        "woli się przytulić niż grać"
      ],
      "c41": [
        "Lubisz ostre jedzenie?",
        "im ostrzej, tym lepiej",
        "wybiera coś łagodniejszego"
      ],
      "c42": [
        "Umiesz pływać?",
        "pływa jak ryba",
        "na razie trzyma się blisko brzegu"
      ],
      "c43": [
        "Chcesz mieć kota?",
        "już wymyśla imię",
        "woli psy"
      ],
      "c44": [
        "Chcesz kiedyś odwiedzić Stambuł?",
        "już marzy o Bosforze",
        "woli inne miasto"
      ],
      "c45": [
        "Lubisz gotować?",
        "gotuje z przyjemnością",
        "woli pozmywać naczynia"
      ],
      "c46": [
        "Chcesz nauczyć się gotować pilaw?",
        "już szuka przepisu",
        "woli spróbować cudzego"
      ],
      "c47": [
        "Lubisz czytać książki?",
        "zawsze ma książkę pod ręką",
        "woli słuchać opowieści"
      ],
      "c48": [
        "Umiesz jeździć na rowerze?",
        "może ruszać choćby teraz",
        "obiecuje się nauczyć"
      ],
      "c49": [
        "Wolisz góry od morza?",
        "wybiera góry",
        "wybiera morze"
      ],
      "c50": [
        "Chcesz zobaczyć pustynię?",
        "marzy o piaszczystych wydmach",
        "woli las"
      ],
      "c51": [
        "Lubisz zimę?",
        "czeka na pierwszy śnieg",
        "czeka na lato"
      ],
      "c52": [
        "Pijesz herbatę bez cukru?",
        "lubi czysty smak herbaty",
        "nie obejdzie się bez łyżeczki cukru"
      ],
      "c53": [
        "Boisz się pająków?",
        "trzyma się od nich z daleka",
        "spokojnie wynosi je na dwór"
      ],
      "c54": [
        "Lubisz rysować?",
        "już sięga po pędzel",
        "woli oglądać cudze obrazy"
      ],
      "c55": [
        "Chcesz zobaczyć zorzę polarną?",
        "już sprawdza, gdzie ją zobaczyć",
        "woli patrzeć w gwiazdy"
      ],
      "c56": [
        "Lubisz deszczową pogodę?",
        "kocha szum deszczu za oknem",
        "czeka na słońce"
      ],
      "c57": [
        "Umiesz jeździć konno?",
        "pewnie siedzi w siodle",
        "na razie tylko o tym marzy"
      ],
      "c58": [
        "Chcesz mieć psa?",
        "marzy o wiernym przyjacielu",
        "na razie ma dość obowiązków"
      ],
      "c59": [
        "Wolisz słodkie od słonego?",
        "nie wyobraża sobie życia bez słodyczy",
        "wybiera słone"
      ],
      "c60": [
        "Lubisz podróżować pociągiem?",
        "kocha stukot kół",
        "wybiera samolot"
      ],
      "c61": [
        "Łatwo ci zacząć dzień wcześnie rano?",
        "zaczyna dzień z mnóstwem energii",
        "rozkręca się dopiero koło obiadu"
      ],
      "c62": [
        "Lubisz biwakować pod namiotem?",
        "już pakuje plecak",
        "wybiera przytulny hotel"
      ],
      "c63": [
        "Chcesz mieszkać nad morzem?",
        "marzy o szumie fal",
        "wybiera miasto"
      ],
      "c64": [
        "Jesz lody zimą?",
        "je je nawet w mróz",
        "tylko latem"
      ],
      "c65": [
        "Lubisz czekoladę?",
        "zna każdy jej rodzaj",
        "spokojnie przechodzi obok"
      ],
      "c66": [
        "Umiesz piec ciasta?",
        "piecze jak babcia",
        "obiecuje się nauczyć"
      ],
      "c67": [
        "Lubisz patrzeć w gwiazdy?",
        "zna gwiazdozbiory",
        "woli słoneczny dzień"
      ],
      "c68": [
        "Chcesz kiedyś założyć własny ogród?",
        "już wybiera sadzonki",
        "zacznie od kwiatka w doniczce"
      ],
      "c69": [
        "Lubisz polne kwiaty?",
        "kocha stokrotki i chabry",
        "woli kwiaty ogrodowe"
      ],
      "c70": [
        "Pijesz kawę?",
        "bez kawy dzień się nie zaczyna",
        "wybiera herbatę"
      ],
      "c71": [
        "Lubisz domową lemoniadę?",
        "już kroi cytryny",
        "woli wodę"
      ],
      "c72": [
        "Chcesz kiedyś pojechać do Japonii?",
        "marzy o kwitnących wiśniach",
        "wybiera inny kraj"
      ],
      "c73": [
        "Lubisz jesień?",
        "kocha szelest liści pod stopami",
        "czeka na wiosnę"
      ],
      "c74": [
        "Lubisz zapach lawendy?",
        "kocha ten zapach",
        "woli inne zapachy"
      ],
      "c75": [
        "Lubisz gry planszowe?",
        "już rozkłada planszę",
        "woli spacer"
      ],
      "c76": [
        "Umiesz prowadzić samochód?",
        "jeździ pewnie",
        "na razie siedzi obok kierowcy"
      ],
      "c77": [
        "Chcesz kiedyś zobaczyć ocean?",
        "marzy o wielkiej fali",
        "morze w zupełności wystarczy"
      ],
      "c78": [
        "Chcesz przez jakiś czas pomieszkać na wsi w gospodarstwie?",
        "już karmi kury",
        "zostaje w mieście"
      ],
      "c79": [
        "Lubisz duże miasta?",
        "kocha światła miasta",
        "wybiera ciszę i spokój"
      ],
      "c80": [
        "Wolisz owoce od słodyczy?",
        "wybiera owoce",
        "wybiera słodycze"
      ],
      "c81": [
        "Chcesz zobaczyć delfiny w morzu?",
        "bardzo chce je zobaczyć",
        "woli o nich poczytać"
      ],
      "c82": [
        "Lubisz lato?",
        "czeka na upalne dni",
        "lubi chłód"
      ],
      "c83": [
        "Lubisz spacery po parku?",
        "spaceruje w każdą pogodę",
        "woli zostać w domu"
      ],
      "c84": [
        "Lubisz pisać ręcznie?",
        "ma staranne pismo",
        "pisze w telefonie"
      ],
      "c85": [
        "Lubisz przejażdżki łódką?",
        "już chwyta wiosła",
        "zostaje na brzegu"
      ],
      "c86": [
        "Chcesz objechać cały świat?",
        "już rysuje trasę",
        "wystarczy kilka krajów"
      ],
      "c87": [
        "Umiesz ulepić bałwana?",
        "ulepi największego",
        "woli bitwę na śnieżki"
      ],
      "c88": [
        "Chcesz w tym roku nauczyć się czegoś nowego?",
        "już wybiera kurs",
        "ma już dość zajęć"
      ],
      "c89": [
        "Lubisz ciszę?",
        "ceni spokój",
        "lubi, gdy dużo się dzieje"
      ],
      "c90": [
        "Lubisz dawać prezenty rodzinie?",
        "sprawia rodzinie radość bez okazji",
        "woli pomagać w praktyczny sposób"
      ]
    },
    "loves": {
      "s01": [
        "Gdzie spędzić urlop?",
        "Plaża",
        "Góry",
        "Podróże",
        "Chwila samotności"
      ],
      "s02": [
        "Idealny wieczór?",
        "Kino w domu",
        "Spacer",
        "Restauracja",
        "Gry planszowe"
      ],
      "s03": [
        "Ulubiona pogoda?",
        "Słońce",
        "Deszcz",
        "Śnieg",
        "Gwiaździsta noc"
      ],
      "s04": [
        "Ulubione zwierzę?",
        "Kotek",
        "Szczeniak",
        "Koń",
        "Delfin"
      ],
      "s05": [
        "Co na kolację?",
        "Pizza",
        "Sushi",
        "Ciastka",
        "Grill"
      ],
      "s06": [
        "Ulubiony napój?",
        "Kawa",
        "Herbata",
        "Kakao",
        "Lemoniada"
      ],
      "s07": [
        "Ulubiona pora roku?",
        "Wiosna",
        "Lato",
        "Jesień",
        "Zima"
      ],
      "s08": [
        "Ulubione kwiaty?",
        "Róże",
        "Tulipany",
        "Słoneczniki",
        "Lawenda"
      ],
      "s09": [
        "Jak odpocząć?",
        "Z książką",
        "Rysując",
        "Na rowerze",
        "Drzemka w hamaku"
      ],
      "s10": [
        "Jak podróżować?",
        "Pociągiem",
        "Samolotem",
        "Samochodem",
        "Statkiem"
      ],
      "s11": [
        "Wymarzony dom?",
        "Mieszkanie w mieście",
        "Dom nad morzem",
        "Domek w górach",
        "Farma"
      ],
      "s12": [
        "Coś słodkiego?",
        "Lody",
        "Czekolada",
        "Tort",
        "Owoce"
      ],
      "s13": [
        "Idealny poranek?",
        "Śniadanie do łóżka",
        "Bieganie",
        "Długi sen",
        "Kawa na balkonie"
      ],
      "s14": [
        "Wymarzona randka?",
        "Piknik",
        "Lodowisko",
        "Wesołe miasteczko",
        "Gwiazdy na dachu"
      ],
      "s15": [
        "Najlepszy prezent?",
        "Bukiet kwiatów",
        "List",
        "Podróż",
        "Pudełko z prezentem"
      ],
      "s16": [
        "Ulubiona przyroda?",
        "Morze",
        "Las",
        "Pustynia",
        "Zorza polarna"
      ],
      "s17": [
        "Ulubiony owoc?",
        "Jabłko",
        "Truskawka",
        "Arbuz",
        "Winogrona"
      ],
      "s18": [
        "Co robić w wolny dzień?",
        "Wędrówka po górach",
        "Gotowanie w domu",
        "Muzeum",
        "Wędkowanie"
      ],
      "s19": [
        "Ulubione śniadanie?",
        "Naleśniki",
        "Omlet",
        "Owsianka z owocami",
        "Rogalik"
      ],
      "s20": [
        "Ulubiony ptak?",
        "Sowa",
        "Papuga",
        "Łabędź",
        "Paw"
      ],
      "s21": [
        "Jakie miasto odwiedzić?",
        "Stambuł",
        "Paryż",
        "Tokio",
        "Dubaj"
      ],
      "s22": [
        "Ulubiony sport?",
        "Piłka nożna",
        "Pływanie",
        "Tenis",
        "Jazda konna"
      ],
      "s23": [
        "Co posadzić w ogrodzie?",
        "Jabłoń",
        "Róże",
        "Warzywa",
        "Truskawki"
      ],
      "s24": [
        "Ulubiony wypiek?",
        "Pierożki",
        "Pączki",
        "Ciasteczka",
        "Baklawa"
      ],
      "s25": [
        "Gdzie mieszkać?",
        "Nad rzeką",
        "W lesie",
        "W dużym mieście",
        "Na wyspie"
      ],
      "s26": [
        "Ulubione stworzenie morskie?",
        "Żółw",
        "Wieloryb",
        "Ośmiornica",
        "Konik morski"
      ],
      "s27": [
        "Czym jechać?",
        "Rower",
        "Hulajnoga",
        "Balon",
        "Łódka"
      ],
      "s28": [
        "Ulubione zajęcie?",
        "Robienie na drutach",
        "Fotografia przyrody",
        "Ogrodnictwo",
        "Kaligrafia"
      ],
      "s29": [
        "Ulubiona zupa?",
        "Barszcz",
        "Rosół",
        "Zupa dyniowa",
        "Zupa z soczewicy"
      ],
      "s30": [
        "Zwierzę leśne?",
        "Jeż",
        "Wiewiórka",
        "Lis",
        "Sarna"
      ],
      "s31": [
        "Coś do pochrupania?",
        "Daktyle",
        "Migdały",
        "Pistacje",
        "Suszone morele"
      ],
      "s32": [
        "Co zabrać na wędrówkę?",
        "Namiot",
        "Termos",
        "Mapę",
        "Latarkę"
      ],
      "s33": [
        "Ulubiony deser?",
        "Budyń",
        "Sernik",
        "Naleśniki z miodem",
        "Sałatka owocowa"
      ],
      "s34": [
        "Co robić zimą?",
        "Lepić bałwana",
        "Zjeżdżać na sankach",
        "Herbata przy oknie",
        "Jeździć na nartach"
      ],
      "s35": [
        "Co robić latem?",
        "Pływać",
        "Zbierać jagody",
        "Pływać łódką",
        "Budować zamek z piasku"
      ],
      "s36": [
        "Czym malować?",
        "Akwarelami",
        "Kredkami",
        "Kredkami świecowymi",
        "Farbami na płótnie"
      ],
      "s37": [
        "Ulubione warzywo?",
        "Marchewka",
        "Pomidor",
        "Kukurydza",
        "Dynia"
      ],
      "s38": [
        "Co czyni dom przytulnym?",
        "Kominek",
        "Miękki koc",
        "Rośliny doniczkowe",
        "Półka z książkami"
      ],
      "s39": [
        "W co zagrać?",
        "Szachy",
        "Puzzle",
        "Gry planszowe",
        "Gry z piłką"
      ],
      "s40": [
        "Kto mieszka w gospodarstwie?",
        "Krowa",
        "Owieczka",
        "Kura",
        "Koziołek"
      ],
      "s41": [
        "Herbata z czym?",
        "Z miodem",
        "Z cytryną",
        "Z konfiturą",
        "Z miętą"
      ],
      "s42": [
        "Co jest nad morzem?",
        "Latarnia morska",
        "Muszle",
        "Żaglówka",
        "Mewy"
      ],
      "s43": [
        "Jak zacząć poranek?",
        "Od gimnastyki",
        "Od filiżanki herbaty",
        "Od spaceru",
        "Od książki"
      ],
      "s44": [
        "Ulubiona jagoda?",
        "Malina",
        "Borówka",
        "Wiśnia",
        "Jeżyna"
      ]
    },
    "who": [
      "Kto z nas częściej się spóźnia?",
      "Kto z nas szybciej godzi się po kłótni?",
      "Kto z nas lepiej gotuje?",
      "Kto z nas częściej się śmieje?",
      "Kto z nas dłużej się szykuje?",
      "Kto z nas częściej gubi klucze?",
      "Kto z nas lepiej pamięta ważne daty?",
      "Kto z nas bardziej lubi słodycze?",
      "Kto z nas szybciej zasypia?",
      "Kto z nas wcześniej wstaje?",
      "Kto z nas częściej mówi „tęsknię”?",
      "Kto z nas wybiera lepsze prezenty?",
      "Kto z nas częściej żartuje?",
      "Kto z nas lepiej prowadzi samochód?",
      "Kto z nas dłużej rozmawia przez telefon?",
      "Kto z nas bardziej lubi podróżować?",
      "Kto z nas łatwiej się obraża?",
      "Kto z nas szybciej wybacza?",
      "Kto z nas robi więcej zdjęć?",
      "Kto z nas lepiej radzi sobie z pieniędzmi?",
      "Kto z nas częściej kupuje niepotrzebne rzeczy?",
      "Kto z nas lepiej pociesza?",
      "Kto z nas zachowuje więcej spokoju w trudnych chwilach?",
      "Kto z nas wiecznie szuka telefonu?",
      "Kto z nas bardziej lubi przyjmować gości?",
      "Kto z nas częściej robi śniadanie?",
      "Kto z nas lepiej odnajduje drogę w nowym mieście?",
      "Kto z nas pisze dłuższe wiadomości?",
      "Kto z nas szybciej proponuje spacer?",
      "Kto z nas bardziej kocha zwierzęta?",
      "Kto z nas lepiej dochowuje tajemnic?",
      "Kto z nas dłużej wybiera danie z menu?",
      "Kto z nas bardziej martwi się o bliskich?",
      "Kto z nas częściej robi niespodzianki?",
      "Kto z nas lepiej dba o porządek?",
      "Kto z nas szybciej zauważa nową fryzurę?",
      "Kto z nas częściej wspomina zabawne historie?",
      "Kto z nas ma więcej cierpliwości?",
      "Kto z nas częściej mówi „dziękuję”?",
      "Kto z nas szybciej oferuje pomoc?",
      "Kto z nas lepiej liczy w pamięci?",
      "Kto z nas więcej czyta?",
      "Kto z nas szybciej pisze na klawiaturze?",
      "Kto z nas częściej dzwoni do rodziców?",
      "Kto z nas lepiej opowiada historie?",
      "Kto z nas ma staranniejsze pismo?",
      "Kto z nas bardziej lubi ostre jedzenie?",
      "Kto z nas częściej zapomina czegoś z domu?",
      "Kto z nas lepiej radzi sobie z elektroniką?",
      "Kto z nas bardziej lubi uczyć się nowych rzeczy?",
      "Kto z nas lepiej planuje?",
      "Kto z nas lepiej się targuje na targu?",
      "Kto z nas bardziej kocha przyrodę?",
      "Kto z nas szybciej je?",
      "Kto z nas pije więcej herbaty?",
      "Kto z nas lepiej dba o rośliny?",
      "Kto z nas lepiej zna geografię?",
      "Kto z nas lepiej gra w szachy?",
      "Kto z nas wybiera lepsze owoce na targu?",
      "Kto z nas częściej sprawdza prognozę pogody?",
      "Kto z nas bardziej boi się pająków?",
      "Kto z nas ma więcej odwagi?",
      "Kto z nas ma w sobie więcej ciekawości?",
      "Kto z nas szybciej rozwiązuje zagadki?",
      "Kto z nas lepiej rysuje?",
      "Kto z nas częściej pomaga sąsiadom?",
      "Kto z nas lepiej dogaduje się z dziećmi?",
      "Kto z nas bardziej lubi spacery?",
      "Kto z nas częściej czyta instrukcje?",
      "Kto z nas lepiej zapamiętuje imiona?",
      "Kto z nas szybciej uczy się słówek w obcym języku?",
      "Kto z nas lepiej piecze?",
      "Kto z nas daje lepsze rady?",
      "Kto z nas bardziej lubi chłodną pogodę?",
      "Kto z nas lepiej radzi sobie na wędrówce?",
      "Kto z nas częściej czyta wiadomości?",
      "Kto z nas częściej próbuje nowych potraw?",
      "Kto z nas szybciej pakuje walizkę?",
      "Kto z nas lepiej naprawia różne rzeczy?",
      "Kto z nas częściej rozmawia ze zwierzętami?",
      "Kto z nas częściej zmywa naczynia?",
      "Kto z nas lepiej zna historię?",
      "Kto z nas częściej odkłada sprawy na później?",
      "Kto z nas szybciej nawiązuje kontakt z nowymi ludźmi?",
      "Kto z nas bardziej dba o zdrowie?"
    ],
    "phrases": [
      "Uśmiecham się, kiedy ty…",
      "Mój ulubiony dzień z tobą to…",
      "Dziękuję ci za…",
      "Kiedy jest mi smutno, pomaga mi…",
      "Chcę, żebyśmy kiedyś razem…",
      "Najcieplejsze wspomnienie o nas to…",
      "Najlepiej na świecie umiesz…",
      "Czuję spokój, kiedy…",
      "Gdyby był przed nami cały wolny dzień, …",
      "Czuję dumę z ciebie, bo…",
      "Nasz idealny wieczór to…",
      "Nigdy nie zapomnę, jak ty…",
      "Lubię, kiedy mówisz…",
      "W przyszłym roku chcę, żebyśmy…",
      "Dla mnie jesteś jak…",
      "Najlepszy prezent od ciebie to…",
      "Tęsknię za tobą, kiedy…",
      "Najzabawniej jest z nami, kiedy…",
      "Od dawna chcę ci powiedzieć…",
      "Nasze miejsce to…",
      "Kiedy myślę o tobie, …",
      "Mój dzień jest lepszy, kiedy ty…",
      "Lubię nasz zwyczaj…",
      "Moje życzenie dla nas: …",
      "Najzabawniejsze, co nas spotkało, to…",
      "Czuję twoją troskę, kiedy…",
      "Poranek z tobą to…",
      "Jednym słowem my to…",
      "Chcę nauczyć się od ciebie…",
      "Dziękuję, że zawsze…",
      "W dzieciństwie moim ulubionym jedzeniem było…",
      "Mając jeden dzień w dowolnym kraju, chętnie…",
      "Najlepsza rada, jaką udało mi się usłyszeć, to…",
      "Zawsze się śmieję, kiedy…",
      "Moje ulubione miejsce w rodzinnym mieście to…",
      "W moim własnym małym sklepiku można by kupić…",
      "Danie, które wychodzi mi najlepiej, to…",
      "Marzenie z dzieciństwa, które wciąż pamiętam, to…",
      "Łatwo sprawić mi radość, jeśli…",
      "Najbardziej niezwykłe miejsce, w którym udało mi się być, to…",
      "Chcę się nauczyć…",
      "Mój idealny wolny dzień zaczyna się od…",
      "Gdyby można było mieć dowolne zwierzę, mój wybór to…",
      "W mojej rodzinie zawsze mówią, że…",
      "Nie mogę się przyzwyczaić do…",
      "Mój najbardziej przydatny nawyk to…",
      "Najlepsza książka w moim życiu to…",
      "Za dziesięć lat chcę…",
      "Mój wymarzony dom to…",
      "Najzabawniejsze, co przydarzyło mi się w dzieciństwie, to…",
      "Szczęście to dla mnie…",
      "Trudno mi zrezygnować z…",
      "Gdyby można było mieć supermoc, moja pozwalałaby…",
      "W ludziach najbardziej cenię…",
      "W wolny wieczór lubię…",
      "Mój ulubiony zapach to…",
      "Jedzenie, którego nigdy nie spróbuję, to…",
      "Jedyna rzecz, bez której nie wychodzę z domu, to…",
      "Chętnie pojadę do…, bo…",
      "Najlepszy prezent w moim życiu to…",
      "Mój najbardziej nietypowy nawyk to…",
      "Z dodatkową godziną każdego dnia mogę…",
      "Osoba, od której wiele się uczę, to…",
      "W trudny dzień pomaga mi…",
      "Najsmaczniejsza rzecz, jakiej udało mi się spróbować w podróży, to…",
      "Na jeden dzień chętnie zamienię swoją pracę na…",
      "Pora roku najbliższa mojemu sercu to…",
      "Moi przyjaciele mówią, że…",
      "Kiedyś chcę kogoś nauczyć…",
      "Mała radość mojego dnia to…"
    ],
    "truth": {
      "t01": [
        "Ośmiornica ma trzy serca.",
        true,
        "Dwa serca pompują krew przez skrzela, a trzecie — przez całe ciało."
      ],
      "t02": [
        "Wielki Mur Chiński widać gołym okiem z Księżyca.",
        false,
        "Nie widać: mur jest o wiele za wąski. Nawet z orbity bardzo trudno go dostrzec."
      ],
      "t03": [
        "Miód może przetrwać tysiące lat i się nie zepsuć.",
        true,
        "W starożytnych egipskich grobowcach znaleziono miód sprzed tysięcy lat, wciąż zachowany."
      ],
      "t04": [
        "Banany rosną na drzewach.",
        false,
        "Bananowiec to olbrzymia roślina zielna: jego „pień” tworzą ciasno zwinięte liście."
      ],
      "t05": [
        "Wenus to najgorętsza planeta Układu Słonecznego.",
        true,
        "Gęsta atmosfera rozgrzewa Wenus do około 460 °C — bardziej niż Merkurego."
      ],
      "t06": [
        "Nietoperze są ślepe.",
        false,
        "Nietoperze widzą, a w ciemności orientują się dodatkowo dzięki echolokacji."
      ],
      "t07": [
        "Wieloryb to ryba.",
        false,
        "Wieloryby to ssaki: oddychają powietrzem i karmią młode mlekiem."
      ],
      "t08": [
        "Sahara to największa pustynia świata.",
        false,
        "Największą pustynią jest Antarktyda. Sahara to największa gorąca pustynia."
      ],
      "t09": [
        "Żyrafa ma tyle samo kręgów szyjnych co człowiek.",
        true,
        "Oboje mają siedem kręgów szyjnych — u żyrafy są po prostu bardzo długie."
      ],
      "t10": [
        "Z punktu widzenia botaniki pomidor to jagoda.",
        true,
        "Botanicy zaliczają pomidor do jagód: to mięsisty owoc z nasionami w środku."
      ],
      "t11": [
        "Z punktu widzenia botaniki truskawka to jagoda.",
        false,
        "To owoc rzekomy: prawdziwe owoce to maleńkie „pestki” na zewnątrz."
      ],
      "t12": [
        "W kosmosie można usłyszeć wybuch.",
        false,
        "W kosmosie prawie nie ma powietrza, więc dźwięk nie ma jak się rozchodzić."
      ],
      "t13": [
        "Wysoko w górach woda wrze w niższej temperaturze.",
        true,
        "Ciśnienie powietrza jest tam niższe, więc woda wrze, zanim osiągnie 100 °C."
      ],
      "t14": [
        "Pingwiny żyją na biegunie północnym.",
        false,
        "Dzikie pingwiny żyją tylko na półkuli południowej, nie na dalekiej północy."
      ],
      "t15": [
        "Everest to najwyższa góra nad poziomem morza.",
        true,
        "Everest wznosi się na około 8849 metrów nad poziom morza."
      ],
      "t16": [
        "Ludzie wykorzystują tylko 10% mózgu.",
        false,
        "To mit: w ciągu dnia aktywna jest niemal każda część mózgu."
      ],
      "t17": [
        "Ludzkie serce bije około 100 000 razy na dobę.",
        true,
        "Przy około 70 uderzeniach na minutę daje to mniej więcej 100 000 uderzeń na dobę."
      ],
      "t18": [
        "Złota rybka ma pamięć trwającą tylko trzy sekundy.",
        false,
        "Doświadczenia pokazują, że złote rybki pamiętają to, czego się nauczyły, przez miesiące."
      ],
      "t19": [
        "Australia jest jednocześnie państwem i kontynentem.",
        true,
        "Australia to jedyne państwo, które zajmuje cały kontynent."
      ],
      "t20": [
        "Piorun nigdy nie uderza dwa razy w to samo miejsce.",
        false,
        "Uderza: w wysokie budynki pioruny trafiają wiele razy w roku."
      ],
      "t21": [
        "Przestraszony struś chowa głowę w piasek.",
        false,
        "To mit: przestraszony struś ucieka albo kładzie się płasko na ziemi, by się ukryć."
      ],
      "t22": [
        "Najmniejszy ptak świata to koliber.",
        true,
        "Koliberek hawański z Kuby waży około 2 gramów — mniej niż jakikolwiek inny ptak."
      ],
      "t23": [
        "Arbuz składa się w około 90% z wody.",
        true,
        "Arbuz to około 92% wody — dlatego tak dobrze orzeźwia."
      ],
      "t24": [
        "Pająk ma sześć nóg.",
        false,
        "Pająk ma osiem nóg. Owady mają sześć, a pająki nie są owadami."
      ],
      "t25": [
        "Księżyc świeci własnym światłem.",
        false,
        "Księżyc nie ma własnego światła: odbija światło Słońca."
      ],
      "t26": [
        "Słoń to największe zwierzę lądowe.",
        true,
        "Słoń afrykański może ważyć ponad 6 ton."
      ],
      "t27": [
        "Płetwal błękitny to największe zwierzę znane nauce.",
        true,
        "Płetwale błękitne mogą mieć ponad 30 metrów długości — więcej niż jakikolwiek znany dinozaur."
      ],
      "t28": [
        "Kameleon zmienia kolor tylko po to, by się zamaskować.",
        false,
        "Jego kolor zależy bardziej od nastroju, temperatury i sygnałów dla innych kameleonów."
      ],
      "t29": [
        "Telefon wynalazł Thomas Edison.",
        false,
        "Patent na telefon otrzymał Alexander Graham Bell w 1876 roku."
      ],
      "t30": [
        "Penicylinę odkrył Alexander Fleming.",
        true,
        "Fleming odkrył penicylinę w 1928 roku — pierwszy antybiotyk."
      ],
      "t31": [
        "Najwyższy wulkan Układu Słonecznego znajduje się na Marsie.",
        true,
        "Olympus Mons na Marsie ma około 22 km wysokości — prawie 2,5 raza więcej niż Everest."
      ],
      "t32": [
        "Krew w naszych żyłach jest niebieska.",
        false,
        "Krew jest zawsze czerwona; żyły tylko wyglądają na niebieskie przez to, jak światło przechodzi przez skórę."
      ],
      "t33": [
        "Atlantyk to największy ocean na Ziemi.",
        false,
        "Największy jest Pacyfik: jest większy niż cały ląd na Ziemi razem wzięty."
      ],
      "t34": [
        "Rosja to największy kraj świata pod względem powierzchni.",
        true,
        "Rosja zajmuje ponad 17 milionów kilometrów kwadratowych."
      ],
      "t35": [
        "Kanada ma najdłuższą linię brzegową na świecie.",
        true,
        "Wybrzeże Kanady ciągnie się na ponad 200 000 km — dłużej niż w jakimkolwiek innym kraju."
      ],
      "t36": [
        "Żołądek krowy ma cztery komory.",
        true,
        "Krowa ma jeden żołądek z czterema komorami — tak trawi trawę."
      ],
      "t37": [
        "Lew to największy kot na świecie.",
        false,
        "Największym kotem jest tygrys, zwłaszcza tygrys syberyjski."
      ],
      "t38": [
        "Ziemia jest planetą najbliższą Słońca.",
        false,
        "Najbliżej jest Merkury, potem Wenus; Ziemia to trzecia planeta."
      ],
      "t39": [
        "Światło słoneczne dociera do Ziemi w około 8 minut.",
        true,
        "Światło pokonuje 150 milionów km od Słońca w około 8 minut i 20 sekund."
      ],
      "t40": [
        "Delfiny śpią, wyłączając na zmianę połowę mózgu.",
        true,
        "Jedna połowa odpoczywa, a druga czuwa i pamięta o oddychaniu."
      ],
      "t41": [
        "Ziemniaki pochodzą z Irlandii.",
        false,
        "Ziemniaki pochodzą z Ameryki Południowej: uprawiano je w Andach tysiące lat temu."
      ],
      "t42": [
        "Czekoladę robi się z nasion kakaowca.",
        true,
        "Owoce kakaowca rosną prosto na pniu, a nasiona w ich wnętrzu stają się czekoladą."
      ],
      "t43": [
        "Rekin to ssak.",
        false,
        "Rekin to ryba: oddycha skrzelami. Ssakami morskimi są wieloryby i delfiny."
      ],
      "t44": [
        "Niektóre gatunki bambusa rosną prawie metr dziennie.",
        true,
        "Bambus należy do najszybciej rosnących roślin na Ziemi."
      ],
      "t45": [
        "Sowa potrafi obrócić głowę o pełne 360 stopni.",
        false,
        "Sowa obraca głowę o około 270 stopni — dużo, ale to nie pełny obrót."
      ],
      "t46": [
        "Diament i grafit z ołówka są zbudowane z tej samej substancji.",
        true,
        "Oba to czysty węgiel — atomy są po prostu inaczej ułożone."
      ],
      "t47": [
        "Wielbłąd magazynuje wodę w garbie.",
        false,
        "W garbie wielbłąd gromadzi tłuszcz, nie wodę — daje mu on energię w długiej drodze."
      ],
      "t48": [
        "Najmniejsza kość w ludzkim ciele znajduje się w uchu.",
        true,
        "Strzemiączko w uchu środkowym ma tylko około 3 milimetrów."
      ],
      "t49": [
        "Duże papugi mogą żyć ponad 50 lat.",
        true,
        "Zadbane ary i kakadu często żyją 50 lat lub dłużej."
      ],
      "t50": [
        "Bracia Wright odbyli pierwszy lot samolotem z silnikiem.",
        true,
        "Polecieli w 1903 roku; pierwszy lot trwał 12 sekund."
      ],
      "t51": [
        "Koło wynaleziono w średniowieczu.",
        false,
        "Koło ma ponad 5000 lat: używano go w Mezopotamii około 3500 roku p.n.e."
      ],
      "t52": [
        "Konik morski to ryba.",
        true,
        "Konik morski oddycha skrzelami i pływa za pomocą płetwy, jak inne ryby."
      ],
      "t53": [
        "Koliber potrafi latać do tyłu.",
        true,
        "Kolibry to jedyne ptaki, które naprawdę potrafią latać do tyłu."
      ],
      "t54": [
        "Wieża Eiffla latem staje się trochę wyższa.",
        true,
        "Ciepło rozszerza metal, a wieża rośnie o około 15 centymetrów."
      ],
      "t55": [
        "Skóra to największy narząd ludzkiego ciała.",
        true,
        "Skóra dorosłej osoby waży kilka kilogramów i chroni całe ciało."
      ],
      "t56": [
        "Czerwony kolor rozwściecza byka.",
        false,
        "Byk ledwo odróżnia czerwień: drażni go ruch, a nie kolor."
      ],
      "t57": [
        "Mucha domowa żyje tylko jeden dzień.",
        false,
        "Mucha domowa żyje około miesiąca. To dorosłe jętki żyją dzień lub dwa."
      ],
      "t58": [
        "Ananasy rosną na drzewach.",
        false,
        "Ananas rośnie na niskiej, liściastej roślinie, prosto z jej środka."
      ],
      "t59": [
        "Orzeszek ziemny to orzech.",
        false,
        "Orzeszek ziemny to roślina strączkowa, krewniak grochu i fasoli. Jego strąki dojrzewają pod ziemią."
      ],
      "t60": [
        "Biegun północny i południowy są równie zimne.",
        false,
        "Biegun południowy jest znacznie zimniejszy: leży na wysokim, lodowym kontynencie, a północny — na oceanie."
      ]
    },
    "hints": {
      "h01": [
        "Pingwin",
        "Jestem ptakiem, ale nie umiem latać",
        "Żyję tam, gdzie jest bardzo zimno",
        "Zawsze noszę frak",
        "Struś",
        "Foka",
        "Mewa"
      ],
      "h02": [
        "Słoń",
        "Jem prawie cały dzień",
        "Moje uszy wyglądają jak wielkie wachlarze",
        "Mam długą trąbę",
        "Nosorożec",
        "Hipopotam",
        "Żyrafa"
      ],
      "h03": [
        "Żyrafa",
        "Śpię bardzo mało, często na stojąco",
        "Jem liście z najwyższych drzew",
        "Mam najdłuższą szyję",
        "Zebra",
        "Wielbłąd",
        "Łoś"
      ],
      "h04": [
        "Wielbłąd",
        "Długo wytrzymuję bez wody",
        "Nazywają mnie okrętem pustyni",
        "Mam na grzbiecie jeden lub dwa garby",
        "Koń",
        "Osioł",
        "Lama"
      ],
      "h05": [
        "Pszczoła",
        "Umiem wskazać innym drogę do kwiatów",
        "Pracuję na łące od świtu do zmierzchu",
        "Robię miód",
        "Osa",
        "Mucha",
        "Motyl"
      ],
      "h06": [
        "Żółw",
        "Mogę żyć ponad sto lat",
        "Nigdy się nie spieszę",
        "Noszę dom na grzbiecie",
        "Ślimak",
        "Jaszczurka",
        "Jeż"
      ],
      "h07": [
        "Kangur",
        "Ogon pomaga mi utrzymać równowagę",
        "Mieszkam w Australii",
        "Noszę młode w torbie",
        "Koala",
        "Zając",
        "Wiewiórka"
      ],
      "h08": [
        "Sowa",
        "Potrafię obrócić głowę prawie do tyłu",
        "Poluję nocą",
        "Pohukuję w ciemnym lesie",
        "Wrona",
        "Orzeł",
        "Gołąb"
      ],
      "h09": [
        "Delfin",
        "Oddycham powietrzem, choć żyję w morzu",
        "Pomagam ludziom i rozmawiam gwizdami",
        "Lubię skakać nad falami",
        "Rekin",
        "Wieloryb",
        "Foka"
      ],
      "h10": [
        "Wiewiórka",
        "Chowam jedzenie i czasem zapominam gdzie",
        "Mieszkam w dziupli",
        "Gryzę orzechy i szyszki",
        "Jeż",
        "Zając",
        "Mysz"
      ],
      "h11": [
        "Pająk",
        "Nie jestem owadem, choć wielu tak myśli",
        "Mam osiem nóg",
        "Tkam sieć",
        "Mrówka",
        "Chrząszcz",
        "Komar"
      ],
      "h12": [
        "Kot",
        "Widzę w ciemności lepiej niż ludzie",
        "Lubię ciepły parapet",
        "Mruczę i łapię myszy",
        "Królik",
        "Chomik",
        "Papuga"
      ],
      "h13": [
        "Arbuz",
        "Naukowcy nazywają mnie jagodą",
        "Czekają na mnie pod koniec lata",
        "Zielony z zewnątrz, czerwony w środku",
        "Melon",
        "Dynia",
        "Ananas"
      ],
      "h14": [
        "Chleb",
        "Pieką mnie w prawie każdym kraju",
        "Kroją mnie na kromki",
        "Bywam pszenny albo żytni, ze skórką",
        "Naleśnik",
        "Placek",
        "Ciastko"
      ],
      "h15": [
        "Miód",
        "Mogę przetrwać tysiące lat",
        "Dodaje się mnie do ciepłej herbaty przy przeziębieniu",
        "Robią mnie pszczoły",
        "Dżem",
        "Cukier",
        "Mleko"
      ],
      "h16": [
        "Cytryna",
        "Mam mnóstwo witaminy C",
        "Dodaje się mnie do herbaty",
        "Jestem żółta i bardzo kwaśna",
        "Pomarańcza",
        "Grejpfrut",
        "Limonka"
      ],
      "h17": [
        "Marchewka",
        "Rosnę pod ziemią, widać tylko natkę",
        "Mówią, że jestem dobra na wzrok",
        "Jestem pomarańczowa, a króliki bardzo mnie lubią",
        "Burak",
        "Rzodkiewka",
        "Ziemniak"
      ],
      "h18": [
        "Jabłko",
        "Mam odmiany letnie i zimowe",
        "Robi się ze mnie ciasta i sok",
        "Rosnę na drzewie, czerwone lub zielone",
        "Gruszka",
        "Brzoskwinia",
        "Śliwka"
      ],
      "h19": [
        "Banan",
        "Rosnę w kiściach na wysokiej roślinie",
        "Małpy bardzo mnie lubią",
        "Jestem żółty i trzeba mnie obrać",
        "Mango",
        "Kiwi",
        "Ananas"
      ],
      "h20": [
        "Herbata",
        "W Chinach piją mnie od tysiącleci",
        "Bywam czarna, zielona albo ziołowa",
        "Parzy się mnie w czajniczku",
        "Kawa",
        "Kakao",
        "Sok"
      ],
      "h21": [
        "Jajko",
        "Bez mnie trudno upiec ciasto",
        "Robi się ze mnie omlet",
        "Znosi mnie kura",
        "Ser",
        "Orzech",
        "Ziemniak"
      ],
      "h22": [
        "Parasol",
        "Prawie cały czas jestem złożony",
        "Bierzesz mnie, gdy niebo szarzeje",
        "Chronię przed deszczem",
        "Płaszcz przeciwdeszczowy",
        "Kapelusz",
        "Kalosze"
      ],
      "h23": [
        "Zegar",
        "Mogę działać na piasek albo na słońce",
        "Wiszę na ścianach i stoję na wieżach",
        "Pokazuję czas wskazówkami",
        "Kompas",
        "Kalendarz",
        "Termometr"
      ],
      "h24": [
        "Klucz",
        "Beze mnie drzwi cię nie wpuszczą",
        "Często noszą mnie na kółku",
        "Otwieram zamek",
        "Nożyczki",
        "Śrubokręt",
        "Spinacz"
      ],
      "h25": [
        "Świeca",
        "Im dłużej pracuję, tym jestem mniejsza",
        "Zapala się mnie, gdy brakuje prądu",
        "Jestem z wosku i mam knot",
        "Latarka",
        "Lampa",
        "Zapałki"
      ],
      "h26": [
        "Nożyczki",
        "Mam dwa uchwyty i dwa ostre końce",
        "Wycinam kształty z papieru",
        "Tnę materiał i papier",
        "Nóż",
        "Igła",
        "Linijka"
      ],
      "h27": [
        "Szczoteczka do zębów",
        "Mam mnóstwo włosków",
        "Wymienia się mnie co trzy miesiące",
        "Czyszczę zęby rano i wieczorem",
        "Mydło",
        "Ręcznik",
        "Gąbka"
      ],
      "h28": [
        "Lodówka",
        "We mnie zawsze jest zima",
        "Gdy mnie otwierasz, zapala się światło",
        "Trzymam jedzenie w chłodzie",
        "Kuchenka",
        "Piekarnik",
        "Szafka"
      ],
      "h29": [
        "Rower",
        "Jeżdżę bez paliwa i prądu",
        "Mam kierownicę, dzwonek i łańcuch",
        "Mam dwa koła i pedały",
        "Hulajnoga",
        "Motocykl",
        "Deskorolka"
      ],
      "h30": [
        "Samolot",
        "Mam skrzydła, ale nie jestem ptakiem",
        "Czekają na mnie na lotnisku",
        "Latam nad chmurami z pasażerami",
        "Helikopter",
        "Rakieta",
        "Balon"
      ],
      "h31": [
        "Pociąg",
        "Jeżdżę tylko po własnej drodze",
        "Mam wiele wagonów",
        "Jeżdżę po szynach od stacji do stacji",
        "Tramwaj",
        "Autobus",
        "Metro"
      ],
      "h32": [
        "Most",
        "Budują mnie z kamienia, drewna lub stali",
        "Statki mogą pode mną przepływać",
        "Łączę dwa brzegi rzeki",
        "Tunel",
        "Droga",
        "Tama"
      ],
      "h33": [
        "Ołówek",
        "W środku mam grafit",
        "Temperuje się mnie, gdy się stępię",
        "Piszę i rysuję; gumka ściera moje ślady",
        "Długopis",
        "Kreda",
        "Flamaster"
      ],
      "h34": [
        "Książka",
        "Milczę, ale wiele uczę",
        "Mam okładkę i strony",
        "Czyta się mnie i wypożycza z bibliotek",
        "Czasopismo",
        "Gazeta",
        "Zeszyt"
      ],
      "h35": [
        "Walizka",
        "Dużo podróżuję, ale zawsze w czyjejś ręce",
        "Pakuje się mnie przed podróżą",
        "Mam rączkę i kółka, mieszczę ubrania",
        "Plecak",
        "Torba",
        "Pudełko"
      ],
      "h36": [
        "Biblioteka",
        "Tu proszą, by mówić cicho",
        "Tu dostaje się kartę czytelnika",
        "Tysiące książek do wypożyczenia",
        "Szkoła",
        "Księgarnia",
        "Archiwum"
      ],
      "h37": [
        "Lotnisko",
        "Tu jest kontrola paszportowa",
        "Tu ogłaszają wejście na pokład",
        "Stąd startują samoloty",
        "Dworzec kolejowy",
        "Port",
        "Dworzec autobusowy"
      ],
      "h38": [
        "Pustynia",
        "W dzień gorąco, ale noce bywają bardzo zimne",
        "Można tu znaleźć oazy",
        "Dużo piasku i bardzo mało wody",
        "Step",
        "Sawanna",
        "Plaża"
      ],
      "h39": [
        "Wulkan",
        "Mogę spać setki lat",
        "Z mojego szczytu unosi się dym",
        "Wybucham lawą",
        "Góra",
        "Gejzer",
        "Wyspa"
      ],
      "h40": [
        "Tęcza",
        "Widzisz mnie tylko, gdy słońce masz za plecami",
        "Często pojawiam się po deszczu",
        "Siedem kolorów łukiem na niebie",
        "Błyskawica",
        "Chmura",
        "Zorza polarna"
      ],
      "h41": [
        "Księżyc",
        "Zawsze pokazuję Ziemi tę samą stronę",
        "Bywam w pełni albo cienkim sierpem",
        "Świecę na nocnym niebie",
        "Słońce",
        "Gwiazda",
        "Kometa"
      ],
      "h42": [
        "Śnieg",
        "Każdy mój płatek jest wyjątkowy",
        "Buduje się ze mnie forty",
        "Biały i zimny, padam zimą",
        "Deszcz",
        "Grad",
        "Szron"
      ],
      "h43": [
        "Rzeka",
        "Mam źródło i ujście",
        "Pływają po mnie łodzie",
        "Płynę z gór do morza",
        "Jezioro",
        "Morze",
        "Strumień"
      ],
      "h44": [
        "Kaktus",
        "Długo mogę żyć bez wody",
        "Rosnę na pustyniach i parapetach",
        "Jestem pokryty kolcami",
        "Aloes",
        "Palma",
        "Stokrotka"
      ],
      "h45": [
        "Słonecznik",
        "Z moich nasion robi się olej",
        "Obracam się za słońcem",
        "Duży żółty kwiat pełen pestek",
        "Stokrotka",
        "Tulipan",
        "Mniszek"
      ],
      "h46": [
        "Dąb",
        "Mogę żyć ponad tysiąc lat",
        "Uchodzę za symbol siły",
        "Rosną na mnie żołędzie",
        "Brzoza",
        "Sosna",
        "Klon"
      ],
      "h47": [
        "Wyspa",
        "Może się na mnie zmieścić całe państwo",
        "Dotrzesz do mnie łodzią lub samolotem",
        "Ze wszystkich stron otacza mnie woda",
        "Półwysep",
        "Rafa",
        "Przylądek"
      ],
      "h48": [
        "Wodospad",
        "Słychać mnie z daleka",
        "Najwyższy z nas jest w Wenezueli",
        "Tu rzeka spada z urwiska",
        "Fontanna",
        "Gejzer",
        "Źródło"
      ],
      "h49": [
        "Lekarz",
        "Uczę się wiele lat, zanim zacznę pracę",
        "Noszę biały fartuch",
        "Leczę chorych ludzi",
        "Pielęgniarz",
        "Farmaceuta",
        "Weterynarz"
      ],
      "h50": [
        "Strażak",
        "Dyżuruję dzień i noc",
        "Pracuję z wodą i drabinami",
        "Gaszę pożary",
        "Policjant",
        "Ratownik",
        "Budowlaniec"
      ],
      "h51": [
        "Kucharz",
        "Próbuję wszystkiego, co przygotowuję",
        "Pracuję przy gorącej kuchence",
        "Gotuję w restauracji",
        "Piekarz",
        "Kelner",
        "Cukiernik"
      ],
      "h52": [
        "Nauczyciel",
        "Wieczorami sprawdzam zeszyty",
        "Stoję przy tablicy",
        "Uczę dzieci w szkole",
        "Dyrektor szkoły",
        "Bibliotekarz",
        "Przedszkolanka"
      ],
      "h53": [
        "Pilot",
        "Moim miejscem pracy jest kokpit",
        "Mówię do pasażerów przez głośnik",
        "Prowadzę samolot",
        "Kapitan",
        "Kierowca",
        "Astronauta"
      ],
      "h54": [
        "Listonosz",
        "Znam każdy adres w mojej okolicy",
        "Noszę dużą torbę",
        "Doręczam listy i paczki",
        "Kurier",
        "Taksówkarz",
        "Sprzedawca"
      ],
      "h55": [
        "Ogrodnik",
        "Wiem, kiedy co sadzić",
        "Moje narzędzia to konewka i sekator",
        "Dbam o kwiaty i drzewa",
        "Rolnik",
        "Leśnik",
        "Florysta"
      ],
      "h56": [
        "Fotograf",
        "Łapię chwile",
        "Proszę wszystkich, by się nie ruszali",
        "Pracuję z aparatem i zdjęciami",
        "Malarz",
        "Dziennikarz",
        "Operator kamery"
      ],
      "h57": [
        "Rybak",
        "Wstaję przed świtem i długo czekam",
        "Potrzebuję wędki i cierpliwości",
        "Łowię ryby",
        "Rolnik",
        "Marynarz",
        "Pasterz"
      ],
      "h58": [
        "Astronauta",
        "Długo trenuję na Ziemi",
        "Noszę skafander",
        "Lecę w kosmos",
        "Pilot",
        "Astronom",
        "Inżynier"
      ],
      "h59": [
        "Architekt",
        "Moją pracę widać w całym mieście",
        "Rysuję plany",
        "Projektuję domy",
        "Budowlaniec",
        "Projektant",
        "Inżynier"
      ],
      "h60": [
        "Dentysta",
        "Wiele osób boi się mojego fotela",
        "Pracuję wiertłem",
        "Leczę zęby",
        "Chirurg",
        "Okulista",
        "Pediatra"
      ]
    },
    "dreams": {
      "d01": [
        "Gdzie chcesz mieszkać za dziesięć lat?",
        "Nad morzem",
        "W górach",
        "W dużym mieście",
        "W cichej wsi"
      ],
      "d02": [
        "Jaki dom chcesz kiedyś mieć?",
        "Przytulne mieszkanie",
        "Dom z ogrodem",
        "Domek nad jeziorem",
        "Stary dom z historią"
      ],
      "d03": [
        "Co chcesz uprawiać w ogrodzie?",
        "Jabłonie",
        "Róże",
        "Warzywa i zioła",
        "Truskawki"
      ],
      "d04": [
        "Jakie zwierzę chcesz mieć?",
        "Kota",
        "Papugę",
        "Rybki w akwarium",
        "Żółwia"
      ],
      "d05": [
        "Dokąd chcesz pojechać najpierw?",
        "Japonia",
        "Maroko",
        "Islandia",
        "Nowa Zelandia"
      ],
      "d06": [
        "Jak chcesz podróżować?",
        "Pociągiem",
        "Samochodem",
        "Samolotem",
        "Statkiem"
      ],
      "d07": [
        "Jakiego języka chcesz się nauczyć?",
        "Arabskiego",
        "Japońskiego",
        "Hiszpańskiego",
        "Chińskiego"
      ],
      "d08": [
        "Czego chcesz się nauczyć?",
        "Rysować",
        "Szyć",
        "Pływać",
        "Programować"
      ],
      "d09": [
        "Jakie danie chcesz opanować?",
        "Pilaw",
        "Domowy chleb",
        "Sushi",
        "Baklawa"
      ],
      "d10": [
        "Jak chcesz spędzać weekendy?",
        "Na łonie natury",
        "W domu z książką",
        "U rodziny",
        "W nowym mieście"
      ],
      "d11": [
        "Jaki byłby idealny weekendowy poranek?",
        "Wczesny spacer",
        "Spokojne śniadanie",
        "Ćwiczenia na świeżym powietrzu",
        "Herbata na balkonie"
      ],
      "d12": [
        "Na co chcesz oszczędzać?",
        "Na własny dom",
        "Na dużą podróż",
        "Na samochód",
        "Na studia"
      ],
      "d13": [
        "Jaką pracę chcesz wykonywać?",
        "Własna firma",
        "Praca w dużej firmie",
        "Praca z domu",
        "Pomaganie ludziom"
      ],
      "d14": [
        "Jak chcesz pomagać innym?",
        "Wolontariat",
        "Pomoc zwierzętom",
        "Uczenie dzieci",
        "Sadzenie drzew"
      ],
      "d15": [
        "Jaką rodzinną tradycję chcesz mieć?",
        "Wspólny niedzielny obiad",
        "Wieczory z grami planszowymi",
        "Weekendowe spacery",
        "Rodzinny album zdjęć"
      ],
      "d16": [
        "Jaką kuchnię chcesz mieć?",
        "Dużą, rodzinną",
        "Jasną i przytulną",
        "Z widokiem na ogród",
        "Małą, ale praktyczną"
      ],
      "d17": [
        "Co chcesz zobaczyć na własne oczy?",
        "Zorzę polarną",
        "Piramidy w Gizie",
        "Wodospad Wiktorii",
        "Himalaje"
      ],
      "d18": [
        "Co chcesz robić wieczorami?",
        "Czytać",
        "Gotować coś nowego",
        "Uczyć się języków",
        "Spacerować po parku"
      ],
      "d19": [
        "Jakie hobby chcesz zacząć?",
        "Fotografia",
        "Ceramika",
        "Haft",
        "Ogrodnictwo"
      ],
      "d20": [
        "Dokąd chcesz wyjechać na weekend?",
        "Do lasu",
        "Nad jezioro",
        "Do pobliskiego miasta",
        "W góry"
      ],
      "d21": [
        "Jak wyglądałoby twoje idealne miejsce pracy?",
        "Przy oknie",
        "Z regałami na książki",
        "Pełne zielonych roślin",
        "Prawie puste"
      ],
      "d22": [
        "Co chcesz studiować w przyszłości?",
        "Medycynę",
        "Historię",
        "Ekonomię",
        "Projektowanie"
      ],
      "d23": [
        "Jakie drzewo chcesz posadzić?",
        "Dąb",
        "Jabłoń",
        "Drzewo oliwne",
        "Palmę daktylową"
      ],
      "d24": [
        "Co chcesz ugotować dla gości?",
        "Domowe ciasto",
        "Duży pilaw",
        "Rodzinną zupę",
        "Świeże sałatki"
      ],
      "d25": [
        "Jakie miasto chcesz odwiedzić?",
        "Stambuł",
        "Paryż",
        "Tokio",
        "Kair"
      ],
      "d26": [
        "Jak chcesz spędzić lato?",
        "Nad morzem",
        "W górach",
        "Na działce",
        "Podróżując po kraju"
      ],
      "d27": [
        "Jakiego ptaka chcesz mieć?",
        "Kanarka",
        "Papużkę falistą",
        "Gołębie",
        "Zeberki"
      ],
      "d28": [
        "Jaki sport chcesz wypróbować?",
        "Pływanie",
        "Jazdę konną",
        "Łucznictwo",
        "Wspinaczkę"
      ],
      "d29": [
        "Jakie książki chcesz kolekcjonować?",
        "Encyklopedie",
        "Klasykę",
        "Książki podróżnicze",
        "Książki kucharskie"
      ],
      "d30": [
        "Co chcesz zrobić własnymi rękami?",
        "Meble",
        "Własne naczynia",
        "Dziergany koc",
        "Budkę dla ptaków"
      ],
      "d31": [
        "Gdzie chcesz urządzić piknik?",
        "Nad rzeką",
        "W ogrodzie",
        "Na leśnej polanie",
        "W górach"
      ],
      "d32": [
        "Czym chcesz kiedyś jeździć?",
        "Autem elektrycznym",
        "Rowerem",
        "Dużym rodzinnym autem",
        "Bez samochodu"
      ],
      "d33": [
        "Co chcesz robić na emeryturze?",
        "Dbać o ogród",
        "Podróżować",
        "Spędzać czas z wnukami",
        "Uczyć się nowych rzeczy"
      ],
      "d34": [
        "Jaki dobry uczynek chcesz zrobić?",
        "Zbudować studnię",
        "Pomóc schronisku dla kotów",
        "Zebrać książki dla szkoły",
        "Posadzić szpaler drzew"
      ],
      "d35": [
        "Co chcesz zjeść na weekendowe śniadanie?",
        "Naleśniki",
        "Omlet",
        "Owsiankę z owocami",
        "Placuszki z twarogu"
      ],
      "d36": [
        "Gdzie chcesz przyjmować gości?",
        "W kuchni",
        "W salonie",
        "Na tarasie",
        "W ogrodzie"
      ],
      "d37": [
        "Jaki cud natury chcesz zobaczyć?",
        "Wielki Kanion",
        "Wodospad Niagara",
        "Jezioro Bajkał",
        "Saharę"
      ],
      "d38": [
        "Jakiej domowej umiejętności chcesz się nauczyć?",
        "Drobnych napraw",
        "Szycia",
        "Pieczenia chleba",
        "Dbania o ogród"
      ],
      "d39": [
        "Iloma językami chcesz mówić?",
        "Dwoma",
        "Trzema",
        "Pięcioma",
        "Jak najwięcej"
      ],
      "d40": [
        "Jaki kolor ścian chcesz mieć w domu?",
        "Biały",
        "Beżowy",
        "Jasnozielony",
        "Jasnoniebieski"
      ],
      "d41": [
        "Jaką rybkę chcesz mieć w akwarium?",
        "Złotą rybkę",
        "Gupiki",
        "Sumika",
        "Skalara"
      ],
      "d42": [
        "Jaką podróż chcesz podarować rodzicom?",
        "Wypoczynek nad morzem",
        "Zwiedzanie miasta",
        "Wyjazd w góry",
        "Podróż pociągiem"
      ],
      "d43": [
        "Co chcesz robić w wolnym czasie?",
        "Rysować",
        "Czytać",
        "Uprawiać sport",
        "Robić rękodzieło"
      ],
      "d44": [
        "W jakiej porze roku chcesz podróżować?",
        "Wiosną",
        "Latem",
        "Jesienią",
        "Zimą"
      ],
      "d45": [
        "Co chcesz przygotować na zimę?",
        "Dżem",
        "Ogórki kiszone",
        "Suszone owoce",
        "Kompot"
      ],
      "d46": [
        "Jaki inny zawód chcesz wypróbować?",
        "Kucharz",
        "Programista",
        "Tłumacz",
        "Stolarz"
      ],
      "d47": [
        "Jaki kraj chcesz poznać?",
        "Malezja",
        "Włochy",
        "Kanada",
        "Indonezja"
      ],
      "d48": [
        "Co chcesz mieć na podwórku?",
        "Małą fontannę",
        "Grządki warzywne",
        "Altanę",
        "Huśtawkę"
      ],
      "d49": [
        "Jak chcesz świętować sukcesy?",
        "Rodzinną kolacją",
        "Wypadem na łono natury",
        "Nową książką",
        "Dobrym uczynkiem dla innych"
      ],
      "d50": [
        "Co chcesz przekazać dzieciom?",
        "Miłość do książek",
        "Umiejętność gotowania",
        "Język ojczysty",
        "Troskę o przyrodę"
      ]
    }
  },
  "uk": {
    "text": {
      "homeLink": "Ігри для двох",
      "eyebrow": "GLOWLETTER · ІГРИ ДЛЯ ДВОХ",
      "title": "Грайте разом",
      "close": "Закрити",
      "lead": "Надішліть гру тому, хто вам дорогий. Грати за посиланням можна безкоштовно і без входу.",
      "quizTitle": "Наскільки добре ти мене знаєш?",
      "quizNote": "Дайте відповіді на запитання про себе, а близька людина спробує вгадати. Результат прийде вам.",
      "create": "Створити тест",
      "soon": "Незабаром",
      "soonTitle": "Готуємо наступні ігри",
      "duel": "Дуель «Хто швидше»",
      "loves": "Що ми любимо",
      "cards": "Картки для половинки",
      "who": "Хто з нас?",
      "phrase": "Закінчи фразу",
      "myQuizzes": "Мої тести",
      "noQuizzes": "Тестів поки немає. Створіть перший — це кілька хвилин.",
      "forWhom": "Для: {name}",
      "noRecipient": "Тест",
      "resultsCount": "Результатів: {count}",
      "newResults": "Нове: {count}",
      "noResults": "Поки ніхто не пройшов тест.",
      "anonymous": "Без імені",
      "results": "Результати",
      "copyLink": "Скопіювати посилання",
      "share": "Надіслати",
      "deleteQuiz": "Видалити тест",
      "deleteConfirm": "Видалити тест і його результати? Посилання перестане працювати.",
      "deleted": "Тест видалено",
      "linkCopied": "Посилання скопійовано",
      "back": "Назад",
      "next": "Далі",
      "stepNames": "Крок 1 з 2 · Імена",
      "yourName": "Ваше ім’я",
      "yourNamePlaceholder": "Як вас звати",
      "recipient": "Для кого · необов’язково",
      "recipientPlaceholder": "Ім’я близької людини",
      "nameRequired": "Введіть своє ім’я.",
      "forbiddenName": "Введіть звичайне ім’я.",
      "stepAnswers": "Крок 2 з 2 · Ваші відповіді",
      "answersLead": "Позначте, що про вас правда. Будь-яке запитання можна замінити.",
      "swap": "Інше запитання",
      "progress": "Позначено {done} з {total}",
      "answerAll": "Позначте відповідь у кожному запитанні.",
      "finish": "Отримати посилання",
      "creating": "Створюю тест…",
      "createdTitle": "Тест готовий!",
      "createdLead": "Надішліть посилання. Коли людина відповість, результат з’явиться в «Моїх тестах».",
      "shareText": "{name} запрошує тебе в гру «Наскільки добре ти мене знаєш?»",
      "signInTitle": "Потрібен вхід в акаунт",
      "signInNote": "Тест зберігається у вашому акаунті, щоб результати прийшли саме вам.",
      "signIn": "Увійти",
      "premiumNote": "Створювати ігри можна з повним доступом. Грати за посиланням — безкоштовно для всіх.",
      "failed": "Не вдалося. Перевірте зв’язок і спробуйте ще раз.",
      "rateLimited": "Забагато спроб. Спробуйте пізніше.",
      "playEyebrow": "ГРА ДЛЯ ДВОХ",
      "playInvite": "{name} запрошує вас у гру",
      "playLead": "Запитань: {count}. Вгадайте відповіді — наприкінці побачите, скільки збіглося.",
      "playName": "Ваше ім’я · необов’язково",
      "playNamePlaceholder": "Щоб вас упізнали",
      "start": "Почати",
      "playLoading": "Завантажую гру…",
      "playMissing": "Гра недоступна: посилання видалили або його строк закінчився.",
      "playOffline": "Для гри потрібен інтернет.",
      "retry": "Повторити",
      "questionOf": "Запитання {n} з {total}",
      "asks": "{name} запитує",
      "counting": "Рахую збіги…",
      "scoreOf": "{score} з {total}",
      "tierAll": "Ідеально! Ви знаєте одне одного найкраще",
      "tierHigh": "Ви дуже добре знаєте одне одного",
      "tierMid": "Непогано! Є що дізнатися одне про одного",
      "tierLow": "Попереду багато приємних відкриттів",
      "sentTo": "{name} побачить ваш результат",
      "review": "Ваші відповіді",
      "rightAnswer": "Правильна відповідь",
      "makeOwn": "Створити свій тест",
      "home": "На головну",
      "resultToast": "{name}: {score} з {total} у тесті «Наскільки добре ти мене знаєш?»",
      "ownerAnswers": "Відповіді автора",
      "playerAnswers": "Відповіді: {name}",
      "paywallTitle": "Ігри, розваги<br><em>і листи</em>",
      "groupGames": "Ігри",
      "groupFun": "Розваги",
      "groupLetters": "Листи",
      "featQuiz": "«Наскільки добре ти мене знаєш?» — результат приходить вам",
      "featGamesSoon": "Дуель «Хто швидше», «Що ми любимо», картки з ведмедиками",
      "featFunSoon": "«Хто з нас?» і «Закінчи фразу» з «Книгою пари»",
      "featCollection": "Уся колекція листів і віршів 15 мовами",
      "featMoments": "Моменти, нагадування і QR-лист, що відкриється в потрібний день",
      "featAudio": "Своє аудіо в листі та відповідь отримувача",
      "groupTalk": "Друзі та дзвінки",
      "featCall": "Дзвінки друзям: голос, гучний зв’язок і живі реакції",
      "ynTitle": "Так чи ні",
      "ynNote": "Жива гра для двох: 5 секунд на кожну картку. Хто встигне відповісти — побачить відповідь партнера.",
      "ynCreate": "Створити кімнату",
      "ynWaiting": "Чекаємо, коли {name} відкриє посилання…",
      "ynWaitingAny": "Чекаємо партнера…",
      "ynShareText": "{name} кличе тебе в живу гру «Так чи ні»",
      "ynPartnerHere": "{name} уже в грі!",
      "ynStart": "Почати гру",
      "ynWaitHost": "{name} зараз почне гру",
      "ynYes": "Так",
      "ynNo": "Ні",
      "ynMissed": "Не встигли — картка закрита",
      "ynMatch": "Збіглися!",
      "ynRound": "Картка {n} з {total}",
      "ynAnswered": "Відповідь прийнято, чекаємо партнера…",
      "ynFinal": "Збіглося {score} з {total}",
      "ynFinalHigh": "Ви відчуваєте одне одного з півслова",
      "ynFinalMid": "Такі різні — і такі близькі",
      "ynAgain": "Зіграти ще раз",
      "ynLeft": "Партнер від’єднався. Чекаємо повернення…",
      "ynYou": "Ви",
      "ynOffline": "Не вдається під’єднатися до гри. Перевірте інтернет і відкрийте посилання знову.",
      "ynJoin": "Увійти в гру",
      "ynJoinLead": "{name} чекає на вас. На кожну відповідь — 5 секунд!",
      "ynStepNames": "Ваше ім’я та ім’я партнера",
      "ynRoomReady": "Кімната готова — надішліть посилання",
      "ynStayHere": "Не закривайте цей екран: гра почнеться, коли партнер відкриє посилання.",
      "featYesNo": "Жива гра «Так чи ні» — 5 секунд на відповідь",
      "ynPartnerMissed": "Відповіді немає — час вийшов",
      "lvTitle": "Що ми любимо",
      "lvNote": "Жива гра для двох: 4 картинки, 10 секунд, щоб обрати, що ближче. Можна обрати те саме!",
      "lvShareText": "{name} кличе тебе в живу гру «Що ми любимо»",
      "lvJoinLead": "{name} чекає на вас. Обирайте картинку, яка вам ближча!",
      "lvRound": "Тема {n} з {total}",
      "lvPick": "Оберіть, що вам ближче",
      "lvBoth": "Ви обоє обрали: {item}",
      "lvCommon": "Ви обоє любите",
      "lvDiff": "Різні смаки — тим цікавіше!",
      "lvFinalHigh": "У вас так багато спільного!",
      "lvFinalMid": "Ви такі різні — і цим доповнюєте одне одного",
      "featLoves": "Жива гра «Що ми любимо» — 4 картинки, обирайте разом",
      "featGamesSoon2": "Дуель «Хто швидше» і картки з ведмедиками",
      "mcTitle": "Картки з ведмедиками",
      "mcNote": "Жива гра на пам’ять для двох: по черзі відкривайте по дві картки й шукайте пари. Три рівні — від 8 до 16 карток.",
      "mcShareText": "{name} кличе тебе в живу гру «Картки з ведмедиками»",
      "mcJoinLead": "{name} чекає на вас. Шукайте пари по черзі!",
      "mcLevel": "Рівень {n} з {total}",
      "mcTurnYou": "Ваш хід — відкрийте дві картки",
      "mcTurnThem": "Ходить {name}",
      "mcPairs": "Знайдено пар: {found} з {total}",
      "mcLevelDone": "Усі пари знайдено!",
      "mcTimeUp": "Час рівня вийшов",
      "mcNext": "Далі — рівень {n}",
      "mcFinal": "Знайдено пар: {found} з {total}",
      "mcFinalHigh": "Чудова команда!",
      "mcFinalMid": "Гарна гра — зіграймо ще!",
      "featCards": "Жива гра «Картки з ведмедиками» — шукайте пари разом",
      "featGamesSoon3": "Дуель «Хто швидше»",
      "duTitle": "Хто швидше",
      "duNote": "Жива дуель: одне слово й чотири картинки. Першими торкніться потрібної — помилка коштує раунду.",
      "duShareText": "{name} викликає тебе на живу дуель «Хто швидше»",
      "duJoinLead": "{name} чекає на вас. Знайдіть потрібну картинку швидше!",
      "duRound": "Раунд {n} з {total}",
      "duFind": "Знайдіть: {item}",
      "duYouWon": "Ви були швидші!",
      "duTheyWon": "Швидше: {name}",
      "duWrong": "Не та картинка — раунд програно",
      "duNobody": "Ніхто не встиг",
      "duScore": "Ви {you} : {them} {name}",
      "duFinalWin": "Перемога! Сьогодні у вас пильне око.",
      "duFinalLose": "Цього разу перемога за {name} — реванш?",
      "duFinalDraw": "Нічия — ви на рівних!",
      "duSeconds": "{s} с",
      "featDuel": "Жива дуель «Хто швидше» — знайдіть картинку першими",
      "whoTitle": "Хто з нас?",
      "whoNote": "Жива гра вдвох: одне запитання — торкніться «Я» або імені іншої людини. Дізнайтеся, чи збігаються ваші думки.",
      "whoShareText": "{name} кличе тебе в живу гру «Хто з нас?»",
      "whoJoinLead": "{name} чекає на вас. Відповідайте чесно — потім порівняйте!",
      "whoRound": "Запитання {n} з {total}",
      "whoMe": "Я",
      "whoAgree": "Ви згодні: {name}",
      "whoDiffer": "Думки розійшлися — обговоріть!",
      "whoFinal": "Збіглося {score} з {total}",
      "whoFinalHigh": "Ви так добре бачите одне одного!",
      "whoFinalMid": "Є про що поговорити — і це чудово",
      "featWho": "Жива гра «Хто з нас?» — чи збігаються думки",
      "phTitle": "Закінчи фразу",
      "phNote": "Жива гра вдвох: ви закінчуєте одну теплу фразу своїми словами, а потім читаєте відповіді одне одного.",
      "phShareText": "{name} кличе тебе в живу гру «Закінчи фразу»",
      "phJoinLead": "{name} чекає на вас. Закінчуйте фрази своїми словами!",
      "phRound": "Фраза {n} з {total}",
      "phPlaceholder": "Ваше продовження…",
      "phDone": "Готово",
      "phWaiting": "Чекаємо, що напише {name}…",
      "phSkipped": "Без відповіді",
      "phSave": "Зберегти в «Книгу пари»",
      "phSaved": "Збережено в «Книзі пари»",
      "phForbidden": "Напишіть без посилань і грубих слів.",
      "phNext": "Наступна фраза",
      "phFinal": "Фраз закінчено разом: {count}",
      "phFinalLead": "Збережіть найтепліші відповіді в «Книгу пари».",
      "featPhrase": "Жива гра «Закінчи фразу» з «Книгою пари»",
      "bookTitle": "Книга пари",
      "bookNote": "Найтепліші відповіді із «Закінчи фразу» — зберігаються у вашому акаунті.",
      "bookOpen": "Відкрити книгу",
      "bookEmpty": "Поки що книга порожня. Зіграйте в «Закінчи фразу» і збережіть відповіді, які сподобалися.",
      "bookDelete": "Видалити",
      "bookDeleteConfirm": "Видалити цю сторінку з книги?",
      "bookYou": "Ви",
      "inviteTitle": "Запросити в гру",
      "inviteNote": "Людина отримає повідомлення з грою.",
      "invite": "Запросити",
      "invited": "Запрошено",
      "inviteNone": "Додайте друзів у розділі «Друзі» — і запрошуйте їх у гру одним дотиком.",
      "inviteSent": "Запрошення надіслано: {name}",
      "truth": "Правда чи ні",
      "tfTitle": "Правда чи ні",
      "tfNote": "Жива гра для двох: дивовижні факти про світ. 12 секунд — правда чи ні? Бал за кожну правильну відповідь.",
      "tfShareText": "{name} кличе тебе в живу гру «Правда чи ні»",
      "tfJoinLead": "{name} чекає на вас. Правда чи ні — вирішуйте швидко!",
      "tfRound": "Факт {n} з {total}",
      "tfTrue": "Правда",
      "tfFalse": "Неправда",
      "tfIsTrue": "Це правда!",
      "tfIsFalse": "Це неправда!",
      "tfFirstYou": "Перша правильна відповідь — ваша!",
      "tfFirstThem": "Перша правильна відповідь: {name}",
      "tfFinalWin": "Перемога! Ви знаєте про світ більше.",
      "tfFinalLose": "Цього разу більше знає {name} — реванш?",
      "tfFinalDraw": "Нічия — ви знаєте однаково багато!",
      "featTruth": "Жива гра «Правда чи ні» — дивовижні факти про світ",
      "countries": "Вгадай країну",
      "coTitle": "Вгадай країну",
      "coNote": "Жива гра для двох: ведмедик мандрує світом. 10 секунд — вгадай, у якій він країні! Бал за кожну правильну відповідь.",
      "coShareText": "{name} кличе тебе в живу гру «Вгадай країну»",
      "coJoinLead": "{name} чекає на тебе. Вгадай країну за картинкою!",
      "coRound": "Країна {n} з {total}",
      "coAsk": "Що це за країна?",
      "coFinalWin": "Перемога! Ти справді знаєш світ.",
      "coFinalLose": "Цього разу {name} краще знає світ — реванш?",
      "coFinalDraw": "Нічия — ви чудово знаєте світ!",
      "featCountries": "Жива гра «Вгадай країну» — 40 країн",
      "hints": "Вгадай за підказками",
      "dreams": "Мрії та плани",
      "hiTitle": "Вгадай за підказками",
      "hiNote": "Жива гра для двох: три підказки відкриваються по черзі. Вгадали з першої — 3 бали, з другої — 2, з третьої — 1.",
      "hiShareText": "{name} кличе тебе в живу гру «Вгадай за підказками»",
      "hiJoinLead": "{name} чекає на вас. Вгадуйте якомога раніше!",
      "hiRound": "Загадка {n} з {total}",
      "hiAsk": "Що це?",
      "hiClue": "Підказка {n}",
      "hiPoints": "Бали: +{n}",
      "hiNoPoints": "Цього разу без балів",
      "hiFinalWin": "Перемога! Ви чудово вгадуєте.",
      "hiFinalLose": "Цього разу краще вгадує {name} — реванш?",
      "hiFinalDraw": "Нічия — ви обоє чудово вгадуєте!",
      "featHints": "Жива гра «Вгадай за підказками» — 3, 2 або 1 бал",
      "drTitle": "Мрії та плани",
      "drNote": "Жива гра для двох: дім, подорожі, навчання й захоплення. Обирайте, чого хотілося б, і дізнайтеся, чи збігаються ваші мрії.",
      "drShareText": "{name} кличе тебе в живу гру «Мрії та плани»",
      "drJoinLead": "{name} чекає на вас. Обирайте те, чого справді хочеться!",
      "drRound": "Питання {n} з {total}",
      "drPick": "Оберіть, чого хотілося б",
      "drBoth": "Збіг: {item}",
      "drDiff": "Різні мрії — розкажіть одне одному чому!",
      "drFinalHigh": "У вас стільки спільних мрій!",
      "drFinalMid": "Різні мрії — є про що поговорити",
      "drCommon": "Ваші спільні мрії",
      "featDreams": "Жива гра «Мрії та плани» — чи збігаються ваші мрії?",
      "modestTitle": "Скромний режим",
      "modestNote": "Без питань про почуття, обійми й побачення — лише дружні"
    },
    "questions": {
      "q01": [
        "Моя улюблена пора року?",
        "Весна",
        "Літо",
        "Осінь",
        "Зима"
      ],
      "q02": [
        "Що я оберу на сніданок?",
        "Каву з круасаном",
        "Кашу",
        "Яєчню",
        "Тільки чай"
      ],
      "q03": [
        "Мій ідеальний вихідний?",
        "Удома під пледом",
        "Прогулянка парком",
        "Поїздка за місто",
        "Зустріч із друзями"
      ],
      "q04": [
        "Куди я мрію поїхати?",
        "До моря",
        "У гори",
        "У велике місто",
        "У затишний будиночок у селі"
      ],
      "q05": [
        "Моє улюблене морозиво?",
        "Ванільне",
        "Шоколадне",
        "Полуничне",
        "Фісташкове"
      ],
      "q06": [
        "Що порадує мене найшвидше?",
        "Обійми",
        "Сюрприз",
        "Теплі слова",
        "Щось смачне"
      ],
      "q07": [
        "Я радше…",
        "Жайворонок",
        "Сова",
        "Сплю, коли виходить",
        "Люблю денний сон"
      ],
      "q08": [
        "Який фільм я оберу на вечір?",
        "Комедію",
        "Романтичну історію",
        "Детектив",
        "Мультфільм"
      ],
      "q09": [
        "Мій улюблений колір?",
        "Червоний",
        "Синій",
        "Зелений",
        "Рожевий"
      ],
      "q10": [
        "Чого я боюся найбільше?",
        "Павуків",
        "Висоти",
        "Темряви",
        "Запізнитися"
      ],
      "q11": [
        "Які квіти я люблю?",
        "Троянди",
        "Тюльпани",
        "Півонії",
        "Ромашки"
      ],
      "q12": [
        "Що я роблю, коли сумно?",
        "Телефоную близьким",
        "Їм солодке",
        "Іду гуляти",
        "Лягаю спати"
      ],
      "q13": [
        "Яка тварина мені найближча?",
        "Котик",
        "Собака",
        "Ведмежа",
        "Лисичка"
      ],
      "q14": [
        "Найкращий подарунок для мене?",
        "Зроблений власноруч",
        "Подорож",
        "Прикраса",
        "Книжка"
      ],
      "q15": [
        "Мій улюблений напій?",
        "Чорний чай",
        "Зелений чай",
        "Кава",
        "Какао"
      ],
      "q16": [
        "Мій улюблений перекус?",
        "Шоколад",
        "Чипси",
        "Фрукти",
        "Тістечко"
      ],
      "q17": [
        "Що я оберу в подорожі?",
        "Музеї",
        "Пляж",
        "Місцеву кухню",
        "Прогулянки без плану"
      ],
      "q18": [
        "Як я люблю проводити вечір?",
        "З книжкою",
        "Із серіалом",
        "За розмовами",
        "На прогулянці"
      ],
      "q19": [
        "Яка погода мені до душі?",
        "Сонце",
        "Теплий дощ",
        "Снігопад",
        "Легкий вітер"
      ],
      "q20": [
        "Яка суперсила мені пасувала б?",
        "Літати",
        "Читати думки",
        "Зупиняти час",
        "Миттєво переміщатися"
      ],
      "q21": [
        "Що для мене найважливіше в близьких людях?",
        "Довіра",
        "Турбота",
        "Почуття гумору",
        "Підтримка"
      ],
      "q22": [
        "Яке свято я чекаю найбільше?",
        "Новий рік",
        "День народження",
        "Літню відпустку",
        "День закоханих"
      ],
      "q23": [
        "Як я найчастіше кажу «люблю»?",
        "Словами",
        "Ділами",
        "Обіймами",
        "Подарунками"
      ],
      "q24": [
        "Що я замовлю в кафе?",
        "Пасту",
        "Суші",
        "Салат",
        "Десерт"
      ],
      "q25": [
        "Мій улюблений час доби?",
        "Ранок",
        "День",
        "Вечір",
        "Ніч"
      ],
      "q26": [
        "Яку кухню я оберу?",
        "Італійську",
        "Японську",
        "Домашню",
        "Мексиканську"
      ],
      "q27": [
        "Де мені найкраще думається?",
        "У душі",
        "На прогулянці",
        "У дорозі",
        "Перед сном"
      ],
      "q28": [
        "Що я роблю зранку насамперед?",
        "Дивлюся в телефон",
        "П’ю воду",
        "Варю каву",
        "Ще трохи лежу"
      ],
      "q29": [
        "Мій улюблений фрукт?",
        "Яблуко",
        "Банан",
        "Манго",
        "Кавун"
      ],
      "q30": [
        "Яке хобі мені найближче?",
        "Малювання",
        "Кулінарія",
        "Спорт",
        "Читання"
      ],
      "q31": [
        "Як я хочу відсвяткувати день народження?",
        "Гучною вечіркою",
        "Вечерею удвох",
        "Подорожжю",
        "Тихим вечором удома"
      ],
      "q32": [
        "Як я ставлюся до сюрпризів?",
        "Дуже люблю",
        "Трохи хвилююся",
        "Люблю влаштовувати їх іншим",
        "Волію знати заздалегідь"
      ],
      "q33": [
        "Які солодощі мені найближчі?",
        "Торт",
        "Морозиво",
        "Печиво",
        "Цукерки"
      ],
      "q34": [
        "Що я візьму на безлюдний острів?",
        "Книжку",
        "Телефон",
        "Плед",
        "Фотоапарат"
      ],
      "q35": [
        "Як я відпочиваю після важкого дня?",
        "Тепла ванна",
        "Серіал",
        "Прогулянка",
        "Розмова з близькою людиною"
      ],
      "q36": [
        "Який транспорт мені подобається найбільше?",
        "Потяг",
        "Літак",
        "Машина",
        "Велосипед"
      ],
      "q37": [
        "Моя улюблена гра в дитинстві?",
        "Хованки",
        "Квач",
        "Конструктор",
        "Малювання"
      ],
      "q38": [
        "Яка казка мені найближча?",
        "Попелюшка",
        "Маленький принц",
        "Вінні-Пух",
        "Аліса в Країні чудес"
      ],
      "q39": [
        "Чим я радше потішу близьку людину?",
        "Сюрпризом",
        "Листівкою",
        "Подорожжю",
        "Вечерею"
      ],
      "q40": [
        "Що я фотографую найчастіше?",
        "Себе",
        "Природу",
        "Їжу",
        "Майже не фотографую"
      ],
      "q41": [
        "Моє улюблене місце вдома?",
        "Ліжко",
        "Кухня",
        "Диван",
        "Балкон"
      ],
      "q42": [
        "Що я помічаю в людині насамперед?",
        "Усмішку",
        "Очі",
        "Голос",
        "Почуття гумору"
      ],
      "q43": [
        "Що найшвидше мене розсмішить?",
        "Смішні відео",
        "Жарти близьких",
        "Незручні ситуації",
        "Тварини"
      ],
      "q44": [
        "Що я п’ю в спеку?",
        "Лимонад",
        "Холодний чай",
        "Сік",
        "Воду з льодом"
      ],
      "q45": [
        "Яка стихія мені найближча?",
        "Вода",
        "Вогонь",
        "Земля",
        "Повітря"
      ],
      "q46": [
        "Які історії я люблю?",
        "Пригоди",
        "Про кохання",
        "Фантастику",
        "З життя"
      ],
      "q47": [
        "Як я проводжу дощовий день?",
        "Читаю",
        "Сплю",
        "Дивлюся фільм",
        "Гуляю під парасолькою"
      ],
      "q48": [
        "Що я ціную в подарунку найбільше?",
        "Увагу",
        "Користь",
        "Красу",
        "Несподіванку"
      ],
      "q49": [
        "Яку картоплю я оберу?",
        "Пюре",
        "Картоплю фрі",
        "Запечену",
        "Чипси"
      ],
      "q50": [
        "Куди я піду насамперед у новому місті?",
        "У кафе",
        "У музей",
        "У парк",
        "По магазинах"
      ],
      "q51": [
        "Що я роблю, коли не спиться?",
        "Читаю",
        "Гортаю телефон",
        "Рахую овечок",
        "П’ю тепле молоко"
      ],
      "q52": [
        "Як я готуюся до важливого дня?",
        "Усе планую заздалегідь",
        "Роблю в останню мить",
        "Прошу допомоги",
        "Хвилююся і не сплю"
      ],
      "q53": [
        "Який спорт мені найцікавіше дивитися?",
        "Футбол",
        "Теніс",
        "Фігурне катання",
        "Не дивлюся спорт"
      ],
      "q54": [
        "Який улюбленець мені до душі?",
        "Кішка",
        "Собака",
        "Папуга",
        "Хом’ячок"
      ],
      "q55": [
        "Які повідомлення я пишу?",
        "Довгі",
        "Короткі",
        "З купою смайликів",
        "Голосові"
      ],
      "q56": [
        "Який подарунок я зберігаю найдовше?",
        "Лист",
        "Іграшку",
        "Фотографію",
        "Прикрасу"
      ],
      "q57": [
        "Що я радше оберу?",
        "Чай біля каміна",
        "Пікнік на траві",
        "Прогулянку біля моря",
        "Похід у кіно"
      ],
      "q58": [
        "Який комплімент порадує мене найбільше?",
        "Про зовнішність",
        "Про розум",
        "Про доброту",
        "Про почуття гумору"
      ],
      "q59": [
        "Мій ідеальний ранок?",
        "Сніданок у ліжко",
        "Рання пробіжка",
        "Довгий сон",
        "Кава на балконі"
      ],
      "q60": [
        "Чого я хочу навчитися?",
        "Танцювати",
        "Готувати",
        "Нової мови",
        "Малювати"
      ],
      "q61": [
        "Яка страва вдається мені найкраще?",
        "Суп",
        "Плов",
        "Випічка",
        "Салат"
      ],
      "q62": [
        "Яку країну я хочу побачити першою?",
        "Туреччину",
        "Японію",
        "Марокко",
        "Норвегію"
      ],
      "q63": [
        "Яким спортом мені цікавіше зайнятися?",
        "Плаванням",
        "Бігом",
        "Велоспортом",
        "Футболом"
      ],
      "q64": [
        "Яку книжку я оберу?",
        "Пригодницьку",
        "Історичну",
        "Казки",
        "Енциклопедію"
      ],
      "q65": [
        "До яких тварин у зоопарку я піду першими?",
        "До слонів",
        "До мавп",
        "До пінгвінів",
        "До жирафів"
      ],
      "q66": [
        "Як я ставлюся до гострої їжі?",
        "Що гостріше, то краще",
        "Трохи можна",
        "Лише крапельку",
        "Зовсім не їм"
      ],
      "q67": [
        "Який шкільний предмет був моїм улюбленим?",
        "Математика",
        "Література",
        "Географія",
        "Фізкультура"
      ],
      "q68": [
        "Моя дитяча мрія про професію?",
        "Лікувати людей",
        "Навчати дітей",
        "Полетіти в космос",
        "Готувати"
      ],
      "q69": [
        "Як я ставлюся до походів?",
        "Мрію про довгий",
        "Тільки на день",
        "Тільки з комфортом",
        "Удома краще"
      ],
      "q70": [
        "Мій настрій зранку?",
        "Багато енергії",
        "Ще хочеться спати",
        "Тиша",
        "Хочеться поговорити"
      ],
      "q71": [
        "Які горіхи я люблю найбільше?",
        "Фундук",
        "Волоські",
        "Кеш’ю",
        "Мигдаль"
      ],
      "q72": [
        "Чим я займуся в несподівану вільну годину?",
        "Читатиму",
        "Піду погуляти",
        "Подзвоню рідним",
        "Щось приготую"
      ],
      "q73": [
        "Яку погоду я не люблю?",
        "Спеку",
        "Вітер",
        "Сльоту",
        "Лютий мороз"
      ],
      "q74": [
        "У який колір я пофарбую свою кімнату?",
        "Білий",
        "Бежевий",
        "Зелений",
        "Блакитний"
      ],
      "q75": [
        "У що мені цікавіше пограти?",
        "У шахи",
        "У шашки",
        "У пазл",
        "У гру в слова"
      ],
      "q76": [
        "Що я приготую для гостей?",
        "Плов",
        "Пиріг",
        "Салати",
        "Замовлю їжу"
      ],
      "q77": [
        "Чого я точно не їстиму?",
        "Грибів",
        "Риби",
        "Оливок",
        "Вареної цибулі"
      ],
      "q78": [
        "Який чай я п’ю?",
        "Міцний",
        "Слабкий",
        "Солодкий",
        "З травами"
      ],
      "q79": [
        "Що для мене найважливіше в домі?",
        "Чистота",
        "Затишок",
        "Багато світла",
        "Тиша"
      ],
      "q80": [
        "Як я вчуся новому?",
        "Читаю",
        "Дивлюся відеоуроки",
        "Пробую на практиці",
        "Розпитую інших"
      ],
      "q81": [
        "Яка дика тварина захоплює мене найбільше?",
        "Тигр",
        "Ведмідь",
        "Орел",
        "Дельфін"
      ],
      "q82": [
        "Що я подарую мамі?",
        "Квіти",
        "Щось зроблене власноруч",
        "Подорож",
        "Теплий плед"
      ],
      "q83": [
        "Що я роблю в дорозі?",
        "Дивлюся у вікно",
        "Читаю",
        "Розмовляю",
        "Перекушую"
      ],
      "q84": [
        "Моя улюблена страва з курки?",
        "Шашлички з курки",
        "Курка з рисом",
        "Курячі котлети",
        "Нагетси"
      ],
      "q85": [
        "Яке місце я обираю в потязі?",
        "Біля вікна",
        "Біля проходу",
        "Спиною за рухом",
        "Байдуже"
      ],
      "q86": [
        "Що я роблю, коли щось іде не так?",
        "Одразу дію",
        "Спершу думаю",
        "Прошу поради",
        "Трохи хвилююся"
      ],
      "q87": [
        "Яка моя головна риса?",
        "Доброта",
        "Чесність",
        "Наполегливість",
        "Життєрадісність"
      ],
      "q88": [
        "Де я найкраще відпочину?",
        "У рідних у селі",
        "У готелі біля моря",
        "У наметі",
        "Удома"
      ],
      "q89": [
        "Яку випічку я оберу?",
        "Самсу",
        "Хачапурі",
        "Чак-чак",
        "Еклер"
      ],
      "q90": [
        "Яку мову мені найбільше хочеться вивчити?",
        "Арабську",
        "Англійську",
        "Турецьку",
        "Японську"
      ],
      "q91": [
        "Скільки я протримаюся без солодкого?",
        "День",
        "Тиждень",
        "Місяць",
        "Скільки треба"
      ],
      "q92": [
        "Що я роблю, коли запізнююся?",
        "Біжу щодуху",
        "Дзвоню попередити",
        "Беру таксі",
        "Я ніколи не запізнююся"
      ],
      "q93": [
        "Що я роблю, коли ламається техніка?",
        "Лагоджу власноруч",
        "Читаю інструкцію",
        "Кличу на допомогу",
        "Натискаю всі кнопки"
      ],
      "q94": [
        "Що першим потрапляє в мою валізу?",
        "Аптечка",
        "Книжка",
        "Зарядка",
        "Перекус"
      ],
      "q95": [
        "Яке заняття мене заспокоює?",
        "Готування",
        "Прибирання",
        "Малювання",
        "Прогулянка"
      ],
      "q96": [
        "Чим я хочу займатися на пенсії?",
        "Садом",
        "Подорожами",
        "Читанням",
        "Онуками"
      ],
      "q97": [
        "Що мене найбільше дратує?",
        "Шум",
        "Безлад",
        "Запізнення",
        "Грубість"
      ],
      "q98": [
        "Який запах я люблю найбільше?",
        "Свіжого хліба",
        "Дощу",
        "Квітів",
        "Моря"
      ],
      "q99": [
        "Що я оберу на десерт?",
        "Фрукти",
        "Морозиво",
        "Пиріг",
        "Просто чай"
      ]
    },
    "yesNo": {
      "c01": [
        "Сумуєш за мною просто зараз?",
        "дуже сумує",
        "тримається, але думає про тебе"
      ],
      "c02": [
        "Усміхаєшся, коли бачиш моє повідомлення?",
        "завжди усміхається",
        "усміхається подумки"
      ],
      "c03": [
        "Пам’ятаєш нашу першу зустріч?",
        "пам’ятає кожну хвилину",
        "пам’ятає головне — тебе"
      ],
      "c04": [
        "Хочеш сьогодні обійматися?",
        "чекає твоїх обіймів",
        "береже обійми на потім"
      ],
      "c05": [
        "Поїдемо разом до моря?",
        "уже пакує валізу",
        "мріє про гори"
      ],
      "c06": [
        "Я тебе смішу?",
        "сміється від душі",
        "ховає усмішку"
      ],
      "c07": [
        "Тобі зі мною спокійно?",
        "поруч із тобою спокійно",
        "з тобою весело й цікаво"
      ],
      "c08": [
        "Згадуєш мене вдень?",
        "згадує дуже часто",
        "згадує просто зараз"
      ],
      "c09": [
        "Любиш мої сюрпризи?",
        "дуже любить твої сюрпризи",
        "любить, коли ти просто поруч"
      ],
      "c10": [
        "Спечемо разом пиріг?",
        "уже вдягає фартух",
        "краще купить торт"
      ],
      "c11": [
        "Подивимося ввечері фільм удвох?",
        "уже обирає фільм",
        "хоче просто поговорити"
      ],
      "c12": [
        "Подобається мій голос?",
        "може слухати безкінечно",
        "ще більше любить твій сміх"
      ],
      "c13": [
        "Влаштуємо пікнік на вихідних?",
        "готує плед",
        "кличе в затишне кафе"
      ],
      "c14": [
        "Хочеш отримати від мене лист?",
        "чекає на твій лист",
        "хоче почути все наживо"
      ],
      "c15": [
        "Я для тебе багато значу?",
        "ти значиш дуже багато",
        "більше, ніж ти думаєш"
      ],
      "c16": [
        "Погуляємо під дощем?",
        "бере парасольку на двох",
        "заварить чай удома"
      ],
      "c17": [
        "Ми з тобою схожі?",
        "ви як дві половинки",
        "ви чудово доповнюєте одне одного"
      ],
      "c18": [
        "Подобається, як я готую?",
        "просить добавки",
        "любить готувати разом із тобою"
      ],
      "c19": [
        "Заведемо спільного улюбленця?",
        "уже обирає ім’я",
        "поки вистачає плюшевого ведмедика"
      ],
      "c20": [
        "Знаєш, що я люблю?",
        "знає напам’ять",
        "хоче дізнатися ще більше"
      ],
      "c21": [
        "Потанцюємо?",
        "уже простягає руку",
        "плескатиме в долоні"
      ],
      "c22": [
        "Я тебе надихаю?",
        "надихаєш щодня",
        "поруч із тобою просто тепло"
      ],
      "c23": [
        "Зберігаєш наші фото?",
        "береже кожне",
        "чекає нових, ще кращих"
      ],
      "c24": [
        "Зустрінемо світанок разом?",
        "ставить будильник",
        "краще проведемо захід сонця"
      ],
      "c25": [
        "Розкажеш мені секрет?",
        "прошепоче на вушко",
        "нехай лишиться загадкою"
      ],
      "c26": [
        "Віриш у мене?",
        "дуже вірить у тебе",
        "підтримує тебе щодня"
      ],
      "c27": [
        "Вирушимо в подорож удвох?",
        "мріє про це",
        "візьме з собою всіх близьких"
      ],
      "c28": [
        "Чекаєш на мій дзвінок?",
        "чекає з усмішкою",
        "краще приходь у гості"
      ],
      "c29": [
        "Подобаються мої обійми?",
        "найтепліші у світі",
        "любить триматися за руки"
      ],
      "c30": [
        "Почитаємо вголос одне одному?",
        "уже обирає книжку",
        "краще послухає тебе"
      ],
      "c31": [
        "Зробимо спільне фото сьогодні?",
        "уже шукає гарне тло",
        "спершу — розмови"
      ],
      "c32": [
        "Я покращую тобі настрій?",
        "завжди покращуєш",
        "з тобою навіть сумувати легше"
      ],
      "c33": [
        "Поснідаємо завтра разом?",
        "уже варить какао",
        "мріє довше поспати"
      ],
      "c34": [
        "Пам’ятаєш мій день народження?",
        "пам’ятає без нагадувань",
        "таємно готує сюрприз"
      ],
      "c35": [
        "Підемо на ковзанку?",
        "дістає ковзани",
        "вболіватиме за тебе біля бортика"
      ],
      "c36": [
        "Тобі сьогодні добре?",
        "день чудовий",
        "стане кращим, коли ти поруч"
      ],
      "c37": [
        "Намалюєш мій портрет?",
        "уже бере олівець",
        "намалює сердечко"
      ],
      "c38": [
        "Посадимо разом дерево?",
        "обирає місце",
        "почне з квітки на підвіконні"
      ],
      "c39": [
        "Хочеш почути комплімент?",
        "чекає з нетерпінням",
        "соромиться, але дуже хоче"
      ],
      "c40": [
        "Зіграємо ще раз потім?",
        "хоче ще раунд",
        "хоче обійняти замість гри"
      ],
      "c41": [
        "Любиш гостру їжу?",
        "що гостріше, то краще",
        "обирає щось м’якше"
      ],
      "c42": [
        "Умієш плавати?",
        "плаває як риба",
        "поки що тримається біля берега"
      ],
      "c43": [
        "Хочеш мати кота?",
        "уже вигадує ім’я",
        "більше любить собак"
      ],
      "c44": [
        "Хочеш колись побувати в Стамбулі?",
        "уже мріє про Босфор",
        "обирає інше місто"
      ],
      "c45": [
        "Любиш готувати?",
        "готує із задоволенням",
        "краще помиє посуд"
      ],
      "c46": [
        "Хочеш навчитися готувати плов?",
        "уже шукає рецепт",
        "краще скуштує чужий"
      ],
      "c47": [
        "Любиш читати книжки?",
        "завжди має книжку під рукою",
        "більше любить слухати історії"
      ],
      "c48": [
        "Умієш їздити на велосипеді?",
        "може рушати хоч зараз",
        "обіцяє навчитися"
      ],
      "c49": [
        "Гори тобі ближчі за море?",
        "обирає гори",
        "обирає море"
      ],
      "c50": [
        "Хочеш побачити пустелю?",
        "мріє про піщані дюни",
        "обирає ліс"
      ],
      "c51": [
        "Любиш зиму?",
        "чекає на перший сніг",
        "чекає на літо"
      ],
      "c52": [
        "П’єш чай без цукру?",
        "любить чистий смак чаю",
        "не може без ложечки цукру"
      ],
      "c53": [
        "Боїшся павуків?",
        "тримається від них подалі",
        "спокійно виносить їх надвір"
      ],
      "c54": [
        "Любиш малювати?",
        "уже береться за пензлик",
        "краще роздивляється чужі картини"
      ],
      "c55": [
        "Хочеш побачити полярне сяйво?",
        "уже шукає, де його побачити",
        "краще дивиться на зорі"
      ],
      "c56": [
        "Любиш дощову погоду?",
        "любить шум дощу за вікном",
        "чекає на сонце"
      ],
      "c57": [
        "Умієш їздити верхи?",
        "упевнено тримається в сідлі",
        "поки що тільки мріє про це"
      ],
      "c58": [
        "Хочеш мати собаку?",
        "мріє про вірного друга",
        "поки що має досить турбот"
      ],
      "c59": [
        "Солодке тобі ближче за солоне?",
        "не уявляє життя без солодкого",
        "обирає солоне"
      ],
      "c60": [
        "Любиш подорожувати потягом?",
        "любить стукіт коліс",
        "обирає літак"
      ],
      "c61": [
        "Тобі легко починати день рано?",
        "починає день бадьоро",
        "розганяється лише до обіду"
      ],
      "c62": [
        "Любиш ночувати в наметі?",
        "уже пакує рюкзак",
        "обирає затишний готель"
      ],
      "c63": [
        "Хочеш жити біля моря?",
        "мріє про шум хвиль",
        "обирає місто"
      ],
      "c64": [
        "Їси морозиво взимку?",
        "їсть його навіть у мороз",
        "тільки влітку"
      ],
      "c65": [
        "Любиш шоколад?",
        "знає всі його види",
        "спокійно проходить повз"
      ],
      "c66": [
        "Умієш пекти пиріжки?",
        "пече як бабуся",
        "обіцяє навчитися"
      ],
      "c67": [
        "Любиш дивитися на зорі?",
        "знає сузір’я",
        "більше любить сонячний день"
      ],
      "c68": [
        "Хочеш колись посадити власний сад?",
        "уже вибирає саджанці",
        "почне з квітки в горщику"
      ],
      "c69": [
        "Любиш польові квіти?",
        "любить ромашки й волошки",
        "більше любить садові квіти"
      ],
      "c70": [
        "П’єш каву?",
        "без кави день не починається",
        "обирає чай"
      ],
      "c71": [
        "Любиш домашній лимонад?",
        "уже ріже лимони",
        "краще вип’є води"
      ],
      "c72": [
        "Хочеш колись побувати в Японії?",
        "мріє побачити цвітіння сакури",
        "обирає іншу країну"
      ],
      "c73": [
        "Любиш осінь?",
        "любить шурхотіти листям",
        "чекає на весну"
      ],
      "c74": [
        "Любиш запах лаванди?",
        "любить цей аромат",
        "більше любить інші аромати"
      ],
      "c75": [
        "Любиш настільні ігри?",
        "уже розкладає поле",
        "краще піде на прогулянку"
      ],
      "c76": [
        "Умієш водити машину?",
        "упевнено кермує",
        "поки що їздить пасажиром"
      ],
      "c77": [
        "Хочеш колись побачити океан?",
        "мріє про велику хвилю",
        "вистачить і моря"
      ],
      "c78": [
        "Хочеш трохи пожити на фермі?",
        "уже годує курей",
        "лишається в місті"
      ],
      "c79": [
        "Любиш великі міста?",
        "любить вогні міста",
        "обирає тишу й спокій"
      ],
      "c80": [
        "Фрукти тобі ближчі за солодощі?",
        "обирає фрукти",
        "обирає солодощі"
      ],
      "c81": [
        "Хочеш побачити дельфінів у морі?",
        "дуже хоче їх побачити",
        "краще почитає про них"
      ],
      "c82": [
        "Любиш літо?",
        "чекає на спекотні дні",
        "любить прохолоду"
      ],
      "c83": [
        "Любиш гуляти в парку?",
        "гуляє в будь-яку погоду",
        "краще лишиться вдома"
      ],
      "c84": [
        "Любиш писати від руки?",
        "має акуратний почерк",
        "набирає в телефоні"
      ],
      "c85": [
        "Любиш кататися на човні?",
        "уже береться за весла",
        "лишається на березі"
      ],
      "c86": [
        "Хочеш об’їхати весь світ?",
        "уже малює маршрут",
        "вистачить кількох країн"
      ],
      "c87": [
        "Умієш ліпити сніговика?",
        "зліпить найбільшого",
        "краще пограє в сніжки"
      ],
      "c88": [
        "Хочеш цього року навчитися чогось нового?",
        "уже вибирає курс",
        "і так має досить справ"
      ],
      "c89": [
        "Любиш тишу?",
        "цінує спокій",
        "любить, коли навколо жваво"
      ],
      "c90": [
        "Любиш дарувати подарунки рідним?",
        "тішить родину без приводу",
        "краще допомагає ділом"
      ]
    },
    "loves": {
      "s01": [
        "Де провести відпустку?",
        "Пляж",
        "Гори",
        "Подорож",
        "Усамітнення"
      ],
      "s02": [
        "Ідеальний вечір?",
        "Кіно вдома",
        "Прогулянка",
        "Ресторан",
        "Настільні ігри"
      ],
      "s03": [
        "Улюблена погода?",
        "Сонце",
        "Дощ",
        "Сніг",
        "Зоряна ніч"
      ],
      "s04": [
        "Улюблена тварина?",
        "Кошеня",
        "Цуценя",
        "Кінь",
        "Дельфін"
      ],
      "s05": [
        "Що на вечерю?",
        "Піца",
        "Суші",
        "Тістечка",
        "Барбекю"
      ],
      "s06": [
        "Улюблений напій?",
        "Кава",
        "Чай",
        "Какао",
        "Лимонад"
      ],
      "s07": [
        "Улюблена пора року?",
        "Весна",
        "Літо",
        "Осінь",
        "Зима"
      ],
      "s08": [
        "Улюблені квіти?",
        "Троянди",
        "Тюльпани",
        "Соняшники",
        "Лаванда"
      ],
      "s09": [
        "Як відпочивати?",
        "З книжкою",
        "Малювати",
        "На велосипеді",
        "Спати в гамаку"
      ],
      "s10": [
        "Як подорожувати?",
        "Потягом",
        "Літаком",
        "Машиною",
        "Кораблем"
      ],
      "s11": [
        "Дім мрії?",
        "Квартира в місті",
        "Будинок біля моря",
        "Будиночок у горах",
        "Ферма"
      ],
      "s12": [
        "Щось солодке?",
        "Морозиво",
        "Шоколад",
        "Торт",
        "Фрукти"
      ],
      "s13": [
        "Ідеальний ранок?",
        "Сніданок у ліжко",
        "Пробіжка",
        "Довгий сон",
        "Кава на балконі"
      ],
      "s14": [
        "Побачення мрії?",
        "Пікнік",
        "Ковзанка",
        "Парк атракціонів",
        "Зорі на даху"
      ],
      "s15": [
        "Найкращий подарунок?",
        "Букет квітів",
        "Лист",
        "Подорож",
        "Подарунок у коробці"
      ],
      "s16": [
        "Улюблена природа?",
        "Море",
        "Ліс",
        "Пустеля",
        "Північне сяйво"
      ],
      "s17": [
        "Улюблений фрукт?",
        "Яблуко",
        "Полуниця",
        "Кавун",
        "Виноград"
      ],
      "s18": [
        "Чим зайнятися у вихідний?",
        "Похід у гори",
        "Готувати вдома",
        "Музей",
        "Риболовля"
      ],
      "s19": [
        "Улюблений сніданок?",
        "Млинці",
        "Омлет",
        "Каша з ягодами",
        "Круасан"
      ],
      "s20": [
        "Улюблений птах?",
        "Сова",
        "Папуга",
        "Лебідь",
        "Павич"
      ],
      "s21": [
        "Яке місто відвідати?",
        "Стамбул",
        "Париж",
        "Токіо",
        "Дубай"
      ],
      "s22": [
        "Улюблений спорт?",
        "Футбол",
        "Плавання",
        "Теніс",
        "Верхова їзда"
      ],
      "s23": [
        "Що посадити в саду?",
        "Яблуню",
        "Троянди",
        "Овочі",
        "Полуницю"
      ],
      "s24": [
        "Улюблена випічка?",
        "Пиріжки",
        "Пончики",
        "Печиво",
        "Пахлава"
      ],
      "s25": [
        "Де жити?",
        "Біля річки",
        "У лісі",
        "У великому місті",
        "На острові"
      ],
      "s26": [
        "Улюблений мешканець моря?",
        "Черепаха",
        "Кит",
        "Восьминіг",
        "Морський коник"
      ],
      "s27": [
        "На чому кататися?",
        "Велосипед",
        "Самокат",
        "Повітряна куля",
        "Човен"
      ],
      "s28": [
        "Улюблене заняття?",
        "В’язання",
        "Фотографування природи",
        "Садівництво",
        "Каліграфія"
      ],
      "s29": [
        "Улюблений суп?",
        "Борщ",
        "Курячий суп",
        "Гарбузовий суп",
        "Сочевичний суп"
      ],
      "s30": [
        "Лісова тварина?",
        "Їжачок",
        "Білка",
        "Лисиця",
        "Олень"
      ],
      "s31": [
        "Що погризти?",
        "Фініки",
        "Мигдаль",
        "Фісташки",
        "Курага"
      ],
      "s32": [
        "Що взяти в похід?",
        "Намет",
        "Термос",
        "Карту",
        "Ліхтарик"
      ],
      "s33": [
        "Улюблений десерт?",
        "Пудинг",
        "Чизкейк",
        "Млинці з медом",
        "Фруктовий салат"
      ],
      "s34": [
        "Чим зайнятися взимку?",
        "Зліпити сніговика",
        "Покататися на санчатах",
        "Чай біля вікна",
        "Покататися на лижах"
      ],
      "s35": [
        "Чим зайнятися влітку?",
        "Поплавати",
        "Збирати ягоди",
        "Покататися на човні",
        "Збудувати замок із піску"
      ],
      "s36": [
        "Чим малювати?",
        "Аквареллю",
        "Олівцями",
        "Восковими крейдами",
        "Фарбами на полотні"
      ],
      "s37": [
        "Улюблений овоч?",
        "Морква",
        "Помідор",
        "Кукурудза",
        "Гарбуз"
      ],
      "s38": [
        "Що робить дім затишним?",
        "Камін",
        "М’який плед",
        "Кімнатні рослини",
        "Полиця з книжками"
      ],
      "s39": [
        "У що пограти?",
        "Шахи",
        "Пазли",
        "Настільні ігри",
        "Ігри з м’ячем"
      ],
      "s40": [
        "Хто живе на фермі?",
        "Корова",
        "Ягня",
        "Курка",
        "Козеня"
      ],
      "s41": [
        "Чай із чим?",
        "З медом",
        "З лимоном",
        "З варенням",
        "З м’ятою"
      ],
      "s42": [
        "Що є біля моря?",
        "Маяк",
        "Мушлі",
        "Вітрильник",
        "Чайки"
      ],
      "s43": [
        "Як почати ранок?",
        "Із зарядки",
        "З чашки чаю",
        "З прогулянки",
        "З книжки"
      ],
      "s44": [
        "Улюблена ягода?",
        "Малина",
        "Чорниця",
        "Вишня",
        "Ожина"
      ]
    },
    "who": [
      "Хто з нас частіше запізнюється?",
      "Хто з нас швидше йде на примирення?",
      "Хто з нас краще готує?",
      "Хто з нас частіше сміється?",
      "Хто з нас довше збирається?",
      "Хто з нас частіше губить ключі?",
      "Хто з нас краще пам’ятає важливі дати?",
      "Хто з нас більше любить солодке?",
      "Хто з нас швидше засинає?",
      "Хто з нас раніше встає вранці?",
      "Хто з нас частіше каже «я сумую»?",
      "Хто з нас краще вибирає подарунки?",
      "Хто з нас частіше жартує?",
      "Хто з нас краще водить машину?",
      "Хто з нас довше говорить по телефону?",
      "Хто з нас більше любить подорожувати?",
      "Хто з нас швидше ображається?",
      "Хто з нас швидше прощає?",
      "Хто з нас частіше фотографує?",
      "Хто з нас краще дає раду грошам?",
      "Хто з нас частіше купує зайве?",
      "Хто з нас краще втішає?",
      "Хто з нас спокійніше тримається у скрутну хвилину?",
      "Хто з нас частіше шукає свій телефон?",
      "Хто з нас більше любить приймати гостей?",
      "Хто з нас частіше готує сніданок?",
      "Хто з нас краще орієнтується в незнайомому місті?",
      "Хто з нас пише довші повідомлення?",
      "Хто з нас частіше кличе на прогулянку?",
      "Хто з нас більше любить тварин?",
      "Хто з нас краще зберігає таємниці?",
      "Хто з нас довше вибирає страву в кафе?",
      "Хто з нас більше хвилюється за близьких?",
      "Хто з нас частіше робить сюрпризи?",
      "Хто з нас краще наводить лад?",
      "Хто з нас швидше помічає нову зачіску?",
      "Хто з нас частіше згадує смішні історії?",
      "Хто з нас має більше терпіння?",
      "Хто з нас частіше каже «дякую»?",
      "Хто з нас швидше пропонує допомогу?",
      "Хто з нас краще рахує в умі?",
      "Хто з нас більше читає?",
      "Хто з нас швидше друкує?",
      "Хто з нас частіше телефонує батькам?",
      "Хто з нас краще розповідає історії?",
      "У кого з нас акуратніший почерк?",
      "Хто з нас більше любить гостру їжу?",
      "Хто з нас частіше щось забуває вдома?",
      "Хто з нас краще розуміється на техніці?",
      "Хто з нас більше любить пізнавати нове?",
      "Хто з нас краще планує?",
      "Хто з нас краще торгується на ринку?",
      "Хто з нас більше любить природу?",
      "Хто з нас швидше їсть?",
      "Хто з нас п’є більше чаю?",
      "Хто з нас краще доглядає рослини?",
      "Хто з нас краще знає географію?",
      "Хто з нас краще грає в шахи?",
      "Хто з нас вибирає кращі фрукти на ринку?",
      "Хто з нас частіше дивиться прогноз погоди?",
      "Хто з нас більше боїться павуків?",
      "У кого з нас більше сміливості?",
      "У кого з нас більше допитливості?",
      "Хто з нас швидше розв’язує головоломки?",
      "Хто з нас краще малює?",
      "Хто з нас частіше допомагає сусідам?",
      "Хто з нас краще ладнає з дітьми?",
      "Хто з нас більше любить гуляти?",
      "Хто з нас частіше читає інструкції?",
      "Хто з нас краще запам’ятовує імена?",
      "Хто з нас швидше вчить слова іншою мовою?",
      "Хто з нас краще пече?",
      "Хто з нас дає кращі поради?",
      "Хто з нас більше любить холодну погоду?",
      "Хто з нас краще дає собі раду в поході?",
      "Хто з нас частіше читає новини?",
      "Хто з нас частіше куштує нові страви?",
      "Хто з нас швидше пакує валізу?",
      "Хто з нас краще лагодить речі?",
      "Хто з нас частіше розмовляє з тваринами?",
      "Хто з нас частіше миє посуд?",
      "Хто з нас краще знає історію?",
      "Хто з нас частіше відкладає справи на потім?",
      "Хто з нас швидше знаходить спільну мову з новими людьми?",
      "Хто з нас більше дбає про здоров’я?"
    ],
    "phrases": [
      "Я усміхаюся, коли ти…",
      "Мій улюблений день з тобою — це…",
      "Дякую тобі за…",
      "Коли мені сумно, мені допомагає…",
      "Я хочу, щоб колись ми разом…",
      "Найтепліший спогад про нас — …",
      "Ти найкраще вмієш…",
      "Мені спокійно, коли…",
      "Якби в нас був цілий вільний день, ми б…",
      "Я пишаюся тобою, бо…",
      "Наш ідеальний вечір — це…",
      "Я ніколи не забуду, як ти…",
      "Мені подобається, коли ти кажеш…",
      "Наступного року я хочу, щоб ми…",
      "Ти для мене як…",
      "Найкращий подарунок від тебе — це…",
      "Я сумую за тобою, коли…",
      "Нам найвеселіше, коли…",
      "Мені давно хочеться сказати тобі…",
      "Наше місце — це…",
      "Коли я думаю про тебе, я…",
      "Ти робиш мій день кращим, коли…",
      "Мені подобається наша звичка…",
      "Моє бажання для нас: …",
      "Найсмішніше, що з нами траплялося, — …",
      "Я відчуваю твою турботу, коли ти…",
      "Ранок із тобою — це…",
      "Якщо описати нас одним словом, це…",
      "Я хочу навчитися в тебе…",
      "Дякую, що ти завжди…",
      "У дитинстві моєю улюбленою їжею була…",
      "Якби мені дали один день у будь-якій країні, я б…",
      "Найкраща порада, яку мені давали, —…",
      "Я завжди сміюся, коли…",
      "Моє улюблене місце в рідному місті —…",
      "Якби в мене була своя маленька крамничка, там продавалися б…",
      "Страва, яка вдається мені найкраще, —…",
      "Мрія з дитинства, яку я досі пам’ятаю, —…",
      "Мене легко порадувати, якщо…",
      "Найдивовижніше місце, де мені довелося побувати, —…",
      "Я хочу навчитися…",
      "Мій ідеальний вихідний починається з…",
      "Якби можна було завести будь-яку тварину, мій вибір —…",
      "У моїй родині завжди кажуть, що я…",
      "Я ніяк не можу звикнути до…",
      "Моя найкорисніша звичка —…",
      "Найкраща книжка в моєму житті —…",
      "Через десять років я хочу…",
      "Дім моєї мрії —…",
      "Найсмішніше, що трапилося зі мною в дитинстві, —…",
      "Щастя для мене —…",
      "Мені важко відмовитися від…",
      "Якби в мене була суперсила, вона б…",
      "Найбільше в людях я ціную…",
      "Коли в мене вільний вечір, я…",
      "Мій улюблений запах —…",
      "Їжа, якої я ніколи не скуштую, —…",
      "Єдина річ, без якої я не виходжу з дому, —…",
      "Хочу побувати в…, бо…",
      "Найкращий подарунок у моєму житті —…",
      "Моя найнезвичайніша звичка —…",
      "Якби в мене щодня була зайва година, я б…",
      "Людина, у якої я багато чого вчуся, —…",
      "У важкий день мені допомагає…",
      "Найсмачніше, що мені вдалося скуштувати в подорожі, —…",
      "Якби можна було на день змінити роботу, мій вибір —…",
      "Пора року, найближча моєму серцю, —…",
      "Мої друзі кажуть, що я…",
      "Колись я хочу навчити когось…",
      "Маленька радість мого дня —…"
    ],
    "truth": {
      "t01": [
        "У восьминога три серця.",
        true,
        "Два серця качають кров через зябра, а третє — по всьому тілу."
      ],
      "t02": [
        "Великий китайський мур видно з Місяця неозброєним оком.",
        false,
        "Не видно: мур надто вузький. Навіть з орбіти його дуже важко розгледіти."
      ],
      "t03": [
        "Мед може зберігатися тисячі років і не псуватися.",
        true,
        "У давньоєгипетських гробницях знаходили мед, якому тисячі років, і він досі зберігся."
      ],
      "t04": [
        "Банани ростуть на деревах.",
        false,
        "Банан — це гігантська трав’яниста рослина: її «стовбур» складається з щільно згорнутого листя."
      ],
      "t05": [
        "Венера — найгарячіша планета Сонячної системи.",
        true,
        "Щільна атмосфера розігріває Венеру приблизно до 460 °C — більше, ніж Меркурій."
      ],
      "t06": [
        "Кажани сліпі.",
        false,
        "Кажани бачать, а в темряві ще й орієнтуються за допомогою ехолокації."
      ],
      "t07": [
        "Кит — це риба.",
        false,
        "Кити — ссавці: вони дихають повітрям і вигодовують дитинчат молоком."
      ],
      "t08": [
        "Сахара — найбільша пустеля у світі.",
        false,
        "Найбільша пустеля — Антарктида. Сахара — найбільша спекотна пустеля."
      ],
      "t09": [
        "У жирафа стільки ж шийних хребців, скільки в людини.",
        true,
        "І там, і там їх сім — просто в жирафа вони дуже довгі."
      ],
      "t10": [
        "З погляду ботаніки помідор — це ягода.",
        true,
        "Ботаніки відносять помідор до ягід: це м’ясистий плід із насінням усередині."
      ],
      "t11": [
        "З погляду ботаніки полуниця — це ягода.",
        false,
        "Це несправжня ягода: справжні плоди — крихітні «зернятка» зовні."
      ],
      "t12": [
        "У космосі можна почути вибух.",
        false,
        "У космосі майже немає повітря, тож звуку нема чим поширюватися."
      ],
      "t13": [
        "Високо в горах вода закипає за нижчої температури.",
        true,
        "Там нижчий тиск повітря, тому вода закипає, не досягнувши 100 °C."
      ],
      "t14": [
        "Пінгвіни живуть на Північному полюсі.",
        false,
        "Дикі пінгвіни живуть лише в Південній півкулі, а не на далекій півночі."
      ],
      "t15": [
        "Еверест — найвища гора над рівнем моря.",
        true,
        "Еверест здіймається приблизно на 8849 метрів над рівнем моря."
      ],
      "t16": [
        "Люди використовують лише 10% мозку.",
        false,
        "Це міф: протягом доби активна майже кожна частина мозку."
      ],
      "t17": [
        "Серце людини б’ється близько 100 000 разів на добу.",
        true,
        "За приблизно 70 ударів на хвилину виходить близько 100 000 ударів на добу."
      ],
      "t18": [
        "Пам’ять золотої рибки — лише три секунди.",
        false,
        "Досліди показують, що золоті рибки пам’ятають вивчене місяцями."
      ],
      "t19": [
        "Австралія — це водночас країна і континент.",
        true,
        "Австралія — єдина країна, що займає цілий континент."
      ],
      "t20": [
        "Блискавка ніколи не б’є двічі в те саме місце.",
        false,
        "Б’є: у високі будівлі блискавка влучає багато разів на рік."
      ],
      "t21": [
        "Страус ховає голову в пісок, коли боїться.",
        false,
        "Міф: наляканий страус тікає або притискається до землі, щоб сховатися."
      ],
      "t22": [
        "Найменший птах у світі — колібрі.",
        true,
        "Колібрі-бджілка з Куби важить близько 2 грамів — менше за будь-якого іншого птаха."
      ],
      "t23": [
        "Кавун приблизно на 90% складається з води.",
        true,
        "У кавуні близько 92% води — тому він так освіжає."
      ],
      "t24": [
        "У павука шість ніг.",
        false,
        "У павука вісім ніг. Шість — у комах, а павуки не комахи."
      ],
      "t25": [
        "Місяць світить власним світлом.",
        false,
        "Місяць не має власного світла: він відбиває сонячне."
      ],
      "t26": [
        "Слон — найбільша сухопутна тварина.",
        true,
        "Африканський саванний слон може важити понад 6 тонн."
      ],
      "t27": [
        "Синій кит — найбільша тварина, відома науці.",
        true,
        "Сині кити бувають понад 30 метрів завдовжки — більші за будь-якого відомого динозавра."
      ],
      "t28": [
        "Хамелеон змінює колір лише для маскування.",
        false,
        "Його колір більше залежить від настрою, температури та сигналів іншим хамелеонам."
      ],
      "t29": [
        "Телефон винайшов Томас Едісон.",
        false,
        "Патент на телефон отримав Александер Грейам Белл у 1876 році."
      ],
      "t30": [
        "Пеніцилін відкрив Александер Флемінг.",
        true,
        "Флемінг відкрив пеніцилін у 1928 році — це був перший антибіотик."
      ],
      "t31": [
        "Найвищий вулкан Сонячної системи — на Марсі.",
        true,
        "Гора Олімп на Марсі має близько 22 км заввишки — майже в 2,5 раза вища за Еверест."
      ],
      "t32": [
        "Кров у наших венах синя.",
        false,
        "Кров завжди червона; вени лише здаються синіми через те, як світло проходить крізь шкіру."
      ],
      "t33": [
        "Атлантичний океан — найбільший на Землі.",
        false,
        "Найбільший — Тихий: він більший за весь суходіл Землі разом узятий."
      ],
      "t34": [
        "Росія — найбільша країна світу за площею.",
        true,
        "Росія займає понад 17 мільйонів квадратних кілометрів."
      ],
      "t35": [
        "Канада має найдовшу берегову лінію у світі.",
        true,
        "Узбережжя Канади тягнеться понад 200 000 км — довше, ніж у будь-якої іншої країни."
      ],
      "t36": [
        "Шлунок корови має чотири відділи.",
        true,
        "У корови один шлунок із чотирма камерами — так вона перетравлює траву."
      ],
      "t37": [
        "Лев — найбільша кішка у світі.",
        false,
        "Найбільша кішка — тигр, особливо амурський."
      ],
      "t38": [
        "Земля — найближча до Сонця планета.",
        false,
        "Найближчий Меркурій, далі Венера; Земля — третя планета."
      ],
      "t39": [
        "Сонячне світло долітає до Землі приблизно за 8 хвилин.",
        true,
        "Світло долає 150 мільйонів км від Сонця приблизно за 8 хвилин 20 секунд."
      ],
      "t40": [
        "Дельфіни сплять по черзі то однією, то другою половиною мозку.",
        true,
        "Одна половина відпочиває, а друга пильнує й не забуває дихати."
      ],
      "t41": [
        "Картопля походить з Ірландії.",
        false,
        "Картопля походить з Південної Америки: її вирощували в Андах тисячі років тому."
      ],
      "t42": [
        "Шоколад роблять із насіння какао-дерева.",
        true,
        "Плоди какао ростуть просто на стовбурі, а насіння всередині стає шоколадом."
      ],
      "t43": [
        "Акула — ссавець.",
        false,
        "Акула — риба: вона дихає зябрами. Морські ссавці — це кити й дельфіни."
      ],
      "t44": [
        "Деякі види бамбука можуть вирости майже на метр за день.",
        true,
        "Бамбук — одна з найшвидше зростаючих рослин на Землі."
      ],
      "t45": [
        "Сова може повернути голову на повні 360 градусів.",
        false,
        "Сова повертає голову приблизно на 270 градусів — багато, але не повне коло."
      ],
      "t46": [
        "Діамант і графіт в олівці складаються з однієї речовини.",
        true,
        "Обидва — чистий вуглець, просто атоми в них розташовані по-різному."
      ],
      "t47": [
        "Верблюд зберігає воду в горбі.",
        false,
        "У горбі верблюда — жир, а не вода: він дає енергію в далеких переходах."
      ],
      "t48": [
        "Найменша кістка людського тіла — у вусі.",
        true,
        "Стремінце в середньому вусі має лише близько 3 міліметрів."
      ],
      "t49": [
        "Великі папуги можуть жити понад 50 років.",
        true,
        "Ара й какаду за доброго догляду часто живуть 50 років і довше."
      ],
      "t50": [
        "Брати Райт здійснили перший політ на літаку з двигуном.",
        true,
        "Вони полетіли в 1903 році; найперший політ тривав 12 секунд."
      ],
      "t51": [
        "Колесо винайшли в Середньовіччі.",
        false,
        "Колесу понад 5000 років: його використовували в Месопотамії близько 3500 року до н. е."
      ],
      "t52": [
        "Морський коник — це риба.",
        true,
        "Морський коник дихає зябрами й плаває за допомогою плавця, як інші риби."
      ],
      "t53": [
        "Колібрі вміє літати задом наперед.",
        true,
        "Колібрі — єдині птахи, які справді вміють літати назад."
      ],
      "t54": [
        "Улітку Ейфелева вежа стає трохи вищою.",
        true,
        "Від тепла метал розширюється, і вежа виростає приблизно на 15 сантиметрів."
      ],
      "t55": [
        "Шкіра — найбільший орган людського тіла.",
        true,
        "Шкіра дорослої людини важить кілька кілограмів і захищає все тіло."
      ],
      "t56": [
        "Червоний колір дратує бика.",
        false,
        "Бик ледве розрізняє червоний: його провокує рух, а не колір."
      ],
      "t57": [
        "Кімнатна муха живе лише один день.",
        false,
        "Кімнатна муха живе близько місяця. Лише дорослі одноденки живуть день-два."
      ],
      "t58": [
        "Ананаси ростуть на деревах.",
        false,
        "Ананас росте на низькій листяній рослині, просто з її середини."
      ],
      "t59": [
        "Арахіс — це горіх.",
        false,
        "Арахіс — бобова рослина, родич гороху й квасолі. Його боби дозрівають під землею."
      ],
      "t60": [
        "Північний і Південний полюси однаково холодні.",
        false,
        "Південний полюс значно холодніший: він на високому крижаному континенті, а Північний — посеред океану."
      ]
    },
    "hints": {
      "h01": [
        "Пінгвін",
        "Я птах, але не вмію літати",
        "Живу там, де дуже холодно",
        "Завжди ношу фрак",
        "Страус",
        "Тюлень",
        "Чайка"
      ],
      "h02": [
        "Слон",
        "Я їм майже цілий день",
        "Мої вуха схожі на великі віяла",
        "У мене довгий хобот",
        "Носоріг",
        "Бегемот",
        "Жирафа"
      ],
      "h03": [
        "Жирафа",
        "Я сплю дуже мало, часто стоячи",
        "Їм листя з найвищих дерев",
        "У мене найдовша шия",
        "Зебра",
        "Верблюд",
        "Лось"
      ],
      "h04": [
        "Верблюд",
        "Я довго можу обходитися без води",
        "Мене називають кораблем пустелі",
        "У мене на спині один або два горби",
        "Кінь",
        "Віслюк",
        "Лама"
      ],
      "h05": [
        "Бджола",
        "Я вмію показувати іншим дорогу до квітів",
        "Працюю на луці від світанку до смеркання",
        "Я роблю мед",
        "Оса",
        "Муха",
        "Метелик"
      ],
      "h06": [
        "Черепаха",
        "Я можу прожити понад сто років",
        "Я ніколи не поспішаю",
        "Ношу свій дім на спині",
        "Равлик",
        "Ящірка",
        "Їжак"
      ],
      "h07": [
        "Кенгуру",
        "Хвіст допомагає мені тримати рівновагу",
        "Я живу в Австралії",
        "Ношу малюка в сумці",
        "Коала",
        "Заєць",
        "Білка"
      ],
      "h08": [
        "Сова",
        "Я можу повернути голову майже назад",
        "Полюю вночі",
        "Ухаю в темному лісі",
        "Ворона",
        "Орел",
        "Голуб"
      ],
      "h09": [
        "Дельфін",
        "Дихаю повітрям, хоч живу в морі",
        "Допомагаю людям і розмовляю свистом",
        "Люблю стрибати над хвилями",
        "Акула",
        "Кит",
        "Тюлень"
      ],
      "h10": [
        "Білка",
        "Ховаю їжу й іноді забуваю де",
        "Живу в дуплі",
        "Гризу горіхи й шишки",
        "Їжак",
        "Заєць",
        "Миша"
      ],
      "h11": [
        "Павук",
        "Я не комаха, хоч багато хто так думає",
        "У мене вісім ніг",
        "Плету тонку сітку",
        "Мураха",
        "Жук",
        "Комар"
      ],
      "h12": [
        "Кіт",
        "Бачу в темряві краще за людей",
        "Люблю тепле підвіконня",
        "Муркочу й ловлю мишей",
        "Кролик",
        "Хом’як",
        "Папуга"
      ],
      "h13": [
        "Кавун",
        "Науковці називають мене ягодою",
        "На мене чекають наприкінці літа",
        "Зовні зелений, усередині червоний",
        "Диня",
        "Гарбуз",
        "Ананас"
      ],
      "h14": [
        "Хліб",
        "Мене печуть майже в кожній країні",
        "Мене ріжуть скибками",
        "Буваю білим або житнім, зі скоринкою",
        "Млинець",
        "Пиріг",
        "Печиво"
      ],
      "h15": [
        "Мед",
        "Я можу зберігатися тисячі років",
        "Мене додають у теплий чай при застуді",
        "Мене роблять бджоли",
        "Варення",
        "Цукор",
        "Молоко"
      ],
      "h16": [
        "Лимон",
        "У мені багато вітаміну C",
        "Мене кладуть у чай",
        "Я жовтий і дуже кислий",
        "Апельсин",
        "Грейпфрут",
        "Лайм"
      ],
      "h17": [
        "Морква",
        "Росту під землею, видно лише бадилля",
        "Кажуть, я корисна для зору",
        "Я помаранчева, і кролики мене люблять",
        "Буряк",
        "Редиска",
        "Картопля"
      ],
      "h18": [
        "Яблуко",
        "Я буваю літнім і зимовим",
        "З мене роблять пироги й сік",
        "Росту на дереві, червоне чи зелене",
        "Груша",
        "Персик",
        "Слива"
      ],
      "h19": [
        "Банан",
        "Росту гронами на високій рослині",
        "Мавпи мене дуже люблять",
        "Я жовтий, і мене треба чистити",
        "Манго",
        "Ківі",
        "Ананас"
      ],
      "h20": [
        "Чай",
        "У Китаї мене п’ють тисячоліттями",
        "Я буваю чорним, зеленим чи трав’яним",
        "Мене заварюють окропом",
        "Кава",
        "Какао",
        "Сік"
      ],
      "h21": [
        "Яйце",
        "Без мене важко спекти торт",
        "З мене роблять омлет",
        "Мене несе курка",
        "Сир",
        "Горіх",
        "Картопля"
      ],
      "h22": [
        "Парасолька",
        "Більшість часу я складена",
        "Мене беруть, коли небо сіріє",
        "Захищаю від дощу",
        "Дощовик",
        "Капелюх",
        "Чоботи"
      ],
      "h23": [
        "Годинник",
        "Я можу працювати від піску чи сонця",
        "Вишу на стінах і стою на вежах",
        "Показую час стрілками",
        "Компас",
        "Календар",
        "Термометр"
      ],
      "h24": [
        "Ключ",
        "Без мене двері тебе не впустять",
        "Мене часто носять на кільці",
        "Я відмикаю замок",
        "Ножиці",
        "Викрутка",
        "Скріпка"
      ],
      "h25": [
        "Свічка",
        "Що довше працюю, то меншою стаю",
        "Мене запалюють, коли зникає світло",
        "Я з воску і маю ґніт",
        "Ліхтарик",
        "Лампа",
        "Сірники"
      ],
      "h26": [
        "Ножиці",
        "У мене два кільця й два гострі кінці",
        "Вирізаю фігурки з паперу",
        "Ріжу тканину й папір",
        "Ніж",
        "Голка",
        "Лінійка"
      ],
      "h27": [
        "Зубна щітка",
        "У мене багато щетинок",
        "Мене міняють кожні три місяці",
        "Чищу зуби вранці й увечері",
        "Мило",
        "Рушник",
        "Губка"
      ],
      "h28": [
        "Холодильник",
        "Усередині мене завжди зима",
        "Коли мене відчиняють, вмикається світло",
        "Тримаю їжу холодною",
        "Плита",
        "Духовка",
        "Шафа"
      ],
      "h29": [
        "Велосипед",
        "Я їжджу без пального й електрики",
        "У мене є кермо, дзвоник і ланцюг",
        "У мене два колеса й педалі",
        "Самокат",
        "Мотоцикл",
        "Скейтборд"
      ],
      "h30": [
        "Літак",
        "Маю крила, але я не птах",
        "На мене чекають в аеропорту",
        "Літаю над хмарами з пасажирами",
        "Гелікоптер",
        "Ракета",
        "Повітряна куля"
      ],
      "h31": [
        "Потяг",
        "Я їжджу лише своєю дорогою",
        "У мене багато вагонів",
        "Їжджу рейками від станції до станції",
        "Трамвай",
        "Автобус",
        "Метро"
      ],
      "h32": [
        "Міст",
        "Мене будують із каменю, дерева чи сталі",
        "Під мною можуть пропливати кораблі",
        "Я з’єдную два береги річки",
        "Тунель",
        "Дорога",
        "Гребля"
      ],
      "h33": [
        "Олівець",
        "Усередині мене графіт",
        "Мене стругають, коли я затуплююся",
        "Пишу й малюю; гумка стирає мої сліди",
        "Ручка",
        "Крейда",
        "Фломастер"
      ],
      "h34": [
        "Книжка",
        "Я мовчу, але багато чого навчаю",
        "У мене є обкладинка й сторінки",
        "Мене читають і беруть у бібліотеці",
        "Журнал",
        "Газета",
        "Зошит"
      ],
      "h35": [
        "Валіза",
        "Я багато подорожую, але завжди в чиїйсь руці",
        "Мене пакують перед поїздкою",
        "У мене ручка й колеса, а в мені одяг",
        "Рюкзак",
        "Сумка",
        "Коробка"
      ],
      "h36": [
        "Бібліотека",
        "Тут просять говорити тихо",
        "Тут видають читацький квиток",
        "Тисячі книжок, які можна взяти додому",
        "Школа",
        "Книгарня",
        "Архів"
      ],
      "h37": [
        "Аеропорт",
        "Тут є паспортний контроль",
        "Тут оголошують посадку на рейси",
        "Звідси злітають літаки",
        "Вокзал",
        "Порт",
        "Автовокзал"
      ],
      "h38": [
        "Пустеля",
        "Удень спекотно, а ночі бувають дуже холодні",
        "Тут трапляються оазиси",
        "Багато піску й дуже мало води",
        "Степ",
        "Савана",
        "Пляж"
      ],
      "h39": [
        "Вулкан",
        "Я можу спати сотні років",
        "З моєї вершини йде дим",
        "Я вивергаю лаву",
        "Гора",
        "Гейзер",
        "Острів"
      ],
      "h40": [
        "Веселка",
        "Мене видно, лише коли сонце за спиною",
        "Я часто з’являюся після дощу",
        "Сім кольорів дугою на небі",
        "Блискавка",
        "Хмара",
        "Полярне сяйво"
      ],
      "h41": [
        "Місяць",
        "Я завжди показую Землі один бік",
        "Буваю повним або тонким серпом",
        "Сяю на нічному небі",
        "Сонце",
        "Зірка",
        "Комета"
      ],
      "h42": [
        "Сніг",
        "Кожна моя сніжинка неповторна",
        "З мене будують фортеці",
        "Білий і холодний, падаю взимку",
        "Дощ",
        "Град",
        "Іній"
      ],
      "h43": [
        "Річка",
        "У мене є витік і гирло",
        "Мною пливуть човни",
        "Течу з гір до моря",
        "Озеро",
        "Море",
        "Струмок"
      ],
      "h44": [
        "Кактус",
        "Я довго можу жити без води",
        "Росту в пустелях і на підвіконнях",
        "Я вкритий колючками",
        "Алое",
        "Пальма",
        "Ромашка"
      ],
      "h45": [
        "Соняшник",
        "З мого насіння роблять олію",
        "Повертаюся за сонцем",
        "Велика жовта квітка, повна насіння",
        "Ромашка",
        "Тюльпан",
        "Кульбаба"
      ],
      "h46": [
        "Дуб",
        "Я можу жити понад тисячу років",
        "Мене вважають символом сили",
        "На мені ростуть жолуді",
        "Береза",
        "Сосна",
        "Клен"
      ],
      "h47": [
        "Острів",
        "На мені може вміститися ціла країна",
        "До мене дістаються човном або літаком",
        "Мене з усіх боків оточує вода",
        "Півострів",
        "Риф",
        "Мис"
      ],
      "h48": [
        "Водоспад",
        "Мене чути здалеку",
        "Найвищий із нас — у Венесуелі",
        "Тут річка падає з урвища",
        "Фонтан",
        "Гейзер",
        "Джерело"
      ],
      "h49": [
        "Лікар",
        "Я довго вчуся, перш ніж почати працювати",
        "Ношу білий халат",
        "Лікую хворих людей",
        "Медбрат",
        "Фармацевт",
        "Ветеринар"
      ],
      "h50": [
        "Пожежник",
        "Чергую вдень і вночі",
        "Працюю з водою та драбинами",
        "Гашу пожежі",
        "Поліцейський",
        "Рятувальник",
        "Будівельник"
      ],
      "h51": [
        "Кухар",
        "Куштую все, що готую",
        "Працюю біля гарячої плити",
        "Готую страви в ресторані",
        "Пекар",
        "Офіціант",
        "Кондитер"
      ],
      "h52": [
        "Учитель",
        "Увечері перевіряю зошити",
        "Стою біля дошки",
        "Навчаю дітей у школі",
        "Директор школи",
        "Бібліотекар",
        "Вихователь"
      ],
      "h53": [
        "Пілот",
        "Моє робоче місце — кабіна",
        "Звертаюся до пасажирів через гучномовець",
        "Керую літаком",
        "Капітан",
        "Водій",
        "Космонавт"
      ],
      "h54": [
        "Листоноша",
        "Я знаю кожну адресу в своєму районі",
        "Ношу велику сумку",
        "Доставляю листи й посилки",
        "Кур’єр",
        "Таксист",
        "Продавець"
      ],
      "h55": [
        "Садівник",
        "Я знаю, коли що садити",
        "Мої інструменти — лійка й секатор",
        "Доглядаю квіти й дерева",
        "Фермер",
        "Лісник",
        "Флорист"
      ],
      "h56": [
        "Фотограф",
        "Я ловлю миті",
        "Прошу всіх не рухатися",
        "Працюю з камерою та знімками",
        "Художник",
        "Журналіст",
        "Оператор"
      ],
      "h57": [
        "Рибалка",
        "Встаю до світанку й довго чекаю",
        "Мені потрібні вудка й терпіння",
        "Ловлю рибу",
        "Фермер",
        "Моряк",
        "Пастух"
      ],
      "h58": [
        "Космонавт",
        "Я довго тренуюся на Землі",
        "Ношу скафандр",
        "Літаю в космос",
        "Пілот",
        "Астроном",
        "Інженер"
      ],
      "h59": [
        "Архітектор",
        "Мою роботу видно по всьому місту",
        "Креслю плани",
        "Проєктую будинки",
        "Будівельник",
        "Дизайнер",
        "Інженер"
      ],
      "h60": [
        "Стоматолог",
        "Багато хто боїться мого крісла",
        "Працюю з бормашиною",
        "Лікую зуби",
        "Хірург",
        "Окуліст",
        "Педіатр"
      ]
    },
    "dreams": {
      "d01": [
        "Де хотілося б жити через десять років?",
        "Біля моря",
        "У горах",
        "У великому місті",
        "У тихому селі"
      ],
      "d02": [
        "Який дім хотілося б мати колись?",
        "Затишна квартира",
        "Будинок із садом",
        "Хатинка біля озера",
        "Старий дім з історією"
      ],
      "d03": [
        "Що хотілося б вирощувати в саду?",
        "Яблуні",
        "Троянди",
        "Овочі й зелень",
        "Полуницю"
      ],
      "d04": [
        "Яку тварину хотілося б мати?",
        "Кішку",
        "Папугу",
        "Акваріумних рибок",
        "Черепаху"
      ],
      "d05": [
        "Куди хотілося б поїхати насамперед?",
        "Японія",
        "Марокко",
        "Ісландія",
        "Нова Зеландія"
      ],
      "d06": [
        "Як хотілося б подорожувати?",
        "Потягом",
        "Автомобілем",
        "Літаком",
        "Кораблем"
      ],
      "d07": [
        "Яку мову хотілося б вивчити?",
        "Арабську",
        "Японську",
        "Іспанську",
        "Китайську"
      ],
      "d08": [
        "Чого хотілося б навчитися?",
        "Малювати",
        "Шити",
        "Плавати",
        "Програмувати"
      ],
      "d09": [
        "Яку страву хотілося б опанувати?",
        "Плов",
        "Домашній хліб",
        "Суші",
        "Пахлаву"
      ],
      "d10": [
        "Як хотілося б проводити вихідні?",
        "На природі",
        "Удома з книжкою",
        "У гостях у рідних",
        "У новому місті"
      ],
      "d11": [
        "Яким був би ідеальний ранок вихідного?",
        "Рання прогулянка",
        "Неспішний сніданок",
        "Зарядка на свіжому повітрі",
        "Чай на балконі"
      ],
      "d12": [
        "На що хотілося б накопичити?",
        "На власне житло",
        "На велику подорож",
        "На автомобіль",
        "На навчання"
      ],
      "d13": [
        "Якою роботою хотілося б займатися?",
        "Власна справа",
        "Робота у великій компанії",
        "Робота з дому",
        "Допомога людям"
      ],
      "d14": [
        "Як хотілося б допомагати іншим?",
        "Волонтерство",
        "Допомога тваринам",
        "Навчання дітей",
        "Висаджування дерев"
      ],
      "d15": [
        "Яку сімейну традицію хотілося б мати?",
        "Недільний обід разом",
        "Вечори настільних ігор",
        "Прогулянки у вихідні",
        "Сімейний фотоальбом"
      ],
      "d16": [
        "Яку кухню хотілося б мати?",
        "Велику сімейну",
        "Світлу й затишну",
        "З видом на сад",
        "Маленьку, але зручну"
      ],
      "d17": [
        "Що хотілося б побачити на власні очі?",
        "Полярне сяйво",
        "Піраміди Гізи",
        "Водоспад Вікторія",
        "Гімалаї"
      ],
      "d18": [
        "Чим хотілося б займатися вечорами?",
        "Читанням",
        "Готуванням чогось нового",
        "Вивченням мов",
        "Прогулянками в парку"
      ],
      "d19": [
        "Яке хобі хотілося б почати?",
        "Фотографія",
        "Гончарство",
        "Вишивка",
        "Садівництво"
      ],
      "d20": [
        "Куди хотілося б поїхати на вихідні?",
        "До лісу",
        "На озеро",
        "У сусіднє місто",
        "У гори"
      ],
      "d21": [
        "Яким було б ідеальне робоче місце?",
        "Біля вікна",
        "З книжковими полицями",
        "Повне зелених рослин",
        "Майже порожнє"
      ],
      "d22": [
        "Що хотілося б вивчати далі?",
        "Медицину",
        "Історію",
        "Економіку",
        "Дизайн"
      ],
      "d23": [
        "Яке дерево хотілося б посадити?",
        "Дуб",
        "Яблуню",
        "Оливу",
        "Фінікову пальму"
      ],
      "d24": [
        "Що хотілося б приготувати для гостей?",
        "Домашній пиріг",
        "Великий плов",
        "Сімейний суп",
        "Свіжі салати"
      ],
      "d25": [
        "Яке місто хотілося б відвідати?",
        "Стамбул",
        "Париж",
        "Токіо",
        "Каїр"
      ],
      "d26": [
        "Як хотілося б провести літо?",
        "Біля моря",
        "У горах",
        "На дачі",
        "Мандруючи своєю країною"
      ],
      "d27": [
        "Якого птаха хотілося б тримати?",
        "Канарку",
        "Хвилястого папугу",
        "Голубів",
        "Амадин"
      ],
      "d28": [
        "Який спорт хотілося б спробувати?",
        "Плавання",
        "Верхова їзда",
        "Стрільба з лука",
        "Скелелазіння"
      ],
      "d29": [
        "Які книжки хотілося б збирати?",
        "Енциклопедії",
        "Класику",
        "Книжки про подорожі",
        "Кулінарні книжки"
      ],
      "d30": [
        "Що хотілося б зробити власноруч?",
        "Меблі",
        "Власний посуд",
        "В’язаний плед",
        "Шпаківню"
      ],
      "d31": [
        "Де хотілося б влаштувати пікнік?",
        "На березі річки",
        "У саду",
        "На лісовій галявині",
        "У горах"
      ],
      "d32": [
        "На чому хотілося б колись пересуватися?",
        "На електромобілі",
        "На велосипеді",
        "На великому сімейному авто",
        "Без авто"
      ],
      "d33": [
        "Чим хотілося б займатися на пенсії?",
        "Садом",
        "Подорожами",
        "Онуками",
        "Навчанням нового"
      ],
      "d34": [
        "Яку добру справу хотілося б зробити?",
        "Збудувати криницю",
        "Допомогти притулку для котів",
        "Зібрати книжки для школи",
        "Посадити алею дерев"
      ],
      "d35": [
        "Що хотілося б на сніданок у вихідні?",
        "Млинці",
        "Омлет",
        "Кашу з фруктами",
        "Сирники"
      ],
      "d36": [
        "Де хотілося б приймати гостей?",
        "На кухні",
        "У вітальні",
        "На терасі",
        "У саду"
      ],
      "d37": [
        "Яке диво природи хотілося б побачити?",
        "Великий каньйон",
        "Ніагарський водоспад",
        "Озеро Титикака",
        "Сахару"
      ],
      "d38": [
        "Якої домашньої навички хотілося б навчитися?",
        "Ремонту своїми руками",
        "Шиття",
        "Випікання хліба",
        "Догляду за садом"
      ],
      "d39": [
        "Скількома мовами хотілося б говорити?",
        "Двома",
        "Трьома",
        "П’ятьма",
        "Якомога більшою кількістю"
      ],
      "d40": [
        "Який колір стін хотілося б удома?",
        "Білий",
        "Бежевий",
        "Світло-зелений",
        "Блакитний"
      ],
      "d41": [
        "Яку рибку хотілося б в акваріумі?",
        "Золоту рибку",
        "Гупі",
        "Сомика",
        "Скалярію"
      ],
      "d42": [
        "Яку подорож хотілося б подарувати батькам?",
        "Відпочинок біля моря",
        "Екскурсію містом",
        "Поїздку в гори",
        "Подорож потягом"
      ],
      "d43": [
        "Чим хотілося б займатися у вільний час?",
        "Малюванням",
        "Читанням",
        "Спортом",
        "Рукоділлям"
      ],
      "d44": [
        "У яку пору року хотілося б подорожувати?",
        "Навесні",
        "Улітку",
        "Восени",
        "Узимку"
      ],
      "d45": [
        "Що хотілося б заготувати на зиму?",
        "Варення",
        "Соління",
        "Сухофрукти",
        "Компот"
      ],
      "d46": [
        "Яку ще професію хотілося б спробувати?",
        "Кухар",
        "Програміст",
        "Перекладач",
        "Столяр"
      ],
      "d47": [
        "Яку країну хотілося б пізнати?",
        "Малайзію",
        "Італію",
        "Канаду",
        "Індонезію"
      ],
      "d48": [
        "Що хотілося б мати у дворі?",
        "Невеликий фонтан",
        "Город",
        "Альтанку",
        "Гойдалку"
      ],
      "d49": [
        "Як хотілося б святкувати успіхи?",
        "Сімейною вечерею",
        "Виїздом на природу",
        "Новою книжкою",
        "Доброю справою для інших"
      ],
      "d50": [
        "Що хотілося б передати дітям?",
        "Любов до книжок",
        "Уміння готувати",
        "Рідну мову",
        "Турботу про природу"
      ]
    }
  },
  "pt": {
    "text": {
      "homeLink": "Jogos a dois",
      "eyebrow": "GLOWLETTER · JOGOS A DOIS",
      "title": "Joguem juntos",
      "close": "Fechar",
      "lead": "Envie um jogo a alguém querido. Jogar a partir de um link é grátis e não precisa de conta.",
      "quizTitle": "Quanto você me conhece?",
      "quizNote": "Responda a perguntas sobre você, e alguém próximo tenta adivinhar. O resultado volta para você.",
      "create": "Criar um quiz",
      "soon": "Em breve",
      "soonTitle": "Mais jogos a caminho",
      "duel": "Duelo «Quem é mais rápido»",
      "loves": "O que amamos",
      "cards": "Cartas de memória a dois",
      "who": "Quem de nós?",
      "phrase": "Complete a frase",
      "myQuizzes": "Meus quizzes",
      "noQuizzes": "Ainda não há quizzes. O primeiro leva dois minutos.",
      "forWhom": "Para {name}",
      "noRecipient": "Quiz",
      "resultsCount": "Resultados: {count}",
      "newResults": "Novos: {count}",
      "noResults": "Ninguém jogou ainda.",
      "anonymous": "Sem nome",
      "results": "Resultados",
      "copyLink": "Copiar link",
      "share": "Enviar",
      "deleteQuiz": "Excluir quiz",
      "deleteConfirm": "Excluir este quiz e os resultados? O link deixará de funcionar.",
      "deleted": "Quiz excluído",
      "linkCopied": "Link copiado",
      "back": "Voltar",
      "next": "Avançar",
      "stepNames": "Passo 1 de 2 · Nomes",
      "yourName": "Seu nome",
      "yourNamePlaceholder": "Como você se chama",
      "recipient": "Para quem · opcional",
      "recipientPlaceholder": "Nome da pessoa querida",
      "nameRequired": "Digite seu nome.",
      "forbiddenName": "Digite um nome comum.",
      "stepAnswers": "Passo 2 de 2 · Suas respostas",
      "answersLead": "Marque o que é verdade sobre você. Qualquer pergunta pode ser trocada.",
      "swap": "Outra pergunta",
      "progress": "{done} de {total} respondidas",
      "answerAll": "Escolha uma resposta em cada pergunta.",
      "finish": "Obter o link",
      "creating": "Criando o quiz…",
      "createdTitle": "Seu quiz está pronto!",
      "createdLead": "Envie o link. Quando a pessoa responder, o resultado aparece em «Meus quizzes».",
      "shareText": "{name} convida você para o jogo «Quanto você me conhece?»",
      "signInTitle": "Entre na sua conta",
      "signInNote": "O quiz fica na sua conta para que os resultados cheguem a você.",
      "signIn": "Entrar",
      "premiumNote": "Criar jogos faz parte do acesso completo. Jogar a partir de um link é grátis para todos.",
      "failed": "Algo deu errado. Verifique a conexão e tente novamente.",
      "rateLimited": "Tentativas demais. Tente mais tarde.",
      "playEyebrow": "UM JOGO A DOIS",
      "playInvite": "{name} convida você para jogar",
      "playLead": "Perguntas: {count}. Adivinhe as respostas — no fim você verá quantas coincidem.",
      "playName": "Seu nome · opcional",
      "playNamePlaceholder": "Para saberem que é você",
      "start": "Começar",
      "playLoading": "Carregando o jogo…",
      "playMissing": "Este jogo não está disponível: o link foi excluído ou expirou.",
      "playOffline": "O jogo precisa de conexão com a internet.",
      "retry": "Tentar de novo",
      "questionOf": "Pergunta {n} de {total}",
      "asks": "{name} pergunta",
      "counting": "Contando as coincidências…",
      "scoreOf": "{score} de {total}",
      "tierAll": "Perfeito! Vocês se conhecem melhor que ninguém",
      "tierHigh": "Vocês se conhecem muito bem",
      "tierMid": "Nada mal! Ainda há o que descobrir",
      "tierLow": "Muitas descobertas bonitas pela frente",
      "sentTo": "{name} verá seu resultado",
      "review": "Suas respostas",
      "rightAnswer": "Resposta certa",
      "makeOwn": "Criar meu quiz",
      "home": "Início",
      "resultToast": "{name}: {score} de {total} em «Quanto você me conhece?»",
      "ownerAnswers": "Respostas do autor",
      "playerAnswers": "Respostas de {name}",
      "paywallTitle": "Jogos, diversão<br><em>e cartas</em>",
      "groupGames": "Jogos",
      "groupFun": "Diversão",
      "groupLetters": "Cartas",
      "featQuiz": "«Quanto você me conhece?» — o resultado volta para você",
      "featGamesSoon": "Duelo «Quem é mais rápido», «O que amamos», cartas com ursinhos",
      "featFunSoon": "«Quem de nós?» e «Complete a frase» com o livro do casal",
      "featCollection": "Toda a coleção de cartas e poemas em 15 idiomas",
      "featMoments": "Momentos, lembretes e uma carta QR que abre no dia certo",
      "featAudio": "Seu próprio áudio na carta e respostas do destinatário",
      "groupTalk": "Amigos e chamadas",
      "featCall": "Chamadas com amigos: voz, alto-falante e reações animadas",
      "ynTitle": "Sim ou não",
      "ynNote": "Um jogo ao vivo a dois: 5 segundos por cartão. Quem responder a tempo vê a resposta da outra pessoa.",
      "ynCreate": "Criar sala",
      "ynWaiting": "Esperando {name} abrir o link…",
      "ynWaitingAny": "Esperando a outra pessoa…",
      "ynShareText": "{name} convida você para o jogo ao vivo «Sim ou não»",
      "ynPartnerHere": "{name} chegou!",
      "ynStart": "Começar o jogo",
      "ynWaitHost": "{name} já vai começar o jogo",
      "ynYes": "Sim",
      "ynNo": "Não",
      "ynMissed": "Tarde demais — este cartão fica fechado",
      "ynMatch": "Combinaram!",
      "ynRound": "Cartão {n} de {total}",
      "ynAnswered": "Resposta enviada, esperando a outra pessoa…",
      "ynFinal": "{score} de {total} em comum",
      "ynFinalHigh": "Vocês se entendem sem palavras",
      "ynFinalMid": "Tão diferentes — e tão próximos",
      "ynAgain": "Jogar de novo",
      "ynLeft": "A outra pessoa se desconectou. Esperando a volta…",
      "ynYou": "Você",
      "ynOffline": "Não foi possível conectar ao jogo. Verifique a internet e abra o link de novo.",
      "ynJoin": "Entrar no jogo",
      "ynJoinLead": "{name} está esperando por você. 5 segundos por resposta!",
      "ynStepNames": "Seu nome e o da outra pessoa",
      "ynRoomReady": "A sala está pronta — envie o link",
      "ynStayHere": "Mantenha esta tela aberta: o jogo começa quando o link for aberto.",
      "featYesNo": "Jogo ao vivo «Sim ou não» — 5 segundos por resposta",
      "ynPartnerMissed": "Sem resposta — o tempo acabou",
      "lvTitle": "O que amamos",
      "lvNote": "Um jogo ao vivo a dois: 4 imagens, 10 segundos para escolher o que você mais gosta. Vocês podem escolher a mesma!",
      "lvShareText": "{name} convida você para o jogo ao vivo «O que amamos»",
      "lvJoinLead": "{name} está esperando por você. Escolha a imagem de que mais gosta!",
      "lvRound": "Tema {n} de {total}",
      "lvPick": "Escolha o que você mais gosta",
      "lvBoth": "Vocês dois escolheram: {item}",
      "lvCommon": "Vocês dois amam",
      "lvDiff": "Gostos diferentes — ainda mais interessante!",
      "lvFinalHigh": "Vocês têm tanto em comum!",
      "lvFinalMid": "Tão diferentes — e se completam",
      "featLoves": "Jogo ao vivo «O que amamos» — 4 imagens, escolham juntos",
      "featGamesSoon2": "Duelo «Quem é mais rápido» e cartas de memória com ursinhos",
      "mcTitle": "Cartas de memória com ursinhos",
      "mcNote": "Um jogo da memória ao vivo a dois: revezem-se virando duas cartas e encontrem os pares. Três níveis, de 8 a 16 cartas.",
      "mcShareText": "{name} convida você para o jogo ao vivo «Cartas de memória com ursinhos»",
      "mcJoinLead": "{name} está esperando por você. Encontrem os pares revezando!",
      "mcLevel": "Nível {n} de {total}",
      "mcTurnYou": "Sua vez — vire duas cartas",
      "mcTurnThem": "Vez de {name}",
      "mcPairs": "Pares encontrados: {found} de {total}",
      "mcLevelDone": "Todos os pares encontrados!",
      "mcTimeUp": "O tempo do nível acabou",
      "mcNext": "Próximo: nível {n}",
      "mcFinal": "Pares encontrados: {found} de {total}",
      "mcFinalHigh": "Que time incrível!",
      "mcFinalMid": "Bom jogo — mais uma?",
      "featCards": "Jogo ao vivo «Cartas de memória com ursinhos» — encontrem pares juntos",
      "featGamesSoon3": "Duelo «Quem é mais rápido»",
      "duTitle": "Quem é mais rápido",
      "duNote": "Um duelo ao vivo: uma palavra e quatro imagens. Toque primeiro na imagem certa — um toque errado faz perder a rodada.",
      "duShareText": "{name} desafia você para o duelo ao vivo «Quem é mais rápido»",
      "duJoinLead": "{name} está esperando por você. Encontre a imagem certa mais depressa!",
      "duRound": "Rodada {n} de {total}",
      "duFind": "Encontre: {item}",
      "duYouWon": "Você chegou primeiro!",
      "duTheyWon": "Chegou primeiro: {name}",
      "duWrong": "Imagem errada — rodada perdida",
      "duNobody": "Ninguém encontrou a tempo",
      "duScore": "Você {you} : {them} {name}",
      "duFinalWin": "Vitória! Que olhar afiado hoje.",
      "duFinalLose": "Desta vez quem vence é {name} — revanche?",
      "duFinalDraw": "Empate — vocês estão de igual para igual!",
      "duSeconds": "{s} s",
      "featDuel": "Duelo ao vivo «Quem é mais rápido» — encontre a imagem primeiro",
      "whoTitle": "Quem de nós?",
      "whoNote": "Um jogo ao vivo para dois: uma pergunta, toque em «Eu» ou no nome da outra pessoa. Vejam se vocês concordam.",
      "whoShareText": "{name} convida você para o jogo ao vivo «Quem de nós?»",
      "whoJoinLead": "{name} está esperando por você. Responda com sinceridade — depois comparem!",
      "whoRound": "Pergunta {n} de {total}",
      "whoMe": "Eu",
      "whoAgree": "Vocês concordam: {name}",
      "whoDiffer": "Opiniões diferentes — conversem sobre isso!",
      "whoFinal": "Vocês concordaram {score} de {total} vezes",
      "whoFinalHigh": "Vocês se conhecem tão bem!",
      "whoFinalMid": "Muito assunto para conversar — e isso é lindo",
      "featWho": "Jogo ao vivo «Quem de nós?» — vocês concordam?",
      "phTitle": "Complete a frase",
      "phNote": "Um jogo ao vivo para dois: cada pessoa completa a mesma frase carinhosa com as próprias palavras, e depois vocês leem as respostas.",
      "phShareText": "{name} convida você para o jogo ao vivo «Complete a frase»",
      "phJoinLead": "{name} está esperando por você. Complete cada frase com suas palavras!",
      "phRound": "Frase {n} de {total}",
      "phPlaceholder": "Seu final…",
      "phDone": "Pronto",
      "phWaiting": "Esperando {name}…",
      "phSkipped": "Sem resposta",
      "phSave": "Salvar no livro do casal",
      "phSaved": "Salvo no livro do casal",
      "phForbidden": "Escreva sem links nem palavras grosseiras.",
      "phNext": "Próxima frase",
      "phFinal": "Frases completadas a dois: {count}",
      "phFinalLead": "Salvem as respostas de que mais gostaram no livro do casal.",
      "featPhrase": "Jogo ao vivo «Complete a frase» com o livro do casal",
      "bookTitle": "Livro do casal",
      "bookNote": "As respostas mais carinhosas de «Complete a frase», guardadas na sua conta.",
      "bookOpen": "Abrir o livro",
      "bookEmpty": "O livro ainda está vazio. Joguem «Complete a frase» e salvem as respostas de que gostarem.",
      "bookDelete": "Excluir",
      "bookDeleteConfirm": "Excluir esta página do livro?",
      "bookYou": "Você",
      "inviteTitle": "Convidar alguém",
      "inviteNote": "A pessoa vai receber uma mensagem com o jogo.",
      "invite": "Convidar",
      "invited": "Convite enviado",
      "inviteNone": "Adicione amigos na seção «Amigos» para convidar com um toque.",
      "inviteSent": "Convite enviado para {name}",
      "truth": "Verdadeiro ou falso",
      "tfTitle": "Verdadeiro ou falso",
      "tfNote": "Um jogo ao vivo a dois: fatos incríveis sobre o mundo. 12 segundos — verdadeiro ou falso? Um ponto por cada acerto.",
      "tfShareText": "{name} convida você para o jogo ao vivo «Verdadeiro ou falso»",
      "tfJoinLead": "{name} está esperando por você. Verdadeiro ou falso — decida rápido!",
      "tfRound": "Fato {n} de {total}",
      "tfTrue": "Verdadeiro",
      "tfFalse": "Falso",
      "tfIsTrue": "É verdade!",
      "tfIsFalse": "É falso!",
      "tfFirstYou": "Você acertou primeiro!",
      "tfFirstThem": "{name} acertou primeiro",
      "tfFinalWin": "Vitória! Você sabe mais sobre o mundo.",
      "tfFinalLose": "Desta vez {name} sabe mais — revanche?",
      "tfFinalDraw": "Empate — vocês sabem exatamente o mesmo!",
      "featTruth": "Jogo ao vivo «Verdadeiro ou falso» — fatos incríveis sobre o mundo",
      "countries": "Adivinhe o país",
      "coTitle": "Adivinhe o país",
      "coNote": "Um jogo ao vivo para dois: o urso viaja pelo mundo. 10 segundos — adivinhe em que país ele está! Um ponto a cada acerto.",
      "coShareText": "{name} convida você para o jogo ao vivo «Adivinhe o país»",
      "coJoinLead": "{name} está esperando você. Adivinhe o país pela imagem!",
      "coRound": "País {n} de {total}",
      "coAsk": "Que país é este?",
      "coFinalWin": "Vitória! Você conhece o mundo de verdade.",
      "coFinalLose": "Desta vez {name} conhece melhor o mundo — revanche?",
      "coFinalDraw": "Empate — vocês conhecem bem o mundo!",
      "featCountries": "Jogo ao vivo «Adivinhe o país» — 40 países",
      "hints": "Adivinhe pelas pistas",
      "dreams": "Sonhos e planos",
      "hiTitle": "Adivinhe pelas pistas",
      "hiNote": "Um jogo ao vivo a dois: três pistas se abrem uma a uma. Acertou na primeira — 3 pontos, na segunda — 2, na terceira — 1.",
      "hiShareText": "{name} convida você para o jogo ao vivo «Adivinhe pelas pistas»",
      "hiJoinLead": "{name} está esperando por você. Adivinhe o quanto antes!",
      "hiRound": "Enigma {n} de {total}",
      "hiAsk": "O que é?",
      "hiClue": "Pista {n}",
      "hiPoints": "Pontos: +{n}",
      "hiNoPoints": "Sem pontos desta vez",
      "hiFinalWin": "Vitória! Você manda muito bem em adivinhar.",
      "hiFinalLose": "Desta vez {name} adivinhou melhor — revanche?",
      "hiFinalDraw": "Empate — vocês adivinham muito bem!",
      "featHints": "Jogo ao vivo «Adivinhe pelas pistas» — 3, 2 ou 1 ponto",
      "drTitle": "Sonhos e planos",
      "drNote": "Um jogo ao vivo a dois: casa, viagens, estudos e hobbies. Escolha o que você gostaria e vejam se os sonhos combinam.",
      "drShareText": "{name} convida você para o jogo ao vivo «Sonhos e planos»",
      "drJoinLead": "{name} está esperando por você. Escolha o que você gostaria de verdade!",
      "drRound": "Pergunta {n} de {total}",
      "drPick": "Escolha o que você gostaria",
      "drBoth": "Sonho em comum: {item}",
      "drDiff": "Sonhos diferentes — contem um ao outro o porquê!",
      "drFinalHigh": "Vocês têm tantos sonhos em comum!",
      "drFinalMid": "Sonhos diferentes — muito assunto para conversar",
      "drCommon": "Seus sonhos em comum",
      "featDreams": "Jogo ao vivo «Sonhos e planos» — seus sonhos combinam?",
      "modestTitle": "Modo discreto",
      "modestNote": "Sem perguntas sobre sentimentos, abraços ou encontros — só amigáveis"
    },
    "questions": {
      "q01": [
        "Minha estação favorita?",
        "Primavera",
        "Verão",
        "Outono",
        "Inverno"
      ],
      "q02": [
        "O que eu escolheria no café da manhã?",
        "Café e croissant",
        "Mingau",
        "Ovos",
        "Só chá"
      ],
      "q03": [
        "Meu dia de folga perfeito?",
        "Em casa debaixo de uma manta",
        "Um passeio no parque",
        "Uma escapada da cidade",
        "Tempo com amigos"
      ],
      "q04": [
        "Para onde sonho viajar?",
        "Para a praia",
        "Para as montanhas",
        "Para uma cidade grande",
        "Para uma casinha aconchegante no campo"
      ],
      "q05": [
        "Meu sorvete favorito?",
        "Baunilha",
        "Chocolate",
        "Morango",
        "Pistache"
      ],
      "q06": [
        "O que me anima mais rápido?",
        "Um abraço",
        "Uma surpresa",
        "Palavras carinhosas",
        "Algo gostoso"
      ],
      "q07": [
        "Eu sou mais…",
        "De acordar cedo",
        "De dormir tarde",
        "De dormir quando dá",
        "Fã de uma soneca"
      ],
      "q08": [
        "Que filme eu escolheria hoje à noite?",
        "Uma comédia",
        "Uma história romântica",
        "Um mistério",
        "Uma animação"
      ],
      "q09": [
        "Minha cor favorita?",
        "Vermelho",
        "Azul",
        "Verde",
        "Rosa"
      ],
      "q10": [
        "Do que tenho mais medo?",
        "De aranhas",
        "De altura",
        "Do escuro",
        "De me atrasar"
      ],
      "q11": [
        "Que flores eu amo?",
        "Rosas",
        "Tulipas",
        "Peônias",
        "Margaridas"
      ],
      "q12": [
        "O que faço quando estou triste?",
        "Ligo para alguém próximo",
        "Como um doce",
        "Saio para caminhar",
        "Vou dormir"
      ],
      "q13": [
        "Que animal mais combina comigo?",
        "Um gatinho",
        "Um cachorro",
        "Um filhote de urso",
        "Uma raposinha"
      ],
      "q14": [
        "O melhor presente para mim?",
        "Algo feito à mão",
        "Uma viagem",
        "Uma joia",
        "Um livro"
      ],
      "q15": [
        "Minha bebida favorita?",
        "Chá preto",
        "Chá verde",
        "Café",
        "Chocolate quente"
      ],
      "q16": [
        "Meu lanche favorito?",
        "Chocolate",
        "Batata chips",
        "Frutas",
        "Um docinho de padaria"
      ],
      "q17": [
        "O que escolho numa viagem?",
        "Museus",
        "A praia",
        "A comida local",
        "Passear sem roteiro"
      ],
      "q18": [
        "Como gosto de passar a noite?",
        "Com um livro",
        "Com uma série",
        "Conversando",
        "Caminhando"
      ],
      "q19": [
        "Que tempo mais me agrada?",
        "Sol",
        "Chuva morna",
        "Neve caindo",
        "Uma brisa leve"
      ],
      "q20": [
        "Que superpoder combinaria comigo?",
        "Voar",
        "Ler mentes",
        "Parar o tempo",
        "Me teletransportar"
      ],
      "q21": [
        "O que mais importa para mim nas pessoas queridas?",
        "Confiança",
        "Cuidado",
        "Senso de humor",
        "Apoio"
      ],
      "q22": [
        "Que data eu mais espero?",
        "Ano-Novo",
        "Meu aniversário",
        "As férias de verão",
        "Dia dos Namorados"
      ],
      "q23": [
        "Como costumo dizer «eu te amo»?",
        "Com palavras",
        "Com atitudes",
        "Com abraços",
        "Com presentes"
      ],
      "q24": [
        "O que eu pediria num café?",
        "Massa",
        "Sushi",
        "Uma salada",
        "Uma sobremesa"
      ],
      "q25": [
        "Minha hora favorita do dia?",
        "Manhã",
        "Tarde",
        "Fim de tarde",
        "Noite"
      ],
      "q26": [
        "Que cozinha eu escolheria?",
        "Italiana",
        "Japonesa",
        "Caseira",
        "Mexicana"
      ],
      "q27": [
        "Onde eu penso melhor?",
        "No banho",
        "Caminhando",
        "Viajando",
        "Antes de dormir"
      ],
      "q28": [
        "O que faço logo de manhã?",
        "Olho o celular",
        "Bebo água",
        "Faço café",
        "Fico mais um pouco na cama"
      ],
      "q29": [
        "Minha fruta favorita?",
        "Maçã",
        "Banana",
        "Manga",
        "Melancia"
      ],
      "q30": [
        "Que hobby combina mais comigo?",
        "Desenhar",
        "Cozinhar",
        "Esporte",
        "Ler"
      ],
      "q31": [
        "Como quero comemorar meu aniversário?",
        "Com uma festa animada",
        "Com um jantar a dois",
        "Com uma viagem",
        "Com uma noite tranquila em casa"
      ],
      "q32": [
        "O que acho de surpresas?",
        "Gosto muito",
        "Me dão um frio na barriga",
        "Gosto de fazer para os outros",
        "Prefiro saber antes"
      ],
      "q33": [
        "Que doce eu prefiro?",
        "Bolo",
        "Sorvete",
        "Biscoitos",
        "Balas"
      ],
      "q34": [
        "O que levaria para uma ilha deserta?",
        "Um livro",
        "O celular",
        "Uma manta",
        "Uma câmera"
      ],
      "q35": [
        "Como descanso depois de um dia difícil?",
        "Um banho quente",
        "Uma série",
        "Uma caminhada",
        "Uma conversa com alguém próximo"
      ],
      "q36": [
        "Que meio de transporte eu mais gosto?",
        "Trem",
        "Avião",
        "Carro",
        "Bicicleta"
      ],
      "q37": [
        "Minha brincadeira favorita na infância?",
        "Esconde-esconde",
        "Pega-pega",
        "Blocos de montar",
        "Desenhar"
      ],
      "q38": [
        "Que conto de fadas mais combina comigo?",
        "Cinderela",
        "O Pequeno Príncipe",
        "Ursinho Pooh",
        "Alice no País das Maravilhas"
      ],
      "q39": [
        "Como eu alegraria alguém querido?",
        "Com uma surpresa",
        "Com um cartão",
        "Com uma viagem",
        "Com um jantar"
      ],
      "q40": [
        "O que eu mais fotografo?",
        "Selfies",
        "A natureza",
        "Comida",
        "Quase não tiro fotos"
      ],
      "q41": [
        "Meu cantinho favorito em casa?",
        "A cama",
        "A cozinha",
        "O sofá",
        "A varanda"
      ],
      "q42": [
        "O que noto primeiro numa pessoa?",
        "O sorriso",
        "Os olhos",
        "A voz",
        "O senso de humor"
      ],
      "q43": [
        "O que me faz rir mais rápido?",
        "Vídeos engraçados",
        "Piadas de quem eu amo",
        "Situações constrangedoras",
        "Animais"
      ],
      "q44": [
        "O que bebo num dia quente?",
        "Limonada",
        "Chá gelado",
        "Suco",
        "Água com gelo"
      ],
      "q45": [
        "Que elemento mais combina comigo?",
        "Água",
        "Fogo",
        "Terra",
        "Ar"
      ],
      "q46": [
        "Que histórias eu amo?",
        "De aventura",
        "De amor",
        "De ficção científica",
        "Reais"
      ],
      "q47": [
        "Como passo um dia de chuva?",
        "Lendo",
        "Dormindo",
        "Vendo um filme",
        "Caminhando de guarda-chuva"
      ],
      "q48": [
        "O que mais valorizo num presente?",
        "O carinho",
        "A utilidade",
        "A beleza",
        "A surpresa"
      ],
      "q49": [
        "Que batata eu escolheria?",
        "Purê",
        "Batata frita",
        "Assada",
        "Batata chips"
      ],
      "q50": [
        "Aonde vou primeiro numa cidade nova?",
        "Num café",
        "Num museu",
        "Num parque",
        "Às lojas"
      ],
      "q51": [
        "O que faço quando não consigo dormir?",
        "Leio",
        "Mexo no celular",
        "Conto carneirinhos",
        "Tomo leite morno"
      ],
      "q52": [
        "Como me preparo para um dia importante?",
        "Planejo tudo antes",
        "Faço tudo na última hora",
        "Peço ajuda",
        "Bate a ansiedade e não durmo"
      ],
      "q53": [
        "Que esporte mais gosto de assistir?",
        "Futebol",
        "Tênis",
        "Patinação artística",
        "Não assisto esporte"
      ],
      "q54": [
        "Que bichinho combina comigo?",
        "Um gato",
        "Um cachorro",
        "Um papagaio",
        "Um hamster"
      ],
      "q55": [
        "Que tipo de mensagens escrevo?",
        "Longas",
        "Curtas",
        "Cheias de emojis",
        "Áudios"
      ],
      "q56": [
        "Que presente guardo há mais tempo?",
        "Uma carta",
        "Um brinquedo",
        "Uma foto",
        "Uma joia"
      ],
      "q57": [
        "O que eu escolheria?",
        "Chá perto da lareira",
        "Piquenique na grama",
        "Passeio à beira-mar",
        "Uma ida ao cinema"
      ],
      "q58": [
        "Que elogio me deixaria mais feliz?",
        "Sobre minha aparência",
        "Sobre minha inteligência",
        "Sobre minha bondade",
        "Sobre meu senso de humor"
      ],
      "q59": [
        "Minha manhã perfeita?",
        "Café da manhã na cama",
        "Corrida cedo",
        "Dormir até tarde",
        "Café na varanda"
      ],
      "q60": [
        "O que quero aprender?",
        "Dançar",
        "Cozinhar",
        "Uma nova língua",
        "Desenhar"
      ],
      "q61": [
        "Qual prato eu faço melhor?",
        "Sopa",
        "Pilaf",
        "Bolos e tortas",
        "Salada"
      ],
      "q62": [
        "Qual país eu quero conhecer primeiro?",
        "Turquia",
        "Japão",
        "Marrocos",
        "Noruega"
      ],
      "q63": [
        "Qual esporte eu preferiria praticar?",
        "Natação",
        "Corrida",
        "Ciclismo",
        "Futebol"
      ],
      "q64": [
        "Qual livro eu escolheria?",
        "Um de aventura",
        "Um de história",
        "Contos de fadas",
        "Uma enciclopédia"
      ],
      "q65": [
        "Quais animais eu visitaria primeiro no zoológico?",
        "Os elefantes",
        "Os macacos",
        "Os pinguins",
        "As girafas"
      ],
      "q66": [
        "Como eu lido com comida apimentada?",
        "Quanto mais picante, melhor",
        "Um pouco vai bem",
        "Só um pouquinho",
        "Não como de jeito nenhum"
      ],
      "q67": [
        "Qual matéria da escola eu mais gostava?",
        "Matemática",
        "Literatura",
        "Geografia",
        "Educação física"
      ],
      "q68": [
        "Minha profissão dos sonhos na infância?",
        "Medicina",
        "Ensino",
        "Viajar ao espaço",
        "Culinária"
      ],
      "q69": [
        "O que eu acho de trilhas e caminhadas?",
        "Sonho com uma longa",
        "Só de um dia",
        "Só com conforto",
        "Melhor em casa"
      ],
      "q70": [
        "Meu humor de manhã?",
        "Com muita energia",
        "Com sono",
        "Em silêncio",
        "Com vontade de conversar"
      ],
      "q71": [
        "Qual castanha eu mais gosto?",
        "Avelã",
        "Noz",
        "Castanha-de-caju",
        "Amêndoa"
      ],
      "q72": [
        "O que eu faria com uma hora livre inesperada?",
        "Leria",
        "Sairia para passear",
        "Ligaria para a família",
        "Cozinharia algo"
      ],
      "q73": [
        "Que tempo eu não gosto?",
        "Calor",
        "Vento",
        "Neve derretida",
        "Frio intenso"
      ],
      "q74": [
        "De que cor eu pintaria meu quarto?",
        "Branco",
        "Bege",
        "Verde",
        "Azul-claro"
      ],
      "q75": [
        "O que eu preferiria jogar?",
        "Xadrez",
        "Damas",
        "Quebra-cabeça",
        "Um jogo de palavras"
      ],
      "q76": [
        "O que eu cozinharia para visitas?",
        "Pilaf",
        "Uma torta",
        "Saladas",
        "Pediria comida"
      ],
      "q77": [
        "O que eu não comeria de jeito nenhum?",
        "Cogumelos",
        "Peixe",
        "Azeitonas",
        "Cebola cozida"
      ],
      "q78": [
        "Como eu tomo meu chá?",
        "Forte",
        "Fraco",
        "Doce",
        "Com ervas"
      ],
      "q79": [
        "O que mais importa para mim numa casa?",
        "Limpeza",
        "Aconchego",
        "Muita luz",
        "Silêncio"
      ],
      "q80": [
        "Como eu aprendo coisas novas?",
        "Lendo",
        "Com videoaulas",
        "Praticando",
        "Perguntando aos outros"
      ],
      "q81": [
        "Qual animal selvagem mais me fascina?",
        "Tigre",
        "Urso",
        "Águia",
        "Golfinho"
      ],
      "q82": [
        "O que eu daria para minha mãe?",
        "Flores",
        "Algo feito à mão",
        "Uma viagem",
        "Uma manta quentinha"
      ],
      "q83": [
        "O que eu faço numa viagem?",
        "Olho pela janela",
        "Leio",
        "Converso",
        "Belisco alguma coisa"
      ],
      "q84": [
        "Meu prato de frango favorito?",
        "Espetinho de frango",
        "Frango com arroz",
        "Bolinho de frango",
        "Nuggets"
      ],
      "q85": [
        "Qual lugar eu escolho no trem?",
        "Na janela",
        "No corredor",
        "De costas para o sentido da viagem",
        "Tanto faz"
      ],
      "q86": [
        "O que eu faço quando algo dá errado?",
        "Ajo na hora",
        "Penso primeiro",
        "Peço conselho",
        "Me preocupo um pouco"
      ],
      "q87": [
        "Qual é a minha principal qualidade?",
        "Bondade",
        "Honestidade",
        "Persistência",
        "Alegria"
      ],
      "q88": [
        "Onde eu descansaria melhor?",
        "Com parentes no interior",
        "Num hotel perto do mar",
        "Numa barraca",
        "Em casa"
      ],
      "q89": [
        "Qual salgado ou doce de forno eu escolheria?",
        "Samsa",
        "Khachapuri",
        "Chak-chak",
        "Uma bomba (éclair)"
      ],
      "q90": [
        "Qual idioma eu mais gostaria de aprender?",
        "Árabe",
        "Inglês",
        "Turco",
        "Japonês"
      ],
      "q91": [
        "Quanto tempo eu ficaria sem doce?",
        "Um dia",
        "Uma semana",
        "Um mês",
        "O tempo que for preciso"
      ],
      "q92": [
        "O que eu faço quando me atraso?",
        "Corro o mais rápido possível",
        "Ligo para avisar",
        "Pego um táxi",
        "Nunca me atraso"
      ],
      "q93": [
        "O que eu faço quando um aparelho quebra?",
        "Tento consertar",
        "Leio o manual",
        "Peço ajuda",
        "Aperto todos os botões"
      ],
      "q94": [
        "O que vai primeiro na minha mala?",
        "Um kit de primeiros socorros",
        "Um livro",
        "Um carregador",
        "Um lanchinho"
      ],
      "q95": [
        "Que atividade me acalma?",
        "Cozinhar",
        "Arrumar a casa",
        "Desenhar",
        "Uma caminhada"
      ],
      "q96": [
        "O que eu quero fazer quando me aposentar?",
        "Cuidar do jardim",
        "Viajar",
        "Ler",
        "Passar tempo com os netos"
      ],
      "q97": [
        "O que mais me irrita?",
        "Barulho",
        "Bagunça",
        "Atraso",
        "Grosseria"
      ],
      "q98": [
        "Qual cheiro eu mais gosto?",
        "Pão fresquinho",
        "Chuva",
        "Flores",
        "Mar"
      ],
      "q99": [
        "O que eu escolheria de sobremesa?",
        "Frutas",
        "Sorvete",
        "Torta",
        "Só um chá"
      ]
    },
    "yesNo": {
      "c01": [
        "Você está com saudade de mim agora?",
        "sente muita saudade",
        "aguenta firme, mas pensa em você"
      ],
      "c02": [
        "Você sorri quando vê minha mensagem?",
        "sempre sorri",
        "sorri por dentro"
      ],
      "c03": [
        "Lembra do nosso primeiro encontro?",
        "lembra de cada minuto",
        "lembra do essencial: você"
      ],
      "c04": [
        "Quer um abraço hoje?",
        "espera o seu abraço",
        "guarda os abraços para depois"
      ],
      "c05": [
        "Vamos juntos para a praia?",
        "já está fazendo a mala",
        "sonha com as montanhas"
      ],
      "c06": [
        "Eu faço você rir?",
        "ri de coração",
        "esconde um sorriso"
      ],
      "c07": [
        "Você fica em paz comigo?",
        "sente paz ao seu lado",
        "se diverte com você"
      ],
      "c08": [
        "Você pensa em mim durante o dia?",
        "pensa em você muitas vezes",
        "está pensando em você agora"
      ],
      "c09": [
        "Você ama minhas surpresas?",
        "gosta muito das suas surpresas",
        "gosta mesmo é de ter você por perto"
      ],
      "c10": [
        "Vamos fazer uma torta juntos?",
        "já está pondo o avental",
        "prefere comprar um bolo"
      ],
      "c11": [
        "Vamos ver um filme hoje à noite?",
        "já está escolhendo o filme",
        "prefere só conversar"
      ],
      "c12": [
        "Você gosta da minha voz?",
        "ouviria sem parar",
        "gosta ainda mais da sua risada"
      ],
      "c13": [
        "Vamos fazer um piquenique no fim de semana?",
        "prepara a manta",
        "chama você para um café aconchegante"
      ],
      "c14": [
        "Quer receber uma carta minha?",
        "espera a sua carta",
        "quer ouvir tudo pessoalmente"
      ],
      "c15": [
        "Sou muito importante para você?",
        "você importa demais",
        "mais do que você imagina"
      ],
      "c16": [
        "Vamos passear na chuva?",
        "pega um guarda-chuva para dois",
        "vai fazer chá em casa"
      ],
      "c17": [
        "A gente se parece?",
        "vocês são duas metades",
        "vocês se completam perfeitamente"
      ],
      "c18": [
        "Você gosta da minha comida?",
        "pede mais um prato",
        "gosta de cozinhar junto com você"
      ],
      "c19": [
        "Vamos ter um bichinho juntos?",
        "já está escolhendo o nome",
        "por enquanto basta um ursinho de pelúcia"
      ],
      "c20": [
        "Você sabe do que eu gosto?",
        "sabe de cor",
        "quer descobrir ainda mais"
      ],
      "c21": [
        "Vamos dançar?",
        "já está estendendo a mão",
        "vai bater palmas"
      ],
      "c22": [
        "Eu te inspiro?",
        "você inspira todos os dias",
        "ao seu lado é simplesmente quentinho"
      ],
      "c23": [
        "Você guarda nossas fotos?",
        "guarda cada uma com carinho",
        "espera novas, ainda mais bonitas"
      ],
      "c24": [
        "Vamos ver o nascer do sol juntos?",
        "já põe o despertador",
        "prefere ver o pôr do sol"
      ],
      "c25": [
        "Você me conta um segredo?",
        "vai sussurrar no seu ouvido",
        "que continue um mistério"
      ],
      "c26": [
        "Você acredita em mim?",
        "acredita muito em você",
        "torce por você todos os dias"
      ],
      "c27": [
        "Vamos viajar só nós dois?",
        "sonha com isso",
        "vai levar todos os queridos"
      ],
      "c28": [
        "Você espera a minha ligação?",
        "espera com um sorriso",
        "prefere que você venha visitar"
      ],
      "c29": [
        "Você gosta dos meus abraços?",
        "os mais quentinhos do mundo",
        "gosta de andar de mãos dadas"
      ],
      "c30": [
        "Vamos ler em voz alta um para o outro?",
        "já está escolhendo um livro",
        "prefere ouvir você"
      ],
      "c31": [
        "Vamos tirar uma foto juntos hoje?",
        "já procura um fundo bonito",
        "primeiro, uma boa conversa"
      ],
      "c32": [
        "Eu melhoro o seu humor?",
        "sempre",
        "com você até a tristeza fica mais leve"
      ],
      "c33": [
        "Vamos tomar café da manhã juntos amanhã?",
        "já está fazendo chocolate quente",
        "sonha em dormir até mais tarde"
      ],
      "c34": [
        "Você lembra do meu aniversário?",
        "lembra sem precisar de aviso",
        "prepara uma surpresa em segredo"
      ],
      "c35": [
        "Vamos patinar no gelo?",
        "já pega os patins",
        "vai torcer por você da beira da pista"
      ],
      "c36": [
        "Hoje está sendo um bom dia para você?",
        "um dia ótimo",
        "vai ficar melhor com você por perto"
      ],
      "c37": [
        "Você desenha o meu retrato?",
        "já pega o lápis",
        "vai desenhar um coraçãozinho"
      ],
      "c38": [
        "Vamos plantar uma árvore juntos?",
        "escolhe o lugar",
        "vai começar com uma flor na janela"
      ],
      "c39": [
        "Quer ouvir um elogio?",
        "mal pode esperar",
        "fica com vergonha, mas quer muito"
      ],
      "c40": [
        "Vamos jogar de novo depois?",
        "quer mais uma rodada",
        "prefere um abraço a jogar"
      ],
      "c41": [
        "Você gosta de comida apimentada?",
        "quanto mais picante, melhor",
        "escolhe algo mais suave"
      ],
      "c42": [
        "Você sabe nadar?",
        "nada como um peixe",
        "por enquanto fica perto da margem"
      ],
      "c43": [
        "Você gostaria de ter um gato?",
        "já está pensando num nome",
        "prefere cachorros"
      ],
      "c44": [
        "Você gostaria de conhecer Istambul um dia?",
        "já sonha com o Bósforo",
        "escolheria outra cidade"
      ],
      "c45": [
        "Você gosta de cozinhar?",
        "cozinha com prazer",
        "prefere lavar a louça"
      ],
      "c46": [
        "Você gostaria de aprender a fazer pilaf?",
        "já está procurando uma receita",
        "prefere provar o de outra pessoa"
      ],
      "c47": [
        "Você gosta de ler livros?",
        "sempre tem um livro por perto",
        "prefere ouvir histórias"
      ],
      "c48": [
        "Você sabe andar de bicicleta?",
        "poderia sair pedalando agora mesmo",
        "promete aprender"
      ],
      "c49": [
        "Você prefere a montanha ao mar?",
        "escolhe a montanha",
        "escolhe o mar"
      ],
      "c50": [
        "Você gostaria de ver um deserto?",
        "sonha com dunas de areia",
        "prefere uma floresta"
      ],
      "c51": [
        "Você gosta do inverno?",
        "espera a primeira neve",
        "espera o verão"
      ],
      "c52": [
        "Você toma chá sem açúcar?",
        "gosta do sabor puro do chá",
        "não fica sem uma colherzinha de açúcar"
      ],
      "c53": [
        "Você tem medo de aranha?",
        "fica bem longe delas",
        "leva para fora com calma"
      ],
      "c54": [
        "Você gosta de desenhar?",
        "já está pegando o pincel",
        "prefere olhar os quadros dos outros"
      ],
      "c55": [
        "Você gostaria de ver a aurora boreal?",
        "já está vendo onde dá para ver",
        "prefere olhar as estrelas"
      ],
      "c56": [
        "Você gosta de dia de chuva?",
        "gosta do barulho da chuva lá fora",
        "espera o sol"
      ],
      "c57": [
        "Você sabe andar a cavalo?",
        "monta com segurança",
        "por enquanto só sonha com isso"
      ],
      "c58": [
        "Você gostaria de ter um cachorro?",
        "sonha com um amigo fiel",
        "por enquanto já tem bastante de que cuidar"
      ],
      "c59": [
        "Você prefere doce a salgado?",
        "não vive sem doces",
        "escolhe salgado"
      ],
      "c60": [
        "Você gosta de viajar de trem?",
        "gosta do ritmo das rodas nos trilhos",
        "escolhe o avião"
      ],
      "c61": [
        "É fácil para você começar o dia cedo?",
        "começa o dia com muita energia",
        "só engrena perto do almoço"
      ],
      "c62": [
        "Você gosta de acampar em barraca?",
        "já está arrumando a mochila",
        "escolhe um hotel aconchegante"
      ],
      "c63": [
        "Você gostaria de morar perto do mar?",
        "sonha com o barulho das ondas",
        "escolhe a cidade"
      ],
      "c64": [
        "Você toma sorvete no inverno?",
        "toma até no frio",
        "só no verão"
      ],
      "c65": [
        "Você gosta de chocolate?",
        "conhece todos os tipos",
        "passa por ele com calma"
      ],
      "c66": [
        "Você sabe fazer tortas?",
        "faz como uma avó",
        "promete aprender"
      ],
      "c67": [
        "Você gosta de olhar as estrelas?",
        "conhece as constelações",
        "prefere um dia de sol"
      ],
      "c68": [
        "Você gostaria de plantar sua própria horta um dia?",
        "já está escolhendo as mudas",
        "vai começar com uma flor no vaso"
      ],
      "c69": [
        "Você gosta de flores do campo?",
        "gosta de margaridas e centáureas",
        "prefere flores de jardim"
      ],
      "c70": [
        "Você toma café?",
        "sem café o dia não começa",
        "escolhe chá"
      ],
      "c71": [
        "Você gosta de limonada caseira?",
        "já está cortando os limões",
        "prefere água"
      ],
      "c72": [
        "Você gostaria de conhecer o Japão um dia?",
        "sonha em ver as cerejeiras em flor",
        "escolheria outro país"
      ],
      "c73": [
        "Você gosta do outono?",
        "gosta de pisar nas folhas secas",
        "espera a primavera"
      ],
      "c74": [
        "Você gosta do cheiro de lavanda?",
        "gosta muito desse aroma",
        "prefere outros aromas"
      ],
      "c75": [
        "Você gosta de jogos de tabuleiro?",
        "já está montando o tabuleiro",
        "prefere um passeio"
      ],
      "c76": [
        "Você sabe dirigir?",
        "dirige com segurança",
        "por enquanto vai no banco do passageiro"
      ],
      "c77": [
        "Você gostaria de ver o oceano um dia?",
        "sonha com uma onda gigante",
        "o mar já basta"
      ],
      "c78": [
        "Você gostaria de morar numa fazenda por um tempo?",
        "já está dando comida às galinhas",
        "fica na cidade"
      ],
      "c79": [
        "Você gosta de cidades grandes?",
        "gosta das luzes da cidade",
        "escolhe paz e sossego"
      ],
      "c80": [
        "Você prefere frutas a doces?",
        "escolhe frutas",
        "escolhe doces"
      ],
      "c81": [
        "Você gostaria de ver golfinhos no mar?",
        "gostaria muito de vê-los",
        "prefere ler sobre eles"
      ],
      "c82": [
        "Você gosta do verão?",
        "espera os dias quentes",
        "gosta de tempo fresco"
      ],
      "c83": [
        "Você gosta de passear no parque?",
        "passeia com qualquer tempo",
        "prefere ficar em casa"
      ],
      "c84": [
        "Você gosta de escrever à mão?",
        "tem uma letra caprichada",
        "digita no celular"
      ],
      "c85": [
        "Você gosta de passeios de barco?",
        "já está pegando os remos",
        "fica na margem"
      ],
      "c86": [
        "Você gostaria de dar a volta ao mundo?",
        "já está traçando a rota",
        "uns dois países bastam"
      ],
      "c87": [
        "Você sabe fazer um boneco de neve?",
        "vai fazer o maior de todos",
        "prefere uma guerra de bolas de neve"
      ],
      "c88": [
        "Você gostaria de aprender algo novo este ano?",
        "já está escolhendo um curso",
        "já tem bastante coisa para fazer"
      ],
      "c89": [
        "Você gosta de silêncio?",
        "valoriza a calma",
        "gosta quando tem movimento"
      ],
      "c90": [
        "Você gosta de dar presentes para a família?",
        "alegra a família sem motivo especial",
        "prefere ajudar de forma prática"
      ]
    },
    "loves": {
      "s01": [
        "Onde passar as férias?",
        "Praia",
        "Montanhas",
        "Viajar",
        "Um tempo só para mim"
      ],
      "s02": [
        "A noite perfeita?",
        "Filme em casa",
        "Um passeio",
        "Restaurante",
        "Jogos de tabuleiro"
      ],
      "s03": [
        "Tempo favorito?",
        "Sol",
        "Chuva",
        "Neve",
        "Noite estrelada"
      ],
      "s04": [
        "Animal favorito?",
        "Gatinho",
        "Filhote de cachorro",
        "Cavalo",
        "Golfinho"
      ],
      "s05": [
        "O que tem pro jantar?",
        "Pizza",
        "Sushi",
        "Doces",
        "Churrasco"
      ],
      "s06": [
        "Bebida favorita?",
        "Café",
        "Chá",
        "Chocolate quente",
        "Limonada"
      ],
      "s07": [
        "Estação favorita?",
        "Primavera",
        "Verão",
        "Outono",
        "Inverno"
      ],
      "s08": [
        "Flores favoritas?",
        "Rosas",
        "Tulipas",
        "Girassóis",
        "Lavanda"
      ],
      "s09": [
        "Como descansar?",
        "Com um livro",
        "Desenhando",
        "De bicicleta",
        "Soneca na rede"
      ],
      "s10": [
        "Como viajar?",
        "De trem",
        "De avião",
        "De carro",
        "De navio"
      ],
      "s11": [
        "Casa dos sonhos?",
        "Apartamento na cidade",
        "Casa na praia",
        "Chalé na montanha",
        "Fazenda"
      ],
      "s12": [
        "Algo doce?",
        "Sorvete",
        "Chocolate",
        "Bolo",
        "Frutas"
      ],
      "s13": [
        "A manhã perfeita?",
        "Café da manhã na cama",
        "Corrida",
        "Dormir até tarde",
        "Café na varanda"
      ],
      "s14": [
        "Encontro dos sonhos?",
        "Piquenique",
        "Pista de gelo",
        "Parque de diversões",
        "Estrelas no terraço"
      ],
      "s15": [
        "O melhor presente?",
        "Um buquê",
        "Uma carta",
        "Uma viagem",
        "Uma caixa de presente"
      ],
      "s16": [
        "Natureza favorita?",
        "Mar",
        "Floresta",
        "Deserto",
        "Aurora boreal"
      ],
      "s17": [
        "Fruta favorita?",
        "Maçã",
        "Morango",
        "Melancia",
        "Uva"
      ],
      "s18": [
        "O que fazer no dia de folga?",
        "Trilha na montanha",
        "Cozinhar em casa",
        "Um museu",
        "Pescar"
      ],
      "s19": [
        "Café da manhã favorito?",
        "Panquecas",
        "Omelete",
        "Mingau com frutas vermelhas",
        "Croissant"
      ],
      "s20": [
        "Ave favorita?",
        "Coruja",
        "Papagaio",
        "Cisne",
        "Pavão"
      ],
      "s21": [
        "Que cidade visitar?",
        "Istambul",
        "Paris",
        "Tóquio",
        "Dubai"
      ],
      "s22": [
        "Esporte favorito?",
        "Futebol",
        "Natação",
        "Tênis",
        "Equitação"
      ],
      "s23": [
        "O que plantar no jardim?",
        "Uma macieira",
        "Rosas",
        "Verduras e legumes",
        "Morangos"
      ],
      "s24": [
        "Quitute de forno favorito?",
        "Pasteizinhos assados",
        "Sonhos",
        "Biscoitos",
        "Baklava"
      ],
      "s25": [
        "Onde morar?",
        "Perto de um rio",
        "Numa floresta",
        "Numa cidade grande",
        "Numa ilha"
      ],
      "s26": [
        "Animal marinho favorito?",
        "Tartaruga",
        "Baleia",
        "Polvo",
        "Cavalo-marinho"
      ],
      "s27": [
        "Andar de quê?",
        "Bicicleta",
        "Patinete",
        "Balão",
        "Barco"
      ],
      "s28": [
        "Passatempo favorito?",
        "Tricô",
        "Fotografia de natureza",
        "Jardinagem",
        "Caligrafia"
      ],
      "s29": [
        "Sopa favorita?",
        "Borsch",
        "Canja de galinha",
        "Sopa de abóbora",
        "Sopa de lentilha"
      ],
      "s30": [
        "Animal da floresta?",
        "Ouriço",
        "Esquilo",
        "Raposa",
        "Cervo"
      ],
      "s31": [
        "Algo para beliscar?",
        "Tâmaras",
        "Amêndoas",
        "Pistaches",
        "Damascos secos"
      ],
      "s32": [
        "O que levar na trilha?",
        "Uma barraca",
        "Uma garrafa térmica",
        "Um mapa",
        "Uma lanterna"
      ],
      "s33": [
        "Sobremesa favorita?",
        "Pudim",
        "Cheesecake",
        "Panquecas com mel",
        "Salada de frutas"
      ],
      "s34": [
        "O que fazer no inverno?",
        "Fazer um boneco de neve",
        "Andar de trenó",
        "Chá perto da janela",
        "Esquiar"
      ],
      "s35": [
        "O que fazer no verão?",
        "Nadar",
        "Colher frutinhas",
        "Passear de barco",
        "Fazer um castelo de areia"
      ],
      "s36": [
        "Pintar com o quê?",
        "Aquarela",
        "Lápis de cor",
        "Giz de cera",
        "Tinta na tela"
      ],
      "s37": [
        "Legume favorito?",
        "Cenoura",
        "Tomate",
        "Milho",
        "Abóbora"
      ],
      "s38": [
        "O que deixa a casa aconchegante?",
        "Uma lareira",
        "Uma manta macia",
        "Plantas",
        "Uma estante de livros"
      ],
      "s39": [
        "Jogar o quê?",
        "Xadrez",
        "Quebra-cabeças",
        "Jogos de tabuleiro",
        "Jogos de bola"
      ],
      "s40": [
        "Quem mora na fazenda?",
        "Vaca",
        "Cordeirinho",
        "Galinha",
        "Cabritinho"
      ],
      "s41": [
        "Chá com quê?",
        "Mel",
        "Limão",
        "Geleia",
        "Hortelã"
      ],
      "s42": [
        "O que tem perto do mar?",
        "Um farol",
        "Conchas",
        "Um veleiro",
        "Gaivotas"
      ],
      "s43": [
        "Como começar a manhã?",
        "Com exercícios",
        "Com uma xícara de chá",
        "Com um passeio",
        "Com um livro"
      ],
      "s44": [
        "Frutinha favorita?",
        "Framboesa",
        "Mirtilo",
        "Cereja",
        "Amora"
      ]
    },
    "who": [
      "Quem de nós se atrasa com mais frequência?",
      "Quem de nós faz as pazes primeiro?",
      "Quem de nós cozinha melhor?",
      "Quem de nós ri com mais frequência?",
      "Quem de nós demora mais para se arrumar?",
      "Quem de nós perde as chaves com mais frequência?",
      "Quem de nós lembra melhor as datas importantes?",
      "Quem de nós gosta mais de doces?",
      "Quem de nós pega no sono primeiro?",
      "Quem de nós acorda mais cedo?",
      "Quem de nós diz «tenho saudade» com mais frequência?",
      "Quem de nós escolhe presentes melhores?",
      "Quem de nós brinca com mais frequência?",
      "Quem de nós dirige melhor?",
      "Quem de nós fala mais tempo ao telefone?",
      "Quem de nós gosta mais de viajar?",
      "Quem de nós se magoa com mais facilidade?",
      "Quem de nós perdoa mais rápido?",
      "Quem de nós tira mais fotos?",
      "Quem de nós lida melhor com dinheiro?",
      "Quem de nós compra coisas desnecessárias com mais frequência?",
      "Quem de nós consola melhor?",
      "Quem de nós mantém mais a calma nos momentos difíceis?",
      "Quem de nós vive procurando o celular?",
      "Quem de nós gosta mais de receber visitas?",
      "Quem de nós prepara o café da manhã com mais frequência?",
      "Quem de nós se orienta melhor numa cidade nova?",
      "Quem de nós escreve mensagens mais longas?",
      "Quem de nós sugere um passeio primeiro?",
      "Quem de nós gosta mais de animais?",
      "Quem de nós guarda melhor os segredos?",
      "Quem de nós demora mais para escolher no cardápio?",
      "Quem de nós se preocupa mais com as pessoas queridas?",
      "Quem de nós faz mais surpresas?",
      "Quem de nós mantém tudo mais organizado?",
      "Quem de nós nota primeiro um corte de cabelo novo?",
      "Quem de nós lembra histórias engraçadas com mais frequência?",
      "Quem de nós tem mais paciência?",
      "Quem de nós agradece com mais frequência?",
      "Quem de nós oferece ajuda primeiro?",
      "Quem de nós faz contas de cabeça melhor?",
      "Quem de nós lê mais?",
      "Quem de nós digita mais rápido?",
      "Quem de nós liga para os pais com mais frequência?",
      "Quem de nós conta histórias melhor?",
      "Quem de nós tem a letra mais caprichada?",
      "Quem de nós gosta mais de comida apimentada?",
      "Quem de nós esquece coisas em casa com mais frequência?",
      "Quem de nós se dá melhor com aparelhos eletrônicos?",
      "Quem de nós gosta mais de aprender coisas novas?",
      "Quem de nós planeja melhor?",
      "Quem de nós pechincha melhor na feira?",
      "Quem de nós gosta mais da natureza?",
      "Quem de nós come mais rápido?",
      "Quem de nós toma mais chá?",
      "Quem de nós cuida melhor das plantas?",
      "Quem de nós sabe mais geografia?",
      "Quem de nós joga xadrez melhor?",
      "Quem de nós escolhe as melhores frutas na feira?",
      "Quem de nós olha a previsão do tempo com mais frequência?",
      "Quem de nós tem mais medo de aranha?",
      "Quem de nós tem mais coragem?",
      "Quem de nós tem mais curiosidade?",
      "Quem de nós resolve charadas mais rápido?",
      "Quem de nós desenha melhor?",
      "Quem de nós ajuda os vizinhos com mais frequência?",
      "Quem de nós se dá melhor com crianças?",
      "Quem de nós gosta mais de caminhar?",
      "Quem de nós lê as instruções com mais frequência?",
      "Quem de nós guarda nomes melhor?",
      "Quem de nós aprende palavras de outro idioma mais rápido?",
      "Quem de nós faz bolos e tortas melhor?",
      "Quem de nós dá conselhos melhores?",
      "Quem de nós gosta mais de frio?",
      "Quem de nós se sairia melhor numa trilha?",
      "Quem de nós lê notícias com mais frequência?",
      "Quem de nós experimenta pratos novos com mais frequência?",
      "Quem de nós arruma a mala mais rápido?",
      "Quem de nós conserta as coisas melhor?",
      "Quem de nós conversa com animais com mais frequência?",
      "Quem de nós lava a louça com mais frequência?",
      "Quem de nós sabe mais história?",
      "Quem de nós deixa as coisas para depois com mais frequência?",
      "Quem de nós faz amizade com gente nova mais rápido?",
      "Quem de nós cuida mais da saúde?"
    ],
    "phrases": [
      "Eu sorrio quando você…",
      "Meu dia favorito com você é…",
      "Agradeço por…",
      "Quando estou triste, o que me ajuda é…",
      "Um dia quero que a gente…",
      "A lembrança mais carinhosa de nós é…",
      "Ninguém sabe melhor do que você…",
      "Sinto calma quando…",
      "Se a gente tivesse um dia inteiro livre, a gente…",
      "Tenho orgulho de você porque…",
      "Nossa noite perfeita é…",
      "Nunca vou esquecer como você…",
      "Gosto quando você diz…",
      "No ano que vem, quero que a gente…",
      "Para mim, você é como…",
      "O melhor presente que você me deu é…",
      "Sinto sua falta quando…",
      "A gente se diverte mais quando…",
      "Faz tempo que quero dizer a você…",
      "O nosso lugar é…",
      "Quando penso em você, eu…",
      "Você deixa meu dia melhor quando…",
      "Gosto do nosso hábito de…",
      "Meu desejo para nós: …",
      "A coisa mais engraçada que aconteceu com a gente foi…",
      "Sinto o seu cuidado quando você…",
      "Uma manhã com você é…",
      "Se a gente fosse uma só palavra, seria…",
      "Quero aprender com você a…",
      "Agradeço por você sempre…",
      "Na infância, minha comida favorita era…",
      "Se eu tivesse um dia em qualquer país, eu…",
      "O melhor conselho que já recebi é…",
      "Eu sempre dou risada quando…",
      "Meu lugar favorito na minha cidade natal é…",
      "Se eu tivesse uma lojinha só minha, ela venderia…",
      "O prato que eu faço melhor é…",
      "Um sonho de infância de que ainda me lembro é…",
      "É fácil me deixar feliz se…",
      "O lugar mais incrível que já conheci é…",
      "Eu quero aprender…",
      "Meu dia de folga perfeito começa com…",
      "Se eu pudesse ter qualquer animal, seria…",
      "Na minha família sempre dizem que eu…",
      "Eu simplesmente não consigo me acostumar com…",
      "Meu hábito mais útil é…",
      "O melhor livro que já li é…",
      "Daqui a dez anos, eu gostaria de…",
      "A casa dos meus sonhos é…",
      "A coisa mais engraçada que me aconteceu na infância foi…",
      "Para mim, felicidade é…",
      "É difícil para mim abrir mão de…",
      "Se eu tivesse um superpoder, ele me permitiria…",
      "O que eu mais valorizo nas pessoas é…",
      "Quando tenho uma noite livre, eu…",
      "Meu cheiro favorito é…",
      "Uma comida que eu nunca comeria é…",
      "A única coisa sem a qual nunca saio de casa é…",
      "Eu gostaria de conhecer… porque…",
      "O melhor presente que já recebi foi…",
      "Meu hábito mais inusitado é…",
      "Se eu tivesse uma hora a mais todo dia, eu…",
      "Alguém com quem aprendo muito é…",
      "Num dia difícil, o que me ajuda é…",
      "A coisa mais gostosa que provei numa viagem foi…",
      "Se eu pudesse trocar de profissão por um dia, escolheria…",
      "A estação do ano mais próxima do meu coração é…",
      "Meus amigos dizem que eu…",
      "Um dia eu gostaria de ensinar alguém a…",
      "Uma pequena alegria do meu dia é…"
    ],
    "truth": {
      "t01": [
        "O polvo tem três corações.",
        true,
        "Dois corações bombeiam sangue pelas brânquias, e o terceiro, pelo resto do corpo."
      ],
      "t02": [
        "A Grande Muralha da China pode ser vista da Lua a olho nu.",
        false,
        "Não pode: a muralha é estreita demais. Até da órbita é muito difícil enxergá-la."
      ],
      "t03": [
        "O mel pode durar milhares de anos sem estragar.",
        true,
        "Em túmulos do antigo Egito foi encontrado mel de milhares de anos ainda conservado."
      ],
      "t04": [
        "A banana dá em árvore.",
        false,
        "A bananeira é uma erva gigante: o seu «tronco» é feito de folhas bem enroladas."
      ],
      "t05": [
        "Vênus é o planeta mais quente do Sistema Solar.",
        true,
        "A atmosfera densa aquece Vênus a cerca de 460 °C — mais que Mercúrio."
      ],
      "t06": [
        "Morcegos são cegos.",
        false,
        "Morcegos enxergam e, no escuro, também se orientam por ecolocalização."
      ],
      "t07": [
        "A baleia é um peixe.",
        false,
        "Baleias são mamíferos: respiram ar e alimentam os filhotes com leite."
      ],
      "t08": [
        "O Saara é o maior deserto do mundo.",
        false,
        "O maior deserto é a Antártida. O Saara é o maior deserto quente."
      ],
      "t09": [
        "A girafa tem o mesmo número de vértebras no pescoço que uma pessoa.",
        true,
        "Ambas têm sete vértebras cervicais — as da girafa só são muito compridas."
      ],
      "t10": [
        "Do ponto de vista da botânica, o tomate é uma baga.",
        true,
        "A botânica classifica o tomate como baga: um fruto carnoso com sementes dentro."
      ],
      "t11": [
        "Do ponto de vista da botânica, o morango é uma baga.",
        false,
        "É um pseudofruto: os frutos de verdade são as minúsculas «sementinhas» do lado de fora."
      ],
      "t12": [
        "No espaço dá para ouvir uma explosão.",
        false,
        "No espaço quase não há ar, então o som não tem por onde se propagar."
      ],
      "t13": [
        "No alto das montanhas, a água ferve a uma temperatura mais baixa.",
        true,
        "Lá a pressão do ar é menor, por isso a água ferve antes de chegar a 100 °C."
      ],
      "t14": [
        "Pinguins vivem no Polo Norte.",
        false,
        "Pinguins selvagens vivem só no Hemisfério Sul, não no extremo norte."
      ],
      "t15": [
        "O Everest é a montanha mais alta acima do nível do mar.",
        true,
        "O Everest se eleva a cerca de 8.849 metros acima do nível do mar."
      ],
      "t16": [
        "As pessoas usam só 10% do cérebro.",
        false,
        "É um mito: ao longo do dia quase todas as partes do cérebro ficam ativas."
      ],
      "t17": [
        "O coração humano bate cerca de 100 mil vezes por dia.",
        true,
        "Com uns 70 batimentos por minuto, dá aproximadamente 100 mil batimentos por dia."
      ],
      "t18": [
        "O peixinho-dourado tem memória de só três segundos.",
        false,
        "Experimentos mostram que peixinhos-dourados se lembram do que aprenderam por meses."
      ],
      "t19": [
        "A Austrália é ao mesmo tempo um país e um continente.",
        true,
        "A Austrália é o único país que ocupa um continente inteiro."
      ],
      "t20": [
        "Um raio nunca cai duas vezes no mesmo lugar.",
        false,
        "Cai, sim: prédios altos são atingidos por raios muitas vezes por ano."
      ],
      "t21": [
        "O avestruz enterra a cabeça na areia quando sente medo.",
        false,
        "É um mito: um avestruz assustado foge ou se deita rente ao chão para se esconder."
      ],
      "t22": [
        "A menor ave do mundo é um beija-flor.",
        true,
        "O beija-flor-abelha de Cuba pesa cerca de 2 gramas — menos que qualquer outra ave."
      ],
      "t23": [
        "A melancia tem cerca de 90% de água.",
        true,
        "A melancia tem uns 92% de água — por isso é tão refrescante."
      ],
      "t24": [
        "A aranha tem seis patas.",
        false,
        "A aranha tem oito patas. Os insetos têm seis, e aranhas não são insetos."
      ],
      "t25": [
        "A Lua tem luz própria.",
        false,
        "A Lua não tem luz própria: ela reflete a luz do Sol."
      ],
      "t26": [
        "O elefante é o maior animal terrestre.",
        true,
        "Um elefante-africano-da-savana pode pesar mais de 6 toneladas."
      ],
      "t27": [
        "A baleia-azul é o maior animal conhecido pela ciência.",
        true,
        "A baleia-azul pode passar de 30 metros — maior que qualquer dinossauro conhecido."
      ],
      "t28": [
        "O camaleão muda de cor só para se camuflar.",
        false,
        "A cor dele depende mais do humor, da temperatura e de sinais para outros camaleões."
      ],
      "t29": [
        "O telefone foi inventado por Thomas Edison.",
        false,
        "A patente do telefone foi concedida a Alexander Graham Bell em 1876."
      ],
      "t30": [
        "A penicilina foi descoberta por Alexander Fleming.",
        true,
        "Fleming descobriu a penicilina em 1928 — o primeiro antibiótico."
      ],
      "t31": [
        "O vulcão mais alto do Sistema Solar fica em Marte.",
        true,
        "O Monte Olimpo, em Marte, tem cerca de 22 km de altura — quase 2,5 vezes o Everest."
      ],
      "t32": [
        "O sangue nas nossas veias é azul.",
        false,
        "O sangue é sempre vermelho; as veias só parecem azuis por causa de como a luz atravessa a pele."
      ],
      "t33": [
        "O Atlântico é o maior oceano da Terra.",
        false,
        "O maior é o Pacífico: ele é maior que todas as terras do planeta juntas."
      ],
      "t34": [
        "A Rússia é o maior país do mundo em área.",
        true,
        "A Rússia ocupa mais de 17 milhões de quilômetros quadrados."
      ],
      "t35": [
        "O Canadá tem o litoral mais extenso do mundo.",
        true,
        "O litoral do Canadá passa de 200 mil km — mais que o de qualquer outro país."
      ],
      "t36": [
        "O estômago da vaca tem quatro compartimentos.",
        true,
        "A vaca tem um estômago com quatro câmaras — é assim que ela digere o capim."
      ],
      "t37": [
        "O leão é o maior felino do mundo.",
        false,
        "O maior felino é o tigre, especialmente o tigre-siberiano."
      ],
      "t38": [
        "A Terra é o planeta mais próximo do Sol.",
        false,
        "O mais próximo é Mercúrio, depois Vênus; a Terra é o terceiro planeta."
      ],
      "t39": [
        "A luz do Sol leva cerca de 8 minutos para chegar à Terra.",
        true,
        "A luz percorre os 150 milhões de km desde o Sol em cerca de 8 minutos e 20 segundos."
      ],
      "t40": [
        "Os golfinhos dormem com uma metade do cérebro de cada vez.",
        true,
        "Uma metade descansa enquanto a outra fica alerta e lembra de respirar."
      ],
      "t41": [
        "A batata é originária da Irlanda.",
        false,
        "A batata vem da América do Sul: era cultivada nos Andes há milhares de anos."
      ],
      "t42": [
        "O chocolate é feito das sementes do cacaueiro.",
        true,
        "Os frutos do cacau crescem direto no tronco, e as sementes de dentro viram chocolate."
      ],
      "t43": [
        "O tubarão é um mamífero.",
        false,
        "O tubarão é um peixe: respira por brânquias. Os mamíferos do mar são as baleias e os golfinhos."
      ],
      "t44": [
        "Alguns tipos de bambu podem crescer quase um metro por dia.",
        true,
        "O bambu é uma das plantas que crescem mais rápido na Terra."
      ],
      "t45": [
        "A coruja consegue girar a cabeça 360 graus completos.",
        false,
        "A coruja gira a cabeça cerca de 270 graus — bastante, mas não uma volta inteira."
      ],
      "t46": [
        "O diamante e o grafite do lápis são feitos da mesma substância.",
        true,
        "Os dois são carbono puro — só os átomos estão arrumados de outro jeito."
      ],
      "t47": [
        "O camelo guarda água na corcova.",
        false,
        "A corcova do camelo guarda gordura, não água — ela dá energia nas longas jornadas."
      ],
      "t48": [
        "O menor osso do corpo humano fica no ouvido.",
        true,
        "O estribo, no ouvido médio, tem só cerca de 3 milímetros."
      ],
      "t49": [
        "Papagaios grandes podem viver mais de 50 anos.",
        true,
        "Araras e cacatuas bem cuidadas costumam viver 50 anos ou mais."
      ],
      "t50": [
        "Os irmãos Wright fizeram o primeiro voo de avião a motor.",
        true,
        "Eles voaram em 1903; o primeiríssimo voo durou 12 segundos."
      ],
      "t51": [
        "A roda foi inventada na Idade Média.",
        false,
        "A roda tem mais de 5.000 anos: já era usada na Mesopotâmia por volta de 3500 a.C."
      ],
      "t52": [
        "O cavalo-marinho é um peixe.",
        true,
        "O cavalo-marinho respira por brânquias e nada com uma nadadeira, como outros peixes."
      ],
      "t53": [
        "O beija-flor consegue voar para trás.",
        true,
        "Os beija-flores são as únicas aves que realmente conseguem voar para trás."
      ],
      "t54": [
        "A Torre Eiffel fica um pouco mais alta no verão.",
        true,
        "O calor dilata o metal, e a torre cresce cerca de 15 centímetros."
      ],
      "t55": [
        "A pele é o maior órgão do corpo humano.",
        true,
        "A pele de um adulto pesa vários quilos e protege o corpo inteiro."
      ],
      "t56": [
        "A cor vermelha deixa o touro bravo.",
        false,
        "O touro mal distingue o vermelho: o que o provoca é o movimento, não a cor."
      ],
      "t57": [
        "A mosca doméstica vive só um dia.",
        false,
        "A mosca doméstica vive cerca de um mês. São as efêmeras adultas que vivem só um ou dois dias."
      ],
      "t58": [
        "O abacaxi dá em árvore.",
        false,
        "O abacaxi cresce numa planta baixa e cheia de folhas, bem no meio dela."
      ],
      "t59": [
        "O amendoim é uma castanha.",
        false,
        "O amendoim é uma leguminosa, parente da ervilha e do feijão. As vagens amadurecem debaixo da terra."
      ],
      "t60": [
        "O Polo Norte e o Polo Sul são igualmente frios.",
        false,
        "O Polo Sul é bem mais frio: fica num continente alto e gelado; o Polo Norte, sobre um oceano."
      ]
    },
    "hints": {
      "h01": [
        "Pinguim",
        "Sou uma ave, mas não sei voar",
        "Vivo onde faz muito frio",
        "Estou sempre de fraque",
        "Avestruz",
        "Foca",
        "Gaivota"
      ],
      "h02": [
        "Elefante",
        "Como quase o dia inteiro",
        "Minhas orelhas parecem grandes leques",
        "Tenho uma tromba comprida",
        "Rinoceronte",
        "Hipopótamo",
        "Girafa"
      ],
      "h03": [
        "Girafa",
        "Durmo muito pouco, muitas vezes em pé",
        "Como folhas das árvores mais altas",
        "Tenho o pescoço mais comprido",
        "Zebra",
        "Camelo",
        "Alce"
      ],
      "h04": [
        "Camelo",
        "Aguento muito tempo sem água",
        "Me chamam de navio do deserto",
        "Tenho uma ou duas corcovas nas costas",
        "Cavalo",
        "Burro",
        "Lhama"
      ],
      "h05": [
        "Abelha",
        "Sei mostrar às outras o caminho até as flores",
        "Trabalho no campo do amanhecer ao anoitecer",
        "Faço mel",
        "Vespa",
        "Mosca",
        "Borboleta"
      ],
      "h06": [
        "Tartaruga",
        "Posso viver mais de cem anos",
        "Nunca tenho pressa",
        "Carrego minha casa nas costas",
        "Caracol",
        "Lagartixa",
        "Ouriço"
      ],
      "h07": [
        "Canguru",
        "Minha cauda me ajuda a manter o equilíbrio",
        "Vivo na Austrália",
        "Carrego meu filhote numa bolsa",
        "Coala",
        "Lebre",
        "Esquilo"
      ],
      "h08": [
        "Coruja",
        "Consigo virar a cabeça quase toda para trás",
        "Caço à noite",
        "Pio na floresta escura",
        "Corvo",
        "Águia",
        "Pombo"
      ],
      "h09": [
        "Golfinho",
        "Respiro ar, embora viva no mar",
        "Ajudo as pessoas e falo com assobios",
        "Gosto muito de saltar sobre as ondas",
        "Tubarão",
        "Baleia",
        "Foca"
      ],
      "h10": [
        "Esquilo",
        "Escondo comida e às vezes esqueço onde",
        "Moro no oco de uma árvore",
        "Roo nozes e pinhas",
        "Ouriço",
        "Lebre",
        "Rato"
      ],
      "h11": [
        "Aranha",
        "Não sou inseto, embora muitos pensem que sim",
        "Tenho oito patas",
        "Teço uma teia",
        "Formiga",
        "Besouro",
        "Mosquito"
      ],
      "h12": [
        "Gato",
        "Enxergo no escuro melhor que as pessoas",
        "Gosto de um parapeito quentinho",
        "Ronrono e caço ratos",
        "Coelho",
        "Hamster",
        "Papagaio"
      ],
      "h13": [
        "Melancia",
        "Os cientistas me chamam de baga",
        "Esperam por mim no fim do verão",
        "Verde por fora, vermelha por dentro",
        "Melão",
        "Abóbora",
        "Abacaxi"
      ],
      "h14": [
        "Pão",
        "Sou assado em quase todos os países",
        "Me cortam em fatias",
        "Posso ser branco ou de centeio, com casca",
        "Panqueca",
        "Torta",
        "Biscoito"
      ],
      "h15": [
        "Mel",
        "Posso durar milhares de anos",
        "Me põem no chá quente quando há resfriado",
        "As abelhas me fazem",
        "Geleia",
        "Açúcar",
        "Leite"
      ],
      "h16": [
        "Limão",
        "Sou cheio de vitamina C",
        "Me colocam no chá",
        "Sou verde ou amarelo e muito azedo",
        "Laranja",
        "Toranja",
        "Tangerina"
      ],
      "h17": [
        "Cenoura",
        "Cresço debaixo da terra, só a rama aparece",
        "Dizem que faço bem para a visão",
        "Sou laranja, e os coelhos gostam muito de mim",
        "Beterraba",
        "Rabanete",
        "Batata"
      ],
      "h18": [
        "Maçã",
        "Tenho variedades de verão e de inverno",
        "Viro torta e suco",
        "Cresço numa árvore, vermelha ou verde",
        "Pera",
        "Pêssego",
        "Ameixa"
      ],
      "h19": [
        "Banana",
        "Cresço em cachos numa planta alta",
        "Os macacos gostam muito de mim",
        "Sou amarela e preciso ser descascada",
        "Manga",
        "Kiwi",
        "Abacaxi"
      ],
      "h20": [
        "Chá",
        "Na China me bebem há milênios",
        "Posso ser preto, verde ou de ervas",
        "Sou preparado num bule",
        "Café",
        "Cacau",
        "Suco"
      ],
      "h21": [
        "Ovo",
        "Sem mim é difícil fazer um bolo",
        "Comigo se faz omelete",
        "A galinha me bota",
        "Queijo",
        "Noz",
        "Batata"
      ],
      "h22": [
        "Guarda-chuva",
        "Passo quase todo o tempo fechado",
        "Você me leva quando o céu fica cinza",
        "Protejo você da chuva",
        "Capa de chuva",
        "Chapéu",
        "Botas"
      ],
      "h23": [
        "Relógio",
        "Posso funcionar com areia ou com a luz do sol",
        "Fico em paredes e em torres",
        "Mostro as horas com meus ponteiros",
        "Bússola",
        "Calendário",
        "Termômetro"
      ],
      "h24": [
        "Chave",
        "Sem mim, a porta não deixa você entrar",
        "Muitas vezes me levam numa argola",
        "Abro uma fechadura",
        "Tesoura",
        "Alicate",
        "Clipe"
      ],
      "h25": [
        "Vela",
        "Quanto mais trabalho, menor fico",
        "Me acendem quando falta luz",
        "Sou de cera e tenho pavio",
        "Lanterna",
        "Luminária",
        "Fósforos"
      ],
      "h26": [
        "Tesoura",
        "Tenho duas argolas e duas pontas afiadas",
        "Recorto figuras de papel",
        "Corto tecido e papel",
        "Faca",
        "Agulha",
        "Régua"
      ],
      "h27": [
        "Escova de dentes",
        "Tenho muitas cerdas",
        "Sou trocada a cada três meses",
        "Limpo os dentes de manhã e à noite",
        "Sabonete",
        "Toalha",
        "Esponja"
      ],
      "h28": [
        "Geladeira",
        "Dentro de mim é sempre inverno",
        "Quando me abrem, uma luz acende",
        "Mantenho a comida fria",
        "Fogão",
        "Forno",
        "Armário"
      ],
      "h29": [
        "Bicicleta",
        "Ando sem combustível nem eletricidade",
        "Tenho guidão, campainha e corrente",
        "Tenho duas rodas e pedais",
        "Patinete",
        "Moto",
        "Skate"
      ],
      "h30": [
        "Avião",
        "Tenho asas, mas não sou pássaro",
        "Esperam por mim no aeroporto",
        "Voo acima das nuvens com passageiros",
        "Helicóptero",
        "Foguete",
        "Balão"
      ],
      "h31": [
        "Trem",
        "Só ando no meu próprio caminho",
        "Tenho muitos vagões",
        "Corro sobre trilhos de estação em estação",
        "Bonde",
        "Ônibus",
        "Metrô"
      ],
      "h32": [
        "Ponte",
        "Sou feita de pedra, madeira ou aço",
        "Navios podem passar debaixo de mim",
        "Ligo as duas margens de um rio",
        "Túnel",
        "Estrada",
        "Represa"
      ],
      "h33": [
        "Lápis",
        "Tenho grafite por dentro",
        "Me apontam quando fico sem ponta",
        "Escrevo e desenho; a borracha apaga meus traços",
        "Caneta",
        "Giz",
        "Canetinha"
      ],
      "h34": [
        "Livro",
        "Sou calado, mas ensino muito",
        "Tenho capa e páginas",
        "Me leem e me emprestam nas bibliotecas",
        "Revista",
        "Jornal",
        "Caderno"
      ],
      "h35": [
        "Mala",
        "Viajo muito, mas sempre na mão de alguém",
        "Me arrumam antes de uma viagem",
        "Tenho alça e rodinhas e levo roupas",
        "Mochila",
        "Bolsa",
        "Caixa"
      ],
      "h36": [
        "Biblioteca",
        "Aqui pedem para falar baixo",
        "Aqui você ganha uma carteirinha de leitor",
        "Milhares de livros para levar para casa",
        "Escola",
        "Livraria",
        "Arquivo"
      ],
      "h37": [
        "Aeroporto",
        "Aqui há controle de passaportes",
        "Aqui anunciam o embarque dos voos",
        "Daqui decolam os aviões",
        "Estação de trem",
        "Porto",
        "Rodoviária"
      ],
      "h38": [
        "Deserto",
        "Quente de dia, mas as noites podem ser muito frias",
        "Aqui se encontram oásis",
        "Muita areia e pouquíssima água",
        "Estepe",
        "Savana",
        "Praia"
      ],
      "h39": [
        "Vulcão",
        "Posso dormir por centenas de anos",
        "Do meu topo sobe fumaça",
        "Entro em erupção com lava",
        "Montanha",
        "Gêiser",
        "Ilha"
      ],
      "h40": [
        "Arco-íris",
        "Você só me vê com o sol às costas",
        "Costumo aparecer depois da chuva",
        "Sete cores em arco no céu",
        "Relâmpago",
        "Nuvem",
        "Aurora boreal"
      ],
      "h41": [
        "Lua",
        "Mostro sempre o mesmo lado à Terra",
        "Posso estar cheia ou ser um fino crescente",
        "Brilho no céu noturno",
        "Sol",
        "Estrela",
        "Cometa"
      ],
      "h42": [
        "Neve",
        "Cada um dos meus flocos é único",
        "Comigo se fazem fortes e bonecos",
        "Branca e fria, caio no inverno",
        "Chuva",
        "Granizo",
        "Geada"
      ],
      "h43": [
        "Rio",
        "Tenho nascente e foz",
        "Barcos navegam em mim",
        "Corro das montanhas até o mar",
        "Lago",
        "Mar",
        "Riacho"
      ],
      "h44": [
        "Cacto",
        "Vivo muito tempo sem água",
        "Cresço em desertos e em janelas",
        "Sou coberto de espinhos",
        "Babosa",
        "Palmeira",
        "Margarida"
      ],
      "h45": [
        "Girassol",
        "Das minhas sementes se faz óleo",
        "Giro acompanhando o sol",
        "Uma grande flor amarela cheia de sementes",
        "Margarida",
        "Tulipa",
        "Dente-de-leão"
      ],
      "h46": [
        "Carvalho",
        "Posso viver mais de mil anos",
        "Sou visto como símbolo de força",
        "Em mim crescem bolotas",
        "Bétula",
        "Pinheiro",
        "Bordo"
      ],
      "h47": [
        "Ilha",
        "Um país inteiro pode caber em mim",
        "Chega-se a mim de barco ou de avião",
        "Sou cercada de água por todos os lados",
        "Península",
        "Recife",
        "Cabo"
      ],
      "h48": [
        "Cachoeira",
        "Dá para me ouvir de longe",
        "A mais alta de nós fica na Venezuela",
        "Aqui um rio despenca de um penhasco",
        "Chafariz",
        "Gêiser",
        "Nascente"
      ],
      "h49": [
        "Médico",
        "Estudo muitos anos antes de começar a trabalhar",
        "Uso jaleco branco",
        "Trato pessoas doentes",
        "Enfermeiro",
        "Farmacêutico",
        "Veterinário"
      ],
      "h50": [
        "Bombeiro",
        "Fico de plantão dia e noite",
        "Trabalho com água e escadas",
        "Apago incêndios",
        "Policial",
        "Socorrista",
        "Pedreiro"
      ],
      "h51": [
        "Cozinheiro",
        "Provo tudo o que preparo",
        "Trabalho num fogão quente",
        "Preparo comida num restaurante",
        "Padeiro",
        "Garçom",
        "Confeiteiro"
      ],
      "h52": [
        "Professor",
        "À noite corrijo cadernos",
        "Fico diante do quadro",
        "Ensino crianças na escola",
        "Diretor de escola",
        "Bibliotecário",
        "Educador infantil"
      ],
      "h53": [
        "Piloto",
        "Meu local de trabalho é a cabine",
        "Falo com os passageiros pelo alto-falante",
        "Comando um avião",
        "Capitão",
        "Motorista",
        "Astronauta"
      ],
      "h54": [
        "Carteiro",
        "Conheço todos os endereços do meu bairro",
        "Carrego uma bolsa grande",
        "Entrego cartas e encomendas",
        "Entregador",
        "Taxista",
        "Vendedor"
      ],
      "h55": [
        "Jardineiro",
        "Sei quando plantar cada coisa",
        "Minhas ferramentas: regador e tesoura de poda",
        "Cuido de flores e árvores",
        "Agricultor",
        "Guarda florestal",
        "Florista"
      ],
      "h56": [
        "Fotógrafo",
        "Capturo momentos",
        "Peço a todos que fiquem parados",
        "Trabalho com câmera e imagens",
        "Pintor",
        "Jornalista",
        "Cinegrafista"
      ],
      "h57": [
        "Pescador",
        "Acordo antes do amanhecer e espero muito",
        "Preciso de vara e paciência",
        "Pego peixes",
        "Agricultor",
        "Marinheiro",
        "Pastor"
      ],
      "h58": [
        "Astronauta",
        "Treino muito tempo na Terra",
        "Uso traje espacial",
        "Voo para o espaço",
        "Piloto",
        "Astrônomo",
        "Engenheiro"
      ],
      "h59": [
        "Arquiteto",
        "Meu trabalho aparece por toda a cidade",
        "Desenho plantas",
        "Projeto casas",
        "Pedreiro",
        "Designer",
        "Engenheiro"
      ],
      "h60": [
        "Dentista",
        "Muita gente tem medo da minha cadeira",
        "Trabalho com uma broca",
        "Cuido dos dentes",
        "Cirurgião",
        "Oftalmologista",
        "Pediatra"
      ]
    },
    "dreams": {
      "d01": [
        "Onde você gostaria de morar daqui a dez anos?",
        "Perto do mar",
        "Nas montanhas",
        "Numa cidade grande",
        "Numa vila tranquila"
      ],
      "d02": [
        "Que tipo de casa você gostaria de ter um dia?",
        "Um apartamento aconchegante",
        "Uma casa com jardim",
        "Um chalé à beira do lago",
        "Uma casa antiga com história"
      ],
      "d03": [
        "O que você gostaria de plantar no jardim?",
        "Macieiras",
        "Rosas",
        "Legumes e ervas",
        "Morangos"
      ],
      "d04": [
        "Que bichinho você gostaria de ter?",
        "Um gato",
        "Um papagaio",
        "Peixes de aquário",
        "Um jabuti"
      ],
      "d05": [
        "Para onde você gostaria de ir primeiro?",
        "Japão",
        "Marrocos",
        "Islândia",
        "Nova Zelândia"
      ],
      "d06": [
        "Como você gostaria de viajar?",
        "De trem",
        "De carro",
        "De avião",
        "De navio"
      ],
      "d07": [
        "Que idioma você gostaria de aprender?",
        "Árabe",
        "Japonês",
        "Espanhol",
        "Chinês"
      ],
      "d08": [
        "O que você gostaria de aprender a fazer?",
        "Desenhar",
        "Costurar",
        "Nadar",
        "Programar"
      ],
      "d09": [
        "Que prato você gostaria de dominar?",
        "Pilaf",
        "Pão caseiro",
        "Sushi",
        "Baklava"
      ],
      "d10": [
        "Como você gostaria de passar os fins de semana?",
        "Na natureza",
        "Em casa com um livro",
        "Visitando a família",
        "Numa cidade nova"
      ],
      "d11": [
        "Como seria uma manhã perfeita de fim de semana?",
        "Uma caminhada cedo",
        "Um café da manhã sem pressa",
        "Exercícios ao ar livre",
        "Chá na varanda"
      ],
      "d12": [
        "Para o que você gostaria de economizar?",
        "Uma casa própria",
        "Uma grande viagem",
        "Um carro",
        "Os estudos"
      ],
      "d13": [
        "Com o que você gostaria de trabalhar?",
        "Ter o próprio negócio",
        "Numa grande empresa",
        "De casa",
        "Ajudando pessoas"
      ],
      "d14": [
        "Como você gostaria de ajudar os outros?",
        "Voluntariado",
        "Ajudando animais",
        "Ensinando crianças",
        "Plantando árvores"
      ],
      "d15": [
        "Que tradição de família você gostaria de ter?",
        "Almoço de domingo juntos",
        "Noites de jogos de tabuleiro",
        "Passeios no fim de semana",
        "Um álbum de fotos da família"
      ],
      "d16": [
        "Que cozinha você gostaria de ter?",
        "Uma grande cozinha familiar",
        "Clara e aconchegante",
        "Com vista para o jardim",
        "Pequena, mas prática"
      ],
      "d17": [
        "O que você gostaria de ver com os próprios olhos?",
        "A aurora boreal",
        "As pirâmides de Gizé",
        "As Cataratas Vitória",
        "O Himalaia"
      ],
      "d18": [
        "O que você gostaria de fazer à noite?",
        "Ler",
        "Cozinhar algo novo",
        "Estudar idiomas",
        "Caminhar no parque"
      ],
      "d19": [
        "Que hobby você gostaria de começar?",
        "Fotografia",
        "Cerâmica",
        "Bordado",
        "Jardinagem"
      ],
      "d20": [
        "Para onde você gostaria de ir num fim de semana?",
        "Para a floresta",
        "Para um lago",
        "Para uma cidade vizinha",
        "Para as montanhas"
      ],
      "d21": [
        "Como seria seu espaço de trabalho ideal?",
        "Perto da janela",
        "Com estantes de livros",
        "Cheio de plantas",
        "Quase vazio"
      ],
      "d22": [
        "O que você gostaria de estudar em seguida?",
        "Medicina",
        "História",
        "Economia",
        "Design"
      ],
      "d23": [
        "Que árvore você gostaria de plantar?",
        "Um carvalho",
        "Uma macieira",
        "Uma oliveira",
        "Uma tamareira"
      ],
      "d24": [
        "O que você gostaria de cozinhar para visitas?",
        "Uma torta caseira",
        "Um grande pilaf",
        "A sopa da família",
        "Saladas frescas"
      ],
      "d25": [
        "Que cidade você gostaria de visitar?",
        "Istambul",
        "Paris",
        "Tóquio",
        "Cairo"
      ],
      "d26": [
        "Como você gostaria de passar o verão?",
        "Na praia",
        "Nas montanhas",
        "Num sítio",
        "Viajando pelo nosso país"
      ],
      "d27": [
        "Que passarinho você gostaria de criar?",
        "Um canário",
        "Um periquito",
        "Pombos",
        "Mandarins"
      ],
      "d28": [
        "Que esporte você gostaria de experimentar?",
        "Natação",
        "Andar a cavalo",
        "Arco e flecha",
        "Escalada"
      ],
      "d29": [
        "Que livros você gostaria de colecionar?",
        "Enciclopédias",
        "Clássicos",
        "Livros de viagem",
        "Livros de receitas"
      ],
      "d30": [
        "O que você gostaria de fazer com as próprias mãos?",
        "Móveis",
        "A própria louça",
        "Uma manta de tricô",
        "Uma casinha de passarinho"
      ],
      "d31": [
        "Onde você gostaria de fazer um piquenique?",
        "À beira de um rio",
        "Num jardim",
        "Numa clareira na floresta",
        "Nas montanhas"
      ],
      "d32": [
        "Como você gostaria de se locomover um dia?",
        "De carro elétrico",
        "De bicicleta",
        "Num carro grande de família",
        "Sem carro"
      ],
      "d33": [
        "O que você gostaria de fazer na aposentadoria?",
        "Cuidar do jardim",
        "Viajar",
        "Ficar com os netos",
        "Aprender coisas novas"
      ],
      "d34": [
        "Que boa ação você gostaria de fazer?",
        "Construir um poço d’água",
        "Ajudar um abrigo de gatos",
        "Juntar livros para uma escola",
        "Plantar uma fileira de árvores"
      ],
      "d35": [
        "O que você gostaria no café da manhã do fim de semana?",
        "Panquecas",
        "Omelete",
        "Mingau com frutas",
        "Bolinhos de ricota"
      ],
      "d36": [
        "Onde você gostaria de receber visitas?",
        "Na cozinha",
        "Na sala",
        "No terraço",
        "No jardim"
      ],
      "d37": [
        "Que maravilha natural você gostaria de ver?",
        "O Grand Canyon",
        "As Cataratas do Niágara",
        "O lago Baikal",
        "O deserto do Saara"
      ],
      "d38": [
        "Que habilidade doméstica você gostaria de aprender?",
        "Fazer os próprios consertos",
        "Costurar",
        "Fazer pão",
        "Cuidar de um jardim"
      ],
      "d39": [
        "Quantos idiomas você gostaria de falar?",
        "Dois",
        "Três",
        "Cinco",
        "O máximo possível"
      ],
      "d40": [
        "Que cor de parede você gostaria em casa?",
        "Branco",
        "Bege",
        "Verde-claro",
        "Azul-claro"
      ],
      "d41": [
        "Que peixe você gostaria de ter no aquário?",
        "Um peixinho-dourado",
        "Guppys",
        "Um cascudo",
        "Um acará-bandeira"
      ],
      "d42": [
        "Que viagem você gostaria de dar aos seus pais?",
        "Férias na praia",
        "Um passeio pela cidade",
        "Uma viagem às montanhas",
        "Uma viagem de trem"
      ],
      "d43": [
        "O que você gostaria de fazer no tempo livre?",
        "Desenhar",
        "Ler",
        "Esporte",
        "Artesanato"
      ],
      "d44": [
        "Em que estação você gostaria de viajar?",
        "Primavera",
        "Verão",
        "Outono",
        "Inverno"
      ],
      "d45": [
        "O que você gostaria de fazer em conserva para o inverno?",
        "Geleia",
        "Picles",
        "Frutas secas",
        "Compota de frutas"
      ],
      "d46": [
        "Que outra profissão você gostaria de experimentar?",
        "Cozinheiro",
        "Programador",
        "Tradutor",
        "Marceneiro"
      ],
      "d47": [
        "Que país você gostaria de conhecer?",
        "Malásia",
        "Itália",
        "Canadá",
        "Indonésia"
      ],
      "d48": [
        "O que você gostaria de ter no quintal?",
        "Uma pequena fonte",
        "Uma horta",
        "Um caramanchão",
        "Um balanço"
      ],
      "d49": [
        "Como você gostaria de comemorar conquistas?",
        "Um jantar em família",
        "Um passeio na natureza",
        "Um livro novo",
        "Uma boa ação pelos outros"
      ],
      "d50": [
        "O que você gostaria de passar para os filhos?",
        "O gosto pela leitura",
        "Saber cozinhar",
        "A língua materna",
        "O cuidado com a natureza"
      ]
    }
  },
  "tr": {
    "text": {
      "homeLink": "İki kişilik oyunlar",
      "eyebrow": "GLOWLETTER · İKİ KİŞİLİK OYUNLAR",
      "title": "Birlikte oynayın",
      "close": "Kapat",
      "lead": "Değer verdiğin birine bir oyun gönder. Bağlantıdan oynamak ücretsizdir ve hesap gerektirmez.",
      "quizTitle": "Beni ne kadar tanıyorsun?",
      "quizNote": "Kendinle ilgili soruları yanıtla, yakının da tahmin etmeye çalışsın. Sonuç sana gelir.",
      "create": "Test oluştur",
      "soon": "Yakında",
      "soonTitle": "Yeni oyunlar yolda",
      "duel": "“Kim daha hızlı” düellosu",
      "loves": "Neleri seviyoruz",
      "cards": "İki kişilik hafıza kartları",
      "who": "Hangimiz?",
      "phrase": "Cümleyi tamamla",
      "myQuizzes": "Testlerim",
      "noQuizzes": "Henüz test yok. İlkini oluşturmak birkaç dakika sürer.",
      "forWhom": "Kime: {name}",
      "noRecipient": "Test",
      "resultsCount": "Sonuçlar: {count}",
      "newResults": "Yeni: {count}",
      "noResults": "Henüz kimse oynamadı.",
      "anonymous": "İsimsiz",
      "results": "Sonuçlar",
      "copyLink": "Bağlantıyı kopyala",
      "share": "Gönder",
      "deleteQuiz": "Testi sil",
      "deleteConfirm": "Bu test ve sonuçları silinsin mi? Bağlantı artık çalışmayacak.",
      "deleted": "Test silindi",
      "linkCopied": "Bağlantı kopyalandı",
      "back": "Geri",
      "next": "İleri",
      "stepNames": "Adım 1/2 · İsimler",
      "yourName": "Adın",
      "yourNamePlaceholder": "Adın ne",
      "recipient": "Kime · isteğe bağlı",
      "recipientPlaceholder": "Sevdiğin kişinin adı",
      "nameRequired": "Adını yaz.",
      "forbiddenName": "Sıradan bir isim yaz.",
      "stepAnswers": "Adım 2/2 · Senin yanıtların",
      "answersLead": "Senin için doğru olanı işaretle. Her soru değiştirilebilir.",
      "swap": "Başka soru",
      "progress": "{total} sorudan {done} yanıtlandı",
      "answerAll": "Her soru için bir yanıt seç.",
      "finish": "Bağlantıyı al",
      "creating": "Test oluşturuluyor…",
      "createdTitle": "Testin hazır!",
      "createdLead": "Bağlantıyı gönder. Yanıt gelince sonuç “Testlerim” bölümünde görünür.",
      "shareText": "{name} seni “Beni ne kadar tanıyorsun?” oyununa davet ediyor",
      "signInTitle": "Giriş yapman gerekiyor",
      "signInNote": "Sonuçların sana ulaşması için test hesabında saklanır.",
      "signIn": "Giriş yap",
      "premiumNote": "Oyun oluşturmak tam erişime dahildir. Bağlantıdan oynamak herkes için ücretsizdir.",
      "failed": "Olmadı. Bağlantını kontrol edip yeniden dene.",
      "rateLimited": "Çok fazla deneme. Daha sonra yeniden dene.",
      "playEyebrow": "İKİ KİŞİLİK OYUN",
      "playInvite": "{name} seni oyuna davet ediyor",
      "playLead": "Soru sayısı: {count}. Yanıtları tahmin et — sonunda kaç tanesinin eşleştiğini göreceksin.",
      "playName": "Adın · isteğe bağlı",
      "playNamePlaceholder": "Seni tanısınlar diye",
      "start": "Başla",
      "playLoading": "Oyun yükleniyor…",
      "playMissing": "Bu oyun kullanılamıyor: bağlantı silinmiş ya da süresi dolmuş.",
      "playOffline": "Oyun için internet bağlantısı gerekir.",
      "retry": "Yeniden dene",
      "questionOf": "Soru {n}/{total}",
      "asks": "{name} soruyor",
      "counting": "Eşleşmeler sayılıyor…",
      "scoreOf": "{score}/{total}",
      "tierAll": "Mükemmel! Birbirinizi herkesten iyi tanıyorsunuz",
      "tierHigh": "Birbirinizi çok iyi tanıyorsunuz",
      "tierMid": "Fena değil! Keşfedecek daha çok şey var",
      "tierLow": "Önünüzde pek çok güzel keşif var",
      "sentTo": "{name} sonucunu görecek",
      "review": "Yanıtların",
      "rightAnswer": "Doğru yanıt",
      "makeOwn": "Kendi testimi oluştur",
      "home": "Ana sayfa",
      "resultToast": "{name}: “Beni ne kadar tanıyorsun?” testinde {score}/{total}",
      "ownerAnswers": "Testi hazırlayanın yanıtları",
      "playerAnswers": "{name} adlı kişinin yanıtları",
      "paywallTitle": "Oyunlar, eğlence<br><em>ve mektuplar</em>",
      "groupGames": "Oyunlar",
      "groupFun": "Eğlence",
      "groupLetters": "Mektuplar",
      "featQuiz": "“Beni ne kadar tanıyorsun?” — sonuç sana gelir",
      "featGamesSoon": "“Kim daha hızlı” düellosu, “Neleri seviyoruz”, ayıcıklı hafıza kartları",
      "featFunSoon": "“Hangimiz?” ve çiftin kitabıyla “Cümleyi tamamla”",
      "featCollection": "15 dilde mektup ve şiirlerin tüm koleksiyonu",
      "featMoments": "Anlar, hatırlatıcılar ve doğru günde açılan QR mektup",
      "featAudio": "Mektupta kendi sesin ve alıcının yanıtı",
      "groupTalk": "Arkadaşlar ve aramalar",
      "featCall": "Arkadaşlarla aramalar: ses, hoparlör ve canlı tepkiler",
      "ynTitle": "Evet mi hayır mı",
      "ynNote": "İki kişilik canlı oyun: her kart için 5 saniye. Zamanında yanıtlayan, karşısındakinin yanıtını görür.",
      "ynCreate": "Oda oluştur",
      "ynWaiting": "{name} bağlantıyı açana kadar bekliyoruz…",
      "ynWaitingAny": "Diğer oyuncuyu bekliyoruz…",
      "ynShareText": "{name} seni canlı “Evet mi hayır mı” oyununa davet ediyor",
      "ynPartnerHere": "{name} burada!",
      "ynStart": "Oyunu başlat",
      "ynWaitHost": "{name} birazdan oyunu başlatacak",
      "ynYes": "Evet",
      "ynNo": "Hayır",
      "ynMissed": "Geç kaldın — bu kart kapalı kalıyor",
      "ynMatch": "Aynı yanıt!",
      "ynRound": "Kart {n}/{total}",
      "ynAnswered": "Yanıt gönderildi, diğer oyuncu bekleniyor…",
      "ynFinal": "{total} kartta {score} eşleşme",
      "ynFinalHigh": "Birbirinizi sözsüz anlıyorsunuz",
      "ynFinalMid": "Çok farklı — ve çok yakın",
      "ynAgain": "Tekrar oyna",
      "ynLeft": "Diğer oyuncunun bağlantısı koptu. Dönmesini bekliyoruz…",
      "ynYou": "Sen",
      "ynOffline": "Oyuna bağlanılamıyor. İnterneti kontrol edip bağlantıyı yeniden aç.",
      "ynJoin": "Oyuna katıl",
      "ynJoinLead": "{name} seni bekliyor. Her yanıt için 5 saniye!",
      "ynStepNames": "Senin ve diğer oyuncunun adı",
      "ynRoomReady": "Oda hazır — bağlantıyı gönder",
      "ynStayHere": "Bu ekranı kapatma: bağlantı açılınca oyun başlar.",
      "featYesNo": "Canlı “Evet mi hayır mı” oyunu — yanıt başına 5 saniye",
      "ynPartnerMissed": "Yanıt yok — süre doldu",
      "lvTitle": "Neleri seviyoruz",
      "lvNote": "İki kişilik canlı oyun: 4 resim, en sevdiğini seçmek için 10 saniye. Aynısını da seçebilirsiniz!",
      "lvShareText": "{name} seni canlı “Neleri seviyoruz” oyununa davet ediyor",
      "lvJoinLead": "{name} seni bekliyor. En sevdiğin resmi seç!",
      "lvRound": "Konu {n}/{total}",
      "lvPick": "En sevdiğini seç",
      "lvBoth": "İkiniz de seçtiniz: {item}",
      "lvCommon": "İkinizin de sevdikleri",
      "lvDiff": "Farklı zevkler — daha da ilginç!",
      "lvFinalHigh": "Ne çok ortak noktanız var!",
      "lvFinalMid": "Çok farklısınız — ve birbirinizi tamamlıyorsunuz",
      "featLoves": "Canlı “Neleri seviyoruz” oyunu — 4 resim, birlikte seçin",
      "featGamesSoon2": "“Kim daha hızlı” düellosu ve ayıcıklı hafıza kartları",
      "mcTitle": "Ayıcıklı hafıza kartları",
      "mcNote": "İki kişilik canlı hafıza oyunu: sırayla ikişer kart açın ve eşleri bulun. 8’den 16 karta üç seviye.",
      "mcShareText": "{name} seni canlı “Ayıcıklı hafıza kartları” oyununa davet ediyor",
      "mcJoinLead": "{name} seni bekliyor. Eşleri sırayla bulun!",
      "mcLevel": "Seviye {n}/{total}",
      "mcTurnYou": "Sıra sende — iki kart aç",
      "mcTurnThem": "Sıra {name} adlı kişide",
      "mcPairs": "Bulunan eşler: {found}/{total}",
      "mcLevelDone": "Tüm eşler bulundu!",
      "mcTimeUp": "Bu seviyenin süresi doldu",
      "mcNext": "Sırada: seviye {n}",
      "mcFinal": "Bulunan eşler: {found}/{total}",
      "mcFinalHigh": "Harika bir takım!",
      "mcFinalMid": "Güzel oyundu — bir daha?",
      "featCards": "Canlı “Ayıcıklı hafıza kartları” — eşleri birlikte bulun",
      "featGamesSoon3": "“Kim daha hızlı” düellosu",
      "duTitle": "Kim daha hızlı",
      "duNote": "Canlı düello: bir kelime ve dört resim. Doğru resme ilk siz dokunun — yanlış dokunuş turu kaybettirir.",
      "duShareText": "{name} size “Kim daha hızlı” canlı düellosunda meydan okuyor",
      "duJoinLead": "{name} sizi bekliyor. Doğru resmi daha hızlı bulun!",
      "duRound": "Tur {n} / {total}",
      "duFind": "Bulun: {item}",
      "duYouWon": "Siz daha hızlıydınız!",
      "duTheyWon": "Daha hızlı: {name}",
      "duWrong": "Yanlış resim — bu tur kaybedildi",
      "duNobody": "Kimse zamanında bulamadı",
      "duScore": "Siz {you} : {them} {name}",
      "duFinalWin": "Zafer! Bugün gözleriniz çok keskin.",
      "duFinalLose": "Bu sefer kazanan: {name} — rövanş?",
      "duFinalDraw": "Berabere — tam denk geldiniz!",
      "duSeconds": "{s} sn",
      "featDuel": "“Kim daha hızlı” canlı düellosu — resmi ilk siz bulun",
      "whoTitle": "Hangimiz?",
      "whoNote": "İki kişilik canlı oyun: bir soru, “Ben”e ya da partnerinizin adına dokunun. Birbiriniz hakkında aynı fikirde misiniz, görün.",
      "whoShareText": "{name} sizi “Hangimiz?” canlı oyununa davet ediyor",
      "whoJoinLead": "{name} sizi bekliyor. Dürüstçe cevaplayın — sonra karşılaştırın!",
      "whoRound": "Soru {n} / {total}",
      "whoMe": "Ben",
      "whoAgree": "Aynı fikirdesiniz: {name}",
      "whoDiffer": "Fikirler farklı — konuşun!",
      "whoFinal": "{total} sorudan {score} tanesinde aynı fikirdeydiniz",
      "whoFinalHigh": "Birbirinizi ne kadar net görüyorsunuz!",
      "whoFinalMid": "Konuşacak çok şey var — bu da çok güzel",
      "featWho": "“Hangimiz?” canlı oyunu — aynı fikirde misiniz?",
      "phTitle": "Cümleyi tamamla",
      "phNote": "İki kişilik canlı oyun: ikiniz de aynı sıcak cümleyi kendi sözlerinizle tamamlarsınız, sonra birbirinizin cevaplarını okursunuz.",
      "phShareText": "{name} sizi “Cümleyi tamamla” canlı oyununa davet ediyor",
      "phJoinLead": "{name} sizi bekliyor. Her cümleyi kendi sözlerinizle tamamlayın!",
      "phRound": "Cümle {n} / {total}",
      "phPlaceholder": "Sizin devamınız…",
      "phDone": "Tamam",
      "phWaiting": "{name} bekleniyor…",
      "phSkipped": "Cevap yok",
      "phSave": "Çiftin kitabına kaydet",
      "phSaved": "Çiftin kitabına kaydedildi",
      "phForbidden": "Lütfen bağlantı ve kaba sözler olmadan yazın.",
      "phNext": "Sonraki cümle",
      "phFinal": "Birlikte tamamlanan cümleler: {count}",
      "phFinalLead": "En sevdiğiniz cevapları çiftin kitabına kaydedin.",
      "featPhrase": "Çiftin kitabıyla “Cümleyi tamamla” canlı oyunu",
      "bookTitle": "Çiftin kitabı",
      "bookNote": "“Cümleyi tamamla” oyunundan en sıcak cevaplar, hesabınızda saklanır.",
      "bookOpen": "Kitabı aç",
      "bookEmpty": "Kitap şimdilik boş. “Cümleyi tamamla” oynayın ve beğendiğiniz cevapları kaydedin.",
      "bookDelete": "Sil",
      "bookDeleteConfirm": "Bu sayfa kitaptan silinsin mi?",
      "bookYou": "Siz",
      "inviteTitle": "Arkadaş davet et",
      "inviteNote": "Arkadaşınıza oyunla ilgili bir mesaj gelecek.",
      "invite": "Davet et",
      "invited": "Davet edildi",
      "inviteNone": "Tek dokunuşla davet etmek için “Arkadaşlar” bölümünden arkadaş ekleyin.",
      "inviteSent": "Davet gönderildi: {name}",
      "truth": "Doğru mu yanlış mı",
      "tfTitle": "Doğru mu yanlış mı",
      "tfNote": "İki kişilik canlı oyun: dünya hakkında şaşırtıcı bilgiler. 12 saniye — doğru mu yanlış mı? Her doğru yanıt bir puan.",
      "tfShareText": "{name} seni canlı “Doğru mu yanlış mı” oyununa davet ediyor",
      "tfJoinLead": "{name} seni bekliyor. Doğru mu yanlış mı — hızlı karar ver!",
      "tfRound": "Bilgi {n}/{total}",
      "tfTrue": "Doğru",
      "tfFalse": "Yanlış",
      "tfIsTrue": "Bu doğru!",
      "tfIsFalse": "Bu yanlış!",
      "tfFirstYou": "İlk doğru bilen sensin!",
      "tfFirstThem": "İlk doğru bilen: {name}",
      "tfFinalWin": "Zafer! Dünya hakkında daha çok şey biliyorsun.",
      "tfFinalLose": "Bu sefer {name} daha çok biliyor — rövanş?",
      "tfFinalDraw": "Berabere — ikiniz de aynı derecede biliyorsunuz!",
      "featTruth": "Canlı “Doğru mu yanlış mı” oyunu — dünya hakkında şaşırtıcı bilgiler",
      "countries": "Ülkeyi tahmin et",
      "coTitle": "Ülkeyi tahmin et",
      "coNote": "İki kişilik canlı oyun: ayıcık dünyayı geziyor. 10 saniye — hangi ülkede olduğunu tahmin et! Her doğru cevaba bir puan.",
      "coShareText": "{name} seni canlı “Ülkeyi tahmin et” oyununa davet ediyor",
      "coJoinLead": "{name} seni bekliyor. Resimden ülkeyi tahmin et!",
      "coRound": "Ülke {n}/{total}",
      "coAsk": "Burası hangi ülke?",
      "coFinalWin": "Zafer! Tam bir dünya gezginisin.",
      "coFinalLose": "Bu sefer dünyayı {name} daha iyi biliyor — rövanş?",
      "coFinalDraw": "Berabere — ikiniz de dünyayı iyi biliyorsunuz!",
      "featCountries": "Canlı “Ülkeyi tahmin et” oyunu — 40 ülke",
      "hints": "İpuçlarından tahmin et",
      "dreams": "Hayaller ve planlar",
      "hiTitle": "İpuçlarından tahmin et",
      "hiNote": "İki kişilik canlı oyun: üç ipucu tek tek açılır. İlkinde bilirsen 3 puan, ikincide 2, üçüncüde 1.",
      "hiShareText": "{name} seni canlı “İpuçlarından tahmin et” oyununa davet ediyor",
      "hiJoinLead": "{name} seni bekliyor. Olabildiğince erken tahmin et!",
      "hiRound": "Bilmece {n} / {total}",
      "hiAsk": "Bu nedir?",
      "hiClue": "İpucu {n}",
      "hiPoints": "+{n} puan",
      "hiNoPoints": "Bu sefer puan yok",
      "hiFinalWin": "Zafer! Tahmin etmede çok iyisin.",
      "hiFinalLose": "Bu sefer {name} daha iyi tahmin etti — rövanş?",
      "hiFinalDraw": "Berabere — ikiniz de tahmin etmede çok iyisiniz!",
      "featHints": "Canlı oyun “İpuçlarından tahmin et” — 3, 2 ya da 1 puan",
      "drTitle": "Hayaller ve planlar",
      "drNote": "İki kişilik canlı oyun: ev, seyahat, öğrenme ve hobiler. İstediğini seç, hayalleriniz örtüşüyor mu gör.",
      "drShareText": "{name} seni canlı “Hayaller ve planlar” oyununa davet ediyor",
      "drJoinLead": "{name} seni bekliyor. Gerçekten istediğini seç!",
      "drRound": "Soru {n} / {total}",
      "drPick": "İstediğini seç",
      "drBoth": "Ortak hayal: {item}",
      "drDiff": "Farklı hayaller — nedenini birbirinize anlatın!",
      "drFinalHigh": "Ne çok ortak hayaliniz var!",
      "drFinalMid": "Farklı hayaller — konuşacak çok şey var",
      "drCommon": "Ortak hayalleriniz",
      "featDreams": "Canlı oyun “Hayaller ve planlar” — hayalleriniz örtüşüyor mu?",
      "modestTitle": "Ölçülü mod",
      "modestNote": "Duygular, sarılma ya da buluşmalar hakkında soru yok — yalnızca dostça sorular"
    },
    "questions": {
      "q01": [
        "En sevdiğim mevsim?",
        "İlkbahar",
        "Yaz",
        "Sonbahar",
        "Kış"
      ],
      "q02": [
        "Kahvaltıda ne seçerim?",
        "Kahve ve kruvasan",
        "Yulaf lapası",
        "Yumurta",
        "Sadece çay"
      ],
      "q03": [
        "Mükemmel tatil günüm?",
        "Evde battaniye altında",
        "Parkta yürüyüş",
        "Şehir dışına kaçamak",
        "Arkadaşlarla buluşma"
      ],
      "q04": [
        "Nereye gitmeyi hayal ediyorum?",
        "Denize",
        "Dağlara",
        "Büyük bir şehre",
        "Köyde şirin bir eve"
      ],
      "q05": [
        "En sevdiğim dondurma?",
        "Vanilyalı",
        "Çikolatalı",
        "Çilekli",
        "Fıstıklı"
      ],
      "q06": [
        "Beni en çabuk ne mutlu eder?",
        "Sarılmak",
        "Sürpriz",
        "Tatlı sözler",
        "Lezzetli bir şey"
      ],
      "q07": [
        "Ben daha çok…",
        "Sabah insanıyım",
        "Gece kuşuyum",
        "Fırsat buldukça uyurum",
        "Öğle uykusu severim"
      ],
      "q08": [
        "Bu akşam hangi filmi seçerim?",
        "Komedi",
        "Romantik bir hikâye",
        "Polisiye",
        "Animasyon"
      ],
      "q09": [
        "En sevdiğim renk?",
        "Kırmızı",
        "Mavi",
        "Yeşil",
        "Pembe"
      ],
      "q10": [
        "En çok neden korkarım?",
        "Örümceklerden",
        "Yükseklikten",
        "Karanlıktan",
        "Geç kalmaktan"
      ],
      "q11": [
        "Hangi çiçekleri severim?",
        "Gül",
        "Lale",
        "Şakayık",
        "Papatya"
      ],
      "q12": [
        "Üzgünken ne yaparım?",
        "Sevdiklerimi ararım",
        "Tatlı bir şey yerim",
        "Yürüyüşe çıkarım",
        "Uyurum"
      ],
      "q13": [
        "Bana en yakın hayvan hangisi?",
        "Kedi yavrusu",
        "Köpek",
        "Ayı yavrusu",
        "Küçük tilki"
      ],
      "q14": [
        "Benim için en güzel hediye?",
        "El yapımı bir şey",
        "Bir seyahat",
        "Bir takı",
        "Bir kitap"
      ],
      "q15": [
        "En sevdiğim içecek?",
        "Siyah çay",
        "Yeşil çay",
        "Kahve",
        "Sıcak çikolata"
      ],
      "q16": [
        "En sevdiğim atıştırmalık?",
        "Çikolata",
        "Cips",
        "Meyve",
        "Pasta"
      ],
      "q17": [
        "Seyahatte neyi seçerim?",
        "Müzeler",
        "Plaj",
        "Yerel mutfak",
        "Plansız gezmek"
      ],
      "q18": [
        "Akşamı nasıl geçirmeyi severim?",
        "Kitapla",
        "Diziyle",
        "Sohbet ederek",
        "Yürüyüşte"
      ],
      "q19": [
        "Hangi hava içimi açar?",
        "Güneş",
        "Ilık yağmur",
        "Kar yağışı",
        "Hafif rüzgâr"
      ],
      "q20": [
        "Hangi süper güç bana yakışır?",
        "Uçmak",
        "Akıl okumak",
        "Zamanı durdurmak",
        "Işınlanmak"
      ],
      "q21": [
        "Sevdiklerimde en çok neye önem veririm?",
        "Güven",
        "İlgi",
        "Mizah",
        "Destek"
      ],
      "q22": [
        "En çok hangi günü beklerim?",
        "Yılbaşı",
        "Doğum günüm",
        "Yaz tatili",
        "Sevgililer Günü"
      ],
      "q23": [
        "“Seni seviyorum”u en çok nasıl söylerim?",
        "Sözlerle",
        "Davranışlarla",
        "Sarılarak",
        "Hediyelerle"
      ],
      "q24": [
        "Kafede ne sipariş ederim?",
        "Makarna",
        "Suşi",
        "Salata",
        "Tatlı"
      ],
      "q25": [
        "Günün en sevdiğim zamanı?",
        "Sabah",
        "Öğleden sonra",
        "Akşam",
        "Gece"
      ],
      "q26": [
        "Hangi mutfağı seçerim?",
        "İtalyan",
        "Japon",
        "Ev yemekleri",
        "Meksika"
      ],
      "q27": [
        "En iyi nerede düşünürüm?",
        "Duşta",
        "Yürürken",
        "Yolculukta",
        "Uyumadan önce"
      ],
      "q28": [
        "Sabah ilk iş ne yaparım?",
        "Telefonuma bakarım",
        "Su içerim",
        "Kahve yaparım",
        "Biraz daha yatakta kalırım"
      ],
      "q29": [
        "En sevdiğim meyve?",
        "Elma",
        "Muz",
        "Mango",
        "Karpuz"
      ],
      "q30": [
        "Hangi hobi bana en uygun?",
        "Resim",
        "Yemek yapmak",
        "Spor",
        "Kitap okumak"
      ],
      "q31": [
        "Doğum günümü nasıl kutlamak isterim?",
        "Büyük bir partiyle",
        "Baş başa bir akşam yemeğiyle",
        "Bir geziyle",
        "Evde sakin bir akşamla"
      ],
      "q32": [
        "Sürprizler hakkında ne düşünürüm?",
        "Bayılırım",
        "Biraz heyecanlandırır",
        "Başkalarına yapmayı severim",
        "Önceden bilmeyi tercih ederim"
      ],
      "q33": [
        "Hangi tatlıyı tercih ederim?",
        "Pasta",
        "Dondurma",
        "Kurabiye",
        "Şeker"
      ],
      "q34": [
        "Issız bir adaya ne götürürüm?",
        "Bir kitap",
        "Telefonumu",
        "Bir battaniye",
        "Bir fotoğraf makinesi"
      ],
      "q35": [
        "Zor bir günün ardından nasıl dinlenirim?",
        "Sıcak bir banyo",
        "Bir dizi",
        "Bir yürüyüş",
        "Yakın biriyle sohbet"
      ],
      "q36": [
        "En çok hangi ulaşımı severim?",
        "Tren",
        "Uçak",
        "Araba",
        "Bisiklet"
      ],
      "q37": [
        "Çocukken en sevdiğim oyun?",
        "Saklambaç",
        "Kovalamaca",
        "Lego",
        "Resim yapmak"
      ],
      "q38": [
        "Hangi masal bana en yakın?",
        "Külkedisi",
        "Küçük Prens",
        "Winnie the Pooh",
        "Alice Harikalar Diyarında"
      ],
      "q39": [
        "Sevdiğim birini neyle sevindiririm?",
        "Bir sürprizle",
        "Bir kartla",
        "Bir geziyle",
        "Bir akşam yemeğiyle"
      ],
      "q40": [
        "En çok neyin fotoğrafını çekerim?",
        "Kendimin",
        "Doğanın",
        "Yemeklerin",
        "Neredeyse hiç çekmem"
      ],
      "q41": [
        "Evde en sevdiğim yer?",
        "Yatak",
        "Mutfak",
        "Kanepe",
        "Balkon"
      ],
      "q42": [
        "Bir insanda ilk neyi fark ederim?",
        "Gülüşünü",
        "Gözlerini",
        "Sesini",
        "Mizah anlayışını"
      ],
      "q43": [
        "Beni en çabuk ne güldürür?",
        "Komik videolar",
        "Sevdiklerimin şakaları",
        "Garip durumlar",
        "Hayvanlar"
      ],
      "q44": [
        "Sıcak bir yaz gününde ne içerim?",
        "Limonata",
        "Soğuk çay",
        "Meyve suyu",
        "Buzlu su"
      ],
      "q45": [
        "Hangi element bana en yakın?",
        "Su",
        "Ateş",
        "Toprak",
        "Hava"
      ],
      "q46": [
        "Hangi hikâyeleri severim?",
        "Macera",
        "Aşk",
        "Bilim kurgu",
        "Gerçek hikâyeler"
      ],
      "q47": [
        "Yağmurlu bir günü nasıl geçiririm?",
        "Kitap okuyarak",
        "Uyuyarak",
        "Film izleyerek",
        "Şemsiyeyle yürüyerek"
      ],
      "q48": [
        "Bir hediyede en çok neye değer veririm?",
        "İlgiye",
        "İşe yaramasına",
        "Güzelliğine",
        "Sürprize"
      ],
      "q49": [
        "Hangi patatesi seçerim?",
        "Püre",
        "Kızartma",
        "Fırında",
        "Cips"
      ],
      "q50": [
        "Yeni bir şehirde ilk nereye giderim?",
        "Bir kafeye",
        "Bir müzeye",
        "Bir parka",
        "Alışverişe"
      ],
      "q51": [
        "Uyuyamadığımda ne yaparım?",
        "Kitap okurum",
        "Telefonda gezinirim",
        "Koyun sayarım",
        "Ilık süt içerim"
      ],
      "q52": [
        "Önemli bir güne nasıl hazırlanırım?",
        "Her şeyi önceden planlarım",
        "Son dakikaya bırakırım",
        "Yardım isterim",
        "Heyecanlanır, uyuyamam"
      ],
      "q53": [
        "En çok hangi sporu izlemeyi severim?",
        "Futbol",
        "Tenis",
        "Artistik patinaj",
        "Spor izlemem"
      ],
      "q54": [
        "Hangi evcil hayvan bana uygun?",
        "Kedi",
        "Köpek",
        "Papağan",
        "Hamster"
      ],
      "q55": [
        "Nasıl mesajlar yazarım?",
        "Uzun",
        "Kısa",
        "Bol emojili",
        "Sesli mesaj"
      ],
      "q56": [
        "En uzun süre hangi hediyeyi saklarım?",
        "Bir mektup",
        "Bir oyuncak",
        "Bir fotoğraf",
        "Bir takı"
      ],
      "q57": [
        "Hangisini seçerim?",
        "Şömine başında çay",
        "Çimlerde piknik",
        "Deniz kenarında yürüyüş",
        "Sinemaya gitmek"
      ],
      "q58": [
        "Hangi iltifat beni en çok mutlu eder?",
        "Görünüşüme dair",
        "Zekâma dair",
        "İyiliğime dair",
        "Mizah anlayışıma dair"
      ],
      "q59": [
        "Mükemmel sabahım?",
        "Yatakta kahvaltı",
        "Erken koşu",
        "Uzun bir uyku",
        "Balkonda kahve"
      ],
      "q60": [
        "Ne öğrenmek istiyorum?",
        "Dans etmeyi",
        "Yemek yapmayı",
        "Yeni bir dil",
        "Resim yapmayı"
      ],
      "q61": [
        "En iyi hangi yemeği yaparım?",
        "Çorba",
        "Pilav",
        "Hamur işi",
        "Salata"
      ],
      "q62": [
        "İlk önce hangi ülkeyi görmek isterim?",
        "Türkiye",
        "Japonya",
        "Fas",
        "Norveç"
      ],
      "q63": [
        "Hangi sporla ilgilenmeyi tercih ederim?",
        "Yüzme",
        "Koşu",
        "Bisiklet",
        "Futbol"
      ],
      "q64": [
        "Hangi kitabı seçerdim?",
        "Bir macera kitabı",
        "Bir tarih kitabı",
        "Masallar",
        "Bir ansiklopedi"
      ],
      "q65": [
        "Hayvanat bahçesinde önce hangi hayvanlara giderdim?",
        "Fillere",
        "Maymunlara",
        "Penguenlere",
        "Zürafalara"
      ],
      "q66": [
        "Acılı yemek hakkında ne düşünürüm?",
        "Ne kadar acı, o kadar iyi",
        "Biraz olabilir",
        "Sadece azıcık",
        "Hiç yemem"
      ],
      "q67": [
        "Okulda en sevdiğim ders hangisiydi?",
        "Matematik",
        "Edebiyat",
        "Coğrafya",
        "Beden eğitimi"
      ],
      "q68": [
        "Çocukken hayalimdeki meslek?",
        "Doktor",
        "Öğretmen",
        "Astronot",
        "Aşçı"
      ],
      "q69": [
        "Doğa yürüyüşleri hakkında ne düşünürüm?",
        "Uzun bir tanesinin hayalini kurarım",
        "Sadece bir günlüğüne",
        "Sadece konforlu olursa",
        "Ev daha iyi"
      ],
      "q70": [
        "Sabahları ruh hâlim nasıl?",
        "Enerji dolu",
        "Hâlâ uykulu",
        "Sessiz",
        "Konuşkan"
      ],
      "q71": [
        "En sevdiğim kuruyemiş hangisi?",
        "Fındık",
        "Ceviz",
        "Kaju",
        "Badem"
      ],
      "q72": [
        "Beklenmedik boş bir saatte ne yapardım?",
        "Kitap okurdum",
        "Yürüyüşe çıkardım",
        "Ailemi arardım",
        "Bir şey pişirirdim"
      ],
      "q73": [
        "Hangi havayı sevmem?",
        "Sıcak",
        "Rüzgâr",
        "Sulu kar",
        "Sert ayaz"
      ],
      "q74": [
        "Odamı hangi renge boyardım?",
        "Beyaz",
        "Bej",
        "Yeşil",
        "Açık mavi"
      ],
      "q75": [
        "Ne oynamayı tercih ederim?",
        "Satranç",
        "Dama",
        "Yapboz",
        "Kelime oyunu"
      ],
      "q76": [
        "Misafirler için ne pişirirdim?",
        "Pilav",
        "Börek",
        "Salatalar",
        "Yemek sipariş ederdim"
      ],
      "q77": [
        "Kesinlikle ne yemezdim?",
        "Mantar",
        "Balık",
        "Zeytin",
        "Haşlanmış soğan"
      ],
      "q78": [
        "Çayımı nasıl içerim?",
        "Demli",
        "Açık",
        "Şekerli",
        "Bitki çayı"
      ],
      "q79": [
        "Bir evde benim için en önemli şey ne?",
        "Temizlik",
        "Sıcaklık ve rahatlık",
        "Bol ışık",
        "Sessizlik"
      ],
      "q80": [
        "Yeni şeyleri nasıl öğrenirim?",
        "Okuyarak",
        "Video derslerle",
        "Uygulayarak",
        "Başkalarına sorarak"
      ],
      "q81": [
        "Hangi vahşi hayvan beni en çok büyüler?",
        "Kaplan",
        "Ayı",
        "Kartal",
        "Yunus"
      ],
      "q82": [
        "Anneme ne hediye ederdim?",
        "Çiçek",
        "El yapımı bir şey",
        "Bir gezi",
        "Sıcak bir battaniye"
      ],
      "q83": [
        "Yolculukta ne yaparım?",
        "Pencereden bakarım",
        "Kitap okurum",
        "Sohbet ederim",
        "Atıştırırım"
      ],
      "q84": [
        "En sevdiğim tavuk yemeği?",
        "Tavuk şiş",
        "Tavuklu pilav",
        "Tavuk köfte",
        "Nugget"
      ],
      "q85": [
        "Trende hangi koltuğu seçerim?",
        "Cam kenarı",
        "Koridor tarafı",
        "Ters yöne bakan",
        "Fark etmez"
      ],
      "q86": [
        "İşler ters gidince ne yaparım?",
        "Hemen harekete geçerim",
        "Önce düşünürüm",
        "Akıl danışırım",
        "Biraz endişelenirim"
      ],
      "q87": [
        "En belirgin özelliğim ne?",
        "İyilik",
        "Dürüstlük",
        "Azim",
        "Neşe"
      ],
      "q88": [
        "En iyi nerede dinlenirim?",
        "Köyde akrabaların yanında",
        "Deniz kenarında bir otelde",
        "Çadırda",
        "Evde"
      ],
      "q89": [
        "Hangi hamur işini seçerdim?",
        "Samsa",
        "Haçapuri",
        "Çak-çak",
        "Ekler"
      ],
      "q90": [
        "En çok hangi dili öğrenmek isterim?",
        "Arapça",
        "İngilizce",
        "Türkçe",
        "Japonca"
      ],
      "q91": [
        "Tatlısız ne kadar dayanabilirim?",
        "Bir gün",
        "Bir hafta",
        "Bir ay",
        "Gerektiği kadar"
      ],
      "q92": [
        "Geç kaldığımda ne yaparım?",
        "Var gücümle koşarım",
        "Önceden arayıp haber veririm",
        "Taksiye binerim",
        "Asla geç kalmam"
      ],
      "q93": [
        "Bir cihaz bozulunca ne yaparım?",
        "Kendim tamir ederim",
        "Kılavuzu okurum",
        "Yardım çağırırım",
        "Bütün düğmelere basarım"
      ],
      "q94": [
        "Bavuluma ilk ne koyarım?",
        "İlk yardım çantası",
        "Bir kitap",
        "Şarj aleti",
        "Atıştırmalık"
      ],
      "q95": [
        "Hangi uğraş beni sakinleştirir?",
        "Yemek yapmak",
        "Toparlamak",
        "Resim yapmak",
        "Yürüyüş"
      ],
      "q96": [
        "Emekli olunca ne yapmak isterim?",
        "Bahçe işleri",
        "Seyahat",
        "Kitap okumak",
        "Torunlarla vakit geçirmek"
      ],
      "q97": [
        "Beni en çok ne rahatsız eder?",
        "Gürültü",
        "Dağınıklık",
        "Geç kalmak",
        "Kabalık"
      ],
      "q98": [
        "En çok hangi kokuyu severim?",
        "Taze ekmek",
        "Yağmur",
        "Çiçekler",
        "Deniz"
      ],
      "q99": [
        "Tatlı olarak ne seçerdim?",
        "Meyve",
        "Dondurma",
        "Turta",
        "Sadece çay"
      ]
    },
    "yesNo": {
      "c01": [
        "Şu an beni özlüyor musun?",
        "seni çok özlüyor",
        "dayanıyor ama seni düşünüyor"
      ],
      "c02": [
        "Mesajımı görünce gülümsüyor musun?",
        "hep gülümsüyor",
        "içinden gülümsüyor"
      ],
      "c03": [
        "İlk buluşmamızı hatırlıyor musun?",
        "her dakikasını hatırlıyor",
        "en önemlisini hatırlıyor — seni"
      ],
      "c04": [
        "Bugün sarılmak ister misin?",
        "sarılmanı bekliyor",
        "sarılmaları sonraya saklıyor"
      ],
      "c05": [
        "Birlikte denize gidelim mi?",
        "bavulu hazırlıyor bile",
        "dağların hayalini kuruyor"
      ],
      "c06": [
        "Seni güldürüyor muyum?",
        "içten gülüyor",
        "gülümsemesini saklıyor"
      ],
      "c07": [
        "Yanımda huzurlu musun?",
        "yanında huzur buluyor",
        "seninle çok eğleniyor"
      ],
      "c08": [
        "Gün içinde beni düşünüyor musun?",
        "seni çok sık düşünüyor",
        "şu an seni düşünüyor"
      ],
      "c09": [
        "Sürprizlerimi seviyor musun?",
        "sürprizlerine bayılıyor",
        "en çok yanında olmanı seviyor"
      ],
      "c10": [
        "Birlikte turta yapalım mı?",
        "önlüğü bile taktı",
        "pasta almayı tercih ediyor"
      ],
      "c11": [
        "Akşam birlikte film izleyelim mi?",
        "filmi seçiyor bile",
        "sadece sohbet etmek istiyor"
      ],
      "c12": [
        "Sesimi seviyor musun?",
        "durmadan dinleyebilir",
        "gülüşünü daha çok seviyor"
      ],
      "c13": [
        "Hafta sonu piknik yapalım mı?",
        "battaniyeyi hazırlıyor",
        "seni şirin bir kafeye çağırıyor"
      ],
      "c14": [
        "Benden mektup almak ister misin?",
        "mektubunu bekliyor",
        "her şeyi yüz yüze duymak istiyor"
      ],
      "c15": [
        "Senin için önemli miyim?",
        "çok önemlisin",
        "düşündüğünden de fazla"
      ],
      "c16": [
        "Yağmurda yürüyelim mi?",
        "iki kişilik şemsiye alıyor",
        "evde çay demleyecek"
      ],
      "c17": [
        "Birbirimize benziyor muyuz?",
        "iki yarım gibisiniz",
        "birbirinizi harika tamamlıyorsunuz"
      ],
      "c18": [
        "Yemeklerimi seviyor musun?",
        "bir tabak daha istiyor",
        "seninle birlikte yemek yapmayı seviyor"
      ],
      "c19": [
        "Birlikte bir evcil hayvan alalım mı?",
        "ismini seçiyor bile",
        "şimdilik bir oyuncak ayı yeter"
      ],
      "c20": [
        "Neleri sevdiğimi biliyor musun?",
        "ezbere biliyor",
        "daha fazlasını öğrenmek istiyor"
      ],
      "c21": [
        "Dans edelim mi?",
        "elini uzatıyor bile",
        "alkışlayacak"
      ],
      "c22": [
        "Sana ilham veriyor muyum?",
        "her gün ilham veriyorsun",
        "yanında sadece sıcacık hissediyor"
      ],
      "c23": [
        "Fotoğraflarımızı saklıyor musun?",
        "her birini özenle saklıyor",
        "yenilerini, daha güzellerini bekliyor"
      ],
      "c24": [
        "Gün doğumunu birlikte izleyelim mi?",
        "alarm kuruyor",
        "gün batımını tercih ediyor"
      ],
      "c25": [
        "Bana bir sır verir misin?",
        "kulağına fısıldayacak",
        "sır olarak kalsın"
      ],
      "c26": [
        "Bana inanıyor musun?",
        "sana çok inanıyor",
        "her gün seni destekliyor"
      ],
      "c27": [
        "Sadece ikimiz seyahate çıkalım mı?",
        "bunun hayalini kuruyor",
        "tüm sevdiklerini götürecek"
      ],
      "c28": [
        "Aramamı bekliyor musun?",
        "gülümseyerek bekliyor",
        "gelmeni tercih ediyor"
      ],
      "c29": [
        "Sarılmalarımı seviyor musun?",
        "dünyanın en sıcakları",
        "el ele tutuşmayı seviyor"
      ],
      "c30": [
        "Birbirimize sesli kitap okuyalım mı?",
        "kitabı seçiyor bile",
        "seni dinlemeyi tercih ediyor"
      ],
      "c31": [
        "Bugün birlikte fotoğraf çekelim mi?",
        "güzel bir arka plan arıyor",
        "önce biraz sohbet"
      ],
      "c32": [
        "Moralini yükseltiyor muyum?",
        "her zaman",
        "seninle hüzün bile daha hafif"
      ],
      "c33": [
        "Yarın birlikte kahvaltı yapalım mı?",
        "kakaoyu hazırlıyor bile",
        "uzun uzun uyumayı hayal ediyor"
      ],
      "c34": [
        "Doğum günümü hatırlıyor musun?",
        "hatırlatmaya gerek yok",
        "gizlice sürpriz hazırlıyor"
      ],
      "c35": [
        "Buz pateni yapmaya gidelim mi?",
        "patenleri çıkarıyor",
        "kenardan seni destekleyecek"
      ],
      "c36": [
        "Bugün senin için güzel bir gün mü?",
        "harika bir gün",
        "sen yanındayken daha güzel olacak"
      ],
      "c37": [
        "Portremi çizer misin?",
        "kalemi aldı bile",
        "küçük bir kalp çizecek"
      ],
      "c38": [
        "Birlikte ağaç dikelim mi?",
        "yeri seçiyor",
        "pencere önündeki bir çiçekle başlayacak"
      ],
      "c39": [
        "Bir iltifat duymak ister misin?",
        "sabırsızlıkla bekliyor",
        "utanıyor ama çok istiyor"
      ],
      "c40": [
        "Sonra bir daha oynayalım mı?",
        "bir tur daha istiyor",
        "oyun yerine sarılmak istiyor"
      ],
      "c41": [
        "Acılı yemekleri sever misin?",
        "ne kadar acı, o kadar iyi",
        "daha hafif bir şey seçiyor"
      ],
      "c42": [
        "Yüzme bilir misin?",
        "balık gibi yüzüyor",
        "şimdilik kıyıya yakın duruyor"
      ],
      "c43": [
        "Bir kedin olsun ister misin?",
        "şimdiden isim düşünüyor",
        "köpekleri tercih ediyor"
      ],
      "c44": [
        "Bir gün İstanbul’u görmek ister misin?",
        "şimdiden Boğaz’ın hayalini kuruyor",
        "başka bir şehir seçerdi"
      ],
      "c45": [
        "Yemek yapmayı sever misin?",
        "zevkle yemek yapıyor",
        "bulaşık yıkamayı tercih ederdi"
      ],
      "c46": [
        "Pilav yapmayı öğrenmek ister misin?",
        "şimdiden tarif arıyor",
        "başkasınınkini tatmayı tercih ederdi"
      ],
      "c47": [
        "Kitap okumayı sever misin?",
        "yanında hep bir kitap var",
        "hikâye dinlemeyi tercih ediyor"
      ],
      "c48": [
        "Bisiklet sürebilir misin?",
        "hemen şimdi yola çıkabilir",
        "öğrenmeye söz veriyor"
      ],
      "c49": [
        "Dağları denize tercih eder misin?",
        "dağları seçiyor",
        "denizi seçiyor"
      ],
      "c50": [
        "Bir çöl görmek ister misin?",
        "kum tepelerinin hayalini kuruyor",
        "ormanı seçerdi"
      ],
      "c51": [
        "Kışı sever misin?",
        "ilk karı bekliyor",
        "yazı bekliyor"
      ],
      "c52": [
        "Çayı şekersiz mi içersin?",
        "çayın saf tadını seviyor",
        "bir kaşık şekersiz olmaz"
      ],
      "c53": [
        "Örümceklerden korkar mısın?",
        "onlardan uzak duruyor",
        "sakince dışarı çıkarıyor"
      ],
      "c54": [
        "Resim yapmayı sever misin?",
        "şimdiden fırçayı eline alıyor",
        "başkalarının resimlerine bakmayı tercih ediyor"
      ],
      "c55": [
        "Kuzey ışıklarını görmek ister misin?",
        "nerede görüleceğine şimdiden bakıyor",
        "yıldızları izlemeyi tercih ediyor"
      ],
      "c56": [
        "Yağmurlu havayı sever misin?",
        "dışarıdaki yağmurun sesini seviyor",
        "güneşi bekliyor"
      ],
      "c57": [
        "Ata binebilir misin?",
        "eyerde kendinden emin oturuyor",
        "şimdilik sadece hayalini kuruyor"
      ],
      "c58": [
        "Bir köpeğin olsun ister misin?",
        "sadık bir dostun hayalini kuruyor",
        "şimdilik bakacağı yeterince şey var"
      ],
      "c59": [
        "Tatlıyı tuzluya tercih eder misin?",
        "tatlısız yapamıyor",
        "tuzluyu seçiyor"
      ],
      "c60": [
        "Trenle yolculuğu sever misin?",
        "tekerleklerin tıkırtısını seviyor",
        "uçağı seçiyor"
      ],
      "c61": [
        "Güne erken başlamak senin için kolay mı?",
        "güne enerji dolu başlıyor",
        "ancak öğlene doğru açılıyor"
      ],
      "c62": [
        "Çadırda kamp yapmayı sever misin?",
        "şimdiden sırt çantasını hazırlıyor",
        "rahat bir otel seçiyor"
      ],
      "c63": [
        "Deniz kenarında yaşamak ister misin?",
        "dalga sesinin hayalini kuruyor",
        "şehri seçiyor"
      ],
      "c64": [
        "Kışın dondurma yer misin?",
        "ayazda bile yiyor",
        "sadece yazın"
      ],
      "c65": [
        "Çikolatayı sever misin?",
        "her çeşidini biliyor",
        "yanından sakince geçiyor"
      ],
      "c66": [
        "Börek çörek yapabilir misin?",
        "nine gibi hamur işi yapıyor",
        "öğrenmeye söz veriyor"
      ],
      "c67": [
        "Yıldızlara bakmayı sever misin?",
        "takımyıldızları biliyor",
        "güneşli bir günü tercih ediyor"
      ],
      "c68": [
        "Bir gün kendi bahçeni kurmak ister misin?",
        "şimdiden fide seçiyor",
        "saksıda bir çiçekle başlayacak"
      ],
      "c69": [
        "Kır çiçeklerini sever misin?",
        "papatya ve peygamber çiçeklerini seviyor",
        "bahçe çiçeklerini tercih ediyor"
      ],
      "c70": [
        "Kahve içer misin?",
        "kahvesiz gün başlamıyor",
        "çayı seçiyor"
      ],
      "c71": [
        "Ev yapımı limonatayı sever misin?",
        "şimdiden limon dilimliyor",
        "su içmeyi tercih ederdi"
      ],
      "c72": [
        "Bir gün Japonya’yı görmek ister misin?",
        "kiraz çiçeklerini görmenin hayalini kuruyor",
        "başka bir ülke seçerdi"
      ],
      "c73": [
        "Sonbaharı sever misin?",
        "yaprakları hışırdatarak yürümeyi seviyor",
        "ilkbaharı bekliyor"
      ],
      "c74": [
        "Lavanta kokusunu sever misin?",
        "bu kokuyu çok seviyor",
        "başka kokuları tercih ediyor"
      ],
      "c75": [
        "Masa oyunlarını sever misin?",
        "şimdiden tahtayı kuruyor",
        "yürüyüşü tercih ediyor"
      ],
      "c76": [
        "Araba kullanabilir misin?",
        "kendinden emin sürüyor",
        "şimdilik yolcu koltuğunda"
      ],
      "c77": [
        "Bir gün okyanusu görmek ister misin?",
        "büyük bir dalganın hayalini kuruyor",
        "deniz yeterli"
      ],
      "c78": [
        "Bir süre çiftlikte yaşamak ister misin?",
        "şimdiden tavukları besliyor",
        "şehirde kalıyor"
      ],
      "c79": [
        "Büyük şehirleri sever misin?",
        "şehir ışıklarını seviyor",
        "huzuru ve sessizliği seçiyor"
      ],
      "c80": [
        "Meyveyi şekerlemeye tercih eder misin?",
        "meyveyi seçiyor",
        "şekerlemeyi seçiyor"
      ],
      "c81": [
        "Denizde yunus görmek ister misin?",
        "görmeyi çok isterdi",
        "onlar hakkında okumayı tercih ederdi"
      ],
      "c82": [
        "Yazı sever misin?",
        "sıcak günleri bekliyor",
        "serin havayı seviyor"
      ],
      "c83": [
        "Parkta yürümeyi sever misin?",
        "her havada yürüyor",
        "evde kalmayı tercih ediyor"
      ],
      "c84": [
        "Elle yazmayı sever misin?",
        "yazısı çok düzgün",
        "telefonda yazıyor"
      ],
      "c85": [
        "Tekne gezilerini sever misin?",
        "şimdiden küreklere uzanıyor",
        "kıyıda kalıyor"
      ],
      "c86": [
        "Dünyayı dolaşmak ister misin?",
        "şimdiden rota çiziyor",
        "birkaç ülke yeter"
      ],
      "c87": [
        "Kardan adam yapabilir misin?",
        "en büyüğünü yapacak",
        "kartopu oynamayı tercih eder"
      ],
      "c88": [
        "Bu yıl yeni bir şey öğrenmek ister misin?",
        "şimdiden kurs seçiyor",
        "zaten yeterince işi var"
      ],
      "c89": [
        "Sessizliği sever misin?",
        "sessizliğin kıymetini biliyor",
        "ortalık hareketli olsun istiyor"
      ],
      "c90": [
        "Ailene hediye vermeyi sever misin?",
        "durup dururken aileyi sevindiriyor",
        "işe yarar yardımlarla destek olmayı tercih ediyor"
      ]
    },
    "loves": {
      "s01": [
        "Tatil nerede?",
        "Plaj",
        "Dağlar",
        "Seyahat",
        "Yalnız kalmak"
      ],
      "s02": [
        "Mükemmel akşam?",
        "Evde film",
        "Yürüyüş",
        "Restoran",
        "Kutu oyunları"
      ],
      "s03": [
        "En sevdiğin hava?",
        "Güneş",
        "Yağmur",
        "Kar",
        "Yıldızlı gece"
      ],
      "s04": [
        "En sevdiğin hayvan?",
        "Kedi yavrusu",
        "Köpek yavrusu",
        "At",
        "Yunus"
      ],
      "s05": [
        "Akşam yemeği?",
        "Pizza",
        "Suşi",
        "Pastalar",
        "Mangal"
      ],
      "s06": [
        "En sevdiğin içecek?",
        "Kahve",
        "Çay",
        "Sıcak çikolata",
        "Limonata"
      ],
      "s07": [
        "En sevdiğin mevsim?",
        "İlkbahar",
        "Yaz",
        "Sonbahar",
        "Kış"
      ],
      "s08": [
        "En sevdiğin çiçekler?",
        "Güller",
        "Laleler",
        "Ayçiçekleri",
        "Lavanta"
      ],
      "s09": [
        "Nasıl dinlenirsin?",
        "Kitapla",
        "Resim yaparak",
        "Bisikletle",
        "Hamakta uyuyarak"
      ],
      "s10": [
        "Nasıl seyahat edersin?",
        "Trenle",
        "Uçakla",
        "Arabayla",
        "Gemiyle"
      ],
      "s11": [
        "Hayalindeki ev?",
        "Şehirde daire",
        "Deniz kenarında ev",
        "Dağda kulübe",
        "Çiftlik"
      ],
      "s12": [
        "Tatlı bir şey?",
        "Dondurma",
        "Çikolata",
        "Pasta",
        "Meyve"
      ],
      "s13": [
        "Mükemmel sabah?",
        "Yatakta kahvaltı",
        "Koşu",
        "Uzun uyku",
        "Balkonda kahve"
      ],
      "s14": [
        "Hayalindeki buluşma?",
        "Piknik",
        "Buz pisti",
        "Lunapark",
        "Çatıda yıldızlar"
      ],
      "s15": [
        "En güzel hediye?",
        "Çiçek buketi",
        "Mektup",
        "Seyahat",
        "Hediye kutusu"
      ],
      "s16": [
        "En sevdiğin doğa?",
        "Deniz",
        "Orman",
        "Çöl",
        "Kuzey ışıkları"
      ],
      "s17": [
        "En sevdiğin meyve?",
        "Elma",
        "Çilek",
        "Karpuz",
        "Üzüm"
      ],
      "s18": [
        "Tatil günü ne yapılır?",
        "Dağda yürüyüş",
        "Evde yemek yapmak",
        "Müze",
        "Balık tutmak"
      ],
      "s19": [
        "En sevdiğin kahvaltı?",
        "Krep",
        "Omlet",
        "Meyveli lapa",
        "Kruvasan"
      ],
      "s20": [
        "En sevdiğin kuş?",
        "Baykuş",
        "Papağan",
        "Kuğu",
        "Tavus kuşu"
      ],
      "s21": [
        "Hangi şehre gidilir?",
        "İstanbul",
        "Paris",
        "Tokyo",
        "Dubai"
      ],
      "s22": [
        "En sevdiğin spor?",
        "Futbol",
        "Yüzme",
        "Tenis",
        "Binicilik"
      ],
      "s23": [
        "Bahçeye ne dikilir?",
        "Elma ağacı",
        "Gül",
        "Sebze",
        "Çilek"
      ],
      "s24": [
        "En sevdiğin hamur işi?",
        "Börek",
        "Pişi",
        "Kurabiye",
        "Baklava"
      ],
      "s25": [
        "Nerede yaşanır?",
        "Nehir kenarında",
        "Ormanda",
        "Büyük bir şehirde",
        "Bir adada"
      ],
      "s26": [
        "En sevdiğin deniz canlısı?",
        "Kaplumbağa",
        "Balina",
        "Ahtapot",
        "Denizatı"
      ],
      "s27": [
        "Neyle gezilir?",
        "Bisiklet",
        "Scooter",
        "Sıcak hava balonu",
        "Tekne"
      ],
      "s28": [
        "En sevdiğin uğraş?",
        "Örgü",
        "Doğa fotoğrafçılığı",
        "Bahçecilik",
        "Hat sanatı"
      ],
      "s29": [
        "En sevdiğin çorba?",
        "Borş",
        "Tavuk çorbası",
        "Balkabağı çorbası",
        "Mercimek çorbası"
      ],
      "s30": [
        "Orman hayvanı?",
        "Kirpi",
        "Sincap",
        "Tilki",
        "Geyik"
      ],
      "s31": [
        "Atıştırmalık?",
        "Hurma",
        "Badem",
        "Antep fıstığı",
        "Kuru kayısı"
      ],
      "s32": [
        "Doğa yürüyüşüne ne alınır?",
        "Çadır",
        "Termos",
        "Harita",
        "El feneri"
      ],
      "s33": [
        "En sevdiğin tatlı?",
        "Puding",
        "Cheesecake",
        "Ballı pankek",
        "Meyve salatası"
      ],
      "s34": [
        "Kışın ne yapılır?",
        "Kardan adam yapmak",
        "Kızakla kaymak",
        "Pencere kenarında çay",
        "Kayak yapmak"
      ],
      "s35": [
        "Yazın ne yapılır?",
        "Yüzmek",
        "Dut toplamak",
        "Tekne gezisi",
        "Kumdan kale yapmak"
      ],
      "s36": [
        "Neyle resim yapılır?",
        "Suluboya",
        "Kurşun kalem",
        "Pastel boya",
        "Tuval üzerine boya"
      ],
      "s37": [
        "En sevdiğin sebze?",
        "Havuç",
        "Domates",
        "Mısır",
        "Balkabağı"
      ],
      "s38": [
        "Evi sıcacık yapan ne?",
        "Şömine",
        "Yumuşak bir battaniye",
        "Saksı bitkileri",
        "Bir raf dolusu kitap"
      ],
      "s39": [
        "Ne oynanır?",
        "Satranç",
        "Yapboz",
        "Masa oyunları",
        "Top oyunları"
      ],
      "s40": [
        "Çiftlikte kim yaşar?",
        "İnek",
        "Kuzu",
        "Tavuk",
        "Oğlak"
      ],
      "s41": [
        "Çayın yanında ne?",
        "Bal",
        "Limon",
        "Reçel",
        "Nane"
      ],
      "s42": [
        "Deniz kenarında ne var?",
        "Deniz feneri",
        "Deniz kabukları",
        "Yelkenli",
        "Martılar"
      ],
      "s43": [
        "Sabaha nasıl başlanır?",
        "Egzersiz",
        "Bir fincan çay",
        "Yürüyüş",
        "Bir kitap"
      ],
      "s44": [
        "En sevdiğin minik meyve?",
        "Ahududu",
        "Yaban mersini",
        "Kiraz",
        "Böğürtlen"
      ]
    },
    "who": [
      "Hangimiz daha sık geç kalır?",
      "Hangimiz ilk barışır?",
      "Hangimiz daha iyi yemek yapar?",
      "Hangimiz daha sık güler?",
      "Hangimiz daha uzun sürede hazırlanır?",
      "Hangimiz anahtarları daha sık kaybeder?",
      "Hangimiz önemli tarihleri daha iyi hatırlar?",
      "Hangimiz tatlıyı daha çok sever?",
      "Hangimiz önce uyuyakalır?",
      "Hangimiz daha erken kalkar?",
      "Hangimiz daha sık “Seni özledim” der?",
      "Hangimiz daha güzel hediyeler seçer?",
      "Hangimiz daha sık şaka yapar?",
      "Hangimiz daha iyi araba kullanır?",
      "Hangimiz telefonda daha uzun konuşur?",
      "Hangimiz seyahat etmeyi daha çok sever?",
      "Hangimiz daha çabuk kırılır?",
      "Hangimiz daha çabuk affeder?",
      "Hangimiz daha çok fotoğraf çeker?",
      "Hangimiz parayı daha iyi idare eder?",
      "Hangimiz gereksiz şeyleri daha sık satın alır?",
      "Hangimiz teselli etmekte daha iyidir?",
      "Hangimiz zor anlarda daha sakin kalır?",
      "Hangimiz telefonunu sürekli arar?",
      "Hangimiz misafir ağırlamayı daha çok sever?",
      "Hangimiz kahvaltıyı daha sık hazırlar?",
      "Hangimiz yeni bir şehirde yolunu daha iyi bulur?",
      "Hangimiz daha uzun mesajlar yazar?",
      "Hangimiz yürüyüşe çıkmayı ilk önerir?",
      "Hangimiz hayvanları daha çok sever?",
      "Hangimiz sırları daha iyi saklar?",
      "Hangimiz menüden seçim yaparken daha uzun düşünür?",
      "Hangimiz sevdikleri için daha çok endişelenir?",
      "Hangimiz daha çok sürpriz yapar?",
      "Hangimiz daha düzenlidir?",
      "Hangimiz yeni bir saç kesimini ilk fark eder?",
      "Hangimiz komik hikâyeleri daha sık hatırlar?",
      "Hangimiz daha sabırlıdır?",
      "Hangimiz daha sık “teşekkürler” der?",
      "Hangimiz yardım etmeyi ilk önerir?",
      "Hangimiz akıldan hesapta daha iyi?",
      "Hangimiz daha çok okur?",
      "Hangimiz daha hızlı yazar?",
      "Hangimiz anne babasını daha sık arar?",
      "Hangimiz daha güzel hikâye anlatır?",
      "Hangimizin el yazısı daha düzgün?",
      "Hangimiz acılı yemeği daha çok sever?",
      "Hangimiz evde daha sık bir şey unutur?",
      "Hangimiz cihazlardan daha iyi anlar?",
      "Hangimiz yeni şeyler öğrenmeyi daha çok sever?",
      "Hangimiz plan yapmakta daha iyi?",
      "Hangimiz pazarda daha iyi pazarlık yapar?",
      "Hangimiz doğayı daha çok sever?",
      "Hangimiz daha hızlı yer?",
      "Hangimiz daha çok çay içer?",
      "Hangimiz bitkilere daha iyi bakar?",
      "Hangimiz coğrafyayı daha iyi bilir?",
      "Hangimiz daha iyi satranç oynar?",
      "Hangimiz pazarda daha iyi meyve seçer?",
      "Hangimiz hava durumuna daha sık bakar?",
      "Hangimiz örümceklerden daha çok korkar?",
      "Hangimiz daha cesur?",
      "Hangimiz daha meraklı?",
      "Hangimiz bulmacaları daha hızlı çözer?",
      "Hangimiz daha güzel resim yapar?",
      "Hangimiz komşulara daha sık yardım eder?",
      "Hangimiz çocuklarla daha iyi anlaşır?",
      "Hangimiz yürümeyi daha çok sever?",
      "Hangimiz kullanım kılavuzunu daha sık okur?",
      "Hangimiz isimleri daha iyi hatırlar?",
      "Hangimiz başka bir dilde kelimeleri daha hızlı öğrenir?",
      "Hangimiz hamur işinde daha iyi?",
      "Hangimiz daha iyi tavsiye verir?",
      "Hangimiz soğuk havayı daha çok sever?",
      "Hangimiz bir doğa yürüyüşünde daha başarılı olur?",
      "Hangimiz haberleri daha sık okur?",
      "Hangimiz yeni yemekleri daha sık dener?",
      "Hangimiz bavulu daha hızlı hazırlar?",
      "Hangimiz bir şeyleri tamir etmekte daha iyi?",
      "Hangimiz hayvanlarla daha sık konuşur?",
      "Hangimiz bulaşığı daha sık yıkar?",
      "Hangimiz tarihi daha iyi bilir?",
      "Hangimiz işleri daha sık erteler?",
      "Hangimiz yeni insanlarla daha çabuk kaynaşır?",
      "Hangimiz sağlığına daha çok dikkat eder?"
    ],
    "phrases": [
      "Şunu yaptığında gülümsüyorum: …",
      "Seninle en sevdiğim gün…",
      "Sana teşekkür ederim, çünkü…",
      "Üzgün olduğumda bana iyi gelen…",
      "Bir gün birlikte…",
      "Bizimle ilgili en sıcak anım…",
      "En iyi yaptığın şey…",
      "Kendimi huzurlu hissettiğim an…",
      "Bütün bir boş günümüz olsa…",
      "Seninle gurur duyuyorum, çünkü…",
      "Mükemmel akşamımız…",
      "Senin şu hâlini hiç unutmayacağım: …",
      "Şunu söylemen hoşuma gidiyor: …",
      "Gelecek yıl birlikte…",
      "Benim için sen tıpkı…",
      "Senden aldığım en güzel hediye…",
      "Seni en çok özlediğim an…",
      "En komik hâlimiz…",
      "Uzun zamandır sana söylemek istediğim şey…",
      "Bizim yerimiz…",
      "Seni düşündüğümde…",
      "Günümü güzelleştiriyorsun, özellikle…",
      "Sevdiğim alışkanlığımız…",
      "Bizim için dileğim: …",
      "Başımıza gelen en komik şey…",
      "İlgini en çok hissettiğim an…",
      "Seninle bir sabah…",
      "Bizi tek kelimeyle anlatsam…",
      "Senden öğrenmek istediğim şey…",
      "Teşekkürler, çünkü sen her zaman…",
      "Çocukken en sevdiğim yemek…",
      "Bana herhangi bir ülkede bir gün verilse…",
      "Bugüne kadar aldığım en iyi tavsiye…",
      "Şu olduğunda hep gülerim: …",
      "Memleketimde en sevdiğim yer…",
      "Kendi küçük dükkânım olsa orada satılırdı…",
      "En iyi yaptığım yemek…",
      "Hâlâ hatırladığım bir çocukluk hayalim…",
      "Beni mutlu etmenin kolay yolu…",
      "Gittiğim en muhteşem yer…",
      "Öğrenmek istediğim şey…",
      "Mükemmel tatil günüm şununla başlar: …",
      "İstediğim herhangi bir hayvana sahip olabilseydim, bu…",
      "Ailem hep benim için der ki…",
      "Bir türlü alışamadığım şey…",
      "En faydalı alışkanlığım…",
      "Okuduğum en iyi kitap…",
      "On yıl sonra istediğim şey…",
      "Hayalimdeki ev…",
      "Çocukken başıma gelen en komik şey…",
      "Bana göre mutluluk…",
      "Vazgeçmekte zorlandığım şey…",
      "Bir süper gücüm olsaydı, o…",
      "İnsanlarda en çok değer verdiğim şey…",
      "Boş bir akşamım olduğunda…",
      "En sevdiğim koku…",
      "Asla yemeyeceğim yemek…",
      "Evden çıkarken asla yanımdan ayırmadığım şey…",
      "Şuraya gitmek isterdim: … çünkü…",
      "Aldığım en güzel hediye…",
      "En sıra dışı alışkanlığım…",
      "Her gün fazladan bir saatim olsa…",
      "Çok şey öğrendiğim biri…",
      "Zor bir günde bana güç veren şey…",
      "Bir yolculukta tattığım en lezzetli şey…",
      "Bir günlüğüne meslek değiştirebilseydim, seçimim…",
      "Kalbime en yakın mevsim…",
      "Arkadaşlarım benim için der ki…",
      "Bir gün birine öğretmek istediğim şey…",
      "Günümdeki küçük bir mutluluk…"
    ],
    "truth": {
      "t01": [
        "Ahtapotun üç kalbi vardır.",
        true,
        "İki kalp kanı solungaçlara pompalar, üçüncüsü ise vücuda."
      ],
      "t02": [
        "Çin Seddi Ay’dan çıplak gözle görülebilir.",
        false,
        "Görülemez: sur çok dardır. Yörüngeden bile seçmek çok zordur."
      ],
      "t03": [
        "Bal binlerce yıl bozulmadan kalabilir.",
        true,
        "Antik Mısır mezarlarında binlerce yıllık, hâlâ bozulmamış bal bulunmuştur."
      ],
      "t04": [
        "Muz ağaçta yetişir.",
        false,
        "Muz bitkisi dev bir otsu bitkidir: “gövdesi” sıkıca sarılmış yapraklardan oluşur."
      ],
      "t05": [
        "Venüs, Güneş Sistemi’nin en sıcak gezegenidir.",
        true,
        "Kalın atmosferi Venüs’ü yaklaşık 460 °C’ye kadar ısıtır — Merkür’den bile sıcaktır."
      ],
      "t06": [
        "Yarasalar kördür.",
        false,
        "Yarasalar görebilir; karanlıkta ise yollarını ekolokasyonla da bulurlar."
      ],
      "t07": [
        "Balina bir balıktır.",
        false,
        "Balinalar memelidir: hava solurlar ve yavrularını sütle beslerler."
      ],
      "t08": [
        "Sahra dünyanın en büyük çölüdür.",
        false,
        "En büyük çöl Antarktika’dır. Sahra ise en büyük sıcak çöldür."
      ],
      "t09": [
        "Zürafanın boyun kemiği sayısı insanınkiyle aynıdır.",
        true,
        "İkisinde de yedi boyun omuru vardır — zürafanınkiler sadece çok uzundur."
      ],
      "t10": [
        "Botanik açıdan domates bir üzümsü meyvedir.",
        true,
        "Botanikçiler domatesi üzümsü meyve sayar: içinde tohumları olan etli bir meyve."
      ],
      "t11": [
        "Botanik açıdan çilek bir üzümsü meyvedir.",
        false,
        "Çilek yalancı meyvedir: asıl meyveler dışındaki küçük “tohumlar”dır."
      ],
      "t12": [
        "Uzayda bir patlamayı duyabilirsin.",
        false,
        "Uzayda neredeyse hiç hava yoktur, bu yüzden sesin yayılacağı bir ortam yoktur."
      ],
      "t13": [
        "Yüksek dağlarda su daha düşük sıcaklıkta kaynar.",
        true,
        "Orada hava basıncı daha düşüktür, bu yüzden su 100 °C’ye ulaşmadan kaynar."
      ],
      "t14": [
        "Penguenler Kuzey Kutbu’nda yaşar.",
        false,
        "Yabani penguenler yalnızca Güney Yarımküre’de yaşar, uzak kuzeyde değil."
      ],
      "t15": [
        "Everest, deniz seviyesinden en yüksek dağdır.",
        true,
        "Everest deniz seviyesinden yaklaşık 8.849 metre yüksektir."
      ],
      "t16": [
        "İnsanlar beyinlerinin yalnızca %10’unu kullanır.",
        false,
        "Bu bir efsane: gün boyunca beynin neredeyse her bölümü çalışır."
      ],
      "t17": [
        "İnsan kalbi günde yaklaşık 100.000 kez atar.",
        true,
        "Dakikada yaklaşık 70 atışla bu, günde aşağı yukarı 100.000 atış eder."
      ],
      "t18": [
        "Japon balığının hafızası sadece üç saniyedir.",
        false,
        "Deneyler, japon balıklarının öğrendiklerini aylarca hatırlayabildiğini gösteriyor."
      ],
      "t19": [
        "Avustralya hem bir ülke hem de bir kıtadır.",
        true,
        "Avustralya, bütün bir kıtayı kaplayan tek ülkedir."
      ],
      "t20": [
        "Yıldırım asla aynı yere iki kez düşmez.",
        false,
        "Düşer: yüksek binalara yılda pek çok kez yıldırım düşer."
      ],
      "t21": [
        "Devekuşu korkunca başını kuma gömer.",
        false,
        "Bir efsane: korkan devekuşu kaçar ya da saklanmak için yere yapışır."
      ],
      "t22": [
        "Dünyanın en küçük kuşu bir sinekkuşudur.",
        true,
        "Küba’daki arı sinekkuşu yaklaşık 2 gram gelir — diğer bütün kuşlardan hafiftir."
      ],
      "t23": [
        "Karpuzun yaklaşık %90’ı sudur.",
        true,
        "Karpuzun yaklaşık %92’si sudur — bu yüzden bu kadar ferahlatıcıdır."
      ],
      "t24": [
        "Örümceğin altı bacağı vardır.",
        false,
        "Örümceğin sekiz bacağı vardır. Böceklerin altı bacağı olur, örümcekler ise böcek değildir."
      ],
      "t25": [
        "Ay kendi ışığını üretir.",
        false,
        "Ay’ın kendi ışığı yoktur: Güneş’in ışığını yansıtır."
      ],
      "t26": [
        "Fil karadaki en büyük hayvandır.",
        true,
        "Bir Afrika savan fili 6 tondan ağır olabilir."
      ],
      "t27": [
        "Mavi balina bilimin bildiği en büyük hayvandır.",
        true,
        "Mavi balinalar 30 metreyi aşabilir — bilinen her dinozordan büyüktür."
      ],
      "t28": [
        "Bukalemun rengini yalnızca kamufle olmak için değiştirir.",
        false,
        "Rengi daha çok ruh hâline, sıcaklığa ve diğer bukalemunlara verdiği sinyallere bağlıdır."
      ],
      "t29": [
        "Telefonu Thomas Edison icat etti.",
        false,
        "Telefon patentini 1876’da Alexander Graham Bell aldı."
      ],
      "t30": [
        "Penisilini Alexander Fleming keşfetti.",
        true,
        "Fleming penisilini 1928’de keşfetti — ilk antibiyotik."
      ],
      "t31": [
        "Güneş Sistemi’nin en yüksek yanardağı Mars’tadır.",
        true,
        "Mars’taki Olympus Mons yaklaşık 22 km yüksekliktedir — Everest’in neredeyse 2,5 katı."
      ],
      "t32": [
        "Damarlarımızdaki kan mavidir.",
        false,
        "Kan her zaman kırmızıdır; damarlar yalnızca ışığın deriden geçişi yüzünden mavi görünür."
      ],
      "t33": [
        "Atlas Okyanusu Dünya’nın en büyük okyanusudur.",
        false,
        "En büyüğü Büyük Okyanus’tur: Dünya’daki bütün karaların toplamından büyüktür."
      ],
      "t34": [
        "Rusya yüzölçümü bakımından dünyanın en büyük ülkesidir.",
        true,
        "Rusya 17 milyon kilometrekareden fazla yer kaplar."
      ],
      "t35": [
        "Kanada dünyanın en uzun kıyı şeridine sahiptir.",
        true,
        "Kanada’nın kıyı şeridi 200.000 km’yi aşar — diğer bütün ülkelerinkinden uzundur."
      ],
      "t36": [
        "İneğin midesi dört bölmelidir.",
        true,
        "İneğin dört odacıklı tek bir midesi vardır — otu böyle sindirir."
      ],
      "t37": [
        "Aslan dünyanın en büyük kedigilidir.",
        false,
        "En büyük kedigil kaplandır, özellikle de Sibirya kaplanı."
      ],
      "t38": [
        "Dünya, Güneş’e en yakın gezegendir.",
        false,
        "En yakını Merkür, sonra Venüs’tür; Dünya üçüncü gezegendir."
      ],
      "t39": [
        "Güneş ışığı Dünya’ya yaklaşık 8 dakikada ulaşır.",
        true,
        "Işık, Güneş’ten gelen 150 milyon km’yi yaklaşık 8 dakika 20 saniyede alır."
      ],
      "t40": [
        "Yunuslar beyinlerinin bir yarısıyla uyur.",
        true,
        "Bir yarısı dinlenirken diğeri tetikte kalır ve nefes almayı unutmaz."
      ],
      "t41": [
        "Patates İrlanda’dan gelir.",
        false,
        "Patates Güney Amerika’dan gelir: binlerce yıl önce And Dağları’nda yetiştiriliyordu."
      ],
      "t42": [
        "Çikolata kakao ağacının tohumlarından yapılır.",
        true,
        "Kakao meyveleri doğrudan gövdede yetişir, içindeki tohumlar da çikolataya dönüşür."
      ],
      "t43": [
        "Köpekbalığı bir memelidir.",
        false,
        "Köpekbalığı bir balıktır: solungaçlarla nefes alır. Denizin memelileri balinalar ve yunuslardır."
      ],
      "t44": [
        "Bazı bambu türleri günde neredeyse bir metre uzayabilir.",
        true,
        "Bambu, Dünya’nın en hızlı büyüyen bitkilerinden biridir."
      ],
      "t45": [
        "Baykuş başını tam 360 derece çevirebilir.",
        false,
        "Baykuş başını yaklaşık 270 derece çevirebilir — çok ama tam bir tur değil."
      ],
      "t46": [
        "Elmas ile kurşun kalemdeki grafit aynı maddeden yapılmıştır.",
        true,
        "İkisi de saf karbondur — sadece atomları farklı dizilmiştir."
      ],
      "t47": [
        "Deve hörgücünde su depolar.",
        false,
        "Devenin hörgücünde su değil yağ depolanır — uzun yolculuklarda enerji sağlar."
      ],
      "t48": [
        "İnsan vücudundaki en küçük kemik kulaktadır.",
        true,
        "Orta kulaktaki üzengi kemiği yalnızca yaklaşık 3 milimetre uzunluğundadır."
      ],
      "t49": [
        "Büyük papağanlar 50 yıldan fazla yaşayabilir.",
        true,
        "İyi bakılan ara ve kakadu papağanları çoğu zaman 50 yıl ya da daha fazla yaşar."
      ],
      "t50": [
        "İlk motorlu uçak uçuşunu Wright kardeşler yaptı.",
        true,
        "1903’te uçtular; ilk uçuş 12 saniye sürdü."
      ],
      "t51": [
        "Tekerlek Orta Çağ’da icat edildi.",
        false,
        "Tekerlek 5000 yıldan eskidir: yaklaşık 5500 yıl önce Mezopotamya’da kullanılıyordu."
      ],
      "t52": [
        "Denizatı bir balıktır.",
        true,
        "Denizatı diğer balıklar gibi solungaçlarla nefes alır ve yüzgeciyle yüzer."
      ],
      "t53": [
        "Sinekkuşu geriye doğru uçabilir.",
        true,
        "Sinekkuşları gerçekten geriye doğru uçabilen tek kuşlardır."
      ],
      "t54": [
        "Eyfel Kulesi yazın biraz uzar.",
        true,
        "Sıcakta metal genleşir ve kule yaklaşık 15 santimetre uzar."
      ],
      "t55": [
        "Deri insan vücudunun en büyük organıdır.",
        true,
        "Bir yetişkinin derisi birkaç kilogram gelir ve bütün vücudu korur."
      ],
      "t56": [
        "Kırmızı renk boğayı kızdırır.",
        false,
        "Boğalar kırmızıyı neredeyse ayırt edemez: onları kışkırtan renk değil, harekettir."
      ],
      "t57": [
        "Karasinek yalnızca bir gün yaşar.",
        false,
        "Karasinek yaklaşık bir ay yaşar. Yalnızca bir iki gün yaşayan, ergin mayıs sinekleridir."
      ],
      "t58": [
        "Ananas ağaçta yetişir.",
        false,
        "Ananas, alçak ve yapraklı bir bitkinin tam ortasından çıkarak yetişir."
      ],
      "t59": [
        "Yer fıstığı bir sert kabuklu yemiştir.",
        false,
        "Yer fıstığı bir baklagildir, bezelye ve fasulyenin akrabasıdır. Kabukları toprak altında olgunlaşır."
      ],
      "t60": [
        "Kuzey ve Güney kutupları eşit derecede soğuktur.",
        false,
        "Güney Kutbu çok daha soğuktur: yüksek ve buzlu bir kıtadadır, Kuzey Kutbu ise bir okyanusun üzerindedir."
      ]
    },
    "hints": {
      "h01": [
        "Penguen",
        "Kuşum ama uçamam",
        "Çok soğuk yerlerde yaşarım",
        "Hep frak giyerim",
        "Devekuşu",
        "Fok",
        "Martı"
      ],
      "h02": [
        "Fil",
        "Neredeyse bütün gün yemek yerim",
        "Kulaklarım büyük yelpazelere benzer",
        "Uzun bir hortumum var",
        "Gergedan",
        "Su aygırı",
        "Zürafa"
      ],
      "h03": [
        "Zürafa",
        "Çok az uyurum, çoğu zaman ayakta",
        "En yüksek ağaçların yapraklarını yerim",
        "En uzun boyun bende",
        "Zebra",
        "Deve",
        "Geyik"
      ],
      "h04": [
        "Deve",
        "Susuz uzun süre dayanabilirim",
        "Bana çölün gemisi derler",
        "Sırtımda bir ya da iki hörgüç var",
        "At",
        "Eşek",
        "Lama"
      ],
      "h05": [
        "Arı",
        "Başkalarına çiçeklerin yolunu gösterebilirim",
        "Çayırda sabahtan akşama çalışırım",
        "Bal yaparım",
        "Eşekarısı",
        "Sinek",
        "Kelebek"
      ],
      "h06": [
        "Kaplumbağa",
        "Yüz yıldan fazla yaşayabilirim",
        "Hiç acele etmem",
        "Evimi sırtımda taşırım",
        "Salyangoz",
        "Kertenkele",
        "Kirpi"
      ],
      "h07": [
        "Kanguru",
        "Kuyruğum dengemi korumama yardım eder",
        "Avustralya'da yaşarım",
        "Yavrumu kesemde taşırım",
        "Koala",
        "Tavşan",
        "Sincap"
      ],
      "h08": [
        "Baykuş",
        "Başımı neredeyse tamamen arkaya çevirebilirim",
        "Geceleri avlanırım",
        "Karanlık ormanda “hu hu” diye öterim",
        "Karga",
        "Kartal",
        "Güvercin"
      ],
      "h09": [
        "Yunus",
        "Denizde yaşasam da hava solurum",
        "İnsanlara yardım eder, ıslıkla konuşurum",
        "Dalgaların üstünden atlamayı severim",
        "Köpekbalığı",
        "Balina",
        "Fok"
      ],
      "h10": [
        "Sincap",
        "Yiyecek saklar, bazen yerini unuturum",
        "Ağaç kovuğunda yaşarım",
        "Fındık ve kozalak kemiririm",
        "Kirpi",
        "Tavşan",
        "Fare"
      ],
      "h11": [
        "Örümcek",
        "Böcek değilim, çoğu kişi öyle sansa da",
        "Sekiz bacağım var",
        "Ağ örerim",
        "Karınca",
        "Mayıs böceği",
        "Sivrisinek"
      ],
      "h12": [
        "Kedi",
        "Karanlıkta insanlardan iyi görürüm",
        "Sıcak pencere kenarını severim",
        "Mırlarım ve fare yakalarım",
        "Tavşan",
        "Hamster",
        "Papağan"
      ],
      "h13": [
        "Karpuz",
        "Bilim insanları beni bir tür üzümsü meyve sayar",
        "Yaz sonunda beni beklerler",
        "Dışım yeşil, içim kırmızı",
        "Kavun",
        "Balkabağı",
        "Ananas"
      ],
      "h14": [
        "Ekmek",
        "Neredeyse her ülkede pişirilirim",
        "Öğle yemeği için dilimlenirim",
        "Beyaz ya da çavdar olurum, kabuğum var",
        "Krep",
        "Börek",
        "Kurabiye"
      ],
      "h15": [
        "Bal",
        "Binlerce yıl bozulmadan kalabilirim",
        "Soğuk algınlığında sıcak çaya eklenirim",
        "Beni arılar yapar",
        "Reçel",
        "Şeker",
        "Süt"
      ],
      "h16": [
        "Limon",
        "C vitamini doluyum",
        "Beni çaya koyarlar",
        "Sarıyım ve çok ekşiyim",
        "Portakal",
        "Greyfurt",
        "Misket limonu"
      ],
      "h17": [
        "Havuç",
        "Toprak altında büyürüm, sadece yapraklarım görünür",
        "Gözlere iyi geldiğim söylenir",
        "Turuncuyum, tavşanlar beni sever",
        "Pancar",
        "Turp",
        "Patates"
      ],
      "h18": [
        "Elma",
        "Kışlık ve yazlık çeşitlerim var",
        "Turtaya ve meyve suyuna girerim",
        "Ağaçta yetişirim, kırmızı ya da yeşil",
        "Armut",
        "Şeftali",
        "Erik"
      ],
      "h19": [
        "Muz",
        "Uzun bir bitkide salkım salkım yetişirim",
        "Maymunlar beni çok sever",
        "Sarıyım, kabuğumu soymak gerekir",
        "Mango",
        "Kivi",
        "Ananas"
      ],
      "h20": [
        "Çay",
        "Çin'de binlerce yıldır içilirim",
        "Siyah, yeşil ya da bitki olabilirim",
        "Demlikte demlenirim",
        "Kahve",
        "Kakao",
        "Meyve suyu"
      ],
      "h21": [
        "Yumurta",
        "Bensiz kek yapmak zordur",
        "Benden omlet yapılır",
        "Beni tavuk yumurtlar",
        "Peynir",
        "Ceviz",
        "Patates"
      ],
      "h22": [
        "Şemsiye",
        "Zamanımın çoğunu katlanmış geçiririm",
        "Gökyüzü griye dönünce beni alırsın",
        "Yağmurda seni kuru tutarım",
        "Yağmurluk",
        "Şapka",
        "Çizme"
      ],
      "h23": [
        "Saat",
        "Kumla ya da güneş ışığıyla çalışabilirim",
        "Duvarlarda asılır, kulelerde dururum",
        "Zamanı akreple yelkovanla gösteririm",
        "Pusula",
        "Takvim",
        "Termometre"
      ],
      "h24": [
        "Anahtar",
        "Ben olmadan kapı seni içeri almaz",
        "Çoğu zaman bir halkada taşınırım",
        "Kilidi açarım",
        "Makas",
        "Tornavida",
        "Ataş"
      ],
      "h25": [
        "Mum",
        "Çalıştıkça küçülürüm",
        "Elektrik kesilince beni yakarlar",
        "Balmumundan yapılırım, fitilim var",
        "El feneri",
        "Lamba",
        "Kibrit"
      ],
      "h26": [
        "Makas",
        "İki halkam ve iki keskin ucum var",
        "Kâğıttan şekiller keserim",
        "Kumaş ve kâğıt keserim",
        "Bıçak",
        "İğne",
        "Cetvel"
      ],
      "h27": [
        "Diş fırçası",
        "Bir sürü kılım var",
        "Üç ayda bir değiştirilirim",
        "Sabah akşam dişleri temizlerim",
        "Sabun",
        "Havlu",
        "Sünger"
      ],
      "h28": [
        "Buzdolabı",
        "İçimde hep kış var",
        "Beni açınca bir ışık yanar",
        "Yiyecekleri soğuk tutarım",
        "Ocak",
        "Fırın",
        "Dolap"
      ],
      "h29": [
        "Bisiklet",
        "Yakıt ya da elektrik olmadan giderim",
        "Gidonum, zilim ve zincirim var",
        "İki tekerleğim ve pedallarım var",
        "Scooter",
        "Motosiklet",
        "Kaykay"
      ],
      "h30": [
        "Uçak",
        "Kanatlarım var ama kuş değilim",
        "Beni havalimanında beklerler",
        "Yolcularla bulutların üstünde uçarım",
        "Helikopter",
        "Roket",
        "Sıcak hava balonu"
      ],
      "h31": [
        "Tren",
        "Sadece kendi yolumda giderim",
        "Çok vagonum var",
        "İstasyondan istasyona raylarda giderim",
        "Tramvay",
        "Otobüs",
        "Metro"
      ],
      "h32": [
        "Köprü",
        "Taştan, ahşaptan ya da çelikten yapılırım",
        "Altımdan gemiler geçebilir",
        "Bir nehrin iki kıyısını birleştiririm",
        "Tünel",
        "Yol",
        "Baraj"
      ],
      "h33": [
        "Kurşun kalem",
        "İçimde grafit var",
        "Ucum körelince açılırım",
        "Yazar, çizerim; izlerimi silgi siler",
        "Tükenmez kalem",
        "Tebeşir",
        "Keçeli kalem"
      ],
      "h34": [
        "Kitap",
        "Sessizim ama çok şey öğretirim",
        "Kapağım ve sayfalarım var",
        "Beni okur, kütüphaneden ödünç alırlar",
        "Dergi",
        "Gazete",
        "Defter"
      ],
      "h35": [
        "Bavul",
        "Çok seyahat ederim ama hep birinin elinde",
        "Yolculuktan önce hazırlanırım",
        "Sapım ve tekerleklerim var, içimde giysiler",
        "Sırt çantası",
        "Çanta",
        "Kutu"
      ],
      "h36": [
        "Kütüphane",
        "Burada sessiz konuşmanız istenir",
        "Burada okuyucu kartı alırsınız",
        "Eve götürmek için binlerce kitap",
        "Okul",
        "Kitapçı",
        "Arşiv"
      ],
      "h37": [
        "Havalimanı",
        "Burada pasaport kontrolü var",
        "Burada uçuşlar için biniş anonsu yapılır",
        "Uçaklar buradan kalkar",
        "Tren garı",
        "Liman",
        "Otogar"
      ],
      "h38": [
        "Çöl",
        "Gündüz sıcak, ama geceler çok soğuk olabilir",
        "Burada vahalar bulunur",
        "Bol kum, çok az su",
        "Bozkır",
        "Savan",
        "Plaj"
      ],
      "h39": [
        "Yanardağ",
        "Yüzlerce yıl uyuyabilirim",
        "Tepemden duman yükselir",
        "Lav püskürtürüm",
        "Dağ",
        "Gayzer",
        "Ada"
      ],
      "h40": [
        "Gökkuşağı",
        "Beni ancak güneş arkandayken görürsün",
        "Çoğu zaman yağmurdan sonra çıkarım",
        "Gökyüzünde yay şeklinde yedi renk",
        "Şimşek",
        "Bulut",
        "Kutup ışıkları"
      ],
      "h41": [
        "Ay",
        "Dünya'ya hep aynı yüzümü gösteririm",
        "Dolunay ya da ince bir hilal olabilirim",
        "Gece gökyüzünde parlarım",
        "Güneş",
        "Yıldız",
        "Kuyruklu yıldız"
      ],
      "h42": [
        "Kar",
        "Her tanem birbirinden farklıdır",
        "Benden kale yaparlar",
        "Beyaz ve soğuğum, kışın yağarım",
        "Yağmur",
        "Dolu",
        "Kırağı"
      ],
      "h43": [
        "Nehir",
        "Bir kaynağım ve bir ağzım var",
        "Üstümde tekneler gider",
        "Dağlardan denize akarım",
        "Göl",
        "Deniz",
        "Dere"
      ],
      "h44": [
        "Kaktüs",
        "Susuz uzun süre yaşayabilirim",
        "Çölde ve pencere kenarında yetişirim",
        "Dikenlerle kaplıyım",
        "Aloe vera",
        "Palmiye",
        "Papatya"
      ],
      "h45": [
        "Ayçiçeği",
        "Tohumlarımdan yağ yapılır",
        "Güneşi takip ederek dönerim",
        "Tohum dolu büyük sarı bir çiçek",
        "Papatya",
        "Lale",
        "Karahindiba"
      ],
      "h46": [
        "Meşe",
        "Bin yıldan fazla yaşayabilirim",
        "Gücün simgesi sayılırım",
        "Üzerimde palamut yetişir",
        "Huş",
        "Çam",
        "Akçaağaç"
      ],
      "h47": [
        "Ada",
        "Üzerime koca bir ülke sığabilir",
        "Bana tekneyle ya da uçakla ulaşılır",
        "Her yanım sularla çevrili",
        "Yarımada",
        "Resif",
        "Burun"
      ],
      "h48": [
        "Şelale",
        "Sesimi uzaktan duyarsın",
        "En yükseğimiz Venezuela'da",
        "Burada nehir bir uçurumdan düşer",
        "Fıskiye",
        "Gayzer",
        "Pınar"
      ],
      "h49": [
        "Doktor",
        "İşe başlamadan önce uzun yıllar okurum",
        "Beyaz önlük giyerim",
        "Hasta insanları tedavi ederim",
        "Hemşire",
        "Eczacı",
        "Veteriner"
      ],
      "h50": [
        "İtfaiyeci",
        "Gece gündüz nöbetteyim, çağrıya hazırım",
        "Su ve merdivenlerle çalışırım",
        "Yangın söndürürüm",
        "Polis",
        "Kurtarma görevlisi",
        "İnşaatçı"
      ],
      "h51": [
        "Aşçı",
        "Yaptığım her şeyin tadına bakarım",
        "Sıcak bir ocağın başında çalışırım",
        "Restoranda yemek pişiririm",
        "Fırıncı",
        "Garson",
        "Pastacı"
      ],
      "h52": [
        "Öğretmen",
        "Akşamları defter okurum",
        "Tahtanın önünde dururum",
        "Okulda çocuklara ders veririm",
        "Okul müdürü",
        "Kütüphaneci",
        "Anaokulu öğretmeni"
      ],
      "h53": [
        "Pilot",
        "İş yerim kokpit",
        "Yolcularla hoparlörden konuşurum",
        "Uçak uçururum",
        "Kaptan",
        "Şoför",
        "Astronot"
      ],
      "h54": [
        "Postacı",
        "Bölgemdeki her adresi bilirim",
        "Büyük bir çanta taşırım",
        "Mektup ve koli dağıtırım",
        "Kurye",
        "Taksici",
        "Tezgâhtar"
      ],
      "h55": [
        "Bahçıvan",
        "Neyin ne zaman ekileceğini bilirim",
        "Aletlerim sulama kabı ve budama makası",
        "Çiçeklere ve ağaçlara bakarım",
        "Çiftçi",
        "Ormancı",
        "Çiçekçi"
      ],
      "h56": [
        "Fotoğrafçı",
        "Anları yakalarım",
        "Herkesten kıpırdamamasını isterim",
        "Fotoğraf makinesi ve resimlerle çalışırım",
        "Ressam",
        "Gazeteci",
        "Kameraman"
      ],
      "h57": [
        "Balıkçı",
        "Şafaktan önce kalkar, uzun süre beklerim",
        "Olta ve sabır gerekir",
        "Balık tutarım",
        "Çiftçi",
        "Denizci",
        "Çoban"
      ],
      "h58": [
        "Astronot",
        "Dünya'da uzun süre eğitim alırım",
        "Uzay giysisi giyerim",
        "Uzaya uçarım",
        "Pilot",
        "Gökbilimci",
        "Mühendis"
      ],
      "h59": [
        "Mimar",
        "Eserlerim şehrin her yerinde görülür",
        "Planlar çizerim",
        "Evler tasarlarım",
        "İnşaatçı",
        "Tasarımcı",
        "Mühendis"
      ],
      "h60": [
        "Diş hekimi",
        "Koltuğumdan çok kişi korkar",
        "Matkapla çalışırım",
        "Dişleri tedavi ederim",
        "Cerrah",
        "Göz doktoru",
        "Çocuk doktoru"
      ]
    },
    "dreams": {
      "d01": [
        "On yıl sonra nerede yaşamak isterdin?",
        "Deniz kenarında",
        "Dağlarda",
        "Büyük bir şehirde",
        "Sakin bir köyde"
      ],
      "d02": [
        "Bir gün nasıl bir evin olsun isterdin?",
        "Rahat bir daire",
        "Bahçeli bir ev",
        "Göl kenarında bir kulübe",
        "Geçmişi olan eski bir ev"
      ],
      "d03": [
        "Bahçende ne yetiştirmek isterdin?",
        "Elma ağaçları",
        "Güller",
        "Sebze ve otlar",
        "Çilek"
      ],
      "d04": [
        "Hangi evcil hayvana sahip olmak isterdin?",
        "Bir kedi",
        "Bir papağan",
        "Akvaryum balıkları",
        "Bir kaplumbağa"
      ],
      "d05": [
        "İlk önce nereye gitmek isterdin?",
        "Japonya",
        "Fas",
        "İzlanda",
        "Yeni Zelanda"
      ],
      "d06": [
        "Nasıl seyahat etmek isterdin?",
        "Trenle",
        "Arabayla",
        "Uçakla",
        "Gemiyle"
      ],
      "d07": [
        "Hangi dili öğrenmek isterdin?",
        "Arapça",
        "Japonca",
        "İspanyolca",
        "Çince"
      ],
      "d08": [
        "Ne yapmayı öğrenmek isterdin?",
        "Resim yapmayı",
        "Dikiş dikmeyi",
        "Yüzmeyi",
        "Kod yazmayı"
      ],
      "d09": [
        "Hangi yemekte usta olmak isterdin?",
        "Pilav",
        "Ev ekmeği",
        "Suşi",
        "Baklava"
      ],
      "d10": [
        "Hafta sonlarını nasıl geçirmek isterdin?",
        "Doğada",
        "Evde bir kitapla",
        "Aile ziyaretinde",
        "Yeni bir şehirde"
      ],
      "d11": [
        "Mükemmel bir hafta sonu sabahı nasıl olurdu?",
        "Erken bir yürüyüş",
        "Ağır ağır bir kahvaltı",
        "Açık havada egzersiz",
        "Balkonda çay"
      ],
      "d12": [
        "Ne için birikim yapmak isterdin?",
        "Kendi evimiz",
        "Büyük bir seyahat",
        "Bir araba",
        "Eğitim"
      ],
      "d13": [
        "Nasıl bir işte çalışmak isterdin?",
        "Kendi işim",
        "Büyük bir şirkette",
        "Evden çalışmak",
        "İnsanlara yardım etmek"
      ],
      "d14": [
        "Başkalarına nasıl yardım etmek isterdin?",
        "Gönüllülük",
        "Hayvanlara yardım",
        "Çocuklara ders vermek",
        "Ağaç dikmek"
      ],
      "d15": [
        "Hangi aile geleneğini isterdin?",
        "Pazar günü birlikte yemek",
        "Kutu oyunu akşamları",
        "Hafta sonu yürüyüşleri",
        "Aile fotoğraf albümü"
      ],
      "d16": [
        "Nasıl bir mutfak isterdin?",
        "Büyük bir aile mutfağı",
        "Aydınlık ve rahat",
        "Bahçe manzaralı",
        "Küçük ama kullanışlı"
      ],
      "d17": [
        "Kendi gözlerinle ne görmek isterdin?",
        "Kutup ışıkları",
        "Gize piramitleri",
        "Victoria Şelalesi",
        "Himalayalar"
      ],
      "d18": [
        "Akşamları ne yapmak isterdin?",
        "Kitap okumak",
        "Yeni bir şey pişirmek",
        "Dil öğrenmek",
        "Parkta yürümek"
      ],
      "d19": [
        "Hangi hobiye başlamak isterdin?",
        "Fotoğrafçılık",
        "Seramik",
        "Nakış",
        "Bahçecilik"
      ],
      "d20": [
        "Bir hafta sonu için nereye gitmek isterdin?",
        "Ormana",
        "Bir göle",
        "Yakın bir kasabaya",
        "Dağlara"
      ],
      "d21": [
        "İdeal çalışma alanın nasıl olurdu?",
        "Pencere kenarında",
        "Kitap raflarıyla",
        "Yeşil bitkilerle dolu",
        "Neredeyse boş"
      ],
      "d22": [
        "Bundan sonra ne okumak isterdin?",
        "Tıp",
        "Tarih",
        "Ekonomi",
        "Tasarım"
      ],
      "d23": [
        "Hangi ağacı dikmek isterdin?",
        "Meşe",
        "Elma ağacı",
        "Zeytin ağacı",
        "Hurma ağacı"
      ],
      "d24": [
        "Misafirlere ne pişirmek isterdin?",
        "Ev yapımı börek",
        "Büyük bir pilav",
        "Ailemizin çorba tarifi",
        "Taze salatalar"
      ],
      "d25": [
        "Hangi şehri görmek isterdin?",
        "İstanbul",
        "Paris",
        "Tokyo",
        "Kahire"
      ],
      "d26": [
        "Yazı nasıl geçirmek isterdin?",
        "Deniz kenarında",
        "Dağlarda",
        "Bir yazlıkta",
        "Kendi ülkemizi gezerek"
      ],
      "d27": [
        "Hangi kuşu beslemek isterdin?",
        "Kanarya",
        "Muhabbet kuşu",
        "Güvercinler",
        "Zebra ispinozları"
      ],
      "d28": [
        "Hangi sporu denemek isterdin?",
        "Yüzme",
        "Binicilik",
        "Okçuluk",
        "Tırmanış"
      ],
      "d29": [
        "Hangi kitapları biriktirmek isterdin?",
        "Ansiklopediler",
        "Klasikler",
        "Gezi kitapları",
        "Yemek kitapları"
      ],
      "d30": [
        "Kendi ellerinle ne yapmak isterdin?",
        "Mobilya",
        "El yapımı tabaklar",
        "Örgü bir battaniye",
        "Bir kuş evi"
      ],
      "d31": [
        "Nerede piknik yapmak isterdin?",
        "Nehir kıyısında",
        "Bir bahçede",
        "Orman açıklığında",
        "Dağlarda"
      ],
      "d32": [
        "Bir gün neyle yolculuk etmek isterdin?",
        "Elektrikli araba",
        "Bisiklet",
        "Büyük bir aile arabası",
        "Arabasız"
      ],
      "d33": [
        "Emeklilikte ne yapmak isterdin?",
        "Bahçecilik",
        "Seyahat",
        "Torunlarla vakit",
        "Yeni şeyler öğrenmek"
      ],
      "d34": [
        "Hangi iyiliği yapmak isterdin?",
        "Su kuyusu açtırmak",
        "Kedi barınağına yardım",
        "Okula kitap toplamak",
        "Bir sıra ağaç dikmek"
      ],
      "d35": [
        "Hafta sonu kahvaltısında ne isterdin?",
        "Pankek",
        "Omlet",
        "Meyveli yulaf lapası",
        "Peynirli gözleme"
      ],
      "d36": [
        "Misafirleri nerede ağırlamak isterdin?",
        "Mutfakta",
        "Oturma odasında",
        "Terasta",
        "Bahçede"
      ],
      "d37": [
        "Hangi doğa harikasını görmek isterdin?",
        "Büyük Kanyon",
        "Niagara Şelalesi",
        "Baykal Gölü",
        "Sahra Çölü"
      ],
      "d38": [
        "Hangi ev becerisini öğrenmek isterdin?",
        "Tamiratları kendimiz yapmak",
        "Dikiş",
        "Ekmek pişirmek",
        "Bahçe bakımı"
      ],
      "d39": [
        "Kaç dil konuşmak isterdin?",
        "İki",
        "Üç",
        "Beş",
        "Olabildiğince çok"
      ],
      "d40": [
        "Evde duvarlar hangi renk olsun isterdin?",
        "Beyaz",
        "Bej",
        "Açık yeşil",
        "Açık mavi"
      ],
      "d41": [
        "Akvaryumda hangi balığı isterdin?",
        "Japon balığı",
        "Lepistes",
        "Kedi balığı",
        "Melek balığı"
      ],
      "d42": [
        "Anne babana hangi geziyi hediye etmek isterdin?",
        "Deniz tatili",
        "Şehir turu",
        "Dağ gezisi",
        "Tren yolculuğu"
      ],
      "d43": [
        "Boş zamanında ne yapmak isterdin?",
        "Resim",
        "Kitap okumak",
        "Spor",
        "El işi"
      ],
      "d44": [
        "Hangi mevsimde seyahat etmek isterdin?",
        "İlkbahar",
        "Yaz",
        "Sonbahar",
        "Kış"
      ],
      "d45": [
        "Kış için ne hazırlamak isterdin?",
        "Reçel",
        "Turşu",
        "Kuru meyve",
        "Komposto"
      ],
      "d46": [
        "Başka hangi mesleği denemek isterdin?",
        "Aşçılık",
        "Yazılımcılık",
        "Çevirmenlik",
        "Marangozluk"
      ],
      "d47": [
        "Hangi ülkeyi tanımak isterdin?",
        "Malezya",
        "İtalya",
        "Kanada",
        "Endonezya"
      ],
      "d48": [
        "Bahçede ne olsun isterdin?",
        "Küçük bir fıskiye",
        "Sebze bahçesi",
        "Çardak",
        "Salıncak"
      ],
      "d49": [
        "Başarıları nasıl kutlamak isterdin?",
        "Aile yemeği",
        "Doğa gezisi",
        "Yeni bir kitap",
        "Başkalarına bir iyilik"
      ],
      "d50": [
        "Çocuklara ne aktarmak isterdin?",
        "Kitap sevgisi",
        "Yemek becerisi",
        "Ana dilimiz",
        "Doğaya özen"
      ]
    }
  },
  "ja": {
    "text": {
      "homeLink": "ふたりで遊ぶゲーム",
      "eyebrow": "GLOWLETTER · ふたりのゲーム",
      "title": "いっしょに遊ぼう",
      "close": "閉じる",
      "lead": "大切な人にゲームを送りましょう。リンクから遊ぶのは無料で、アカウントも不要です。",
      "quizTitle": "わたしのこと、どれくらい知ってる？",
      "quizNote": "自分についての質問に答えて、大切な人に当ててもらいましょう。結果はあなたに届きます。",
      "create": "クイズを作る",
      "soon": "近日公開",
      "soonTitle": "次のゲームを準備中",
      "duel": "早押し対決",
      "loves": "ふたりの好きなもの",
      "cards": "ふたりの神経衰弱",
      "who": "どっちがそう？",
      "phrase": "文の続きを書こう",
      "myQuizzes": "わたしのクイズ",
      "noQuizzes": "まだクイズはありません。最初のクイズは数分で作れます。",
      "forWhom": "{name}へ",
      "noRecipient": "クイズ",
      "resultsCount": "結果：{count}件",
      "newResults": "新着：{count}",
      "noResults": "まだ誰も遊んでいません。",
      "anonymous": "名前なし",
      "results": "結果",
      "copyLink": "リンクをコピー",
      "share": "送る",
      "deleteQuiz": "クイズを削除",
      "deleteConfirm": "このクイズと結果を削除しますか？リンクは使えなくなります。",
      "deleted": "クイズを削除しました",
      "linkCopied": "リンクをコピーしました",
      "back": "戻る",
      "next": "次へ",
      "stepNames": "ステップ1/2 · 名前",
      "yourName": "あなたの名前",
      "yourNamePlaceholder": "お名前",
      "recipient": "相手 · 任意",
      "recipientPlaceholder": "大切な人の名前",
      "nameRequired": "名前を入力してください。",
      "forbiddenName": "ふつうの名前を入力してください。",
      "stepAnswers": "ステップ2/2 · あなたの答え",
      "answersLead": "自分に当てはまるものを選んでください。質問はいつでも入れ替えられます。",
      "swap": "別の質問",
      "progress": "{total}問中{done}問に回答",
      "answerAll": "すべての質問で答えを選んでください。",
      "finish": "リンクを受け取る",
      "creating": "クイズを作成中…",
      "createdTitle": "クイズができました！",
      "createdLead": "リンクを送りましょう。相手が答えると「わたしのクイズ」に結果が表示されます。",
      "shareText": "{name}から「わたしのこと、どれくらい知ってる？」ゲームの招待です",
      "signInTitle": "ログインが必要です",
      "signInNote": "結果があなたに届くよう、クイズはアカウントに保存されます。",
      "signIn": "ログイン",
      "premiumNote": "ゲーム作成はフルアクセスに含まれます。リンクから遊ぶのは誰でも無料です。",
      "failed": "うまくいきませんでした。接続を確認して、もう一度お試しください。",
      "rateLimited": "試行回数が多すぎます。しばらくしてからお試しください。",
      "playEyebrow": "ふたりのゲーム",
      "playInvite": "{name}からゲームの招待です",
      "playLead": "質問は{count}問。答えを当ててください。最後にいくつ一致したかわかります。",
      "playName": "あなたの名前 · 任意",
      "playNamePlaceholder": "あなただとわかるように",
      "start": "はじめる",
      "playLoading": "ゲームを読み込み中…",
      "playMissing": "このゲームは利用できません。リンクが削除されたか、期限が切れています。",
      "playOffline": "ゲームにはインターネット接続が必要です。",
      "retry": "再試行",
      "questionOf": "{total}問中{n}問目",
      "asks": "{name}からの質問",
      "counting": "一致を数えています…",
      "scoreOf": "{total}問中{score}問",
      "tierAll": "完璧！誰よりもお互いを知っています",
      "tierHigh": "お互いをとてもよく知っています",
      "tierMid": "なかなか！まだ知らないこともありそう",
      "tierLow": "これからすてきな発見がたくさんあります",
      "sentTo": "{name}にあなたの結果が届きます",
      "review": "あなたの答え",
      "rightAnswer": "正解",
      "makeOwn": "自分のクイズを作る",
      "home": "ホーム",
      "resultToast": "{name}：「わたしのこと、どれくらい知ってる？」で{total}問中{score}問",
      "ownerAnswers": "作成者の答え",
      "playerAnswers": "{name}の答え",
      "paywallTitle": "ゲーム、楽しみ<br><em>そして手紙</em>",
      "groupGames": "ゲーム",
      "groupFun": "楽しみ",
      "groupLetters": "手紙",
      "featQuiz": "「わたしのこと、どれくらい知ってる？」結果はあなたに届きます",
      "featGamesSoon": "早押し対決、「ふたりの好きなもの」、くまの神経衰弱",
      "featFunSoon": "「どっちがそう？」と「文の続きを書こう」、ふたりのノート付き",
      "featCollection": "15言語の手紙と詩のコレクションすべて",
      "featMoments": "記念日、リマインダー、決めた日に開くQRレター",
      "featAudio": "手紙に自分の音声、受け取った人からの返事",
      "groupTalk": "友だちと通話",
      "featCall": "友だちと通話：音声、スピーカー、動くリアクション",
      "ynTitle": "イエス・ノー",
      "ynNote": "ふたりで遊ぶライブゲーム。1枚につき5秒。時間内に答えると、相手の答えが見られます。",
      "ynCreate": "ルームを作る",
      "ynWaiting": "{name}がリンクを開くのを待っています…",
      "ynWaitingAny": "相手を待っています…",
      "ynShareText": "{name}からライブゲーム「イエス・ノー」への招待です",
      "ynPartnerHere": "{name}が来ました！",
      "ynStart": "ゲームをはじめる",
      "ynWaitHost": "{name}がまもなくゲームをはじめます",
      "ynYes": "イエス",
      "ynNo": "ノー",
      "ynMissed": "時間切れ — このカードは閉じたままです",
      "ynMatch": "同じ答え！",
      "ynRound": "{total}枚中{n}枚目",
      "ynAnswered": "答えを送りました。相手を待っています…",
      "ynFinal": "{total}枚中{score}枚が一致",
      "ynFinalHigh": "言葉がなくても通じ合っています",
      "ynFinalMid": "ちがうからこそ、近いふたり",
      "ynAgain": "もう一度遊ぶ",
      "ynLeft": "相手の接続が切れました。戻るのを待っています…",
      "ynYou": "あなた",
      "ynOffline": "ゲームに接続できません。インターネットを確認して、リンクを開き直してください。",
      "ynJoin": "ゲームに参加",
      "ynJoinLead": "{name}が待っています。答えは5秒以内に！",
      "ynStepNames": "あなたと相手の名前",
      "ynRoomReady": "ルームの準備ができました — リンクを送りましょう",
      "ynStayHere": "この画面は開いたままに。相手がリンクを開くとゲームが始まります。",
      "featYesNo": "ライブゲーム「イエス・ノー」— 答えは5秒",
      "ynPartnerMissed": "回答なし — 時間切れ",
      "lvTitle": "ふたりの好きなもの",
      "lvNote": "ふたりで遊ぶライブゲーム。4枚の絵から、いちばん好きなものを10秒で選びます。同じものを選んでもOK！",
      "lvShareText": "{name}からライブゲーム「ふたりの好きなもの」への招待です",
      "lvJoinLead": "{name}が待っています。いちばん好きな絵を選んでね！",
      "lvRound": "{total}テーマ中{n}番目",
      "lvPick": "いちばん好きなものを選んでね",
      "lvBoth": "ふたりとも選んだのは：{item}",
      "lvCommon": "ふたりとも好きなもの",
      "lvDiff": "好みがちがうのも楽しい！",
      "lvFinalHigh": "共通点がたくさん！",
      "lvFinalMid": "ちがうからこそ、補い合えるふたり",
      "featLoves": "ライブゲーム「ふたりの好きなもの」— 4枚の絵からいっしょに選ぶ",
      "featGamesSoon2": "早押し対決と、くまの神経衰弱",
      "mcTitle": "くまの神経衰弱",
      "mcNote": "ふたりで遊ぶライブ神経衰弱。交代で2枚ずつめくって、ペアを探そう。8枚から16枚まで、3つのレベル。",
      "mcShareText": "{name}からライブゲーム「くまの神経衰弱」への招待です",
      "mcJoinLead": "{name}が待っています。交代でペアを探そう！",
      "mcLevel": "レベル {n}/{total}",
      "mcTurnYou": "あなたの番 — 2枚めくってね",
      "mcTurnThem": "{name}の番",
      "mcPairs": "見つけたペア：{found}/{total}",
      "mcLevelDone": "全部のペアを見つけた！",
      "mcTimeUp": "このレベルは時間切れ",
      "mcNext": "次はレベル {n}",
      "mcFinal": "見つけたペア：{found}/{total}",
      "mcFinalHigh": "最高のチーム！",
      "mcFinalMid": "いい勝負！もう一回？",
      "featCards": "ライブゲーム「くまの神経衰弱」— ふたりでペア探し",
      "featGamesSoon3": "早押し対決",
      "duTitle": "どっちが速い？",
      "duNote": "ライブ対決：ひとつの言葉と4枚の絵。正しい絵を先にタップしましょう。間違えるとそのラウンドは負けです。",
      "duShareText": "{name}さんからライブ対決「どっちが速い？」の挑戦が届きました",
      "duJoinLead": "{name}さんが待っています。正しい絵をすばやく見つけましょう！",
      "duRound": "ラウンド {n}/{total}",
      "duFind": "探して：{item}",
      "duYouWon": "あなたの方が速かった！",
      "duTheyWon": "{name}さんの方が速かった",
      "duWrong": "違う絵です — このラウンドは負け",
      "duNobody": "時間内に誰も見つけられませんでした",
      "duScore": "あなた {you} : {them} {name}",
      "duFinalWin": "勝利！今日は目が冴えていますね。",
      "duFinalLose": "今回は{name}さんの勝ち — もう一回？",
      "duFinalDraw": "引き分け — 息ぴったり！",
      "duSeconds": "{s}秒",
      "featDuel": "ライブ対決「どっちが速い？」— 先に絵を見つけよう",
      "whoTitle": "ふたりのどっち？",
      "whoNote": "ふたりで遊ぶライブゲーム：質問はひとつ。「自分」かパートナーの名前をタップ。お互いの見方が合うか確かめましょう。",
      "whoShareText": "{name}さんがライブゲーム「ふたりのどっち？」に招待しています",
      "whoJoinLead": "{name}さんが待っています。正直に答えて、あとで比べましょう！",
      "whoRound": "質問 {n}/{total}",
      "whoMe": "自分",
      "whoAgree": "意見が一致：{name}",
      "whoDiffer": "意見が分かれました — 話し合ってみて！",
      "whoFinal": "{total}問中{score}問で一致しました",
      "whoFinalHigh": "お互いのことをよくわかっていますね！",
      "whoFinalMid": "話したいことがたくさん — それも素敵です",
      "featWho": "ライブゲーム「ふたりのどっち？」— 意見が合うか確かめよう",
      "phTitle": "文を完成させよう",
      "phNote": "ふたりで遊ぶライブゲーム：同じあたたかい文の続きをそれぞれ自分の言葉で書き、お互いの答えを読みましょう。",
      "phShareText": "{name}さんがライブゲーム「文を完成させよう」に招待しています",
      "phJoinLead": "{name}さんが待っています。自分の言葉で文を完成させましょう！",
      "phRound": "文 {n}/{total}",
      "phPlaceholder": "続きを書く…",
      "phDone": "完了",
      "phWaiting": "{name}さんを待っています…",
      "phSkipped": "回答なし",
      "phSave": "「ふたりの本」に保存",
      "phSaved": "「ふたりの本」に保存しました",
      "phForbidden": "リンクや乱暴な言葉を使わずに書いてください。",
      "phNext": "次の文",
      "phFinal": "一緒に完成させた文：{count}",
      "phFinalLead": "気に入った答えを「ふたりの本」に保存しましょう。",
      "featPhrase": "ライブゲーム「文を完成させよう」と「ふたりの本」",
      "bookTitle": "ふたりの本",
      "bookNote": "「文を完成させよう」のいちばんあたたかい答えを、アカウントに保存しています。",
      "bookOpen": "本を開く",
      "bookEmpty": "本はまだ空です。「文を完成させよう」で遊んで、気に入った答えを保存しましょう。",
      "bookDelete": "削除",
      "bookDeleteConfirm": "このページを本から削除しますか？",
      "bookYou": "あなた",
      "inviteTitle": "友だちを招待",
      "inviteNote": "友だちにゲームのメッセージが届きます。",
      "invite": "招待",
      "invited": "招待済み",
      "inviteNone": "「友だち」で友だちを追加すると、ワンタップで招待できます。",
      "inviteSent": "{name}さんに招待を送りました",
      "truth": "ほんと？うそ？",
      "tfTitle": "ほんと？うそ？",
      "tfNote": "ふたりで遊ぶライブゲーム：世界のおどろきの事実。12秒で、ほんとかうそかを選びましょう。正解するたびに1ポイント。",
      "tfShareText": "{name}さんがライブゲーム「ほんと？うそ？」に招待しています",
      "tfJoinLead": "{name}さんが待っています。ほんとかうそか、すばやく決めて！",
      "tfRound": "事実 {n}/{total}",
      "tfTrue": "ほんと",
      "tfFalse": "うそ",
      "tfIsTrue": "ほんとです！",
      "tfIsFalse": "うそです！",
      "tfFirstYou": "あなたが先に正解しました！",
      "tfFirstThem": "{name}さんが先に正解しました",
      "tfFinalWin": "勝利！世界のことをよく知っていますね。",
      "tfFinalLose": "今回は{name}さんの方が物知り — もう一回？",
      "tfFinalDraw": "引き分け — ふたりとも同じくらい物知り！",
      "featTruth": "ライブゲーム「ほんと？うそ？」— 世界のおどろきの事実",
      "countries": "国をあてよう",
      "coTitle": "国をあてよう",
      "coNote": "ふたりで遊ぶライブゲーム：クマが世界を旅します。10秒以内に、どの国にいるかあてよう！正解ごとに1ポイント。",
      "coShareText": "{name}さんがライブゲーム「国をあてよう」に招待しています",
      "coJoinLead": "{name}さんが待っています。絵を見て国をあてよう！",
      "coRound": "国 {n} / {total}",
      "coAsk": "これはどこの国？",
      "coFinalWin": "勝利！まさに旅の達人ですね。",
      "coFinalLose": "今回は{name}さんのほうが世界にくわしかったみたい — もう一回？",
      "coFinalDraw": "引き分け — ふたりとも世界にくわしいですね！",
      "featCountries": "ライブゲーム「国をあてよう」— 40か国",
      "hints": "ヒントで当てよう",
      "dreams": "夢と計画",
      "hiTitle": "ヒントで当てよう",
      "hiNote": "ふたりで遊ぶライブゲーム：3つのヒントが1つずつ開きます。1つ目で当てたら3ポイント、2つ目なら2ポイント、3つ目なら1ポイント。",
      "hiShareText": "{name}さんがライブゲーム「ヒントで当てよう」に招待しています",
      "hiJoinLead": "{name}さんが待っています。できるだけ早く当てましょう！",
      "hiRound": "なぞなぞ {n}/{total}",
      "hiAsk": "これは何でしょう？",
      "hiClue": "ヒント {n}",
      "hiPoints": "+{n}ポイント",
      "hiNoPoints": "今回はポイントなし",
      "hiFinalWin": "勝利！当てるのが上手ですね。",
      "hiFinalLose": "今回は{name}さんの勝ち — もう一回？",
      "hiFinalDraw": "引き分け — ふたりとも当てるのが上手！",
      "featHints": "ライブゲーム「ヒントで当てよう」— 3、2、1ポイント",
      "drTitle": "夢と計画",
      "drNote": "ふたりで遊ぶライブゲーム：住まい、旅、学び、趣味。してみたいものを選んで、夢が重なるか確かめましょう。",
      "drShareText": "{name}さんがライブゲーム「夢と計画」に招待しています",
      "drJoinLead": "{name}さんが待っています。本当にしてみたいものを選んでね！",
      "drRound": "質問 {n}/{total}",
      "drPick": "してみたいものを選んでね",
      "drBoth": "一致：{item}",
      "drDiff": "夢がちがいました — 理由を話してみて！",
      "drFinalHigh": "同じ夢がたくさん！",
      "drFinalMid": "夢はいろいろ — 話すことがたくさん",
      "drCommon": "ふたりの共通の夢",
      "featDreams": "ライブゲーム「夢と計画」— 夢は重なる？",
      "modestTitle": "控えめモード",
      "modestNote": "気持ち・ハグ・デートの質問はなし。友だちのような質問だけ"
    },
    "questions": {
      "q01": [
        "わたしの好きな季節は？",
        "春",
        "夏",
        "秋",
        "冬"
      ],
      "q02": [
        "朝ごはんに選ぶのは？",
        "コーヒーとクロワッサン",
        "おかゆ・オートミール",
        "卵料理",
        "お茶だけ"
      ],
      "q03": [
        "理想の休日は？",
        "家でブランケットにくるまる",
        "公園をお散歩",
        "郊外へおでかけ",
        "友だちと過ごす"
      ],
      "q04": [
        "行ってみたい場所は？",
        "海",
        "山",
        "大都会",
        "田舎のかわいい家"
      ],
      "q05": [
        "好きなアイスの味は？",
        "バニラ",
        "チョコレート",
        "いちご",
        "ピスタチオ"
      ],
      "q06": [
        "いちばん早く元気が出るのは？",
        "ハグ",
        "サプライズ",
        "やさしい言葉",
        "おいしいもの"
      ],
      "q07": [
        "わたしはどちらかというと…",
        "朝型",
        "夜型",
        "寝られるときに寝る",
        "お昼寝が大好き"
      ],
      "q08": [
        "今夜選ぶ映画は？",
        "コメディ",
        "恋愛もの",
        "ミステリー",
        "アニメ"
      ],
      "q09": [
        "好きな色は？",
        "赤",
        "青",
        "緑",
        "ピンク"
      ],
      "q10": [
        "いちばん苦手なものは？",
        "クモ",
        "高いところ",
        "暗やみ",
        "遅刻"
      ],
      "q11": [
        "好きな花は？",
        "バラ",
        "チューリップ",
        "シャクヤク",
        "マーガレット"
      ],
      "q12": [
        "悲しいときにすることは？",
        "大切な人に電話する",
        "甘いものを食べる",
        "散歩に出る",
        "寝る"
      ],
      "q13": [
        "いちばん近いと思う動物は？",
        "子ねこ",
        "犬",
        "子ぐま",
        "子ぎつね"
      ],
      "q14": [
        "わたしにいちばんうれしい贈り物は？",
        "手作りのもの",
        "旅行",
        "アクセサリー",
        "本"
      ],
      "q15": [
        "好きな飲み物は？",
        "紅茶",
        "緑茶",
        "コーヒー",
        "ココア"
      ],
      "q16": [
        "好きなおやつは？",
        "チョコレート",
        "ポテトチップス",
        "フルーツ",
        "ケーキ"
      ],
      "q17": [
        "旅行で選ぶのは？",
        "美術館・博物館",
        "ビーチ",
        "ご当地グルメ",
        "気ままな散策"
      ],
      "q18": [
        "夜の過ごし方は？",
        "読書",
        "ドラマ",
        "おしゃべり",
        "散歩"
      ],
      "q19": [
        "好きな天気は？",
        "晴れ",
        "あたたかい雨",
        "雪",
        "そよ風"
      ],
      "q20": [
        "わたしに似合う超能力は？",
        "空を飛ぶ",
        "心を読む",
        "時間を止める",
        "瞬間移動"
      ],
      "q21": [
        "大切な人にいちばん求めるものは？",
        "信頼",
        "思いやり",
        "ユーモア",
        "支え"
      ],
      "q22": [
        "いちばん楽しみな行事は？",
        "お正月",
        "誕生日",
        "夏休み",
        "バレンタイン"
      ],
      "q23": [
        "「大好き」をいちばんよく伝える方法は？",
        "言葉で",
        "行動で",
        "ハグで",
        "プレゼントで"
      ],
      "q24": [
        "カフェで注文するのは？",
        "パスタ",
        "お寿司",
        "サラダ",
        "デザート"
      ],
      "q25": [
        "わたしの好きな時間帯は？",
        "朝",
        "昼",
        "夕方",
        "夜"
      ],
      "q26": [
        "選ぶ料理のジャンルは？",
        "イタリアン",
        "和食",
        "家庭料理",
        "メキシカン"
      ],
      "q27": [
        "いちばん考えごとがはかどる場所は？",
        "シャワー中",
        "散歩中",
        "移動中",
        "寝る前"
      ],
      "q28": [
        "朝いちばんにすることは？",
        "スマホを見る",
        "水を飲む",
        "コーヒーをいれる",
        "もう少しごろごろする"
      ],
      "q29": [
        "好きな果物は？",
        "りんご",
        "バナナ",
        "マンゴー",
        "スイカ"
      ],
      "q30": [
        "わたしに合う趣味は？",
        "絵を描く",
        "料理",
        "スポーツ",
        "読書"
      ],
      "q31": [
        "誕生日はどう祝いたい？",
        "にぎやかなパーティー",
        "ふたりでディナー",
        "旅行",
        "家で静かな夜"
      ],
      "q32": [
        "サプライズはどう？",
        "大好き",
        "ちょっとドキドキする",
        "人にするのが好き",
        "前もって知りたい"
      ],
      "q33": [
        "好きなスイーツは？",
        "ケーキ",
        "アイス",
        "クッキー",
        "キャンディ"
      ],
      "q34": [
        "無人島に持っていくものは？",
        "本",
        "スマホ",
        "ブランケット",
        "カメラ"
      ],
      "q35": [
        "大変な一日のあと、どう休む？",
        "あたたかいお風呂",
        "ドラマ",
        "散歩",
        "大切な人とおしゃべり"
      ],
      "q36": [
        "好きな乗り物は？",
        "電車",
        "飛行機",
        "車",
        "自転車"
      ],
      "q37": [
        "子どものころ好きだった遊びは？",
        "かくれんぼ",
        "鬼ごっこ",
        "ブロック遊び",
        "お絵かき"
      ],
      "q38": [
        "わたしに近いおとぎ話は？",
        "シンデレラ",
        "星の王子さま",
        "くまのプーさん",
        "不思議の国のアリス"
      ],
      "q39": [
        "大切な人を喜ばせるなら？",
        "サプライズ",
        "カード",
        "旅行",
        "ディナー"
      ],
      "q40": [
        "いちばんよく撮る写真は？",
        "自撮り",
        "自然",
        "ごはん",
        "ほとんど撮らない"
      ],
      "q41": [
        "家でいちばん好きな場所は？",
        "ベッド",
        "キッチン",
        "ソファ",
        "ベランダ"
      ],
      "q42": [
        "人を見てまず気づくのは？",
        "笑顔",
        "目",
        "声",
        "ユーモア"
      ],
      "q43": [
        "いちばん笑ってしまうのは？",
        "おもしろ動画",
        "大切な人の冗談",
        "気まずい場面",
        "動物"
      ],
      "q44": [
        "暑い夏の日に飲むのは？",
        "レモネード",
        "アイスティー",
        "ジュース",
        "氷水"
      ],
      "q45": [
        "わたしに近い元素は？",
        "水",
        "火",
        "土",
        "風"
      ],
      "q46": [
        "好きな物語は？",
        "冒険もの",
        "恋の物語",
        "SF",
        "実話"
      ],
      "q47": [
        "雨の日の過ごし方は？",
        "読書",
        "昼寝",
        "映画",
        "傘をさして散歩"
      ],
      "q48": [
        "プレゼントでいちばんうれしいのは？",
        "気持ち",
        "役に立つこと",
        "きれいなこと",
        "サプライズ感"
      ],
      "q49": [
        "じゃがいもなら？",
        "マッシュポテト",
        "フライドポテト",
        "ベイクドポテト",
        "ポテトチップス"
      ],
      "q50": [
        "初めての街でまず行くのは？",
        "カフェ",
        "美術館・博物館",
        "公園",
        "お店めぐり"
      ],
      "q51": [
        "眠れないときは？",
        "本を読む",
        "スマホを見る",
        "羊を数える",
        "ホットミルクを飲む"
      ],
      "q52": [
        "大事な日の準備は？",
        "前もって全部計画",
        "ぎりぎりにやる",
        "人に手伝ってもらう",
        "緊張して眠れない"
      ],
      "q53": [
        "観るのが好きなスポーツは？",
        "サッカー",
        "テニス",
        "フィギュアスケート",
        "スポーツは観ない"
      ],
      "q54": [
        "わたしに合うペットは？",
        "ねこ",
        "いぬ",
        "インコ",
        "ハムスター"
      ],
      "q55": [
        "どんなメッセージを送る？",
        "長文",
        "短文",
        "絵文字たっぷり",
        "ボイスメッセージ"
      ],
      "q56": [
        "いちばん長く大切にしている贈り物は？",
        "手紙",
        "おもちゃ",
        "写真",
        "アクセサリー"
      ],
      "q57": [
        "選ぶならどっち？",
        "暖炉のそばで紅茶",
        "芝生でピクニック",
        "海辺の散歩",
        "映画館"
      ],
      "q58": [
        "いちばんうれしいほめ言葉は？",
        "見た目について",
        "頭のよさについて",
        "やさしさについて",
        "ユーモアについて"
      ],
      "q59": [
        "理想の朝は？",
        "ベッドで朝ごはん",
        "早朝ランニング",
        "ゆっくり朝寝坊",
        "ベランダでコーヒー"
      ],
      "q60": [
        "身につけたいことは？",
        "ダンス",
        "料理",
        "新しい言語",
        "絵"
      ],
      "q61": [
        "わたしがいちばん上手に作れる料理は？",
        "スープ",
        "ピラフ",
        "焼き菓子",
        "サラダ"
      ],
      "q62": [
        "わたしが最初に行きたい国は？",
        "トルコ",
        "日本",
        "モロッコ",
        "ノルウェー"
      ],
      "q63": [
        "わたしが始めるならどのスポーツ？",
        "水泳",
        "ランニング",
        "サイクリング",
        "サッカー"
      ],
      "q64": [
        "わたしが選ぶ本は？",
        "冒険もの",
        "歴史の本",
        "昔話",
        "百科事典"
      ],
      "q65": [
        "動物園でわたしが最初に見に行く動物は？",
        "ゾウ",
        "サル",
        "ペンギン",
        "キリン"
      ],
      "q66": [
        "辛い料理、わたしはどう？",
        "辛ければ辛いほどいい",
        "少しなら大丈夫",
        "ほんの少しだけ",
        "まったく食べない"
      ],
      "q67": [
        "わたしが好きだった教科は？",
        "数学",
        "国語",
        "地理",
        "体育"
      ],
      "q68": [
        "子どものころのわたしの夢の職業は？",
        "医者",
        "先生",
        "宇宙飛行士",
        "料理人"
      ],
      "q69": [
        "山歩きの旅、わたしはどう？",
        "長い旅にあこがれる",
        "日帰りなら",
        "快適さがあれば",
        "家がいちばん"
      ],
      "q70": [
        "朝のわたしの気分は？",
        "元気いっぱい",
        "まだ眠い",
        "静か",
        "おしゃべり"
      ],
      "q71": [
        "わたしがいちばん好きなナッツは？",
        "ヘーゼルナッツ",
        "クルミ",
        "カシューナッツ",
        "アーモンド"
      ],
      "q72": [
        "思いがけず一時間あいたら、わたしは？",
        "本を読む",
        "散歩に行く",
        "家族に電話する",
        "何か料理する"
      ],
      "q73": [
        "わたしが苦手な天気は？",
        "暑さ",
        "風",
        "みぞれ",
        "厳しい寒さ"
      ],
      "q74": [
        "わたしが部屋を塗るなら何色？",
        "白",
        "ベージュ",
        "緑",
        "水色"
      ],
      "q75": [
        "わたしが遊ぶなら？",
        "チェス",
        "チェッカー",
        "ジグソーパズル",
        "言葉遊び"
      ],
      "q76": [
        "お客さんにわたしが作るのは？",
        "ピラフ",
        "パイ",
        "サラダ",
        "出前を頼む"
      ],
      "q77": [
        "わたしが絶対に食べないものは？",
        "きのこ",
        "魚",
        "オリーブ",
        "ゆでた玉ねぎ"
      ],
      "q78": [
        "わたしのお茶の飲み方は？",
        "濃いめ",
        "薄め",
        "甘め",
        "ハーブ入り"
      ],
      "q79": [
        "わたしが家でいちばん大切にするのは？",
        "清潔さ",
        "居心地のよさ",
        "明るさ",
        "静けさ"
      ],
      "q80": [
        "わたしの新しいことの学び方は？",
        "本を読む",
        "動画で学ぶ",
        "実際にやってみる",
        "人に聞く"
      ],
      "q81": [
        "わたしがいちばん心ひかれる野生動物は？",
        "トラ",
        "クマ",
        "ワシ",
        "イルカ"
      ],
      "q82": [
        "わたしが母に贈るなら？",
        "花",
        "手作りのもの",
        "旅行",
        "暖かいブランケット"
      ],
      "q83": [
        "移動中のわたしは？",
        "窓の外を眺める",
        "本を読む",
        "おしゃべりする",
        "おやつを食べる"
      ],
      "q84": [
        "わたしの好きな鶏肉料理は？",
        "焼き鳥",
        "チキンライス",
        "チキンハンバーグ",
        "ナゲット"
      ],
      "q85": [
        "電車でわたしが選ぶ席は？",
        "窓側",
        "通路側",
        "進行方向と逆向き",
        "どこでもいい"
      ],
      "q86": [
        "うまくいかないとき、わたしは？",
        "すぐ行動する",
        "まず考える",
        "人に相談する",
        "少し心配する"
      ],
      "q87": [
        "わたしのいちばんの長所は？",
        "やさしさ",
        "正直さ",
        "粘り強さ",
        "明るさ"
      ],
      "q88": [
        "わたしがいちばん休まる場所は？",
        "田舎の親戚の家",
        "海辺のホテル",
        "テント",
        "自宅"
      ],
      "q89": [
        "わたしが選ぶお菓子・パンは？",
        "サムサ",
        "ハチャプリ",
        "チャクチャク",
        "エクレア"
      ],
      "q90": [
        "わたしがいちばん学びたい言語は？",
        "アラビア語",
        "英語",
        "トルコ語",
        "日本語"
      ],
      "q91": [
        "わたしは甘いものなしでどのくらい平気？",
        "一日",
        "一週間",
        "一か月",
        "必要なだけ"
      ],
      "q92": [
        "遅れそうなとき、わたしは？",
        "全力で走る",
        "先に電話して知らせる",
        "タクシーに乗る",
        "遅れたことがない"
      ],
      "q93": [
        "機械が壊れたら、わたしは？",
        "自分で直す",
        "説明書を読む",
        "助けを呼ぶ",
        "ボタンを全部押す"
      ],
      "q94": [
        "わたしがスーツケースに最初に入れるのは？",
        "救急セット",
        "本",
        "充電器",
        "おやつ"
      ],
      "q95": [
        "わたしの心が落ち着くことは？",
        "料理",
        "片づけ",
        "お絵かき",
        "散歩"
      ],
      "q96": [
        "引退したらわたしがしたいことは？",
        "庭仕事",
        "旅行",
        "読書",
        "孫と過ごす"
      ],
      "q97": [
        "わたしがいちばんイライラすることは？",
        "騒音",
        "散らかり",
        "遅刻",
        "失礼な態度"
      ],
      "q98": [
        "わたしがいちばん好きな香りは？",
        "焼きたてのパン",
        "雨",
        "花",
        "海"
      ],
      "q99": [
        "わたしが選ぶデザートは？",
        "果物",
        "アイスクリーム",
        "パイ",
        "お茶だけ"
      ]
    },
    "yesNo": {
      "c01": [
        "いま、わたしに会いたい？",
        "とても会いたがっています",
        "がまんしているけど、あなたのことを考えています"
      ],
      "c02": [
        "わたしのメッセージを見ると笑顔になる？",
        "いつも笑顔になります",
        "心の中でほほえんでいます"
      ],
      "c03": [
        "初めて会った日のこと、覚えてる？",
        "一分一秒まで覚えています",
        "いちばん大事なこと — あなたを覚えています"
      ],
      "c04": [
        "今日ハグしたい？",
        "あなたのハグを待っています",
        "ハグはあとのお楽しみ"
      ],
      "c05": [
        "いっしょに海へ行こうか？",
        "もう荷造りしています",
        "山にあこがれています"
      ],
      "c06": [
        "わたし、あなたを笑わせてる？",
        "心から笑っています",
        "笑顔をかくしています"
      ],
      "c07": [
        "わたしといると落ち着く？",
        "あなたのそばだと安心します",
        "あなたといると楽しいです"
      ],
      "c08": [
        "昼間、わたしのことを思い出す？",
        "とてもよく思い出します",
        "ちょうど今、思い出しています"
      ],
      "c09": [
        "わたしのサプライズは好き？",
        "あなたのサプライズが大好き",
        "そばにいてくれるのがいちばん"
      ],
      "c10": [
        "いっしょにパイを焼こうか？",
        "もうエプロンをつけています",
        "ケーキを買うほうがいい"
      ],
      "c11": [
        "今夜いっしょに映画を観る？",
        "もう映画を選んでいます",
        "おしゃべりしたい気分"
      ],
      "c12": [
        "わたしの声は好き？",
        "ずっと聞いていられます",
        "あなたの笑い声がもっと好き"
      ],
      "c13": [
        "週末にピクニックしない？",
        "ブランケットを準備中",
        "すてきなカフェに誘っています"
      ],
      "c14": [
        "わたしからの手紙、ほしい？",
        "あなたの手紙を待っています",
        "直接聞きたいと思っています"
      ],
      "c15": [
        "わたしはあなたにとって大切？",
        "とても大切です",
        "思っている以上に大切です"
      ],
      "c16": [
        "雨の中を散歩しようか？",
        "ふたり用の傘を持っています",
        "家でお茶をいれます"
      ],
      "c17": [
        "わたしたち、似てる？",
        "ふたりでひとつのよう",
        "ぴったり補い合っています"
      ],
      "c18": [
        "わたしの料理、好き？",
        "おかわりしたいそうです",
        "いっしょに作るのが大好き"
      ],
      "c19": [
        "いっしょにペットを飼おうか？",
        "もう名前を考えています",
        "今はぬいぐるみのくまで十分"
      ],
      "c20": [
        "わたしの好きなもの、知ってる？",
        "ぜんぶ覚えています",
        "もっと知りたいと思っています"
      ],
      "c21": [
        "いっしょに踊る？",
        "もう手を差し出しています",
        "拍手で応援します"
      ],
      "c22": [
        "わたし、あなたの刺激になってる？",
        "毎日、心を動かされています",
        "そばにいるとただ温かい"
      ],
      "c23": [
        "ふたりの写真、とってある？",
        "一枚一枚大切にしています",
        "もっとすてきな新しい写真を待っています"
      ],
      "c24": [
        "いっしょに日の出を見ようか？",
        "目覚ましをセット中",
        "夕日のほうがいいそうです"
      ],
      "c25": [
        "ひみつを教えてくれる？",
        "耳もとでささやきます",
        "ひみつのままにしておきます"
      ],
      "c26": [
        "わたしを信じてる？",
        "心から信じています",
        "毎日あなたを応援しています"
      ],
      "c27": [
        "ふたりきりで旅に出ようか？",
        "それが夢です",
        "大切な人みんなを連れて行きます"
      ],
      "c28": [
        "わたしの電話、待ってる？",
        "笑顔で待っています",
        "会いに来てほしいそうです"
      ],
      "c29": [
        "わたしのハグ、好き？",
        "世界でいちばん温かい",
        "手をつなぐのが好き"
      ],
      "c30": [
        "お互いに本を読み聞かせしようか？",
        "もう本を選んでいます",
        "あなたの声を聞いていたい"
      ],
      "c31": [
        "今日いっしょに写真を撮ろうか？",
        "すてきな背景を探しています",
        "まずはおしゃべり"
      ],
      "c32": [
        "わたし、あなたを元気にしてる？",
        "いつも元気をもらっています",
        "あなたといると悲しみも軽くなります"
      ],
      "c33": [
        "明日いっしょに朝ごはんを食べよう？",
        "もうココアを作っています",
        "ゆっくり寝ていたい"
      ],
      "c34": [
        "わたしの誕生日、覚えてる？",
        "言われなくても覚えています",
        "こっそりサプライズを準備中"
      ],
      "c35": [
        "スケートに行こうか？",
        "スケート靴を出しています",
        "リンクのそばで応援します"
      ],
      "c36": [
        "今日はいい日？",
        "最高の一日",
        "あなたがいればもっとよくなります"
      ],
      "c37": [
        "わたしの似顔絵を描いてくれる？",
        "もう鉛筆を持っています",
        "小さなハートを描きます"
      ],
      "c38": [
        "いっしょに木を植えようか？",
        "場所を選んでいます",
        "まずは窓辺の花から"
      ],
      "c39": [
        "ほめ言葉を聞きたい？",
        "楽しみにしています",
        "照れくさいけど、聞きたい"
      ],
      "c40": [
        "あとでもう一回遊ぶ？",
        "もう一回やりたい",
        "ゲームよりハグしたい"
      ],
      "c41": [
        "辛い料理は好き？",
        "辛ければ辛いほどいい",
        "もっとマイルドなものを選びます"
      ],
      "c42": [
        "泳げる？",
        "魚のように泳ぎます",
        "今のところ岸の近くにいます"
      ],
      "c43": [
        "猫を飼ってみたい？",
        "もう名前を考えています",
        "犬の方が好きです"
      ],
      "c44": [
        "いつかイスタンブールに行ってみたい？",
        "もうボスポラス海峡を夢見ています",
        "別の街を選びます"
      ],
      "c45": [
        "料理は好き？",
        "楽しんで料理します",
        "お皿洗いの方がいいです"
      ],
      "c46": [
        "ピラフの作り方を覚えたい？",
        "もうレシピを探しています",
        "誰かが作ったものを味わいたいです"
      ],
      "c47": [
        "本を読むのは好き？",
        "いつもそばに本があります",
        "お話を聞く方が好きです"
      ],
      "c48": [
        "自転車に乗れる？",
        "今すぐにでも走り出せます",
        "練習すると約束します"
      ],
      "c49": [
        "海より山が好き？",
        "山を選びます",
        "海を選びます"
      ],
      "c50": [
        "砂漠を見てみたい？",
        "砂丘を夢見ています",
        "森の方がいいです"
      ],
      "c51": [
        "冬は好き？",
        "初雪を待っています",
        "夏を待っています"
      ],
      "c52": [
        "お茶は砂糖なしで飲む？",
        "お茶そのままの味が好きです",
        "砂糖ひとさじは欠かせません"
      ],
      "c53": [
        "クモはこわい？",
        "なるべく近寄りません",
        "落ち着いて外に逃がします"
      ],
      "c54": [
        "絵を描くのは好き？",
        "もう筆を手に取っています",
        "人の絵を見る方が好きです"
      ],
      "c55": [
        "オーロラを見てみたい？",
        "もう見られる場所を調べています",
        "星を眺める方がいいです"
      ],
      "c56": [
        "雨の日は好き？",
        "窓の外の雨音が大好きです",
        "晴れるのを待っています"
      ],
      "c57": [
        "馬に乗れる？",
        "鞍の上でも堂々としています",
        "今は夢見ているだけです"
      ],
      "c58": [
        "犬を飼ってみたい？",
        "忠実な友だちを夢見ています",
        "今はお世話することで手いっぱいです"
      ],
      "c59": [
        "しょっぱいものより甘いものが好き？",
        "甘いものなしでは生きられません",
        "しょっぱいものを選びます"
      ],
      "c60": [
        "電車の旅は好き？",
        "車輪のリズムが大好きです",
        "飛行機を選びます"
      ],
      "c61": [
        "朝早く一日を始めるのは得意？",
        "元気いっぱいに一日を始めます",
        "お昼まではエンジンがかかりません"
      ],
      "c62": [
        "テントで泊まるのは好き？",
        "もうリュックに荷物を詰めています",
        "居心地のいいホテルを選びます"
      ],
      "c63": [
        "海辺に住んでみたい？",
        "波の音を夢見ています",
        "街を選びます"
      ],
      "c64": [
        "冬にアイスクリームを食べる？",
        "寒い日でも食べます",
        "夏だけです"
      ],
      "c65": [
        "チョコレートは好き？",
        "あらゆる種類を知っています",
        "平気で素通りします"
      ],
      "c66": [
        "パイを焼ける？",
        "おばあちゃんのように焼けます",
        "練習すると約束します"
      ],
      "c67": [
        "星を眺めるのは好き？",
        "星座をよく知っています",
        "晴れた昼間の方が好きです"
      ],
      "c68": [
        "いつか自分の庭を作ってみたい？",
        "もう苗を選んでいます",
        "まずは鉢植えの花から始めます"
      ],
      "c69": [
        "野の花は好き？",
        "マーガレットや矢車菊が大好きです",
        "庭の花の方が好きです"
      ],
      "c70": [
        "コーヒーは飲む？",
        "コーヒーなしでは一日が始まりません",
        "お茶を選びます"
      ],
      "c71": [
        "手作りのレモネードは好き？",
        "もうレモンを切っています",
        "お水の方がいいです"
      ],
      "c72": [
        "いつか日本に行ってみたい？",
        "桜を見るのを夢見ています",
        "別の国を選びます"
      ],
      "c73": [
        "秋は好き？",
        "落ち葉をカサカサ踏むのが大好きです",
        "春を待っています"
      ],
      "c74": [
        "ラベンダーの香りは好き？",
        "その香りが大好きです",
        "ほかの香りの方が好きです"
      ],
      "c75": [
        "ボードゲームは好き？",
        "もう盤を並べています",
        "散歩の方が好きです"
      ],
      "c76": [
        "車の運転はできる？",
        "自信を持って運転します",
        "今のところ助手席です"
      ],
      "c77": [
        "いつか大海原を見てみたい？",
        "大きな波を夢見ています",
        "近くの海で十分です"
      ],
      "c78": [
        "しばらく農場で暮らしてみたい？",
        "もうニワトリにえさをあげています",
        "街に残ります"
      ],
      "c79": [
        "大都会は好き？",
        "街の明かりが大好きです",
        "静かでのんびりした場所を選びます"
      ],
      "c80": [
        "お菓子より果物が好き？",
        "果物を選びます",
        "お菓子を選びます"
      ],
      "c81": [
        "海でイルカを見てみたい？",
        "ぜひ見てみたいです",
        "本で読む方がいいです"
      ],
      "c82": [
        "夏は好き？",
        "暑い日を待っています",
        "涼しい天気が大好きです"
      ],
      "c83": [
        "公園の散歩は好き？",
        "どんな天気でも歩きます",
        "家にいる方が好きです"
      ],
      "c84": [
        "手書きで文字を書くのは好き？",
        "字がきれいです",
        "スマホで入力します"
      ],
      "c85": [
        "ボートに乗るのは好き？",
        "もうオールを握っています",
        "岸に残ります"
      ],
      "c86": [
        "世界一周旅行をしてみたい？",
        "もうルートを描いています",
        "二、三か国で十分です"
      ],
      "c87": [
        "雪だるまを作れる？",
        "いちばん大きいのを作ります",
        "雪合戦の方がいいです"
      ],
      "c88": [
        "今年は何か新しいことを学びたい？",
        "もう講座を選んでいます",
        "やることはもう十分あります"
      ],
      "c89": [
        "静けさは好き？",
        "静かな時間を大切にしています",
        "にぎやかな方が好きです"
      ],
      "c90": [
        "家族にプレゼントを贈るのは好き？",
        "特別な理由がなくても家族を喜ばせます",
        "実際に手を貸す方が好きです"
      ]
    },
    "loves": {
      "s01": [
        "休みはどこで過ごす？",
        "ビーチ",
        "山",
        "旅",
        "ひとりの時間"
      ],
      "s02": [
        "理想の夜は？",
        "おうち映画",
        "お散歩",
        "レストラン",
        "ボードゲーム"
      ],
      "s03": [
        "好きな天気は？",
        "晴れ",
        "雨",
        "雪",
        "星空の夜"
      ],
      "s04": [
        "好きな動物は？",
        "子ねこ",
        "子いぬ",
        "馬",
        "イルカ"
      ],
      "s05": [
        "夕ごはんは？",
        "ピザ",
        "お寿司",
        "スイーツ",
        "バーベキュー"
      ],
      "s06": [
        "好きな飲み物は？",
        "コーヒー",
        "紅茶",
        "ココア",
        "レモネード"
      ],
      "s07": [
        "好きな季節は？",
        "春",
        "夏",
        "秋",
        "冬"
      ],
      "s08": [
        "好きな花は？",
        "バラ",
        "チューリップ",
        "ひまわり",
        "ラベンダー"
      ],
      "s09": [
        "どうやってくつろぐ？",
        "読書",
        "お絵かき",
        "サイクリング",
        "ハンモックでお昼寝"
      ],
      "s10": [
        "どうやって旅する？",
        "電車",
        "飛行機",
        "車",
        "船"
      ],
      "s11": [
        "夢の家は？",
        "街のマンション",
        "海辺の家",
        "山の小屋",
        "牧場"
      ],
      "s12": [
        "甘いものなら？",
        "アイス",
        "チョコレート",
        "ケーキ",
        "フルーツ"
      ],
      "s13": [
        "理想の朝は？",
        "ベッドで朝ごはん",
        "ジョギング",
        "朝寝坊",
        "ベランダでコーヒー"
      ],
      "s14": [
        "夢のデートは？",
        "ピクニック",
        "スケートリンク",
        "遊園地",
        "屋上で星空"
      ],
      "s15": [
        "いちばんうれしい贈り物は？",
        "花束",
        "手紙",
        "旅行",
        "プレゼントの箱"
      ],
      "s16": [
        "好きな自然は？",
        "海",
        "森",
        "砂漠",
        "オーロラ"
      ],
      "s17": [
        "好きな果物は？",
        "りんご",
        "いちご",
        "スイカ",
        "ぶどう"
      ],
      "s18": [
        "休みの日に何をする？",
        "山歩き",
        "家で料理",
        "博物館",
        "釣り"
      ],
      "s19": [
        "好きな朝ごはんは？",
        "パンケーキ",
        "オムレツ",
        "ベリーのせおかゆ",
        "クロワッサン"
      ],
      "s20": [
        "好きな鳥は？",
        "フクロウ",
        "オウム",
        "白鳥",
        "クジャク"
      ],
      "s21": [
        "どの街に行く？",
        "イスタンブール",
        "パリ",
        "東京",
        "ドバイ"
      ],
      "s22": [
        "好きなスポーツは？",
        "サッカー",
        "水泳",
        "テニス",
        "乗馬"
      ],
      "s23": [
        "庭に何を植える？",
        "りんごの木",
        "バラ",
        "野菜",
        "いちご"
      ],
      "s24": [
        "好きな焼き菓子は？",
        "小さなパイ",
        "ドーナツ",
        "クッキー",
        "バクラヴァ"
      ],
      "s25": [
        "どこに住む？",
        "川のそば",
        "森の中",
        "大都会",
        "島"
      ],
      "s26": [
        "好きな海の生き物は？",
        "ウミガメ",
        "クジラ",
        "タコ",
        "タツノオトシゴ"
      ],
      "s27": [
        "何に乗る？",
        "自転車",
        "キックボード",
        "熱気球",
        "ボート"
      ],
      "s28": [
        "好きな趣味は？",
        "編み物",
        "自然の写真",
        "庭仕事",
        "書道"
      ],
      "s29": [
        "好きなスープは？",
        "ボルシチ",
        "チキンスープ",
        "かぼちゃのスープ",
        "レンズ豆のスープ"
      ],
      "s30": [
        "森の動物は？",
        "ハリネズミ",
        "リス",
        "キツネ",
        "シカ"
      ],
      "s31": [
        "ちょっとつまむなら？",
        "デーツ",
        "アーモンド",
        "ピスタチオ",
        "干しあんず"
      ],
      "s32": [
        "ハイキングに何を持っていく？",
        "テント",
        "水筒",
        "地図",
        "懐中電灯"
      ],
      "s33": [
        "好きなデザートは？",
        "プリン",
        "チーズケーキ",
        "はちみつパンケーキ",
        "フルーツサラダ"
      ],
      "s34": [
        "冬に何をする？",
        "雪だるま作り",
        "そり遊び",
        "窓辺でお茶",
        "スキー"
      ],
      "s35": [
        "夏に何をする？",
        "泳ぐ",
        "ベリー摘み",
        "ボート遊び",
        "砂のお城作り"
      ],
      "s36": [
        "何で絵を描く？",
        "水彩絵の具",
        "色鉛筆",
        "クレヨン",
        "キャンバスに絵の具"
      ],
      "s37": [
        "好きな野菜は？",
        "にんじん",
        "トマト",
        "とうもろこし",
        "かぼちゃ"
      ],
      "s38": [
        "家を居心地よくするものは？",
        "暖炉",
        "ふかふかのブランケット",
        "観葉植物",
        "本棚"
      ],
      "s39": [
        "何をして遊ぶ？",
        "チェス",
        "ジグソーパズル",
        "ボードゲーム",
        "ボール遊び"
      ],
      "s40": [
        "農場にいるのは？",
        "牛",
        "子羊",
        "ニワトリ",
        "子ヤギ"
      ],
      "s41": [
        "お茶に何を入れる？",
        "はちみつ",
        "レモン",
        "ジャム",
        "ミント"
      ],
      "s42": [
        "海辺にあるものは？",
        "灯台",
        "貝がら",
        "ヨット",
        "カモメ"
      ],
      "s43": [
        "朝のはじめ方は？",
        "体操",
        "一杯のお茶",
        "散歩",
        "読書"
      ],
      "s44": [
        "好きなベリーは？",
        "ラズベリー",
        "ブルーベリー",
        "さくらんぼ",
        "ブラックベリー"
      ]
    },
    "who": [
      "よく遅刻するのはどっち？",
      "先に仲直りするのはどっち？",
      "料理が上手なのはどっち？",
      "よく笑うのはどっち？",
      "支度に時間がかかるのはどっち？",
      "よく鍵をなくすのはどっち？",
      "大切な日付をよく覚えているのはどっち？",
      "甘いものが好きなのはどっち？",
      "先に寝てしまうのはどっち？",
      "朝早く起きるのはどっち？",
      "「会いたい」とよく言うのはどっち？",
      "プレゼント選びが上手なのはどっち？",
      "よく冗談を言うのはどっち？",
      "運転が上手なのはどっち？",
      "電話が長いのはどっち？",
      "旅行がより好きなのはどっち？",
      "傷つきやすいのはどっち？",
      "すぐに許すのはどっち？",
      "写真をよく撮るのはどっち？",
      "お金の管理が上手なのはどっち？",
      "いらない物をよく買ってしまうのはどっち？",
      "慰めるのが上手なのはどっち？",
      "大変なときに落ち着いているのはどっち？",
      "いつもスマホを探しているのはどっち？",
      "お客さんを招くのが好きなのはどっち？",
      "朝ごはんをよく作るのはどっち？",
      "知らない街で道がわかるのはどっち？",
      "長いメッセージを書くのはどっち？",
      "先に散歩に誘うのはどっち？",
      "動物がより好きなのはどっち？",
      "秘密を守るのが上手なのはどっち？",
      "メニュー選びに時間がかかるのはどっち？",
      "大切な人のことをより心配するのはどっち？",
      "サプライズをよくするのはどっち？",
      "きれい好きなのはどっち？",
      "新しい髪型に先に気づくのはどっち？",
      "面白い話をよく思い出すのはどっち？",
      "我慢強いのはどっち？",
      "「ありがとう」をよく言うのはどっち？",
      "先に手を貸すのはどっち？",
      "暗算が得意なのはどっち？",
      "本をたくさん読むのはどっち？",
      "文字を打つのが速いのはどっち？",
      "親によく電話するのはどっち？",
      "話をするのが上手なのはどっち？",
      "字がきれいなのはどっち？",
      "辛い料理がより好きなのはどっち？",
      "家に忘れ物をしがちなのはどっち？",
      "機械に強いのはどっち？",
      "新しいことを学ぶのがより好きなのはどっち？",
      "計画を立てるのが上手なのはどっち？",
      "市場で値切るのが上手なのはどっち？",
      "自然がより好きなのはどっち？",
      "食べるのが速いのはどっち？",
      "お茶をたくさん飲むのはどっち？",
      "植物の世話が上手なのはどっち？",
      "地理にくわしいのはどっち？",
      "チェスが強いのはどっち？",
      "市場でおいしい果物を選ぶのが上手なのはどっち？",
      "天気予報をよくチェックするのはどっち？",
      "クモをよりこわがるのはどっち？",
      "勇気があるのはどっち？",
      "好奇心が強いのはどっち？",
      "パズルを解くのが速いのはどっち？",
      "絵が上手なのはどっち？",
      "近所の人をよく手伝うのはどっち？",
      "子どもと仲良くなるのが上手なのはどっち？",
      "散歩がより好きなのはどっち？",
      "説明書をよく読むのはどっち？",
      "人の名前をよく覚えているのはどっち？",
      "外国語の単語を覚えるのが速いのはどっち？",
      "お菓子作りが上手なのはどっち？",
      "アドバイスが上手なのはどっち？",
      "寒い天気がより好きなのはどっち？",
      "ハイキングで頼りになるのはどっち？",
      "ニュースをよく読むのはどっち？",
      "新しい料理をよく試すのはどっち？",
      "スーツケースに荷物を詰めるのが速いのはどっち？",
      "物を直すのが上手なのはどっち？",
      "動物によく話しかけるのはどっち？",
      "お皿洗いをよくするのはどっち？",
      "歴史にくわしいのはどっち？",
      "物事を先延ばしにしがちなのはどっち？",
      "初対面の人とすぐ打ち解けるのはどっち？",
      "健康により気をつけているのはどっち？"
    ],
    "phrases": [
      "私が笑顔になるのは、あなたが…",
      "あなたと過ごしたいちばん好きな日は…",
      "ありがとうと伝えたいのは…",
      "悲しいとき、私を助けてくれるのは…",
      "いつかふたりで一緒に…",
      "ふたりのいちばんあたたかい思い出は…",
      "あなたが誰よりも上手なのは…",
      "私が安心できるのは…",
      "丸一日自由な日があったら、ふたりで…",
      "あなたを誇りに思うのは…",
      "ふたりの理想の夜は…",
      "ずっと忘れないのは、あなたが…",
      "あなたに言われてうれしい言葉は…",
      "来年、ふたりで…",
      "私にとってあなたは、まるで…",
      "あなたからのいちばんのプレゼントは…",
      "あなたに会いたくなるのは…",
      "ふたりがいちばん面白いのは…",
      "ずっと伝えたかったことは…",
      "ふたりの場所は…",
      "あなたのことを考えると、私は…",
      "あなたが私の一日を明るくしてくれるのは…",
      "ふたりの好きな習慣は…",
      "ふたりへの願い：…",
      "ふたりに起きたいちばん面白いことは…",
      "あなたの思いやりを感じるのは、あなたが…",
      "あなたと迎える朝は…",
      "ふたりをひと言で表すと…",
      "あなたから学びたいことは…",
      "いつもありがとう。あなたはいつも…",
      "子どものころ好きだった食べ物は…",
      "どこかの国で一日過ごせるなら、私は…",
      "これまでにもらった一番のアドバイスは…",
      "私がいつも笑ってしまうのは…",
      "ふるさとの町で好きな場所は…",
      "自分の小さなお店を持てたら、売るのは…",
      "私がいちばん上手に作れる料理は…",
      "今も覚えている子どものころの夢は…",
      "私がすぐ嬉しくなるのは…",
      "これまで行った中でいちばんおどろいた場所は…",
      "私が学びたいのは…",
      "理想の休日は、まず…",
      "どんな動物でも飼えるなら、それは…",
      "家族はいつも、私のことを…",
      "どうしても慣れないのは…",
      "私のいちばん役に立つ習慣は…",
      "今まで読んだ中でいちばんの本は…",
      "十年後、私は…",
      "夢の家は…",
      "子どものころいちばん面白かった出来事は…",
      "私にとって幸せとは…",
      "なかなかやめられないのは…",
      "超能力があったら、それは…",
      "私が人にいちばん大切だと思うのは…",
      "夜に時間があいたら、私は…",
      "好きな香りは…",
      "絶対に食べないものは…",
      "出かけるときに必ず持っていくものは…",
      "行ってみたい場所は…、その理由は…",
      "今までにもらった一番のプレゼントは…",
      "私のちょっと変わった習慣は…",
      "毎日あと一時間あったら、私は…",
      "たくさんのことを学んでいる相手は…",
      "つらい日に私を支えてくれるのは…",
      "旅先で食べたいちばんおいしいものは…",
      "一日だけ仕事を変えられるなら、選ぶのは…",
      "いちばん心に近い季節は…",
      "友だちは、私のことを…",
      "いつか誰かに教えてあげたいのは…",
      "毎日のささやかな楽しみは…"
    ],
    "truth": {
      "t01": [
        "タコには心臓が3つある。",
        true,
        "2つの心臓がえらに血液を送り、3つ目が全身に血液を送ります。"
      ],
      "t02": [
        "万里の長城は月から肉眼で見える。",
        false,
        "見えません。長城は幅がせますぎるのです。地球を回る軌道からでも見つけるのはとても難しいです。"
      ],
      "t03": [
        "はちみつは何千年も腐らずに保存できる。",
        true,
        "古代エジプトの墓から、何千年も前のはちみつが保存された状態で見つかっています。"
      ],
      "t04": [
        "バナナは木になる。",
        false,
        "バナナは巨大な草です。「幹」に見えるのは、葉がきつく巻き重なったものです。"
      ],
      "t05": [
        "金星は太陽系でいちばん熱い惑星だ。",
        true,
        "厚い大気のせいで金星は約460 °Cにもなり、水星より熱いのです。"
      ],
      "t06": [
        "コウモリは目が見えない。",
        false,
        "コウモリは目が見えます。暗闇では反響定位（エコーロケーション）も使って進みます。"
      ],
      "t07": [
        "クジラは魚だ。",
        false,
        "クジラはほ乳類です。空気で呼吸し、子どもをお乳で育てます。"
      ],
      "t08": [
        "サハラは世界最大の砂漠だ。",
        false,
        "最大の砂漠は南極です。サハラは暑い砂漠の中で最大です。"
      ],
      "t09": [
        "キリンの首の骨の数は人間と同じだ。",
        true,
        "どちらも首の骨は7つ。キリンの骨はとても長いだけです。"
      ],
      "t10": [
        "植物学では、トマトはベリーの一種だ。",
        true,
        "植物学者はトマトをベリーに分類します。中に種がある、果肉の多い実です。"
      ],
      "t11": [
        "植物学では、イチゴはベリーの一種だ。",
        false,
        "イチゴは偽果です。本当の果実は、表面にある小さな「種」のほうです。"
      ],
      "t12": [
        "宇宙では爆発の音が聞こえる。",
        false,
        "宇宙にはほとんど空気がないので、音が伝わるものがありません。"
      ],
      "t13": [
        "高い山の上では、水はより低い温度で沸騰する。",
        true,
        "高いところでは気圧が低いので、水は100 °Cになる前に沸騰します。"
      ],
      "t14": [
        "ペンギンは北極にすんでいる。",
        false,
        "野生のペンギンは南半球にしかすんでいません。北の果てにはいないのです。"
      ],
      "t15": [
        "エベレストは海抜でいちばん高い山だ。",
        true,
        "エベレストの高さは海抜約8,849メートルです。"
      ],
      "t16": [
        "人は脳の10%しか使っていない。",
        false,
        "それは俗説です。一日のうちに脳のほぼすべての部分がはたらいています。"
      ],
      "t17": [
        "人の心臓は一日に約10万回拍動する。",
        true,
        "1分間に約70回なので、一日でおよそ10万回になります。"
      ],
      "t18": [
        "金魚の記憶は3秒しかもたない。",
        false,
        "実験では、金魚は覚えたことを何か月も記憶できるとわかっています。"
      ],
      "t19": [
        "オーストラリアは国であり、大陸でもある。",
        true,
        "オーストラリアは、ひとつの大陸全体を占める唯一の国です。"
      ],
      "t20": [
        "雷は同じ場所に二度落ちない。",
        false,
        "落ちます。高い建物には一年に何度も雷が落ちます。"
      ],
      "t21": [
        "ダチョウはこわいと砂に頭を埋める。",
        false,
        "俗説です。おびえたダチョウは走って逃げるか、地面にぴったり伏せて隠れます。"
      ],
      "t22": [
        "世界最小の鳥はハチドリだ。",
        true,
        "キューバのマメハチドリは約2グラムで、ほかのどの鳥よりも軽いのです。"
      ],
      "t23": [
        "スイカはおよそ90%が水分だ。",
        true,
        "スイカは約92%が水分。だからあんなにさわやかなのです。"
      ],
      "t24": [
        "クモの脚は6本だ。",
        false,
        "クモの脚は8本です。昆虫の脚は6本で、クモは昆虫ではありません。"
      ],
      "t25": [
        "月は自分で光っている。",
        false,
        "月は自分では光りません。太陽の光を反射しているのです。"
      ],
      "t26": [
        "ゾウは陸上で最大の動物だ。",
        true,
        "アフリカゾウは6トン以上になることもあります。"
      ],
      "t27": [
        "シロナガスクジラは知られている中で最大の動物だ。",
        true,
        "シロナガスクジラは体長30メートルを超えることもあり、どの恐竜よりも大きいのです。"
      ],
      "t28": [
        "カメレオンが色を変えるのは、身を隠すためだけだ。",
        false,
        "色は気分や温度、ほかのカメレオンへの合図によって変わることのほうが多いのです。"
      ],
      "t29": [
        "電話を発明したのはトーマス・エジソンだ。",
        false,
        "電話の特許を取ったのは、1876年のアレクサンダー・グラハム・ベルです。"
      ],
      "t30": [
        "ペニシリンを発見したのはアレクサンダー・フレミングだ。",
        true,
        "フレミングは1928年にペニシリンを発見しました。最初の抗生物質です。"
      ],
      "t31": [
        "太陽系でいちばん高い火山は火星にある。",
        true,
        "火星のオリンポス山は高さ約22 km。エベレストの約2.5倍です。"
      ],
      "t32": [
        "静脈を流れる血は青い。",
        false,
        "血はいつも赤です。静脈が青く見えるのは、光が皮膚を通るときの見え方のせいです。"
      ],
      "t33": [
        "大西洋は地球最大の海だ。",
        false,
        "最大は太平洋です。地球上のすべての陸地を合わせたよりも広いのです。"
      ],
      "t34": [
        "ロシアは面積で世界最大の国だ。",
        true,
        "ロシアの面積は1,700万平方キロメートル以上あります。"
      ],
      "t35": [
        "カナダは世界でいちばん海岸線が長い。",
        true,
        "カナダの海岸線は20万km以上あり、ほかのどの国よりも長いのです。"
      ],
      "t36": [
        "牛の胃には4つの部屋がある。",
        true,
        "牛の胃はひとつですが、4つの部屋に分かれています。そうやって草を消化するのです。"
      ],
      "t37": [
        "ライオンは世界最大のネコ科動物だ。",
        false,
        "最大のネコ科動物はトラ、とくにシベリアトラです。"
      ],
      "t38": [
        "地球は太陽にいちばん近い惑星だ。",
        false,
        "いちばん近いのは水星、次が金星。地球は3番目の惑星です。"
      ],
      "t39": [
        "太陽の光が地球に届くまで約8分かかる。",
        true,
        "光は太陽からの1億5,000万kmを約8分20秒で進みます。"
      ],
      "t40": [
        "イルカは脳の半分ずつ眠る。",
        true,
        "片方が休んでいるあいだ、もう片方が見張りをして呼吸を忘れないようにしています。"
      ],
      "t41": [
        "ジャガイモの原産地はアイルランドだ。",
        false,
        "ジャガイモは南アメリカ原産です。何千年も前からアンデスで育てられていました。"
      ],
      "t42": [
        "チョコレートはカカオの木の種から作られる。",
        true,
        "カカオの実は幹に直接なり、その中の種がチョコレートになります。"
      ],
      "t43": [
        "サメはほ乳類だ。",
        false,
        "サメは魚で、えらで呼吸します。海のほ乳類はクジラやイルカです。"
      ],
      "t44": [
        "竹の中には一日に1メートル近く伸びる種類がある。",
        true,
        "竹は地球上でもっとも成長の速い植物のひとつです。"
      ],
      "t45": [
        "フクロウは首を360度まるごと回せる。",
        false,
        "フクロウが首を回せるのは約270度。かなりですが、一周ではありません。"
      ],
      "t46": [
        "ダイヤモンドと鉛筆の黒鉛は同じ物質でできている。",
        true,
        "どちらも純粋な炭素です。原子の並び方がちがうだけなのです。"
      ],
      "t47": [
        "ラクダはこぶに水をためている。",
        false,
        "ラクダのこぶにたまっているのは水ではなく脂肪。長い旅のエネルギーになります。"
      ],
      "t48": [
        "人の体でいちばん小さい骨は耳の中にある。",
        true,
        "中耳にあるあぶみ骨は、長さわずか3ミリほどです。"
      ],
      "t49": [
        "大型のオウムは50年以上生きることがある。",
        true,
        "大切に世話されたコンゴウインコやオウムは、50年以上生きることもよくあります。"
      ],
      "t50": [
        "初めて動力飛行に成功したのはライト兄弟だ。",
        true,
        "1903年に飛び、最初の飛行は12秒間でした。"
      ],
      "t51": [
        "車輪は中世に発明された。",
        false,
        "車輪は5,000年以上前からあります。紀元前3500年ごろのメソポタミアで使われていました。"
      ],
      "t52": [
        "タツノオトシゴは魚だ。",
        true,
        "タツノオトシゴはほかの魚と同じように、えらで呼吸し、ひれで泳ぎます。"
      ],
      "t53": [
        "ハチドリは後ろ向きに飛べる。",
        true,
        "本当に後ろ向きに飛べる鳥は、ハチドリだけです。"
      ],
      "t54": [
        "エッフェル塔は夏になると少し高くなる。",
        true,
        "暑さで金属がふくらみ、塔は約15センチ高くなります。"
      ],
      "t55": [
        "皮膚は人の体でいちばん大きな器官だ。",
        true,
        "大人の皮膚は数キロの重さがあり、体全体を守っています。"
      ],
      "t56": [
        "赤い色を見ると牛は怒る。",
        false,
        "牛は赤色をほとんど見分けられません。興奮させるのは色ではなく動きです。"
      ],
      "t57": [
        "イエバエの寿命はたった一日だ。",
        false,
        "イエバエは約1か月生きます。一日か二日しか生きないのは、カゲロウの成虫です。"
      ],
      "t58": [
        "パイナップルは木になる。",
        false,
        "パイナップルは背の低い葉の多い植物の、まん中から伸びて実ります。"
      ],
      "t59": [
        "ピーナッツはナッツの一種だ。",
        false,
        "ピーナッツは豆の仲間で、エンドウ豆やインゲン豆の親戚です。さやは土の中で実ります。"
      ],
      "t60": [
        "北極と南極は同じくらい寒い。",
        false,
        "南極のほうがずっと寒いのです。南極は高い氷の大陸の上、北極は海の上にあります。"
      ]
    },
    "hints": {
      "h01": [
        "ペンギン",
        "鳥だけど、空は飛べない",
        "とても寒いところに住んでいる",
        "いつも燕尾服を着ている",
        "ダチョウ",
        "アザラシ",
        "カモメ"
      ],
      "h02": [
        "ゾウ",
        "ほぼ一日中、食べている",
        "耳は大きなうちわのよう",
        "長い鼻がある",
        "サイ",
        "カバ",
        "キリン"
      ],
      "h03": [
        "キリン",
        "あまり眠らず、立ったまま寝ることも多い",
        "いちばん高い木の葉を食べる",
        "首がいちばん長い",
        "シマウマ",
        "ラクダ",
        "ヘラジカ"
      ],
      "h04": [
        "ラクダ",
        "水がなくても長く過ごせる",
        "「砂漠の船」と呼ばれる",
        "背中にこぶが1つか2つある",
        "ウマ",
        "ロバ",
        "リャマ"
      ],
      "h05": [
        "ミツバチ",
        "仲間に花への道を教えられる",
        "朝から晩まで野原で働く",
        "はちみつを作る",
        "スズメバチ",
        "ハエ",
        "チョウ"
      ],
      "h06": [
        "カメ",
        "百年以上生きることもある",
        "決して急がない",
        "家を背負って歩く",
        "カタツムリ",
        "トカゲ",
        "ハリネズミ"
      ],
      "h07": [
        "カンガルー",
        "しっぽでバランスをとる",
        "オーストラリアに住んでいる",
        "赤ちゃんをおなかの袋に入れて運ぶ",
        "コアラ",
        "ウサギ",
        "リス"
      ],
      "h08": [
        "フクロウ",
        "首をほぼ真後ろまで回せる",
        "夜に狩りをする",
        "暗い森でホーホーと鳴く",
        "カラス",
        "ワシ",
        "ハト"
      ],
      "h09": [
        "イルカ",
        "海に住んでいるけれど、空気を吸う",
        "人を助け、口笛のような音で話す",
        "波の上を跳ねるのが大好き",
        "サメ",
        "クジラ",
        "アザラシ"
      ],
      "h10": [
        "リス",
        "食べ物を隠して、場所を忘れることも",
        "木のうろに住んでいる",
        "木の実や松ぼっくりをかじる",
        "ハリネズミ",
        "ウサギ",
        "ネズミ"
      ],
      "h11": [
        "クモ",
        "よく虫と言われるけれど、昆虫ではない",
        "足が8本ある",
        "巣を張る",
        "アリ",
        "カブトムシ",
        "カ"
      ],
      "h12": [
        "ネコ",
        "暗いところでは人よりよく見える",
        "暖かい窓辺が大好き",
        "のどをゴロゴロ鳴らし、ネズミを捕る",
        "ウサギ",
        "ハムスター",
        "オウム"
      ],
      "h13": [
        "スイカ",
        "野菜の仲間だと言われることもある",
        "夏になるとみんなが待っている",
        "外は緑、中は赤",
        "メロン",
        "カボチャ",
        "パイナップル"
      ],
      "h14": [
        "パン",
        "ほとんどの国で焼かれている",
        "薄く切ってお昼に食べられる",
        "白いのもライ麦のもあって、皮がある",
        "パンケーキ",
        "パイ",
        "クッキー"
      ],
      "h15": [
        "はちみつ",
        "何千年も保存できる",
        "風邪のとき、温かいお茶に入れられる",
        "ミツバチが作る",
        "ジャム",
        "砂糖",
        "牛乳"
      ],
      "h16": [
        "レモン",
        "ビタミンCがたっぷり",
        "紅茶に入れられる",
        "黄色くて、とてもすっぱい",
        "オレンジ",
        "グレープフルーツ",
        "ライム"
      ],
      "h17": [
        "ニンジン",
        "土の中で育ち、葉だけが見えている",
        "目にいいと言われる",
        "オレンジ色で、ウサギの大好物",
        "ビーツ",
        "ラディッシュ",
        "ジャガイモ"
      ],
      "h18": [
        "リンゴ",
        "夏の品種も冬の品種もある",
        "パイやジュースになる",
        "木になる実で、赤や緑",
        "ナシ",
        "モモ",
        "スモモ"
      ],
      "h19": [
        "バナナ",
        "背の高い植物に房になって実る",
        "サルの大好物",
        "黄色くて、皮をむいて食べる",
        "マンゴー",
        "キウイ",
        "パイナップル"
      ],
      "h20": [
        "お茶",
        "中国では何千年も飲まれている",
        "緑のもの、赤いもの、ハーブのものがある",
        "ポットでいれる",
        "コーヒー",
        "ココア",
        "ジュース"
      ],
      "h21": [
        "卵",
        "わたしがいないとケーキは焼きにくい",
        "オムレツはわたしから作る",
        "ニワトリが産む",
        "チーズ",
        "ナッツ",
        "ジャガイモ"
      ],
      "h22": [
        "傘",
        "ほとんどの時間、たたまれている",
        "空が灰色になると持っていかれる",
        "雨の日にぬれないよう守る",
        "レインコート",
        "帽子",
        "長靴"
      ],
      "h23": [
        "時計",
        "砂や日の光で動くものもある",
        "壁にかかり、塔の上にもある",
        "針で時刻を知らせる",
        "方位磁針",
        "カレンダー",
        "温度計"
      ],
      "h24": [
        "鍵",
        "わたしがないと、ドアは入れてくれない",
        "よくキーリングにつけられる",
        "錠を開ける",
        "はさみ",
        "ドライバー",
        "クリップ"
      ],
      "h25": [
        "ろうそく",
        "働けば働くほど小さくなる",
        "停電のときに火をともされる",
        "ろうでできていて、芯がある",
        "懐中電灯",
        "ランプ",
        "マッチ"
      ],
      "h26": [
        "はさみ",
        "輪が2つ、とがった先が2つある",
        "紙から形を切り抜く",
        "布や紙を切る",
        "ナイフ",
        "針",
        "定規"
      ],
      "h27": [
        "歯ブラシ",
        "毛がたくさんある",
        "3か月ごとに取りかえられる",
        "朝と夜、歯をきれいにする",
        "石けん",
        "タオル",
        "スポンジ"
      ],
      "h28": [
        "冷蔵庫",
        "中はいつも冬",
        "開けると明かりがつく",
        "食べ物を冷たく保つ",
        "コンロ",
        "オーブン",
        "食器棚"
      ],
      "h29": [
        "自転車",
        "燃料も電気もいらない",
        "ハンドルとベルとチェーンがある",
        "車輪が2つとペダルがある",
        "キックボード",
        "バイク",
        "スケートボード"
      ],
      "h30": [
        "飛行機",
        "翼があるけれど、鳥ではない",
        "空港でみんなが待っている",
        "乗客を乗せて雲の上を飛ぶ",
        "ヘリコプター",
        "ロケット",
        "気球"
      ],
      "h31": [
        "列車",
        "自分専用の道しか走らない",
        "車両がたくさんある",
        "駅から駅へレールの上を走る",
        "路面電車",
        "バス",
        "地下鉄"
      ],
      "h32": [
        "橋",
        "石や木や鉄でできている",
        "下を船が通れる",
        "川の両岸をつなぐ",
        "トンネル",
        "道路",
        "ダム"
      ],
      "h33": [
        "鉛筆",
        "中に黒鉛が入っている",
        "先が丸くなると削られる",
        "書いたり描いたりでき、消しゴムで消せる",
        "ボールペン",
        "チョーク",
        "マーカー"
      ],
      "h34": [
        "本",
        "何も話さないけれど、たくさん教える",
        "表紙とページがある",
        "読まれたり、図書館で借りられたりする",
        "雑誌",
        "新聞",
        "ノート"
      ],
      "h35": [
        "スーツケース",
        "よく旅をするけれど、いつも誰かの手の中",
        "旅の前に荷物を詰められる",
        "取っ手と車輪があり、服を入れる",
        "リュック",
        "バッグ",
        "箱"
      ],
      "h36": [
        "図書館",
        "ここでは静かに話すようお願いされる",
        "ここで利用カードを作る",
        "何千冊もの本を家に借りていける",
        "学校",
        "書店",
        "資料館"
      ],
      "h37": [
        "空港",
        "ここには出入国審査がある",
        "ここで搭乗の案内が流れる",
        "ここから飛行機が飛び立つ",
        "駅",
        "港",
        "バスターミナル"
      ],
      "h38": [
        "砂漠",
        "昼は暑いけれど、夜はとても寒くなることも",
        "オアシスがある",
        "砂がいっぱいで、水はほとんどない",
        "草原",
        "サバンナ",
        "砂浜"
      ],
      "h39": [
        "火山",
        "何百年も眠っていることがある",
        "頂上から煙が上がる",
        "溶岩を噴き出す",
        "山",
        "間欠泉",
        "島"
      ],
      "h40": [
        "虹",
        "太陽を背にしたときだけ見える",
        "雨のあとによく現れる",
        "空にかかる七色のアーチ",
        "稲妻",
        "雲",
        "オーロラ"
      ],
      "h41": [
        "月",
        "地球にいつも同じ面を見せている",
        "まんまるにも、細い弓の形にもなる",
        "夜空で光っている",
        "太陽",
        "星",
        "彗星"
      ],
      "h42": [
        "雪",
        "結晶はひとつひとつ形がちがう",
        "わたしで、かまくらや砦を作る",
        "冬に降る、白くて冷たいもの",
        "雨",
        "ひょう",
        "霜"
      ],
      "h43": [
        "川",
        "源と河口がある",
        "わたしの上を船が進む",
        "山から海へ流れていく",
        "湖",
        "海",
        "小川"
      ],
      "h44": [
        "サボテン",
        "水がなくても長く生きられる",
        "砂漠にも窓辺にも育つ",
        "とげだらけ",
        "アロエ",
        "ヤシ",
        "ヒナギク"
      ],
      "h45": [
        "ヒマワリ",
        "種から油がとれる",
        "太陽のほうを向く",
        "種がぎっしりの大きな黄色い花",
        "ヒナギク",
        "チューリップ",
        "タンポポ"
      ],
      "h46": [
        "オーク",
        "千年以上生きることもある",
        "強さの象徴とされる",
        "どんぐりがなる",
        "シラカバ",
        "マツ",
        "カエデ"
      ],
      "h47": [
        "島",
        "国がまるごと乗ることもある",
        "船か飛行機で行く",
        "四方を水に囲まれている",
        "半島",
        "サンゴ礁",
        "岬"
      ],
      "h48": [
        "滝",
        "遠くからでも音が聞こえる",
        "いちばん高いものはベネズエラにある",
        "川が崖から落ちるところ",
        "噴水",
        "間欠泉",
        "泉"
      ],
      "h49": [
        "医師",
        "働き始める前に何年も勉強する",
        "白衣を着ている",
        "病気の人を治す",
        "看護師",
        "薬剤師",
        "獣医"
      ],
      "h50": [
        "消防士",
        "昼も夜も、出動に備えている",
        "水とはしごを使って働く",
        "火を消す",
        "警察官",
        "救助隊員",
        "建設作業員"
      ],
      "h51": [
        "料理人",
        "作ったものはすべて味見する",
        "熱いコンロの前で働く",
        "レストランで料理を作る",
        "パン職人",
        "ウェイター",
        "パティシエ"
      ],
      "h52": [
        "先生",
        "夜にノートを採点する",
        "黒板の前に立つ",
        "学校で子どもたちに教える",
        "校長",
        "司書",
        "保育士"
      ],
      "h53": [
        "パイロット",
        "仕事場はコックピット",
        "スピーカーで乗客に話しかける",
        "飛行機を操縦する",
        "船長",
        "運転手",
        "宇宙飛行士"
      ],
      "h54": [
        "郵便配達員",
        "担当地区の住所をすべて知っている",
        "大きなかばんを持ち歩く",
        "手紙や小包を届ける",
        "宅配便の配達員",
        "タクシー運転手",
        "店員"
      ],
      "h55": [
        "庭師",
        "何をいつ植えればいいか知っている",
        "道具はじょうろと剪定ばさみ",
        "花や木の世話をする",
        "農家",
        "森林官",
        "花屋"
      ],
      "h56": [
        "写真家",
        "一瞬をとらえる",
        "みんなに「動かないで」とお願いする",
        "カメラで写真を撮るのが仕事",
        "画家",
        "記者",
        "映像カメラマン"
      ],
      "h57": [
        "釣り人",
        "夜明け前に起きて、長いあいだ待つ",
        "さおと根気が必要",
        "魚を釣る",
        "農家",
        "船乗り",
        "羊飼い"
      ],
      "h58": [
        "宇宙飛行士",
        "地上で長いあいだ訓練する",
        "宇宙服を着る",
        "宇宙へ飛び立つ",
        "パイロット",
        "天文学者",
        "技術者"
      ],
      "h59": [
        "建築家",
        "わたしの仕事は街じゅうで見られる",
        "図面を描く",
        "家を設計する",
        "建設作業員",
        "デザイナー",
        "技術者"
      ],
      "h60": [
        "歯医者",
        "わたしのいすをこわがる人が多い",
        "ドリルを使って働く",
        "歯を治す",
        "外科医",
        "眼科医",
        "小児科医"
      ]
    },
    "dreams": {
      "d01": [
        "10年後に住みたい場所は？",
        "海のそば",
        "山の中",
        "大きな街",
        "静かな村"
      ],
      "d02": [
        "いつか住みたい家は？",
        "居心地のいいマンション",
        "庭つきの一軒家",
        "湖のほとりの小さな家",
        "歴史のある古い家"
      ],
      "d03": [
        "庭で育てたいものは？",
        "リンゴの木",
        "バラ",
        "野菜とハーブ",
        "イチゴ"
      ],
      "d04": [
        "飼ってみたいペットは？",
        "ネコ",
        "オウム",
        "水槽の魚",
        "カメ"
      ],
      "d05": [
        "まず行ってみたい国は？",
        "ペルー",
        "モロッコ",
        "アイスランド",
        "ニュージーランド"
      ],
      "d06": [
        "どうやって旅をしたい？",
        "列車で",
        "車で",
        "飛行機で",
        "船で"
      ],
      "d07": [
        "学んでみたい言語は？",
        "アラビア語",
        "フランス語",
        "スペイン語",
        "中国語"
      ],
      "d08": [
        "できるようになりたいことは？",
        "絵を描く",
        "裁縫",
        "水泳",
        "プログラミング"
      ],
      "d09": [
        "マスターしたい料理は？",
        "中央アジアのピラフ",
        "手作りパン",
        "寿司",
        "バクラヴァ"
      ],
      "d10": [
        "週末の過ごし方は？",
        "自然の中で",
        "家で本を読む",
        "家族を訪ねる",
        "知らない街へ"
      ],
      "d11": [
        "理想の週末の朝は？",
        "朝早くの散歩",
        "ゆっくり朝ごはん",
        "外の空気の中で体操",
        "ベランダでお茶"
      ],
      "d12": [
        "貯金して手に入れたいものは？",
        "自分の家",
        "大きな旅",
        "車",
        "学び"
      ],
      "d13": [
        "してみたい仕事は？",
        "自分のビジネス",
        "大きな会社で働く",
        "在宅の仕事",
        "人を助ける仕事"
      ],
      "d14": [
        "人の役に立つ方法は？",
        "ボランティア",
        "動物を助ける",
        "子どもに教える",
        "木を植える"
      ],
      "d15": [
        "つくりたい家族の習慣は？",
        "日曜日にみんなでお昼",
        "ボードゲームの夜",
        "週末の散歩",
        "家族のアルバム"
      ],
      "d16": [
        "理想のキッチンは？",
        "大きな家族用キッチン",
        "明るくて居心地がいい",
        "庭が見える",
        "小さくても使いやすい"
      ],
      "d17": [
        "自分の目で見てみたいものは？",
        "オーロラ",
        "ギザのピラミッド",
        "ヴィクトリアの滝",
        "ヒマラヤ"
      ],
      "d18": [
        "夜にしたいことは？",
        "読書",
        "新しい料理を作る",
        "語学の勉強",
        "公園の散歩"
      ],
      "d19": [
        "始めてみたい趣味は？",
        "写真",
        "陶芸",
        "刺しゅう",
        "ガーデニング"
      ],
      "d20": [
        "週末に出かけたい場所は？",
        "森",
        "湖",
        "近くの町",
        "山"
      ],
      "d21": [
        "理想の仕事スペースは？",
        "窓のそば",
        "本棚に囲まれて",
        "緑の植物がいっぱい",
        "ほとんど何もない"
      ],
      "d22": [
        "次に学んでみたい分野は？",
        "医学",
        "歴史",
        "経済学",
        "デザイン"
      ],
      "d23": [
        "植えてみたい木は？",
        "オーク",
        "リンゴの木",
        "オリーブの木",
        "ナツメヤシ"
      ],
      "d24": [
        "お客さまに作りたい料理は？",
        "手作りのパイ",
        "大鍋のピラフ",
        "家に伝わるスープ",
        "新鮮なサラダ"
      ],
      "d25": [
        "訪ねてみたい街は？",
        "イスタンブール",
        "パリ",
        "ロンドン",
        "カイロ"
      ],
      "d26": [
        "夏の過ごし方は？",
        "海辺で",
        "山で",
        "田舎の家で",
        "国内を旅して"
      ],
      "d27": [
        "飼ってみたい鳥は？",
        "カナリア",
        "セキセイインコ",
        "ハト",
        "キンカチョウ"
      ],
      "d28": [
        "挑戦してみたいスポーツは？",
        "水泳",
        "乗馬",
        "アーチェリー",
        "クライミング"
      ],
      "d29": [
        "集めてみたい本は？",
        "百科事典",
        "古典文学",
        "旅の本",
        "料理の本"
      ],
      "d30": [
        "自分の手で作りたいものは？",
        "家具",
        "自分の器",
        "手編みのブランケット",
        "巣箱"
      ],
      "d31": [
        "ピクニックをしたい場所は？",
        "川岸",
        "庭",
        "森の空き地",
        "山"
      ],
      "d32": [
        "いつか使いたい移動手段は？",
        "電気自動車",
        "自転車",
        "大きなファミリーカー",
        "車なしの暮らし"
      ],
      "d33": [
        "老後にしたいことは？",
        "庭仕事",
        "旅行",
        "孫と過ごす時間",
        "新しいことを学ぶ"
      ],
      "d34": [
        "してみたい善い行いは？",
        "井戸を作る",
        "猫の保護施設を手伝う",
        "学校のために本を集める",
        "並木を植える"
      ],
      "d35": [
        "週末の朝ごはんは？",
        "パンケーキ",
        "オムレツ",
        "フルーツ入りのおかゆ",
        "チーズパンケーキ"
      ],
      "d36": [
        "お客さまを迎えたい場所は？",
        "キッチン",
        "リビング",
        "テラス",
        "庭"
      ],
      "d37": [
        "見てみたい自然の絶景は？",
        "グランドキャニオン",
        "ナイアガラの滝",
        "バイカル湖",
        "サハラ砂漠"
      ],
      "d38": [
        "身につけたい家のスキルは？",
        "自分で修理",
        "裁縫",
        "パン焼き",
        "庭の手入れ"
      ],
      "d39": [
        "話せるようになりたい言語の数は？",
        "2つ",
        "3つ",
        "5つ",
        "できるだけたくさん"
      ],
      "d40": [
        "家の壁の色は？",
        "白",
        "ベージュ",
        "薄い緑",
        "水色"
      ],
      "d41": [
        "水槽で飼いたい魚は？",
        "金魚",
        "グッピー",
        "ナマズ",
        "エンゼルフィッシュ"
      ],
      "d42": [
        "両親に贈りたい旅は？",
        "海辺での休暇",
        "街めぐり",
        "山への旅",
        "列車の旅"
      ],
      "d43": [
        "自由な時間にしたいことは？",
        "絵を描く",
        "読書",
        "スポーツ",
        "手芸"
      ],
      "d44": [
        "旅をしたい季節は？",
        "春",
        "夏",
        "秋",
        "冬"
      ],
      "d45": [
        "冬に向けて作りおきしたいものは？",
        "ジャム",
        "ピクルス",
        "ドライフルーツ",
        "フルーツのコンポート"
      ],
      "d46": [
        "やってみたい別の仕事は？",
        "料理人",
        "プログラマー",
        "翻訳者",
        "木工職人"
      ],
      "d47": [
        "よく知りたい国は？",
        "マレーシア",
        "イタリア",
        "カナダ",
        "インドネシア"
      ],
      "d48": [
        "庭にあったらいいものは？",
        "小さな噴水",
        "家庭菜園",
        "あずまや",
        "ブランコ"
      ],
      "d49": [
        "うまくいったときのお祝いは？",
        "家族で夕食",
        "自然の中へお出かけ",
        "新しい本",
        "人のための善い行い"
      ],
      "d50": [
        "子どもに伝えたいものは？",
        "本を好きな心",
        "料理の腕",
        "母語",
        "自然を大切にする心"
      ]
    }
  },
  "ko": {
    "text": {
      "homeLink": "둘이 하는 게임",
      "eyebrow": "GLOWLETTER · 둘이 하는 게임",
      "title": "함께 놀아요",
      "close": "닫기",
      "lead": "소중한 사람에게 게임을 보내 보세요. 링크로 하는 게임은 무료이고 계정이 필요 없어요.",
      "quizTitle": "나를 얼마나 잘 알아?",
      "quizNote": "나에 대한 질문에 답하고, 가까운 사람이 맞혀 보게 하세요. 결과는 나에게 와요.",
      "create": "퀴즈 만들기",
      "soon": "곧 출시",
      "soonTitle": "다음 게임을 준비 중이에요",
      "duel": "누가 더 빠를까 대결",
      "loves": "우리가 좋아하는 것",
      "cards": "둘이 하는 기억력 카드",
      "who": "우리 중 누구?",
      "phrase": "문장 완성하기",
      "myQuizzes": "내 퀴즈",
      "noQuizzes": "아직 퀴즈가 없어요. 첫 퀴즈는 몇 분이면 만들 수 있어요.",
      "forWhom": "{name}에게",
      "noRecipient": "퀴즈",
      "resultsCount": "결과 {count}개",
      "newResults": "새 결과 {count}",
      "noResults": "아직 아무도 참여하지 않았어요.",
      "anonymous": "이름 없음",
      "results": "결과",
      "copyLink": "링크 복사",
      "share": "보내기",
      "deleteQuiz": "퀴즈 삭제",
      "deleteConfirm": "이 퀴즈와 결과를 삭제할까요? 링크가 더 이상 작동하지 않아요.",
      "deleted": "퀴즈를 삭제했어요",
      "linkCopied": "링크를 복사했어요",
      "back": "뒤로",
      "next": "다음",
      "stepNames": "1/2단계 · 이름",
      "yourName": "내 이름",
      "yourNamePlaceholder": "이름이 무엇인가요",
      "recipient": "받는 사람 · 선택",
      "recipientPlaceholder": "소중한 사람의 이름",
      "nameRequired": "이름을 입력하세요.",
      "forbiddenName": "일반적인 이름을 입력하세요.",
      "stepAnswers": "2/2단계 · 나의 답",
      "answersLead": "나에게 맞는 것을 고르세요. 질문은 언제든 바꿀 수 있어요.",
      "swap": "다른 질문",
      "progress": "{total}개 중 {done}개 답함",
      "answerAll": "모든 질문에 답을 고르세요.",
      "finish": "링크 받기",
      "creating": "퀴즈를 만드는 중…",
      "createdTitle": "퀴즈가 준비됐어요!",
      "createdLead": "링크를 보내세요. 상대가 답하면 '내 퀴즈'에 결과가 나타나요.",
      "shareText": "{name} 님이 '나를 얼마나 잘 알아?' 게임에 초대했어요",
      "signInTitle": "로그인이 필요해요",
      "signInNote": "결과가 나에게 오도록 퀴즈는 내 계정에 저장돼요.",
      "signIn": "로그인",
      "premiumNote": "게임 만들기는 전체 이용권에 포함돼요. 링크로 하는 게임은 누구나 무료예요.",
      "failed": "실패했어요. 연결을 확인하고 다시 시도하세요.",
      "rateLimited": "시도가 너무 많아요. 나중에 다시 시도하세요.",
      "playEyebrow": "둘이 하는 게임",
      "playInvite": "{name} 님이 게임에 초대했어요",
      "playLead": "질문 {count}개. 답을 맞혀 보세요. 마지막에 몇 개가 일치했는지 볼 수 있어요.",
      "playName": "내 이름 · 선택",
      "playNamePlaceholder": "나라는 걸 알 수 있게",
      "start": "시작",
      "playLoading": "게임을 불러오는 중…",
      "playMissing": "이 게임을 이용할 수 없어요. 링크가 삭제되었거나 만료되었어요.",
      "playOffline": "게임을 하려면 인터넷 연결이 필요해요.",
      "retry": "다시 시도",
      "questionOf": "{total}개 중 {n}번째 질문",
      "asks": "{name} 님의 질문",
      "counting": "일치하는 답을 세는 중…",
      "scoreOf": "{total}개 중 {score}개",
      "tierAll": "완벽해요! 누구보다 서로를 잘 알아요",
      "tierHigh": "서로를 정말 잘 알고 있어요",
      "tierMid": "나쁘지 않아요! 아직 알아갈 게 있어요",
      "tierLow": "앞으로 즐거운 발견이 많을 거예요",
      "sentTo": "{name} 님이 결과를 보게 돼요",
      "review": "나의 답",
      "rightAnswer": "정답",
      "makeOwn": "내 퀴즈 만들기",
      "home": "홈",
      "resultToast": "{name}: '나를 얼마나 잘 알아?'에서 {total}개 중 {score}개",
      "ownerAnswers": "만든 사람의 답",
      "playerAnswers": "{name} 님의 답",
      "paywallTitle": "게임, 즐거움<br><em>그리고 편지</em>",
      "groupGames": "게임",
      "groupFun": "즐거움",
      "groupLetters": "편지",
      "featQuiz": "'나를 얼마나 잘 알아?' — 결과가 나에게 와요",
      "featGamesSoon": "누가 더 빠를까 대결, '우리가 좋아하는 것', 곰돌이 기억력 카드",
      "featFunSoon": "'우리 중 누구?'와 커플 노트가 있는 '문장 완성하기'",
      "featCollection": "15개 언어로 된 편지와 시 전체 컬렉션",
      "featMoments": "기념일, 알림, 원하는 날에 열리는 QR 편지",
      "featAudio": "편지 속 나의 오디오와 받는 사람의 답장",
      "groupTalk": "친구와 통화",
      "featCall": "친구와 통화: 음성, 스피커폰, 움직이는 반응",
      "ynTitle": "예스 노",
      "ynNote": "둘이 하는 실시간 게임: 카드마다 5초. 제때 답하면 상대의 답을 볼 수 있어요.",
      "ynCreate": "방 만들기",
      "ynWaiting": "{name} 님이 링크를 열기를 기다리는 중…",
      "ynWaitingAny": "상대를 기다리는 중…",
      "ynShareText": "{name} 님이 실시간 게임 '예스 노'에 초대했어요",
      "ynPartnerHere": "{name} 님이 들어왔어요!",
      "ynStart": "게임 시작",
      "ynWaitHost": "{name} 님이 곧 게임을 시작해요",
      "ynYes": "예스",
      "ynNo": "노",
      "ynMissed": "시간 초과 — 이 카드는 닫혀 있어요",
      "ynMatch": "같은 답!",
      "ynRound": "{total}장 중 {n}번째 카드",
      "ynAnswered": "답을 보냈어요. 상대를 기다리는 중…",
      "ynFinal": "{total}장 중 {score}장 일치",
      "ynFinalHigh": "말하지 않아도 통하는 사이",
      "ynFinalMid": "다르지만 그래서 더 가까운 사이",
      "ynAgain": "다시 하기",
      "ynLeft": "상대의 연결이 끊겼어요. 돌아오기를 기다리는 중…",
      "ynYou": "나",
      "ynOffline": "게임에 연결할 수 없어요. 인터넷을 확인하고 링크를 다시 열어 주세요.",
      "ynJoin": "게임 참여",
      "ynJoinLead": "{name} 님이 기다리고 있어요. 답은 5초 안에!",
      "ynStepNames": "내 이름과 상대 이름",
      "ynRoomReady": "방이 준비됐어요 — 링크를 보내세요",
      "ynStayHere": "이 화면을 닫지 마세요. 링크가 열리면 게임이 시작돼요.",
      "featYesNo": "실시간 게임 '예스 노' — 답은 5초",
      "ynPartnerMissed": "답 없음 — 시간 초과",
      "lvTitle": "우리가 좋아하는 것",
      "lvNote": "둘이 하는 실시간 게임: 그림 4장 중 가장 좋아하는 것을 10초 안에 골라요. 같은 걸 골라도 돼요!",
      "lvShareText": "{name} 님이 실시간 게임 '우리가 좋아하는 것'에 초대했어요",
      "lvJoinLead": "{name} 님이 기다리고 있어요. 가장 좋아하는 그림을 골라요!",
      "lvRound": "{total}개 주제 중 {n}번째",
      "lvPick": "가장 좋아하는 것을 골라요",
      "lvBoth": "둘 다 고른 것: {item}",
      "lvCommon": "둘 다 좋아하는 것",
      "lvDiff": "취향이 달라서 더 재미있어요!",
      "lvFinalHigh": "공통점이 정말 많아요!",
      "lvFinalMid": "다르지만 서로를 채워 주는 사이",
      "featLoves": "실시간 게임 '우리가 좋아하는 것' — 그림 4장, 함께 고르기",
      "featGamesSoon2": "누가 더 빠를까 대결과 곰돌이 기억력 카드",
      "mcTitle": "곰돌이 기억력 카드",
      "mcNote": "둘이 하는 실시간 기억력 게임: 번갈아 카드 두 장을 뒤집어 짝을 찾아요. 8장부터 16장까지 세 단계.",
      "mcShareText": "{name} 님이 실시간 게임 '곰돌이 기억력 카드'에 초대했어요",
      "mcJoinLead": "{name} 님이 기다리고 있어요. 번갈아 짝을 찾아요!",
      "mcLevel": "{total}단계 중 {n}단계",
      "mcTurnYou": "내 차례 — 카드 두 장을 뒤집어요",
      "mcTurnThem": "{name} 님 차례",
      "mcPairs": "찾은 짝: {found}/{total}",
      "mcLevelDone": "모든 짝을 찾았어요!",
      "mcTimeUp": "이번 단계 시간이 끝났어요",
      "mcNext": "다음: {n}단계",
      "mcFinal": "찾은 짝: {found}/{total}",
      "mcFinalHigh": "환상의 팀!",
      "mcFinalMid": "좋은 게임! 한 번 더?",
      "featCards": "실시간 게임 '곰돌이 기억력 카드' — 함께 짝 찾기",
      "featGamesSoon3": "누가 더 빠를까 대결",
      "duTitle": "누가 더 빠를까",
      "duNote": "실시간 대결: 단어 하나와 그림 네 장. 맞는 그림을 먼저 눌러요 — 잘못 누르면 그 라운드는 져요.",
      "duShareText": "{name} 님이 실시간 대결 “누가 더 빠를까”에 도전장을 보냈어요",
      "duJoinLead": "{name} 님이 기다리고 있어요. 맞는 그림을 더 빨리 찾아봐요!",
      "duRound": "라운드 {n}/{total}",
      "duFind": "찾기: {item}",
      "duYouWon": "내가 더 빨랐어요!",
      "duTheyWon": "{name} 님이 더 빨랐어요",
      "duWrong": "다른 그림이에요 — 이번 라운드는 졌어요",
      "duNobody": "아무도 제시간에 못 찾았어요",
      "duScore": "나 {you} : {them} {name}",
      "duFinalWin": "승리! 오늘 눈썰미가 대단해요.",
      "duFinalLose": "이번엔 {name} 님의 승리 — 한 판 더 할까요?",
      "duFinalDraw": "무승부 — 완벽한 호흡이에요!",
      "duSeconds": "{s}초",
      "featDuel": "실시간 대결 “누가 더 빠를까” — 그림을 먼저 찾아요",
      "whoTitle": "우리 중 누구?",
      "whoNote": "둘이 하는 실시간 게임: 질문 하나에 “나” 또는 상대의 이름을 눌러요. 서로에 대한 생각이 같은지 확인해 봐요.",
      "whoShareText": "{name} 님이 실시간 게임 “우리 중 누구?”에 초대했어요",
      "whoJoinLead": "{name} 님이 기다리고 있어요. 솔직하게 답하고 비교해 봐요!",
      "whoRound": "질문 {n}/{total}",
      "whoMe": "나",
      "whoAgree": "같은 생각이에요: {name}",
      "whoDiffer": "생각이 달라요 — 이야기해 봐요!",
      "whoFinal": "{total}번 중 {score}번 생각이 같았어요",
      "whoFinalHigh": "서로를 정말 잘 알고 있네요!",
      "whoFinalMid": "나눌 이야기가 많아요 — 그것도 멋져요",
      "featWho": "실시간 게임 “우리 중 누구?” — 생각이 같은지 확인해요",
      "phTitle": "문장 완성하기",
      "phNote": "둘이 하는 실시간 게임: 같은 따뜻한 문장을 각자 자기 말로 완성하고, 서로의 답을 읽어요.",
      "phShareText": "{name} 님이 실시간 게임 “문장 완성하기”에 초대했어요",
      "phJoinLead": "{name} 님이 기다리고 있어요. 문장을 자기 말로 완성해 봐요!",
      "phRound": "문장 {n}/{total}",
      "phPlaceholder": "이어서 써 보세요…",
      "phDone": "완료",
      "phWaiting": "{name} 님을 기다리는 중…",
      "phSkipped": "답 없음",
      "phSave": "커플 북에 저장",
      "phSaved": "커플 북에 저장했어요",
      "phForbidden": "링크나 거친 말 없이 써 주세요.",
      "phNext": "다음 문장",
      "phFinal": "함께 완성한 문장: {count}",
      "phFinalLead": "마음에 드는 답을 커플 북에 저장해요.",
      "featPhrase": "실시간 게임 “문장 완성하기”와 커플 북",
      "bookTitle": "커플 북",
      "bookNote": "“문장 완성하기”의 가장 따뜻한 답을 계정에 보관해요.",
      "bookOpen": "책 열기",
      "bookEmpty": "아직 책이 비어 있어요. “문장 완성하기”를 하고 마음에 드는 답을 저장해 봐요.",
      "bookDelete": "삭제",
      "bookDeleteConfirm": "이 페이지를 책에서 삭제할까요?",
      "bookYou": "나",
      "inviteTitle": "친구 초대",
      "inviteNote": "친구에게 게임 메시지가 전송돼요.",
      "invite": "초대",
      "invited": "초대함",
      "inviteNone": "“친구” 메뉴에서 친구를 추가하면 한 번에 초대할 수 있어요.",
      "inviteSent": "{name} 님에게 초대를 보냈어요",
      "truth": "진짜일까 가짜일까",
      "tfTitle": "진짜일까 가짜일까",
      "tfNote": "둘이 하는 실시간 게임: 세상의 놀라운 사실들. 12초 안에 진짜인지 가짜인지 골라요. 맞힐 때마다 1점!",
      "tfShareText": "{name} 님이 실시간 게임 “진짜일까 가짜일까”에 초대했어요",
      "tfJoinLead": "{name} 님이 기다리고 있어요. 진짜일까 가짜일까 — 빨리 정해요!",
      "tfRound": "사실 {n}/{total}",
      "tfTrue": "진짜",
      "tfFalse": "가짜",
      "tfIsTrue": "진짜예요!",
      "tfIsFalse": "가짜예요!",
      "tfFirstYou": "내가 먼저 맞혔어요!",
      "tfFirstThem": "{name} 님이 먼저 맞혔어요",
      "tfFinalWin": "승리! 세상에 대해 더 많이 알고 있네요.",
      "tfFinalLose": "이번엔 {name} 님이 더 많이 알았어요 — 한 판 더 할까요?",
      "tfFinalDraw": "무승부 — 둘 다 똑같이 잘 아네요!",
      "featTruth": "실시간 게임 “진짜일까 가짜일까” — 세상의 놀라운 사실들",
      "countries": "나라 맞히기",
      "coTitle": "나라 맞히기",
      "coNote": "둘이 함께하는 실시간 게임: 곰이 세계를 여행해요. 10초 안에 어느 나라인지 맞혀 보세요! 정답마다 1점.",
      "coShareText": "{name} 님이 실시간 게임 “나라 맞히기”에 초대했어요",
      "coJoinLead": "{name} 님이 기다리고 있어요. 그림을 보고 나라를 맞혀 보세요!",
      "coRound": "나라 {n}/{total}",
      "coAsk": "여기는 어느 나라일까요?",
      "coFinalWin": "승리! 진정한 여행가네요.",
      "coFinalLose": "이번엔 {name} 님이 세계를 더 잘 아네요 — 한 판 더 할까요?",
      "coFinalDraw": "무승부 — 두 분 모두 세계를 잘 아시네요!",
      "featCountries": "실시간 게임 “나라 맞히기” — 40개국",
      "hints": "힌트로 맞히기",
      "dreams": "꿈과 계획",
      "hiTitle": "힌트로 맞히기",
      "hiNote": "둘이 하는 실시간 게임: 힌트 세 개가 하나씩 열려요. 첫 번째 힌트에서 맞히면 3점, 두 번째는 2점, 세 번째는 1점!",
      "hiShareText": "{name} 님이 실시간 게임 “힌트로 맞히기”에 초대했어요",
      "hiJoinLead": "{name} 님이 기다리고 있어요. 최대한 빨리 맞혀 봐요!",
      "hiRound": "수수께끼 {n}/{total}",
      "hiAsk": "무엇일까요?",
      "hiClue": "힌트 {n}",
      "hiPoints": "+{n}점",
      "hiNoPoints": "이번에는 점수가 없어요",
      "hiFinalWin": "승리! 정말 잘 맞히네요.",
      "hiFinalLose": "이번엔 {name} 님이 더 잘 맞혔어요 — 한 판 더 할까요?",
      "hiFinalDraw": "무승부 — 둘 다 정말 잘 맞혀요!",
      "featHints": "실시간 게임 “힌트로 맞히기” — 3점, 2점 또는 1점",
      "drTitle": "꿈과 계획",
      "drNote": "둘이 하는 실시간 게임: 집, 여행, 배움, 취미. 원하는 것을 고르고 꿈이 같은지 확인해요.",
      "drShareText": "{name} 님이 실시간 게임 “꿈과 계획”에 초대했어요",
      "drJoinLead": "{name} 님이 기다리고 있어요. 정말 원하는 것을 골라요!",
      "drRound": "질문 {n}/{total}",
      "drPick": "원하는 것을 골라요",
      "drBoth": "같은 꿈: {item}",
      "drDiff": "꿈이 달라요 — 서로 이유를 이야기해 봐요!",
      "drFinalHigh": "같은 꿈이 정말 많아요!",
      "drFinalMid": "꿈은 달라도 나눌 이야기가 많아요",
      "drCommon": "우리의 같은 꿈",
      "featDreams": "실시간 게임 “꿈과 계획” — 꿈이 같을까요?",
      "modestTitle": "건전 모드",
      "modestNote": "감정, 포옹, 데이트에 관한 질문 없이 친근한 질문만"
    },
    "questions": {
      "q01": [
        "내가 좋아하는 계절은?",
        "봄",
        "여름",
        "가을",
        "겨울"
      ],
      "q02": [
        "아침으로 고를 것은?",
        "커피와 크루아상",
        "죽이나 오트밀",
        "달걀 요리",
        "차만"
      ],
      "q03": [
        "나의 완벽한 휴일은?",
        "집에서 담요 덮고",
        "공원 산책",
        "교외 나들이",
        "친구들과 함께"
      ],
      "q04": [
        "가 보고 싶은 곳은?",
        "바다",
        "산",
        "대도시",
        "시골의 아늑한 집"
      ],
      "q05": [
        "좋아하는 아이스크림 맛은?",
        "바닐라",
        "초콜릿",
        "딸기",
        "피스타치오"
      ],
      "q06": [
        "나를 가장 빨리 기분 좋게 하는 것은?",
        "포옹",
        "깜짝 선물",
        "다정한 말",
        "맛있는 음식"
      ],
      "q07": [
        "나는 어느 쪽이냐면…",
        "아침형",
        "저녁형",
        "잘 수 있을 때 자는 편",
        "낮잠을 사랑하는 편"
      ],
      "q08": [
        "오늘 밤 고를 영화는?",
        "코미디",
        "로맨스",
        "추리물",
        "애니메이션"
      ],
      "q09": [
        "좋아하는 색은?",
        "빨강",
        "파랑",
        "초록",
        "분홍"
      ],
      "q10": [
        "가장 무서워하는 것은?",
        "거미",
        "높은 곳",
        "어둠",
        "지각"
      ],
      "q11": [
        "좋아하는 꽃은?",
        "장미",
        "튤립",
        "작약",
        "데이지"
      ],
      "q12": [
        "슬플 때 나는?",
        "가까운 사람에게 전화해요",
        "단것을 먹어요",
        "산책을 나가요",
        "잠을 자요"
      ],
      "q13": [
        "나와 가장 닮은 동물은?",
        "아기 고양이",
        "강아지",
        "아기 곰",
        "아기 여우"
      ],
      "q14": [
        "나에게 최고의 선물은?",
        "손으로 만든 것",
        "여행",
        "액세서리",
        "책"
      ],
      "q15": [
        "좋아하는 음료는?",
        "홍차",
        "녹차",
        "커피",
        "코코아"
      ],
      "q16": [
        "좋아하는 간식은?",
        "초콜릿",
        "감자칩",
        "과일",
        "케이크"
      ],
      "q17": [
        "여행에서 고르는 것은?",
        "박물관",
        "해변",
        "현지 음식",
        "계획 없이 걷기"
      ],
      "q18": [
        "저녁을 보내는 방법은?",
        "책과 함께",
        "드라마와 함께",
        "수다 떨며",
        "산책하며"
      ],
      "q19": [
        "좋아하는 날씨는?",
        "맑은 날",
        "따뜻한 비",
        "눈 오는 날",
        "산들바람"
      ],
      "q20": [
        "나에게 어울리는 초능력은?",
        "하늘을 나는 것",
        "마음을 읽는 것",
        "시간을 멈추는 것",
        "순간 이동"
      ],
      "q21": [
        "소중한 사람에게서 가장 중요한 것은?",
        "믿음",
        "배려",
        "유머",
        "응원"
      ],
      "q22": [
        "가장 기다리는 날은?",
        "새해",
        "내 생일",
        "여름휴가",
        "밸런타인데이"
      ],
      "q23": [
        "'사랑해'를 가장 자주 표현하는 방법은?",
        "말로",
        "행동으로",
        "포옹으로",
        "선물로"
      ],
      "q24": [
        "카페에서 주문할 것은?",
        "파스타",
        "초밥",
        "샐러드",
        "디저트"
      ],
      "q25": [
        "내가 좋아하는 하루 중 시간은?",
        "아침",
        "낮",
        "저녁",
        "밤"
      ],
      "q26": [
        "내가 고를 요리는?",
        "이탈리아 요리",
        "일식",
        "집밥",
        "멕시코 요리"
      ],
      "q27": [
        "생각이 가장 잘 되는 곳은?",
        "샤워할 때",
        "산책할 때",
        "이동할 때",
        "잠들기 전"
      ],
      "q28": [
        "아침에 가장 먼저 하는 일은?",
        "휴대폰 보기",
        "물 마시기",
        "커피 내리기",
        "조금 더 뒹굴기"
      ],
      "q29": [
        "좋아하는 과일은?",
        "사과",
        "바나나",
        "망고",
        "수박"
      ],
      "q30": [
        "나에게 어울리는 취미는?",
        "그림 그리기",
        "요리",
        "운동",
        "독서"
      ],
      "q31": [
        "생일은 어떻게 보내고 싶어?",
        "신나는 파티",
        "둘만의 저녁",
        "여행",
        "집에서 조용한 저녁"
      ],
      "q32": [
        "깜짝 이벤트에 대한 생각은?",
        "정말 좋아",
        "조금 떨려",
        "남에게 해 주는 게 좋아",
        "미리 아는 게 좋아"
      ],
      "q33": [
        "좋아하는 디저트는?",
        "케이크",
        "아이스크림",
        "쿠키",
        "사탕"
      ],
      "q34": [
        "무인도에 가져갈 것은?",
        "책",
        "휴대폰",
        "담요",
        "카메라"
      ],
      "q35": [
        "힘든 하루 뒤에 쉬는 방법은?",
        "따뜻한 목욕",
        "드라마",
        "산책",
        "가까운 사람과 대화"
      ],
      "q36": [
        "좋아하는 교통수단은?",
        "기차",
        "비행기",
        "자동차",
        "자전거"
      ],
      "q37": [
        "어릴 때 좋아한 놀이는?",
        "숨바꼭질",
        "술래잡기",
        "블록 놀이",
        "그림 그리기"
      ],
      "q38": [
        "나와 닮은 동화는?",
        "신데렐라",
        "어린 왕자",
        "곰돌이 푸",
        "이상한 나라의 앨리스"
      ],
      "q39": [
        "소중한 사람을 기쁘게 한다면?",
        "깜짝 선물",
        "카드",
        "여행",
        "저녁 식사"
      ],
      "q40": [
        "가장 자주 찍는 사진은?",
        "셀카",
        "자연",
        "음식",
        "거의 안 찍어"
      ],
      "q41": [
        "집에서 가장 좋아하는 곳은?",
        "침대",
        "부엌",
        "소파",
        "베란다"
      ],
      "q42": [
        "사람을 보면 가장 먼저 보는 것은?",
        "미소",
        "눈",
        "목소리",
        "유머 감각"
      ],
      "q43": [
        "나를 가장 빨리 웃게 하는 것은?",
        "웃긴 영상",
        "가까운 사람의 농담",
        "어색한 상황",
        "동물"
      ],
      "q44": [
        "더운 여름날 마시는 것은?",
        "레모네이드",
        "아이스티",
        "주스",
        "얼음물"
      ],
      "q45": [
        "나와 가장 닮은 원소는?",
        "물",
        "불",
        "흙",
        "바람"
      ],
      "q46": [
        "좋아하는 이야기는?",
        "모험",
        "사랑 이야기",
        "SF",
        "실화"
      ],
      "q47": [
        "비 오는 날은 어떻게 보내?",
        "책 읽기",
        "잠자기",
        "영화 보기",
        "우산 쓰고 산책"
      ],
      "q48": [
        "선물에서 가장 중요한 것은?",
        "마음",
        "쓸모",
        "예쁨",
        "놀라움"
      ],
      "q49": [
        "감자 요리라면?",
        "으깬 감자",
        "감자튀김",
        "구운 감자",
        "감자칩"
      ],
      "q50": [
        "새로운 도시에서 먼저 가는 곳은?",
        "카페",
        "박물관",
        "공원",
        "쇼핑"
      ],
      "q51": [
        "잠이 안 올 때는?",
        "책 읽기",
        "휴대폰 보기",
        "양 세기",
        "따뜻한 우유 마시기"
      ],
      "q52": [
        "중요한 날을 준비하는 방법은?",
        "미리 다 계획해",
        "마지막 순간에 해",
        "도움을 청해",
        "긴장해서 잠을 못 자"
      ],
      "q53": [
        "보는 걸 좋아하는 스포츠는?",
        "축구",
        "테니스",
        "피겨스케이팅",
        "스포츠는 안 봐"
      ],
      "q54": [
        "나에게 어울리는 반려동물은?",
        "고양이",
        "강아지",
        "앵무새",
        "햄스터"
      ],
      "q55": [
        "어떤 메시지를 보내?",
        "긴 메시지",
        "짧은 메시지",
        "이모티콘 가득",
        "음성 메시지"
      ],
      "q56": [
        "가장 오래 간직한 선물은?",
        "편지",
        "장난감",
        "사진",
        "액세서리"
      ],
      "q57": [
        "고른다면?",
        "벽난로 옆 차 한 잔",
        "잔디밭 소풍",
        "바닷가 산책",
        "영화관"
      ],
      "q58": [
        "가장 기쁜 칭찬은?",
        "외모 칭찬",
        "똑똑함 칭찬",
        "다정함 칭찬",
        "유머 칭찬"
      ],
      "q59": [
        "나의 완벽한 아침은?",
        "침대에서 아침 식사",
        "이른 아침 달리기",
        "늦잠",
        "베란다에서 커피"
      ],
      "q60": [
        "배우고 싶은 것은?",
        "춤",
        "요리",
        "새로운 언어",
        "그림"
      ],
      "q61": [
        "내가 가장 잘 만드는 음식은?",
        "수프",
        "필라프",
        "빵과 과자",
        "샐러드"
      ],
      "q62": [
        "내가 가장 먼저 가 보고 싶은 나라는?",
        "튀르키예",
        "일본",
        "모로코",
        "노르웨이"
      ],
      "q63": [
        "내가 시작한다면 어떤 운동?",
        "수영",
        "달리기",
        "자전거",
        "축구"
      ],
      "q64": [
        "내가 고를 책은?",
        "모험 이야기",
        "역사책",
        "옛날이야기",
        "백과사전"
      ],
      "q65": [
        "동물원에서 내가 가장 먼저 보러 갈 동물은?",
        "코끼리",
        "원숭이",
        "펭귄",
        "기린"
      ],
      "q66": [
        "매운 음식에 대한 나의 생각은?",
        "매울수록 좋아",
        "조금은 괜찮아",
        "아주 살짝만",
        "전혀 안 먹어"
      ],
      "q67": [
        "내가 가장 좋아한 과목은?",
        "수학",
        "문학",
        "지리",
        "체육"
      ],
      "q68": [
        "어릴 때 나의 꿈의 직업은?",
        "의사",
        "선생님",
        "우주비행사",
        "요리사"
      ],
      "q69": [
        "도보 여행에 대한 나의 생각은?",
        "긴 여행을 꿈꿔",
        "당일치기만",
        "편안함이 있어야 해",
        "집이 최고야"
      ],
      "q70": [
        "아침의 나는?",
        "기운이 넘쳐",
        "아직 졸려",
        "조용해",
        "수다스러워"
      ],
      "q71": [
        "내가 가장 좋아하는 견과류는?",
        "헤이즐넛",
        "호두",
        "캐슈너트",
        "아몬드"
      ],
      "q72": [
        "뜻밖에 한 시간이 생기면 나는?",
        "책을 읽어",
        "산책을 해",
        "가족에게 전화해",
        "요리를 해"
      ],
      "q73": [
        "내가 싫어하는 날씨는?",
        "더위",
        "바람",
        "진눈깨비",
        "혹한"
      ],
      "q74": [
        "내 방을 칠한다면 어떤 색?",
        "흰색",
        "베이지색",
        "초록색",
        "하늘색"
      ],
      "q75": [
        "내가 더 하고 싶은 놀이는?",
        "체스",
        "체커",
        "직소 퍼즐",
        "단어 게임"
      ],
      "q76": [
        "손님에게 내가 만들 음식은?",
        "필라프",
        "파이",
        "샐러드",
        "배달을 시킬래"
      ],
      "q77": [
        "내가 절대 안 먹을 음식은?",
        "버섯",
        "생선",
        "올리브",
        "삶은 양파"
      ],
      "q78": [
        "내가 차를 마시는 방법은?",
        "진하게",
        "연하게",
        "달게",
        "허브를 넣어서"
      ],
      "q79": [
        "집에서 나에게 가장 중요한 건?",
        "청결",
        "아늑함",
        "밝은 햇빛",
        "고요함"
      ],
      "q80": [
        "나는 새로운 걸 어떻게 배울까?",
        "책을 읽으며",
        "영상 강의로",
        "직접 해 보며",
        "다른 사람에게 물어보며"
      ],
      "q81": [
        "나를 가장 사로잡는 야생 동물은?",
        "호랑이",
        "곰",
        "독수리",
        "돌고래"
      ],
      "q82": [
        "내가 엄마에게 줄 선물은?",
        "꽃",
        "직접 만든 것",
        "여행",
        "따뜻한 담요"
      ],
      "q83": [
        "이동 중에 나는 뭘 할까?",
        "창밖을 봐",
        "책을 읽어",
        "이야기를 나눠",
        "간식을 먹어"
      ],
      "q84": [
        "내가 좋아하는 닭고기 요리는?",
        "닭꼬치",
        "닭고기 덮밥",
        "닭고기 패티",
        "너겟"
      ],
      "q85": [
        "기차에서 내가 고르는 자리는?",
        "창가",
        "통로 쪽",
        "역방향",
        "상관없어"
      ],
      "q86": [
        "일이 잘 안 풀릴 때 나는?",
        "바로 행동해",
        "먼저 생각해",
        "조언을 구해",
        "조금 걱정해"
      ],
      "q87": [
        "나의 가장 큰 장점은?",
        "친절함",
        "정직함",
        "끈기",
        "명랑함"
      ],
      "q88": [
        "내가 가장 잘 쉴 수 있는 곳은?",
        "시골 친척 집",
        "바닷가 호텔",
        "텐트",
        "우리 집"
      ],
      "q89": [
        "내가 고를 빵은?",
        "삼사",
        "하차푸리",
        "착착",
        "에클레어"
      ],
      "q90": [
        "내가 가장 배우고 싶은 언어는?",
        "아랍어",
        "영어",
        "튀르키예어",
        "일본어"
      ],
      "q91": [
        "나는 단것 없이 얼마나 버틸 수 있을까?",
        "하루",
        "일주일",
        "한 달",
        "필요한 만큼"
      ],
      "q92": [
        "늦을 것 같을 때 나는?",
        "전력으로 뛰어",
        "미리 전화해서 알려",
        "택시를 타",
        "나는 절대 안 늦어"
      ],
      "q93": [
        "기계가 고장 나면 나는?",
        "직접 고쳐",
        "설명서를 읽어",
        "도움을 요청해",
        "버튼을 다 눌러 봐"
      ],
      "q94": [
        "내 여행 가방에 가장 먼저 들어가는 건?",
        "구급상자",
        "책",
        "충전기",
        "간식"
      ],
      "q95": [
        "나를 차분하게 해 주는 활동은?",
        "요리",
        "정리",
        "그림 그리기",
        "산책"
      ],
      "q96": [
        "은퇴하면 내가 하고 싶은 건?",
        "정원 가꾸기",
        "여행",
        "독서",
        "손주들과 시간 보내기"
      ],
      "q97": [
        "나를 가장 짜증 나게 하는 건?",
        "소음",
        "어지러움",
        "지각",
        "무례함"
      ],
      "q98": [
        "내가 가장 좋아하는 향기는?",
        "갓 구운 빵",
        "비",
        "꽃",
        "바다"
      ],
      "q99": [
        "내가 고를 디저트는?",
        "과일",
        "아이스크림",
        "파이",
        "차 한 잔이면 돼"
      ]
    },
    "yesNo": {
      "c01": [
        "지금 내가 보고 싶어?",
        "많이 보고 싶어 해요",
        "참고 있지만 당신을 생각해요"
      ],
      "c02": [
        "내 메시지를 보면 웃어?",
        "항상 웃어요",
        "속으로 미소 지어요"
      ],
      "c03": [
        "우리 첫 만남 기억해?",
        "매 순간을 기억해요",
        "가장 중요한 것, 당신을 기억해요"
      ],
      "c04": [
        "오늘 안아 줄까?",
        "당신의 포옹을 기다려요",
        "포옹은 나중을 위해 아껴요"
      ],
      "c05": [
        "같이 바다 갈까?",
        "벌써 짐을 싸고 있어요",
        "산을 꿈꾸고 있어요"
      ],
      "c06": [
        "내가 당신을 웃게 해?",
        "진심으로 웃어요",
        "미소를 숨기고 있어요"
      ],
      "c07": [
        "나랑 있으면 편해?",
        "당신 곁에서 편안해요",
        "당신과 있으면 즐거워요"
      ],
      "c08": [
        "낮에 내 생각 해?",
        "아주 자주 생각해요",
        "지금 바로 생각하고 있어요"
      ],
      "c09": [
        "내 깜짝 선물 좋아해?",
        "당신의 깜짝 선물을 정말 좋아해요",
        "곁에 있어 주는 게 제일 좋아요"
      ],
      "c10": [
        "같이 파이 구울까?",
        "벌써 앞치마를 둘렀어요",
        "케이크를 사는 게 좋대요"
      ],
      "c11": [
        "오늘 밤 같이 영화 볼까?",
        "벌써 영화를 고르고 있어요",
        "그냥 이야기하고 싶대요"
      ],
      "c12": [
        "내 목소리 좋아?",
        "끝없이 들을 수 있어요",
        "당신의 웃음소리를 더 좋아해요"
      ],
      "c13": [
        "주말에 소풍 갈까?",
        "돗자리를 챙기고 있어요",
        "아늑한 카페로 초대해요"
      ],
      "c14": [
        "내 편지 받고 싶어?",
        "당신의 편지를 기다려요",
        "직접 듣고 싶어 해요"
      ],
      "c15": [
        "내가 당신에게 소중해?",
        "정말 소중해요",
        "생각보다 훨씬 더요"
      ],
      "c16": [
        "빗속을 같이 걸을까?",
        "둘이 쓸 우산을 챙겨요",
        "집에서 차를 끓일래요"
      ],
      "c17": [
        "우리 닮았어?",
        "둘은 한 쌍 같아요",
        "서로를 완벽하게 채워 줘요"
      ],
      "c18": [
        "내 요리 좋아해?",
        "더 달라고 해요",
        "같이 요리하는 걸 좋아해요"
      ],
      "c19": [
        "같이 반려동물 키울까?",
        "벌써 이름을 고르고 있어요",
        "지금은 곰 인형으로 충분해요"
      ],
      "c20": [
        "내가 뭘 좋아하는지 알아?",
        "다 외우고 있어요",
        "더 알고 싶어 해요"
      ],
      "c21": [
        "같이 춤출까?",
        "벌써 손을 내밀고 있어요",
        "박수로 응원할게요"
      ],
      "c22": [
        "내가 당신에게 영감을 줘?",
        "매일 영감을 줘요",
        "곁에 있으면 그냥 따뜻해요"
      ],
      "c23": [
        "우리 사진 간직하고 있어?",
        "한 장 한 장 소중히 간직해요",
        "더 멋진 새 사진을 기다려요"
      ],
      "c24": [
        "같이 해돋이 볼까?",
        "알람을 맞추고 있어요",
        "노을이 더 좋대요"
      ],
      "c25": [
        "비밀 하나 말해 줄래?",
        "귓속말로 알려 줄 거예요",
        "비밀로 남겨 둘래요"
      ],
      "c26": [
        "나를 믿어?",
        "진심으로 믿어요",
        "매일 응원하고 있어요"
      ],
      "c27": [
        "둘이서만 여행 갈까?",
        "그게 꿈이에요",
        "소중한 사람들을 모두 데려가요"
      ],
      "c28": [
        "내 전화 기다려?",
        "웃으며 기다려요",
        "직접 와 주길 바라요"
      ],
      "c29": [
        "내 포옹 좋아해?",
        "세상에서 가장 따뜻해요",
        "손잡는 걸 좋아해요"
      ],
      "c30": [
        "서로 책 읽어 줄까?",
        "벌써 책을 고르고 있어요",
        "당신 목소리를 듣고 싶어요"
      ],
      "c31": [
        "오늘 같이 사진 찍을까?",
        "예쁜 배경을 찾고 있어요",
        "먼저 이야기부터"
      ],
      "c32": [
        "내가 기분을 좋게 해 줘?",
        "항상 그래요",
        "당신과 있으면 슬픔도 가벼워져요"
      ],
      "c33": [
        "내일 같이 아침 먹을까?",
        "벌써 코코아를 만들고 있어요",
        "늦잠을 자고 싶대요"
      ],
      "c34": [
        "내 생일 기억해?",
        "알려 주지 않아도 기억해요",
        "몰래 깜짝 이벤트를 준비 중이에요"
      ],
      "c35": [
        "스케이트 타러 갈까?",
        "스케이트를 꺼내고 있어요",
        "링크 옆에서 응원할게요"
      ],
      "c36": [
        "오늘 좋은 하루야?",
        "최고의 하루예요",
        "당신이 있으면 더 좋아져요"
      ],
      "c37": [
        "내 초상화 그려 줄래?",
        "벌써 연필을 들었어요",
        "작은 하트를 그려 줄게요"
      ],
      "c38": [
        "같이 나무 심을까?",
        "자리를 고르고 있어요",
        "창가의 꽃부터 시작할게요"
      ],
      "c39": [
        "칭찬 듣고 싶어?",
        "정말 기대돼요",
        "쑥스럽지만 듣고 싶어요"
      ],
      "c40": [
        "나중에 또 할까?",
        "한 판 더 하고 싶어요",
        "게임보다 포옹이 좋아요"
      ],
      "c41": [
        "매운 음식 좋아해?",
        "매울수록 좋아해요",
        "덜 매운 걸 골라요"
      ],
      "c42": [
        "수영할 줄 알아?",
        "물고기처럼 헤엄쳐요",
        "아직은 물가 가까이에 있어요"
      ],
      "c43": [
        "고양이를 키우고 싶어?",
        "벌써 이름을 고민하고 있어요",
        "강아지가 더 좋아요"
      ],
      "c44": [
        "언젠가 이스탄불에 가 보고 싶어?",
        "벌써 보스포루스 해협을 꿈꿔요",
        "다른 도시를 고를래요"
      ],
      "c45": [
        "요리하는 거 좋아해?",
        "즐겁게 요리해요",
        "설거지가 더 좋아요"
      ],
      "c46": [
        "필라프 만드는 법을 배우고 싶어?",
        "벌써 레시피를 찾고 있어요",
        "다른 사람이 만든 걸 맛보고 싶어요"
      ],
      "c47": [
        "책 읽는 거 좋아해?",
        "늘 곁에 책이 있어요",
        "이야기를 듣는 게 더 좋아요"
      ],
      "c48": [
        "자전거 탈 줄 알아?",
        "지금 당장이라도 달릴 수 있어요",
        "배우겠다고 약속해요"
      ],
      "c49": [
        "바다보다 산이 더 좋아?",
        "산을 골라요",
        "바다를 골라요"
      ],
      "c50": [
        "사막을 보고 싶어?",
        "모래 언덕을 꿈꿔요",
        "숲을 고를래요"
      ],
      "c51": [
        "겨울 좋아해?",
        "첫눈을 기다려요",
        "여름을 기다려요"
      ],
      "c52": [
        "차를 설탕 없이 마셔?",
        "차 본연의 맛을 좋아해요",
        "설탕 한 스푼은 꼭 넣어요"
      ],
      "c53": [
        "거미가 무서워?",
        "멀찍이 피해요",
        "침착하게 밖으로 옮겨 줘요"
      ],
      "c54": [
        "그림 그리는 거 좋아해?",
        "벌써 붓을 들고 있어요",
        "다른 사람의 그림을 보는 게 더 좋아요"
      ],
      "c55": [
        "오로라를 보고 싶어?",
        "벌써 어디서 볼 수 있는지 찾아보고 있어요",
        "별을 바라보는 게 더 좋아요"
      ],
      "c56": [
        "비 오는 날 좋아해?",
        "창밖 빗소리를 정말 좋아해요",
        "해가 뜨길 기다려요"
      ],
      "c57": [
        "말 탈 줄 알아?",
        "안장 위에서도 자신 있어요",
        "아직은 꿈만 꾸고 있어요"
      ],
      "c58": [
        "강아지를 키우고 싶어?",
        "든든한 친구를 꿈꿔요",
        "지금은 돌볼 게 충분해요"
      ],
      "c59": [
        "짭짤한 것보다 단 게 더 좋아?",
        "단 거 없이는 못 살아요",
        "짭짤한 걸 골라요"
      ],
      "c60": [
        "기차 여행 좋아해?",
        "바퀴 소리의 리듬을 좋아해요",
        "비행기를 골라요"
      ],
      "c61": [
        "아침 일찍 하루를 시작하는 게 쉬워?",
        "힘차게 하루를 시작해요",
        "점심때나 돼야 시동이 걸려요"
      ],
      "c62": [
        "텐트에서 자는 거 좋아해?",
        "벌써 배낭을 싸고 있어요",
        "아늑한 호텔을 골라요"
      ],
      "c63": [
        "바닷가에 살고 싶어?",
        "파도 소리를 꿈꿔요",
        "도시를 골라요"
      ],
      "c64": [
        "겨울에도 아이스크림을 먹어?",
        "추운 날에도 먹어요",
        "여름에만 먹어요"
      ],
      "c65": [
        "초콜릿 좋아해?",
        "모든 종류를 다 알아요",
        "그냥 지나칠 수 있어요"
      ],
      "c66": [
        "파이를 구울 줄 알아?",
        "할머니처럼 잘 구워요",
        "배우겠다고 약속해요"
      ],
      "c67": [
        "별 보는 거 좋아해?",
        "별자리를 잘 알아요",
        "맑은 낮이 더 좋아요"
      ],
      "c68": [
        "언젠가 나만의 정원을 가꾸고 싶어?",
        "벌써 모종을 고르고 있어요",
        "화분 하나로 시작할래요"
      ],
      "c69": [
        "들꽃 좋아해?",
        "데이지와 수레국화를 좋아해요",
        "정원 꽃이 더 좋아요"
      ],
      "c70": [
        "커피 마셔?",
        "커피 없이는 하루가 시작되지 않아요",
        "차를 골라요"
      ],
      "c71": [
        "직접 만든 레모네이드 좋아해?",
        "벌써 레몬을 썰고 있어요",
        "물이 더 좋아요"
      ],
      "c72": [
        "언젠가 일본에 가 보고 싶어?",
        "벚꽃 보는 걸 꿈꿔요",
        "다른 나라를 고를래요"
      ],
      "c73": [
        "가을 좋아해?",
        "바스락거리는 낙엽 밟기를 좋아해요",
        "봄을 기다려요"
      ],
      "c74": [
        "라벤더 향 좋아해?",
        "그 향을 정말 좋아해요",
        "다른 향이 더 좋아요"
      ],
      "c75": [
        "보드게임 좋아해?",
        "벌써 판을 펼치고 있어요",
        "산책이 더 좋아요"
      ],
      "c76": [
        "운전할 줄 알아?",
        "자신 있게 운전해요",
        "아직은 조수석이에요"
      ],
      "c77": [
        "언젠가 대양을 보고 싶어?",
        "커다란 파도를 꿈꿔요",
        "가까운 바다로 충분해요"
      ],
      "c78": [
        "잠시 농장에서 살아 보고 싶어?",
        "벌써 닭에게 모이를 주고 있어요",
        "도시에 남을래요"
      ],
      "c79": [
        "대도시 좋아해?",
        "도시의 불빛을 좋아해요",
        "조용하고 평화로운 곳을 골라요"
      ],
      "c80": [
        "과자보다 과일이 더 좋아?",
        "과일을 골라요",
        "과자를 골라요"
      ],
      "c81": [
        "바다에서 돌고래를 보고 싶어?",
        "꼭 보고 싶어 해요",
        "책으로 읽는 게 더 좋아요"
      ],
      "c82": [
        "여름 좋아해?",
        "더운 날을 기다려요",
        "선선한 날씨를 좋아해요"
      ],
      "c83": [
        "공원 산책 좋아해?",
        "날씨와 상관없이 걸어요",
        "집에 있는 게 더 좋아요"
      ],
      "c84": [
        "손으로 글씨 쓰는 거 좋아해?",
        "글씨가 반듯해요",
        "휴대폰으로 입력해요"
      ],
      "c85": [
        "보트 타는 거 좋아해?",
        "벌써 노를 잡고 있어요",
        "물가에 남아 있어요"
      ],
      "c86": [
        "세계 일주를 하고 싶어?",
        "벌써 경로를 그리고 있어요",
        "두세 나라면 충분해요"
      ],
      "c87": [
        "눈사람 만들 줄 알아?",
        "제일 큰 걸 만들어요",
        "눈싸움이 더 좋아요"
      ],
      "c88": [
        "올해 새로운 걸 배우고 싶어?",
        "벌써 강좌를 고르고 있어요",
        "이미 할 일이 충분해요"
      ],
      "c89": [
        "조용한 거 좋아해?",
        "고요함을 소중히 여겨요",
        "북적북적한 게 좋아요"
      ],
      "c90": [
        "가족에게 선물하는 거 좋아해?",
        "특별한 이유 없이도 가족을 기쁘게 해요",
        "실제로 도와주는 걸 더 좋아해요"
      ]
    },
    "loves": {
      "s01": [
        "휴가는 어디서?",
        "해변",
        "산",
        "여행",
        "혼자만의 시간"
      ],
      "s02": [
        "완벽한 저녁은?",
        "집에서 영화",
        "산책",
        "레스토랑",
        "보드게임"
      ],
      "s03": [
        "좋아하는 날씨는?",
        "맑음",
        "비",
        "눈",
        "별이 빛나는 밤"
      ],
      "s04": [
        "좋아하는 동물은?",
        "아기 고양이",
        "강아지",
        "말",
        "돌고래"
      ],
      "s05": [
        "저녁 메뉴는?",
        "피자",
        "초밥",
        "디저트",
        "바비큐"
      ],
      "s06": [
        "좋아하는 음료는?",
        "커피",
        "차",
        "코코아",
        "레모네이드"
      ],
      "s07": [
        "좋아하는 계절은?",
        "봄",
        "여름",
        "가을",
        "겨울"
      ],
      "s08": [
        "좋아하는 꽃은?",
        "장미",
        "튤립",
        "해바라기",
        "라벤더"
      ],
      "s09": [
        "어떻게 쉬어?",
        "책 읽기",
        "그림 그리기",
        "자전거",
        "해먹에서 낮잠"
      ],
      "s10": [
        "어떻게 여행해?",
        "기차",
        "비행기",
        "자동차",
        "배"
      ],
      "s11": [
        "꿈의 집은?",
        "도시 아파트",
        "바닷가 집",
        "산속 오두막",
        "농장"
      ],
      "s12": [
        "달콤한 건?",
        "아이스크림",
        "초콜릿",
        "케이크",
        "과일"
      ],
      "s13": [
        "완벽한 아침은?",
        "침대에서 아침",
        "달리기",
        "늦잠",
        "베란다에서 커피"
      ],
      "s14": [
        "꿈의 데이트는?",
        "소풍",
        "스케이트장",
        "놀이공원",
        "옥상에서 별 보기"
      ],
      "s15": [
        "최고의 선물은?",
        "꽃다발",
        "편지",
        "여행",
        "선물 상자"
      ],
      "s16": [
        "좋아하는 자연은?",
        "바다",
        "숲",
        "사막",
        "오로라"
      ],
      "s17": [
        "좋아하는 과일은?",
        "사과",
        "딸기",
        "수박",
        "포도"
      ],
      "s18": [
        "쉬는 날엔 뭘 할까?",
        "산행",
        "집에서 요리",
        "박물관",
        "낚시"
      ],
      "s19": [
        "좋아하는 아침 식사는?",
        "팬케이크",
        "오믈렛",
        "베리를 올린 죽",
        "크루아상"
      ],
      "s20": [
        "좋아하는 새는?",
        "부엉이",
        "앵무새",
        "백조",
        "공작"
      ],
      "s21": [
        "어느 도시에 가 볼까?",
        "이스탄불",
        "파리",
        "도쿄",
        "두바이"
      ],
      "s22": [
        "좋아하는 운동은?",
        "축구",
        "수영",
        "테니스",
        "승마"
      ],
      "s23": [
        "정원에 뭘 심을까?",
        "사과나무",
        "장미",
        "채소",
        "딸기"
      ],
      "s24": [
        "좋아하는 구운 간식은?",
        "작은 파이",
        "도넛",
        "쿠키",
        "바클라바"
      ],
      "s25": [
        "어디서 살까?",
        "강가",
        "숲속",
        "대도시",
        "섬"
      ],
      "s26": [
        "좋아하는 바다 생물은?",
        "바다거북",
        "고래",
        "문어",
        "해마"
      ],
      "s27": [
        "뭘 타 볼까?",
        "자전거",
        "킥보드",
        "열기구",
        "보트"
      ],
      "s28": [
        "좋아하는 취미는?",
        "뜨개질",
        "자연 사진",
        "정원 가꾸기",
        "캘리그래피"
      ],
      "s29": [
        "좋아하는 수프는?",
        "보르시",
        "닭고기 수프",
        "호박 수프",
        "렌틸콩 수프"
      ],
      "s30": [
        "숲속 동물은?",
        "고슴도치",
        "다람쥐",
        "여우",
        "사슴"
      ],
      "s31": [
        "군것질로 뭘 먹을까?",
        "대추야자",
        "아몬드",
        "피스타치오",
        "말린 살구"
      ],
      "s32": [
        "하이킹에 뭘 챙길까?",
        "텐트",
        "보온병",
        "지도",
        "손전등"
      ],
      "s33": [
        "좋아하는 디저트는?",
        "푸딩",
        "치즈케이크",
        "꿀 팬케이크",
        "과일 샐러드"
      ],
      "s34": [
        "겨울엔 뭘 할까?",
        "눈사람 만들기",
        "썰매 타기",
        "창가에서 차 마시기",
        "스키 타기"
      ],
      "s35": [
        "여름엔 뭘 할까?",
        "수영하기",
        "베리 따기",
        "보트 타기",
        "모래성 쌓기"
      ],
      "s36": [
        "뭘로 그림을 그릴까?",
        "수채 물감",
        "연필",
        "크레파스",
        "캔버스에 물감"
      ],
      "s37": [
        "좋아하는 채소는?",
        "당근",
        "토마토",
        "옥수수",
        "호박"
      ],
      "s38": [
        "집을 아늑하게 만드는 건?",
        "벽난로",
        "포근한 담요",
        "화분",
        "책장"
      ],
      "s39": [
        "뭘 하고 놀까?",
        "체스",
        "직소 퍼즐",
        "보드게임",
        "공놀이"
      ],
      "s40": [
        "농장에 누가 살까?",
        "소",
        "어린 양",
        "암탉",
        "아기 염소"
      ],
      "s41": [
        "차에 뭘 곁들일까?",
        "꿀",
        "레몬",
        "잼",
        "민트"
      ],
      "s42": [
        "바닷가에 있는 건?",
        "등대",
        "조개껍데기",
        "돛단배",
        "갈매기"
      ],
      "s43": [
        "아침을 어떻게 시작할까?",
        "체조",
        "차 한 잔",
        "산책",
        "책"
      ],
      "s44": [
        "좋아하는 베리는?",
        "라즈베리",
        "블루베리",
        "체리",
        "블랙베리"
      ]
    },
    "who": [
      "우리 중 누가 더 자주 늦을까요?",
      "우리 중 누가 먼저 화해할까요?",
      "우리 중 누가 요리를 더 잘할까요?",
      "우리 중 누가 더 자주 웃을까요?",
      "우리 중 누가 준비하는 데 더 오래 걸릴까요?",
      "우리 중 누가 열쇠를 더 자주 잃어버릴까요?",
      "우리 중 누가 중요한 날짜를 더 잘 기억할까요?",
      "우리 중 누가 단것을 더 좋아할까요?",
      "우리 중 누가 먼저 잠들까요?",
      "우리 중 누가 아침에 더 일찍 일어날까요?",
      "우리 중 누가 “보고 싶어”라는 말을 더 자주 할까요?",
      "우리 중 누가 선물을 더 잘 고를까요?",
      "우리 중 누가 농담을 더 자주 할까요?",
      "우리 중 누가 운전을 더 잘할까요?",
      "우리 중 누가 전화를 더 오래 할까요?",
      "우리 중 누가 여행을 더 좋아할까요?",
      "우리 중 누가 더 쉽게 서운해할까요?",
      "우리 중 누가 더 빨리 용서할까요?",
      "우리 중 누가 사진을 더 많이 찍을까요?",
      "우리 중 누가 돈 관리를 더 잘할까요?",
      "우리 중 누가 필요 없는 물건을 더 자주 살까요?",
      "우리 중 누가 위로를 더 잘할까요?",
      "우리 중 누가 힘든 순간에 더 침착할까요?",
      "우리 중 누가 늘 휴대폰을 찾고 있을까요?",
      "우리 중 누가 손님 초대를 더 좋아할까요?",
      "우리 중 누가 아침을 더 자주 차릴까요?",
      "우리 중 누가 낯선 도시에서 길을 더 잘 찾을까요?",
      "우리 중 누가 메시지를 더 길게 쓸까요?",
      "우리 중 누가 먼저 산책하자고 할까요?",
      "우리 중 누가 동물을 더 좋아할까요?",
      "우리 중 누가 비밀을 더 잘 지킬까요?",
      "우리 중 누가 메뉴를 고르는 데 더 오래 걸릴까요?",
      "우리 중 누가 가까운 사람들을 더 걱정할까요?",
      "우리 중 누가 서프라이즈를 더 자주 준비할까요?",
      "우리 중 누가 더 깔끔할까요?",
      "우리 중 누가 새 헤어스타일을 먼저 알아챌까요?",
      "우리 중 누가 재미있는 이야기를 더 자주 떠올릴까요?",
      "우리 중 누가 더 참을성이 많을까요?",
      "우리 중 누가 “고마워”라는 말을 더 자주 할까요?",
      "우리 중 누가 먼저 도와주겠다고 할까요?",
      "우리 중 누가 암산을 더 잘할까요?",
      "우리 중 누가 책을 더 많이 읽을까요?",
      "우리 중 누가 타자를 더 빨리 칠까요?",
      "우리 중 누가 부모님께 더 자주 전화할까요?",
      "우리 중 누가 이야기를 더 재미있게 할까요?",
      "우리 중 누가 글씨를 더 반듯하게 쓸까요?",
      "우리 중 누가 매운 음식을 더 좋아할까요?",
      "우리 중 누가 집에 물건을 더 자주 두고 올까요?",
      "우리 중 누가 기계를 더 잘 다룰까요?",
      "우리 중 누가 새로운 걸 배우는 걸 더 좋아할까요?",
      "우리 중 누가 계획을 더 잘 세울까요?",
      "우리 중 누가 시장에서 값을 더 잘 깎을까요?",
      "우리 중 누가 자연을 더 좋아할까요?",
      "우리 중 누가 더 빨리 먹을까요?",
      "우리 중 누가 차를 더 많이 마실까요?",
      "우리 중 누가 식물을 더 잘 돌볼까요?",
      "우리 중 누가 지리를 더 잘 알까요?",
      "우리 중 누가 체스를 더 잘 둘까요?",
      "우리 중 누가 시장에서 과일을 더 잘 고를까요?",
      "우리 중 누가 일기예보를 더 자주 확인할까요?",
      "우리 중 누가 거미를 더 무서워할까요?",
      "우리 중 누가 더 용감할까요?",
      "우리 중 누가 호기심이 더 많을까요?",
      "우리 중 누가 퍼즐을 더 빨리 풀까요?",
      "우리 중 누가 그림을 더 잘 그릴까요?",
      "우리 중 누가 이웃을 더 자주 도울까요?",
      "우리 중 누가 아이들과 더 잘 어울릴까요?",
      "우리 중 누가 걷는 걸 더 좋아할까요?",
      "우리 중 누가 설명서를 더 자주 읽을까요?",
      "우리 중 누가 이름을 더 잘 기억할까요?",
      "우리 중 누가 외국어 단어를 더 빨리 외울까요?",
      "우리 중 누가 빵과 과자를 더 잘 구울까요?",
      "우리 중 누가 조언을 더 잘해 줄까요?",
      "우리 중 누가 추운 날씨를 더 좋아할까요?",
      "우리 중 누가 하이킹에서 더 잘 버틸까요?",
      "우리 중 누가 뉴스를 더 자주 볼까요?",
      "우리 중 누가 새로운 음식을 더 자주 먹어 볼까요?",
      "우리 중 누가 여행 가방을 더 빨리 쌀까요?",
      "우리 중 누가 물건을 더 잘 고칠까요?",
      "우리 중 누가 동물에게 더 자주 말을 걸까요?",
      "우리 중 누가 설거지를 더 자주 할까요?",
      "우리 중 누가 역사를 더 잘 알까요?",
      "우리 중 누가 일을 더 자주 미룰까요?",
      "우리 중 누가 처음 만난 사람과 더 빨리 친해질까요?",
      "우리 중 누가 건강을 더 챙길까요?"
    ],
    "phrases": [
      "내가 미소 짓게 되는 건 네가…",
      "너와 함께한 날 중 가장 좋아하는 날은…",
      "네게 고마운 건…",
      "슬플 때 나에게 힘이 되는 건…",
      "언젠가 우리 함께…",
      "우리의 가장 따뜻한 추억은…",
      "네가 누구보다 잘하는 건…",
      "내 마음이 편안해질 때는…",
      "하루 종일 자유로운 날이 있다면 우리는…",
      "네가 자랑스러운 이유는…",
      "우리의 완벽한 저녁은…",
      "절대 잊지 못할 건 네가…",
      "네가 해 주면 좋은 말은…",
      "내년에는 우리가…",
      "나에게 너는 마치…",
      "너에게 받은 최고의 선물은…",
      "네가 보고 싶어질 때는…",
      "우리가 제일 웃길 때는…",
      "오래전부터 너에게 하고 싶던 말은…",
      "우리의 장소는…",
      "너를 생각하면 나는…",
      "네가 내 하루를 더 좋게 만들 때는…",
      "내가 좋아하는 우리의 습관은…",
      "우리를 위한 내 소원: …",
      "우리에게 있었던 가장 웃긴 일은…",
      "네 마음 씀씀이를 느낄 때는 네가…",
      "너와 함께하는 아침은…",
      "우리를 한 단어로 표현하면…",
      "너에게 배우고 싶은 건…",
      "늘 고마워, 네가 언제나…",
      "어릴 때 가장 좋아한 음식은…",
      "어느 나라에서든 하루를 보낼 수 있다면, 나는…",
      "지금까지 들은 최고의 조언은…",
      "내가 늘 웃음이 나는 건…",
      "내 고향에서 가장 좋아하는 곳은…",
      "나만의 작은 가게가 있다면 팔고 싶은 건…",
      "내가 가장 잘 만드는 음식은…",
      "아직도 기억나는 어린 시절의 꿈은…",
      "나를 쉽게 기쁘게 하는 건…",
      "지금까지 가 본 곳 중 가장 놀라웠던 곳은…",
      "내가 배우고 싶은 건…",
      "나의 완벽한 휴일은 이렇게 시작해…",
      "어떤 동물이든 키울 수 있다면, 그건…",
      "우리 가족은 늘 내가…",
      "아무리 해도 익숙해지지 않는 건…",
      "나의 가장 유용한 습관은…",
      "지금까지 읽은 최고의 책은…",
      "십 년 뒤에 나는…",
      "내가 꿈꾸는 집은…",
      "어릴 때 있었던 가장 웃긴 일은…",
      "나에게 행복이란…",
      "내가 쉽게 포기하지 못하는 건…",
      "나에게 초능력이 있다면, 그건…",
      "사람에게서 가장 소중하게 여기는 건…",
      "한가한 저녁이 생기면, 나는…",
      "내가 가장 좋아하는 향기는…",
      "절대 먹지 않을 음식은…",
      "집을 나설 때 절대 빠뜨리지 않는 건…",
      "가 보고 싶은 곳은… 왜냐하면…",
      "지금까지 받은 최고의 선물은…",
      "나의 가장 특이한 습관은…",
      "매일 한 시간이 더 생긴다면, 나는…",
      "내가 많이 배우는 사람은…",
      "힘든 날 나를 버티게 해 주는 건…",
      "여행 중에 먹어 본 가장 맛있는 건…",
      "하루만 직업을 바꿀 수 있다면, 나는…",
      "내 마음에 가장 가까운 계절은…",
      "친구들은 내가…",
      "언젠가 누군가에게 가르쳐 주고 싶은 건…",
      "하루 중 작은 기쁨은…"
    ],
    "truth": {
      "t01": [
        "문어는 심장이 세 개다.",
        true,
        "두 심장은 아가미로 피를 보내고, 세 번째 심장은 온몸으로 피를 보내요."
      ],
      "t02": [
        "만리장성은 달에서 맨눈으로 보인다.",
        false,
        "보이지 않아요. 장성은 폭이 너무 좁거든요. 지구 궤도에서도 찾기가 아주 어려워요."
      ],
      "t03": [
        "꿀은 수천 년 동안 상하지 않고 보관될 수 있다.",
        true,
        "고대 이집트 무덤에서 수천 년 된 꿀이 여전히 보존된 채 발견되었어요."
      ],
      "t04": [
        "바나나는 나무에서 자란다.",
        false,
        "바나나는 거대한 풀이에요. ‘줄기’처럼 보이는 건 단단히 말린 잎들이에요."
      ],
      "t05": [
        "금성은 태양계에서 가장 뜨거운 행성이다.",
        true,
        "두꺼운 대기 때문에 금성은 약 460 °C까지 올라가요. 수성보다 뜨거워요."
      ],
      "t06": [
        "박쥐는 눈이 보이지 않는다.",
        false,
        "박쥐는 눈이 보여요. 어둠 속에서는 반향정위로도 길을 찾아요."
      ],
      "t07": [
        "고래는 물고기다.",
        false,
        "고래는 포유류예요. 공기로 숨 쉬고 새끼에게 젖을 먹여요."
      ],
      "t08": [
        "사하라는 세계에서 가장 큰 사막이다.",
        false,
        "가장 큰 사막은 남극이에요. 사하라는 가장 큰 더운 사막이에요."
      ],
      "t09": [
        "기린의 목뼈 개수는 사람과 같다.",
        true,
        "둘 다 목뼈가 일곱 개예요. 기린의 목뼈는 그저 아주 길 뿐이에요."
      ],
      "t10": [
        "식물학적으로 토마토는 베리다.",
        true,
        "식물학자들은 토마토를 베리로 분류해요. 속에 씨가 있는 과육이 많은 열매예요."
      ],
      "t11": [
        "식물학적으로 딸기는 베리다.",
        false,
        "딸기는 헛열매예요. 진짜 열매는 겉에 붙은 작은 ‘씨’들이에요."
      ],
      "t12": [
        "우주에서는 폭발 소리를 들을 수 있다.",
        false,
        "우주에는 공기가 거의 없어서 소리가 전달될 수 없어요."
      ],
      "t13": [
        "높은 산 위에서는 물이 더 낮은 온도에서 끓는다.",
        true,
        "높은 곳은 기압이 낮아서 물이 100 °C가 되기 전에 끓어요."
      ],
      "t14": [
        "펭귄은 북극에 산다.",
        false,
        "야생 펭귄은 남반구에만 살아요. 먼 북쪽에는 없어요."
      ],
      "t15": [
        "에베레스트는 해발 기준으로 가장 높은 산이다.",
        true,
        "에베레스트는 해발 약 8,849미터예요."
      ],
      "t16": [
        "사람은 뇌의 10%만 사용한다.",
        false,
        "그건 속설이에요. 하루 동안 뇌의 거의 모든 부분이 활동해요."
      ],
      "t17": [
        "사람의 심장은 하루에 약 10만 번 뛴다.",
        true,
        "1분에 약 70번 뛰니까 하루면 대략 10만 번이 돼요."
      ],
      "t18": [
        "금붕어의 기억력은 3초밖에 안 된다.",
        false,
        "실험에 따르면 금붕어는 배운 것을 몇 달 동안 기억할 수 있어요."
      ],
      "t19": [
        "오스트레일리아는 나라이면서 대륙이다.",
        true,
        "오스트레일리아는 대륙 하나를 통째로 차지하는 유일한 나라예요."
      ],
      "t20": [
        "번개는 같은 곳에 두 번 떨어지지 않는다.",
        false,
        "떨어져요. 높은 건물에는 1년에도 여러 번 번개가 쳐요."
      ],
      "t21": [
        "타조는 겁이 나면 모래에 머리를 묻는다.",
        false,
        "속설이에요. 겁먹은 타조는 도망치거나 땅에 납작 엎드려 숨어요."
      ],
      "t22": [
        "세계에서 가장 작은 새는 벌새다.",
        true,
        "쿠바의 꿀벌벌새는 약 2그램으로, 다른 어떤 새보다 가벼워요."
      ],
      "t23": [
        "수박은 약 90%가 물이다.",
        true,
        "수박은 약 92%가 물이에요. 그래서 그렇게 시원한 거예요."
      ],
      "t24": [
        "거미의 다리는 여섯 개다.",
        false,
        "거미의 다리는 여덟 개예요. 곤충은 다리가 여섯 개이고, 거미는 곤충이 아니에요."
      ],
      "t25": [
        "달은 스스로 빛을 낸다.",
        false,
        "달은 스스로 빛나지 않아요. 햇빛을 반사하는 거예요."
      ],
      "t26": [
        "코끼리는 가장 큰 육상 동물이다.",
        true,
        "아프리카코끼리는 6톤이 넘기도 해요."
      ],
      "t27": [
        "대왕고래는 알려진 동물 중 가장 크다.",
        true,
        "대왕고래는 길이가 30미터를 넘기도 해요. 알려진 어떤 공룡보다도 커요."
      ],
      "t28": [
        "카멜레온은 오직 위장하려고 색을 바꾼다.",
        false,
        "색은 기분, 온도, 다른 카멜레온에게 보내는 신호에 더 많이 좌우돼요."
      ],
      "t29": [
        "전화기는 토머스 에디슨이 발명했다.",
        false,
        "1876년에 전화기 특허를 받은 사람은 알렉산더 그레이엄 벨이에요."
      ],
      "t30": [
        "페니실린은 알렉산더 플레밍이 발견했다.",
        true,
        "플레밍은 1928년에 최초의 항생제인 페니실린을 발견했어요."
      ],
      "t31": [
        "태양계에서 가장 높은 화산은 화성에 있다.",
        true,
        "화성의 올림푸스 산은 높이가 약 22 km로, 에베레스트의 거의 2.5배예요."
      ],
      "t32": [
        "정맥 속 피는 파란색이다.",
        false,
        "피는 언제나 빨간색이에요. 정맥이 파랗게 보이는 건 빛이 피부를 통과하는 방식 때문이에요."
      ],
      "t33": [
        "대서양은 지구에서 가장 큰 바다다.",
        false,
        "가장 큰 바다는 태평양이에요. 지구의 모든 땅을 합친 것보다도 넓어요."
      ],
      "t34": [
        "러시아는 면적으로 세계에서 가장 큰 나라다.",
        true,
        "러시아의 면적은 1,700만 제곱킬로미터가 넘어요."
      ],
      "t35": [
        "캐나다는 세계에서 해안선이 가장 길다.",
        true,
        "캐나다의 해안선은 20만 km가 넘어서, 다른 어떤 나라보다 길어요."
      ],
      "t36": [
        "소의 위는 네 부분으로 나뉜다.",
        true,
        "소는 위가 하나지만 네 개의 방으로 나뉘어 있어요. 그렇게 풀을 소화해요."
      ],
      "t37": [
        "사자는 세계에서 가장 큰 고양잇과 동물이다.",
        false,
        "가장 큰 고양잇과 동물은 호랑이, 특히 시베리아호랑이예요."
      ],
      "t38": [
        "지구는 태양에 가장 가까운 행성이다.",
        false,
        "가장 가까운 건 수성, 그다음이 금성이에요. 지구는 세 번째 행성이에요."
      ],
      "t39": [
        "햇빛이 지구에 닿기까지 약 8분이 걸린다.",
        true,
        "빛은 태양에서 1억 5천만 km를 약 8분 20초 만에 달려와요."
      ],
      "t40": [
        "돌고래는 뇌의 절반씩 번갈아 잔다.",
        true,
        "한쪽이 쉬는 동안 다른 쪽은 망을 보며 숨 쉬는 것을 잊지 않아요."
      ],
      "t41": [
        "감자의 원산지는 아일랜드다.",
        false,
        "감자의 원산지는 남아메리카예요. 수천 년 전부터 안데스에서 재배되었어요."
      ],
      "t42": [
        "초콜릿은 카카오나무의 씨앗으로 만든다.",
        true,
        "카카오 열매는 줄기에 바로 열리고, 그 안의 씨앗이 초콜릿이 돼요."
      ],
      "t43": [
        "상어는 포유류다.",
        false,
        "상어는 아가미로 숨 쉬는 물고기예요. 바다의 포유류는 고래와 돌고래예요."
      ],
      "t44": [
        "어떤 대나무는 하루에 거의 1미터나 자란다.",
        true,
        "대나무는 지구에서 가장 빨리 자라는 식물 중 하나예요."
      ],
      "t45": [
        "부엉이는 고개를 360도 완전히 돌릴 수 있다.",
        false,
        "부엉이는 고개를 약 270도 돌릴 수 있어요. 많이 돌지만 한 바퀴는 아니에요."
      ],
      "t46": [
        "다이아몬드와 연필심의 흑연은 같은 물질로 되어 있다.",
        true,
        "둘 다 순수한 탄소예요. 원자의 배열만 다를 뿐이에요."
      ],
      "t47": [
        "낙타는 혹에 물을 저장한다.",
        false,
        "낙타의 혹에는 물이 아니라 지방이 있어요. 긴 여행에서 에너지가 되어 줘요."
      ],
      "t48": [
        "사람 몸에서 가장 작은 뼈는 귀 안에 있다.",
        true,
        "가운데귀의 등자뼈는 길이가 약 3밀리미터밖에 안 돼요."
      ],
      "t49": [
        "큰 앵무새는 50년 넘게 살 수 있다.",
        true,
        "잘 돌봄을 받은 금강앵무와 코카투는 50년 이상 사는 경우가 많아요."
      ],
      "t50": [
        "최초의 동력 비행은 라이트 형제가 해냈다.",
        true,
        "1903년에 날았고, 맨 처음 비행은 12초 동안 이어졌어요."
      ],
      "t51": [
        "바퀴는 중세에 발명되었다.",
        false,
        "바퀴는 5,000년이 넘었어요. 기원전 3500년경 메소포타미아에서 쓰였어요."
      ],
      "t52": [
        "해마는 물고기다.",
        true,
        "해마는 다른 물고기처럼 아가미로 숨 쉬고 지느러미로 헤엄쳐요."
      ],
      "t53": [
        "벌새는 뒤로 날 수 있다.",
        true,
        "정말로 뒤로 날 수 있는 새는 벌새뿐이에요."
      ],
      "t54": [
        "에펠탑은 여름에 조금 더 높아진다.",
        true,
        "더위에 금속이 늘어나서 탑이 약 15센티미터 높아져요."
      ],
      "t55": [
        "피부는 사람 몸에서 가장 큰 기관이다.",
        true,
        "어른의 피부는 몇 킬로그램이나 되고 온몸을 보호해요."
      ],
      "t56": [
        "빨간색을 보면 황소가 화를 낸다.",
        false,
        "황소는 빨간색을 거의 구별하지 못해요. 황소를 자극하는 건 색이 아니라 움직임이에요."
      ],
      "t57": [
        "집파리는 하루밖에 살지 못한다.",
        false,
        "집파리는 약 한 달을 살아요. 하루이틀만 사는 건 하루살이 성충이에요."
      ],
      "t58": [
        "파인애플은 나무에서 자란다.",
        false,
        "파인애플은 키 작은 잎이 무성한 식물의 한가운데에서 자라요."
      ],
      "t59": [
        "땅콩은 견과류다.",
        false,
        "땅콩은 완두콩, 강낭콩과 친척인 콩과 식물이에요. 꼬투리는 땅속에서 익어요."
      ],
      "t60": [
        "북극과 남극은 똑같이 춥다.",
        false,
        "남극이 훨씬 추워요. 남극은 높은 얼음 대륙 위에, 북극은 바다 위에 있거든요."
      ]
    },
    "hints": {
      "h01": [
        "펭귄",
        "나는 새지만 날지 못해요",
        "아주 추운 곳에 살아요",
        "늘 연미복을 입고 있어요",
        "타조",
        "물개",
        "갈매기"
      ],
      "h02": [
        "코끼리",
        "거의 하루 종일 먹어요",
        "내 귀는 커다란 부채 같아요",
        "긴 코가 있어요",
        "코뿔소",
        "하마",
        "기린"
      ],
      "h03": [
        "기린",
        "잠을 아주 조금 자고, 서서 잘 때도 많아요",
        "가장 높은 나무의 잎을 먹어요",
        "목이 가장 길어요",
        "얼룩말",
        "낙타",
        "말코손바닥사슴"
      ],
      "h04": [
        "낙타",
        "물 없이도 오래 지낼 수 있어요",
        "사막의 배라고 불려요",
        "등에 혹이 하나나 두 개 있어요",
        "말",
        "당나귀",
        "라마"
      ],
      "h05": [
        "꿀벌",
        "친구들에게 꽃으로 가는 길을 알려 줄 수 있어요",
        "아침부터 저녁까지 들판에서 일해요",
        "꿀을 만들어요",
        "말벌",
        "파리",
        "나비"
      ],
      "h06": [
        "거북",
        "백 년 넘게 살 수도 있어요",
        "절대 서두르지 않아요",
        "집을 등에 지고 다녀요",
        "달팽이",
        "도마뱀",
        "고슴도치"
      ],
      "h07": [
        "캥거루",
        "꼬리로 균형을 잡아요",
        "오스트레일리아에 살아요",
        "새끼를 주머니에 넣고 다녀요",
        "코알라",
        "토끼",
        "다람쥐"
      ],
      "h08": [
        "부엉이",
        "고개를 거의 뒤까지 돌릴 수 있어요",
        "밤에 사냥해요",
        "어두운 숲에서 부엉부엉 울어요",
        "까마귀",
        "독수리",
        "비둘기"
      ],
      "h09": [
        "돌고래",
        "바다에 살지만 공기로 숨을 쉬어요",
        "사람을 돕고 휘파람 소리로 이야기해요",
        "파도 위로 뛰어오르는 걸 좋아해요",
        "상어",
        "고래",
        "물개"
      ],
      "h10": [
        "다람쥐",
        "먹이를 숨기고 가끔 어디 뒀는지 잊어요",
        "나무 구멍에 살아요",
        "도토리와 솔방울을 갉아 먹어요",
        "고슴도치",
        "토끼",
        "생쥐"
      ],
      "h11": [
        "거미",
        "곤충이라고들 하지만 곤충이 아니에요",
        "다리가 여덟 개예요",
        "실을 뽑아 그물을 쳐요",
        "개미",
        "딱정벌레",
        "모기"
      ],
      "h12": [
        "고양이",
        "어둠 속에서 사람보다 잘 봐요",
        "따뜻한 창가를 좋아해요",
        "가르랑거리고 쥐를 잡아요",
        "토끼",
        "햄스터",
        "앵무새"
      ],
      "h13": [
        "수박",
        "과학자들은 나를 장과라고 불러요",
        "여름이면 모두가 나를 기다려요",
        "겉은 초록, 속은 빨강",
        "멜론",
        "호박",
        "파인애플"
      ],
      "h14": [
        "빵",
        "거의 모든 나라에서 구워요",
        "점심에 얇게 썰어 먹어요",
        "흰 것도 호밀로 만든 것도 있고 겉껍질이 있어요",
        "팬케이크",
        "파이",
        "쿠키"
      ],
      "h15": [
        "꿀",
        "수천 년 동안 상하지 않을 수 있어요",
        "감기에 걸리면 따뜻한 차에 넣어요",
        "벌들이 나를 만들어요",
        "잼",
        "설탕",
        "우유"
      ],
      "h16": [
        "레몬",
        "비타민 C가 가득해요",
        "차에 넣기도 해요",
        "노랗고 아주 셔요",
        "오렌지",
        "자몽",
        "라임"
      ],
      "h17": [
        "당근",
        "땅속에서 자라고 잎만 보여요",
        "눈 건강에 좋다고들 해요",
        "주황색이고 토끼가 좋아해요",
        "비트",
        "무",
        "감자"
      ],
      "h18": [
        "사과",
        "여름 품종도 겨울 품종도 있어요",
        "파이와 주스가 돼요",
        "나무에서 자라요, 빨갛거나 초록색",
        "배",
        "복숭아",
        "자두"
      ],
      "h19": [
        "바나나",
        "키 큰 식물에 송이로 열려요",
        "원숭이가 아주 좋아해요",
        "노랗고 껍질을 벗겨 먹어요",
        "망고",
        "키위",
        "파인애플"
      ],
      "h20": [
        "차",
        "중국에서는 수천 년 동안 나를 마셔요",
        "검은 것, 초록색, 허브 등 종류가 많아요",
        "주전자에 우려내요",
        "커피",
        "코코아",
        "주스"
      ],
      "h21": [
        "달걀",
        "내가 없으면 케이크를 굽기 어려워요",
        "오믈렛은 나로 만들어요",
        "암탉이 나를 낳아요",
        "치즈",
        "견과",
        "감자"
      ],
      "h22": [
        "우산",
        "대부분의 시간을 접힌 채로 지내요",
        "하늘이 흐려지면 챙겨요",
        "비 올 때 젖지 않게 지켜 줘요",
        "우비",
        "모자",
        "장화"
      ],
      "h23": [
        "시계",
        "모래나 햇빛으로 움직이는 것도 있어요",
        "벽에 걸리고 탑에도 있어요",
        "바늘로 시간을 알려 줘요",
        "나침반",
        "달력",
        "온도계"
      ],
      "h24": [
        "열쇠",
        "내가 없으면 문이 열리지 않아요",
        "고리에 달고 다니는 경우가 많아요",
        "자물쇠를 열어요",
        "가위",
        "드라이버",
        "클립"
      ],
      "h25": [
        "양초",
        "일할수록 점점 작아져요",
        "정전이 되면 나에게 불을 붙여요",
        "밀랍으로 만들고 심지가 있어요",
        "손전등",
        "램프",
        "성냥"
      ],
      "h26": [
        "가위",
        "고리 두 개와 뾰족한 끝 두 개가 있어요",
        "종이에서 모양을 오려 내요",
        "천과 종이를 잘라요",
        "칼",
        "바늘",
        "자"
      ],
      "h27": [
        "칫솔",
        "털이 아주 많아요",
        "석 달마다 바꿔요",
        "아침저녁으로 이를 닦아요",
        "비누",
        "수건",
        "스펀지"
      ],
      "h28": [
        "냉장고",
        "내 안은 늘 겨울이에요",
        "문을 열면 불이 켜져요",
        "음식을 차갑게 보관해요",
        "가스레인지",
        "오븐",
        "찬장"
      ],
      "h29": [
        "자전거",
        "연료도 전기도 없이 달려요",
        "핸들, 벨, 체인이 있어요",
        "바퀴 두 개와 페달이 있어요",
        "킥보드",
        "오토바이",
        "스케이트보드"
      ],
      "h30": [
        "비행기",
        "날개가 있지만 새는 아니에요",
        "공항에서 모두가 나를 기다려요",
        "승객을 태우고 구름 위를 날아요",
        "헬리콥터",
        "로켓",
        "열기구"
      ],
      "h31": [
        "기차",
        "나만의 길로만 다녀요",
        "객차가 많아요",
        "역에서 역으로 레일 위를 달려요",
        "트램",
        "버스",
        "지하철"
      ],
      "h32": [
        "다리",
        "돌, 나무, 강철로 지어요",
        "내 밑으로 배가 지나갈 수 있어요",
        "강의 양쪽을 이어 줘요",
        "터널",
        "도로",
        "댐"
      ],
      "h33": [
        "연필",
        "내 안에는 흑연이 있어요",
        "뭉툭해지면 깎아요",
        "쓰고 그리고, 지우개로 지울 수 있어요",
        "볼펜",
        "분필",
        "마커"
      ],
      "h34": [
        "책",
        "말은 없지만 많은 것을 가르쳐요",
        "표지와 쪽이 있어요",
        "사람들이 읽고 도서관에서 빌려 가요",
        "잡지",
        "신문",
        "공책"
      ],
      "h35": [
        "여행 가방",
        "여행을 많이 하지만 늘 누군가의 손에 있어요",
        "여행 전에 짐을 채워요",
        "손잡이와 바퀴가 있고 옷을 담아요",
        "배낭",
        "가방",
        "상자"
      ],
      "h36": [
        "도서관",
        "여기서는 조용히 말해 달라고 해요",
        "여기서 이용 카드를 만들어요",
        "수천 권의 책을 집으로 빌려 가요",
        "학교",
        "서점",
        "기록 보관소"
      ],
      "h37": [
        "공항",
        "여기에는 출입국 심사가 있어요",
        "여기서 탑승 안내 방송이 나와요",
        "여기서 비행기가 이륙해요",
        "기차역",
        "항구",
        "버스 터미널"
      ],
      "h38": [
        "사막",
        "낮에는 덥지만 밤에는 아주 추울 수 있어요",
        "오아시스를 만날 수 있어요",
        "모래는 많고 물은 아주 적어요",
        "초원",
        "사바나",
        "해변"
      ],
      "h39": [
        "화산",
        "수백 년 동안 잠들어 있을 수 있어요",
        "꼭대기에서 연기가 피어올라요",
        "용암을 뿜어내요",
        "산",
        "간헐천",
        "섬"
      ],
      "h40": [
        "무지개",
        "해를 등지고 있을 때만 보여요",
        "비가 그친 뒤에 자주 나타나요",
        "하늘에 걸린 일곱 빛깔 아치",
        "번개",
        "구름",
        "오로라"
      ],
      "h41": [
        "달",
        "지구에 늘 같은 쪽만 보여 줘요",
        "둥글게 차기도 하고 가는 눈썹 모양이 되기도 해요",
        "밤하늘에서 빛나요",
        "해",
        "별",
        "혜성"
      ],
      "h42": [
        "눈",
        "내 결정은 하나하나 모양이 달라요",
        "사람들이 나로 성과 사람 모양을 만들어요",
        "겨울에 내리는 하얗고 차가운 것",
        "비",
        "우박",
        "서리"
      ],
      "h43": [
        "강",
        "발원지와 하구가 있어요",
        "내 위로 배가 다녀요",
        "산에서 바다로 흘러가요",
        "호수",
        "바다",
        "개울"
      ],
      "h44": [
        "선인장",
        "물 없이도 오래 살 수 있어요",
        "사막에서도 창가에서도 자라요",
        "가시로 덮여 있어요",
        "알로에",
        "야자나무",
        "데이지"
      ],
      "h45": [
        "해바라기",
        "내 씨로 기름을 만들어요",
        "해를 따라 고개를 돌려요",
        "씨가 가득한 크고 노란 꽃",
        "데이지",
        "튤립",
        "민들레"
      ],
      "h46": [
        "참나무",
        "천 년 넘게 살 수도 있어요",
        "힘의 상징으로 여겨져요",
        "도토리가 열려요",
        "자작나무",
        "소나무",
        "단풍나무"
      ],
      "h47": [
        "섬",
        "나라 하나가 통째로 내 위에 있을 수도 있어요",
        "배나 비행기를 타고 와요",
        "사방이 물로 둘러싸여 있어요",
        "반도",
        "산호초",
        "곶"
      ],
      "h48": [
        "폭포",
        "멀리서도 내 소리가 들려요",
        "가장 높은 것은 베네수엘라에 있어요",
        "강물이 절벽 아래로 떨어지는 곳",
        "분수",
        "간헐천",
        "샘"
      ],
      "h49": [
        "의사",
        "일을 시작하기 전에 오랫동안 공부해요",
        "흰 가운을 입어요",
        "아픈 사람을 치료해요",
        "간호사",
        "약사",
        "수의사"
      ],
      "h50": [
        "소방관",
        "밤낮으로 출동 준비를 하고 있어요",
        "물과 사다리로 일해요",
        "불을 꺼요",
        "경찰관",
        "구조대원",
        "건설 노동자"
      ],
      "h51": [
        "요리사",
        "만드는 것은 모두 맛을 봐요",
        "뜨거운 불 앞에서 일해요",
        "식당에서 음식을 만들어요",
        "제빵사",
        "웨이터",
        "제과사"
      ],
      "h52": [
        "선생님",
        "저녁마다 공책을 검사해요",
        "칠판 앞에 서 있어요",
        "학교에서 아이들을 가르쳐요",
        "교장",
        "사서",
        "유치원 교사"
      ],
      "h53": [
        "조종사",
        "내 일터는 조종실이에요",
        "스피커로 승객에게 말해요",
        "비행기를 조종해요",
        "선장",
        "운전기사",
        "우주 비행사"
      ],
      "h54": [
        "집배원",
        "우리 동네 주소를 모두 알아요",
        "큰 가방을 메고 다녀요",
        "편지와 소포를 배달해요",
        "택배 기사",
        "택시 기사",
        "점원"
      ],
      "h55": [
        "정원사",
        "무엇을 언제 심어야 하는지 알아요",
        "내 도구는 물뿌리개와 전정 가위",
        "꽃과 나무를 돌봐요",
        "농부",
        "산림 관리원",
        "꽃집 주인"
      ],
      "h56": [
        "사진작가",
        "순간을 붙잡아요",
        "모두에게 움직이지 말라고 부탁해요",
        "카메라와 사진으로 일해요",
        "화가",
        "기자",
        "촬영 기사"
      ],
      "h57": [
        "어부",
        "동트기 전에 일어나 오래 기다려요",
        "낚싯대와 인내심이 필요해요",
        "물고기를 잡아요",
        "농부",
        "선원",
        "목동"
      ],
      "h58": [
        "우주 비행사",
        "지구에서 오랫동안 훈련해요",
        "우주복을 입어요",
        "우주로 날아가요",
        "조종사",
        "천문학자",
        "엔지니어"
      ],
      "h59": [
        "건축가",
        "내 작품은 도시 곳곳에서 보여요",
        "도면을 그려요",
        "집을 설계해요",
        "건설 노동자",
        "디자이너",
        "엔지니어"
      ],
      "h60": [
        "치과 의사",
        "많은 사람이 내 의자를 무서워해요",
        "드릴로 일해요",
        "이를 치료해요",
        "외과 의사",
        "안과 의사",
        "소아과 의사"
      ]
    },
    "dreams": {
      "d01": [
        "10년 뒤에 살고 싶은 곳은?",
        "바닷가",
        "산속",
        "대도시",
        "조용한 마을"
      ],
      "d02": [
        "언젠가 살고 싶은 집은?",
        "아늑한 아파트",
        "정원이 있는 집",
        "호숫가의 작은 집",
        "역사가 있는 오래된 집"
      ],
      "d03": [
        "정원에서 키우고 싶은 것은?",
        "사과나무",
        "장미",
        "채소와 허브",
        "딸기"
      ],
      "d04": [
        "키우고 싶은 반려동물은?",
        "고양이",
        "앵무새",
        "수족관 물고기",
        "거북"
      ],
      "d05": [
        "가장 먼저 가 보고 싶은 곳은?",
        "일본",
        "모로코",
        "아이슬란드",
        "뉴질랜드"
      ],
      "d06": [
        "어떻게 여행하고 싶나요?",
        "기차로",
        "자동차로",
        "비행기로",
        "배로"
      ],
      "d07": [
        "배우고 싶은 언어는?",
        "아랍어",
        "일본어",
        "스페인어",
        "중국어"
      ],
      "d08": [
        "할 수 있게 되고 싶은 것은?",
        "그림 그리기",
        "바느질",
        "수영",
        "코딩"
      ],
      "d09": [
        "제대로 배우고 싶은 요리는?",
        "플롭(중앙아시아식 볶음밥)",
        "집에서 굽는 빵",
        "초밥",
        "바클라바"
      ],
      "d10": [
        "주말을 보내고 싶은 방식은?",
        "자연 속에서",
        "집에서 책과 함께",
        "가족을 찾아가서",
        "새로운 도시에서"
      ],
      "d11": [
        "완벽한 주말 아침은?",
        "이른 산책",
        "느긋한 아침 식사",
        "바깥 공기 속 운동",
        "발코니에서 차 한잔"
      ],
      "d12": [
        "모으고 싶은 돈의 목적은?",
        "내 집 마련",
        "큰 여행",
        "자동차",
        "공부"
      ],
      "d13": [
        "하고 싶은 일은?",
        "나만의 사업",
        "큰 회사에서 일하기",
        "재택근무",
        "사람을 돕는 일"
      ],
      "d14": [
        "다른 사람을 돕고 싶은 방법은?",
        "자원봉사",
        "동물 돕기",
        "아이들 가르치기",
        "나무 심기"
      ],
      "d15": [
        "만들고 싶은 가족 전통은?",
        "일요일에 함께 점심",
        "보드게임 저녁",
        "주말 산책",
        "가족 사진첩"
      ],
      "d16": [
        "원하는 부엌은?",
        "넓은 가족 부엌",
        "밝고 아늑한 부엌",
        "정원이 보이는 부엌",
        "작지만 실용적인 부엌"
      ],
      "d17": [
        "직접 눈으로 보고 싶은 것은?",
        "오로라",
        "기자의 피라미드",
        "빅토리아 폭포",
        "히말라야"
      ],
      "d18": [
        "저녁에 하고 싶은 일은?",
        "독서",
        "새로운 요리",
        "외국어 공부",
        "공원 산책"
      ],
      "d19": [
        "시작하고 싶은 취미는?",
        "사진",
        "도자기",
        "자수",
        "정원 가꾸기"
      ],
      "d20": [
        "주말에 가고 싶은 곳은?",
        "숲",
        "호수",
        "가까운 소도시",
        "산"
      ],
      "d21": [
        "이상적인 작업 공간은?",
        "창가",
        "책장이 있는 곳",
        "초록 식물이 가득한 곳",
        "거의 텅 빈 곳"
      ],
      "d22": [
        "다음에 공부하고 싶은 분야는?",
        "의학",
        "역사",
        "경제학",
        "디자인"
      ],
      "d23": [
        "심고 싶은 나무는?",
        "참나무",
        "사과나무",
        "올리브나무",
        "대추야자"
      ],
      "d24": [
        "손님에게 대접하고 싶은 요리는?",
        "집에서 구운 파이",
        "큰 냄비 플롭",
        "집안 대대로 내려온 수프",
        "신선한 샐러드"
      ],
      "d25": [
        "가 보고 싶은 도시는?",
        "이스탄불",
        "파리",
        "도쿄",
        "카이로"
      ],
      "d26": [
        "여름을 보내고 싶은 곳은?",
        "바닷가",
        "산",
        "시골집",
        "국내 여행"
      ],
      "d27": [
        "키우고 싶은 새는?",
        "카나리아",
        "사랑앵무",
        "비둘기",
        "금화조"
      ],
      "d28": [
        "해 보고 싶은 운동은?",
        "수영",
        "승마",
        "양궁",
        "클라이밍"
      ],
      "d29": [
        "모으고 싶은 책은?",
        "백과사전",
        "고전",
        "여행책",
        "요리책"
      ],
      "d30": [
        "직접 만들어 보고 싶은 것은?",
        "가구",
        "나만의 그릇",
        "손뜨개 담요",
        "새집"
      ],
      "d31": [
        "소풍 가고 싶은 곳은?",
        "강가",
        "정원",
        "숲속 빈터",
        "산"
      ],
      "d32": [
        "언젠가 타고 싶은 교통수단은?",
        "전기차",
        "자전거",
        "큰 가족용 차",
        "차 없는 생활"
      ],
      "d33": [
        "은퇴 후에 하고 싶은 일은?",
        "정원 가꾸기",
        "여행",
        "손주와 보내는 시간",
        "새로운 배움"
      ],
      "d34": [
        "하고 싶은 좋은 일은?",
        "우물 만들기",
        "고양이 보호소 돕기",
        "학교에 책 모아 주기",
        "나무 한 줄 심기"
      ],
      "d35": [
        "주말 아침 식사로 원하는 것은?",
        "팬케이크",
        "오믈렛",
        "과일 넣은 죽",
        "치즈 팬케이크"
      ],
      "d36": [
        "손님을 맞이하고 싶은 곳은?",
        "부엌",
        "거실",
        "테라스",
        "정원"
      ],
      "d37": [
        "보고 싶은 자연의 경이는?",
        "그랜드 캐니언",
        "나이아가라 폭포",
        "바이칼 호수",
        "사하라 사막"
      ],
      "d38": [
        "배우고 싶은 살림 기술은?",
        "직접 하는 수리",
        "바느질",
        "빵 굽기",
        "정원 관리"
      ],
      "d39": [
        "할 줄 알고 싶은 언어는 몇 개?",
        "두 개",
        "세 개",
        "다섯 개",
        "최대한 많이"
      ],
      "d40": [
        "집 벽 색깔로 원하는 것은?",
        "흰색",
        "베이지색",
        "연두색",
        "하늘색"
      ],
      "d41": [
        "수족관에 두고 싶은 물고기는?",
        "금붕어",
        "구피",
        "메기",
        "엔젤피시"
      ],
      "d42": [
        "부모님께 선물하고 싶은 여행은?",
        "바닷가 휴가",
        "도시 여행",
        "산 여행",
        "기차 여행"
      ],
      "d43": [
        "여가 시간에 하고 싶은 것은?",
        "그림",
        "독서",
        "운동",
        "손공예"
      ],
      "d44": [
        "여행하고 싶은 계절은?",
        "봄",
        "여름",
        "가을",
        "겨울"
      ],
      "d45": [
        "겨울을 위해 저장하고 싶은 것은?",
        "잼",
        "피클",
        "말린 과일",
        "과일 콤포트"
      ],
      "d46": [
        "해 보고 싶은 다른 직업은?",
        "요리사",
        "프로그래머",
        "번역가",
        "목공"
      ],
      "d47": [
        "알아 가고 싶은 나라는?",
        "말레이시아",
        "이탈리아",
        "캐나다",
        "인도네시아"
      ],
      "d48": [
        "마당에 두고 싶은 것은?",
        "작은 분수",
        "텃밭",
        "정자",
        "그네"
      ],
      "d49": [
        "성공을 축하하고 싶은 방법은?",
        "가족 저녁 식사",
        "자연으로 나들이",
        "새 책",
        "다른 사람을 위한 좋은 일"
      ],
      "d50": [
        "아이들에게 물려주고 싶은 것은?",
        "책을 좋아하는 마음",
        "요리 솜씨",
        "우리 모국어",
        "자연을 아끼는 마음"
      ]
    }
  },
  "zh": {
    "text": {
      "homeLink": "兩人遊戲",
      "eyebrow": "GLOWLETTER · 兩人遊戲",
      "title": "一起玩吧",
      "close": "關閉",
      "lead": "把遊戲送給你珍惜的人。透過連結遊玩完全免費，也不需要帳號。",
      "quizTitle": "你有多了解我？",
      "quizNote": "回答關於自己的問題，讓親近的人來猜。結果會回到你這裡。",
      "create": "建立測驗",
      "soon": "即將推出",
      "soonTitle": "更多遊戲準備中",
      "duel": "「誰最快」對決",
      "loves": "我們喜歡的事",
      "cards": "兩人記憶卡",
      "who": "我們之中是誰？",
      "phrase": "完成這句話",
      "myQuizzes": "我的測驗",
      "noQuizzes": "還沒有測驗。建立第一個只需要幾分鐘。",
      "forWhom": "給 {name}",
      "noRecipient": "測驗",
      "resultsCount": "結果：{count}",
      "newResults": "新結果：{count}",
      "noResults": "還沒有人玩過。",
      "anonymous": "未署名",
      "results": "結果",
      "copyLink": "複製連結",
      "share": "傳送",
      "deleteQuiz": "刪除測驗",
      "deleteConfirm": "要刪除這個測驗和結果嗎？連結將無法再使用。",
      "deleted": "測驗已刪除",
      "linkCopied": "連結已複製",
      "back": "返回",
      "next": "下一步",
      "stepNames": "步驟 1/2 · 名字",
      "yourName": "你的名字",
      "yourNamePlaceholder": "你叫什麼名字",
      "recipient": "給誰 · 選填",
      "recipientPlaceholder": "對方的名字",
      "nameRequired": "請輸入你的名字。",
      "forbiddenName": "請輸入一般的名字。",
      "stepAnswers": "步驟 2/2 · 你的答案",
      "answersLead": "選出符合你的答案。每個問題都可以更換。",
      "swap": "換個問題",
      "progress": "已回答 {done}/{total}",
      "answerAll": "請為每個問題選擇答案。",
      "finish": "取得連結",
      "creating": "正在建立測驗…",
      "createdTitle": "測驗完成了！",
      "createdLead": "把連結傳出去。對方作答後，結果會出現在「我的測驗」。",
      "shareText": "{name} 邀請你玩「你有多了解我？」",
      "signInTitle": "需要登入",
      "signInNote": "測驗會存在你的帳號裡，結果才會傳給你。",
      "signIn": "登入",
      "premiumNote": "建立遊戲屬於完整版功能。透過連結遊玩對所有人都免費。",
      "failed": "沒有成功。請檢查網路後再試一次。",
      "rateLimited": "嘗試次數太多，請稍後再試。",
      "playEyebrow": "兩人遊戲",
      "playInvite": "{name} 邀請你來玩",
      "playLead": "共 {count} 題。猜猜答案，最後會看到有幾題相同。",
      "playName": "你的名字 · 選填",
      "playNamePlaceholder": "讓對方知道是你",
      "start": "開始",
      "playLoading": "正在載入遊戲…",
      "playMissing": "無法使用這個遊戲：連結已刪除或過期。",
      "playOffline": "遊戲需要網路連線。",
      "retry": "重試",
      "questionOf": "第 {n}/{total} 題",
      "asks": "{name} 想問",
      "counting": "正在計算相同的答案…",
      "scoreOf": "{score}/{total}",
      "tierAll": "太完美了！你們比誰都了解彼此",
      "tierHigh": "你們真的很了解彼此",
      "tierMid": "還不錯！還有很多可以認識的地方",
      "tierLow": "接下來還有許多美好的發現",
      "sentTo": "{name} 會看到你的結果",
      "review": "你的答案",
      "rightAnswer": "正確答案",
      "makeOwn": "建立我的測驗",
      "home": "首頁",
      "resultToast": "{name}：「你有多了解我？」答對 {score}/{total}",
      "ownerAnswers": "出題者的答案",
      "playerAnswers": "{name} 的答案",
      "paywallTitle": "遊戲、娛樂<br><em>與信件</em>",
      "groupGames": "遊戲",
      "groupFun": "娛樂",
      "groupLetters": "信件",
      "featQuiz": "「你有多了解我？」— 結果會回到你這裡",
      "featGamesSoon": "「誰最快」對決、「我們喜歡的事」、小熊記憶卡",
      "featFunSoon": "「我們之中是誰？」與附情侶手帳的「完成這句話」",
      "featCollection": "15 種語言的完整信件與詩作收藏",
      "featMoments": "紀念日、提醒，以及在指定日子開啟的 QR 信件",
      "featAudio": "在信中加入自己的音訊，以及收件人的回覆",
      "groupTalk": "朋友與通話",
      "featCall": "與朋友通話：語音、擴音和動態反應",
      "ynTitle": "是或否",
      "ynNote": "兩人即時遊戲：每張卡片 5 秒。準時回答，就能看到對方的答案。",
      "ynCreate": "建立房間",
      "ynWaiting": "等待 {name} 打開連結…",
      "ynWaitingAny": "等待對方加入…",
      "ynShareText": "{name} 邀請你玩即時遊戲「是或否」",
      "ynPartnerHere": "{name} 來了！",
      "ynStart": "開始遊戲",
      "ynWaitHost": "{name} 即將開始遊戲",
      "ynYes": "是",
      "ynNo": "否",
      "ynMissed": "太晚了 — 這張卡片維持關閉",
      "ynMatch": "答案一樣！",
      "ynRound": "第 {n}/{total} 張",
      "ynAnswered": "已送出答案，等待對方…",
      "ynFinal": "{total} 張中有 {score} 張相同",
      "ynFinalHigh": "你們心有靈犀",
      "ynFinalMid": "如此不同，卻又如此親近",
      "ynAgain": "再玩一次",
      "ynLeft": "對方已斷線，等待回來…",
      "ynYou": "你",
      "ynOffline": "無法連線到遊戲。請檢查網路並重新開啟連結。",
      "ynJoin": "加入遊戲",
      "ynJoinLead": "{name} 在等你。每題 5 秒！",
      "ynStepNames": "你和對方的名字",
      "ynRoomReady": "房間準備好了 — 傳送連結吧",
      "ynStayHere": "請保持這個畫面開啟：對方打開連結後遊戲就會開始。",
      "featYesNo": "即時遊戲「是或否」— 每題 5 秒",
      "ynPartnerMissed": "沒有回答 — 時間到了",
      "lvTitle": "我們喜歡的",
      "lvNote": "兩人即時遊戲：4 張圖片，10 秒內選出最喜歡的。可以選一樣的喔！",
      "lvShareText": "{name} 邀請你玩即時遊戲「我們喜歡的」",
      "lvJoinLead": "{name} 在等你。選出你最喜歡的圖片吧！",
      "lvRound": "第 {n}/{total} 個主題",
      "lvPick": "選出你最喜歡的",
      "lvBoth": "你們都選了：{item}",
      "lvCommon": "你們都喜歡",
      "lvDiff": "喜好不同，更有趣！",
      "lvFinalHigh": "你們有好多共同點！",
      "lvFinalMid": "如此不同，卻能互相補足",
      "featLoves": "即時遊戲「我們喜歡的」— 4 張圖片，一起選",
      "featGamesSoon2": "「誰最快」對決與小熊記憶卡",
      "mcTitle": "小熊記憶卡",
      "mcNote": "兩人即時記憶遊戲：輪流翻開兩張卡片，找出成對的圖案。共三關，從 8 張到 16 張。",
      "mcShareText": "{name} 邀請你玩即時遊戲「小熊記憶卡」",
      "mcJoinLead": "{name} 在等你。輪流找出成對的卡片吧！",
      "mcLevel": "第 {n}/{total} 關",
      "mcTurnYou": "輪到你了 — 翻開兩張卡片",
      "mcTurnThem": "輪到 {name}",
      "mcPairs": "已找到：{found}/{total} 對",
      "mcLevelDone": "全部配對完成！",
      "mcTimeUp": "本關時間到",
      "mcNext": "下一關：第 {n} 關",
      "mcFinal": "找到 {found}/{total} 對",
      "mcFinalHigh": "超棒的團隊！",
      "mcFinalMid": "玩得好！再來一局？",
      "featCards": "即時遊戲「小熊記憶卡」— 一起找配對",
      "featGamesSoon3": "「誰最快」對決",
      "duTitle": "誰比較快",
      "duNote": "即時對決：一個詞、四張圖片。先點到正確的圖片——點錯就輸掉這一回合。",
      "duShareText": "{name} 向你發起即時對決「誰比較快」",
      "duJoinLead": "{name} 在等你。快點找出正確的圖片！",
      "duRound": "第 {n} 回合，共 {total} 回合",
      "duFind": "找出：{item}",
      "duYouWon": "你比較快！",
      "duTheyWon": "{name} 比較快",
      "duWrong": "圖片選錯了——這一回合輸了",
      "duNobody": "沒有人及時找到",
      "duScore": "你 {you} : {them} {name}",
      "duFinalWin": "勝利！今天眼力真好。",
      "duFinalLose": "這次 {name} 贏了——再來一局？",
      "duFinalDraw": "平手——旗鼓相當！",
      "duSeconds": "{s} 秒",
      "featDuel": "即時對決「誰比較快」——搶先找到圖片",
      "whoTitle": "是你還是我？",
      "whoNote": "兩人即時遊戲：一個問題，點「我」或對方的名字。看看你們對彼此的看法是否一致。",
      "whoShareText": "{name} 邀請你玩即時遊戲「是你還是我？」",
      "whoJoinLead": "{name} 在等你。誠實作答，然後比對看看！",
      "whoRound": "第 {n} 題，共 {total} 題",
      "whoMe": "我",
      "whoAgree": "你們意見一致：{name}",
      "whoDiffer": "意見不同——聊一聊吧！",
      "whoFinal": "{total} 題中有 {score} 題一致",
      "whoFinalHigh": "你們真的很了解彼此！",
      "whoFinalMid": "有好多可以聊的——這也很美好",
      "featWho": "即時遊戲「是你還是我？」——看看意見是否一致",
      "phTitle": "把句子寫完",
      "phNote": "兩人即時遊戲：兩人各自用自己的話，接著寫完同一句溫暖的話，再讀讀對方的回答。",
      "phShareText": "{name} 邀請你玩即時遊戲「把句子寫完」",
      "phJoinLead": "{name} 在等你。用自己的話把每一句寫完吧！",
      "phRound": "第 {n} 句，共 {total} 句",
      "phPlaceholder": "你的接續…",
      "phDone": "完成",
      "phWaiting": "正在等 {name}…",
      "phSkipped": "未作答",
      "phSave": "儲存到「兩人之書」",
      "phSaved": "已儲存到「兩人之書」",
      "phForbidden": "請不要包含連結或粗魯的字詞。",
      "phNext": "下一句",
      "phFinal": "一起寫完的句子：{count}",
      "phFinalLead": "把最喜歡的回答儲存到「兩人之書」。",
      "featPhrase": "即時遊戲「把句子寫完」，附「兩人之書」",
      "bookTitle": "兩人之書",
      "bookNote": "來自「把句子寫完」最溫暖的回答，保存在你的帳號中。",
      "bookOpen": "打開書",
      "bookEmpty": "書裡還是空的。玩一局「把句子寫完」，儲存你喜歡的回答吧。",
      "bookDelete": "刪除",
      "bookDeleteConfirm": "要從書中刪除這一頁嗎？",
      "bookYou": "你",
      "inviteTitle": "邀請好友",
      "inviteNote": "好友會收到一則附有遊戲的訊息。",
      "invite": "邀請",
      "invited": "已邀請",
      "inviteNone": "在「好友」中新增好友，就能一鍵邀請。",
      "inviteSent": "已傳送邀請給 {name}",
      "truth": "是真是假",
      "tfTitle": "是真是假",
      "tfNote": "兩人即時遊戲：關於世界的驚奇知識。12 秒內判斷是真是假，答對一題得一分。",
      "tfShareText": "{name} 邀請你玩即時遊戲「是真是假」",
      "tfJoinLead": "{name} 在等你。是真是假？快快決定！",
      "tfRound": "第 {n}/{total} 則",
      "tfTrue": "真的",
      "tfFalse": "假的",
      "tfIsTrue": "這是真的！",
      "tfIsFalse": "這是假的！",
      "tfFirstYou": "你最先答對！",
      "tfFirstThem": "{name} 最先答對",
      "tfFinalWin": "勝利！你對世界懂得更多。",
      "tfFinalLose": "這次 {name} 懂得更多 — 再來一局？",
      "tfFinalDraw": "平手 — 你們懂得一樣多！",
      "featTruth": "即時遊戲「是真是假」— 關於世界的驚奇知識",
      "countries": "猜猜哪個國家",
      "coTitle": "猜猜哪個國家",
      "coNote": "兩人即時遊戲：小熊環遊世界。10 秒內猜出牠在哪個國家！每答對一題得 1 分。",
      "coShareText": "{name} 邀請你玩即時遊戲「猜猜哪個國家」",
      "coJoinLead": "{name} 正在等你。看圖猜國家！",
      "coRound": "第 {n} 個國家，共 {total} 個",
      "coAsk": "這是哪個國家？",
      "coFinalWin": "勝利！你是真正的旅行家。",
      "coFinalLose": "這次 {name} 更懂世界——再來一局？",
      "coFinalDraw": "平手——你們都很懂世界！",
      "featCountries": "即時遊戲「猜猜哪個國家」— 40 個國家",
      "hints": "看提示猜一猜",
      "dreams": "夢想與計畫",
      "hiTitle": "看提示猜一猜",
      "hiNote": "兩人即時遊戲：三個提示會一個一個出現。看第一個就猜中得 3 分，第二個得 2 分，第三個得 1 分。",
      "hiShareText": "{name} 邀請你玩即時遊戲「看提示猜一猜」",
      "hiJoinLead": "{name} 在等你。越早猜中越好！",
      "hiRound": "第 {n}/{total} 道謎題",
      "hiAsk": "這是什麼？",
      "hiClue": "提示 {n}",
      "hiPoints": "+{n} 分",
      "hiNoPoints": "這次沒有得分",
      "hiFinalWin": "勝利！你真會猜。",
      "hiFinalLose": "這次 {name} 猜得更準——再來一局？",
      "hiFinalDraw": "平手——你們兩個都很會猜！",
      "featHints": "即時遊戲「看提示猜一猜」— 3、2 或 1 分",
      "drTitle": "夢想與計畫",
      "drNote": "兩人即時遊戲：住家、旅行、學習與嗜好。選出想要的，看看你們的夢想是否一致。",
      "drShareText": "{name} 邀請你玩即時遊戲「夢想與計畫」",
      "drJoinLead": "{name} 在等你。選出你真正想要的吧！",
      "drRound": "第 {n} 題，共 {total} 題",
      "drPick": "選出你想要的",
      "drBoth": "一致：{item}",
      "drDiff": "夢想不同——跟對方說說原因吧！",
      "drFinalHigh": "你們有好多相同的夢想！",
      "drFinalMid": "夢想各不相同——有好多可以聊的",
      "drCommon": "你們共同的夢想",
      "featDreams": "即時遊戲「夢想與計畫」— 夢想一致嗎？",
      "modestTitle": "含蓄模式",
      "modestNote": "不問感情、擁抱或約會，只有友善的問題"
    },
    "questions": {
      "q01": [
        "我最喜歡的季節？",
        "春天",
        "夏天",
        "秋天",
        "冬天"
      ],
      "q02": [
        "早餐我會選什麼？",
        "咖啡配可頌",
        "燕麥粥",
        "蛋料理",
        "只喝茶"
      ],
      "q03": [
        "我理想的休假日？",
        "在家裹著毯子",
        "到公園散步",
        "去郊外走走",
        "和朋友相聚"
      ],
      "q04": [
        "我夢想去哪裡？",
        "海邊",
        "山上",
        "大城市",
        "鄉間溫馨小屋"
      ],
      "q05": [
        "我最愛的冰淇淋口味？",
        "香草",
        "巧克力",
        "草莓",
        "開心果"
      ],
      "q06": [
        "什麼最快讓我開心？",
        "一個擁抱",
        "一個驚喜",
        "溫暖的話",
        "好吃的東西"
      ],
      "q07": [
        "我比較像…",
        "早起的人",
        "夜貓子",
        "有空就睡",
        "超愛午睡"
      ],
      "q08": [
        "今晚我會選哪種電影？",
        "喜劇",
        "浪漫故事",
        "推理片",
        "動畫"
      ],
      "q09": [
        "我最喜歡的顏色？",
        "紅色",
        "藍色",
        "綠色",
        "粉紅色"
      ],
      "q10": [
        "我最怕什麼？",
        "蜘蛛",
        "高處",
        "黑暗",
        "遲到"
      ],
      "q11": [
        "我喜歡哪種花？",
        "玫瑰",
        "鬱金香",
        "芍藥",
        "雛菊"
      ],
      "q12": [
        "難過時我會做什麼？",
        "打電話給親近的人",
        "吃點甜的",
        "出去走走",
        "去睡覺"
      ],
      "q13": [
        "哪種動物最像我？",
        "小貓",
        "小狗",
        "小熊",
        "小狐狸"
      ],
      "q14": [
        "對我來說最好的禮物？",
        "親手做的東西",
        "一趟旅行",
        "飾品",
        "一本書"
      ],
      "q15": [
        "我最愛的飲料？",
        "紅茶",
        "綠茶",
        "咖啡",
        "熱可可"
      ],
      "q16": [
        "我最愛的點心？",
        "巧克力",
        "洋芋片",
        "水果",
        "蛋糕"
      ],
      "q17": [
        "旅行時我會選什麼？",
        "博物館",
        "海灘",
        "在地美食",
        "隨意漫步"
      ],
      "q18": [
        "我喜歡怎麼度過晚上？",
        "看書",
        "追劇",
        "聊天",
        "散步"
      ],
      "q19": [
        "我最喜歡什麼天氣？",
        "晴天",
        "溫暖的雨",
        "下雪",
        "微風"
      ],
      "q20": [
        "哪種超能力最適合我？",
        "飛行",
        "讀心術",
        "讓時間停止",
        "瞬間移動"
      ],
      "q21": [
        "我最看重親近的人哪一點？",
        "信任",
        "體貼",
        "幽默感",
        "支持"
      ],
      "q22": [
        "我最期待哪個節日？",
        "新年",
        "我的生日",
        "暑假",
        "情人節"
      ],
      "q23": [
        "我最常怎麼表達「我愛你」？",
        "用說的",
        "用行動",
        "用擁抱",
        "用禮物"
      ],
      "q24": [
        "在咖啡館我會點什麼？",
        "義大利麵",
        "壽司",
        "沙拉",
        "甜點"
      ],
      "q25": [
        "我最喜歡一天中的哪個時段？",
        "早上",
        "下午",
        "傍晚",
        "晚上"
      ],
      "q26": [
        "我會選哪種料理？",
        "義式",
        "日式",
        "家常菜",
        "墨西哥菜"
      ],
      "q27": [
        "我在哪裡最能思考？",
        "洗澡時",
        "散步時",
        "通勤路上",
        "睡前"
      ],
      "q28": [
        "我早上第一件事是什麼？",
        "看手機",
        "喝水",
        "泡咖啡",
        "再賴床一下"
      ],
      "q29": [
        "我最喜歡的水果？",
        "蘋果",
        "香蕉",
        "芒果",
        "西瓜"
      ],
      "q30": [
        "哪個興趣最適合我？",
        "畫畫",
        "做菜",
        "運動",
        "閱讀"
      ],
      "q31": [
        "我想怎麼過生日？",
        "熱鬧的派對",
        "兩人晚餐",
        "一趟旅行",
        "在家安靜的夜晚"
      ],
      "q32": [
        "我對驚喜的看法？",
        "超愛",
        "有點緊張",
        "喜歡為別人準備",
        "寧願先知道"
      ],
      "q33": [
        "我比較喜歡哪種甜點？",
        "蛋糕",
        "冰淇淋",
        "餅乾",
        "糖果"
      ],
      "q34": [
        "去無人島我會帶什麼？",
        "一本書",
        "手機",
        "毯子",
        "相機"
      ],
      "q35": [
        "辛苦一天後我怎麼放鬆？",
        "泡個熱水澡",
        "追劇",
        "散步",
        "和親近的人聊天"
      ],
      "q36": [
        "我最喜歡哪種交通工具？",
        "火車",
        "飛機",
        "汽車",
        "腳踏車"
      ],
      "q37": [
        "我小時候最愛的遊戲？",
        "捉迷藏",
        "鬼抓人",
        "積木",
        "畫畫"
      ],
      "q38": [
        "哪個童話最像我？",
        "灰姑娘",
        "小王子",
        "小熊維尼",
        "愛麗絲夢遊仙境"
      ],
      "q39": [
        "我會怎麼讓親近的人開心？",
        "準備驚喜",
        "寫張卡片",
        "安排旅行",
        "請吃晚餐"
      ],
      "q40": [
        "我最常拍什麼？",
        "自拍",
        "風景",
        "美食",
        "幾乎不拍照"
      ],
      "q41": [
        "家裡我最喜歡的角落？",
        "床",
        "廚房",
        "沙發",
        "陽台"
      ],
      "q42": [
        "我對一個人最先注意的是？",
        "笑容",
        "眼睛",
        "聲音",
        "幽默感"
      ],
      "q43": [
        "什麼最快讓我笑出來？",
        "搞笑影片",
        "親友的玩笑",
        "尷尬場面",
        "動物"
      ],
      "q44": [
        "炎熱夏天我會喝什麼？",
        "檸檬水",
        "冰茶",
        "果汁",
        "冰水"
      ],
      "q45": [
        "哪個元素最像我？",
        "水",
        "火",
        "土",
        "風"
      ],
      "q46": [
        "我喜歡哪種故事？",
        "冒險",
        "愛情",
        "科幻",
        "真實故事"
      ],
      "q47": [
        "下雨天我怎麼過？",
        "看書",
        "睡覺",
        "看電影",
        "撐傘散步"
      ],
      "q48": [
        "禮物中我最在意什麼？",
        "心意",
        "實用",
        "好看",
        "驚喜"
      ],
      "q49": [
        "我會選哪種馬鈴薯？",
        "薯泥",
        "薯條",
        "烤馬鈴薯",
        "洋芋片"
      ],
      "q50": [
        "到新城市我先去哪？",
        "咖啡館",
        "博物館",
        "公園",
        "逛街"
      ],
      "q51": [
        "睡不著時我會做什麼？",
        "看書",
        "滑手機",
        "數羊",
        "喝熱牛奶"
      ],
      "q52": [
        "重要的日子我怎麼準備？",
        "提早全部計畫好",
        "拖到最後一刻",
        "找人幫忙",
        "緊張到睡不著"
      ],
      "q53": [
        "我最喜歡看哪種運動？",
        "足球",
        "網球",
        "花式滑冰",
        "不看運動"
      ],
      "q54": [
        "哪種寵物適合我？",
        "貓",
        "狗",
        "鸚鵡",
        "倉鼠"
      ],
      "q55": [
        "我傳什麼樣的訊息？",
        "長訊息",
        "短訊息",
        "滿滿表情符號",
        "語音訊息"
      ],
      "q56": [
        "我保存最久的禮物？",
        "一封信",
        "一個玩具",
        "一張照片",
        "一件飾品"
      ],
      "q57": [
        "我比較會選？",
        "壁爐旁喝茶",
        "草地野餐",
        "海邊散步",
        "看電影"
      ],
      "q58": [
        "哪種稱讚最讓我開心？",
        "外表",
        "聰明",
        "善良",
        "幽默"
      ],
      "q59": [
        "我理想的早晨？",
        "床上早餐",
        "清晨慢跑",
        "睡到自然醒",
        "陽台咖啡"
      ],
      "q60": [
        "我想學什麼？",
        "跳舞",
        "做菜",
        "新語言",
        "畫畫"
      ],
      "q61": [
        "我最拿手的菜是？",
        "湯",
        "抓飯",
        "烘焙點心",
        "沙拉"
      ],
      "q62": [
        "我最想先去哪個國家？",
        "土耳其",
        "日本",
        "摩洛哥",
        "挪威"
      ],
      "q63": [
        "我比較想從事哪種運動？",
        "游泳",
        "跑步",
        "騎自行車",
        "足球"
      ],
      "q64": [
        "我會選哪本書？",
        "冒險故事",
        "歷史書",
        "童話",
        "百科全書"
      ],
      "q65": [
        "在動物園我會先去看哪種動物？",
        "大象",
        "猴子",
        "企鵝",
        "長頸鹿"
      ],
      "q66": [
        "我對辣的看法？",
        "越辣越好",
        "一點點可以",
        "只能一丁點",
        "完全不吃"
      ],
      "q67": [
        "我在學校最喜歡哪一科？",
        "數學",
        "文學",
        "地理",
        "體育"
      ],
      "q68": [
        "我小時候夢想的職業？",
        "醫生",
        "老師",
        "太空人",
        "廚師"
      ],
      "q69": [
        "我對健行的看法？",
        "夢想來一趟長途健行",
        "一天就好",
        "要有舒適的設備",
        "家裡最好"
      ],
      "q70": [
        "我早上的狀態？",
        "精神飽滿",
        "還沒睡醒",
        "安安靜靜",
        "話很多"
      ],
      "q71": [
        "我最喜歡哪種堅果？",
        "榛果",
        "核桃",
        "腰果",
        "杏仁"
      ],
      "q72": [
        "突然多了一小時空閒，我會做什麼？",
        "看書",
        "散步",
        "打電話給家人",
        "做點吃的"
      ],
      "q73": [
        "我不喜歡哪種天氣？",
        "酷熱",
        "颳風",
        "雨雪泥濘",
        "嚴寒"
      ],
      "q74": [
        "我會把房間漆成什麼顏色？",
        "白色",
        "米色",
        "綠色",
        "淺藍色"
      ],
      "q75": [
        "我比較想玩什麼？",
        "西洋棋",
        "跳棋",
        "拼圖",
        "文字遊戲"
      ],
      "q76": [
        "我會為客人做什麼菜？",
        "抓飯",
        "派",
        "沙拉",
        "叫外送"
      ],
      "q77": [
        "我絕對不吃什麼？",
        "蘑菇",
        "魚",
        "橄欖",
        "水煮洋蔥"
      ],
      "q78": [
        "我喜歡怎麼泡茶？",
        "濃一點",
        "淡一點",
        "加糖",
        "加香草"
      ],
      "q79": [
        "家裡對我最重要的是？",
        "乾淨",
        "舒適",
        "採光好",
        "安靜"
      ],
      "q80": [
        "我怎麼學新東西？",
        "閱讀",
        "看教學影片",
        "動手實作",
        "請教別人"
      ],
      "q81": [
        "哪種野生動物最讓我著迷？",
        "老虎",
        "熊",
        "老鷹",
        "海豚"
      ],
      "q82": [
        "我會送媽媽什麼？",
        "花",
        "手作禮物",
        "一趟旅行",
        "溫暖的毯子"
      ],
      "q83": [
        "旅途中我會做什麼？",
        "看窗外",
        "看書",
        "聊天",
        "吃點心"
      ],
      "q84": [
        "我最喜歡的雞肉料理？",
        "烤雞肉串",
        "雞肉飯",
        "雞肉餅",
        "雞塊"
      ],
      "q85": [
        "搭火車我會選哪個位子？",
        "靠窗",
        "靠走道",
        "背對行進方向",
        "都可以"
      ],
      "q86": [
        "事情不順時我會怎麼做？",
        "立刻行動",
        "先想一想",
        "尋求建議",
        "有點擔心"
      ],
      "q87": [
        "我最主要的特質是？",
        "善良",
        "誠實",
        "堅持",
        "開朗"
      ],
      "q88": [
        "我在哪裡最能好好休息？",
        "鄉下親戚家",
        "海邊旅館",
        "帳篷裡",
        "家裡"
      ],
      "q89": [
        "我會選哪種糕點？",
        "薩姆薩烤餅",
        "喬治亞起司餅",
        "恰克恰克蜜糖酥",
        "閃電泡芙"
      ],
      "q90": [
        "我最想學哪種語言？",
        "阿拉伯語",
        "英語",
        "土耳其語",
        "日語"
      ],
      "q91": [
        "我能多久不吃甜食？",
        "一天",
        "一週",
        "一個月",
        "需要多久都行"
      ],
      "q92": [
        "快遲到時我會怎麼做？",
        "拚命跑",
        "先打電話通知",
        "搭計程車",
        "我從不遲到"
      ],
      "q93": [
        "東西壞了我會怎麼做？",
        "自己修",
        "看說明書",
        "找人幫忙",
        "每個按鈕都按一遍"
      ],
      "q94": [
        "我第一個放進行李箱的是？",
        "急救包",
        "一本書",
        "充電器",
        "點心"
      ],
      "q95": [
        "什麼活動能讓我平靜下來？",
        "做菜",
        "整理打掃",
        "畫畫",
        "散步"
      ],
      "q96": [
        "退休後我想做什麼？",
        "照顧花園",
        "旅行",
        "閱讀",
        "陪伴孫輩"
      ],
      "q97": [
        "什麼最讓我心煩？",
        "噪音",
        "雜亂",
        "遲到",
        "無禮"
      ],
      "q98": [
        "我最喜歡什麼氣味？",
        "剛出爐的麵包",
        "雨",
        "花香",
        "大海"
      ],
      "q99": [
        "甜點我會選什麼？",
        "水果",
        "冰淇淋",
        "派",
        "只喝茶"
      ]
    },
    "yesNo": {
      "c01": [
        "你現在想我嗎？",
        "非常想你",
        "忍著，但正想著你"
      ],
      "c02": [
        "看到我的訊息會微笑嗎？",
        "總是會微笑",
        "在心裡偷偷微笑"
      ],
      "c03": [
        "你記得我們第一次見面嗎？",
        "記得每一分鐘",
        "記得最重要的 — 你"
      ],
      "c04": [
        "今天想抱抱嗎？",
        "等著你的擁抱",
        "把擁抱留到之後"
      ],
      "c05": [
        "一起去海邊好嗎？",
        "已經在收行李了",
        "嚮往山上"
      ],
      "c06": [
        "我會逗你笑嗎？",
        "發自內心地笑",
        "偷偷藏著笑容"
      ],
      "c07": [
        "跟我在一起你安心嗎？",
        "在你身邊很安心",
        "跟你在一起很開心"
      ],
      "c08": [
        "白天會想到我嗎？",
        "常常想到你",
        "此刻正想著你"
      ],
      "c09": [
        "你喜歡我的驚喜嗎？",
        "超愛你的驚喜",
        "最喜歡你就在身邊"
      ],
      "c10": [
        "一起烤個派好嗎？",
        "已經穿上圍裙了",
        "寧願買個蛋糕"
      ],
      "c11": [
        "今晚一起看電影好嗎？",
        "已經在挑電影了",
        "只想好好聊天"
      ],
      "c12": [
        "你喜歡我的聲音嗎？",
        "可以一直聽下去",
        "更喜歡你的笑聲"
      ],
      "c13": [
        "週末去野餐好嗎？",
        "正在準備野餐墊",
        "邀你去溫馨的咖啡館"
      ],
      "c14": [
        "想收到我的信嗎？",
        "等著你的信",
        "想當面聽你說"
      ],
      "c15": [
        "我對你很重要嗎？",
        "非常重要",
        "比你想的還重要"
      ],
      "c16": [
        "一起在雨中散步好嗎？",
        "帶著兩人用的傘",
        "在家泡茶比較好"
      ],
      "c17": [
        "我們像嗎？",
        "你們像兩個半圓",
        "你們完美互補"
      ],
      "c18": [
        "喜歡我做的菜嗎？",
        "還想再來一碗",
        "最愛和你一起下廚"
      ],
      "c19": [
        "一起養寵物好嗎？",
        "已經在想名字了",
        "現在有隻泰迪熊就夠了"
      ],
      "c20": [
        "你知道我喜歡什麼嗎？",
        "倒背如流",
        "還想知道更多"
      ],
      "c21": [
        "一起跳舞好嗎？",
        "已經伸出手了",
        "會在旁邊拍手"
      ],
      "c22": [
        "我能給你靈感嗎？",
        "你每天都給予靈感",
        "在你身邊就覺得溫暖"
      ],
      "c23": [
        "你會保存我們的照片嗎？",
        "每一張都好好珍藏",
        "期待更美的新照片"
      ],
      "c24": [
        "一起看日出好嗎？",
        "正在設鬧鐘",
        "比較喜歡看夕陽"
      ],
      "c25": [
        "告訴我一個秘密好嗎？",
        "會在你耳邊悄悄說",
        "就讓它保持神秘吧"
      ],
      "c26": [
        "你相信我嗎？",
        "非常相信你",
        "每天都為你加油"
      ],
      "c27": [
        "只有我們兩個人去旅行好嗎？",
        "夢想成真",
        "要帶上所有親愛的人"
      ],
      "c28": [
        "你在等我的電話嗎？",
        "笑著等你",
        "更希望你來看看"
      ],
      "c29": [
        "喜歡我的擁抱嗎？",
        "全世界最溫暖",
        "喜歡手牽手"
      ],
      "c30": [
        "我們互相朗讀好嗎？",
        "已經在挑書了",
        "更想聽你讀"
      ],
      "c31": [
        "今天一起拍張照好嗎？",
        "正在找漂亮的背景",
        "先聊聊天"
      ],
      "c32": [
        "我能讓你心情變好嗎？",
        "一直都是",
        "和你在一起，連難過都變輕了"
      ],
      "c33": [
        "明天一起吃早餐好嗎？",
        "已經在泡可可了",
        "想多睡一會兒"
      ],
      "c34": [
        "你記得我的生日嗎？",
        "不用提醒也記得",
        "正偷偷準備驚喜"
      ],
      "c35": [
        "一起去溜冰好嗎？",
        "正在拿出溜冰鞋",
        "會在場邊為你加油"
      ],
      "c36": [
        "今天對你來說是好日子嗎？",
        "超棒的一天",
        "有你在會更好"
      ],
      "c37": [
        "你會幫我畫像嗎？",
        "已經拿起鉛筆了",
        "會畫一顆小愛心"
      ],
      "c38": [
        "一起種棵樹好嗎？",
        "正在挑地點",
        "先從窗台上的花開始"
      ],
      "c39": [
        "想聽一句讚美嗎？",
        "迫不及待",
        "有點害羞，但很想聽"
      ],
      "c40": [
        "等等再玩一次好嗎？",
        "想再來一局",
        "比起遊戲更想抱抱"
      ],
      "c41": [
        "你喜歡吃辣嗎？",
        "越辣越好",
        "選擇溫和一點的口味"
      ],
      "c42": [
        "你會游泳嗎？",
        "游得像魚一樣",
        "目前還待在岸邊"
      ],
      "c43": [
        "你想養貓嗎？",
        "已經在想名字了",
        "比較喜歡狗"
      ],
      "c44": [
        "你想有一天去伊斯坦堡嗎？",
        "已經夢想著博斯普魯斯海峽",
        "會選別的城市"
      ],
      "c45": [
        "你喜歡做菜嗎？",
        "開開心心地下廚",
        "寧願去洗碗"
      ],
      "c46": [
        "你想學做抓飯嗎？",
        "已經在找食譜了",
        "寧願品嚐別人做的"
      ],
      "c47": [
        "你喜歡看書嗎？",
        "身邊總有一本書",
        "比較喜歡聽故事"
      ],
      "c48": [
        "你會騎腳踏車嗎？",
        "現在就能騎出門",
        "答應會去學"
      ],
      "c49": [
        "比起大海，你更喜歡山嗎？",
        "選山",
        "選海"
      ],
      "c50": [
        "你想看看沙漠嗎？",
        "夢想著沙丘",
        "寧願選森林"
      ],
      "c51": [
        "你喜歡冬天嗎？",
        "期待第一場雪",
        "期待夏天"
      ],
      "c52": [
        "你喝茶不加糖嗎？",
        "喜歡茶的純粹滋味",
        "少不了一匙糖"
      ],
      "c53": [
        "你怕蜘蛛嗎？",
        "離牠們遠遠的",
        "淡定地把牠們送到屋外"
      ],
      "c54": [
        "你喜歡畫畫嗎？",
        "已經拿起畫筆",
        "寧願欣賞別人的畫"
      ],
      "c55": [
        "你想看極光嗎？",
        "已經在查哪裡看得到",
        "寧願仰望星星"
      ],
      "c56": [
        "你喜歡下雨天嗎？",
        "喜歡窗外的雨聲",
        "等待太陽出來"
      ],
      "c57": [
        "你會騎馬嗎？",
        "穩穩坐在馬鞍上",
        "目前只是夢想"
      ],
      "c58": [
        "你想養狗嗎？",
        "夢想有個忠實的朋友",
        "目前要照顧的已經夠多了"
      ],
      "c59": [
        "比起鹹的，你更喜歡甜的嗎？",
        "沒有甜食活不下去",
        "選鹹的"
      ],
      "c60": [
        "你喜歡搭火車旅行嗎？",
        "喜歡車輪的節奏",
        "選飛機"
      ],
      "c61": [
        "你容易一早就開始一天嗎？",
        "精神飽滿地開始一天",
        "要到中午才進入狀態"
      ],
      "c62": [
        "你喜歡搭帳篷露營嗎？",
        "已經在收拾背包",
        "選舒適的旅館"
      ],
      "c63": [
        "你想住在海邊嗎？",
        "夢想著海浪聲",
        "選城市"
      ],
      "c64": [
        "你冬天也吃冰淇淋嗎？",
        "天寒地凍也照吃",
        "只在夏天吃"
      ],
      "c65": [
        "你喜歡巧克力嗎？",
        "每一種都認得",
        "能淡定地走過"
      ],
      "c66": [
        "你會烤派嗎？",
        "烤得像奶奶一樣好",
        "答應會去學"
      ],
      "c67": [
        "你喜歡看星星嗎？",
        "認得各個星座",
        "比較喜歡晴朗的白天"
      ],
      "c68": [
        "你想有一天種自己的園子嗎？",
        "已經在挑幼苗",
        "先從一盆花開始"
      ],
      "c69": [
        "你喜歡野花嗎？",
        "喜歡雛菊和矢車菊",
        "比較喜歡庭園裡的花"
      ],
      "c70": [
        "你喝咖啡嗎？",
        "沒有咖啡就無法開始一天",
        "選茶"
      ],
      "c71": [
        "你喜歡自製檸檬水嗎？",
        "已經在切檸檬",
        "寧願喝白開水"
      ],
      "c72": [
        "你想有一天去日本嗎？",
        "夢想看到櫻花盛開",
        "會選別的國家"
      ],
      "c73": [
        "你喜歡秋天嗎？",
        "喜歡踩著落葉沙沙作響",
        "期待春天"
      ],
      "c74": [
        "你喜歡薰衣草的香味嗎？",
        "很喜歡這個香氣",
        "比較喜歡別的香味"
      ],
      "c75": [
        "你喜歡桌遊嗎？",
        "已經在擺棋盤",
        "比較想去散步"
      ],
      "c76": [
        "你會開車嗎？",
        "開車很有自信",
        "目前還是乘客"
      ],
      "c77": [
        "你想有一天看看大洋嗎？",
        "夢想看到大浪",
        "有海就夠了"
      ],
      "c78": [
        "你想在農場住一段時間嗎？",
        "已經在餵雞了",
        "留在城市"
      ],
      "c79": [
        "你喜歡大城市嗎？",
        "喜歡城市的燈火",
        "選擇寧靜"
      ],
      "c80": [
        "比起甜食，你更喜歡水果嗎？",
        "選水果",
        "選甜食"
      ],
      "c81": [
        "你想在海裡看到海豚嗎？",
        "很想親眼看看",
        "寧願讀讀關於牠們的書"
      ],
      "c82": [
        "你喜歡夏天嗎？",
        "期待炎熱的日子",
        "喜歡涼爽的天氣"
      ],
      "c83": [
        "你喜歡在公園散步嗎？",
        "什麼天氣都去散步",
        "比較喜歡待在家"
      ],
      "c84": [
        "你喜歡手寫嗎？",
        "字跡工整",
        "在手機上打字"
      ],
      "c85": [
        "你喜歡划船遊玩嗎？",
        "已經握起船槳",
        "留在岸上"
      ],
      "c86": [
        "你想環遊世界嗎？",
        "已經在規劃路線",
        "幾個國家就夠了"
      ],
      "c87": [
        "你會堆雪人嗎？",
        "要堆出最大的那個",
        "寧願打雪仗"
      ],
      "c88": [
        "你今年想學點新東西嗎？",
        "已經在挑課程",
        "要做的事已經夠多了"
      ],
      "c89": [
        "你喜歡安靜嗎？",
        "珍惜寧靜",
        "喜歡熱熱鬧鬧"
      ],
      "c90": [
        "你喜歡送禮物給家人嗎？",
        "不需要理由就讓家人開心",
        "比較喜歡用實際行動幫忙"
      ]
    },
    "loves": {
      "s01": [
        "假期去哪裡？",
        "海灘",
        "山上",
        "旅行",
        "獨處時光"
      ],
      "s02": [
        "完美的夜晚？",
        "在家看電影",
        "散步",
        "餐廳",
        "桌遊"
      ],
      "s03": [
        "最喜歡的天氣？",
        "晴天",
        "下雨",
        "下雪",
        "星空"
      ],
      "s04": [
        "最喜歡的動物？",
        "小貓",
        "小狗",
        "馬",
        "海豚"
      ],
      "s05": [
        "晚餐吃什麼？",
        "披薩",
        "壽司",
        "甜點",
        "烤肉"
      ],
      "s06": [
        "最喜歡的飲料？",
        "咖啡",
        "茶",
        "熱可可",
        "檸檬水"
      ],
      "s07": [
        "最喜歡的季節？",
        "春天",
        "夏天",
        "秋天",
        "冬天"
      ],
      "s08": [
        "最喜歡的花？",
        "玫瑰",
        "鬱金香",
        "向日葵",
        "薰衣草"
      ],
      "s09": [
        "怎麼放鬆？",
        "看書",
        "畫畫",
        "騎腳踏車",
        "在吊床午睡"
      ],
      "s10": [
        "怎麼旅行？",
        "火車",
        "飛機",
        "開車",
        "搭船"
      ],
      "s11": [
        "夢想的家？",
        "城市公寓",
        "海邊小屋",
        "山中木屋",
        "農場"
      ],
      "s12": [
        "來點甜的？",
        "冰淇淋",
        "巧克力",
        "蛋糕",
        "水果"
      ],
      "s13": [
        "完美的早晨？",
        "床上早餐",
        "晨跑",
        "睡到自然醒",
        "陽台咖啡"
      ],
      "s14": [
        "夢想的約會？",
        "野餐",
        "溜冰場",
        "遊樂園",
        "屋頂看星星"
      ],
      "s15": [
        "最棒的禮物？",
        "一束花",
        "一封信",
        "一趟旅行",
        "禮物盒"
      ],
      "s16": [
        "最喜歡的大自然？",
        "大海",
        "森林",
        "沙漠",
        "極光"
      ],
      "s17": [
        "最喜歡的水果？",
        "蘋果",
        "草莓",
        "西瓜",
        "葡萄"
      ],
      "s18": [
        "休假日做什麼？",
        "去山裡健行",
        "在家做菜",
        "逛博物館",
        "釣魚"
      ],
      "s19": [
        "最喜歡的早餐？",
        "鬆餅",
        "歐姆蛋",
        "莓果粥",
        "可頌"
      ],
      "s20": [
        "最喜歡的鳥？",
        "貓頭鷹",
        "鸚鵡",
        "天鵝",
        "孔雀"
      ],
      "s21": [
        "想去哪座城市？",
        "伊斯坦堡",
        "巴黎",
        "東京",
        "杜拜"
      ],
      "s22": [
        "最喜歡的運動？",
        "足球",
        "游泳",
        "網球",
        "騎馬"
      ],
      "s23": [
        "花園裡種什麼？",
        "蘋果樹",
        "玫瑰",
        "蔬菜",
        "草莓"
      ],
      "s24": [
        "最喜歡的烘焙點心？",
        "小餡餅",
        "甜甜圈",
        "餅乾",
        "果仁蜜餅"
      ],
      "s25": [
        "住在哪裡？",
        "河邊",
        "森林裡",
        "大城市",
        "島上"
      ],
      "s26": [
        "最喜歡的海洋生物？",
        "海龜",
        "鯨魚",
        "章魚",
        "海馬"
      ],
      "s27": [
        "搭什麼出遊？",
        "腳踏車",
        "滑板車",
        "熱氣球",
        "小船"
      ],
      "s28": [
        "最喜歡的休閒活動？",
        "編織",
        "拍攝大自然",
        "園藝",
        "書法"
      ],
      "s29": [
        "最喜歡的湯？",
        "羅宋湯",
        "雞湯",
        "南瓜湯",
        "扁豆湯"
      ],
      "s30": [
        "森林裡的動物？",
        "刺蝟",
        "松鼠",
        "狐狸",
        "鹿"
      ],
      "s31": [
        "來點小零嘴？",
        "椰棗",
        "杏仁",
        "開心果",
        "杏桃乾"
      ],
      "s32": [
        "健行要帶什麼？",
        "帳篷",
        "保溫瓶",
        "地圖",
        "手電筒"
      ],
      "s33": [
        "最喜歡的甜點？",
        "布丁",
        "起司蛋糕",
        "蜂蜜鬆餅",
        "水果沙拉"
      ],
      "s34": [
        "冬天做什麼？",
        "堆雪人",
        "坐雪橇",
        "窗邊喝茶",
        "滑雪"
      ],
      "s35": [
        "夏天做什麼？",
        "游泳",
        "採莓果",
        "划船",
        "堆沙堡"
      ],
      "s36": [
        "用什麼畫畫？",
        "水彩",
        "鉛筆",
        "蠟筆",
        "畫布顏料"
      ],
      "s37": [
        "最喜歡的蔬菜？",
        "紅蘿蔔",
        "番茄",
        "玉米",
        "南瓜"
      ],
      "s38": [
        "什麼讓家更溫馨？",
        "壁爐",
        "柔軟的毯子",
        "室內植物",
        "一架子的書"
      ],
      "s39": [
        "玩什麼？",
        "西洋棋",
        "拼圖",
        "桌遊",
        "球類遊戲"
      ],
      "s40": [
        "農場裡住著誰？",
        "乳牛",
        "小羊",
        "母雞",
        "小山羊"
      ],
      "s41": [
        "茶裡加什麼？",
        "蜂蜜",
        "檸檬",
        "果醬",
        "薄荷"
      ],
      "s42": [
        "海邊有什麼？",
        "燈塔",
        "貝殼",
        "帆船",
        "海鷗"
      ],
      "s43": [
        "早晨怎麼開始？",
        "做運動",
        "一杯茶",
        "散步",
        "一本書"
      ],
      "s44": [
        "最喜歡的莓果？",
        "覆盆莓",
        "藍莓",
        "櫻桃",
        "黑莓"
      ]
    },
    "who": [
      "我們誰比較常遲到？",
      "我們誰會先和好？",
      "我們誰煮飯比較好吃？",
      "我們誰比較愛笑？",
      "我們誰出門準備比較久？",
      "我們誰比較常弄丟鑰匙？",
      "我們誰比較記得重要的日子？",
      "我們誰比較愛吃甜食？",
      "我們誰先睡著？",
      "我們誰比較早起？",
      "我們誰比較常說「我想你」？",
      "我們誰比較會挑禮物？",
      "我們誰比較愛開玩笑？",
      "我們誰開車比較厲害？",
      "我們誰講電話比較久？",
      "我們誰比較喜歡旅行？",
      "我們誰比較容易覺得委屈？",
      "我們誰原諒得比較快？",
      "我們誰拍照比較多？",
      "我們誰比較會理財？",
      "我們誰比較常買用不到的東西？",
      "我們誰比較會安慰人？",
      "我們誰在困難時比較冷靜？",
      "我們誰總是在找手機？",
      "我們誰比較喜歡招待客人？",
      "我們誰比較常做早餐？",
      "我們誰在陌生城市比較會認路？",
      "我們誰傳的訊息比較長？",
      "我們誰會先提議去散步？",
      "我們誰比較喜歡動物？",
      "我們誰比較守得住秘密？",
      "我們誰點餐時考慮比較久？",
      "我們誰比較掛念家人朋友？",
      "我們誰比較常製造驚喜？",
      "我們誰比較愛整潔？",
      "我們誰會先發現對方的新髮型？",
      "我們誰比較常想起好笑的往事？",
      "我們誰比較有耐心？",
      "我們誰比較常說「謝謝」？",
      "我們誰會先主動幫忙？",
      "我們誰心算比較好？",
      "我們誰讀的書比較多？",
      "我們誰打字比較快？",
      "我們誰比較常打電話給父母？",
      "我們誰比較會講故事？",
      "我們誰的字比較工整？",
      "我們誰比較愛吃辣？",
      "我們誰比較常把東西忘在家裡？",
      "我們誰比較擅長用電子產品？",
      "我們誰比較喜歡學新東西？",
      "我們誰比較會做計劃？",
      "我們誰在市場比較會殺價？",
      "我們誰比較熱愛大自然？",
      "我們誰吃飯比較快？",
      "我們誰喝茶喝得比較多？",
      "我們誰比較會照顧植物？",
      "我們誰比較懂地理？",
      "我們誰西洋棋下得比較好？",
      "我們誰在市場比較會挑水果？",
      "我們誰比較常看天氣預報？",
      "我們誰比較怕蜘蛛？",
      "我們誰比較勇敢？",
      "我們誰好奇心比較強？",
      "我們誰解謎比較快？",
      "我們誰畫畫比較好？",
      "我們誰比較常幫助鄰居？",
      "我們誰比較會跟孩子相處？",
      "我們誰比較喜歡散步？",
      "我們誰比較常看說明書？",
      "我們誰比較會記名字？",
      "我們誰學外語單字比較快？",
      "我們誰比較會烘焙？",
      "我們誰比較會給建議？",
      "我們誰比較喜歡寒冷的天氣？",
      "我們誰健行時表現會比較好？",
      "我們誰比較常看新聞？",
      "我們誰比較常嘗試新菜色？",
      "我們誰收拾行李比較快？",
      "我們誰比較會修東西？",
      "我們誰比較常跟動物說話？",
      "我們誰比較常洗碗？",
      "我們誰比較懂歷史？",
      "我們誰比較常拖延？",
      "我們誰跟新朋友比較快熟起來？",
      "我們誰比較注重健康？"
    ],
    "phrases": [
      "讓我微笑的是，你…",
      "和你在一起最喜歡的一天是…",
      "謝謝你…",
      "我難過的時候，能幫到我的是…",
      "我希望有一天我們一起…",
      "關於我們最溫暖的回憶是…",
      "你最擅長的是…",
      "我覺得安心的時候是…",
      "如果我們有一整天的空閒，我們會…",
      "我為你感到驕傲，因為…",
      "我們最完美的夜晚是…",
      "我永遠不會忘記你…",
      "我喜歡你說…",
      "明年我希望我們…",
      "對我來說，你就像…",
      "你送我最好的禮物是…",
      "我想你的時候是…",
      "我們最好笑的時候是…",
      "我一直想對你說…",
      "我們的地方是…",
      "想到你的時候，我…",
      "你會讓我的一天更美好，只要你…",
      "我喜歡我們的一個習慣是…",
      "我對我們的心願：…",
      "我們遇過最好笑的事是…",
      "我感受到你的關心，是在你…",
      "和你一起的早晨是…",
      "如果用一個詞形容我們，那就是…",
      "我想向你學習如何…",
      "謝謝你總是…",
      "小時候我最喜歡的食物是…",
      "如果能在任何一個國家待一天，我會…",
      "我得到過最好的建議是…",
      "我總是忍不住笑，每當…",
      "家鄉裡我最喜歡的地方是…",
      "如果我有一間自己的小店，我會賣…",
      "我最拿手的菜是…",
      "我至今還記得的童年夢想是…",
      "要讓我開心很簡單，只要…",
      "我去過最令人驚嘆的地方是…",
      "我想學…",
      "我理想的休假日，一開始是…",
      "如果能養任何一種動物，我會選…",
      "家人總是說我…",
      "我怎麼也習慣不了…",
      "我最有用的習慣是…",
      "我讀過最好的書是…",
      "十年後，我想…",
      "我夢想中的家是…",
      "我小時候遇過最好笑的事是…",
      "對我來說，幸福是…",
      "我很難放棄…",
      "如果我有超能力，那會是…",
      "我最看重別人的是…",
      "有空閒的晚上，我會…",
      "我最喜歡的氣味是…",
      "我絕對不吃的食物是…",
      "我出門一定會帶的東西是…",
      "我想去…，因為…",
      "我收過最好的禮物是…",
      "我最特別的習慣是…",
      "如果每天多出一小時，我會…",
      "讓我學到很多的人是…",
      "難熬的日子裡，支撐我的是…",
      "旅途中我吃過最好吃的是…",
      "如果能換一天工作，我會選…",
      "我最喜歡的季節是…",
      "朋友們說我…",
      "有一天，我想教別人…",
      "我一天中的小確幸是…"
    ],
    "truth": {
      "t01": [
        "章魚有三顆心臟。",
        true,
        "兩顆心臟把血液送到鰓，第三顆把血液送往全身。"
      ],
      "t02": [
        "從月球上用肉眼能看到萬里長城。",
        false,
        "看不到：長城太窄了。即使從地球軌道上也很難看見。"
      ],
      "t03": [
        "蜂蜜可以保存幾千年而不變質。",
        true,
        "古埃及墓中曾發現數千年前的蜂蜜，依然保存良好。"
      ],
      "t04": [
        "香蕉長在樹上。",
        false,
        "香蕉是巨大的草本植物：它的「樹幹」是由緊緊包覆的葉子構成的。"
      ],
      "t05": [
        "金星是太陽系中最熱的行星。",
        true,
        "濃厚的大氣讓金星溫度高達約 460 °C，比水星還熱。"
      ],
      "t06": [
        "蝙蝠看不見。",
        false,
        "蝙蝠看得見，在黑暗中還會用回聲定位辨別方向。"
      ],
      "t07": [
        "鯨魚是魚。",
        false,
        "鯨是哺乳動物：用肺呼吸空氣，並用乳汁哺育幼崽。"
      ],
      "t08": [
        "撒哈拉是世界上最大的沙漠。",
        false,
        "最大的沙漠是南極洲。撒哈拉是最大的熱沙漠。"
      ],
      "t09": [
        "長頸鹿的頸骨數量和人類一樣。",
        true,
        "兩者都有七節頸椎，只是長頸鹿的特別長。"
      ],
      "t10": [
        "從植物學來看，番茄是漿果。",
        true,
        "植物學家把番茄歸為漿果：一種內含種子的多汁果實。"
      ],
      "t11": [
        "從植物學來看，草莓是漿果。",
        false,
        "草莓是假果：真正的果實是表面那些小小的「種子」。"
      ],
      "t12": [
        "在太空中聽得到爆炸聲。",
        false,
        "太空幾乎沒有空氣，聲音無法傳播。"
      ],
      "t13": [
        "在高山上，水的沸點比較低。",
        true,
        "高處氣壓較低，水不到 100 °C 就會沸騰。"
      ],
      "t14": [
        "企鵝住在北極。",
        false,
        "野生企鵝只生活在南半球，遙遠的北方沒有企鵝。"
      ],
      "t15": [
        "聖母峰是海拔最高的山。",
        true,
        "聖母峰海拔約 8,849 公尺。"
      ],
      "t16": [
        "人只用了大腦的 10%。",
        false,
        "這是迷思：一天之中，大腦幾乎每個部分都會活動。"
      ],
      "t17": [
        "人的心臟一天大約跳 10 萬次。",
        true,
        "以每分鐘約 70 下計算，一天大約跳 10 萬次。"
      ],
      "t18": [
        "金魚的記憶只有三秒。",
        false,
        "實驗顯示，金魚能把學到的事記住好幾個月。"
      ],
      "t19": [
        "澳洲既是國家也是大陸。",
        true,
        "澳洲是唯一佔據整塊大陸的國家。"
      ],
      "t20": [
        "閃電從不會打在同一個地方兩次。",
        false,
        "會的：高樓每年都會被閃電擊中很多次。"
      ],
      "t21": [
        "鴕鳥害怕時會把頭埋進沙裡。",
        false,
        "這是迷思：受驚的鴕鳥會逃跑，或平貼在地上躲藏。"
      ],
      "t22": [
        "世界上最小的鳥是一種蜂鳥。",
        true,
        "古巴的吸蜜蜂鳥重約 2 公克，比其他鳥都輕。"
      ],
      "t23": [
        "西瓜大約 90% 是水。",
        true,
        "西瓜約有 92% 是水，所以特別消暑。"
      ],
      "t24": [
        "蜘蛛有六隻腳。",
        false,
        "蜘蛛有八隻腳。昆蟲才有六隻腳，而蜘蛛不是昆蟲。"
      ],
      "t25": [
        "月亮自己會發光。",
        false,
        "月亮本身不發光，它反射的是太陽光。"
      ],
      "t26": [
        "大象是最大的陸地動物。",
        true,
        "非洲草原象的體重可超過 6 公噸。"
      ],
      "t27": [
        "藍鯨是科學已知最大的動物。",
        true,
        "藍鯨可長達 30 公尺以上，比任何已知的恐龍都大。"
      ],
      "t28": [
        "變色龍變色只是為了偽裝。",
        false,
        "牠的顏色更多取決於情緒、溫度，以及向同類傳遞訊號。"
      ],
      "t29": [
        "電話是愛迪生發明的。",
        false,
        "1876 年，亞歷山大·格拉漢姆·貝爾取得了電話專利。"
      ],
      "t30": [
        "盤尼西林是亞歷山大·弗萊明發現的。",
        true,
        "弗萊明在 1928 年發現盤尼西林，這是第一種抗生素。"
      ],
      "t31": [
        "太陽系最高的火山在火星上。",
        true,
        "火星上的奧林帕斯山高約 22 公里，幾乎是聖母峰的 2.5 倍。"
      ],
      "t32": [
        "我們靜脈裡的血是藍色的。",
        false,
        "血液一直是紅色的；靜脈看起來發藍，是因為光線穿過皮膚的方式。"
      ],
      "t33": [
        "大西洋是地球上最大的海洋。",
        false,
        "最大的是太平洋：它比地球上所有陸地加起來還大。"
      ],
      "t34": [
        "以面積來說，俄羅斯是世界上最大的國家。",
        true,
        "俄羅斯面積超過 1,700 萬平方公里。"
      ],
      "t35": [
        "加拿大擁有世界上最長的海岸線。",
        true,
        "加拿大的海岸線超過 20 萬公里，比任何國家都長。"
      ],
      "t36": [
        "牛的胃有四個部分。",
        true,
        "牛的胃分成四個胃室，牠就是這樣消化青草的。"
      ],
      "t37": [
        "獅子是世界上最大的貓科動物。",
        false,
        "最大的貓科動物是老虎，尤其是西伯利亞虎。"
      ],
      "t38": [
        "地球是最靠近太陽的行星。",
        false,
        "最近的是水星，其次是金星；地球是第三顆行星。"
      ],
      "t39": [
        "陽光大約要 8 分鐘才能到達地球。",
        true,
        "光從太陽出發，約 8 分 20 秒走完 1.5 億公里。"
      ],
      "t40": [
        "海豚睡覺時一次只讓半邊大腦休息。",
        true,
        "一半大腦休息，另一半保持警覺，並記得要呼吸。"
      ],
      "t41": [
        "馬鈴薯原產於愛爾蘭。",
        false,
        "馬鈴薯原產於南美洲：幾千年前就在安地斯山脈種植。"
      ],
      "t42": [
        "巧克力是用可可樹的種子做的。",
        true,
        "可可果直接長在樹幹上，裡面的種子就是巧克力的原料。"
      ],
      "t43": [
        "鯊魚是哺乳動物。",
        false,
        "鯊魚是魚，用鰓呼吸。海裡的哺乳動物是鯨和海豚。"
      ],
      "t44": [
        "有些竹子一天能長將近一公尺。",
        true,
        "竹子是地球上生長最快的植物之一。"
      ],
      "t45": [
        "貓頭鷹的頭能轉整整 360 度。",
        false,
        "貓頭鷹的頭大約能轉 270 度，很厲害，但不是一整圈。"
      ],
      "t46": [
        "鑽石和鉛筆裡的石墨是同一種物質。",
        true,
        "兩者都是純碳，只是原子排列方式不同。"
      ],
      "t47": [
        "駱駝把水儲存在駝峰裡。",
        false,
        "駝峰儲存的是脂肪而不是水，在長途旅行中提供能量。"
      ],
      "t48": [
        "人體最小的骨頭在耳朵裡。",
        true,
        "中耳的鐙骨只有約 3 公釐長。"
      ],
      "t49": [
        "大型鸚鵡可以活超過 50 年。",
        true,
        "照顧得好的金剛鸚鵡和鳳頭鸚鵡常能活 50 年以上。"
      ],
      "t50": [
        "萊特兄弟完成了第一次動力飛機飛行。",
        true,
        "他們在 1903 年飛上天空，第一次飛行只持續了 12 秒。"
      ],
      "t51": [
        "輪子是中世紀發明的。",
        false,
        "輪子已有 5,000 多年歷史：約 5,500 年前就在美索不達米亞使用。"
      ],
      "t52": [
        "海馬是魚。",
        true,
        "海馬用鰓呼吸、靠鰭游泳，和其他魚一樣。"
      ],
      "t53": [
        "蜂鳥會倒著飛。",
        true,
        "蜂鳥是唯一真正能倒退飛行的鳥。"
      ],
      "t54": [
        "艾菲爾鐵塔夏天會變高一點。",
        true,
        "高溫讓金屬膨脹，鐵塔會長高約 15 公分。"
      ],
      "t55": [
        "皮膚是人體最大的器官。",
        true,
        "成人的皮膚重達好幾公斤，保護著整個身體。"
      ],
      "t56": [
        "紅色會讓公牛生氣。",
        false,
        "公牛幾乎分辨不出紅色：激怒牠的是動作，不是顏色。"
      ],
      "t57": [
        "家蠅只能活一天。",
        false,
        "家蠅大約能活一個月。只活一兩天的是成年的蜉蝣。"
      ],
      "t58": [
        "鳳梨長在樹上。",
        false,
        "鳳梨長在低矮的多葉植物上，從植株正中央長出來。"
      ],
      "t59": [
        "花生是堅果。",
        false,
        "花生是豆科植物，和豌豆、豆子是親戚，豆莢在地下成熟。"
      ],
      "t60": [
        "北極和南極一樣冷。",
        false,
        "南極冷得多：它位於高聳的冰封大陸上，北極則在海洋上。"
      ]
    },
    "hints": {
      "h01": [
        "企鵝",
        "我是鳥，卻不會飛",
        "我住在非常寒冷的地方",
        "我總是穿著燕尾服",
        "鴕鳥",
        "海豹",
        "海鷗"
      ],
      "h02": [
        "大象",
        "我幾乎整天都在吃東西",
        "我的耳朵像兩把大扇子",
        "我有長長的鼻子",
        "犀牛",
        "河馬",
        "長頸鹿"
      ],
      "h03": [
        "長頸鹿",
        "我睡得很少，常常站著睡",
        "我吃最高的樹上的葉子",
        "我的脖子最長",
        "斑馬",
        "駱駝",
        "駝鹿"
      ],
      "h04": [
        "駱駝",
        "我可以很久不喝水",
        "人們叫我沙漠之舟",
        "我的背上有一個或兩個駝峰",
        "馬",
        "驢",
        "羊駝"
      ],
      "h05": [
        "蜜蜂",
        "我能告訴同伴花在哪裡",
        "我從早到晚在草地上工作",
        "我會釀蜂蜜",
        "黃蜂",
        "蒼蠅",
        "蝴蝶"
      ],
      "h06": [
        "烏龜",
        "我可以活一百多年",
        "我從不著急",
        "我把家背在背上",
        "蝸牛",
        "蜥蜴",
        "刺蝟"
      ],
      "h07": [
        "袋鼠",
        "我的尾巴幫我保持平衡",
        "我住在澳洲",
        "我把寶寶放在育兒袋裡",
        "無尾熊",
        "野兔",
        "松鼠"
      ],
      "h08": [
        "貓頭鷹",
        "我的頭幾乎能轉到背後",
        "我在夜裡捕獵",
        "我在黑暗的森林裡咕咕叫",
        "烏鴉",
        "老鷹",
        "鴿子"
      ],
      "h09": [
        "海豚",
        "我住在海裡，卻呼吸空氣",
        "我會幫助人，用口哨聲交談",
        "我喜歡在浪花上跳躍",
        "鯊魚",
        "鯨魚",
        "海豹"
      ],
      "h10": [
        "松鼠",
        "我把食物藏起來，有時卻忘了藏在哪",
        "我住在樹洞裡",
        "我啃堅果和松果",
        "刺蝟",
        "野兔",
        "老鼠"
      ],
      "h11": [
        "蜘蛛",
        "很多人以為我是昆蟲，其實不是",
        "我有八條腿",
        "我會織網",
        "螞蟻",
        "甲蟲",
        "蚊子"
      ],
      "h12": [
        "貓",
        "我在黑暗中看得比人清楚",
        "我喜歡溫暖的窗台",
        "我會呼嚕呼嚕叫，還會抓老鼠",
        "兔子",
        "倉鼠",
        "鸚鵡"
      ],
      "h13": [
        "西瓜",
        "科學家說我是一種漿果",
        "人們在夏天等著我",
        "外面綠，裡面紅",
        "哈密瓜",
        "南瓜",
        "鳳梨"
      ],
      "h14": [
        "麵包",
        "幾乎每個國家都會烤我",
        "午餐時人們把我切成片",
        "我有白的、裸麥的，外面有一層皮",
        "鬆餅",
        "派",
        "餅乾"
      ],
      "h15": [
        "蜂蜜",
        "我可以保存好幾千年",
        "感冒時人們把我加進溫茶裡",
        "蜜蜂製造了我",
        "果醬",
        "糖",
        "牛奶"
      ],
      "h16": [
        "檸檬",
        "我富含維生素 C",
        "人們把我放進茶裡",
        "我又黃又酸",
        "柳橙",
        "葡萄柚",
        "萊姆"
      ],
      "h17": [
        "紅蘿蔔",
        "我長在土裡，只露出葉子",
        "大家說我對眼睛好",
        "我是橘色的，兔子最喜歡我",
        "甜菜根",
        "白蘿蔔",
        "馬鈴薯"
      ],
      "h18": [
        "蘋果",
        "我有夏季品種也有冬季品種",
        "我可以做成派和果汁",
        "我長在樹上，紅的或綠的",
        "梨子",
        "桃子",
        "李子"
      ],
      "h19": [
        "香蕉",
        "我一串串長在高大的植物上",
        "猴子非常喜歡我",
        "我是黃色的，要剝皮才能吃",
        "芒果",
        "奇異果",
        "鳳梨"
      ],
      "h20": [
        "茶",
        "中國人喝我已經好幾千年",
        "我有紅的、綠的，也有花草的",
        "人們用壺沖泡我",
        "咖啡",
        "可可",
        "果汁"
      ],
      "h21": [
        "蛋",
        "沒有我，很難烤出鬆軟的糕點",
        "我可以煎、可以煮，也可以炒",
        "母雞生下我",
        "起司",
        "堅果",
        "馬鈴薯"
      ],
      "h22": [
        "雨傘",
        "我大部分時間都收合著",
        "天空變灰時，人們會帶上我",
        "下雨時我讓你不被淋濕",
        "雨衣",
        "帽子",
        "雨靴"
      ],
      "h23": [
        "時鐘",
        "有的我靠沙子或陽光運作",
        "我掛在牆上，也立在塔上",
        "我用指針告訴你時間",
        "指南針",
        "月曆",
        "溫度計"
      ],
      "h24": [
        "鑰匙",
        "沒有我，門不讓你進去",
        "我常被串在一個環上",
        "我能打開鎖",
        "剪刀",
        "螺絲起子",
        "迴紋針"
      ],
      "h25": [
        "蠟燭",
        "我工作得越久，就變得越小",
        "停電時人們會點燃我",
        "我是蠟做的，有一根燭芯",
        "手電筒",
        "檯燈",
        "火柴"
      ],
      "h26": [
        "剪刀",
        "我有兩個圈和兩個尖端",
        "我能從紙上剪出形狀",
        "我剪布也剪紙",
        "刀子",
        "針",
        "尺"
      ],
      "h27": [
        "牙刷",
        "我有很多刷毛",
        "每三個月就要換一次",
        "我早晚幫你清潔牙齒",
        "肥皂",
        "毛巾",
        "海綿"
      ],
      "h28": [
        "冰箱",
        "我的裡面永遠是冬天",
        "打開我時燈會亮",
        "我讓食物保持冰涼",
        "爐子",
        "烤箱",
        "櫥櫃"
      ],
      "h29": [
        "腳踏車",
        "我不用燃料也不用電",
        "我有把手、車鈴和鏈條",
        "我有兩個輪子和踏板",
        "滑板車",
        "機車",
        "滑板"
      ],
      "h30": [
        "飛機",
        "我有翅膀，但不是鳥",
        "大家在機場等我",
        "我載著乘客在雲上飛",
        "直升機",
        "火箭",
        "熱氣球"
      ],
      "h31": [
        "火車",
        "我只在自己的路上行駛",
        "我有很多節車廂",
        "我在鐵軌上一站一站地開",
        "路面電車",
        "公車",
        "捷運"
      ],
      "h32": [
        "橋",
        "我用石頭、木頭或鋼鐵建成",
        "船可以從我下面經過",
        "我連接河的兩岸",
        "隧道",
        "道路",
        "水壩"
      ],
      "h33": [
        "鉛筆",
        "我的身體裡有石墨",
        "我變鈍時要削一削",
        "我能寫字畫畫，橡皮擦能擦掉我的字",
        "原子筆",
        "粉筆",
        "麥克筆"
      ],
      "h34": [
        "書",
        "我不說話，卻教人很多",
        "我有封面和很多頁",
        "人們閱讀我，也能到館裡借我",
        "雜誌",
        "報紙",
        "筆記本"
      ],
      "h35": [
        "行李箱",
        "我常常旅行，但總在別人手裡",
        "出門前人們把東西裝進我",
        "我有提把和輪子，裝著衣服",
        "背包",
        "手提袋",
        "箱子"
      ],
      "h36": [
        "圖書館",
        "在這裡大家請你小聲說話",
        "在這裡可以辦借書證",
        "成千上萬本書可以借回家",
        "學校",
        "書店",
        "檔案館"
      ],
      "h37": [
        "機場",
        "這裡有護照查驗",
        "這裡會廣播登機通知",
        "飛機從這裡起飛",
        "火車站",
        "港口",
        "客運站"
      ],
      "h38": [
        "沙漠",
        "白天很熱，夜裡卻可能很冷",
        "在這裡可以找到綠洲",
        "沙子很多，水很少",
        "草原",
        "莽原",
        "海灘"
      ],
      "h39": [
        "火山",
        "我可以沉睡好幾百年",
        "我的頂端冒出煙",
        "我會噴出熔岩",
        "高山",
        "間歇泉",
        "島嶼"
      ],
      "h40": [
        "彩虹",
        "只有背對太陽時才看得到我",
        "我常在雨後出現",
        "天空中一道七種顏色的彎弧",
        "閃電",
        "雲",
        "極光"
      ],
      "h41": [
        "月亮",
        "我永遠用同一面對著地球",
        "我可以是滿月，也可以是細細的月牙",
        "我在夜空中發光",
        "太陽",
        "星星",
        "彗星"
      ],
      "h42": [
        "雪",
        "我的每一片結晶都不一樣",
        "人們用我堆城堡",
        "我又白又冷，在冬天落下",
        "雨",
        "冰雹",
        "霜"
      ],
      "h43": [
        "河流",
        "我有源頭，也有出海口",
        "船在我上面航行",
        "我從山上流向大海",
        "湖泊",
        "大海",
        "小溪"
      ],
      "h44": [
        "仙人掌",
        "我可以很久不喝水",
        "我長在沙漠，也長在窗台",
        "我全身都是刺",
        "蘆薈",
        "棕櫚樹",
        "雛菊"
      ],
      "h45": [
        "向日葵",
        "我的種子可以榨油",
        "我會跟著太陽轉",
        "一朵長滿種子的黃色大花",
        "雛菊",
        "鬱金香",
        "蒲公英"
      ],
      "h46": [
        "橡樹",
        "我可以活一千多年",
        "人們把我看作力量的象徵",
        "我會結橡實",
        "白樺",
        "松樹",
        "楓樹"
      ],
      "h47": [
        "島嶼",
        "一整個國家都可以在我上面",
        "要搭船或搭飛機才能到我這裡",
        "我四面都被水包圍",
        "半島",
        "珊瑚礁",
        "海角"
      ],
      "h48": [
        "瀑布",
        "很遠就能聽見我的聲音",
        "我們之中最高的在委內瑞拉",
        "河水在這裡從懸崖落下",
        "噴泉",
        "間歇泉",
        "泉水"
      ],
      "h49": [
        "醫生",
        "開始工作前我要讀很多年書",
        "我穿白袍",
        "我治療生病的人",
        "護理師",
        "藥師",
        "獸醫"
      ],
      "h50": [
        "消防員",
        "我日夜待命，隨時出勤",
        "我用水和梯子工作",
        "我負責滅火",
        "警察",
        "救難人員",
        "建築工人"
      ],
      "h51": [
        "廚師",
        "我做的每道菜都要嚐一嚐",
        "我在熱騰騰的爐火旁工作",
        "我在餐廳煮菜",
        "麵包師傅",
        "服務生",
        "甜點師"
      ],
      "h52": [
        "老師",
        "晚上我批改作業",
        "我站在黑板前",
        "我在學校教孩子",
        "校長",
        "圖書館員",
        "幼兒園老師"
      ],
      "h53": [
        "機長",
        "我的工作地點是駕駛艙",
        "我透過廣播跟乘客說話",
        "我駕駛飛機",
        "船長",
        "司機",
        "太空人"
      ],
      "h54": [
        "郵差",
        "我知道我負責區域的每個地址",
        "我背著一個大郵包",
        "我送信件和包裹",
        "快遞員",
        "計程車司機",
        "店員"
      ],
      "h55": [
        "園丁",
        "我知道什麼時候該種什麼",
        "我的工具是澆水壺和修枝剪",
        "我照顧花和樹",
        "農夫",
        "林務員",
        "花藝師"
      ],
      "h56": [
        "攝影師",
        "我捕捉每個瞬間",
        "我請大家不要動",
        "我用相機拍照片",
        "畫家",
        "記者",
        "錄影師"
      ],
      "h57": [
        "漁夫",
        "我天亮前起床，然後耐心等待",
        "我需要釣竿和耐心",
        "我捕魚",
        "農夫",
        "水手",
        "牧羊人"
      ],
      "h58": [
        "太空人",
        "我在地球上受訓很久",
        "我穿著太空衣",
        "我飛上太空",
        "機師",
        "天文學家",
        "工程師"
      ],
      "h59": [
        "建築師",
        "全城到處都看得到我的作品",
        "我畫設計圖",
        "我設計房子",
        "建築工人",
        "設計師",
        "工程師"
      ],
      "h60": [
        "牙醫",
        "很多人害怕我的椅子",
        "我用牙鑽工作",
        "我治療牙齒",
        "外科醫生",
        "眼科醫生",
        "小兒科醫生"
      ]
    },
    "dreams": {
      "d01": [
        "十年後想住在哪裡？",
        "海邊",
        "山上",
        "大城市",
        "安靜的鄉村"
      ],
      "d02": [
        "將來想要怎樣的家？",
        "溫馨的公寓",
        "附花園的房子",
        "湖邊的小屋",
        "有歷史的老房子"
      ],
      "d03": [
        "想在花園種什麼？",
        "蘋果樹",
        "玫瑰",
        "蔬菜和香草",
        "草莓"
      ],
      "d04": [
        "想養哪種寵物？",
        "貓",
        "鸚鵡",
        "水族箱裡的魚",
        "陸龜"
      ],
      "d05": [
        "最想先去哪裡？",
        "日本",
        "摩洛哥",
        "冰島",
        "紐西蘭"
      ],
      "d06": [
        "想用什麼方式旅行？",
        "搭火車",
        "開車",
        "搭飛機",
        "搭船"
      ],
      "d07": [
        "想學哪種語言？",
        "阿拉伯語",
        "日語",
        "西班牙語",
        "韓語"
      ],
      "d08": [
        "想學會做什麼？",
        "畫畫",
        "縫紉",
        "游泳",
        "寫程式"
      ],
      "d09": [
        "想學會哪道料理？",
        "中亞抓飯",
        "自製麵包",
        "壽司",
        "果仁蜜餅"
      ],
      "d10": [
        "週末想怎麼過？",
        "到大自然裡",
        "在家看書",
        "探望家人",
        "去新的城市"
      ],
      "d11": [
        "理想的週末早晨？",
        "清晨散步",
        "悠閒的早餐",
        "在戶外做運動",
        "在陽台喝茶"
      ],
      "d12": [
        "想存錢做什麼？",
        "買自己的房子",
        "一趟大旅行",
        "買車",
        "進修"
      ],
      "d13": [
        "想做什麼樣的工作？",
        "自己創業",
        "在大公司上班",
        "在家工作",
        "幫助別人的工作"
      ],
      "d14": [
        "想用什麼方式幫助別人？",
        "當志工",
        "幫助動物",
        "教孩子",
        "種樹"
      ],
      "d15": [
        "想要哪種家庭傳統？",
        "星期日一起吃午餐",
        "桌遊之夜",
        "週末散步",
        "家庭相簿"
      ],
      "d16": [
        "想要怎樣的廚房？",
        "寬敞的家庭廚房",
        "明亮又溫馨",
        "看得到花園",
        "小而實用"
      ],
      "d17": [
        "想親眼看見什麼？",
        "北極光",
        "吉薩金字塔",
        "維多利亞瀑布",
        "喜馬拉雅山"
      ],
      "d18": [
        "晚上想做什麼？",
        "閱讀",
        "做新的料理",
        "學語言",
        "在公園散步"
      ],
      "d19": [
        "想開始哪種嗜好？",
        "攝影",
        "陶藝",
        "刺繡",
        "園藝"
      ],
      "d20": [
        "週末想去哪裡？",
        "森林",
        "湖邊",
        "附近的小鎮",
        "山上"
      ],
      "d21": [
        "理想的工作空間？",
        "靠窗",
        "有書架",
        "滿是綠色植物",
        "幾乎空無一物"
      ],
      "d22": [
        "接下來想學什麼？",
        "醫學",
        "歷史",
        "經濟學",
        "設計"
      ],
      "d23": [
        "想種哪種樹？",
        "橡樹",
        "蘋果樹",
        "橄欖樹",
        "椰棗樹"
      ],
      "d24": [
        "想為客人做什麼菜？",
        "自製派",
        "一大鍋抓飯",
        "家傳的湯",
        "新鮮沙拉"
      ],
      "d25": [
        "想去哪座城市？",
        "伊斯坦堡",
        "巴黎",
        "東京",
        "開羅"
      ],
      "d26": [
        "夏天想怎麼過？",
        "在海邊",
        "在山上",
        "在鄉間小屋",
        "在國內旅行"
      ],
      "d27": [
        "想養哪種鳥？",
        "金絲雀",
        "虎皮鸚鵡",
        "鴿子",
        "斑胸草雀"
      ],
      "d28": [
        "想試試哪種運動？",
        "游泳",
        "騎馬",
        "射箭",
        "攀岩"
      ],
      "d29": [
        "想收藏哪種書？",
        "百科全書",
        "經典名著",
        "旅遊書",
        "食譜"
      ],
      "d30": [
        "想親手做什麼？",
        "家具",
        "自己的陶器",
        "手織毯子",
        "鳥屋"
      ],
      "d31": [
        "想在哪裡野餐？",
        "河岸邊",
        "花園裡",
        "森林空地",
        "山上"
      ],
      "d32": [
        "將來想用什麼交通工具？",
        "電動車",
        "腳踏車",
        "大型家庭車",
        "不用開車"
      ],
      "d33": [
        "退休後想做什麼？",
        "園藝",
        "旅行",
        "陪伴孫子",
        "學新東西"
      ],
      "d34": [
        "想做哪件善事？",
        "挖一口水井",
        "幫助貓咪收容所",
        "為學校募集書本",
        "種一排樹"
      ],
      "d35": [
        "週末早餐想吃什麼？",
        "薄煎餅",
        "歐姆蛋",
        "水果燕麥粥",
        "起司煎餅"
      ],
      "d36": [
        "想在哪裡招待客人？",
        "廚房",
        "客廳",
        "露台",
        "花園"
      ],
      "d37": [
        "想看哪個自然奇景？",
        "大峽谷",
        "尼加拉瀑布",
        "貝加爾湖",
        "撒哈拉沙漠"
      ],
      "d38": [
        "想學會哪項居家技能？",
        "自己修繕",
        "縫紉",
        "烤麵包",
        "照顧花園"
      ],
      "d39": [
        "想會說幾種語言？",
        "兩種",
        "三種",
        "五種",
        "越多越好"
      ],
      "d40": [
        "家裡的牆想漆什麼顏色？",
        "白色",
        "米色",
        "淺綠色",
        "淺藍色"
      ],
      "d41": [
        "水族箱裡想養哪種魚？",
        "金魚",
        "孔雀魚",
        "鯰魚",
        "神仙魚"
      ],
      "d42": [
        "想送父母哪種旅行？",
        "海邊度假",
        "城市觀光",
        "山區之旅",
        "火車旅行"
      ],
      "d43": [
        "空閒時想做什麼？",
        "畫畫",
        "閱讀",
        "運動",
        "手工藝"
      ],
      "d44": [
        "想在哪個季節旅行？",
        "春天",
        "夏天",
        "秋天",
        "冬天"
      ],
      "d45": [
        "想為冬天準備什麼？",
        "果醬",
        "醃菜",
        "果乾",
        "水果甜湯"
      ],
      "d46": [
        "還想試試哪種工作？",
        "廚師",
        "程式設計師",
        "翻譯",
        "木工"
      ],
      "d47": [
        "想認識哪個國家？",
        "馬來西亞",
        "義大利",
        "加拿大",
        "印尼"
      ],
      "d48": [
        "院子裡想要有什麼？",
        "小噴泉",
        "菜園",
        "涼亭",
        "鞦韆"
      ],
      "d49": [
        "想怎麼慶祝成功？",
        "家庭晚餐",
        "到大自然走走",
        "一本新書",
        "為別人做件好事"
      ],
      "d50": [
        "想傳給孩子什麼？",
        "喜愛閱讀",
        "做菜的本領",
        "我們的母語",
        "愛護大自然"
      ]
    }
  },
  "ar": {
    "text": {
      "homeLink": "ألعاب لشخصين",
      "eyebrow": "GLOWLETTER · ألعاب لشخصين",
      "title": "العبا معًا",
      "close": "إغلاق",
      "lead": "أرسل لعبة إلى شخص عزيز عليك. اللعب عبر الرابط مجاني ولا يحتاج إلى حساب.",
      "quizTitle": "إلى أي حد تعرفني؟",
      "quizNote": "أجب عن أسئلة عن نفسك، ودع شخصًا قريبًا يحاول التخمين. تصلك النتيجة.",
      "create": "إنشاء اختبار",
      "soon": "قريبًا",
      "soonTitle": "ألعاب أخرى في الطريق",
      "duel": "تحدي «من الأسرع»",
      "loves": "ما نحبه",
      "cards": "بطاقات الذاكرة لشخصين",
      "who": "من منا؟",
      "phrase": "أكمل الجملة",
      "myQuizzes": "اختباراتي",
      "noQuizzes": "لا توجد اختبارات بعد. إنشاء الأول يستغرق دقائق قليلة.",
      "forWhom": "إلى {name}",
      "noRecipient": "اختبار",
      "resultsCount": "النتائج: {count}",
      "newResults": "جديد: {count}",
      "noResults": "لم يلعب أحد بعد.",
      "anonymous": "بلا اسم",
      "results": "النتائج",
      "copyLink": "نسخ الرابط",
      "share": "إرسال",
      "deleteQuiz": "حذف الاختبار",
      "deleteConfirm": "هل تريد حذف هذا الاختبار ونتائجه؟ سيتوقف الرابط عن العمل.",
      "deleted": "تم حذف الاختبار",
      "linkCopied": "تم نسخ الرابط",
      "back": "رجوع",
      "next": "التالي",
      "stepNames": "الخطوة 1 من 2 · الأسماء",
      "yourName": "اسمك",
      "yourNamePlaceholder": "ما اسمك",
      "recipient": "لمن · اختياري",
      "recipientPlaceholder": "اسم الشخص العزيز",
      "nameRequired": "اكتب اسمك.",
      "forbiddenName": "اكتب اسمًا عاديًا.",
      "stepAnswers": "الخطوة 2 من 2 · إجاباتك",
      "answersLead": "اختر ما ينطبق عليك. يمكن تبديل أي سؤال.",
      "swap": "سؤال آخر",
      "progress": "تمت الإجابة عن {done} من {total}",
      "answerAll": "اختر إجابة لكل سؤال.",
      "finish": "الحصول على الرابط",
      "creating": "جارٍ إنشاء الاختبار…",
      "createdTitle": "اختبارك جاهز!",
      "createdLead": "أرسل الرابط. عند الإجابة ستظهر النتيجة في «اختباراتي».",
      "shareText": "دعوة من {name} إلى لعبة «إلى أي حد تعرفني؟»",
      "signInTitle": "يلزم تسجيل الدخول",
      "signInNote": "يُحفظ الاختبار في حسابك لتصلك النتائج.",
      "signIn": "تسجيل الدخول",
      "premiumNote": "إنشاء الألعاب جزء من الوصول الكامل. اللعب عبر الرابط مجاني للجميع.",
      "failed": "لم ينجح ذلك. تحقق من الاتصال وحاول مرة أخرى.",
      "rateLimited": "محاولات كثيرة جدًا. حاول لاحقًا.",
      "playEyebrow": "لعبة لشخصين",
      "playInvite": "دعوة من {name} للعب",
      "playLead": "عدد الأسئلة: {count}. خمّن الإجابات، وفي النهاية سترى كم منها تطابق.",
      "playName": "اسمك · اختياري",
      "playNamePlaceholder": "ليعرفوا أنه أنت",
      "start": "ابدأ",
      "playLoading": "جارٍ تحميل اللعبة…",
      "playMissing": "هذه اللعبة غير متاحة: حُذف الرابط أو انتهت صلاحيته.",
      "playOffline": "تحتاج اللعبة إلى اتصال بالإنترنت.",
      "retry": "إعادة المحاولة",
      "questionOf": "السؤال {n} من {total}",
      "asks": "سؤال من {name}",
      "counting": "جارٍ حساب التطابقات…",
      "scoreOf": "{score} من {total}",
      "tierAll": "رائع! تعرفان بعضكما أفضل من أي أحد",
      "tierHigh": "تعرفان بعضكما جيدًا جدًا",
      "tierMid": "ليس سيئًا! ما زال هناك الكثير لتكتشفاه",
      "tierLow": "تنتظركما اكتشافات جميلة كثيرة",
      "sentTo": "ستصل نتيجتك إلى {name}",
      "review": "إجاباتك",
      "rightAnswer": "الإجابة الصحيحة",
      "makeOwn": "إنشاء اختباري",
      "home": "الرئيسية",
      "resultToast": "{name}: {score} من {total} في «إلى أي حد تعرفني؟»",
      "ownerAnswers": "إجابات صاحب الاختبار",
      "playerAnswers": "إجابات {name}",
      "paywallTitle": "ألعاب وتسلية<br><em>ورسائل</em>",
      "groupGames": "ألعاب",
      "groupFun": "تسلية",
      "groupLetters": "رسائل",
      "featQuiz": "«إلى أي حد تعرفني؟» — تصلك النتيجة",
      "featGamesSoon": "تحدي «من الأسرع»، «ما نحبه»، بطاقات الذاكرة مع الدببة",
      "featFunSoon": "«من منا؟» و«أكمل الجملة» مع دفتر الثنائي",
      "featCollection": "مجموعة الرسائل والقصائد كاملة بخمس عشرة لغة",
      "featMoments": "لحظات وتذكيرات ورسالة QR تُفتح في اليوم المناسب",
      "featAudio": "صوتك الخاص في الرسالة وردود المستلم",
      "groupTalk": "الأصدقاء والمكالمات",
      "featCall": "مكالمات مع الأصدقاء: صوت ومكبر صوت وتفاعلات متحركة",
      "ynTitle": "نعم أو لا",
      "ynNote": "لعبة مباشرة لشخصين: 5 ثوانٍ لكل بطاقة. من يجيب في الوقت يرى إجابة الطرف الآخر.",
      "ynCreate": "إنشاء غرفة",
      "ynWaiting": "بانتظار فتح الرابط: {name}…",
      "ynWaitingAny": "بانتظار الطرف الآخر…",
      "ynShareText": "دعوة من {name} إلى اللعبة المباشرة «نعم أو لا»",
      "ynPartnerHere": "وصل الآن: {name}!",
      "ynStart": "ابدأ اللعبة",
      "ynWaitHost": "اللعبة ستبدأ قريبًا مع {name}",
      "ynYes": "نعم",
      "ynNo": "لا",
      "ynMissed": "فات الوقت — تبقى البطاقة مغلقة",
      "ynMatch": "الإجابة نفسها!",
      "ynRound": "البطاقة {n} من {total}",
      "ynAnswered": "أُرسلت الإجابة، بانتظار الطرف الآخر…",
      "ynFinal": "تطابقت {score} من {total}",
      "ynFinalHigh": "تفهمان بعضكما دون كلمات",
      "ynFinalMid": "مختلفان جدًا — وقريبان جدًا",
      "ynAgain": "العب مرة أخرى",
      "ynLeft": "انقطع اتصال الطرف الآخر. بانتظار العودة…",
      "ynYou": "أنت",
      "ynOffline": "تعذّر الاتصال باللعبة. تحقّق من الإنترنت وافتح الرابط مجددًا.",
      "ynJoin": "ادخل اللعبة",
      "ynJoinLead": "اللعبة جاهزة مع {name}. 5 ثوانٍ لكل إجابة!",
      "ynStepNames": "اسمك واسم الطرف الآخر",
      "ynRoomReady": "الغرفة جاهزة — أرسل الرابط",
      "ynStayHere": "أبقِ هذه الشاشة مفتوحة: تبدأ اللعبة عند فتح الرابط.",
      "featYesNo": "لعبة «نعم أو لا» المباشرة — 5 ثوانٍ لكل إجابة",
      "ynPartnerMissed": "لا إجابة — انتهى الوقت",
      "lvTitle": "ما نحبه",
      "lvNote": "لعبة مباشرة لشخصين: 4 صور و10 ثوانٍ لاختيار الأحب إليك. يمكنكما اختيار الشيء نفسه!",
      "lvShareText": "دعوة من {name} إلى اللعبة المباشرة «ما نحبه»",
      "lvJoinLead": "اللعبة جاهزة مع {name}. اختر الصورة الأحب إليك!",
      "lvRound": "الموضوع {n} من {total}",
      "lvPick": "اختر الأحب إليك",
      "lvBoth": "اخترتما معًا: {item}",
      "lvCommon": "ما تحبانه معًا",
      "lvDiff": "أذواق مختلفة — وهذا أجمل!",
      "lvFinalHigh": "بينكما الكثير من القواسم المشتركة!",
      "lvFinalMid": "مختلفان جدًا — وتكملان بعضكما",
      "featLoves": "لعبة «ما نحبه» المباشرة — 4 صور، اختارا معًا",
      "featGamesSoon2": "تحدي «من الأسرع» وبطاقات الذاكرة مع الدببة",
      "mcTitle": "بطاقات الذاكرة مع الدببة",
      "mcNote": "لعبة ذاكرة مباشرة لشخصين: اقلبا بالتناوب بطاقتين وابحثا عن الأزواج. ثلاثة مستويات، من 8 إلى 16 بطاقة.",
      "mcShareText": "دعوة من {name} إلى اللعبة المباشرة «بطاقات الذاكرة مع الدببة»",
      "mcJoinLead": "اللعبة جاهزة مع {name}. ابحثا عن الأزواج بالتناوب!",
      "mcLevel": "المستوى {n} من {total}",
      "mcTurnYou": "دورك — اقلب بطاقتين",
      "mcTurnThem": "الدور الآن لـ {name}",
      "mcPairs": "الأزواج المكتشفة: {found} من {total}",
      "mcLevelDone": "تم العثور على كل الأزواج!",
      "mcTimeUp": "انتهى وقت المستوى",
      "mcNext": "التالي: المستوى {n}",
      "mcFinal": "الأزواج المكتشفة: {found} من {total}",
      "mcFinalHigh": "فريق رائع!",
      "mcFinalMid": "لعبة جميلة — مرة أخرى؟",
      "featCards": "لعبة «بطاقات الذاكرة مع الدببة» المباشرة — ابحثا عن الأزواج معًا",
      "featGamesSoon3": "تحدي «من الأسرع»",
      "duTitle": "مَن الأسرع",
      "duNote": "مبارزة مباشرة: كلمة واحدة وأربع صور. يفوز بالجولة مَن يلمس الصورة الصحيحة أولًا، واللمسة الخاطئة تعني خسارتها.",
      "duShareText": "تحدٍّ من {name}: مبارزة مباشرة «مَن الأسرع»",
      "duJoinLead": "{name} بانتظارك. مَن يجد الصورة الصحيحة أولًا يفوز!",
      "duRound": "الجولة {n} من {total}",
      "duFind": "المطلوب: {item}",
      "duYouWon": "كنت الأسرع!",
      "duTheyWon": "الأسرع: {name}",
      "duWrong": "صورة خاطئة — خسارة هذه الجولة",
      "duNobody": "لم يجدها أحد في الوقت المحدد",
      "duScore": "أنت {you} : {them} {name}",
      "duFinalWin": "فوز! نظرك حادّ اليوم.",
      "duFinalLose": "الفوز هذه المرة من نصيب {name} — جولة أخرى؟",
      "duFinalDraw": "تعادل — أنتما على المستوى نفسه!",
      "duSeconds": "{s} ث",
      "featDuel": "مبارزة مباشرة «مَن الأسرع» — العثور على الصورة أولًا",
      "whoTitle": "مَن منّا؟",
      "whoNote": "لعبة مباشرة لشخصين: سؤال واحد، والإجابة بلمس «أنا» أو اسم الطرف الآخر. لنرَ هل تتفقان في رأيكما عن بعضكما.",
      "whoShareText": "دعوة من {name} إلى اللعبة المباشرة «مَن منّا؟»",
      "whoJoinLead": "{name} بانتظارك. لنُجِب بصدق ثم نقارن!",
      "whoRound": "السؤال {n} من {total}",
      "whoMe": "أنا",
      "whoAgree": "اتفقتما: {name}",
      "whoDiffer": "الآراء مختلفة — تحدّثا في الأمر!",
      "whoFinal": "اتفقتما {score} مرة من {total}",
      "whoFinalHigh": "كم تعرفان بعضكما جيدًا!",
      "whoFinalMid": "هناك الكثير للحديث عنه — وهذا جميل",
      "featWho": "لعبة مباشرة «مَن منّا؟» — هل تتفقان؟",
      "phTitle": "إكمال الجملة",
      "phNote": "لعبة مباشرة لشخصين: يُكمل كلٌّ منكما الجملة الدافئة نفسها بكلماته، ثم تقرآن إجابات بعضكما.",
      "phShareText": "دعوة من {name} إلى اللعبة المباشرة «إكمال الجملة»",
      "phJoinLead": "{name} بانتظارك. لنُكمل كل جملة بكلماتنا!",
      "phRound": "الجملة {n} من {total}",
      "phPlaceholder": "تكملتك…",
      "phDone": "تم",
      "phWaiting": "بانتظار {name}…",
      "phSkipped": "لا إجابة",
      "phSave": "حفظ في «كتابنا»",
      "phSaved": "تم الحفظ في «كتابنا»",
      "phForbidden": "يُرجى الكتابة دون روابط أو كلمات مسيئة.",
      "phNext": "الجملة التالية",
      "phFinal": "جُمل أكملناها معًا: {count}",
      "phFinalLead": "يمكن حفظ الإجابات المفضلة في «كتابنا».",
      "featPhrase": "لعبة مباشرة «إكمال الجملة» مع «كتابنا»",
      "bookTitle": "كتابنا",
      "bookNote": "أدفأ الإجابات من «إكمال الجملة»، محفوظة في حسابك.",
      "bookOpen": "فتح الكتاب",
      "bookEmpty": "الكتاب فارغ حاليًا. بعد لعب «إكمال الجملة» يمكن حفظ الإجابات المفضلة هنا.",
      "bookDelete": "حذف",
      "bookDeleteConfirm": "حذف هذه الصفحة من الكتاب؟",
      "bookYou": "أنت",
      "inviteTitle": "دعوة صديق",
      "inviteNote": "ستصل إلى صديقك رسالة فيها اللعبة.",
      "invite": "دعوة",
      "invited": "تمت الدعوة",
      "inviteNone": "بعد إضافة أصدقاء في قسم «الأصدقاء» يمكن دعوتهم بلمسة واحدة.",
      "inviteSent": "أُرسلت الدعوة إلى {name}",
      "truth": "صح أم خطأ",
      "tfTitle": "صح أم خطأ",
      "tfNote": "لعبة مباشرة لشخصين: حقائق مدهشة عن العالم. 12 ثانية — صح أم خطأ؟ نقطة لكل إجابة صحيحة.",
      "tfShareText": "دعوة من {name} إلى اللعبة المباشرة «صح أم خطأ»",
      "tfJoinLead": "اللعبة جاهزة مع {name}. صح أم خطأ — القرار بسرعة!",
      "tfRound": "الحقيقة {n} من {total}",
      "tfTrue": "صح",
      "tfFalse": "خطأ",
      "tfIsTrue": "هذا صحيح!",
      "tfIsFalse": "هذا خطأ!",
      "tfFirstYou": "إجابتك الصحيحة كانت الأولى!",
      "tfFirstThem": "أول إجابة صحيحة من {name}",
      "tfFinalWin": "فوز! معرفتك بالعالم أكبر.",
      "tfFinalLose": "هذه المرة المعرفة أكبر عند {name} — جولة أخرى؟",
      "tfFinalDraw": "تعادل — معرفتكما متساوية!",
      "featTruth": "لعبة «صح أم خطأ» المباشرة — حقائق مدهشة عن العالم",
      "countries": "تخمين البلد",
      "coTitle": "تخمين البلد",
      "coNote": "لعبة مباشرة لشخصين: الدبّ يجوب العالم. 10 ثوانٍ لتخمين البلد الذي هو فيه! نقطة لكل إجابة صحيحة.",
      "coShareText": "دعوة من {name} إلى اللعبة المباشرة «تخمين البلد»",
      "coJoinLead": "{name} بانتظارك. حان وقت تخمين البلد من الصورة!",
      "coRound": "البلد {n} من {total}",
      "coAsk": "ما هذا البلد؟",
      "coFinalWin": "فوز! معرفتك بالعالم مدهشة.",
      "coFinalLose": "المعرفة بالعالم هذه المرة من نصيب {name} — جولة أخرى؟",
      "coFinalDraw": "تعادل — معرفتكما بالعالم رائعة!",
      "featCountries": "لعبة «تخمين البلد» المباشرة — 40 بلدًا",
      "hints": "التخمين بالتلميحات",
      "dreams": "أحلام وخطط",
      "hiTitle": "التخمين بالتلميحات",
      "hiNote": "لعبة مباشرة لشخصين: ثلاثة تلميحات تظهر واحدًا تلو الآخر. التخمين من التلميح الأول — 3 نقاط، من الثاني — نقطتان، من الثالث — نقطة واحدة.",
      "hiShareText": "دعوة من {name} إلى اللعبة المباشرة «التخمين بالتلميحات»",
      "hiJoinLead": "اللعبة جاهزة مع {name}. التخمين المبكر يجلب نقاطًا أكثر!",
      "hiRound": "اللغز {n} من {total}",
      "hiAsk": "ما هو؟",
      "hiClue": "التلميح {n}",
      "hiPoints": "النقاط: +{n}",
      "hiNoPoints": "لا نقاط هذه المرة",
      "hiFinalWin": "فوز! موهبة رائعة في التخمين.",
      "hiFinalLose": "هذه المرة التخمين أدق عند {name} — جولة أخرى؟",
      "hiFinalDraw": "تعادل — مهارة التخمين متساوية!",
      "featHints": "لعبة «التخمين بالتلميحات» المباشرة — 3 أو 2 أو 1 نقطة",
      "drTitle": "أحلام وخطط",
      "drNote": "لعبة مباشرة لشخصين: البيت والسفر والتعلّم والهوايات. اختيار الأقرب إلى القلب، ثم معرفة هل تتطابق الأحلام.",
      "drShareText": "دعوة من {name} إلى اللعبة المباشرة «أحلام وخطط»",
      "drJoinLead": "اللعبة جاهزة مع {name}. لنختر ما نتمناه حقًا!",
      "drRound": "السؤال {n} من {total}",
      "drPick": "ما الأقرب إلى القلب؟",
      "drBoth": "تطابق: {item}",
      "drDiff": "أحلام مختلفة — لنتحدث عن السبب!",
      "drFinalHigh": "بينكما الكثير من الأحلام المشتركة!",
      "drFinalMid": "أحلام مختلفة — والكثير للحديث عنه",
      "drCommon": "أحلامكما المشتركة",
      "featDreams": "لعبة «أحلام وخطط» المباشرة — هل تتطابق الأحلام؟",
      "modestTitle": "الوضع المحتشم",
      "modestNote": "بلا أسئلة عن المشاعر أو العناق أو المواعيد — أسئلة ودّية فقط"
    },
    "questions": {
      "q01": [
        "فصلي المفضل؟",
        "الربيع",
        "الصيف",
        "الخريف",
        "الشتاء"
      ],
      "q02": [
        "ماذا أختار للفطور؟",
        "قهوة وكرواسون",
        "عصيدة",
        "بيض",
        "شاي فقط"
      ],
      "q03": [
        "يوم عطلتي المثالي؟",
        "في البيت تحت بطانية",
        "نزهة في الحديقة",
        "رحلة خارج المدينة",
        "وقت مع الأصدقاء"
      ],
      "q04": [
        "إلى أين أحلم بالسفر؟",
        "إلى البحر",
        "إلى الجبال",
        "إلى مدينة كبيرة",
        "إلى بيت دافئ في الريف"
      ],
      "q05": [
        "آيس كريمي المفضل؟",
        "الفانيليا",
        "الشوكولاتة",
        "الفراولة",
        "الفستق"
      ],
      "q06": [
        "ما الذي يسعدني بسرعة؟",
        "عناق",
        "مفاجأة",
        "كلمات دافئة",
        "شيء لذيذ"
      ],
      "q07": [
        "أنا في الغالب…",
        "من محبي الصباح الباكر",
        "من محبي السهر",
        "أنام كلما سنحت الفرصة",
        "أحب قيلولة الظهيرة"
      ],
      "q08": [
        "أي فيلم أختار الليلة؟",
        "كوميديا",
        "قصة رومانسية",
        "فيلم غموض",
        "رسوم متحركة"
      ],
      "q09": [
        "لوني المفضل؟",
        "الأحمر",
        "الأزرق",
        "الأخضر",
        "الوردي"
      ],
      "q10": [
        "ممَّ أخاف أكثر؟",
        "العناكب",
        "المرتفعات",
        "الظلام",
        "التأخر"
      ],
      "q11": [
        "أي الزهور أحب؟",
        "الورد",
        "التوليب",
        "الفاوانيا",
        "الأقحوان"
      ],
      "q12": [
        "ماذا أفعل حين أحزن؟",
        "أتصل بشخص قريب",
        "آكل شيئًا حلوًا",
        "أخرج للمشي",
        "أخلد إلى النوم"
      ],
      "q13": [
        "أي حيوان هو الأقرب إلى قلبي؟",
        "قطة صغيرة",
        "كلب",
        "دبدوب صغير",
        "ثعلب صغير"
      ],
      "q14": [
        "أجمل هدية لي؟",
        "شيء مصنوع باليد",
        "رحلة",
        "قطعة حُليّ",
        "كتاب"
      ],
      "q15": [
        "مشروبي المفضل؟",
        "شاي أسود",
        "شاي أخضر",
        "قهوة",
        "كاكاو ساخن"
      ],
      "q16": [
        "وجبتي الخفيفة المفضلة؟",
        "الشوكولاتة",
        "رقائق البطاطا",
        "الفاكهة",
        "قطعة حلوى"
      ],
      "q17": [
        "ماذا أختار في السفر؟",
        "المتاحف",
        "الشاطئ",
        "المطبخ المحلي",
        "التجول بلا خطة"
      ],
      "q18": [
        "كيف أحب أن أقضي المساء؟",
        "مع كتاب",
        "مع مسلسل",
        "في الحديث",
        "في نزهة"
      ],
      "q19": [
        "أي طقس أحب أكثر؟",
        "الشمس",
        "مطر دافئ",
        "تساقط الثلج",
        "نسيم خفيف"
      ],
      "q20": [
        "أي قوة خارقة تناسبني؟",
        "الطيران",
        "قراءة الأفكار",
        "إيقاف الوقت",
        "الانتقال الفوري"
      ],
      "q21": [
        "ما أهم شيء عندي في المقرّبين؟",
        "الثقة",
        "الاهتمام",
        "روح الدعابة",
        "الدعم"
      ],
      "q22": [
        "أي مناسبة أنتظرها أكثر؟",
        "رأس السنة",
        "عيد ميلادي",
        "عطلة الصيف",
        "عيد الحب"
      ],
      "q23": [
        "كيف أقول «أحبك» غالبًا؟",
        "بالكلمات",
        "بالأفعال",
        "بالعناق",
        "بالهدايا"
      ],
      "q24": [
        "ماذا أطلب في المقهى؟",
        "باستا",
        "سوشي",
        "سلطة",
        "حلوى"
      ],
      "q25": [
        "وقتي المفضل من اليوم؟",
        "الصباح",
        "الظهيرة",
        "المساء",
        "الليل"
      ],
      "q26": [
        "أي مطبخ أختار؟",
        "الإيطالي",
        "الياباني",
        "الطبخ المنزلي",
        "المكسيكي"
      ],
      "q27": [
        "أين أفكر بشكل أفضل؟",
        "تحت الدش",
        "أثناء المشي",
        "في الطريق",
        "قبل النوم"
      ],
      "q28": [
        "ماذا أفعل أولًا في الصباح؟",
        "أنظر إلى الهاتف",
        "أشرب الماء",
        "أحضّر القهوة",
        "أبقى في السرير قليلًا"
      ],
      "q29": [
        "فاكهتي المفضلة؟",
        "التفاح",
        "الموز",
        "المانجو",
        "البطيخ"
      ],
      "q30": [
        "أي هواية تناسبني أكثر؟",
        "الرسم",
        "الطبخ",
        "الرياضة",
        "القراءة"
      ],
      "q31": [
        "كيف أحب أن أحتفل بعيد ميلادي؟",
        "بحفلة كبيرة",
        "بعشاء لشخصين",
        "برحلة",
        "بأمسية هادئة في البيت"
      ],
      "q32": [
        "ما رأيي في المفاجآت؟",
        "أحبها كثيرًا",
        "تربكني قليلًا",
        "أحب أن أعدّها للآخرين",
        "أفضّل أن أعرف مسبقًا"
      ],
      "q33": [
        "أي حلوى أفضّل؟",
        "الكعك",
        "الآيس كريم",
        "البسكويت",
        "السكاكر"
      ],
      "q34": [
        "ماذا آخذ إلى جزيرة مهجورة؟",
        "كتابًا",
        "هاتفي",
        "بطانية",
        "كاميرا"
      ],
      "q35": [
        "كيف أرتاح بعد يوم صعب؟",
        "حمام دافئ",
        "مسلسل",
        "نزهة",
        "حديث مع شخص قريب"
      ],
      "q36": [
        "أي وسيلة تنقل أحب أكثر؟",
        "القطار",
        "الطائرة",
        "السيارة",
        "الدراجة"
      ],
      "q37": [
        "لعبتي المفضلة في الطفولة؟",
        "الغميضة",
        "المطاردة",
        "المكعبات",
        "الرسم"
      ],
      "q38": [
        "أي حكاية تشبهني أكثر؟",
        "سندريلا",
        "الأمير الصغير",
        "ويني الدبدوب",
        "أليس في بلاد العجائب"
      ],
      "q39": [
        "كيف أُسعد شخصًا عزيزًا؟",
        "بمفاجأة",
        "ببطاقة",
        "برحلة",
        "بعشاء"
      ],
      "q40": [
        "ماذا أصوّر أكثر؟",
        "نفسي",
        "الطبيعة",
        "الطعام",
        "نادرًا ما أصوّر"
      ],
      "q41": [
        "مكاني المفضل في البيت؟",
        "السرير",
        "المطبخ",
        "الأريكة",
        "الشرفة"
      ],
      "q42": [
        "ما أول ما ألاحظه في الشخص؟",
        "الابتسامة",
        "العينان",
        "الصوت",
        "روح الدعابة"
      ],
      "q43": [
        "ما الذي يضحكني بسرعة؟",
        "مقاطع مضحكة",
        "نكات المقرّبين",
        "المواقف المحرجة",
        "الحيوانات"
      ],
      "q44": [
        "ماذا أشرب في يوم صيفي حار؟",
        "ليموناضة",
        "شاي مثلّج",
        "عصير",
        "ماء بالثلج"
      ],
      "q45": [
        "أي عنصر هو الأقرب إليّ؟",
        "الماء",
        "النار",
        "التراب",
        "الهواء"
      ],
      "q46": [
        "أي قصص أحب؟",
        "المغامرات",
        "قصص الحب",
        "الخيال العلمي",
        "القصص الحقيقية"
      ],
      "q47": [
        "كيف أقضي يومًا ممطرًا؟",
        "أقرأ",
        "أنام",
        "أشاهد فيلمًا",
        "أتمشى تحت المظلة"
      ],
      "q48": [
        "ما أكثر ما أقدّره في الهدية؟",
        "الاهتمام",
        "الفائدة",
        "الجمال",
        "المفاجأة"
      ],
      "q49": [
        "أي بطاطا أختار؟",
        "مهروسة",
        "مقلية",
        "مشوية في الفرن",
        "رقائق"
      ],
      "q50": [
        "إلى أين أذهب أولًا في مدينة جديدة؟",
        "إلى مقهى",
        "إلى متحف",
        "إلى حديقة",
        "للتسوق"
      ],
      "q51": [
        "ماذا أفعل حين لا أستطيع النوم؟",
        "أقرأ",
        "أتصفح الهاتف",
        "أعدّ الخراف",
        "أشرب حليبًا دافئًا"
      ],
      "q52": [
        "كيف أستعد ليوم مهم؟",
        "أخطط لكل شيء مسبقًا",
        "أؤجل إلى اللحظة الأخيرة",
        "أطلب المساعدة",
        "أقلق ولا أنام"
      ],
      "q53": [
        "أي رياضة أحب مشاهدتها؟",
        "كرة القدم",
        "التنس",
        "التزلج الفني",
        "لا أشاهد الرياضة"
      ],
      "q54": [
        "أي حيوان أليف يناسبني؟",
        "قطة",
        "كلب",
        "ببغاء",
        "هامستر"
      ],
      "q55": [
        "ما نوع الرسائل التي أكتبها؟",
        "طويلة",
        "قصيرة",
        "مليئة بالرموز التعبيرية",
        "رسائل صوتية"
      ],
      "q56": [
        "أي هدية احتفظت بها أطول مدة؟",
        "رسالة",
        "لعبة",
        "صورة",
        "قطعة حُليّ"
      ],
      "q57": [
        "ماذا أختار على الأرجح؟",
        "شاي قرب المدفأة",
        "نزهة على العشب",
        "مشي على شاطئ البحر",
        "السينما"
      ],
      "q58": [
        "أي مديح يسعدني أكثر؟",
        "عن مظهري",
        "عن ذكائي",
        "عن طيبتي",
        "عن روح الدعابة"
      ],
      "q59": [
        "صباحي المثالي؟",
        "فطور في السرير",
        "ركض مبكر",
        "نوم طويل",
        "قهوة في الشرفة"
      ],
      "q60": [
        "ماذا أريد أن أتعلم؟",
        "الرقص",
        "الطبخ",
        "لغة جديدة",
        "الرسم"
      ],
      "q61": [
        "ما الطبق الذي أتقنه أكثر؟",
        "الحساء",
        "البيلاف",
        "المخبوزات",
        "السلطة"
      ],
      "q62": [
        "أي بلد أريد رؤيته أولًا؟",
        "تركيا",
        "اليابان",
        "المغرب",
        "النرويج"
      ],
      "q63": [
        "أي رياضة أفضّل ممارستها؟",
        "السباحة",
        "الجري",
        "ركوب الدراجة",
        "كرة القدم"
      ],
      "q64": [
        "أي كتاب سأختار؟",
        "قصة مغامرات",
        "كتاب تاريخ",
        "حكايات",
        "موسوعة"
      ],
      "q65": [
        "أي حيوانات سأزورها أولًا في حديقة الحيوان؟",
        "الفيلة",
        "القرود",
        "البطاريق",
        "الزرافات"
      ],
      "q66": [
        "ما موقفي من الطعام الحار؟",
        "كلما زاد كان أفضل",
        "القليل لا بأس به",
        "قليل جدًا فقط",
        "لا آكله أبدًا"
      ],
      "q67": [
        "أي مادة دراسية أحببتها أكثر؟",
        "الرياضيات",
        "الأدب",
        "الجغرافيا",
        "التربية البدنية"
      ],
      "q68": [
        "مهنة أحلامي في الطفولة؟",
        "الطب",
        "التدريس",
        "ارتياد الفضاء",
        "الطهي"
      ],
      "q69": [
        "ما رأيي في رحلات المشي الطويلة؟",
        "أحلم برحلة طويلة",
        "ليوم واحد فقط",
        "مع وسائل الراحة فقط",
        "البيت أفضل"
      ],
      "q70": [
        "مزاجي في الصباح؟",
        "نشاط كامل",
        "نعاس",
        "هدوء",
        "حديث كثير"
      ],
      "q71": [
        "أي نوع من المكسرات أحبه أكثر؟",
        "البندق",
        "الجوز",
        "الكاجو",
        "اللوز"
      ],
      "q72": [
        "ماذا سأفعل بساعة فراغ مفاجئة؟",
        "القراءة",
        "نزهة",
        "اتصال بالعائلة",
        "طبخ شيء ما"
      ],
      "q73": [
        "أي طقس لا أحبه؟",
        "الحر الشديد",
        "الرياح",
        "الثلج الذائب والوحل",
        "الصقيع الشديد"
      ],
      "q74": [
        "بأي لون سأطلي غرفتي؟",
        "الأبيض",
        "البيج",
        "الأخضر",
        "الأزرق الفاتح"
      ],
      "q75": [
        "ماذا أفضّل أن ألعب؟",
        "الشطرنج",
        "الداما",
        "أحجية الصور المقطّعة",
        "لعبة كلمات"
      ],
      "q76": [
        "ماذا سأطبخ للضيوف؟",
        "البيلاف",
        "فطيرة",
        "سلطات",
        "طلب طعام جاهز"
      ],
      "q77": [
        "ما الذي لن آكله أبدًا؟",
        "الفطر",
        "السمك",
        "الزيتون",
        "البصل المسلوق"
      ],
      "q78": [
        "كيف أحضّر الشاي؟",
        "ثقيلًا",
        "خفيفًا",
        "محلّى",
        "بالأعشاب"
      ],
      "q79": [
        "ما الأهم بالنسبة لي في البيت؟",
        "النظافة",
        "الدفء والراحة",
        "الضوء الوفير",
        "الهدوء"
      ],
      "q80": [
        "كيف أتعلّم الأشياء الجديدة؟",
        "بالقراءة",
        "بمشاهدة دروس الفيديو",
        "بالتجربة العملية",
        "بسؤال الآخرين"
      ],
      "q81": [
        "أي حيوان بري يبهرني أكثر؟",
        "النمر",
        "الدب",
        "النسر",
        "الدلفين"
      ],
      "q82": [
        "ماذا سأهدي أمي؟",
        "زهور",
        "شيء مصنوع باليد",
        "رحلة",
        "بطانية دافئة"
      ],
      "q83": [
        "ماذا أفعل في الطريق؟",
        "أنظر من النافذة",
        "أقرأ",
        "أتحدّث",
        "آكل وجبة خفيفة"
      ],
      "q84": [
        "طبقي المفضل من الدجاج؟",
        "أسياخ الدجاج المشوي",
        "الدجاج مع الأرز",
        "كفتة الدجاج",
        "قطع الدجاج المقرمشة"
      ],
      "q85": [
        "أي مقعد أختار في القطار؟",
        "بجانب النافذة",
        "بجانب الممر",
        "عكس اتجاه السير",
        "لا يهمني"
      ],
      "q86": [
        "ماذا أفعل حين تسوء الأمور؟",
        "أتصرف فورًا",
        "أفكّر أولًا",
        "أطلب النصيحة",
        "أقلق قليلًا"
      ],
      "q87": [
        "ما أبرز صفاتي؟",
        "الطيبة",
        "الصدق",
        "المثابرة",
        "البهجة"
      ],
      "q88": [
        "أين أرتاح أكثر؟",
        "عند الأقارب في الريف",
        "في فندق على البحر",
        "في خيمة",
        "في البيت"
      ],
      "q89": [
        "أي معجنات سأختار؟",
        "السمبوسة",
        "الخاتشابوري",
        "التشاك تشاك",
        "الإكلير"
      ],
      "q90": [
        "أي لغة أودّ تعلّمها أكثر؟",
        "العربية",
        "الإنجليزية",
        "التركية",
        "اليابانية"
      ],
      "q91": [
        "كم يمكنني البقاء دون حلويات؟",
        "يومًا",
        "أسبوعًا",
        "شهرًا",
        "ما دام الأمر ضروريًا"
      ],
      "q92": [
        "ماذا أفعل حين أتأخر؟",
        "أركض بأقصى سرعة",
        "أتصل مسبقًا للتنبيه",
        "آخذ سيارة أجرة",
        "لا أتأخر أبدًا"
      ],
      "q93": [
        "ماذا أفعل حين يتعطّل جهاز؟",
        "أصلحه بنفسي",
        "أقرأ الدليل",
        "أطلب المساعدة",
        "أضغط كل الأزرار"
      ],
      "q94": [
        "ما أول شيء في حقيبة سفري؟",
        "حقيبة إسعافات أولية",
        "كتاب",
        "شاحن",
        "وجبة خفيفة"
      ],
      "q95": [
        "أي نشاط يهدّئني؟",
        "الطبخ",
        "الترتيب",
        "الرسم",
        "النزهة"
      ],
      "q96": [
        "ماذا أريد أن أفعل بعد التقاعد؟",
        "الاعتناء بالحديقة",
        "السفر",
        "القراءة",
        "قضاء الوقت مع الأحفاد"
      ],
      "q97": [
        "ما أكثر ما يزعجني؟",
        "الضجيج",
        "الفوضى",
        "التأخير",
        "قلة الأدب"
      ],
      "q98": [
        "أي رائحة أحبها أكثر؟",
        "الخبز الطازج",
        "المطر",
        "الزهور",
        "البحر"
      ],
      "q99": [
        "ماذا أختار للتحلية؟",
        "فاكهة",
        "مثلجات",
        "فطيرة",
        "شاي فقط"
      ]
    },
    "yesNo": {
      "c01": [
        "هل تشتاق إليّ الآن؟",
        "شوق كبير إليك",
        "صبر، لكن التفكير فيك لا يتوقف"
      ],
      "c02": [
        "هل تبتسم حين ترى رسالتي؟",
        "ابتسامة في كل مرة",
        "ابتسامة خفية في القلب"
      ],
      "c03": [
        "هل تتذكر لقاءنا الأول؟",
        "كل دقيقة محفوظة في الذاكرة",
        "الأهم محفوظ — أنت"
      ],
      "c04": [
        "هل تريد عناقًا اليوم؟",
        "انتظار لعناقك",
        "العناق مؤجَّل لوقت لاحق"
      ],
      "c05": [
        "هل نذهب معًا إلى البحر؟",
        "الحقيبة تُحزم الآن",
        "حنين إلى الجبال"
      ],
      "c06": [
        "هل أُضحكك؟",
        "ضحك من القلب",
        "ابتسامة مخبّأة"
      ],
      "c07": [
        "هل تشعر بالسكينة معي؟",
        "سكينة إلى جانبك",
        "مرح ومتعة معك"
      ],
      "c08": [
        "هل تفكر فيّ خلال النهار؟",
        "تفكير فيك كثيرًا جدًا",
        "تفكير فيك في هذه اللحظة"
      ],
      "c09": [
        "هل تحب مفاجآتي؟",
        "حب كبير لمفاجآتك",
        "الأجمل أن تكون قريبًا فقط"
      ],
      "c10": [
        "هل نخبز فطيرة معًا؟",
        "المريلة جاهزة بالفعل",
        "شراء كعكة أفضل"
      ],
      "c11": [
        "هل نشاهد فيلمًا الليلة؟",
        "اختيار الفيلم جارٍ",
        "رغبة في الحديث فقط"
      ],
      "c12": [
        "هل يعجبك صوتي؟",
        "استماع بلا نهاية",
        "ضحكتك أجمل"
      ],
      "c13": [
        "هل نقوم بنزهة في عطلة الأسبوع؟",
        "البساط يُجهَّز",
        "دعوة إلى مقهى دافئ"
      ],
      "c14": [
        "هل تريد رسالة مني؟",
        "انتظار لرسالتك",
        "الأفضل أن يُقال كل شيء وجهًا لوجه"
      ],
      "c15": [
        "هل أنا مهم بالنسبة إليك؟",
        "مهم جدًا",
        "أكثر مما تظن"
      ],
      "c16": [
        "هل نتمشى تحت المطر؟",
        "مظلة تتسع لاثنين",
        "شاي في البيت أفضل"
      ],
      "c17": [
        "هل نحن متشابهان؟",
        "كأنكما نصفان لواحد",
        "تكملان بعضكما تمامًا"
      ],
      "c18": [
        "هل يعجبك طبخي؟",
        "طلب لطبق آخر",
        "الطبخ معك هو الأجمل"
      ],
      "c19": [
        "هل نقتني حيوانًا أليفًا معًا؟",
        "اختيار الاسم جارٍ",
        "دبدوب محشو يكفي الآن"
      ],
      "c20": [
        "هل تعرف ما أحب؟",
        "معرفة عن ظهر قلب",
        "رغبة في معرفة المزيد"
      ],
      "c21": [
        "هل نرقص؟",
        "اليد ممدودة إليك",
        "تصفيق وتشجيع"
      ],
      "c22": [
        "هل أُلهمك؟",
        "إلهام كل يوم",
        "دفء بسيط إلى جانبك"
      ],
      "c23": [
        "هل تحتفظ بصورنا؟",
        "كل صورة محفوظة بعناية",
        "انتظار لصور جديدة أجمل"
      ],
      "c24": [
        "هل نشاهد شروق الشمس معًا؟",
        "المنبّه مضبوط",
        "الغروب أجمل"
      ],
      "c25": [
        "هل تخبرني بسر؟",
        "همسة في أذنك",
        "ليبقَ لغزًا"
      ],
      "c26": [
        "هل تؤمن بي؟",
        "إيمان كبير بك",
        "تشجيع لك كل يوم"
      ],
      "c27": [
        "هل نسافر نحن الاثنين فقط؟",
        "حلم جميل",
        "الأحبة جميعًا معنا"
      ],
      "c28": [
        "هل تنتظر اتصالي؟",
        "انتظار بابتسامة",
        "زيارتك أجمل من اتصال"
      ],
      "c29": [
        "هل تعجبك أحضاني؟",
        "الأدفأ في العالم",
        "حب لتشابك الأيدي"
      ],
      "c30": [
        "هل نقرأ لبعضنا بصوت عالٍ؟",
        "اختيار الكتاب جارٍ",
        "الاستماع إليك أجمل"
      ],
      "c31": [
        "هل نلتقط صورة معًا اليوم؟",
        "بحث عن خلفية جميلة",
        "الحديث أولًا"
      ],
      "c32": [
        "هل أُحسّن مزاجك؟",
        "دائمًا",
        "معك حتى الحزن أخف"
      ],
      "c33": [
        "هل نتناول الفطور معًا غدًا؟",
        "الكاكاو يُحضَّر الآن",
        "حلم بنوم أطول"
      ],
      "c34": [
        "هل تتذكر عيد ميلادي؟",
        "دون أي تذكير",
        "مفاجأة تُحضَّر سرًا"
      ],
      "c35": [
        "هل نذهب للتزلج على الجليد؟",
        "الزلاجات جاهزة",
        "تشجيع لك من جانب الحلبة"
      ],
      "c36": [
        "هل يومك جميل اليوم؟",
        "يوم رائع",
        "سيصبح أجمل بقربك"
      ],
      "c37": [
        "هل ترسم صورتي؟",
        "القلم في اليد",
        "رسم قلب صغير"
      ],
      "c38": [
        "هل نزرع شجرة معًا؟",
        "اختيار المكان جارٍ",
        "البداية بزهرة على النافذة"
      ],
      "c39": [
        "هل تريد سماع إطراء؟",
        "انتظار بشوق",
        "خجل، لكن مع رغبة كبيرة"
      ],
      "c40": [
        "هل نلعب مرة أخرى لاحقًا؟",
        "جولة أخرى من فضلك",
        "العناق أجمل من اللعب"
      ],
      "c41": [
        "هل تحب الطعام الحار؟",
        "كلما زادت الحرارة كان أفضل",
        "اختيار لطعم أخف"
      ],
      "c42": [
        "هل تجيد السباحة؟",
        "سباحة كالسمكة",
        "البقاء قرب الشاطئ حاليًا"
      ],
      "c43": [
        "هل تودّ أن يكون لديك قط؟",
        "التفكير في اسمه قد بدأ",
        "تفضيل للكلاب"
      ],
      "c44": [
        "هل تودّ زيارة إسطنبول يومًا ما؟",
        "حلم بمضيق البوسفور",
        "اختيار مدينة أخرى"
      ],
      "c45": [
        "هل تحب الطبخ؟",
        "طبخ بكل سرور",
        "غسل الأطباق أفضل"
      ],
      "c46": [
        "هل تودّ تعلّم طبخ البيلاف؟",
        "البحث عن الوصفة قد بدأ",
        "تذوّق طبخ الآخرين أفضل"
      ],
      "c47": [
        "هل تحب قراءة الكتب؟",
        "كتاب قريب دائمًا",
        "الاستماع إلى القصص أحب"
      ],
      "c48": [
        "هل تجيد ركوب الدراجة؟",
        "جاهزية للانطلاق الآن",
        "وعد بالتعلّم"
      ],
      "c49": [
        "هل تفضّل الجبال على البحر؟",
        "اختيار الجبال",
        "اختيار البحر"
      ],
      "c50": [
        "هل تودّ رؤية الصحراء؟",
        "حلم بالكثبان الرملية",
        "الغابة أفضل"
      ],
      "c51": [
        "هل تحب الشتاء؟",
        "انتظار أول ثلج",
        "انتظار الصيف"
      ],
      "c52": [
        "هل تشرب الشاي دون سكر؟",
        "حب لطعم الشاي الصافي",
        "ملعقة السكر لا غنى عنها"
      ],
      "c53": [
        "هل تخاف من العناكب؟",
        "ابتعاد عنها قدر الإمكان",
        "إخراجها إلى الخارج بهدوء"
      ],
      "c54": [
        "هل تحب الرسم؟",
        "الفرشاة في اليد بالفعل",
        "تأمّل لوحات الآخرين أفضل"
      ],
      "c55": [
        "هل تودّ رؤية الشفق القطبي؟",
        "بحث عن أماكن رؤيته",
        "تأمّل النجوم أفضل"
      ],
      "c56": [
        "هل تحب الطقس الممطر؟",
        "حب لصوت المطر خلف النافذة",
        "انتظار الشمس"
      ],
      "c57": [
        "هل تجيد ركوب الخيل؟",
        "ثبات وثقة على السرج",
        "مجرد حلم حتى الآن"
      ],
      "c58": [
        "هل تودّ أن يكون لديك كلب؟",
        "حلم بصديق وفيّ",
        "ما يكفي من المسؤوليات حاليًا"
      ],
      "c59": [
        "هل تفضّل الحلو على المالح؟",
        "لا حياة بلا حلويات",
        "اختيار المالح"
      ],
      "c60": [
        "هل تحب السفر بالقطار؟",
        "حب لإيقاع العجلات",
        "اختيار الطائرة"
      ],
      "c61": [
        "هل يسهل عليك بدء اليوم باكرًا؟",
        "بداية اليوم بنشاط كامل",
        "الاستيقاظ الحقيقي لا يأتي قبل الظهر"
      ],
      "c62": [
        "هل تحب التخييم في خيمة؟",
        "تجهيز حقيبة الظهر قد بدأ",
        "اختيار فندق مريح"
      ],
      "c63": [
        "هل تودّ العيش قرب البحر؟",
        "حلم بصوت الأمواج",
        "اختيار المدينة"
      ],
      "c64": [
        "هل تأكل المثلجات في الشتاء؟",
        "حتى في البرد القارس",
        "في الصيف فقط"
      ],
      "c65": [
        "هل تحب الشوكولاتة؟",
        "معرفة بكل أنواعها",
        "مرور بجانبها بهدوء"
      ],
      "c66": [
        "هل تجيد خَبز الفطائر؟",
        "خَبز كخَبز الجدّات",
        "وعد بالتعلّم"
      ],
      "c67": [
        "هل تحب النظر إلى النجوم؟",
        "معرفة بالكوكبات",
        "تفضيل للنهار المشمس"
      ],
      "c68": [
        "هل تودّ زراعة حديقتك الخاصة يومًا ما؟",
        "اختيار الشتلات قد بدأ",
        "البداية بزهرة في أصيص"
      ],
      "c69": [
        "هل تحب الأزهار البرية؟",
        "حب للأقحوان والقنطريون",
        "تفضيل لأزهار الحدائق"
      ],
      "c70": [
        "هل تشرب القهوة؟",
        "لا بداية لليوم دون قهوة",
        "اختيار الشاي"
      ],
      "c71": [
        "هل تحب الليموناضة المنزلية؟",
        "تقطيع الليمون قد بدأ",
        "الماء أفضل"
      ],
      "c72": [
        "هل تودّ زيارة اليابان يومًا ما؟",
        "حلم برؤية أزهار الكرز",
        "اختيار بلد آخر"
      ],
      "c73": [
        "هل تحب الخريف؟",
        "حب لحفيف الأوراق تحت الأقدام",
        "انتظار الربيع"
      ],
      "c74": [
        "هل تحب رائحة الخزامى؟",
        "حب لهذا العطر",
        "تفضيل لروائح أخرى"
      ],
      "c75": [
        "هل تحب ألعاب الطاولة؟",
        "تجهيز اللوح قد بدأ",
        "تفضيل للنزهة"
      ],
      "c76": [
        "هل تجيد قيادة السيارة؟",
        "قيادة بثقة",
        "مقعد الراكب حاليًا"
      ],
      "c77": [
        "هل تودّ رؤية المحيط يومًا ما؟",
        "حلم بموجة كبيرة",
        "البحر يكفي"
      ],
      "c78": [
        "هل تودّ العيش في مزرعة لفترة؟",
        "إطعام الدجاج قد بدأ",
        "البقاء في المدينة"
      ],
      "c79": [
        "هل تحب المدن الكبيرة؟",
        "حب لأضواء المدينة",
        "اختيار الهدوء والسكينة"
      ],
      "c80": [
        "هل تفضّل الفاكهة على الحلويات؟",
        "اختيار الفاكهة",
        "اختيار الحلويات"
      ],
      "c81": [
        "هل تودّ رؤية الدلافين في البحر؟",
        "رغبة كبيرة في رؤيتها",
        "القراءة عنها أفضل"
      ],
      "c82": [
        "هل تحب الصيف؟",
        "انتظار الأيام الحارة",
        "حب للجو المنعش"
      ],
      "c83": [
        "هل تحب المشي في الحديقة العامة؟",
        "مشي في كل الأجواء",
        "البقاء في البيت أفضل"
      ],
      "c84": [
        "هل تحب الكتابة باليد؟",
        "خط مرتّب",
        "كتابة على الهاتف"
      ],
      "c85": [
        "هل تحب النزهات بالقارب؟",
        "المجاديف في اليد بالفعل",
        "البقاء على الشاطئ"
      ],
      "c86": [
        "هل تودّ السفر حول العالم؟",
        "رسم المسار قد بدأ",
        "بلدان قليلة تكفي"
      ],
      "c87": [
        "هل تجيد صنع رجل الثلج؟",
        "صنع أكبر واحد",
        "التراشق بكرات الثلج أفضل"
      ],
      "c88": [
        "هل تودّ تعلّم شيء جديد هذا العام؟",
        "اختيار دورة قد بدأ",
        "المشاغل كثيرة بالفعل"
      ],
      "c89": [
        "هل تحب الهدوء؟",
        "تقدير للسكينة",
        "حب للحيوية والحركة"
      ],
      "c90": [
        "هل تحب تقديم الهدايا لعائلتك؟",
        "إسعاد العائلة دون مناسبة",
        "المساعدة العملية أفضل"
      ]
    },
    "loves": {
      "s01": [
        "أين نقضي العطلة؟",
        "الشاطئ",
        "الجبال",
        "السفر",
        "وقت هادئ وحدي"
      ],
      "s02": [
        "الأمسية المثالية؟",
        "فيلم في البيت",
        "نزهة",
        "مطعم",
        "ألعاب لوحية"
      ],
      "s03": [
        "الطقس المفضل؟",
        "الشمس",
        "المطر",
        "الثلج",
        "ليلة مليئة بالنجوم"
      ],
      "s04": [
        "الحيوان المفضل؟",
        "قطة صغيرة",
        "جرو",
        "حصان",
        "دلفين"
      ],
      "s05": [
        "ماذا نأكل على العشاء؟",
        "بيتزا",
        "سوشي",
        "حلويات",
        "شواء"
      ],
      "s06": [
        "المشروب المفضل؟",
        "قهوة",
        "شاي",
        "كاكاو ساخن",
        "ليموناضة"
      ],
      "s07": [
        "الفصل المفضل؟",
        "الربيع",
        "الصيف",
        "الخريف",
        "الشتاء"
      ],
      "s08": [
        "الزهور المفضلة؟",
        "الورد",
        "التوليب",
        "عباد الشمس",
        "اللافندر"
      ],
      "s09": [
        "كيف نسترخي؟",
        "مع كتاب",
        "بالرسم",
        "على الدراجة",
        "قيلولة في الأرجوحة"
      ],
      "s10": [
        "كيف نسافر؟",
        "بالقطار",
        "بالطائرة",
        "بالسيارة",
        "بالسفينة"
      ],
      "s11": [
        "بيت الأحلام؟",
        "شقة في المدينة",
        "بيت على البحر",
        "كوخ في الجبال",
        "مزرعة"
      ],
      "s12": [
        "شيء حلو؟",
        "آيس كريم",
        "شوكولاتة",
        "كعكة",
        "فاكهة"
      ],
      "s13": [
        "الصباح المثالي؟",
        "فطور في السرير",
        "ركض",
        "نوم طويل",
        "قهوة في الشرفة"
      ],
      "s14": [
        "موعد الأحلام؟",
        "نزهة",
        "حلبة تزلج",
        "مدينة ملاهٍ",
        "نجوم على السطح"
      ],
      "s15": [
        "أجمل هدية؟",
        "باقة زهور",
        "رسالة",
        "رحلة",
        "صندوق هدية"
      ],
      "s16": [
        "الطبيعة المفضلة؟",
        "البحر",
        "الغابة",
        "الصحراء",
        "الشفق القطبي"
      ],
      "s17": [
        "الفاكهة المفضلة؟",
        "تفاح",
        "فراولة",
        "بطيخ",
        "عنب"
      ],
      "s18": [
        "ماذا نفعل في يوم العطلة؟",
        "مسير في الجبال",
        "طبخ في البيت",
        "زيارة متحف",
        "صيد السمك"
      ],
      "s19": [
        "الفطور المفضل؟",
        "فطائر البان كيك",
        "عجة",
        "عصيدة بالتوت",
        "كرواسون"
      ],
      "s20": [
        "الطائر المفضل؟",
        "البومة",
        "الببغاء",
        "البجعة",
        "الطاووس"
      ],
      "s21": [
        "أي مدينة نزور؟",
        "إسطنبول",
        "باريس",
        "طوكيو",
        "دبي"
      ],
      "s22": [
        "الرياضة المفضلة؟",
        "كرة القدم",
        "السباحة",
        "التنس",
        "ركوب الخيل"
      ],
      "s23": [
        "ماذا نزرع في الحديقة؟",
        "شجرة تفاح",
        "ورود",
        "خضروات",
        "فراولة"
      ],
      "s24": [
        "المخبوزات المفضلة؟",
        "فطائر صغيرة",
        "دونات",
        "بسكويت",
        "بقلاوة"
      ],
      "s25": [
        "أين نعيش؟",
        "قرب نهر",
        "في غابة",
        "في مدينة كبيرة",
        "على جزيرة"
      ],
      "s26": [
        "الكائن البحري المفضل؟",
        "السلحفاة",
        "الحوت",
        "الأخطبوط",
        "حصان البحر"
      ],
      "s27": [
        "بماذا نتنقّل؟",
        "دراجة",
        "سكوتر",
        "منطاد هوائي",
        "قارب"
      ],
      "s28": [
        "الهواية المفضلة؟",
        "الحياكة",
        "تصوير الطبيعة",
        "البستنة",
        "فن الخط"
      ],
      "s29": [
        "الحساء المفضل؟",
        "البورش",
        "حساء الدجاج",
        "حساء اليقطين",
        "شوربة العدس"
      ],
      "s30": [
        "حيوان الغابة؟",
        "القنفذ",
        "السنجاب",
        "الثعلب",
        "الأيل"
      ],
      "s31": [
        "شيء خفيف نأكله؟",
        "تمر",
        "لوز",
        "فستق",
        "مشمش مجفف"
      ],
      "s32": [
        "ماذا نأخذ في رحلة المسير؟",
        "خيمة",
        "ترمس",
        "خريطة",
        "مصباح يدوي"
      ],
      "s33": [
        "الحلوى المفضلة؟",
        "مهلبية",
        "تشيز كيك",
        "فطائر بالعسل",
        "سلطة فواكه"
      ],
      "s34": [
        "ماذا نفعل في الشتاء؟",
        "صنع رجل الثلج",
        "ركوب الزلاجة",
        "شاي بجانب النافذة",
        "التزلج على الثلج"
      ],
      "s35": [
        "ماذا نفعل في الصيف؟",
        "السباحة",
        "قطف التوت",
        "نزهة بالقارب",
        "بناء قلعة رملية"
      ],
      "s36": [
        "بماذا نرسم؟",
        "ألوان مائية",
        "أقلام رصاص",
        "أقلام شمعية",
        "ألوان على قماش"
      ],
      "s37": [
        "الخضار المفضل؟",
        "جزر",
        "طماطم",
        "ذرة",
        "يقطين"
      ],
      "s38": [
        "ما الذي يجعل البيت دافئًا؟",
        "مدفأة حطب",
        "بطانية ناعمة",
        "نباتات منزلية",
        "رف كتب"
      ],
      "s39": [
        "ماذا نلعب؟",
        "الشطرنج",
        "أحجيات الصور",
        "ألعاب الطاولة",
        "ألعاب الكرة"
      ],
      "s40": [
        "من يعيش في المزرعة؟",
        "بقرة",
        "حَمَل",
        "دجاجة",
        "جدي صغير"
      ],
      "s41": [
        "الشاي مع ماذا؟",
        "عسل",
        "ليمون",
        "مربى",
        "نعناع"
      ],
      "s42": [
        "ماذا يوجد عند البحر؟",
        "منارة",
        "أصداف",
        "مركب شراعي",
        "نوارس"
      ],
      "s43": [
        "كيف نبدأ الصباح؟",
        "تمارين رياضية",
        "كوب شاي",
        "نزهة",
        "كتاب"
      ],
      "s44": [
        "التوت المفضل؟",
        "توت العليق",
        "التوت الأزرق",
        "الكرز",
        "التوت الأسود"
      ]
    },
    "who": [
      "مَن منّا يتأخر أكثر؟",
      "مَن منّا يبادر بالصلح أولًا؟",
      "مَن منّا يطبخ أفضل؟",
      "مَن منّا يضحك أكثر؟",
      "مَن منّا يستغرق وقتًا أطول في الاستعداد؟",
      "مَن منّا يُضيّع المفاتيح أكثر؟",
      "مَن منّا يتذكر التواريخ المهمة أفضل؟",
      "مَن منّا يحب الحلويات أكثر؟",
      "مَن منّا ينام أولًا؟",
      "مَن منّا يستيقظ أبكر؟",
      "مَن منّا يقول «اشتقت إليك» أكثر؟",
      "مَن منّا يختار الهدايا أفضل؟",
      "مَن منّا يمزح أكثر؟",
      "مَن منّا يقود السيارة أفضل؟",
      "مَن منّا يتحدث على الهاتف وقتًا أطول؟",
      "مَن منّا يحب السفر أكثر؟",
      "مَن منّا يتضايق بسرعة أكبر؟",
      "مَن منّا يسامح أسرع؟",
      "مَن منّا يلتقط صورًا أكثر؟",
      "مَن منّا يُحسن إدارة المال أكثر؟",
      "مَن منّا يشتري أشياء لا نحتاجها أكثر؟",
      "مَن منّا أبرع في المواساة؟",
      "مَن منّا أهدأ في اللحظات الصعبة؟",
      "مَن منّا يبحث عن هاتفه دائمًا؟",
      "مَن منّا يحب استقبال الضيوف أكثر؟",
      "مَن منّا يُعدّ الفطور أكثر؟",
      "مَن منّا يعرف الطريق أفضل في مدينة جديدة؟",
      "مَن منّا يكتب رسائل أطول؟",
      "مَن منّا يقترح التنزه أولًا؟",
      "مَن منّا يحب الحيوانات أكثر؟",
      "مَن منّا يحفظ الأسرار أفضل؟",
      "مَن منّا يستغرق وقتًا أطول في اختيار الطعام من القائمة؟",
      "مَن منّا يقلق على الأحبة أكثر؟",
      "مَن منّا يصنع مفاجآت أكثر؟",
      "مَن منّا أكثر ترتيبًا؟",
      "مَن منّا يلاحظ تسريحة الشعر الجديدة أولًا؟",
      "مَن منّا يتذكر القصص المضحكة أكثر؟",
      "مَن منّا أكثر صبرًا؟",
      "مَن منّا يقول «شكرًا» أكثر؟",
      "مَن منّا يعرض المساعدة أولًا؟",
      "مَن منّا أبرع في الحساب الذهني؟",
      "مَن منّا يقرأ أكثر؟",
      "مَن منّا يكتب على لوحة المفاتيح أسرع؟",
      "مَن منّا يتصل بوالديه أكثر؟",
      "مَن منّا يروي القصص أفضل؟",
      "مَن منّا خطّه أكثر ترتيبًا؟",
      "مَن منّا يحب الطعام الحار أكثر؟",
      "مَن منّا ينسى أغراضه في البيت أكثر؟",
      "مَن منّا أبرع في التعامل مع الأجهزة؟",
      "مَن منّا يحب تعلّم الأشياء الجديدة أكثر؟",
      "مَن منّا أبرع في التخطيط؟",
      "مَن منّا أشطر في المساومة في السوق؟",
      "مَن منّا يحب الطبيعة أكثر؟",
      "مَن منّا يأكل أسرع؟",
      "مَن منّا يشرب الشاي أكثر؟",
      "مَن منّا يعتني بالنباتات أفضل؟",
      "مَن منّا يعرف الجغرافيا أفضل؟",
      "مَن منّا يلعب الشطرنج أفضل؟",
      "مَن منّا يختار الفاكهة في السوق أفضل؟",
      "مَن منّا يتابع النشرة الجوية أكثر؟",
      "مَن منّا يخاف من العناكب أكثر؟",
      "مَن منّا أشجع؟",
      "مَن منّا أكثر فضولًا؟",
      "مَن منّا يحل الألغاز أسرع؟",
      "مَن منّا يرسم أفضل؟",
      "مَن منّا يساعد الجيران أكثر؟",
      "مَن منّا يتفاهم مع الأطفال أفضل؟",
      "مَن منّا يحب المشي أكثر؟",
      "مَن منّا يقرأ التعليمات أكثر؟",
      "مَن منّا يتذكّر الأسماء أفضل؟",
      "مَن منّا يحفظ كلمات اللغات الأخرى أسرع؟",
      "مَن منّا أمهر في الخَبز؟",
      "مَن منّا يقدّم نصائح أفضل؟",
      "مَن منّا يحب الطقس البارد أكثر؟",
      "مَن منّا سيكون أفضل في رحلة سير طويلة؟",
      "مَن منّا يقرأ الأخبار أكثر؟",
      "مَن منّا يجرّب أطباقًا جديدة أكثر؟",
      "مَن منّا يجهّز حقيبة السفر أسرع؟",
      "مَن منّا أمهر في إصلاح الأشياء؟",
      "مَن منّا يتحدّث إلى الحيوانات أكثر؟",
      "مَن منّا يغسل الأطباق أكثر؟",
      "مَن منّا يعرف التاريخ أفضل؟",
      "مَن منّا يؤجّل الأمور أكثر؟",
      "مَن منّا يتآلف مع الناس الجدد أسرع؟",
      "مَن منّا يهتم بصحته أكثر؟"
    ],
    "phrases": [
      "أبتسم عندما…",
      "يومي المفضل معك هو…",
      "شكرًا لك على…",
      "عندما أحزن، يساعدني…",
      "يومًا ما أريد أن نقوم معًا بـ…",
      "أدفأ ذكرى لنا هي…",
      "لا أحد يُتقن مثلك…",
      "أشعر بالطمأنينة عندما…",
      "لو كان لدينا يوم كامل فارغ، لكنّا…",
      "يملؤني الفخر بك لأن…",
      "أمسيتنا المثالية هي…",
      "لن أنسى أبدًا كيف…",
      "تعجبني منك كلمة…",
      "في العام القادم أتمنى لنا أن…",
      "بالنسبة لي، أنت مثل…",
      "أجمل هدية منك هي…",
      "أشتاق إليك عندما…",
      "نكون في أطرف حالاتنا عندما…",
      "منذ زمن أريد أن أقول لك…",
      "مكاننا هو…",
      "عندما أفكر فيك، أنا…",
      "يصبح يومي أجمل عندما…",
      "تعجبني عادتنا في…",
      "أمنيتي لنا: …",
      "أطرف ما حدث لنا هو…",
      "أشعر باهتمامك بي عندما…",
      "الصباح معك هو…",
      "لو كنّا كلمة واحدة، لكانت…",
      "أريد أن أتعلم منك كيف…",
      "شكرًا لأنك دائمًا…",
      "طعامي المفضل في طفولتي كان…",
      "لو مُنحت يومًا واحدًا في أي بلد، فسوف…",
      "أفضل نصيحة تلقيتها هي…",
      "أضحك دائمًا عندما…",
      "مكاني المفضل في مدينتي هو…",
      "لو كان لي دكان صغير، لكان يبيع…",
      "أفضل طبق أطبخه هو…",
      "حلم طفولة ما زلت أتذكّره هو…",
      "من السهل إسعادي إذا…",
      "أروع مكان زرته هو…",
      "أريد أن أتعلّم…",
      "يوم راحتي المثالي يبدأ بـ…",
      "لو استطعت اقتناء أي حيوان، لاخترت…",
      "عائلتي تقول دائمًا إنني…",
      "لا أستطيع أبدًا أن أعتاد على…",
      "أنفع عادة لديّ هي…",
      "أفضل كتاب قرأته هو…",
      "بعد عشر سنوات أودّ أن…",
      "بيت أحلامي هو…",
      "أطرف ما حدث لي في طفولتي هو…",
      "السعادة بالنسبة لي هي…",
      "يصعب عليّ التخلي عن…",
      "لو كانت لديّ قوة خارقة، لكانت…",
      "أكثر ما أقدّره في الناس هو…",
      "في المساء الذي أكون فيه متفرغًا، أحب أن…",
      "رائحتي المفضلة هي…",
      "الطعام الذي لن آكله أبدًا هو…",
      "الشيء الوحيد الذي لا أخرج من البيت بدونه هو…",
      "أودّ زيارة… لأن…",
      "أجمل هدية تلقيتها هي…",
      "أغرب عادة لديّ هي…",
      "لو كانت لديّ ساعة إضافية كل يوم، لقضيتها في…",
      "شخص أتعلّم منه الكثير هو…",
      "في اليوم الصعب، ما يعينني هو…",
      "ألذّ شيء تذوقته في سفر هو…",
      "لو استطعت تغيير عملي ليوم واحد، لاخترت…",
      "الفصل الأقرب إلى قلبي هو…",
      "أصدقائي يقولون إنني…",
      "أودّ يومًا أن أعلّم أحدًا…",
      "فرحة صغيرة في يومي هي…"
    ],
    "truth": {
      "t01": [
        "للأخطبوط ثلاثة قلوب.",
        true,
        "قلبان يضخّان الدم عبر الخياشيم، والثالث يضخّه إلى سائر الجسم."
      ],
      "t02": [
        "يمكن رؤية سور الصين العظيم من القمر بالعين المجردة.",
        false,
        "لا يمكن: السور ضيّق جدًا. حتى من المدار تصعب رؤيته كثيرًا."
      ],
      "t03": [
        "يمكن أن يبقى العسل آلاف السنين دون أن يفسد.",
        true,
        "عُثر في مقابر مصرية قديمة على عسل عمره آلاف السنين ما زال محفوظًا."
      ],
      "t04": [
        "الموز ينمو على الأشجار.",
        false,
        "نبتة الموز عشبة عملاقة: «جذعها» مكوّن من أوراق ملتفّة بإحكام."
      ],
      "t05": [
        "الزهرة أشدّ كواكب المجموعة الشمسية حرارة.",
        true,
        "غلافها الجوي الكثيف يرفع حرارتها إلى نحو 460 °C — أكثر من عطارد."
      ],
      "t06": [
        "الخفافيش عمياء.",
        false,
        "الخفافيش تبصر، وفي الظلام تهتدي أيضًا بتحديد الموقع بالصدى."
      ],
      "t07": [
        "الحوت سمكة.",
        false,
        "الحيتان ثدييات: تتنفس الهواء وترضع صغارها الحليب."
      ],
      "t08": [
        "الصحراء الكبرى أكبر صحراء في العالم.",
        false,
        "أكبر صحراء هي القارة القطبية الجنوبية، والصحراء الكبرى أكبر صحراء حارة."
      ],
      "t09": [
        "عدد عظام رقبة الزرافة يساوي عددها عند الإنسان.",
        true,
        "لدى كليهما سبع فقرات عنقية، لكنها طويلة جدًا عند الزرافة."
      ],
      "t10": [
        "من الناحية النباتية، الطماطم ثمرة عنبية.",
        true,
        "يصنّف علماء النبات الطماطم ثمرة عنبية: ثمرة لحمية بداخلها بذور."
      ],
      "t11": [
        "من الناحية النباتية، الفراولة ثمرة عنبية.",
        false,
        "إنها ثمرة كاذبة: الثمار الحقيقية هي «البذور» الصغيرة على سطحها."
      ],
      "t12": [
        "يمكن سماع صوت انفجار في الفضاء.",
        false,
        "لا يكاد يوجد هواء في الفضاء، فلا وسط ينتقل فيه الصوت."
      ],
      "t13": [
        "في أعالي الجبال يغلي الماء عند درجة حرارة أقل.",
        true,
        "الضغط الجوي هناك أقل، فيغلي الماء قبل بلوغ 100 °C."
      ],
      "t14": [
        "تعيش البطاريق في القطب الشمالي.",
        false,
        "البطاريق البرية تعيش في نصف الكرة الجنوبي فقط، لا في أقصى الشمال."
      ],
      "t15": [
        "إيفرست أعلى جبل فوق مستوى سطح البحر.",
        true,
        "يرتفع إيفرست نحو 8849 مترًا فوق مستوى سطح البحر."
      ],
      "t16": [
        "يستخدم الإنسان 10% فقط من دماغه.",
        false,
        "هذه خرافة: كل أجزاء الدماغ تقريبًا تنشط على مدار اليوم."
      ],
      "t17": [
        "ينبض قلب الإنسان نحو 100 ألف مرة في اليوم.",
        true,
        "بمعدل 70 نبضة تقريبًا في الدقيقة يصل المجموع إلى نحو 100 ألف نبضة يوميًا."
      ],
      "t18": [
        "ذاكرة السمكة الذهبية ثلاث ثوانٍ فقط.",
        false,
        "تُظهر التجارب أن السمكة الذهبية تتذكّر ما تعلّمته لأشهر."
      ],
      "t19": [
        "أستراليا دولة وقارة في آن واحد.",
        true,
        "أستراليا هي الدولة الوحيدة التي تشغل قارة كاملة."
      ],
      "t20": [
        "البرق لا يضرب المكان نفسه مرتين أبدًا.",
        false,
        "بل يضربه: المباني العالية يصيبها البرق مرات كثيرة كل عام."
      ],
      "t21": [
        "النعامة تدفن رأسها في الرمل حين تخاف.",
        false,
        "خرافة: النعامة الخائفة تهرب أو تنبطح على الأرض لتختبئ."
      ],
      "t22": [
        "أصغر طائر في العالم نوع من الطيور الطنانة.",
        true,
        "الطائر الطنان النحلي في كوبا يزن نحو غرامين — أخف من أي طائر آخر."
      ],
      "t23": [
        "البطيخ يتكوّن من الماء بنسبة 90% تقريبًا.",
        true,
        "يحتوي البطيخ على نحو 92% من الماء — ولهذا هو منعش جدًا."
      ],
      "t24": [
        "للعنكبوت ست أرجل.",
        false,
        "للعنكبوت ثماني أرجل. للحشرات ست، والعناكب ليست حشرات."
      ],
      "t25": [
        "القمر يصدر ضوءه بنفسه.",
        false,
        "ليس للقمر ضوء خاص به: إنه يعكس ضوء الشمس."
      ],
      "t26": [
        "الفيل أكبر حيوان بري.",
        true,
        "قد يزيد وزن فيل السافانا الأفريقي على 6 أطنان."
      ],
      "t27": [
        "الحوت الأزرق أكبر حيوان عرفه العلم.",
        true,
        "قد يتجاوز طول الحوت الأزرق 30 مترًا — أكبر من أي ديناصور معروف."
      ],
      "t28": [
        "الحرباء تغيّر لونها للتخفي فقط.",
        false,
        "لونها يتعلق أكثر بالحالة المزاجية والحرارة وإرسال الإشارات لغيرها."
      ],
      "t29": [
        "توماس إديسون هو مخترع الهاتف.",
        false,
        "حصل ألكسندر غراهام بيل على براءة اختراع الهاتف عام 1876."
      ],
      "t30": [
        "ألكسندر فليمنغ هو مكتشف البنسلين.",
        true,
        "اكتشف فليمنغ البنسلين عام 1928 — وهو أول مضاد حيوي."
      ],
      "t31": [
        "أعلى بركان في المجموعة الشمسية يقع على المريخ.",
        true,
        "يبلغ ارتفاع أوليمبوس مونس على المريخ نحو 22 كم — قرابة 2.5 ضعف إيفرست."
      ],
      "t32": [
        "الدم في أوردتنا أزرق.",
        false,
        "الدم أحمر دائمًا؛ تبدو الأوردة زرقاء بسبب طريقة مرور الضوء عبر الجلد."
      ],
      "t33": [
        "المحيط الأطلسي أكبر محيطات الأرض.",
        false,
        "الأكبر هو المحيط الهادئ: مساحته أكبر من كل اليابسة مجتمعة."
      ],
      "t34": [
        "روسيا أكبر دولة في العالم مساحةً.",
        true,
        "تزيد مساحة روسيا على 17 مليون كيلومتر مربع."
      ],
      "t35": [
        "لكندا أطول ساحل في العالم.",
        true,
        "يمتد ساحل كندا أكثر من 200 ألف كم — أطول من ساحل أي دولة أخرى."
      ],
      "t36": [
        "معدة البقرة مقسّمة إلى أربع حجرات.",
        true,
        "للبقرة معدة واحدة بأربع حجرات — وبهذا تهضم العشب."
      ],
      "t37": [
        "الأسد أكبر السنوريات في العالم.",
        false,
        "أكبر السنوريات هو النمر، وخاصة النمر السيبيري."
      ],
      "t38": [
        "الأرض أقرب الكواكب إلى الشمس.",
        false,
        "الأقرب عطارد ثم الزهرة، والأرض هي الكوكب الثالث."
      ],
      "t39": [
        "يستغرق ضوء الشمس نحو 8 دقائق ليصل إلى الأرض.",
        true,
        "يقطع الضوء 150 مليون كم من الشمس في نحو 8 دقائق و20 ثانية."
      ],
      "t40": [
        "تنام الدلافين بنصف دماغها في كل مرة.",
        true,
        "يستريح نصف الدماغ بينما يبقى النصف الآخر متيقظًا ويتذكّر التنفس."
      ],
      "t41": [
        "البطاطس أصلها من أيرلندا.",
        false,
        "أصل البطاطس من أمريكا الجنوبية: زُرعت في جبال الأنديز منذ آلاف السنين."
      ],
      "t42": [
        "تُصنع الشوكولاتة من بذور شجرة الكاكاو.",
        true,
        "تنمو قرون الكاكاو على الجذع مباشرة، وبذورها تصبح شوكولاتة."
      ],
      "t43": [
        "القرش من الثدييات.",
        false,
        "القرش سمكة تتنفس بالخياشيم. أما الحيتان والدلافين فهي الثدييات البحرية."
      ],
      "t44": [
        "بعض أنواع الخيزران تنمو نحو متر في اليوم.",
        true,
        "الخيزران من أسرع النباتات نموًا على الأرض."
      ],
      "t45": [
        "تستطيع البومة إدارة رأسها 360 درجة كاملة.",
        false,
        "تدير البومة رأسها نحو 270 درجة — كثير، لكنه ليس دائرة كاملة."
      ],
      "t46": [
        "الألماس وغرافيت أقلام الرصاص مادة واحدة.",
        true,
        "كلاهما كربون نقي — لكن ذراته مرتّبة بشكل مختلف."
      ],
      "t47": [
        "الجمل يخزّن الماء في سنامه.",
        false,
        "يخزّن السنام الدهون لا الماء — وهي مصدر طاقة في الرحلات الطويلة."
      ],
      "t48": [
        "أصغر عظمة في جسم الإنسان توجد في الأذن.",
        true,
        "عظمة الركاب في الأذن الوسطى طولها نحو 3 مليمترات فقط."
      ],
      "t49": [
        "قد تعيش الببغاوات الكبيرة أكثر من 50 عامًا.",
        true,
        "ببغاوات المكاو والكوكاتو التي تلقى رعاية جيدة تعيش غالبًا 50 عامًا أو أكثر."
      ],
      "t50": [
        "الأخوان رايت قاما بأول طيران بطائرة ذات محرك.",
        true,
        "طارا عام 1903، ودامت الرحلة الأولى 12 ثانية."
      ],
      "t51": [
        "اختُرعت العجلة في العصور الوسطى.",
        false,
        "عمر العجلة يزيد على 5000 عام: استُخدمت في بلاد الرافدين منذ نحو 5500 عام."
      ],
      "t52": [
        "حصان البحر سمكة.",
        true,
        "يتنفس حصان البحر بالخياشيم ويسبح بزعنفة مثل باقي الأسماك."
      ],
      "t53": [
        "يستطيع الطائر الطنان الطيران إلى الخلف.",
        true,
        "الطيور الطنانة هي الطيور الوحيدة التي تطير إلى الخلف حقًا."
      ],
      "t54": [
        "يزداد طول برج إيفل قليلًا في الصيف.",
        true,
        "الحرارة تجعل المعدن يتمدد، فيطول البرج نحو 15 سنتيمترًا."
      ],
      "t55": [
        "الجلد أكبر عضو في جسم الإنسان.",
        true,
        "يزن جلد البالغ عدة كيلوغرامات ويحمي الجسم كله."
      ],
      "t56": [
        "اللون الأحمر يُغضب الثور.",
        false,
        "الثور بالكاد يميّز الأحمر: الحركة هي ما يستفزه لا اللون."
      ],
      "t57": [
        "الذبابة المنزلية تعيش يومًا واحدًا فقط.",
        false,
        "تعيش الذبابة المنزلية نحو شهر. أما ذبابة مايو البالغة فتعيش يومًا أو يومين."
      ],
      "t58": [
        "الأناناس ينمو على الأشجار.",
        false,
        "ينمو الأناناس على نبتة قصيرة كثيفة الأوراق، من وسطها تمامًا."
      ],
      "t59": [
        "الفول السوداني من المكسرات.",
        false,
        "الفول السوداني من البقوليات، قريب البازلاء والفاصولياء. تنضج قرونه تحت الأرض."
      ],
      "t60": [
        "القطبان الشمالي والجنوبي متساويان في البرودة.",
        false,
        "القطب الجنوبي أبرد بكثير: يقع على قارة جليدية مرتفعة، والشمالي على محيط."
      ]
    },
    "hints": {
      "h01": [
        "البطريق",
        "أنا طائر، لكنني لا أطير",
        "أعيش حيث البرد شديد جدًا",
        "أرتدي دائمًا بدلة رسمية",
        "النعامة",
        "الفقمة",
        "النورس"
      ],
      "h02": [
        "الفيل",
        "آكل طوال اليوم تقريبًا",
        "أذناي كمروحتين كبيرتين",
        "لي خرطوم طويل",
        "وحيد القرن",
        "فرس النهر",
        "الزرافة"
      ],
      "h03": [
        "الزرافة",
        "أنام قليلًا جدًا، وغالبًا وأنا واقفة",
        "آكل أوراق أعلى الأشجار",
        "عنقي هو الأطول",
        "الحمار الوحشي",
        "الجمل",
        "الموظ"
      ],
      "h04": [
        "الجمل",
        "أستطيع البقاء طويلًا بلا ماء",
        "يسمونني سفينة الصحراء",
        "على ظهري سنام واحد أو اثنان",
        "الحصان",
        "الحمار",
        "اللاما"
      ],
      "h05": [
        "النحلة",
        "أستطيع أن أدلّ رفيقاتي على الأزهار",
        "أعمل في المروج من الفجر حتى المغيب",
        "أصنع العسل",
        "الدبور",
        "الذبابة",
        "الفراشة"
      ],
      "h06": [
        "السلحفاة",
        "قد أعيش أكثر من مئة عام",
        "لا أستعجل أبدًا",
        "أحمل بيتي على ظهري",
        "الحلزون",
        "السحلية",
        "القنفذ"
      ],
      "h07": [
        "الكنغر",
        "ذيلي يساعدني على التوازن",
        "أعيش في أستراليا",
        "أحمل صغيري في جراب",
        "الكوالا",
        "الأرنب البري",
        "السنجاب"
      ],
      "h08": [
        "البومة",
        "أستطيع أن أدير رأسي إلى الخلف تقريبًا",
        "أصطاد في الليل",
        "أنعب في الغابة المظلمة",
        "الغراب",
        "النسر",
        "الحمامة"
      ],
      "h09": [
        "الدلفين",
        "أتنفس الهواء مع أنني أعيش في البحر",
        "أساعد الناس وأتحدث بالصفير",
        "أحب القفز فوق الأمواج",
        "القرش",
        "الحوت",
        "الفقمة"
      ],
      "h10": [
        "السنجاب",
        "أخبّئ طعامي وأحيانًا أنسى مكانه",
        "أعيش في جوف شجرة",
        "أقضم المكسرات وأكواز الصنوبر",
        "القنفذ",
        "الأرنب البري",
        "الفأر"
      ],
      "h11": [
        "العنكبوت",
        "لست حشرة، مع أن كثيرين يظنون ذلك",
        "لي ثماني أرجل",
        "أنسج شبكة",
        "النملة",
        "الخنفساء",
        "البعوضة"
      ],
      "h12": [
        "القطة",
        "أرى في الظلام أفضل من البشر",
        "أحب حافة النافذة الدافئة",
        "أخرخر وأصطاد الفئران",
        "الأرنب",
        "الهامستر",
        "الببغاء"
      ],
      "h13": [
        "البطيخ",
        "يصنّفني العلماء ثمرة لبّية",
        "ينتظرني الناس في الصيف",
        "أخضر من الخارج وأحمر من الداخل",
        "الشمام",
        "اليقطين",
        "الأناناس"
      ],
      "h14": [
        "الخبز",
        "أُخبز في كل بلد تقريبًا",
        "أُقطَّع شرائح للغداء",
        "قد أكون أبيض أو أسمر، ولي قشرة",
        "الفطيرة المقلاة",
        "الفطيرة المحشوة",
        "البسكويت"
      ],
      "h15": [
        "العسل",
        "أستطيع البقاء آلاف السنين دون أن أفسد",
        "أُضاف إلى الشاي الدافئ عند الزكام",
        "يصنعني النحل",
        "المربى",
        "السكر",
        "الحليب"
      ],
      "h16": [
        "الليمون",
        "أنا غني بفيتامين C",
        "يضعونني في الشاي",
        "أنا أصفر وحامض جدًا",
        "البرتقال",
        "الجريب فروت",
        "الليم الأخضر"
      ],
      "h17": [
        "الجزر",
        "أنمو تحت الأرض ولا يظهر إلا عرشي",
        "يقال إنني مفيد للنظر",
        "أنا برتقالي والأرانب تحبني",
        "الشمندر",
        "الفجل",
        "البطاطس"
      ],
      "h18": [
        "التفاح",
        "لي أصناف صيفية وأخرى شتوية",
        "أدخل في الفطائر والعصير",
        "أنمو على شجرة، أحمر أو أخضر",
        "الكمثرى",
        "الخوخ",
        "البرقوق"
      ],
      "h19": [
        "الموز",
        "أنمو في عناقيد على نبتة طويلة",
        "القرود تحبني كثيرًا",
        "أنا أصفر ويجب تقشيري",
        "المانجو",
        "الكيوي",
        "الأناناس"
      ],
      "h20": [
        "الشاي",
        "يشربني أهل الصين منذ آلاف السنين",
        "قد أكون أسود أو أخضر أو بالأعشاب",
        "أُحضَّر في إبريق",
        "القهوة",
        "الكاكاو",
        "العصير"
      ],
      "h21": [
        "البيضة",
        "يصعب خبز الكعكة من دوني",
        "تُصنع العجّة مني",
        "تضعني الدجاجة",
        "الجبن",
        "الجوزة",
        "البطاطس"
      ],
      "h22": [
        "المظلة",
        "أقضي معظم وقتي مطويّة",
        "يأخذونني حين تتلبد السماء",
        "أحمي من البلل تحت المطر",
        "معطف المطر",
        "القبعة",
        "الحذاء الطويل"
      ],
      "h23": [
        "الساعة",
        "قد أعمل بالرمل أو بضوء الشمس",
        "أُعلَّق على الجدران وأقف في الأبراج",
        "أُظهر الوقت بعقاربي",
        "البوصلة",
        "التقويم",
        "مقياس الحرارة"
      ],
      "h24": [
        "المفتاح",
        "من دوني لا يسمح الباب بالدخول",
        "كثيرًا ما أُحمل في حلقة",
        "أفتح القفل",
        "المقص",
        "مفك البراغي",
        "مشبك الورق"
      ],
      "h25": [
        "الشمعة",
        "كلما عملت أكثر صغرت أكثر",
        "يشعلونني حين تنقطع الكهرباء",
        "أنا من الشمع ولي فتيل",
        "المصباح اليدوي",
        "القنديل",
        "أعواد الثقاب"
      ],
      "h26": [
        "المقص",
        "لي حلقتان وطرفان حادّان",
        "أقص الأشكال من الورق",
        "أقطع القماش والورق",
        "السكين",
        "الإبرة",
        "المسطرة"
      ],
      "h27": [
        "فرشاة الأسنان",
        "لي شعيرات كثيرة",
        "أُستبدل كل ثلاثة أشهر",
        "أنظّف الأسنان صباحًا ومساءً",
        "الصابون",
        "المنشفة",
        "الإسفنجة"
      ],
      "h28": [
        "الثلاجة",
        "في داخلي شتاء دائم",
        "يضيء نور حين يفتحونني",
        "أحفظ الطعام باردًا",
        "الموقد",
        "الفرن",
        "الخزانة"
      ],
      "h29": [
        "الدراجة",
        "أسير بلا وقود ولا كهرباء",
        "لي مقود وجرس وسلسلة",
        "لي عجلتان ودوّاستان",
        "السكوتر",
        "الدراجة النارية",
        "لوح التزلج"
      ],
      "h30": [
        "الطائرة",
        "لي جناحان، لكنني لست طائرًا",
        "ينتظرني الناس في المطار",
        "أحلّق فوق الغيوم مع الركاب",
        "المروحية",
        "الصاروخ",
        "منطاد الهواء الساخن"
      ],
      "h31": [
        "القطار",
        "لا أسير إلا على طريقي الخاص",
        "لي عربات كثيرة",
        "أسير على القضبان من محطة إلى محطة",
        "الترام",
        "الحافلة",
        "المترو"
      ],
      "h32": [
        "الجسر",
        "أُبنى من الحجر أو الخشب أو الفولاذ",
        "تستطيع السفن المرور من تحتي",
        "أصل بين ضفتي النهر",
        "النفق",
        "الطريق",
        "السد"
      ],
      "h33": [
        "قلم الرصاص",
        "في داخلي غرافيت",
        "يبرونني حين أصبح غير حاد",
        "أكتب وأرسم، والممحاة تمحو أثري",
        "قلم الحبر",
        "الطباشير",
        "قلم التحديد"
      ],
      "h34": [
        "الكتاب",
        "أنا صامت، لكنني أعلّم الكثير",
        "لي غلاف وصفحات",
        "يقرؤونني ويستعيرونني من المكتبات",
        "المجلة",
        "الجريدة",
        "الدفتر"
      ],
      "h35": [
        "حقيبة السفر",
        "أسافر كثيرًا، لكن دائمًا في يد أحد",
        "يملؤونني قبل الرحلة",
        "لي مقبض وعجلات، وأحمل الملابس",
        "حقيبة الظهر",
        "حقيبة اليد",
        "الصندوق"
      ],
      "h36": [
        "المكتبة",
        "هنا يُطلب الحديث بهدوء",
        "هنا تُستخرج بطاقة القارئ",
        "آلاف الكتب للاستعارة إلى البيت",
        "المدرسة",
        "متجر الكتب",
        "الأرشيف"
      ],
      "h37": [
        "المطار",
        "هنا يوجد تفتيش الجوازات",
        "هنا يُعلَن عن الصعود إلى الرحلات",
        "من هنا تقلع الطائرات",
        "محطة القطار",
        "الميناء",
        "محطة الحافلات"
      ],
      "h38": [
        "الصحراء",
        "حارّة نهارًا، لكن لياليها قد تكون باردة جدًا",
        "هنا توجد الواحات",
        "رمل كثير وماء قليل جدًا",
        "السهوب",
        "السافانا",
        "الشاطئ"
      ],
      "h39": [
        "البركان",
        "قد أنام مئات السنين",
        "يتصاعد الدخان من قمتي",
        "أثور وأقذف الحمم",
        "الجبل",
        "الينبوع الحار",
        "الجزيرة"
      ],
      "h40": [
        "قوس قزح",
        "لا أُرى إلا والشمس خلف الناظر",
        "كثيرًا ما أظهر بعد المطر",
        "سبعة ألوان في قوس عبر السماء",
        "البرق",
        "الغيمة",
        "الشفق القطبي"
      ],
      "h41": [
        "القمر",
        "أُظهر للأرض الوجه نفسه دائمًا",
        "قد أكون بدرًا أو هلالًا رفيعًا",
        "أضيء في سماء الليل",
        "الشمس",
        "النجمة",
        "المذنّب"
      ],
      "h42": [
        "الثلج",
        "كل ندفة مني فريدة",
        "يبنون مني الحصون",
        "أبيض وبارد، أتساقط في الشتاء",
        "المطر",
        "البَرَد",
        "الصقيع"
      ],
      "h43": [
        "النهر",
        "لي منبع ومصب",
        "تبحر القوارب فوقي",
        "أجري من الجبال إلى البحر",
        "البحيرة",
        "البحر",
        "الجدول"
      ],
      "h44": [
        "الصبار",
        "أعيش طويلًا بلا ماء",
        "أنمو في الصحاري وعلى حواف النوافذ",
        "أنا مغطى بالأشواك",
        "الألوفيرا",
        "النخلة",
        "الأقحوان"
      ],
      "h45": [
        "عباد الشمس",
        "من بذوري يُستخرج الزيت",
        "أدور لأتبع الشمس",
        "زهرة صفراء كبيرة مليئة بالبذور",
        "الأقحوان",
        "التوليب",
        "الهندباء البرية"
      ],
      "h46": [
        "البلوط",
        "قد أعيش أكثر من ألف عام",
        "يُرى فيّ رمز للقوة",
        "تنمو عليّ ثمار صغيرة لها قبعات",
        "البتولا",
        "الصنوبر",
        "القيقب"
      ],
      "h47": [
        "الجزيرة",
        "قد تتسع لبلد كامل",
        "يُوصَل إليّ بالقارب أو الطائرة",
        "يحيط بي الماء من كل جانب",
        "شبه الجزيرة",
        "الشعاب المرجانية",
        "الرأس"
      ],
      "h48": [
        "الشلال",
        "يُسمع صوتي من بعيد",
        "أعلانا موجود في فنزويلا",
        "هنا يهوي النهر من فوق جرف",
        "النافورة",
        "الينبوع الحار",
        "العين"
      ],
      "h49": [
        "الطبيب",
        "أدرس سنوات طويلة قبل أن أبدأ العمل",
        "أرتدي معطفًا أبيض",
        "أعالج المرضى",
        "الممرض",
        "الصيدلي",
        "الطبيب البيطري"
      ],
      "h50": [
        "الإطفائي",
        "أناوب ليلًا ونهارًا، جاهزًا للنداء",
        "أعمل بالماء والسلالم",
        "أطفئ الحرائق",
        "الشرطي",
        "المنقذ",
        "عامل البناء"
      ],
      "h51": [
        "الطاهي",
        "أتذوق كل ما أصنعه",
        "أعمل أمام موقد ساخن",
        "أطبخ الطعام في مطعم",
        "الخبّاز",
        "النادل",
        "صانع الحلويات"
      ],
      "h52": [
        "المعلّم",
        "أصحّح الدفاتر في المساء",
        "أقف أمام السبورة",
        "أعلّم الأطفال في المدرسة",
        "المدير",
        "أمين المكتبة",
        "مربي الروضة"
      ],
      "h53": [
        "الطيار",
        "مكان عملي قمرة القيادة",
        "أخاطب الركاب عبر مكبر الصوت",
        "أقود الطائرة",
        "القبطان",
        "السائق",
        "رائد الفضاء"
      ],
      "h54": [
        "ساعي البريد",
        "أعرف كل عنوان في منطقتي",
        "أحمل حقيبة كبيرة",
        "أوصل الرسائل والطرود",
        "عامل التوصيل",
        "سائق الأجرة",
        "البائع"
      ],
      "h55": [
        "البستاني",
        "أعرف متى يُزرع كل شيء",
        "أدواتي مرشّة ماء ومقص تقليم",
        "أعتني بالأزهار والأشجار",
        "المزارع",
        "حارس الغابة",
        "بائع الزهور"
      ],
      "h56": [
        "المصوّر",
        "ألتقط اللحظات",
        "أطلب من الجميع ألّا يتحركوا",
        "أعمل بالكاميرا والصور",
        "الرسام",
        "الصحفي",
        "مصوّر الفيديو"
      ],
      "h57": [
        "الصياد",
        "أستيقظ قبل الفجر وأنتظر طويلًا",
        "أحتاج إلى صنارة وصبر",
        "أصطاد السمك",
        "المزارع",
        "البحّار",
        "الراعي"
      ],
      "h58": [
        "رائد الفضاء",
        "أتدرب على الأرض وقتًا طويلًا",
        "أرتدي بدلة فضاء",
        "أطير إلى الفضاء",
        "الطيار",
        "عالم الفلك",
        "المهندس"
      ],
      "h59": [
        "المهندس المعماري",
        "يُرى عملي في أنحاء المدينة",
        "أرسم المخططات",
        "أصمم البيوت",
        "عامل البناء",
        "المصمم",
        "المهندس المدني"
      ],
      "h60": [
        "طبيب الأسنان",
        "كثيرون يخافون من كرسيّي",
        "أعمل بالمثقاب",
        "أعالج الأسنان",
        "الجرّاح",
        "طبيب العيون",
        "طبيب الأطفال"
      ]
    },
    "dreams": {
      "d01": [
        "مكان العيش بعد عشر سنوات؟",
        "قرب البحر",
        "في الجبال",
        "في مدينة كبيرة",
        "في قرية هادئة"
      ],
      "d02": [
        "البيت المنشود يومًا ما؟",
        "شقة دافئة",
        "بيت بحديقة",
        "كوخ على ضفة بحيرة",
        "بيت قديم له تاريخ"
      ],
      "d03": [
        "ما يُزرع في الحديقة؟",
        "أشجار التفاح",
        "الورد",
        "خضار وأعشاب",
        "الفراولة"
      ],
      "d04": [
        "الحيوان الأليف المنشود؟",
        "قطة",
        "ببغاء",
        "أسماك زينة",
        "سلحفاة"
      ],
      "d05": [
        "الوجهة الأولى للسفر؟",
        "اليابان",
        "المغرب",
        "آيسلندا",
        "نيوزيلندا"
      ],
      "d06": [
        "وسيلة السفر المفضلة؟",
        "القطار",
        "السيارة",
        "الطائرة",
        "السفينة"
      ],
      "d07": [
        "اللغة المرغوب تعلّمها؟",
        "الفرنسية",
        "اليابانية",
        "الإسبانية",
        "الصينية"
      ],
      "d08": [
        "المهارة المرغوب تعلّمها؟",
        "الرسم",
        "الخياطة",
        "السباحة",
        "البرمجة"
      ],
      "d09": [
        "الطبق المرغوب إتقانه؟",
        "البلوف",
        "الخبز البيتي",
        "السوشي",
        "البقلاوة"
      ],
      "d10": [
        "قضاء عطلة نهاية الأسبوع؟",
        "في الطبيعة",
        "في البيت مع كتاب",
        "في زيارة الأهل",
        "في مدينة جديدة"
      ],
      "d11": [
        "صباح العطلة المثالي؟",
        "نزهة باكرة",
        "فطور على مهل",
        "رياضة في الهواء الطلق",
        "شاي على الشرفة"
      ],
      "d12": [
        "الادخار من أجل…؟",
        "بيت خاص",
        "رحلة كبيرة",
        "سيارة",
        "الدراسة"
      ],
      "d13": [
        "العمل المنشود؟",
        "مشروع خاص",
        "عمل في شركة كبيرة",
        "عمل من البيت",
        "مساعدة الناس"
      ],
      "d14": [
        "طريقة مساعدة الآخرين؟",
        "التطوع",
        "مساعدة الحيوانات",
        "تعليم الأطفال",
        "زراعة الأشجار"
      ],
      "d15": [
        "تقليد عائلي منشود؟",
        "غداء الأحد معًا",
        "أمسيات الألعاب اللوحية",
        "نزهات العطلة",
        "ألبوم صور العائلة"
      ],
      "d16": [
        "المطبخ المنشود؟",
        "مطبخ عائلي كبير",
        "مشرق ودافئ",
        "يطل على الحديقة",
        "صغير لكنه عملي"
      ],
      "d17": [
        "ما يُتمنّى رؤيته بالعين؟",
        "الشفق القطبي",
        "أهرامات الجيزة",
        "شلالات فيكتوريا",
        "جبال الهيمالايا"
      ],
      "d18": [
        "أنشطة المساء المرغوبة؟",
        "القراءة",
        "طبخ شيء جديد",
        "تعلّم اللغات",
        "المشي في الحديقة"
      ],
      "d19": [
        "الهواية المرغوب بدؤها؟",
        "التصوير",
        "صناعة الفخار",
        "التطريز",
        "البستنة"
      ],
      "d20": [
        "وجهة عطلة نهاية الأسبوع؟",
        "الغابة",
        "البحيرة",
        "بلدة قريبة",
        "الجبال"
      ],
      "d21": [
        "مكان العمل المثالي؟",
        "قرب النافذة",
        "مع رفوف الكتب",
        "مليء بالنباتات الخضراء",
        "شبه فارغ"
      ],
      "d22": [
        "المجال المرغوب دراسته لاحقًا؟",
        "الطب",
        "التاريخ",
        "الاقتصاد",
        "التصميم"
      ],
      "d23": [
        "الشجرة المرغوب غرسها؟",
        "البلوط",
        "شجرة تفاح",
        "شجرة زيتون",
        "نخلة تمر"
      ],
      "d24": [
        "ما يُطبخ للضيوف؟",
        "فطيرة بيتية",
        "قدر كبير من البلوف",
        "حساء بوصفة العائلة",
        "سلطات طازجة"
      ],
      "d25": [
        "المدينة المرغوب زيارتها؟",
        "إسطنبول",
        "باريس",
        "طوكيو",
        "القاهرة"
      ],
      "d26": [
        "قضاء الصيف؟",
        "على البحر",
        "في الجبال",
        "في بيت ريفي",
        "في جولة داخل البلد"
      ],
      "d27": [
        "الطائر المرغوب تربيته؟",
        "الكناري",
        "البادجي",
        "الحمام",
        "عصافير الزيبرا"
      ],
      "d28": [
        "الرياضة المرغوب تجربتها؟",
        "السباحة",
        "ركوب الخيل",
        "الرماية بالقوس",
        "التسلق"
      ],
      "d29": [
        "الكتب المرغوب جمعها؟",
        "الموسوعات",
        "الكلاسيكيات",
        "كتب الرحلات",
        "كتب الطبخ"
      ],
      "d30": [
        "ما يُصنع باليد؟",
        "أثاث",
        "أوانٍ خاصة",
        "بطانية محاكة",
        "بيت للعصافير"
      ],
      "d31": [
        "مكان النزهة المفضل؟",
        "ضفة النهر",
        "الحديقة",
        "فسحة في الغابة",
        "الجبال"
      ],
      "d32": [
        "وسيلة التنقل في المستقبل؟",
        "سيارة كهربائية",
        "دراجة",
        "سيارة عائلية كبيرة",
        "الاستغناء عن السيارة"
      ],
      "d33": [
        "أنشطة ما بعد التقاعد؟",
        "البستنة",
        "السفر",
        "الوقت مع الأحفاد",
        "تعلّم أشياء جديدة"
      ],
      "d34": [
        "العمل الخيري المنشود؟",
        "حفر بئر ماء",
        "مساعدة مأوى القطط",
        "جمع الكتب لمدرسة",
        "غرس صف من الأشجار"
      ],
      "d35": [
        "فطور عطلة نهاية الأسبوع؟",
        "فطائر رقيقة",
        "عجّة",
        "عصيدة بالفواكه",
        "فطائر الجبن"
      ],
      "d36": [
        "مكان استقبال الضيوف؟",
        "المطبخ",
        "غرفة الجلوس",
        "الشرفة الواسعة",
        "الحديقة"
      ],
      "d37": [
        "عجيبة الطبيعة المرغوب رؤيتها؟",
        "الأخدود العظيم",
        "شلالات نياغارا",
        "بحيرة بايكال",
        "الصحراء الكبرى"
      ],
      "d38": [
        "مهارة منزلية مرغوب تعلّمها؟",
        "الإصلاحات الذاتية",
        "الخياطة",
        "خبز الخبز",
        "العناية بالحديقة"
      ],
      "d39": [
        "عدد اللغات المرغوب إتقانها؟",
        "اثنتان",
        "ثلاث",
        "خمس",
        "أكبر عدد ممكن"
      ],
      "d40": [
        "لون جدران البيت المفضل؟",
        "أبيض",
        "بيج",
        "أخضر فاتح",
        "أزرق فاتح"
      ],
      "d41": [
        "سمكة الحوض المفضلة؟",
        "السمكة الذهبية",
        "الجوبي",
        "سمك القرموط",
        "سمكة الملاك"
      ],
      "d42": [
        "الرحلة المهداة إلى الوالدين؟",
        "إجازة على البحر",
        "جولة في مدينة",
        "رحلة إلى الجبال",
        "رحلة بالقطار"
      ],
      "d43": [
        "أنشطة وقت الفراغ؟",
        "الرسم",
        "القراءة",
        "الرياضة",
        "الأشغال اليدوية"
      ],
      "d44": [
        "الفصل المفضل للسفر؟",
        "الربيع",
        "الصيف",
        "الخريف",
        "الشتاء"
      ],
      "d45": [
        "مؤونة الشتاء المرغوبة؟",
        "المربى",
        "المخللات",
        "الفواكه المجففة",
        "شراب الفواكه"
      ],
      "d46": [
        "مهنة أخرى للتجربة؟",
        "الطهي",
        "البرمجة",
        "الترجمة",
        "النجارة"
      ],
      "d47": [
        "البلد المرغوب التعرف إليه؟",
        "ماليزيا",
        "إيطاليا",
        "كندا",
        "إندونيسيا"
      ],
      "d48": [
        "ما يُتمنّى في الفناء؟",
        "نافورة صغيرة",
        "حديقة خضار",
        "عريشة",
        "أرجوحة"
      ],
      "d49": [
        "طريقة الاحتفال بالنجاح؟",
        "عشاء عائلي",
        "رحلة إلى الطبيعة",
        "كتاب جديد",
        "عمل خير للآخرين"
      ],
      "d50": [
        "ما يُنقل إلى الأطفال؟",
        "حب الكتب",
        "مهارات الطبخ",
        "اللغة الأم",
        "رعاية الطبيعة"
      ]
    }
  },
  "ind": {
    "text": {
      "homeLink": "Game berdua",
      "eyebrow": "GLOWLETTER · GAME BERDUA",
      "title": "Main bersama",
      "close": "Tutup",
      "lead": "Kirim game kepada orang tersayang. Bermain lewat tautan gratis dan tanpa akun.",
      "quizTitle": "Seberapa kenal kamu denganku?",
      "quizNote": "Jawab pertanyaan tentang dirimu, lalu biarkan orang terdekat menebak. Hasilnya kembali kepadamu.",
      "create": "Buat kuis",
      "soon": "Segera",
      "soonTitle": "Game lain sedang disiapkan",
      "duel": "Duel «Siapa paling cepat»",
      "loves": "Yang kita sukai",
      "cards": "Kartu ingatan berdua",
      "who": "Siapa di antara kita?",
      "phrase": "Lengkapi kalimat",
      "myQuizzes": "Kuis saya",
      "noQuizzes": "Belum ada kuis. Kuis pertama bisa dibuat dalam beberapa menit.",
      "forWhom": "Untuk {name}",
      "noRecipient": "Kuis",
      "resultsCount": "Hasil: {count}",
      "newResults": "Baru: {count}",
      "noResults": "Belum ada yang bermain.",
      "anonymous": "Tanpa nama",
      "results": "Hasil",
      "copyLink": "Salin tautan",
      "share": "Kirim",
      "deleteQuiz": "Hapus kuis",
      "deleteConfirm": "Hapus kuis ini beserta hasilnya? Tautan tidak akan berfungsi lagi.",
      "deleted": "Kuis dihapus",
      "linkCopied": "Tautan disalin",
      "back": "Kembali",
      "next": "Lanjut",
      "stepNames": "Langkah 1 dari 2 · Nama",
      "yourName": "Namamu",
      "yourNamePlaceholder": "Siapa namamu",
      "recipient": "Untuk siapa · opsional",
      "recipientPlaceholder": "Nama orang tersayang",
      "nameRequired": "Tulis namamu.",
      "forbiddenName": "Tulis nama yang biasa.",
      "stepAnswers": "Langkah 2 dari 2 · Jawabanmu",
      "answersLead": "Tandai yang benar tentang dirimu. Setiap pertanyaan bisa diganti.",
      "swap": "Pertanyaan lain",
      "progress": "{done} dari {total} terjawab",
      "answerAll": "Pilih jawaban untuk setiap pertanyaan.",
      "finish": "Dapatkan tautan",
      "creating": "Membuat kuis…",
      "createdTitle": "Kuismu sudah siap!",
      "createdLead": "Kirim tautannya. Setelah dijawab, hasilnya muncul di «Kuis saya».",
      "shareText": "{name} mengajakmu bermain «Seberapa kenal kamu denganku?»",
      "signInTitle": "Perlu masuk akun",
      "signInNote": "Kuis disimpan di akunmu agar hasilnya sampai kepadamu.",
      "signIn": "Masuk",
      "premiumNote": "Membuat game termasuk akses penuh. Bermain lewat tautan gratis untuk semua.",
      "failed": "Tidak berhasil. Periksa koneksi lalu coba lagi.",
      "rateLimited": "Terlalu banyak percobaan. Coba lagi nanti.",
      "playEyebrow": "GAME BERDUA",
      "playInvite": "{name} mengajakmu bermain",
      "playLead": "Pertanyaan: {count}. Tebak jawabannya — di akhir kamu akan melihat berapa yang cocok.",
      "playName": "Namamu · opsional",
      "playNamePlaceholder": "Supaya mereka tahu ini kamu",
      "start": "Mulai",
      "playLoading": "Memuat game…",
      "playMissing": "Game ini tidak tersedia: tautan dihapus atau sudah kedaluwarsa.",
      "playOffline": "Game ini membutuhkan internet.",
      "retry": "Coba lagi",
      "questionOf": "Pertanyaan {n} dari {total}",
      "asks": "{name} bertanya",
      "counting": "Menghitung jawaban yang cocok…",
      "scoreOf": "{score} dari {total}",
      "tierAll": "Sempurna! Kalian saling mengenal lebih baik dari siapa pun",
      "tierHigh": "Kalian sangat saling mengenal",
      "tierMid": "Lumayan! Masih ada yang bisa dikenali",
      "tierLow": "Banyak penemuan indah menanti kalian",
      "sentTo": "{name} akan melihat hasilmu",
      "review": "Jawabanmu",
      "rightAnswer": "Jawaban benar",
      "makeOwn": "Buat kuisku sendiri",
      "home": "Beranda",
      "resultToast": "{name}: {score} dari {total} di «Seberapa kenal kamu denganku?»",
      "ownerAnswers": "Jawaban pembuat",
      "playerAnswers": "Jawaban {name}",
      "paywallTitle": "Game, hiburan<br><em>dan surat</em>",
      "groupGames": "Game",
      "groupFun": "Hiburan",
      "groupLetters": "Surat",
      "featQuiz": "«Seberapa kenal kamu denganku?» — hasilnya kembali kepadamu",
      "featGamesSoon": "Duel «Siapa paling cepat», «Yang kita sukai», kartu ingatan bergambar beruang",
      "featFunSoon": "«Siapa di antara kita?» dan «Lengkapi kalimat» dengan buku pasangan",
      "featCollection": "Seluruh koleksi surat dan puisi dalam 15 bahasa",
      "featMoments": "Momen, pengingat, dan surat QR yang terbuka di hari yang tepat",
      "featAudio": "Audiomu sendiri di surat dan balasan dari penerima",
      "groupTalk": "Teman dan panggilan",
      "featCall": "Panggilan dengan teman: suara, pengeras suara, dan reaksi hidup",
      "ynTitle": "Ya atau tidak",
      "ynNote": "Game langsung berdua: 5 detik untuk setiap kartu. Yang menjawab tepat waktu bisa melihat jawaban pasangannya.",
      "ynCreate": "Buat ruang",
      "ynWaiting": "Menunggu {name} membuka tautan…",
      "ynWaitingAny": "Menunggu pasangan…",
      "ynShareText": "{name} mengajakmu bermain game langsung «Ya atau tidak»",
      "ynPartnerHere": "{name} sudah datang!",
      "ynStart": "Mulai game",
      "ynWaitHost": "{name} akan segera memulai game",
      "ynYes": "Ya",
      "ynNo": "Tidak",
      "ynMissed": "Terlambat — kartu ini tetap tertutup",
      "ynMatch": "Jawabannya sama!",
      "ynRound": "Kartu {n} dari {total}",
      "ynAnswered": "Jawaban terkirim, menunggu pasangan…",
      "ynFinal": "{score} dari {total} sama",
      "ynFinalHigh": "Kalian saling mengerti tanpa kata",
      "ynFinalMid": "Begitu berbeda — dan begitu dekat",
      "ynAgain": "Main lagi",
      "ynLeft": "Pasangan terputus. Menunggu kembali…",
      "ynYou": "Kamu",
      "ynOffline": "Tidak bisa terhubung ke game. Periksa internet lalu buka tautan lagi.",
      "ynJoin": "Masuk ke game",
      "ynJoinLead": "{name} menunggumu. 5 detik untuk setiap jawaban!",
      "ynStepNames": "Namamu dan nama pasangan",
      "ynRoomReady": "Ruang sudah siap — kirim tautannya",
      "ynStayHere": "Biarkan layar ini terbuka: game dimulai saat tautan dibuka.",
      "featYesNo": "Game langsung «Ya atau tidak» — 5 detik per jawaban",
      "ynPartnerMissed": "Tidak ada jawaban — waktu habis",
      "lvTitle": "Yang kita sukai",
      "lvNote": "Game langsung berdua: 4 gambar, 10 detik untuk memilih yang paling kamu sukai. Boleh memilih yang sama!",
      "lvShareText": "{name} mengajakmu bermain game langsung «Yang kita sukai»",
      "lvJoinLead": "{name} menunggumu. Pilih gambar yang paling kamu sukai!",
      "lvRound": "Tema {n} dari {total}",
      "lvPick": "Pilih yang paling kamu sukai",
      "lvBoth": "Kalian berdua memilih: {item}",
      "lvCommon": "Yang kalian berdua sukai",
      "lvDiff": "Selera berbeda — makin seru!",
      "lvFinalHigh": "Kalian punya banyak kesamaan!",
      "lvFinalMid": "Begitu berbeda — dan saling melengkapi",
      "featLoves": "Game langsung «Yang kita sukai» — 4 gambar, pilih bersama",
      "featGamesSoon2": "Duel «Siapa paling cepat» dan kartu ingatan bergambar beruang",
      "mcTitle": "Kartu ingatan beruang",
      "mcNote": "Game ingatan langsung berdua: bergantian membuka dua kartu dan temukan pasangannya. Tiga level, dari 8 sampai 16 kartu.",
      "mcShareText": "{name} mengajakmu bermain game langsung «Kartu ingatan beruang»",
      "mcJoinLead": "{name} menunggumu. Temukan pasangan secara bergantian!",
      "mcLevel": "Level {n} dari {total}",
      "mcTurnYou": "Giliranmu — buka dua kartu",
      "mcTurnThem": "Giliran {name}",
      "mcPairs": "Pasangan ditemukan: {found} dari {total}",
      "mcLevelDone": "Semua pasangan ditemukan!",
      "mcTimeUp": "Waktu level ini habis",
      "mcNext": "Berikutnya: level {n}",
      "mcFinal": "Pasangan ditemukan: {found} dari {total}",
      "mcFinalHigh": "Tim yang hebat!",
      "mcFinalMid": "Permainan seru — sekali lagi?",
      "featCards": "Game langsung «Kartu ingatan beruang» — cari pasangan bersama",
      "featGamesSoon3": "Duel «Siapa paling cepat»",
      "duTitle": "Siapa lebih cepat",
      "duNote": "Duel langsung: satu kata dan empat gambar. Ketuk gambar yang benar lebih dulu — salah ketuk berarti kalah di ronde itu.",
      "duShareText": "{name} menantangmu dalam duel langsung “Siapa lebih cepat”",
      "duJoinLead": "{name} sedang menunggumu. Temukan gambar yang benar lebih cepat!",
      "duRound": "Ronde {n} dari {total}",
      "duFind": "Temukan: {item}",
      "duYouWon": "Kamu lebih cepat!",
      "duTheyWon": "{name} lebih cepat",
      "duWrong": "Gambar salah — ronde ini kalah",
      "duNobody": "Tidak ada yang menemukannya tepat waktu",
      "duScore": "Kamu {you} : {them} {name}",
      "duFinalWin": "Menang! Matamu jeli hari ini.",
      "duFinalLose": "Kali ini {name} menang — main lagi?",
      "duFinalDraw": "Seri — kalian seimbang!",
      "duSeconds": "{s} dtk",
      "featDuel": "Duel langsung “Siapa lebih cepat” — temukan gambarnya lebih dulu",
      "whoTitle": "Siapa di antara kita?",
      "whoNote": "Game langsung untuk berdua: satu pertanyaan, ketuk “Aku” atau nama pasanganmu. Lihat apakah pendapat kalian sama.",
      "whoShareText": "{name} mengajakmu main game langsung “Siapa di antara kita?”",
      "whoJoinLead": "{name} sedang menunggumu. Jawab dengan jujur — lalu bandingkan!",
      "whoRound": "Pertanyaan {n} dari {total}",
      "whoMe": "Aku",
      "whoAgree": "Kalian sepakat: {name}",
      "whoDiffer": "Pendapat kalian berbeda — coba bicarakan!",
      "whoFinal": "Kalian sepakat {score} dari {total} kali",
      "whoFinalHigh": "Kalian benar-benar saling mengenal!",
      "whoFinalMid": "Banyak yang bisa dibicarakan — dan itu menyenangkan",
      "featWho": "Game langsung “Siapa di antara kita?” — apakah kalian sepakat",
      "phTitle": "Lengkapi kalimat",
      "phNote": "Game langsung untuk berdua: kalian sama-sama melengkapi kalimat hangat yang sama dengan kata-kata sendiri, lalu saling membaca jawaban.",
      "phShareText": "{name} mengajakmu main game langsung “Lengkapi kalimat”",
      "phJoinLead": "{name} sedang menunggumu. Lengkapi setiap kalimat dengan kata-katamu sendiri!",
      "phRound": "Kalimat {n} dari {total}",
      "phPlaceholder": "Lanjutanmu…",
      "phDone": "Selesai",
      "phWaiting": "Menunggu {name}…",
      "phSkipped": "Tidak ada jawaban",
      "phSave": "Simpan ke Buku Berdua",
      "phSaved": "Tersimpan di Buku Berdua",
      "phForbidden": "Tulis tanpa tautan atau kata-kata kasar, ya.",
      "phNext": "Kalimat berikutnya",
      "phFinal": "Kalimat yang dilengkapi bersama: {count}",
      "phFinalLead": "Simpan jawaban favorit kalian ke Buku Berdua.",
      "featPhrase": "Game langsung “Lengkapi kalimat” dengan Buku Berdua",
      "bookTitle": "Buku Berdua",
      "bookNote": "Jawaban terhangat dari “Lengkapi kalimat”, tersimpan di akunmu.",
      "bookOpen": "Buka buku",
      "bookEmpty": "Bukunya masih kosong. Mainkan “Lengkapi kalimat” dan simpan jawaban yang kamu suka.",
      "bookDelete": "Hapus",
      "bookDeleteConfirm": "Hapus halaman ini dari buku?",
      "bookYou": "Kamu",
      "inviteTitle": "Ajak teman",
      "inviteNote": "Temanmu akan menerima pesan berisi game.",
      "invite": "Ajak",
      "invited": "Sudah diajak",
      "inviteNone": "Tambahkan teman di bagian “Teman” agar bisa mengajak mereka dengan sekali ketuk.",
      "inviteSent": "Undangan terkirim ke {name}",
      "truth": "Benar atau salah",
      "tfTitle": "Benar atau salah",
      "tfNote": "Game langsung untuk berdua: fakta menakjubkan tentang dunia. 12 detik — benar atau salah? Satu poin untuk setiap jawaban yang tepat.",
      "tfShareText": "{name} mengajakmu bermain game langsung «Benar atau salah»",
      "tfJoinLead": "{name} menunggumu. Benar atau salah — putuskan dengan cepat!",
      "tfRound": "Fakta {n} dari {total}",
      "tfTrue": "Benar",
      "tfFalse": "Salah",
      "tfIsTrue": "Itu benar!",
      "tfIsFalse": "Itu salah!",
      "tfFirstYou": "Kamu yang lebih dulu benar!",
      "tfFirstThem": "{name} yang lebih dulu benar",
      "tfFinalWin": "Menang! Kamu lebih tahu tentang dunia.",
      "tfFinalLose": "Kali ini {name} lebih tahu — main lagi?",
      "tfFinalDraw": "Seri — pengetahuan kalian sama banyaknya!",
      "featTruth": "Game langsung «Benar atau salah» — fakta menakjubkan tentang dunia",
      "countries": "Tebak negara",
      "coTitle": "Tebak negara",
      "coNote": "Game langsung untuk berdua: si beruang keliling dunia. 10 detik — tebak dia ada di negara mana! Satu poin untuk setiap jawaban benar.",
      "coShareText": "{name} mengajakmu bermain game langsung «Tebak negara»",
      "coJoinLead": "{name} sedang menunggumu. Tebak negaranya dari gambar!",
      "coRound": "Negara {n} dari {total}",
      "coAsk": "Negara apa ini?",
      "coFinalWin": "Menang! Kamu benar-benar penjelajah dunia.",
      "coFinalLose": "Kali ini {name} lebih kenal dunia — main lagi?",
      "coFinalDraw": "Seri — kalian berdua sama-sama kenal dunia!",
      "featCountries": "Game langsung «Tebak negara» — 40 negara",
      "hints": "Tebak dari petunjuk",
      "dreams": "Impian dan rencana",
      "hiTitle": "Tebak dari petunjuk",
      "hiNote": "Game langsung untuk berdua: tiga petunjuk terbuka satu per satu. Tebak di petunjuk pertama — 3 poin, kedua — 2 poin, ketiga — 1 poin.",
      "hiShareText": "{name} mengajakmu bermain game langsung «Tebak dari petunjuk»",
      "hiJoinLead": "{name} menunggumu. Tebak secepat mungkin!",
      "hiRound": "Teka-teki {n} dari {total}",
      "hiAsk": "Apakah ini?",
      "hiClue": "Petunjuk {n}",
      "hiPoints": "+{n} poin",
      "hiNoPoints": "Kali ini tanpa poin",
      "hiFinalWin": "Menang! Kamu jago menebak.",
      "hiFinalLose": "Kali ini {name} lebih jago menebak — main lagi?",
      "hiFinalDraw": "Seri — kalian berdua jago menebak!",
      "featHints": "Game langsung «Tebak dari petunjuk» — 3, 2, atau 1 poin",
      "drTitle": "Impian dan rencana",
      "drNote": "Game langsung untuk berdua: rumah, perjalanan, belajar, dan hobi. Pilih yang diinginkan dan lihat apakah impian kalian sama.",
      "drShareText": "{name} mengajakmu bermain game langsung «Impian dan rencana»",
      "drJoinLead": "{name} menunggumu. Pilih yang benar-benar kamu inginkan!",
      "drRound": "Pertanyaan {n} dari {total}",
      "drPick": "Pilih yang kamu inginkan",
      "drBoth": "Sama: {item}",
      "drDiff": "Impian berbeda — ceritakan alasannya satu sama lain!",
      "drFinalHigh": "Banyak sekali impian kalian yang sama!",
      "drFinalMid": "Impian berbeda — banyak yang bisa dibicarakan",
      "drCommon": "Impian bersama kalian",
      "featDreams": "Game langsung «Impian dan rencana» — apakah impian kalian sama?",
      "modestTitle": "Mode sopan",
      "modestNote": "Tanpa pertanyaan soal perasaan, pelukan, atau kencan — hanya yang bersahabat"
    },
    "questions": {
      "q01": [
        "Musim favoritku?",
        "Musim semi",
        "Musim panas",
        "Musim gugur",
        "Musim dingin"
      ],
      "q02": [
        "Apa yang kupilih untuk sarapan?",
        "Kopi dan croissant",
        "Bubur",
        "Telur",
        "Teh saja"
      ],
      "q03": [
        "Hari libur sempurnaku?",
        "Di rumah di bawah selimut",
        "Jalan-jalan di taman",
        "Pergi ke luar kota",
        "Bersama teman-teman"
      ],
      "q04": [
        "Ke mana aku ingin pergi?",
        "Ke pantai",
        "Ke pegunungan",
        "Ke kota besar",
        "Ke rumah mungil yang nyaman di desa"
      ],
      "q05": [
        "Es krim favoritku?",
        "Vanila",
        "Cokelat",
        "Stroberi",
        "Pistachio"
      ],
      "q06": [
        "Apa yang paling cepat membuatku senang?",
        "Pelukan",
        "Kejutan",
        "Kata-kata hangat",
        "Sesuatu yang enak"
      ],
      "q07": [
        "Aku lebih seperti…",
        "Orang pagi",
        "Orang malam",
        "Tidur kapan pun bisa",
        "Suka tidur siang"
      ],
      "q08": [
        "Film apa yang kupilih malam ini?",
        "Komedi",
        "Kisah romantis",
        "Misteri",
        "Animasi"
      ],
      "q09": [
        "Warna favoritku?",
        "Merah",
        "Biru",
        "Hijau",
        "Merah muda"
      ],
      "q10": [
        "Apa yang paling kutakuti?",
        "Laba-laba",
        "Ketinggian",
        "Kegelapan",
        "Terlambat"
      ],
      "q11": [
        "Bunga apa yang kusukai?",
        "Mawar",
        "Tulip",
        "Peoni",
        "Aster"
      ],
      "q12": [
        "Apa yang kulakukan saat sedih?",
        "Menelepon orang terdekat",
        "Makan yang manis",
        "Jalan-jalan",
        "Tidur"
      ],
      "q13": [
        "Hewan apa yang paling mirip denganku?",
        "Anak kucing",
        "Anjing",
        "Anak beruang",
        "Rubah kecil"
      ],
      "q14": [
        "Hadiah terbaik untukku?",
        "Buatan tangan",
        "Perjalanan",
        "Perhiasan",
        "Buku"
      ],
      "q15": [
        "Minuman favoritku?",
        "Teh hitam",
        "Teh hijau",
        "Kopi",
        "Cokelat panas"
      ],
      "q16": [
        "Camilan favoritku?",
        "Cokelat",
        "Keripik",
        "Buah",
        "Kue"
      ],
      "q17": [
        "Apa yang kupilih saat bepergian?",
        "Museum",
        "Pantai",
        "Kuliner lokal",
        "Jalan-jalan tanpa rencana"
      ],
      "q18": [
        "Bagaimana aku suka menghabiskan malam?",
        "Dengan buku",
        "Dengan serial",
        "Mengobrol",
        "Berjalan-jalan"
      ],
      "q19": [
        "Cuaca apa yang paling kusukai?",
        "Cerah",
        "Hujan hangat",
        "Salju turun",
        "Angin sepoi-sepoi"
      ],
      "q20": [
        "Kekuatan super apa yang cocok untukku?",
        "Terbang",
        "Membaca pikiran",
        "Menghentikan waktu",
        "Teleportasi"
      ],
      "q21": [
        "Apa yang terpenting bagiku dari orang tersayang?",
        "Kepercayaan",
        "Perhatian",
        "Selera humor",
        "Dukungan"
      ],
      "q22": [
        "Perayaan apa yang paling kutunggu?",
        "Tahun Baru",
        "Ulang tahunku",
        "Liburan musim panas",
        "Hari Valentine"
      ],
      "q23": [
        "Bagaimana aku biasanya bilang «aku sayang kamu»?",
        "Dengan kata-kata",
        "Dengan tindakan",
        "Dengan pelukan",
        "Dengan hadiah"
      ],
      "q24": [
        "Apa yang kupesan di kafe?",
        "Pasta",
        "Sushi",
        "Salad",
        "Hidangan penutup"
      ],
      "q25": [
        "Waktu favoritku dalam sehari?",
        "Pagi",
        "Siang",
        "Sore",
        "Malam"
      ],
      "q26": [
        "Masakan apa yang kupilih?",
        "Italia",
        "Jepang",
        "Masakan rumah",
        "Meksiko"
      ],
      "q27": [
        "Di mana aku paling bisa berpikir?",
        "Saat mandi",
        "Saat jalan-jalan",
        "Di perjalanan",
        "Sebelum tidur"
      ],
      "q28": [
        "Apa yang pertama kulakukan di pagi hari?",
        "Melihat ponsel",
        "Minum air",
        "Membuat kopi",
        "Rebahan sebentar lagi"
      ],
      "q29": [
        "Buah favoritku?",
        "Apel",
        "Pisang",
        "Mangga",
        "Semangka"
      ],
      "q30": [
        "Hobi apa yang paling cocok untukku?",
        "Menggambar",
        "Memasak",
        "Olahraga",
        "Membaca"
      ],
      "q31": [
        "Bagaimana aku ingin merayakan ulang tahun?",
        "Pesta meriah",
        "Makan malam berdua",
        "Jalan-jalan",
        "Malam tenang di rumah"
      ],
      "q32": [
        "Bagaimana perasaanku tentang kejutan?",
        "Suka sekali",
        "Agak deg-degan",
        "Suka menyiapkannya untuk orang lain",
        "Lebih suka tahu sebelumnya"
      ],
      "q33": [
        "Makanan manis apa yang kusukai?",
        "Kue tart",
        "Es krim",
        "Biskuit",
        "Permen"
      ],
      "q34": [
        "Apa yang kubawa ke pulau terpencil?",
        "Buku",
        "Ponsel",
        "Selimut",
        "Kamera"
      ],
      "q35": [
        "Bagaimana aku bersantai setelah hari yang berat?",
        "Mandi air hangat",
        "Menonton serial",
        "Jalan-jalan",
        "Mengobrol dengan orang terdekat"
      ],
      "q36": [
        "Transportasi apa yang paling kusukai?",
        "Kereta",
        "Pesawat",
        "Mobil",
        "Sepeda"
      ],
      "q37": [
        "Permainan favoritku waktu kecil?",
        "Petak umpet",
        "Kejar-kejaran",
        "Balok susun",
        "Menggambar"
      ],
      "q38": [
        "Dongeng apa yang paling mirip denganku?",
        "Cinderella",
        "Pangeran Kecil",
        "Winnie the Pooh",
        "Alice di Negeri Ajaib"
      ],
      "q39": [
        "Bagaimana aku membahagiakan orang tersayang?",
        "Dengan kejutan",
        "Dengan kartu",
        "Dengan perjalanan",
        "Dengan makan malam"
      ],
      "q40": [
        "Apa yang paling sering kufoto?",
        "Diri sendiri",
        "Alam",
        "Makanan",
        "Hampir tidak pernah memotret"
      ],
      "q41": [
        "Tempat favoritku di rumah?",
        "Tempat tidur",
        "Dapur",
        "Sofa",
        "Balkon"
      ],
      "q42": [
        "Apa yang pertama kuperhatikan dari seseorang?",
        "Senyumnya",
        "Matanya",
        "Suaranya",
        "Selera humornya"
      ],
      "q43": [
        "Apa yang paling cepat membuatku tertawa?",
        "Video lucu",
        "Candaan orang tersayang",
        "Situasi canggung",
        "Hewan"
      ],
      "q44": [
        "Apa yang kuminum di hari yang panas?",
        "Limun",
        "Es teh",
        "Jus",
        "Air es"
      ],
      "q45": [
        "Elemen apa yang paling mirip denganku?",
        "Air",
        "Api",
        "Tanah",
        "Udara"
      ],
      "q46": [
        "Cerita apa yang kusukai?",
        "Petualangan",
        "Kisah cinta",
        "Fiksi ilmiah",
        "Kisah nyata"
      ],
      "q47": [
        "Bagaimana aku menghabiskan hari hujan?",
        "Membaca",
        "Tidur",
        "Menonton film",
        "Jalan-jalan berpayung"
      ],
      "q48": [
        "Apa yang paling kuhargai dari hadiah?",
        "Perhatiannya",
        "Kegunaannya",
        "Keindahannya",
        "Kejutannya"
      ],
      "q49": [
        "Kentang apa yang kupilih?",
        "Kentang tumbuk",
        "Kentang goreng",
        "Kentang panggang",
        "Keripik"
      ],
      "q50": [
        "Ke mana aku pergi pertama kali di kota baru?",
        "Ke kafe",
        "Ke museum",
        "Ke taman",
        "Belanja"
      ],
      "q51": [
        "Apa yang kulakukan saat tidak bisa tidur?",
        "Membaca",
        "Main ponsel",
        "Menghitung domba",
        "Minum susu hangat"
      ],
      "q52": [
        "Bagaimana aku bersiap untuk hari penting?",
        "Merencanakan semuanya lebih dulu",
        "Mengerjakan di menit terakhir",
        "Minta bantuan",
        "Gugup sampai tidak bisa tidur"
      ],
      "q53": [
        "Olahraga apa yang paling suka kutonton?",
        "Sepak bola",
        "Tenis",
        "Seluncur indah",
        "Tidak menonton olahraga"
      ],
      "q54": [
        "Hewan peliharaan apa yang cocok untukku?",
        "Kucing",
        "Anjing",
        "Burung beo",
        "Hamster"
      ],
      "q55": [
        "Pesan seperti apa yang kutulis?",
        "Panjang",
        "Pendek",
        "Penuh emoji",
        "Pesan suara"
      ],
      "q56": [
        "Hadiah apa yang paling lama kusimpan?",
        "Surat",
        "Mainan",
        "Foto",
        "Perhiasan"
      ],
      "q57": [
        "Mana yang lebih kupilih?",
        "Teh di dekat perapian",
        "Piknik di rumput",
        "Jalan-jalan di tepi laut",
        "Nonton di bioskop"
      ],
      "q58": [
        "Pujian apa yang paling membuatku senang?",
        "Tentang penampilan",
        "Tentang kecerdasan",
        "Tentang kebaikan",
        "Tentang selera humor"
      ],
      "q59": [
        "Pagi sempurnaku?",
        "Sarapan di tempat tidur",
        "Lari pagi",
        "Tidur panjang",
        "Kopi di balkon"
      ],
      "q60": [
        "Apa yang ingin kupelajari?",
        "Menari",
        "Memasak",
        "Bahasa baru",
        "Menggambar"
      ],
      "q61": [
        "Masakan apa yang paling jago kubuat?",
        "Sup",
        "Nasi pilaf",
        "Kue panggang",
        "Salad"
      ],
      "q62": [
        "Negara mana yang ingin kukunjungi lebih dulu?",
        "Turki",
        "Jepang",
        "Maroko",
        "Norwegia"
      ],
      "q63": [
        "Olahraga apa yang lebih ingin kutekuni?",
        "Renang",
        "Lari",
        "Bersepeda",
        "Sepak bola"
      ],
      "q64": [
        "Buku apa yang akan kupilih?",
        "Kisah petualangan",
        "Buku sejarah",
        "Dongeng",
        "Ensiklopedia"
      ],
      "q65": [
        "Hewan apa yang pertama kukunjungi di kebun binatang?",
        "Gajah",
        "Monyet",
        "Penguin",
        "Jerapah"
      ],
      "q66": [
        "Bagaimana aku dengan makanan pedas?",
        "Makin pedas makin enak",
        "Sedikit tak apa",
        "Hanya sedikit sekali",
        "Tidak makan sama sekali"
      ],
      "q67": [
        "Pelajaran sekolah apa yang paling kusukai?",
        "Matematika",
        "Sastra",
        "Geografi",
        "Olahraga"
      ],
      "q68": [
        "Cita-citaku waktu kecil?",
        "Dokter",
        "Guru",
        "Astronaut",
        "Koki"
      ],
      "q69": [
        "Bagaimana aku dengan pendakian?",
        "Memimpikan perjalanan panjang",
        "Sehari saja cukup",
        "Asal nyaman",
        "Lebih baik di rumah"
      ],
      "q70": [
        "Suasana hatiku di pagi hari?",
        "Penuh semangat",
        "Masih mengantuk",
        "Pendiam",
        "Banyak bicara"
      ],
      "q71": [
        "Kacang apa yang paling kusukai?",
        "Hazelnut",
        "Kenari",
        "Mete",
        "Almon"
      ],
      "q72": [
        "Apa yang kulakukan dengan satu jam luang tak terduga?",
        "Membaca",
        "Jalan-jalan",
        "Menelepon keluarga",
        "Memasak sesuatu"
      ],
      "q73": [
        "Cuaca apa yang tidak kusukai?",
        "Panas terik",
        "Angin kencang",
        "Salju becek",
        "Dingin membeku"
      ],
      "q74": [
        "Warna apa untuk kamarku?",
        "Putih",
        "Krem",
        "Hijau",
        "Biru muda"
      ],
      "q75": [
        "Aku lebih suka bermain apa?",
        "Catur",
        "Dam",
        "Puzzle gambar",
        "Permainan kata"
      ],
      "q76": [
        "Apa yang kumasak untuk tamu?",
        "Nasi pilaf",
        "Pai",
        "Aneka salad",
        "Pesan makanan saja"
      ],
      "q77": [
        "Apa yang pasti tidak akan kumakan?",
        "Jamur",
        "Ikan",
        "Zaitun",
        "Bawang bombai rebus"
      ],
      "q78": [
        "Bagaimana aku menyeduh teh?",
        "Kental",
        "Encer",
        "Manis",
        "Dengan daun herbal"
      ],
      "q79": [
        "Apa yang paling penting bagiku di rumah?",
        "Kebersihan",
        "Kenyamanan",
        "Banyak cahaya",
        "Ketenangan"
      ],
      "q80": [
        "Bagaimana aku mempelajari hal baru?",
        "Membaca",
        "Menonton video tutorial",
        "Langsung praktik",
        "Bertanya pada orang lain"
      ],
      "q81": [
        "Hewan liar apa yang paling memikatku?",
        "Harimau",
        "Beruang",
        "Elang",
        "Lumba-lumba"
      ],
      "q82": [
        "Apa yang akan kuberikan untuk ibuku?",
        "Bunga",
        "Kerajinan tangan",
        "Perjalanan",
        "Selimut hangat"
      ],
      "q83": [
        "Apa yang kulakukan di perjalanan?",
        "Melihat ke luar jendela",
        "Membaca",
        "Mengobrol",
        "Ngemil"
      ],
      "q84": [
        "Masakan ayam favoritku?",
        "Sate ayam",
        "Nasi ayam",
        "Perkedel ayam",
        "Nugget"
      ],
      "q85": [
        "Kursi mana yang kupilih di kereta?",
        "Dekat jendela",
        "Dekat lorong",
        "Membelakangi arah jalan",
        "Terserah"
      ],
      "q86": [
        "Apa yang kulakukan saat ada masalah?",
        "Langsung bertindak",
        "Berpikir dulu",
        "Minta nasihat",
        "Sedikit cemas"
      ],
      "q87": [
        "Sifat utamaku?",
        "Kebaikan hati",
        "Kejujuran",
        "Ketekunan",
        "Keceriaan"
      ],
      "q88": [
        "Di mana aku paling nyaman beristirahat?",
        "Di rumah kerabat di desa",
        "Di hotel tepi laut",
        "Di tenda",
        "Di rumah"
      ],
      "q89": [
        "Kue apa yang akan kupilih?",
        "Samsa",
        "Khachapuri",
        "Chak-chak",
        "Eclair"
      ],
      "q90": [
        "Bahasa apa yang paling ingin kupelajari?",
        "Arab",
        "Inggris",
        "Turki",
        "Jepang"
      ],
      "q91": [
        "Berapa lama aku bisa tanpa makanan manis?",
        "Sehari",
        "Seminggu",
        "Sebulan",
        "Selama diperlukan"
      ],
      "q92": [
        "Apa yang kulakukan kalau akan terlambat?",
        "Berlari sekencang mungkin",
        "Menelepon untuk memberi tahu",
        "Naik taksi",
        "Aku tak pernah terlambat"
      ],
      "q93": [
        "Apa yang kulakukan kalau alat rusak?",
        "Memperbaiki sendiri",
        "Membaca petunjuk",
        "Minta bantuan",
        "Menekan semua tombol"
      ],
      "q94": [
        "Apa yang pertama masuk koperku?",
        "Kotak P3K",
        "Buku",
        "Pengisi daya",
        "Camilan"
      ],
      "q95": [
        "Kegiatan apa yang menenangkanku?",
        "Memasak",
        "Beres-beres",
        "Menggambar",
        "Jalan-jalan"
      ],
      "q96": [
        "Apa yang ingin kulakukan saat pensiun?",
        "Berkebun",
        "Bepergian",
        "Membaca",
        "Bersama cucu"
      ],
      "q97": [
        "Apa yang paling menggangguku?",
        "Kebisingan",
        "Berantakan",
        "Keterlambatan",
        "Ketidaksopanan"
      ],
      "q98": [
        "Aroma apa yang paling kusukai?",
        "Roti segar",
        "Hujan",
        "Bunga",
        "Laut"
      ],
      "q99": [
        "Apa yang kupilih untuk pencuci mulut?",
        "Buah",
        "Es krim",
        "Pai",
        "Teh saja"
      ]
    },
    "yesNo": {
      "c01": [
        "Kamu kangen aku sekarang?",
        "kangen sekali",
        "menahan diri, tapi memikirkanmu"
      ],
      "c02": [
        "Kamu tersenyum saat melihat pesanku?",
        "selalu tersenyum",
        "tersenyum dalam hati"
      ],
      "c03": [
        "Ingat pertemuan pertama kita?",
        "ingat setiap menitnya",
        "ingat yang terpenting — kamu"
      ],
      "c04": [
        "Mau pelukan hari ini?",
        "menunggu pelukanmu",
        "menyimpan pelukan untuk nanti"
      ],
      "c05": [
        "Kita ke pantai bersama?",
        "sudah berkemas",
        "memimpikan gunung"
      ],
      "c06": [
        "Aku membuatmu tertawa?",
        "tertawa dari hati",
        "menyembunyikan senyum"
      ],
      "c07": [
        "Kamu merasa tenang bersamaku?",
        "merasa tenang di dekatmu",
        "senang bersamamu"
      ],
      "c08": [
        "Kamu memikirkanku di siang hari?",
        "sangat sering memikirkanmu",
        "sedang memikirkanmu sekarang"
      ],
      "c09": [
        "Kamu suka kejutanku?",
        "sangat suka kejutanmu",
        "paling suka saat kamu ada di dekat"
      ],
      "c10": [
        "Kita membuat pai bersama?",
        "sudah memakai celemek",
        "lebih suka membeli kue"
      ],
      "c11": [
        "Nonton film bersama malam ini?",
        "sudah memilih film",
        "lebih ingin mengobrol"
      ],
      "c12": [
        "Kamu suka suaraku?",
        "bisa mendengarnya tanpa henti",
        "lebih suka tawamu"
      ],
      "c13": [
        "Piknik akhir pekan ini?",
        "menyiapkan tikar",
        "mengajakmu ke kafe yang nyaman"
      ],
      "c14": [
        "Mau dapat surat dariku?",
        "menunggu suratmu",
        "ingin mendengar semuanya langsung"
      ],
      "c15": [
        "Aku penting bagimu?",
        "sangat penting",
        "lebih dari yang kamu kira"
      ],
      "c16": [
        "Jalan-jalan di bawah hujan?",
        "membawa payung untuk berdua",
        "lebih suka membuat teh di rumah"
      ],
      "c17": [
        "Kita mirip?",
        "kalian seperti dua belahan",
        "kalian saling melengkapi dengan sempurna"
      ],
      "c18": [
        "Kamu suka masakanku?",
        "minta tambah",
        "suka memasak bersamamu"
      ],
      "c19": [
        "Kita pelihara hewan bersama?",
        "sudah memilih nama",
        "untuk sekarang boneka beruang sudah cukup"
      ],
      "c20": [
        "Kamu tahu apa yang kusukai?",
        "hafal di luar kepala",
        "ingin tahu lebih banyak"
      ],
      "c21": [
        "Kita berdansa?",
        "sudah mengulurkan tangan",
        "akan bertepuk tangan"
      ],
      "c22": [
        "Aku menginspirasimu?",
        "menginspirasi setiap hari",
        "di dekatmu rasanya hangat"
      ],
      "c23": [
        "Kamu menyimpan foto-foto kita?",
        "menyimpan setiap foto dengan sayang",
        "menunggu foto baru yang lebih indah"
      ],
      "c24": [
        "Kita lihat matahari terbit bersama?",
        "sudah memasang alarm",
        "lebih suka matahari terbenam"
      ],
      "c25": [
        "Mau cerita satu rahasia?",
        "akan membisikkannya padamu",
        "biar tetap jadi misteri"
      ],
      "c26": [
        "Kamu percaya padaku?",
        "sangat percaya padamu",
        "menyemangatimu setiap hari"
      ],
      "c27": [
        "Kita bepergian berdua saja?",
        "memimpikannya",
        "akan mengajak semua orang tersayang"
      ],
      "c28": [
        "Kamu menunggu teleponku?",
        "menunggu sambil tersenyum",
        "lebih suka kamu datang berkunjung"
      ],
      "c29": [
        "Kamu suka pelukanku?",
        "paling hangat di dunia",
        "suka bergandengan tangan"
      ],
      "c30": [
        "Kita saling membacakan buku?",
        "sudah memilih buku",
        "lebih suka mendengarkanmu"
      ],
      "c31": [
        "Foto bersama hari ini?",
        "sudah mencari latar yang cantik",
        "mengobrol dulu"
      ],
      "c32": [
        "Aku membuat suasana hatimu lebih baik?",
        "selalu",
        "bersamamu, kesedihan pun terasa ringan"
      ],
      "c33": [
        "Sarapan bersama besok?",
        "sudah membuat cokelat panas",
        "ingin tidur lebih lama"
      ],
      "c34": [
        "Kamu ingat ulang tahunku?",
        "ingat tanpa diingatkan",
        "diam-diam menyiapkan kejutan"
      ],
      "c35": [
        "Kita main seluncur es?",
        "sudah mengeluarkan sepatu seluncur",
        "akan menyemangatimu dari pinggir"
      ],
      "c36": [
        "Hari ini hari yang baik untukmu?",
        "hari yang luar biasa",
        "akan lebih baik kalau kamu ada"
      ],
      "c37": [
        "Mau menggambar potretku?",
        "sudah memegang pensil",
        "akan menggambar hati kecil"
      ],
      "c38": [
        "Kita menanam pohon bersama?",
        "memilih tempatnya",
        "mulai dari bunga di jendela"
      ],
      "c39": [
        "Mau dengar pujian?",
        "tidak sabar",
        "malu tapi sangat ingin"
      ],
      "c40": [
        "Nanti main lagi?",
        "ingin satu ronde lagi",
        "lebih ingin berpelukan daripada main"
      ],
      "c41": [
        "Kamu suka makanan pedas?",
        "makin pedas makin enak",
        "memilih yang lebih ringan"
      ],
      "c42": [
        "Kamu bisa berenang?",
        "berenang seperti ikan",
        "untuk sekarang tetap di dekat pantai"
      ],
      "c43": [
        "Kamu mau memelihara kucing?",
        "sudah memikirkan namanya",
        "lebih suka anjing"
      ],
      "c44": [
        "Kamu ingin ke Istanbul suatu hari?",
        "sudah memimpikan Selat Bosporus",
        "memilih kota lain"
      ],
      "c45": [
        "Kamu suka memasak?",
        "memasak dengan senang hati",
        "lebih memilih mencuci piring"
      ],
      "c46": [
        "Kamu mau belajar memasak nasi pilaf?",
        "sudah mencari resepnya",
        "lebih suka mencicipi masakan orang lain"
      ],
      "c47": [
        "Kamu suka membaca buku?",
        "selalu ada buku di dekatnya",
        "lebih suka mendengarkan cerita"
      ],
      "c48": [
        "Kamu bisa naik sepeda?",
        "bisa langsung berangkat sekarang",
        "berjanji akan belajar"
      ],
      "c49": [
        "Kamu lebih suka gunung daripada laut?",
        "memilih gunung",
        "memilih laut"
      ],
      "c50": [
        "Kamu ingin melihat gurun?",
        "memimpikan bukit pasir",
        "lebih memilih hutan"
      ],
      "c51": [
        "Kamu suka musim dingin?",
        "menantikan salju pertama",
        "menantikan musim panas"
      ],
      "c52": [
        "Kamu minum teh tanpa gula?",
        "suka rasa teh yang murni",
        "tak bisa tanpa sesendok gula"
      ],
      "c53": [
        "Kamu takut laba-laba?",
        "menjauh sejauh mungkin",
        "dengan tenang membawanya ke luar"
      ],
      "c54": [
        "Kamu suka menggambar?",
        "sudah mengambil kuas",
        "lebih suka melihat lukisan orang lain"
      ],
      "c55": [
        "Kamu ingin melihat aurora?",
        "sudah mencari tempat untuk melihatnya",
        "lebih suka memandangi bintang"
      ],
      "c56": [
        "Kamu suka cuaca hujan?",
        "suka suara hujan di luar jendela",
        "menantikan matahari"
      ],
      "c57": [
        "Kamu bisa berkuda?",
        "duduk mantap di pelana",
        "untuk sekarang baru memimpikannya"
      ],
      "c58": [
        "Kamu ingin memelihara anjing?",
        "memimpikan sahabat yang setia",
        "untuk sekarang sudah cukup yang diurus"
      ],
      "c59": [
        "Kamu lebih suka manis daripada asin?",
        "tak bisa hidup tanpa yang manis",
        "memilih yang asin"
      ],
      "c60": [
        "Kamu suka bepergian naik kereta?",
        "suka irama roda kereta",
        "memilih pesawat"
      ],
      "c61": [
        "Mudah bagimu memulai hari pagi-pagi?",
        "memulai hari dengan penuh semangat",
        "baru benar-benar bangun menjelang siang"
      ],
      "c62": [
        "Kamu suka berkemah di tenda?",
        "sudah mengemas ransel",
        "memilih hotel yang nyaman"
      ],
      "c63": [
        "Kamu ingin tinggal di tepi laut?",
        "memimpikan suara ombak",
        "memilih kota"
      ],
      "c64": [
        "Kamu makan es krim di musim dingin?",
        "tetap makan meski udara membeku",
        "hanya di musim panas"
      ],
      "c65": [
        "Kamu suka cokelat?",
        "kenal semua jenisnya",
        "bisa melewatinya dengan tenang"
      ],
      "c66": [
        "Kamu bisa memanggang pai?",
        "memanggang seperti nenek",
        "berjanji akan belajar"
      ],
      "c67": [
        "Kamu suka memandangi bintang?",
        "hafal rasi-rasi bintang",
        "lebih suka hari yang cerah"
      ],
      "c68": [
        "Kamu ingin punya kebun sendiri suatu hari?",
        "sudah memilih bibit",
        "akan mulai dari bunga di pot"
      ],
      "c69": [
        "Kamu suka bunga liar?",
        "suka bunga aster dan cornflower",
        "lebih suka bunga taman"
      ],
      "c70": [
        "Kamu minum kopi?",
        "hari tak bisa dimulai tanpa kopi",
        "memilih teh"
      ],
      "c71": [
        "Kamu suka limun buatan sendiri?",
        "sudah mengiris lemon",
        "lebih memilih air putih"
      ],
      "c72": [
        "Kamu ingin ke Jepang suatu hari?",
        "memimpikan melihat bunga sakura",
        "memilih negara lain"
      ],
      "c73": [
        "Kamu suka musim gugur?",
        "suka gemerisik daun di bawah kaki",
        "menantikan musim semi"
      ],
      "c74": [
        "Kamu suka aroma lavender?",
        "suka sekali aroma itu",
        "lebih suka aroma lain"
      ],
      "c75": [
        "Kamu suka permainan papan?",
        "sudah menyiapkan papannya",
        "lebih suka jalan-jalan"
      ],
      "c76": [
        "Kamu bisa menyetir mobil?",
        "menyetir dengan percaya diri",
        "untuk sekarang masih jadi penumpang"
      ],
      "c77": [
        "Kamu ingin melihat samudra suatu hari?",
        "memimpikan ombak besar",
        "laut saja sudah cukup"
      ],
      "c78": [
        "Kamu ingin tinggal di peternakan untuk sementara?",
        "sudah memberi makan ayam",
        "tetap di kota"
      ],
      "c79": [
        "Kamu suka kota besar?",
        "suka gemerlap lampu kota",
        "memilih ketenangan"
      ],
      "c80": [
        "Kamu lebih suka buah daripada permen?",
        "memilih buah",
        "memilih permen"
      ],
      "c81": [
        "Kamu ingin melihat lumba-lumba di laut?",
        "ingin sekali melihatnya",
        "lebih suka membaca tentangnya"
      ],
      "c82": [
        "Kamu suka musim panas?",
        "menantikan hari-hari panas",
        "suka cuaca sejuk"
      ],
      "c83": [
        "Kamu suka jalan-jalan di taman?",
        "jalan-jalan dalam cuaca apa pun",
        "lebih suka di rumah"
      ],
      "c84": [
        "Kamu suka menulis tangan?",
        "tulisannya rapi",
        "mengetik di ponsel"
      ],
      "c85": [
        "Kamu suka naik perahu?",
        "sudah memegang dayung",
        "tetap di tepi"
      ],
      "c86": [
        "Kamu ingin keliling dunia?",
        "sudah menggambar rutenya",
        "beberapa negara saja cukup"
      ],
      "c87": [
        "Kamu bisa membuat manusia salju?",
        "akan membuat yang paling besar",
        "lebih suka perang bola salju"
      ],
      "c88": [
        "Kamu ingin belajar hal baru tahun ini?",
        "sudah memilih kursus",
        "kesibukannya sudah cukup banyak"
      ],
      "c89": [
        "Kamu suka keheningan?",
        "menghargai ketenangan",
        "suka suasana ramai"
      ],
      "c90": [
        "Kamu suka memberi hadiah untuk keluarga?",
        "membahagiakan keluarga tanpa alasan khusus",
        "lebih suka membantu secara nyata"
      ]
    },
    "loves": {
      "s01": [
        "Liburan ke mana?",
        "Pantai",
        "Gunung",
        "Jalan-jalan",
        "Waktu menyendiri"
      ],
      "s02": [
        "Malam yang sempurna?",
        "Nonton di rumah",
        "Jalan-jalan",
        "Restoran",
        "Permainan papan"
      ],
      "s03": [
        "Cuaca favorit?",
        "Cerah",
        "Hujan",
        "Salju",
        "Malam berbintang"
      ],
      "s04": [
        "Hewan favorit?",
        "Anak kucing",
        "Anak anjing",
        "Kuda",
        "Lumba-lumba"
      ],
      "s05": [
        "Makan malam apa?",
        "Pizza",
        "Sushi",
        "Kue manis",
        "Barbekyu"
      ],
      "s06": [
        "Minuman favorit?",
        "Kopi",
        "Teh",
        "Cokelat panas",
        "Limun"
      ],
      "s07": [
        "Musim favorit?",
        "Musim semi",
        "Musim panas",
        "Musim gugur",
        "Musim dingin"
      ],
      "s08": [
        "Bunga favorit?",
        "Mawar",
        "Tulip",
        "Bunga matahari",
        "Lavender"
      ],
      "s09": [
        "Cara bersantai?",
        "Membaca buku",
        "Menggambar",
        "Bersepeda",
        "Tidur di hammock"
      ],
      "s10": [
        "Bepergian naik apa?",
        "Kereta",
        "Pesawat",
        "Mobil",
        "Kapal"
      ],
      "s11": [
        "Rumah impian?",
        "Apartemen di kota",
        "Rumah tepi laut",
        "Pondok di gunung",
        "Peternakan"
      ],
      "s12": [
        "Yang manis-manis?",
        "Es krim",
        "Cokelat",
        "Kue tart",
        "Buah"
      ],
      "s13": [
        "Pagi yang sempurna?",
        "Sarapan di tempat tidur",
        "Lari pagi",
        "Tidur panjang",
        "Kopi di balkon"
      ],
      "s14": [
        "Kencan impian?",
        "Piknik",
        "Arena seluncur es",
        "Taman hiburan",
        "Bintang di atap"
      ],
      "s15": [
        "Hadiah terbaik?",
        "Buket bunga",
        "Surat",
        "Perjalanan",
        "Kotak hadiah"
      ],
      "s16": [
        "Alam favorit?",
        "Laut",
        "Hutan",
        "Gurun",
        "Aurora"
      ],
      "s17": [
        "Buah favorit?",
        "Apel",
        "Stroberi",
        "Semangka",
        "Anggur"
      ],
      "s18": [
        "Apa yang dilakukan saat libur?",
        "Mendaki gunung",
        "Memasak di rumah",
        "Ke museum",
        "Memancing"
      ],
      "s19": [
        "Sarapan favorit?",
        "Panekuk",
        "Telur dadar",
        "Bubur dengan beri",
        "Croissant"
      ],
      "s20": [
        "Burung favorit?",
        "Burung hantu",
        "Burung beo",
        "Angsa",
        "Merak"
      ],
      "s21": [
        "Kota mana yang dikunjungi?",
        "Istanbul",
        "Paris",
        "Tokyo",
        "Dubai"
      ],
      "s22": [
        "Olahraga favorit?",
        "Sepak bola",
        "Renang",
        "Tenis",
        "Berkuda"
      ],
      "s23": [
        "Apa yang ditanam di kebun?",
        "Pohon apel",
        "Mawar",
        "Sayuran",
        "Stroberi"
      ],
      "s24": [
        "Kue panggang favorit?",
        "Pastel kecil",
        "Donat",
        "Biskuit",
        "Baklava"
      ],
      "s25": [
        "Tinggal di mana?",
        "Di tepi sungai",
        "Di hutan",
        "Di kota besar",
        "Di pulau"
      ],
      "s26": [
        "Hewan laut favorit?",
        "Penyu",
        "Paus",
        "Gurita",
        "Kuda laut"
      ],
      "s27": [
        "Naik apa?",
        "Sepeda",
        "Skuter",
        "Balon udara",
        "Perahu"
      ],
      "s28": [
        "Hobi favorit?",
        "Merajut",
        "Memotret alam",
        "Berkebun",
        "Kaligrafi"
      ],
      "s29": [
        "Sup favorit?",
        "Borscht",
        "Sup ayam",
        "Sup labu",
        "Sup lentil"
      ],
      "s30": [
        "Hewan hutan?",
        "Landak",
        "Tupai",
        "Rubah",
        "Rusa"
      ],
      "s31": [
        "Camilan?",
        "Kurma",
        "Almon",
        "Pistachio",
        "Aprikot kering"
      ],
      "s32": [
        "Apa yang dibawa saat mendaki?",
        "Tenda",
        "Termos",
        "Peta",
        "Senter"
      ],
      "s33": [
        "Hidangan penutup favorit?",
        "Puding",
        "Kue keju",
        "Panekuk madu",
        "Salad buah"
      ],
      "s34": [
        "Apa yang dilakukan di musim dingin?",
        "Membuat manusia salju",
        "Main kereta luncur",
        "Minum teh di dekat jendela",
        "Bermain ski"
      ],
      "s35": [
        "Apa yang dilakukan di musim panas?",
        "Berenang",
        "Memetik beri",
        "Naik perahu",
        "Membuat istana pasir"
      ],
      "s36": [
        "Menggambar dengan apa?",
        "Cat air",
        "Pensil",
        "Krayon",
        "Cat di kanvas"
      ],
      "s37": [
        "Sayuran favorit?",
        "Wortel",
        "Tomat",
        "Jagung",
        "Labu"
      ],
      "s38": [
        "Apa yang membuat rumah nyaman?",
        "Perapian",
        "Selimut lembut",
        "Tanaman hias",
        "Rak buku"
      ],
      "s39": [
        "Main apa?",
        "Catur",
        "Puzzle",
        "Permainan papan",
        "Permainan bola"
      ],
      "s40": [
        "Siapa yang tinggal di peternakan?",
        "Sapi",
        "Anak domba",
        "Ayam betina",
        "Anak kambing"
      ],
      "s41": [
        "Teh dengan apa?",
        "Madu",
        "Lemon",
        "Selai",
        "Mint"
      ],
      "s42": [
        "Apa yang ada di tepi laut?",
        "Mercusuar",
        "Kerang",
        "Perahu layar",
        "Burung camar"
      ],
      "s43": [
        "Bagaimana memulai pagi?",
        "Senam",
        "Secangkir teh",
        "Jalan-jalan",
        "Buku"
      ],
      "s44": [
        "Beri favorit?",
        "Raspberry",
        "Blueberry",
        "Ceri",
        "Blackberry"
      ]
    },
    "who": [
      "Siapa di antara kita yang lebih sering terlambat?",
      "Siapa di antara kita yang lebih dulu berbaikan?",
      "Siapa di antara kita yang lebih pandai memasak?",
      "Siapa di antara kita yang lebih sering tertawa?",
      "Siapa di antara kita yang lebih lama bersiap-siap?",
      "Siapa di antara kita yang lebih sering kehilangan kunci?",
      "Siapa di antara kita yang lebih ingat tanggal-tanggal penting?",
      "Siapa di antara kita yang lebih suka makanan manis?",
      "Siapa di antara kita yang lebih dulu tertidur?",
      "Siapa di antara kita yang bangun lebih pagi?",
      "Siapa di antara kita yang lebih sering bilang “aku kangen”?",
      "Siapa di antara kita yang lebih pandai memilih hadiah?",
      "Siapa di antara kita yang lebih sering bercanda?",
      "Siapa di antara kita yang lebih jago menyetir?",
      "Siapa di antara kita yang lebih lama bicara di telepon?",
      "Siapa di antara kita yang lebih suka bepergian?",
      "Siapa di antara kita yang lebih mudah tersinggung?",
      "Siapa di antara kita yang lebih cepat memaafkan?",
      "Siapa di antara kita yang lebih banyak mengambil foto?",
      "Siapa di antara kita yang lebih pandai mengatur uang?",
      "Siapa di antara kita yang lebih sering membeli barang yang tidak perlu?",
      "Siapa di antara kita yang lebih pandai menghibur?",
      "Siapa di antara kita yang lebih tenang di saat sulit?",
      "Siapa di antara kita yang selalu mencari ponselnya?",
      "Siapa di antara kita yang lebih suka menerima tamu?",
      "Siapa di antara kita yang lebih sering membuat sarapan?",
      "Siapa di antara kita yang lebih pandai mencari jalan di kota baru?",
      "Siapa di antara kita yang menulis pesan lebih panjang?",
      "Siapa di antara kita yang lebih dulu mengajak jalan-jalan?",
      "Siapa di antara kita yang lebih sayang binatang?",
      "Siapa di antara kita yang lebih pandai menjaga rahasia?",
      "Siapa di antara kita yang lebih lama memilih menu?",
      "Siapa di antara kita yang lebih mengkhawatirkan orang-orang tersayang?",
      "Siapa di antara kita yang lebih sering memberi kejutan?",
      "Siapa di antara kita yang lebih rapi?",
      "Siapa di antara kita yang lebih dulu menyadari potongan rambut baru?",
      "Siapa di antara kita yang lebih sering mengingat cerita lucu?",
      "Siapa di antara kita yang lebih sabar?",
      "Siapa di antara kita yang lebih sering bilang “terima kasih”?",
      "Siapa di antara kita yang lebih dulu menawarkan bantuan?",
      "Siapa di antara kita yang lebih jago berhitung di luar kepala?",
      "Siapa di antara kita yang lebih banyak membaca?",
      "Siapa di antara kita yang mengetik lebih cepat?",
      "Siapa di antara kita yang lebih sering menelepon orang tua?",
      "Siapa di antara kita yang lebih pandai bercerita?",
      "Siapa di antara kita yang tulisan tangannya lebih rapi?",
      "Siapa di antara kita yang lebih suka makanan pedas?",
      "Siapa di antara kita yang lebih sering lupa barang di rumah?",
      "Siapa di antara kita yang lebih mahir dengan gawai?",
      "Siapa di antara kita yang lebih senang mempelajari hal baru?",
      "Siapa di antara kita yang lebih pandai membuat rencana?",
      "Siapa di antara kita yang lebih pintar menawar di pasar?",
      "Siapa di antara kita yang lebih mencintai alam?",
      "Siapa di antara kita yang makan lebih cepat?",
      "Siapa di antara kita yang lebih banyak minum teh?",
      "Siapa di antara kita yang lebih telaten merawat tanaman?",
      "Siapa di antara kita yang lebih paham geografi?",
      "Siapa di antara kita yang lebih jago main catur?",
      "Siapa di antara kita yang lebih pandai memilih buah di pasar?",
      "Siapa di antara kita yang lebih sering mengecek prakiraan cuaca?",
      "Siapa di antara kita yang lebih takut laba-laba?",
      "Siapa di antara kita yang lebih berani?",
      "Siapa di antara kita yang lebih ingin tahu?",
      "Siapa di antara kita yang lebih cepat memecahkan teka-teki?",
      "Siapa di antara kita yang lebih pandai menggambar?",
      "Siapa di antara kita yang lebih sering membantu tetangga?",
      "Siapa di antara kita yang lebih akrab dengan anak-anak?",
      "Siapa di antara kita yang lebih suka berjalan kaki?",
      "Siapa di antara kita yang lebih sering membaca petunjuk pemakaian?",
      "Siapa di antara kita yang lebih ingat nama orang?",
      "Siapa di antara kita yang lebih cepat menghafal kosakata bahasa asing?",
      "Siapa di antara kita yang lebih pandai membuat kue?",
      "Siapa di antara kita yang lebih pandai memberi nasihat?",
      "Siapa di antara kita yang lebih suka cuaca dingin?",
      "Siapa di antara kita yang lebih tangguh saat mendaki?",
      "Siapa di antara kita yang lebih sering membaca berita?",
      "Siapa di antara kita yang lebih sering mencoba masakan baru?",
      "Siapa di antara kita yang lebih cepat mengemas koper?",
      "Siapa di antara kita yang lebih pandai memperbaiki barang?",
      "Siapa di antara kita yang lebih sering mengajak bicara hewan?",
      "Siapa di antara kita yang lebih sering mencuci piring?",
      "Siapa di antara kita yang lebih paham sejarah?",
      "Siapa di antara kita yang lebih sering menunda-nunda?",
      "Siapa di antara kita yang lebih cepat akrab dengan orang baru?",
      "Siapa di antara kita yang lebih menjaga kesehatan?"
    ],
    "phrases": [
      "Aku tersenyum saat kamu…",
      "Hari favoritku bersamamu adalah…",
      "Terima kasih untuk…",
      "Saat aku sedih, yang membantuku adalah…",
      "Suatu hari nanti aku ingin kita…",
      "Kenangan terhangat tentang kita adalah…",
      "Kamu paling jago dalam…",
      "Aku merasa tenang saat…",
      "Kalau kita punya satu hari penuh yang bebas, kita akan…",
      "Aku bangga padamu karena…",
      "Malam sempurna kita adalah…",
      "Aku tidak akan pernah lupa bagaimana kamu…",
      "Aku suka saat kamu bilang…",
      "Tahun depan aku ingin kita…",
      "Bagiku, kamu seperti…",
      "Hadiah terbaik darimu adalah…",
      "Aku kangen kamu saat…",
      "Kita paling lucu saat…",
      "Sudah lama aku ingin bilang padamu…",
      "Tempat kita adalah…",
      "Saat aku memikirkanmu, aku…",
      "Kamu membuat hariku lebih baik saat…",
      "Aku suka kebiasaan kita…",
      "Harapanku untuk kita: …",
      "Hal paling lucu yang pernah terjadi pada kita adalah…",
      "Aku merasakan perhatianmu saat kamu…",
      "Pagi bersamamu adalah…",
      "Kalau kita satu kata, kata itu adalah…",
      "Aku ingin belajar darimu cara…",
      "Terima kasih karena kamu selalu…",
      "Makanan favoritku waktu kecil adalah…",
      "Kalau diberi satu hari di negara mana saja, aku akan…",
      "Nasihat terbaik yang pernah kuterima adalah…",
      "Aku selalu tertawa saat…",
      "Tempat favoritku di kota asalku adalah…",
      "Kalau punya toko kecil sendiri, aku akan menjual…",
      "Masakan yang paling jago kubuat adalah…",
      "Mimpi masa kecil yang masih kuingat adalah…",
      "Aku mudah dibuat senang kalau…",
      "Tempat paling menakjubkan yang pernah kukunjungi adalah…",
      "Aku ingin belajar…",
      "Hari libur sempurnaku dimulai dengan…",
      "Kalau boleh memelihara hewan apa saja, aku memilih…",
      "Keluargaku selalu bilang bahwa aku…",
      "Aku tak pernah bisa terbiasa dengan…",
      "Kebiasaanku yang paling berguna adalah…",
      "Buku terbaik yang pernah kubaca adalah…",
      "Sepuluh tahun lagi, aku ingin…",
      "Rumah impianku adalah…",
      "Hal paling lucu yang kualami waktu kecil adalah…",
      "Bagiku, kebahagiaan adalah…",
      "Sulit bagiku untuk melepaskan…",
      "Kalau aku punya kekuatan super, kekuatan itu akan…",
      "Yang paling kuhargai dari orang lain adalah…",
      "Saat punya malam yang luang, aku…",
      "Aroma favoritku adalah…",
      "Makanan yang tak akan pernah kumakan adalah…",
      "Satu barang yang selalu kubawa saat keluar rumah adalah…",
      "Aku ingin berkunjung ke… karena…",
      "Hadiah terbaik yang pernah kuterima adalah…",
      "Kebiasaanku yang paling unik adalah…",
      "Kalau punya satu jam ekstra setiap hari, aku akan…",
      "Orang yang banyak mengajariku adalah…",
      "Di hari yang berat, yang membuatku bertahan adalah…",
      "Makanan terenak yang kucoba saat bepergian adalah…",
      "Kalau bisa bertukar pekerjaan sehari, aku memilih…",
      "Musim yang paling dekat di hatiku adalah…",
      "Teman-temanku bilang bahwa aku…",
      "Suatu hari aku ingin mengajari seseorang…",
      "Kebahagiaan kecil dalam hariku adalah…"
    ],
    "truth": {
      "t01": [
        "Gurita punya tiga jantung.",
        true,
        "Dua jantung memompa darah ke insang, yang ketiga ke seluruh tubuh."
      ],
      "t02": [
        "Tembok Besar Tiongkok terlihat dari Bulan dengan mata telanjang.",
        false,
        "Tidak: temboknya terlalu sempit. Dari orbit pun sangat sulit dilihat."
      ],
      "t03": [
        "Madu bisa bertahan ribuan tahun tanpa basi.",
        true,
        "Madu berumur ribuan tahun yang masih awet ditemukan di makam Mesir kuno."
      ],
      "t04": [
        "Pisang tumbuh di pohon berkayu.",
        false,
        "Tanaman pisang adalah terna raksasa: «batangnya» tersusun dari pelepah daun yang tergulung rapat."
      ],
      "t05": [
        "Venus adalah planet terpanas di Tata Surya.",
        true,
        "Atmosfernya yang tebal memanaskan Venus hingga sekitar 460 °C — lebih panas dari Merkurius."
      ],
      "t06": [
        "Kelelawar itu buta.",
        false,
        "Kelelawar bisa melihat, dan dalam gelap juga mencari jalan dengan ekolokasi."
      ],
      "t07": [
        "Paus adalah ikan.",
        false,
        "Paus adalah mamalia: bernapas dengan udara dan menyusui anaknya."
      ],
      "t08": [
        "Sahara adalah gurun terbesar di dunia.",
        false,
        "Gurun terbesar adalah Antarktika. Sahara adalah gurun panas terbesar."
      ],
      "t09": [
        "Jumlah tulang leher jerapah sama dengan manusia.",
        true,
        "Keduanya punya tujuh ruas tulang leher — hanya saja milik jerapah sangat panjang."
      ],
      "t10": [
        "Secara botani, tomat adalah buah beri.",
        true,
        "Ahli botani menggolongkan tomat sebagai beri: buah berdaging dengan biji di dalamnya."
      ],
      "t11": [
        "Secara botani, stroberi adalah buah beri.",
        false,
        "Itu beri semu: buah sebenarnya adalah «biji» kecil di permukaannya."
      ],
      "t12": [
        "Ledakan bisa terdengar di luar angkasa.",
        false,
        "Luar angkasa hampir tanpa udara, jadi suara tak punya medium untuk merambat."
      ],
      "t13": [
        "Di pegunungan tinggi, air mendidih pada suhu lebih rendah.",
        true,
        "Tekanan udara di sana lebih rendah, jadi air mendidih sebelum 100 °C."
      ],
      "t14": [
        "Penguin hidup di Kutub Utara.",
        false,
        "Penguin liar hanya hidup di belahan bumi selatan, bukan di ujung utara."
      ],
      "t15": [
        "Everest adalah gunung tertinggi di atas permukaan laut.",
        true,
        "Everest menjulang sekitar 8.849 meter di atas permukaan laut."
      ],
      "t16": [
        "Manusia hanya memakai 10% otaknya.",
        false,
        "Itu mitos: hampir semua bagian otak aktif sepanjang hari."
      ],
      "t17": [
        "Jantung manusia berdetak sekitar 100.000 kali sehari.",
        true,
        "Dengan sekitar 70 detak per menit, totalnya kira-kira 100.000 detak sehari."
      ],
      "t18": [
        "Ingatan ikan mas koki hanya tiga detik.",
        false,
        "Eksperimen menunjukkan ikan mas koki bisa mengingat yang dipelajarinya berbulan-bulan."
      ],
      "t19": [
        "Australia adalah negara sekaligus benua.",
        true,
        "Australia satu-satunya negara yang menempati seluruh benua."
      ],
      "t20": [
        "Petir tak pernah menyambar tempat yang sama dua kali.",
        false,
        "Bisa: gedung tinggi tersambar petir berkali-kali setiap tahun."
      ],
      "t21": [
        "Burung unta membenamkan kepala ke pasir saat takut.",
        false,
        "Mitos: burung unta yang takut akan lari atau merebah rata di tanah untuk bersembunyi."
      ],
      "t22": [
        "Burung terkecil di dunia adalah sejenis kolibri.",
        true,
        "Kolibri lebah dari Kuba beratnya sekitar 2 gram — paling ringan di antara semua burung."
      ],
      "t23": [
        "Semangka sekitar 90% terdiri dari air.",
        true,
        "Semangka mengandung sekitar 92% air — karena itu sangat menyegarkan."
      ],
      "t24": [
        "Laba-laba punya enam kaki.",
        false,
        "Laba-laba punya delapan kaki. Serangga berkaki enam, dan laba-laba bukan serangga."
      ],
      "t25": [
        "Bulan memancarkan cahayanya sendiri.",
        false,
        "Bulan tak punya cahaya sendiri: ia memantulkan sinar matahari."
      ],
      "t26": [
        "Gajah adalah hewan darat terbesar.",
        true,
        "Gajah semak Afrika bisa berbobot lebih dari 6 ton."
      ],
      "t27": [
        "Paus biru adalah hewan terbesar yang dikenal ilmu pengetahuan.",
        true,
        "Paus biru bisa lebih dari 30 meter — lebih besar dari dinosaurus mana pun yang dikenal."
      ],
      "t28": [
        "Bunglon berganti warna hanya untuk menyamar.",
        false,
        "Warnanya lebih bergantung pada suasana hati, suhu, dan sinyal untuk bunglon lain."
      ],
      "t29": [
        "Telepon ditemukan oleh Thomas Edison.",
        false,
        "Alexander Graham Bell menerima paten telepon pada tahun 1876."
      ],
      "t30": [
        "Penisilin ditemukan oleh Alexander Fleming.",
        true,
        "Fleming menemukan penisilin pada 1928 — antibiotik pertama."
      ],
      "t31": [
        "Gunung berapi tertinggi di Tata Surya ada di Mars.",
        true,
        "Olympus Mons di Mars tingginya sekitar 22 km — hampir 2,5 kali Everest."
      ],
      "t32": [
        "Darah di pembuluh vena kita berwarna biru.",
        false,
        "Darah selalu merah; vena hanya tampak biru karena cara cahaya menembus kulit."
      ],
      "t33": [
        "Atlantik adalah samudra terbesar di Bumi.",
        false,
        "Yang terbesar adalah Pasifik: lebih luas dari seluruh daratan Bumi digabung."
      ],
      "t34": [
        "Rusia adalah negara terluas di dunia.",
        true,
        "Luas Rusia lebih dari 17 juta kilometer persegi."
      ],
      "t35": [
        "Kanada memiliki garis pantai terpanjang di dunia.",
        true,
        "Garis pantai Kanada lebih dari 200.000 km — terpanjang dibanding negara mana pun."
      ],
      "t36": [
        "Lambung sapi punya empat bagian.",
        true,
        "Sapi punya satu lambung dengan empat ruang — begitulah ia mencerna rumput."
      ],
      "t37": [
        "Singa adalah kucing terbesar di dunia.",
        false,
        "Kucing terbesar adalah harimau, terutama harimau Siberia."
      ],
      "t38": [
        "Bumi adalah planet terdekat dengan Matahari.",
        false,
        "Yang terdekat Merkurius, lalu Venus; Bumi adalah planet ketiga."
      ],
      "t39": [
        "Sinar matahari butuh sekitar 8 menit untuk sampai ke Bumi.",
        true,
        "Cahaya menempuh 150 juta km dari Matahari dalam sekitar 8 menit 20 detik."
      ],
      "t40": [
        "Lumba-lumba tidur dengan separuh otak secara bergantian.",
        true,
        "Separuh otak beristirahat, separuh lagi tetap waspada dan ingat bernapas."
      ],
      "t41": [
        "Kentang berasal dari Irlandia.",
        false,
        "Kentang berasal dari Amerika Selatan: ditanam di Pegunungan Andes ribuan tahun lalu."
      ],
      "t42": [
        "Cokelat dibuat dari biji pohon kakao.",
        true,
        "Buah kakao tumbuh langsung di batang, dan bijinya diolah menjadi cokelat."
      ],
      "t43": [
        "Hiu adalah mamalia.",
        false,
        "Hiu adalah ikan: bernapas dengan insang. Mamalia laut itu paus dan lumba-lumba."
      ],
      "t44": [
        "Beberapa jenis bambu bisa tumbuh hampir satu meter sehari.",
        true,
        "Bambu termasuk tanaman yang tumbuh paling cepat di Bumi."
      ],
      "t45": [
        "Burung hantu bisa memutar kepala penuh 360 derajat.",
        false,
        "Burung hantu bisa memutar kepala sekitar 270 derajat — banyak, tapi tidak satu putaran."
      ],
      "t46": [
        "Berlian dan grafit pensil terbuat dari zat yang sama.",
        true,
        "Keduanya karbon murni — hanya susunan atomnya yang berbeda."
      ],
      "t47": [
        "Unta menyimpan air di punuknya.",
        false,
        "Punuk unta menyimpan lemak, bukan air — sumber energi di perjalanan jauh."
      ],
      "t48": [
        "Tulang terkecil di tubuh manusia ada di telinga.",
        true,
        "Tulang sanggurdi di telinga tengah panjangnya hanya sekitar 3 milimeter."
      ],
      "t49": [
        "Burung beo besar bisa hidup lebih dari 50 tahun.",
        true,
        "Makau dan kakatua yang dirawat baik sering hidup 50 tahun atau lebih."
      ],
      "t50": [
        "Wright bersaudara melakukan penerbangan pesawat bermesin pertama.",
        true,
        "Mereka terbang pada 1903; penerbangan pertama berlangsung 12 detik."
      ],
      "t51": [
        "Roda ditemukan pada Abad Pertengahan.",
        false,
        "Roda berumur lebih dari 5.000 tahun: sudah dipakai di Mesopotamia sekitar 5.500 tahun lalu."
      ],
      "t52": [
        "Kuda laut adalah ikan.",
        true,
        "Kuda laut bernapas dengan insang dan berenang dengan sirip, seperti ikan lain."
      ],
      "t53": [
        "Kolibri bisa terbang mundur.",
        true,
        "Kolibri satu-satunya burung yang benar-benar bisa terbang mundur."
      ],
      "t54": [
        "Menara Eiffel sedikit lebih tinggi di musim panas.",
        true,
        "Panas membuat logam memuai, dan menara bertambah tinggi sekitar 15 sentimeter."
      ],
      "t55": [
        "Kulit adalah organ terbesar tubuh manusia.",
        true,
        "Kulit orang dewasa beratnya beberapa kilogram dan melindungi seluruh tubuh."
      ],
      "t56": [
        "Warna merah membuat banteng marah.",
        false,
        "Banteng hampir tak bisa membedakan merah: gerakanlah yang memancingnya, bukan warna."
      ],
      "t57": [
        "Lalat rumah hanya hidup satu hari.",
        false,
        "Lalat rumah hidup sekitar sebulan. Yang hidup sehari dua hari adalah lalat sehari dewasa."
      ],
      "t58": [
        "Nanas tumbuh di pohon berkayu.",
        false,
        "Nanas tumbuh di tanaman rendah berdaun lebat, tepat dari tengahnya."
      ],
      "t59": [
        "Kacang tanah termasuk buah berkulit keras, seperti kenari.",
        false,
        "Kacang tanah adalah polong-polongan, kerabat kacang polong dan buncis. Polongnya matang di dalam tanah."
      ],
      "t60": [
        "Kutub Utara dan Kutub Selatan sama dinginnya.",
        false,
        "Kutub Selatan jauh lebih dingin: berada di benua es yang tinggi, Kutub Utara di atas samudra."
      ]
    },
    "hints": {
      "h01": [
        "Penguin",
        "Aku burung, tapi tidak bisa terbang",
        "Aku tinggal di tempat yang sangat dingin",
        "Aku selalu memakai jas berekor",
        "Burung unta",
        "Anjing laut",
        "Camar"
      ],
      "h02": [
        "Gajah",
        "Aku makan hampir sepanjang hari",
        "Telingaku seperti kipas besar",
        "Aku punya belalai panjang",
        "Badak",
        "Kuda nil",
        "Jerapah"
      ],
      "h03": [
        "Jerapah",
        "Aku sedikit tidur, sering sambil berdiri",
        "Aku makan daun dari pohon tertinggi",
        "Leherku paling panjang",
        "Zebra",
        "Unta",
        "Rusa besar"
      ],
      "h04": [
        "Unta",
        "Aku bisa lama bertahan tanpa air",
        "Aku dijuluki kapal gurun",
        "Di punggungku ada satu atau dua punuk",
        "Kuda",
        "Keledai",
        "Llama"
      ],
      "h05": [
        "Lebah",
        "Aku bisa menunjukkan jalan ke bunga",
        "Aku bekerja di padang dari pagi sampai senja",
        "Aku membuat madu",
        "Tawon",
        "Lalat",
        "Kupu-kupu"
      ],
      "h06": [
        "Kura-kura",
        "Aku bisa hidup lebih dari seratus tahun",
        "Aku tidak pernah terburu-buru",
        "Aku membawa rumahku di punggung",
        "Siput",
        "Kadal",
        "Landak"
      ],
      "h07": [
        "Kanguru",
        "Ekorku membantuku menjaga keseimbangan",
        "Aku tinggal di Australia",
        "Aku membawa anakku di kantong",
        "Koala",
        "Kelinci liar",
        "Tupai"
      ],
      "h08": [
        "Burung hantu",
        "Aku bisa memutar kepala hampir ke belakang",
        "Aku berburu di malam hari",
        "Aku berbunyi di hutan yang gelap",
        "Gagak",
        "Elang",
        "Merpati"
      ],
      "h09": [
        "Lumba-lumba",
        "Aku bernapas dengan udara, walau tinggal di laut",
        "Aku menolong manusia dan bicara dengan siulan",
        "Aku suka melompati ombak",
        "Hiu",
        "Paus",
        "Anjing laut"
      ],
      "h10": [
        "Tupai",
        "Aku menyembunyikan makanan, kadang lupa di mana",
        "Aku tinggal di lubang pohon",
        "Aku menggerogoti kacang dan buah pinus",
        "Landak",
        "Kelinci liar",
        "Tikus"
      ],
      "h11": [
        "Laba-laba",
        "Aku bukan serangga, walau banyak yang mengira begitu",
        "Kakiku delapan",
        "Aku menenun jaring",
        "Semut",
        "Kumbang",
        "Nyamuk"
      ],
      "h12": [
        "Kucing",
        "Aku melihat dalam gelap lebih baik dari manusia",
        "Aku suka ambang jendela yang hangat",
        "Aku mendengkur dan menangkap tikus",
        "Kelinci",
        "Hamster",
        "Burung beo"
      ],
      "h13": [
        "Semangka",
        "Ilmuwan menggolongkanku sebagai buah beri",
        "Orang menantiku di musim panas",
        "Hijau di luar, merah di dalam",
        "Melon",
        "Labu",
        "Nanas"
      ],
      "h14": [
        "Roti",
        "Aku dipanggang di hampir setiap negara",
        "Aku diiris untuk makan siang",
        "Aku bisa putih atau gandum hitam, berkulit",
        "Panekuk",
        "Pai",
        "Kue kering"
      ],
      "h15": [
        "Madu",
        "Aku bisa awet ribuan tahun",
        "Aku ditambahkan ke teh hangat saat flu",
        "Lebah yang membuatku",
        "Selai",
        "Gula",
        "Susu"
      ],
      "h16": [
        "Lemon",
        "Aku kaya vitamin C",
        "Orang menaruhku di teh",
        "Aku kuning dan sangat asam",
        "Jeruk",
        "Jeruk bali",
        "Jeruk nipis"
      ],
      "h17": [
        "Wortel",
        "Aku tumbuh di dalam tanah, hanya daunku terlihat",
        "Katanya aku baik untuk mata",
        "Aku oranye, dan kelinci menyukaiku",
        "Bit",
        "Lobak",
        "Kentang"
      ],
      "h18": [
        "Apel",
        "Aku punya varietas musim panas dan dingin",
        "Aku dijadikan pai dan jus",
        "Aku tumbuh di pohon, merah atau hijau",
        "Pir",
        "Persik",
        "Plum"
      ],
      "h19": [
        "Pisang",
        "Aku tumbuh bertandan di tanaman yang tinggi",
        "Monyet sangat menyukaiku",
        "Aku kuning, dan harus dikupas",
        "Mangga",
        "Kiwi",
        "Nanas"
      ],
      "h20": [
        "Teh",
        "Orang di Tiongkok meminumku ribuan tahun",
        "Aku bisa hitam, hijau, atau herbal",
        "Aku diseduh dalam teko",
        "Kopi",
        "Kakao",
        "Jus"
      ],
      "h21": [
        "Telur",
        "Tanpa aku, sulit memanggang kue",
        "Omelet dibuat dariku",
        "Ayam betina yang menghasilkanku",
        "Keju",
        "Kacang",
        "Kentang"
      ],
      "h22": [
        "Payung",
        "Hampir sepanjang waktu aku terlipat",
        "Aku dibawa saat langit mendung",
        "Aku melindungimu dari hujan",
        "Jas hujan",
        "Topi",
        "Sepatu bot"
      ],
      "h23": [
        "Jam",
        "Ada yang bekerja dengan pasir atau sinar matahari",
        "Aku tergantung di dinding dan berdiri di menara",
        "Aku menunjukkan waktu dengan jarum",
        "Kompas",
        "Kalender",
        "Termometer"
      ],
      "h24": [
        "Kunci",
        "Tanpa aku, pintu tak mau terbuka",
        "Aku sering dibawa di gantungan",
        "Aku membuka gembok",
        "Gunting",
        "Obeng",
        "Penjepit kertas"
      ],
      "h25": [
        "Lilin",
        "Makin lama bekerja, makin kecil aku",
        "Orang menyalakanku saat listrik padam",
        "Aku terbuat dari parafin dan punya sumbu",
        "Senter",
        "Lampu",
        "Korek api"
      ],
      "h26": [
        "Gunting",
        "Aku punya dua lingkaran dan dua ujung tajam",
        "Aku memotong bentuk dari kertas",
        "Aku memotong kain dan kertas",
        "Pisau",
        "Jarum",
        "Penggaris"
      ],
      "h27": [
        "Sikat gigi",
        "Buluku banyak sekali",
        "Aku diganti setiap tiga bulan",
        "Aku membersihkan gigi pagi dan malam",
        "Sabun",
        "Handuk",
        "Spons"
      ],
      "h28": [
        "Kulkas",
        "Di dalamku selalu musim dingin",
        "Lampu menyala saat aku dibuka",
        "Aku menjaga makanan tetap dingin",
        "Kompor",
        "Oven",
        "Lemari"
      ],
      "h29": [
        "Sepeda",
        "Aku berjalan tanpa bensin dan listrik",
        "Aku punya setang, bel, dan rantai",
        "Aku punya dua roda dan pedal",
        "Skuter",
        "Sepeda motor",
        "Papan luncur"
      ],
      "h30": [
        "Pesawat",
        "Aku bersayap, tapi bukan burung",
        "Orang menungguku di bandara",
        "Aku terbang di atas awan membawa penumpang",
        "Helikopter",
        "Roket",
        "Balon udara"
      ],
      "h31": [
        "Kereta api",
        "Aku hanya melaju di jalanku sendiri",
        "Gerbongku banyak",
        "Aku melaju di rel dari stasiun ke stasiun",
        "Trem",
        "Bus",
        "Kereta bawah tanah"
      ],
      "h32": [
        "Jembatan",
        "Aku dibangun dari batu, kayu, atau baja",
        "Kapal bisa lewat di bawahku",
        "Aku menghubungkan dua tepi sungai",
        "Terowongan",
        "Jalan",
        "Bendungan"
      ],
      "h33": [
        "Pensil",
        "Di dalamku ada grafit",
        "Aku diraut saat tumpul",
        "Aku menulis dan menggambar, bisa dihapus",
        "Pulpen",
        "Kapur tulis",
        "Spidol"
      ],
      "h34": [
        "Buku",
        "Aku diam, tapi mengajarkan banyak hal",
        "Aku punya sampul dan halaman",
        "Orang membacaku dan meminjamku di perpustakaan",
        "Majalah",
        "Koran",
        "Buku catatan"
      ],
      "h35": [
        "Koper",
        "Aku sering bepergian, tapi selalu di tangan orang",
        "Aku diisi sebelum perjalanan",
        "Aku punya pegangan dan roda, berisi pakaian",
        "Ransel",
        "Tas",
        "Kotak"
      ],
      "h36": [
        "Perpustakaan",
        "Di sini orang diminta bicara pelan",
        "Di sini kamu bisa membuat kartu anggota",
        "Ribuan buku untuk dipinjam pulang",
        "Sekolah",
        "Toko buku",
        "Arsip"
      ],
      "h37": [
        "Bandara",
        "Di sini ada pemeriksaan paspor",
        "Di sini ada pengumuman naik pesawat",
        "Pesawat lepas landas dari sini",
        "Stasiun kereta",
        "Pelabuhan",
        "Terminal bus"
      ],
      "h38": [
        "Gurun",
        "Panas di siang hari, malamnya bisa sangat dingin",
        "Di sini ada oasis",
        "Banyak pasir dan sangat sedikit air",
        "Stepa",
        "Sabana",
        "Pantai"
      ],
      "h39": [
        "Gunung berapi",
        "Aku bisa tidur ratusan tahun",
        "Asap naik dari puncakku",
        "Aku meletus mengeluarkan lava",
        "Gunung",
        "Geiser",
        "Pulau"
      ],
      "h40": [
        "Pelangi",
        "Aku hanya terlihat saat matahari di belakangmu",
        "Aku sering muncul setelah hujan",
        "Tujuh warna melengkung di langit",
        "Petir",
        "Awan",
        "Aurora"
      ],
      "h41": [
        "Bulan",
        "Aku selalu menunjukkan sisi yang sama ke Bumi",
        "Aku bisa purnama atau sabit tipis",
        "Aku bersinar di langit malam",
        "Matahari",
        "Bintang",
        "Komet"
      ],
      "h42": [
        "Salju",
        "Setiap kepingku unik",
        "Orang membangun benteng dariku",
        "Putih dan dingin, aku turun di musim dingin",
        "Hujan",
        "Hujan es",
        "Embun beku"
      ],
      "h43": [
        "Sungai",
        "Aku punya hulu dan muara",
        "Perahu berlayar di atasku",
        "Aku mengalir dari gunung ke laut",
        "Danau",
        "Laut",
        "Anak sungai"
      ],
      "h44": [
        "Kaktus",
        "Aku bisa lama hidup tanpa air",
        "Aku tumbuh di gurun dan di ambang jendela",
        "Aku penuh duri",
        "Lidah buaya",
        "Pohon palem",
        "Bunga aster"
      ],
      "h45": [
        "Bunga matahari",
        "Bijiku dibuat menjadi minyak",
        "Aku berputar mengikuti matahari",
        "Bunga kuning besar penuh biji",
        "Bunga aster",
        "Tulip",
        "Dandelion"
      ],
      "h46": [
        "Pohon ek",
        "Aku bisa hidup lebih dari seribu tahun",
        "Aku dianggap lambang kekuatan",
        "Buah ek tumbuh padaku",
        "Pohon birch",
        "Pohon pinus",
        "Pohon maple"
      ],
      "h47": [
        "Pulau",
        "Satu negara utuh bisa muat di atasku",
        "Aku dicapai dengan kapal atau pesawat",
        "Aku dikelilingi air di semua sisi",
        "Semenanjung",
        "Terumbu karang",
        "Tanjung"
      ],
      "h48": [
        "Air terjun",
        "Suaraku terdengar dari jauh",
        "Yang tertinggi di antara kami ada di Venezuela",
        "Di sini sungai jatuh dari tebing",
        "Air mancur",
        "Geiser",
        "Mata air"
      ],
      "h49": [
        "Dokter",
        "Aku belajar bertahun-tahun sebelum bekerja",
        "Aku memakai jas putih",
        "Aku merawat orang sakit",
        "Perawat",
        "Apoteker",
        "Dokter hewan"
      ],
      "h50": [
        "Pemadam kebakaran",
        "Aku siaga siang dan malam",
        "Aku bekerja dengan air dan tangga",
        "Aku memadamkan api",
        "Polisi",
        "Tim penyelamat",
        "Tukang bangunan"
      ],
      "h51": [
        "Koki",
        "Aku mencicipi semua yang kubuat",
        "Aku bekerja di depan kompor panas",
        "Aku memasak di restoran",
        "Tukang roti",
        "Pelayan",
        "Pembuat kue"
      ],
      "h52": [
        "Guru",
        "Malam hari aku memeriksa buku tugas",
        "Aku berdiri di depan papan tulis",
        "Aku mengajar anak-anak di sekolah",
        "Kepala sekolah",
        "Pustakawan",
        "Guru TK"
      ],
      "h53": [
        "Pilot",
        "Tempat kerjaku kokpit",
        "Aku berbicara pada penumpang lewat pengeras suara",
        "Aku menerbangkan pesawat",
        "Nakhoda",
        "Sopir",
        "Astronaut"
      ],
      "h54": [
        "Tukang pos",
        "Aku tahu semua alamat di wilayahku",
        "Aku membawa tas besar",
        "Aku mengantar surat dan paket",
        "Kurir",
        "Sopir taksi",
        "Penjaga toko"
      ],
      "h55": [
        "Tukang kebun",
        "Aku tahu kapan menanam apa",
        "Alatku penyiram dan gunting dahan",
        "Aku merawat bunga dan pohon",
        "Petani",
        "Penjaga hutan",
        "Penjual bunga"
      ],
      "h56": [
        "Fotografer",
        "Aku menangkap momen",
        "Aku meminta semua orang diam sejenak",
        "Aku bekerja dengan kamera dan foto",
        "Pelukis",
        "Wartawan",
        "Juru kamera video"
      ],
      "h57": [
        "Nelayan",
        "Aku bangun sebelum fajar dan menunggu lama",
        "Aku butuh joran dan kesabaran",
        "Aku menangkap ikan",
        "Petani",
        "Pelaut",
        "Penggembala"
      ],
      "h58": [
        "Astronaut",
        "Aku berlatih lama di Bumi",
        "Aku memakai baju antariksa",
        "Aku terbang ke luar angkasa",
        "Pilot",
        "Astronom",
        "Insinyur"
      ],
      "h59": [
        "Arsitek",
        "Karyaku terlihat di seluruh kota",
        "Aku menggambar denah",
        "Aku merancang rumah",
        "Tukang bangunan",
        "Desainer",
        "Insinyur"
      ],
      "h60": [
        "Dokter gigi",
        "Banyak orang takut pada kursiku",
        "Aku bekerja dengan bor",
        "Aku merawat gigi",
        "Dokter bedah",
        "Dokter mata",
        "Dokter anak"
      ]
    },
    "dreams": {
      "d01": [
        "Di mana ingin tinggal sepuluh tahun lagi?",
        "Di tepi laut",
        "Di pegunungan",
        "Di kota besar",
        "Di desa yang tenang"
      ],
      "d02": [
        "Rumah seperti apa yang diimpikan?",
        "Apartemen yang nyaman",
        "Rumah dengan taman",
        "Pondok di tepi danau",
        "Rumah tua bersejarah"
      ],
      "d03": [
        "Apa yang ingin ditanam di kebun?",
        "Pohon apel",
        "Mawar",
        "Sayur dan rempah",
        "Stroberi"
      ],
      "d04": [
        "Hewan peliharaan apa yang diinginkan?",
        "Kucing",
        "Burung beo",
        "Ikan akuarium",
        "Kura-kura darat"
      ],
      "d05": [
        "Ke mana ingin pergi lebih dulu?",
        "Jepang",
        "Maroko",
        "Islandia",
        "Selandia Baru"
      ],
      "d06": [
        "Bepergian dengan apa?",
        "Kereta api",
        "Mobil",
        "Pesawat",
        "Kapal laut"
      ],
      "d07": [
        "Bahasa apa yang ingin dipelajari?",
        "Arab",
        "Jepang",
        "Spanyol",
        "Mandarin"
      ],
      "d08": [
        "Keterampilan apa yang ingin dikuasai?",
        "Menggambar",
        "Menjahit",
        "Berenang",
        "Pemrograman"
      ],
      "d09": [
        "Masakan apa yang ingin dikuasai?",
        "Plov",
        "Roti buatan sendiri",
        "Sushi",
        "Baklava"
      ],
      "d10": [
        "Akhir pekan ingin dihabiskan bagaimana?",
        "Di alam terbuka",
        "Di rumah dengan buku",
        "Mengunjungi keluarga",
        "Di kota baru"
      ],
      "d11": [
        "Pagi akhir pekan yang sempurna?",
        "Jalan pagi",
        "Sarapan santai",
        "Olahraga di udara segar",
        "Teh di balkon"
      ],
      "d12": [
        "Menabung untuk apa?",
        "Rumah sendiri",
        "Perjalanan besar",
        "Mobil",
        "Pendidikan"
      ],
      "d13": [
        "Pekerjaan seperti apa yang diinginkan?",
        "Usaha sendiri",
        "Kerja di perusahaan besar",
        "Kerja dari rumah",
        "Menolong orang"
      ],
      "d14": [
        "Bagaimana ingin membantu sesama?",
        "Menjadi relawan",
        "Menolong hewan",
        "Mengajar anak-anak",
        "Menanam pohon"
      ],
      "d15": [
        "Tradisi keluarga apa yang diinginkan?",
        "Makan siang bersama hari Minggu",
        "Malam permainan papan",
        "Jalan-jalan akhir pekan",
        "Album foto keluarga"
      ],
      "d16": [
        "Dapur seperti apa yang diinginkan?",
        "Dapur keluarga yang luas",
        "Terang dan nyaman",
        "Menghadap taman",
        "Kecil tapi praktis"
      ],
      "d17": [
        "Apa yang ingin dilihat langsung?",
        "Aurora utara",
        "Piramida Giza",
        "Air Terjun Victoria",
        "Himalaya"
      ],
      "d18": [
        "Apa yang ingin dilakukan di malam hari?",
        "Membaca",
        "Memasak menu baru",
        "Belajar bahasa",
        "Jalan-jalan di taman"
      ],
      "d19": [
        "Hobi apa yang ingin dimulai?",
        "Fotografi",
        "Membuat tembikar",
        "Menyulam",
        "Berkebun"
      ],
      "d20": [
        "Ke mana ingin pergi saat akhir pekan?",
        "Ke hutan",
        "Ke danau",
        "Ke kota kecil terdekat",
        "Ke pegunungan"
      ],
      "d21": [
        "Ruang kerja impian seperti apa?",
        "Dekat jendela",
        "Dengan rak buku",
        "Penuh tanaman hijau",
        "Hampir kosong"
      ],
      "d22": [
        "Apa yang ingin dipelajari berikutnya?",
        "Kedokteran",
        "Sejarah",
        "Ekonomi",
        "Desain"
      ],
      "d23": [
        "Pohon apa yang ingin ditanam?",
        "Pohon ek",
        "Pohon apel",
        "Pohon zaitun",
        "Pohon kurma"
      ],
      "d24": [
        "Apa yang ingin dimasak untuk tamu?",
        "Pai buatan sendiri",
        "Plov satu panci besar",
        "Sup resep keluarga",
        "Salad segar"
      ],
      "d25": [
        "Kota mana yang ingin dikunjungi?",
        "Istanbul",
        "Paris",
        "Tokyo",
        "Kairo"
      ],
      "d26": [
        "Musim panas ingin dihabiskan di mana?",
        "Di tepi laut",
        "Di pegunungan",
        "Di rumah pedesaan",
        "Keliling negeri sendiri"
      ],
      "d27": [
        "Burung apa yang ingin dipelihara?",
        "Kenari",
        "Parkit",
        "Merpati",
        "Pipit zebra"
      ],
      "d28": [
        "Olahraga apa yang ingin dicoba?",
        "Berenang",
        "Berkuda",
        "Memanah",
        "Panjat tebing"
      ],
      "d29": [
        "Buku apa yang ingin dikoleksi?",
        "Ensiklopedia",
        "Karya klasik",
        "Buku perjalanan",
        "Buku resep"
      ],
      "d30": [
        "Apa yang ingin dibuat sendiri?",
        "Perabot",
        "Peralatan makan sendiri",
        "Selimut rajutan",
        "Rumah burung"
      ],
      "d31": [
        "Di mana ingin berpiknik?",
        "Di tepi sungai",
        "Di taman",
        "Di tanah lapang hutan",
        "Di pegunungan"
      ],
      "d32": [
        "Kendaraan apa untuk masa depan?",
        "Mobil listrik",
        "Sepeda",
        "Mobil keluarga besar",
        "Tanpa mobil"
      ],
      "d33": [
        "Apa yang ingin dilakukan saat pensiun?",
        "Berkebun",
        "Bepergian",
        "Waktu bersama cucu",
        "Belajar hal baru"
      ],
      "d34": [
        "Kebaikan apa yang ingin dilakukan?",
        "Membangun sumur air",
        "Membantu penampungan kucing",
        "Mengumpulkan buku untuk sekolah",
        "Menanam sederet pohon"
      ],
      "d35": [
        "Sarapan akhir pekan apa yang diinginkan?",
        "Panekuk",
        "Telur dadar",
        "Bubur dengan buah",
        "Panekuk keju"
      ],
      "d36": [
        "Di mana ingin menyambut tamu?",
        "Di dapur",
        "Di ruang tamu",
        "Di teras",
        "Di taman"
      ],
      "d37": [
        "Keajaiban alam apa yang ingin dilihat?",
        "Grand Canyon",
        "Air Terjun Niagara",
        "Danau Baikal",
        "Gurun Sahara"
      ],
      "d38": [
        "Keterampilan rumah apa yang ingin dikuasai?",
        "Memperbaiki sendiri",
        "Menjahit",
        "Memanggang roti",
        "Merawat kebun"
      ],
      "d39": [
        "Ingin bisa berapa bahasa?",
        "Dua",
        "Tiga",
        "Lima",
        "Sebanyak mungkin"
      ],
      "d40": [
        "Warna dinding rumah apa yang diinginkan?",
        "Putih",
        "Krem",
        "Hijau muda",
        "Biru muda"
      ],
      "d41": [
        "Ikan apa yang ingin ada di akuarium?",
        "Ikan mas koki",
        "Guppy",
        "Ikan lele",
        "Ikan manfish"
      ],
      "d42": [
        "Perjalanan apa untuk hadiah orang tua?",
        "Liburan di tepi laut",
        "Tur kota",
        "Perjalanan ke gunung",
        "Perjalanan naik kereta"
      ],
      "d43": [
        "Apa yang ingin dilakukan di waktu luang?",
        "Menggambar",
        "Membaca",
        "Olahraga",
        "Kerajinan tangan"
      ],
      "d44": [
        "Musim apa yang cocok untuk bepergian?",
        "Musim semi",
        "Musim panas",
        "Musim gugur",
        "Musim dingin"
      ],
      "d45": [
        "Apa yang ingin diawetkan untuk musim dingin?",
        "Selai",
        "Acar",
        "Buah kering",
        "Kolak buah"
      ],
      "d46": [
        "Pekerjaan lain apa yang ingin dicoba?",
        "Koki",
        "Pemrogram",
        "Penerjemah",
        "Tukang kayu"
      ],
      "d47": [
        "Negara mana yang ingin dikenal?",
        "Malaysia",
        "Italia",
        "Kanada",
        "Australia"
      ],
      "d48": [
        "Apa yang diinginkan di halaman?",
        "Air mancur kecil",
        "Kebun sayur",
        "Gazebo",
        "Ayunan"
      ],
      "d49": [
        "Bagaimana merayakan keberhasilan?",
        "Makan malam keluarga",
        "Jalan-jalan ke alam",
        "Buku baru",
        "Berbuat baik untuk sesama"
      ],
      "d50": [
        "Apa yang ingin diwariskan ke anak?",
        "Cinta buku",
        "Keterampilan memasak",
        "Bahasa ibu",
        "Kepedulian pada alam"
      ]
    }
  }
});
