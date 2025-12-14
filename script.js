// --------------------------------------------------------------------------------------
// ГЛОБАЛЬНЫЕ DOM ЭЛЕМЕНТЫ (Переменные)
// Используются в renderReviewPhotos и DOMContentLoaded
// --------------------------------------------------------------------------------------

const imageViewModal = document.getElementById('image-view-modal');
const modalImageView = document.getElementById('modal-image-view');
const modalImageTitle = document.getElementById('modal-image-title');
const closeImageViewModalBtn = document.getElementById('close-image-view-modal');

// Унифицированный URL для заглушечных видео (используется для отсутствующих видео)
const DEFAULT_VIDEO_URL = "https://daniliuskosmaches.github.io/videos/videos/Bubble.mp4";

// ----------------------------------------------------------------
// ДАННЫЕ (Обновлены и унифицированы)
// ----------------------------------------------------------------

const charactersData = [
    { "name": "Captain America", "desc": "Капитан Америка", "image": "images/amurika.PNG", "price": 5000 },
    { "name": "Barbie", "desc": "Кукла Барби", "image": "images/barbie.PNG", "price": 4702 },
    { "name": "Batgirl", "desc": "Отважная героиня Готэма", "image": "images/batgerrl.PNG", "price": 5500 },
    { "name": "Batman", "desc": "Темный рыцарь", "image": "images/batmen.PNG", "price": 5714 },
    { "name": "Snow White", "desc": "Самая добрая принцесса", "image": "images/belosnezhka.PNG", "price": 5500 },
    { "name": "Buzz", "desc": "Базз Лайтер", "image": "images/buzz.PNG", "price": 5881 },
    { "name": "Cheburashka", "desc": "Чебурашка", "image": "images/cheburashka.PNG", "price": 6535 },
    { "name": "Clown", "desc": "Клоун", "image": "images/clown.PNG", "price": 6208 },
    { "name": "Clowns", "desc": "Два веселых клоуна", "image": "images/clowns.PNG", "price": 7039 },
    { "name": "Jedi", "desc": "Джедай", "image": "images/djedai.PNG", "price": 4513 },
    { "name": "Freddy Fazbear", "desc": "Поиграй с медведем", "image": "images/fredybazbearholhoholhoohohhool.PNG", "price": 5500 },
    { "name": "Harry Potter", "desc": "Юный волшебник из Хогвартса", "image": "images/garypotter.PNG", "price": 6000 },
    { "name": "Grinch", "desc": "Гринч", "image": "images/grinch.PNG", "price": 5678 },
    { "name": "Hulk", "desc": "Зеленый качок", "image": "images/Halk.PNG", "price": 5000 },
    { "name": "Happy New Year", "desc": "С Новым Годом", "image": "images/happy new year.PNG", "price": 5802 },
    { "name": "Joker", "desc": "Джокер", "image": "images/joker.PNG", "price": 7930 },
    { "name": "Creeper", "desc": "Крипер", "image": "images/kreeper.PNG", "price": 7642 },
    { "name": "Ladybug", "desc": "Леди Баг", "image": "images/ladybug.PNG", "price": 4814 },
    { "name": "Lego", "desc": "Лего", "image": "images/lego.PNG", "price": 5007 },
    { "name": "Malifest", "desc": "Малифест", "image": "images/malifest.PNG", "price": 5085 },
    { "name": "Matros", "desc": "Матрос", "image": "images/matros.PNG", "price": 7225 },
    { "name": "Maybl", "desc": "Мэйбл", "image": "images/maybl.PNG", "price": 7242 },
    { "name": "Mikiandmaus", "desc": "Микки и Минни Маус", "image": "images/mikiandmaus.PNG", "price": 6237 },
    { "name": "Mikimaus", "desc": "Микки Маус", "image": "images/Mikimaus.PNG", "price": 5554 },
    { "name": "Minecraft", "desc": "Тюринг полная игра", "image": "images/minicraftblyat.PNG", "price": 4500 },
    { "name": "Minions", "desc": "Миньоны", "image": "images/minions.PNG", "price": 7658 },
    { "name": "Naruto", "desc": "Наруто", "image": "images/naruto.PNG", "price": 7376 },
    { "name": "Neznayka", "desc": "Незнайка", "image": "images/neznayka.PNG", "price": 6436 },
    { "name": "Patrul", "desc": "Патруль", "image": "images/patrul.PNG", "price": 7931 },
    { "name": "Piero", "desc": "Дед инсайд с ссср", "image": "images/piero.PNG", "price": 6500 },
    { "name": "Pirat", "desc": "Пират", "image": "images/pirat.PNG", "price": 7209 },
    { "name": "Pony", "desc": "Пони", "image": "images/pony.PNG", "price": 5876 },
    { "name": "Football Player", "desc": "Футболист", "image": "images/ronaldo.PNG", "price": 5000 },
    { "name": "Rusalochka", "desc": "Русалочка", "image": "images/rusalochka.PNG", "price": 6541 },
    { "name": "Scauts", "desc": "Скауты", "image": "images/scauts.PNG", "price": 4903 },
    { "name": "Shrek", "desc": "Кто проживает на дне болота", "image": "images/shrek.PNG", "price": 8000 },
    { "name": "Soldat", "desc": "Солдат", "image": "images/soldat.PNG", "price": 6029 },
    { "name": "Sonic", "desc": "Соник", "image": "images/sonik.PNG", "price": 7761 },
    { "name": "Spiderman", "desc": "Человек-паук", "image": "images/spiderman.PNG", "price": 6253 },
    { "name": "Superkot", "desc": "Супер-Кот", "image": "images/superkot.PNG", "price": 7291 },
    { "name": "Superman", "desc": "Лунтик в плаще", "image": "images/superpidor.PNG", "price": 5500 },
    { "name": "Svinkapepa", "desc": "Свинка Пеппа", "image": "images/svinkapepa.PNG", "price": 6986 },
    { "name": "Teremok", "desc": "Теремок", "image": "images/teremok.PNG", "price": 4722 },
    { "name": "Thor", "desc": "Тор", "image": "images/thor.PNG", "price": 4955 },
    { "name": "Tiktokers", "desc": "Тиктокеры", "image": "images/tiktokers.PNG", "price": 5596 },
    { "name": "Iron Man", "desc": "Гений, миллиардер, плейбой, филантроп", "image": "images/tonysrark.PNG", "price": 6000 },
    { "name": "Transformers", "desc": "Трансформеры", "image": "images/transformers.PNG", "price": 6985 },
    { "name": "Trikotaa", "desc": "Три кота", "image": "images/trikotaa.PNG", "price": 5477 },
    { "name": "Wednesday", "desc": "Уэнсдэй", "image": "images/wednesday.PNG", "price": 6756 }
];

