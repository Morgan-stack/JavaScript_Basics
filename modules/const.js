// const 
// best to use for declaring vartiables
// if need reassignment, only use 'let' keyword
const brand = "sam";

//cannot override the brand variable and the value cannot change

const brandObject = {};
//allow
brandObject["brand"] = brand;
console.log(brandObject)
//mutation
delete brandObject.brand;


// const way of creating function
const hello = function() {

}

hello();