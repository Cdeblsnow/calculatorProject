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
    let numberA = "";
    let numberB = "";
    let displayText= "";
    let answer=0;
    const screenText = document.querySelector("#update");
    const buttonOperator = document.querySelectorAll(".operator");
    const buttonNumber = document.querySelectorAll(".number");
    const calcResult = document.querySelector(".result");
    calcResult.addEventListener("click", calculateResult);
    const singleDelete = document.querySelector(".delete");
    const fullDelete = document.querySelector(".fullDelete");
    
        buttonOperator.forEach(button => {
            button.addEventListener("click", () => { 
                if (numberA !== "" && numberB !== ""){
                    answer = calculateResult( numberA, numberB);
                    if (!isNaN(answer)) {
                        numberA = answer.toString();
                        numberB = ""; 
                        displayText = numberA;
                        displayText += operator;
                        screenText.textContent = displayText;
                    }
                }
                operator = button.textContent.trim();
                displayText += operator;
                screenText.textContent = displayText;
            });
        });

        buttonNumber.forEach(button => {
            button.addEventListener("click", () => {
                if (operator === ""){
                numberA += button.textContent.trim();
                } else{
                numberB += button.textContent.trim();
                }
                displayText += button.textContent.trim();
                screenText.textContent = displayText;    
             })
        });

            function calculateResult() {
                numberA = Number(numberA);
                numberB = Number(numberB);
                    if (operator === "+") {
                        answer = calcSum(numberA, numberB);  
                    } else if (operator === "-") {
                        answer = calcSubt(numberA, numberB);
                    } else if (operator === "X") {
                        answer = calcMult(numberA, numberB);
                    } else if (operator === "/") {
                        answer = calcDiv(numberA, numberB);
                    } 
                    operator = ""; 
                    screenText.textContent = answer
                    return answer;
              }
            

        singleDelete.addEventListener("click", () => {
             if ( operator !== "" && numberB.length > 0) {
                numberB = numberB.slice(0,-1);
             } else {
                operator = "";
                numberA = numberA.slice(0,-1); 
             }
            displayText = displayText.slice(0,-1);
            screenText.textContent = displayText;
        });

        fullDelete.addEventListener("click", () => {
            numberA = "";
            numberB = "";
            operator = "";
            answer = "";
            displayText = "";
            screenText.textContent = "";
        });
    
}


