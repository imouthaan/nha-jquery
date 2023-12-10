$(document).ready(() => {
    const inputField = $('#color');
    const inputButton = $('#button');
    const textDiv = $('div');
    const radioText = $('#textColor');
    const radioBG = $('#bgColor');

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

        // check geselecteerde keuze
        if (radioText.is(':checked')) {
            textDiv.css('color', '#' + input);
        } else {
            textDiv.css('backgroundColor', '#' + input);
        }
    });
});