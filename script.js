document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Muestra 1 slide por defecto
        spaceBetween: 20, // Espacio entre slides
        freeMode: false, // Desactiva el desplazamiento libre
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // Selector de la flecha siguiente
            prevEl: '.swiper-button-prev', // Selector de la flecha anterior
        },
        breakpoints: {
            // Cuando el ancho de la pantalla es >= 576px
            576: {
                slidesPerView: 2, // Muestra 2 slides
            },
            // Cuando el ancho de la pantalla es >= 768px
            768: {
                slidesPerView: 3, // Muestra 3 slides
            },
            // Cuando el ancho de la pantalla es >= 992px
            992: {
                slidesPerView: 4, // Muestra 4 slides
            },
            1200: {
                slidesPerView: 5, // Muestra 4 slides
            },
            1400: {
                slidesPerView: 6, // Muestra 4 slides
            },
        },
    });
});