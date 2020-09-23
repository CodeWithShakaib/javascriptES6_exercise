/* Prototype in javascript
---------------------------
Javascript is a prototype based language,so whenever we create a function using
javascript, javscript engine adds a prototype property inside a function,
"protptype property is basically an object (also known as prototype object),where
we can attach methods and properties in a prototype object,  which enables all 
the ohter objects to inherit these methods and properties".
*/

var Mobile = function(mname, mcolor, mprice, mdiscount) {
    // instant members
    this.name = mname;
    this.color = mcolor;
    this.price = mprice;
    this.discount = mdiscount;
    // prototype methord
    this.outputDetail = function() {
        return this.name + "\n" + this.color + "\n" + this.price;
    }

}

var samgsung = new Mobile("galaxy", "Black", 12000);
var Qmobile = new Mobile("L700 pro", "White", 13500, 10);

console.log(samgsung.outputDetail());

// we can also add new methord or property prototype object
Mobile.prototype.afterDiscount = function() {
    // formula will be : afterDiscountPrice = (percentage * totalPrice)/100
    let discountedPrice = (this.discount * this.price) / 100;
    return this.price - discountedPrice;
}

console.log(Qmobile.afterDiscount());