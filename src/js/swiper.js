const reviewSwiper = new Swiper('.reviews-swiper',{
    loop: true,
    direction: 'horizontal',
   

   initialSlide: 0,
   

    breakpoints:{
        768:{
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 28,
        },
    },

    pagination: {
        el: '.reviews-swiper-pagination',
        

    },
    mousewheel:{
        sensitivity: 0.4,
    },
})

    pagination: {
        el: '.swiper-pagination',
    },
})