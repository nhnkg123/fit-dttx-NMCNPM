let a =3;
let obj_a={a}
console.log('obj_a', obj_a)

let b = 4
let obj_b = {b : b}
console.log('obj_b', obj_b)

let student={
    'SID': 1,
    'Name': 'NDhuy'
}
console.log(student)

let array =[
    {
        value: 1,
        name: 'iPhone'
    } ,
    {
        value: 2,
        name: 'iPad'
    }, 
    {
        value: 3,
        name: 'Macbook'
    } 
]
console.log(array)

//Define object look like class
let obj = {
    value : 10, 
    double (){
        return this.value *2
    },
    square (){
        return this.value*this.value
    },
    triple :() => {
        return obj.value*3
    }
}
console.log(obj)
console.log("get attribute value of object ", obj.value)
console.log("call double operator of object ", obj.double())
console.log("call square operator of object ", obj.square())
console.log("call triple operator of object ", obj.triple())

//convert JSON object to string
console.log(array)
let str_arr = JSON.stringify(array)
console.log(str_arr)

//convert string array to object
let obj_str_arr = JSON.parse(str_arr)
console.log(obj_str_arr)

//Nested object
let list_of_product = [
    {
        id: 1, 
        name: 'iPhone', 
        model: [
            {
                memory: 256,
                type: 'Pro max'
            },
            {
                memory: 512
            }
        ]
    },
    {
        id: 2, 
        name: 'iPad'
    }
]
console.log(list_of_product)
console.log(list_of_product[0].model[0].type)