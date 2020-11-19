// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16)
//  volte di inserire un numero alla volta,
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati,
//  la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
//  o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l’utente ha inserito un numero consentito.



// -1 creare funzione che genera numero casuale da 1 a 100
// -2 con un ciclo while riempi un array di 16 numeri
// -3 far si che i numeri siano unici

var n = numberGenerator();

function numberGenerator() {
  return Math.floor(Math.random()*100 + 1);
}

//-----------------------------------------------

var arrayBombe = [];


i = 1;
while (i <= 16) {
  var randomNumber = numberGenerator();
  i++;
  arrayBombe.push(randomNumber);
}
console.log(arrayBombe);
