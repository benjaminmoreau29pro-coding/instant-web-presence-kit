const LANGUAGES = [
    { id: 'fr', name: 'Français', flag: '🇫🇷', country: '+33', phN: 'Starlight Studio', phE: 'contact@starlight.fr', phT: '06 12 34 56 78', reg: /^\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$|^\d{10}$/, optM: 'Choix du métier', optL: 'Choix de la langue cible', optI: 'Indicatif' },
    { id: 'en', name: 'English', flag: '🇬🇧', country: '+1', phN: 'Quantum Agency', phE: 'info@quantum.com', phT: '202-555-0123', reg: /^\d{3}-\d{3}-\d{4}$/, optM: 'Choose a profession', optL: 'Choose target language', optI: 'Code' },
    { id: 'es', name: 'Español', flag: '🇪🇸', country: '+34', phN: 'Estudio Sol', phE: 'hola@estudio.es', phT: '612 345 678', reg: /^\d{3}\s\d{3}\s\d{3}$/, optM: 'Elegir profesión', optL: 'Elegir idioma', optI: 'Prefijo' },
    { id: 'it', name: 'Italiano', flag: '🇮🇹', country: '+39', phN: 'Studio Luce', phE: 'info@studio.it', phT: '312 345 6789', reg: /^\d{3}\s\d{3}\s\d{4}$/, optM: 'Scegli professione', optL: 'Lingua di destinazione', optI: 'Prefisso' },
    { id: 'de', name: 'Deutsch', flag: '🇩🇪', country: '+49', phN: 'Stern GmbH', phE: 'hallo@stern.de', phT: '0151 12345678', reg: /^\d{4}\s\d{8}$/, optM: 'Beruf wählen', optL: 'Zielsprache wählen', optI: 'Vorwahl' },
    { id: 'pt', name: 'Português', flag: '🇵🇹', country: '+351', phN: 'Estúdio Norte', phE: 'info@norte.pt', phT: '912 345 678', reg: /^\d{3}\s\d{3}\s\d{3}$/, optM: 'Escolha a profissão', optL: 'Escolha o idioma', optI: 'Prefixo' },
    { id: 'nl', name: 'Nederlands', flag: '🇳🇱', country: '+31', phN: 'Horizon BV', phE: 'info@horizon.nl', phT: '06 12345678', reg: /^\d{2}\s\d{8}$/, optM: 'Kies een beroep', optL: 'Kies doeltaal', optI: 'Kengetal' },
    { id: 'no', name: 'Norsk', flag: '🇳🇴', country: '+47', phN: 'Nordlys AS', phE: 'post@nordlys.no', phT: '912 34 567', reg: /^\d{3}\s\d{2}\s\d{3}$/, optM: 'Velg yrke', optL: 'Velg målspråk', optI: 'Retningsnr' },
    { id: 'se', name: 'Svenska', flag: '🇸🇪', country: '+46', phN: 'Sjö Studio', phE: 'info@sjo.se', phT: '070-123 45 67', reg: /^\d{3}-\d{3}\s\d{2}\s\d{2}$/, optM: 'Välj yrke', optL: 'Välj målspråk', optI: 'Riktnummer' },
    { id: 'fi', name: 'Suomi', flag: '🇫🇮', country: '+358', phN: 'Järvi Oy', phE: 'info@jarvi.fi', phT: '040 1234567', reg: /^\d{3}\s\d{7}$/, optM: 'Valitse ammatti', optL: 'Valitse kieli', optI: 'Suuntanumero' },
    { id: 'pl', name: 'Polski', flag: '🇵🇱', country: '+48', phN: 'Wawel Sp.z.o.o', phE: 'kontakt@wawel.pl', phT: '501 123 456', reg: /^\d{3}\s\d{3}\s\d{3}$/, optM: 'Wybierz zawód', optL: 'Wybierz język', optI: 'Kierunkowy' },
    { id: 'ru', name: 'Русский', flag: '🇷🇺', country: '+7', phN: 'Звезда', phE: 'info@zvezda.ru', phT: '912 345-67-89', reg: /^\d{3}\s\d{3}-\d{2}-\d{2}$/, optM: 'Выберите профессию', optL: 'Выберите язык', optI: 'Код' },
    { id: 'tr', name: 'Türkçe', flag: '🇹🇷', country: '+90', phN: 'Yıldız Ltd', phE: 'destek@yildiz.tr', phT: '532 123 45 67', reg: /^\d{3}\s\d{3}\s\d{2}\s\d{2}$/, optM: 'Meslek seçin', optL: 'Hedef dili seçin', optI: 'Kod' },
    { id: 'zh', name: '中文', flag: '🇨🇳', country: '+86', phN: '科技工作室', phE: 'info@tech.cn', phT: '138-1234-5678', reg: /^\d{3}-\d{4}-\d{4}$/, optM: '选择职业', optL: '选择目标语言', optI: '区号' },
    { id: 'ja', name: '日本語', flag: '🇯🇵', country: '+81', phN: 'ホライゾン', phE: 'info@horizon.jp', phT: '090-1234-5678', reg: /^\d{3}-\d{4}-\d{4}$/, optM: '職業を選択', optL: '対象言語を選択', optI: '国番号' },
    { id: 'ko', name: '한국어', flag: '🇰🇷', country: '+82', phN: '퀀텀 스튜디오', phE: 'info@quantum.kr', phT: '010-1234-5678', reg: /^\d{3}-\d{4}-\d{4}$/, optM: '직업 선택', optL: '언어 선택', optI: '지역 번호' }
];

