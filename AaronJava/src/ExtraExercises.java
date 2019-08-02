import java.util.Scanner;

public class ExtraExercises {


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
        return "Last character is: \n" + input.charAt(input.length()-2);
    }

    public boolean userWantsToContinue(String input) {
        String answer = input.toLowerCase();
        return (answer.contains("y") || answer.contains("yes"));
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
    }
}
