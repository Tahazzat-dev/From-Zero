jQuery(function ($) {
  AOS.init({
    duration: 1000,
    offset: 5,
    easing: "ease-in-out",
    once: true,
  });

  // lenis initialization
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  class HambergerMenu {
    constructor() {
      this.init();
    }

    // initialize
    init() {
      this.bindEvents();
    }

    // events
    bindEvents() {
      $(".FZ_menu-toggler").on("click touch", this.toggleSidepanel.bind(this));
      $(".FZ_nav-links li a").on(
        "click touch",
        this.uncheckedCheckbox.bind(this)
      );
    }

    // methods

    uncheckedCheckbox() {
      $(".FZ_hamberger-toggler-input").prop("checked", false);
      this.toggleSidepanel();
    }
    toggleSidepanel() {
      $(".FZ_nav-links-wrap").toggleClass("open");
    }
  }

  const hambergerMenu = new HambergerMenu();

  // latest projects image slider
  $(".latest-project-images-slider.first").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

setTimeout(() => {
  $(".latest-project-images-slider.second").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
},500)

  setTimeout(() => {
    $(".latest-project-images-slider.third").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    });
  }, 1000);

  // testimonials slider
  $(".FZ_testimonials").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  $("[data-toggle]").on("click", function () {
    var selector = $(this).data("toggle");
    var $block = $(selector);

    // Close all other open accordions
    $("[data-toggle]")
      .not(this)
      .each(function () {
        var otherSelector = $(this).data("toggle");
        var $otherBlock = $(otherSelector);
        if ($(this).hasClass("active")) {
          $otherBlock.css("max-height", "");
          $(this).removeClass("active");
        }
      });

    // Toggle the current accordion
    if ($(this).hasClass("active")) {
      $block.css("max-height", "");
    } else {
      $block.css("max-height", $block[0].scrollHeight + 40 + "px");
    }

    $(this).toggleClass("active");
  });
});
