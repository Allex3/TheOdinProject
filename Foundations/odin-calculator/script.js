function add(a, b, op) {

}
function subtract(a, b, op) {
    
}
function multiply(a, b, op) {
    
}
function divide(a, b, op) {
    
}

function operate(op, a, b) {

}
function updateDisplay(content) {
    display.textContent += content;
    displayValue = display.textContent; //update the displayValue
}

const display = document.querySelector(".display"); //reference to the display
let displayValue = display.textContent;

const digitButtons = document.querySelectorAll(".numbers");
digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", (e) => {
        updateDisplay(e.target.textContent);
    })
    digitButton.addEventListener("mouseover", (e) => {
        e.target.style.opacity = 0.7;
    })
    digitButton.addEventListener("mouseleave", (e) => {
        e.target.style.opacity = 1;
    })
})
