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

// function getElementsOneTime(arr) {
//     const elementCounts = {}; // Object to store element counts

//     // Count occurrences of each element in the array
//     arr.forEach(element => {
//         elementCounts[element] = (elementCounts[element] || 0) + 1;
//     });

//     // Filter out elements that appear only once
//     const result = [];
//     arr.forEach(element => {
//         if (elementCounts[element] === 1) {
//             result.push(element);
//         }
//     });

//     return result;
// }

// // Test the function
// const inputArr = [1, 5, 6, 1, 5, 7, 2];
// const outputArr = getElementsOneTime(inputArr);
// console.log(outputArr); // Output: [6, 7, 2]


// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini
//  quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

// let arr = [1, 5, 8, 4, 9];
// let n = arr.length;
// let result = [1,5]
// for(let i = 1; i<n; i++){
//     if(i%2==0){      
//         if(i !== n-1){
//             result.push(arr[i]);
//             result.push(arr[i+1]);
//         } else{
//             result.push(arr[i]);
//         }
//     }else{
//         result.push(arr[n-i]);
//         result.push(arr[n-i-1]);
//     }
// }
// console.log(result);

// // Masalan:// Massiv
// const inputArray = [10, false, "", "Abdulaziz", null];

// // Truthy va Falsy uchun bo'sh massivlar
// const truthyArray = [];
// const falsyArray = [];

// // Massivni tekshirish
// inputArray.forEach(item => {
//     if (item) {
//         truthyArray.push(item);
//     } else {
//         falsyArray.push(item);
//     }
// });

// // Natijalarni konsolga chiqarish
// console.log("Truthy:", truthyArray);
// console.log("Falsy:", falsyArray);


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
// console.log(fruits.copyWithin(1,0));

// Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va 
// eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// [7, 4, 1, 2, 3, 9, 5]

//  let arr = [7, 4, 9, 2, 9, 1, 5];
//  let MaxArr = Math.max(...arr);
//  let MinArr = Math.min(...arr);
//  let maxindex = arr.indexOf(MaxArr)
//  let minindex = arr.indexOf(MinArr);
//  [arr[maxindex],arr[minindex]] = [arr[minindex],arr[maxindex]]

//  console.log(maxindex);

