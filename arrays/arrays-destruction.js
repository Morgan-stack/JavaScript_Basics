// arrays destructing

const names  = [
    "Alex",
    "sam",
    "joe",
    "shaowei",
    "sakura"
]
//method 1 of array destructing

const alex = names[0];
const sam = names[1];

//method 2 of array destructing (accessing by index)
const[james,mariam,jamal,...rest] = names;
//rest will show the remaining elements in an array
console.log(rest)
