import modal from "./modal.js";

modal();

const swiper = new Swiper(".examples-slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

console.log("end");
