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

// tik tac toe

// private static void printBoard(char[][] board) {
//     for (char[] row : board) {
//         System.out.println("+---+---+---+");
//
//         System.out.print("| ");
//
//         for (char n : row) {
//             System.out.print(n + " | ");
//         }
//
//         System.out.println();
//     }
//     System.out.println("+---+---+---+");
//
// }
// public static void main(String[] args) {

// char[][] tictactoe = {
// {' ',' ',' '},
// {' ',' ',' '},
// {' ',' ',' '}
// };
//
// tictactoe[2][1] = 'X';
//
// tictactoe[2][2] = 'O';
//
// tictactoe[1][0] = 'X';
//
// tictactoe[0][2] = 'O';
//
// tictactoe[1][2] = 'X';
//
// tictactoe[1][1] = 'O';
//
// tictactoe[0][0] = 'X';
//
// tictactoe[2][0] = 'O';
//
// printBoard(tictactoe);
// }
// }

//
// Grades Bonus//

// Method:
//     public ArrayList<Integer> getGrades() {
//     return this.grades;
// }
//
//
// Shows list of all grades:
//     System.out.println("would you like to see a list of all the students Grades?");
// boolean userInput = input.yesNo();
//
// if (userInput = true) {
//
//     for (Student student : students.values()) {
//         System.out.println("\n Student name is: " + student.getName());
//
//         System.out.println("their list of Grades is: ");
//         for (Integer grade : student.getGrades()) {
//             System.out.println(grade);
//         }
//     }
// } else {
//     System.out.println("no problem");
// }
//
// Get grade average for all:
//
// ArrayList<Double> Averagesum=new ArrayList<>();
// for (Student student : students.values()) {
//     Averagesum.add( student.getGradeAverage());
// }
//
// Gets grade of student plus average
//
// for (Student student : students.values()) {
//     if (answer.equals(student.getName())) {
//         System.out.println("this is their grade average: \n" + student.getGradeAverage());
//         System.out.println("List of this Students Grades:");
//         for (Integer grade : student.getGrades()) {
//             System.out.println(grade);
//         }
//     }
// }
//
// Gets total class average
//
// ArrayList<Double> Averagesum=new ArrayList<>();
//
// double bucket=0;
// for (Student student : students.values()) {
//     bucket +=student.getGradeAverage();
//     Averagesum.add( student.getGradeAverage());
// }
// System.out.println("the total average of the class:"+bucket/Averagesum.size());
//

