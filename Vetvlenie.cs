using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vetvlenie.cs
{
    class Program
    {
        static void Main(string[] args)
        {
            double x = 3;
            double c = 4;
            double b = 6;

            double z;

            if (x > 1)
            {
                z = x * Math.Sqrt(Math.Pow(b, 2) + Math.Pow(c, 2));
            }
            else if (x < 0)
            {
                double minEl = Math.Sqrt(b);

                if (minEl > Math.Pow(x, 2))
                {
                    minEl = Math.Pow(x, 2);
                }
                if (minEl > x + c)
                {
                    minEl = x + c;
                }

                z = minEl;
            }
            else
            {
                double maxEl = Math.Log(b);

                if (maxEl < x + c)
                {
                    maxEl = x + c;
                }
                z = maxEl;
            }

            Console.WriteLine(z);
        }
    }
}