const DICT = {
    fr: { title: "Générateur Quantum", sub: "L'IA à votre service.", name: "Nom Entreprise *", prof: "Métier *", slang: "Langue Site *", col: "Couleur *", mail: "Email *", tel: "Téléphone *", gen: "Générer (.zip)", err_req: "Champ requis", err_lang: "Choisir langue", err_mail: "Email invalide", err_ind: "Choisir indicatif", err_tel: "Format attendu : ", dark: "Mode Sombre", light: "Mode Clair", reset: "Reset" },
    en: { title: "Quantum Generator", sub: "AI at your service.", name: "Business Name *", prof: "Profile *", slang: "Site Language *", col: "Color *", mail: "Email *", tel: "Phone *", gen: "Generate (.zip)", err_req: "Field required", err_lang: "Choose language", err_mail: "Invalid email", err_ind: "Choose code", err_tel: "Expected format: ", dark: "Dark Mode", light: "Light Mode", reset: "Reset" },
    es: { title: "Generador Quantum", sub: "IA a su servicio.", name: "Nombre Empresa *", prof: "Perfil *", slang: "Idioma *", col: "Color *", mail: "Email *", tel: "Telé *", gen: "Generar (.zip)", err_req: "Requerido", err_lang: "Elija idioma", err_mail: "Inválido", err_ind: "Prefijo", err_tel: "Formato: ", dark: "Oscuro", light: "Claro", reset: "Reiniciar" },
    it: { title: "Generatore Quantum", sub: "IA al tuo servizio.", name: "Azienda *", prof: "Profilo *", slang: "Lingua *", col: "Colore *", mail: "Email *", tel: "Tel *", gen: "Genera (.zip)", err_req: "Richiesto", err_lang: "Lingua", err_mail: "Email errata", err_ind: "Prefisso", err_tel: "Formato: ", dark: "Scuro", light: "Chiaro", reset: "Reset" },
    de: { title: "Quantum Generator", sub: "KI zu Ihren Diensten.", name: "Firma *", prof: "Profil *", slang: "Sprache *", col: "Farbe *", mail: "Email *", tel: "Tel *", gen: "Generieren (.zip)", err_req: "Pflichtfeld", err_lang: "Sprache", err_mail: "Ungültig", err_ind: "Vorwahl", err_tel: "Format: ", dark: "Dunkel", light: "Hell", reset: "Reset" },
    pt: { title: "Gerador Quantum", sub: "IA ao seu serviço.", name: "Empresa *", prof: "Perfil *", slang: "Idioma *", col: "Cor *", mail: "Email *", tel: "Tel *", gen: "Gerar (.zip)", err_req: "Obrigatório", err_lang: "Idioma", err_mail: "Inválido", err_ind: "Prefixo", err_tel: "Formato: ", dark: "Escuro", light: "Claro", reset: "Reset" },
    nl: { title: "Quantum Generator", sub: "AI tot uw dienst.", name: "Bedrijf *", prof: "Beroep *", slang: "Taal *", col: "Kleur *", mail: "Email *", tel: "Tel *", gen: "Genereren (.zip)", err_req: "Verplicht", err_lang: "Taal", err_mail: "Ongeldig", err_ind: "Landcode", err_tel: "Format: ", dark: "Donker", light: "Licht", reset: "Reset" },
    no: { title: "Quantum Generator", sub: "AI til tjeneste.", name: "Bedrift *", prof: "Yrke *", slang: "Språk *", col: "Farge *", mail: "E-post *", tel: "Tlf *", gen: "Generer (.zip)", err_req: "Påkrevd", err_lang: "Språk", err_mail: "Ugyldig", err_ind: "Retningsnr", err_tel: "Format: ", dark: "Mørk", light: "Lys", reset: "Reset" },
    se: { title: "Quantum Generator", sub: "AI till din tjänst.", name: "Företag *", prof: "Yrke *", slang: "Språk *", col: "Färg *", mail: "Email *", tel: "Tel *", gen: "Generera (.zip)", err_req: "Obligatorisk", err_lang: "Språk", err_mail: "Ogiltig", err_ind: "Kod", err_tel: "Format: ", dark: "Mørkt", light: "Ljust", reset: "Reset" },
    fi: { title: "Quantum Generator", sub: "AI palveluksessasi.", name: "Yritys *", prof: "Ammatti *", slang: "Kieli *", col: "Väri *", mail: "Email *", tel: "Puh *", gen: "Luo (.zip)", err_req: "Pakollinen", err_lang: "Kieli", err_mail: "Virheellinen", err_ind: "Suunta", err_tel: "Muoto: ", dark: "Tumma", light: "Vaalea", reset: "Nollaa" },
    pl: { title: "Generator Quantum", sub: "AI w służbie.", name: "Firma *", prof: "Zawód *", slang: "Język *", col: "Kolor *", mail: "Email *", tel: "Tel *", gen: "Generuj (.zip)", err_req: "Wymagane", err_lang: "Język", err_mail: "Niepoprawny", err_ind: "Kod", err_tel: "Format: ", dark: "Ciemny", light: "Jasny", reset: "Reset" },
    ru: { title: "Квантовый генератор", sub: "ИИ к услугам.", name: "Название *", prof: "Профиль *", slang: "Язык *", col: "Цвет *", mail: "Email *", tel: "Тел *", gen: "Создать (.zip)", err_req: "Обязательно", err_lang: "Язык", err_mail: "Ошибка", err_ind: "Код", err_tel: "Формат: ", dark: "Темный", light: "Светлый", reset: "Сброс" },
    tr: { title: "Kuantum Oluşturucu", sub: "AI hizmetinizde.", name: "Şirket *", prof: "Meslek *", slang: "Dil *", col: "Renk *", mail: "E-posta *", tel: "Tel *", gen: "Oluştur (.zip)", err_req: "Gerekli", err_lang: "Dil", err_mail: "Geçersiz", err_ind: "Kod", err_tel: "Format: ", dark: "Koyu", light: "Açık", reset: "Sıfırla" },
    zh: { title: "量子生成器", sub: "AI 为您服务", name: "公司名称 *", prof: "职业 *", slang: "语言 *", col: "颜色 *", mail: "电邮 *", tel: "电话 *", gen: "生成 (.zip)", err_req: "必填", err_lang: "语言", err_mail: "错误", err_ind: "区号", err_tel: "格式: ", dark: "深色", light: "浅色", reset: "重置" },
    ja: { title: "量子生成器", sub: "AIサービス", name: "会社名 *", prof: "職業 *", slang: "言語 *", col: "色 *", mail: "メール *", tel: "電話 *", gen: "生成 (.zip)", err_req: "必須", err_lang: "言語", err_mail: "エラー", err_ind: "番号", err_tel: "形式: ", dark: "ダーク", light: "ライト", reset: "リセット" },
    ko: { title: "퀀텀 생성기", sub: "AI 서비스", name: "회사명 *", prof: "직업 *", slang: "언어 *", col: "색상 *", mail: "이메일 *", tel: "전화 *", gen: "生成 (.zip)", err_req: "필수", err_lang: "언어", err_mail: "오류", err_ind: "코드", err_tel: "형식: ", dark: "다크", light: "라이트", reset: "초기화" }
};

