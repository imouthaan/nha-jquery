// 1. Initialisatie
const getal1 = 'Voer een getal in';
const getal2 = 'Voor nog een getal in';

// 2. Vraag stellen
const response_1 = parseFloat(prompt(getal1, '0.0'));
const response_2 = parseFloat(prompt(getal2, '0.0'));

// 3. Controleer het antwoord
const resultaat = 'De uitkomst is  ' + (parseFloat(response_1) + parseFloat(response_2));

// 4. Schrijf resultaat naar het scherm
document.getElementById('divResult').innerHTML = resultaat;

//schrijf naar browserconsole
console.log(resultaat);
