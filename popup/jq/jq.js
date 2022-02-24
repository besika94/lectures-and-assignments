$(function(){
 

 $('.img').click(function(){
   let src = $(this).attr('src');
   let showSrc = $('.img__show').attr('src');
   
   showSrc = $('.img__show').attr('src',src);
   $('.show__picture').addClass('show');
 });

 $('.close-modal').click(function(){
  $('.show__picture').removeClass('show');
 });





 let citys = [
    {countryid:1,
      city:["თბილისი","მცხეთა","ქუთაისი"]
    },
    {countryid:2,
      city:["ნიუიორკი","ვაშინგტონი","მაიამი"]
    },
    {countryid:3,
      city:["შტუდგარტი","ბერლინი","მიუხენი"]
    },
  ];
 
  
  $('#country').change(function(e){
    e.preventDefault();
    let value = $(this).val();

    let search = citys.find(e =>{
      return e.countryid == value;
    });


    
    
    $("#city").remove();
    $(`<select name="" id="city"></select>`).appendTo('.form-select');   
   
   
      $('#city').empty()
       search.city.forEach(el=>{
        
       $(`<option> ${el}</option>`).appendTo('#city');
        
      });


     
    

   
    });
  
  $('.form-btn').click(function (e) { 
  e.preventDefault();
  let str = ''
  let str1 = ''
  
  str = $('#country').find(":selected").text()
  str1 = $('#city').find(":selected").text()
  let str2 = `მოგესალმები ${str1}, ${str}`

  $('#form-text').text(str2);

  $('#form-text').css({
    'background-color': 'rgb(163, 206, 163)',
    'text-align': 'start',
    'padding': '10px 10px',
    'border-radius': '10px',
    'color': 'rgb(44, 68, 119)'
  })

  
  
});


});