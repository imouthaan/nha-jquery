//teller nieuwe div
let index = 1;

//script uitvoeren na laden pagina
window.addEventListener('load', () => {
  document.getElementById('btnKnop1').addEventListener('click', () => {
  
    //maak nieuw element
  const newElement = document.createElement('p');
  newElement.id = 'p' + index++;

  //maak nieuwe text node obv input
  const node = document.getElementById('invoerTekst').value;
  const newNode = document.createTextNode(node);

  //tekst toevoegen aan nieuw element
  newElement.appendChild(newNode);

  //log en toon
  console.log(newElement);
  document.getElementById('divResult').appendChild(newElement);

  })


})