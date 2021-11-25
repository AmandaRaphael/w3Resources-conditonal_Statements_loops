//Q1
// const bigIntFinder= function(num1,num2){
//    return  num1>num2? `Between the numbers ${num1} and ${num2}, ${num1} is the bigger number`:`Between the numbers ${num1} and ${num2}, ${num2} is the bigger`
// }
// with arrow function
const bigIntFinder = (num1, num2) =>
  num1 > num2
    ? `Between the numbers ${num1} and ${num2}, ${num1} is the bigger number`
    : `Between the numbers ${num1} and ${num2}, ${num2} is the bigger`;
console.log(bigIntFinder(2,-8));
//.....
//q1 biggest of three int

const bigIntFinder3 = function (num1, num2, num3) {
  let result = num1;
  if (num1 < num2 && num2 > num3) {
    result = num2;
  } else if (num1 < num2 && num2 < num3) {
    result = num3;
  }
  return result;
};
console.log(bigIntFinder3(12,33,4));
//.....
//q2
const signFinder = function (num1, num2, num3) {
  let product = num1 * num2 * num3;
  return product < 0 ? "- sign" : "+ sign";
};
console.log(signFinder(2, 3, -5));
//.....
//q3
const sortAscending = function (num1, num2, num3) {
  let firstNum = Math.max(num1, num2, num3);
  let secondNum;
  let thirdNum = Math.min(num1, num2, num3);
  if (firstNum === num1) {
    secondNum = Math.max(num2, num3);
  } else if (firstNum === num2) {
    secondNum = Math.max(num1, num3);
  } else {
    secondNum = Math.max(num1, num2);
  }
  return `${firstNum},${secondNum},${thirdNum}`;
};
console.log(sortAscending(20, 30, -4));
//q4
const largestAmong5=(num1,num2,num3,num4,num5)=> Math.max(num1,num2,num3,num4,num5)
console.log(largestAmong5( -5, -2, -6, 0, -1));
//q5
for(i=0; i<15 ; i++){
  // if(i%2===0){
  //   console.log(`${i} is even`);
    
  // }else{
  //   console.log(`${i} is odd`);
    
  // }
    
i%2===0?   console.log(`${i} is even`):console.log(`${i} is odd`);

}
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let avg;
const calcAVg=function(subj1,subj2,subj3,subj4,subj5){
 avg=(subj1+subj2+subj3+subj4+subj5)/5;
 console.log(avg);
 
 if(avg<60){
   console.log('F');
   
 }else if(avg<70){
  console.log('D');
 }else if(avg<80){
  console.log('c');
 }else if(avg<90){
  console.log('B');
 }else{
   console.log('A');
   
 }
}
calcAVg(88,77,88,95,68)
//q7
for(i=1;i<100;i++){
  if(i%3===0 && i%5===0){
    console.log('FIZZBUZZ');
    
  }else if(i%5===0){
    console.log('BUZZ');
    
  }else if(i%3===0){
    console.log('FIZZ');
    
  }else{
    console.log(i);
    
  }
}