let a = 1, b=1

let c = ++a
let d = b++
console.log(c , d)
// javobi 2 va 1
// buning sababi birinchida a dan oldin +1 o'zi qo'shilib bo'lgan
// ikkinchisida esa b o'zining ishini tugatishi bilan keyin 1 soni qo'shilyapti

//===========

let v =2
let x = 1+ (v *= 2)
console.log(x)
// Javobi= 5
// bunda endi birinchi skobkani ichidagi qiymat bajariladi 
// va undan keyin tashqarisidagi

//===========
//Type conversion

a=""+ 1 + 1
// bu 11 chiqadi , chunki "" bunga 1 di qo'shsak "1" bo'ladi keyin "1"ga 1 qoshsak 11 chiqadi

b=""- 1 + 0
// bunda endi "" bundan -1 ayira olmaymiz o'shanga raqam o'z o'rnida turaveradi 
c=true + false
// bu 1 chiqadi chunki true bu 1 degani false esa 0 degani shunda 1+0 bo'lganda bizga 1 chiqarib beradi
d=6 / "3"
// batta esa raqamdi strimga bo'linyap turganda divide 3 strimiga emas balkimi soniga qarayapti
e= "2" * "3"
// agar biz bitta strimli raqamdi numberga ko'paytirmizmi yoki ikkita strimli raqmdi ko'paytiramizmi ular numberga aylanib ketadi
f= 4 + 5 + 'px'
// bu erda 4+5 bu 9 bo'lyapti va keyin "px" di qo'shsak "9px" chiqadi
g= "$"+4+5 
// bunda birinchi 4 + $ bo'lganda 4$ stringa bo'ladi keyin 5 4di oldiga shunday kelib qoladi
h= "4"- 2
// bironta stringdagi lyuboy sondan - qilsak u string katta bo'lishidan qat'iy nazar string ham numberga o'tib qoladi
i= "4px"-2
// bu erda nan chiqadi , chunki stringdi ichida ham raqam ham harf berilyapti
console.log( a, b,c,d, e, f, g, h, i)
// Tepadagilarning result lari
// 11 -1  1  2  6  9px  $45  2  NaN

//===============

j= 5>4
// bu true chiqadi 
k= "apple" > "pineapple"
// bu esa flase chiqadi chunki bunda a dan ko'ra p kattadir
l= "2"> "12"
// bu ascii kodlar bo'yicha ishlaydi va birinchi bo'lib 2 bilan 1 di solishtiradi va o'shanda 2 1dan katta bo'lgnai uchun bu true bo'ladi
m= undefined == null
// bu ikkalasi true chiqaishini sababi ikkalasi ham 0 ga tengdir
n= undefined === null
// bu false chiqaishini sababi bular alohida alohida data type dir
o= null== "\n0\n"
p= null=== +"\n0\n"
// tepadagi ikkalasida ham false bo'lganing sababi null undefined dan boshqa zech qachon true bermaydi 
console.log(j,k,l,m,n,o,p)         

