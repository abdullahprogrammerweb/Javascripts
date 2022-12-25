
// THIS TWO TYPES TAKES MORE TIME TO TYPE THE FUNCTION
/* function test()
  {
    console.log("abdullah")
  }
 
test(); */

/* let test = function()
  {
    console.log("hellow abdullah")
  }
test(); */


// THIS IS THE SHORTEST WAY TO WROTE A FUNCTION AND THE UPDATE IN LATEST JAVASCRIPT 
  
//IN SINGLE PARAMETER PARANTHES OS OPTIONAL AND MORE THAN ONE ARUGUMENT OR WITHOUT ARGUMENT PARANTHES IS REQUIRED

/* let test=a=>{console.log("hey who are you"+a)}
test('abdullah');
 */



/* 
let test = () => console.log ("hellow abdullah you are in the arrow function")

THIS IS ANOTHER EXAPLE OF ARROW FUNTION IN ARRAY
let arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(variable => console.log(variable))

test(); */

/* let welcome = (name)=> 
  {
    console.log(`this is arrow function"  ${name}`)
  }
welcome("this is always true"); */

 


// REST OPERATOR IN JAVASCRIPT

 // this is the best example of rest operator
 let test4 =(name, age)=>
  {
    console.log('ARGUMENT\v'+name+age)
  }

test4("abdullah",   16)  


let test=(name, ... age)=>
  {
    console.log('ARGUMENT\v'+name+age)//concenating this why not produced array
  }

test("abdullah" , " Iam the programmer this is true" , " condition")  
 
function someFunction(param1, ...param2) {
console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?"); 
 


// SPREAD OPERATOR IN JAVASACRIPT 
/* 
let str = ["javascript it is  best", "so Iam pick up this lanuage"]
let str1 = ["this is the " , ...str , " do you like coding"]
console.log(str1) 

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very",
"powerful"]; 
console.log(message) */

/* 
let test=(x,z,c,g,s,q,r)=>
  {
    console.log("this is sum of the spread operator \n "+x+z+c+g+s+q+r)
}
 
let arr =[3,3,]   
let arr1 =[6,4,]
let arr2 =[6,4,24,43]

  test(...arr,...arr1,...arr2);  
 */
/* function addFourNumbers(x, y, z, a) {
console.log(x + y + z + a);
}
let arr = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr, ...arr2); */
// this is rest operator
function sum()
{

 console.log(arguments);
 let number = 0;
 for(let i in arguments)
{
    number+=arguments[i];
}
console.log(number)
}
 
sum();