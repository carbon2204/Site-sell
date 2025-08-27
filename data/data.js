var path = ""; // /test/mp/to_redirect_folder/pr_bel/

// Объект для хранения данных используемых на страницу
const belhardSiteData = {
  // Default language
  currentLanguage: "ru",
  languages: [
    ["ru", path + "src/assets/controlElements/ru.png"],
    ["by", path + "src/assets/controlElements/by.png"],
    ["en", path + "src/assets/controlElements/en.png"],
  ],

  // Свойство currentMenuItem указывает индекс текущего активного пункта меню в навигационной панели сайта.
  // Значение 0 означает, что по умолчанию выбран первый элемент меню, обеспечивая начальное состояние интерфейса навигации.
  currentMenuItem: 0,

  // Массив visiblePointTypes определяет видимость различных типов точек интереса на карте или в интерфейсе сайта.
  // Содержит три элемента, каждый из которых соответствует определённому типу: церкви (индекс 0), святые (индекс 1) и монументы (индекс 2).
  // Значение 1 указывает на то, что все эти типы точек видимы, обеспечивая управление отображением контента в зависимости от настроек.
  visiblePointTypes: [
    1, //церкви
    1, //святые
    1, //монументы
  ],

  // заголовок главной страницы
  title: {
    ru: ["Продажа сайтов"],
    en: ["Website sellings"],
    by: ["Продаж сайтаў"],
  },

  favicon: path + "src/assets/favicon/favicon.png", // путь для иконки страницы, папки src - assets - favicon и затем название изоюражения.расширение

  targetY: 200, // Координата по Y (в пикселях), с которой будет доступна кнопка для прокрутки страницы вверх
  searchWidth: 250, // Ширина поля поиска (в пикселях)

  // под-объект для хранения путей к иконкам поиска, открытия, закрытия меню и кнопки прокрутки страницы вверх, а также шаблон для пустого поля поиска
  controlElements: {
    searchIcon: path + "src/assets/controlElements/searchMenuButton.png", // путь к иконке для поиска, папки src - assets - controlElements и затем название изоюражения.расширение
    scrollPageUpIcon: path + "src/assets/controlElements/scrollUpButton.png", // путь к иконке для прокрутки страницы вверх, папки src - assets - controlElements и затем название изоюражения.расширение
    openSidebarIcon: path + "src/assets/controlElements/openMenuButton.png", // путь к иконке для открытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    dotsSidebarIcon: path + "src/assets/controlElements/dots.png", // путь к иконке для открытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    closeSidebarIcon: path + "src/assets/controlElements/closeMenuButton.png", // путь к иконке для закрытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    searchPlaceholder: {
      ru: [
        "Поиск...", // шаблонный текст, который будет содежать пустое поле поиска
      ],
      en: ["Search..."],
    },
  },

  // под-объект для хранения размеров иконок поиска, открытия, закрытия меню
  controlElementsSizes: {
    //должны быть указаны еденицы измерения
    searchIcon: "24px", //размер иконки поиска
    openSidebarIcon: "40px", //размер иконки открытия меню
    closeSidebarIcon: "32px", //размер иконки закрытия меню
  },

  // Объект navBar определяет структуру и содержимое навигационной панели сайта с поддержкой русского (ru) и английского (en) языков.
  // navBarElements содержит массив элементов меню (id, parent, state, formId, scripts, type) для построения иерархии и управления поведением,
  // включая вызов скриптов и типы действий (rebuild, none). navBarText предоставляет переводы названий пунктов меню, охватывающих услуги,
  // портфолио, блог и контакты. Дополнительно searchConfig, searchResultText, searchType и searchMessages задают настройки поиска,
  // текст результатов, типы поиска и сообщения, обеспечивая функциональность навигации и поиска с многоязычной поддержкой.
  navBar: {
    navBarElements: [
      { "id": "1", "parent": "0", "state": "1", "formId": "0", "scripts": [0, 13], "type": "rebuild" },
      { "id": "2", "parent": "0", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      { "id": "3", "parent": "0", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      { "id": "4", "parent": "0", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      { "id": "5", "parent": "0", "state": "1", "formId": "11", "scripts": [], "type": "none" },
      { "id": "6", "parent": "0", "state": "1", "formId": "0", "scripts": [], "type": "none" },
      { "id": "7", "parent": "4", "state": "1", "formId": "6", "scripts": [], "type": "none" },
      { "id": "8", "parent": "4", "state": "1", "formId": "7", "scripts": [], "type": "none" },
      { "id": "9", "parent": "4", "state": "1", "formId": "8", "scripts": [], "type": "none" },
      { "id": "10", "parent": "4", "state": "1", "formId": "9", "scripts": [], "type": "none" },
      { "id": "11", "parent": "0", "state": "1", "formId": "10", "scripts": [], "type": "none" },
      { "id": "12", "parent": "2", "state": "1", "formId": "1", "scripts": [], "type": "none" },
      { "id": "13", "parent": "2", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      { "id": "14", "parent": "3", "state": "1", "formId": "3", "scripts": [], "type": "none" },
      { "id": "15", "parent": "3", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      { "id": "16", "parent": "15", "state": "1", "formId": "4", "scripts": [], "type": "none" },
      { "id": "17", "parent": "15", "state": "1", "formId": "5", "scripts": [], "type": "none" },
      { "id": "18", "parent": "0", "state": "1", "formId": "12", "scripts": [], "type": "none" }
    ],
    navBarText: {
      ru: [
        "Создание сайтов", // id: 1 (index 0)
        "Портфолио", // id: 2 (index 1)
        "Блог", // id: 3 (index 2)
        "Услуги", // id: 4 (index 3)
        "Часто задаваемые вопросы", // id: 5 (index 4)
        "Контакты", // id: 6 (index 5)
        "Лендинги", // id: 7 (index 6)
        "Интернет-магазины", // id: 8 (index 7)
        "SEO-продвижение", // id: 9 (index 8)
        "Контекстная реклама", // id: 10 (index 9)
        "Наши клиенты", // id: 11 (index 10)
        "Веб-дизайн", // id: 12 (index 11)
        "Разработка сайтов", // id: 13 (index 12)
        "История компании", // id: 14 (index 13)
        "Типы сайтов", // id: 15 (index 14)
        "Корпоративные сайты", // id: 16 (index 15)
        "Сайты-визитки", // id: 17 (index 16)
        "Личный кабинет", // id: 18 (index 17)
        "Результаты поиска", // searchResultText (index 18)
        "Проект", // searchType[0] (index 19)
        "Услуга", // searchType[1] (index 20)
        "Введите запрос для поиска", // searchMessages[0] (index 21)
        "Ничего не найдено" // searchMessages[1] (index 22)
      ],
      en: [
        "Website Development", // id: 1 (index 0)
        "Portfolio", // id: 2 (index 1)
        "Blog", // id: 3 (index 2)
        "Services", // id: 4 (index 3)
        "Frequently Asked Questions", // id: 5 (index 4)
        "Contacts", // id: 6 (index 5)
        "Landing Pages", // id: 7 (index 6)
        "Online Stores", // id: 8 (index 7)
        "SEO Promotion", // id: 9 (index 8)
        "Contextual Advertising", // id: 10 (index 9)
        "Our Clients", // id: 11 (index 10)
        "Web Design", // id: 12 (index 11)
        "Website Creation", // id: 13 (index 12)
        "Company History", // id: 14 (index 13)
        "Website Types", // id: 15 (index 14)
        "Corporate Websites", // id: 16 (index 15)
        "Business Card Websites", // id: 17 (index 16)
        "Personal Account", // id: 18 (index 17)
        "Search Results", // searchResultText (index 18)
        "Project", // searchType[0] (index 19)
        "Service", // searchType[1] (index 20)
        "Enter your search query", // searchMessages[0] (index 21)
        "Nothing found" // searchMessages[1] (index 22)
      ],
      by: [
        "Стварэнне сайтаў", // id: 1 (index 0)
        "Партфоліо", // id: 2 (index 1)
        "Блог", // id: 3 (index 2)
        "Паслугі", // id: 4 (index 3)
        "Часта задаваныя пытанні", // id: 5 (index 4)
        "Кантакты", // id: 6 (index 5)
        "Лэндзінгі", // id: 7 (index 6)
        "Інтэрнэт-крамы", // id: 8 (index 7)
        "SEO-прасоўванне", // id: 9 (index 8)
        "Кантэкстная рэклама", // id: 10 (index 9)
        "Нашы кліенты", // id: 11 (index 10)
        "Вэб-дызайн", // id: 12 (index 11)
        "Распрацоўка сайтаў", // id: 13 (index 12)
        "Гісторыя кампаніі", // id: 14 (index 13)
        "Тыпы сайтаў", // id: 15 (index 14)
        "Карпаратыўныя сайты", // id: 16 (index 15)
        "Сайты-візітоўкі", // id: 17 (index 16)
        "Асабісты кабінет", // id: 18 (index 17)
        "Вынікі пошуку", // searchResultText (index 18)
        "Праект", // searchType[0] (index 19)
        "Паслуга", // searchType[1] (index 20)
        "Увядзіце запыт для пошуку", // searchMessages[0] (index 21)
        "Нічога не знойдзена" // searchMessages[1] (index 22)
      ],
    },
    searchConfig: [1, 16, 9, 13],
    searchResultText: {
      ru: "Результаты поиска",
      en: "Search results",
    },
    searchType: {
      ru: [
        "Новость",
        "Анонс",
      ],
      en: [
        "News",
        "Announcement",
      ],
    },
    searchMessages: {
      ru: [
        'Введите текст для поиска',
        'Ничего не найдено'
      ],
      en: [
        'Enter the search text',
        'Nothing to show'
      ],
    }
  },

  // Объекты mainTextContent и companyData содержат данные для главной секции сайта и информации о компании с переводами на русский (ru) и английский (en) языки.
  // mainTextContent включает заголовок, подзаголовок, текст кнопки, сообщение уведомления и вертикальный текст (повторяющийся 100 раз для эффекта полосы) для приветствия пользователей.
  mainTextContent: {
    texts: {
      ru: [
          "WebFlow Solutions", // name [index 0]
          "Логотип WebFlow", // logoAlt [index 1]
          "О нас", // aboutTitle [index 2]
          "Мы - WebFlow Solutions, команда экспертов в создании современных веб-сайтов и приложений. Наша цель - помогать бизнесу процветать в цифровой среде через уникальный дизайн и надежные технические решения.", // aboutText1 [index 3]
          "Сочетая креативность и передовые технологии, мы пропонуем полный цикл разработки - от идеи до запуска. Доверяйте нам свои проекты, и мы воплотим их в жизнь с максимальной эффективностью!", // aboutText2 [index 4]
          "Разработка сайтов", // serviceTitle [index 5]
          "Заказать сайт" // buttonText [index 6]
      ],
      en: [
          "WebFlow Solutions", // name [index 0]
          "WebFlow Logo", // logoAlt [index 1]
          "About Us", // aboutTitle [index 2]
          "We are WebFlow Solutions, a team of experts in creating modern websites and applications. Our goal is to help businesses thrive in the digital world through unique design and reliable technical solutions.", // aboutText1 [index 3]
          "Combining creativity and cutting-edge technology, we offer a full development cycle - from concept to launch. Trust us with your projects, and we’ll bring them to life with maximum efficiency!", // aboutText2 [index 4]
          "Website Development", // serviceTitle [index 5]
          "Order Website" // buttonText [index 6]
      ],
      by: [
          "WebFlow Solutions", // name [index 0]
          "Лагатып WebFlow", // logoAlt [index 1]
          "Пра нас", // aboutTitle [index 2]
          "Мы - WebFlow Solutions, каманда экспертаў у стварэнні сучасных вэб-сайтаў і прыкладанняў. Наша мэта - дапамагаць бізнесу ўсеяляцца ў лічбавай прасторы праз унікальны дызайн і надзейныя тэхнічныя рашэнні.", // aboutText1 [index 3]
          "Спалучаючы крэатыўнасць і перадавыя тэхналогіі, мы прапануем поўны цыкл распрацоўкі - ад ідэі да запуску. Даверце нам свае праекты, і мы ўвасобім іх у жыццё з максімальнай эфектыўнасцю!", // aboutText2 [index 4]
          "Распрацоўка сайтаў", // serviceTitle [index 5]
          "Замовіць сайт" // buttonText [index 6]
      ]
    },
    logoSrc: "src/assets/pictures/nobacklogo.png",
  },

  // companyData содержит название компании, путь к логотипу, альтернативный текст логотипа, заголовок раздела "О нас" и два абзаца текста, описывающих деятельность компании,
  // её специализацию на инновационных решениях и подход к разработке, обеспечивая многоязычную поддержку и представление бренда.
  companyData: {
    texts: {
      ru: [
        "Продажа сайтов", // name [index 0]
        "Логотип компании", // logoAlt [index 1]
        "Кто мы такие", // aboutTitle [index 2]
        "В компании Tech Innovations Ltd. мы специализируемся на предоставлении передовых программных решений, которые помогают бизнесу достигать своих целей. Ориентируясь на инновации, мы разрабатываем масштабируемые приложения, которые легко интегрируются в цифровую экосистему, обеспечивая вашему бизнесу лидерство на конкурентном рынке.", // aboutText1 [index 3]
        "Наша команда опытных разработчиков, инженеров и дизайнеров работает совместно, чтобы воплощать в жизнь новаторские идеи. Используя новейшие технологии, мы предлагаем клиентам индивидуальные программные решения, адаптированные под их уникальные потребности, что способствует росту и повышению эффективности в различных отраслях." // aboutText2 [index 4]
      ],
      en: [
        "Prodaja saytov", // name [index 0] (замечание: правильнее "Website Sales")
        "Company Logo", // logoAlt [index 1]
        "Who We Are", // aboutTitle [index 2]
        "At Tech Innovations Ltd., we specialize in providing cutting-edge software solutions that empower businesses to achieve their goals. With a focus on innovation, we design and develop scalable applications that integrate seamlessly into the digital ecosystem, ensuring your company stays ahead in the competitive market.", // aboutText1 [index 3]
        "Our team of skilled developers, engineers, and designers work collaboratively to bring forward-thinking ideas to life. By embracing the latest technologies, we provide our clients with bespoke software solutions that are tailored to their unique needs, driving growth and efficiency across various industries." // aboutText2 [index 4]
      ],
      by: [
        "Продаж сайтаў", // name [index 0]
        "Лагатып кампаніі", // logoAlt [index 1]
        "Хто мы такія", // aboutTitle [index 2]
        "У кампаніі Tech Innovations Ltd. мы спецыялізуемся на прадастаўленні перадавых праграмных рашэнняў, якія дапамагаюць бізнесу дасягаць сваіх мэтаў. Арыентуючыся на інавацыі, мы распрацоўваем маштабуемыя праграмы, якія лёгка ўсеяляюцца ў лічбавую экасістэму, забяспечваючы вашаму бізнесу лідэрства на канкурэнтным рынку.", // aboutText1 [index 3]
        "Наша каманда вопытных распрацоўшчыкаў, інжынераў і дызайнераў працуе разам, каб увасобіць у жыццё наватарскія ідэі. Выкарыстоўваючы найноўшыя тэхналогіі, мы прапануем кліентам індывідуальныя праграмныя рашэнні, адаптаваныя пад іх унікальныя патрэбы, што спрыяе росту і павышэнню эфектыўнасці ў розных галінах." // aboutText2 [index 4]
      ]
    },
    logoSrc: "src/assets/pictures/nobacklogo.png"
  },

  // Объект scriptsConfig содержит набор функций (от 0 до 16), определяющих скрипты для создания различных компонентов сайта.
  // Каждая функция отвечает за генерацию определённой части интерфейса: главной страницы, навигационной панели, заголовков, таймлайна,
  // слайдеров, карты, новостей, футера, кнопки прокрутки вверх, переключателя языков и контента страниц. Функции используют данные из
  // belhardSiteData (контент, текущий язык, изображения) и window.defaultStyles (стили), обеспечивая модульную сборку сайта с поддержкой
  // многоязычности и динамического контента.
  scriptsConfig: {
    0: function () {
      createMainPage();
      scrollToTop();
    },
    1: function () {
      createNavBar(belhardSiteData.navBar, belhardSiteData.currentLanguage);
    },
    2: function () {
      createSiteHeader(
        belhardSiteData.siteTitles.title,
        window.defaultStyles.headerStyles,
        belhardSiteData.currentLanguage,
        0
      );
    },
    3: function () {
      createTimeline(
        belhardSiteData.timeLine,
        window.defaultStyles.timeLineStyles
      );
    },
    4: function () {
      createSiteHeader(
        belhardSiteData.siteTitles.title,
        window.defaultStyles.headerStyles,
        belhardSiteData.currentLanguage,
        1
      );
    },
    5: function () {
      createSaintsSlider(
        belhardSiteData.saintsData,
        belhardSiteData.currentLanguage
      );
    },
    6: function () {
      createMap();
    },
    7: function () {
      createNews(
        window.defaultStyles.newsStyles,
        belhardSiteData.news,
        belhardSiteData.currentLanguage
      );
    },
    8: function () {
      createSlider(window.defaultStyles.sliderStyles, belhardSiteData.images);
    },
    9: function () {
      createFooter(
        belhardSiteData,
        window.defaultStyles.footerStyles,
        belhardSiteData.currentLanguage
      );
    },
    10: function () {
      applyGlobalStyles(globalStyles);
    },
    11: function () {
      applyGlobalStyles(navBarCss);
    },
    12: function () {
      createScrollToTopButton(
        window.defaultStyles.buttonStyles,
        belhardSiteData.controlElements.scrollPageUpIcon
      );
    },
    13: function () {
      createLanguageSelect(belhardSiteData.languages);
      initializeNavigation();
    },
    14: function () {
      showCountries(belhardSiteData.currentLanguage);
    },
    15: function (menuItem) {
      createPageContent(
        belhardSiteData,
        window.defaultStyles.pageStyles,
        menuItem,
        belhardSiteData.currentLanguage
      );
    },
    16: function (itemData) {
      createPageContent(
        itemData.data,
        window.defaultStyles.pageStyles,
        itemData,
        belhardSiteData.currentLanguage
      );
    },
  },

  // Объект footer содержит данные для футера сайта, разделённые на общие (независящие от языка) и переведённые на русский (ru) и английский (en) языки.
  // Общие данные включают логотип в первой колонке, контактные данные (телефон, email) и иконки с ссылками на социальные сети (Telegram, Instagram, Facebook) в третьей колонке.
  // Переводы (translations) содержат заголовок и список услуг для второй колонки, заголовок и адрес для третьей колонки, текст авторских прав и стандартные значения
  // для темы и тела email-сообщения, обеспечивая многоязычную поддержку контактной информации и представления услуг компании.
  footer: {
    // Общие данные, не зависящие от языка
    firstColumn: {
      image: path + "src/assets/pictures/nobacklogo.png",
    },
    thirdColumn: {
      columnData: {
        phone: "+375 (17) 325 10 11",
        email: "3ss-pro@mail.ru",
      },
      icons: {
        phone: path + "src/assets/pictures/footer/mobile.png",
        email: path + "src/assets/pictures/footer/mail.png",
        address: path + "src/assets/pictures/footer/location.png",
      },
      socialMedia: {
        telegram: {
          link: "https://t.me/your_telegram",
          icon: path + "src/assets/pictures/socialMedia/telegram.png",
        },
        instagram: {
          link: "https://www.instagram.com/your_instagram",
          icon: path + "src/assets/pictures/socialMedia/instagram.png",
        },
        facebook: {
          link: "https://www.facebook.com/your_facebook",
          icon: path + "src/assets/pictures/socialMedia/facebook.png",
        },
      },
    },
    // Текстовые элементы для разных языков
    texts: {
      ru: [
        "Услуги", // secondColumn.title [index 0]
        "Разработка корпоративных сайтов", // secondColumn.services[0] [index 1]
        "Интернет-магазины под ключ", // secondColumn.services[1] [index 2]
        "Лендинги для продвижения услуг", // secondColumn.services[2] [index 3]
        "SEO-оптимизация и продвижение", // secondColumn.services[3] [index 4]
        "Дизайн и UX/UI проектирование", // secondColumn.services[4] [index 5]
        "Поддержка и обновление сайтов", // secondColumn.services[5] [index 6]
        "Связаться с нами", // thirdColumn.title [index 7]
        "Республика Беларусь, 220088, г.Минск, ул.Дзержинского, 24/2, пом.1025", // thirdColumn.columnData.address [index 8]
        "Все права лицензированы © 2025", // copyright [index 9]
        "Запрос с сайта", // defaultEmailSubject [index 10]
        "Здравствуйте,\n\nСвяжитесь со мной по поводу ваших услуг.\n\nС уважением," // defaultEmailBody [index 11]
      ],
      en: [
        "Services", // secondColumn.title [index 0]
        "Development of corporate websites", // secondColumn.services[0] [index 1]
        "Turnkey online stores", // secondColumn.services[1] [index 2]
        "Landing pages for service promotion", // secondColumn.services[2] [index 3]
        "SEO optimization and promotion", // secondColumn.services[3] [index 4]
        "Design and UX/UI engineering", // secondColumn.services[4] [index 5]
        "Website support and updates", // secondColumn.services[5] [index 6]
        "Contact Us", // thirdColumn.title [index 7]
        "Republic of Belarus, 220088, Minsk, Dzerzhinsky St., 24/2, Office 1025", // thirdColumn.columnData.address [index 8]
        "All rights reserved © 2025", // copyright [index 9]
        "Request from the website", // defaultEmailSubject [index 10]
        "Hello,\n\nPlease contact me regarding your services.\n\nBest regards," // defaultEmailBody [index 11]
      ],
      by: [
        "Паслугі", // secondColumn.title [index 0]
        "Распрацоўка карпаратыўных сайтаў", // secondColumn.services[0] [index 1]
        "Інтэрнэт-крамы пад ключ", // secondColumn.services[1] [index 2]
        "Лэндзінгі для прасоўвання паслуг", // secondColumn.services[2] [index 3]
        "SEO-аптымізацыя і прасоўванне", // secondColumn.services[3] [index 4]
        "Дызайн і UX/UI праектаванне", // secondColumn.services[4] [index 5]
        "Падтрымка і абнаўленне сайтаў", // secondColumn.services[5] [index 6]
        "Звяжыцеся з намі", // thirdColumn.title [index 7]
        "Рэспубліка Беларусь, 220088, г.Мінск, вул.Дзяржынскага, 24/2, пам.1025", // thirdColumn.columnData.address [index 8]
        "Усе правы ўсеялены © 2025", // copyright [index 9]
        "Запыт з сайта", // defaultEmailSubject [index 10]
        "Добры дзень,\n\nЗвяжыцеся са мной па пытанні вашых паслуг.\n\nЗ павагай," // defaultEmailBody [index 11]
      ]
    }
  },

  //Размер экрна при котором активируються стили для телефона
  mobileSizes: {
    footer: 800,
    navBar: 1200,
    slider: 900,
    news: 800,
    table: 800,
    formLeftColumn: 900,
    map: 1200,
    timeline: 800,
    servicesTablet: 1100,
    servicesMobile: 500,
    mainPage: 800,
    aboutCompany: 800,
  },

  // Объект form содержит структуру и данные для формирования контента сайта с поддержкой русского (ru) и английского (en) языков.
  // Включает источники данных (formSource) для навигации, новостей, анонсов и поиска, а также стандартный заголовок по умолчанию (defaultTitle)
  // для случаев отсутствия информации. Раздел data содержит массивы navigation, news и announcement с элементами (заголовки, списки, текст, изображения)
  // и их стилями, а также textContent с переводами текстового контента, включая списки и описания, связанных с церковной тематикой, новостями и анонсами.
  form: {
    formSource: {
      navigationSource: "navigation",
      newsSource: "news",
      announcementSource: "announcement",
      searchSource: "search",
    },
    defaultTitle: {
      ru: "Информация отсутсвует",
      en: "No information available",
    },
    data: {
      navigation: [
        {
          id: "1",
          title: 0,
          elements: [{ type: "list", content: 1, style: "list" }],
        },
        {
          id: "2",
          title: 2,
          elements: [{ type: "list", content: 3, style: "list" }],
        },
        {
          id: "3",
          title: 4,
          elements: [{ type: "text", content: 5, style: "text" }],
        },
        {
          id: "4",
          title: 6,
          elements: [{ type: "list", content: 7, style: "list" }],
        },
        {
          id: "5",
          title: 8,
          elements: [{ type: "list", content: 9, style: "list" }],
        },
        {
          id: "6",
          title: 10,
          elements: [{ type: "text", content: 11, style: "text" }],
        },
        {
          id: "7",
          title: 12,
          elements: [{ type: "text", content: 13, style: "text" }],
        },
        {
          id: "8",
          title: 14,
          elements: [{ type: "text", content: 15, style: "text" }],
        },
        {
          id: "9",
          title: 16,
          elements: [{ type: "text", content: 17, style: "text" }],
        },
        {
          id: "10",
          title: 18,
          elements: [{ type: "text", content: 19, style: "text" }],
        },
        {
          id: "11",
          title: 20,
          elements: [{ type: "text", content: 21, style: "text" }],
        },
        {
          id: "12",
          title: 22,
          elements: [{ type: "text", content: 23, style: "text" }],
        },
      ],
      news: [
        {
          id: "1",
          title: 24,
          elements: [
            { type: "text", content: 25, style: "text" },
            {
              type: "image",
              content: path + "src/assets/pictures/news/news2/news1.jpg",
              alt: 26,
              style: "image",
            },
          ],
        },
        {
          id: "2",
          title: 27,
          elements: [
            { type: "text", content: 28, style: "text" },
            { type: "text", content: 29, style: "text" },
            {
              type: "image",
              content: path + "src/assets/pictures/news/news2/news2.jpg",
              alt: 30,
              style: "image",
            },
          ],
        },
        {
          id: "3",
          title: 37,
          elements: [
            { type: "text", content: 38, style: "text" },
            { type: "text", content: 39, style: "text" },
            {
              type: "image",
              content: path + "src/assets/pictures/news/news2/news3.jpg",
              alt: 40,
              style: "image",
            },
          ],
        },
        {
          id: "4",
          title: 41,
          elements: [
            { type: "text", content: 42, style: "text" },
            {
              type: "image",
              content: path + "src/assets/pictures/news/news2/news4.jpg",
              alt: 43,
              style: "image",
            },
            { type: "text", content: 44, style: "text" },
          ],
        },
        {
          id: "5",
          title: 45,
          elements: [{ type: "text", content: 46, style: "text" }],
        },
        {
          id: "6",
          title: 47,
          elements: [{ type: "text", content: 48, style: "text" }],
        },
        {
          id: "2",
          title: 27,
          elements: [
            { type: "text", content: 28, style: "text" },
            { type: "text", content: 29, style: "text" },
            {
              type: "image",
              content: path + "src/assets/pictures/news/news2/news2.jpg",
              alt: 30,
              style: "image",
            },
          ],
        },
        // Другие новости можно добавить аналогично
      ],
      announcement: [
        { id: "1", title: 31, elements: [{}] },
        { id: "2", title: 32, elements: [{}] },
        { id: "3", title: 33, elements: [{}] },
        { id: "4", title: 34, elements: [{}] },
        {
          id: "5",
          title: 35,
          elements: [{ type: "list", content: 36, style: "list" }],
        },
      ],
      textContent: {
        ru: [
          // navigation
          "Церковные Деятели",
          ["деятель 1", "деятель 2", "деятель 3"], // 0, 1
          "Православные Святые",
          ["Святой 1", "Святой 2", "Святой 3", "Святой 4"], // 2, 3
          "Исторические даты",
          "информация", // 4, 5
          "Потерянные храмы",
          ["храм 1", "храм 2"], // 6, 7
          "Действующие храмы",
          ["храм 1", "храм 2"], // 8, 9
          "Сувенирная лавка",
          "информация", // 10, 11
          "Книжный магазин",
          "информация", // 12, 13
          "Пожертвования",
          "информация", // 14, 15
          "Экскурсии",
          "информация про экскурсии", // 16, 17
          "Календарь событий",
          "информация", // 18, 19
          "Ответы на вопросы",
          "информация", // 20, 21
          "Личный кабинет",
          "авторизация", // 22, 23
          // news
          "16 февраля 2025 года, в день памяти святого равноапостольного Николая, архиепископа Японского, Митрополит Минский и Заславский Вениамин, Патриарший Экзарх всея Беларуси, возглавил престольный праздник в одноименном храме города Минска.", // 24
          "Его Высокопреосвященству сослужили: председатель Синодального отдела Белорусской Православной Церкви по взаимодействию с казачеством, благочинный 2-го Минского городского округа, настоятель прихода храма иконы Божией Матери «Всех скорбящих Радость» города Минска протоиерей Игорь Коростелёв; секретарь Минской епархии протоиерей Андрей Волков; настоятель прихода храма протоиерей Петр Демьянчук; председатель Синодального отдела Белорусской Православной Церкви по вопросам семьи, защиты материнства и детства, председатель Приходского совета протоиерей Павел Сердюк; и.о. председателя Синодального информационного отдела Белорусской Православной Церкви, настоятель прихода храма святителя Спиридона Тримифунтского в городе Минске иерей Александр Пальчевский и клирики храма.", // 25
          "Главная картинка", // 26
          "Продолжается прием заявок на Международный открытый грантовый конкурс «Православная инициатива – 2025»", // 27
          "Начался прием заявок на Международный открытый грантовый конкурс «Православная инициатива – 2025», который проводится по благословению Святейшего Патриарха Московского и всея Руси Кирилла Координационным комитетом по поощрению социальных, образовательных, информационных, культурных и иных инициатив под эгидой Русской Православной Церкви.", // 28
          "Традиционно в рамках программы «Православная инициатива» рассматриваются заявки по четырем проектным направлениям — образование и воспитание, социальное служение, культура, информационное. При этом в нынешнем году определен ряд приоритетных тем в рамках этих направлений.", // 29
          "Главная картинка", // 30
          // announcement
          "анонс 1", // 31
          "анонс 2", // 32
          "анонс 3", // 33
          "анонс 4", // 34
          "новый анонс",
          ["1", "2", "3", "4"], // 35, 36
          "Святейший Патриарх Московский и всея Руси Кирилл выступил с обращением по случаю празднования Дня православной молодежи.", // 37
          "Дорогие братья и сестры!", // 38
          "Сердечно поздравляю вас с праздником Сретения Господня и Днем православной молодежи.", // 39
          "Главная картинка", // 40
          "В Минске прошёл образовательный форум для юношей и девушек из разных епархий Белорусской Православной Церкви", // 41
          "В Новогрудской епархии к 555-летию явления Жировичской иконы Божией Матери объявлен конкурс рисунков «Жировичский монастырь – святыня Беларуси»", // 42
          "Главная картинка", // 43
          "Проблемы и перспективы деятельности ресурсных центров учреждений образования по духовно-нравственному воспитанию учащихся обсудили участники диалоговой площадки в Могилеве", // 44
          "Информация о новой новости", // 45
          "информация", // 46
          "Информация о новой новости2", // 47
          "информация 2", // 48
        ],
        en: [
          // navigation
          "Church Figures",
          ["figure 1", "figure 2", "figure 3"], // 0, 1
          "Orthodox Saints",
          ["Saint 1", "Saint 2", "Saint 3", "Saint 4"], // 2, 3
          "Historical Dates",
          "information", // 4, 5
          "Lost Temples",
          ["temple 1", "temple 2"], // 6, 7
          "Active Temples",
          ["temple 1", "temple 2"], // 8, 9
          "Souvenir Shop",
          "information", // 10, 11
          "Bookstore",
          "information", // 12, 13
          "Donations",
          "information", // 14, 15
          "Excursions",
          "information", // 16, 17
          "Event Calendar",
          "information", // 18, 19
          "Q&A",
          "information", // 20, 21
          "Personal Account",
          "authorization", // 22, 23
          // news
          "On February 16, 2025, on the day of commemoration of Saint Nicholas, Equal-to-the-Apostles, Archbishop of Japan, Metropolitan Veniamin of Minsk and Zaslavl, Patriarchal Exarch of All Belarus, led the patronal feast in the namesake church in Minsk.", // 24
          "His Eminence was assisted by: Chairman of the Synodal Department of the Belarusian Orthodox Church for Cooperation with the Cossacks, Dean of the 2nd Minsk City District, Rector of the Parish of the Icon of the Mother of God 'Joy of All Who Sorrow' in Minsk, Archpriest Igor Korostelev; Secretary of the Minsk Diocese, Archpriest Andrey Volkov; Rector of the parish church, Archpriest Petr Demyanchuk; Chairman of the Synodal Department of the Belarusian Orthodox Church for Family Issues, Protection of Motherhood and Childhood, Chairman of the Parish Council, Archpriest Pavel Serdyuk; Acting Chairman of the Synodal Information Department of the Belarusian Orthodox Church, Rector of the Parish of Saint Spyridon of Trimythous in Minsk, Priest Alexander Palchevsky, and the clergy of the church.", // 25
          "Main image", // 26
          "Applications are still being accepted for the International Open Grant Competition 'Orthodox Initiative – 2025'", // 27
          "The acceptance of applications has begun for the International Open Grant Competition 'Orthodox Initiative – 2025,' held with the blessing of His Holiness Patriarch Kirill of Moscow and All Russia by the Coordinating Committee for the Promotion of Social, Educational, Informational, Cultural, and Other Initiatives under the auspices of the Russian Orthodox Church.", // 28
          "Traditionally, within the 'Orthodox Initiative' program, applications are considered in four project areas: education and upbringing, social service, culture, and information. This year, a number of priority themes within these areas have been identified.", // 29
          "Main image", // 30
          // announcement
          "announcement 1", // 31
          "announcement 2", // 32
          "announcement 3", // 33
          "announcement 4", // 34
          "new announcement",
          ["1", "2", "3", "4"], // 35, 36
          "His Holiness Patriarch Kirill of Moscow and All Russia addressed the celebration of Orthodox Youth Day.", // 37
          "Dear brothers and sisters!", // 38
          "I heartily congratulate you on the feast of the Presentation of the Lord and Orthodox Youth Day.", // 39
          "Main image", // 40
          "An educational forum for young men and women from various dioceses of the Belarusian Orthodox Church was held in Minsk.", // 41
          "In the Novogrudok Diocese, a drawing competition 'Zhyrovichy Monastery – a shrine of Belarus' was announced to mark the 555th anniversary of the appearance of the Zhyrovichy Icon of the Mother of God.", // 42
          "Main image", // 43
          "Participants of a dialogue platform in Mogilev discussed the problems and prospects of the activities of resource centers of educational institutions for the spiritual and moral education of students.", // 44
          "Information about a new news item", // 45
          "information", // 46
          "Information about another new news item", // 47
          "information 2", // 48
        ],
      },
    },
  },

  // Объект services содержит данные об услугах компании с переводами на русский (ru) и английский (en) языки.
  // Каждая услуга (от "1" до "6") представлена объектом с номером и переводами, включающими заголовок, краткое описание,
  // текст кнопки, подробное описание страницы и текст кнопки для заказа. Услуги включают разработку корпоративных сайтов,
  // интернет-магазинов, лендингов, SEO-оптимизацию, дизайн UX/UI и поддержку сайтов, с акцентом на современные технологии,
  // адаптивность и привлечение клиентов.
  services: {
    texts: {
      ru: [
        // Сервис 1 (id: "1")
        "Разработка корпоративных сайтов", // title1 [index 0]
        "Создаём современные, функциональные и адаптивные корпоративные сайты, которые отражают уникальный стиль вашего бренда и помогают привлекать клиентов.", // description1 [index 1]
        "Подробнее →", // buttonText [index 2]
        "Создание корпоративных сайтов — это процесс разработки онлайн-платформы, которая представляет ваш бизнес в интернете.<br>Мы создаём современные и адаптивные сайты, которые демонстрируют уникальный стиль вашей компании.<br>Такой сайт станет визитной карточкой вашего бренда, способной привлечь новых клиентов и повысить лояльность существующих.<br><br>Каждый проект включает в себя:<br>- Анализ вашей целевой аудитории и конкурентов.<br>- Разработку структуры и дизайна сайта с учётом фирменного стиля компании.<br>- Интеграцию актуального функционала, такого как формы обратной связи, чат-боты, блоги, каталоги продукции и другие модули.<br>- Адаптацию сайта под мобильные устройства, чтобы он отлично выглядел на экранах любого размера.<br>- Оптимизацию скорости загрузки и базовые меры SEO, чтобы сайт быстро находился в поисковых системах.", // descriptionPage [index 3]
        "Заказать сайт", // buttonDP [index 4]
        // Сервис 2 (id: "2")
        "Интернет-магазины под ключ", // title1 [index 5]
        "Разрабатываем интернет-магазины с удобным интерфейсом, интеграцией платёжных систем и настройкой каталогов для роста ваших онлайн-продаж.", // description1 [index 6]
        "Подробнее →", // buttonText [index 7]
        "Разработка интернет-магазинов под ключ — это создание платформы для онлайн-продаж, которая полностью соответствует требованиям вашего бизнеса.<br>Мы предлагаем решение, включающее удобный интерфейс, оптимизированный для конечных пользователей.<br><br>Наши услуги включают:<br>- Интеграцию популярных платёжных систем и настроек для онлайн-оплаты.<br>- Настройку каталога товаров и возможность добавления фильтров для удобного поиска.<br>- Оптимизацию сайта для высокой скорости загрузки и удобной работы на мобильных устройствах.<br>- Базовые SEO-настройки для улучшения видимости вашего магазина в поисковых системах.<br>- Возможность подключения модулей для автоматизации доставки и учёта заказов.", // descriptionPage [index 8]
        "Заказать сайт", // buttonDP [index 9]
        // Сервис 3 (id: "3")
        "Лендинги для продвижения услуг", // title1 [index 10]
        "Создаём эффектные одностраничные сайты с высокой конверсией для ваших рекламных кампаний и презентации продуктов.", // description1 [index 11]
        "Подробнее →", // buttonText [index 12]
        "Создание лендингов для продвижения услуг — это разработка одностраничных сайтов, которые привлекают внимание пользователей и направлены на достижение конкретной цели.<br>Наши лендинги помогают повысить конверсию ваших рекламных кампаний.<br><br>Мы предлагаем:<br>- Эффектный дизайн, который выделяет ваши услуги среди конкурентов.<br>- Разработку структуры лендинга с учётом целей вашей маркетинговой стратегии.<br>- Интеграцию формы захвата лидов (например, заявок или контактов клиентов).<br>- Адаптацию лендинга для мобильных устройств и разных экранов.<br>- Оптимизацию скорости загрузки и пользовательского опыта для повышения конверсии.", // descriptionPage [index 13]
        "Заказать сайт", // buttonDP [index 14]
        // Сервис 4 (id: "4")
        "SEO-оптимизация и продвижение", // title1 [index 15]
        "Повышаем видимость вашего сайта в поисковых системах, обеспечивая стабильный рост органического трафика и привлечения клиентов.", // description1 [index 16]
        "Подробнее →", // buttonText [index 17]
        "SEO-оптимизация и продвижение — это процесс улучшения видимости вашего сайта в поисковых системах.<br>Мы обеспечиваем стабильный рост органического трафика и привлечение целевой аудитории.<br><br>В наши услуги входят:<br>- Проведение анализа ключевых слов и конкурентов.<br>- Оптимизация структуры сайта, включая мета-теги, заголовки и контент.<br>- Улучшение технических характеристик сайта, таких как скорость загрузки и адаптивность.<br>- Настройка локального SEO для привлечения клиентов в вашем регионе.<br>- Мониторинг и аналитика результатов продвижения для постоянного улучшения.", // descriptionPage [index 18]
        "Заказать сайт", // buttonDP [index 19]
        // Сервис 5 (id: "5")
        "Дизайн и UX/UI проектирование", // title1 [index 20]
        "Разрабатываем уникальный дизайн и удобный пользовательский интерфейс для вашего сайта, чтобы привлечь внимание и удержать посетителей.", // description1 [index 21]
        "Подробнее →", // buttonText [index 22]
        "Дизайн и UX/UI проектирование — это создание визуальной и функциональной части сайта, направленной на удобство пользователей.<br>Мы разрабатываем уникальные и современные решения, которые привлекают внимание и удерживают посетителей.<br><br>В наши услуги входят:<br>- Анализ целевой аудитории для создания удобной навигации и структуры.<br>- Разработка уникального дизайна с учётом вашего фирменного стиля.<br>- Прототипирование интерфейсов и тестирование на удобство использования.<br>- Интеграция современных трендов в дизайне для повышения привлекательности.<br>- Работа над адаптацией интерфейса для мобильных устройств.", // descriptionPage [index 23]
        "Заказать сайт", // buttonDP [index 24]
        // Сервис 6 (id: "6")
        "Поддержка и обновление сайтов", // title1 [index 25]
        "Обеспечиваем бесперебойную работу вашего сайта, своевременные обновления, устранение технических ошибок и оптимизацию производительности.", // description1 [index 26]
        "Подробнее →", // buttonText [index 27]
        "Поддержка и обновление сайтов — это обеспечение бесперебойной работы вашего ресурса и его соответствие современным стандартам.<br>Мы предлагаем полный спектр услуг для управления вашим сайтом.<br><br>Наши услуги включают:<br>- Устранение технических ошибок и оптимизацию производительности сайта.<br>- Обновление контента и функционала для соответствия текущим бизнес-задачам.<br>- Контроль безопасности и установка актуальных обновлений системы.<br>- Регулярное резервное копирование данных для предотвращения потери информации.<br>- Техническую поддержку для решения любых вопросов, связанных с сайтом.", // descriptionPage [index 28]
        "Заказать сайт" // buttonDP [index 29]
      ],
      en: [
        // Сервис 1 (id: "1")
        "Development of Corporate Websites", // title1 [index 0]
        "We create modern, functional, and responsive corporate websites that reflect your brand’s unique style and help attract customers.", // description1 [index 1]
        "Learn More →", // buttonText [index 2]
        "Creating corporate websites is the process of developing an online platform that represents your business on the internet.<br>We build modern and responsive websites that showcase your company’s unique style.<br>Such a website will serve as your brand’s digital business card, capable of attracting new customers and increasing loyalty among existing ones.<br><br>Each project includes:<br>- Analysis of your target audience and competitors.<br>- Development of the website structure and design, considering your company’s branding.<br>- Integration of relevant features such as contact forms, chatbots, blogs, product catalogs, and other modules.<br>- Adaptation for mobile devices to ensure it looks great on any screen size.<br>- Optimization of loading speed and basic SEO measures to ensure the site is easily found in search engines.", // descriptionPage [index 3]
        "Order a Website", // buttonDP [index 4]
        // Сервис 2 (id: "2")
        "Turnkey Online Stores", // title1 [index 5]
        "We develop online stores with user-friendly interfaces, payment system integration, and catalog setup to boost your online sales.", // description1 [index 6]
        "Learn More →", // buttonText [index 7]
        "Developing turnkey online stores is the creation of a platform for online sales that fully meets your business requirements.<br>We offer solutions with a user-friendly interface optimized for end users.<br><br>Our services include:<br>- Integration of popular payment systems and settings for online payments.<br>- Setup of product catalogs with filters for easy search.<br>- Optimization for fast loading speeds and smooth performance on mobile devices.<br>- Basic SEO settings to improve your store’s visibility in search engines.<br>- Options to integrate modules for automated delivery and order management.", // descriptionPage [index 8]
        "Order a Website", // buttonDP [index 9]
        // Сервис 3 (id: "3")
        "Landing Pages for Service Promotion", // title1 [index 10]
        "We create striking single-page websites with high conversion rates for your advertising campaigns and product presentations.", // description1 [index 11]
        "Learn More →", // buttonText [index 12]
        "Creating landing pages for service promotion involves developing single-page websites that capture user attention and are focused on achieving specific goals.<br>Our landing pages help increase the conversion rates of your advertising campaigns.<br><br>We offer:<br>- Eye-catching design that sets your services apart from competitors.<br>- Development of the landing page structure tailored to your marketing strategy goals.<br>- Integration of lead capture forms (e.g., applications or customer contacts).<br>- Adaptation for mobile devices and various screen sizes.<br>- Optimization of loading speed and user experience to boost conversions.", // descriptionPage [index 13]
        "Order a Website", // buttonDP [index 14]
        // Сервис 4 (id: "4")
        "SEO Optimization and Promotion", // title1 [index 15]
        "We enhance your website’s visibility in search engines, ensuring steady growth in organic traffic and customer attraction.", // description1 [index 16]
        "Learn More →", // buttonText [index 17]
        "SEO optimization and promotion involve improving your website’s visibility in search engines.<br>We ensure steady growth in organic traffic and attract your target audience.<br><br>Our services include:<br>- Conducting keyword and competitor analysis.<br>- Optimizing the website structure, including meta tags, headings, and content.<br>- Enhancing technical aspects like loading speed and responsiveness.<br>- Setting up local SEO to attract customers in your region.<br>- Monitoring and analyzing promotion results for continuous improvement.", // descriptionPage [index 18]
        "Order a Website", // buttonDP [index 19]
        // Сервис 5 (id: "5")
        "Design and UX/UI Engineering", // title1 [index 20]
        "We develop unique designs and user-friendly interfaces for your website to attract and retain visitors.", // description1 [index 21]
        "Learn More →", // buttonText [index 22]
        "Design and UX/UI engineering involve creating the visual and functional aspects of a website focused on user convenience.<br>We develop unique and modern solutions that attract attention and retain visitors.<br><br>Our services include:<br>- Analyzing the target audience to create intuitive navigation and structure.<br>- Developing unique designs tailored to your brand identity.<br>- Prototyping interfaces and testing for usability.<br>- Incorporating modern design trends to enhance appeal.<br>- Ensuring interface adaptability for mobile devices.", // descriptionPage [index 23]
        "Order a Website", // buttonDP [index 24]
        // Сервис 6 (id: "6")
        "Website Support and Updates", // title1 [index 25]
        "We ensure uninterrupted operation of your website with timely updates, error fixes, and performance optimization.", // description1 [index 26]
        "Learn More →", // buttonText [index 27]
        "Website support and updates involve ensuring the uninterrupted operation of your resource and its compliance with modern standards.<br>We offer a full range of services for managing your website.<br><br>Our services include:<br>- Fixing technical errors and optimizing website performance.<br>- Updating content and functionality to meet current business needs.<br>- Monitoring security and installing the latest system updates.<br>- Regular data backups to prevent information loss.<br>- Technical support to address any website-related issues.", // descriptionPage [index 28]
        "Order a Website" // buttonDP [index 29]
      ],
      by: [
        // Сервис 1 (id: "1")
        "Распрацоўка карпаратыўных сайтаў", // title1 [index 0]
        "Ствараем сучасныя, функцыянальныя і адаптыўныя карпаратыўныя сайты, якія адлюстроўваюць унікальны стыль вашага брэнда і дапамагаюць прыцягваць кліентаў.", // description1 [index 1]
        "Даведацца больш →", // buttonText [index 2]
        "Стварэнне карпаратыўных сайтаў — гэта працэс распрацоўкі онлайн-платформы, якая ўсеяляе ваш бізнес у інтэрнэце.<br>Мы ствараем сучасныя і адаптыўныя сайты, якія дэманструюць унікальны стыль вашай кампаніі.<br>Такі сайт стане візітоўкай вашага брэнда, здольнай прыцягнуць новых кліентаў і павысіць лаяльнасць існуючых.<br><br>Кожны праект уключае:<br>- Аналіз вашай мэтавай аўдыторыі і канкурэнтаў.<br>- Распрацоўку структуры і дызайну сайта з улікам фірменнага стылю кампаніі.<br>- Інтэграцыю актуальнага функцыяналу, напрыклад, формы зваротнай сувязі, чат-боты, блогі, каталогі прадукцыі і іншыя модулі.<br>- Адаптацыю сайта пад мабільныя прылады, каб ён выдатна выглядаў на экранах любога памеру.<br>- Аптымізацыю хуткасці загрузкі і базавыя меры SEO, каб сайт хутка знаходзіўся ў пошукавых сістэмах.", // descriptionPage [index 3]
        "Замовіць сайт", // buttonDP [index 4]
        // Сервис 2 (id: "2")
        "Інтэрнэт-крамы пад ключ", // title1 [index 5]
        "Распрацоўваем інтэрнэт-крамы з зручным інтэрфейсам, інтэграцыяй плацёжных сістэм і наладай каталогаў для росту вашых онлайн-продажаў.", // description1 [index 6]
        "Даведацца больш →", // buttonText [index 7]
        "Распрацоўка інтэрнэт-крам пад ключ — гэта стварэнне платформы для онлайн-продажаў, якая цалкам адпавядае патрабаванням вашага бізнесу.<br>Мы прапануем рашэнне, якое ўключае зручны інтэрфейс, аптымізаваны для канчатковых карыстальнікаў.<br><br>Нашы паслугі ўключаюць:<br>- Інтэграцыю папулярных плацёжных сістэм і налад для онлайн-аплаты.<br>- Наладу каталога тавараў і магчымасць дадання фільтраў для зручнага пошуку.<br>- Аптымізацыю сайта для высокай хуткасці загрузкі і зручнай працы на мабільных прыладах.<br>- Базавыя SEO-налады для паляпшэння бачнасці вашай крамы ў пошукавых сістэмах.<br>- Магчымасць падключэння модуляў для аўтаматызацыі дастаўкі і ўліку заказаў.", // descriptionPage [index 8]
        "Замовіць сайт", // buttonDP [index 9]
        // Сервис 3 (id: "3")
        "Лэндзінгі для прасоўвання паслуг", // title1 [index 10]
        "Ствараем эфектныя адностаронкавыя сайты з высокай канверсіяй для вашых рэкламных кампаній і прэзентацыі прадуктаў.", // description1 [index 11]
        "Даведацца больш →", // buttonText [index 12]
        "Стварэнне лэндзінгаў для прасоўвання паслуг — гэта распрацоўка адностаронкавых сайтаў, якія прыцягваюць увагу карыстальнікаў і накіраваны на дасягненне канкрэтнай мэты.<br>Нашы лэндзінгі дапамагаюць павысіць канверсію вашых рэкламных кампаній.<br><br>Мы прапануем:<br>- Эффектны дызайн, які вылучае вашы паслугі сярод канкурэнтаў.<br>- Распрацоўку структуры лэндзінга з улікам мэт вашай маркетынгавай стратэгіі.<br>- Інтэграцыю формы захопу лідаў (напрыклад, заявак ці кантактаў кліентаў).<br>- Адаптацыю лэндзінга для мабільных прылад і розных экранаў.<br>- Аптымізацыю хуткасці загрузкі і карыстальніцкага досведу для павышэння канверсіі.", // descriptionPage [index 13]
        "Замовіць сайт", // buttonDP [index 14]
        // Сервис 4 (id: "4")
        "SEO-аптымізацыя і прасоўванне", // title1 [index 15]
        "Павышаем бачнасць вашага сайта ў пошукавых сістэмах, забяспечваючы стабільны рост арганічнага трафіку і прыцягненне кліентаў.", // description1 [index 16]
        "Даведацца больш →", // buttonText [index 17]
        "SEO-аптымізацыя і прасоўванне — гэта працэс паляпшэння бачнасці вашага сайта ў пошукавых сістэмах.<br>Мы забяспечваем стабільны рост арганічнага трафіку і прыцягненне мэтавай аўдыторыі.<br><br>У нашы паслугі ўваходзяць:<br>- Правядзенне аналізу ключавых слоў і канкурэнтаў.<br>- Аптымізацыя структуры сайта, уключаючы мета-тэгі, загалоўкі і кантэнт.<br>- Паляпшэнне тэхнічных характарыстык сайта, такіх як хуткасць загрузкі і адаптыўнасць.<br>- Налада лакальнага SEO для прыцягнення кліентаў у вашым рэгіёне.<br>- Маніторынг і аналітыка вынікаў прасоўвання для пастаяннага ўдасканалення.", // descriptionPage [index 18]
        "Замовіць сайт", // buttonDP [index 19]
        // Сервис 5 (id: "5")
        "Дызайн і UX/UI праектаванне", // title1 [index 20]
        "Распрацоўваем унікальны дызайн і зручны карыстальніцкі інтэрфейс для вашага сайта, каб прыцягнуць увагу і ўтрымаць наведвальнікаў.", // description1 [index 21]
        "Даведацца больш →", // buttonText [index 22]
        "Дызайн і UX/UI праектаванне — гэта стварэнне візуальнай і функцыянальнай часткі сайта, накіраванай на зручнасць карыстальнікаў.<br>Мы распрацоўваем унікальныя і сучасныя рашэнні, якія прыцягваюць увагу і ўтрымліваюць наведвальнікаў.<br><br>У нашы паслугі ўваходзяць:<br>- Аналіз мэтавай аўдыторыі для стварэння зручнай навігацыі і структуры.<br>- Распрацоўка унікальнага дызайну з улікам вашага фірменнага стылю.<br>- Прататыпаванне інтэрфейсаў і тэставанне на зручнасць выкарыстання.<br>- Інтэграцыя сучасных трэндаў у дызайне для павышэння прывабнасці.<br>- Работа над адаптацыяй інтэрфейсу для мабільных прылад.", // descriptionPage [index 23]
        "Замовіць сайт", // buttonDP [index 24]
        // Сервис 6 (id: "6")
        "Падтрымка і абнаўленне сайтаў", // title1 [index 25]
        "Забяспечваем бесперабойную працу вашага сайта, своечасовыя абнаўленні, выдаленне тэхнічных памылак і аптымізацыю прадукцыйнасці.", // description1 [index 26]
        "Даведацца больш →", // buttonText [index 27]
        "Падтрымка і абнаўленне сайтаў — гэта забеспячэнне бесперабойнай працы вашага рэсурсу і яго адпаведнасць сучасным стандартам.<br>Мы прапануем поўны спектр паслуг для кіравання вашым сайтам.<br><br>Нашы паслугі ўключаюць:<br>- Выдаленне тэхнічных памылак і аптымізацыю прадукцыйнасці сайта.<br>- Абнаўленне кантэнту і функцыяналу для адпаведнасці бягучым бізнес-задачам.<br>- Кантроль бяспекі і ўстаноўка актуальных абнаўленняў сістэмы.<br>- Рэгулярнае рэзервовае капіраванне даных для прадухілення страты інфармацыі.<br>- Тэхнічную падтрымку для вырашэння любых пытанняў, звязаных з сайтам.", // descriptionPage [index 28]
        "Замовіць сайт" // buttonDP [index 29]
      ]
    },
    items: {
      "1": { number: "1" },
      "2": { number: "2" },
      "3": { number: "3" },
      "4": { number: "4" },
      "5": { number: "5" },
      "6": { number: "6" }
    }
  },

  // Объект contactForm содержит переводы для элементов контактной формы на русский (ru) и английский (en) языки.
  // Включает заголовок, метки полей ввода (имя, телефон, email, сообщение), текст кнопки отправки, сообщения об ошибках валидации
  // (пустые поля, некорректные данные, короткое сообщение, защита от ботов) и уведомление об успешной отправке, обеспечивая
  // многоязычную поддержку и обратную связь для пользователей.
  contactForm: {
    texts: {
      ru: [
        "Оставьте свои контактные данные, мы свяжемся с вами в ближайшее время", // title [index 0]
        "ФИО", // name [index 1]
        "Ваш телефон", // phone [index 2]
        "Ваш Email", // email [index 3]
        "Ваше сообщение", // message [index 4]
        "Отправить", // submit [index 5]
        "Поле ФИО не может быть пустым или содержать только пробелы", // errors.nameEmpty [index 6]
        "ФИО должно содержать минимум 2 буквы и только буквы или дефис (пробелы игнорируются)", // errors.nameInvalid [index 7]
        "Поле телефона не может быть пустым или содержать только пробелы", // errors.phoneEmpty [index 8]
        "Пожалуйста, введите корректный номер телефона (10-15 цифр, можно с +)", // errors.phoneInvalid [index 9]
        "Поле email не может быть пустым или содержать только пробелы", // errors.emailEmpty [index 10]
        "Пожалуйста, введите корректный email", // errors.emailInvalid [index 11]
        "Сообщение, если заполнено, должно содержать минимум 5 символов (пробелы игнорируются)", // errors.messageShort [index 12]
        "Скорее всего, это бот", // errors.bot [index 13]
        "Успех" // success [index 14]
      ],
      en: [
        "Leave your contact details, we will get back to you soon", // title [index 0]
        "Full Name", // name [index 1]
        "Your Phone", // phone [index 2]
        "Your Email", // email [index 3]
        "Your Message", // message [index 4]
        "Submit", // submit [index 5]
        "Full Name field cannot be empty or contain only spaces", // errors.nameEmpty [index 6]
        "Full Name must contain at least 2 letters and only letters or hyphens (spaces ignored)", // errors.nameInvalid [index 7]
        "Phone field cannot be empty or contain only spaces", // errors.phoneEmpty [index 8]
        "Please enter a valid phone number (10-15 digits, can start with +)", // errors.phoneInvalid [index 9]
        "Email field cannot be empty or contain only spaces", // errors.emailEmpty [index 10]
        "Please enter a valid email", // errors.emailInvalid [index 11]
        "Message, if filled, must contain at least 5 characters (spaces ignored)", // errors.messageShort [index 12]
        "This is likely a bot", // errors.bot [index 13]
        "Success" // success [index 14]
      ],
      by: [
        "Пакіньце свае кантактныя дадзеныя, мы звяжамся з вамі ў бліжэйшы час", // title [index 0]
        "ПІБ", // name [index 1]
        "Ваш тэлефон", // phone [index 2]
        "Ваш Email", // email [index 3]
        "Ваша паведамленне", // message [index 4]
        "Адправіць", // submit [index 5]
        "Поле ПІБ не можа быць пустым або ўтрымліваць толькі прабелы", // errors.nameEmpty [index 6]
        "ПІБ павінна ўтрымліваць мінімум 2 літары і толькі літары ці дэфіс (прабелы ігнаруюцца)", // errors.nameInvalid [index 7]
        "Поле тэлефона не можа быць пустым або ўтрымліваць толькі прабелы", // errors.phoneEmpty [index 8]
        "Калі ласка, уведзіце карэктны нумар тэлефона (10-15 лічбаў, можна з +)", // errors.phoneInvalid [index 9]
        "Поле email не можа быць пустым або ўтрымліваць толькі прабелы", // errors.emailEmpty [index 10]
        "Калі ласка, уведзіце карэктны email", // errors.emailInvalid [index 11]
        "Паведамленне, калі запоўнена, павінна ўтрымліваць мінімум 5 сімвалаў (прабелы ігнаруюцца)", // errors.messageShort [index 12]
        "Хутчэй за ўсё, гэта бот", // errors.bot [index 13]
        "Поспех" // success [index 14]
      ]
    }
  },
};
