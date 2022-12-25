/* 
call back simple example
function test()
{
    console.log("abdullah is the best" )
}
test();

function test2(callback)
{
    return callback;
}
  
test2(test); */

/*  function test(a)
{
    console.log("abdullah is the best"+a)
}
test()

function test2(callback,a)
{
    return callback(23) 
}
  
test2(test);
 
it will show first undefined than run program accorifng to you


*/
 
/* this is the proper way to run the program According to callback function
function test(a)
 {
    console.log("Iam the callback function  " + a)
 } 
 function test2(callback,a)
 {
    return callback(32);

 }
 test2(test) */

 /* 
  this is the better way to asigned variable
 
 function show(ass)
 {
    console.log("this is callback fucntion  " + ass)
 }
 
 function callback(ass,pick)

 {
    pick(ass)
 }

 callback(342,show) 
 
  we will make it  anonymus function for replaced callback it  work bro
 */
/* 

function test2(ass,callback)
{
    callback(ass)
}

test2(234,



    function test(ass)
{
   
    console.log("this is function " + ass)
    
});

this method is extesnsivly usedin realworld
*/

