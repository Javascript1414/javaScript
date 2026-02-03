function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return  a - b;  
} 
      
function multiply(a, b) {
    return a * b;
}   
function divide(a, b) {
    if(b ===0){
        console.log("not dicide by 0");
    }
    return a/b
}
function modulus(a, b) {
    return a % b;
}
function power(a, b) {
    return a**b;
}
function increment(a) {
    return ++a;
}  


function calculator(a,operator,b){

    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "%":
            return modulus(a, b);
        case "**":
            return power(a, b);
        case "++":
            return increment(a);
        default:
            return "Invalid operator";
    }  
}
    console.log("Addition=", calculator(20, "+", 5)); // Output: 25
    console.log("Subtraction=", calculator(10, "-", 5)); // Output: 5
    console.log("Multiplication=", calculator(4, "*", 5)); // Output: 20
    console.log("Division=", calculator(20, "/", 0)); // Output: 5
    console.log("Modulus=", calculator(20, "%", 3)); // Output: 2
    console.log("Power=", calculator(2, "**", 3)); // Output: 8
    console.log("Increment=", calculator(10, "++")); // Output: 11
    