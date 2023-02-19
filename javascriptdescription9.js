// Strings
// let a = 'webbrain'
// let b = "webbrain"
// let c = `webbrain`
// shunga uxshash xar xil usullarda bersak bo'ladi 
// lekin uchunchisida biz qator tashlasak ham bo'ladi
// /n - new line 
// keyin biz huddi objectga o'xshab backtick dan foydalanib biz harflardi index raqami orqali chaqirsak bo'ladi

// let a = `webbrain`
// console.log(a[1]); bunda endi bizga e harfini olib keladi

// console.log(a.length); bu textdi uzunligini chiqarib beradi

// console.log(a[1]); bu oddiy holat 
// console.log(a.at(-1));
// console.log(a.charAt(1));
// at bilan charAt bu ikkalasi ham indexga qarab raqamdi chiqarib beradi , lekin at da - ham 
// ishlaydi ,lekin charAt da manfiy sonlar ishlamaydi. keyin bulardi biz stringda bersak ham ishlaydi 
// console.log(a.toUpperCase()); bu hammasini katta harf qilib beradi
// console.log(a.toLowerCase()); bu hammasini kichik harf qilib beradi

// cosole.log(a.indexOf('bb')) desak unda manashu narsa variabledi qiymatida bormi yoki yuq o'shani tekshirib beradi agar bo'lsa 
// o'shani indexini chiqarib beradi , agar yuq bo'lsa unda -1 deb chiqarib beradi
// agar 100% so'zga match qiladigan bo'lsa unda 0 chiqadi

// cosole.log(a.lastindexOf('bb')) desak bu oxiridan boshlab sanab bizga indexini chiqarib beradi

// includes ham shu teppadagi ikkitaga o'xshaudi , lekin bu true yoki false qaytaradi

// console.log(a.startsWith("+998")) desak unda bu shu raqam bilan boshlanganmi yoki boshlanmaganmi
// shuni ifodalab beradi 
// console.log(a.endsWith("+998")) bu shuni tugashini ifodalab beradi 

// QO'SHIMCHA INFORMARSIYA 


// agar biz logic jihatidan eng kichikini topgin desak unda va biz math ishlatmoqchi bo'lmasak unda 
// biz if else dan foydalanamiz 
// function(){
// if(a<b){
//     console.log(a,"kichik son");
// }else if (a===b){
//     console.log(a,b ,"teng");
// }
// else(
//     console.log(b,"kichik son")
// )}
// min (4,4)


// agar biz qiymatlardi hammasini qo'shmoqchi bo'lsak unda 
//     width:200,
//     height:200,
//     height:200,
//     title:'webbrain'
// }
// let sum = 0
// for (key in user){
//     if(typeof user[key] ===  "number"){
//         sum = sum + user[key]
//     }
// }
// console.log(sum); 
// deymiz ya'ni batta raqamlardi bir biriga qo'shgani biz ulardi bitta joyda saqlab turishimiz kerak 
// va batta biz batta bitta variable ochib olib raqamlardi saqlab bir biriga qo'shib ketyapmiz
// va batta loop bizga raqamlardi aylantirib beryapti 

// STRINGLARDI DAVOMI

// console.log(a.length, a.padEnd(10,".")); bu textdi oxiriga . qo'shib beradi ,agar bizning so'zimiz umuman 8 ta bo'lsa oxiriga yana ikkita . qo'shib beradi 
// console.log(a.length, a.padStart(10,".")); bu esa huddi tepadagini boshiga ishlaydi  
// bundan yana har xil yo'llarda foydalansa bo'ladi .Masalan : telefon kodini boshiga +998  qilib qo'shib va bundan ko'p son yaozmagin deb 