const PROFILES = [
    { id: "rest", icon: "🍴", fr: "Restaurant", en: "Restaurant", es: "Restaurante", it: "Ristorante", de: "Restaurant", pt: "Restaurante", nl: "Restaurant", no: "Restaurant", se: "Restaurang", fi: "Ravintola", pl: "Restauracja", ru: "Ресторан", tr: "Restoran", zh: "餐厅", ja: "レストラン", ko: "레스토랑" },
    { id: "dev", icon: "💻", fr: "Développeur", en: "Developer", es: "Desarrollador", it: "Sviluppatore", de: "Entwickler", pt: "Programador", nl: "Ontwikkelaar", no: "Utvikler", se: "Utvecklare", fi: "Kehittäjä", pl: "Programista", ru: "Разработчик", tr: "Geliştirici", zh: "开发人员", ja: "開発者", ko: "개발자" },
    { id: "law", icon: "⚖️", fr: "Avocat", en: "Lawyer", es: "Abogado", it: "Avvocato", de: "Rechtsanwalt", pt: "Advogado", nl: "Advocaat", no: "Advokat", se: "Advokat", fi: "Asianajaja", pl: "Prawnik", ru: "Адвокат", tr: "Avukat", zh: "律师", ja: "弁護士", ko: "변호사" },
    { id: "fit", icon: "🏋️", fr: "Coach Sportif", en: "Fitness Coach", es: "Entrenador", it: "Personal Trainer", de: "Fitnesstrainer", pt: "Treinador", nl: "Fitnesstrainer", no: "Trener", se: "Tränare", fi: "Valmentaja", pl: "Trener", ru: "Тренер", tr: "Spor Eğitmeni", zh: "健身教练", ja: "フィットネスコーチ", ko: "피트니스 코치" },
    { id: "med", icon: "🩺", fr: "Médecin", en: "Doctor", es: "Médico", it: "Medico", de: "Arzt", pt: "Médico", nl: "Arts", no: "Lege", se: "Läkare", fi: "Lääkäri", pl: "Lekarz", ru: "Врач", tr: "Doktor", zh: "医生", ja: "医師", ko: "의사" },
    { id: "art", icon: "🎨", fr: "Artiste", en: "Artist", es: "Artista", it: "Artista", de: "Künstler", pt: "Artista", nl: "Artiest", no: "Kunstner", se: "Konstnär", fi: "Taiteilija", pl: "Artysta", ru: "Художник", tr: "Sanatçı", zh: "艺术家", ja: "アーティスト", ko: "아티스트" },
    { id: "bake", icon: "🥐", fr: "Boulanger", en: "Baker", es: "Panadero", it: "Panettiere", de: "Bäcker", pt: "Padeiro", nl: "Bakker", no: "Baker", se: "Bagare", fi: "Leipuri", pl: "Piekarz", ru: "Пекарь", tr: "Fırıncı", zh: "面包师", ja: "パン屋", ko: "제빵사" },
    { id: "arch", icon: "📐", fr: "Architecte", en: "Architect", es: "Architecto", it: "Architetto", de: "Architekt", pt: "Arquiteto", nl: "Architect", no: "Arkitekt", se: "Arkitekt", fi: "Arkkitehti", pl: "Architekt", ru: "Архитектор", tr: "Mimar", zh: "建筑师", ja: "建築家", ko: "건축가" },
    { id: "photo", icon: "📸", fr: "Photographe", en: "Photographer", es: "Fotógrafo", it: "Fotografo", de: "Fotograf", pt: "Fotógrafo", nl: "Fotograaf", no: "Fotograf", se: "Fotograf", fi: "Valokuvaaja", pl: "Fotograf", ru: "Фотограф", tr: "Fotoğrafçı", zh: "摄影师", ja: "写真家", ko: "사진작가" },
    { id: "shop", icon: "🛍️", fr: "Boutique", en: "Shop", es: "Tienda", it: "Negozio", de: "Geschäft", pt: "Loja", nl: "Winkel", no: "Butikk", se: "Butik", fi: "Kauppa", pl: "Sklep", ru: "Магазин", tr: "Mağaza", zh: "商店", ja: "ショップ", ko: "상점" },
    { id: "barb", icon: "💈", fr: "Barbier", en: "Barber", es: "Barbero", it: "Barbiere", de: "Barbier", pt: "Barbeiro", nl: "Kapper", no: "Frisør", se: "Frisör", fi: "Parturi", pl: "Barber", ru: "Барбер", tr: "Berber", zh: "理发师", ja: "理髪店", ko: "이발사" },
    { id: "build", icon: "🏗️", fr: "Construction", en: "Construction", es: "Construcción", it: "Costruzioni", de: "Bauwesen", pt: "Construção", nl: "Bouw", no: "Bygg", se: "Bygg", fi: "Rakennus", pl: "Budownictwo", ru: "Строительство", tr: "İnşaat", zh: "建筑业", ja: "建設", ko: "건설" },
    { id: "tech", icon: "🔌", fr: "Électricien", en: "Electrician", es: "Electricista", it: "Elettricista", de: "Elektriker", pt: "Eletricista", nl: "Elektricien", no: "Elektriker", se: "Elektriker", fi: "Sähköasentaja", pl: "Elektryk", ru: "Электрик", tr: "Elektrikçi", zh: "电工", ja: "電気技師", ko: "전기 기사" },
    { id: "clean", icon: "🧹", fr: "Nettoyage", en: "Cleaning", es: "Limpieza", it: "Pulizie", de: "Reinigung", pt: "Limpeza", nl: "Schoonmaak", no: "Rengjøring", se: "Städning", fi: "Siivous", pl: "Sprzątanie", ru: "Уборка", tr: "Temizlik", zh: "清洁", ja: "クリーニング", ko: "청소" },
    { id: "auto", icon: "🚗", fr: "Mécanicien", en: "Mechanic", es: "Mecánico", it: "Meccanico", de: "Mechaniker", pt: "Mecânico", nl: "Monteur", no: "Mekaniker", se: "Mekaniker", fi: "Mekaanikko", pl: "Mechanik", ru: "Механик", tr: "Tamirci", zh: "机修工", ja: "整備士", ko: "정비사" },
    { id: "music", icon: "🎵", fr: "Musicien", en: "Musician", es: "Músico", it: "Musicista", de: "Musiker", pt: "Músico", nl: "Muzikant", no: "Musiker", se: "Musiker", fi: "Muusikko", pl: "Muzyk", ru: "Музыкан特", tr: "Müzisyen", zh: "音乐家", ja: "ミュージシャン", ko: "뮤지션" },
    { id: "dent", icon: "🦷", fr: "Dentiste", en: "Dentist", es: "Dentista", it: "Dentista", de: "Zahnarzt", pt: "Dentista", nl: "Tandarts", no: "Tannlege", se: "Tandläkare", fi: "Hammaslääkäri", pl: "Dentysta", ru: "Стоматолог", tr: "Diş Hekimi", zh: "牙医", ja: "歯科医", ko: "치과 의사" },
    { id: "farm", icon: "🚜", fr: "Agriculteur", en: "Farmer", es: "Agricultor", it: "Agricoltore", de: "Landwirt", pt: "Agricultor", nl: "Boer", no: "Bonde", se: "Bonde", fi: "Maanviljelijä", pl: "Rolnik", ru: "Фермер", tr: "Çiftçi", zh: "农民", ja: "農家", ko: "농부" },
    { id: "yoga", icon: "🧘", fr: "Coach Yoga", en: "Yoga Instructor", es: "Profesor de Yoga", it: "Insegnante Yoga", de: "Yogalehrer", pt: "Instrutor de Yoga", nl: "Yogaleraar", no: "Yogalærer", se: "Yogalärare", fi: "Jooga-ohjaaja", pl: "Instruktor Jogi", ru: "Йога", tr: "Yoga Eğitmeni", zh: "瑜伽教练", ja: "ヨガインストラクター", ko: "요가 강사" },
    { id: "secu", icon: "🛡️", fr: "Sécurité", en: "Security", es: "Seguridad", it: "Sicurezza", de: "Sicherheit", pt: "Segurança", nl: "Beveiliging", no: "Sikkerhet", se: "Säkerhet", fi: "Turvallisuus", pl: "Ochrona", ru: "Безопасность", tr: "Güvenlik", zh: "安保", ja: "警備", ko: "보안" },
    { id: "pet", icon: "🐾", fr: "Garde d'animaux", en: "Pet Sitter", es: "Cuidador de Mascotas", it: "Pet Sitter", de: "Tiersitter", pt: "Pet Sitter", nl: "Oppas", no: "Dyrepasser", se: "Djurvakt", fi: "Lemmikkien hoitaja", pl: "Opiekun zwierząt", ru: "Уход за животными", tr: "Evcil Hayvan Bakıcısı", zh: "宠物看护", ja: "ペットシッター", ko: "펫시터" },
    { id: "tutor", icon: "📚", fr: "Professeur", en: "Tutor", es: "Tutor", it: "Tutor", de: "Nachhilfelehrer", pt: "Tutor", nl: "Leraar", no: "Lærer", se: "Lärare", fi: "Opettaja", pl: "Nauczyciel", ru: "Репетитор", tr: "Özel Ders", zh: "导师", ja: "チューター", ko: "튜터" },
    { id: "event", icon: "🎉", fr: "Événementiel", en: "Events Planner", es: "Eventos", it: "Eventi", de: "Eventplaner", pt: "Eventos", nl: "Evenementen", no: "Eventplanlegger", se: "Eventplanerare", fi: "Tapahtumajärjestäjä", pl: "Organizacja imprez", ru: "Мероприятия", tr: "Etkinlik Planlayıcı", zh: "活动策划", ja: "イベントプランナー", ko: "이벤트 플래너" },
    { id: "real", icon: "🏠", fr: "Immobilier", en: "Real Estate", es: "Inmobiliaria", it: "Immobiliare", de: "Immobilien", pt: "Imobiliária", nl: "Vastgoed", no: "Eiendom", se: "Fastighet", fi: "Kiinteistönvälitys", pl: "Nieruchomości", ru: "Недвижимость", tr: "Emlak", zh: "房地产", ja: "不動産", ko: "부동산" }
];

