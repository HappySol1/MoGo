$(document).ready(function(){

$('.your-class').slick({
  infinite: true,
  speed: 500,
  arrows: true,
  prevArrow:"<img class='prev slick-prev' src='images/angle-left-solid.svg'>",
  nextArrow:"<img class='next slick-next' src='images/angle-right-solid.svg'>",
  autoplay: true,
  autoplaySpeed: 5000,

});

$(".head-click").on('click',function() {
    $('html, body').animate({
        scrollTop: $(".story").offset().top + 10
    }, 1500).addClass('myactive'); 
});
$('.nav-bar ul li:nth-child(1) a').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1500).addClass('myactive'); 
});
$('.nav-bar ul li:nth-child(2) a').on('click',function() {
    $('html, body').animate({
        scrollTop: $(".story").offset().top + 10
    }, 1500).addClass('myactive'); 
});
$('.nav-bar ul li:nth-child(3) a').on('click',function() {
    $('html, body').animate({
        scrollTop: $(".works").offset().top + 10
    }, 1500).addClass('myactive'); 
});
$('.nav-bar ul li:nth-child(4) a').on('click',function() {
    $('html, body').animate({
        scrollTop: $(".whatpeoplesay").offset().top + 10
    }, 1500).addClass('myactive'); 
});
$('.nav-bar ul li:nth-child(5) a').on('click',function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top + 10
    }, 1500).addClass('myactive'); 
});

$(window).scroll(function(){
   if($(this).scrollTop()<($(".story").offset().top)){
    $('.nav-bar ul li a.myactive').removeClass('myactive');
    $('.nav-bar ul li:nth-child(1) a').addClass('myactive');
    console.log('about');
   }else if(($(this).scrollTop()>($(".story").offset().top))&&($(this).scrollTop()<($(".works").offset().top))){
    $('.nav-bar ul li a.myactive').removeClass('myactive');
    $('.nav-bar ul li:nth-child(2) a').addClass('myactive');
     console.log('services');
   }else if(($(this).scrollTop()>($(".works").offset().top))&&($(this).scrollTop()<($(".whatpeoplesay").offset().top))){
    $('.nav-bar ul li a.myactive').removeClass('myactive');
    $('.nav-bar ul li:nth-child(3) a').addClass('myactive');
      console.log('works');
   }else if(($(this).scrollTop()>($(".whatpeoplesay").offset().top))&&($(this).scrollTop()<($(".map").offset().top))){
    $('.nav-bar ul li a.myactive').removeClass('myactive');
    $('.nav-bar ul li:nth-child(4) a').addClass( 'myactive');
      console.log('blog');
   }else if($(this).scrollTop()>($(".map").offset().top)){
    $('.nav-bar ul li a.myactive').removeClass('myactive');
    $('.nav-bar ul li:nth-child(5) a').addClass('myactive');
     console.log('contacts');
   } 
});
// var prew;
// function(curr){
//   if(prew != curr){
//     prew = curr
//     $('.nav-bar ul li a.myactive').removeClass(myactive);
//   }
// }

$('.meet-images-link').mouseenter(function(){
     $(this).append('<div class="socials"><a href="#" class="btn"><i class="fab fa-instagram"></i></a><a href="#" class="btn"><i class="fab fa-twitter"></i></a><a href="#" class="btn"><i class="fab fa-facebook-f"></i></a><a href="#" class="btn"><i class="fab fa-youtube"></i></a></div>');
  });
  $('.meet-images-link').mouseleave(function(){
    $(this).children('.socials').remove();
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>800){
      $('.nav').removeClass('navabs');
      $('.nav').addClass('navfix');
    }else{
      $('.nav').removeClass('navfix');
      $('.nav').addClass('navabs');
    }
  }); 
var wh;
$("button").on("click",function(){
  if($(window).width()>1200){
    wh = 210;
    //console.log('1200');
  }else if(($(window).width()>768)&&($(window).width()<1200)){
    wh = 400;
    //console.log('992');
  }else{
    //console.log('0');
  wh = 600;
  }
	$('p.nnone').animate({'height':'0'}, 200)
	$(this).next('p').animate({'height': wh +'px'}, 200)
});


$.each($('.ibg'), function(index, val) {
  if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
});





});