/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const reapet = 10;
let result = 0;

for (let i = 0; i < reapet; i++) {
    const number = i + 1;
    result += Number(prompt(`inserire il ${number}° numero:`))
}

console.log(`la somma dei numeri inseriti è ${result}`);
