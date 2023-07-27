const word = prompt("Inserisci una parola.")
// console.log(word[0]);
let reverseWord =  "";
for (let i = word.length - 1; i >= 0 ; i--){
    const letter = word[i];
    reverseWord += letter;
    console.log(reverseWord);
    
}
if (word == reverseWord){
    console.log(`La parola e polindroma`);
}else {
    console.log(`La parola non e polindroma`);
}


