//<기업정보 & 핵심정보 탭 메뉴>
$(document).ready(function () {
   //슬라이드 메뉴 클릭시 해당 콘텐츠 이동시키기
   $('.conDivide ul li a').click(function(e){
      e.preventDefault(); // --> href="#" 속성을 막아주는 메소드
      
      var value = 0; // --> 이동할 스크롤의 거리
      
      if($(this).hasClass('data')){  // hasClass = 첫 번째 메뉴를 클릭했는지 확인
         value= $('#content .conData').offset().top;  // offset() = 해당 콘텐츠의 상단의 거리를 계산하라는 뜻
      }else if($(this).hasClass('coreValue')){ 
         value= $('#content .value').offset().top; 
      }
      
      $("html,body").stop().animate({"scrollTop":value},100);
   });
});


// <기업 정보 이미지 슬라이드>
$(document).ready(function() {

   var timeonoff;  // 타이머 처리
   var imageCount = $('.portfolio ul li').size();   // 이미지 총 개수
   var cnt = 1;   //이미지 순서
   var onoff = true; // true => 타이머 동작중 , false => 동작하지 않음
     
   $(".portfolio li").fadeOut('fast');
   $('.portfolio .visual1').fadeIn('slow'); //첫번째 이미지 보인다..
   $('.portfolio .visual1 dl').css('top',300).css('opacity',0);
   $('.portfolio .visual1 dl').delay(1500).animate({opacity:1},'slow');
  
   function moveg(){
     if(cnt == imageCount+1)cnt = 1;
     if(cnt == imageCount)cnt = 0;  //카운트 초기화
 
     cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화
     
     $('.portfolio li').fadeOut('fast'); //모든 이미지 안보인다.
     $('.portfolio .visual' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..
 
     $('.portfolio li dl').css('top',300).css('opacity',0);
     $('.portfolio .visual' + cnt).find('.portfolio dl').delay(1000).animate({top:300, opacity:1},'slow');
 
     if(cnt == imageCount)cnt = 0;  //카운트의 초기화 0
   }
      timeonoff = setInterval( moveg , 6000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
 
     //왼쪽/오른쪽 버튼 처리
     $('.conData .btn').click(function(){
         clearInterval(timeonoff); 
         if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
            if(cnt == imageCount)cnt = 0;  //카운트가 마지막 번호(5)라면 초기화 0
             cnt ++; //카운트 1씩증가
         }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
            if(cnt == 1)cnt = imageCount+1;   // 1->6  최초..
            if(cnt == 0)cnt = imageCount;
            cnt--; //카운트 감소
         }
         $('.portfolio li').fadeOut('fast'); //모든 이미지를 보이지 않게.
         $('.portfolio .visual'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                         
         $('.portfolio li dl').css('top',300).css('opacity',0);
         $('.portfolio .visual'+cnt).find('.portfolio dl').delay(1000).animate({top:300, opacity:1},'slow');
 
         timeonoff= setInterval( moveg , 4000); //부활
 
         if(onoff == false){
             onoff = true;
             $('.ps').html('<span class="hidden">멈추기</span><i class="fa-solid fa-pause"></i></i>');
         }
      });
   });