// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// 1

// const a=-83;
// const b=31;
// x=1; y=0;
// for (let i=a; i<b; i++){
//     if(i%2==0){
//         x*=i
//         y+=i
//     }
// }
// console.log(x-y)

// 2

// rl.question('N= ', (input) => {
//     const number = parseFloat(input);
//     if (number > 0 && Math.sqrt(number)) {
//         console.log(Math.sqrt(number));
//     } else {
//         console.log("Ildiz chiqmaydi");
//     }
//     rl.close();
// });

// 3

// rl.question('N= ', (input) => {
//     const number = parseInt(input);
//     for(i=1; i<=number; i++){
//         for(j=1; j<=i; j++){
//             process.stdout.write(j + ' ');
//     }
//     console.log(); 
//     }
//     rl.close();
// });
// 4
// rl.question('N= ', (input) => {
//     const number = parseInt(input);
//     var s=0; var y=1
//     for(i=1; i<=number; i++){
//         y=y*i;
//         s+=y;
//         console.log(s);
//     }
//     rl.close();
// });

// 6

// rl.question('N= ', (input) => {
//     const number = parseInt(input);
//     var s=0;
//     for(i=1; i<=number; i++){
//         s+=Math.pow(i,i)
//     }
//     console.log(s);
//     rl.close();
// });

// 8

// rl.question('N= ', (input) => {
//     const number = parseInt(input);
//     var x=0;
//     var s=0
//     for(i=2; i<number; i++){
//         if(number%i==0){
//             x+=1
//             console.log(i);
//             s+=i;
//         }
//     }
//     console.log(x,s);
//     rl.close();
// });

// 10

// var a=7; var b=13; var x=1
//  for(i=a; i<=b; i++){
//    if(i===a){
//     for(j=1;j<=i; j++){
//         x*=j;
//     }
//    }else{
//     x*=i;
//    }
//     console.log(x);
//  }

//  11

// rl.question('N= ', (input) => {
//     const number = input.toString();
//     const charArray = number.split('');
//     const reverse = charArray.reverse();
//     const reversed= reverse.join('');
//     console.log(number===reversed);
//     rl.close();
// });

// 12

