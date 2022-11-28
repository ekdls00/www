var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
 
    responseObject = JSON.parse(xhr.responseText);  
    //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
    // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
};

xhr.open('GET', 'js/sub2_1.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

//con1 모달
$(document).ready(function(){
 
    var newContent='';
    $('.more_btn').click(function(e){
      e.preventDefault();

      var ind = $(this).index('.more_btn');
      //console.log(ind);

      $('.modal_box').fadeIn('fast');
      $('.popup').fadeIn('slow');

      newContent='';
      newContent+='<img src="'+ responseObject.con1[ind].path +'" ' + 'alt="">';
      newContent+='<p class="popup_title2">'+ responseObject.con1[ind].title +' <br><span>알류미늄 > 포장류</span></p>';

      $('.card_int').html(newContent);
      //console.log(responseObject); 
  });

  $('.close_btn, .modal_box').click(function(e){
      e.preventDefault();
      $('.modal_box').hide();
      $('.popup').hide();

  });
});
