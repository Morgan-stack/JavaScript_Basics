// Loops

// For Loop

var names  = ["Alex","sam","joe"]

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (const n of names) {
    console.log(n);
}

console.log();
console.log("forEach")

names.forEach(function(name) {
    console.log(name)
})

// While Loop

var number = 0;

while(number < 5){
    console.log(number);
    number = number + 1;
}