public class vetvlenie {
    public static void main(String[] args)
    {
        double x = 3;
        double c = 4;
        double b = 6;

        double z;

        if (x > 1)
        {
            z = x * Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
        }
        else if (x < 0)
        {
            double minEl = Math.sqrt(b);

            if (minEl > Math.pow(x, 2))
            {
                minEl = Math.pow(x, 2);
            }
            if (minEl > x + c)
            {
                minEl = x + c;
            }

            z = minEl;
        }
        else
        {
            double maxEl = Math.log(b);

            if (maxEl < x + c)
            {
                maxEl = x + c;
            }

            z = maxEl;
        }

        System.out.println(z);
    }
}
