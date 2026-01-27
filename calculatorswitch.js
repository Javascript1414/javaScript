function calculator(a,b, operator) {
    let result;
    switch(operator) {
        case "+":
            result = a + b;
            break;

            case "-":
                result = a - b;
                break;

                case "*":
                    result = a * b;
                    break;


                    
                    case "/":
                        result = a / b;
                        break;

                        case "%":
                            result = a % b;
                            break; 
                            
        default:
            result = "Invalid operator";

    }
        return result;
    }
    console.log("Addition=", calculator(20, 5, "+")); // Output: 25
    console.log("Subtraction=", calculator(10, 5, "-")); // Output: 5
    console.log("Multiplication=", calculator(4, 5, "*")); // Output: 20
    console.log("Division=", calculator(20, 4, "/")); // Output: 5
    console.log("Modulus=", calculator(20, 3, "%")); // Output: 2
    console.log("Invalid Operation=", calculator(20, 5, "^")); // Output: Invalid operator

