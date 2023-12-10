// 1. Initialisatie
const getal1 = 'Voer een getal in';
const getal2 = 'Voer nog een getal in';

// 2. Vraag stellen
const response_1 = parseInt(prompt(getal1, '0'));
const response_2 = parseInt(prompt(getal2, '0'));

// 3. Controleer het antwoord
const resultaat = 'De uitkomst is  ' + (parseInt(response_1) + parseInt(response_2));

// 4. Schrijf resultaat naar het scherm
document.getElementById('divResult').innerHTML = resultaat;

//schrijf naar browserconsole
console.log(resultaat);
