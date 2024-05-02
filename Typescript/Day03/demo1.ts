// number,string,boolean
// void,any
// null & undefined

var a:number=10; // Forward declaration & defination 

// console.log("Value of a is :: "+a);
// console.log('Value of a is :: '+a);
// console.log(`
//         Value of a Is :: ${a} `);

var str!:string;
// console.log("Value of str is "+str);

var c:any;
c=2.5;
// console.log("Value of c is "+c);
c='Sumit';
// console.log("Value of c is "+c);
c=true;
// console.log("Value of c is "+c);

//Literal

var a1:number | string;
a1=45;
// console.log("value of a1 is "+a1);
a1='Sumit';
// console.log("value of a1 is "+a1);

var a2:50|boolean

a2=50;
a2=true;
var a3:null|string;

//type assertion
// it convert ur data type 
// it works on any/Object/Unknown

var a4:any;
// 1 Angle Bracket => ts file used 
// 2 as syntax => used in ts as well as view file 

// 1 Angle Bracket
var temp=(<string> a4);
// temp.


// 2 as syntax

var temp2=(a4 as string);

// temp2.




