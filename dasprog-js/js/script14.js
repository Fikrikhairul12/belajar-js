/* 
* Scope
* block scope vs function scope
*/

// global scope / window scope
var a = 1;

function tes(){
    // name conflict
    a = 2;
}

console.log(a);
tes();