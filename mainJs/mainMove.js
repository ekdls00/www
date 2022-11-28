// JavaScript Document

//메인 비주얼
$(document).ready(function() {

  var timeonoff;  // 타이머 처리
  var imageCount = $('.gallery ul li').size();   // 이미지 총 개수
  var cnt = 1;   //이미지 순서
  var onoff = true; // true => 타이머 동작중 , false => 동작하지 않음
    
  $('.btn1').css('background','#f00'); // 첫 번째 불릿 불 키기
  $('.btn1').css('width','30'); // 버튼의 너비 증가
    
  $(".gallery .con li").fadeOut('fast');
  $('.gallery .visual1').fadeIn('slow'); //첫번째 이미지 보인다..
  $('.gallery .link1 .slogan').css('top',300).css('opacity',0);
  $('.gallery .visual1 .slogan').delay(1500).animate({opacity:1},'slow');
 
  function moveg(){
    if(cnt == imageCount+1)cnt = 1;
    if(cnt == imageCount)cnt = 0;  //카운트 초기화

    cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화
    
    $('.gallery li').fadeOut('fast'); //모든 이미지 안보인다.
    $('.gallery .visual' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..
      
    $('.mbutton').css('background','#fff'); //버튼불다꺼!!
    $('.mbutton').css('width','16'); // 버튼 원래의 너비
    $('.btn' + cnt).css('background','#da291c');//자신만 불켜
    $('.btn' + cnt).css('width','30');    

    $('.gallery li .slogan').css('top',300).css('opacity',0);
    $('.gallery .visual' + cnt).find('.slogan').delay(1000).animate({top:300, opacity:1},'slow');

    if(cnt == imageCount)cnt = 0;  //카운트의 초기화 0
  }
     
  timeonoff = setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리

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
      $('.mbutton').css('width','16');
      $('.btn'+cnt).css('background','#da291c');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','30');
      
      $('.gallery li .slogan').css('top',300).css('opacity',0);
      $('.gallery .visual' + cnt).find('.slogan').delay(1000).animate({top:300, opacity:1},'slow');

      if(cnt == imageCount)cnt = 0;  //카운트 초기화
     
      timeonoff = setInterval( moveg , 4000); //타이머의 부활!!!
     
      if(onoff == false){ //중지상태냐??
        onoff=true; //동작~~
        $('.ps').html('<span class="hidden">멈추기</span><i class="fa-solid fa-pause"></i></i>');
      }
      
    });



	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
    if(onoff == true){ // 타이머가 동작 중이냐??
      clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
      $(this).html('<span class="hidden">시작하기</span><i class="fa-solid fa-play"></i>');
      onoff = false;   
	   }else{  // false 타이머가 중지 상태인가?
		   timeonoff = setInterval( moveg , 4000); // play버튼 클릭시  부활
		   $(this).html('<span class="hidden">멈추기</span><i class="fa-solid fa-pause"></i></i>');
		   onoff = true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.main .btn').click(function(){

      clearInterval(timeonoff); //살인마

    if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
      if(cnt == imageCount)cnt = 0;  //카운트가 마지막 번호(5)라면 초기화 0
      cnt ++; //카운트 1씩증가
    }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
        if(cnt == 1)cnt = imageCount+1;   // 1->6  최초..
        if(cnt == 0)cnt = imageCount;
        cnt--; //카운트 감소
    }



    $('.gallery li').fadeOut('fast'); //모든 이미지를 보이지 않게.
    $('.gallery .visual'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','#fff'); //버튼 모두불꺼
    $('.mbutton').css('width','16');
    $('.btn' + cnt).css('background','#da291c');//자신 버튼만 불켜 
    $('.btn' + cnt).css('width','30');

    $('.gallery li .slogan').css('top',300).css('opacity',0);
    $('.gallery .visual'+cnt).find('.slogan').delay(1000).animate({top:300, opacity:1},'slow');

    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff == false){
      onoff = true;
      $('.ps').html('<span class="hidden">멈추기</span><i class="fa-solid fa-pause"></i></i>');
    }
  });


});


// 비지니스 영역
$(document).ready(function() {
  var position=0;   // 최초위치
  var movesize = 350 // 이미지 하나의 너비
  console.log(movesize);
 
  $('.bGallery ul').after($('.bGallery ul').clone());

  $('.button').click(function(e){
  e.preventDefault();

  if($(this).is('.m1')){  //이전버튼 클릭
      if (position == -1750) {
          $('.bGallery').css('left', 0);
          position = 0;
      }
      position-=movesize;  // 150씩 감소
      $('.bGallery').stop().animate({left:position}, 'fast', function(){
          if(position<-1750){
              position=0;
              $('.bGallery').css('left',0);
          }
      }).clearQueue();
      // 애니메이트에 있는 콜백은 앞에 있는 애니메이트가 동작된 후에 계산된다

      }else if($(this).is('.m2')){  //다음버튼 클릭
          if(position==0){
              $('.bGallery').css('left',-1750);
              position=-1750;
          }
  
          position+=movesize; // 150씩 증가
          $('.bGallery').stop().animate({left:position}, 'fast',
          function(){							
              if(position==0){
                  $('.bGallery').css('left',-1750);
                  position=-1750;
              }
          }).clearQueue();
      }
 });
});



