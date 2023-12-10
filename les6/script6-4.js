// Voer script uit zodra de pagina helemaal geladen is.
window.addEventListener('load', function () {
    // caching van HTML-elementen in variabelen
    const input = document.getElementById('text');

    // event handler voor tekstvak
    input.addEventListener('keyup', (e) => {
        const keyName = e.key;

        const text = input.value;
        console.log('text is', text);

        // Enter ingedrukt en tekst is niet leeg
        if (keyName === 'Enter' && text.length > 0) {
            console.log('in enter if');
            setTimeout(function () {
                console.log('should show alert box');

                // exec after 1 sec
                alert(text);
            }, 1000);
        }
    });
});
