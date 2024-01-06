const swiper = new Swiper('.swiper', {
    slidesPerView: 1.1, 
    initialSlide: 0,
    pagination: {
        el: '.swiper-pagination',
        type: "bullets"
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        300:{
            slidesPerView: 1,
            spaceBetween: 0
        },
        900:{
            slidesPerView: 1.1, 
            spaceBetween: 10
        }
    }
});


swiper.on('slideChange', changeBackground)

function changeBackground(){

    let html = `   
        <div class="swiper-slide">
            <div class="project__content">
            </div>
        </div>`
    


}