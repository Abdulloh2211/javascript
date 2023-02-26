// ========= 
//Arrays
// backend dan keladigan barcha information array va objectda bo'ladi 
// let ar = [] //bu array ya'ni array [] tarzda yoziladi 
// console.log(ar);
// biz yana 
// let st={name:"webbrain,id:1,surname:It academy"}
// let univ =[st,st,st,st,st,st]
// console.log(univ); 
// bersak unda bu bizga objectdi ichida hamma information lardi array ko'rinishida olib kelib beradi 
// va ulardi bir necha marotaba qaytarib beradi 
// endi agar biz arraydi ichidan bironta information di alohida olib kelmoqchi bo'lsak unda biz index dan foydalanamiz

// let ar =  [1,2,3,4,5]
// console.log(at[0]);
// desak bu bizga 1 sonini olib kelib beradi ,chunki batta 1 0-chi indexda turibdi 

// let ar =  [1,[2,3,4],5]
// console.log(at[1]);
// biz shuningdek arraydi ichidan boshqa bir array ham berishimiz mumkin 
// va batta 2,3,4 bulardi hammasi 1-chi index ga kiradi 
// va biz buni ichidan yana array olsak ham bo'ladi 
// console.log(ar[1][0]) desak unda bu bizga 1 chi indexdi ichidan 0 chi indexdi o'rnida turgan narsani olib keladi 
// agar biz console.log(Object.keys()) bersak bu bizga objectdi ichidagi keylarni array ko'rinishida olib kelib beradi 
// Object.values bu value larini array qilib chiqarib beradi 
// agar biz entries bersak unda bu bizga key va valuedan tashkil topgan nasted array chiqarib beradi
// endi agar biz console.log(Object.fromEntries([["title","webbrain"]["id"1]])) bersak unda buni bizga object qilib beradi 
// va lekin [["title","webbrain"]["id",1]] shunqa qilib yozishimiz shart bo'ladi 
// va biz faqat arraydi ichidan array beribgina buni object qila olamiz bo'lmasa u bo'lmaydi 
// bitta qilib aytganda biz berib turgan qiymat arraydi ichidan chiqadigan qiymat bilan bir xil bo'lishi kerak 


// let ar= new Array(4)
// console.log(ar)
//[<4 empty items >] qilib bizga 4ta bo'sh array yasab beradi
// va buni length ni yozsak 4 chiqaradi lekin bu empty chiqaradi
// va agar 4,4 yozsak yoki webbrain yozsak ,ushanda keyin shu qiymatlardi o'zini chiqarib beradi 

// lekin buni biz typeof qiladgan bo'lsak unda bu object qilib chiqarib beradi , lekin bu aslida alohida bitta dataype hisoblanadi

// keyin biz arraylarni qo'shish uchun concat degan narsadan foydalanamiz 
// lekin oddiy plus qiladigan bo'lsak unda bu arraylarni typeof ini string qilib qo'yadi 
// va  biz buni  console.log(a.concat(b)) qilib ishga tushiramiz
// log(a.toString()) ham huddi shunaqa ya'ni stringa o'zgartiradi 

// umumiy holatda array di ichida hech nima bo'lmasa unda u 0  ga tenga bo'ladi lekin if lar bilan ishlatsak u reference qaytarsagani 
// uchun u bizga false bermaydi

// for in bu index chiqaradi 
// for of bu value chiqaradi 
// va bular ikkalasi ham arrayda ishlaydi 

// let a =["title","webbrain","id"]
// console.log(ar.length) bu uzunlik
// console.log(ar.at()) bu string ga o'xshab 1 yoki -1 2 3  har xil qiymatlarni olib arraylarga qarab chiqarib beradi va batta bu bizga oxirgi qavsidi chiqarib beradi

 //let a =["title","webbrain","id"]
// ar.push('orange') desak bu oxiridan information qo'shib beradi
 //ar.unshift('orange')//  desak bu boshidan information qo'shib beradi
//console.log(ar) 
//HUDDI SHUNI ORQAMACHASI 
// let a =["title","webbrain","id"]
// ar.pop('orange') desak bu oxiridan information uchirib beradi
// ar.shift('orange')  desak bu boshidan information uchirib beradi
// console.log(ar) 

// let ar =  [1,2,3,4,5]
// console.log(ar.slice(2,5));
// console.log(ar); Javobi:
// [ 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// bu  asliy qiymatga ta'sir qilmaydi ikkinchi console.log da ko'rishimiz mumkin

// let ar =  [1,2,3,4,5]
// console.log(ar.splice(2,5));
// console.log(ar);Javobi:
// [ 3, 4, 5 ]
// [ 1, 2 ]
// bu  asliy qiymatga ta'sir qiladi ikkinchi console.log da ko'rishimiz mumkin va bu - lik qiymat oladi

// va keyin splice da insert  va remove qilsak bo'ladi masalan:
// let ar =  [1,2,4,5]
// console.log(ar.splice(2,0,3));
// console.log(ar)
// bu insert qiladi ya'ni agar 0 bersakda va tushib qolgan raqamdi keyin yozsak unda u o'shani insert qilib beradi 

// string bilan array dagi indexOf bitta
// lastIndexOf - huddi shu narsani oxiridan boshlab qidiradi
// console.log(ar.includes(5)); bu  ham true yoki false qaytaradi 
// let ar =  [1,2,3,4,5]
// console.log(ar.reverse()); bu shuni 5 4 3 2 1 qilib beradi 
// console.log(ar.join()); bu stringga o'zgartirib beradi 
// agar join skobkasiga "," bersak bu orasini , qilib ajratadi "*" bersak bu * manashunaqa qilib ajratadi 

// agar biz lat a ="orange banana apple"
// console.log(a.split(" "));
// desak bu bizga qatta bush joy ko'rsa bu bizga array yasab beradi
