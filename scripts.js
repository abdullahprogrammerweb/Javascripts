let b=document.body
console.log("acessing the first children of the b body"+b.firstChild)
console.log("acessing the first children elemnts of the b body"+b.firstElementChild)
console.log(document.body.firstElementChild)

let changedbg = function()
{
    document.body.firstElementChild.style.background="red"
    // document.body.firsttChild.style.background="blue" show error bbut no reason
}
changedbg();