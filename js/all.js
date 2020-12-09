$(document).ready(function(){



    $(".skillcard").click(function(){
        $(this).find(".card-body").slideToggle();
        $(this).parent().siblings().find(".skillcard").find(".card-body").slideUp();
    });



    $(".web-btn").hover(function(){
        $(this).parent().siblings(".card").find(".card-img-overlay").find(".bg-overlay").fadeToggle();
    });






});
