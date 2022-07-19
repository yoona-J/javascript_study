//switch 문으로 이항 연산자

function binaryOperation (a, b, operator) {
    switch(operator) {
        case "+" : return a + b;
        case "-" : return a - b;
        case "*" : return a * b;
        case "/" : return a / b;
        case "%" : return a % b;
        case "^" : return Math.pow(a, b);
        default : return NaN;
    }
}

console.log (binaryOperation(2, 3, "+")) //5
console.log (binaryOperation(2, 3, "-")) //-1
console.log (binaryOperation(2, 3, "*")) //6
console.log (binaryOperation(2, 3, "^")) //8
console.log (binaryOperation(2, 3, "A")) //NaN
