// Switch conditiion - same as if but there is a little difference 
// let data = "yomg'ir"

// switch (data){
//     case "yomg'ir": console.log( " bugun yomg'ir")
// }
//  oldin biz if dan foydalanib 
//  if (condition){code} bergan bo'lsak endi bunda syntaxi
//  variable
//  switch(variable){
//     case "variable nimaga teng bo'lsa" : console.log("result");
//  }
// ya'ni case shunaqa bo'lsa unda consoleda bunaqa chiqsin degani
// va biz switchda faqat exact thing larni tekshira olamiz xolos lekin katta bo'lsa munaqa kichik bo'lsa munaqa bo'lsin deb buni ishlata olmaymiz
//Masalan:
// let data = "1"
// //switch (data){
//     case 1: console.log('teng')
// } desak bizga xech nima chiqarib bermaydi , chunki variable bilan case === qat'iy teng bo'lishi kerak 
// va biz holatlardi bir biridan ajratish uchun break qo'yishimiz kerak bo'lmasa keyingi case ham 1 ga tegishli deb ulardi ham chiqarib beradi
// let data = "yomg'ir"

// switch (data){
// case "yomg'ir": console.log( " bugun yomg'ir") 
// break
// case "qor": console.log( " bugun yomg'ir") 
// break
// case "quyosh": console.log( " bugun yomg'ir") 
// }

// Endi switchdi ham else ga o'xshagan qiymati bor
// U default: console.log("") deb yoziladi

// switch (data){
// case "yomg'ir": console.log( " bugun yomg'ir") 
// break
// case "qor": console.log( " bugun yomg'ir") 
// break
//  case "quyosh": console.log( " bugun yomg'ir") 
//  default: console.log(" no data ")
// }

// if =>   <,>,<=,>=, =,==,===
// switch =>  only ===


// ================
// FOR LOOPS
// for loopning parametirlari
// for (boshlanish, manzil, step)
// bu narsa huddi zinaga o'xshatiladi , chunki for di boshida qattan boshlashimizi aytamiz keyin qatga borishimiz ya'ni nechinchi zinagacha chiqishimiz 
// keyin oxirida esa oxiriga borgincha nechta qadam tashlashimiz aytiladi

// for (i = 1; i<=10 ; i = i + 1) {
//     console.log('hi webbrain');
// }

// endi bu erda shunday bo'lyaptiki har bir oddiy qavdi ichidagi qiymatlarni bir biridan ajratish uchun biz ; bu belgini ishlatamiz 
// keyin birinchi bo'lib qayerdan boshlashimiz keyin esa qatgachaligi keyin esa i = i + 1 bu belgi bilan qanaqa qadam tashlashimiz haqida yozamiz
// ikkinchi gullik qavsda esa biz qiymatlarni beramiz

// lekin bizda oddiy qavsdi ichidagi ikkinchi qiymat bizdan true yoki false qiymatini kutadi agar bu ushatga true deb yozib qo'ysak unda bizga tuxtamasdan hi webbrain deb tuxtamasdan chiqarib beradi
// toki biz ctrl+s qilib tuxtatmaginimizcha  
// agar buz ushaning o'rniga false bersak unda u bizga hech nima chiqarib bermaydi

//  let i = 1
//  for (i ; i<=10 ; i = i + 1) {
//  console.log('hi webbrain');
// } biz i ga shunaqa qilib qiymat bersak ham bo'laveradi


//  let i = 1
//  for (i ; i<=10 ; i = i + 1)  {
//     console.log(i);
//  } buning javobi = 1 2 3 4 5 6 7 8 9 chiqadi chunki birinchi bo'lib birinchi qiymatti tekshiradida va keyin u 1 bo'ladi keyin true yoki false ligin tekshiradi
//  keyin i = i +1 di tekshirganda unga keyingilaridan 1 dan qo'shib boradi

//  i = i + 1 bu bizga nimaga kerak ? Bu bizga zinaning tepasiga yetib borish uchun ishlariladi. Agar buni ishlatmasak biz hech qachon zinanig oxiriga yetib bora olmaymiz
// agar ikkitadan qadam tashlamoqchi bo'lsak unda biz i = i + 2 qilib qo'yamiz
// keyin biz  i = i + 1    i++ ga o'zgartirib ketsak bo'ladi . Bu narsa oxirida ishlagani uchun ++i qilamizmi yoki i++ qilamizmi farqi yuq
   
// for (i=1 ; i<=10 ; i = i + 1)  biz batta fordi 1-chi qiymatini olib tashlasak ham bu ishlayveradi , lekin 3- qiymatdi ham olib tashlasak unda bu bizga cheksiz 1 chiqarib beradi

// for (i ; i<=10 ; )  {
// console.log(i);
//  i++
//  }  qilsak ham farqi yuq


//let i = 1
//for (;;)  {
// console.log(i);
//  } manashunaqa qilib yozsak ham bo'ladi va bunda ham cheksiz 1 chiqadi

///endi biz batta var bilan let farqini ko'rsak ham bo'ladi
// Masalan:
// for ( let i=1 ; i<=10 ; i = i + 1)  {
//  }
// console.log(i);
// bersak unda bizga refence xatolik chiqarib beradi
// lekin var global bo'lgani uchun munda unaqa chiqarib bermaydi
// for ( var i=1 ; i<=10 ; i = i + 1)  {
//  }
// console.log(i); bizga batta endi 11 chiqarib beradi
// va keyin 
// // for ( var i=1 ; i<=10 ; i = i + 1)  {
//  }
// console.log(window);
// bersak buni bizga polniy windowda ham i 11 dei chiqarib beradi 
// va bu bizga butun boshli windowning root qiamida bizda javadagi i11 bor
// chunki var bu globar 
// va window bu eng katta obyekt hisoblanadi


//break and continue 
//  var sum = 0
//  for( i=1 ; i<=10 ; i = i + 1){
//     console.log((sum+=i))
//     if (sum === 10 ) break
//  } 
 // bu bizga biror narsani masalan 1 pachka bo'lganidan keyin tuxta degani kabidir
 // bunda biz bitta variable berishimiz kerak , chunki sonlardi bitta joyda saqlab turish kerak , keyin sumga o'shani qo'shib qo'ysak unda shu holat kelib chiqadi
 //   if (sum === 10 ) break bu esa bizga aytadiki agar sum 10ge etganda bu to'xtasin degani 
 // break 10 loop bo'ladimi yoki 15 bo'ladimi uni to'xtatib qo'yadi
 // ENDI BATTA NIMAGA 1 3 6 10 JAVOB CHIQYAPTI DESAK , CHUNKI SUM 0 GA TENG VA I ESA 1 GA ENDI I  DA AYTYABDIKI 10 GACHA 1 BOSHLAB 2 3 4 QILIB KETGIN DEYAPTI LEKIN 
 // PASTDA CONSOLEDA AYTILGANKI SUM + 1 QILIB CHIQAR DEB YA'NI BUNDA ENDI 

//  var sum = 0
//  for( i=1 ; i<=10 ; i = i + 1){
//     console.log( `Sum = ${sum} + ${i}= ${(sum += i)}`)
//     if (sum === 10 ) break
//  } 

// Agar 
//  var sum = 0
//  for( i=1 ; i<=10 ; i = i + 1){
//     console.log(i)
//     i+= i 
// } buning javobi 1 3 7 chiqadi , chunki boshida bu narsani boshlang'ich qiymati 1 chiqadi keyin esa i 1 bo'ladi keyin unga o'zini qiymatini qo'shsak u 2 bo'laid va  for di 3 qiymatidan 1 bersak
// 3 bo'ladi endi i 3 ga aylandi endi bunga o'zini biriktirsak 6 va fordi 3 - chi qiymatini qo'shsak  7 bo'laid keyin esa 15  chiqqani uchun uni chiqarmaydi
// va for ning 3 -chi qiymati gullik qavs ishlab chiqib true berganidan keyingina ishlaydi

// var sum = 0
//  for( i=1 ; i<=10 ; i = i + 1){
// console.log (i % 2) } 
// shunaqa desak unda bizga 1 0 1 0 1 0 1 0 1 0 deb chiqarib beradi chunki bu bizga qoldiqdi chiqarib beradi

