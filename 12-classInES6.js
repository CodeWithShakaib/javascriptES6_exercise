/**
 * In javascript ES6 class name must be starts with a capital letter (its a convention).And we will 
 * not use function keyword while defining function in class.
 * For giving a class, member attributes(properties) we will use constructor in javascript ES6.
 */

class Info {
    constructor(name, cls, section, rollNo) {
        this.name = name;
        this.cls = cls;
        this.section = section;
        this.rollNo = rollNo;
    }
    printInformation() {
        console.log(this.name + '\n' + this.cls + '\n' + this.section + '\n' + this.rollNo);
        this.lineBreak();
    }
    lineBreak() {
        console.log("\n")
    }

}

let studentInfo1 = new Info("Shakaib", "BSCS", "A", "988");
studentInfo1.printInformation();

let studentInfo2 = new Info("Moiz", "BS-aviation", "A", "1067");
studentInfo2.printInformation();