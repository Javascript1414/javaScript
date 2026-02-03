class Student {
    constructor (name){
        this.name=name;
    }
}

class Roll_No extends Student{
    constructor (name,Address){
        super(name);
        this.Address= Address;
    
    }

}

const s1 = new Roll_No("Sudebi","Bahirtafa");
console.log(s1.name)
console.log(s1.Address)