$(function(){
   $('.hamburger').click(function(){
      if($('.menu').hasClass('nav_close')) {
         $('.menu').addClass('nav_open');
         $('.menu').removeClass('nav_close');
      } else {
         $('.menu').addClass('nav_close');
         $('.menu').removeClass('nav_open');        
      }
   });
});