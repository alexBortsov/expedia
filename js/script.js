$(document).ready(function(){
    $('.burger-menu').click(function (event) {
        $('.burger-menu, .header__menu').toggleClass('active');
    });
    $('#expedia__slider').multislider({
      duration: 750,
      interval: 3000
   });
});