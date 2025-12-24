#include <iostream>
#include <iostream>
using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");

    int x = 3;
    int c = 4;
    int b = 6;

    int z;

    if (x > 1)
    {
        z = x * sqrt(pow(b, 2)) + pow(c, 2);
    }

    else if (x < 0)
    {
        int minEl = sqrt(b);

        if (minEl > pow(x, 2))
        {
            minEl = pow(x, 2);
        }
        if (minEl > x + c)
        {
            minEl = x + c;
        }

        z = minEl;
    }
    else
    {
        int maxEl = log(b);

        if (maxEl < x + c)
        {
            maxEl = x + c;
        }
        z = maxEl;
    }

    cout << z;
}