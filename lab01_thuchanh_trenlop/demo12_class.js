/**
 * Define class
 */

'use strict'


//Define class (parent class)
class parents {
    //use constructor operator to define attribute
    constructor(value='anomynous'){
        this.name =value
    }
    getType(){
        return 'Parents'
    }
} 

//Define child class extend parents class
class Child extends parents{
    constructor(value='anonymous', height){
        super(value)
        this.height=height
    }

    get Height(){
        
    }
}

const main = () => {
    let obj =new parents("nam")
    console.log(obj)
    console.log(obj.getType())
}
main()