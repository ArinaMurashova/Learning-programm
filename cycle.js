let y = 0;

for (let p = 0.1; p <= 1.5; p += 0.1) {
    y = p * Math.exp(-p);
    console.log(y);
}

console.log("--------------------------");

let x = 0.1;

while (x <= 1.5) {
    y = x * Math.exp(-x);
    x += 0.1;
    console.log(y);
}

console.log("--------------------------");

x = 0.1;

do {
    y = x * Math.exp(-x);
    x += 0.1;
    console.log(y);
} while (x <= 1.5);