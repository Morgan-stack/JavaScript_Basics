// Functions

function addNumbers(number1,number2) {

    var addition = number1 + number2;
    console.log(addition);

    return addition;
}

var result1 = addNumbers(1,2);

//better way of creating function with const keyword

const getBrand = function(brand) {

    console.log(brand);

    return {
        brand: brand,
        website: `www.${brand}.com`
    };
}

const brand = getBrand("Nike")
console.log(brand)
console.log(JSON.stringify(brand,null,0))

// convetional way of creating function with const keyword
// due to 1 parameter, can remove the bracket on brand 
// can remove return statement also
// same purpose to function getBrand above
const getBrand2 = brand => ({
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
})

console.log(getBrand2('Nike'))

// bracket is needed when returning objects only
const addnumbers = (num1,num2) => num1 + num2;

console.log(addnumbers(1,2))

// with curly bracket, can include logics in the function
const calculate = (num1,num2,sign) => {
    switch(sign){
        case '+':
            return a + b;
        case '-':
            return a - b;
        default:
            //throw error
    }
    
};

// Function Default Parameter
// will return Hello if no parameter was parsed inside

const getBrand3 = (brand = "Hello")  =>({
    brand: brand,
    website: `www.${brand}.com`
    }
)

console.log(getBrand3())

