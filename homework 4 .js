// //
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9],
//   [10, 11, 12, 13, 14]
// ];

// function largestNum (matrix) {
//     let sum = -Infinity;
//     let index1 = -1;

//     const sumOfArrayElements = matrix.forEach((subArray, index) => {
//       let reduced = subArray.reduce((sum, current) => sum + current, 0)
//       if (reduced > sum) {
//         sum = reduced;
//         index1 = index;
//       }
//     });

//     return index1;
// }

// console.log(largestNum(matrix));

// . Տրված է թվերի մատրիցա (nxm), դրս բերել բոլոր տողերի մինիմմներից բաղկացած զանգվածը:

// function getMinNumbers(matrix) {
//   const minNumber = matrix.map((subArray) => {
//     let minNum = Infinity;
//     subArray.forEach((number) => {
//       if (number < minNum) {
//         minNum = number;
//       }
//     });
//     return minNum;
//   });
//   return minNumber
// }
// console.log (getMinNumbers(matrix));

// Տրված է տողերի մատրիցա (nxm) եւ բառ: Հայտնաբերել արդյոք բառը գոյթյն ունի մատրիցայմ թե ոչ:
// Իմ հասկացած տարբերակը

// let wordMatrix = [
//   ["d", "a", "t"],
//   ["p", "o", "g"],
//   ["l", "i", "g"]
// ];
// function checkIfWordExists(wordMatrix, word) {
//   for (let i = 0; i < wordMatrix.length; i++) {
//     let horizontal = wordMatrix[i].join("");
//     let vertical = "";
//     let diagonal = "";

//     for (let j = 0; j < wordMatrix[i].length; j++) {
//       vertical += wordMatrix[j][i];
//       diagonal += wordMatrix[j][j + i];
//     }
//     console.log(diagonal);
//     if (horizontal || vertical || diagonal) {
//       return "the word exists";
//     } else {
//       return "the word does not exist";
//     }
//   }
// }
// console.log(checkIfWordExists(wordMatrix, "dog"));

// Գոքորի հասկացած տարբերակը

// const mixedMatrix = [
//   ["mercedes", "bmw"],
//   ["mazda", "toyota", "ferari"],
//   ["niva"]
// ];
// const trueCar = "mazda";

// function checkIfWordExists(array, word) {
//   let exists = array.some(subArray => subArray.includes(word));
//   return exists ? "The word exists" : "The word does not exist"
// }
// console.log(checkIfWordExists(mixedMatrix, trueCar));


//return array matrix
let evenMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

];

function turnEvenMatrix (evenMatrix) {
    const turned = new Array (evenMatrix.length);
    
    for (let i = 0; i < evenMatrix.length; i++) {
        turned[i] = [];
        
        for (let j = 0; j < evenMatrix[i].length; j++){
        turned[i].push(evenMatrix[j][i]);
        
     }
     
     
}
return turned
}

console.log(turnEvenMatrix(evenMatrix))