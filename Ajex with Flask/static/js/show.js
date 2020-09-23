loadData = () => {
    alert("I am load data ");
}

var countries = []

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://api.covid19api.com/summary', true);
    xhr.open('GET', '/studentInfo', true);


    // What to do when response is ready
    xhr.onload = function() {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            for (let i of obj)
                document.getElementById("demo").innerHTML += i.name + "<br>" + i.regNo + "<br>" + i.Universty + "<br>";
            //     for (const element of obj.Countries) { 
            //         countries.push(element.Country);

            //     }
            //     console.log(countries)
            // } else {
            console.log("Some error occured")
        }
    }

    // send the request
    try {
        xhr.send();
        console.log("We are done fetching employees!");
    } catch (err) {
        console.log("Some error occured")
    }
}


console.log("I am in show file");