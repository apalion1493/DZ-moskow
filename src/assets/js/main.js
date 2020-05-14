let burger = document.getElementById('burger');
let mobMenu = document.getElementById('header__nav-list-mob');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobMenu.classList.toggle('active');
});

var controller = new ScrollMagic.Controller();

var tween1 = TweenMax.to("#attraction__img-plane", 0.5, {top: '-350px', transform: 'rotate(15deg)', scale: 1});
var tween2 = TweenMax.to("#attraction__img-humans", 0.5, {top: '180px', transform: 'rotate(-5deg)', scale: 1.2});

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 800, offset: 0})
    .setTween(tween1)
    //.addIndicators()
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 800, offset: 0})
    .setTween(tween2)
    //.addIndicators()
    .addTo(controller);

$(window).scroll(function(){
    if ($(this).scrollTop() > 110) {
        $('.header').addClass('fixed');
        $('.tandem-first-screen').addClass('active');
        $('.main_index').addClass('active');
    } else {
        $('.header').removeClass('fixed');
        $('.tandem-first-screen').removeClass('active');
        $('.main_index').removeClass('active');
    }

    if ($(this).scrollTop() > 110) {
        $('#status-order').addClass('active');
    } else {
        $('#status-order').removeClass('active');
    }
});

let isMobile = false;
$(document).ready( function() {
    if ($('body').width() >= 992) {
        isMobile = true;
    }
    if (isMobile) {
        (function(){
            var a = document.querySelector('#aside1'), b = null, P = 0;
            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll', Ascroll, false);
            function Ascroll() {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''), s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('box-sizing') === 0 || Sa[i].indexOf('overflow') === 0 || Sa[i].indexOf('width') === 0 || Sa[i].indexOf('padding') === 0 || Sa[i].indexOf('border') === 0 || Sa[i].indexOf('outline') === 0 || Sa[i].indexOf('box-shadow') === 0 || Sa[i].indexOf('background') === 0) {
                            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                        }
                    }
                    a.innerHTML = '<div style="'+s+'">'+a.innerHTML+'</div>';
                    b = a.children[0];
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.border = '0';
                }
                var Ra = a.getBoundingClientRect(),
                    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                if ((Ra.top - P) <= 0) {
                    if ((Ra.top - P) <= R) {
                        b.className = 'stop';
                        b.style.top = - R +'px';
                    } else {
                        b.className = 'sticky';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
            }
        })()
    }
} );

$('.status-order__container-btnMob').click(function () {
    $(this).parent().toggleClass('active')
});
