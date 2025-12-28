public class Main {
    public static void main(String[] args) {
        double y;
        
        for (double p = 0.1; p <= 1.5; p += 0.1) {
            y = p * Math.exp(-p);
            System.out.println(y);
        }
        
        System.out.println("--------------------------");
        
        double x = 0.1;
        
        while (x <= 1.5) {
            y = x * Math.exp(-x);
            x += 0.1;
            System.out.println(y);
        }
        
        System.out.println("--------------------------");
        
        x = 0.1;
        
        do {
            y = x * Math.exp(-x);
            x += 0.1;
            System.out.println(y);
        } while (x <= 1.5);
    }
}