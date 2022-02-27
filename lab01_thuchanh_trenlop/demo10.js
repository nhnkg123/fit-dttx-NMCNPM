/**
 * Array trong ES8
 */

'use strict'//bỏ strict như ;

console.clear();

//Khai bao mang 1 chieu
let a = [1, 2, 3, 4, 5]

console.log("Print array");
for(let i = 0;i<a.length; i++)
{
    console.log(a[i])
}
console.log(a);

console.log("print array with arrayobject method");
a.forEach(item => {
    console.log(item)
});

console.log("reverse array");
a.reverse();
console.log(a);
a.reverse();
console.log(a);

console.log("Insert new item to array");
a.push(99);
console.log (a);

console.log ("Remove item in array")
a.splice(2,1); //index 2, 1 phần tử
console.log(a);
