// let title = "name"

// let obj = {
//     name:"webbrain",
//     title:"webbrain academy",
//     age:1234,
// };
//  console.log(obj.name);// 

// bunda oddiy usul bilan name ga access qilish 

// console.log(obj[title]);//

// bu esa objectga dynamic usul bilan access qilish . Ya'ni agar bizda bitta variable bo'lsada va keyin 
// u bilan boshqa bir variable ga access qilish uchun biz dynamic access qilamiz batta  title namega teng deyilyapti keyin 
// obj ichidagi name ga biz dynamic access qilinadi

// Number && String
// Intiger - butun sonlar 
// Float - kasir sonlar

// let a = 1000000
// let b = 1_000_000

// ikkinchidagi holat bu bizga faqat o'qishga oson qilib beradi xolos
// console.log( a == b) ikkalasi bir biriga teng

// Number constructor 
// 1-chisi 
// bu Number constructordi o'zi
// Bu bizga stringdi numberga o'zgartirib beradi
// agar stringdi ichida bironta harf qo'shilib qolsa unda bu NaN bo'ladi

// console.log(parseInt()); bu sondi to'liq qismini chiqarib beradi 
// console.log(parseFloat()); bu esa polniy qismini chiqarib beradi 
// lekin bulardi numberdan farqi agar stringdi ichida raqam va son bo'lsa unda faqat raqam joyini chiqarib beradida qolganini tashlab beradi

// console.log(parseFloat());
// console.log(parseInt()); bulardi asli

// console.log(Number.parseFloat());
// console.log(Number.parseInt()); dan kelib chiqqan keyinchalik qisqartirib shunaqa ishlatsa ham bo'ladi

// va agar biz  "1_000_000" stringdi 
// let a = 1
// let b = "1_000_000"
// console.log(a+ +b);
// qilsak parseInt faqat birinchi raqamini olib qo'shadi
// + + da esa NaN beradi 


// e bu 0 lardi ifodalab beradi 
// let a = 1e9
// desak unda bizga 1 milliard chiqarib beradi 
// let a = 1e1
// desak 10 chiqarib beradi
// ya'ni 1 dan keyin shuncha 0 bor degani 

// agar
// let a = 0.3
// let b = 0.1
// let c = 0.2
// console.log(c+b);
// bunda 0.30000000000000004 chiqadi bu weird javascript deyiladi

// agar biz 1e1 desak 1ta 0 etaklaydi va bu 10 bo'ladi
// agar biz 1e-1 desak 1ta oldidan 0 etaklaydi va bu 0.1 bo'ladi

// console.log(" HELLO" .charCodeAt()); bu qiymat bizga harflar nimadan tashkil topganini bildiradi

// keyin biz binary di decimal ga o'zgartirsak bo'ladi
// console.log (parseInt ("0011, 2 "))
// birinchidagi 0011 bu binary 
// ikkinchisi bu qanaqa sanoq sistemaga o'tkizish kerakligi haqida 
// bunda javobi 4 chiqadi

// Math keyword lar

// console.log(Math.PI); bu bizga 3.141592653589793 bu sonni chiqarib beradi
// let a = 1.6
// console.log (Math.floor(a)) bu sonning iloji boricha pastini olishga harakat qiladi ya'ni 1.6 bersak bu eng pasti bo'lgan 1 di oladi
// let b = 1.6
// console.log (Math.ceil(b)) bu esa sonning iloji boricha tepasini olishga harakat qiladi va bu sonning iloji boricha kattasi bo'lgan 2 ni oladi

// agar 
// let b = 1.6
// console.log (Math.round(b)) bu endi avtomatik tarzda bizga yaxlitlab beradi , agar son 0.4 dan past bo'lsa unda pastga qarab , agar 0.5 va undan baland 
// bo'lsa unda tepaga qarab yaxlitlab beradi 
// console.log(Math.abs(a)) bu sondi har doim + beradi agar biz qiymatdi - bilan bersak ham 
// console.log(Math.trunc(a)) bu sondi faqat butun qismini chiqarib beradi 
// console.log(Math.random ()) bu 0 dan 1 gacha bo'lgan lyuboy raqamdi chiqarib beradi 
// console.log(Math.random ()*100) qilsak unda bu 1 va 100 son urtasidagi raqamdi chiqarib beradi
// console.log ( Math.max(1 , 2 , 3 , 10)) bu bizga eng katta ya'ni 10 chiqarib beradi 
// console.log ( Math.min(1 , 2 , 3 , 10)) bu bizga eng kichik ya'ni 1 di chiqarib beradi
// agar biz console.log ( Math.pow(2 , 4)) desak bu console.log(2**4) ya'ni bironta sonni kvadratga ko'tarishda ishlaydi
// console.log (Math.sign(0)) bu sonning + yoki - yoki 0 ekanligini ifodalaydi xolos
// sqrt() bu sonning kvadratini 
// cbrt() bu sonning kubini ifodalaydi

// agar biz numberdi stringga o'tkazmoqchi bo'lsak unda toString functionidan foydalanamiz
// let a = 3
// console.log(a.toString(2));
// deymiz agar buni binaryga o'tkazmoqchi bo'lsak unda qavsdi ichiga 2 yozib qo'yamiz
// agar buni yana numberga qaytaramiz desak unda 
// let a = 3
// console.log(parseInt(a.toString(2),2));
// desak bu narsa yana numberga qaytadi
// bu yullar nasted bo'lishi mumkin , lekin bu narsani ishlatsak biz ortiqcha variable ishlatib o'tirmaymiz

// isNaN bu ma'lumot isNaN yoki unaqa emasligini ifodalab beradi
// let a =1
// console.log(IsNaN(123));

// to Precision - bu qatgacha raqamdi kesib olishdi aytib beradi 
// agar biz 
// let a = 3.12345678
// console.log(toPrecision(2)) bersak unda bizga umuman 2 son chiqarib beradi, lekin agar biz 

// ba'zi sonlarda agar kasrli sonlarni qo'shsak  0000004 kelib chiqadi shunga o'xshash
// console.log(0.1+0.3)yoki  console.log(0.1+0.7) kabilarda

// console.log(a.toFixed(2)); bu 1-chi sondan keyin yana 2 ta son olib kelib beradi
// console.log(a.toPrecision(2)); bu esa umaman ikkita son olib kelar edi 

// !!!!!!Hamma Methodlarda numberlar stringga o'zgarib ketadi