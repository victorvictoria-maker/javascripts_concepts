//===template string===
myName = 'Vicky';
const mGreetings = `Hello ${myName}, how are you doing?`;
console.log(mGreetings);

function getAge(age) {
    return `This is my age - ${age}`;
}
const age = `${getAge(12)}`;
console.log(age);


//===arrow functions===
let userName = 'Popo';
// const sayHello = (userName) => {
//     return `Say Hello to ${userName}`;
// };
const sayHello = userName => `Say Hello to ${userName}`;
console.log(sayHello(userName));


//===rest operator===
//It allows dynamic passing of arguments. For example, the first function has 4 arguments while the second function has just two. num1 here would be the first argument of the function.
const mySum = (num1, ...args) => {
    let sum = num1;
    for (let index = 0; index < args.length; index++) {
        sum += args[index];    
    }
    console.log(sum);
}
mySum(23, 45, 67, 89);
mySum(1 ,2);


//===spread operator===
//the action below can be perfomed on objects
//used to replicate array
let myArr1 = [1, 2, 3, 4, 5];
let myArr2 = [...myArr1];
myArr1.push(6);
console.log(myArr1, myArr2);
//can be used to concatenate multiple arrays
let myArr3 = [7, 8, 9, 10];
let totalArr = [0, ...myArr1, ...myArr3];
console.log(totalArr);


//===destructuring===
const myFullName = "Victor Oreoluwa Victoria";
const nameArr = myFullName.split(' ');

let [lastName, ,firstName] = nameArr;
console.log(lastName, firstName);


//===array function: map()===
let arr1 = [1, 2, 3, 4, 5];
//passes two argument - item and index
let doubleArr = arr1.map((item, i) => {
    console.log(`Item at position ${i} => ${item}`);
    return item * 2;
});
console.log(doubleArr);


//array function: reduce()===
//it's result is called an accumulator. It accepts two arguments, the call back function and the default value of the accumulator
let reduceArr = [10, 20, 30, 40, 50];
let totalAns = reduceArr.reduce((acc, item) => {
    acc += item;
    return acc;
}, 0);
console.log(totalAns);



//array function: filter()===
//creates another array - decide which should be added to the array based on some condition true/false
let filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultArr = filterArr.filter(item => {
    return item % 2 === 0;
});
console.log(resultArr);


//array function: find()===
//returns the first element that matches the conditon
const negArr =[-4, -3, -2, -1, 0, 1, 2, 3, 4,];
const result = negArr.find(item => {
    return item >= 0;
});
console.log(result);


//array function: findIndex()===
//returns the index of the element that matches
const result2 = negArr.findIndex(item => {
    return item >= 0;
});
console.log(result2);

//===classes===
