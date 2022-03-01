/**
 * Advance array in ES
 */
'use strict'

console.clear()

let a =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log ('a =',a);

a.forEach(item => console.log(item))
console.log('------------------')

//a.forEach((item)=>{
    //console.log(item)
//})
a.forEach((item,index) => {
    console.log("item ",index, '=',item*2)
})
//get all item with MAP
console.log("-------MAP-------")
let b = a.map(item => console.log(item))
let c = a.map(item => {return item*2})
console.log(c)

//Filter item with condition
//a.forEach(item => {
    //if (item %2 == 0){
        //console.log(item)
    //}
//})
console.log("-------FILTER-------")
b = a.filter(item => item %2 ==0)
console.log(b)

//Filter with reduce
console.log("-------REDUCDE-------")
let sum = a.reduce ((result, item) => {
    return result + item
}, 10)
console.log('sum = ',sum)