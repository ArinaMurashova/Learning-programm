function ploshadi(L) {
    const pi = 3.14;
    let R = L / (2 * pi);
    let S = pi * Math.pow(R, 2);
    return S;
}

function main() {
    let L1, L2, L3;
    let S1, S2, S3;

    console.log("Введите L1:");

    L1 = parseFloat(prompt("Введите L1:"));
    S1 = ploshadi(L1);
    console.log("Площадь первого круга: " + S1 + "\n");

    console.log("Введите L2:");
    L2 = parseFloat(prompt("Введите L2:"));
    S2 = ploshadi(L2);
    console.log("Площадь второго круга: " + S2 + "\n");

    console.log("Введите L3:");
    L3 = parseFloat(prompt("Введите L3:"));
    S3 = ploshadi(L3);
    console.log("Площадь третьего круга: " + S3 + "\n");

    alert("Программа завершена. Нажмите OK для выхода.");
}

main();