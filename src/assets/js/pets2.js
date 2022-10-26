let cards = [
    {
        img: './assets/images/sloth.png',
        title: 'Two-toed sloth',
        description: 'Mesoamerica, South America',
        classNames: 'slider-card bananas'
    },

    {
        img: './assets/images/gorillas.png',
        title: 'Gorillas',
        description: 'Native to Congo',
        classNames: 'slider-card bananas'
    },
    {
        img: "./assets/images/eagles.png",
        title: 'Eagles',
        description: 'Native to South America',
        classNames: 'slider-card fish'
    },
    {
        img: "./assets/images/pandas.png",
        title: 'Giant pandas',
        description: 'Native to Southwest China',
        classNames: 'slider-card fish'
    },

    {
        img: "./assets/images/cheetahs.png",
        title: 'cheetahs',
        description: 'Native to Africa',
        classNames: 'slider-card fish'
    },
    {
        img: "./assets/images/pinguins.png",
        title: 'Penguins',
        description: 'Native to Antarctica',
        classNames: 'slider-card fish'
    },

];

const sliderWidth = document.querySelector('.slider-box');
const slider = document.querySelector('.slider');
const sliderRows = document.querySelectorAll('.slider-row');
const sliderLeft = document.querySelector('.slider-container_left');
const sliderMiddle = document.querySelector('.slider-container_middle');
const sliderRight = document.querySelector('.slider-container_right');
const sliderBtnLeft = document.querySelector('.slider__btn_left');
const sliderBtnRight = document.querySelector('.slider__btn_right');
const animalCards = document.querySelectorAll('.slider-card');
const length = Math.floor(cards.length / 2);

console.log(sliderWidth.offsetWidth);

function shuffle(arr){
	let j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

const createCardTemplate = (cardsObj) => {
    const card = document.createElement("div");
    card.classList.add("slider-card");

    const imgCont = document.createElement("div");
    imgCont.classList.add('slider-card__img');
    card.appendChild(imgCont);

    const img = document.createElement("img");
    img.src = `${cardsObj.img}`;
    imgCont.appendChild(img);

    const cardContent = document.createElement("div");
    cardContent.classList.add('slider-card__content');
    card.appendChild(cardContent);

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("slider-card__content_title");
    cardTitle.innerHTML = `${cardsObj.title}`
    cardContent.appendChild(cardTitle);

    const cardText = document.createElement("div");
    cardText.classList.add("slider-card__content_text");
    cardText.innerHTML = `${cardsObj.description}`
    cardContent.appendChild(cardText);

    return card;
}


const moveLeft = () => {
    slider.classList.add("transition-left");
  };

  const moveRight = () => {
    slider.classList.add("transition-right");
  };

  sliderBtnLeft.addEventListener("click", moveLeft);
  sliderBtnRight.addEventListener("click", moveRight);

  slider.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "moveleft") {
        slider.classList.remove("transition-left");
      changedItem = sliderLeft;
      sliderMiddle.innerHTML = sliderLeft.innerHTML;
    } else {
        slider.classList.remove("transition-right");
      changedItem = sliderRight;
      sliderMiddle.innerHTML = sliderRight.innerHTML;
    }

    changedItem.innerHTML = "";
    let newCards = shuffle(cards);
    for (let i = 0; i < newCards.length; i++) {
      const card = createCardTemplate(newCards[i]);
      changedItem.appendChild(card);
    }
  })