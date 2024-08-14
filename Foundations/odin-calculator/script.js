function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modulo(a, b) {
    return a % b;
}

function operate(op, a, b) {
    switch (op) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "÷": return divide(a, b);
        case "×": return multiply(a, b);
        case "%": return modulo(a, b);
    }
}
function updateDisplay(content) {
    //checking for invalid operations
    const operators = "%÷×+-=";
    let displayValueArr = displayValue.split("");
    if (operators.includes(displayValueArr[displayValueArr.length - 1]) &&
        operators.includes(content))
        return; //don't put an operator after another operator

    //check if the content passed to the function is an operator 
    //and the expression doesn't have an operator yet
    //if it has then we operate the current expression
    //the edge case operator after an operator is handled before

    if (operators.includes (content)) //an operator, or equal sign
    {

    }
}

const display = document.querySelector(".display"); //reference to the display
let displayValue = display.textContent;
let currOp, currN1, currN2; //operator and numbers for the CURRENT operation
let opExists;

const digitButtons = document.querySelectorAll(".calcButtons button");
digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", (e) => {
        updateDisplay(e.target.textContent);
    });
    digitButton.addEventListener("mouseover", (e) => {
        e.target.style.opacity = 0.7;
    });
    digitButton.addEventListener("mouseleave", (e) => {
        e.target.style.opacity = 1;
    });
});
