let swipers = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
});


let d = document

let oupanPrice = d.querySelectorAll('#oupanPrice')
    , modalBlock = d.querySelector('#modalBlock')
    , prodSliyd = d.querySelectorAll('.prodSliyd')
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

clous.onclick = () => {
    modalBlock.classList.remove('modalActiv')
}
let modalUp = d.querySelector('.modalUp')
let btnNext = d.querySelector('#btnNext')
btnNext.onclick = () => {
    modalUp.style.display = 'none'
}


let clouse = d.querySelector('#clouse'),
    burgerMenu = d.querySelector('.burgerMenu')
clouse.onclick = () => {
    burgerMenu.classList.toggle('burgerMenuActive')
    clouse.classList.toggle('div1')
}



let arrov = d.querySelectorAll('#arrov')
arrov.forEach(i => {
    i.onclick = () => {
        burgerMenu.classList.remove('burgerMenuActive')
        clouse.classList.remove('div1')
    }
});

let arr = [
    {
        name: 'ИНН',
        comment: '7816733929',
        id: ''
    }, {
        name: 'КПП',
        comment: '781601001',
        id: ''
    }, {
        name: 'БИК',
        comment: '044525104',
        id: ''
    }, {
        name: 'Расчетный счет',
        comment: '40702810701500147198',
        id: ''
    }, {
        name: 'Корр. счет',
        comment: '30101810745374525104',
        id: ''
    }
]

let http = ''
let mains = d.querySelector('#mains')
function creayt(name,comment,id) {
    http +=`
                        <div class="block btnClickComment" id="${id}">
                            <div class="elem"><h3>${name}</h3> <i class="gg-arrow-down-r"></i> </div>
                            <div class="elems" id="ddddddd" data-id="${id}">
                                <p>${comment}</p>
                            </div>
                        </div>
    `
    mains.innerHTML = http

}
arr.forEach((i,item) => {
    i.id = item

    creayt(i.name,i.comment,i.id)
    let btnClickComment = d.querySelectorAll('.btnClickComment')
    let btt = d.querySelectorAll('#ddddddd')
    btnClickComment.forEach((i)=>{
        i.onclick=()=>{
            for(let y of btt){
                if (y.dataset.id == i.id) {
                    y.classList.toggle('elems1')
                }
            }
        }
    })

});