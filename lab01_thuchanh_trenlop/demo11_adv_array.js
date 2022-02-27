/**
 * Advance array in ES
 */
'use strict'

console.clear()

let a =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log ('a =',a);

a.forEach(item => console.log(item))
console.log('------------------')

a.forEach((item,index) => {
    console.log("item ",index, '=',item*2)
})
// Get all item with MAP
a.map(item => {
    console.log(item)
})

//filter item with condition
a.forEach(item => {
    if (item%2==0){
        console.log(item)
    }
})
//???b=a.filter(item => item%2===0)
///??console.log(b)

//reduce
console.log('a =',a);
let sum=a.reduce((result, item) =>{
    return result +item
}, 10)
console.log(sum)