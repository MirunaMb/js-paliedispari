// variabile per user
const userNumber = parseInt(prompt("Inserici un numero da 1 a 5"))

// abbiamo i nostri parametri
 let min = 1;
 let max = 5;

//  // Funzione per generare un numero casuale compreso tra min (incluso) e max (incluso)
function generateRandomNumber (min,max){
    return Math.floor(Math.random() *(max - min + 1) + min)
}

// dichiariamo la variabile per pc
pcNumber = generateRandomNumber (min,max);
console.log(pcNumber);

let somm = "";
somm = userNumber + pcNumber ;
console.log(somm);

// controliamo se la nostra somma e pari oppure dispari
if (somm % 2 == 0){
    console.log(`La somma e pari: ${somm}`);
}else {
    console.log(`La somma e dispari: ${somm}`);
}