// JavaScript Document
$(document).ready(function () {
	var article = $('.faqArea .article'); // 모든 li들을 article 안에 담아두기
	
	$('.faqArea .article .trigger').click(function(e){  // 각각의 질문(trigger)을 클릭했을 때
		e.preventDefault();

		var myArticle = $(this).parents('.article');  // 클릭한 해당 메뉴에 li(리스트) 
	
		if(myArticle.hasClass('hide')){  // 클릭한 해당 리스트가 닫혀 있는지 확인
			article.find('.a').slideUp(100); // 모든 리스트의 답변 닫기
			article.removeClass('show').addClass('hide'); //모든 리스트의 클래스 hide로 바꾼다

			myArticle.removeClass('hide').addClass('show');  // 클래스를 show로 바꾼다
			myArticle.find('.a').slideDown(100);  // 해당 리스트의 답변 열기 (find 대신 child를 사용해도 가능)
		} else {  // 클릭한 해당 리스트가 열려 있는지 확인(show)
			myArticle.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
			myArticle.find('.a').slideUp(100);   //해당 리스트의 답변을 닫아라~~~
		}  
  	});      
  
	//모두 열고 닫기
	$('.all').toggle(function(e){  // toggle()은 선택한 요소가 보이면 보이지 않게, 보이지 않으면 보이게 합니다.
		e.preventDefault(); 
		article.find('.a').slideDown(100);
		article.removeClass('hide').addClass('show');

		//$(this).text('모두닫기');
		$(this).html('<span>답변 모두 닫기 </span><i class="fa-solid fa-chevron-up"></i></i>');
	},function(e){ 
		e.preventDefault();
		article.find('.a').slideUp(100);
		article.removeClass('show').addClass('hide');

		//$(this).text('모두열기');
		$(this).html('<span>답변 모두 열기 </span><i class="fa-solid fa-chevron-down"></i></i>');
	});
}); 

