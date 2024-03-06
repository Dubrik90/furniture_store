import Swiper, {Navigation, Pagination, EffectCoverflow, EffectCards, EffectFlip, EffectCube} from 'swiper';


Swiper.use([Navigation, Pagination, EffectCoverflow, EffectCards, EffectFlip, EffectCube]);
const swiper = new Swiper('.Swiper-reviews', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  //loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1240: {
      slidesPerView: 3,

    },

    1920: {
      slidesPerView: 4,

    },

  },
});

