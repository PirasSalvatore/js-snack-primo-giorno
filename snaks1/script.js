/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

//data user

const choiseOne = prompt("inserisci il primo numero")
const choiseTwo = prompt("inserisci il secondo numero")


/* conditions */
let IsOneBig = choiseOne > choiseTwo

if (IsOneBig) {
    console.log(choiseOne)
} else {
    console.log(choiseTwo)
}