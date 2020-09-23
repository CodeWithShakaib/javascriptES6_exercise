// Prototype inheritance
/*
In this exemple of prototype inheritance we inherit the Car prototype from Mobile prototype.
In mobile prototype instant members are (name,color,price,discount) and prototype members are
outputDetail()
For inherit instant members of Mobile prototype in Car prototype  we use code
Mobile.call(this, mname, mcolor, mprice);
and For inherit prototype methods of Mobile prototype in Car prototype  we use code
Car.prototype = Object.create(Mobile.prototype);
*/


var Mobile = function(mname, mcolor, mprice, mdiscount) {
    // instant members
    this.name = mname;
    this.color = mcolor;
    this.price = mprice;
    this.discount = mdiscount;
    // prototype method
    this.outputDetail = function() {
        return this.name + "\n" + this.color + "\n" + this.price;
    }

}

var Car = function(mname, mcolor, mprice, cengine) {
    Mobile.call(this, mname, mcolor, mprice);
    this.engine = cengine;

}

Car.prototype = Object.create(Mobile.prototype);

var BMW = new Car("BMW", "White", "1 crore", "2500 cc");

console.log(BMW.outputDetail() + "\n engine capacity :" + BMW.engine);