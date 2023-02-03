// type convirsions
//bu asosan bir datatypelardi boshqa bir datype ga o'tib ketishiga aytiladi

// arifmetik raqam stringdi raqamga o'tkazib beradi
// masalan let a="1" desak va bunga console.log(+a) desak endi bu string emas raqamga o'zgarib ketadi
// arifmetik raqamlarga oyid bo'lmagan narsalarga arifmetik qiymat bersak bu Nan ga o'zgarib ketadi

// console.log(isNaN(a)) bu bizga raqammi yoki raqam emasmi shuni tekshirib beradi 
// let a = "1"
// console.log(isNaN(a));
// bunda false chiqadi chunki bu raqam emas
// let a = "1"
// let a = 1
// buni biz console.log(a + +b) qilsak keyin ikki chiqadi 

//Yana bitta yo'li bu console.log(Number(a)) desak bu bizga numberga convert qilib beradi

//let b="10.3"
//console.log(Number(b))-bu sonni  to'liq qismini chiqarib beradi  =10.3
//console.log(Number.parseInt(b)) -bu sonni faqat to'liq qismini chiqarib beradi =10
//console.log(Number.parseFloat(b)) -bu sonni  to'liq qismini chiqarib beradi =10.3
// tepadagini numbersiz parsefloat deb ketsak bo'ladi

// ================

// Boolean
// True bu- 0 null undefineddan boshqa hamma narsa
// console.log(false == 0) true
// console.log(true == 1) true
// console.log(false == null) false
// console.log(false == undefined) false
// console.log(undefined == null) true

// console.log(true == "1") true 
// console.log(true == "2") true chunki bular 0dan katta bo'lgani uchun
// console.log(true == "a") false

// plus= +
// minus=-
// times= *
// divide= /
// rest= %
// ++ -- - increment, decrement 

// ++- bu bizga lyuboy bitta raqamga 1 qo'shib beradi
// let a = 1
// a++
// console.log(a) bu paytda bu 2 chiqadi
// let a = 2
// console.log(a++)
// console.log(a) bersak unda 1-chisi 1 2-chisi 2 chiqadi chunki biz ++di biz console log yozgincha bajarishimiz kerak

// Endi agar console.log(++a) bersak unda srazu o'sha songa 1 soni qo'shilib chiqadi.
// let a = 1
// endi agar console.log(a++)
// keyin console.log(++a)
//  birinchisi 1 chiqadi 2-chisi 3 chiqadi chunki 1-chisi o'zini ishini tugatishi bilan pastki qatordan u son 1 qo'shilib o'tadi 2-chisida o'ziga alohida bir qo'shilgani uchun u 3 bo'ladi

//abbreviations
// let a = 10
// a = a + 50
// a +=50 ikkalasi ham bir xil narsa faqat ikkinchisi soddalashtirilgan 1-chisida aytiladiki a bu manasu qiymat ikkinchi a esa manasheunga 10 qo'shib qo'y degani
// a +=50 a ga 50 qo'shib qo'y degani / Buni biz a -=50 a /=50 a *=50 qilishimiz mumkin

// ================
// Comparison
// Bu har doim booling ga qaytadi
//  let a =10
//  let b =11
//  console.log(a > b) bu false 
//  console.log(a < b) bu true chiqadi bu case numberlar bilan ishlaydi
// console.log ( a <= b) yoki ( a >= b) bersak unda ikkala narsani ham solishtiradi bittasi to'g'ri bo'lsa bo'ldi

// = == ===
// = bu verible ga yangi qiymat biriktiradi 
// == bu ikki narsanu bir biriga solishtiradi
// === bu qat'iy tenglik degani ya'ni == tenglik faqat qiymatlardi solishtiradi lekin === tenglik bu datatype lardi ham tekshiradi

// let a =" A"
// let b ="a"
// console.log(a<b) bular askii kodlar ruyhatiga qarab solishtiriladi

// != - bu teng emas degnai 
// !== - bu qat'iy teng emas degani

//  let a =11
//  let b =11
//  console.log(a 1= b) bu false beradi chunki bu ikkalasi biriga tengdir

// Agar let check = true 
//      console.log(check) bu true chiqadi
//      console.log(!check) bu false chiqadi

// // ==================
// Logical operations
// OR 
// let ceo = true
// let admin = false


// console.log( ceo === true || admin === true ) desak bu bizga true beradi chunki ikkalasidan bittasi true bo'lsa bo'ldi manashu or ya'ni yoki unusi yoki bunusi degani
// agar let yonidan ikkalasiniham false qilsak bizga false beradi 
// keyin buni qisqartirib yozsa ham bo'ladi masalan
// let ceo = true
// let admin = false
// console.log( ceo|| admin ) bunda admin false bo'lyapti ceo esa true bo'lyapti 


// And && 

// let id = true
// let face = true

// console.log(id && face) bu ikkalasiga ham ishlaydi ya'ni faqat ikkalasi ham true bo'lsa o'shanda true bo'ladi  bittasi false Bolsa u false boladi