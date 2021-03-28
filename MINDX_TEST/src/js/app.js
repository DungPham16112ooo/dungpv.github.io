// let n = prompt('');
// let n1 = Number(n);
// let inputNumber = prompt('');
// let inputNum = Number(inputNumber);
// let OppositeNum
// function findOppositeNumber(n, inputNumber){
//     if(inputNumber<=(n/2) - 1)
//          return OppositeNum = inputNumber + n/2;
//     else{
//         return OppositeNum = inputNumber - n/2;
//     }
// }

// findOppositeNumber(n1, inputNum)
// console.log (OppositeNum)

// A.2
let string1 = prompt('');

let string2 = prompt('');
let string3 = [];

for(let i =0; i<string1.length-1; i++){
    string3.push(string1[i]);
    for(let j = 0; j<string2.length-1; j++){
    string3.push(string2[j])
    }
}
console.log(string3)