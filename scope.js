
// i="This is Global variable"
// function show ()


// {
//     console.log("this is no 1 function\t"+i)
// }

// // function show2 ()


// // {
// //     console.log("this is no 2 function\t" + i)
// // }

// // show();
// // show2();


// // if(true)

// // {
// //     console.log("this is block\t"+i)
// // }
// // else
// // {
// //     console.log("this is false")
// // }
// // console.log(i)

//  i="This is Global variable"
// function show ()


// {
//     console.log("this is no 1 function\t"+i)
// }

// function show2 ()


// {
//     console.log("this is no 2 function\t" + i)
// }

// show();
// show2();


// if(true)

// {
//     console.log("this is block\t"+i)
// }
// else
// {
//     console.log("this is false")
// }
// console.log(i)  
// //console.log("abdullah")

// local varable in js

// function test() {
//   let a = "abdullah is the good boy"
//   console.log(a)
// }
// test();

// function test1() {

//   console.log(a)
// }    this show the error say a is not defined
// test1();
// if (true) {
//   console.log(a)this show the error say a is not defined
// } 

// if let var const is remove than run the fuction let see this
// function test() {
//   a = "abdullah is the good boy"
//   console.log(a)
// }
// test();

// function test1() {

//   console.log(a)
// }
// test1();
// if (true) {
//   console.log(a)
// }  


// here is another example of  the local scope
function show()
  {
    let a="this is local variable but in outer function"
    console.log(a)
    function show2() 
    {
       let b="this is local variable but in inner function"
    console.log(a)
    console.log(b)
    }
    show2();
  }
show();