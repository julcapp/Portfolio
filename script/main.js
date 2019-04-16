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
document.onwheel = function () {
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

// Модальное окно

var modal = $('#modal');
var modalShadow = $('#modalShadow');

$('#btnContactMe').on('click', (e) => {

    modal.css({
        animation: 'modalShow .3s ease',
        display: 'block'
    });
    modalShadow.css({
        animation: 'modalShow .3s ease',
        display: 'block'
    });

});

modalShadow.on('click', (e) => {
    modalShadow.css({
        animation: 'modalOut .2s ease',
        display: 'none'
    });
    modal.css({
        animation: 'modalOut .2s ease',
        display: 'none'
    });
});

var mailLink = document.getElementById('mailLink');
var clipboard = new ClipboardJS(mailLink);


document.getElementsByClassName('icons__mail')[0].onclick = function (e) {
    this.classList.remove('icons__mail');
    this.classList.add('icons__mail2');
}

document.getElementsByClassName('modal-screen-inputs__buttons__icons_mail')[0].onclick = function (e) {
    this.classList.remove('modal-screen-inputs__buttons__icons_mail');
    this.classList.add('modal-screen-inputs__buttons__icons_mail2');
}

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.loki').css('top', (0 - (scrolled * .35)) + 'px');
}




