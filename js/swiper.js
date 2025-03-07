const swiper = new Swiper(".custom-swiper", {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev-unique",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
        },
      });