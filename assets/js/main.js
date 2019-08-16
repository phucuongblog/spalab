$(document).ready(function(){
    // Banner
    $('.banner').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        dots: true,
    }).slickAnimation();
    // Back Top
    var $backtop = $('.backtop');
    $(window).scroll(function(){
        var y = $(this).scrollTop();
        if (y > 400) {
        $backtop.addClass('active');
        }
        else {
        $backtop.removeClass('active');
        }
    });
    $backtop.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
    });
    // Owl Carousel 2
    $('.pricing-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            768:{
                items:2,
            }
        }
    });
    $('.mobile-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1
    });
    $('.feedback-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        items:1,
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
    $('.picture-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        items:1
    });
    $('.gallery-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            768:{
                items:2,
            },
            992:{
                items:4
            }
        }
    });
    $('.products-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    // Show and hide element over max height
    $('.show-more').click(function(){
        $(this).siblings('.hidden-element').addClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-less').css('display','block');
    });
    $('.show-less').click(function(){
        $(this).siblings('.hidden-element').removeClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-more').css('display','block');
    });
    // Open, Close Top Menu
    var $topmenu = $('.header-middle--menu > ul'),
        $submenu = $('.sub-menu');
    $('.open-menu').click(function(){
        $topmenu.slideDown();
    });
    $('.close-menu').click(function(){
        $topmenu.fadeOut();
    });
    $('.open-sub').on('click', function(e) {
        e.preventDefault();
        if ($submenu.is(':visible')) {
            $submenu.slideUp(300);
            $('.open-sub').removeClass('active');
        }
        if ($(this).next('.sub-menu').is(':visible')) {
            $(this).next('.sub-menu').slideUp(300);
            $(this).parent('li').find('.open-sub').removeClass('active');
        } else {
            $(this).next('.sub-menu').slideDown(300);
            $(this).parent('li').find('.open-sub').addClass('active');
        }
    });
    // Accordion
    var $accordion = $('.acc-content');
    $('.open-acc').on('click', function() {
        if ($accordion.is(':visible')) {
            $accordion.slideUp(300);
            $('.open-acc').removeClass('active');
        }
        if ($(this).next('.acc-content').is(':visible')) {
            $(this).next('.acc-content').slideUp(300);
            $(this).parent('li').find('.open-acc').removeClass('active');

        } else {
            $(this).next('.acc-content').slideDown(300);
            $(this).parent('li').find('.open-acc').addClass('active');
        }
    });
    // Add to cart popup
    var $cartpopup = $('.popup-cart');
    $('.add-cart-btn').click(function(){
        $cartpopup.fadeIn();
    });
    $('.close-popup-cart').click(function(){
        $cartpopup.fadeOut();
    });
    // Smooth Scrollspy
    $('#catalog .nav-link').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 600, function(){
        window.location.hash = hash;
        });
    });
});
// Style for procedures with odd, even elements
$(document).ready(function(){
    $('.procedures-wrapper--block:nth-child(even) .side1').addClass('order-1 order-lg-2');
    $('.procedures-wrapper--block:nth-child(even) .side2').addClass('order-2 order-lg-1');
});
// Sticky Menu
$(document).scroll(function() {
    var y = $(this).scrollTop(),
        a = $('.header'),
        h = a.height();
    if (y > h) {
        a.addClass("sticky");
    } else {
        a.removeClass("sticky");
    }
});
// Sync Owl Carousel 2
$(document).ready(function() {

  var sync3 = $("#sync3");
  var sync4 = $("#sync4");
  var slidesPerPage = 6; //globaly define number of elements per page
  var syncedSecondary = true;

  sync3.owlCarousel({
    items : 1,
    slideSpeed : 5000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition3);

  sync4
    .on('initialized.owl.carousel', function () {
      sync4.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    margin: 10,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:4,
        },
        1000:{
            items:4,
        }
    }
  }).on('changed.owl.carousel', syncPosition4);

  function syncPosition3(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync4
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync4.find('.owl-item.active').length - 1;
    var start = sync4.find('.owl-item.active').first().index();
    var end = sync4.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync4.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync4.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition4(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync3.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync4.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync3.data('owl.carousel').to(number, 300, true);
  });
});
// GUESTS
$(function () {
    var spinner = $('.guests-picker');
    var spinnerplus = $('.plus')
    var spinnerminus = $('.minus');
    $(spinnerplus).on('click', function () {
        var btn = $(this);
        var input = btn.closest(spinner).find('input');
        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
            input.val(parseInt(input.val(), 10) + 1, 10);
        } else {
            btn.next("disabled", true);
        }
    });
    $(spinnerminus).on('click', function () {
        var btn = $(this);
        var input = btn.closest(spinner).find('input');
        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
            input.val(parseInt(input.val(), 10) - 1, 10);
        } else {
            btn.prev("disabled", true);
        }
    });
});