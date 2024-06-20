

function calcSum(a,b) {
    let newSum = a + b;
    return newSum
}

function calcSubt(a,b) {
    let newSubt = a - b;
    return newSubt
}

function calcMult(a,b) {
    let newMult = a * b;
    return newMult
}

function calcDiv(a,b) {
    let newDiv = a / b;
    return newDiv
}

function operate() {
    let operator = null;
    let numberA = null;
    let numberB = null;
    let displayText= "";
    const screenText = document.querySelector("#update");
    const buttonOperator = document.querySelectorAll(".operator");
    const buttonNumber = document.querySelectorAll(".number");
    
        buttonOperator.forEach(button => {
            button.addEventListener("click", () => {
                operator = button.getAttribute("data-value");
                screenText.textContent = displayText + operator;
            });
        });

        buttonNumber.forEach(button => {
            button.addEventListener("click", () => {
                if (!operator){
                numberA = parseFloat(button.textContent);
                
                } else {
                numberB = parseFloat(button.textContent);
                
                }
                displayText += button.textContent;
                screenText.textContent = displayText;

             })
        });

    
    
        

    
}

operate();
