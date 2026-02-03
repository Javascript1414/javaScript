function prime(e) {
    let g;
    for (g=4; g<e; g++){
        if(e%g===0){
            return ("Number is not prime");
            break;
        }else{
            return ("Number is prime");
            break;
        }
    }
}
console.log(prime(9));
