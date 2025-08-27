// Функция для изменения языка, обновления навигационной панели, заголовка, футера и контента
function changeLanguage(newLanguage) {
    if (newLanguage === belhardSiteData.currentLanguage) return;

    belhardSiteData.currentLanguage = newLanguage;
    localStorage.setItem("selectedLanguage", newLanguage);

    // Обновляем заголовок страницы
    document.title = belhardSiteData.title[newLanguage];

    // Удаляем существующий navbar
    const existingNavBar = document.getElementById('navbar');
    const mainPage = document.querySelector('.main-container');
    const services = document.querySelector('.services');
    const backGround = document.querySelector('.contact-wrapper');
    const companyBlock = document.querySelector('.company-block');
    const existingFooter = document.getElementById('footer');


    if (existingNavBar) {
        existingNavBar.remove();
        // Удаляем элементы, связанные с navbar
        const overlay = document.getElementById('overlay');
        const openSideBarButton = document.getElementById('open-sidebar-button');
        const searchWrapper = document.querySelector('.search-wrapper');
        if (overlay) overlay.remove();
        if (openSideBarButton) openSideBarButton.remove();
        if (searchWrapper) searchWrapper.remove();

        // Создаем новый navbar
        createNavBar(belhardSiteData.navBar, newLanguage);

        // Обновляем селектор языка и инициализируем навигацию
        createLanguageSelect(belhardSiteData.languages);
        initializeNavigation();
    }

    if (mainPage) {
        mainPage.remove();
        createMain(belhardSiteData.mainTextContent, window.defaultStyles.mainStyles, belhardSiteData.currentLanguage);
    }

    if (services) {
        services.remove();
        createBlocks(belhardSiteData.services, window.defaultStyles.servicesStyles, belhardSiteData.currentLanguage)
    }

    if (companyBlock) {
        companyBlock.remove();
        createCompanyBlock(belhardSiteData.companyData, window.defaultStyles.companyStyles, belhardSiteData.currentLanguage);
    }
    if (backGround) {
        backGround.remove();
        createContactForm(belhardSiteData, belhardSiteData.currentLanguage);
    }

    updatePageContentLanguage(newLanguage);

    // Удаляем существующий footer и очищаем его слушатели
    if (existingFooter) {
        existingFooter.remove();
        // Создаем новый footer
        createFooter(belhardSiteData, window.defaultStyles.footerStyles, newLanguage);
    }
}

function createLanguageSelect(languages) {
    var currentLanguage = belhardSiteData.currentLanguage;

    var existingLanguageSelector = document.querySelector(".language-selector-container");
    if (existingLanguageSelector) {
        existingLanguageSelector.remove();
    }

    var container = createElement("div", { class: "language-selector-container" }, document.body);
    var selectBox = createElement("div", { class: "language-selector-box" }, container);
    var selectedFlag = createElement("img", { class: "language-selector-flag" }, selectBox);
    var arrow = createElement("span", { class: "language-selector-arrow" }, selectBox);
    arrow.textContent = "▼";
    var dropdown = createElement("div", { class: "language-selector-dropdown" }, container);

    dropdown.style.display = "none"; // Устанавливаем явно

    var currentLangArray = languages.find(lang => lang[0] === currentLanguage);
    selectedFlag.src = currentLangArray[1];
    selectedFlag.alt = currentLangArray[0];

    languages.forEach(lang => {
        var flagItem = createElement("div", { class: "language-selector-item" }, dropdown);
        var flagImg = createElement("img", {
            class: "language-selector-item-img",
            src: lang[1]
        }, flagItem);
        flagImg.alt = lang[0];
        flagItem.dataset.lang = lang[0];

        flagItem.addEventListener("click", function () {
            var newLanguage = this.dataset.lang;
            if (newLanguage === belhardSiteData.currentLanguage) return;

            var newLangArray = languages.find(l => l[0] === newLanguage);
            selectedFlag.src = newLangArray[1];
            selectedFlag.alt = newLangArray[0];
            dropdown.style.display = "none";

            changeLanguage(newLanguage);
        });
    });

    selectBox.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
        if (!container.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });

    return container;
}
