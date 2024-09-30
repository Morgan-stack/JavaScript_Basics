// Arrays
var firstName = "Alex"
var names  = ["Alex","sam","joe"]
console.log(" Index 0 : " + names[0]);
names.length;

const numbers = [1,2,3,4,5];

//method 1
numbers.forEach(function(number){
    console.log(number)
})

//method 2
numbers.forEach(number=>
console.log(number))

// To add element,
numbers.push(60)

// To access element's index,
const indexOfFive = numbers.indexOf(5)

// To delete element,
numbers.splice(indexOfFive,1)


