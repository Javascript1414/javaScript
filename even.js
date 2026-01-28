// function
function even(num) {
   if(num%2==0){
        console.log(num + " even number");
    }
    else{
        console.log(num + " odd number");
    }
    }
    even(15285);

// switch
let num=9
switch(num%2){
    case 0:
        console.log("This is even number");
        break;
        case 1:
            console.log("This is odd number")
            break;
}

// ternary
let number=12
let result=(number%2)? "odd number":"even number"
console.log(result)




