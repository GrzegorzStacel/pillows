$(document).ready(
    function () {

        input_filleed();

    }
);

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function (e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function (e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});
// $(document).ready(function () {


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