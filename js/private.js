// $(document).ready(function() {
//     if ($('.back-top').length) {
//         var scrollTrigger = 300,
//             backToTop = function () {
//                 var scrollTop = $(window).scrollTop();
//                 if (scrollTop > scrollTrigger) {
//                     $('.back-top').addClass('show');

//                 } else {
//                     $('.back-top').removeClass('show');
//                 }
//             };
//         backToTop();
//         $(window).on('scroll', function () {
//             backToTop();
//         });

//         $('.back-top').on('click', function (e) {
//             e.preventDefault();
//             $('html,body').animate({
//                 scrollTop: 0
//             }, 700);
//         });
//     }
// })

// $(document).ready(function(){
//    $(window).bind('scroll', function() {
//    var navHeight = $( window ).height() - 70;
//          if ($(window).scrollTop() > 1) {
//              $('.header-menu, main').addClass('fix-menu');
//          }
//          else {
//              $('.header-menu, main').removeClass('fix-menu');
//          }
//     });
// }); 

$('.slide-top').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><img src="images/slide-left.png" class="img-fluid" alt=""></button>',
    nextArrow: '<button class="next"><img src="images/slide-right.png" class="img-fluid" alt=""></button>',
}); 



// new WOW().init(); 


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});