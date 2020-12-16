$(document).ready(function(){



    $(".skillcard").click(function(){
        $(this).find(".card-img-top").find(".card-icon").toggleClass("card-icon-down");
        $(this).find(".card-body").toggleClass("card-body-down");
        $(this).parent().siblings().find(".skillcard").find(".card-img-top").find(".card-icon").removeClass("card-icon-down");
        $(this).parent().siblings().find(".skillcard").find(".card-body").removeClass("card-body-down");
    });



    $(".web-btn").hover(function(){
        $(this).parent().siblings(".card").find(".card-img-overlay").find(".bg-overlay").fadeToggle();
    });






});
