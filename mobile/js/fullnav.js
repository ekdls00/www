
$(document).ready(function() {

   var smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
           $(this).css('background','#fff');
           $('.depth1').css('color','#333'); 
           $('.thover').css('color','#333'); 
          
           on_off=true;
       });
   
    // gnb mouseleave
    $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-50 ){
               $(this).css('background','none').css('border-bottom','none'); 
               $('.depth1').css('color','#fff');
               $('.thover').css('color','#fff');
           }else{
               $(this).css('background','#fff'); 
               $('.depth1').css('color','#333');
               $('.thover').css('color','#333');
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수

           if(scroll>smh-50){//스크롤 300까지 내리면
                $('#headerArea').addClass('on');
                $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                $('.depth1').css('color','#333');
                $('.top>ul>li>a').css('color','#333');
           }else{//스크롤 내리기 전 디폴트(마우스 올리지 않음)
            if(on_off==false){
                    $('#headerArea').removeClass('on');
                    $('#headerArea').css('background','none').css('border-bottom','none');
                    $('.depth1').css('color','#fff');
                    $('.top li>a').css('color','#fff');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:320},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:90},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#da291c');
       },function() {
          $('.depth1',this).css('color','#333');
     });

     $('.top li').hover(
        function() { 
            $('.thover',this).css('color','#da291c');
        },function() {
           $('.thover',this).css('color','#333');
      });

    //2depth 효과
     $('ul.dropdownmenu li.menu ul li a').hover(
        function(){
            $(this).css('color','#da291c');
            $(this).css('background','#f4f4f4');
        },
        function(){
            $(this).css('color','#333');
            $(this).css('background','#fff');
        }
     )

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:320},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:90},'normal').clearQueue();
    });
});

//푸터
$(document).ready(function() {
    $('.family .arrow').toggle(function(){
        $('.family .aList').fadeIn('slow');		
        $(this).find('span').text('');
    },function(){
        $('.family .aList').fadeOut('fast');	
        $(this).find('span').text('+');
    });

    //tab키 처리
    $('.family .arrow').on('focus', function () {        
            $('.family .aList').fadeIn('slow');	
    });
    $('.family .aList li:last a').on('blur', function () {        
            $('.family .aList').fadeOut('fast');
    });
});
 
