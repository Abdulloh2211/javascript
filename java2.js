//number-
console.log(123)
//biginit-
console.log(9007199254740992n+1n)
// string-
console.log('Webbran academy')
console.log("Webbran academy")
console.log(`Webbran academy`)
//boolean 
console.log(undefined === undefined)
console.log(Object === Object)
console.log(undefined === Object)
//null
let b = null ;
console.log(b)
//undefined
let a ;
console.log(a)
//symbols
let id1 =Symbol(1234)
let id2 =Symbol(1234)
console.log(id1===id2)
//Objects
// array: 
let array =["Muhammad",12,"Alisher"]
let object={name:"Webbran",status:"it centre"}
function test () {
    console.log(array)
    console.log(object.name)
}
test()


//2.
let name = "Ilya";

console.log( ` hello ${1}`)
// hello 1
console.log( ` hello ${"name"}`)
// hello name
console.log( ` hello ${name}`)
//hello Ilya
