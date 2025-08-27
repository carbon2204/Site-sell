function createPreloader() {
    // Создаем и добавляем прелоадер в DOM
    const preloader = document.createElement("div");
    applyStyles(preloader, window.defaultStyles.preloaderStyles.preloader); // Применяем базовые стили прелоадера
    document.body.appendChild(preloader);

    // Создаем текстовый элемент
    const text = document.createElement("div");
    text.innerText = belhardSiteData.title[belhardSiteData.currentLanguage]; // Устанавливаем текст из данных сайта
    applyStyles(text, window.defaultStyles.preloaderStyles.text); // Применяем базовые стили текста
    preloader.appendChild(text); // Добавляем текст в прелоадер

    // Функция для анимации и удаления прелоадера
    function hidePreloader() {
        // Запускаем анимацию скрытия прелоадера
        setTimeout(function() {
            // Применяем стили скрытия для прелоадера
            applyStyles(preloader, window.defaultStyles.preloaderStyles.preloaderHidden);
            // Применяем стили скрытия для текста
            applyStyles(text, window.defaultStyles.preloaderStyles.textHidden);
        }, 800); // Задержка перед началом анимации (800 мс)

        // Удаляем прелоадер из DOM после завершения анимации
        setTimeout(function() {
            preloader.remove(); // Удаляем прелоадер из документа
        }, 1400); // Общая длительность (800 мс + 600 мс для завершения анимации)
    }

    // Убираем прелоадер после полной загрузки страницы (для первого захода)
    window.addEventListener("load", function() {
        hidePreloader(); // Вызываем функцию скрытия прелоадера
    });

    // Добавляем возможность убрать прелоадер при динамическом перестроении страницы
    function checkAndHidePreloader() {
        // Проверяем, готов ли контент (например, существует ли контейнер .services)
        const mainContent = document.querySelector(".services") || document.body.children.length > 1;
        if (mainContent) {
            hidePreloader(); // Если контент готов, скрываем прелоадер
        }
    }

    // Проверяем состояние страницы каждые 100 мс после создания прелоадера
    const interval = setInterval(checkAndHidePreloader, 100);
    // Останавливаем проверку после удаления прелоадера или через 5 секунд
    setTimeout(function() {
        clearInterval(interval); // Останавливаем интервал
    }, 5000); // Максимум 5 секунд

    return preloader; // Опционально возвращаем элемент прелоадера
}