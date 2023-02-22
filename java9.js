//.1
// let a= "webbrain academy"
// console.log(a.localeCompare("webc"));
// console.log(a.localeCompare("web"));
// console.log(a.localeCompare("webbrain academy"));
//.2

// function getRes (str){
//     let res={}
//     for (l of str ){
//         if (l===" ") continue
//         if (res[l]){
//          res[l]=res[l]+1
//         } else {
//             res[l]=1
//         }
//     }
//     console.log(res)
// }
// getRes('webbrain academy')

// bu birorta so'zda nechta harf qatnashganligini bilmoqchi bo'lsak o'shanda ishlaydi 
// batta umuman bitta function beramiz keyin esa bitta object yaratamiz ,chunki bunga biz dynamic access qilib
// harflardi bunga hisobalshimiz uchun ,keyin esa bitta for of beramiz bu bizga harflarni aylantirib berishi uchun 
// keyin esa for di ichiga agar harf o'ziga teng bo'lsa ya'ni agar yana bir marotaba shunaqa harf kelsa 
// uni qo'shib bergin deymiz else da esa unaqa bo'lmasa bittaligicha qolaversin deymiz 
// keyin console.log (res) di beramiz keyin javoblar chiqadi 


//.3
// let a = "webbrain academy"
// console.log(Math.trunc(a));

//.4

// const str= '1200$'
// const replaced=str.replace(/\D/g,'')
// console.log(replaced);

// let num =null
// if (replaced !== ''){
//     num = Number(replaced)
// }
// console.log(num);

// .5
//  let str='webbr@!n_2022 Academy'
//  let res={string:0 ,number:0,char:0} 

//  for(l of str){
//      let lt=l.toLowerCase();
//      if (!isNaN(l)) {res.number++}
//      else if (lt !== l.toUpperCase() && l !== " "){res.string++} 
//      else {res.char++}
 
//     }
//     console.log(res)
  

//.5
// let b='webbrain academy'
// let c=b.charAt(0).toUpperCase()+b.slice(1)
// console.log(c);

//.6 agar biz katta yoki kichik harflarni aniqlamoqchi bo'lsak unda 

// let a ="webbrain Academy"
// for (l of a ){
//     console.log(l===l.toUpperCase());
// }