// agar 
// var sum = 0
//  for( i=1 ; i<=10 ; i = i + 1){
//     if( i % 2 ===  0) console.log (i) }
// desak bizga faqat juft sonlardi chiqarib beradi

//  for( i=1 ; i<=10 ; i = i + 1){
//     if( i % 2 ===  0) console.log (`juft son ${i}`)
// else console.log(`toq son ${i}`) }
// toq son 1
// juft son 2
// toq son 3
// juft son 4
// toq son 5
// juft son 6
// toq son 7
// juft son 8
// toq son 9
// juft son 10
// bizga manashunaqa javob chiqadi

// shunga qo'shimcha 
// agar 
// //  for( i=1 ; i<=10 ; i = i + 1){
//     if(!(i % 2) ) console.log (`juft son ${i}`)
// else console.log(`toq son ${i}`) }
// bunda agar ! narsani bersak bu bizga endi 1 chiqarib beradi keyin bir true bo'ladi lekin ! bu belgi uni false qilib bergani uchun else dagi code chiqadi 

// keyin buni biz 
// //  for( i=1 ; i<=10 ; i = i + 1){
//     if(i % 2)  console.log(`toq son ${i}`)
// else  console.log('juft son')}
// bo'laid chunki i&2 true chiqadi ve keyin bu true chiqadi keyin esa bu true chiqqani uchun bizga yonidagi log di chiqarib beradi

// for( i=1 ; i<=10 ; i = i + 1){
// if( i % 3 ===  0) continue
//  console.log (i) }
// bunda esa 3ga qoldiqsiz bulinadigan sonlarni olib tashlaydi

// endi agar biz 1 dan 10 qarab emas , balkim 10 dan 1 ga qarab ketsin deyilsa
// for( i=10 ; i>=1 ; i = i - 1){
//  console.log (i) }
// deymiz
// for( i=10 ; i>=1 ; i--){
//     for( j=1 ; j<=10 ; j = j +1){
//         console.log (j) }
// //  console.log (i) 
// } 
// agar console ga j bersan 12345678910 dan 10 marta chiqarinb beradi 
// agar i bersak  10 dan 10 marta 9 dan 10 marta 8,7,6,5,4,3,2,1dan 10 martadan chiqarib beradi


// biz endi ampersant haqida gaplashsak && 
// bu bizga aslida ikkita to'g'ri bo'lgan narsani chiqarib beradi endi agar 
// true && false bersak unda bizga false degan qiymat chiqarib beradi 
// console.log( 0 && undefined);
// endi bunda bizga 0 chiqarib beradi chunki ikkita noto'g'ri bo'lsa birinchi noto'g'risini chiqarib beradi


//==============

// while loop 
// bunda if bilan switch qanday farqi bo'lsa for loop bilan while loopdi shunaqa farqi bor
// bunda ham faqat bitta holat yoza olamiz
// let i = 0
// while( i <=3){
//     alert(i)
//     i++
// }
// batta aytyapmizki i 0 ga teng bo'lsin va 3 ga borgincha bittadan qo'shilib borsin va bu ishlar alert da bo'lsin
//  lakin pastda bittadan qo'shilgin degan qiymatdi qo'sh degani
// agar aletdi o'rniga console.log bersak unda 0 cheksiz bo'lib chiqadi

// endi shuni do while ham bor faqat while birinchi tekshirib keyin kodni chiqarsa do while da birinchi qilib keyin tekshiradi , shuni hisobiga buning tekshirish keyingi 
// keyingi yozgan kodlarimizga ta'sir qilishi mumkin

// let i = 0
// while( i ){
//     console.log(i, 'while')
// }
//  do {   console.log(i, 'do while')
// } while ( i)
// 0 do while degan javob chiqadi chunki birinchisida tepadan tekshirib keladi keyin false chiqqani ubhun qavsidi ichidagi while di chiqarib bermaydi 
// keyin ikkinchisiga kelsak unda birinchi koddi o'qidi keyin tekshiradi







