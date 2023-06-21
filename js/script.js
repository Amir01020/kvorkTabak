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
        name: 'Наименование предприятия',
        comment: 'Общество с ограниченной ответственностью "Афина"',
        id: ''
    }, {
        name: 'Юридический адрес',
        comment: '192236, г Санкт-ПетербургВН.Тер.Г.Муниципальный округ Волковское, ул Белы Куна, Д 32 Литера М, помещ 76',
        id: ''
    }, {
        name: 'ОГРН',
        comment: '1227800115168',
        id: ''
    }, {
        name: 'ОКПО',
        comment: '75993674',
        id: ''
    }, {
        name: 'ОКТМО',
        comment: '40902000000',
        id: ''
    }, {
        name: 'Банк',
        comment: 'ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ" г Москва',
        id: ''
    }, {
        name: 'Генеральный директор',
        comment: 'Васюткин Иван Владимирович',
        id: ''
    }, {
        name: 'Главный бухгалтер',
        comment: 'Васюткин Иван Владимирович',
        id: ''
    }, {
        name: 'Контакты',
        comment: '8 (952) 282-38-23',
        id: ''
    },
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