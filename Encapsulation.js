class soumo {
    #name //private variable
constructor (name,address,mobile_no) {
     this.#name=name
     this.address=address
     this.mobile_no=mobile_no;
}
get(){
   return this.name=this.#name
}
set(p){
    this.#name=p
}
}
const a=new soumo("Soumo","Bahirtafa",9524136589)
console.log(a)
console.log(a.name)
console.log(a.address)
console.log(a.mobile_no)
console.log(a.get())
a.set("Aniket")
console.log(a.get())

