function createMain(data, styles, currentLanguage) {
    const mainContainer = createElement('div', { class: 'main-container' }, document.body);

    const hasTranslation = data.texts && data.texts[currentLanguage] && Array.isArray(data.texts[currentLanguage]) && data.texts[currentLanguage].length > 0;

    if (!hasTranslation) {
        return () => {};
    }

    applyStyles(mainContainer, styles.mainContainer);

    const leftColumn = createElement('div', {}, mainContainer);
    applyStyles(leftColumn, styles.leftColumn);

    const title = createElement('h1', {}, leftColumn);
    title.textContent = data.texts[currentLanguage][0];
    applyStyles(title, styles.title);

    const topContainer = createElement('div', {}, leftColumn);
    applyStyles(topContainer, styles.topContainer);

    const topLeft = createElement('div', {}, topContainer);
    applyStyles(topLeft, styles.topLeft);
    topLeft.textContent = data.texts[currentLanguage][5];

    const topRight = createElement('div', {}, topContainer);
    applyStyles(topRight, styles.topRight);

    const bottomContainer = createElement('div', {}, leftColumn);
    applyStyles(bottomContainer, styles.bottomContainer);

    const bottomLeft = createElement('div', {}, bottomContainer);
    applyStyles(bottomLeft, styles.bottomLeft);

    const button = createElement('button', {}, bottomLeft);
    applyStyles(button, styles.button);
    button.textContent = data.texts[currentLanguage][6];

    button.addEventListener('mouseover', () => {
        applyStyles(button, styles.buttonHover);
    });
    button.addEventListener('mouseout', () => {
        applyStyles(button, styles.button);
    });

    const bottomRight = createElement('div', {}, bottomContainer);
    applyStyles(bottomRight, styles.bottomRight);
    bottomRight.textContent = data.texts[currentLanguage][3];

    const rightColumn = createElement('div', {}, mainContainer);
    applyStyles(rightColumn, styles.rightColumn);

    const logoImage = createElement('img', {
        src: data.logoSrc,
        alt: data.texts[currentLanguage][1]
    }, rightColumn);
    applyStyles(logoImage, styles.logoImage);

    function applyResponsiveStyles() {
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.mainPage) {
            applyStyles(mainContainer, styles.mainContainerMobile);
            applyStyles(leftColumn, styles.leftColumnMobile);
            applyStyles(rightColumn, styles.rightColumnMobile);
            applyStyles(title, styles.titleMobile);
            applyStyles(topContainer, styles.topContainerMobile);
            applyStyles(topLeft, styles.topLeftMobile);
            applyStyles(bottomContainer, styles.bottomContainerMobile);
            applyStyles(bottomLeft, styles.bottomLeftMobile);
            applyStyles(button, styles.buttonMobile);
            applyStyles(bottomRight, styles.bottomRightMobile);
            applyStyles(logoImage, styles.logoImageMobile);
        } else {
            applyStyles(mainContainer, styles.mainContainer);
            applyStyles(leftColumn, styles.leftColumn);
            applyStyles(rightColumn, styles.rightColumn);
            applyStyles(title, styles.title);
            applyStyles(topContainer, styles.topContainer);
            applyStyles(topLeft, styles.topLeft);
            applyStyles(bottomContainer, styles.bottomContainer);
            applyStyles(bottomLeft, styles.bottomLeft);
            applyStyles(button, styles.button);
            applyStyles(bottomRight, styles.bottomRight);
            applyStyles(logoImage, styles.logoImage);
        }
    }

    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);

    return mainContainer;
}