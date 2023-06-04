const swiper = new Swiper('.swiper',{
    loop: true,
    direction: 'horizontal',

    freeMode: true,

   initialSlide: 0,
   

    breakpoints:{
        768:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        

    },
    mousewheel:{
        sensivity: 1,
    },
})
