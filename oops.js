/*
  oops => object oriented programmings.
  1. classes and object
  2. constructor
  3. inheritance
  4. private, public
*/

class Test {
  a = 10;
  show()
  {
    let x=10;
    console.log('this is show function',this.a,x)
  }
}
const t1 = new Test();
console.log(t1.a)
t1.show()


//============================= constructor =======================
class Mobile {
  constructor(model, color, price)
  {
    this.model = model
    this.color = color
    this.price = price
  }
  #mobileDetails()
  {
      console.log(`Model no : ${this.model}`)
      console.log(`Color    : ${this.color}`)
      console.log(`Price    : ${this.price}`)
  }
  show()
  {
      this.#mobileDetails()
  }
}
const samsung = new Mobile("j20", "white", 10000)
// samsung.#mobileDetails()
const vivo = new Mobile("v20", "black", 11000)
vivo.show()


// ========================= inheritance in js ==========================
// ===> extends
class Parent{
  constructor(title)
  {
    console.log('parent class constructor==>',title)
  }
}
class Child extends Parent{
  constructor(title){
    super(title);
    console.log("child class constructor==",title)
  }
}
const c1 = new Child("ducat")

