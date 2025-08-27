const globalStyles = `
/* Анимация появления с изменением прозрачности и масштаба */
@keyframes fadeIn {
    from {
        opacity: 0;           /* Начальная прозрачность */
        transform: scale(0.9);/* Начальный масштаб (уменьшение) */
    }
    to {
        opacity: 1;           /* Конечная прозрачность */
        transform: scale(1);  /* Конечный масштаб (нормальный размер) */
    }
}

/* Анимация появления только с изменением прозрачности */
@keyframes slideIn {
    from {
        opacity: 0;           /* Начальная прозрачность */
    }
    to {
        opacity: 1;           /* Конечная прозрачность */
    }
}

/* Анимация прокрутки вниз */
@keyframes scrollDown {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
}

/* Переменные CSS для глобального использования */
:root {
    --hiddenMenuColor: #2C4A6E;         /* Цвет скрытого меню */
    --counter: rgb(250, 252, 255);      /* Цвет счетчика (почти белый) */
    --primary-color: #1D7B72;           /* Основной темно-синий цвет */
    --hover-color: #14645C;      /* Цвет при наведении (темный сине-зеленый) */
    --child-color: rgb(8, 37, 51);      /* Цвет дочерних элементов */
    --grandChild-color: rgb(13, 39, 68);/* Цвет элементов следующего уровня вложенности */
    --text-color: #e2eaef;              /* Основной цвет текста (светло-серый) */
    --accent-color: #eb6506;            /* Акцентный оранжевый цвет */
}

/* Сброс стандартных стилей для всех элементов */
* {
    margin: 0;              /* Убираем внешние отступы */
    padding: 0;             /* Убираем внутренние отступы */
    box-sizing: border-box; /* Включаем padding и border в общий размер элемента */
}

/* Стили для ссылок */
a {
    cursor: pointer;        /* Указатель мыши при наведении на ссылку */
}

/* Стили для параграфов */
p {
    color: inherit;         /* Наследование цвета текста от родителя */
}

/* Стили для субтитров */
.subtitle {
    color: #6B6B6B !important; /* Принудительный светло-серый цвет для субтитров */
}

/* Стили для точек (например, пагинация) */
.dot {
    display: inline-block;  /* Отображение в строку */
    width: 5px;             /* Ширина точки */
    height: 5px;            /* Высота точки */
    margin: 0 5px;          /* Отступы слева и справа */
    border-radius: 50%;     /* Круглая форма */
    cursor: pointer;        /* Указатель мыши при наведении */
    background-color: #b7bcc3; /* Серый цвет по умолчанию */
    transition: background-color 0.3s ease; /* Плавное изменение цвета фона */
}

/* Стили для активной точки */
.dot.active-dot {
    background-color: var(--accent-color); /* Оранжевый цвет для активной точки */
}

/* Стили для фиксированного футера */
.footer-fixed {
    width: 100%;            /* Полная ширина */
    background-color: #091f2a; /* Темно-синий фон */
    padding: 10px 0;        /* Внутренние отступы сверху и снизу */
    position: fixed;        /* Фиксированное положение */
    left: 0;                /* Прижато к левому краю */
    bottom: 0;              /* Прижато к нижнему краю */
    color: #848484;         /* Серый цвет текста */
}

/* Стили для относительного футера */
.footer-relative {
    width: 100%;            /* Полная ширина */
    background-color: #091f2a; /* Темно-синий фон */
    padding: 10px 0;        /* Внутренние отступы сверху и снизу */
    position: relative;     /* Относительное положение */
    margin-top: auto;       /* Автоматический отступ сверху для прижатия вниз */
    left: 0;                /* Прижато к левому краю */
    bottom: 0;              /* Прижато к нижнему краю */
    color: #848484;         /* Серый цвет текста */
}

/* Основные стили для body */
body {
    background-repeat: no-repeat; /* Фон не повторяется */
    background-size: cover;       /* Фон занимает всю область */
    background-position: center;  /* Фон центрирован */
    background-color: #F4FFFD; /* Светло-серый цвет фона */
    padding-top: 50px;            /* Отступ сверху */
    overflow-y: auto;             /* Вертикальная прокрутка при необходимости */
    color: var(--text-color);     /* Основной цвет текста */
}

/* Стили для оверлея (затемнения) */
#overlay {
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
}

/* Основные стили для навигационного меню */
nav {
    font-size: 13pt;        /* Размер шрифта меню */
}

/* Стили для ссылок в навигации */
nav a {
    padding: 1em 2em;       /* Внутренние отступы */
    transition: background-color 150ms ease; /* Плавное изменение фона при наведении */
}

/* Стрелка вниз для пунктов меню с подменю */
nav li.has-children > a::after {
    border-left: 4px solid transparent; /* Левая сторона треугольника */
    border-right: 4px solid transparent;/* Правая сторона треугольника */
    border-top: 6px solid var(--text-color); /* Верхняя часть треугольника (стрелка вниз) */
    margin-left: 8px;       /* Отступ от текста */
    transition: transform 0.3s ease-in-out; /* Плавное изменение направления стрелки */
    transform: translateY(2px); /* Смещение вниз для выравнивания */
}

/* Стили для подменю */
nav li ul {
    border: 1px solid var(--hover-color); /* Граница подменю */
    transition: transform 0.3s ease, opacity 0.3s ease, max-height 0.3s ease; /* Плавное появление */
    transform: scaleY(0);   /* Скрытие подменю по оси Y */
    transform-origin: top;  /* Точка начала трансформации — верх */
}

/* Стрелка вправо для вложенных подменю */
nav li ul li.has-children > a::after {
    border-top: 4px solid transparent; /* Верхняя часть треугольника */
    border-bottom: 4px solid transparent; /* Нижняя часть треугольника */
    border-left: 6px solid var(--text-color); /* Левая часть треугольника (стрелка вправо) */
    margin-left: 8px;       /* Отступ от текста */
    transform: translateY(2px); /* Смещение вниз для выравнивания */
}

/* Контейнер для переключателя языков */
.language-selector-container {
    display: flex;          /* Гибкий контейнер */
    justify-content: center;/* Центрирование содержимого */
    position: fixed;        /* Фиксированное положение */
    top: 13px;              /* Отступ сверху */
    right: 10px;            /* Отступ справа */
    z-index: 11;            /* Высокий уровень наложения */
    color: white;           /* Белый цвет текста */
    transition: right 0.3s ease-in-out; /* Плавное смещение вправо */
}

/* Сдвинутый контейнер переключателя языков */
.language-selector-container.language-selector-shifted {
    right: 85px;            /* Сдвиг вправо на 85px */
}

/* Мобильная версия переключателя языков */
.language-selector-container.language-selector-mobile {
    top: 18px;              /* Отступ сверху для мобильных */
    right: 65px;            /* Отступ справа для мобильных */
    z-index: 8;             /* Уровень наложения ниже */
    color: black;           /* Черный цвет текста */
}

/* Блок переключателя языков */
.language-selector-box {
    border: 1px solid #ccc; /* Серая граница */
    padding: 2px 4px;       /* Внутренние отступы */
    width: 50px;            /* Фиксированная ширина */
    height: 30px;           /* Фиксированная высота */
    cursor: pointer;        /* Указатель мыши */
    display: flex;          /* Гибкий контейнер */
    align-items: center;    /* Выравнивание по центру по вертикали */
    justify-content: space-between; /* Равномерное распределение элементов */
    box-sizing: border-box; /* Включаем padding и border в размеры */
}

/* Флаг в переключателе языков */
.language-selector-flag {
    width: 20px;            /* Ширина флага */
    height: auto;           /* Автоматическая высота */
}

/* Стрелка в переключателе языков */
.language-selector-arrow {
    font-size: 9px;         /* Размер шрифта стрелки */
    line-height: 1;         /* Высота строки */
}

/* Выпадающее меню переключателя языков */
.language-selector-dropdown {
    display: none;          /* Скрыто по умолчанию */
    position: absolute;     /* Абсолютное позиционирование */
    top: 100%;              /* Расположено ниже блока */
    left: 50%;              /* Центрировано по горизонтали */
    transform: translateX(-50%); /* Смещение влево на половину ширины */
    padding: 5px;           /* Внутренние отступы */
    border: 1px solid #ccc; /* Серая граница */
    background: white;      /* Белый фон */
    width: 50px;            /* Фиксированная ширина */
    z-index: 10;            /* Уровень наложения */
}

/* Элемент в выпадающем меню */
.language-selector-item {
    padding: 5px;           /* Внутренние отступы */
    cursor: pointer;        /* Указатель мыши */
    display: flex;          /* Гибкий контейнер */
    justify-content: center;/* Центрирование содержимого */
}

/* Изображение флага в выпадающем меню */
.language-selector-item-img {
    width: 20px;            /* Ширина флага */
    height: auto;           /* Автоматическая высота */
}

/* Медиа-запрос для десктопов (ширина больше 1200px) */
@media screen and (min-width: 1201px) {
    nav li:hover > ul {
        max-height: 5000px; /* Максимальная высота подменю при раскрытии */
        transform: scaleY(1); /* Раскрытие подменю по оси Y */
    }
}

/* Медиа-запрос для мобильных устройств (ширина до 1200px) */
@media screen and (max-width: 1200px) {
    nav {
        font-size: 16pt;    /* Увеличенный размер шрифта */
        width: min(15em, 100%); /* Ширина либо 15em, либо 100% */
        background-color: transparent; /* Прозрачный фон */
        backdrop-filter: blur(5px); /* Эффект размытия фона */
        -webkit-backdrop-filter: blur(5px); /* Поддержка для WebKit-браузеров */
    }

    nav.scrolled {
        background-color: var(--primary-color); /* Темно-синий фон при прокрутке */
    }

    nav.show {
        transition: right 400ms ease-out; /* Плавное смещение вправо */
    }

    nav li ul {
        transition: transform 0.25s ease, max-height 0.25s ease, opacity 0.25s ease; /* Плавное появление подменю */
        background-color: var(--primary-color); /* Темно-синий фон подменю */
    }

    .subtitle {
        color: #6B6B6B !important; /* Светло-серый цвет субтитров */
    }
}
`;