const showsData = [
    {
        "name": "Шоу мыльных пузырей",
        "desc": "Гигантские пузыри, огненные пузыри и дети внутри пузыря.",
        "price": "1400 AED",
        "age": "2-7 лет",
        "duration": "30 минут",
        "video": DEFAULT_VIDEO_URL,
        "image": "images/bubble.jpg"
    },
    {
        "name": "Неоновое шоу пузырей",
        "desc": "Светящиеся в темноте пузыри, тоннели и световые эффекты.",
        "price": "1800 AED",
        "age": "5-12 лет",
        "duration": "30 минут",
        "video": "https://daniliuskosmaches.github.io/videos/videos/Bubble.mp4",
        "image": "images/bubble.jpg"
    },
    {
        "name": "Химическое шоу",
        "desc": "Огненные и паровые эксперименты, сухой лёд и яркие опыты.",
        "price": "1400 AED",
        "age": "5-15 лет",
        "duration": "30 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Chemical.mp4",
        "image": "images/chemical.jpg"
    },
    {
        "name": "Тесла шоу",
        "desc": "Электрические разряды, молнии и безопасные эксперименты.",
        "price": "1400 AED",
        "age": "6-15 лет",
        "duration": "30 минут",
        "video": "https://daniliuskosmaches.github.io/videos/videos/Tesla.mp4",
        "image": "images/tesla.jpg"
    },
    {
        "name": "Бумажное шоу",
        "desc": "Танцы, музыка и буря из бумаги — яркое праздничное веселье.",
        "price": "2000 AED",
        "age": "5-9 лет",
        "duration": "30 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Paper.mp4",
        "image": "images/paper.jpg"
    },
    {
        "name": "Крио-шоу с мороженым",
        "desc": "Зрелищные эксперименты с холодом + мороженое для детей.",
        "price": "1800 AED",
        "age": "5-15 лет",
        "duration": "45 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Icecream.mp4",
        "image": "images/cryo.jpg"
    },
    {
        "name": "Слайм шоу-мастерская",
        "desc": "Создай свой слайм — яркие цвета, весёлое творчество.",
        "price": "1000 AED (до 10 детей)",
        "age": "5-10 лет",
        "duration": "30-45 минут",
        "video": DEFAULT_VIDEO_URL,
        "image": "images/slime.jpg"
    },
    {
        "name": "Мастерская блокнотов",
        "desc": "Творческий мастер-класс по созданию блокнотов со стикерами и декором.",
        "price": "1200 AED (до 10 детей)",
        "age": "5-10 лет",
        "duration": "30-45 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Notebook.mp4",
        "image": "images/notebook.jpg"
    },
    {
        "name": "Пенная вечеринка",
        "desc": "Огромная пена, музыка и танцы в облаке пузырей.",
        "price": "2200 AED",
        "age": "5-15 лет",
        "duration": "60 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Fom.mp4",
        "image": "images/foam.jpg"
    },
    {
        "name": "Магическое шоу",
        "desc": "Весёлые фокусы, иллюзии и интерактив с детьми.",
        "price": "1400 AED",
        "age": "4-7 лет",
        "duration": "30 минут",
        "video": DEFAULT_VIDEO_URL,
        "image": "images/magic.jpg"
    },
    {
        "name": "Сумасшедшая коробка с животными",
        "desc": "Интерактивный сюрприз с экзотическими животными.",
        "price": "1900 AED",
        "age": "5+",
        "duration": "40 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Crazybox.mp4",
        "image": "images/crazybox.jpg"
    },
    {
        "name": "Мафия для детей и подростков",
        "desc": "Ролевая игра, логика и весёлый сторителлинг.",
        "price": "700 AED",
        "age": "6+",
        "duration": "60 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Mafiakids.mp4",
        "image": "images/mafia.jpg"
    },
    {
        "name": "Мафия для взрослых",
        "desc": "Детективная ролевая игра в стиле вечеринки.",
        "price": "900 AED",
        "age": "16+",
        "duration": "60 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Mafia.mp4",
        "image": "images/mafia.jpg"
    },
    {
        "name": "Ведущий для подростков",
        "desc": "Игры, конкурсы и зажигательный ведущий для вечеринки.",
        "price": "700 AED",
        "age": "12-18 лет",
        "duration": "60 минут",
        "video": DEFAULT_VIDEO_URL,
        "image": "images/default-show.jpg"
    }
];

const masterClassesData = [
    { name: "Создание костюмов", desc: "Научитесь создавать костюмы своими руками", price: 2500, icon: "✂️" },
    { name: "Актерское мастерство", desc: "Основы перевоплощения в персонажей", price: 3000, icon: "🎭" },
    { name: "Грим и макияж", desc: "Профессиональные техники грима", price: 2800, icon: "🎨" }
];

