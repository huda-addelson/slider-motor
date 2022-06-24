
let swiper = new Swiper(".bike__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        350: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        590: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        845: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});