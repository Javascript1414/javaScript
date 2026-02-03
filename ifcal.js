
// Simple calculator function using if-else statements
function calculator(a,operator,b) {
    if (operator =="+"){
        console.log(a + b);
    }else if (operator == "-"){
        console.log(a - b);
    }else if (operator == "*"){
        console.log(a * b);
    }else if (operator == "/"){
        if (b === 0){
            console.log("not divded by zero");
        }else{
        console.log(a / b);
    }
}
}
console.log("Calculator Result:");
calculator(10,"*",5);
calculator(20,"+",10);


// simple calcultator
function simpleCalculator(a, operator, b) {
    if (operator === "add" || operator === "+") {
        return a + b;
    } else if (operator === "subtract" || operator === "-") {
        return a - b;
    } else if (operator === "multiply" || operator === "*") {
        return a * b;
    } else if (operator === "divide" || operator === "/") {
        if (b === 0) {
            return "Division by zero is not allowed.";
        }
        return a / b;
    }
}
console.log("Simple Calculator Result:");
console.log(simpleCalculator(15, "add", 5));
console.log(simpleCalculator(30,"+",10));
console.log(simpleCalculator(25,"-",10));
console.log(simpleCalculator(8,"subtract",2));
console.log(simpleCalculator(7,"*",3));
console.log(simpleCalculator(20,"multiply",4));
console.log(simpleCalculator(10,"/",0));