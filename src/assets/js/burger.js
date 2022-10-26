const burger = document.querySelector('.header__burger');
const closeBurger = document.querySelector('.nav__burger_close');
const burgerNavList = document.querySelector('.header__nav');
const background = document.querySelector('.header__background');
const links = document.querySelectorAll('.nav-item__link');

function toggleActivePages(){
  if(window.location.pathname == '/index.html') {
    links[3].classList.remove('active');
    links[0].classList.add('active');

  } else if(window.location.pathname == '/donate.html') {
    links[0].classList.remove('active');
    links[3].classList.add('active');
  }
}
toggleActivePages();


burger.addEventListener('click', e => {
  burgerNavList.style.top = '-2px';
  background.style.height = '100vh';
  console.log(burger.classList);
})

closeBurger.addEventListener('click', e => {
  burgerNavList.style.top = '-350px';
})

background.addEventListener('click', e => {
  burgerNavList.style.top = '-350px';
  background.style.height = '0px';
})


