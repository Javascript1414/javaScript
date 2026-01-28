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
    return a/b
}

function cal(a,b,ope){

    return (ope=="+")?add(a,b):
    (ope=="-")?subtract(a,b):
    (ope=="*")?multiply(a,b):
    (ope=="/")?divide(a,b):
    "invalid operator"

}

 console.log("Tearnary operatior result:")
 console.log("Addition=",cal(20,5,"+")); 
 console.log("Subtraction=",cal(20,10,"-"))




 
console.log(12,10,"//")
