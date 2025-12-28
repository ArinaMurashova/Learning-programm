using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class cycle
    {
        static void Main(string[] args)
        {
            double y;

            for (double p = 0.1; p <= 1.5; p += 0.1)
            {
                y = p * Math.Exp(-p);

                Console.WriteLine(y);
            }

            Console.WriteLine("////////////////////////");

            double x = 0.1;

            while (x <= 1.5)
            {
                y = x * Math.Exp(-x);
                x += 0.1;
                Console.WriteLine(y);
            }
            Console.WriteLine("\\\\\\\\\\\\\\\\\\\\\\");
            x = 0.1;

            do
            {
                y = x * Math.Exp(-x);
                x += 0.1;

                Console.WriteLine(y);
            }
            while (x <= 1.5);
        }
    }
}