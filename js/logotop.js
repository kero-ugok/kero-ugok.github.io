$(function(){
   $(window).scroll(function(){
      if($(window).scrollTop($('.container').offset()top)) {
         $('.logo img').animate({ width: +=200});
         
      }
   })
});