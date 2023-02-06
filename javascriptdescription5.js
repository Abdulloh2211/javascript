// function bu umuman biror narsani qaytarish yoki uni dynamic ya'ni agar unga function bersak bizga ya'ni masalan 10 ta raqamning o'rtacha bo'lgan qiymatini hisobalab beradi
// Masalan : biz qachon () bu qavsdi ko'rsak bu bizga function di ifodalaydi
// alert () battagi alert esa bu method hisoblanadi 
// ikkalasini farqi bittasi was built lekin function esa buni biz o'zimiz quramiz
// function getAvr(){
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
// }

// console lar o'zining qavsi bo'lsa , lekin 1 chi qavs bilan getAvr bular function declaration
// bunda kid declaration bo'lgani bilan bizga kodni ishlatib bermaydi 
// biz kiddi ishlatishimiz uchun pasidan  getAvr degan function di yana  bir marotaba berishimiz kerak

// function getAvr(){
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
// }getAvr() 
// yoki batta ikki marotaba getAvr bersak ham bo'laveradi


// endi agar html da bitta button ochib unga onclick="getAvr" bersak va html bilan js ni bog'lasak unda bizga getAvr dan keyin yozilgan 
// webbrain degan yozuv faqat button ga yozganimizdan keyin chiqadi
// bu yana DOM da keladi
// endi bunda biz birinchi bo'lib js ga ulashimiz keyin esa htmlda bitta button yasab olib onclick="gerAvr" desak bizga faqat knopkani bosganimizda keyin chiqaradigan bo'ladi
// agar biz biror nimani function deb declare qilib ketsak unda u  declaration bo'ladi agar uni biz variable ga tenglab ketadigan bo'lsak unda u function expressin bo'ladi

// let id = '1'
// function getAvr(){} bu declaration
// va 
//let id = function (){}

// yana ikkalasini farqi function declarationda biz hoisting siz ishlasak bo'ladi lekin  bu narsa funtion expression da bo'lmaydi
// ya'ni biz functiondi ishlatish uchun oxirida getAvr () degan narsani yozar edik endi agar shuni biz tepada bersak ya'ni function bilan variabledan oldin bo'ladimi farqi yuq

// hoisting moving variables and function expression onto the top of the codes

// lekin function declarationda ham hoisting ham u siz ishlashining sababi undagi danniy java engine da saqlanib qoladi 
// agar biz ()=>{} qilib bersak bu endi arrow function deb ataladi 

// parametr 
// agar biz masaln bir necha ism berib agar ismini masalan Jamshid deb yozsa Jamshid welcome to Webbrain deb
// agar Solih desak Solih desak Solih welcome to webbrain desin deyishimiz uchun parametr ishlatiladi
//Masalan:
// let getAvr = function (name){
//     console.log(`${name} Welcome to Webbrain `);

// }
// getAvr('Jamshid')
// getAvr('Solih')
// va bizda shadow degan narsa bor 

//bizda inner va outer qiymat berishlar bor masalan 
// const test = () => {
//     let name ("webbrain")
//     console.log(name);
// }
// bu inner qiymat deb hisoblanadi 
// agar biz let di tepaga olib chiqsak unda u outer qiymat debb hisoblanadi
//     let name = ("webbrain")
// const test = () => {
//     console.log(name);
// }
// test()
// bunda endi information global bo'lgan vaqtinchalik qiymat bo'lib saqlanib qolad kabi 
 
// shadow degan narsa bor 
//     let name = ("webbrain")
// const test = () => {
//     let name = ("academy")
//     console.log(name);
// }
// test()

// endi bunda eng tepadagini emas balkim o'zini tepasidagini chiqarib beradi
// agar biz inner variable bilan outer variable biriktirsak unda manashu shadow bo'ladi

// const test = (name , surname="") => {
//     console.log(name , surname);
// }
// test("webbrain"'Academy') bu ham java script di esx versiyasidan boshlab chiqqan xususiyat batta biz
// batta biz or yoki nullish qiymat berib o'tirishimiz kerak emas agar bitta qiymat bersak unda hech nima chiqmaydi
// undefined emas agar manashunaqa qilsak unda bizg undefined chiqarib bermaydi

// agar biz return bilan ishlasak unda u o'zidan keyin ya'ni function tugagandan keyin ishlashga imkoniyat beradi
// Masalan:
//  const gpa = ( ) => {
//     // return 'okay?'
//  }
//  console.log(gpa ());
//  agar shunaqa bersak unda undefined beradi shunki unga biz hech nima biriktirmaganmiz
//  agar consoleda gpadan keyin () bermasak unda [Function: gpa] deb chiqadi chunki xuddi biz constga qiymat bergan kabi bo'lib qoladi
// agar endi return bersak unda return ga bergan qiymatimizi chiqarib beradi 

// fagar biz biror sonning o'rtasini xisoblamoqchi bo'lsak unda 
//   const gpa = ( a, b,c,d) => {
//     let res = ( a + b +c + d) /4
//     console.log(res);
//     //  return 'okay?'
// }
//   console.log(gpa (4.8 , 3, 2, 5));
// desak unda bu bizga sonlarning o'rta qiymatini hisoblab beradi

// agar biz 
// const getNum = (a)=> {
//     let total = 193;
//     return(a*100)/ total
// }
// console.log(getNum (159));
// return bizga function qiymat biriktirgani ishlaydi va pastdagi log lar esa qiymatdi  a b  c larga biriktirgani ishlaydi
// keyin batta biz 159 di nechichi foiz ekanini chiqarib oldik bu 82 % bo'ladi

// // console.log(parseInt(getNum (159))); bu bizga sondi to'liq qismini beradi

// returndan maqsad masalan biz pastda uni faqat to'liq son qilmoqchi bo'lsak yoki biron bir uning ustida ish olib bormoqchi bo'lsak unda biz return berishimiz kerak

// lekin tepada console bersak unda pasda undefined bo'ladi keyin parseInt turgani uchun bu number emas deb bizga NaN deb chiqarib beradi