//지속가능경영 영역
$(document).ready(function(){

  // function accordion(imgnum) {
	// 	$(
	// 		'.liTitle:eq(' +
	// 			imgnum +
	// 			'),.sustainableInner li:not(:eq(' +
	// 			imgnum +
	// 			')) .eventMenu dl'
	// 	).hide();
	// 	$('.sustainableInner li:eq(' + imgnum + ')  .eventMenu dl').fadeIn('slow');
	// 	$('.sustainableInner span:eq(' + imgnum + ')').css('width', '100');
	// 	$('.sustainableInner span:not(:eq(' + imgnum + '))').css('width', '200');
	// 	$('.eventMenu:not(:eq(' + imgnum + '))')
	// 		.show()
	// 		.animate({ width: 290 });
	// }



  var timeonoff;
  // var imageCount=3;  
  // var accordion=1;		
  $('.liTitle').css('width', '460');
  $('.eventSlideMenu ul li').mouseenter(function(event){
    var $target=$(event.target);
    clearInterval(timeonoff);
    if($target.is('.eventSlideMenu .buttonMenu01')){
      $('.eventSlideMenu .img02').animate({left:[800,'easeOutQuad']},10).clearQueue();
      $('.eventSlideMenu .img02 .liTitle').css('width', 290);
      $('.eventSlideMenu .img03').animate({left:[1090,'easeOutQuad']},10).clearQueue();
      $('.eventSlideMenu .img03 .liTitle').css('width', 290);
      accordion=0;
    }else if($target.is('.buttonMenu02')){
      $('.eventSlideMenu .img02').animate({left:[290,'easeOutQuad']},10).clearQueue();
      $('.eventSlideMenu .img01 .liTitle').css('width', 290);
      $('.eventSlideMenu .img03').animate({left:[1090,'easeOutQuad']},10).clearQueue();
      $('.eventSlideMenu .img03 .liTitle').css('width', 290);
      accordion=1;
    }else if($target.is('.buttonMenu03')){
      $('.eventSlideMenu .img02').animate({left:[290,'easeOutQuad']},10).clearQueue();
      $('.eventSlideMenu .img01 .liTitle').css('width', 290);
      $('.eventSlideMenu .img03').animate({left:[580,'easeOutQuad']},10).clearQueue();
      $('.eventSlideMenu .img02 .liTitle').css('width', 290);
      accordion=2;
    }
  });

  $('.eventSlideMenu ul').mouseleave(function(){
    $('.eventSlideMenu .img01').animate({left:[0,'easeOutQuad']},10).clearQueue();
    $('.eventSlideMenu .img02').animate({left:[460,'easeOutQuad']},10).clearQueue();
    $('.eventSlideMenu .img03').animate({left:[920,'easeOutQuad']},10).clearQueue();
    $('.liTitle').animate({ width: 460 });
  });
});



//스크롤 트렌지션
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var mainScroll = $(window).scrollTop(); //스크롤의 거리
  // var mainScrollGap = $(window).height() / 2;
  var mainScrollGap = $(window).height() - 500;
  
  // 사업소개
  var mainBusiness = $('.businessArea').offset().top - mainScrollGap;
  if(mainScroll > mainBusiness){
      $('.businessArea ').addClass('active');
  } else if(mainScroll < mainBusiness - 500){
      $('.businessArea').removeClass('active');
  };

  // 회사소개
  var mainSus = $('.companyArea').offset().top - mainScrollGap;
  if(mainScroll > mainSus){
      $('.companyArea').addClass('active');
  } else if(mainScroll < mainSus - 500){
      $('.companyArea').removeClass('active');
  };

  // 경영방침
  var mainNotice = $('.sustainableArea').offset().top - mainScrollGap;
  if(mainScroll > mainNotice){
      $('.sustainableArea').addClass('active');
  } else if(mainScroll < mainNotice - 500){
      $('.sustainableArea').removeClass('active');
  };

 // 뉴스
  var mainMedia = $('.newsArea').offset().top - mainScrollGap;
  if(mainScroll > mainMedia){
      $('.newsArea').addClass('active');
  } else if(mainScroll < mainMedia - 500){
      $('.newsArea').removeClass('active');
  };

// 고객지원
  var mainRecruit = $('.supportArea').offset().top - mainScrollGap - 100;
  if(mainScroll > mainRecruit){
      $('.supportArea').addClass('active');
  } else if(mainScroll < mainRecruit - 500){
      $('.supportArea').removeClass('active');
  };

});



// 비지니스 영역 호버



