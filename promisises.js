/* console.log("start")
function getname(name,callback)
{
    setTimeout(function ()

    {
        console.log("inside  get name get name the function")
        return callback(name);
        },1000 
        
       )
   
    }

function gethobby(name,callback)
{
setTimeout(function ()

    {
        console.log("inside  get hobby the function")
        return callback(["cricket","football","tenis"]);
        },1000 
        
       ) 
    }
let a = getname("abdullah",
(a)=>
{
    console.log(a)
    gethobby(a,(hobby)=>
    {
console.log(hobby)
    })
} )*/





/* console.log("start")
function getname(name)
{
    return new Promise(function (resolve,reject)
{
    setTimeout(function ()

    {
        console.log("inside  get name get name the function")
        resolve(name);
        },1000 
        
       )
})
    
   
    }


    function gethobby(name)
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(function ()

        {
            console.log("inside  get hobby the function")
            resolve(["cricket","football","tenis"]);
            },2000 
            
           ) 
    })

    } */
/*     getname("this is the name")
.then(nm=>gethobby(nm))
.then(hobby=>console.log(hobby))   */
 /*    let a = getname("abdullah",
    (a)=>
{
    console.log(a))((((()))))
console.log(hobby)
    })
} )  */

/* THIS IS THE AYSNIC FUNCTION AND AWAIT EXAMPLE THIS
async function test()
{
    let a = await getname("this is abdullah and this is programmer")
    let b= await gethobby(a)
    console.log(b)
}
test();
 */
// THIS IS CALLBACK HELL AND  IT IT TOO MUCH MESSI AND DIGGIVUKT TO UNDERSTAND IN THIS THE PROMISIES CONCEPT INTRODUCED






/* let pro = new Promise((resolved,reject)=>
{
    let a= true
    if(a==true)
    {
        resolved("promise is fullfill")
    }

    else
    {
        reject("promise is rejected")
    }

}
)
async function test()
{
    let a = await pro
    console.log(a)
}
test()
 */
/* pro.then(
    function (value)
{
console.log(value)
}
)
 
pro.catch(
    function(error)
{
    console.log(error)
}
).finally(function(ass)
{
    console.log("abdullah is the best")
    
})
 */

// let have a look for asyic and await


 



 
// cahining of then


/* let pro = new Promise
(function (resolved,reject)
{
let num =10
resolved(num)
}).then(function (value)
{
    console.log(value)
    return value + 10
    
}).then(function(value)
{
   return value*value
}).then(function(value)
{
    console.log(value)
}) */


let pro = new Promise (function(resolved,reject)
{
    console.log("abdullah is the best")
    resolved("this is the promise")

})

.then(fucntion(value){
console.log(value)
})
 



























