let tubson = true
for ( var num = 3 ; num < 100; num++) {
    for( var i = 2; i < num; i++) { 
        if ( num % i === 0){
            tubson = false 
            break
        }else{
            tubson = true
        }
    }
    if (tubson) {console.log(num);}
   
}

//=============

// .1 

switch ('Chrome') {
    case 'Edge': console.log("You have got the Edge"); 
        
        break;
         case 'Chrome': console.log("okey we support these browsers too"); break
         case 'FireFox': console.log("okey we support these browsers too");break
         case 'safari': console.log("okey we support these browsers too");break
         case 'Opera': console.log("okey we support these browsers too");break

    default: console.log("We hope that this page looks ok");
        break;
}
// bunda agar biz edgedi qo'ysak unda you have got the edge
// qolganlarini yozsak unda okey we support these browsers too
// agar bulardi hammasidan boshqasini bersak unda we hope that this page looks ok 

// .2

let a = 3
if ( a == 0) {
 console.log(" agar 0");    
}
if ( a == 1) {
    console.log(" agar 1");    
   }
if ( a == 2) {
console.log(" agar 2");    
}  
if ( a == 2 || a == 3 ) {
console.log(" agar 2 va 3 solishtirilsa");    
}  
// Endi bunda agar a ni urniga nima bersak unda o'sha qiymattdi chiqarib beradi
// oxiridagi esa ikkalasidan bittasi berilsa ham etadi unda manashu kelib chiqaveradi

// .3
let k = 3
while (k){
    console.log(k);
}
// bunda cheksiz 3 chiqadi chunki bunda qatgacha borishi aytilmayapti 
let o =0
while ( o++ < 5){
    console.log(o);
}
// endi bunda esa 1 2 3 4 5  chiqadi , chunki  o++ < 5 biz manashunaqa qilib qiymat 
// bersak ham bizga 1 dan boshlab 5 gacha chiqarib beraveradi
let q =0
while ( ++q < 5){
    console.log(q);
}
// bunda bizga tepadagi narsani chiqarib beradi ,chunki ++q bo'ladimi yoki q++ bo'ladimi farqi yuq

let s = 0
while(s<3){
    console.log(s);
    s++
}
// bu endi fordagi qiymatga alternative bo'ladi