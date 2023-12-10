function sum(getal1, getal2) {
    alert(arguments.length);
    const sum = getal1 + getal2;
    return sum;
}
const result = sum(2, 3);
document.getElementById('divResult').innerHTML = '2 + 3 = ' + result;
