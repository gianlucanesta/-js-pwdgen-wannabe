// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedo all'utente il suo nome
const userName = prompt('Inserisci il tuo nome:');
console.log(userName);

// Chiedo all'utente il suo cognome
const userLastName = prompt('Inserisci il tuo cognome:');
console.log(userLastName);

// Chiedo all'utente il suo colore preferito
const userFavColor = prompt('Inserisci il tuo colore preferito:');
console.log(userFavColor);

// Concateno le stringhe
const myInsecurePw ='Ciao la tua Password è: ' +  userName + userLastName + userFavColor + '21';
// console.log(myInsecurePw);

// Mando a schermo la password generata
// alert(myInsecurePw);

document.getElementById('password-generated').innerHTML = myInsecurePw;