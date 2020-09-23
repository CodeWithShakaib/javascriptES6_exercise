let std_class = 'BSSC-7';
let tMarks = 300;
let uni = "PMAS-UAAR";
let obtSum = 0;
let stdData = {
    name: "Shakaib Hassan",
    birthYear: 1998,
    std_class,
    obMarks: [80, 80, 70],
    obtSum,
    tMarks,
    uni,
    calPer: () => {
        for (var i = 0; i < stdData.obMarks.length; i++) {
            obtSum = obtSum + stdData.obMarks[i];
        }
        return Math.round((obtSum / stdData.tMarks) * 100).toString() + '%';
    },
    output: () => {
        return "Name :" + stdData.name + '\n' +
            "Class : " + stdData.std_class + '\n' +
            "Universty : " + stdData.uni + '\n' +
            "Age :" + (new Date().getFullYear() - stdData.birthYear) + '\n' +
            "Percentage :" + stdData.calPer() + '\n' +
            "Obtain Marks :" + obtSum + '\n' +
            "Total Marks :" + stdData.tMarks;


    }
}


// console.log(stdData.output());

// if I define data in this object regardless it is already declare so object ignores previous data  
let stdData2 = {
    name: "Shakaib Hassan",
    birthYear: 1998,
    std_class: "BSCS-8",
    obMarks: [80, 80, 70],
    tMarks,
    uni
}

// console.log(stdData2);

// what if I use regular functions in dynamic objects
// calculate the revenue of the park earned by enterance fees
let parkSystem = {
    enterenceFees: 50, //Rs
    totalAmmount: 0,
    personsInPark: 0,
    personsCame: 5,
    personsGone: 2,

    calRev: function() {
        this.totalAmmount = this.enterenceFees * this.personsCame;
        this.personsInPark = this.personsCame - this.personsGone;

        return "Total Revenue today is " + (this.totalAmmount).toString() + ' Rs' + " and total persons in the park are " + this.personsInPark;
    }


}
console.log(parkSystem.calRev());

let calAvg = {
    sum: 0,
    avg: (arr) => {
        for (let i of arr) {
            calAvg.sum = calAvg.sum + i;
        }
        return calAvg.sum / arr.length;
    }

}

exports.calAvg = calAvg;