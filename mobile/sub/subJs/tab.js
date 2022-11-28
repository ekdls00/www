// JavaScript Document

$(document).ready(function(){
    var cnt = $('.tabs ul li').size(); // 탭 메뉴 개수
    

    $('.contentArea .con:eq(0)').fadeIn('slow'); // 첫번째 탭 내용만 열어주기
    $('.contentArea .tab1').css('color','#da291c').css('border','1px solid #da291c');
     
    
    $('.contentArea .tab').click(function(e){
        e.preventDefault();   
        var ind = $(this).index('.contentArea .tab');  // 클릭시 해당 index를 뽑아준다
        
        $(".contentArea .con").hide(); 
        $(".contentArea .con:eq(" + ind + ")").fadeIn('slow');; 

        if($(this).is('.tab1')){
            $('.tab1').css('color','#da291c').css('border','1px solid #da291c');
            $('.tab2').css('color','#333').css('border','1px solid #ccc'); 
        }else{
            $('.tab1').css('color','#333').css('border','1px solid #ccc'); 
            $('.tab2').css('color','#da291c').css('border','1px solid #da291c');
        }
        
     });
  });