// console.log(a.slice(0,3)); desak bu bizga qirqib beradi 
// agar let num = "12345" deb 
// console.log(a.slice(0,-1)); desak unda bu bizga hamma qiymatlarni , toki 5 gacha bo'lgan qiymatlarni , chiqarib beradi 
// agar biz birinchi 3 keyin 1 bersak unda bu bizga kesib bermaydi , chunki birinchi katta keyin kichik qilib bo'lmaydi
// console.log(num.substr(0,3)); 
// console.log(a.substring(0,3)); bu ikkalasi ham slice qiladi , lekin substr bundagi birinchi qiymat boshlanishi keyingisi esa bu qancha uzun bo'lishi 
// lekin substring slice ga o'xshab ishlaydi  , va hozir substr dublicated bo'lib ketgan 
// va  biz substringda - lik son ishlata olmaymiz , chunki bu holatda 0 ga qaytib qoladi 

// agar biz console.log(eval("2+3+4")) bersak bu stringdi ichidagi polniy narsalardi string bo'lsa ham qo'shib beradi 
// ya'ni eval bu bizga string bilan arifmetik amal bajarishga imkon beradi 

// console.log(a.trim()) bersak bu textning boshidan va oxirida bo'lgan bush joylarni yuqotib beradi 
// masalan: let a= " webbrain " batta hozir length 10 ta lekin trim bersak bu 8 taga aylanib qoladi 
// trimEnd bu oxiridagini uchiradi
// trimStart bu boshidan uchiradi 

// console.log(a.split()) bersak bu narsa bizga stringdi arrayga o'zgartirib beradi 
// agar biz splitga "" manashunaqa function bersak unda bu har bitta information di alohida alohida qilib chiqarib beradi 
// va agar bush joy bo'lsa ham split buni alohida bitta element qilib beradi  
// let a = "1,253,567"
// console.log(a.split(",")) qilib vergul berib qo'ysak unda bu har bitta vergullini alohida alohida qilib beradi 1 alohida 253 alohida bitta array 567 alohida bitta array qilib beradi

// console.log(num.concat(a,num)); batta num bilan a va num di qo'shib beradi  
// ya'ni concat bu concation di qisqartirmasi va bu information lardi bir biriga qo'shish uchun ishlatilinadi 

// let str= String.raw`adsjl
//  asfjl` bu huddi backtick vazifasini bajaradi va bu backtickdan oldin chiqqan.

// va agar biz 
// let a = "webbrain academy "
// console.log(a.indexOf("rain")); bersak bu terminalda 5 chiqadi , chunki rain so'zi 5 index dan boshlanyapti 

// agar endi biz 
// let inp
// let str= "webbrain academy"
// let start = str.indexOf(inp)
// console.log(str.substr(start,inp.length));
// inputga so'z kiritmasakda va biz inputda bironta narsa yozsak uni qirqib chiqarib bersin desak unda shunaqa qilib structura beramiz
// va batta birinchi o'sha inp  di beriladi keyin esa text di yozamiz keyin esa let start = str.indexOf(inp) yana bitta variable ochib biz inp bilan str di 
// ichidagi textdi biri biriga bog'lab olamiz keyin oxirida esa log berib turib str di ichidagi textdi biz inputga yozsak bizga kesib chiqarib ber deb kod yozamiz
// console.log(str.substr(start,inp.length)); bu bizga text boshidan o'qib oxirigacha o'qinda va biz kiritgan harflardi ichidan qirqib chiqarib bergin degani 

// console.log(str.indexOf("a",7)); // Index of bu bizga a ni qatta turganliki haqida xabar beradi va bunda biz ,7 berganimizi sababi indexOf da shunqa qilib bersak unda bizga 7indexdan keyingi a ni chiqarib beradi 
// console.log(str.search(/B/)gi);// bu ham indexOf ga o'xshaydi , lekin bunda biz katta harf bersak ham regex, (/B/)i), orqali uni kichikina harf bo'lsa ham chiqarib ber desak bo'ladi 

// let a = "123456789"
// for (n of a){
// console.log(n);
// }bersak unda bu 123456789 bu stringdan numberlardi alohida alohida qilib olib chiqib beradi 


// console.log(a.localCompare(web)); bu battagi ya'ni console.log dagi va ma'lumotlarni solishtiradi agar butunlay to'g'ri kelsa unda 0 chiqaradi
//agar biz bergan ma'lumotning ba'zi qismining ketma ketligi to'g'ri kelsa unda 1 chiqaradi va agar umuman to'g'ri kelmasa unda bu bizga -1 beradi
