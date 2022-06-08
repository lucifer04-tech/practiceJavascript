
//Hoisting works only for function declaration and not for function expression

// console.log(a)
// console.log(b)
const a = 10;
// Cannot access 'a' before intialization: Reference error

let b = 10
// Cannot access 'b' before intialization: Reference error

let c;
var d;
console.log(c)
console.log(c)


c=10;
//output: undefined
d=10;
//output: undefined


// functionExpression();
functionDeclaration();

const functionExpression = function() {
    
    console.log('Hello World')
}
// Cannot access 'functionExpression' before intialization: Reference error

function functionDeclaration(){
    console.log('Function Declaration')
}

//It prints the funciton console