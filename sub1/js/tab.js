// JavaScript Document

$(document).ready(function(){
    var cnt = $('.tabs ul li').size(); // 탭 메뉴 개수

   
    $('.contentArea .factory1').css('color','#da291c');
      
    var onoff =false;
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
      var scroll = $(window).scrollTop(); //스크롤의 거리
      
      if(scroll>10 && onoff ==false ){
        $('.contentArea .con').hide();
        $('.contentArea .con:eq(0)').fadeIn('slow'); // 첫번째 탭 내용만 열어주기
        onoff =true;
      }
   });



    $('.contentArea .tab').click(function(e){
          e.preventDefault();   
          
          
          var ind = $(this).index('.contentArea .tab');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".contentArea .con").hide(); //모든 탭내용을 안보이게...
          $(".contentArea .con:eq(" + ind + ")").fadeIn('slow');; //클릭한 해당 탭내용만 보여라
          $('.tab').css('color','#333'); //모든 탭메뉴를 비활성화
          $(this).css('color','#da291c'); // 클릭한 해당 탭메뉴만 활성화

     });
  });

