

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
 content.addEventListener('mousemove',(e)=>{
   let colorChange = document.querySelector('.mouse__over');
   colorChange.style.left = (e.clientX - content.offsetLeft) + 'px';
   colorChange.style.opacity = 1;
});

content.addEventListener('mouseout',(e)=>{
  let colorChange = document.querySelector('.mouse__over');
  colorChange.style.opacity = 0;
});



let text = "If you're always trying to be normal you will never know how amazing you can be";

let timer;
i= 0;
function write(){
 
 document.querySelector('.text__apear').append(text[i]);
  
  i++;

  if(i >= text.length) 
    clearInterval(timer);
}

timer = setInterval(write,100);



  





// let count = 0;
//   while (count <= text.length){
   
    
//     count++


    
//   }


  