window.defaultStyles = {
  visibilityOfElement: {
    visibleElement: [
      ["visibility", ""], // Устанавливает видимость элемента (пустое значение означает "visible" по умолчанию)
      ["pointerEvents", "auto"], // Разрешает взаимодействие с элементом через указатель мыши
    ],
    invisibleElement: [
      ["visibility", "hidden"], // Скрывает элемент, делая его невидимым
      ["pointerEvents", "none"], // Отключает взаимодействие с элементом через указатель мыши
    ],
  },

  churchForm: {
    bodyStyle: [
      ["overflow", "hidden"], // Скрывает любой контент, выходящий за пределы body
    ],
    bodyStyleScroll: [
      ["overflow", ""], // Сбрасывает overflow (по умолчанию auto или visible)
    ],
    container: [
      ["width", "60%"], // Устанавливает ширину контейнера 60% от родителя
      ["height", "90vh"], // Устанавливает высоту контейнера 90% от высоты экрана
      ["overflow-y", "auto"], // Включает вертикальную прокрутку при необходимости
      ["padding", "20px"], // Добавляет внутренний отступ 20 пикселей со всех сторон
      ["background-color", "#fff"], // Устанавливает белый фон контейнера
      ["border", "1px solid #ccc"], // Добавляет серую границу толщиной 1 пиксель
      ["box-shadow", "0px 4px 8px rgba(0, 0, 0, 0.1)"], // Добавляет легкую тень для эффекта глубины
      ["border-radius", "8px"], // Закругляет углы контейнера на 8 пикселей
      ["position", "fixed"], // Фиксирует контейнер на экране
      ["top", "50%"], // Центрирует контейнер по вертикали (до трансформации)
      ["left", "50%"], // Центрирует контейнер по горизонтали (до трансформации)
      ["transform", "translate(-50%, -50%)"], // Смещает контейнер на половину его размеров для точного центрирования
      ["z-index", "1000"], // Устанавливает высокий уровень слоя для отображения поверх других элементов
    ],
    title: [
      ["font-size", "24px"], // Устанавливает размер шрифта заголовка 24 пикселя
      ["margin-bottom", "10px"], // Добавляет отступ снизу 10 пикселей
      ["font-weight", "normal"], // Устанавливает нормальную толщину шрифта
    ],
    description: [
      ["font-size", "18px"], // Устанавливает размер шрифта описания 18 пикселей
      ["margin-bottom", "20px"], // Добавляет отступ снизу 20 пикселей
    ],
    text: [
      ["font-size", "16px"], // Устанавливает размер шрифта текста 16 пикселей
      ["margin-bottom", "20px"], // Добавляет отступ снизу 20 пикселей
    ],
    closeButton: [
      ["position", "sticky"], // Делает кнопку прилипающей внутри контейнера
      ["top", "0"], // Прижимает кнопку к верху контейнера
      ["margin-left", "auto"], // Прижимает кнопку к правому краю
      ["padding", "10px 20px"], // Устанавливает внутренние отступы: 10px сверху/снизу, 20px слева/справа
      ["background-color", "rgb(229 48 48)"], // Устанавливает красный фон кнопки
      ["color", "#fff"], // Устанавливает белый цвет текста кнопки
      ["border", "none"], // Убирает границу кнопки
      ["border-radius", "4px"], // Закругляет углы кнопки на 4 пикселя
      ["cursor", "pointer"], // Устанавливает курсор указателя при наведении
      ["z-index", "10"], // Устанавливает уровень слоя кнопки выше содержимого контейнера
      ["display", "block"], // Делает кнопку блочным элементом
    ],
    mobile: {
      container: [
        ["width", "90%"], // Устанавливает ширину контейнера 90% для мобильных устройств
        ["height", "80vh"], // Устанавливает высоту контейнера 80% от высоты экрана для мобильных
      ],
      imageWrapper: [
        ["flex-direction", "column"], // Располагает изображение и информацию вертикально
        ["align-items", "stretch"], // Растягивает дочерние элементы на всю доступную ширину
      ],
      image: [
        ["width", "100%"], // Устанавливает ширину изображения 100% на мобильных
        ["height", "auto"], // Автоматически подстраивает высоту изображения
        ["margin-bottom", "10px"], // Добавляет отступ снизу 10 пикселей между изображением и информацией
      ],
      imageInfo: [
        ["width", "100%"], // Устанавливает ширину блока информации 100% под изображением
        ["height", "auto"], // Автоматически подстраивает высоту под содержимое
        ["margin-bottom", "20px"], // Добавляет отступ снизу 20 пикселей под блоком информации
      ],
    },
    overlay: [
      ["position", "fixed"], // Фиксирует оверлей на экране
      ["top", "0"], // Прижимает оверлей к верху экрана
      ["left", "0"], // Прижимает оверлей к левому краю экрана
      ["width", "100%"], // Устанавливает ширину оверлея 100%
      ["height", "100%"], // Устанавливает высоту оверлея 100%
      ["background-color", "rgba(0, 0, 0, 0.5)"], // Устанавливает полупрозрачный черный фон
      ["z-index", "999"], // Устанавливает уровень слоя оверлея ниже контейнера, но выше остального контента
    ],
    image: [
      ["height", "65%"], // Устанавливает высоту изображения 65% от контейнера
      ["width", "68%"], // Устанавливает ширину изображения 68% от контейнера
      ["-maxwidth", "600px"], // Ошибка в написании (правильно "max-width"), ограничивает максимальную ширину до 600 пикселей
      ["margin-bottom", "20px"], // Добавляет отступ снизу 20 пикселей
    ],
    imageWrapper: [
      ["display", "flex"], // Использует flexbox для размещения изображения и информации
      ["flex-direction", "row"], // Располагает изображение и информацию горизонтально
      ["justify-content", "space-between"], // Распределяет пространство между изображением и информацией
      ["align-items", "flex-start"], // Выравнивает элементы по верхнему краю
      ["margin-bottom", "20px"], // Добавляет отступ снизу 20 пикселей
      ["width", "100%"], // Устанавливает ширину обертки 100%
    ],
    imageInfo: [
      ["width", "30%"], // Устанавливает ширину блока информации 30% рядом с изображением
      ["font-size", "14px"], // Устанавливает размер шрифта информации 14 пикселей
      ["padding", "10px"], // Добавляет внутренний отступ 10 пикселей со всех сторон
      ["background-color", "#f9f9f9"], // Устанавливает светло-серый фон блока информации
      ["border-radius", "4px"], // Закругляет углы блока информации на 4 пикселя
      ["height", "65%"], // Устанавливает высоту блока равной высоте изображения (65%)
      ["overflow-y", "auto"], // Включает вертикальную прокрутку при превышении содержимого
    ],
    imageInfoField: [
      ["font-size", "14px"], // Устанавливает размер шрифта поля информации 14 пикселей
      ["margin-bottom", "10px"], // Добавляет отступ снизу 10 пикселей между полями
      ["color", "#333"], // Устанавливает темно-серый цвет текста
      ["line-height", "1.4"], // Устанавливает высоту строки для лучшей читаемости
    ],
  },

  buttonStyles: {
    button: [
      ["position", "fixed"], // Фиксированное положение кнопки
      ["bottom", "20px"], // Отступ снизу
      ["right", "20px"], // Отступ справа
      ["zIndex", "9"], // Уровень наложения
      ["backgroundColor", "#14645C"], // Темно-синий фон
      ["border", "2px solid #FFFFFF"], // Оранжевая граница
      ["padding", "10px"], // Внутренние отступы
      ["width", "50px"], // Ширина кнопки
      ["height", "50px"], // Высота кнопки
      ["borderRadius", "15px"], // Закругленные углы
      ["display", "none"], // Скрыта по умолчанию
      ["cursor", "pointer"], // Указатель мыши при наведении
      ["display", "flex"], // Используем Flexbox для центрирования
      ["justifyContent", "center"], // Центрирование по горизонтали
      ["alignItems", "center"], // Центрирование по вертикали
      ["fontSize", "30px"], // Размер шрифта (например, для текстовой стрелки)
      ["transition", "background-color 0.3s ease, border-color 0.3s ease"], // Плавное изменение цвета фона и границы
    ],
    arrow: [
      ["width", "24px"], // Ширина стрелки
      ["height", "24px"], // Высота стрелки
      ["color", "#e2eaef"], // Светло-серый цвет стрелки
      ["transition", "color 0.3s ease"], // Плавное изменение цвета стрелки
    ],
    noScroll: [
      ["display", "none"], // Скрытие кнопки при отсутствии прокрутки
    ],
    withScroll: [
      ["display", "flex"], // Отображение кнопки с прокруткой (с сохранением центрирования)
    ],
    buttonHover: [
      ["backgroundColor", "#eb6506"], // Оранжевый фон при наведении
      ["borderColor", "#e2eaef"], // Светло-серая граница при наведении
    ],
    arrowHover: [
      ["color", "#091f2a"], // Темно-синий цвет стрелки при наведении
    ],
  },

  preloaderStyles: {
    preloader: [
      ["position", "fixed"], // Фиксированное положение прелоадера
      ["top", "0"], // Прижато к верхнему краю
      ["left", "0"], // Прижато к левому краю
      ["width", "100%"], // Полная ширина
      ["height", "100%"], // Полная высота
      ["background", "#091f2a"], // Темно-синий фон
      ["display", "flex"], // Flexbox для центрирования
      ["justifyContent", "center"], // Центрирование по горизонтали
      ["alignItems", "center"], // Центрирование по вертикали
      ["zIndex", "9999"], // Максимальный уровень наложения
      ["transition", "transform 0.6s ease-in-out, opacity 0.6s ease-in-out"], // Плавное исчезновение
      ["overflow", "hidden"], // Скрытие переполнения
      ["backdropFilter", "blur(5px)"], // Эффект размытия фона
      ["webkitBackdropFilter", "blur(5px)"], // Поддержка размытия для WebKit-браузеров
    ],
    text: [
      ["fontSize", "2.5rem"], // Размер шрифта текста прелоадера
      ["fontWeight", "bold"], // Жирный шрифт
      ["color", "#eb6506"], // Оранжевый цвет текста
      ["fontFamily", "Arial, sans-serif"], // Семейство шрифтов
      ["textShadow", "0 2px 4px rgba(0, 0, 0, 0.3)"], // Тень текста
      ["transition", "transform 0.5s ease, opacity 0.5s ease"], // Плавное изменение масштаба и прозрачности
      ["transform", "scale(1)"], // Начальный масштаб текста
    ],
    // Новые состояния для скрытия прелоадера и текста
    preloaderHidden: [
      ["transform", "translateY(-100%)"], // Сдвиг прелоадера вверх за пределы экрана
      ["opacity", "0"], // Полная прозрачность прелоадера
    ],
    textHidden: [
      ["transform", "scale(0.8)"], // Уменьшение масштаба текста
      ["opacity", "0"], // Полная прозрачность текста
    ],
  },

  mainStyles: {
    mainContainer: [
      ["height", "100vh"],
      ["display", "flex"],
      ["flexDirection", "row"],
      ["justifyContent", "center"],
      ["alignItems", "center"]
  ],
  mainContainerMobile: [
      ["height", "auto"],
      ["flexDirection", "column"],
      ["padding", "20px"],
      ["paddingTop", "unset"]
  ],
  leftColumn: [
      ["width", "600px"],
      ["display", "flex"],
      ["flexDirection", "column"]
  ],
  leftColumnMobile: [
      ["width", "100%"],
      ["maxWidth", "600px"]
  ],
  rightColumn: [
      ["width", "50%"],
      ["height", "100%"],
      ["display", "flex"],
      ["justifyContent", "center"],
      ["alignItems", "center"]
  ],
  rightColumnMobile: [
      ["width", "100%"],
      ["height", "auto"],
  ],
  logoImage: [
      ["maxWidth", "100%"],
      ["maxHeight", "100%"],
      ["objectFit", "contain"]
  ],
  logoImageMobile: [
      ["maxWidth", "80%"],
      ["maxHeight", "300px"]
  ],
  title: [
      ["width", "600px"],
      ["fontSize", "80px"],
      ["textAlign", "left"],
      ["color", "#0A2540"],
      ["fontFamily", "Lobster"]
  ],
  titleMobile: [
      ["width", "100%"],
      ["fontSize", "48px"],
      ["textAlign", "center"]
  ],
  topContainer: [
      ["width", "600px"],
      ["display", "flex"],
      ["flexDirection", "row"],
      ["justifyContent", "space-between"]
  ],
  topContainerMobile: [
      ["width", "100%"],
      ["flexDirection", "column"],
      ["maxWidth", "600px"]
  ],
  topLeft: [
      ["width", "60%"],
      ["fontSize", "38px"],
      ["textAlign", "left"],
      ["color", "#3A3A3A"],
      ["height", "auto"],
      
  ],
  topLeftMobile: [
      ["width", "100%"],
      ["fontSize", "24px"],
      ["textAlign", "center"]
  ],
  topRight: [
      ["width", "40%"],
      ["height", "auto"]
  ],
  topRightMobile: [
      ["width", "100%"],
      ["height", "0"]
  ],
  bottomContainer: [
      ["width", "600px"],
      ["display", "flex"],
      ["flexDirection", "row"],
      ["justifyContent", "space-between"]
  ],
  bottomContainerMobile: [
      ["width", "100%"],
      ["flexDirection", "column"],
      ["maxWidth", "600px"]
  ],
  bottomLeft: [
      ["width", "50%"],
      ["padding", "10px"],
      ["display", "flex"],
      ["alignItems", "center"],
      ["order", "1"],
  ],
  bottomLeftMobile: [
      ["width", "100%"],
      ["padding", "10px"],
      ["order", "2"] // Помещаем кнопку после текста описания
  ],
  button: [
      ["width", "95%"],
      ["padding", "10px 20px"],
      ["backgroundColor", "#80EFBF"],
      ["border", "3px solid #14645C"],
      ["color", "#0A2540"],
      ["borderRadius", "35px"],
      ["cursor", "pointer"],
      ["fontSize", "26px"],
      ["fontWeight", "bold"],
      ["transition", "color 0.3s ease, background-color 0.3s ease"],
      ["position", "relative"],
      ["overflow", "hidden"]
  ],
  buttonMobile: [
      ["width", "100%"],
      ["fontSize", "20px"],
      ["margin", "10px auto"],
      ["maxWidth", "300px"]
  ],
  buttonHover: [
      ["backgroundColor", "#5da687"],
      ["color", "#e2eaef"]
  ],
  bottomRight: [
      ["width", "50%"],
      ["padding", "10px"],
      ["fontSize", "16px"],
      ["lineHeight", "1.8"],
      ["textAlign", "justify"],
      ["color", "#6B6B6B"],
      ["order", "2"],
      
  ],
  bottomRightMobile: [
      ["width", "100%"],
      ["textAlign", "center"],
      ["lineHeight", "1.6"],
      ["order", "1"] // Текст описания остается выше кнопки
  ]
  },
  
  servicesStyles: { 
    text: [
      ["color", "#FFFFFF"],
      ["margin", "10px 0"],
      ["lineHeight", "1.5"],
      ["textAlign", "left"],
    ],
    textMobile: [
      ["fontSize", "18px"], // Уменьшено с 22px до 18px
      ["color", "#FFFFFF"],
      ["margin", "10px 0"],
      ["lineHeight", "1.5"],
      ["textAlign", "left"],
    ],
    container: [
      ["display", "grid"],
      ["gridTemplateColumns", "repeat(3, 1fr)"],
      ["gap", "20px"],
      ["padding", "20px"],
      ["backgroundColor", "#A4F4D2"],
      ["borderRadius", "30px"],
      ["position", "relative"],
      ["marginInline", "auto"],
      ["zIndex", "2"],
      ["width", "96%"],
      ["boxShadow", "0 0 10px rgba(9, 31, 42, 0.1)"],
    ],
    containerMobile: [
      ["gridTemplateColumns", "1fr"],
      ["gap", "10px"],
      ["padding", "10px"],
      ["borderRadius", "25px"],
      ["marginTop", "-30px"],
      ["marginBottom", "-30px"],
    ],
    containerTablet: [
      ["gridTemplateColumns", "repeat(2, 1fr)"],
      ["gap", "15px"],
      ["padding", "15px"],
      ["borderRadius", "30px"],
      ["marginTop", "-40px"],
      ["marginBottom", "-40px"],
    ],
    block: [
      ["background", "#14645C"],
      ["padding", "20px"],
      ["display", "flex"],
      ["flexDirection", "column"],
      ["alignItems", "flex-start"],
      ["gap", "15px"],
      ["border", "1px solid #091f2a"],
      ["borderRadius", "16px"],
      ["boxShadow", "0 4px 6px rgba(9, 31, 42, 0.1)"],
      ["minHeight", "300px"],
      ["width", "unset"],
      ["marginInline", "auto"],
    ],
    blockMobile: [
      ["width", "95%"],
      ["alignItems", "center"],
      ["justifyContent", "center"],
    ],
    textContent: [
      ["display", "flex"],
      ["flexDirection", "column"],
      ["gap", "10px"],
      ["flex", "1"],
      ["justifyContent", "space-between"],
      
    ],
    title: [
      ["fontWeight", "bold"],
      ["color", "#FFFFFF"],
      ["fontFamily", "Arial, sans-serif"],
      ["fontSize", "32px"],
    ],
    titleMobile: [ // Новый стиль для мобильных
      ["fontSize", "24px"], // Уменьшено с 32px до 24px
    ],
    description: [
      ["fontSize", "22px"],
      ["lineHeight", "1.5"],
      ["textAlign", "left"],
      ["color", "#FFFFFF"],
    ],
    descriptionMobile: [ // Новый стиль для мобильных
      ["fontSize", "16px"], // Уменьшено с 22px до 16px
    ],
    servicesButton: [
      ["padding", "10px 20px"],
      ["backgroundColor", "#80EFBF"],
      ["border", "1px solid #14645C"],
      ["color", "#0A2540"],
      ["borderRadius", "25px"],
      ["cursor", "pointer"],
      ["fontSize", "20px"],
      ["fontWeight", "bold"],
      ["transition", "color 0.3s ease"],
      ["marginTop", "auto"],
      ["position", "relative"],
      ["overflow", "hidden"],
      ["zIndex", "1"],
    ],
    servicesButtonMobile: [ // Новый стиль для мобильных
      ["fontSize", "16px"], // Уменьшено с 20px до 16px
    ],
    servicesButtonBefore: [
      ["position", "absolute"],
      ["top", "0"],
      ["left", "0"],
      ["width", "100%"],
      ["height", "100%"],
      ["background", "#5da687"],
      ["transform", "scale(0)"],
      ["transformOrigin", "var(--x) var(--y)"],
      ["borderRadius", "25px"],
      ["transition", "transform 0.6s ease"],
      ["zIndex", "-1"],
    ],
    servicesButtonHover: [
      ["color", "#fff"],
    ],
    servicesButtonBeforeHover: [
      ["transform", "scale(2)"],
      ["backgroundColor", "#5da687"],
    ],
    servicesButtonVars: [
      ["--x", "50%"],
      ["--y", "50%"],
    ],
  },

  companyStyles: {
    companyBlock: [
        ["display", "flex"],
        ["flexDirection", "row"],
        ["alignItems", "center"],
        ["justifyContent", "center"],
        ["gap", "20px"],
        ["width", "100%"], // Полная ширина экрана на десктопе, как изначально
        ["padding", "20px"],
        ["minHeight", "600px"],
        ["overflow", "auto"]
    ],
    companyBlockMobile: [
        ["flexDirection", "column"],
        ["alignItems", "center"],
        ["width", "100%"],
        ["minHeight", "auto"],
        ["padding", "10px"]
    ],
    companyBlockTitle: [
        ["fontSize", "28px"],
        ["marginBottom", "15px"],
        ["textAlign", "left"],
        ["color", "#3A3A3A"]
    ],
    companyBlockTitleMobile: [
        ["fontSize", "24px"],
        ["textAlign", "center"],
        ["marginBottom", "10px"]
    ],
    logoContainer: [
        ["flex", "0 0 25%"], // 25% ширины на десктопе
        ["width", "25%"], // Явно задаём ширину
        ["maxWidth", "300px"], // Ограничение для контейнера логотипа
        ["textAlign", "center"]
    ],
    logoContainerMobile: [
        ["flex", "none"],
        ["width", "100%"],
        ["maxWidth", "unset"], // Убираем ограничение на мобильных
        ["marginTop", "30px"],
    ],
    logoImage: [
        ["maxWidth", "300px"],
        ["width", "100%"], // Логотип занимает всю ширину контейнера
        ["height", "auto"]
    ],
    logoImageMobile: [
        ["maxWidth", "200px"],
        ["width", "100%"]
    ],
    companyInfo: [
        ["flex", "1"], // Растягиваем на оставшееся пространство
        ["width", "75%"], // 75% ширины на десктопе (без maxWidth)
        ["display", "flex"],
        ["flexDirection", "column"]
    ],
    companyInfoMobile: [
        ["width", "100%"],
        ["maxWidth", "500px"], // Ограничение ширины текста на мобильных
        ["padding", "0 10px"]
    ],
    companyInfoTitle: [ // Оставляем как есть, хотя не используется
        ["fontSize", "22px"],
        ["marginBottom", "10px"],
        ["textAlign", "left"],
        ["color", "#3A3A3A"],
        
    ],
    companyInfoText: [
        ["fontSize", "16px"],
        ["lineHeight", "1.8"],
        ["textAlign", "justify"],
        ["marginBottom", "15px"],
        ["color", "#6B6B6B"],
        
    ],
    companyInfoTextMobile: [
        ["fontSize", "14px"],
        ["lineHeight", "1.6"],
        ["textAlign", "center"],
        ["marginBottom", "10px"]
    ]
  },

  contactFormStyles: {
  contactWrapper: [
    ["backgroundColor", "#A4F4D2"],
    ["backgroundSize", "cover"],
    ["minHeight", "100vh"],
    ["display", "flex"],
    ["justifyContent", "center"],
    ["alignItems", "center"],
    ["padding", "20px"],
    ["position", "relative"],
    ["backgroundAttachment", "fixed"],
    ["overflow", "hidden"],
    ["backgroundPosition", "right"],
    ["userSelect", "none"],
    ["borderRadius", "30px"],
    ["zIndex", "2"],
    ["width", "96%"], // Фиксированная ширина контейнера
    ["marginInline", "auto"],
    ["marginBottom", "20px"],
  ],
  contactWrapperParallax: [
    ["willChange", "background-position"],
  ],
  contactForm: [
    ["background", "#FFFFFF"],
    ["backdropFilter", "blur(10px) saturate(180%)"],
    ["webkitBackdropFilter", "blur(10px) saturate(180%)"],
    ["padding", "30px"],
    ["borderRadius", "16px"],
    ["boxShadow", "0 0 20px rgba(9, 31, 42, 0.2)"],
    ["width", "100%"], // Форма занимает всю доступную ширину
    ["maxWidth", "400px"], // Максимальная ширина формы
    ["border", "1px solid #14645C"],
    ["minHeight", "200px"],
    ["maxHeight", "none"],
    ["overflow", "auto"],
  ],
  contactFormH2: [
    ["textAlign", "center"],
    ["color", "#091f2a"],
    ["marginBottom", "20px"],
    ["fontSize", "18px"],
    ["fontFamily", "Arial, sans-serif"],
    ["wordWrap", "break-word"],
    ["overflowWrap", "break-word"],
    ["whiteSpace", "normal"],
  ],
  formGroup: [
    ["marginBottom", "15px"],
    ["minHeight", "50px"],
    ["maxHeight", "none"],
    ["overflow", "visible"],
    ["width", "100%"], // Фиксируем ширину группы на 100% контейнера
  ],
  formGroupLabel: [
    ["display", "block"],
    ["marginBottom", "5px"],
    ["color", "#091f2a"],
    ["fontSize", "14px"],
    ["fontFamily", "Arial, sans-serif"],
    ["wordWrap", "break-word"],
    ["overflowWrap", "break-word"],
    ["whiteSpace", "normal"],
  ],
  formGroupInput: [
    ["width", "100%"], // Поле ввода занимает всю ширину группы
    ["padding", "10px"],
    ["border", "1px solid #14645C"],
    ["borderRadius", "8px"],
    ["boxSizing", "border-box"],
    ["fontSize", "14px"],
    ["fontFamily", "Arial, sans-serif"],
    ["background", "rgba(226, 234, 239, 0.1)"],
    ["color", "#091f2a"],
    ["maxWidth", "none"],
    ["minHeight", "40px"],
    ["maxHeight", "none"],
    ["overflow", "visible"],
    ["wordWrap", "break-word"],
    ["overflowWrap", "break-word"],
    ["whiteSpace", "normal"],
    ["resize", "horizontal"],
  ],
  submitBtn: [
    ["width", "100%"], // Кнопка занимает всю ширину формы
    ["padding", "12px"],
    ["backgroundColor", "#80EFBF"],
    ["color", "#0A2540"],
    ["border", "none"],
    ["borderRadius", "8px"],
    ["cursor", "pointer"],
    ["fontSize", "16px"],
    ["fontFamily", "Arial, sans-serif"],
    ["marginTop", "10px"],
    ["maxWidth", "100%"], // Ограничиваем максимальную ширину до ширины родителя
    ["overflow", "visible"],
    ["wordWrap", "break-word"],
    ["overflowWrap", "break-word"],
    ["whiteSpace", "normal"],
    ["transition", "background-color 0.5s ease"],
  ],
  submitBtnHover: [
    ["backgroundColor", "#5da687"],
  ],
  contactFormMobile: [
    ["margin", "20px"],
    ["padding", "20px"],
    ["width", "100%"], // Форма на мобильных занимает всю ширину
    ["maxWidth", "300px"], // Уменьшаем максимальную ширину для мобильных
  ],
  formGroupMobile: [
    ["width", "100%"], // Группа на мобильных занимает всю ширину
  ],
  formGroupInputMobile: [
    ["width", "100%"], // Поле ввода на мобильных занимает всю ширину
  ],
  submitBtnMobile: [
    ["width", "100%"], // Кнопка на мобильных занимает всю ширину
    ["maxWidth", "100%"], // Убеждаемся, что кнопка не выходит за пределы
  ],
  loginFormSmallMobile: [
    ["margin", "10px"],
    ["padding", "15px"],
    ["width", "100%"], // Форма на маленьких экранах занимает всю ширину
    ["maxWidth", "250px"], // Уменьшаем максимальную ширину
  ],
  formGroupSmallMobile: [
    ["width", "100%"], // Группа на маленьких экранах занимает всю ширину
  ],
  formGroupInputSmallMobile: [
    ["width", "100%"], // Поле ввода на маленьких экранах занимает всю ширину
  ],
  submitBtnSmallMobile: [
    ["width", "100%"], // Кнопка на маленьких экранах занимает всю ширину
    ["maxWidth", "100%"], // Убеждаемся, что кнопка не выходит за пределы
  ],
  },

  footerStyles: {
    footer: [
      ["width", "100%"], // Полная ширина футера
      ["padding", "10px 0"], // Внутренние отступы сверху и снизу
      ["position", "relative"], // Относительное позиционирование
      ["bottom", "0"], // Прижато к нижнему краю
      ["left", "0"], // Прижато к левому краю
      ["backgroundColor", "#14645C"], // Темно-синий фон
    ],
    container: [
      ["display", "flex"], // Flexbox для колонок
      ["flexDirection", "row"], // Горизонтальное расположение
      ["justifyContent", "space-between"], // Равномерное распределение колонок
      ["padding", "0 20px"], // Внутренние отступы слева и справа
    ],
    containerMobile: [
      ["display", "flex"], // Flexbox для мобильных
      ["flexDirection", "column"], // Вертикальное расположение
      ["justifyContent", "flex-start"], // Выравнивание в начале
      ["padding", "0 20px"], // Внутренние отступы слева и справа
    ],
    leftColumn: [
      ["display", "flex"], // Flexbox для левой колонки
      ["flexDirection", "column"], // Вертикальное расположение
      ["textAlign", "left"], // Выравнивание по левому краю
      ["gap", "5px"], // Расстояние между элементами
      ["width", "30%"], // Ширина 30%
      ["marginBottom", "10px"], // Отступ снизу
    ],
    leftColumnMobile: [
      ["display", "flex"], // Flexbox для мобильных
      ["flexDirection", "column"], // Вертикальное расположение
      ["textAlign", "left"], // Выравнивание по левому краю
      ["gap", "10px"], // Увеличенное расстояние между элементами
      ["width", "100%"], // Полная ширина
    ],
    centerColumn: [
      ["display", "flex"], // Flexbox для центральной колонки
      ["flexDirection", "column"], // Вертикальное расположение
      ["textAlign", "left"], // Выравнивание по левому краю
      ["gap", "8px"], // Расстояние между элементами
      ["width", "30%"], // Ширина 30%
      ["marginBottom", "10px"], // Отступ снизу
    ],
    centerColumnMobile: [
      ["display", "flex"], // Flexbox для мобильных
      ["flexDirection", "column"], // Вертикальное расположение
      ["textAlign", "left"], // Выравнивание по левому краю
      ["gap", "5px"], // Уменьшенное расстояние между элементами
      ["width", "100%"], // Полная ширина
    ],
    rightColumn: [
      ["display", "flex"], // Flexbox для правой колонки
      ["flexDirection", "column"], // Вертикальное расположение
      ["textAlign", "left"], // Выравнивание по левому краю
      ["gap", "8px"], // Расстояние между элементами
      ["width", "30%"], // Ширина 30%
      ["marginBottom", "10px"], // Отступ снизу
    ],
    rightColumnMobile: [
      ["display", "flex"], // Flexbox для мобильных
      ["flexDirection", "column"], // Вертикальное расположение
      ["textAlign", "left"], // Выравнивание по левому краю
      ["gap", "5px"], // Уменьшенное расстояние между элементами
      ["width", "100%"], // Полная ширина
    ],
    columnTitle: [
      ["fontSize", "18px"], // Размер шрифта заголовка колонки
      ["fontWeight", "bold"], // Жирный шрифт
      ["color", "#e2eaef"], // Светло-серый цвет
      ["marginBottom", "10px"], // Отступ снизу
      ["marginTop", "unset"], // Без отступа сверху
    ],
    columnTitleMobile: [
      ["fontSize", "18px"], // Размер шрифта для мобильных
      ["fontWeight", "bold"], // Жирный шрифт
      ["color", "#e2eaef"], // Светло-серый цвет
      ["marginBottom", "5px"], // Уменьшенный отступ снизу
      ["marginTop", "10px"], // Отступ сверху
    ],
    columnText: [
      ["color", "#e2eaef"], // Светло-серый цвет текста
      ["fontSize", "16px"], // Размер шрифта
      ["transition", "color 0.3s ease"], // Плавное изменение цвета
    ],
    serviceItem: [
      ["color", "#e2eaef"], // Светло-серый цвет элементов услуг
      ["fontSize", "14px"], // Размер шрифта
      ["marginBottom", "5px"], // Отступ снизу
    ],
    contactItem: [
      ["display", "flex"], // Flexbox для контактных элементов
      ["alignItems", "center"], // Центрирование по вертикали
      ["gap", "8px"], // Расстояние между элементами
      ["marginBottom", "5px"], // Отступ снизу
    ],
    contactIcon: [
      ["width", "16px"], // Ширина иконки
      ["height", "16px"], // Высота иконки
    ],
    socialMediaContainer: [
      ["display", "flex"], // Flexbox для иконок соцсетей
      ["gap", "10px"], // Расстояние между иконками
      ["marginTop", "15px"], // Отступ сверху
    ],
    socialMediaIcon: [
      ["width", "40px"], // Ширина иконки соцсетей
      ["height", "40px"], // Высота иконки соцсетей
      ["filter", "grayscale(100%)"], // Черно-белый фильтр по умолчанию
      ["transition", "filter 0.3s ease"], // Плавное изменение фильтра
    ],
    socialMediaIconHover: [
      ["filter", "grayscale(0%)"], // Убираем черно-белый фильтр при наведении
    ],
    footerImage: [
      ["width", "40%"], // Ширина изображения в футере
      ["height", "auto"], // Автоматическая высота
      ["display", "block"], // Блочное отображение
      ["margin", "0 auto"], // Центрирование
    ],
    footerImageMobile: [
      ["width", "60%"], // Увеличенная ширина для мобильных
      ["height", "auto"], // Автоматическая высота
      ["display", "block"], // Блочное отображение
      ["margin", "0 auto"], // Центрирование
    ],
    copyright: [
      ["textAlign", "center"], // Центрирование текста копирайта
      ["paddingTop", "10px"], // Отступ сверху
      ["borderTop", "1px solid #A4F4D2"], // Оранжевая линия сверху
    ],
    copyrightText: [
      ["color", "#e2eaef"], // Светло-серый цвет текста копирайта
      ["fontSize", "16px"], // Размер шрифта
    ],
    textMobile: [
      ["fontSize", "14px"], // Уменьшенный размер шрифта для мобильных
    ],
  },
};
