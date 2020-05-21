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

$('.status-order__container-btnMob').click(function () {
    $(this).parent().toggleClass('active')
});


$(document).ready(function(){
    var youtube_src = $(".modal iframe").attr("src");
    $('.modal').on('show.bs.modal', function () {
        $(".modal iframe").attr("src", youtube_src + "?autoplay=1");
    });
    $(".modal").on('hidden.bs.modal', function (e) {
        $(".modal iframe").attr("src", null);
    });
});

var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
mapTitle.textContent = 'Для активации карты нажмите по ней';
wrapMap.appendChild(mapTitle);
wrapMap.onclick = function() {
    this.children[0].removeAttribute('style');
    mapTitle.parentElement.removeChild(mapTitle);
};
wrapMap.onmousemove = function(event) {
    mapTitle.style.display = 'block';
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
};
wrapMap.onmouseleave = function() {
    mapTitle.style.display = 'none';
};
