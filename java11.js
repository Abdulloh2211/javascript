// HW 1
let str1 = 'Webbrain Academy'
var numUpper = (str1.match(/[A-Z]/g) || []).length;
var numLower = (str1.match(/[a-z]/g) || []).length;
console.log(`${numUpper} ta katta harf va ${numLower} ta kichik harf bor`);


// HW2
let str2 = "Webbr@in Ac@demy"
str2 = str2.trim();
let newstring = '';
for (const char of str2) {
  newstring += char === '@'? 'a' : char;
}
console.log(newstring);

// HW3
let str3 = "Webbbraiiin accaddemmy"
var arr = str3.split('');
str3 = arr.filter(function(value, index, self) { 
    return self.indexOf(value) === index;
}).join('');
console.log(str3);

// HW4 
let str4 = "We66ra1n Acad4my"
var matches = str4.match(/\d+/g);
console.log(`Stringda ${matches[0]}, ${matches[1]}, ${matches[2]} raqamlar qatnashgan`);

// HW5
let str5 = "Webbrain"
str5 = str5.split('')
let output5 = ''
for (const char of str5) {
    output5 += char.repeat(2)
}
console.log(output5);

// HW6
function ifPalindrom(text) {
    let newStr6 = ''
    let reversed = text.split('').reverse()
    for (const char of reversed) {
        newStr6 += char
    }
    if (newStr6 === text) {
        return 'Palindrom'
    }else {
        return 'Palindrom emas'
    }
}
console.log(ifPalindrom('kiyik'));

// HW7
let str7 = 'webbrain academy'
function count_occur( str ) {
    if( str.length == 0 ){
        return console.log("Invalid string")
    }
    for( let i = 0 ;i < str.length ;i++){
        let count = 0;
        for( let j = 0 ;j < str.length ;j++)
        {
            if( str[i] == str[j] && i > j  )
            {
            break;
            }
            if( str[i] == str[j]  )
            {
            count++;
            }
        }
        if( count > 0)
        console.log(`${str[i]} : ${count}`);            
    }
}
count_occur(str7)

// HW8
let str8 = 'webbraaiiin'