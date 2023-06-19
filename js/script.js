


let d = document

let oupanPrice = d.querySelectorAll('#oupanPrice')
    , modalBlock = d.querySelector('#modalBlock')
oupanPrice.forEach((i, item) => {
    i.onclick = () => {
        modalBlock.classList.toggle('modalActiv')
        let swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "fade",
            mousewheel: true,

            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });
    }
})