'use strict'
const page = {
    panel : document.querySelector('.panel'),
    input : {
        num1 : document.querySelector('#number1'),
        num2 : document.querySelector('#number2')
    }
}

function displayResult() {
    const num1 = page.input.num1.value
    const num2 = page.input.num2.value
    if(!num1 || !num2){
        alert("тест")
    }
    
    
}
