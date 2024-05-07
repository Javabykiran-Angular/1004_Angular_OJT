//Splice method
var a = [10, 20, 30];
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
var course = ["Core Java", "Advanced java", "Mysql", "Html", "CSS", "JS", "Spring core", "Spring Boot", "Angular", "Docker", "jenkings", "AWS", "Putty"];
var copiedArr = course.slice(1, 11);
// console.log(`
//     Original Array ::  ${course}
//     ----------------
//     Copied Array ::   ${copiedArr}
// `);
var copiedArr1 = course.slice(1);
// console.log(`
//     Original Array ::  ${course}
//     ----------------
//     Copied Array ::   ${copiedArr1}
// `);
// map
// if u perform element by element operation then we go for map 
var arr = [2, 3, 4, 5, 6];
var sqrArr = arr.map(function (value) {
    return (value * value);
});
console.log("\n    Original Array :: ".concat(arr, "\n--------------------------------\n\nSquared Array :: ").concat(sqrArr, "\n\n"));
