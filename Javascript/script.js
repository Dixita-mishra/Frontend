 //function check(age){
  //  if(age>13 && age<=19){
  //      console.log("Teenager");
    ///}
   // else{
  //      console.log("Not a teenager");
   // }
//}
//check(5);
// for(let i=4;i>0;i--){
//     let str="";
//     for(let j=0;j<i;j++){
//         str+="*";
//     }
//     console.log(str);
// }
// function calculate(operation,num1,num2,...rest){
//   let result;
//   switch(operation){
//     case 'add': {
//       result=0;for(i of rest){
//       result+=i;
//     }return result+=num1+num2;}
//     case 'multiply': {
//       result=1;
//       for(i of rest){
//         result*=i;
//       }return result*=num1*num2;
//     }
//     case 'subtract' :{
//       result=0;
//       for(i of rest){
//    result-=i;
//       }
//       return result-=num1-num2;
//     }
//     case 'divide':{
//       result=1;
//       for(i of result)
//         {
//           result/=i;
//     }
//     return result/=num1/num2;
//   }
//     default: return "operation not recognized";

//     }

//   }
//   console.log(calculate('add',1,3,3,4,5,));

//Array methods
//const arr=[1,2,3,4];
// arr.shift(); //removes first element
// console.log(arr);
// arr.unshift(0);//adds element at the begininng
// console.log(arr);
// const arr2=[5,6,7,8,3];
// const newArr=arr.concat(arr2);//combines two arrays
// console.log(newArr);
// const index5=newArr.indexOf(5);//gives index of element
// console.log(index5);
// const lastIndex=newArr.lastIndexOf(3);//gives last index of element
// console.log(lastIndex);
// const arr=[1,2,3,4,5,6,66,7,8,99];

// const answer=arr.find((num)=>{
//   return num%33===0;
// });
// console.log(answer);

// const answer2=arr.findIndex((num)=>{
//   return num%33===0;
// });
// console.log(answer2);

// const answer3=arr.filter((num)=>{
//   return num%33===0;
// });
// console.log(answer3);

// const newArr=arr.map((num,index)=>{
//   return num*index;
// });
// console.log(newArr);
// let fun=x=>x%2===0?true:false;
// console.log(fun(4));
// 
//  const user="Dixita";
//  const points=120;
//   const score=`${user} has ${points} points`;
const person={
  firstName:"Dixita",
  lastName:"Mishra",
  age:18,
  introduce:function(){
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
},
};
const {firstName as fn, lastName as ln}=person;
console.log(fn);
console.log(ln);
// person.
// person.intro=function(){console.log(`Hi, I'm ${this.firstName}.`);};
// person.intro(); 

// const fruits=["apple","banana","mango","orange","grape"];
// const [,secondFruit,,,fifthFruit]=fruits;

