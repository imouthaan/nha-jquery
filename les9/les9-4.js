


$(document).ready(() => {
    const inputFieldWidth = $('#width');
    const inputFieldHeight = $('#height');
    const inputButton = $('#button');
    const textDiv = $('#text');
    const errorDiv = $('#error');

    function checkNumber(numberText, type) {
        if (isNaN(parseInt(numberText))) {
            errorDiv.html(errorDiv.text() + '<br>' + type + ' is geen correct getal');
            return false;
        }
        return true;
    }

    textDiv.css({
        'border': 'solid 1px black',
        'padding': '4px',
        'margin': '4px',
    });

    inputButton.on('click', function () {
        errorDiv.text('');

        const width = inputFieldWidth.val();
        const height = inputFieldHeight.val();

        const widthIsNumber = checkNumber(width, 'Breedte');
        const heightIsNumber = checkNumber(height, 'Hoogte');
        if (widthIsNumber && heightIsNumber) {
            textDiv.css({
                'height': height + 'px',
                'width': width + 'px',
            });
        }
    });
});