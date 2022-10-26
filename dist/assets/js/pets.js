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
const sliderRow1 = document.querySelector('.slider-row-1');
const sliderRow2 = document.querySelector('.slider-row-2');
const sliderBtnLeft = document.querySelector('.slider__btn_left');
const sliderBtnRight = document.querySelector('.slider__btn_right');
const animalCards = document.querySelectorAll('.slider-card');
const length = Math.floor(cards.length / 2);
let newCards = shuffle(cards);

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


const appendCardsEnd = function(row, randomCards) {
    randomCards.forEach((card) => {
        row.appendChild(createCardTemplate(card))
    });

}

const appendCardsStart = function(row, randomCards) {
    randomCards.forEach((card) => {
        const firstChild = row.firstChild;
        row.insertBefore(createCardTemplate(card), firstChild)
    });

}

function removeCards(arrayOfCards) {
    if (arrayOfCards.length > 0 && window.innerWidth > 1000) {
        for (let i = 0; i < 3; i++) {
            arrayOfCards[i].remove()
        }
    } else if (arrayOfCards.length > 0 && window.innerWidth < 1000){
        for (let i = 0; i < 2; i++) {
            arrayOfCards[i].remove()
        }
    }

}


function removeCardsEnd(arrayOfCards) {
const newArr = Array.from(arrayOfCards.childNodes).filter((el) => el.localName == 'div');
    if (newArr.length > 0 && window.innerWidth > 1000) {
        for (let i = newArr.length-1; i > newArr.length - 4; i--) {
            arrayOfCards.removeChild(newArr[i])
        }
    } else if (window.innerWidth < 1000){
        for (let i = newArr.length-1; i > newArr.length - 3; i--) {
            arrayOfCards.removeChild(newArr[i])
        }
    }


}

const moveRight = (e) => {
    sliderRows.forEach((sliderRow) => {
        newCards = shuffle(cards);
        sliderRow.classList.add('transition-right')
    });
}


function moveLeft() {
    sliderRows.forEach((sliderRow) => {
        newCards = shuffle(cards);
        sliderRow.classList.add('transition-left');

    });
}

sliderBtnRight.addEventListener('click', moveRight);
sliderBtnLeft.addEventListener('click', moveLeft);


sliderRows.forEach((row) => {
    row.addEventListener ('animationend', (animationEvent) => {
        console.log(animationEvent.animationName);
    if (animationEvent.animationName === "moveleft") {
        row.classList.remove("transition-left");
    } else {
        row.classList.remove("transition-right");
    }
    })
})

sliderRow1.addEventListener('animationend', (animationEvent) => {
    let firstRow;
    if (window.innerWidth > 1000) {
        firstRow = newCards.slice(0, 3);
    } else if (window.innerWidth < 1000){
        firstRow = newCards.slice(0, 2);
    }
        // const firstRow = newCards.slice(0, newCards.length/2);
        const firstRowCards = document.querySelectorAll('.slider-row-1>.slider-card');

        if (animationEvent.animationName === "moveright") {
            appendCardsEnd(sliderRow1, firstRow);
            removeCards(firstRowCards);
        } else {
            removeCardsEnd(sliderRow1);
    }
})

sliderRow2.addEventListener('animationend', (animationEvent) => {
    let secondRow;
    if (window.innerWidth > 1000) {
        secondRow = newCards.slice(newCards.length/2);
    } else if (window.innerWidth < 1000){
        secondRow = newCards.slice(newCards.length/2 + 1);
        console.log(secondRow);
    }
    // const secondRow = newCards.slice(newCards.length/2);
    const secondRowCards = document.querySelectorAll('.slider-row-2>.slider-card')
    if (animationEvent.animationName === "moveright") {
        appendCardsEnd(sliderRow2, secondRow);
        removeCards(secondRowCards);
    } else {
        removeCardsEnd(sliderRow2);
    }
})

sliderRow1.addEventListener('animationstart', (animationEvent) => {
    let firstRow;
    if (window.innerWidth > 1000) {
        firstRow = newCards.slice(0, 3);
    } else if (window.innerWidth < 1000){
        firstRow = newCards.slice(0, 2);
    }
    if (animationEvent.animationName === "moveleft") {
        appendCardsStart(sliderRow1, firstRow);
    }
})

sliderRow2.addEventListener('animationstart', (animationEvent) => {
    let secondRow;
    if (window.innerWidth > 1000) {
        secondRow = newCards.slice(newCards.length/2);
    } else if (window.innerWidth < 1000){
        secondRow = newCards.slice(newCards.length/2 + 1);
        console.log(secondRow);
    }
    if (animationEvent.animationName === "moveleft") {
        appendCardsStart(sliderRow2, secondRow);
    }
})
