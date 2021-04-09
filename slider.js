'use strict';

$(function () {

    //settings for slider
    var width = 1210;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({
                'margin-left': '-=' + width
            }, animationSpeed, function () {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});




function validate(coupon) {
    var myRe = "LUCKY100";
    var coupon = myRe.trim();
    var input = document.getElementById('in').value;
    if (input.toUpperCase() == coupon.toUpperCase()) {
        document.getElementById('message').innerHTML = "Coupon applied!";
        document.getElementById('err').innerHTML = "";
        return true;
    } else {
        document.getElementById('err').innerHTML = "Invalid coupon";
        document.getElementById('message').innerHTML = "";
        return false;
    }
}



$(document).ready(function () {
    $('#slide').click(function () {
        $('#container').slideDown('slow', function () {
            $('#tbname').focus();
        });
    });
});




$(document).ready(function () {
    $("button").click(function () {
        $("#para").css("color", "white").animate({
                width: "100%"
            })
            //it adds animation to the program by styling it
            .animate({
                fontSize: "46px"
            })
            .animate({
                borderWidth: 30
            });
    });
});