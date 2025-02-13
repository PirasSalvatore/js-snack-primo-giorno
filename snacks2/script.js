/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//data user
const wordOne = prompt("inserisci la prima parola")
const wordtwo = prompt("inserisci la seconda parola")

/* conditions */

/* if (isNaN(wordOne) || isNaN(wordtwo)) {
    alert("invalid data")
} else */
if (wordOne.length > wordtwo.length) {
    console.log(`la parola ${wordtwo} è più corta di ${wordOne}`);
} else if (wordOne.length < wordtwo.length) {
    console.log(`la parola ${wordOne} è più corta di ${wordtwo}`);
} else {
    console.log(`le parole ${wordOne} e ${wordtwo} hanno la stessa lunghezza`);
}