const reviewPhotosData = [
    { id: 1, image: "images/1.jpg", title: "День рождения", date: "15.12.2023" },
    { id: 2, image: "images/2.jpg", title: "Выпускной", date: "20.12.2023" },
    { id: 3, image: "images/3.jpg", title: "Новый год", date: "25.12.2023" },
    { id: 4, image: "images/4.jpg", title: "Детский праздник", date: "30.12.2023" },
    { id: 5, image: "images/5.jpg", title: "Анимация", date: "05.01.2024" },
    { id: 6, image: "images/6.jpg", title: "Мастер-класс", date: "10.01.2024" },
    { id: 7, image: "images/7.jpg", title: "Шоу программа", date: "15.01.2024" },
    { id: 8, image: "images/8.jpg", title: "Корпоратив", date: "20.01.2024" },
    { id: 9, image: "images/9.jpg", title: "Свадьба", date: "25.01.2024" },
    { id: 10, image: "images/10.jpg", title: "Тематическая вечеринка", date: "30.01.2024" },
    { id: 12, image: "images/12.jpg", title: "Фото без названия", date: "10.02.2024"},
    { id: 13, image: "images/13.jpg", title: "Фото без названия", date: "15.02.2024" },
    { id: 14, image: "images/14.jpg", title: "Фото без названия", date: "20.02.2024" },
    { id: 15, image: "images/15.jpg", title: "Праздник на природе", date: "25.02.2024" },
    { id: 16, image: "images/16.jpg", title: "Праздник дома", date: "28.02.2024" },
    { id: 17, image: "images/17.jpg", title: "Праздник в кафе", date: "05.03.2024" },
    { id: 18, image: "images/18.jpg", title: "Праздник в парке", date: "10.03.2024" },
    { id: 19, image: "images/19.jpg", title: "Праздник в музее", date: "15.03.2024" },
    { id: 20, image: "images/20.jpg", title: "Праздник в театре", date: "20.03.2024" },
    { id: 21, image: "images/21.jpg", title: "Праздник в зоопарке", date: "25.03.2024" },
    { id: 22, image: "images/22.jpg", title: "Праздник в аквапарке", date: "30.03.2024" },
    { id: 23, image: "images/23.jpg", title: "Праздник в цирке", date: "05.04.2024" },
];

let currentPackage = null;
let selectedCharacters = [];
let selectedShows = [];
let selectedMasterClasses = [];
let selectedProducts = [];
let selectedAdditionalServices = [];
let maxCharacters = 0;
let maxShows = 0;
let maxMasterClasses = 0;
let basePrice = 0;
let visiblePhotosCount = 4;

const CUSTOM_PRICES = {
    character: 5000,
    show: 8000,
    master: 5000,
    products: {
        photo: 3000,
        decor: 2000,
        pinata: 3500
    },
    additional: {
        cake: 0,
        photographer: 3000,
        pinata: 3500
    }
};

// --------------------------------------------------------------------------------------
// ИНИЦИАЛИЗАЦИЯ SWIPERS И FAQ
// --------------------------------------------------------------------------------------

function initSwipers() {
    // Код инициализации Swipers
    if (typeof Swiper !== 'undefined') {
        new Swiper('.team-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.team-swiper .swiper-button-next',
                prevEl: '.team-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.team-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });

        new Swiper('.packages-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.packages-swiper .swiper-button-next',
                prevEl: '.packages-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.packages-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            },
        });
    }
}

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
}

// --------------------------------------------------------------------------------------
// МОДАЛЬНОЕ ОКНО ВЫБРАННЫХ УСЛУГ (КОРЗИНА)
// --------------------------------------------------------------------------------------

