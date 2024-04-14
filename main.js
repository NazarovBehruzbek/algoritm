const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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