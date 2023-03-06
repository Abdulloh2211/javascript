// distructure && Json system
// this means to ease the way how we write codes
// distructure bu bizda array va objectlarga ishlatilinadi 
// let obj={name:'webbrain',title:'it centre '}
// console.log(obj.name);
// this is the simplest way how we can reach name in the array 
// but how we can reach with the way of distructure 
// In order to do so we should open new variable 

// let obj={name:'webbrain',title:'it centre '}
// let {name,title,age}=obj
// console.log(name,obj.name);
// this is how we can go through the distructure to reach our array 
// if there are two same name in that case we should change what is in the distructure to newName 

// let obj={name:'webbrain',title:'it centre '}
// let name ='webbrain'
// let {name:newName,title,age}=obj
// console.log(newName,obj.name);
//in this case we have quantified our first name in object to name by writing name:newName 
// : this wssign here is not new Object but giving a new name for our first name and it is impossible to change the name of the  second variable . therefore we have changed the name of the first object 

// if there is one another object in object how could we use it ???
// let obj={name:'webbrain',title:'it centre ', data:{year:199}}
// let name ='webbrain'
// let {name:newName,title,age,data:{year}}=obj
// console.log(year);
// there :{} can help us to tackle this problem"

// and there we also to do a distructure with arrays 
// we have used {}this kind of scope in order to use datastructure of objects but in order to do so arrays we use []

// let ar =["apple","orange","Kiwi"]
// let [bir,ikki,uch]=ar
// console.log(bir);

// in this case while console the bir in terminal we will receive the result apple 

// also 
// let ar =["apple","orange","Kiwi"]
// let [bir,...res]=ar
// console.log(res);
// by this way we can reach orange and Kiwi at teh same time 

// also we can use datastructure with functions 
// const gatData =(data)=> {
//     console.log(data);
// }
// gatData({name:'webbrain',title:"it centre"})
// usinga this way we can easily do a distructure with functions

// agar gatData{} buning ichida hech nima bo'lmasa unda bu bizga error beradi 
// va keyin shuni oldini olish uchun bu const getData=(data{}) bersak unda buning boshlang'ich formasi shu bo'ladi 
// ushanda bu bizga error bermaysi 