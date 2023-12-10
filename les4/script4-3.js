const getal = 4;
const result = document.getElementById('divResult');
for (let index = 1; index <= 10; index += 1) {
    result.innerHTML += index + ' maal ' + getal + ' = ' + index * getal + '<br/>';
}
