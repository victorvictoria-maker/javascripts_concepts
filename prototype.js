//create a constructor
function Person(pName, pYear, pJob) {
    this.name = pName;
    this.year = pYear;
    this.job = pJob;

    //the code below can be used as a prototype, just outside this constructor.
    // this.calculateAge = function () {
    //     console.log("I'm getting older");
    // }
}
Person.prototype.calculateAge = function() {
    console.log("I'm getting older.");
}
Person.prototype.lastName = "Victor";


let vicky = new Person("Vicky", 23, "Senior Engineer");
console.log(vicky);
console.log(vicky.calculateAge());
console.log(vicky.lastName);

let peter = new Person("Peter", 19, "Music Director");
console.log(peter);
console.log(peter.calculateAge());
console.log(peter.lastName);