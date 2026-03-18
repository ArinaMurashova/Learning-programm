import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        var x = new double[]{-1.5, 0, 0.8, 2.2, 3, 0.5, 0.1};
        var y = new ArrayList<Double>();
        
        for (var num : x) {
            if (num >= -1 && num <= 1) {
                y.add(num);
            }
        }
        
        System.out.println(y);
        
        var maxY = y.get(0);
        var maxIndex = 0;
        
        for (var i = 1; i < y.size(); i++) {
            if (y.get(i) > maxY) {
                maxY = y.get(i);
                maxIndex = i;
            }
        }
        
        System.out.println("Макс элемент в y: " + maxY);
        System.out.println("Индекс макс элемента: " + maxIndex);
        
        var sumAfterMax = 0.0;
        
        for (var i = maxIndex + 1; i < y.size(); i++) {
            sumAfterMax += y.get(i);
        }
        
        System.out.println("Сумма элементов после максимального: " + sumAfterMax);
    }
}