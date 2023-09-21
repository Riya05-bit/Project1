// var swiper = new Swiper(".slide-container ", {
//     slidesPerView: 1,
//     centeredSlides: false,
//     slidesPerGroupSkip: 1,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//     },
//     breakpoints: {
//       769: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//     },
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

var swiper = new Swiper(".slide-container ", {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        loop:true,
        CenterSlide:"true",
        grabCursor:"true",
        fade:"true",
        pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  dynamicBullets:true,
                },
                navigation: {
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        },
                    });

