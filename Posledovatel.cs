using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Posledovatel.cs
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите x = ");
            double x = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введите y = ");
            double y = Convert.ToDouble(Console.ReadLine());

            double z = (x - y) / Math.Sqrt(x + y) + x * Math.Pow(y, 2) / Math.Sin(Math.Pow(x, 2)) * Math.Pow(Math.Cos(y), 2);

            Console.WriteLine(z);

            Console.ReadLine();
        }
    }
}
