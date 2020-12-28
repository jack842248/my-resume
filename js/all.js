$(document).ready(function(){
    var initSubject='',initBody='';

    function submitHandler(){
        var to = "jack842248@gmail.com",
            name = nameText.val,
            email = emailText.val,
            subject = subText.val;

        var body = bodyText.val + name,
            body = body+"From："+nameText.val,
            body = body+"Email："+emailText.val;
        mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body,
        mailTo.click();
    }
    function init(){
        subText.val=initSubject;
        toText.val=initTo;
        bodyText.val=initBody;
    }




    var skills=[
        {
            img:"images/webicon/HTML5.svg",
            title:"HTML5",
            text:"熟悉PUG(jade)語法<br>SVG圖形繪製<br>Emmet語法",
            selceted: false
        },
        {
            img:"images/webicon/CSS3.svg",
            title:"CSS3",
            text:"熟悉Sass語法<br>@import模組化<br>keyframes動畫",
            selceted: false
        },
        {
            img:"images/webicon/Bootstrap.svg",
            title:"Bootstrap4",
            text:"能做出RWD響應式網頁<br>各種套件應用<br>搭配滾動data效果",
            selceted: false
        },
        {
            img:"images/webicon/jQuery.svg",
            title:"jQuery",
            text:"基礎語法應用<br>建立JSON和陣列資料",
            selceted: false
        },
        {
            img:"images/webicon/Vue.js.svg",
            title:"Vue.js",
            text:"基礎語法應用<br>API資料載入應用",
            selceted: false
        },
        {
            img:"images/webicon/Codepen.svg",
            title:"Codepen",
            text:"使用Codepen進行<br>快速測試、編譯等",
            selceted: false
        },
        {
            img:"images/webicon/VS Code.svg",
            title:"VS Code",
            text:"建立基本資料層架構<br>安裝插件即時預覽",
            selceted: false
        },
        {
            img:"images/webicon/Photoshop.svg",
            title:"Photoshop",
            text:"能使用PS編排網站<br>基本調色、修圖、去背",
            selceted: false
        },
        {
            img:"images/webicon/Illustrator.svg",
            title:"Illustrator",
            text:"能使用AI繪製icon<br>基本編排、修改、繪製",
            selceted: false
        },
        {
            img:"images/webicon/Adobe XD.svg",
            title:"Adobe XD",
            text:"使用XD編排網站樣版",
            selceted: false
        },
        {
            img:"images/webicon/GitHub.svg",
            title:"GitHub",
            text:"建立repo將網站上傳至<br>GitHub Pages<br>進行基本版本控制",
            selceted: false
        },
        {
            img:"images/webicon/Hugo.svg",
            title:"Hugo",
            text:"使用過Hugo theme<br>用Markdown語法<br>進行簡易修改",
            selceted: false
        },
        {
            img:"images/webicon/Google Search Console.svg",
            title:"Search Console",
            text:"了解基本應用<br>提交Sitemap給爬蟲",
            selceted: false
        },
        {
            img:"images/webicon/Google Analytics.svg",
            title:"Analytics",
            text:"了解基本應用<br>設置追蹤碼來分析",
            selceted: false
        },
        {
            img:"images/webicon/AOS.js.svg",
            title:"AOS.js",
            text:"使用data-aos滾動效果",
            selceted: false
        }
    ]
    var vm = new Vue({
        el: "#skill",
        data:{
            skills,
        },
        methods:{
            button(skill){
                skill.selceted = !skill.selceted
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
    ]
    var works2=[
        "images/illustratorpic/Key.png",
        "images/illustratorpic/Kolin 7inch circulation fan.png",
        "images/illustratorpic/Kuai kuai coconut cornpuff.png",
    ]
    var works3=[
        "images/illustratorpic/Makeup remover.png",
        "images/illustratorpic/Mini-oligo glass bottle.png",
        "images/illustratorpic/Mouse.png",
    ]
    var works4=[
        "images/illustratorpic/Peaca hand cream.png",
        "images/illustratorpic/Razor.png",
        "images/illustratorpic/Receipt bucket.png",
        "images/illustratorpic/Reed diffuser.png",
        "images/illustratorpic/Sports bluetooth headset.png",
        "images/illustratorpic/Toothpaste.png",
    ]
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
        var scrollvalue = $(window).scrollTop();
        $('header.col-xl-3').css('background-position-y', -(scrollvalue / 40) + 'px');
    });

});
