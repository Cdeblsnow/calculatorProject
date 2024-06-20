

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

function operate(numberA,numberB) {
    let operator = 0;
    let numberA = 0;
    let numberB = 0;
    const buttonOperator = document.querySelector(".operator");
        buttonOperator.addEventListener("click", () => {
            operator  = button.getAttribute("data-value");
        } )

    const buttonNumber = document.querySelector(".number");
        buttonNumber.addEventListener("click", () => {

        })
    
    

    if (operator === "+"){
        console.log(calcSum(numberA,numberB));
    
        } else if (operator === "-"){
            console.log(calcSubt(numberA,numberB));
    
        }else if (operator === "*"){
            console.log(calcMult(numberA,numberB));
    
        } else if (operator === "/"){
            console.log(calcDiv(numberA,numberB));
        } 
}
