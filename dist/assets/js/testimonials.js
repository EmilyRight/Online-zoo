const testimonialsList = [
    {
        img: './assets/images/Fred.svg',
        name: 'Name1 Surname1',
        place: "Somewhere",
        time: 'Monday',
        text: 'The best online zoo I’ve met. My son delighted very much.ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
    },
    {
        img: './assets/images/Oscar.svg',
        name: 'Name2 Surname2',
        place: "Somewhere",
        time: 'Tuesday',
        text: 'The best online zoo I’ve met. My son delighted very much.ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
    },

    {
        img: './assets/images/Mila.svg',
        name: 'Name3 Surname3',
        place: "Somewhere",
        time: 'Thursday',
        text: 'The best online zoo I’ve met. My son delighted very much.ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
    },

    {
        img: './assets/images/empty-userpic.svg',
        name: 'Name4 Surname4',
        place: "Somewhere",
        time: 'Friday',
        text:'The best online zoo I’ve met. My son delighted very much.ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
    },

    {
        img: './assets/images/Mila.svg',
        name: 'Name5 Surname5',
        place: "Somewhere",
        time: 'Saturday',
        text: 'The best online zoo I’ve met. My son delighted very much.ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
    },
    {
        img: './assets/images/Mila.svg',
        name: 'Name5 Surname5',
        place: "Somewhere",
        time: 'Sunday',
        text: 'The best online zoo I’ve met. My son delighted very much.ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
    },
]


const scrollBar = document.querySelector('.slider__scroll-bar')
const container = document.querySelector('.testimonials-slider__container_inner')
const frameContainer = document.querySelector('.testimonials-slider__container')

const modalBackground = document.querySelector('.testimonials-modal');
const modal = document.querySelector('.testimonials-modal-content');
const closeModalBtn = document.querySelector('.test_close');
const testItemsList = document.querySelectorAll('.testimonials-slider-item');

const createTest = function (testobj) {
    const item = document.createElement('div');
    item.classList.add('testimonials-slider-item');

    const content = document.createElement('div');
    content.classList.add('testimonials-slider-item__content');
    item.appendChild(content);

    const userpic = document.createElement('div');
    userpic.classList.add('slider-item__icon');
    userpic.style.backgroundImage = `url(${testobj.img})`;

    const title = document.createElement('div');
    title.classList.add('slider-item__title');
    title.innerText = testobj.name;

    const meta = document.createElement('div');
    meta.classList.add('slider-item__meta');

    const location = document.createElement('span');
    location.classList.add('location');
    location.innerText = testobj.place + ' •';

    const time = document.createElement('span');
    time.classList.add('time');
    time.innerText = testobj.time;
    meta.append(location, time)

    const text = document.createElement('div');
    text.classList.add('slider-item-text');
    text.innerText = testobj.text;

    content.append(userpic, title, meta, text);

    return item;
}

const scrollTests = function () {
    if(window.innerWidth >= 1600) {
        container.style.left = `-${scrollBar.value * 301}px`;
    } else if (window.innerWidth >= 1000 && window.innerWidth < 1600) {
        container.style.left = `-${scrollBar.value * Math.ceil(frameContainer.offsetWidth / 3)}px`;
    } else if (window.innerWidth >= 640 && window.innerWidth < 1000) {

    }
}

function generateTests () {
       testimonialsList.forEach((item) => {
        container.appendChild(createTest(item))
    });
    const newList = document.querySelectorAll('.testimonials-slider-item');
    return newList;
}


const openModal = (test) => {
    const content = document.querySelector('.is-opened');
    const img = document.querySelector('.is-opened>.testimonials-slider-item__content>.slider-item__icon');
    modalBackground.style.display = 'flex';
    modalBackground.style.height = '100%';
    modal.style.height = '40.8rem';
    if(window.innerHeight >= 1000) {
        modal.style.top = `${window.innerHeight/2 - 400}px`;
    } else {
        modal.style.top = `${window.innerHeight/2 - 200}px`;
    }


    const newTest = content.cloneNode(true);
    modal.append(newTest);
}

const closeModal = (e) => {
    if (e.target == closeModalBtn || e.target == modalBackground) {
    const opened = document.querySelector('.is-opened');
    const modalChild = document.querySelector('.testimonials-modal-content>.testimonials-slider-item');

    modalBackground.style.display = 'none';
    modalBackground.style.height = '0%';
    modal.style.height = '0';
    opened.classList.remove('is-opened')
    modalChild.remove()
    }

}
modalBackground.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

    generateTests().forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.add('is-opened');
            openModal();
        })
    });



scrollBar.addEventListener("input", scrollTests);