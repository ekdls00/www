$(document).ready(function () {
  
    $(".selector > a").click(
      function(e){
        e.preventDefault()
  
        if($(this).hasClass("hide")){
            $(this).removeClass("hide");
            $(this).addClass("show");
            $(".selector ul").stop().slideDown("slow");
            $(".selector > a i").attr("class","fa-solid fa-chevron-up");
        } else{
            $(this).removeClass("show");
            $(this).addClass("hide");
            $(".selector ul").stop().slideUp("fast");
            $(".selector > a i").attr("class","fa-solid fa-chevron-down");
            }
        });
    
        $(".selector ul li a").click(
            function(e){
                e.preventDefault()
      
            var ind = $(this).index(".selector ul li a");
            var text = $(this).html();
        
            $(".chart").hide()
            if(ind==0){
                $(".chart1").fadeIn();
                $("#content .selector > a").css("background","#ff0000");
            }else if(ind==2){
                $(".chart2").fadeIn()
                $("#content .selector > a").css("background","rgba(4, 207, 92, 1)");
            }else{
                $(".chart3").fadeIn()
                $("#content .selector > a").css("background","rgba(4, 207, 92, 1)");
            }
        
            $(".selector ul").hide();
            $(".selector > a").removeClass("show");
            $(".selector > a").addClass("hide");
            $(".selector > a").html(text + ' <i class="fa-solid fa-chevron-down"></i>');
            
            });
    
  
            var value, key;
        
            function getParams() {
        
                var url = decodeURIComponent(location.href);
        
                url = decodeURIComponent(url);
        
                console.log(url)
                var params = "";
                params = url.substring(url.indexOf("?") + 1, url.length);
        
                key = params.split("=")[0]; //'num'
                value = params.split("=")[1]; // '1'
        
                key = Number(value);
    
            }
    
            getParams(); //함수호출
    
            if(key == 1){
                $(".youtubeBox").hide()
                $(".blogBox").fadeIn()
                $("#content .selector > a").css("background","rgba(4, 207, 92, 1)");
                $(".selector > a").html('BLOG <i class="fa-solid fa-chevron-down"></i>');
            } else {
                $(".youtubeBox").fadeIn();
                $("#content .selector > a").css("background","#ff0000");
            }
});