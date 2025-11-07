
const API_BASE_URL = '/api/booking';

const charactersData = [
    {
        "name": "Капитан Америка",
        "desc": "Капитан Бургера",
        "image": "images/amurika.PNG",
        "price": 5000
    },
    {
        "name": "Barbie",
        "desc": "Описание для Barbie",
        "image": "images/barbie.PNG",
        "price": 4702
    },
    {
        "name": "Бэтгерл",
        "desc": "Отважная героиня Готэма",
        "image": "images/batgerrl.PNG",
        "price": 5500
    },
    {
        "name": "Batmen",
        "desc": "Описание для Batmen",
        "image": "images/batmen.PNG",
        "price": 5714
    },
    {
        "name": "Белоснежка",
        "desc": "Самая добрая принцесса",
        "image": "images/belosnezhka.PNG",
        "price": 5500
    },
    {
        "name": "Buzz",
        "desc": "Описание для Buzz",
        "image": "images/buzz.PNG",
        "price": 5881
    },
    {
        "name": "Cheburashka",
        "desc": "Описание для Cheburashka",
        "image": "images/cheburashka.PNG",
        "price": 6535
    },
    {
        "name": "Clown",
        "desc": "Описание для Clown",
        "image": "images/clown.PNG",
        "price": 6208
    },
    {
        "name": "Clowns",
        "desc": "Описание для Clowns",
        "image": "images/clowns.PNG",
        "price": 7039
    },
    {
        "name": "Djedai",
        "desc": "Описание для Djedai",
        "image": "images/djedai.PNG",
        "price": 4513
    },
    {
        "name": "Фредди Фазбер",
        "desc": "Поиграй с медведем",
        "image": "images/fredybazbearholhoholhoohohhool.PNG",
        "price": 5500
    },
    {
        "name": "Гарри Поттер",
        "desc": "Юный волшебник из Хогвартса",
        "image": "images/garypotter.PNG",
        "price": 6000
    },
    {
        "name": "Grinch",
        "desc": "Описание для Grinch",
        "image": "images/grinch.PNG",
        "price": 5678
    },
    {
        "name": "Халк",
        "desc": "Зеленный качок",
        "image": "images/Halk.PNG",
        "price": 5000
    },
    {
        "name": "Happy New Year",
        "desc": "Описание для Happy New Year",
        "image": "images/happy new year.PNG",
        "price": 5802
    },
    {
        "name": "Joker",
        "desc": "Описание для Joker",
        "image": "images/joker.PNG",
        "price": 7930
    },
    {
        "name": "Kreeper",
        "desc": "Описание для Kreeper",
        "image": "images/kreeper.PNG",
        "price": 7642
    },
    {
        "name": "Ladybug",
        "desc": "Описание для Ladybug",
        "image": "images/ladybug.PNG",
        "price": 4814
    },
    {
        "name": "Lego",
        "desc": "Описание для Lego",
        "image": "images/lego.PNG",
        "price": 5007
    },
    {
        "name": "Malifest",
        "desc": "Описание для Malifest",
        "image": "images/malifest.PNG",
        "price": 5085
    },
    {
        "name": "Matros",
        "desc": "Описание для Matros",
        "image": "images/matros.PNG",
        "price": 7225
    },
    {
        "name": "Maybl",
        "desc": "Описание для Maybl",
        "image": "images/maybl.PNG",
        "price": 7242
    },
    {
        "name": "Mikiandmaus",
        "desc": "Описание для Mikiandmaus",
        "image": "images/mikiandmaus.PNG",
        "price": 6237
    },
    {
        "name": "Mikimaus",
        "desc": "Описание для Mikimaus",
        "image": "images/Mikimaus.PNG",
        "price": 5554
    },
    {
        "name": "Майнкрафт",
        "desc": "Тюринг полная игра",
        "image": "images/minicraftblyat.PNG",
        "price": 4500
    },
    {
        "name": "Minions",
        "desc": "Описание для Minions",
        "image": "images/minions.PNG",
        "price": 7658
    },
    {
        "name": "Naruto",
        "desc": "Описание для Naruto",
        "image": "images/naruto.PNG",
        "price": 7376
    },
    {
        "name": "Neznayka",
        "desc": "Описание для Neznayka",
        "image": "images/neznayka.PNG",
        "price": 6436
    },
    {
        "name": "Patrul",
        "desc": "Описание для Patrul",
        "image": "images/patrul.PNG",
        "price": 7931
    },
    {
        "name": "Пьеро",
        "desc": "Дед инсайд с ссср",
        "image": "images/piero.PNG",
        "price": 6500
    },
    {
        "name": "Pirat",
        "desc": "Описание для Pirat",
        "image": "images/pirat.PNG",
        "price": 7209
    },
    {
        "name": "Pony",
        "desc": "Описание для Pony",
        "image": "images/pony.PNG",
        "price": 5876
    },
    {
        "name": "Футболист",
        "desc": "Отец роналдо",
        "image": "images/ronaldo.PNG",
        "price": 5000
    },
    {
        "name": "Rusalochka",
        "desc": "Описание для Rusalochka",
        "image": "images/rusalochka.PNG",
        "price": 6541
    },
    {
        "name": "Scauts",
        "desc": "Описание для Scauts",
        "image": "images/scauts.PNG",
        "price": 4903
    },
    {
        "name": "Шрек",
        "desc": "Кто проживает на дне болота",
        "image": "images/shrek.PNG",
        "price": 8000
    },
    {
        "name": "Soldat",
        "desc": "Описание для Soldat",
        "image": "images/soldat.PNG",
        "price": 6029
    },
    {
        "name": "Sonik",
        "desc": "Описание для Sonik",
        "image": "images/sonik.PNG",
        "price": 7761
    },
    {
        "name": "Spiderman",
        "desc": "Описание для Spiderman",
        "image": "images/spiderman.PNG",
        "price": 6253
    },
    {
        "name": "Superkot",
        "desc": "Описание для Superkot",
        "image": "images/superkot.PNG",
        "price": 7291
    },
    {
        "name": "Супермен",
        "desc": "Лунтик в плаще",
        "image": "images/superpidor.PNG",
        "price": 5500
    },
    {
        "name": "Svinkapepa",
        "desc": "Описание для Svinkapepa",
        "image": "images/svinkapepa.PNG",
        "price": 6986
    },
    {
        "name": "Teremok",
        "desc": "Описание для Teremok",
        "image": "images/teremok.PNG",
        "price": 4722
    },
    {
        "name": "Thor",
        "desc": "Описание для Thor",
        "image": "images/thor.PNG",
        "price": 4955
    },
    {
        "name": "Tiktokers",
        "desc": "Описание для Tiktokers",
        "image": "images/tiktokers.PNG",
        "price": 5596
    },
    {
        "name": "Железный Человек",
        "desc": "Гений, миллиардер, плейбой, филантроп",
        "image": "images/tonysrark.PNG",
        "price": 6000
    },
    {
        "name": "Transformers",
        "desc": "Описание для Transformers",
        "image": "images/transformers.PNG",
        "price": 6985
    },
    {
        "name": "Trikotaa",
        "desc": "Описание для Trikotaa",
        "image": "images/trikotaa.PNG",
        "price": 5477
    },
    {
        "name": "Wednesday",
        "desc": "Описание для Wednesday",
        "image": "images/wednesday.PNG",
        "price": 6756
    }
];

