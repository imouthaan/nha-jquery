
$(document).ready(function () {
    $('tr').each(function (index, trElement) {
        if (index % 2 === 0) {
            // even
            trElement.style.backgroundColor = 'blue';
        } else {
            // oneven
            trElement.style.backgroundColor = 'red';
        }
    });
});