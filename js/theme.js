(function ($) {
  'use strict';
  console.log('hello wurld');

  var $page = $('.site-wrapper'),
    $slideLeft = $('.slide-left'),
    $slideRight = $('.slide-right'),
    $slideUp = $('.slide-up'),
    $slideDown = $('.slide-down'),
    $thesisDeets = $('.thesis-deets'),
    $returnHome = $('.home'),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight(),
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right';

  $slideLeft.click(function(e) {
    /* Act on the event */
    e.preventDefault();

  });

  $slideRight.click(function(e) {
    /* Act on the event */
    movePage(right);

    if(!$('.tagline').hasClass('return-home')) {
      $('.tagline').addClass('return-home');
    }
    e.preventDefault();
  });

  $slideUp.click(function(e) {
    /* Act on the event */
    e.preventDefault();

  });

  $slideDown.click(function(e) {
    /* Act on the event */
    e.preventDefault();

  });

  $thesisDeets.click(function(e) {
    /* Act on the event */
    $('p').first().velocity('scroll', {
      container: $('.text-wrapper'),
      duration: 500
    });

    if(!$('.tagline').hasClass('return-home')) {
      $('.tagline').addClass('return-home');
    }
    e.preventDefault();
  });

  $returnHome.click(function(e) {
    /* Act on the event */
    $page.css({
      transform: 'translateY(0px) translateX(0px)',
    });

    $('.logo-section').velocity('scroll', {
      container: $('.text-wrapper'),
      duration: 500
    });

    if($('.tagline').hasClass('return-home')) {
      $('.tagline').removeClass('return-home');
    }
    e.preventDefault();
  });
  
  function movePage(direction, xDistance, yDistance) {
    switch(direction) {
      case 'up':
        $page.css({
          transform: 'translateY(0px) translateX(0px)',
        });
      break;

      case 'down':
        $page.css({
          transform: 'translateY(0px) translateX(0px)',
        });
      break;

      case 'left':
        $page.css({
          transform: 'translateY(0px) translateX(0px)',
        });
      break;

      case 'right':
        $page.css({
          transform: 'translateY(0px) translateX('+-windowWidth+'px)',
        });
      break;
    }
  }
}(jQuery));
