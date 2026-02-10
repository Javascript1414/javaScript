class soumo{
    #Name //private varible decleration
    constructor(Name,Address,Email){
        this.#Name=Name
        this.Address=Address
        this.Email=Email
    }
    get(){
        return this.Name=this.#Name
    }
    set(s){
        this.#Name=s
    }
}

const s=new soumo("Soumo","Bahirtafa","soumo64@gmail.com")
console.log(s)
console.log(s.Address)
console.log(s.Email)
console.log(s.Name)
console.log(s.get())
s.set("Sribas")
console.log(s.get())