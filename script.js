// function convertToRoman(num) {
//   	const obj = {
//       0:['M',1000], 
//       1:['D', 500], 
//       2:['C', 100], 
//       3:['L', 50], 
//       4:['X', 10], 
//       5:['V', 5], 
//       6:['I', 1]
//     };

//   //your code here

// }
// // You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// // console.log(convertToRoman(36));




// // do not edit below this line
// module.exports = convertToRoman


function convertToRoman(num) {
    const array = [
 ['M',1000], 
 ['CM',900],
 ['D', 500],
 ['CD',400], 
 ['C', 100], 
 ['XC',90],
 ['L', 50], 
 ['XL',40],
 ['X', 10],
 ['IX',9] ,
 ['V', 5], 
 ['IV',4],
 ['I', 1]

    ];
let result ="";
//your code here
for(let i of array){
    let [symbol , value] = i;

    while(num>=value){
        result = result + symbol;
        num = num - value;

    }
}

return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(798));




// do not edit below this line
module.exports = convertToRoman

