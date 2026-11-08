const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    // console.log(letter, 'index', i);
    if (letter === 'e') {
        resultArray.push(letter);
    }
    if (letter === 'u') {
        resultArray.push(letter);
    }
    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];
        // console.log(vowel, j);
        if (letter === vowel) {
            // console.log(letter, i);
            resultArray.push(vowel);
        }
    }
}
console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString); // UUEEIEEAUUEE