function initSelectedServicesModal() {
    const viewSelectedBtn = document.getElementById('view-selected-btn');
    const selectedServicesModal = document.getElementById('selected-services-modal');
    const closeSelectedModal = document.getElementById('close-selected-modal');
    const orderFromModal = document.getElementById('order-from-modal');

    if (!viewSelectedBtn || !selectedServicesModal || !closeSelectedModal || !orderFromModal) return;

    viewSelectedBtn.addEventListener('click', () => {
        updateSelectedServicesModal();
        selectedServicesModal.classList.add('active');
    });

    closeSelectedModal.addEventListener('click', () => {
        selectedServicesModal.classList.remove('active');
    });

    orderFromModal.addEventListener('click', () => {
        selectedServicesModal.classList.remove('active');
        const consultForm = document.querySelector('#consultForm');
        if (consultForm) {
            consultForm.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    selectedServicesModal.addEventListener('click', (e) => {
        if (e.target === selectedServicesModal) {
            selectedServicesModal.classList.remove('active');
        }
    });
}

function updateSelectedServicesModal() {
    const content = document.getElementById('selected-services-content');
    if (!content) return;

    let html = '';

    // Пакет
    if (currentPackage) {
        const packagePrice = currentPackage === 'custom' ? calculateCustomTotal() : basePrice;
        html += `
            <div class="selected-service-item">
                <span class="service-name">Пакет "${getPackageName(currentPackage)}"</span>
                <span class="service-price">${packagePrice.toLocaleString('ru-RU')}₽</span>
            </div>
        `;
    }

    // Персонажи
    selectedCharacters.forEach(char => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.character : 0;
        html += `<div class="selected-service-item">
                    <span class="service-name">${char.name}</span>
                    <span class="service-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
                </div>`;
    });

    // Шоу
    selectedShows.forEach(show => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.show : 0;
        html += `<div class="selected-service-item">
                    <span class="service-name">${show.name}</span>
                    <span class="service-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
                </div>`;
    });

    // Мастер-классы
    selectedMasterClasses.forEach(master => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.master : 0;
        html += `<div class="selected-service-item">
                    <span class="service-name">${master.name}</span>
                    <span class="service-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
                </div>`;
    });

    // Продукты
    selectedProducts.forEach(prod => {
        let price = prod.price;
        if (currentPackage === 'custom') {
            if (prod.id === 'photo') price = CUSTOM_PRICES.products.photo;
            else if (prod.id === 'decor') price = CUSTOM_PRICES.products.decor;
            else if (prod.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
        }
        html += `<div class="selected-service-item">
                    <span class="service-name">${prod.name}</span>
                    <span class="service-price">${price}₽</span>
                </div>`;
    });

    // Дополнительные услуги
    selectedAdditionalServices.forEach(serv => {
        let price = serv.price;
        if (currentPackage === 'custom') {
            if (serv.id === 'photographer') price = CUSTOM_PRICES.products.photo;
            else if (serv.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
            else if (serv.id === 'cake') price = 0;
        }
        html += `<div class="selected-service-item">
                    <span class="service-name">${serv.name}</span>
                    <span class="service-price">${price}₽</span>
                </div>`;
    });

    if (html === '') {
        html = '<p style="text-align: center; color: #666; padding: 40px;">Вы еще ничего не выбрали</p>';
    }

    content.innerHTML = html;
}

// --------------------------------------------------------------------------------------
// ФУНКЦИИ РЕНДЕРИНГА
// --------------------------------------------------------------------------------------

function renderCharacters(charactersToRender) {
    const charactersSlider = document.getElementById('characters-slider');
    if (!charactersSlider) return;

    charactersSlider.innerHTML = '';

    if (!charactersToRender || charactersToRender.length === 0) {
        const card = document.createElement('div');
        card.className = 'character-card-full';
        card.style.display = 'flex';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'center';
        card.style.background = 'rgba(214,196,155,0.1)';
        card.style.border = '1px dashed var(--accent-color)';
        card.innerHTML = `<div class="character-info-overlay" style="position:static;background:none;color:var(--bg-color);">
            <h4>Не нашли персонажа?</h4>
            <p>Напишите нам — мы организуем!</p>
            <button class="view-btn" data-mailto="true">Написать</button>
        </div>`;
        card.addEventListener('click', () => openNotFoundEmail('персонажа'));
        charactersSlider.appendChild(card);
        return;
    }

    charactersToRender.forEach(character => {
        const isSelected = selectedCharacters.some(c => c.name === character.name);
        const card = document.createElement('div');
        card.className = `character-card-full ${isSelected ? 'selected' : ''}`;
        card.dataset.name = character.name;

        let priceHtml = currentPackage === 'custom' ? `<div class="price-tag">${CUSTOM_PRICES.character}₽</div>` : '';

        card.innerHTML = `<img src="${character.image}" alt="${character.name}" class="character-bg">
                            <div class="character-info-overlay">
                                <h4>${character.name}</h4>
                                <p>${character.desc}</p>
                                ${priceHtml}
                            </div>`;
        charactersSlider.appendChild(card);
    });
}

function renderShows(showsToRender) {
    const showsSlider = document.getElementById('shows-slider');
    if (!showsSlider) return;

    showsSlider.innerHTML = '';

    if (!showsToRender || showsToRender.length === 0) {
        const card = document.createElement('div');
        card.className = 'show-card-full';
        card.style.display = 'flex';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'center';
        card.style.background = 'rgba(214,196,155,0.1)';
        card.style.border = '1px dashed var(--accent-color)';
        card.innerHTML = `<div class="show-info-overlay" style="position:static;background:none;color:var(--bg-color);">
            <h4>Не нашли шоу-программу?</h4>
            <p>Напишите нам — мы организуем!</p>
            <button class="view-btn" data-mailto="true">Написать</button>
        </div>`;
        card.addEventListener('click', () => openNotFoundEmail('шоу-программу'));
        showsSlider.appendChild(card);
        return;
    }

    showsToRender.forEach(show => {
        const isSelected = selectedShows.some(s => s.name === show.name);
        const card = document.createElement('div');
        card.className = `show-card-full ${isSelected ? 'selected' : ''}`;
        card.dataset.name = show.name;

        let priceHtml = currentPackage === 'custom' ? `<div class="price-tag">${CUSTOM_PRICES.show}₽</div>` : '';
        let displayPrice = currentPackage === 'custom'
            ? `${CUSTOM_PRICES.show}₽`
            : (typeof show.price === 'string' ? show.price.replace(/AED/g, '₽') : show.price + '₽');


        card.innerHTML = `<img src="${show.image}" alt="${show.name}" class="show-bg">
                            <div class="show-info-overlay">
                                <h4>${show.name}</h4>
                                <p>${show.desc}</p>
                                ${currentPackage !== 'custom' ? `<div class="price-tag">${displayPrice}</div>` : priceHtml}
                                <button class="view-btn" data-video="${show.video}" data-name="${show.name}">Посмотреть видео</button>
                            </div>`;
        showsSlider.appendChild(card);
    });
}

function renderMasterClasses(masterClassesToRender) {
    const masterSlider = document.getElementById('master-slider');
    if (!masterSlider) return;

    masterSlider.innerHTML = '';
    masterClassesToRender.forEach(master => {
        const isSelected = selectedMasterClasses.some(m => m.name === master.name);
        const card = document.createElement('div');
        card.className = `master-card ${isSelected ? 'selected' : ''}`;
        card.dataset.name = master.name;

        let priceHtml = currentPackage === 'custom' ? `<p class="price-tag">${CUSTOM_PRICES.master}₽</p>` : '';

        card.innerHTML = `<div class="master-icon">${master.icon}</div>
                            <h4>${master.name}</h4>
                            <p>${master.desc}</p>
                            ${priceHtml}`;
        masterSlider.appendChild(card);
    });
}


function initCharacterSearch() {
    const input = document.querySelector('.characters-search-input');
    const clearBtn = document.querySelector('.search-clear');
    if (!input) return;

    const apply = () => {
        const q = (input.value || '').trim().toLowerCase();
        const filteredCharacters = charactersData.filter(c =>
            (c.name || '').toLowerCase().includes(q) || (c.desc || '').toLowerCase().includes(q)
        );
        const filteredShows = showsData.filter(s =>
            (s.name || '').toLowerCase().includes(q) || (s.desc || '').toLowerCase().includes(q)
        );
        renderCharacters(filteredCharacters);
        renderShows(filteredShows);
        initSelectionHandlers();
        initGalleryButtons();
    };

    input.addEventListener('input', apply, { passive: true });
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            input.value = '';
            apply();
            input.focus();
        });
    }
    if (input.value && input.value.trim()) apply();
}

function initSliders() {
    renderCharacters(charactersData);
    renderShows(showsData);
    renderMasterClasses(masterClassesData);

    initSelectionHandlers();
    initGalleryButtons();
    initCarouselNavigation();
}

// --------------------------------------------------------------------------------------
// ФУНКЦИЯ ПОИСКА
// --------------------------------------------------------------------------------------

function initSearch() {
    const inputs = document.querySelectorAll('#searchInput'); // поиск только в боковом меню
    if (!inputs.length) return;

    const onInput = (e) => {
        const query = e.target.value.toLowerCase().trim();

        // синхронизируем значение между всеми полями
        inputs.forEach(inp => { if (inp !== e.target) inp.value = e.target.value; });

        // Фильтр по персонажам
        const filteredCharacters = charactersData.filter(c =>
            (c.name || '').toLowerCase().includes(query) || (c.desc || '').toLowerCase().includes(query)
        );
        // Фильтр по шоу
        const filteredShows = showsData.filter(s =>
            (s.name || '').toLowerCase().includes(query) || (s.desc || '').toLowerCase().includes(query)
        );

        renderCharacters(filteredCharacters);
        renderShows(filteredShows);
        initSelectionHandlers();
        initGalleryButtons();
    };

    inputs.forEach(inp => inp.addEventListener('input', onInput, { passive: true }));

    // Первичный рендер без фильтра (если поле уже содержит что-то после возврата)
    const initVal = inputs[0].value?.trim();
    if (initVal) onInput({ target: inputs[0] });
}

