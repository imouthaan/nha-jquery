function toonVersie() {
    const versie = navigator.appVersion;
    const tekst = 'U gebruikt versie : ' + versie;

    document.getElementById('divResult').innerHTML = tekst;
}
