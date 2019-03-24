$(document).ready(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    $(".main-footer .toggle-mnu").click(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500, "linear");
    });
});

$(document).ready(function(){
 $(".slider").owlCarousel({
  items : 1,
  nav : true,
  navText : "",
  loop : true,
  autoplay : true,
  autoplayHoverPause : true
 });
});

$(".sect-about").waypoint(function() {

 $(".sect-about .team").each(function(index) {
  var ths = $(this);
  setInterval(function(){
   ths.removeClass("team-off").addClass("team-on");
   }, 150*index); 
 });

}, {
 offset : "40%" 
});

$(".arrow-bottom").click(function() {
 $("html, body").animate({scrollTop: $(".main-head").height()+250 }, "slow");
 return false;
});

$(".top").click(function() {
 $("html, body").animate({scrollTop: 0 }, 3000, "linear");
 return false;
});

$(document).ready(function(){
    $("#footer-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500, "linear");
    });
});

$(function() {

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

$('.button-wrap .bottons').magnificPopup({
  type:'inline'
});
    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $(".form-wrap").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

ymaps.ready(init);    
 function init(){ 
  var myMap = new ymaps.Map("maps", {
   center: [44.6138, 33.5239],
   zoom: 12
 }); 
}

$(".sect-advantages h2, .sect-about h2, .sect-gallery h2, .sect-com h2, .sect-contact h2").animated("fadeInRightBig");
$(".sect-advantages span").animated("zoomIn");
$(".sect-advantages h3, .sect-about h3, .sect-gallery h3, .sect-com h3 ").animated("fadeInLeftBig");

"use strict";

