// loop are done large  program with  one statement
 // types of loops in js disscuss here

 // synatax of for loops
 for (initialExpression; condition; updateExpression) {
    // write the code you are want
}
// example of for loops

for (var i = 0; i < 3; i++) {
    let name = "John Doe";
    console.log("Hi, my name is " + name);
  }

  // for in  loops syntax

  for (property in object) {
    // code
  }

  // loop in objects
  const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
  };
  for (let key in capitals) {
    console.log(key + ": " + capitals[key]);
  }
  
  // while loops syntax
  while (condition) {
    // statement
  }

  let i = 1;

while (i < 10) {
  console.log(i);
  i++;
}