// gallery
    $("#content .gallery ul li").hover(function(){
        ind = $(this).index("#content .gallery ul li img");
        $(this).attr("src", "./images/gallery"+(ind+1)+"_on.png");
    }, function(){
        $(this).attr("src", "./images/gallery"+(ind+1)+".png");
    })
