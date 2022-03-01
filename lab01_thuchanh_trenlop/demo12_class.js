/**
 * Define class
 */

'use strict'


//Define class (parent class)
class Parents {
    //use constructor operator to define attribute of class
    constructor (value = 'anonymous', hgt = 100){
        this.name = value;
        this.height = hgt
    }

    //Getter operator 
    get Name (){
        return this.name
    }

    //Setter operator 
    set Name (value){
        this.name = value
    }

    getType (){
        return 'Parents'
    }
}

//define child class extend parents class
class Child extends Parents {
    constructor(value ='anonymous', height =100 ){
        super(value)
        this.height = height
    }

    get Height(){
        return this.height
    }

    set Height (height){
        this.height =height
    }

    toString (){
        return `Name is ${this.name} with height ${this.height}`   
    }

    getType (){
        return 'Child'
    }
}

const main = () => {
    let obj = new Parents("NDHuy", 200)
    console.log(obj)
    //return `Name is ${obj.name} and  height is ${obj.height}`
    obj.name = 'SEstudio'
    console.log(obj)
    console.log (obj.getType())

    let childobject = new Child()
    console.log(childobject)
    console.log(childobject.toString())
    console.log(childobject.getType())
}
main()
//console.log(main())