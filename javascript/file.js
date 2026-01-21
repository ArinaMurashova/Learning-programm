let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let key = true;

btn.addEventListener('click', () => {
    if (key == true) {
        text.innerHTML = "Задача";
        key = false;
    }

    else if (key == false)
    {
        text.innerHTML = "Решение";
        key = true;
    }
});