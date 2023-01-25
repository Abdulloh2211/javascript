// java script 1-dars
// Kodni tekshirish usullari 
// 1. Google dagi console da tekshirish- bunda biz bodyga script yozib turib orasiga console.log('') deb yozamiz
// 2. Googledagi js compiler orqali online ishlash- bunda biz online kodlardi yozib tekshirsak bo'ladi
// 3. bu papka.js ochib html bilan javani bog'lab qilinadi. linkdi bodydi oxirida yoki bodydan keyin beriladi.
// Java Script was established by Brendan Each in 1995.first name was LiveScript
// console.log('') bu bizga  koddi terminalda chiqarib bergani ishlaydi

// let- bu o'zgaruvchan narsa oldidan yoziladi.Agar let text(name) ="lorem1000" bersakda keyin pasidan console.log('text') bersakk huddi shu lorem yana kelib chiqaveradi
// textdi o'rniga yana boshqa name bersak ham bo'ladi

// ;- bu koddi tugaganini bildiradi

// Agar let text; console.log('text') bersak unda undefined chiqadi
// Agar let text; commentda bo'lib console.log('text') bersak unda is no defined bo'lib chiqadi

// let di o'rniga var yoki const bersak bo'ladi 
// let -bu single room ya'ni har bir xonaga alohida ishlaydi
// var- bu global ya'ni polniy hamma narsaga ishlaydi
// const- bu constant ya'ni buni boshqa joyda ismini o'zgartirsa bo'lmaydi.

// let text = ('lorem100') berib pasidan console.log('text')bersakda keyin uni pasidan text=('Webbrain')bersak unda birinchi loremdi keyin Webbrain degan kodni chiqarib beradi.
// const text=1; keyin console.log('') berib yana text=...; bersak unda u bizga error beradi.
// bitta letga bir necha narsani declare qilib ketsak bo'ladi masalan: let num=1, a=2, b=3; keyin conole.log(num,a,b) qisqartirib yozsa ham bo'ladi.
// agar let a=b=c=3 bersakda console.log('c,a,b); bersak terminalda 3 3 3 chiqadi

// assigment-bu tepadagi a=b=c kabi birlashtirish
// agar let var const bo'lmasa bu avtomatik tarzda var bo'ladi masalan: b=3;
// 
// bular variables edi endi datatypega kiramiz
// JAVASCRIPTDA DATATYPE LAR 8TA
// 1- BU NUMBER bu terminalda sariq bo'lib chiqadi
// 2- BIGINT endi agar maksimal raqamga borsak unda console.log(65416166546n+1n) qilsak keyin unga qo'shsak bo'ladi
// 3- BU STRIM YA'NI TEXT DEGANI BULAR console.log('') console.log("") console.log(``BU BELGINI OTI BACKTICK) berib ichidan biron narsani yozsak u strimga aynalib ketadi 
// Agar biron narsani strimdi ichida ajratib ko'rsatmoqchi bo'lsak unda console.log("Welcome to \"Webbrain\"")bersak  unda web brein so'zini kovichkada chiqarib beradi
// lekin tepadagini o'rniga console.log("Welocome to'webbrain'" ) yoki console.log('Welocome to"webbrain"') desak ham bo'laveradi 

// \n desak bu yangi qatorga olib o'tadi terminalda

// let name ="Webbrain Academy"
// console.log("Welcome"+name+"It centre") bersak keyin bizga Welcome to Webbrain academy It centre deb chiqaradi.

//endi shuni backtick qilib berib osonroq qilib bersak bo'ladi
// Masalan: let name ="Webbrain Academy" keyin pastidan  console.log(` Welcome ${name} , It centre `) bersak bizga shunda terminalda Welcome to webbrain academy,It school chiqarib beradi
//qo'shimchasiga `` bu orasida yozilgan narsalarda 2 yoki 3 qator qilib yozsak o'shani ham e'tiborga oladi.
//lekin '' "" bu ikkalasida qangi linega o'tish xususiyati qo'q
//stringdi yaxshi tomoni biz xohlagan bor boshqa o'zgaruvchi ishlatsak bo'ladi
//  console.log(type of )bersak type ni aniqlab beradi masalan 1 bersak number beradi name bersak string chiqarib beradi

//4-BOOLEAN BU TRUE VA FALSE 
//5-NULL bu undefined bilan pochti bir xil lekin biroz farqi bor
//6-Undefined bu let a; pasidan let b =null; berib yana pastidan console.log(a, b) bersak birinchisi undefined beradi ikkinchisi qiymat biriktirilganu lekin u null ga teng degani.
//keyin bulardi typeda ham farqi bor agar console.log(typeof a, typeof b) bersak birinchisi undefined ikkinchisi object bo'lib chiqadi
// agar console.log(null==undefined ) qilsak bu true chiqadi chunki ikkalasida ham qand yo'q lwkin === bersak false chiqadi chunki bu qanddi qog'ozigacha tekshiryapti

// null yaxshi tarafi keyinchalik bironta arifmetik jihat bersak bu ishlab ketaveradi ,lekin undefined esa NAN CHIQARIB BERADI

//PRIMITVE -
// 1.NUMBER 
// 2.BIGNIT
// 3.STRING
// 4.BOOLEAN
// 5.NULL
// 6.UNDEFINED
// 7.SYMBOLS
//NON-PRIMITIVE
// 8.OBJECTS
//IKKALASINI FARQI INTERNETGA YOZILSA PRIMITIVELAR PASS BY VALUE QAYTARADI NON-PRIMITIVE ESA PASS BY REFERENCE QAYTARADI

//7. SYMBOLS PBU BIZGA UNIQUE ID yasab beradi
// va bunda ikkita== uoki === berasizmi bu har doim false beradi chunki ikkita symbol xattoki let bilan o'shani copy qilsak ham u bir biriga teng bo'lmaydi
// console.log (a==b)yoki (a===)

//NON-PRIMITIVE 
//8.OBJECTS-array,obj,function
//butun javascript objectdir
//let ar =["Muhammad",12,"Alisher"] bu bizda index bo'yicha ishlaydi 
//let obj={name:"webbrsin",status:"It centre"} bu esa key orqali ishlaydi
//let func=() keyiinchalik{}
//yoki function test(){} bo'lib keladi
// bunda agar gullik qavsga hamma yozgan console lardi tiqib qo'ysak unda tepadagi kodladi o'qimaydi ,qachonki gullik qavsdan keyin test() BERSAK USHANDA KOD ISHLAB KETADI ya'ni bu bizga qachonki bironta ish bo'lsa keyin biron nima bo'lsin deyilganda ishlaydi


// nima index bo'yicha ishlaydi desak chunki index 0 1 2 degani bo'lsa biz bitta katta konteynerdan ya'ni array chaqirishda biz console.log(ar[0]) raqam bilan chaqirsak unda 1-chidagi Muhammad keladi
// keyga kelsak buni biz key so'zlar bilan chaqiramiz console.log(obj.name) desak webbrain so'zi keladi
//null obyekt emas lekin typeof qilinsa object chiqadi

// alert confirm prompt bu consle.log ga tegishli bo'ladi

