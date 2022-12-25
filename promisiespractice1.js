/* let pro= new Promise(function(fulfill,reject)
{
let i = 10
if (i==10)
{
    return fulfill("your promise is fullfill in the perfect manner")
}
else
{
reject("you are fail to acess")
}
})
.then(function(value)
{
    console.log(value)
})
.catch(function(error){
    console.log(error)
})
 */

//cahining the then
let pro = new Promise(
    function(abdullah,zain)

{
    zain("this is true")
}    

    

)

.then(function(value){
    console.log(value)
    return "this is promise"
    
})
.then(function(value){
    console.log(value)
    return "this is prgrammer"
    
})
.then(function(value){
    console.log(value)
    return "this is abdullah"
    
})
.then(function(value){
    console.log(value)
})