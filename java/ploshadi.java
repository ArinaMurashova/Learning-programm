import java.util.Scanner;

public class CircleArea {
    
    public static double ploshadi(double L) {
        final double pi = 3.14;
        double R = L / (2 * pi);
        double S = pi * Math.pow(R, 2);
        return S;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        double L1, L2, L3;
        double S1, S2, S3;
        
        System.out.println("Введите L1:");
        L1 = scanner.nextDouble();
        S1 = ploshadi(L1);
        System.out.println("Площадь первого круга: " + S1);
        System.out.println();
        
        System.out.println("Введите L2:");
        L2 = scanner.nextDouble();
        S2 = ploshadi(L2);
        System.out.println("Площадь второго круга: " + S2);
        System.out.println();
        
        System.out.println("Введите L3:");
        L3 = scanner.nextDouble();
        S3 = ploshadi(L3);
        System.out.println("Площадь третьего круга: " + S3);
        System.out.println();
        
        scanner.close();
    }
}