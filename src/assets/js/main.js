let burger = document.getElementById('burger');
let mobMenu = document.getElementById('header__nav-list-mob');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobMenu.classList.toggle('active');
});

var controller = new ScrollMagic.Controller();

var tween1 = TweenMax.to("#attraction__img-plane", 0.5, {top: '-300px', transform: 'rotate(15deg)', scale: 1});
var tween2 = TweenMax.to("#attraction__img-humans", 0.5, {top: '100px', transform: 'rotate(-5deg)', scale: 1});

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500, offset: 0})
    .setTween(tween1)
    // .setTween("#attraction__img-plane", {scale: 0.7})
    // .addIndicators()
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500, offset: 0})
    .setTween(tween2)
    // .addIndicators()
    .addTo(controller);
