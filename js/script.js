let d = document
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  speed: 800,
  effect: "fade",
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },  
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let z =1

VANTA.WAVES({
  el: "#fonss",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: window.innerHeight,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: '#012413',
  shininess: 40.00,
  waveHeight: 40,
  zoom: 0.6
})
