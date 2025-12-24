#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");

	double x;
	double y;
	double z;
	cout << "Введите x\n";
	cin >> x;

	cout << "Введите y\n";
	cin >> y;

	z = (x - y) / sqrt(x + y) + x * pow(y, 2) / sin(pow(x, 2)) * pow(cos(y), 2);
	cout << z;
	system("pause");
}
