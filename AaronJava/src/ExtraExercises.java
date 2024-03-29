import java.util.Scanner;

public class ExtraExercises {

    private Scanner scan = new Scanner(System.in);

    public String firstChar(String input) {
       return "First character is: \n" + input.charAt(0);
    }

    public String secondChar(String input) {
        return "Second character is: \n" + input.charAt(1);
    }

    public String lastChar(String input) {
        return "Last character is: \n" + input.charAt(input.length()-1);
    }

    public String secLastChar(String input) {
        return "Second last character is: \n" + input.charAt(input.length()-2);
    }

    public boolean userWantsToContinue(String input) {
        String answer = input.toLowerCase();
        return (answer.contains("y") || answer.contains("yes"));
    }

    public boolean isEven(int num) {
        return (num % 2 == 0);
    }

    public boolean isOdd(int num) {
        return (num % 2 != 0);
    }

    public void coinFlip() {
        int flip = (int) Math.floor(Math.random()*2);
        System.out.println("flipping the coin...");
        if (flip == 0) {
            System.out.println("It's heads!");
        } else if (flip > 0){
            System.out.println("it's tails!");
        }
    }

    public void dndDiceRoll() {
        int i = 0;
        System.out.println("How many dice do you have? ");
        int userDice = scan.nextInt();
        System.out.println("How many sides do they have? ");
        int sides = scan.nextInt();
        do {
            if (i == 0) {
                System.out.println("rolling the first die...");
            } else {
                System.out.println("rolling the next die...");
            }
            int roll = (int) Math.floor(Math.random() * sides);
            System.out.println("You rolled a " + (roll + 1) + "!");
            i++;
        } while (i < userDice);


    }

    public static void main(String[] args) {

        ExtraExercises first = new ExtraExercises();
        Scanner scan = new Scanner(System.in);

        do {
            System.out.println("Enter String: ");
            String input = scan.nextLine();
            System.out.println(first.firstChar(input));
            System.out.println(first.secondChar(input));
            System.out.println(first.lastChar(input));
            System.out.println(first.secLastChar(input));
            System.out.println("continue?: [y/n]");

        } while (first.userWantsToContinue(scan.nextLine()));
        System.out.println(first.isEven(5));
        System.out.println(first.isOdd(9));
        first.coinFlip();
        first.dndDiceRoll();
    }
}
