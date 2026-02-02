function calculator(a,operator,b) {
switch(operator) {
    case "+":
    case "add":
    console.log(a + b);
    break;

    case "-":
    case "subtract":
    console.log(a - b);
    break
    
    case "*":
    case "multiply":
    console.log(a * b);
    break;

    
}
}
calculator(10,"*",5);
calculator(22,"+",2);
