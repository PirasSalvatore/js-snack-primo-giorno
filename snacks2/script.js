/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//data user
const wordOne = String(prompt("inserisci la prima parola"))
const wordtwo = String(prompt("inserisci la seconda parola"))

if (isNaN(wordOne) || isNaN(wordtwo)) {
    alert("invalid data")
} else if (wordOne.length > wordtwo.length) {
    console.log(`la parola ${wordOne} è più lunga di ${wordtwo}`);
} else if (wordOne.length < wordtwo.length) {
    console.log(`la parola ${wordtwo} è più lunga di ${wordOne}`);
} else {
    console.log(`le parole ${wordOne} e ${wordtwo} hanno la stessa lunghezza`);
}


/* conditions */
