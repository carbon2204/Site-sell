// Функция для применения эффекта ховера (без изменений)
function applyHoverEffect(element, beforeElement) {
    element.addEventListener("mouseover", function (e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        element.style.setProperty("--x", `${x}px`);
        element.style.setProperty("--y", `${y}px`);

        applyStyles(element, window.defaultStyles.servicesStyles.servicesButtonHover);
        applyStyles(beforeElement, window.defaultStyles.servicesStyles.servicesButtonBeforeHover);
    });

    element.addEventListener("mouseleave", function () {
        applyStyles(element, window.defaultStyles.servicesStyles.servicesButton);
        applyStyles(beforeElement, window.defaultStyles.servicesStyles.servicesButtonBefore);
    });
}

// Функция для получения данных сервиса по id и текущему языку
function getServiceData(servicesData, id, currentLanguage) {
    const textArray = servicesData.texts[currentLanguage] || servicesData.texts["ru"];
    const indexOffset = (parseInt(id) - 1) * 5;
    return {
        number: servicesData.items[id].number,
        title1: textArray[indexOffset] || `Service ${id} Title`,
        description1: textArray[indexOffset + 1] || `Service ${id} Description`,
        buttonText: textArray[indexOffset + 2] || "Learn More",
        descriptionPage: textArray[indexOffset + 3] || `Service ${id} Page Description`,
        buttonDP: textArray[indexOffset + 4] || "Order Now"
    };
}

// Генерируем блоки на основе переданных данных, стилей и текущего языка
function createBlocks(data, styles, currentLanguage) {
    const servicesData = data.services || data;
    var container = createElement("div", { class: 'services' }, document.body);

    const hasTranslation = servicesData.texts && servicesData.texts[currentLanguage] && Array.isArray(servicesData.texts[currentLanguage]) && servicesData.texts[currentLanguage].length > 0;

    if (!hasTranslation) {
        return () => {};
    }

    applyStyles(container, styles.container);

    if (!servicesData.items) {
        console.error("No items found in services data.");
        return container;
    }

    for (var key in servicesData.items) {
        if (servicesData.items.hasOwnProperty(key)) {
            var blockData = getServiceData(servicesData, key, currentLanguage);

            var blockElement = createElement("div", { id: "block" }, container);
            applyStyles(blockElement, styles.block);

            var textContent = createElement("div", {}, blockElement);
            applyStyles(textContent, styles.textContent);

            var title = createElement("h3", {}, textContent);
            title.textContent = blockData.title1;
            applyStyles(title, styles.title);

            var description = createElement("p", {}, textContent);
            description.textContent = blockData.description1;
            applyStyles(description, styles.description);

            var button = createElement("button", { class: "servicesButton" }, textContent);
            button.textContent = blockData.buttonText;
            applyStyles(button, styles.servicesButton);
            applyStyles(button, styles.servicesButtonVars);

            var beforeElement = createElement("span", {}, button);
            applyStyles(beforeElement, styles.servicesButtonBefore);

            applyHoverEffect(button, beforeElement);
        }
    }

    var textElement = document.querySelector("p") || createElement("p", {}, document.body);

    // Внутренняя функция для применения адаптивных стилей
    function applyResponsiveStyles() {
        var blocks = document.querySelectorAll("#block");
        var titles = document.querySelectorAll("h3");
        var descriptions = document.querySelectorAll("p");
        var buttons = document.querySelectorAll(".servicesButton");
        var i;
      
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.servicesMobile) {
          applyStyles(textElement, styles.textMobile);
          for (i = 0; i < blocks.length; i++) {
            applyStyles(blocks[i], styles.blockMobile);
          }
          for (i = 0; i < titles.length; i++) {
            applyStyles(titles[i], styles.titleMobile);
          }
          for (i = 0; i < descriptions.length; i++) {
            applyStyles(descriptions[i], styles.descriptionMobile);
          }
          for (i = 0; i < buttons.length; i++) {
            applyStyles(buttons[i], styles.servicesButtonMobile);
          }
          applyStyles(container, styles.containerMobile);
        } else if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.servicesTablet) {
          for (i = 0; i < blocks.length; i++) {
            applyStyles(blocks[i], styles.block);
          }
          for (i = 0; i < titles.length; i++) {
            applyStyles(titles[i], styles.title);
          }
          for (i = 0; i < descriptions.length; i++) {
            applyStyles(descriptions[i], styles.description);
          }
          for (i = 0; i < buttons.length; i++) {
            applyStyles(buttons[i], styles.servicesButton);
          }
          applyStyles(container, styles.containerTablet);
        } else {
          applyStyles(textElement, styles.text);
          for (i = 0; i < blocks.length; i++) {
            applyStyles(blocks[i], styles.block);
          }
          for (i = 0; i < titles.length; i++) {
            applyStyles(titles[i], styles.title);
          }
          for (i = 0; i < descriptions.length; i++) {
            applyStyles(descriptions[i], styles.description);
          }
          for (i = 0; i < buttons.length; i++) {
            applyStyles(buttons[i], styles.servicesButton);
          }
          applyStyles(container, styles.container);
        }
    }

    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);

    return container;
}