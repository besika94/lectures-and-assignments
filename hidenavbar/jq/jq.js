$(function(){







$('.trash__btn').click(function(e){
  $('.trash__btn').addClass('active__btn');
  $('.trash__btn span,.trash__btn a').delay(1200).animate({
    opacity: 1
  },1000);
  //შეჩერდეს კლიკის მოსმენა
  e.stopPropagation();
});

$('body').click(()=>{
  $('.trash__btn span,.trash__btn a').animate({
    opacity: 0
  },800, function(){
    $('.trash__btn').removeClass('active__btn');
  } );
 
  
});


$('.tog__btn').click(()=>{
  $('.div__tog').css({
    'margin-left': '100px'
  });
  $('.text__tog').css({
    'font-size':'50px'
  });
  
});















});