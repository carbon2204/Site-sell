// Инициализация навигации
function initializeNavigation() {
    // Получаем элементы навигации
    var nav = document.querySelector('nav');
    var vMenu = document.querySelector('.visible-menu');
    var hMenu = document.querySelector('.hidden-menu');
    var burger = document.querySelector('.burger');
    var burgerCount = document.querySelector('.burger-count');
    var searchWrapper = document.querySelector('.search-wrapper');
    var languageSelectorContainer = document.querySelector('.language-selector-container');
    var breaks = [];

    // Функция обновления навигации
    function updateNav() {
        // Если ширина окна меньше или равна заданному размеру для мобильной навигации
        if (window.innerWidth <= belhardSiteData.mobileSizes.navBar) {
            // Прячем бургер-меню
            burger.classList.add('hidden');
            hMenu.classList.remove('active');
        } else {
            // Если есть скрытые элементы в меню, показываем бургер-меню
            if (breaks.length > 0) {
                burger.classList.remove('hidden');
            }
            // Определяем доступную ширину навигации в зависимости от наличия бургер-меню
            var navWidth;
            if (burger.classList.contains('hidden')) {
                navWidth = nav.offsetWidth - belhardSiteData.searchWidth;
            } else {
                navWidth = nav.offsetWidth - burger.offsetWidth - belhardSiteData.searchWidth;
            }
            var vMenuWidth = vMenu.offsetWidth;

            // Переносим элементы из видимого меню в скрытое, если они не помещаются
            while (vMenuWidth > navWidth && vMenu.children.length > 0) {
                breaks.push(vMenuWidth);
                hMenu.prepend(vMenu.lastElementChild);
                burger.classList.remove('hidden');
                burgerCount.innerText = breaks.length;
                vMenuWidth = vMenu.offsetWidth;
            }

            // Переносим элементы из скрытого меню в видимое, если они помещаются
            while (hMenu.children.length > 0 && navWidth >= breaks[breaks.length - 1]) {
                vMenu.appendChild(hMenu.firstElementChild);
                breaks.pop();
                burgerCount.innerText = breaks.length;
                if (breaks.length === 0) {
                    burger.classList.add('hidden');
                    hMenu.classList.remove('active');
                }
            }
        }

        // Обновляем положение поисковой строки
        updateSearchPosition();

        // Обновляем сдвиг контейнера выбора языка в зависимости от счетчика
        updateLanguageSelectorPosition();
    }

    // Функция обновления положения поисковой строки
    function updateSearchPosition() {
        searchWrapper.classList.toggle('search-mobile', window.innerWidth <= belhardSiteData.mobileSizes.navBar);
        searchWrapper.classList.toggle('search-shifted', breaks.length > 0 && window.innerWidth > belhardSiteData.mobileSizes.navBar);
    }

    // Функция обновления сдвига контейнера выбора языка
    function updateLanguageSelectorPosition() {
        languageSelectorContainer.classList.toggle('language-selector-mobile', window.innerWidth <= belhardSiteData.mobileSizes.navBar);
        languageSelectorContainer.classList.toggle('language-selector-shifted', breaks.length > 0 && window.innerWidth > belhardSiteData.mobileSizes.navBar);
    }

    // Обработчик клика на бургер-меню
    burger.addEventListener('click', function () {
        hMenu.classList.toggle('active');
        burger.classList.toggle('active');
        updateSearchPosition();
    });

    // Обновляем навигацию при изменении размера окна и при загрузке страницы
    window.addEventListener('resize', updateNav);
    updateNav();
}
