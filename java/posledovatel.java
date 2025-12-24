import java.util.Scanner;

public class posledovatel {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in, "UTF-8");
        System.out.print("Введите x:");
        double x = scanner.nextDouble();

        System.out.print("Введите y:");
        double y = scanner.nextDouble();

        double z = (x - y)/ Math.sqrt(x = y) + x * Math.pow(y, 2)/Math.sin(Math.pow(x, 2)) * Math.pow(Math.cos(y), 2);   
        System.out.println(z);
        scanner.close();
        }
}