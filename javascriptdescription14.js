// new Map 
// bizda new Map huddi object kabi ishlaydi , lekin biz map di ichiga function va boshqa narsalar bersak bo'ladi 
// let a={} 
// let b= new Map ()
// a.name='webbrain'
// b.name='webbrain'
// console.log(a,b);

// buning ikkalasinig ham javobibir xil chiqadi va lekin mapda biz functionlar ham ishlatsak ham bo'ladi 
// { name: 'webbrain' } Map(0) { name: 'webbrain' }

// va keyin biz set degan advanced option dan ham foydalansak ham bo'ladi 
// let b= new Map ()
// b.set("name","it center") 
// console.log(b); desak unda
// Map(1) { 'name' => 'it center' } // shu javobdi chiqarib beradi 

// endi shuni agar biz console.log(b.get('name')) desak unda bu 
// bizga name di valuesi bo'lgan it centerdi chiqarib beradi 

// console.log(b.has('name')) desak bu bizga shu narsa bormi yoki yuqmi shuni aniqlab beradi 
// bu bizga true yoki false qaytaradi 

//// console.log(b.delete('name')) qilsak bo'ladi bu ma'lumotdi uchirirb yuboradi 

// console.log(b.clear('name')) bu bizda bor hamma ma'lumotlarni uchirib tashlaydi 

// agar biz mapdi ichidan array bermoqchi bo'lsak , unda biz uni huddi object entries qanaqa formatda javob 
// chiqarsa shunaqa qilib biz yozishimiz kerak 

//map.keys 
// map.values
//map.entries bersak ham bo'laveradi 
// agar biz 
// let gen =map.entries()
// gen.next()
// console.log(gen.next()); qilsak bu bizga oxirida done false beradi  

// let gen =map.entries()
// gen.next()
// gen.next()
// console.log(gen.next()); qilsak bu bizga oxirida done true beradi  

// ya'ni huddi for loopga uxshab bu aylanadi agar aylanadigan narsa bo'lsa done false agar tugagan bo'lsa done true beradi 

// va keyin biz forEach bilan yoziladigan function bilan map ni ishlatsak bu bizga error beradi 
// bu weird javascript deyiladi

// va biz ma'lumotdi mapdan ma'lumotdi dynamic usulda ola olmaymiz bunda faqat get ishlaydi 

// map bu key va value collection va bu objectga o'xshatilardi 

// lekin endi set bu arryga  o'xshatiladi va bu faqat value collection 

// va set da add bor set emas va get emas balkim has ishlaydi

// va keyin WeakMap va WeakSet bularga  nobodo keyinchalik bular memory da garbage collectioon bo'lmasdan u uchib ketadi
                                                    