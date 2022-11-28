
$(document).ready(function () {
/*컨텐츠 마우스오버 시 효과*/
   $('#content .greenBox dl').each(function (index) {  // index=0 1 2
      $(this).mouseover(function(e){  //각각의 탭메뉴를 마우스 오버하면... 
         e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

         $('.greenBox dl').removeClass('lihover'); //모두 비활성화

         $(this).addClass('lihover'); // 클릭한 해당 탭메뉴만 활성화
      });
   });    
});

