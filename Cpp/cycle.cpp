#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double y;
    
    for (double p = 0.1; p <= 1.5; p += 0.1) {
        y = p * exp(-p);
        cout << y << endl;
    }
    
    cout << "--------------------------" << endl;
    
    double x = 0.1;
    
    while (x <= 1.5) {
        y = x * exp(-x);
        x += 0.1;
        cout << y << endl;
    }
    
    cout << "--------------------------" << endl;
    
    x = 0.1;
    
    do {
        y = x * exp(-x);
        x += 0.1;
        cout << y << endl;
    } while (x <= 1.5);
    
    return 0;
}