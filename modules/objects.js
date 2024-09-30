// nested object
// can have functions within object

const Robinson = {
    firstName: "Robinson",
    age: 21,
    isFemale: false,
    dob: new Date(2000,1,28).toJSON(),
    toString: function(){
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true
}

// console.log(Robinson.address)
// console.log(Object.values(Robinson));
// console.log(Object.keys(Robinson));
// console.log(JSON.stringify(Robinson));

// //person.lastName = "Ahmed"
// Robinson["lastName"] = "Ahmed"

//to delete attribute
//delete person["delete"]
delete Robinson.deleteMe;

// To loop through attributes in person
// for(const p in Robinson){
//     console.log(p)
//     console.log(Robinson[p])
// }

// const firstName = person.firstName;
// const age = person.age;
// const balance = person.balance;
// =========================================
// =========================================
// instead of pulling out variables 1 by 1 
// use spread to pull out the attributes

const { firstName, 
        age, 
        balance, 
        //rename city to town
        firstName: sam
    } = Robinson;
console.log("test WATER:")
console.log(sam)
// To combine objects into 1 object
const address = {
    city: "London",
    postCode: "SW9"
}


// Method 1 (not recommended) : 
// const person = {
//     firstName: Robinson.firstName,
//     address: {
//         city: address.city,
//         postCode: address.postCode
//     }
// }

// Method 2 :
const person = {
 ...Robinson,
 ...address
};
console.log("method 2: ")
console.log(person)