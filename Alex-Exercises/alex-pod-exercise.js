// Create a function that returns true if two arrays contain identical values, and false otherwise.
//
// checkEquals([1, 2], [1, 3]) ➞ false
//
// checkEquals([1, 2], [1, 2]) ➞ true
//
// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
//
// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

// https://edabit.com/challenge/3jZyJTfsXTXXwAQkA


function checkEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;

    }
    else {
        for (var i = 0; i <= arr1.length-1 ; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }

        }
        return true;
    }

}


console.log(checkEquals([1,2,3],[1,2,3]))
//
// function checkEquals(arr1, arr2) {
//     return arr1.toString() == arr2.toString();
// }


// Create a function that returns true if an asterisk * is inside a box.
// https://edabit.com/challenge/CKEAH6cs5Tt7aKXKv
// inBox([
//     "###",
//     "#*#",
//     "###"
// ]) ➞ true
//
// inBox([
//     "####",
//     "#* #",
//     "#  #",
//     "####"
// ]) ➞ true
//
// inBox([
//     "####",
//     "#  #",
//     "#  #",
//     "####"
// ]) ➞ false
//
// inBox([
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
// ]) ➞ false


//
const box=(arr)=>{
        for (let i = 0; i <= arr.length-1 ; i++){

            if(arr[i].includes("*")){
                return true;
            }

        }
        return false;
};

// function box(arr) {
//     return arr.join().includes("*");
// }


console.log(box([
    "####",
    "# #",
    "#  #",
    "####"
]));

// Bonuse Java Exercise from java II

// multiply loop

//
// public static double multiply(double num, double num2) {
//     double result = 0.0D;
//
//     for(int i = 0; (double)i < num2; ++i) {
//         result += num;
//     }
//
//     return result;
// }