// Помощник для «не нашли?» — открывает письмо с предзаполненным текстом
function openNotFoundEmail(subjectTarget) {
    const email = 'order-manager@yourcompany.com';
    const subject = encodeURIComponent(`Запрос: не нашли ${subjectTarget}`);
    const body = encodeURIComponent(
`Здравствуйте!

Не нашёл(а) ${subjectTarget} в списке на сайте. Опишите, пожалуйста, мои пожелания:

— Что нужно организовать: 
— Дата мероприятия: 
— Город/локация: 
— Количество детей: 
— Бюджет: 

Спасибо!`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// --------------------------------------------------------------------------------------
// ЛОГИКА ПАКЕТОВ И ВЫБОРА
// --------------------------------------------------------------------------------------

function initPackageSelection() {
    const packageButtons = document.querySelectorAll('.select-package');

    packageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageCard = this.closest('.package-card');
            currentPackage = packageCard.dataset.package;

            switch(currentPackage) {
                case 'basic':
                    maxCharacters = 1;
                    maxShows = 0;
                    maxMasterClasses = 1;
                    basePrice = 10000;
                    break;
                case 'standard':
                    maxCharacters = 2;
                    maxShows = 1;
                    maxMasterClasses = 0;
                    basePrice = 35000;
                    break;
                case 'premium':
                    maxCharacters = 3;
                    maxShows = 2;
                    maxMasterClasses = 1;
                    basePrice = 55000;
                    break;
                case 'custom':
                    maxCharacters = 99;
                    maxShows = 99;
                    maxMasterClasses = 99;
                    basePrice = 0;
                    break;
            }

            // Сброс выборов при смене пакета
            selectedCharacters = [];
            selectedShows = [];
            selectedMasterClasses = [];
            selectedProducts = [];
            selectedAdditionalServices = [];

            document.getElementById('selected-package-name').textContent = getPackageName(currentPackage);
            document.getElementById('max-characters').textContent = maxCharacters;
            document.getElementById('max-shows').textContent = maxShows;
            document.getElementById('max-master').textContent = maxMasterClasses;

            document.getElementById('package-selection').classList.add('active');

            initSliders(); // Перерисовываем слайдеры с новыми правилами
            updateSelection();

            setTimeout(() => {
                document.getElementById('package-selection').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        });
    });
}

function initSelectionHandlers() {
    document.querySelectorAll('.character-card-full, .show-card-full, .master-card').forEach(card => {
        card.removeEventListener('click', handleSelection); // Удаляем старый обработчик, чтобы избежать дублирования
        card.addEventListener('click', handleSelection);
    });
}

function handleSelection(e) {
    if (e.target.closest('.view-btn')) return;

    const type = this.classList.contains('character-card-full') ? 'character' :
        this.classList.contains('show-card-full') ? 'show' : 'master';
    const name = this.dataset.name;

    let data, selectedArray, max;

    switch (type) {
        case 'character':
            data = charactersData.find(c => c.name === name);
            selectedArray = selectedCharacters;
            max = maxCharacters;
            break;
        case 'show':
            data = showsData.find(s => s.name === name);
            selectedArray = selectedShows;
            max = maxShows;
            break;
        case 'master':
            data = masterClassesData.find(m => m.name === name);
            selectedArray = selectedMasterClasses;
            max = maxMasterClasses;
            break;
    }

    const index = selectedArray.findIndex(item => item.name === name);

    if (index === -1) {
        if (selectedArray.length < max || currentPackage === 'custom') {
            selectedArray.push({name, price: data.price});
            this.classList.add('selected');
            showNotification(`${type === 'character' ? 'Персонаж' : type === 'show' ? 'Шоу' : 'Мастер-класс'} "${name}" добавлен`, 'success');
        } else {
            showNotification(`Можно выбрать не более ${max} ${type === 'character' ? 'персонажей' : type === 'show' ? 'шоу-программ' : 'мастер-классов'}`, 'error');
        }
    } else {
        selectedArray.splice(index, 1);
        this.classList.remove('selected');
    }

    updateSelection();
}


// --------------------------------------------------------------------------------------
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ И ОБРАБОТЧИКИ
// --------------------------------------------------------------------------------------

// ФУНКЦИЯ ПЛАВНОГО СКРОЛЛИНГА
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Сдвиг для фиксированного хедера
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    const navButtons = mobileMenu.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

