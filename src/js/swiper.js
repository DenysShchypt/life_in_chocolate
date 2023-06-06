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

  const productsSwiper = new Swiper('.products-swiper', {

   loop: true,
    direction: 'horizontal',
   

   initialSlide: 0,
   

      breakpoints: {
       
        768:{
            slidesPerView: 2.5,
            spaceBetween: 18,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween: 18,
        },
    },

    pagination: {
        el: '.products-swiper-pagination',
        clickable: true,

    },
    mousewheel:{
        sensitivity: 0.4,
    },
})