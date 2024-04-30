'use strict'
const page = {
    panel : document.querySelector('.panel'),
    input : {
        num1 : document.querySelector('#number1'),
        num2 : document.querySelector('#number2')
    },
    lastOperation : null
};

function clearForms(){
    page.input.num1.value = "";
    page.input.num2.value = ""
    page.panel.innerText = 0
};

function actionEvent(event) {
    const action = event.target.innerText.trim(); 
    const num1Value = page.input.num1.value.trim();
    const num2Value = page.input.num2.value.trim();

    if (action === "C") {
        clearForms();
        return;
    }

    if (num1Value === "" || num2Value === "" ) {
        page.panel.innerText = "Введите 2 числа!";
        return;
    }

    switch (action) {
        case "+":
        case "-":
        case "*":
        case "/":
            page.lastOperation = action;
            break;
        case "=":
            if (page.lastOperation) {
                const result = calculate(page.lastOperation, Number(num1Value), Number(num2Value));
                page.panel.innerText = result;
                page.lastOperation = null;
            }
            break;
    }
}


function calculate (op,num1,num2) {
    if (op === '/' && num2 === 0){
        return "Делить на 0 нельзя!"
    };

    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return 0;
    }

}