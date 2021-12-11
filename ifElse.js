
// (1)---// Add 1 to odd number
// let x=3;
// let count=3;
// if(x==3){
//     count++;

// }
// console.log(count)

// (2)---Divisible by 2, 3 and 6
// let n=27;
// if(n%2==0){
//     console.log("divisible of 2")
// }
// else if(n%3==0){
//     console.log("Division of 3")
// }
// else if(n%6==0)
// {
//     console.log("Divisible by 6")
// }
// else{
//     console.log("Divisible by none")
// }
// (3)// Pattern JKJKJK
// let n=3;
// let str=""
// for(i=1; i<=n; i++){
//     if(i<=3){
//         str=str+i;
//     }
// }
// Using a for loop, printnumbers from 1 to 15 in the console. If the number is divisible by 5,
//  printHello instead of the number.
// let n=15;
// for(i=1; i<=n; i++){
//     // if(i%5==0){
//     //     console.log("divisble of 5")
//     // }
//     // else{
//     //     console.log("not divisible")
//     // }
//     console.log(i)
// if(i%5==0){
//         console.log(i,"divisble of 5")
//     }
// }
// let n=3;
// for(i=1; i<=n; i++){
// if(i%2==0){
//     console.log(i," : even")

// }
// else{
//     console.log(i," : odd")
// }
// }
// let n=1;
// for (let i=1; i<=n; i++){
//     if(n%i==0){
//         console.log(i)
//     }
// }
// let n=5;
// for(let i=1; i<=n; i++){
    // if(i%2==0){
    //     console.log(i,"even")
    //     console.log("Square of "+ i + "=",i*i,)

        
    // }
    // else{
    //     console.log(i,"odd")
    //     console.log("Square of "+ i + "=",i*i,)

    // }
    // console.log("Square of "+ i + "=",i*i)
// }
// let n=75;
// if(n>=75)
// {
//     console.log("Good")
// }
// else if(n>=50)
// {
//     console.log("avg")
// }
// else if(n<=75){
//     console.log("poor")
// }
// else{
//     console.log("poor")
// }


// Given n as input, print on the console Grade A if n is between 90 and 100, Grade B if it is between 75
//  and 90, Grade C if it is between 50 and 75 and Grade D otherwise.



// let n=96;
// if(n>=90 && n>=100){
//     console.log("Grade A")
// }
// else if(n>=75 && n>=90){
//     console.log("Grade B")
// }
// else{
//     console.log("Grade c")
// }



// X
// XY
// XYX
// XYXY
// let n=3;
// let str=''
// for(i=1; i<=n; i++){
//     if(i%2==1){
//         str=str+"X"
//     }
//    else {
//     str=str+"Y"
// }
// console.log(str)
// }
// console.log("y")



// pattern === ABCABCABCA

// let n=6;
// let str= ''
// for(i=1; i<=n; i++){
//     if(i%3==0){
//         str=str+"ABC"
//         console.log(str)

//     }
//     else if (i==n){
//         str=str+"A"
//             console.log(str)

//     }
        
// }


// pattern P1Q2R3P4Q5R6P7Q8

// let n=8;
// for(i=1; i<=n; i++){
//     if()
// }


// pattern 1#3#5#7#
// let n=4;
// let str=""
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         str=str+"#"
//         // console.log(i)

//     }
//     else{
//         str=str+i
//         // console.log(str)
//     }
    
    
// }
// console.log(str)
  


// pattern -1+2-3+4-5+6

// let n=5;
// let str=""
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         str=str+"+"+i
//     }
//     else if(i%2==1){
//         str=str+"-"+i
//     }

    
// }
// console.log(str)



// pattern -1+2-3+4-5+6=3
// let n=5;

// let str=""
// let plus_val = 0
// let minus_val = 0

// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         str=str+"+"+i
//        plus_val += i

//     }
//     else if (i%2==1){
//         str=str+"-"+i
//         minus_val += i
//     }

    
// }
// let total = minus_val - plus_val
// console.log(str+ '=' + total)

// Test==>9

// Divide: 1#3#9#Not 
// Not Divide: 2#4#5#6#7#8#

let n=9;
let str=""
for(i=1; i<=n; i++){
    if(i%3==0){
        console.log(i)
        str=str+i;
        // console.log(i)
    }
    else if (i%3==1) {

        str=str+i
    }
    else{
        str=str+"#"
        console.log()
    }
    // console.log(str)

}
console.log(str)