const showsData = [
    {
        "name": "Шоу мыльных пузырей",
        "desc": "Гигантские пузыри, огненные пузыри и дети внутри пузыря.",
        "price": "1400 AED",
        "age": "2-7 лет",
        "duration": "30 минут",
        "video": "https://daniliuskosmaches.github.io/videos/Fom.mp4",
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
        "video": "videos/slime-show.mov",
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
        "video": "videos/Foam.mp4",
        "image": "images/foam.jpg"
    },
    {
        "name": "Магическое шоу",
        "desc": "Весёлые фокусы, иллюзии и интерактив с детьми.",
        "price": "1400 AED",
        "age": "4-7 лет",
        "duration": "30 минут",
        "video": "videos/Magic.mp4",
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
        "video": "videos/teen.mp4",
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
    { id: 12, image: "images/12.jpg", title: "", date: "10.02.2024"},
    { id: 13, image: "images/13.jpg", title: "", date: "15.02.2024" },
    { id: 14, image: "images/14.jpg", title: "", date: "20.02.2024" },
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

// Инициализация свайперов
function initSwipers() {
    // Свайпер команды
    const teamSwiper = new Swiper('.team-swiper', {
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
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Свайпер пакетов
    const packagesSwiper = new Swiper('.packages-swiper', {
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
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
}

// FAQ функциональность
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Закрываем все остальные
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Переключаем текущий
            item.classList.toggle('active');
        });
    });
}

// Модальное окно выбранных услуг
function initSelectedServicesModal() {
    const viewSelectedBtn = document.getElementById('view-selected-btn');
    const selectedServicesModal = document.getElementById('selected-services-modal');
    const closeSelectedModal = document.getElementById('close-selected-modal');
    const orderFromModal = document.getElementById('order-from-modal');
    const selectedServicesContent = document.getElementById('selected-services-content');

    viewSelectedBtn.addEventListener('click', () => {
        updateSelectedServicesModal();
        selectedServicesModal.classList.add('active');
    });

    closeSelectedModal.addEventListener('click', () => {
        selectedServicesModal.classList.remove('active');
    });

    orderFromModal.addEventListener('click', () => {
        selectedServicesModal.classList.remove('active');
        document.querySelector('#consultForm').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Закрытие по клику вне модалки
    selectedServicesModal.addEventListener('click', (e) => {
        if (e.target === selectedServicesModal) {
            selectedServicesModal.classList.remove('active');
        }
    });
}

function updateSelectedServicesModal() {
    const content = document.getElementById('selected-services-content');
    let html = '';

    if (currentPackage) {
        const packagePrice = currentPackage === 'custom' ? calculateCustomTotal() : basePrice;
        html += `
      <div class="selected-service-item">
        <span class="service-name">Пакет "${getPackageName(currentPackage)}"</span>
        <span class="service-price">${packagePrice.toLocaleString('ru-RU')}₽</span>
      </div>
    `;
    }

    if (selectedCharacters.length > 0) {
        selectedCharacters.forEach(char => {
            const price = currentPackage === 'custom' ? CUSTOM_PRICES.character : 0;
            html += `
        <div class="selected-service-item">
          <span class="service-name">${char.name}</span>
          <span class="service-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
        </div>
      `;
        });
    }

    if (selectedShows.length > 0) {
        selectedShows.forEach(show => {
            const price = currentPackage === 'custom' ? CUSTOM_PRICES.show : 0;
            html += `
        <div class="selected-service-item">
          <span class="service-name">${show.name}</span>
          <span class="service-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
        </div>
      `;
        });
    }

    if (selectedMasterClasses.length > 0) {
        selectedMasterClasses.forEach(master => {
            const price = currentPackage === 'custom' ? CUSTOM_PRICES.master : 0;
            html += `
        <div class="selected-service-item">
          <span class="service-name">${master.name}</span>
          <span class="service-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
        </div>
      `;
        });
    }

    if (selectedProducts.length > 0) {
        selectedProducts.forEach(prod => {
            let price = prod.price;
            if (currentPackage === 'custom') {
                if (prod.id === 'photo') price = CUSTOM_PRICES.products.photo;
                else if (prod.id === 'decor') price = CUSTOM_PRICES.products.decor;
                else if (prod.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
            }
            html += `
        <div class="selected-service-item">
          <span class="service-name">${prod.name}</span>
          <span class="service-price">${price}₽</span>
        </div>
      `;
        });
    }

    if (selectedAdditionalServices.length > 0) {
        selectedAdditionalServices.forEach(serv => {
            let price = serv.price;
            if (currentPackage === 'custom') {
                if (serv.id === 'photographer') price = CUSTOM_PRICES.products.photo;
                else if (serv.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
                else if (serv.id === 'cake') price = 0;
            }
            html += `
        <div class="selected-service-item">
          <span class="service-name">${serv.name}</span>
          <span class="service-price">${price}₽</span>
        </div>
      `;
        });
    }

    if (html === '') {
        html = '<p style="text-align: center; color: #666; padding: 40px;">Вы еще ничего не выбрали</p>';
    }

    content.innerHTML = html;
}

// Основные функции слайдеров
function initSliders() {
    const charactersSlider = document.getElementById('characters-slider');
    charactersSlider.innerHTML = '';

    charactersData.forEach(character => {
        const isSelected = selectedCharacters.some(c => c.name === character.name);
        const card = document.createElement('div');
        card.className = `character-card-full ${isSelected ? 'selected' : ''}`;
        card.dataset.name = character.name;

        let priceHtml = '';
        if (currentPackage === 'custom') {
            priceHtml = `<div class="price-tag">${CUSTOM_PRICES.character}₽</div>`;
        }

        card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" class="character-bg">
      <div class="character-info-overlay">
        <h4>${character.name}</h4>
        <p>${character.desc}</p>
        ${priceHtml}
      </div>
    `;
        charactersSlider.appendChild(card);
    });

    const showsSlider = document.getElementById('shows-slider');
    showsSlider.innerHTML = '';

    showsData.forEach(show => {
        const isSelected = selectedShows.some(s => s.name === show.name);
        const card = document.createElement('div');
        card.className = `show-card-full ${isSelected ? 'selected' : ''}`;
        card.dataset.name = show.name;

        let priceHtml = '';
        if (currentPackage === 'custom') {
            priceHtml = `<div class="price-tag">${CUSTOM_PRICES.show}₽</div>`;
        }

        let showDesc = show.desc;
        let showPrice = show.price;
        if (typeof showPrice === 'string') {
            showPrice = showPrice.replace(/AED/g, '₽');
        }

        card.innerHTML = `
      <img src="${show.image}" alt="${show.name}" class="show-bg">
      <div class="show-info-overlay">
        <h4>${show.name}</h4>
        <p>${showDesc}</p>
        ${priceHtml}
        <button class="view-btn" data-video="${show.video}" data-name="${show.name}">Посмотреть видео</button>
      </div>
    `;
        showsSlider.appendChild(card);
    });

    const masterSlider = document.getElementById('master-slider');
    masterSlider.innerHTML = '';

    masterClassesData.forEach(master => {
        const isSelected = selectedMasterClasses.some(m => m.name === master.name);
        const card = document.createElement('div');
        card.className = `master-card ${isSelected ? 'selected' : ''}`;
        card.dataset.name = master.name;

        let priceHtml = '';
        if (currentPackage === 'custom') {
            priceHtml = `<p class="price-tag">${CUSTOM_PRICES.master}₽</p>`;
        }

        card.innerHTML = `
      <div class="master-icon">${master.icon}</div>
      <h4>${master.name}</h4>
      <p>${master.desc}</p>
      ${priceHtml}
    `;
        masterSlider.appendChild(card);
    });

    initSelectionHandlers();
    initGalleryButtons();
    initCarouselNavigation();
}

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

            initSliders();
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

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

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

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initOrderButton() {
    const orderBtn = document.getElementById('order-btn');

    orderBtn.addEventListener('click', () => {
        updateFormSelectedServices();

        document.querySelector('#consultForm').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

function initFormValidation() {
    const form = document.getElementById('consultationForm');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = this.querySelector('#name');
        const phone = this.querySelector('#phone');
        const eventDate = this.querySelector('#eventDate');
        const childBirthday = this.querySelector('#childBirthday');
        const consent = this.querySelector('#consent');

        let isValid = true;

        if (!name.value.trim()) {
            name.style.borderColor = 'red';
            isValid = false;
        } else {
            name.style.borderColor = '';
        }

        if (!phone.value.match(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/)) {
            phone.style.borderColor = 'red';
            isValid = false;
        } else {
            phone.style.borderColor = '';
        }

        if (!eventDate.value) {
            eventDate.style.borderColor = 'red';
            isValid = false;
        } else {
            eventDate.style.borderColor = '';
        }

        if (!childBirthday.value) {
            childBirthday.style.borderColor = 'red';
            isValid = false;
        } else {
            childBirthday.style.borderColor = '';
        }

        if (!consent.checked) {
            consent.parentElement.style.color = 'red';
            isValid = false;
        } else {
            consent.parentElement.style.color = '';
        }

        if (isValid && currentPackage) {
            try {
                const formData = {
                    name: name.value,
                    phone: phone.value,
                    email: '',
                    eventDate: eventDate.value,
                    childBirthday: childBirthday.value,
                    packageType: currentPackage,
                    characters: selectedCharacters,
                    shows: selectedShows,
                    masterClasses: selectedMasterClasses,
                    products: selectedProducts,
                    additionalServices: selectedAdditionalServices,
                    total: document.getElementById('total-price').textContent,
                    consent: true
                };

                const response = await fetch(`${API_BASE_URL}/bookings`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    let errorDetails = `Ошибка сервера. Статус: ${response.status}.`;

                    try {
                        const errorData = await response.json();
                        errorDetails = errorData.message || errorDetails;
                    } catch (e) {
                        console.error('Ошибка парсинга JSON.', e);
                        const errorText = await response.text();
                        console.error('Тело ответа от сервера:', errorText.substring(0, 200));
                        errorDetails = `Прокси-сервер вернул некорректный ответ (Статус: ${response.status}).`;
                    }

                    throw new Error(errorDetails);
                }

                const data = await response.json();
                showNotification('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
                form.reset();
                resetSelection();
            } catch (error) {
                console.error('Ошибка:', error);
                showNotification(error.message || 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.', 'error');
            }
        } else if (!currentPackage) {
            showNotification('Пожалуйста, выберите пакет услуг', 'error');
        } else {
            showNotification('Пожалуйста, заполните все обязательные поля корректно', 'error');
        }
    });
}

function initPhoneMask() {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');

        if (value.length > 0) {
            value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
        }

        this.value = value.substring(0, 18);
    });
}

function initModalClose() {
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
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
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function updateSelection() {
    document.getElementById('characters-count').textContent = selectedCharacters.length;
    document.getElementById('shows-count').textContent = selectedShows.length;
    document.getElementById('master-count').textContent = selectedMasterClasses.length;
    updateTotalPrice();
    updateCartBadge();
    updateCartDisplay();
}

function scrollCarousel(id, amount) {
    const carousel = document.getElementById(id);
    carousel.scrollBy({ left: amount, behavior: 'smooth' });
}

function showVideoModal(videoUrl, title) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const videoTitle = document.getElementById('video-modal-title');

    video.src = videoUrl;
    videoTitle.textContent = title;
    modal.classList.add('active');

    document.querySelector('#video-modal .close-modal').addEventListener('click', function() {
        video.pause();
    });
}

function initProductButtons() {
    document.querySelectorAll('.product-card .add-product-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
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
                selectedProducts.push({ id, name, price });
                showNotification(`Товар "${name}" добавлен`, 'success');
                updateSelection();
            }
        });
    });
}

function initAdditionalServiceCheckboxes() {
    document.querySelectorAll('.additional-service').forEach(chk => {
        chk.addEventListener('change', function() {
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
                    selectedAdditionalServices.push({ id, name, price });
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
    let html = '<h4>Выбранные услуги:</h4><div class="selected-items">';
    html += `<div class="selected-item">Пакет: ${getPackageName(currentPackage)} <span>${document.getElementById('total-price').textContent}₽</span></div>`;

    if (selectedCharacters.length > 0) {
        selectedCharacters.forEach(char => {
            if (currentPackage === 'custom') {
                html += `<div class="selected-item">${char.name} <span>${CUSTOM_PRICES.character}₽</span></div>`;
            } else {
                html += `<div class="selected-item">${char.name}</div>`;
            }
        });
    }

    if (selectedShows.length > 0) {
        selectedShows.forEach(show => {
            if (currentPackage === 'custom') {
                html += `<div class="selected-item">${show.name} <span>${CUSTOM_PRICES.show}₽</span></div>`;
            } else {
                html += `<div class="selected-item">${show.name}</div>`;
            }
        });
    }

    if (selectedMasterClasses.length > 0) {
        selectedMasterClasses.forEach(master => {
            if (currentPackage === 'custom') {
                html += `<div class="selected-item">${master.name} <span>${CUSTOM_PRICES.master}₽</span></div>`;
            } else {
                html += `<div class="selected-item">${master.name}</div>`;
            }
        });
    }

    if (selectedProducts.length > 0) {
        selectedProducts.forEach(prod => {
            let price = prod.price;
            if (currentPackage === 'custom') {
                if (prod.id === 'photo') price = CUSTOM_PRICES.products.photo;
                else if (prod.id === 'decor') price = CUSTOM_PRICES.products.decor;
                else if (prod.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
                html += `<div class="selected-item">${prod.name} <span>${price}₽</span></div>`;
            } else {
                html += `<div class="selected-item">${prod.name}</div>`;
            }
        });
    }

    if (selectedAdditionalServices.length > 0) {
        selectedAdditionalServices.forEach(serv => {
            let price = serv.price;
            if (currentPackage === 'custom') {
                if (serv.id === 'photographer') price = CUSTOM_PRICES.products.photo;
                else if (serv.id === 'pinata') price = CUSTOM_PRICES.products.pinata;
                else if (serv.id === 'cake') price = 0;
                html += `<div class="selected-item">${serv.name} <span>${price}₽</span></div>`;
            } else {
                html += `<div class="selected-item">${serv.name}</div>`;
            }
        });
    }

    html += '</div>';
    formServices.innerHTML = html;
}

function resetSelection() {
    currentPackage = null;
    selectedCharacters = [];
    selectedShows = [];
    selectedMasterClasses = [];
    selectedProducts = [];
    selectedAdditionalServices = [];
    document.getElementById('package-selection').classList.remove('active');
    document.getElementById('form-selected-services').innerHTML = '';
    document.querySelectorAll('.character-card-full, .show-card-full, .master-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelectorAll('.additional-service').forEach(chk => chk.checked = false);
    updateSelection();
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;
    if (currentPackage === 'custom') {
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
            else if (serv.id === 'cake') total += 0;
        });
    } else {
        total = basePrice;
        selectedProducts.forEach(p => total += p.price);
        selectedAdditionalServices.forEach(s => total += s.price);
    }
    totalPriceElement.textContent = total.toLocaleString('ru-RU');
}

function getPackageName(packageType) {
    switch(packageType) {
        case 'basic': return 'Базовый';
        case 'standard': return 'Стандарт';
        case 'premium': return 'Премиум';
        case 'custom': return 'Кастомный';
        default: return '';
    }
}

function initGalleryButtons() {
    document.addEventListener('click', function(e) {
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

function initSelectionHandlers() {
    document.querySelectorAll('.character-card-full, .show-card-full, .master-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.view-btn')) return;

            const type = this.classList.contains('character-card-full') ? 'character' :
                this.classList.contains('show-card-full') ? 'show' : 'master';
            const name = this.dataset.name;

            let data, selectedArray, max;

            switch(type) {
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
                    selectedArray.push({ name, price: data.price });
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
        });
    });
}



function initReviewPhotos() {
    renderReviewPhotos();

    const loadMoreBtn = document.getElementById('load-more-reviews');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePhotos);
    }
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
      <img src="${photo.image}" alt="${photo.title}" class="review-photo" loading="lazy">
      <div class="photo-overlay">
        <div class="photo-info">
          <div class="photo-title">${photo.title}</div>
          <div class="photo-date">${photo.date}</div>
        </div>
      </div>
    `;
        reviewsGrid.appendChild(photoCard);
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

function loadMorePhotos() {
    visiblePhotosCount += 4;
    renderReviewPhotos();

    setTimeout(() => {
        const newPhotos = document.querySelectorAll('.review-photo-card.new');
        if (newPhotos.length > 0) {
            newPhotos[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

function initFloatingCart() {
    const cartBtn = document.getElementById('floating-cart');
    const cartPanel = document.getElementById('cart-panel');
    const closeCart = document.querySelector('.close-cart');
    const clearCartBtn = document.getElementById('clear-cart');
    const orderFromCartBtn = document.getElementById('order-from-cart');

    cartBtn.addEventListener('click', function() {
        cartPanel.classList.toggle('active');
        updateCartDisplay();
    });

    closeCart.addEventListener('click', function() {
        cartPanel.classList.remove('active');
    });

    clearCartBtn.addEventListener('click', function() {
        resetSelection();
        updateCartBadge();
        cartPanel.classList.remove('active');
        showNotification('Корзина очищена', 'success');
    });

    orderFromCartBtn.addEventListener('click', function() {
        if (currentPackage) {
            cartPanel.classList.remove('active');
            document.querySelector('#consultForm').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            showNotification('Пожалуйста, сначала выберите пакет услуг', 'error');
        }
    });

    document.addEventListener('click', function(e) {
        if (!cartPanel.contains(e.target) && !cartBtn.contains(e.target)) {
            cartPanel.classList.remove('active');
        }
    });
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = selectedCharacters.length + selectedShows.length +
        selectedMasterClasses.length + selectedProducts.length +
        selectedAdditionalServices.length;
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-price');

    let html = '';
    let total = 0;

    if (currentPackage) {
        const packagePrice = currentPackage === 'custom' ?
            calculateCustomTotal() : basePrice;
        html += `<div class="cart-item">
      <span class="cart-item-name">Пакет "${getPackageName(currentPackage)}"</span>
      <span class="cart-item-price">${packagePrice.toLocaleString('ru-RU')}₽</span>
    </div>`;
        total += packagePrice;
    }

    selectedCharacters.forEach(char => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.character : 0;
        html += `<div class="cart-item">
      <span class="cart-item-name">${char.name}</span>
      <span class="cart-item-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
    </div>`;
        if (currentPackage === 'custom') total += price;
    });

    selectedShows.forEach(show => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.show : 0;
        html += `<div class="cart-item">
      <span class="cart-item-name">${show.name}</span>
      <span class="cart-item-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
    </div>`;
        if (currentPackage === 'custom') total += price;
    });

    selectedMasterClasses.forEach(master => {
        const price = currentPackage === 'custom' ? CUSTOM_PRICES.master : 0;
        html += `<div class="cart-item">
      <span class="cart-item-name">${master.name}</span>
      <span class="cart-item-price">${currentPackage === 'custom' ? price + '₽' : 'Включено'}</span>
    </div>`;
        if (currentPackage === 'custom') total += price;
    });

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
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });
}

// Главная инициализация
document.addEventListener('DOMContentLoaded', function() {
    initSliders();
    initPackageSelection();
    initMobileMenu();
    initSmoothScroll();
    initOrderButton();
    initFormValidation();
    initPhoneMask();
    initModalClose();
    initIntersectionObserver();
    initProductButtons();
    initAdditionalServiceCheckboxes();
    initReviewPhotos();
    initFloatingCart();

    // Новые инициализации
    initSwipers();
    initFAQ();
    initSelectedServicesModal();
});
function initCarouselNavigation() {
    // Умная навигация - прокрутка на ширину видимой области
    function setupCarouselNavigation(prevBtnId, nextBtnId, sliderId) {
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        const slider = document.getElementById(sliderId);

        if (!prevBtn || !nextBtn || !slider) return;

        prevBtn.addEventListener('click', () => {
            const container = slider.parentElement;
            const scrollAmount = container.clientWidth;
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            const container = slider.parentElement;
            const scrollAmount = container.clientWidth;
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // Настройка для всех каруселей
    setupCarouselNavigation('characters-prev', 'characters-next', 'characters-slider');
    setupCarouselNavigation('shows-prev', 'shows-next', 'shows-slider');
    setupCarouselNavigation('master-prev', 'master-next', 'master-slider');
}