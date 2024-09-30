// js converts variables automatically with type coercion 
// to force comparison
console.log(0 == false)
console.log(0 == true)
console.log("0" == false)
console.log("0" == true)
console.log("1" == true)

// === no type coercion

console.log(0 === false)
console.log(0 === true)
console.log("0" === false)
console.log("0" === true)
console.log("1" === true)