// rl.question('N= ', (input) => {
//     const number = parseInt(input);
//     let x=true
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if( number % i === 0 ){
//             x=false;
//             break;
//         }
//     }
//     if (x){
//      console.log("Tub");
//     }
//     else{
//         console.log("Tub emas");
//     }

//     rl.close();
// });

// 13 

// rl.question('A= ', (input) => {
//     const number1 = parseInt(input);
//     rl.question('B= ', (input) => {
//     const number2 = parseInt(input);
//     let x= number1/number2
//     if(x>10){
//         if(x%10===3){
//             console.log(Math.pow((x%10),2));
//         }else{
//             console.log(Math.sqrt(number1/number2));
//         }
//     }else{
//         console.log(Math.sqrt(number1/number2));
//     }

//     rl.close();
// })
// });

// 18

// let a=203;
// let b=307;
// let x=0;

// for ( let i = a; i <= b; i++){
//     if (i % 17 === 0) {
//         x=i;
//         break;
//     }
// }
// console.log(x);

// 22

// let x = [8,5,3,2,7,18]
// let reverse = [...x].reverse()
// console.log(reverse);

// 23

// let arr = [23, 45, 77, 2, 88, 99, 3, 78];
// let getEvenMax = [];

// for (let i = 1; i < arr.length; i += 2) {
//     getEvenMax.push(arr[i]);
// }
// let maxEvenIndex = Math.max(...getEvenMax);
// console.log(maxEvenIndex); 

// 24

// let arr = [1, 5, 6, 1, 5, 7, 2, 5];
// let frequencyMap = {};
// let getArr = [];

// for (let num of arr) {
//     frequencyMap[num] = (frequencyMap[num] || 0) + 1;
// }

// for (let num of arr) {
//     if (frequencyMap[num] === 1) {
//         getArr.push(num);
//     }
// }
//  console.log(getArr);

//  25

// let arr = [7,4,9,2,3,1,5];
// let k=3;

// function deleteArr(arr,k){
// let filterK = arr.filter((item) => item!=arr[k])
// return filterK
// }
// console.log(deleteArr(arr, k));

// 26

// let arr = [7,4,9,2,3,1,5];
// let max=Math.max(...arr)
// let min=Math.min(...arr)
// let maxvalue=0;
// let minvalue=0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === max){
//       maxvalue=i;
//     }else if (arr[i]===min){
//         minvalue=i
//     }
// }
// [arr[maxvalue], arr[minvalue]] = [arr[minvalue], arr[maxvalue]];


// console.log(arr);

// 27

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let uniqueSet = new Set(arr);
// let newArr = [...uniqueSet];
// console.log(newArr);

// 28

// let n = parseInt(prompt("N="));
// let x=0;
// for(let i=1; i<=n; i++){
//   x+=Math.pow(i,(n-i+1));
// }
// prompt(x);

// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

// let a=prompt("A ")-0;
// let b=prompt("B ")-0;
// let sum=0;

// for(i=a; i<=b; i++){
//     sum+=i;
// }

// prompt(sum);

// 12
// let n=prompt("N ")-0;
// let a=prompt("A ")-0;

// for(i=1; i<=n; i++){
//     console.log(Math.pow(a,i));
// }

// 14
// let n=prompt("N ")-0;
// let sum=0;
// let x=1;
// for(i=1; i<=n; i++){
//     x*=i
//     sum+=x;
// }
// prompt(sum)

// 19
// let n=prompt("N ")-0;
// x=true;

// for(let i=2; i<=Math.sqrt(n); i++){
//     if(n % i === 0){
//         x=false;
//         break;
//     }
// }
// if(x){
//     prompt("Tub son")
// }else{
//     prompt("Tub emas")
// }

// 17
// let a=prompt("A ")-0;   5
// let b=prompt("B ")-0;   7
// for(let i=a; i<=b; i++){
//     for(let j=a; j<=i; j++){
//         console.log(i);
//     }
// }

// 20
// let x=Number(prompt("x sonni kiriting"))
// let summ=""
// for(i=1; i<=x; i++){
//     summ+=i+' '
//     console.log(summ)
// }
// let number=prompt("A ")-0; 
//     for(i=1; i<=number; i++){
//         let qiymat = ""
//         for(j=1; j<=i; j++){
//             qiymat+=j +' '
//     }
//     console.log(qiymat);
//     }

// const arr = [4, 5, 7, 8, 6, 9]
// const result = [];
// for(let i=0; i<arr.length; i++){
//     result.push(arr[i]);
//     result.push((arr[arr.length-i-1]))
// }
// console.log(result);

// function rangeSum(arr, K, L){
//     let sum = 0;
//     for(let i = K; i<=L; i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// const arr = [1, 6, 9, 5, 8, 10, 15];
// const K=2;
// const L=5;
// console.log(rangeSum(arr, K, L));


// function getSingleArr(arr) {
//     let res = []
//     let result = new Set(arr)
//     res=[...result]
//     return res

// }
// let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7 ,7, 7]
// console.log(getSingleArr(arr))

// let arr = [7,4,9,2,3,1,5];
// let max=Math.max(...arr)
// let min=Math.min(...arr)
// let maxindex=0; 
// let minindex=0;  
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === max){
//     maxindex=i
//    } else if (arr[i] === min){
//     minindex=i
//    }
// }
// [arr[2], arr[5]] = [arr[5], arr[2]];
// console.log(arr);

// let arr = [1, 5, 8, 9, 10];
// let result = []
// for(let i=1; i<arr.length; i++){
//     result.push(arr[i])
// }
// result.push(arr[0])
// console.log(result);
// n = 5, A = 2, B = 3
// let n= 5; 
// let A = 2; 
// let B = 3;
// let arr = [2,3,5,10];
// let sum = B; 
// for(i=0; i<n; i++){
//   for( let j = 0; j<=i; j++ ){
//      sum+=arr[j]
//   }
//   arr.push(sum)
// }
// console.log(arr);

//  let arr = [ 4, 5, 7, 8, 6, 9];
//  let numer = 0;

//  for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2!==0){
//         numer+=1
//         console.log(arr[i]);
//     }
//  }
//  console.log(numer);

// 5

// Massiv yaratish

// let arr = [3,56,8,9,4,9];

// for(let i=arr.length-1; i>=0; i-=2){
//     console.log(arr[i]);
// }

// function searchAllElements(arr, k) {
//     var indices = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === k) {
//             indices.push(i); // Qiymat topilgan indeksni ro'yxatga qo'shamiz
//         }
//     }


//     return indices;
// }

// // Test qilish
// var arr = [2, 3, 5, 3, 8, 3, 4];
// var k = 3;
// var result = searchAllElements(arr, k);

// console.log("Massiv:", arr);
// console.log("Qidirilgan qiymat:", k);
// console.log("Qiymatni topgan indekslar:", result);


// function searchAllElements(arr, k) {
//     var indices = arr.map((_, index) => index)  
//         .filter(index => arr[index] === k); 

//     return indices;
// }

// function getElementsOneTime(arr) {
//     let result = [];

//     // Har bir element uchun tekshirish
//     arr.forEach(element => {
//         // Element faqat 1 marta ishtirok etganligini tekshirish
//         if (arr.filter(item => item === element).length === 1) {
//             // Agar 1 marta ishtirok etgan bo'lsa, natijaga qo'shish
//             result.push(element);
//         }
      
//     });

//     return result;
// }

// // Test uchun massiv
// let inputArr = [1, 5, 6, 1, 5, 7, 2];
// let outputArr = getElementsOneTime(inputArr);
// console.log(outputArr); // Natijani chiqarish

function getElementsOneTime(arr) {
    const elementCounts = {}; // Object to store element counts

    // Count occurrences of each element in the array
    arr.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
    });

    // Filter out elements that appear only once
    const result = [];
    arr.forEach(element => {
        if (elementCounts[element] === 1) {
            result.push(element);
        }
    });

    return result;
}

// Test the function
const inputArr = [1, 5, 6, 1, 5, 7, 2];
const outputArr = getElementsOneTime(inputArr);
console.log(outputArr); // Output: [6, 7, 2]
