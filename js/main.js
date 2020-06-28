$(document).ready(function () {
    input_filleed();
    sendingMail();
    ArrowBtnGoToTop();
});

const MENU = document.getElementById('menu');
const NAV = document.getElementById('nav');
const EXIT = document.getElementById('exit');
const CONTACT = document.getElementById('contact');

MENU.addEventListener('click', function (e) {
 NAV.classList.toggle('hide-mobile');
    e.preventDefault();
});

EXIT.addEventListener('click', function (e) {
 NAV.classList.toggle('hide-mobile');
    e.preventDefault();
});

CONTACT.addEventListener('click', function (e) {
 NAV.classList.toggle('hide-mobile');
});

function input_filleed() {
    // const input = document.querySelector('.inputField input');

    // input.addEventListener('focus', (e) => {
    //     console.log('im in');
    //     e.target.closest('input').classList.add('focus');
    //     console.log(e.target);
    // })

    $('.inputField input, .inputField textarea').focus(function () {
        $(this).prev().addClass('focus');
    })

    $('.inputField input, .inputField textarea').focusout(function () {
        if ($(this).val() !== "") {
            $(this).addClass('filled');
        } else {
            $(this).prev().removeClass('focus');
            $(this).removeClass('filled');
        }
    })
}


function sendingMail() {
    var infoDisplayer = $(".formMessage");
    var form = $("#form1");

    form.on('submit', function (e) {
        $.ajax({
            url: "php/mail.php",
            dataType: "JSON",
            type: "post",
            data: $(this).serialize(),
            beforeSend: function () {
                infoDisplayer.hide();
                infoDisplayer.removeClass("ok error");
                infoDisplayer.text(`<p>trwa wysyłanie danych...</p>`).slideDown(300);
                console.log("beforeSend");
            },
            success: function (obj) {
                if (obj.type == "ok") {
                    infoDisplayer.addClass("ok").removeClass("error").html(obj.text).delay(4000).slideUp(500);
                    form.get(0).reset();
                    console.log("success - ok");

                    $('.inputField label').removeClass('focus');
                    $('.inputField input').removeClass('filled');
                    $('.inputField textarea').removeClass('filled');
                } else {
                    infoDisplayer.addClass("error").removeClass("ok").html(`<p>${obj.text}</p>`);
                    console.log("success - error");
                }
            },
            error: function () {
                infoDisplayer.addClass("error").removeClass("ok").html(`<p>Wystąpił błąd podczas wysyłania informacji.</p>`);
                console.log("error");
            },
            complete: function () {
                // infoDisplayer.fadeIn();
                console.log("complete");
            }
        });

        e.preventDefault();
    })
}

function ArrowBtnGoToTop() {
    $(window).scroll(function () {
        if ((document.documentElement.scrollTop || document.body.scrollTop) < 100) {
            $('.arrow').css({
                'transform': 'translateY(200px)',
            });
        } else {
            $('.arrow').css({
                'transform': 'translateY(0)',
                'transition': '1.2s'
            });
        }
    });

    $('.arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 200, 'linear');
    });
}