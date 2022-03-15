// An example of a square matrix array "arr" 5x5.
let arr =[
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5] 
];
/*This function will calculate: the left-to-right diagonal "firstSum", the right to left diagonal "secondSum" 
and their absolute difference "result" .It takes as parameter the square matrix. */
function diagonalDifference(arr) {
    let firstSum = 0;
    let secondSum = 0;
 
    for (let i = 0; i < arr.length; i++) {
        firstSum+=arr[i][i];
    }
    for (let j = 0; j < arr.length; j++) {
        let k = j+1;
        secondSum+=arr[j][arr.length-k];
    }
    let result = Math.abs(firstSum-secondSum);
     
    return result;
 }
 console.log(diagonalDifference(arr));

