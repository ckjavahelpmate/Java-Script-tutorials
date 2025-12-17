/*
Class
------------------------------------------------
-> Class is a template or blue print 
-> Syntax :

        class ClassName
        {
            // Methods
            // Constructor
        }

Object
-----------------------------------------------------
-> Object is a instanc of class
-> WE can create Object usinh new+classname
-> Sytnax :

        ClassName ref = new ClassName();
*/

class Employee {
    constructor(name, salary) {
        console.log("Object created")
        this.name = name;
        this.salary = salary;
    }
    login() {
        console.log("employee logged-in");
    }
    logout() {
        console.log("employee logged-out");
    }
}

let sheela = new Employee();
sheela.name = "Sheela";

let mala = new Employee("Mala", 25000.00);



class Animal{
    
}
