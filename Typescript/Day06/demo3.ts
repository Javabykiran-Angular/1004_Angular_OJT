//shallow copy & deep copy 

let a=10;
let b=a;

// console.log(`
//     a :: ${a}
//     b :: ${b}

// `);

b=30;

// console.log(`
// ----------------
//     a :: ${a}
//     b :: ${b}

// `);

let arr=[10,80,50,90];
let arr1=arr;

// console.log(`
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);

arr1[1]=800;
// console.log(`
// -----------------
//     arr :: ${arr}
//     arr1 :: ${arr1}
// `);

let arr2=[45,78,90];
let [...arr3]=arr2;
console.log(`
    Arr2 :: ${arr2}
    Arr3 :: ${arr3}
`);

arr3[1]=500;
console.log(`
------------------
    Arr2 :: ${arr2}
    Arr3 :: ${arr3}
`);


