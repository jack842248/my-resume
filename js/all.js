$(document).ready(function(){



    $(".skillcard").click(function(){
        $(this).find(".card-img-top").find(".card-icon").toggleClass("card-icon-down");
        $(this).find(".card-body").toggleClass("card-body-down");
        $(this).parent().siblings().find(".skillcard").find(".card-img-top").find(".card-icon").removeClass("card-icon-down");
        $(this).parent().siblings().find(".skillcard").find(".card-body").removeClass("card-body-down");
    });

    $(".web-box").hover(function(){
        $(this).find(".web-overlay").toggleClass("web-bottom");
    });
    $(".web-btn").hover(function(){
        $(this).parent().find(".web-box").find(".web-overlay").toggleClass("web-bottom");
    });





});
