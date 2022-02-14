const right = document.querySelector('.right');
const left = document.querySelector('.left');
const carouselItem = document.querySelector('.carousel-item');
const carouselImages = document.querySelectorAll('.carousel-item img');


//button


//counter
let counter = 1;

const size = carouselImages[0].clientWidth;

carouselItem.style.transform = 'translateX(' + (-size * counter) + 'px)';

right.addEventListener('click',()=>{
  if(counter >= carouselImages.length -1) return;
  carouselItem.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

left.addEventListener('click',()=>{
  if(counter <= 0) return;
  carouselItem.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselItem.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === 'lastImg'){
    carouselItem.style.transition = 'none';
    counter= carouselImages.length-2;
    carouselItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstImg'){
    carouselItem.style.transition = 'none';
    counter= carouselImages.length- counter;
    carouselItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

