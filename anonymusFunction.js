// anonnymus function
 // this is called anonymus funtion becuse the name of the function is not display it store in varable
/* let  show =(variable)=>
  {
    return variable + 'this my computer'
  }; */
//let y=show("concating\n");
//console.log(y)  
//console.log(y) this is the way of print function
//console.log (show("why this is \n")) 
// this is the another way of the function to print 


//  return anonmus  function
/* let test=(a)=>
  {
    return function(b)
    {
      return a+b
    };
  };
console.log(test(232+7))  */
//THIS IS SHOW THAT FUNCTION IS ANONYMUS 


let test=(a)=>
{
  return function(b)
  {
    return a+b
  };
};
/*  let z=test(23);
console.log(z(34)); */
console.log(test(23)(34))
//THIS  IS SHOW ACTUAL CALCULATION THIS IS EXAMPLE OF ANONYMUS FUNCTION




// PASSING anonymus function as argument
/* this example show passing string as argument
let test=(name)=>
 {
   return name;
 };
console.log(test("my name is abdullah")) */

// let as look passing anonymus  function

/* let test=(name)=>
 {
   return name;
 };
console.log(test(function(){
return "harry"
})) 
*/
let comp = true;
let prom = new Promise (function (resolve,rejecet)
{
  if(comp)
  {
      resolve("this is true promise")
  }

  else{
      rejecet("yu are the fail")
  }
})
console.log(prom);
