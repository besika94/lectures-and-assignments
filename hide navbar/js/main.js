const navbar = document.querySelector('.navbar');

let scrollPos = 0;

window.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  if(window.scrollY > scrollPos ){
    navbar.classList.add('scroll-down');
    
  }

  if(window.scrollY < scrollPos){
    navbar.classList.remove('scroll-down');
  }
  scrollPos = window.scrollY;
});