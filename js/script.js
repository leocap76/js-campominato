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


function numberGenerator() {
  return Math.floor(Math.random()*100 + 1);
}
//funzione per vedere se il numero è incluso gia nell'array
function includesNumber(arrayBombe, element){
  var found = false;
  for(var i = 0; i < arrayBombe.length; i++){
    if(element == arrayBombe[i]){
      found = true;
    }
  }
  return found;
}
//-----------------------------------------------

var arrayBombe = [];
var maxAttempts = 100 - 16;
//tentativi
var attemptsArray = [];


while (arrayBombe.length < 16) {
  var randomNumber = numberGenerator();

  if (arrayBombe.includes(randomNumber) == false) {
  arrayBombe.push(randomNumber);
  }
}
console.log(arrayBombe);

//gioco

//ciclo for
// for(var i = 0; i < maxAttempts; i++){
//   var userNumber = parseInt(prompt("inserisci un numero da 1 a 100"));
//   attemptsArray.push(userNumber);
// }

//while
var last = false;
while(attemptsArray.length < maxAttempts && last == false){
  var userNumber = parseInt(prompt("inserisci un numero da 1 a 100"));

  var checkAttempts = includesNumber(attemptsArray, userNumber);

  var gameCheck = includesNumber(arrayBombe, userNumber);

  if(gameCheck == true){
    alert("hai perso");
    last = true;
  }else if(checkAttempts == false){
    attemptsArray.push(userNumber);
    console.log(attemptsArray);
  }
}
alert("punteggio:" + attemptsArray.length);
console.log(attemptsArray);
