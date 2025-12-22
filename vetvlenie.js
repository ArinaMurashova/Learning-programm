
let x = 3;
let c = 4;
let b = 6;

let z;

if (x > 1)
{
    z = x * Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
}
else if (x < 0)
{
    let minEl = Math.sqrt(b);

    if (minEl > Math.pow(x, 2))
    {
        minEl = Math.pow(x, 2);
    }
    if (minEl > x + c)
    {
        minEl = x + c;
    }

    z = minEl;
}
else
{
    let maxEl = Math.log(b);

    if (maxEl < x + c)
    {
        maxEl = x + c;
    }
    z = maxEl;
}

console.log(z);