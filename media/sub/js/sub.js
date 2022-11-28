$(document).ready(function() {
    $('.down').click(function(){
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });

    $(document).ready(function() {
        var screenSize, screenHeight;
        var current=false;
      
        function screen_size(){
            screenSize = $(window).width(); //스크린의 너비
            screenHeight = $(window).height();  //스크린의 높이
      
            $("#content").css('margin-top',screenHeight);
            
            if( screenSize > 768 && current==false){
                $("#imgBG").show();
                current=true;
            }
        }
      
        screen_size();  //최초 실행시 호출
        
       $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
            screen_size();
        }); 
        
        $('.down').click(function(){
            screenHeight = $(window).height();
            $('html,body').animate({'scrollTop':screenHeight}, 1000);
        });
      });


    //   About

    $("#content .color ul li .chart span").hover(function(){
        
        ind = $(this).parents('li').index("#content .color ul li ");
        console.log(ind);
        let color = $(this).css("background-color");
        function rgb2hex(rgb) {
            if (rgb.search("rgb") == -1 ) {
                return rgb;
            } else {
                rgb = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
                function hex(x) {
                    return ("0" + parseInt(x).toString(16)).slice(-2);
                }
                return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
            }
        }
        $('.colorText'+(ind+1)).text(rgb2hex(color));
        $('.colorText'+(ind+1)).css("background", rgb2hex(color));
        $(".colorText"+(ind+1)).css("opacity", "1");
    }, function(){
            $(".colorText"+(ind+1)).css("opacity", "0");
    });


    //트레일러
    var trailerSongs;
    $.ajax({
        url:'./js/trailer.json',
        dataType: 'json',
        success: function(data){
            trailerSongs = data.songs;

            $('.song_lst li a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.song_lst li a');

                $('.music .youtube iframe').attr('src', trailerSongs[ind].url);
                $('.music .youtube_wrap dt').html(trailerSongs[ind].title);
                $('.music .youtube_wrap dd:eq(0)').html(trailerSongs[ind].channel);
                $('.music .youtube_wrap dd:eq(1)').html(trailerSongs[ind].tag);

            });
        }
        
    });
});
