// Функция создания навигационной панели с поддержкой мультиязычности и адаптивности
function createNavBar(navBarInfo, currentLanguage) {
    // Создаём элемент <nav> с id "navbar" и добавляем его в body
    const navBar = createElement('nav', { id: 'navbar' }, document.body);

    // Создаём список <ul> внутри навбара для хранения видимых элементов меню
    const ulVisible = createElement('ul', { class: "visible-menu" }, navBar);

    // Создаём кнопку бургер-меню (скрытое по умолчанию)
    const burgerButton = createElement("button", { class: "burger hidden", id: "burger-button" }, navBar);

    // Добавляем изображение и счетчик для бургер-меню
    const dotsImg = createElement("img", { src: belhardSiteData.controlElements.dotsSidebarIcon }, burgerButton);
    const burgerCount = createElement("div", { class: "burger-count" }, burgerButton);

    // Создаём скрытое меню <ul>
    const ulHidden = createElement('ul', { class: "hidden-menu" }, navBar);

    // Создаём кнопку закрытия боковой панели внутри элемента списка
    const closeButton = createElement('button', {
        id: 'close-sidebar-button',
        'aria-label': 'Закрыть панель навигации'
    }, createElement('li', {}, ulVisible));

    // Добавляем иконку кнопки закрытия боковой панели
    const closeImg = createElement('img', {
        src: belhardSiteData.controlElements.closeSidebarIcon,
        alt: 'Кнопка закрытия панели навигации',
        width: belhardSiteData.controlElementsSizes.closeSidebarIcon,
        height: belhardSiteData.controlElementsSizes.closeSidebarIcon
    }, closeButton);

    // Создаём затемняющий фон для открытого меню
    const overlay = createElement('div', { id: 'overlay' }, document.body);

    // Создаём кнопку для открытия боковой панели
    const openSideBarButton = createElement('button', {
        id: 'open-sidebar-button',
        'aria-label': 'Открыть панель навигации',
        'aria-expanded': 'false',
        'aria-controls': 'navbar'
    }, document.body);

    // Добавляем иконку кнопки открытия боковой панели
    const openImg = createElement('img', {
        src: belhardSiteData.controlElements.openSidebarIcon,
        alt: 'Кнопка открытия панели навигации',
        width: belhardSiteData.controlElementsSizes.openSidebarIcon,
        height: belhardSiteData.controlElementsSizes.openSidebarIcon
    }, openSideBarButton);

    // Заполняем меню элементами из navBarInfo
    buildMenu(navBarInfo.navBarElements, '0', ulVisible, navBarInfo, currentLanguage);

    // Создаём контейнер для строки поиска
    const searchWrapper = createElement('div', { class: 'search-wrapper' }, document.body);

    // Создаём поле ввода для поиска с плейсхолдером на текущем языке
    const searchInput = createElement('input', {
        type: 'text',
        id: 'search-input',
        class: 'search-input',
        placeholder: belhardSiteData.controlElements.searchPlaceholder[currentLanguage] || belhardSiteData.controlElements.searchPlaceholder["ru"]
    }, searchWrapper);

    // Добавляем иконку поиска
    const searchIcon = createElement('img', {
        src: belhardSiteData.controlElements.searchIcon,
        alt: 'Поиск',
        class: 'search-icon'
    }, searchWrapper);

    // Обработчик клика по иконке поиска
    searchIcon.onclick = function () {
        handleSearch(searchInput, currentLanguage);
    };

    // Обработчик нажатия клавиши "Enter" в поле поиска
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleSearch(searchInput, currentLanguage);
        }
    });

    // Назначаем обработчики событий для открытия и закрытия боковой панели
    openSideBarButton.onclick = openSideBar;
    closeButton.onclick = closeSideBar;
    overlay.onclick = closeSideBar;

    // Обработчик изменения размеров экрана для сброса состояния меню
    window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth > belhardSiteData.mobileSizes.navBar) {
            const openElements = document.querySelectorAll('.open');
            for (var i = 0; i < openElements.length; i++) {
                openElements[i].classList.remove('open');
            }
            navBar.classList.remove('show');
        }
    });
}

