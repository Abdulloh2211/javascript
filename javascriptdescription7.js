// garbage collection
// agar biz 

// let wba = "webbrain academiy"
// wba="gone"
// console.log(wba);

// bizga endi faqat gone di o'zi kelib chiqadi , chunki birinchi biz let bilan
// wba ga steak dan heap ga access olib berib turodik , lekin keyin unga gone qiymatini
// biriktirganimizdan keyin u unaqa bo'lmay qoladi keyin esa u information uchib ketadi

// agar non-primitive narsalar primitivega aylanib ketsa huddi shu narsa yuz beradi

// endi agar biz bir necha ma'lumotlarni hammasini yozmasdan ya'ni console.log(user. ... , user . ...)
// demaslikni xohlasak unda

// let user={
//     name:"Webbrain",
//     title:"It centre",
//     fullDesc: function(){
//         return this.name + this.title;
//     }
// }
// console.log(user.fullDesc());

// bu orqali biz har bitta qiymatdi chaqirib yotmaymiz , balkim bitta function orqali hammasini eplaymiz

// keyin biz 
//     fullDesc: function(){
//         return this.name + this.title;
//     } demasdan ,balkim
// fullDesc(){
 // return this.name + this.title
//}
// qilib bersak ham bo'laveradi va batta biz alohida function yasamasdan fullDesc bu function di bitta turi qilib yasab ketyapmiz

// lekin biz arrow function bilan biz this ni ishlata olmaymiz




// agar biz this di o'rniga userdi bersak unda boshqa qiymat bilan uni tenglashtirilib qo'yilganda 
// user xatolik beradi , lekin this esa unday emas Masalan:
// let user={
//     name:"Webbrain",
//     title:"It centre",
//     fullDesc: function(){
//         return this.name + this.title;
//     }
// }
// let newuser= user
// user=null

// console.log(newuser.fullDesc()); 
//bu holatda bizga user keyin o'zgairb ketsa ham keyin chiqarib beraveradi , lekin agar buni user 
// bilan bersak unda bu error beradi pastdagi misol kabi

// let user={
//     name:"Webbrain",
//     title:"It centre",
//     fullDesc: function(){
//         return user.name + user.title;
//     }
// }
// let newuser= user
// user=null

// console.log(newuser.fullDesc()); 
// buni javascriptning o'zining funktsiyalaridan deb bilaylik

// agar biz 
// let user = {
//     name: "Shohruh",
//     age: 25

// }
// console.log( user.name.age);
// console.log( user.name.age);
// batta 1-chisi undefined deb hisoblanadi ,chunki birinchisida aniq narsadan keyin yuq narsa berdik 
// ikkinchisida esa error beradi chunki batta noaniq narsadan keyin noaniq narsa beryapmiz 
// shu bizga error bermasligin uchun biz ?. bersak unda bu agar shu narsa bo'lmasa unda uni chiqarib berma degani
// console.log( user.name?.age); Bu OPTIONAL CHAINING DEB ATALADI  bu bizga agar to'g'ri bo'lsa chiqar bo'lmasa tuxta degani


// keyin bizda Entries , keys , values degan narsalar bor 
// let a ={
//     name: "Shohruh",
//     age: 25
// }
// console.log(Object.values(a));
// desak bu bizga a ning array ko'rinishida value larini chiqarib beradi  chiqarib beradi
// agar (Object.keys(a))
// desak bu bizga a ning array ko'rinishida keylarini larini chiqarib beradi  chiqarib beradi// 
//agar (Object.entries(a))
// desak bu bizga a ning array ko'rinishida entry qilib ya'ni har birini alohida alohida array  , nasted qilib  chiqarib beradi


/// agar biz ikkita bir xil ikkita object bersak xar doim u faqat oxirgisini chiqarib beradi
//spread operator - bu tepadagi kabi ikkita array ni bir biriga uchta nuxta bilan qo'shdik 
// distructure- bu boshqattan bironta narsani yasash degani , objectdagi value lardi chaqirish uchun console.log(user.name) demaymizda distructure qilib
// const {name}=user qilib olamiz lekin ikkalasi ham bir xil qiymat beradi
// ya'ni bu bizga user di ichidan name olib chiqib ber degani
// biz aytdikki const bu bitta variable olib kelib uning qiymatini user di ichidagi name ga teng qilib beradi dedik , lekin agar objectdan oldin ham bitta name 
// kelgan bo'lsa unda objectdi ichidagin name keyning ismini o'zgartiramiz
// va bu 
// const {name:Newname}=user
// kabi qilinadi
// endi agar nasted qiymat bo'ladigan bo'lsachi 
// let a ={
//     name: "Shohruh",
//     info: {age:25 }
// }
// endi batta console.log(a . info . age) demasdan
// const {info:{age}}= user qilib beramiz
// agar biz buni info:{age} qavssiz bersak unda infoning ismi shunga uzgaryapti deb qabul qiladi lekin qavs bilan yozsak unda bu o'zi object uni boshqatdan distructure qilyapti degani




