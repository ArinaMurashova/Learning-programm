using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace teorver_f1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void TextBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void Button1_Click(object sender, EventArgs e)
        {
            double m = Convert.ToDouble(textBox1.Text);

            double n = Convert.ToDouble(textBox2.Text);

            double p = m / n;

            textBox3.Text = p.ToString();

        }

      

        private void Button2_Click(object sender, EventArgs e)
        {
            double k = Convert.ToDouble(textBox4.Text);

            double n = Convert.ToDouble(textBox5.Text);

            double c = Factorial(n) / (Factorial(k) * Factorial(n - k));

            textBox6.Text = c.ToString();
        }

        private double Factorial(double k)
        {
            if (k < 0)
                return 0;
            if (k == 0 || k == 1)
                return 1;

            double result = 1;
            for (int i = 2; i <= k; i++)
            {
                result *= i;
            }
            return result;
        }


        private void Button3_Click(object sender, EventArgs e)
        {
            double k = Convert.ToDouble(textBox7.Text);

            double n = Convert.ToDouble(textBox8.Text);

            double a = Factorial(n) / Factorial(n - k);

            textBox9.Text = a.ToString();

        }

        private void Button4_Click(object sender, EventArgs e)
        {
            double n = Convert.ToDouble(textBox10.Text);

            double p = Factorial(n);

            textBox11.Text = p.ToString();
        }

        private void Button5_Click(object sender, EventArgs e)
        {
            double n = Convert.ToDouble(textBox12.Text);

            double k = Convert.ToDouble(textBox13.Text);

            double p = Convert.ToDouble(textBox14.Text);

            double q = 1 - p;

            double c = Factorial(n) / Factorial(k) * Factorial(n - k);

            double result = c * Math.Pow(p, k) * Math.Pow(q, n - k);

            textBox15.Text = result.ToString();
        }
    }
}
