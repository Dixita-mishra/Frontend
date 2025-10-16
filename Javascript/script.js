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
function calculate(operation,num1,num2,...rest){
  let result;
  switch(operation){
    case 'add': {
      result=0;for(i of rest){
      result+=i;
    }return result+=num1+num2;}
    case 'multiply': {
      result=1;
      for(i of rest){
        result*=i;
      }return result*=num1*num2;
    }
    case 'subtract' :{
      result=0;
      for(i of rest){
   result-=i;
      }
      return result-=num1-num2;
    }
    case 'divide':{
      result=1;
      for(i of result)
        {
          result/=i;
    }
    return result/=num1/num2;
  }
    default: return "operation not recognized";

    }

  }
  console.log(calculate('add',1,3,3,4,5,));