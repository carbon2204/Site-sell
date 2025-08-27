// Функция для создания группы ввода (label + input) в форме (без изменений)
function createInputGroup(labelText, type, name, form, inputGroups) {
    var group = createElement('div', { class: 'form-group' }, form);
    applyStyles(group, window.defaultStyles.contactFormStyles.formGroup);
    
    var label = createElement('label', {}, group);
    label.innerHTML = labelText;
    applyStyles(label, window.defaultStyles.contactFormStyles.formGroupLabel);
    
    var input = createElement('input', { type: type, name: name, required: 'required' }, group);
    applyStyles(input, window.defaultStyles.contactFormStyles.formGroupInput);
    
    inputGroups.push({ group: group, label: label, input: input });
}

// Функция для создания кнопки отправки формы (без изменений)
function createSubmitButton(buttonText, form) {
    var submitBtn = createElement('button', { type: 'submit', class: 'submit-btn' }, form);
    submitBtn.innerHTML = buttonText;
    applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtn);
    
    submitBtn.addEventListener('mouseover', function() {
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtnHover);
    });
    submitBtn.addEventListener('mouseout', function() {
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtn);
    });

    return submitBtn;
}

// Функция для создания контактной формы с поддержкой многоязычности и валидации
function createContactForm(data, currentLanguage) {
    // Проверяем, есть ли уровень contactForm в data, если нет — используем data напрямую
    const contactFormData = data.contactForm || data;

    // Проверяем наличие перевода для текущего языка
    const hasTranslation = contactFormData.texts && contactFormData.texts[currentLanguage] && Array.isArray(contactFormData.texts[currentLanguage]) && contactFormData.texts[currentLanguage].length > 0;

    // Если перевода нет — используем 'ru' как запасной вариант
    if (!hasTranslation) {
        console.warn(`No translation available for language: ${currentLanguage}. Using 'ru' as fallback.`);
        currentLanguage = "ru";
    }

    // Извлекаем текстовый массив для текущего языка
    const textArray = contactFormData.texts[currentLanguage] || [];

    // Создаём обёртку для формы
    var wrapper = createElement('div', { class: 'contact-wrapper parallax-background' }, document.body);
    applyStyles(wrapper, window.defaultStyles.contactFormStyles.contactWrapper);
    
    // Создаём форму
    var form = createElement('form', { class: 'contact-form' }, wrapper);
    applyStyles(form, window.defaultStyles.contactFormStyles.contactForm);
    
    // Добавляем заголовок, если он есть
    if (textArray[0]) {
        var title = createElement('h2', {}, form);
        title.innerHTML = textArray[0]; // title
        applyStyles(title, window.defaultStyles.contactFormStyles.contactFormH2);
    }
    
    // Создаём массив для хранения групп ввода
    var inputGroups = [];
    
    // Создаём поля ввода
    if (textArray[1]) createInputGroup(textArray[1], 'text', 'name', form, inputGroups); // name
    if (textArray[2]) createInputGroup(textArray[2], 'tel', 'phone', form, inputGroups); // phone
    if (textArray[3]) createInputGroup(textArray[3], 'email', 'email', form, inputGroups); // email
    if (textArray[4]) createInputGroup(textArray[4], 'text', 'message', form, inputGroups); // message
    
    // Создаём скрытое поле (honeypot)
    var honeypot = createElement('input', { type: 'text', name: 'hp', style: 'display:none;' }, form);

    // Создаём кнопку отправки
    var submitBtn;
    if (textArray[5]) {
        submitBtn = createSubmitButton(textArray[5], form); // submit
    }
    
    // Добавляем обработчик отправки формы
    if (form.elements.length > 0) {
        form.onsubmit = function(e) {
            e.preventDefault();
            var formData = {};
            for (var i = 0; i < form.elements.length; i++) {
                var element = form.elements[i];
                if (element.name) {
                    formData[element.name] = element.value.trim();
                }
            }

            var errors = [];

            // Проверка honeypot
            if (formData.hp) {
                console.log(textArray[13] || "Bot detected"); // errors.bot
                return false;
            }

            // Валидация имени
            if (textArray[1]) { // name
                if (!formData.name) {
                    errors.push(textArray[6] || "Name field error"); // errors.nameEmpty
                } else if (!/^[a-zA-Zа-яА-Я-]{2,}$/.test(formData.name)) {
                    errors.push(textArray[7] || "Invalid name"); // errors.nameInvalid
                }
            }

            // Валидация телефона
            if (textArray[2]) { // phone
                if (!formData.phone) {
                    errors.push(textArray[8] || "Phone field error"); // errors.phoneEmpty
                } else {
                    formData.phone = formData.phone.replace(/[\s\-\(\)]/g, '');
                    var phoneRegex = /^\+?[0-9]{10,15}$/;
                    if (!phoneRegex.test(formData.phone)) {
                        errors.push(textArray[9] || "Invalid phone"); // errors.phoneInvalid
                    }
                }
            }

            // Валидация email
            if (textArray[3]) { // email
                if (!formData.email) {
                    errors.push(textArray[10] || "Email field error"); // errors.emailEmpty
                } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(formData.email)) {
                    errors.push(textArray[11] || "Invalid email"); // errors.emailInvalid
                }
            }

            // Валидация сообщения
            if (textArray[4] && formData.message && formData.message.length < 5) { // message
                errors.push(textArray[12] || "Message too short"); // errors.messageShort
            }

            if (errors.length > 0) {
                alert(errors.join('\n'));
                return false;
            }

            // Успешная отправка
            onFormSuccess(formData, data, currentLanguage);
            for (var i = 0; i < form.elements.length; i++) {
                form.elements[i].value = '';
            }
            return false;
        };
    }
    
    // Применяем адаптивные стили
    applyResponsiveStyles(form, inputGroups, submitBtn, data, currentLanguage);
    
    window.addEventListener('resize', function() {
        applyResponsiveStyles(form, inputGroups, submitBtn, data, currentLanguage);
    });
    
    return { wrapper, form, inputGroups, submitBtn };
}

