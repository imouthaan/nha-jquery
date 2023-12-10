$(document).ready(() => {
    const btnTheme1 = $('#theme1');
    const btnTheme2 = $('#theme2');
    const btnTheme3 = $('#theme3');

    btnTheme1.click(function () {
        $('h1').removeClass();
        $('h1').css({
            color: 'red',
        });
    });

    btnTheme2.click(function () {
        $('section').toggleClass('paragraph-theme');
    });

    btnTheme3.click(function () {
        $('footer').removeClass();
        $('footer').css({
            transform: 'rotate(180deg)',
        });
    });
});