// Array4. n ta elementdan tashkil topgan massiv berilgan.
//  Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va 
//  ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// let arr = [9,5,7,8,6,9,6]
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 !== 0){
//         sum+=1
//         console.log(arr[i]);
//     }
// }
// console.log("Soni",sum);

// let arr = [5,7,8,6,9,6];
// let result = [];
// let result1 = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         result.push(arr[i])
//     } else{
//         result1.push(arr[i])
//     }
// }
// result1.reverse();

// console.log(result.concat(result1))

// let arr = [5,7,8,3,9,6];
// let res = [6,3,7]
// for(let i=arr.length-1; i>0; i-=2){
//     res.push(arr[i])
// }
// console.log(res);

// let arr = [2,3,4,5,6,];
// let res = [];

// for (let i = 0; i<arr.length; i++){
//     if(i % 2 === 0 ){
//        res.push(arr[i]);
//       if (arr.length-1>i){
//         res.push(arr[i+1]) 
//       }
//     }else{
//         res.push(arr[arr.length-i])
//         res.push(arr[arr.length-i-1])

//     }
// }
// console.log(res);

// [2, 3, 6, 5, 4, 5, 4, 3, 6,]

// function getOddMin(arr) {
//     // Agar massiv bo'sh yoki uzunligi 2 dan kam bo'lsa, null qaytariladi
//     if (!arr || arr.length < 2) {
//         return null;
//     }
    
//     let min_value = Infinity;  // Eng katta qiymat bilan ishlaymiz
    
//     // Juft indeksli elementlardan eng kichik qiymatni tanlash
//     for (let i = 0; i < arr.length; i += 2) {
//         if (arr[i] < min_value) {
//             min_value = arr[i];
//         }
//     }
    
//     return min_value;
// }

// // Misol uchun:
// let arr = [5, 2, 8, 3, 9, 4];
// let result = getOddMin(arr);
// console.log("Eng kichik qiymat:", result);  // Natija: 5


// function getEvenMax(arr) {
//     // Agar massiv bo'sh yoki uzunligi 2 dan kam bo'lsa, null qaytariladi
//     if (!arr || arr.length < 2) {
//         return null;
//     }
    
//     let max_value = -Infinity; // Eng kichik qiymat bilan ishlaymiz
    
//     // Toq indeksli elementlardan eng katta qiymatni tanlash
//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] > max_value) {
//             max_value = arr[i];
//         }
//     }
    
//     return max_value;
// }

// // Misol uchun:
// let arr = [5, 2, 8, 3, 9, 4];
// let result = getEvenMax(arr);
// console.log("Eng katta qiymat:", result); // Natija: 9


// function findClosestToR(arr, R) {
//     // Massiv bo'sh bo'lsa null qaytariladi
//     if (!arr || arr.length === 0) {
//         return null;
//     }

//     // Massivning uzunligi
//     const n = arr.length;

//     // Eng yaqin sonning boshlang'ich qiyinishi
//     let closest = arr[0];
//     let minDiff = Math.abs(arr[0] - R); // Boshlang'ich farqni hisoblash

//     // Massivni yalpi elementlari bo'yicha tekshiramiz
//     for (let i = 1; i < n; i++) {
//         // Joriy element bilan R orasidagi farqni topamiz
//         let diff = Math.abs(arr[i] - R);

//         // Farq oldingidan kichik bo'lsa, yangi eng yaqin sonni saqlash
//         if (diff < minDiff) {
//             closest = arr[i];
//             minDiff = diff;
//         }
//     }

//     return closest;
// }

// // Misol uchun:
// let arr = [3, 7, 1, 9, 4, 5, 8];
// let R = 6;
// let closestValue = findClosestToR(arr, R);

// if (closestValue !== null) {
//     console.log(`Massiv elementlari orasidan ${R} ga eng yaqin son:`, closestValue); // Natija: 7
// } else {
//     console.log("Massiv bo'sh, ya'ni eng yaqin son topilmadi.");
// }

// let massiv = [22, 7, 43, 61, 7, 9];
// let maxSum = 0;
// let maxElements = [];

// // Massivdagi har bir element uchun ikki marta chiqarib o'tamiz
// for (let i = 0; i < massiv.length; i++) {
//     for (let j = i + 1; j < massiv.length; j++) {
//         let sum = massiv[i] + massiv[j]; // Ikkita elementni yig'indisini hisoblaymiz
//         // Agar yig'indi eng katta bo'lsa, yangilaymiz
//         if (sum > maxSum) {
//             maxSum = sum;
//             maxElements = [massiv[i], massiv[j]]; // Eng katta yig'indiga mos keladigan elementlarni saqlaymiz
//         }
//     }
// }

// console.log("Eng katta yig'indisi bo'lgan elementlar:", maxElements); // Output: [43, 61]



// let massiv = [3, 8, 5, 11, 9, 6];
// let maxIndeks = 0;

// // Massivning ikkinchi elementidan boshlab oxirgacha bo'lgan har bir elementni tekshiramiz
// for (let i = 1; i < massiv.length - 1; i++) {
//     if (massiv[i] > massiv[i - 1] && massiv[i] > massiv[i + 1]) {
//         // Agar hozirgi element o'ng va chap qo'shinisidan katta bo'lsa
//         maxIndeks = i;
//     }
// }

// console.log("Oxirgi lokal maksimum indeksi:", maxIndeks); // Output: 3


// let massiv = [22, 7, 43, 61, 7];
// let indekslar = [];

// // Massivdagi har bir element uchun indeksni tekshiramiz
// for (let i = 0; i < massiv.length - 1; i++) {
//     for (let j = i + 1; j < massiv.length; j++) {
//         if (massiv[i] === massiv[j]) {
//             // Agar ikki element bir xil bo'lsa, indekslar ro'yxatiga qo'shib qo'yamiz
//             indekslar.push(i);
//             indekslar.push(j);
//             break; // 2 ta bir xil qiymatli elementni topganimiz uchun chiqamiz
//         }
//     }
// }

// console.log("Bir xil qiymatli elementlar indekslari:", indekslar); // Output: [1, 4]

// Sample array
// let arr = [3, 5, 2, 5, 5, 3, 7, 8, 5];

// Object to keep track of element frequencies
// let savat = {};
// let engkop = 0;
// let soni = 0;

// // Calculate frequencies of elements in the array
// arr.forEach(element => {
//     savat[element] = (savat[element] || 0) + 1;
//     console.log(savat[element]);
//     // Update most frequent element if needed
//     if (savat[element] > soni) {
//         soni = savat[element];
//         engkop = element;
//     }
// });
// console.log(savat);
// // Output the most frequent element and its count
// console.log("Most frequent element:", engkop);
// console.log("Frequency:", soni);

// function chiqaruvchi(n){
//         for(let i=1; i<=n; i++){
//             let line ="";
//             for(let j=1; j<=i; j++){
//                 line += "1 ";
//             }
//             console.log(line)
//         }
//     }
    
//     let n=5;
//     chiqaruvchi(n);

// let text = "Assalomu ALayKum";
// let result = ''
// for(let i = 0; i<text.length; i++){
//     if(text[i] === text[i].toUpperCase()){
//         result += text[i].toLowerCase()
//     }else{;
//         result+= text[i].toUpperCase()
//     }
// }
// console.log(result);


// function myApp(text) {
//     let result = "";
//     for (let i = 0; i < text.length; i++) {
//         let c = text[i];
//         if (c === c.toUpperCase()) {
//             result += c.toLowerCase();
//         } else {
//             result += c.toUpperCase();
//         }
//     }
//     return result; 
// }

// let text = 'Salom, Dunyo!';
// let result = myApp(text);
// console.log(result);


// let arr = [10,5,8,7,9,12,11];
// let result = [];
// for(let i = 0; i < arr.length; i++){
//     let tub = true;
//     for(let j = 2; j<=Math.sqrt(arr[i]); j++){
//         if(arr[i] % j === 0 ){
//             tub = false;
//             break;
//         } 
//     }
//     if(tub){
//         result.push(arr[i])
//     }
// }
// console.log(result);

// function tubBolganElementlarniChiqar(arr) {
//     // Tub sonni aniqlash funksiyasi
//     function tubSonmi(x) {
//         if (x < 2) return false;
//         for (let i = 2; i <= Math.sqrt(x); i++) {
//             if (x % i === 0) return false;
//         }
//         return true;
//     }

//     // Massivdan tub bolgan elementlarni chiqarish
//     for (let i = 0; i < arr.length; i++) {
//         if (tubSonmi(arr[i])) {
//             console.log("Massivdagi tub bolgan element:", arr[i]);
//         }
//     }
// }

// // Test qilish
// let arr = [10, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Test uchun berilgan massiv
// tubBolganElementlarniChiqar(arr);


// function getNameMaxMinAge(arr) {
   
//     let oldestName = arr[0].name;
//     let youngestName = arr[0].name;
//     let maxAge = arr[0].age;
//     let minAge = arr[0].age;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].age > maxAge) {
//             maxAge = arr[i].age;
//             oldestName = arr[i].name;
//         }
//         if (arr[i].age < minAge) {
//             minAge = arr[i].age;
//             youngestName = arr[i].name;
//         }
//     }

//     return [oldestName, youngestName];
// }

// const arr = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
// ];

// console.log(getNameMaxMinAge(arr)); // Output: ['Temur', 'Sardor']

// const marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(",")"];

// let text = 'sad,hlk;sdf(sdfwe,sdf)asdwqf';
// let count = 0;

// for( let i = 0; i<text.length; i++){
//     text[i] = s
//     if(marks.includes(s)){
//         count +=1;
//     }
// }
// console.log(count);

// function orttir(S, C) {
//     return S.replace(new RegExp(C, "g"), C + C);
//   }

//   const S = "CSS is a style sheet language.";
//   const C = "S";

//   const natija = orttir(S, C);
//   console.log(natija);


// function isMarried(arr) {

//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i].age >= 25) {
//       arr[i].isMarried = true;
//     } else {
//       arr[i].isMarried = false;
//     }
//   }

//   return arr;
// }

// const people =  [
//   { name: "Abdulaziz", age: 33},
//   { name: "Erkin", age: 22},
//   { name: "Temur", age: 34},
//   { name: "Sardor", age: 20},
// ];

// console.log(isMarried(people));

// function getNameMaxMinAge(arr) {

//     if (arr.length === 0) {
//       return [];
//     }
    
//     let maxYosh = arr[0]; 
//     let minYosh = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {

//       if (arr[i].age > maxYosh.age) {
//         maxYosh = arr[i];
//       }
//       if (arr[i].age < minYosh.age) {
//         minYosh = arr[i];
//       }
//     }
    
//     return [maxYosh.name, minYosh.name];
//   }
  
//   const odamlar = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "afasf", age: 50 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
//   ];
  
//   const res = getNameMaxMinAge(odamlar);
//   console.log(res);

//   const people = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "afasf", age: 40 },
//     { name: "afasf", age: 50 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
//   ];
//   let katta=people[0]
//   let kichik=people[0]
  
//   for(let i=1;i<people.length;i++){
//       if(people[i].age>katta.age){
//           katta = people[i]
//       }
//       if(people[i].age<kichik.age){
//           kichik = people[i]
//       }
//   }

// console.log(katta.name," ",kichik.name);
// const people = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
//   ];

//   let result = people.map(person => {
//       console.log(person.age);
//   })

  
//   let result = [];
//   let maximum = Math.max(...people.map(person => person.age)); 
//   let minimum = Math.min(...people.map(person => person.age));
  
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age === maximum || people[i].age === minimum) {
//       result.push(people[i].name);
//     }
//   }
  
//   console.log(result);

// // Berilgan obyekt
// const input = {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20};

// // Yangi obyekt uchun bo'sh obyekt
// const result = {};

// // Har bir kalit-qiymat juftligini olamiz
// for (const key in input) {
//     const value = input[key];
//     console.log(value);

//     // Qiymatni kalit sifatida ishlatib, yangi obyektga qo'shamiz
//     if (!result[value]) {
//         // Agar qiymat allaqachon mavjud emas bo'lsa, yangi massiv yaratamiz
//         result[value] = [key];
//     } else {
//         // Agar qiymat allaqachon mavjud bo'lsa, massivga kalitni qo'shamiz
//         result[value].push(key);
//     }
// }

// // Natijani ekranga chiqaramiz
// console.log(result);

// const input = {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20};
// const result = {}
// let keys = Object.keys(input);
// for( i = 1; i <= keys.length; i ++ ){
//     let value = input[i]
//     if(!result[value]){
//         result[value] = [i]
//     } else{
//         result[value].push(i)
//     }
// }
// console.log(result);

// let arr = []

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C" };

// let correctCount = 0;
// let incorrectCount = 0;

// // Tog'ri va noto'g'ri javoblarni hisoblash
// for (let i = 1; i <= 10; i++) {
//     let questionNumber = i.toString(); // Savol raqamini stringga aylantiramiz

//     if (rightAnswers[questionNumber] === myAnswers[questionNumber]) {
//         correctCount++;
//     } else {
//         incorrectCount++;
//     }
// }

// console.log("Tog'ri javoblar soni:", correctCount);    // Tog'ri javoblar soni: 5
// console.log("Noto'g'ri javoblar soni:", incorrectCount); // Noto'g'ri javoblar soni: 5


// let squareObject = {
//     1: 1,
//     2: 4,
//     3: 9,
//     4: 16,
//     5: 25
// };

// // Kalitlarni yig'indisi
// let keysSum = 0;
// for (let key in squareObject) {
//     keysSum += parseInt(key);
// }

// // Qiymatlarni yig'indisi
// let valuesSum = 0;
// for (let key in squareObject) {
//     valuesSum += squareObject[key];
// }

// console.log("Kalitlar yig'indisi:", keysSum); // Kalitlar yig'indisi: 15
// console.log("Qiymatlar yig'indisi:", valuesSum); // Qiymatlar yig'indisi: 55

// function createSquareObject(n) {
//     let squareObject = {};

//     // Kalitlarni va qiymatlarni yaratish
//     for (let i = 1; i <= n; i++) {
//         squareObject[i] = i * i;
//     }

//     return squareObject;
// }

// // Masala 1: n = 5 uchun kvadratlar obyektini yaratish
// let n = 5;
// let squares = createSquareObject(n);
// console.log(squares); // {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// // Masala 2: Obyektning kalitlari va qiymatlari yig'indisini hisoblash
// let keysSum = Object.keys(squares).reduce((sum, key) => sum + parseInt(key), 0);
// let valuesSum = Object.values(squares).reduce((sum, value) => sum + value, 0);

// console.log("Kalitlar yig'indisi:", keysSum); // Kalitlar yig'indisi: 15
// console.log("Qiymatlar yig'indisi:", valuesSum); // Qiymatlar yig'indisi: 55

// let n = 5;
// let squareObject = {};

// for (let i = 1; i <= n; i++) {
//     squareObject[i] = i * i;
// }

// console.log(squareObject); // {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}


// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   // Function to calculate total cost of products
//   const calculateTotalCost = (products) => {
//     return products.reduce((total, product) => {
//       const discountedPrice = product.price * (1 - product.discount / 100);
//       const productTotalCost = discountedPrice * product.quantity;
//       return total + productTotalCost;
//     }, 0);
//   };
  
//   // Calculate total cost of all products
//   const totalCost = calculateTotalCost(products);
//   console.log("Total Cost:", totalCost); // Output the total cost
  
// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   // Calculate total cost inline using reduce
//   const totalCost = products.reduce(
//     (total, product) =>
//       total +
//       (product.price * (1 - product.discount / 100)) * product.quantity,
//     0
//   );
  
//   console.log("Total Cost:", totalCost); // Output the total cost
let  qiyamt = prompt("Api")
let res = ''
let nuqta = qiyamt.split('.');
console.log(nuqta);
res = nuqta.join(' [.] ');
console.log(res);
