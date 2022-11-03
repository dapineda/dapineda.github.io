$(document).ready(function() {

    $('#menu').click(function() {
      if ($(this).hasClass('fa-times')) {
        $(this).addClass('fa-bars');
        $(this).removeClass('fa-times');
        $('header').removeClass('toggle');
      } else {
        $(this).removeClass('fa-bars');
        $(this).addClass('fa-times');
        $('header').addClass('toggle');
      }
    });

    $('header li a').click(function() {
      if ($('#menu').hasClass('fa-times')) {
        $('#menu').addClass('fa-bars');
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
      } else {
        $('#menu').removeClass('fa-bars');
        $('#menu').addClass('fa-times');
        $('header').addClass('toggle');
      }
    });
  
    $(window).on('scroll load',function() {
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if ($(window).scrollTop() > 0) {
        $('.top').show();
      } else {
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
    $('a[href*="#"]').on('click', function(e) {
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });