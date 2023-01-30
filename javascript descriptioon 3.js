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

let temp = 5
if(temp<0){
    console.log("havo juda sovuq")
} else if ( temp<10){
    console.log("havo  sovuq")
}else if ( t0emp<15){
    console.log("havo  issiq")
}else if ( temp<25){
    console.log("havo juda issiq")
}