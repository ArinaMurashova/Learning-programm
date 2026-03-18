#include <iostream>
#include <vector>
#include <clocale>
using namespace std;

int main() {
    setlocale(LC_ALL, "Russian");
    
    double x[] = { -1.5, 0, 0.8, 2.2, 3, 0.5, 0.1 };
    vector<double> y;

    for (int i = 0; i < 7; i++) {
        if (x[i] >= -1 && x[i] <= 1) {
            y.push_back(x[i]);
        }
    }

    cout << "y = [";
    for (int i = 0; i < y.size(); i++) {
        cout << y[i];
        if (i < y.size() - 1) cout << ", ";
    }
    cout << "]" << endl;

    double maxY = y[0];
    int maxIndex = 0;

    for (int i = 1; i < y.size(); i++) {
        if (y[i] > maxY) {
            maxY = y[i];
            maxIndex = i;
        }
    }

    cout << "Макс элемент в y: " << maxY << endl;
    cout << "Индекс макс элемента: " << maxIndex << endl;

    double sumAfterMax = 0;

    for (int i = maxIndex + 1; i < y.size(); i++) {
        sumAfterMax += y[i];
    }

    cout << "Сумма элементов после максимального: " << sumAfterMax << endl;

    return 0;
}