var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
 
    responseObject = JSON.parse(xhr.responseText);  
    //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
    // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
};

xhr.open('GET', 'js/sub2.json', true);       // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

//con3 모달
$(document).ready(function(){
 
    var newContent='';
    $('.more_btn').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.more_btn');

        $('.modal_box').fadeIn('fast');
        $('.popup').fadeIn('slow');

        newContent='';
        newContent+='<img src="'+ responseObject.con3[ind].path +'" ' + 'alt="">';
        newContent+='<div class="conRight">';
        newContent+=' <span class="subTitle">'+ '골판지 >' +  responseObject.con3[ind].group + '</span>';
        newContent+=' <p class="title">'+ responseObject.con3[ind].title;
        newContent+=' <p class="popCon">'+ responseObject.con3[ind].con;
        newContent+='</div>';

        newContent+='<div class="pay">';
        newContent+= '<dl><dt>최대 규격</dt>';
        newContent+= '<dd>' + responseObject.con3[ind].tCon1; + '</dd>';
        newContent+= '<dt>특징</dt>';
        newContent+= '<dd>' + responseObject.con3[ind].tCon2; + '</dd>';
        newContent+= '<dt>제품 문의</dt>';
        newContent+= '<dd>' + responseObject.con3[ind].tCon3Name; + '</dd>';
        newContent+= '<dd>' + responseObject.con3[ind].tCon3Num; + '</dd>';
        newContent+= '<dd>' + responseObject.con3[ind].tCon3Mail; + '</dd></dl>';
        newContent+='</div>';

        $('.int').html(newContent);
        $('.int').fadeIn();
        $('.bgbox').fadeIn();
    });

    $('.close_btn, .bgbox').click(function(e){
        e.preventDefault();
        $('.modal').fadeOut();
        $('.bgbox').fadeOut();
    });
});
