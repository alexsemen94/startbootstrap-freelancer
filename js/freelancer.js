(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });

  var items = {
    _1: {
      id: '9obr3HZ7108'
    },
    _2: {
      id: 'NG3hp_nFsB8'
    }
  }

  $('.portfolio-item').click(function(e) {
    e.preventDefault();
    console.log(items[$(this).attr('data-id')]['id']);
    onYouTubePlayerAPIReady(items[$(this).attr('data-id')]['id']);
  });

  $(document).on('click', '.portfolio-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  var arrImages = [
    {
      src: 'img/img1.jpg',
      alt: ''
    },
    {
      src: 'img/img2.jpg',
      alt: ''
    },
    {
      src: 'img/img3.jpg',
      alt: ''
    }
  ];

  function initCarousel(arrImages, selector) {
    var carousel_inner = $(selector);
    var flagFirst = true;
    arrImages.map(function (slide) {
      var content = '<div class="carousel-item ';
      if (flagFirst) {
        flagFirst = false;
        content += 'active';
      }
      content += ('">'
        + '<img class="d-block w-100" src="' + slide.src + '" alt="' + slide.alt + '">'
        + '</div>');
      carousel_inner.append(content);
    });
  }

  initCarousel(arrImages, '#slider .carousel-inner');

  var player;
  function onYouTubePlayerAPIReady(id) {
    player = new YT.Player('teather-1', {
      height: '360',
      width: '640',
      videoId: id
    });
  }

  onYouTubePlayerAPIReady();
})(jQuery); // End of use strict
