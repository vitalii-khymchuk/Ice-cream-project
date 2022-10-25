import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

export default new Swiper('.swiper-container', {
  spaceBetween: 35,
  slidesPerView: 1,
  speed: 800,
  autoplay: {
    delay: 4000,
  },
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
  loop: true,
  paginationClickable: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
