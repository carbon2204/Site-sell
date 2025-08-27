// Функция для получения начального языка
function getInitialLanguage(languages) {
    // Объявляем переменную для хранения текущего языка
    var currentLanguage;

    // Проверяем, есть ли сохранённый язык в localStorage
    const storedLanguage = localStorage.getItem("selectedLanguage");
    // Если язык сохранён и он присутствует в массиве languages, используем его
    if (storedLanguage && languages.some(function(lang) { return lang[0] === storedLanguage; })) {
        // Присваиваем сохранённый язык переменной currentLanguage
        currentLanguage = storedLanguage;
    } else {
        // Если в localStorage ничего нет, берём язык из настроек браузера
        // Используем navigator.language или первый язык из navigator.languages
        const userLanguage = navigator.language || navigator.languages[0]; // "en-US", "ru-RU" и т.д.
        // Проверяем, начинается ли язык пользователя с "en" (английский)
        if (userLanguage.toLowerCase().startsWith("en")) {
            // Если да, устанавливаем английский язык
            currentLanguage = "en";
        } else {
            // Если нет, устанавливаем русский язык
            currentLanguage = "ru";
        }
        // Сохраняем выбранный язык в localStorage для последующего использования
        localStorage.setItem("selectedLanguage", currentLanguage);
    }
    // Устанавливаем текущий язык в объект belhardSiteData
    belhardSiteData.currentLanguage = currentLanguage;
}