$(document).ready(function () {
        
    var cnt = 0;
    $('.historyNav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    $('#content div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('.historyContent li:eq(1)').offset().top-600 ; // -600 = 
    var h2= $('.historyContent li:eq(2)').offset().top-600 ;
    var h3= $('.historyContent li:eq(3)').offset().top-600 ;
    var h4= $('.historyContent li:eq(3)').offset().top-600 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(Math.floor(scroll));
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.navBox').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        
        
        
        $('.historyNav li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화
        
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
            cnt = 0;
        }else if(scroll>=h1 && scroll<h2){
            cnt = 1;
        }else if(scroll>=h2 && scroll<h3){
            cnt = 2;
        }else if(scroll>=h3 && scroll<h4){
            cnt = 3;
        }
        else if(scroll>=h4){
            cnt = 4;
        }
        
        $('.historyNav li:eq('+ cnt +')').find('a').addClass('spy');
        //첫번째 서브메뉴 활성화
        
        $('#content div:eq('+ cnt +')').addClass('boxMove');
           
    });


});