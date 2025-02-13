/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

//data user

const choiseOne = prompt("inserisci il primo numero")
const choiseTwo = prompt("inserisci il secondo numero")


/* conditions */
const IsOneBigest = choiseOne > choiseTwo
const IsOneEqualsTwo = choiseOne === choiseTwo

if (IsOneBigest) {
    console.log(choiseOne)
} else if (IsOneEqualsTwo) {
    console.log("i numeri sono uguale" + choiseOne);
} else {
    console.log(choiseTwo)
}