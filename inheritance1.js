class Details{
    constructor (fname,mname,lname){

        this.Full_name=fname
        this.middle_Name=mname
        this.Last_name=lname
    }
        
}

class Aadhaar extends Details{
    constructor (fname,mname,lname,Aadhaar, Pan){
    super(fname,mname,lname)
    this.Aadhaar=Aadhaar
    this.Pan=Pan
}
}

class Email extends Aadhaar{
    constructor (fname,mname,lname,Aadhaar, Pan, Email){
        super (fname,mname,lname,Aadhaar, Pan)
        this.Email=Email
    }
}
   
let Soumo=new Email("Soumo","Chandra","Das",5896523695,"ISPTC8523E","soumo@gmail.com");
console.log(Soumo)
console.log(Soumo.Full_name)
console.log(Soumo.middle_Name)
console.log(Soumo.Last_name)
console.log(Soumo.Aadhaar)
console.log(Soumo.Pan)
console.log(Soumo.Email)   


        
        
    