function initOrderButton() {
    const orderBtn = document.getElementById('order-btn');
    if (!orderBtn) return;

    orderBtn.addEventListener('click', () => {
        updateFormSelectedServices();

        const consultForm = document.querySelector('#consultForm');
        if (consultForm) {
            consultForm.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

function initFormValidation() {
    const form = document.getElementById('consultationForm');
    // !!! КРИТИЧНО !!! ЗАМЕНИТЕ ЭТОТ EMAIL НА ВАШ РЕАЛЬНЫЙ АДРЕС ПОЧТЫ
    const RECIPIENT_EMAIL = 'order-manager@yourcompany.com';

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('#name');
        const phone = this.querySelector('#phone');
        const eventDate = this.querySelector('#eventDate');
        const childBirthday = this.querySelector('#childBirthday');
        const consent = this.querySelector('#consent');
        const emailInput = this.querySelector('#email');

        let isValid = true;

        // --- ВАЛИДАЦИЯ ---
        if (!name.value.trim()) { name.style.borderColor = 'red'; isValid = false; } else { name.style.borderColor = ''; }
        if (!phone.value.match(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/)) { phone.style.borderColor = 'red'; isValid = false; } else { phone.style.borderColor = ''; }
        if (!eventDate.value) { eventDate.style.borderColor = 'red'; isValid = false; } else { eventDate.style.borderColor = ''; }
        if (!childBirthday.value) { childBirthday.style.borderColor = 'red'; isValid = false; } else { childBirthday.style.borderColor = ''; }
        if (!consent.checked) { consent.parentElement.style.color = 'red'; isValid = false; } else { consent.parentElement.style.color = ''; }
        if (emailInput && !emailInput.value.includes('@')) { emailInput.style.borderColor = 'red'; isValid = false; } else { emailInput.style.borderColor = ''; }


        // --- ЛОГИКА MAILTO ---
        if (isValid) {
            const nameVal = name.value.trim();
            const phoneVal = phone.value;
            const eventDateVal = eventDate.value;
            const childBirthdayVal = childBirthday.value;
            const total = document.getElementById('total-price').textContent;

            let emailBody = `Новый ЗАКАЗ с сайта:\n\n`;
            emailBody += `Имя клиента: ${nameVal}\n`;
            emailBody += `Телефон: ${phoneVal}\n`;
            emailBody += `Email клиента: ${emailInput.value.trim()}\n`;
            emailBody += `Дата события: ${eventDateVal}\n`;
            emailBody += `День рождения ребенка: ${childBirthdayVal}\n\n`;

            const formServicesElement = document.getElementById('form-selected-services');
            if (formServicesElement) {
                emailBody += `--- Детали Заказа (Пакет) ---\n${formServicesElement.textContent}\n`;
            }

            emailBody += `ИТОГО К ОПЛАТЕ: ${total}₽`;

            const encodedSubject = encodeURIComponent(`ЗАКАЗ С САЙТА: ${nameVal} (${phoneVal})`);
            const encodedBody = encodeURIComponent(emailBody);

            const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
            window.location.href = mailtoLink;

            this.reset();
            resetSelection();
            showNotification('Вы будете перенаправлены в почтовый клиент для отправки заказа!', 'success');
        } else {
            showNotification('Пожалуйста, заполните все обязательные поля и дайте согласие.', 'error');
        }
    });
}


function initPhoneMask() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', function (e) {
        let value = this.value.replace(/\D/g, '');

        if (value.length > 0) {
            value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
        }

        this.value = value.substring(0, 18);
    });
}

function initModalClose() {
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.classList.remove('modal-open');
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        });
    });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function updateSelection() {
    if (document.getElementById('characters-count')) {
        document.getElementById('characters-count').textContent = selectedCharacters.length;
    }
    if (document.getElementById('shows-count')) {
        document.getElementById('shows-count').textContent = selectedShows.length;
    }
    if (document.getElementById('master-count')) {
        document.getElementById('master-count').textContent = selectedMasterClasses.length;
    }
    updateTotalPrice();
    updateCartBadge();
    updateCartDisplay();
}

function showVideoModal(videoUrl, title) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const videoTitle = document.getElementById('video-modal-title');

    if (modal && video && videoTitle) {
        video.src = videoUrl;
        videoTitle.textContent = title;
        modal.classList.add('active');
        document.body.classList.add('modal-open');

        const closeModalBtn = document.querySelector('#video-modal .close-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', function () {
                video.pause();
                video.currentTime = 0;
            });
        }
    }
}

function initProductButtons() {
    document.querySelectorAll('.product-card .add-product-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const card = this.closest('.product-card');
            const name = card.dataset.name;
            let price = parseInt(card.dataset.price, 10);
            const id = card.dataset.product;

            if (currentPackage === 'custom') {
                if (id === 'photo') price = CUSTOM_PRICES.products.photo;
                else if (id === 'decor') price = CUSTOM_PRICES.products.decor;
                else if (id === 'pinata') price = CUSTOM_PRICES.products.pinata;
            }

            if (!selectedProducts.some(p => p.id === id)) {
                selectedProducts.push({id, name, price});
                showNotification(`Товар "${name}" добавлен`, 'success');
                updateSelection();
            }
        });
    });
}

function initAdditionalServiceCheckboxes() {
    document.querySelectorAll('.additional-service').forEach(chk => {
        chk.addEventListener('change', function () {
            const name = this.dataset.name;
            let price = parseInt(this.dataset.price, 10);
            const id = this.dataset.type;

            if (currentPackage === 'custom') {
                if (id === 'photographer') price = CUSTOM_PRICES.products.photo;
                else if (id === 'pinata') price = CUSTOM_PRICES.products.pinata;
                else if (id === 'cake') price = 0;
            }

            if (this.checked) {
                if (!selectedAdditionalServices.some(s => s.id === id)) {
                    selectedAdditionalServices.push({id, name, price});
                }
            } else {
                selectedAdditionalServices = selectedAdditionalServices.filter(s => s.id !== id);
            }
            updateSelection();
        });
    });
}

