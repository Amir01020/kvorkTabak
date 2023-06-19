// let d = document
// var swiper2 = new Swiper(".mySwiper", {
//   grabCursor: true,
//   effect: "fade",
//   creativeEffect: {
//     prev: {
//       shadow: true,
//       translate: ["-120%", 0, -500],
//     },
//     next: {
//       shadow: true,
//       translate: ["120%", 0, -500],
//     },
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// let fonsPar = d.querySelectorAll('#fonsPar')
// fonsPar.forEach(i => {
//   VANTA.WAVES({
//     el: i,
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: window.innerHeight,
//     minWidth: window.innerWidth,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: i.dataset.color,
//     shininess: 40.00,
//     waveHeight: 40,
//     zoom: 0.7
//   })
// });
// let arr = [
//   {
//     img: '',
//     name: '',
//     comment: '',
//     color: '',
//     id: ''
//   }
// ]
// let obj = {
//   name: '',
//   comment: '',
//   id: ""
// }
// let names = d.querySelector('#name')
// let comment = d.querySelector('#comment')
// let post = () => {
//   obj.name = names.value
//   obj.comment = comment.value
//   axios.post('https://tobacco-b5bb1-default-rtdb.firebaseio.com/items.json', obj)

// }
// let btn = d.querySelector('#btn')
// btn.addEventListener('click', post())