// Функция построения меню на основе данных navBarInfo
function buildMenu(items, parentId, parentUl, navBarInfo, currentLanguage) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].state === "0") continue;
        if (items[i].parent !== parentId) continue;

        const li = document.createElement('li');
        const a = document.createElement('a');
        const idNum = parseInt(items[i].id, 10); // Преобразуем id в число
        const textArray = navBarInfo.navBarText[currentLanguage] || navBarInfo.navBarText["ru"] || [];
        a.textContent = textArray[idNum - 1] || "";
        

        // Добавляем свойство source для элемента меню
        items[i].source = belhardSiteData.form.formSource.navigationSource;

        // Привязываем обработчик события к ссылке
        attachRebuildListener(a, items[i], li);

        const childrenUl = document.createElement('ul');
        buildMenu(items, items[i].id, childrenUl, navBarInfo, currentLanguage);

        if (childrenUl.childElementCount > 0) {
            li.classList.add('has-children');
            li.appendChild(a);
            li.appendChild(childrenUl);
        } else {
            li.appendChild(a);
        }

        parentUl.appendChild(li);
    }
}

// Функция обработки действий с поиском
function handleSearch(searchInput, currentLanguage) {
    if (!searchInput.classList.contains('expanded')) {
        // Открываем поле поиска, если оно было закрыто
        searchInput.classList.add('expanded');
        searchInput.focus();
    } else {
        // Если поле уже открыто
        if (searchInput.value.trim() === '') {
            // Закрываем поле, если текст отсутствует
            searchInput.classList.remove('expanded');
        } else {
            // Обрабатываем поиск и очищаем поле
            processSearch(searchInput.value, currentLanguage);
            searchInput.value = '';
        }
    }
}

// Функция обработки поискового запроса
function processSearch(searchInput, currentLanguage) {
    if (!searchInput) {
        alert(belhardSiteData.navBar.searchMessages[currentLanguage][0]);
        return;
    }

    var langIndex;
    if (belhardSiteData.currentLanguage === "ru") {
        langIndex = 0;
    } else {
        langIndex = 1;
    }
    const searchValue = searchInput.toLowerCase().trim();
    const newsItems = belhardSiteData.news;
    const leftColumnItems = newsItems.leftColumn.items;
    const rightColumnItems = newsItems.rightColumn.details;
    const matchingItems = [];

    for (var i = 0; i < newsItems.texts.length; i++) {
        const itemText = newsItems.texts[i][langIndex].toLowerCase();
        const itemTags = newsItems.tags[i][langIndex].join(' ').toLowerCase();
        const itemSource = newsItems.texts[i][2]; // "news" или "announcement"

        if (itemText.includes(searchValue) || itemTags.includes(searchValue)) {
            var scripts = null;
            var formId = null;

            // Проверяем, есть ли элемент в leftColumnItems или rightColumnItems
            var leftItem = null;
            for (var j = 0; j < leftColumnItems.length; j++) {
                if (leftColumnItems[j].textIndex === i) {
                    leftItem = leftColumnItems[j];
                    break;
                }
            }
            var rightItem = null;
            for (var j = 0; j < rightColumnItems.length; j++) {
                if (rightColumnItems[j].textIndex === i) {
                    rightItem = rightColumnItems[j];
                    break;
                }
            }

            if (leftItem && itemSource === "news") {
                scripts = leftItem.scripts;
                formId = leftItem.formId;
            } else if (rightItem && itemSource === "announcement") {
                scripts = rightItem.scripts;
                formId = rightItem.formId;
            }

            const matchedItem = {
                text: newsItems.texts[i][langIndex],
                linkData: { 
                    source: itemSource,
                    type: 'rebuild',
                    scripts: scripts,
                    textIndex: i,
                    formId: formId,
                    news: newsItems
                }
            };
            if (!matchedItem.linkData.scripts) {
                matchedItem.linkData.scripts = [];
            }
            if (!matchedItem.linkData.formId) {
                matchedItem.linkData.formId = `search-${i}`;
            }
            matchingItems.push(matchedItem);
        }
    }

    if (matchingItems.length > 0) {
        document.body.innerHTML = '';
        const searchResultsData = {
            form: {
                formSource: belhardSiteData.form.formSource,
                defaultTitle: belhardSiteData.form.defaultTitle,
                data: {
                    navigation: [],
                    textContent: {
                        [belhardSiteData.currentLanguage]: []
                    }
                }
            },
            news: {
                leftColumn: belhardSiteData.news.leftColumn,
                rightColumn: belhardSiteData.news.rightColumn
            },
            navBar: belhardSiteData.navBar
        };

        const textContentArray = searchResultsData.form.data.textContent[belhardSiteData.currentLanguage];
        textContentArray.push(belhardSiteData.navBar.searchResultText[belhardSiteData.currentLanguage]);
        const elementsArray = [];
        for (var i = 0; i < matchingItems.length; i++) {
            const item = matchingItems[i];
            textContentArray.push(item.text);
            const element = {
                type: 'text',
                content: i + 1,
                linkData: item.linkData,
                scripts: item.linkData.scripts
            };
            elementsArray.push(element);
        }

        searchResultsData.form.data.search = {
            id: 'search-results',
            title: 0,
            elements: elementsArray
        };

        const searchMenuItem = {
            text: belhardSiteData.navBar.searchResultText[belhardSiteData.currentLanguage],
            id: null,
            formId: 'search-results',
            source: 'search',
            type: 'rebuild',
            scripts: belhardSiteData.navBar.searchConfig,
            data: searchResultsData
        };

        rebuildPage({ preventDefault: function () {} }, searchMenuItem, belhardSiteData.navBar.searchConfig, window.defaultStyles.churchForm.bodyStyleScroll);
    } else {
        alert(belhardSiteData.navBar.searchMessages[currentLanguage][1]);
    }
}

