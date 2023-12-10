// for (let i = 8; i > 0; i--) {
//     document.write(i + '<br>');
// }

let i = 8;
while (i > 0) {
    document.write(i + '<br>');
    i -= 1;
}

// for (let i = 1; i <= 99; i = i * 2) {
//     i /= 1.5;
//     document.write(i + '<br>');
// }
i = 1;
while (i <= 99) {
    i /= 1.5;
    document.write(i + '<br>');
    i = i * 2;
}
// for (var nummer = 0; nummer <= 100; nummer++) {
//     if (nummer === 77) {
//         document.write(nummer + '<br>');
//         break;
//     }
// }
i = 0;
while (i <= 100) {
    if (i === 77) {
        document.write(i + '<br>');
        break;
    }

    i += 1;
}
