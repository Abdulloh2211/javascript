// let a = 10
// console.log(a ** 2)
// bu bizga sondi kvadratini chiqarib beradi

// console.log(null == undefined)
// console.log(null === undefined)

// =================
// if else
//  bu bizga ikkita narsadan qaysi biri to'g'ri bo'lsa o'shani bizga chiqarib beradi if bizdan true yoki false javobini kutadi
//Masalan: 
// let a = 1
// if(a) {
//     console.log('havo issiq')
// }

// if(true) {
//     console.log('havo sovuq')
// }
// batta  birinchisida 1 bo'lgani uchun bizga true beradida keyin bu true bo'lgani uchun bizga natijani terminalda chiqarib beradi
// Agar false bo'lsa unda u bizga terminalda chiqmaydi.

// let a = null yoki undefined yoki 0 bo'lsa bu bizda terminalda chiqmaydi
// if(a) {
//     console.log('havo issiq')
// }

// if(true) {
//     console.log('havo sovuq')
// }

// if di else bilan ishlashi :

// let age = prompt()
// if ( age > 18){
//     console.log('can open gmail')
// } else{
//     console.log(
//         "cant open gmail" )
// }

// buni endi googlega kirib inspectda kodlarini yozadigna bo'lsak unda bizga console qismida bizga javobini chiqarib beradi
// agar yoshga 18 bersak unda bizga cnat open gmail beradi 
// agar 19 berdak unda bizga can open gmail beradi
// buni googleda qilingani sababi biz bu erda terminalda bunaqa natijani ola olmasdik ya'ni console interaction qila olmasdik

// let temp = "qor"

// if (temp === "issiq") {
//     console.log(
//         'havo issiq yengil kiyinib oling'
//     )
// }else if (temp === "sovuq") {
//     console.log(
//         'havo sovuq qalin kiyinib oling'
//     )
// }else if (temp === "qor") {
//     console.log(
//         'havo qor qalin kiyinib oling'
//     )
// }  else (
//     console.log(
//         'havo nomalum '
//     )
// )

// bu bizga biror nima bo'lsa unda nima chiqarib berishda ishlaydi 
// agar masalan qor bo'lsa unda havo qor qalin kiyinib oling 
// Endi bu erda biz else if ishlatganimizi sababi agar biz bu narsani ishlatmaydigan bo'lsak bu bizga ba'zi bir joylarda chalkashliklar chiqarib berishi mumkin

// masalan:
// let temp = "issiq"

// if (temp === "issiq") {
//     console.log(
//         'havo issiq yengil kiyinib oling'
//     )
// } if (temp === "issiq") {
//     console.log(
//         'havo sovuq qalin kiyinib oling'
//     )
// } if (temp === "qor") {
//     console.log(
//         'havo qor qalin kiyinib oling'
//     )
// }  else (
//     console.log(
//         'havo nomalum '
//     )
// ) qilsak bu bizga
// havo issiq yengil kiyinib oling
// havo sovuq qalin kiyinib oling
// havo nomalum
//degan chalkashlikni chiqarib beradi 
// lekinin else if bersak unda bu bizga ikkita bir xil bo'lgan narsani birinchisini chiqarib beradi
// qollganilarini tashlab yuboradi
// va oxiridagi else bizda tepagilardan birontasi ham to'g'ri bo'lmaguncha chiqmaydi

// let temp = 5
// if(temp<0){
//     console.log("havo juda sovuq")
// } else if ( temp<10){
//     console.log("havo  sovuq")
// }else if ( temp<15){
//     console.log("havo  issiq")
// }else if ( temp<25){
//     console.log("havo juda issiq")
// }
// BU ENDI QACHONKI BIZ KODNI TO'G'RI YOZSAK. AGAR BIZ BUNI TO'G'RI YOZMASAK UNDA KODLAR CHALKASHIB KETADI
//MASALAN:
// let temp = 5
// if(temp<0){
//     console.log("havo juda sovuq")
// }else if ( temp<25){
//     console.log("havo juda issiq")
// }else if ( temp<15){
//     console.log("havo  issiq")
// } else if ( temp<10){
//     console.log("havo  sovuq")
// }
// bunda endi bizga havo sovuq emas balkim havo juda issiq deb chiqarib beradi, chunki 25 ham 5 dan katta va kod tepadan o'qib keladida keyin 
// 1-chi bo'lib 25 di ko'radida keyin pastiga o'tmaydi

