// JavaScript Document

//메인 비주얼
$(document).ready(function() {

  var timeonoff;  // 타이머 처리
  var imageCount = $('.gallery ul li').size();   // 이미지 총 개수
  var cnt = 1;   //이미지 순서
  var onoff = true; // true => 타이머 동작중 , false => 동작하지 않음
    
  $('.btn1').css('background','#f00'); // 첫 번째 불릿 불 키기
    
  $(".gallery .con li").fadeOut('fast');
  $('.gallery .visual1').fadeIn('slow'); //첫번째 이미지 보인다..
  $('.gallery .visual1 .slogan').css('opacity',0);
  $('.gallery .visual1 .slogan').delay(1500).animate({opacity:1},'slow');
 
  function moveg(){
    if(cnt == imageCount+1)cnt = 1;
    if(cnt == imageCount)cnt = 0;  //카운트 초기화

    cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화
    
    $('.gallery li').fadeOut('fast'); //모든 이미지 안보인다.
    $('.gallery .visual' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..
      
    $('.mbutton').css('background','#fff'); //버튼불다꺼!!
    $('.mbutton').css('width','8'); // 버튼 원래의 너비
    $('.btn' + cnt).css('background','#da291c');//자신만 불켜
    $('.btn' + cnt).css('width','8');    

    $('.gallery li .slogan').css('opacity',0);
    $('.gallery .visual' + cnt).find('.slogan').delay(1000).animate({opacity:1},'slow');

    if(cnt == imageCount)cnt = 0;  //카운트의 초기화 0
  }
     
  timeonoff = setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리

  //버튼제어
  $('.mbutton').click(function(event){  // 각각의 버튼 클릭시
    var $target=$(event.target); //클릭한 버튼 $target == $(this)
      clearInterval(timeonoff); //타이머 중지     
	 
	    $('.gallery li').fadeOut('fast'); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  } 

		  $('.gallery .visual' + cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
      $('.mbutton').css('background','#fff'); //버튼 모두불꺼
      $('.mbutton').css('width','8');
      $('.btn'+cnt).css('background','#da291c');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','8');
      
      $('.gallery li .slogan').css('top',300).css('opacity',0);
      $('.gallery .visual' + cnt).find('.slogan').delay(1000).animate({top:300, opacity:1},'slow');

      if(cnt == imageCount)cnt = 0;  //카운트 초기화
     
      timeonoff = setInterval( moveg , 4000); //타이머의 부활!!!
     
      
    });

    /* top무브 버튼 */
    $('.topMove').hide();
              
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        
        
        $('.text').text(Math.floor(scroll));

        if(scroll>300){ //500이상의 거리가 발생되면
            $('.topMove').fadeIn('slow');  //top보여라~~~~
        }else{
            $('.topMove').fadeOut('fast');//top안보여라~~~~
        }
    });

    $('.topMove').click(function(e){
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},1500); 
        //스크롤을 부드럽게 이동하도록 하는 코드!
    });
    
    // 경영방침
    var susCnt = 0;
    var susCount = 3;

    $('.eventSlideMenu ul li:eq(0)').fadeIn();

    $('.eventSlideMenu ul li .btnBox a').click(function(e){
      e.preventDefault();

      var ind = $(this).index('.eventSlideMenu ul li .btnBox a');
      
      if($(this).is('.btnRight')){
        if(susCnt==susCount-1)susCnt=-1;  //카운트가 마지막 번호(5)라면 초기화 0
        susCnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){
        if(susCnt==0)susCnt=susCount;
        susCnt--; //카운트 감소
      }
      console.log(susCnt);

      $('.eventSlideMenu ul li').hide();
      $('.eventSlideMenu ul li:eq(' + susCnt + ')').fadeIn();
  });


  // 미디어센터 스크롤바 이벤트
  let barSize = 25;
  let barTotal = 25;
  let movesize3 = 280;  //li의 너비
  let position3 = 0;
  let newCnt = 0;
  let startX, endX;
  const mediaSec = document.querySelector('.promotionArea');
  const mediaMove = document.querySelector('.promotionArea ul');
  const scrollBarBlue = document.querySelector('.scrollBar span');

  function touchMediaStart(e){
  
    if(e.pageX==undefined){  //모바일이면...
      startX = e.touches[0].pageX ;
    }else{  //데스크탑이면..
      e.preventDefault();
      startX =  e.pageX;
    }
  };

  function touchMediaEnd(e){

    if(e.pageX==undefined){
      endX = e.changedTouches[0].pageX;
    }else{
      
      e.preventDefault();
      endX = e.pageX;
    }

      if(startX > endX){
        newCnt++;

        if(newCnt >= 4){
          newCnt = newCnt - 1;
          mediaMove.style.left = '-980px';
        } else {
          position3 += -movesize3;
          mediaMove.style.left = position3+'px';

          barTotal += barSize;
          scrollBarBlue.style.width = `${barTotal}%`;
          scrollBarBlue.style.transition = 'width .3s';
        }
      } else {
        newCnt--;

        if(newCnt < 0){
          newCnt = 0;
          mediaMove.style.left = 0;
        } else {
          position3 -= -movesize3;
          mediaMove.style.left = position3+'px';

          barTotal -= barSize;
          scrollBarBlue.style.width = `${barTotal}%`;
          scrollBarBlue.style.transition = 'width .3s';
        }
      }
  
  };
  mediaSec.addEventListener('touchstart', touchMediaStart);
  mediaSec.addEventListener('touchend', touchMediaEnd);
  mediaSec.addEventListener('mousedown', touchMediaStart);
  mediaSec.addEventListener('mouseup', touchMediaEnd);
});










