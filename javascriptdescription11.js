
// =======================
//Advanced level
// Callback function
// qachonki bitta function di ichidan yana bitta function ishlasa unda shuni callback function deyiladi
// yul.find(()=>{}) shunaqa bo'ladi o'zi bitta functiion kelyapti uning parametrida yana bitta function kelyapti 

//  let ar =  [1,2,3,4,5]
//  ar.find((item,index)=>{
//     console.log(item,index);
// })

// har doim find da birinchi item ya'ni for of keyin esa index ya'ni for in keladi 
// filter


//  let ar =  [1,2,3,4,5]
//  let res=ar.filter((item,index)=>{
//     console.log(item===5);
//     return item ===5
// }) 
// console.log(res)


////filter bu bizga kerakli ma'lumotni olib qolganlarini tashlab yuboradi 
////hozir biz shu qiymatlarni bersak unda item bu for of ga o'xshaydi va index esa bu for in ga o'xshaydi 
//// va filter har doim return ya'ni true yoki false qiymatlarini kutadi 
//// va birinchi biz console.log berganimizda batta bu bizga qiymatlarni aylantirib chiqarib beradi va qachoniki bix
//// return bersak filter returndan qiymat qabul qilib bizga javobni chiqarib beradi
//// va keyin filterdi item= valuesi va index va arrayi bor va lekin biz faqat birinchi ikkitasini ishlatamiz
//// oxirida bergan console bu returnga qarab ishlaydi , agar return false bersak hech nima chiqarib bermaydi 
//// lekin returnga true beriladigan bo'lsa unda u res nimaga teng bo'lsa ushani chiqarib beradi 
//// va shuningdek return value.includes('e') desak bizga e bor qiymatlarini chiqarib beradi 

//find

//  let ar =  [1,2,3,4,5]
//  let res=ar.find((item,index)=>{
//     console.log(item);
//     return item ===5
// }) 
// console.log(res)

// buning filterdan farqi biz bunda biron narsani qidir deb yozsak bu bizga topginigacha qidiradi , lekin filter esa
// birma bir har bir qiymatga kirib chiqadi 
// masalan find
//1
//2 
//3
//3
// desa filter esa 
//1
//2 
//3
//4
//5
//..
//3


// findIndex bu  find lekin Index find bo'ladi

// va endi sort degan narsa bor 
//  let ar =  [3,2,1,4,5]
// ar.sort()
// console.log(ar)
// bu bizga raqamlardi ketma ketligini tug'irlab chiqarib beradi 
// buning filterdan farqi ham shu
// lekin bu 10 lik sonlar bilan ishlamaydi endi 
//  let ar =  [3,2,11,4,-5]
//  ar.sort()
// console.log(ar.sort((a,b)=>a-b))
// desak endi bu bizga unlik sonlarni ham tug'ri ishlatib beradi, lekin b-a qilsak kattasidan boshlaydi 
// lekin bu narsani harflar bilan ham tug'ri ishlashi uchun a.localCompare(b) deymiz 
// let sum=["orange","apple"]
// console.log(sum.sort((a,b)=>a.localeCompare(b)));  qilsak alfavit bo'yicha chiqarib beradi
// bu narsa ya'ni sort sort qilib turganda ma'lumotlar 100% bo'lsa , unda 0 bo'lmasa -1 va ba'zi joylari to'g'ri kelsa unda 1 chiqadi 

// keyin every degan xususiyat ham bor bu harr bittasi bo'lsa keyin true chiqaradi
// let num=[4,8,3,11]
// let res=num.every((value)=>value>0)
// console.log(res);
//  endi huddi shuni some degani ham bor
// bunda endi ba'zisi ichida bo'lsaham bo'laveradi true javobini qaytaradi 
// ya'ni some da bitta qiymat to'g'ri bo'lsa ham bizga true javobini qaytaradi 

// keyin bizda let array=Array.from() degan narsa bor bu bizga stringdan array yasab beradi 
// keyin yana Array from da ikkinchi ya'ni callback function ishlatsak bo'ladi 
// let res= Array.from('456789',(v)=>Number(v)) desak bu bizga endi array emas balkim number ko'rinishida biron narsani 
// chiqarib beradi 


// for each va map 
// for each bu ham for of ga o'xshab ma'lumotni aylanib chiqadi 
// let num=[4,8,3,11]
// num.forEach((value,index)=>{
//     console.log(value,index);
// })
// bu bizga faqat qiymatlarni chiqarib beradi xolos , lekin bu bizga filterga o'xshab kerakligini olib qolganlarini 
// tashab yubormaydi va bu hech qachon return olmaydi 
// VA ENDI MAP
// let num=[4,8,3,11]
// let res =num.map((value,index)=>{
//     console.log(value,index);
// return true 
// })
// console.log(res); bu bizga new array qaytaradi va tepadaginig javobi 
// 4 0
// 8 1
// 3 2
// 11 3
// [ true, true, true, true ] bo'lib chiqadi va bu bizga returndagi narsani qaytarib qaytarib chiqarib beradi 
// va agar returnda value  deb yozsak unda u o'zining ma'lumotlarini qaytarib beradi 
// va agar biz sonning juftlarini topmoqchi bo'lasak unda biz filterdan foydalansak 
// juda optimal yechim bo'ladi 
// lekin biz mapdan foydalansak bizga juft sonlar kelganda ushalarni qaytaradida va keyin qolgan joylarda esa undefined qiymatlarini beradi 

// keyin fill degan qiymat bor arrayda 
// let num=[4,8,3,11]
// num.fill(31,2,3)
// console.log(num);
//// console.log(valur, startIndex, lastIndex) this will replace us the value between the two given one indexes

// what's more there is  an option ,copuWithin
// we could copu some kind of numbers or somethin that is located berween any index indexes and to put them in other place
// replacing to other indexes like 
// let num=[4,8,3,11]
// num.copyWithin(0,2,3)
// num.copyWithin(the location of replacement ,from where,to where)
// there will be an exchanging of 4,8 to 3,11 as we said

// also how to avoid all of the scopes in console.log 
// let num =[[[[[[[[1,[2,3],4]]]]]]]]
// console.log(num.flat(Infinity))
// like this we can easily ease our work . If we write 2 instead of Infinity there will only 2 scopes be deleted.

// flatMap
// this function requires callback function and this is the summarised flat and map 
// let num=[4[8,3],11]
// let res=n.flatMap((v)=>v)
// console.log(res)
// this option deletes the scope of 8 and 3 while it creates a map to work on it

// Reduce
// let num=[4,8,3,11]
// let res = num.reduce((cur,value)=>{
//     console.log(cur,value)
//     return cur+value
// },0)
//  the result will be 
//  0 4
// 4 8
// 12 3
// 15 11
//  because firstly we said that the current value is 0 and after that give us a value which already consists 
// after that the return everytime will count like in the first we started with 0 after that value is 4 .Next we said 
// return cur +value  which results 4 in the second row
// after the system will continue like this permanently unil it reaches its over
// if we don't give return there result will be undefined
// and 0 means initial state