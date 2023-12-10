//globale variabele
// let naam = '';

// voer script uit wanneer pagina is geladen

window.addEventListener('load', onLoad);
function onLoad() {
    //caching html in variabele

    const divResult = document.getElementById('divResult');
    //handler voor de knop
    document.getElementById('btnToonNaam').addEventListener('click', function () {
        const name = document.getElementById('txtNaam').value;

        if (name.length <= 2) {
            // naam is < 3
            // geef error weer
            divResult.innerHTML = 'U heeft te weinig tekens, vul uw naam in (meer dan 2 tekens)';
        } else {
            // anders welkom
            divResult.innerHTML = 'Welkom ' + name;
        }
    });
}
