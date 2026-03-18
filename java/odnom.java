import java.util.Arrays;

public class odnom {
    public static void main(String[] args) {
        double[] x = {-1.5, 0, 0.8, 2.2, 3, 0.5, 0.1};
        double[] temp = new double[x.length];
        int count = 0;
        
        // Фильтрация элементов
        for (double num : x) {
            if (num >= -1 && num <= 1) {
                temp[count++] = num;
            }
        }
        
        // Создание массива нужного размера
        double[] y = Arrays.copyOf(temp, count);
        
        System.out.println(Arrays.toString(y));
        
        // Остальной код аналогичен, но с использованием y[i] вместо y.get(i)
        double maxY = y[0];
        int maxIndex = 0;
        
        for (int i = 1; i < y.length; i++) {
            if (y[i] > maxY) {
                maxY = y[i];
                maxIndex = i;
            }
        }
        
        System.out.println("Макс элемент в y: " + maxY);
        System.out.println("Индекс макс элемента: " + maxIndex);
        
        double sumAfterMax = 0;
        
        for (int i = maxIndex + 1; i < y.length; i++) {
            sumAfterMax += y[i];
        }
        
        System.out.println("Сумма элементов после максимального: " + sumAfterMax);
    }
}
