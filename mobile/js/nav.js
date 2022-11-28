$(document).ready(function() {

  var smh=$('.main').height(); //비주얼 이미지의 높이를 리턴한다   965px
  // 헤더 스크롤 반응
  // gnb 스크롤 이벤트 체크
  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
      var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
      //console.log(scroll);
      
      if(scroll>100){//스크롤100까지 내리면
        $('#headerArea').addClass('on');
        $('#headerArea').css('background','rgba(255,255,255,1)').css('box-shadow','3px 3px 15px 1px rgba(0,0,0,.08)');
          
      } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
        $('#headerArea').removeClass('on');
        $('#headerArea').css('background','none').css('box-shadow','none');
      };
  });

  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
  $(".menu_ham").click(function() { //메뉴버튼 클릭시
      
      var documentHeight =  $(document).height();
      $("#gnb").css('height',documentHeight); 

    if(op==false){
      $("#gnb").animate({right:0,opacity:1}, 'fast');
      $('#headerArea').addClass('mn_open');
      $('body').css({overflow:"hidden"});
      op=true;
    }else{
      $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
      $('#headerArea').removeClass('mn_open');
      $('body').css({overflow:"auto"});
      op=false;
    }
  });
  
//2depth 메뉴 교대로 열기 처리 
var onoff=[false,false,false,false];
var arrcount=onoff.length;

console.log(arrcount);

$('#gnb .depth1 h3 a').click(function(){
  var ind=$(this).parents('.depth1').index();
    
  if(onoff[ind]==false){
  //$('#gnb .depth1 ul').hide();
  $(this).parents('.depth1').find('ul').slideDown('slow');
  $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
    for(var i=0; i<arrcount; i++) onoff[i]=false; 
    onoff[ind]=true;
      
    $('.depth1 span').html('<span><i class="fa-solid fa-angle-down"></i></span>');   
    $(this).find('span').html('<span><i class="fa-solid fa-angle-up"></i></span>');     
        
    }else{
      $(this).parents('.depth1').find('ul').slideUp('fast'); 
      onoff[ind]=false;   
        
      $(this).find('span').html('<span><i class="fa-solid fa-angle-down"></i></span>');        
    }
  });  
  
});


  



