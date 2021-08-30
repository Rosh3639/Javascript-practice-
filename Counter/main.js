//  Set Initial count
let count = 0;

// Select value and buttons 
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

// Accessing each button i.e. decrease, reset, increase using forEach loop
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'yellow';
        }
        if (count < 0) {
            value.style.color = 'blue';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
});