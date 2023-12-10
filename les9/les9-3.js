$(document).ready(() => {
    const inputField = $('#text');
    const inputButton = $('#button');
    const textDiv = $('div');

    inputButton.on('click', function () {
        const input = inputField.val();
        const text = textDiv.text();

        textDiv.text(text + ' ' + input);
    });
});