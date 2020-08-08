ScrollReveal({ reset: true });
ScrollReveal().reveal('.tshirt',{ easing: 'ease-in-out', delay: 300 } );
ScrollReveal().reveal('.hoodie', { easing: 'ease-in-out', delay: 300 } );

var btn = $('#toTop');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
        });

        btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        });