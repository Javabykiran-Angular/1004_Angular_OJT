//shallow copy & deep copy 
var a = 10;
var b = a;
// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);
b = 30;
// console.log(`
// ----------------
//     a :: ${a}
//     b :: ${b}
// `);
var arr = [10, 80, 50, 90];
var arr1 = arr;
// console.log(`
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);
arr1[1] = 800;
// console.log(`
// -----------------
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);
var arr2 = [45, 78, 90];
var arr3 = arr2.slice(0);
console.log("\n    Arr2 :: ".concat(arr2, "\n    Arr3 :: ").concat(arr3, "\n"));
arr3[1] = 500;
console.log("\n------------------\n    Arr2 :: ".concat(arr2, "\n    Arr3 :: ").concat(arr3, "\n"));
