let header = $('.header');
let firstSection = $('.first-section');
let secondSection = $('.second-section');
let footer = $('.footer');


// Плавное пролистывание

function slowScroll(selector) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(selector).offset().top - offset - 100 // получили отступ сверху до нужной части страницы
    }, 750); // и записали в ScrollTop
    return false;
}

// Параллакс

$('.first-section').on('mousemove', (e) => {
    const x = e.pageX / $(window).width(); // получили абстрактные координаты
    const y = e.pageY / $(window).height();

    $('.loki').css(
        'transform',
        'translate(' + x * 10 + 'px, ' + y * 10 + 'px)'
    );
});

var scrolled = 0;
document.onwheel = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    while (scrolled <= 50) {
        firstSection.onwheel(slowScroll('#second-section'));
    }
}

// Фиксация шапки

window.onscroll = function showHeader() {
    var header = document.getElementsByClassName('header')[0];

    if (window.pageYOffset > 300) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}






