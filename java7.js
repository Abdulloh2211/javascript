//.1
// function makeUser(){
//     return{
//         name:"John",
//         ref:this
//     }
// }
// let user = makeUser()
// console.log(user.ref.name);
// batta undefined kelib chiqyapti , chunki batta aniq narsaga noaniq narsani birlashtiryapmiz keyin o'shanga UNDEFINED chiqadi
//.2 
// let calculator = {
//     a: 5,
//     b: 5,
//     read: function() {
//         return `${this.a} ${this.b}`
//     },
//     fullDesc:function (){
//     return this.a + this.b;},
//     multiply:function (){
//     return this.a * this.b;}
// }

// console.log(calculator.read(), calculator.fullDesc(), calculator.multiply())
//.3
// let ladder ={
//     step:0,
//     up(){
//         this.step++;
//     },
//     down(){
//         this.step--;
//     },
//     showStep: function (){
//         console.log(this.step);
//     }
// }
// console.log(ladder.showStep());
// bu bizga 0 chiqarib beradi , chunki biz bunga hali etaj raqamini berganimiz yuq

//.4
function A() {  };
function B() { return A()};
let a = new A();
let b = new B();
console.log(a == b);
console.log(a);
console.log(b);