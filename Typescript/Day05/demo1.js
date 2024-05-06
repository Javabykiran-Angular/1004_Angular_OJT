//Array 
// Array is growable & shrinkable dynamically 
// array is store homogenous as well as hetrogenous data type 
// let a:number[]=[10,20,30,40,50];
var a1 = [];
var a3 = [78, 90, 63];
var a4 = [2.5, 'Sumit', 45];
var a5 = [3.14, 'Sumit'];
// for(let i=0;i<a.length;i++){
//     console.log("Array Value is "+a[i]);
// }
// console.log(a);
// console.log(a.join("  "));
// console.log(a.join());
//foreach
// a.forEach((myvalue,i,arr)=>{
//     console.log("Array Value "+myvalue+" Index is "+i+" full Array "+arr);
// });
// rest parameter function
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item);
}
// display(10,20,46,78);
// display();
function display1(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(".... =>" + str);
    console.log(item);
}
// display1("Sumit",10,20,60);
//Push & pop Method
// It Works on LIFO Principal
// dynamically data add into the array 
var a = [];
a.push(45);
console.log(a);
a.push(78, 96, 80);
console.log(a);
var res = a.pop();
console.log(a);
console.log("Poped value is " + res);
