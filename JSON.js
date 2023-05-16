var myObj = {
    "name": "Vicky",
    "age": 23,
    "female": true,
    score: {
        "math": 100,
        "science": 100
    }
};

console.log(myObj);

var stringifyMyObj = JSON.stringify(myObj);
console.log(myObj);

//you can only JSON.parse an object that has been stringified.
var parseMyObj = JSON.parse(stringifyMyObj);
console.log(myObj); 
