

//scroll efect start
const navbar = document.querySelector('.navbar');
let scrollPos = 0;

window.addEventListener('scroll',()=>{
  
  if(window.scrollY > scrollPos ){
    navbar.classList.add('scroll-down');
    
  }

  if(window.scrollY < scrollPos){
    navbar.classList.remove('scroll-down');
  }
  scrollPos = window.scrollY;
});
//scroll efect end


//mouse over start
const content = document.querySelector('.content');
 content.addEventListener('mouseover',(e)=>{
   let colorChange = document.querySelector('.mouse__over');
   colorChange.style.left = (e.clientX - 810 ) + 'px';
   colorChange.style.opacity = 1;
});

content.addEventListener('mouseout',(e)=>{
  let colorChange = document.querySelector('.mouse__over');
 
  colorChange.style.opacity = 0;
});



