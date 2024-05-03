//Anonymous Functions
// it does not have any name 
// It execute there itself 
var temp1 = function () {
    console.log("Anonymous Functions is called");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(40, 5);
// console.log("Result is :: "+res);
//fat arrow function/Arrow function 
var temp3 = function () {
    console.log("First type of function is called using fat arrow");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res1 = temp4(80, 9);
// console.log("Result :: "+res1);
// optional parameter Functions
function add1(a, b) {
    console.log("Value of a is " + a); // 10
    console.log("Value of b is " + b); // undefined 
    console.log("Addition of (a+b) is " + (a + b)); // NAN => Not a Number
}
// add1(10);
// add1(20,5);
function add2(a, b) {
    console.log("Value of a is " + a); // 10
    console.log("Value of b is " + b); // undefined 
    console.log("Addition of (a+b) is " + (a + b)); // NAN => Not a Number
}
//  add2();
//Default parameter function
function add3(a, b) {
    if (b === void 0) { b = 20; }
    console.log("Value of a is " + a); // 50
    console.log("Value of b is " + b); // 20 
    console.log("Addition of (a+b) is " + (a + b)); // 70
}
//  add3(50);
// add3(50,100);
function add4(a, b) {
    if (a === void 0) { a = 30; }
    console.log("Value of a is " + a); // 50
    console.log("Value of b is " + b); // 20 
    console.log("Addition of (a+b) is " + (a + b)); // 70
}
//  add4(70,30);
add4();
