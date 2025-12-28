#include <iostream>
#include <cmath>
using namespace std;

double ploshadi(double L);

int main()
{
    setlocale(LC_ALL, "Russian");

    double L1, L2, L3;
    double S1, S2, S3;

    cout << "Введите L1:" << endl;
    cin >> L1;
    S1 = ploshadi(L1);
    cout << "Площадь первого круга: " << S1 << endl << endl;

    cout << "Введите L2:" << endl;
    cin >> L2;
    S2 = ploshadi(L2);
    cout << "Площадь второго круга: " << S2 << endl << endl;

    cout << "Введите L3:" << endl;
    cin >> L3;
    S3 = ploshadi(L3);
    cout << "Площадь третьего круга: " << S3 << endl << endl;

    system("pause");
    return 0;
}
double ploshadi(double L)
{
    const double pi = 3.14;
    double R = L / (2 * pi);
    double S = pi * pow(R, 2);
    return S;
}