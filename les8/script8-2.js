
$(document).ready(function () {
    $('div').each(function (index, element) {
        element.style.color = '#' + (Math.floor(Math.random() * 0xFFFFFF)).toString(16);
        element.style.backgroundColor = 'hotpink';
    });
});