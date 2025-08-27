// Функция создания содержимого страницы с учетом данных, стилей и текущего языка
function createPageContent(data, pageStyles, menuItem, currentLanguage) {
    // Создаем контейнер для основного содержимого страницы
    const contentContainer = document.createElement("div");
    contentContainer.id = "contentContainer"
    // Применяем стили к контейнеру содержимого
    applyStyles(contentContainer, pageStyles.contentContainer);
    // Добавляем контейнер в body документа
    document.body.appendChild(contentContainer);
    belhardSiteData.currentMenuItem = menuItem;
    // Объявляем переменную для текста меню
    let menuText;
    // Определяем текст меню в зависимости от источника menuItem
    if (menuItem.source === "navigation") {
        // Если источник - навигация, берем текст из navBarText по id или используем дефолтный заголовок
        if (data.navBar.navBarText[currentLanguage][parseInt(menuItem.id) - 1]) {
            menuText = data.navBar.navBarText[currentLanguage][parseInt(menuItem.id) - 1];
        } else {
            menuText = data.form.defaultTitle[currentLanguage];
        }
    } else if (menuItem.source === "search") {
        // Если источник - поиск, выбираем текст результата поиска в зависимости от языка
        if (currentLanguage === "ru") {
            menuText = belhardSiteData.navBar.searchResultText.ru;
        } else {
            menuText = belhardSiteData.navBar.searchResultText.en;
        }
    } else if (menuItem.source === "news") {
        // Если источник - новости, проверяем наличие textIndex
        if (menuItem.textIndex !== undefined) {
            // Берем текст из news.texts по textIndex и языку или используем дефолтный заголовок
            if (data.news.texts[menuItem.textIndex]) {
                if (currentLanguage === "ru") {
                    if (data.news.texts[menuItem.textIndex][0]) {
                        menuText = data.news.texts[menuItem.textIndex][0];
                    } else {
                        menuText = data.form.defaultTitle[currentLanguage];
                    }
                } else {
                    if (data.news.texts[menuItem.textIndex][1]) {
                        menuText = data.news.texts[menuItem.textIndex][1];
                    } else {
                        menuText = data.form.defaultTitle[currentLanguage];
                    }
                }
            } else {
                menuText = data.form.defaultTitle[currentLanguage];
            }
        } else {
            menuText = data.form.defaultTitle[currentLanguage];
        }
    } else if (menuItem.source === "announcement") {
        // Если источник - анонсы, проверяем наличие textIndex
        if (menuItem.textIndex !== undefined) {
            // Берем текст из news.texts по textIndex и языку или используем дефолтный заголовок
            if (data.news.texts[menuItem.textIndex]) {
                if (currentLanguage === "ru") {
                    if (data.news.texts[menuItem.textIndex][0]) {
                        menuText = data.news.texts[menuItem.textIndex][0];
                    } else {
                        menuText = data.form.defaultTitle[currentLanguage];
                    }
                } else {
                    if (data.news.texts[menuItem.textIndex][1]) {
                        menuText = data.news.texts[menuItem.textIndex][1];
                    } else {
                        menuText = data.form.defaultTitle[currentLanguage];
                    }
                }
            } else {
                menuText = data.form.defaultTitle[currentLanguage];
            }
        } else {
            menuText = data.form.defaultTitle[currentLanguage];
        }
    } else {
        // Для других случаев используем menuItem.text или дефолтный заголовок
        if (menuItem.text) {
            menuText = menuItem.text;
        } else {
            menuText = data.form.defaultTitle[currentLanguage];
        }
    }
  
    // Устанавливаем заголовок документа на основе menuText
    document.title = menuText;
  
    // Создаем контейнер с основным заголовком, используя menuText
    const mainTitleContainer = createMainTitle(menuText, pageStyles);
    // Добавляем контейнер заголовка в основной контейнер
    contentContainer.appendChild(mainTitleContainer);
  
    // Создаем левую колонку для содержимого
    const leftColumn = document.createElement("div");
    // Применяем стили к левой колонке
    applyStyles(leftColumn, pageStyles.leftColumn);
  
    // Создаем блок услуг на основе элементов навигации
    const servicesDiv = calendar(pageStyles, data, currentLanguage);
    // Добавляем блок услуг в левую колонку
    leftColumn.appendChild(servicesDiv);
  
    // Создаем блок новостей на основе данных левой колонки
    const newsDiv = createNewsDiv(data.news.leftColumn, pageStyles, currentLanguage);
    // Если блок новостей создан, добавляем его в левую колонку
    if (newsDiv) {
        leftColumn.appendChild(newsDiv);
    }
  
    // Создаем правую колонку для содержимого
    const rightColumn = document.createElement("div");
    // Применяем стили к правой колонке
    applyStyles(rightColumn, pageStyles.rightColumn);
  
    // Создаем верхний блок правой колонки (например, тестирование)
    const testingDiv = createRightTopgDiv(data, pageStyles, menuItem.formId, menuItem.source, currentLanguage);
    // Добавляем блок в правую колонку
    rightColumn.appendChild(testingDiv);
  
    // Создаем контейнер для двухколоночной структуры
    const twoColumnsContainer = document.createElement("div");
    // Применяем стили к контейнеру двух колонок
    applyStyles(twoColumnsContainer, pageStyles.twoColumns);
    // Добавляем левую колонку в контейнер
    twoColumnsContainer.appendChild(leftColumn);
    // Добавляем правую колонку в контейнер
    twoColumnsContainer.appendChild(rightColumn);
  
    // Добавляем контейнер двух колонок в основной контейнер
    contentContainer.appendChild(twoColumnsContainer);
  
    // Функция применения адаптивных стилей
    function applyResponsiveStyles() {
        // Получаем элементы для адаптации
        const mainTitle = document.getElementById('mainTitle');
        const mainTitleContainer = document.querySelector(".mainTitleContainer");
        // Если необходимые элементы отсутствуют, выходим
        if (!mainTitle || !mainTitleContainer || !leftColumn) return;
  
        // Проверяем ширину экрана для применения мобильных стилей
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.formLeftColumn) {
            applyStyles(leftColumn, pageStyles.leftColumnMobile);
            applyStyles(mainTitle, pageStyles.mainTitleMobile);
        } else {
            applyStyles(leftColumn, pageStyles.leftColumn);
            applyStyles(mainTitle, pageStyles.mainTitle);
        }
  
        // Адаптируем размер шрифта заголовка под ширину экрана
        var fontSize = parseInt(window.getComputedStyle(mainTitle).fontSize);
        while (mainTitle.scrollWidth > document.documentElement.clientWidth && fontSize > 24) {
            fontSize -= 1;
            mainTitle.style.fontSize = `${fontSize}px`;
        }
    }
  
    // Применяем адаптивные стили при загрузке
    applyResponsiveStyles();
    // Добавляем обработчик изменения размера окна для адаптивности
    window.addEventListener("resize", applyResponsiveStyles);
  
    // Прокручиваем страницу вверх
    scrollToTop();
  }
  
  // Функция создания контейнера с основным заголовком
  function createMainTitle(titletext, pageStyles) {
    // Создаем контейнер для заголовка
    const container = document.createElement("div");
    container.className = "mainTitleContainer";
    // Применяем стили к контейнеру заголовка
    applyStyles(container, pageStyles.mainTitleContainer);
  
    // Создаем элемент для фонового изображения
    const backgroundImage = document.createElement("div");
    backgroundImage.className = "backgroundImage";
    // Применяем стили к фоновому изображению
    applyStyles(backgroundImage, pageStyles.backgroundImage);
    // Добавляем фоновое изображение в контейнер
    container.appendChild(backgroundImage);
  
    // Создаем элемент h1 для основного заголовка
    const mainTitle = createElement('h1', { id: 'mainTitle' }, null);
    // Устанавливаем текст заголовка или дефолтный, если текста нет
    if (titletext) {
        mainTitle.textContent = titletext;
    } else {
        mainTitle.textContent = belhardSiteData.form.defaultTitle[currentLanguage];
    }
    // Применяем стили к заголовку
    applyStyles(mainTitle, pageStyles.mainTitle);
    // Добавляем заголовок в контейнер
    container.appendChild(mainTitle);
  
    // Возвращаем контейнер с заголовком
    return container;
  }
  
  // Функция получения элементов по родительскому ID
  function getItemsByParent(items, parentId) {
    // Фильтруем элементы, оставляя только активные с указанным родителем
    const filteredItems = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].parent === parentId && items[i].state === "1") {
            filteredItems.push(items[i]);
        }
    }
    return filteredItems;
  }
  
  // Функция создания ссылки для элемента меню
  function generateLink(item, pageStyles, currentLanguage) {
    // Создаем элемент ссылки
    const a = document.createElement("a");
    // Устанавливаем текст ссылки из navBarText по id
    a.textContent = belhardSiteData.navBar.navBarText[currentLanguage][parseInt(item.id) - 1];
    // Применяем стили к ссылке
    applyStyles(a, pageStyles.link);
    // Возвращаем созданную ссылку
    return a;
  }
  
  // Функция отрисовки элементов списка
  function renderItems(items, list, pageStyles, currentLanguage) {
    // Перебираем элементы для создания пунктов списка
    for (var i = 0; i < items.length; i++) {
        const item = items[i];
        const listItem = document.createElement("li");
        // Добавляем ссылку в пункт списка
        listItem.appendChild(generateLink(item, pageStyles, currentLanguage));
        // Добавляем пункт в список
        list.appendChild(listItem);
    }
  }
  
  function calendar(pageStyles, data, currentLanguage) {  
      const container = createElement('div', { class: 'calendar-container' });
      applyStyles(container, pageStyles.servicesDiv);
  
      const dayContainer = createElement('div', { class: 'calendar-day-content' });
  
      const prevButton = createElement('button', {}, null);
      prevButton.textContent = currentLanguage === 'ru' ? "← Предыдущий" : "← Previous";
  
      const nextButton = createElement('button', {}, null);
      nextButton.textContent = currentLanguage === 'ru' ? "Следующий →" : "Next →";
  
      const navContainer = createElement('div', { class: 'nav-container' });
      navContainer.appendChild(prevButton);
      navContainer.appendChild(nextButton);
  
      let currentIndex = 0;
  
      function displayDay(index) {
          const day = belhardSiteData.calendarData[index];
          
          // Clear previous content
          dayContainer.innerHTML = '';
          
          // Day info
          const dayDiv = createElement('div', { class: 'calendar-day' }, dayContainer);
          createElement('span', { class: 'date' }, dayDiv).textContent = day.date[currentLanguage];
          createElement('span', { class: 'day-name' }, dayDiv).textContent = day.dayName[currentLanguage];
  
          // Image (if exists)
          if (day.image) {
              const imageDiv = createElement('div', { class: 'day-image' }, dayContainer);
              createElement('img', {
                  src: day.image,
                  alt: day.date[currentLanguage]
              }, imageDiv);
          }
  
          // Saints list
          const saintsList = createElement('div', { class: 'saints-list' }, dayContainer);
          day.saints[currentLanguage].forEach(saint => {
              const span = createElement('span', {}, saintsList);
              const link = createElement('a', {
                  href: 'https://azbyka.ru/days/',
                  target: '_blank',
                  class: 'saint-link'
              }, span);
              link.textContent = saint;
          });
  
          // Fasting info
          createElement('div', { class: 'fasting-info' }, dayContainer).textContent = day.fasting[currentLanguage];
  
          prevButton.disabled = index === 0;
          nextButton.disabled = index === belhardSiteData.calendarData.length - 1;
  
          applyStyles(dayDiv, pageStyles.additionalStyles.calendarDay);
          if (day.image) {
              applyStyles(dayContainer.querySelector('.day-image'), pageStyles.additionalStyles.dayImage);
          }
          applyStyles(saintsList, pageStyles.additionalStyles.saintsList);
          applyStyles(dayContainer.querySelector('.fasting-info'), pageStyles.additionalStyles.fastingInfo);
      }
  
      applyStyles(prevButton, pageStyles.additionalStyles.navButtons);
      applyStyles(nextButton, pageStyles.additionalStyles.navButtons);
      applyStyles(navContainer, pageStyles.additionalStyles.navContainer);
  
      prevButton.addEventListener('click', () => {
          if (currentIndex > 0) {
              currentIndex--;
              displayDay(currentIndex);
          }
      });
  
      nextButton.addEventListener('click', () => {
          if (currentIndex < belhardSiteData.calendarData.length - 1) {
              currentIndex++;
              displayDay(currentIndex);
          }
      });
  
      // Add method to change language
      container.changeLanguage = function(newLanguage) {
          prevButton.textContent = newLanguage === 'ru' ? "← Предыдущий" : "← Previous";
          nextButton.textContent = newLanguage === 'ru' ? "Следующий →" : "Next →";
          displayDay(currentIndex);
      };
  
      container.appendChild(dayContainer);
      container.appendChild(navContainer);
  
      displayDay(currentIndex);
  
      return container;
  }
  
  // Функция создания верхнего блока правой колонки
  function createRightTopgDiv(data, pageStyles, formId, source, currentLanguage) {
    // Создаем контейнер для блока
    const container = document.createElement("div");
    // Применяем стили к контейнеру
    applyStyles(container, pageStyles.testingDiv);
  
    // Объявляем переменную для данных формы
    var formData = null;
    // Ищем данные формы в зависимости от источника и formId
    if (formId && source) {
        if (source === "news") {
            for (var i = 0; i < data.form.data.news.length; i++) {
                if (data.form.data.news[i].id === formId) {
                    formData = data.form.data.news[i];
                    break;
                }
            }
        } else if (source === "announcement") {
            for (var i = 0; i < data.form.data.announcement.length; i++) {
                if (data.form.data.announcement[i].id === formId) {
                    formData = data.form.data.announcement[i];
                    break;
                }
            }
        } else if (source === "navigation") {
            for (var i = 0; i < data.form.data.navigation.length; i++) {
                if (data.form.data.navigation[i].id === formId) {
                    formData = data.form.data.navigation[i];
                    break;
                }
            }
        } else if (source === "search") {
            if (data.form.data.search && data.form.data.search.id === formId) {
                formData = data.form.data.search;
            } else {
                formData = null;
            }
        }
    }
  
    // Создаем заголовок h2 для блока
    const title = document.createElement("h2");
    // Устанавливаем текст заголовка из formData или дефолтный
    if (formData) {
        title.textContent = data.form.data.textContent[currentLanguage][formData.title];
    } else {
        title.textContent = data.form.defaultTitle[currentLanguage];
    }
    // Добавляем заголовок в контейнер
    container.appendChild(title);
  
    // Если есть элементы формы, обрабатываем их
    if (formData && formData.elements && formData.elements.length > 0) {
        for (var i = 0; i < formData.elements.length; i++) {
            var element = formData.elements[i];
            if (element.type === "text") {
                const p = document.createElement("p");
                // Устанавливаем текст из textContent или пустую строку
                if (data.form.data.textContent[currentLanguage][element.content]) {
                    p.textContent = data.form.data.textContent[currentLanguage][element.content];
                } else {
                    p.textContent = "";
                }
                // Если есть данные ссылки и скрипты, добавляем "Подробнее"
                if (element.linkData && element.scripts) {
                    const moreLink = document.createElement("a");
                    moreLink.textContent = ' ' + belhardSiteData.news.extraInfornation[currentLanguage];
                    applyStyles(moreLink, pageStyles.link);
                    attachRebuildListener(moreLink, element.linkData, null);
                    p.appendChild(moreLink);
                }
                // Применяем стили к параграфу или пустой объект, если стилей нет
                applyStyles(p, pageStyles.textElement || {});
                container.appendChild(p);
            } else if (element.type === "list") {
                createListElement(element, container, pageStyles, data.form.data.textContent[currentLanguage]);
            } else if (element.type === "image") {
                createImageElement(element, container, pageStyles, data.form.data.textContent[currentLanguage]);
            }
        }
    }
  
    // Возвращаем контейнер блока
    return container;
  }
  
  // Функция создания блока новостей
  function createNewsDiv(newsData, pageStyles, currentLanguage) {
    // Если количество отображаемых новостей равно 0, возвращаем null
    if (belhardSiteData.news.amountOfShownNews.formPageAmount <= 0) return null;
    
    // Определяем индекс языка: 0 для русского, 1 для другого
    let langIndex;
    if (currentLanguage === "ru") {
        langIndex = 0;
    } else {
        langIndex = 1;
    }
  
    // Создаем контейнер для новостей
    const container = document.createElement("div");
    // Применяем стили к контейнеру
    applyStyles(container, pageStyles.newsDiv);
  
    // Создаем заголовок h2 для блока новостей
    const title = document.createElement("h2");
    // Устанавливаем текст заголовка из данных
    title.textContent = newsData.title[currentLanguage];
    // Добавляем заголовок в контейнер
    container.appendChild(title);
  
    // Счетчик отображенных новостей
    var shownCount = 0;
    // Перебираем новости в обратном порядке, пока не достигнем лимита
    for (var i = newsData.items.length - 1; i >= 0 && shownCount < belhardSiteData.news.amountOfShownNews.formPageAmount; i--) {
        const newsItem = newsData.items[i];
        // Устанавливаем источник новости
        newsItem.source = "news";
        // Создаем блок для новости
        const newsBlock = document.createElement("div");
        applyStyles(newsBlock, pageStyles.newsBlock);
  
        // Создаем ссылку для новости
        const newsLink = document.createElement("a");
        // Устанавливаем текст ссылки из глобальных данных новостей
        newsLink.textContent = belhardSiteData.news.texts[i][langIndex];
        // Применяем стили к ссылке
        applyStyles(newsLink, pageStyles.newsText);
  
        // Привязываем обработчик события к ссылке
        attachRebuildListener(newsLink, newsItem, null);
  
        // Добавляем ссылку в блок новости
        newsBlock.appendChild(newsLink);
        // Создаем элемент для даты новости
        const newsDate = document.createElement("span");
        // Устанавливаем текст даты
        newsDate.textContent = newsItem.date;
        // Применяем стили к дате
        applyStyles(newsDate, pageStyles.newsDate);
        // Добавляем дату в блок новости
        newsBlock.appendChild(newsDate);
  
        // Добавляем блок новости в контейнер
        container.appendChild(newsBlock);
        // Увеличиваем счетчик отображенных новостей
        shownCount++;
    }
  
    // Возвращаем контейнер новостей
    return container;
  }
  
  // Функция создания текстового элемента
  function createTextElement(element, container, pageStyles, textContent) {
    // Создаем параграф для текста
    const p = document.createElement("p");
    // Устанавливаем текст из textContent или пустую строку
    if (textContent[element.content]) {
        p.textContent = textContent[element.content];
    } else {
        p.textContent = "";
    }
    // Если указан стиль, применяем его
    if (element.style && pageStyles[element.style]) {
        applyStyles(p, pageStyles[element.style]);
    }
    // Добавляем параграф в контейнер
    container.appendChild(p);
  }
  
  // Функция создания элемента списка
  function createListElement(element, container, pageStyles, textContent) {
    // Создаем неупорядоченный список
    const ul = document.createElement("ul");
    // Если указан стиль, применяем его
    if (element.style && pageStyles[element.style]) {
        applyStyles(ul, pageStyles[element.style]);
    }
    // Получаем массив элементов списка из textContent или пустой массив
    const items = textContent[element.content] || [];
    // Перебираем элементы для создания пунктов списка
    for (var i = 0; i < items.length; i++) {
        var itemText = items[i];
        const li = document.createElement("li");
        li.textContent = itemText;
        ul.appendChild(li);
    }
    // Добавляем список в контейнер
    container.appendChild(ul);
  }
  
  // Функция создания элемента изображения
  function createImageElement(element, container, pageStyles, textContent) {
    // Создаем элемент изображения
    const img = document.createElement("img");
    // Устанавливаем источник изображения
    img.src = element.content;
    // Устанавливаем альтернативный текст из textContent или дефолтный
    if (textContent[element.alt]) {
        img.alt = textContent[element.alt];
    } else {
        img.alt = "Image";
    }
    // Если указан стиль, применяем его
    if (element.style && pageStyles[element.style]) {
        applyStyles(img, pageStyles[element.style]);
    }
    // Добавляем изображение в контейнер
    container.appendChild(img);
  }
  // Функция для обновления содержимого страницы с новым языком
function updatePageContentLanguage(newLanguage) {
    const existingContent = document.getElementById('contentContainer');
    if (!existingContent) return; // Если контента нет, выходим

    const currentMenuItem = belhardSiteData.currentMenuItem;
    if (!currentMenuItem) {
        console.warn("Текущий menuItem не найден в belhardSiteData.currentMenuItem");
        return;
    }

    // Удаляем старый контент
    existingContent.remove();

    // Создаем новый контент с новым языком
    createPageContent(belhardSiteData, window.defaultStyles.pageStyles, currentMenuItem, newLanguage);
}