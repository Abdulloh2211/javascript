// parametr bu function so'zidan keyin () shuning ichida qiymat berish va agar biror nimaga pastdan qiymat bermasakda va bu bizga error bermasligini xohlasak 
// unda biz ( a ="") qiymatsiz shu narsani berib qo'yishimiz kerak

// oboject bular bir necha ma'lumotlarni o'z ichiga ola oladi , va bu bitta guruhga tegishli narsalardi bitta paket qilib beradi
// Masalan:
// let webbrain ={
//     title: "webbrain academy"
//     location: "Chilonzor"
//     title: 1555
// }

// kabi berilsa ham bo'ladi
//  agar let obj =() bersak unda bu bizga bo'sh object qaytaradi 
// agar let obj = new Object () object constructor , bu ham hozir bizga bo'sh object qaytaradi, lekin bu bilan keyin yana boshqa narsalar qilsak ham bo'ladi

// agar biz bir necha qiymat orasidan bittasini chaqirmoqchi bo'lsak unda keywordlardan foydalanamiz
// console.log(webbrain.title);
// console.log(webbrain["title"]); bu ikkalasi ham bir xil ma'noni anglatadi

//// console.log(webbrain["title"]); bu turdagi kodning bizga yaxshi tarafi agar ikki bo'g'inli so'z bo'lsa unda biz faqat shunaqa qilib chaqira olamiz
// masalan 
// let webbrain ={
//     title: "webbrain academy"
//     location: "Chilonzor"
//     title: 1555
// }

// let location = "chilonzor "
// console.log(webbrain.location);
// bunda location chiqadi va batta location key bo'lib kelyapti
// console.log(webbrain.[location]);
// console.log(webbrain."chilonzor");
// bu ikkalasi bitta narsa lekin hozir bu bizga undefined chiqaradi va batta location variable bo'lib kelyapti
// console.log(webbrain.["location"]);
// bu ham bizga location deb chiqaradi va batta location  string sifatidagi key bo'lib kelyapti

// bular objectlardi chaqirish yo'llari edi 
// va skobka bilan chaqirish esa bu dynamic deb hisoblanadi

// let webbrain ={
//     title: "webbrain academy"
//     location: "Chilonzor" 
//     title: 1555
// }  webbrain.age = 3
// agar pastdan biz webbrain.age = 3 desak unda agar tepada bo'lsa unda uning qiymatini o'zgartirib qo'yadi 
// agar tepada bo'lmasa unda bizga bu yangi qiymat qilib beradi 

// delete webbrain["fullname"] desak unda bizga fullname degan information di bizga o'chirib beradi

// // agar biz 
// let num = "ali"
// let sum = { id : 1, num}
// console.log(sum);
// qiladigan bo'lsak unda bu bizga avtomatik tarzda num: ali deb chiqarib beradi , lekin bunda biz oldin bitta variable bergan bo'lishimiz kerak

// let num = "ali"
// let sum = { id : 1, num}
// console.log([sum[num]]);
// bersak unda bu undefined beradi chunki sum di ichidagi num boshqa narsa va tepadagi num boshqa narsa tepadagi variable bo'lsa
// pastdagi u keyword deb hisoblanadi 
// va batta sum di ichidagi num deyilganda batta num di bu ali deb qabul qiladi shunda sum di ichida ali degan key oxtaradi ,keyin atta u narsa bo'lmagani uchun undefined beradi

// agar endi biz 
// for (i in webbrain){
//     console.log(i);
// }
// desak bu bizga webbraindi ichidagi hamma key lardi chiqarib beradi 

// agar biz endi objectdagi value lardi chiqarmoqchi bo'lsak unda 
//     let webbrain ={
//     title: "webbrain academy",
//     location: "Chilonzor", 
//     year: 155
// } 
// for (key in webbrain) {
//     console.log(webbrain[key]);

// }
// va bu endi bizga hamma keylardi chiqarib beradi

// agar biz ikkita objectning qiymatlarini birlashtirmoqchi bo'lsak unda 
// let name ={name:"webbrain"}
// let users ={year:2019}
// bunda biz 
// name ={ ... name , ... users}
// yoki
// name.name = users.year
// desak bo'ladi lekin ikkinchisi bu optimal yechim deb hisoblanmaydi 
// ... 3 ta nuxta bu bizga skobkalardi tashab ikkalasini bir qilib beradi
// yoki 
// Objectk.assign(name,users)
// desak ham bo'ladi

// agar biz 
// let wba1={name:"webbrain"}
// let wba2={name:"webbrain"}
// let wba3= structuredClone (wba2)
// wba2.name ="2345678"
// console.log(wba1,wba2,wba3);
// batta structuredclone wba3 ga alohida reference beradi va wba2 ni o'zgartirsak unda wba3 ham o'zgarib ketmaydi
// bu qachonki bitta objectga boshqa bir object tenglab qo'ysak ishlatiladi va bu o'shanda reference di copy qilib olmaydi




