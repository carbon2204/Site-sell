// Функция для создания блока информации о компании с поддержкой многоязычности
function createCompanyBlock(companyData, styles, currentLanguage) {
    var companyBlock = createElement('div', { class: 'company-block' }, document.body);

    const hasTranslation = companyData.texts[currentLanguage] && Array.isArray(companyData.texts[currentLanguage]) && companyData.texts[currentLanguage].length > 0;

    if (!hasTranslation) {
        console.warn(`No translation available for language: ${currentLanguage}. Creating container only.`);
        return () => {};
    }

    applyStyles(companyBlock, styles.companyBlock);

    var logoContainer = createElement('div', { class: 'logo-container' }, companyBlock);
    applyStyles(logoContainer, styles.logoContainer);

    var logo = createElement('img', { 
        src: companyData.logoSrc, 
        alt: companyData.texts[currentLanguage][1] || "No Alt Text"
    }, logoContainer);
    applyStyles(logo, styles.logoImage);

    var companyInfo = createElement('div', { class: 'company-info' }, companyBlock);
    applyStyles(companyInfo, styles.companyInfo);

    var name = createElement('h2', {}, companyInfo);
    name.textContent = companyData.texts[currentLanguage][0] || "No Name";
    applyStyles(name, styles.companyBlockTitle);

    var aboutText1 = createElement('p', {}, companyInfo);
    aboutText1.textContent = companyData.texts[currentLanguage][3] || "No Text";
    applyStyles(aboutText1, styles.companyInfoText);

    var aboutText2 = createElement('p', {}, companyInfo);
    aboutText2.textContent = companyData.texts[currentLanguage][4] || "No Text";
    applyStyles(aboutText2, styles.companyInfoText);

    function applyResponsiveStyles() {
        companyBlock.removeAttribute("style");
        logoContainer.removeAttribute("style");
        logo.removeAttribute("style");
        companyInfo.removeAttribute("style");
        name.removeAttribute("style");
        aboutText1.removeAttribute("style");
        aboutText2.removeAttribute("style");    

        // Сначала применяем базовые стили ко всем элементам, чтобы сбросить любые мобильные изменения
        applyStyles(companyBlock, styles.companyBlock);
        applyStyles(logoContainer, styles.logoContainer);
        applyStyles(logo, styles.logoImage);
        applyStyles(companyInfo, styles.companyInfo);
        applyStyles(name, styles.companyBlockTitle);
        applyStyles(aboutText1, styles.companyInfoText);
        applyStyles(aboutText2, styles.companyInfoText);

        // Затем применяем мобильные стили, если ширина экрана соответствует мобильной версии
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.aboutCompany) {
            applyStyles(companyBlock, styles.companyBlockMobile);
            applyStyles(logoContainer, styles.logoContainerMobile);
            applyStyles(logo, styles.logoImageMobile);
            applyStyles(companyInfo, styles.companyInfoMobile);
            applyStyles(name, styles.companyBlockTitleMobile);
            applyStyles(aboutText1, styles.companyInfoTextMobile);
            applyStyles(aboutText2, styles.companyInfoTextMobile);
        }
    }

    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);

    return companyBlock;  
}