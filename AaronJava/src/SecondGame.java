import java.util.Scanner;

public class SecondGame {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int imax = 0;
        int max = 0;
        // game loop
        while (true) {
            for (int i = 0; i < 8; i++) {
                int mountainH = in.nextInt(); // represents the height of one mountain.
                if (max < mountainH) {
                    max = mountainH;
                    imax = i;
                }
                if(imax < max) {
                    System.out.println(i);
                } else {
                    System.out.println(imax);
                }
            }

            // Write an action using System.out.println()
            // To debug: System.err.println("Debug messages...");

            System.out.println("4"); // The index of the mountain to fire on.
        }
    }
}
