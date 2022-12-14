
// 푸터-페밀리사이트
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
 

// 푸터 - 탑
$(document).ready(function () {
    $(".topMove").hide();
  
    $(window).on("scroll", function () {
      //스크롤 값의 변화가 생기면
      var scroll = $(window).scrollTop(); //스크롤의 거리
  
      //  $(".text").text(scroll); // 소수점까지 찍힘
      $(".text").text(Math.floor(scroll));
  
      if (scroll > 500) {
        //500이상의 거리가 발생되면
        $(".topMove").fadeIn("slow"); //top보여라~~~~
      } else {
        $(".topMove").fadeOut("fast"); //top안보여라~~~~
      }
    });
  
    $(".topMove").click(function (e) {
      e.preventDefault();
      //상단으로 스르륵 이동합니다.
      $("html,body").stop().animate({ scrollTop: 0 }, 1000); //선택자 주의(스크롤 이벤트)//스크롤을 부드럽게 움직이는 코드
    });
});