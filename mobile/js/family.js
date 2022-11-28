$(document).ready(function() {

  $('.family .arrow').toggle(function(){
    $('.family .aList').fadeIn('slow');		
    $(this).find('span').text('▾');
  },function(){
    $('.family .aList').fadeOut('fast');	
    $(this).find('span').text('▴');
  } );
  
});


  



