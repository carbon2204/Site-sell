// Функция для перестроения страницы на основе переданных данных и стилей
function rebuildPage(event, itemData, scripts, rebuildStyles) {
    // Предотвращаем стандартное поведение события (например, переход по ссылке)
    event.preventDefault();
    
    // Проверяем, является ли тип itemData "rebuild" (перестройка страницы)
    if (itemData.type === "rebuild") {
        // Очищаем содержимое body, удаляя все элементы
        document.body.innerHTML = "";
        // Применяем стили к body, используя переданные rebuildStyles или дефолтные стили из window.defaultStyles.churchForm.bodyStyleScroll
        applyStyles(document.body, rebuildStyles || window.defaultStyles.churchForm.bodyStyleScroll);
    }
    
    // Проверяем, является ли scripts массивом и содержит ли он элементы
    if (Array.isArray(scripts) && scripts.length > 0) {
        // Используем блок try-catch для обработки возможных ошибок при выполнении скриптов
        try {
            // Проходим по каждому идентификатору скрипта в массиве scripts
            for (var scriptId of scripts) {
                // Получаем функцию скрипта из объекта belhardSiteData.scriptsConfig по идентификатору
                var scriptFn = belhardSiteData.scriptsConfig[scriptId];
                // Проверяем, является ли scriptFn функцией
                if (typeof scriptFn === 'function') {
                    // Выполняем функцию, передавая ей itemData как аргумент
                    scriptFn(itemData);
                } else {
                    // Выводим предупреждение в консоль, если scriptFn не является функцией
                    console.warn(`Script ${scriptId} is not a function`);
                }
            }
        } catch (e) {
            // Выводим ошибку в консоль, если выполнение скриптов завершилось с исключением
            console.error('Error executing scripts:', e);
        }
    }
}

// Функция для привязки слушателя событий к элементу для перестроения страницы или управления подменю
function attachRebuildListener(element, itemData, li) {
    // Добавляем слушатель события 'click' к переданному элементу
    element.addEventListener('click', function(event) {
        // Проверяем, меньше ли ширина окна порога для мобильной навигации и есть ли у элемента класс 'has-children'
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.navBar && 
            li && li.classList.contains('has-children')) {
            // Предотвращаем стандартное поведение события (например, переход по ссылке)
            event.preventDefault();
            // Проверяем, открыт ли элемент (наличие класса 'open')
            const isOpen = li.classList.contains('open');
            // Закрываем все вложенные подменю текущего элемента
            closeAllChildren(li);
            // Переключаем класс 'open' на противоположное значение (открываем или закрываем подменю)
            li.classList.toggle('open', !isOpen);
        } else {
            // Если условия для мобильного меню не выполнены, вызываем функцию перестроения страницы
            // Передаем событие, itemData и массив scripts из itemData (или пустой массив, если scripts отсутствует)
            rebuildPage(event, itemData, itemData.scripts || []);
        }
    });
}