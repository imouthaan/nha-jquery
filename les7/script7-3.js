let index = 1


var countClicks = 0;
document.getElementById('btnKnop1').onclick = function() {
countClicks++;
if (countClicks == 1) {   
  
  //maak nieuw element
  const newElement = document.createElement('h1');
  newElement.id = 'h1'+ index++;

  //maak nieuwe header obv input
  const node = document.getElementById('invoerTekst').value;
  const newNode = document.createTextNode(node);
  
  //tekst toevoegen aan nieuw element
  newElement.appendChild(newNode);
  
  //log en toon
  console.log(newElement);
  document.getElementById('divResult').appendChild(newElement);           
  console.log('1 klik');
                          
}
if (countClicks == 2) {   
  
  //maak nieuw element
  const newElement = document.createElement('h2');
  newElement.id = 'h2'+ index++;

  //maak nieuwe header obv input
  const node = document.getElementById('invoerTekst').value;
  const newNode = document.createTextNode(node);
  
  //tekst toevoegen aan nieuw element
  newElement.appendChild(newNode);
  
  //log en toon
  console.log(newElement);
  document.getElementById('divResult').appendChild(newElement);           
  console.log('2 klik');
}
if (countClicks == 3) {   
  
    //maak nieuw element
    const newElement = document.createElement('h3');
    newElement.id = 'h3'+ index++;
  
    //maak nieuwe header obv input
    const node = document.getElementById('invoerTekst').value;
    const newNode = document.createTextNode(node);
    
    //tekst toevoegen aan nieuw element
    newElement.appendChild(newNode);
    
    //log en toon
    console.log(newElement);
    document.getElementById('divResult').appendChild(newElement);           
    console.log('3 klik');
}
if (countClicks == 4) {   
  
      //maak nieuw element
      const newElement = document.createElement('h4');
      newElement.id = 'h4'+ index++;
    
      //maak nieuwe header obv input
      const node = document.getElementById('invoerTekst').value;
      const newNode = document.createTextNode(node);
      
      //tekst toevoegen aan nieuw element
      newElement.appendChild(newNode);
      
      //log en toon
      console.log(newElement);
      document.getElementById('divResult').appendChild(newElement);           
      console.log('4 klik');
}
if (countClicks == 5) {   
  
        //maak nieuw element
        const newElement = document.createElement('h5');
        newElement.id = 'h5'+ index++;
      
        //maak nieuwe header obv input
        const node = document.getElementById('invoerTekst').value;
        const newNode = document.createTextNode(node);
        
        //tekst toevoegen aan nieuw element
        newElement.appendChild(newNode);
        
        //log en toon
        console.log(newElement);
        document.getElementById('divResult').appendChild(newElement);           
        console.log('5 klik');
}
if (countClicks == 6) {   
  
          //maak nieuw element
          const newElement = document.createElement('h6');
          newElement.id = 'h6'+ index++;
        
          //maak nieuwe header obv input
          const node = document.getElementById('invoerTekst').value;
          const newNode = document.createTextNode(node);
          
          //tekst toevoegen aan nieuw element
          newElement.appendChild(newNode);
          
          //log en toon
          console.log(newElement);
          document.getElementById('divResult').appendChild(newElement);           
          console.log('6 klik');
          countClicks = 0;;

}
}