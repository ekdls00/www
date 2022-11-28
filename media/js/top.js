 /* top무브 버튼 */
$(document).ready(function() {
    $('.topMove').click(function(e){
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},1500); 
        //스크롤을 부드럽게 이동하도록 하는 코드!
    });
});