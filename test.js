let x=[1,2,3];
let y = x;
y.push(4);
console.log(x);
// no5
function test(){
    var a= 5;
    if (true){
        var a = 10
    }
    return a;
}
console.log(test());


//section c codding section

// No1 afunction to reverse a given string
function reverseNumber(num) {
    let strNum = num.toString(); 
    let reversedStr = strNum.split('').reverse().join('');
    return parseInt(reversedStr);
}

console.log(reverseNumber(12345)); 

//No2  function that returns 

function sumorproduct(a, b){
    let sum = a + b;
    if(a==b)
        

   if (a===b) {
    return sum * 3;
   }
   return sum;
}
console.log(sumorproduct(3, 3))
console.log(sumorproduct(4, 5))

//No4 a function that checks whether the word is a palindrome


function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("kanungu")); 