function updateFormSelectedServices() {
    const formServices = document.getElementById('form-selected-services');
    if (!formServices) return;

    let textContent = '';

    const totalPriceElement = document.getElementById('total-price');
    const total = totalPriceElement ? totalPriceElement.textContent : '0';

    textContent += `Пакет: ${getPackageName(currentPackage)} Цена: ${total}₽\n`;

    // Персонажи
    selectedCharacters.forEach(char => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.character + '₽' : 'Включено';
        textContent += `Персонаж: ${char.name} (${price})\n`;
    });

    // Шоу
    selectedShows.forEach(show => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.show + '₽' : 'Включено';
        textContent += `Шоу: ${show.name} (${price})\n`;
    });

    // Мастер-классы
    selectedMasterClasses.forEach(master => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.master + '₽' : 'Включено';
        textContent += `Мастер-класс: ${master.name} (${price})\n`;
    });

    // Продукты
    selectedProducts.forEach(prod => {
        let price = prod.price;
        if (currentPackage === 'custom') {
            if (prod.id === 'photo') price = CUSTOM_PRICES.products.photo;
            else if (prod.id === 'decor') price = CUSTOM_PRICES.products.decor;
            else if (prod.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
        }
        textContent += `Продукт: ${prod.name} (${price}₽)\n`;
    });

    // Дополнительные услуги
    selectedAdditionalServices.forEach(serv => {
        let price = serv.price;
        if (currentPackage === 'custom') {
            if (serv.id === 'photographer') price = CUSTOM_PRICES.products.photo;
            else if (serv.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
            else if (serv.id === 'cake') price = 0;
        }
        textContent += `Доп. услуга: ${serv.name} (${price}₽)\n`;
    });

    formServices.textContent = textContent;
}


function resetSelection() {
    currentPackage = null;
    selectedCharacters = [];
    selectedShows = [];
    selectedMasterClasses = [];
    selectedProducts = [];
    selectedAdditionalServices = [];

    const packageSelection = document.getElementById('package-selection');
    if (packageSelection) {
        packageSelection.classList.remove('active');
    }

    const formServices = document.getElementById('form-selected-services');
    if (formServices) {
        formServices.innerHTML = '';
    }

    document.querySelectorAll('.character-card-full, .show-card-full, .master-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelectorAll('.additional-service').forEach(chk => chk.checked = false);

    // Перерисовываем, чтобы очистить выбранные стили
    initSliders();
    updateSelection();
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    if (!totalPriceElement) return;

    let total = 0;

    if (currentPackage === 'custom') {
        total = calculateCustomTotal();
    } else {
        total = basePrice;
        selectedProducts.forEach(p => total += p.price);
        selectedAdditionalServices.forEach(s => total += s.price);
    }

    totalPriceElement.textContent = total.toLocaleString('ru-RU');
}

function getPackageName(packageType) {
    switch (packageType) {
        case 'basic': return 'Базовый';
        case 'standard': return 'Стандарт';
        case 'premium': return 'Премиум';
        case 'custom': return 'Кастомный';
        default: return '';
    }
}

function initGalleryButtons() {
    document.addEventListener('click', function (e) {
        const viewBtn = e.target.closest('.view-btn');
        if (viewBtn) {
            const videoUrl = viewBtn.dataset.video;
            const title = viewBtn.dataset.name;
            if (videoUrl) {
                showVideoModal(videoUrl, title);
            }
        }
    });
}

function initReviewPhotos() {
    renderReviewPhotos();

    const loadMoreBtn = document.getElementById('load-more-reviews');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePhotos);
    }
}


function loadMorePhotos() {
    visiblePhotosCount += 4;
    renderReviewPhotos();

    setTimeout(() => {
        const newPhotos = document.querySelectorAll('.review-photo-card.new');
        if (newPhotos.length > 0) {
            newPhotos[0].scrollIntoView({behavior: 'smooth', block: 'nearest'});
        }
    }, 100);
}

