// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNumber = Math.floor(Math.random()*6)+1;
const botNumber = Math.floor(Math.random()*6)+1;

let response = `Tu hai estratto il numero ${userNumber}. Il computer ha estratto ${botNumber}. `;

if(userNumber>botNumber) {

    response += "HAI VINTO! :D";
    

} else if (userNumber<botNumber) {

    response += "HA VINTO IL COMPUTER :(";
    

} else {

    response += "È INCREDIBILE! UN PARI!!!";
    

}

alert(response);