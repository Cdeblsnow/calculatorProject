document.addEventListener("DOMContentLoaded", function() {
    operate();
});

function calcSum(a,b) {
    let newSum = a + b;
    return newSum;
}

function calcSubt(a,b) {
    let newSubt = a - b;
    return newSubt;
}

function calcMult(a,b) {
    let newMult = a * b;
    return newMult;
}

function calcDiv(a,b) {
    let newDiv = a / b;
    return newDiv;
}

function operate() {
    let operator = "";
    let numberA = [];
    let numberB = [];
    let displayText= "";
    let answer=0;
    const screenText = document.querySelector("#update");
    const buttonOperator = document.querySelectorAll(".operator");
    const buttonNumber = document.querySelectorAll(".number");
    const calcResult = document.querySelector(".result");
    
        buttonOperator.forEach(button => {
            button.addEventListener("click", () => {
                operator = button.textContent.trim();
                displayText += operator;
                screenText.textContent = displayText;
            });
        });

        buttonNumber.forEach(button => {
            button.addEventListener("click", () => {
                if (operator === ""){
                numberA.push(button.textContent);
                console.log(numberA);
                } else {
                numberB.push(button.textContent);
                console.log(numberB);
                }
                displayText += button.textContent;
                screenText.textContent = displayText;
             })
        });

        if (calcResult ) {
            calcResult.addEventListener("click", () => {
                    numberA = parseFloat(numberA.join(','));
                    console.log(numberA);
                    numberB = parseFloat(numberB.join(','));
                    console.log(numberB);
    
                    if (operator === "+") {
                        answer = calcSum(numberA, numberB);  
                    } else if (operator === "-") {
                        answer = calcSubt(numberA, numberB);
                    } else if (operator === "X") {
                        answer = calcMult(numberA, numberB);
                    } else if (operator === "/") {
                        answer = calcDiv(numberA, numberB);
                    } 
                    screenText.textContent = answer;
                });
        
            }
    
}


