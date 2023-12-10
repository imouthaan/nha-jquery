const geboortejaar = prompt('Wat is uw geboortejaar', 'jjjj');

let millennial;

if (geboortejaar >= 1980) {
    millennial = true;
    document.getElementById('divResult').innerHTML = 'U bent een millennial';
} else {
    millennial = false;
    document.getElementById('divResult').innerHTML = 'U bent een ouwe sok';
}