// batta yana ham optimal yechim bor 
// let temp = 5
// if(temp<0){
//     console.log("havo juda sovuq")
// }else if ( temp<25 && temp>15){
//     console.log("havo juda issiq")
// }else if ( temp<15  && temp>10){
//     console.log("havo  issiq")
// } else if ( temp<10  && temp>0){
//     console.log("havo  sovuq")
// // }
// batta endi multi thread qilib ishlayabmiz ya'ni qachonki ikkala berilgan qiymat ham bir xil bo'lsa o'shandagina bizga javobdi bersin kabi bo'lyapti

// Syntax
// if ("condition") { "code"}
// else if ("condition"){"code"}
// else{ "code"} -bunda code o'zini beriladi chunki hamma narsani conditionlarini tepada berib bo'lganmiz endi o'shanga pastda else deb turib faqat code yozsak yetadi

// if ("condition") "code"
// else if ("condition")"code"
// else "code"
// bu holatda biz skobkasiz yozsak bo'laveradi , lekin biz yozyab turganda console.log() if condition bilan bitta qatorga sig'ishi kerak
// bu function javascriptdi esx versiyasidan boshlab chiqqan
// bundan biz faqat kodimizi soddalashtirish maqsadida foydalansak bo'ladi lekin buni hech qanaqa previlige narsasi yo'q

//===========
// conditional operator yoki question mark operator yoki turnary operator 
// Ko'pincha turnary operator deb ishlatiladi . Bu qiymat ham esx versiyasida chiqqan
// bu ?- if va : - else belgilari bilan ifodalanadi
// bu narsa huddi if elsega o'xshaydi va bu narsani faqat true yoki false qiymatlarini olish uchun ishlatishga tavsiya qilinadi
//Masalan:

// let temp=25
// temp > 0 
// ? console.log("havo juda issiq") 
// : console.log("not found")

// Ya'ni agar temp 0 dan katta bo'lsa havo juda issiq bergin agar unaqa bo'lmasa not found bergin degani
// bundi faqat ikkita qiymat yozish tavsiya qilinadi undan oshqig'ini ham yozsa ham bo'ladi lekin u tavsiya qilinmaydi
// Agar undan ko'p yoziladigan bo'lsa koddi umuman tushunib bo'lmaydi

// endi biz nimaga tavsiya qilinmasligini ko'rib chiqamiz
// let temp=-5
//  temp < 0
//  ? console.log("havo juda sovuq")
//  :temp<10
//  ? console.log("havo  sovuq")
//  :temp<15
//  ? console.log("havo issiq")
//  : console.log("havo juda issiq")
// birinchi bo'lib biz let beramiz keyin else bilan kod boshlay olmaymizda o'shanga birinchisini : siz beramiz lekin qolgan narsalar o'z o'rnida ketaveradi
//Manashunda biz juda chalkashib ketamiz 
// O'shanga bizga bu orqali ikkitadan ko'p qiymat ishlatish tavsiya qilinmaydi

// ===============

// Nullish - bunda ikkita ?? belgisi nazarda turtiladi

// bu narsa OR bilan bir xil narsa lekin bu  null bilan undefined di false deb qabul qiladi
// agar console.log( 1 || 2) desak bizga 1 chiqarib beradi , qachonki biz birinchisini false qiladigan bo'lsak keyin ikkinchin qiymatti chiqarib beradi
// Ya'ni or  bu 0 false NaN undefined null bulardi hammasi olmasdan ikkinchi qiymatga qarab o'tib ketadi 
// Lekin ?? bunga kelsak bu faqatgina undefined va null ni olmasdan o'tib ketadi xolos boshqa vaqtlarda bizga hamma qiymatlarni chiqarib beradi
// console.log( 4 *  3) bu ko'paytirish =12
// console.log( 4 ** 3) bu kvadrat =64

