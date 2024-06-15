let numberA = prompt("number a");
let numberB = prompt("number b");
let operator = prompt("operation");

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

if (operator === "+"){
    print (calcSum(numberA,numberB));

    } else if (operator === "-"){
        print (calcSubt(numberA,numberB));

    }else if (operator === "*"){
        print (calcMult(numberA,numberB));

    } else if (operator === "/"){
        print (calcDiv(numberA,numberB));
    } 