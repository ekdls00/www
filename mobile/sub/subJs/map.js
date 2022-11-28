window.onload = function() {
    var container = document.getElementById('map1');
    var options = {
        center: new daum.maps.LatLng(37.46358089999958, 126.89058660000016),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.46358089999958, 126.89058660000016); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
     
    //두번째 맵
     
    var container2 = document.getElementById('map2');
    var options2 = {
        center: new daum.maps.LatLng(37.29833320000002, 126.7751867000001),
        level: 2
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(37.29833320000002, 126.7751867000001); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker2.setMap(map2);
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: marker2.getPosition()       
    }); 
     
     
    // 세번째 맵
     
    var container3 = document.getElementById('map3');
    var options3 = {
       center: new daum.maps.LatLng(37.034842299999646, 127.07360919999962),
       level: 2
    };

   var map3 = new daum.maps.Map(container3, options3);
   
   var mapTypeControl3 = new daum.maps.MapTypeControl();
   map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl3 = new daum.maps.ZoomControl();
   map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition3  = new daum.maps.LatLng(37.034842299999646, 127.07360919999962); 
   var marker3 = new daum.maps.Marker({
       position: markerPosition3
   });

   marker3.setMap(map3);
   
   var overlay3 = new daum.maps.CustomOverlay({
       map: map3,
       position: marker3.getPosition()       
   }); 
   
}

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