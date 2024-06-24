// Variables
let firstName = prompt("Inserisci il tuo nome");
console.log(firstName)
let lastName = prompt("Inserisci il tuo cognome");
console.log(lastName)
let favoriteColor = prompt("Inserisci il tuo colore preferito");
console.log(favoriteColor)
let allAnswers = `${firstName}${lastName}${favoriteColor}23`;
console.log(allAnswers)

// allAnswers assignment to #traits
document.getElementById("traits").innerHTML = allAnswers;