/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const odd = []
const even = []

const repeat = 6

for (i = 0; i < repeat; i++) {
    const userNumber = Number(prompt("inserisci un numero"))

    if (isNaN(userNumber)) {
        alert("invalid data")
        i--
    } else if (userNumber % 2 === 0) {
        even.push(userNumber)
    } else {
        odd.push(userNumber)
    }
}

console.log(`array numeri dispari ${odd}`);
console.log(`array numeri pari ${even}`);


