/**
The static keyword defines a static method for a class. Static methods aren't called on
instances of the class. Instead, they're called on the class itself. These are often 
utility functions, such as functions to create or clone objects.
*/

class ClassWithStaticMethod {
    static staticMethod() {
        return 'static method has been called.';
    }
}

// console.log(ClassWithStaticMethod.staticMethod());

/*
Getter :
The get syntax binds an object property to a function that
will be called when that property is looked up.

Setters :
The set syntax binds an object property to a function to
be called when there is an attempt to set that property.
*/
class Driver {
    constructor(name) {
        this.myname = name;
    }
    get driverName() {
        return this.myname;
    }
    set driverName(newName) {
        this.myname = newName;
    }
}

driver = new Driver("Shakaib");
console.log(driver.driverName); // calling getter
driver.driverName = "Hamza"; // assigning value through setter
console.log(driver.driverName);