function initFloatingCart() {
    const cartBtn = document.getElementById('floating-cart');
    const cartPanel = document.getElementById('cart-panel');
    const closeCart = document.querySelector('.close-cart');
    const clearCartBtn = document.getElementById('clear-cart');
    const orderFromCartBtn = document.getElementById('order-from-cart');

    if (!cartBtn || !cartPanel || !closeCart || !clearCartBtn || !orderFromCartBtn) return;

    cartBtn.addEventListener('click', function () {
        cartPanel.classList.toggle('active');
        updateCartDisplay();
    });

    closeCart.addEventListener('click', function () {
        cartPanel.classList.remove('active');
    });

    clearCartBtn.addEventListener('click', function () {
        resetSelection();
        updateCartBadge();
        cartPanel.classList.remove('active');
        showNotification('Корзина очищена', 'success');
    });

    orderFromCartBtn.addEventListener('click', function () {
        if (currentPackage) {
            cartPanel.classList.remove('active');
            const consultForm = document.querySelector('#consultForm');
            if (consultForm) {
                consultForm.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            showNotification('Пожалуйста, сначала выберите пакет услуг', 'error');
        }
    });

    document.addEventListener('click', function (e) {
        if (!cartPanel.contains(e.target) && !cartBtn.contains(e.target) && !e.target.closest('#view-selected-btn')) {
            cartPanel.classList.remove('active');
        }
    });
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;

    const totalItems = selectedCharacters.length + selectedShows.length +
        selectedMasterClasses.length + selectedProducts.length +
        selectedAdditionalServices.length;
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-price');
    if (!cartItems || !cartTotal) return;

    let html = '';
    let total = 0;

    // Пакет
    if (currentPackage) {
        const packagePrice = currentPackage === 'custom' ? calculateCustomTotal() : basePrice;
        html += `<div class="cart-item">
            <span class="cart-item-name">Пакет "${getPackageName(currentPackage)}"</span>
            <span class="cart-item-price">${packagePrice.toLocaleString('ru-RU')}₽</span>
        </div>`;
        total += packagePrice;
    }

    // Персонажи
    selectedCharacters.forEach(char => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.character : 0;
        html += `<div class="cart-item">
            <span class="cart-item-name">${char.name}</span>
            <span class="cart-item-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
        </div>`;
        if (currentPackage === 'custom') total += price;
    });

    // Шоу
    selectedShows.forEach(show => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.show : 0;
        html += `<div class="cart-item">
            <span class="cart-item-name">${show.name}</span>
            <span class="cart-item-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
        </div>`;
        if (currentPackage === 'custom') total += price;
    });

    // Мастер-классы
    selectedMasterClasses.forEach(master => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.master : 0;
        html += `<div class="cart-item">
            <span class="cart-item-name">${master.name}</span>
            <span class="cart-item-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
        </div>`;
        if (currentPackage === 'custom') total += price;
    });

    // Продукты
    selectedProducts.forEach(prod => {
        let price = prod.price;
        if (currentPackage === 'custom') {
            if (prod.id === 'photo') price = CUSTOM_PRICES.products.photo;
            else if (prod.id === 'decor') price = CUSTOM_PRICES.products.decor;
            else if (prod.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
        }
        html += `<div class="cart-item">
            <span class="cart-item-name">${prod.name}</span>
            <span class="cart-item-price">${price}₽</span>
        </div>`;
        total += price;
    });

    // Дополнительные услуги
    selectedAdditionalServices.forEach(serv => {
        let price = serv.price;
        if (currentPackage === 'custom') {
            if (serv.id === 'photographer') price = CUSTOM_PRICES.products.photo;
            else if (serv.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
            else if (serv.id === 'cake') price = 0;
        }
        html += `<div class="cart-item">
            <span class="cart-item-name">${serv.name}</span>
            <span class="cart-item-price">${price}₽</span>
        </div>`;
        total += price;
    });


    if (html === '') {
        html = '<div style="text-align: center; padding: 20px; color: #666;">Корзина пуста</div>';
    }

    cartItems.innerHTML = html;
    cartTotal.textContent = total.toLocaleString('ru-RU');
}

function calculateCustomTotal() {
    let total = 0;

    total += selectedCharacters.length * CUSTOM_PRICES.character;
    total += selectedShows.length * CUSTOM_PRICES.show;
    total += selectedMasterClasses.length * CUSTOM_PRICES.master;

    selectedProducts.forEach(prod => {
        if (prod.id === 'photo') total += CUSTOM_PRICES.products.photo;
        else if (prod.id === 'decor') total += CUSTOM_PRICES.products.decor;
        else if (prod.id === 'pinata') total += CUSTOM_PRICES.products.pinata;
    });

    selectedAdditionalServices.forEach(serv => {
        if (serv.id === 'photographer') total += CUSTOM_PRICES.products.photo;
        else if (serv.id === 'pinata') total += CUSTOM_PRICES.products.pinata;
    });
    return total;
}

function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Off-canvas левое меню
function initSideNav() {
    const burger = document.getElementById('mobileMenuBtn');
    const sidenav = document.getElementById('sidenav');
    const overlay = document.getElementById('sidenavOverlay');
    const closeBtn = document.getElementById('sidenavClose');

    if (!burger || !sidenav || !overlay || !closeBtn) return;

    const open = () => {
        sidenav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        sidenav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    burger.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);

    sidenav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

    // Свайп закрыть (простой вариант)
    let startX = null;
    sidenav.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    sidenav.addEventListener('touchmove', (e) => {
        if (startX === null) return;
        const currentX = e.touches[0].clientX;
        if (startX - currentX > 50) {
            close();
            startX = null;
        }
    }, { passive: true });
}

function initCarouselNavigation() {
    function setupCarouselNavigation(prevBtnId, nextBtnId, sliderId) {
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        const slider = document.getElementById(sliderId);

        if (!prevBtn || !nextBtn || !slider) return;

        prevBtn.addEventListener('click', () => {
            const container = slider.parentElement;
            const scrollAmount = container.clientWidth;
            slider.scrollBy({left: -scrollAmount, behavior: 'smooth'});
        });

        nextBtn.addEventListener('click', () => {
            const container = slider.parentElement;
            const scrollAmount = container.clientWidth;
            slider.scrollBy({left: scrollAmount, behavior: 'smooth'});
        });
    }

    setupCarouselNavigation('characters-prev', 'characters-next', 'characters-slider');
    setupCarouselNavigation('shows-prev', 'shows-next', 'shows-slider');
    setupCarouselNavigation('master-prev', 'master-next', 'master-slider');
}


function renderReviewPhotos() {
    const reviewsGrid = document.getElementById('reviews-grid');
    if (!reviewsGrid) return;

    reviewsGrid.innerHTML = '';

    const photosToShow = reviewPhotosData.slice(0, visiblePhotosCount);

    photosToShow.forEach((photo, index) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'review-photo-card';
        if (index >= visiblePhotosCount - 4) {
            photoCard.classList.add('new');
        }
        photoCard.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}" class="review-photo" loading="lazy" data-photo-src="${photo.image}" data-photo-title="${photo.title}">
            <div class="photo-overlay">
                <div class="photo-info">
                    <div class="photo-title">${photo.title}</div>
                    <div class="photo-date">${photo.date}</div>
                </div>
            </div>
        `;
        reviewsGrid.appendChild(photoCard);
    });

    document.querySelectorAll('.review-photo-card').forEach(card => {
        card.addEventListener('click', function () {
            const img = this.querySelector('.review-photo');
            if (!img) return;
            const src = img.dataset.photoSrc || img.getAttribute('src');
            const title = img.dataset.photoTitle || img.getAttribute('alt') || '';

            // ИСПОЛЬЗУЕМ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
            if (imageViewModal && modalImageView && modalImageTitle) {
                modalImageView.src = src;
                modalImageTitle.textContent = title;
                imageViewModal.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    });

    const loadMoreBtn = document.getElementById('load-more-reviews');
    if (loadMoreBtn) {
        if (visiblePhotosCount >= reviewPhotosData.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// --------------------------------------------------------------------------------------
// DOMContentLoaded (ИНИЦИАЛИЗАЦИЯ)
// --------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Основные инициализации
    initPackageSelection();
    initSliders(); // Инициализирует и рендерит все слайдеры
    initMobileMenu();
    initSmoothScroll(); // ПЛАВНЫЙ СКРОЛЛИНГ
    initOrderButton();
    initFormValidation();
    initPhoneMask();
    initModalClose();
    initIntersectionObserver();
    initProductButtons();
    initAdditionalServiceCheckboxes();
    initReviewPhotos();
    initFloatingCart();
    initSwipers();
    initFAQ();
    initSelectedServicesModal();

    // Левое бургер-меню (off-canvas)
    initSideNav();
    initSearch(); // ФУНКЦИЯ ПОИСКА
    initCharacterSearch(); // Поиск в секции Персонажи

    // Инициализация модалки изображений (Используем глобальные переменные)
    if (imageViewModal && modalImageView) {
        if (closeImageViewModalBtn) {
            closeImageViewModalBtn.addEventListener('click', () => {
                imageViewModal.classList.remove('active');
                document.body.classList.remove('modal-open');
                modalImageView.src = '';
            });
        }

        imageViewModal.addEventListener('click', (e) => {
            if (e.target === imageViewModal) {
                imageViewModal.classList.remove('active');
                document.body.classList.remove('modal-open');
                modalImageView.src = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageViewModal.classList.contains('active')) {
                imageViewModal.classList.remove('active');
                document.body.classList.remove('modal-open');
                modalImageView.src = '';
            }
        });
    }

    // Инициализация видео модалки
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const playVideoBtn = document.getElementById('play-video-btn');

    if (playVideoBtn) {
        playVideoBtn.addEventListener('click', () => {
            if (videoModal && modalVideo) {
                modalVideo.src = DEFAULT_VIDEO_URL;
                videoModal.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    }

    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.closest('.close-modal')) {
                videoModal.classList.remove('active');
                document.body.classList.remove('modal-open');
                if (modalVideo) {
                    modalVideo.pause();
                    modalVideo.currentTime = 0;
                    modalVideo.src = '';
                }
            }
        });
    }
});