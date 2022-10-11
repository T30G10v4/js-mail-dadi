// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const users = ["ab@cd.it","cd@ab.com","ad@bc.net","ac@bd.biz"];

const mail = prompt("Inserisci la tua e-mail:");

const isUserFound = false;

for(let i = 0; i<users.length; i++) {

    const singleUser = users[i];

    if(mail === singleUser) {

        alert("Utente trovato. Accesso in corso...");
        isUserFound = true;

    }


}

if(!isUserFound) {

    alert("Utente non trovato. Riprovare con un'altra e-mail.")

}
