let age=18
switch (age){
    case 16:
        console.log("You are 16 years old");
        break;
    case 18:
        console.log("You are 18 years old");
        break;
    default:
        console.log("You are not 16 or 18 years old");
}
   
let a=55
switch (true){
    case(a<18):
    console.log("Ab abhi bhi chota ho");
    break;

    case(a>18 && a<30):
    console.log("Ap abhi apna carrer mea focus karo");
    break;

    case(a>31 && a<60):
    console.log("Ap apne life mea settle ho jao");
    break;

    case(a<60):
    console.log("Ab bohut jaldi upar mea jaoga")
    break;
}

