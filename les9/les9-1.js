$(document).ready(() => {
    const inputField = $('#color');
    const inputButton = $('#button');
    const textDiv = $('div');

    inputButton.on('click', function () {
        const input = inputField.val();

        if (input.length !== 6) {
            alert('Vul 6 tekens in!');
            return;
        }
        const inputAsNumber = parseInt(input, 16);
        if (isNaN(inputAsNumber)) {
            alert('Dit is geen correct Hex-getal');
            return;
        }
        
        textDiv.css('color', '#' + input);
    });
});