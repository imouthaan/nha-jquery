// 1. Initialisatie
const getal1 = 'Voer een getal in';
const getal2 = 'Voer nog een getal in';
// 2. Vraag stellen
const response_1 = parseInt(prompt(getal1, '0'));
const response_2 = parseInt(prompt(getal2, '0'));

//3. getallen vergelijken
const resultaat = 'De getallen die u invoerde waren '+ response_1 +' en '+response_2;

const vergelijken= (response_1 > response_2);
//wat is dan de uitkomst
const uitkomst= (response_1 > response_2)? response_1 +' is groter dan ' + response_2: response_1 +'is kleiner dan '+ response_2;



document.getElementById('divResult').innerHTML = resultaat;
document.getElementById('divUitkomst').innerHTML = uitkomst;