document.addEventListener("DOMContentLoaded", () => {
    const uiLang = document.getElementById("uiLangSelect");
    const siteLang = document.getElementById("siteLangSelect");
    const countrySel = document.getElementById("countryCode");
    const profSel = document.getElementById("profileSelect");
    const bizInp = document.getElementById("businessName");
    const emailInp = document.getElementById("email");
    const phoneInp = document.getElementById("phone");
    const form = document.getElementById("siteForm");
    const bg = document.getElementById("dynamicBg");
    const primaryColInp = document.getElementById("primaryColor");
    const resetBtn = document.getElementById("resetBtn");

    let hasSubmitted = false;

    function init() {
        LANGUAGES.forEach(l => { uiLang.innerHTML += `<option value="${l.id}">${l.name}</option>`; });
        for(let i=0; i<130; i++) {
            const f = document.createElement("div");
            f.className = "snow-blob";
            const size = Math.random()*8+3;
            f.style.width = f.style.height = size + "px";
            f.style.left = Math.random()*100 + "vw";
            f.style.animationDuration = (Math.random()*4+4) + "s";
            f.style.animationDelay = (Math.random()*-15) + "s";
            f.style.opacity = Math.random()*0.4 + 0.2;
            bg.appendChild(f);
        }
        const COLORS = ["#2563eb", "#dc2626", "#059669", "#7c3aed", "#f97316", "#111827", "#e11d48", "#db2777", "#a855f7", "#6366f1", "#0891b2", "#16a34a", "#ca8a04", "#fb7185", "#34d399", "#475569", "#1e40af", "#b91c1c", "#065f46", "#6d28d9", "#be123c", "#155e75", "#166534", "#854d0e", "#10b981", "#64748b"];
        const palette = document.getElementById("colorPalette");
        COLORS.forEach((c, idx) => {
            const sw = document.createElement("div");
            sw.className = "color-swatch" + (idx === 0 ? " selected" : "");
            sw.style.backgroundColor = c;
            sw.onclick = () => {
                document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("selected"));
                sw.classList.add("selected");
                document.documentElement.style.setProperty('--accent', c);
                primaryColInp.value = c;
                updateSnowColor();
                if(hasSubmitted) validateAll();
            };
            palette.appendChild(sw);
        });
        updateSnowColor();
    }

    function updateSnowColor() {
        const accent = primaryColInp.value;
        document.querySelectorAll(".snow-blob").forEach(f => {
            f.style.background = accent;
            f.style.boxShadow = `0 0 10px ${accent}`;
        });
    }

    function getSelectedCountryData() {
        const val = countrySel.value;
        return LANGUAGES.find(l => l.country === val) || LANGUAGES[0];
    }

    function validateField(el) {
        const id = uiLang.value;
        const s = DICT[id] || DICT.en;
        const cData = getSelectedCountryData();
        let ok = true, msg = "";
        if (el === bizInp) { ok = el.value.trim().length > 0; msg = ok ? "" : s.err_req; } 
        else if (el === profSel) { ok = el.value !== "default"; msg = ok ? "" : s.err_req; } 
        else if (el === siteLang) { ok = el.value !== "default"; msg = ok ? "" : s.err_lang; } 
        else if (el === emailInp) { ok = /^\S+@\S+\.\S+$/.test(el.value); msg = el.value.length === 0 ? s.err_req : (ok ? "" : s.err_mail); }
        else if (el === countrySel) { ok = el.value !== "default"; msg = ok ? "" : s.err_ind; } 
        else if (el === phoneInp) {
            if (el.value.length === 0) { ok = false; msg = s.err_req; }
            else { ok = cData.reg.test(el.value); msg = ok ? "" : s.err_tel + cData.phT; }
        }
        const errDiv = document.getElementById("err-" + el.id);
        if (hasSubmitted || (el.tagName === "SELECT" ? el.value !== "default" : el.value.length > 0)) {
            el.classList.toggle("invalid", !ok);
            el.classList.toggle("valid", ok);
            if(errDiv) errDiv.textContent = msg;
        }
        return ok;
    }

    function validateAll() { [bizInp, emailInp, phoneInp, profSel, siteLang, countrySel].forEach(i => validateField(i)); }

    function updateUI(mode = null) {
        const id = uiLang.value;
        const s = DICT[id] || DICT.en;
        const cur = LANGUAGES.find(l => l.id === id) || LANGUAGES[0];
        document.getElementById("ui-title").textContent = s.title;
        document.getElementById("ui-subtitle").textContent = s.sub;
        document.getElementById("ui-label-name").textContent = s.name;
        document.getElementById("ui-label-profile").textContent = s.prof;
        document.getElementById("ui-label-site-lang").textContent = s.slang;
        document.getElementById("ui-label-email").textContent = s.mail;
        document.getElementById("ui-label-phone").textContent = s.tel;
        document.getElementById("ui-text-gen").textContent = s.gen;
        document.getElementById("ui-reset-text").textContent = s.reset;
        document.getElementById("ui-theme-text").textContent = document.body.classList.contains("dark-theme") ? s.light : s.dark;
        bizInp.placeholder = cur.phN;
        emailInp.placeholder = cur.phE;
        const populate = (el, def, list, type) => {
            const old = el.value;
            el.innerHTML = `<option value="default">${def}</option>`;
            list.forEach(item => {
                let v, t;
                if(type==='lang'){ v=item.id; t=`${item.flag} ${item.name}`; }
                else if(type==='prof'){ v=item.id; t=`${item.icon} ${item[id] || item.en}`; }
                else if(type==='country'){ v=item.country; t=`${item.flag} ${item.country}`; }
                el.innerHTML += `<option value="${v}" ${v===old ? 'selected' : ''}>${t}</option>`;
            });
        };
        populate(profSel, cur.optM, PROFILES, 'prof');
        populate(siteLang, cur.optL, LANGUAGES, 'lang');
        populate(countrySel, cur.optI, LANGUAGES, 'country');
        if(mode === 'init' || (countrySel.value === "default" && !hasSubmitted)) { countrySel.value = cur.country; }
        const activeC = getSelectedCountryData();
        phoneInp.placeholder = activeC.phT;
        if (hasSubmitted || document.querySelector('.invalid')) validateAll();
    }

    // FONCTION DE TÉLÉCHARGEMENT ZIP RÉELLE
    async function downloadZip() {
        const zip = new JSZip();
        const bizName = bizInp.value;
        const color = primaryColInp.value;
        
        // Fichier HTML généré
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>${bizName}</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f4; color: #333; text-align: center; padding: 50px; }
        h1 { color: ${color}; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Welcome to ${bizName}</h1>
        <p>Profession: ${profSel.options[profSel.selectedIndex].text}</p>
        <p>Contact: ${emailInp.value}</p>
        <p>Phone: ${countrySel.value} ${phoneInp.value}</p>
    </div>
</body>
</html>`;

        zip.file("index.html", htmlContent);
        const content = await zip.generateAsync({type:"blob"});
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = `${bizName.replace(/\s+/g, '_')}_quantum_site.zip`;
        link.click();
    }

    resetBtn.onclick = () => {
        hasSubmitted = false;
        form.reset();
        [bizInp, emailInp, phoneInp, profSel, siteLang, countrySel].forEach(i => {
            i.classList.remove("invalid", "valid");
            const errDiv = document.getElementById("err-" + i.id);
            if(errDiv) errDiv.textContent = "";
        });
        const firstSwatch = document.querySelector(".color-swatch");
        if(firstSwatch) firstSwatch.click();
        uiLang.value = "fr";
        updateUI('init');
    };

    uiLang.onchange = () => updateUI();
    countrySel.onchange = () => {
        const activeC = getSelectedCountryData();
        phoneInp.placeholder = activeC.phT;
        validateField(phoneInp);
    };

    [bizInp, emailInp, phoneInp, profSel, siteLang, countrySel].forEach(i => { i.oninput = () => validateField(i); });

    document.getElementById("themeToggle").onclick = () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
        updateUI();
    };

    form.onsubmit = async (e) => {
        e.preventDefault();
        hasSubmitted = true;
        let allOk = true;
        [bizInp, emailInp, phoneInp, profSel, siteLang, countrySel].forEach(i => { if(!validateField(i)) allOk = false; });
        
        if(allOk) {
            const r = document.querySelector(".rocket");
            r.classList.add("rocket-launch"); // Déclenche la rotation + décollage
            
            // Attendre la fin de l'animation pour télécharger
            setTimeout(async () => {
                await downloadZip();
                r.classList.remove("rocket-launch");
            }, 1500);
        }
    };

    init();
    updateUI('init');
});

function getFullHTMLTemplate(pageName, lang) {
    const isRtl = lang === 'ar' ? 'dir="rtl"' : 'dir="ltr"';
    return `<!DOCTYPE html>
<html lang="${lang}" ${isRtl}>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{NAME}} | ${pageName}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header style="background: {{COLOR}}">
        <div class="container">
            <nav class="nav">
                <div class="logo">{{NAME}}</div>
                <div class="links">
                    <a href="index.html">Accueil</a>
                    <a href="about.html">À propos</a>
                    <a href="contact.html">Contact</a>
                </div>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <h1>{{TAGLINE}}</h1>
            <p>{{DESC}}</p>
        </section>

        <section class="carousel-section">
            <div class="carousel-container" id="carousel">
                <div class="card"><span>📸</span><p>{{CAP1}}</p></div>
                <div class="card"><span>📸</span><p>{{CAP2}}</p></div>
                <div class="card"><span>📸</span><p>{{CAP3}}</p></div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 {{NAME}} - {{EMAIL}}</p>
    </footer>
    <script src="carousel.js"></script>
</body>
</html>`;
}

function getSiteCSS(color) {
    return `
body { font-family: 'Segoe UI', sans-serif; margin: 0; color: #333; line-height: 1.6; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
header { padding: 20px 0; color: white; }
.nav { display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 1.5rem; font-weight: bold; }
.links a { color: white; text-decoration: none; margin-left: 20px; }
.hero { text-align: center; padding: 100px 20px; background: #f4f4f4; }
.carousel-section { padding: 50px 0; background: #fff; overflow: hidden; }
.carousel-container { display: flex; gap: 20px; justify-content: center; }
.card { width: 300px; height: 200px; background: #eee; border: 2px solid ${color}; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; }
.card span { font-size: 3rem; }
footer { background: #222; color: #999; text-align: center; padding: 40px 0; margin-top: 50px; }
`;
}

function getSiteJS() {
    return `
console.log("Site généré chargé.");
const track = document.getElementById('carousel');
// Simulation simple de carrousel
if(track) {
    console.log("Carrousel actif pour ce profil.");
}
`;
}