document.addEventListener("DOMContentLoaded", function() {
    operate();
});

function calcSum(a,b) {
    let newSum = a + b;
    newSum= (Math.round(newSum * 10) / 10).toFixed(1);
    return newSum;
}

function calcSubt(a,b) {
    let newSubt = a - b;
    newSubt= (Math.round(newSubt * 10) / 10).toFixed(1);
    return newSubt;
}

function calcMult(a,b) {
    let newMult = a * b;
    newMult= (Math.round(newMult * 10) / 10).toFixed(1);
    return newMult;
}

function calcDiv(a,b) {
    let newDiv = a / b;
    newDiv= (Math.round(newDiv * 10) / 10).toFixed(1);
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
    const pDecimal = document.getElementById("decimal");

    
    document.addEventListener("keyup", (e) =>{
        const key = e.key;
            if(!isNaN(key)) {
                if (operator === "") {
                    numberA += key;
                } else {
                    numberB += key;
                }
                displayText += key;
                screenText.textContent = displayText;

            } else if (['+','-','X','/'].includes(key)) {
                if (numberA !== "" && numberB !== ""){
                    answer = calculateResult( numberA, numberB);
                    if (!isNaN(answer)) {
                        numberA = answer.toString();
                        numberB = ""; 
                        displayText = numberA;
                        screenText.textContent = displayText;
                    }
                }
                        operator = key;
                        displayText += ` ${operator} `;
                        screenText.textContent = displayText;    

            } else if ( key === "Enter") {
                if(numberA !== "" && numberB !== "" && operator !== ""){
                    answer = calculateResult(numberA,numberB);
                }
            } else if ( key === "Backspace") {
                if ( operator !== "" && numberB.length > 0) {
                    numberB = numberB.slice(0,-1);
                 } else {
                    operator = "";
                    numberA = numberA.slice(0,-1); 
                 }
                    displayText = displayText.slice(0,-1);
                    screenText.textContent = displayText;
            }
    });
 
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
                const buttonText = button.textContent.trim();

        if (buttonText === '.') {
            if (operator === "") {
                if (!numberA.includes(".")) {
                    numberA += buttonText;
                }
            } else {
                if (!numberB.includes(".")) {
                    numberB += buttonText;
                }
            }
            } else {
                if (operator === "") {
                    numberA += buttonText;
                } else {
                    numberB += buttonText;
                }
            }
        
            displayText += buttonText;
            screenText.textContent = displayText;
            if (operator === "") {
                pDecimal.disabled = numberA.includes(".");
            } else {
                pDecimal.disabled = numberB.includes(".");
            }
            });
        });
        

            function calculateResult() {
                numberA = Number(numberA);
                numberB = Number(numberB);
                     if(numberA !== 0 && numberB === 0){
                        window.alert("NO kaboom time Rico ");
                        answer = "Nope";
                    } else if (operator === "+") {
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
                    console.log(numberA)
                    console.log(numberB)
                    console.log(answer,"cal")

                    return  answer;
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