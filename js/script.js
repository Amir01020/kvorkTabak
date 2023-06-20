let swipers = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
  });


let d = document

let oupanPrice = d.querySelectorAll('#oupanPrice')
    , modalBlock = d.querySelector('#modalBlock')
    ,prodSliyd = d.querySelectorAll('.prodSliyd')
oupanPrice.forEach((i) => {
    i.onclick = () => {
        modalBlock.classList.add('modalActiv')

        

        let swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "fade",
            initialSlide: i.dataset.id,
            mousewheel: true,

            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });
    }
})
let clous = d.querySelector('#clous')

clous.onclick=()=>{
    modalBlock.classList.remove('modalActiv')
}
let modalUp = d.querySelector('.modalUp')
let btnNext = d.querySelector('#btnNext')
btnNext.onclick=()=>{
    modalUp.style.display = 'none'
}
