//Splice method
let a:number[]=[10,20,30];
// console.log(a);
// a.splice(1,0,80);
// console.log(a);
// a.splice(2,0,78,90,60);
// console.log(a);
// a.splice(2,1);
// console.log(a);
// a.splice(1,2);
// console.log(a);
// a.splice(2,1,100);
// console.log(a);

//slice
  
let course:string[]=["Core Java","Advanced java","Mysql","Html","CSS","JS","Spring core","Spring Boot","Angular","Docker","jenkings","AWS","Putty"];

let copiedArr= course.slice(1,11);

// console.log(`
//     Original Array ::  ${course}
//     ----------------
//     Copied Array ::   ${copiedArr}
// `);

let copiedArr1= course.slice(1);

// console.log(`
//     Original Array ::  ${course}
//     ----------------
//     Copied Array ::   ${copiedArr1}
// `);

// map
// if u perform element by element operation then we go for map 

let arr:number[]=[2,3,4,5,6];

let sqrArr= arr.map((value)=>{
    return (value*value);
});
console.log(`
    Original Array :: ${arr}
--------------------------------
Squared Array :: ${sqrArr}

`);