// Функция закрытия всех вложенных подменю
function closeAllChildren(element) {
    var openChildren = element.querySelectorAll('.open'); // Находим все открытые подменю
    for (var i = 0; i < openChildren.length; i++) {
        openChildren[i].classList.remove('open'); // Закрываем каждое из них
    }
}

// Функция открытия боковой панели
function openSideBar() {
    var navBar = document.getElementById('navbar'); // Получаем <nav>
    var openSideBarButton = document.getElementById('open-sidebar-button'); // Получаем кнопку открытия
    navBar.classList.add('show'); // Добавляем класс 'show'
    openSideBarButton.setAttribute('aria-expanded', 'true'); // Обновляем атрибут доступности
    applyStyles(document.body, window.defaultStyles.churchForm.bodyStyle); // Блокируем прокрутку
}

// Функция закрытия боковой панели
function closeSideBar() {
    var navBar = document.getElementById('navbar'); // Получаем <nav>
    var openSideBarButton = document.getElementById('open-sidebar-button'); // Получаем кнопку открытия
    navBar.classList.remove('show'); // Убираем класс 'show'
    openSideBarButton.setAttribute('aria-expanded', 'false'); // Обновляем атрибут доступности
    closeAllChildren(navBar); // Закрываем все вложенные элементы меню
    applyStyles(document.body, window.defaultStyles.churchForm.bodyStyleScroll); // Восстанавливаем прокрутку
}

function showCountries(currentLanguage) {
    closeSideBar();
    var existingModal = document.getElementById('countries-modal');
    if (!existingModal) {
        var imagePath = path + 'src/assets/pictures/functions/countries_' + currentLanguage + '.jpg';
        
        checkImageExists(imagePath, function (exists) {
            if (!exists) {
                imagePath = path + 'src/assets/pictures/functions/countries_ru.jpg';
            }

            // Создаем контейнер для модального окна
            const modal = createElement('div', { id: 'countries-modal' }, document.body);
            applyStyles(modal, window.defaultStyles.countriesModal.modalStyle);

            const modalContent = createElement('div', {}, modal);
            applyStyles(modalContent, window.defaultStyles.countriesModal.modalContentStyle);

            const img = createElement('img', { id: 'countries-image', src: imagePath, alt: 'Карта стран' }, modalContent);
            applyStyles(img, window.defaultStyles.countriesModal.imageStyle);

            const closeButton = createElement('button', { id: 'close-countries-modal' }, modalContent);
            applyStyles(closeButton, window.defaultStyles.countriesModal.closeButtonStyle);
            closeButton.textContent = belhardSiteData.countriesForm.closeText;

            closeButton.addEventListener('click', function () { modal.remove(); });
            modal.addEventListener('click', function (event) { if (event.target === modal) modal.remove(); });

            var scale = 1;
            img.addEventListener('wheel', function (event) {
                event.preventDefault();
                const rect = img.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;

                scale = event.deltaY < 0 ? scale + 0.1 : scale - 0.1;
                scale = Math.max(1, Math.min(scale, belhardSiteData.countriesForm.maxScale));

                img.style.transformOrigin = `${(offsetX / rect.width) * 100}% ${(offsetY / rect.height) * 100}%`;
                img.style.transform = `scale(${scale})`;
            });
        });
    }
}

function checkImageExists(url, callback) {
    var img = new Image();
    img.onload = function () { callback(true); };
    img.onerror = function () { callback(false); };
    img.src = url;
}