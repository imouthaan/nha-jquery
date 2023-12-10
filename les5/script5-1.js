function welcomeAlert() {
    //variabele declareren
    const firstName = prompt('Wat is uw voornaam?');
    const lastName = prompt('wat is uw achternaam?');
    let fullName = firstName + ' ' + lastName;

    alert(fullName);
    document.getElementById('divResult').innerHTML = `<h2>Welkom ${fullName}</h2>`;
}

welcomeAlert();
