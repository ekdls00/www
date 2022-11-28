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