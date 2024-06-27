$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
        autoplaySpeed: 3000, // Set a reasonable autoplay speed
        speed: 500, // Adjust the transition speed as needed
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function(){
    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Set a reasonable autoplay speed
        speed: 500, // Adjust the transition speed as needed
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


function whatsapp(){
    window.location.href = 'https://wa.me/917736600574';
}
 window.onload = function () {
        setTimeout(function () {
            window.location.href = 'https://wa.me/917736600574?text=hi';
        }, 25000);
    let popup = document.getElementById('popup')
    setTimeout(function(){
        popup.classList.add('reveal')
    },5000);
};

function closepopup(){
   let poup = document.getElementById('popup')
   poup.classList.remove('reveal')
}