// Функция для применения адаптивных стилей (без изменений)
function applyResponsiveStyles(form, inputGroups, submitBtn, data, currentLanguage) {
    var width = document.documentElement.clientWidth;
    var i;
    if (width <= data.mobileSizes.contactFormMobile) {
        applyStyles(form, window.defaultStyles.contactFormStyles.contactFormMobile);
        for (i = 0; i < inputGroups.length; i++) {
            applyStyles(inputGroups[i].group, window.defaultStyles.contactFormStyles.formGroupMobile);
            applyStyles(inputGroups[i].input, window.defaultStyles.contactFormStyles.formGroupInputMobile);
        }
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtnMobile);
    } else {
        applyStyles(form, window.defaultStyles.contactFormStyles.contactForm);
        for (i = 0; i < inputGroups.length; i++) {
            applyStyles(inputGroups[i].group, window.defaultStyles.contactFormStyles.formGroup);
            applyStyles(inputGroups[i].input, window.defaultStyles.contactFormStyles.formGroupInput);
        }
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtn);
    }
    if (width <= data.mobileSizes.contactFormSmallMobile) {
        for (i = 0; i < inputGroups.length; i++) {
            applyStyles(inputGroups[i].group, window.defaultStyles.contactFormStyles.formGroupSmallMobile);
            applyStyles(inputGroups[i].input, window.defaultStyles.contactFormStyles.formGroupInputSmallMobile);
        }
        applyStyles(submitBtn, window.defaultStyles.contactFormStyles.submitBtnSmallMobile);
    }
}

// Функция для обработки успешной отправки формы
function onFormSuccess(formData, data, currentLanguage) {
    // Проверяем, есть ли уровень contactForm в data, если нет — используем data напрямую
    const contactFormData = data.contactForm || data;

    // Проверяем наличие перевода для текущего языка
    const hasTranslation = contactFormData.texts && contactFormData.texts[currentLanguage] && Array.isArray(contactFormData.texts[currentLanguage]) && contactFormData.texts[currentLanguage].length > 0;

    // Если перевода нет — используем 'ru' как запасной вариант
    if (!hasTranslation) {
        console.warn(`No translation available for language: ${currentLanguage}. Using 'ru' as fallback.`);
        currentLanguage = "ru";
    }

    // Извлекаем текстовый массив для текущего языка
    const textArray = contactFormData.texts[currentLanguage] || [];
    
    alert(textArray[14] || "Success"); // success
    console.log(formData);
}