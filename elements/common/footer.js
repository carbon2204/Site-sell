function createFooter(data, style, currentLanguage) {
    // Создаем элемент футера
    var footer = createElement('footer', { id: 'footer', class: 'footer-relative' });

    // Проверяем наличие перевода для текущего языка
    const hasTranslation = data.footer.texts[currentLanguage] && Array.isArray(data.footer.texts[currentLanguage]) && data.footer.texts[currentLanguage].length > 0;

    // Если перевода нет — добавляем футер в тело документа без стилей и возвращаем пустую функцию
    if (!hasTranslation) {
        return () => {};
    }

    // Применяем стили к футеру, если перевод есть
    applyStyles(footer, style.footer);

    // Создаем контейнер для колонок
    var footerContainer = createElement('div', {}, footer);
    applyStyles(footerContainer, style.container);

    // Создаем первую колонку с изображением
    var leftColumn = createElement('div', {}, footerContainer);
    applyStyles(leftColumn, style.leftColumn);

    var image = createElement('img', { src: data.footer.firstColumn.image }, leftColumn);
    applyStyles(image, style.footerImage);

    // Создаем вторую колонку с заголовком "Услуги" и списком услуг
    var centerColumn = createElement('div', {}, footerContainer);
    applyStyles(centerColumn, style.centerColumn);

    var servicesTitle = createElement('h3', {}, centerColumn);
    servicesTitle.textContent = data.footer.texts[currentLanguage][0] || "No Title"; // index 0 — secondColumn.title
    applyStyles(servicesTitle, style.columnTitle);

    for (let i = 1; i <= 6; i++) { // Индексы 1–6 для services
        var serviceItem = createElement('div', {}, centerColumn);
        serviceItem.textContent = data.footer.texts[currentLanguage][i] || `Service ${i}`;
        applyStyles(serviceItem, style.serviceItem);
    }

    // Создаем третью колонку с заголовком "Связаться с нами" и данными
    var rightColumn = createElement('div', {}, footerContainer);
    applyStyles(rightColumn, style.rightColumn);

    var contactTitle = createElement('h3', {}, rightColumn);
    contactTitle.textContent = data.footer.texts[currentLanguage][7] || "No Title"; // index 7 — thirdColumn.title
    applyStyles(contactTitle, style.columnTitle);

    // Добавляем данные из thirdColumn.columnData с иконками
    const columnData = {
        phone: data.footer.thirdColumn.columnData.phone,
        email: data.footer.thirdColumn.columnData.email,
        address: data.footer.texts[currentLanguage][8] // index 8 — thirdColumn.columnData.address
    };

    for (const key of Object.keys(columnData)) {
        var contactItem = createElement('div', {}, rightColumn);
        applyStyles(contactItem, style.contactItem);

        var icon = createElement('img', { src: data.footer.thirdColumn.icons[key] }, contactItem);
        applyStyles(icon, style.contactIcon);

        var dataDiv = createElement('div', {}, contactItem);
        if (key === 'phone') {
            var phoneLink = createElement('a', {
                href: `tel:${columnData[key].replace(/\s/g, '')}`
            }, dataDiv);
            phoneLink.textContent = columnData[key];
            applyStyles(phoneLink, style.columnText);
        } else if (key === 'email') {
            var emailLink = createElement('a', {
                href: `mailto:${columnData[key]}?subject=${encodeURIComponent(data.footer.texts[currentLanguage][10])}&body=${encodeURIComponent(data.footer.texts[currentLanguage][11])}` // index 10 и 11
            }, dataDiv);
            emailLink.textContent = columnData[key];
            applyStyles(emailLink, style.columnText);
        } else {
            dataDiv.textContent = columnData[key];
            applyStyles(dataDiv, style.columnText);
        }
    }

    // Добавляем строку с иконками социальных сетей
    var socialMediaContainer = createElement('div', {}, rightColumn);
    applyStyles(socialMediaContainer, style.socialMediaContainer);

    for (const network of Object.keys(data.footer.thirdColumn.socialMedia)) {
        (function(network) {
            var socialLink = createElement('a', {
                href: data.footer.thirdColumn.socialMedia[network].link,
                target: "_blank",
                rel: "noopener noreferrer"
            }, socialMediaContainer);

            var socialIcon = createElement('img', { src: data.footer.thirdColumn.socialMedia[network].icon }, socialLink);
            applyStyles(socialIcon, style.socialMediaIcon);

            socialLink.addEventListener("mouseenter", function () {
                applyStyles(socialIcon, style.socialMediaIconHover);
            });
            socialLink.addEventListener("mouseleave", function () {
                applyStyles(socialIcon, style.socialMediaIcon);
            });
        })(network);
    }

    // Создаем полосу с копирайтом внизу
    var copyrightDiv = createElement('div', {}, footer);
    copyrightDiv.textContent = data.footer.texts[currentLanguage][9] || "No Copyright"; // index 9 — copyright
    applyStyles(copyrightDiv, style.copyright);
    applyStyles(copyrightDiv, style.copyrightText);

    // Добавляем футер в тело документа
    document.body.appendChild(footer);

    // Функция для применения адаптивных стилей
    function applyResponsiveStyles() {
        if (document.documentElement.clientWidth <= 768) {
            applyStyles(leftColumn, style.leftColumnMobile);
            applyStyles(centerColumn, style.centerColumnMobile);
            applyStyles(rightColumn, style.rightColumnMobile);
            applyStyles(servicesTitle, style.columnTitleMobile);
            applyStyles(contactTitle, style.columnTitleMobile);
            applyStyles(footerContainer, style.containerMobile);
            applyStyles(image, style.footerImageMobile);
            applyStyles(copyrightDiv, style.textMobile);
        } else {
            applyStyles(leftColumn, style.leftColumn);
            applyStyles(centerColumn, style.centerColumn);
            applyStyles(servicesTitle, style.columnTitle);
            applyStyles(contactTitle, style.columnTitle);
            applyStyles(rightColumn, style.rightColumn);
            applyStyles(footerContainer, style.container);
            applyStyles(image, style.footerImage);
            applyStyles(copyrightDiv, style.copyrightText);
        }
    }

    // Корректировка положения футера
    function adjustFooterPosition() {
        var footer = document.getElementById('footer');
        if (!footer) return;

        var body = document.body;
        var html = document.documentElement;
        var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (pageHeight <= window.innerHeight) {
            footer.classList.remove("footer-relative");
            footer.classList.add("footer-fixed");
        } else {
            footer.classList.remove("footer-fixed");
            footer.classList.add("footer-relative");
        }
    }

    applyResponsiveStyles();
    adjustFooterPosition();

    window.addEventListener("resize", function () {
        applyResponsiveStyles();
        adjustFooterPosition();
    });
    window.addEventListener("load", adjustFooterPosition);

    return footer;
}