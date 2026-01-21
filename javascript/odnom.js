let x = [-1.5, 0, 0.8, 2.2, 3, 0.5, 0.1];
let y = [];
for (let i = 0; i < x.length; i++) {
    if (x[i] >= -1 && x[i] <=1) {
        y.push(x[i]);
    }
}
console.log(y);

let maxY = y[0];
let maxIndex = 0;

for (let i = 1; i < y.length; i++) {
    if (y[i] > maxY) {
        maxY = y[i];
        maxIndex = i;
    }
}

console.log("Макс элемент в y: ", maxY);
console.log("Индекс макс элемента: ", maxIndex);

let sumAfterMax = 0;

for (let i = maxIndex + 1; i < y.length; i++) {
    sumAfterMax += y[i];
}

console.log("Сумма элементов после максимального: ", sumAfterMax);