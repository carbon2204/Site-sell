// Функция для создания главной страницы
function createMainPage() {
    // Получаем начальный язык из объекта belhardSiteData.languages
    getInitialLanguage(belhardSiteData.languages);

    // Вызываем функцию для создания прелоадера (загрузочного экрана)
    //createPreloader();

    // Устанавливаем заголовок страницы, используя значение из объекта belhardSiteData
    document.title = belhardSiteData.title[belhardSiteData.currentLanguage];

    // Создаём навигационную панель, передавая данные из belhardSiteData.navBar
    createNavBar(belhardSiteData.navBar, belhardSiteData.currentLanguage);

    // Создаём переключатель языков, используя данные из belhardSiteData.languages
    createLanguageSelect(belhardSiteData.languages);

    // Создаём основной контент страницы, используя данные из belhardSiteData.mainTextContent,
    createMain(belhardSiteData.mainTextContent, window.defaultStyles.mainStyles, belhardSiteData.currentLanguage);

    // Создаём блоки услуг, используя данные из belhardSiteData.services,
    createBlocks(belhardSiteData.services, window.defaultStyles.servicesStyles, belhardSiteData.currentLanguage);

    // Создаём блок информации о компании, используя данные из belhardSiteData.companyData,
    createCompanyBlock(belhardSiteData.companyData, window.defaultStyles.companyStyles, belhardSiteData.currentLanguage);

    // Создаём форму обратной связи, передавая весь объект belhardSiteData
    createContactForm(belhardSiteData, belhardSiteData.currentLanguage);

    // Создаём подвал (footer), используя данные из belhardSiteData,
    createFooter(belhardSiteData, window.defaultStyles.footerStyles, belhardSiteData.currentLanguage);

    // Применяем глобальные стили, используя объект globalStyles
    applyGlobalStyles(globalStyles);

    // Применяем стили для навигационной панели, используя объект navBarCss
    applyGlobalStyles(navBarCss);

    // Создаём кнопку прокрутки страницы вверх, используя иконку из belhardSiteData.controlElements.scrollPageUpIcon
    createScrollToTopButton(belhardSiteData.controlElements.scrollPageUpIcon, window.defaultStyles.buttonStyles);

    // Устанавливаем фавикон для сайта, используя путь из belhardSiteData.favicon
    addFavicon(belhardSiteData.favicon);  
}

// Добавляем обработчик события загрузки DOM-контента
// После полной загрузки DOM вызываем функцию createMainPage
document.addEventListener("DOMContentLoaded", function () {
    // Вызываем функцию для создания главной страницы
    createMainPage();
    // Инициализируем навигацию (например, обработчики событий для меню)
    initializeNavigation();
});