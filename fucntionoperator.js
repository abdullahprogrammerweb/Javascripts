function show(name,...arg)
{
    let sum = 0
    for (let i in arg)
    {
        sum+=arg[i]
    }
console.log(name+sum)
}

show("abdullah your marks is  "  ,32,32,234)