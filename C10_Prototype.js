/*
Proptotype
---------------------------------------------
-> ALL Javascript objects have special property called proptotype object
-> Proptotype object will have properties and methods.
-> The object’s Prototype links it to another object that provides built-in methods via delegation.
-> We can set prototype using "__proto__" (its like composition in java)

*/


const employee = {
    calcTax : function() {
        console.log(`Tax for ${this.salary}rs at rate 10% is ${this.salary*0.1}rs` );
    }
};

const sheela = {
    salary : 50000
} ;

sheela.__proto__ = employee ;

employee.demo = ()=>{
    
}

// employee.__proto__ = sheela ; // Cyclic __proto__ value

