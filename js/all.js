$(document).ready(function(){
    let skills =[
        {
            img:"images/webicon/HTML5.svg",
            title:"HTML5",
            text:"會使用pug撰寫<br>繪製SVG圖型<br>",
            scroll: false
        },
        {
            img:"images/webicon/CSS3.svg",
            title:"CSS3",
            text:"會使用SASS撰寫<br>@import模組化<br>keyframes動畫",
            scroll: false
        },
        {
            img:"images/webicon/JS.svg",
            title:"javascript",
            text:"會使用ES6語法撰寫<br>AJAX抓取資料",
            scroll: false
        },
        {
            img:"images/webicon/Bootstrap.svg",
            title:"Bootstrap4",
            text:"會使用grid格線系統<br>做出RWD響應式網頁",
            scroll: false
        },
        {
            img:"images/webicon/jQuery.svg",
            title:"jQuery",
            text:"會應用基本動態效果<br>AJAX抓取資料",
            scroll: false
        },
        {
            img:"images/webicon/Vue.js.svg",
            title:"Vue.js",
            text:"會應用基本模板語法<br>建立component元件",
            scroll: false
        },
        {
            img:"images/webicon/VS Code.svg",
            title:"Visual Studio Code",
            text:"建立基本資料層架構<br>安裝插件即時預覽",
            scroll: false
        },
        {
            img:"images/webicon/GitHub.svg",
            title:"GitHub",
            text:"建立repo將網站上傳至<br>GitHub Pages<br>進行基本版本控制",
            scroll: false
        },
        {
            img:"images/webicon/Photoshop.svg",
            title:"Adobe Photoshop",
            text:"能使用PS編排網站<br>基本調色、修圖、去背",
            scroll: false
        },
        {
            img:"images/webicon/Illustrator.svg",
            title:"Adobe Illustrator",
            text:"能使用AI繪製icon<br>基本編排、修改、繪製",
            scroll: false
        },
        {
            img:"images/webicon/Adobe XD.svg",
            title:"Adobe XD",
            text:"使用XD編排網站樣版",
            scroll: false
        },
        {
            img:"images/webicon/Markdown.svg",
            title:"Markdown語法",
            text:"使用過Hugo theme<br>用Markdown語法<br>進行簡易修改",
            scroll: false
        }
    ];
    var vm = new Vue({
        el: "#app",
        data:{
            skills,
            a: false,
        },
        methods:{
            scroll: function(item){
                this.skills.forEach(function(itemm){
                    if(itemm.scroll !== item.scroll){
                        itemm.scroll = false;
                    }
                });
                item.scroll = !item.scroll;
            }
        }

    });
    var works1=[
        "images/illustratorpic/broom.png",
        "images/illustratorpic/Brown piggy bank.png",
        "images/illustratorpic/Contact lens clip.png",
        "images/illustratorpic/Correction fluid.png",
        "images/illustratorpic/Dyson supersonic hair dryer.png",
        "images/illustratorpic/Gillette shaving foam.png",
    ];

    var works2=[
        "images/illustratorpic/Key.png",
        "images/illustratorpic/Kolin 7inch circulation fan.png",
        "images/illustratorpic/Kuai kuai coconut cornpuff.png",
    ];

    var works3=[
        "images/illustratorpic/Makeup remover.png",
        "images/illustratorpic/Mini-oligo glass bottle.png",
        "images/illustratorpic/Mouse.png",
    ];

    var works4=[
        "images/illustratorpic/Peaca hand cream.png",
        "images/illustratorpic/Razor.png",
        "images/illustratorpic/Receipt bucket.png",
        "images/illustratorpic/Reed diffuser.png",
        "images/illustratorpic/Sports bluetooth headset.png",
        "images/illustratorpic/Toothpaste.png",
    ];
    
    var vm2 = new Vue({
        el: "#works",
        data:{
            works1,
            works2,
            works3,
            works4,
        }
    });


    $(".web-box").hover(function(){
        $(this).find(".web-overlay").toggleClass("web-overlay-up");
    });
    $(".web-btn").hover(function(){
        $(this).parent().find(".web-box").find(".web-overlay").toggleClass("web-overlay-up");
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $(".scrolldown").addClass("scrolldown-transparent");
        }
        else{
            $(".scrolldown").removeClass("scrolldown-transparent");
        }
        var scrollvalue = $(window).scrollTop();
        $('header.col-xl-3').css('background-position-y', -(scrollvalue / 40) + 'px');
    });

});
