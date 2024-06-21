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
    let numberA = 0;
    let numberB = 0;
    let displayText= "";
    let answer=0;
    const screenText = document.querySelector("#update");
    const buttonOperator = document.querySelectorAll(".operator");
    const buttonNumber = document.querySelectorAll(".number");
    const calcResult = document.querySelector(".result");
    
        buttonOperator.forEach(button => {
            button.addEventListener("click", () => {
                operator = button.textContent;
                displayText += operator;
                screenText.textContent = displayText;
            });
        });

        buttonNumber.forEach(button => {
            button.addEventListener("click", () => {
                if (operator === ""){
                numberA = Number(button.textContent);
                
                
                } else {
                numberB = Number(button.textContent);
                
                
                }
                
                displayText += button.textContent;
                screenText.textContent = displayText;
                

             })
        });

        
        if (calcResult) {
            calcResult.addEventListener("click", () => {
                
                    if (operator === "+") {
                        console.log(numberA);
                    console.log(numberB);
                        answer = calcSum(numberA, numberB);
                        
                    } else if (operator === "-") {
                        answer = calcSubt(numberA, numberB);
                    } else if (operator === "X") {
                        answer = calcMult(numberA, numberB);
                    } else if (operator === "/") {
                        answer = calcDiv(numberA, numberB);
                    } else {
                        console.log(" its 0 ")
                    }
                    screenText.textContent = answer;
                    console.log(numberA);
                    console.log(numberB);
                    console.log(answer);

                    
                
                });
        
            }
    
}


