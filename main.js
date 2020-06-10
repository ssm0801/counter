var count = document.querySelector('.count');

var color = (number) => {
    if (number < 0) {
        count.style.color = "red";
    } else if (number == 0) {
        count.style.color = "#333333";
    } else if (number > 0) {
        count.style.color = "green";
    }
}

document.querySelector('.low').addEventListener('click', function decrease() {
    var number = parseInt(count.textContent);
    number -= 1;
    count.innerHTML = number;
    color(number);
})

document.querySelector('.add').addEventListener('click', function increase() {
    var number = parseInt(count.textContent);
    number += 1;
    count.innerHTML = number;
    color(number);
})
